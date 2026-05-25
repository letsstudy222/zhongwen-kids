'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { AudioButton } from '@/components/ui/AudioButton';
import type { VocabWord } from '@/types';
import { cn } from '@/utils/cn';

// Dynamic load để không block SSR và tránh lỗi hanzi-writer trên server
const StrokeOrderWriter = dynamic(
  () => import('@/components/learning/StrokeOrderWriter').then((m) => m.StrokeOrderWriter),
  {
    ssr: false,
    loading: () => (
      <div className="w-36 h-36 rounded-2xl bg-cream-50 dark:bg-slate-700/40 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
      </div>
    )
  }
);

interface FlashcardProps {
  word: VocabWord;
  className?: string;
}

type Side = 'front' | 'meaning' | 'stroke';

/**
 * Thẻ Flashcard 3 mặt:
 * 1. Front  - chữ Hán + emoji (nhấn để lật)
 * 2. Meaning - pinyin + nghĩa + audio (nhấn để xem nét)
 * 3. Stroke  - animation thứ tự viết (nhấn để về đầu)
 */
export function Flashcard({ word, className }: FlashcardProps) {
  const [side, setSide] = useState<Side>('front');

  const next = () => {
    if (side === 'front') setSide('meaning');
    else if (side === 'meaning') setSide('stroke');
    else setSide('front');
  };

  const hintMap: Record<Side, string> = {
    front: 'Chạm để xem nghĩa ✨',
    meaning: 'Chạm để xem cách viết ✏️',
    stroke: 'Chạm để quay lại 🔄'
  };

  return (
    <div
      className={cn(
        'w-full h-64 cursor-pointer select-none',
        className
      )}
      onClick={next}
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform:
            side === 'front'
              ? 'rotateY(0deg)'
              : side === 'meaning'
              ? 'rotateY(180deg)'
              : 'rotateY(360deg)'
        }}
      >
        {/* ── MẶT 1: Chữ Hán ── */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-50 via-blush-100 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-100 dark:border-primary-800/50 shadow-soft flex flex-col items-center justify-center p-6"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-6xl mb-2">{word.imageEmoji ?? '✨'}</div>
          <p className="font-chinese text-5xl font-bold text-primary-700 dark:text-primary-200">
            {word.hanzi}
          </p>
          <p className="mt-3 text-xs text-slate-400 uppercase tracking-wider font-bold">
            {hintMap.front}
          </p>
        </div>

        {/* ── MẶT 2: Nghĩa & Audio ── */}
        <div
          className="absolute inset-0 rounded-3xl bg-white dark:bg-slate-800 border border-secondary-100 dark:border-secondary-800/50 shadow-soft-secondary flex flex-col items-center justify-center p-5 gap-1"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="font-chinese text-3xl font-bold text-slate-700 dark:text-slate-100">
            {word.hanzi}
          </p>
          <p className="text-secondary-600 dark:text-secondary-300 font-bold text-lg italic">
            {word.pinyin}
          </p>
          <p className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {word.meaningVi}
          </p>
          {word.example && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center mt-1 leading-relaxed">
              &ldquo;{word.example}&rdquo;
              {word.exampleVi && (
                <span className="block not-italic text-slate-400 text-xs">
                  {word.exampleVi}
                </span>
              )}
            </p>
          )}
          <div className="mt-2" onClick={(e) => e.stopPropagation()}>
            {/* Truyền chữ Hán — TTS tự đọc đúng thanh điệu */}
            <AudioButton text={word.hanzi} showSlow />
          </div>
          <p className="mt-1 text-xs text-slate-400 uppercase tracking-wider font-bold">
            {hintMap.meaning}
          </p>
        </div>

        {/* ── MẶT 3: Thứ tự nét viết ── */}
        <div
          className="absolute inset-0 rounded-3xl bg-cream-50 dark:bg-slate-800/80 border border-accent-100 dark:border-accent-900/50 shadow-soft flex flex-col items-center justify-center p-4 gap-2"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(360deg)'
          }}
        >
          <p className="text-xs font-bold text-accent-600 dark:text-accent-300 uppercase tracking-wider">
            ✏️ Thứ tự viết
          </p>
          {/* Chặn click ngoài để controls không trigger flip */}
          <div onClick={(e) => e.stopPropagation()}>
            <StrokeOrderWriter hanzi={word.hanzi} size={140} animate quiz />
          </div>
          <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">
            {hintMap.stroke}
          </p>
        </div>
      </div>
    </div>
  );
}
