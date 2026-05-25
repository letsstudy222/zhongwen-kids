'use client';

import { useState } from 'react';
import { Volume2, Turtle } from 'lucide-react';
import { useAudio } from '@/hooks/useAudio';
import { cn } from '@/utils/cn';

interface AudioButtonProps {
  text: string;
  className?: string;
  label?: string;
  /** Có hiển thị nút phát chậm (con rùa) đi kèm không */
  showSlow?: boolean;
}

/**
 * Nút phát âm thanh – nhấn để nghe phát âm chữ Hán.
 * Có thêm nút "rùa" để phát chậm hơn, giúp bé luyện nghe từng âm tiết.
 */
export function AudioButton({
  text,
  className,
  label = 'Nghe phát âm',
  showSlow = false
}: AudioButtonProps) {
  const { play, playSlow } = useAudio();
  const [pulsing, setPulsing] = useState(false);

  const handlePlay = (slow = false) => {
    setPulsing(true);
    setTimeout(() => setPulsing(false), 600);
    if (slow) playSlow(text);
    else play(text);
  };

  return (
    <span className={cn('inline-flex items-center gap-1.5', className)}>
      <button
        onClick={() => handlePlay(false)}
        aria-label={label}
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-500 text-white shadow-soft hover:bg-secondary-600 active:translate-y-0.5 active:shadow-none transition-all',
          pulsing && 'animate-pop-in'
        )}
      >
        <Volume2 className="w-5 h-5" />
      </button>
      {showSlow && (
        <button
          onClick={() => handlePlay(true)}
          aria-label="Nghe chậm"
          title="Nghe chậm"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-success-100 text-secondary-700 border border-success-200 hover:bg-success-200 active:translate-y-0.5 transition-all"
        >
          <Turtle className="w-5 h-5" />
        </button>
      )}
    </span>
  );
}
