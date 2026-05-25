'use client';

import { useState } from 'react';
import { AudioButton } from '@/components/ui/AudioButton';
import type { VocabWord } from '@/types';
import { cn } from '@/utils/cn';

interface FlashcardProps {
  word: VocabWord;
  className?: string;
}

/**
 * Thẻ Flashcard có thể lật để xem nghĩa.
 * Mặt trước: chữ Hán + emoji minh hoạ.
 * Mặt sau: pinyin + nghĩa tiếng Việt + ví dụ + nút phát âm (có cả phát chậm).
 */
export function Flashcard({ word, className }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn('w-full h-64 perspective-1000 cursor-pointer', className)}
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)'
        }}
      >
        {/* Front - mặt chính */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-50 via-blush-100 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-100 dark:border-primary-800/50 shadow-soft flex flex-col items-center justify-center p-6"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-6xl mb-2">{word.imageEmoji ?? '✨'}</div>
          <p className="font-chinese text-5xl font-bold text-primary-700 dark:text-primary-200">
            {word.hanzi}
          </p>
          <p className="mt-2 text-xs text-slate-500 uppercase tracking-wider font-bold">
            Chạm để lật ✨
          </p>
        </div>

        {/* Back - mặt nghĩa */}
        <div
          className="absolute inset-0 rounded-3xl bg-white dark:bg-slate-800 border border-secondary-100 dark:border-secondary-800/50 shadow-soft-secondary flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="font-chinese text-3xl font-bold mb-1 text-slate-700 dark:text-slate-100">
            {word.hanzi}
          </p>
          <p className="text-secondary-600 dark:text-secondary-300 font-bold text-lg italic">
            {word.pinyin}
          </p>
          <p className="mt-2 text-xl font-bold text-slate-800 dark:text-slate-100">
            {word.meaningVi}
          </p>
          {word.example && (
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 italic text-center">
              &ldquo;{word.example}&rdquo;
            </p>
          )}
          <div className="mt-3" onClick={(e) => e.stopPropagation()}>
            <AudioButton text={word.hanzi} showSlow />
          </div>
        </div>
      </div>
    </div>
  );
}
