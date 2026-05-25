import { cn } from '@/utils/cn';

interface MascotProps {
  className?: string;
  /** Tâm trạng linh vật: vui, ngạc nhiên, suy nghĩ, ăn mừng */
  mood?: 'happy' | 'wave' | 'think' | 'celebrate';
}

/**
 * Linh vật gấu trúc 熊猫 – nhận diện thương hiệu Zhongwen Kids.
 * SVG thuần để load nhanh, dễ tùy biến màu sắc.
 */
export function Mascot({ className, mood = 'happy' }: MascotProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn('w-32 h-32', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="100" cy="135" rx="55" ry="50" fill="#fff" stroke="#1f2937" strokeWidth="3" />

      {/* Arms (vẫy tay nếu mood=wave) */}
      {mood === 'wave' ? (
        <ellipse cx="150" cy="100" rx="14" ry="22" fill="#1f2937" transform="rotate(30 150 100)" />
      ) : (
        <ellipse cx="148" cy="135" rx="14" ry="22" fill="#1f2937" />
      )}
      <ellipse cx="52" cy="135" rx="14" ry="22" fill="#1f2937" />

      {/* Legs */}
      <ellipse cx="78" cy="180" rx="16" ry="10" fill="#1f2937" />
      <ellipse cx="122" cy="180" rx="16" ry="10" fill="#1f2937" />

      {/* Head */}
      <circle cx="100" cy="75" r="50" fill="#fff" stroke="#1f2937" strokeWidth="3" />

      {/* Ears */}
      <circle cx="62" cy="38" r="14" fill="#1f2937" />
      <circle cx="138" cy="38" r="14" fill="#1f2937" />

      {/* Eye patches */}
      <ellipse cx="80" cy="72" rx="13" ry="16" fill="#1f2937" transform="rotate(-10 80 72)" />
      <ellipse cx="120" cy="72" rx="13" ry="16" fill="#1f2937" transform="rotate(10 120 72)" />

      {/* Eyes */}
      <circle cx="82" cy="74" r="4" fill="#fff" />
      <circle cx="118" cy="74" r="4" fill="#fff" />
      <circle cx="83" cy="74" r="2" fill="#1f2937" />
      <circle cx="119" cy="74" r="2" fill="#1f2937" />

      {/* Cheeks */}
      <circle cx="65" cy="92" r="5" fill="#ff8fae" opacity="0.7" />
      <circle cx="135" cy="92" r="5" fill="#ff8fae" opacity="0.7" />

      {/* Nose */}
      <ellipse cx="100" cy="90" rx="4" ry="3" fill="#1f2937" />

      {/* Mouth based on mood */}
      {mood === 'happy' && (
        <path d="M 90 100 Q 100 108 110 100" stroke="#1f2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      )}
      {mood === 'wave' && (
        <path d="M 88 100 Q 100 112 112 100" stroke="#1f2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      )}
      {mood === 'think' && (
        <circle cx="100" cy="102" r="3" fill="none" stroke="#1f2937" strokeWidth="2" />
      )}
      {mood === 'celebrate' && (
        <ellipse cx="100" cy="103" rx="6" ry="5" fill="#1f2937" />
      )}
    </svg>
  );
}
