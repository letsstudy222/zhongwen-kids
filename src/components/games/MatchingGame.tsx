'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { AudioButton } from '@/components/ui/AudioButton';
import { vocabulary } from '@/data/vocabulary';
import { cn } from '@/utils/cn';

interface Pair {
  id: string;
  hanzi: string;
  meaningVi: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Trò chơi ghép từ: chọn 1 ô chữ Hán + 1 ô nghĩa tiếng Việt.
 * Nếu khớp thì đánh dấu xanh, sai thì rung và bỏ chọn.
 */
export function MatchingGame() {
  const [round, setRound] = useState(0);

  const pairs: Pair[] = useMemo(() => {
    // Lấy 6 từ YCT 1 ngẫu nhiên
    const yct1 = vocabulary.filter((v) => v.yctLevel === 1);
    return shuffle(yct1)
      .slice(0, 6)
      .map((v) => ({
        id: v.id,
        hanzi: v.hanzi,
        meaningVi: v.meaningVi
      }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round]);

  const hanziTiles = useMemo(
    () => shuffle(pairs.map((p) => ({ kind: 'hanzi' as const, ...p }))),
    [pairs]
  );
  const meaningTiles = useMemo(
    () => shuffle(pairs.map((p) => ({ kind: 'meaning' as const, ...p }))),
    [pairs]
  );

  const [selectedHanzi, setSelectedHanzi] = useState<string | null>(null);
  const [selectedMeaning, setSelectedMeaning] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<Set<string>>(new Set());

  const handlePick = (kind: 'hanzi' | 'meaning', id: string) => {
    if (matched.has(id)) return;
    const nextHanzi = kind === 'hanzi' ? id : selectedHanzi;
    const nextMeaning = kind === 'meaning' ? id : selectedMeaning;
    if (kind === 'hanzi') setSelectedHanzi(id);
    if (kind === 'meaning') setSelectedMeaning(id);

    if (nextHanzi && nextMeaning) {
      if (nextHanzi === nextMeaning) {
        const newMatched = new Set(matched);
        newMatched.add(nextHanzi);
        setMatched(newMatched);
        setSelectedHanzi(null);
        setSelectedMeaning(null);
      } else {
        const wrongSet = new Set([nextHanzi, nextMeaning]);
        setWrong(wrongSet);
        setTimeout(() => {
          setWrong(new Set());
          setSelectedHanzi(null);
          setSelectedMeaning(null);
        }, 700);
      }
    }
  };

  const done = matched.size === pairs.length;

  return (
    <Card className="!p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="font-display text-2xl font-extrabold">
            🧩 Ghép chữ Hán với nghĩa
          </h3>
          <p className="text-sm text-slate-500">
            Chạm 1 ô bên trái và 1 ô bên phải để ghép cặp.
          </p>
        </div>
        <Pill color={done ? 'success' : 'accent'}>
          {matched.size} / {pairs.length} cặp
        </Pill>
      </div>

      {done ? (
        <div className="text-center py-10">
          <div className="text-6xl mb-3 animate-bounce-slow">🎉</div>
          <p className="font-display text-2xl font-extrabold mb-3">
            Tuyệt vời! Bé đã ghép xong tất cả!
          </p>
          <Button onClick={() => {
            setMatched(new Set());
            setSelectedHanzi(null);
            setSelectedMeaning(null);
            setRound((r) => r + 1);
          }}>
            🔁 Chơi lại với từ mới
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {/* Cột Hán tự */}
          <div className="space-y-3">
            {hanziTiles.map((t) => {
              const isSelected = selectedHanzi === t.id;
              const isMatched = matched.has(t.id);
              const isWrong = wrong.has(t.id);
              return (
                <button
                  key={t.id}
                  onClick={() => handlePick('hanzi', t.id)}
                  disabled={isMatched}
                  className={cn(
                    'w-full rounded-2xl py-5 px-3 border-2 transition-all font-chinese text-3xl font-bold shadow-cute',
                    isMatched && 'bg-emerald-100 border-emerald-300 text-emerald-700 opacity-60',
                    isSelected && !isMatched && 'bg-primary-100 border-primary-400 text-primary-700 scale-105',
                    !isMatched && !isSelected && 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-primary-300',
                    isWrong && 'animate-shake bg-red-100 border-red-300'
                  )}
                >
                  {t.hanzi}
                </button>
              );
            })}
          </div>

          {/* Cột nghĩa */}
          <div className="space-y-3">
            {meaningTiles.map((t) => {
              const isSelected = selectedMeaning === t.id;
              const isMatched = matched.has(t.id);
              const isWrong = wrong.has(t.id);
              return (
                <button
                  key={t.id}
                  onClick={() => handlePick('meaning', t.id)}
                  disabled={isMatched}
                  className={cn(
                    'w-full rounded-2xl py-5 px-3 border-2 transition-all font-display text-lg font-bold shadow-cute',
                    isMatched && 'bg-emerald-100 border-emerald-300 text-emerald-700 opacity-60',
                    isSelected && !isMatched && 'bg-secondary-100 border-secondary-400 text-secondary-700 scale-105',
                    !isMatched && !isSelected && 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-secondary-300',
                    isWrong && 'animate-shake bg-red-100 border-red-300'
                  )}
                >
                  {t.meaningVi}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Audio hỗ trợ */}
      {!done && (
        <div className="mt-5 flex items-center justify-center gap-2">
          <p className="text-sm text-slate-500">Cần trợ giúp? Nghe phát âm:</p>
          {pairs.slice(0, 3).map((p) => (
            <span key={p.id} className="inline-flex items-center gap-1">
              <span className="font-chinese text-lg">{p.hanzi}</span>
              <AudioButton text={p.hanzi} />
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}
