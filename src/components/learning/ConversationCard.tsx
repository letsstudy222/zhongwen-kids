'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Volume2 } from 'lucide-react';
import { useAudio } from '@/hooks/useAudio';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import type { Conversation, ConversationLine } from '@/types';

interface ConversationCardProps {
  conversation: Conversation;
}

/** Hiển thị một câu trong hội thoại với nút mở rộng xem breakdown */
function DialogLine({ line, autoPlay }: { line: ConversationLine; autoPlay?: boolean }) {
  const { play } = useAudio();
  const [showBreakdown, setShowBreakdown] = useState(false);
  const isA = line.speaker === 'A';

  return (
    <div className={`flex gap-3 ${isA ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Avatar */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0 shadow-soft ${
          isA
            ? 'bg-primary-100 dark:bg-primary-900/40'
            : 'bg-secondary-100 dark:bg-secondary-900/40'
        }`}
      >
        {isA ? '👦' : '👧'}
      </div>

      <div className={`flex-1 max-w-[85%] ${isA ? '' : 'flex flex-col items-end'}`}>
        {/* Bubble */}
        <div
          className={`inline-block p-3 rounded-2xl ${
            isA
              ? 'bg-primary-50 dark:bg-primary-900/20 rounded-tl-sm'
              : 'bg-secondary-50 dark:bg-secondary-900/20 rounded-tr-sm'
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <p className="font-chinese text-lg font-bold leading-tight">{line.hanzi}</p>
            <button
              onClick={() => play(line.hanzi)}
              className="w-7 h-7 rounded-full bg-white/70 dark:bg-slate-700/70 flex items-center justify-center hover:bg-white dark:hover:bg-slate-600 transition-colors flex-shrink-0"
              title="Nghe phát âm"
            >
              <Volume2 className="w-3.5 h-3.5 text-secondary-600 dark:text-secondary-300" />
            </button>
          </div>
          <p className="text-xs italic text-secondary-600 dark:text-secondary-400 font-medium">
            {line.pinyin}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">{line.vi}</p>
        </div>

        {/* Nút phân tích từng từ */}
        {line.breakdown && line.breakdown.length > 0 && (
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className={`mt-1.5 flex items-center gap-1 text-xs font-bold transition-colors ${
              isA ? '' : 'flex-row-reverse'
            } ${
              showBreakdown
                ? 'text-accent-600 dark:text-accent-300'
                : 'text-slate-400 hover:text-accent-500'
            }`}
          >
            {showBreakdown ? (
              <><ChevronUp className="w-3 h-3" /> Ẩn phân tích</>
            ) : (
              <><ChevronDown className="w-3 h-3" /> Phân tích từng từ 🔍</>
            )}
          </button>
        )}

        {/* Bảng breakdown */}
        {showBreakdown && line.breakdown && (
          <div className={`mt-2 w-full max-w-sm ${isA ? '' : 'text-left'}`}>
            <div className="rounded-2xl border border-accent-100 dark:border-accent-900/40 bg-accent-50 dark:bg-accent-900/10 overflow-hidden">
              <div className="px-3 py-2 bg-accent-100 dark:bg-accent-900/30 flex items-center gap-1">
                <span className="text-xs font-bold text-accent-700 dark:text-accent-300">
                  🔍 Phân tích câu
                </span>
              </div>
              <div className="divide-y divide-accent-100 dark:divide-accent-900/30">
                {line.breakdown.map((item, i) => (
                  <div key={i} className="px-3 py-2 flex items-start gap-3">
                    <span className="font-chinese text-xl font-bold text-primary-700 dark:text-primary-200 min-w-[2rem] text-center">
                      {item.hanzi}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs italic text-secondary-600 dark:text-secondary-400 font-medium mr-2">
                        {item.pinyin}
                      </span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                        = {item.vi}
                      </span>
                      {item.note && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 italic">
                          💡 {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ConversationCard({ conversation }: ConversationCardProps) {
  const { play } = useAudio();
  const [playingAll, setPlayingAll] = useState(false);

  /** Phát tuần tự tất cả câu trong hội thoại */
  const playAll = async () => {
    if (playingAll) return;
    setPlayingAll(true);
    for (const line of conversation.lines) {
      await new Promise<void>((resolve) => {
        play(line.hanzi);
        // Ước lượng thời gian dựa trên độ dài câu
        setTimeout(resolve, 800 + line.hanzi.length * 350);
      });
    }
    setPlayingAll(false);
  };

  return (
    <Card>
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-1">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-display text-lg font-extrabold">{conversation.title}</h3>
            <Pill color="primary">YCT {conversation.yctLevel}</Pill>
          </div>
          {conversation.situation && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic flex items-center gap-1">
              📍 {conversation.situation}
            </p>
          )}
        </div>

        {/* Phát tất cả */}
        <button
          onClick={playAll}
          disabled={playingAll}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0 transition-all ${
            playingAll
              ? 'bg-secondary-200 text-secondary-400 cursor-not-allowed'
              : 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-soft hover:-translate-y-0.5'
          }`}
          title="Nghe toàn bộ hội thoại"
        >
          {playingAll ? (
            <><span className="animate-pulse">▶</span> Đang phát...</>
          ) : (
            <><Volume2 className="w-3.5 h-3.5" /> Nghe tất cả</>
          )}
        </button>
      </div>

      {/* Hướng dẫn */}
      <p className="text-xs text-slate-400 mb-4 flex items-center gap-1">
        <span>💬</span> Bấm <strong>🔍 Phân tích</strong> dưới mỗi câu để hiểu nghĩa từng từ
      </p>

      {/* Các câu hội thoại */}
      <div className="space-y-4">
        {conversation.lines.map((line, i) => (
          <DialogLine key={i} line={line} />
        ))}
      </div>
    </Card>
  );
}
