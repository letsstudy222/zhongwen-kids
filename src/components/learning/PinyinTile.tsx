'use client';

import { AudioButton } from '@/components/ui/AudioButton';
import { getToneColor } from '@/utils/pinyin';
import type { PinyinSound } from '@/types';
import { cn } from '@/utils/cn';

interface PinyinTileProps {
  sound: PinyinSound;
}

export function PinyinTile({ sound }: PinyinTileProps) {
  const toneColor = sound.toneNumber ? getToneColor(sound.toneNumber) : 'text-primary-600';

  return (
    <div className="card-cute hover:-translate-y-1 transition-transform group">
      <div className="flex items-start justify-between mb-2">
        <p className={cn('font-display text-4xl font-extrabold', toneColor)}>
          {sound.symbol}
        </p>
        {sound.toneNumber && (
          <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700">
            Thanh {sound.toneNumber}
          </span>
        )}
      </div>
      {sound.exampleHanzi && (
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="font-chinese text-xl">{sound.exampleHanzi}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {sound.exampleMeaning}
            </p>
          </div>
          <AudioButton text={sound.exampleHanzi} className="w-8 h-8" />
        </div>
      )}
    </div>
  );
}
