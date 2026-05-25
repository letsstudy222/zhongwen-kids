'use client';

import { Volume2 } from 'lucide-react';
import { useAudio } from '@/hooks/useAudio';
import { cn } from '@/utils/cn';

interface AudioButtonProps {
  text: string;
  className?: string;
  label?: string;
}

/**
 * Nút phát âm thanh – nhấn để nghe phát âm chữ Hán.
 * Dùng Web Speech API; dự án thật nên dùng audio chuẩn của giáo viên bản ngữ.
 */
export function AudioButton({ text, className, label = 'Nghe phát âm' }: AudioButtonProps) {
  const { play } = useAudio();

  return (
    <button
      onClick={() => play(text)}
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-500 text-white shadow-cute hover:bg-secondary-600 active:translate-y-0.5 active:shadow-none transition-all',
        className
      )}
    >
      <Volume2 className="w-5 h-5" />
    </button>
  );
}
