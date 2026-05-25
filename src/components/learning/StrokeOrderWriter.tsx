'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface StrokeOrderWriterProps {
  hanzi: string;
  size?: number;
  animate?: boolean;   // auto-animate khi mount
  quiz?: boolean;      // hiển thị nút "Tự vẽ"
  className?: string;
}

/**
 * Hiển thị và animate thứ tự viết nét chữ Hán dùng hanzi-writer.
 *
 * FIX lỗi cũ:
 * - Không dùng showCharacter: false vì nó xoá outline gây mờ
 * - Container có kích thước tường minh, không bị clip
 * - SVG của hanzi-writer render hoàn toàn trong container, không đè lên nội dung khác
 */
export function StrokeOrderWriter({
  hanzi,
  size = 160,
  animate = false,
  quiz = false,
  className = ''
}: StrokeOrderWriterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<any>(null);
  const [mode, setMode] = useState<'idle' | 'animating' | 'quiz'>('idle');
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [strokeCount, setStrokeCount] = useState<number | null>(null);

  const initWriter = useCallback(async () => {
    if (!containerRef.current) return;

    try {
      const HanziWriter = (await import('hanzi-writer')).default;
      if (!containerRef.current) return;

      // Xoá nội dung cũ
      containerRef.current.innerHTML = '';

      const writer = HanziWriter.create(containerRef.current, hanzi, {
        width: size,
        height: size,
        padding: 12,
        strokeColor: '#2f8478',
        radicalColor: '#ed6346',
        outlineColor: '#d1d5db',
        drawingColor: '#ed6346',
        drawingWidth: 5,
        strokeAnimationSpeed: 0.8,
        delayBetweenStrokes: 300,
        showOutline: true,
        showCharacter: true,
        strokeFadeDuration: 500,
        highlightOnComplete: true,
        highlightCompleteColor: '#22c55e'
      });

      writerRef.current = writer;

      // Lấy số nét
      try {
        const charData = await (HanziWriter as any).loadCharacterData(hanzi);
        if (charData?.strokes) setStrokeCount(charData.strokes.length);
      } catch {}

      setLoaded(true);

      if (animate) {
        setTimeout(() => {
          writer.animateCharacter({ onComplete: () => setMode('idle') });
          setMode('animating');
        }, 200);
      }
    } catch (err) {
      console.warn('hanzi-writer failed for:', hanzi, err);
      setError(true);
    }
  }, [hanzi, size, animate]);

  useEffect(() => {
    initWriter();
    return () => {
      if (writerRef.current) {
        try { writerRef.current.cancelQuiz?.(); } catch {}
      }
    };
  }, [initWriter]);

  const handleAnimate = () => {
    if (!writerRef.current) return;
    try { writerRef.current.cancelQuiz?.(); } catch {}
    setMode('animating');
    writerRef.current.animateCharacter({ onComplete: () => setMode('idle') });
  };

  const handleQuiz = () => {
    if (!writerRef.current) return;
    setMode('quiz');
    writerRef.current.quiz({
      onComplete: () => setMode('idle')
    });
  };

  // Fallback khi không có trong database
  if (error) {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <div
          className="rounded-2xl bg-cream-50 dark:bg-slate-700/40 border-2 border-dashed border-cream-200 dark:border-slate-600 flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <span className="font-chinese text-slate-400 dark:text-slate-500" style={{ fontSize: size * 0.5 }}>
            {hanzi}
          </span>
        </div>
        <p className="text-xs text-slate-400">Không có dữ liệu nét</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* Canvas chứa hanzi-writer — size tường minh, không overflow */}
      <div
        className="relative rounded-2xl border-2 border-cream-200 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-soft overflow-hidden"
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
      >
        {/* Ô kẻ giấy mễ nền */}
        <svg
          className="absolute inset-0 pointer-events-none z-0"
          width={size}
          height={size}
          aria-hidden="true"
        >
          <line x1={size/2} y1={4} x2={size/2} y2={size-4} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1={4} y1={size/2} x2={size-4} y2={size/2} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1={8} y1={8} x2={size-8} y2={size-8} stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="3 6" />
          <line x1={size-8} y1={8} x2={8} y2={size-8} stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="3 6" />
        </svg>

        {/* Loading spinner */}
        {!loaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-8 h-8 border-3 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
          </div>
        )}

        {/* Hanzi-writer renders SVG vào đây — z-10 để trên nền grid */}
        <div
          ref={containerRef}
          className="relative z-10"
          style={{ width: size, height: size }}
        />

        {/* Badge trạng thái */}
        {mode === 'quiz' && (
          <div className="absolute top-2 left-2 bg-accent-400 text-white text-xs font-bold px-2 py-0.5 rounded-full z-20">
            ✏️ Vẽ đi!
          </div>
        )}
        {mode === 'animating' && (
          <div className="absolute top-2 left-2 bg-secondary-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-20 animate-pulse">
            ▶ Đang vẽ...
          </div>
        )}
      </div>

      {/* Số nét */}
      {strokeCount && loaded && (
        <p className="text-xs text-slate-400 font-medium">{strokeCount} nét</p>
      )}

      {/* Nút điều khiển */}
      {loaded && (
        <div className="flex gap-2">
          <button
            onClick={handleAnimate}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-secondary-100 hover:bg-secondary-200 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-200 transition-colors"
          >
            ▶ Xem viết
          </button>
          {quiz && (
            <button
              onClick={handleQuiz}
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
