'use client';

import dynamic from 'next/dynamic';
import { AudioButton } from '@/components/ui/AudioButton';
import { Pill } from '@/components/ui/Pill';
import { Card } from '@/components/ui/Card';
import type { FirstCharacter } from '@/data/foundation';

// Dynamic import - chỉ load trên client, không ảnh hưởng SSR
const StrokeOrderWriter = dynamic(
  () => import('@/components/learning/StrokeOrderWriter').then((m) => m.StrokeOrderWriter),
  {
    ssr: false,
    loading: () => (
      <div className="w-24 h-24 rounded-2xl bg-cream-100 dark:bg-slate-700/40 flex items-center justify-center">
        <div className="w-6 h-6 border-3 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
      </div>
    )
  }
);

interface Props {
  characters: FirstCharacter[];
}

export function FirstCharactersSection({ characters }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {characters.map((char, idx) => (
        <Card key={char.hanzi} className="!p-5">
          <div className="flex items-start gap-4">
            <div className="text-center flex-shrink-0">
              <div onClick={(e) => e.stopPropagation()}>
                <StrokeOrderWriter hanzi={char.hanzi} size={90} animate quiz />
              </div>
              <AudioButton text={char.hanzi} className="mt-1" showSlow />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <p className="text-xs font-bold text-primary-500">Chữ {idx + 1}</p>
                <Pill color="slate">{char.strokes} nét</Pill>
              </div>
              <p className="font-mono text-secondary-600 dark:text-secondary-300 font-bold italic">
                {char.pinyin}
              </p>
              <p className="font-display font-extrabold text-lg">{char.meaningVi}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                <strong className="text-primary-600">💭 Câu chuyện:</strong> {char.story}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

// ── Tone demo section ──
interface ToneItem {
  num: number;
  mark: string;
  hanzi: string;
  meaning: string;
  textClass: string;
  desc: string;
  visual: string;
}

const TONES: ToneItem[] = [
  { num: 1, mark: 'mā', hanzi: '妈', meaning: 'mẹ',        textClass: 'text-red-400',    desc: 'Giọng cao bằng ━',     visual: '━'   },
  { num: 2, mark: 'má', hanzi: '麻', meaning: 'cây lanh',   textClass: 'text-amber-500',  desc: 'Giọng đi lên ↗',       visual: '↗'   },
  { num: 3, mark: 'mǎ', hanzi: '马', meaning: 'ngựa',       textClass: 'text-teal-500',   desc: 'Xuống rồi lên ↙↗',     visual: '↙↗'  },
  { num: 4, mark: 'mà', hanzi: '骂', meaning: 'mắng',       textClass: 'text-indigo-400', desc: 'Giọng đi xuống mạnh ↘', visual: '↘'  }
];

export function ToneSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {TONES.map((tone) => (
        <div
          key={tone.num}
          className="flex items-center gap-3 p-4 rounded-2xl bg-cream-50 dark:bg-slate-700/30 border border-cream-100 dark:border-slate-700"
        >
          <div className={`text-2xl font-bold w-10 text-center ${tone.textClass}`}>
            {tone.visual}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`font-bold text-lg ${tone.textClass}`}>Thanh {tone.num}</span>
              <span className={`font-mono text-xl ${tone.textClass}`}>{tone.mark}</span>
              <span className="font-chinese text-2xl">{tone.hanzi}</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{tone.desc}</p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">= {tone.meaning}</p>
          </div>
          {/* Truyền chữ Hán thật để TTS đọc đúng thanh điệu */}
          <AudioButton text={tone.hanzi} showSlow />
        </div>
      ))}
    </div>
  );
}
