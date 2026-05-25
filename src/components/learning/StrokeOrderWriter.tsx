'use client';

import { useEffect, useRef, useState } from 'react';

interface StrokeOrderWriterProps {
  hanzi: string;
  size?: number;
  /** animate: tự động chạy animation thứ tự nét */
  animate?: boolean;
  /** quiz: chế độ bé tự vẽ lên màn hình */
  quiz?: boolean;
  className?: string;
}

/**
 * Component hiển thị và animate thứ tự viết nét chữ Hán.
 * Dùng thư viện hanzi-writer (lazy-loaded).
 *
 * - animate=true: hiện animation nét viết lần lượt
 * - quiz=true: bé tự vẽ, có highlight nét đúng/sai
 * - Nút Play để xem lại, nút Quiz để luyện tập
 */
export function StrokeOrderWriter({
  hanzi,
  size = 150,
  animate = false,
  quiz = false,
  className = ''
}: StrokeOrderWriterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<any>(null);
  const [mode, setMode] = useState<'idle' | 'animating' | 'quiz'>(
    animate ? 'animating' : 'idle'
  );
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;

    const initWriter = async () => {
      try {
        // Dynamic import để không ảnh hưởng SSR
        const HanziWriter = (await import('hanzi-writer')).default;

        if (cancelled || !containerRef.current) return;

        // Clear container
        containerRef.current.innerHTML = '';

        const writer = HanziWriter.create(containerRef.current, hanzi, {
          width: size,
          height: size,
          padding: 8,
          strokeColor: '#3ba294',          // secondary-500
          outlineColor: '#e2e8f0',
          drawingColor: '#ed6346',         // primary-500
          drawingWidth: 4,
          strokeAnimationSpeed: 1,
          delayBetweenStrokes: 200,
          showOutline: true,
          showCharacter: false,            // ẩn char mờ để thấy animation rõ hơn
          strokeFadeDuration: 400,
        });

        writerRef.current = writer;

        if (!cancelled) {
          setLoaded(true);
          if (animate) {
            writer.animateCharacter();
            setMode('animating');
          }
        }
      } catch (err) {
        if (!cancelled) {
          console.warn('hanzi-writer error:', err);
          setError(true);
        }
      }
    };

    initWriter();

    return () => {
      cancelled = true;
      if (writerRef.current) {
        try { writerRef.current.hideCharacter(); } catch {}
      }
    };
  }, [hanzi, size, animate]);

  const handleAnimate = () => {
    if (!writerRef.current) return;
    writerRef.current.cancelQuiz?.();
    setMode('animating');
    writerRef.current.animateCharacter({
      onComplete: () => setMode('idle')
    });
  };

  const handleQuiz = () => {
    if (!writerRef.current) return;
    setMode('quiz');
    writerRef.current.quiz({
      onMistake: () => {},
      onCorrectStroke: () => {},
      onComplete: () => setMode('idle')
    });
  };

  // Fallback khi không load được (chữ không có trong database)
  if (error) {
    return (
      <div className={`flex flex-col items-center gap-1 ${className}`}>
        <div
          className="flex items-center justify-center rounded-2xl bg-cream-100 dark:bg-slate-700/40 border border-cream-200 dark:border-slate-600"
          style={{ width: size, height: size }}
        >
          <span className="font-chinese text-6xl text-primary-600 dark:text-primary-200">
            {hanzi}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* Canvas container */}
      <div
        className="relative rounded-2xl bg-white dark:bg-slate-800 border-2 border-cream-200 dark:border-slate-600 shadow-soft overflow-hidden"
        style={{ width: size, height: size }}
      >
        {/* Grid background như giấy ô mễ */}
        <svg
          className="absolute inset-0 opacity-20 pointer-events-none"
          width={size}
          height={size}
        >
          {/* Dấu thập ở giữa */}
          <line x1={size / 2} y1={0} x2={size / 2} y2={size} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
          <line x1={0} y1={size / 2} x2={size} y2={size / 2} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
          {/* Đường chéo */}
          <line x1={0} y1={0} x2={size} y2={size} stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="3 6" />
          <line x1={size} y1={0} x2={0} y2={size} stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="3 6" />
        </svg>

        {/* Loading spinner */}
        {!loaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
          </div>
        )}

        {/* hanzi-writer renders vào đây */}
        <div ref={containerRef} className="relative z-10" />

        {/* Mode badge */}
        {mode === 'quiz' && (
          <div className="absolute top-2 right-2 bg-accent-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            Vẽ thử!
          </div>
        )}
        {mode === 'animating' && (
          <div className="absolute top-2 right-2 bg-secondary-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
            Xem nét...
          </div>
        )}
      </div>

      {/* Nút điều khiển */}
      {loaded && (
        <div className="flex gap-2">
          <button
            onClick={handleAnimate}
            title="Xem thứ tự viết"
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-secondary-100 hover:bg-secondary-200 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-200 dark:hover:bg-secondary-900/60 transition-colors"
          >
            ▶ Xem viết
          </button>
          {quiz && (
            <button
              onClick={handleQuiz}
              title="Bé tự vẽ"
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-accent-100 hover:bg-accent-200 text-accent-700 dark:bg-accent-900/40 dark:text-accent-200 transition-colors"
            >
              ✏️ Tự vẽ
            </button>
          )}
        </div>
      )}
    </div>
  );
}
