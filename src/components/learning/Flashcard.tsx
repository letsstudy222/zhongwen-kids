'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { X, Volume2, Turtle } from 'lucide-react';
import { useAudio } from '@/hooks/useAudio';
import type { VocabWord } from '@/types';
import { cn } from '@/utils/cn';

// Dynamic load hanzi-writer — chỉ chạy ở client
const StrokeOrderWriter = dynamic(
  () => import('@/components/learning/StrokeOrderWriter').then((m) => m.StrokeOrderWriter),
  { ssr: false, loading: () => <div className="w-48 h-48 rounded-2xl bg-cream-100 dark:bg-slate-700 animate-pulse" /> }
);

interface FlashcardProps {
  word: VocabWord;
  className?: string;
}

/**
 * Thẻ từ vựng nhỏ — bấm vào mở modal lớn với:
 * - Auto-play audio khi mở
 * - Stroke order animation (hanzi-writer)
 * - Bé tự vẽ
 */
export function Flashcard({ word, className }: FlashcardProps) {
  const [open, setOpen] = useState(false);
  const { play, playSlow } = useAudio();

  // Auto-play khi mở modal
  const openModal = useCallback(() => {
    setOpen(true);
    // Delay nhỏ để modal render trước khi phát âm
    setTimeout(() => play(word.hanzi), 300);
  }, [word.hanzi, play]);

  // Đóng bằng phím Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  // Khoá scroll body khi modal mở
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── CARD NHỎ ── */}
      <button
        onClick={openModal}
        className={cn(
          'w-full text-left rounded-3xl border border-primary-100 dark:border-primary-900/50',
          'bg-gradient-to-br from-primary-50 via-cream-50 to-accent-50',
          'dark:from-primary-900/20 dark:to-accent-900/20',
          'shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200',
          'flex flex-col items-center justify-center gap-1 p-4 min-h-[120px]',
          'cursor-pointer active:scale-95',
          className
        )}
      >
        <span className="text-3xl">{word.imageEmoji ?? '✨'}</span>
        <span className="font-chinese text-3xl font-bold text-primary-700 dark:text-primary-200">
          {word.hanzi}
        </span>
        <span className="text-xs text-secondary-600 dark:text-secondary-300 italic font-medium">
          {word.pinyin}
        </span>
        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
          {word.meaningVi}
        </span>
        <span className="text-xs text-slate-400 mt-1">Bấm để học ✨</span>
      </button>

      {/* ── MODAL TO ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal card */}
          <div
            className="relative z-10 w-full max-w-lg bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header gradient */}
            <div className="bg-gradient-to-br from-primary-300 to-accent-300 p-6 text-center text-white">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-5xl mb-2">{word.imageEmoji ?? '✨'}</div>
              <p className="font-chinese text-6xl font-bold leading-none drop-shadow-md">
                {word.hanzi}
              </p>
              <p className="mt-2 text-xl italic opacity-90 font-medium">{word.pinyin}</p>
              <p className="text-2xl font-bold mt-1">{word.meaningVi}</p>

              {/* Audio buttons */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <button
                  onClick={() => play(word.hanzi)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 font-bold text-sm transition-colors"
                >
                  <Volume2 className="w-4 h-4" /> Nghe
                </button>
                <button
                  onClick={() => playSlow(word.hanzi)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 font-bold text-sm transition-colors"
                >
                  <Turtle className="w-4 h-4" /> Chậm 🐢
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* Ví dụ câu */}
              {word.example && (
                <div className="mb-5 p-4 rounded-2xl bg-secondary-50 dark:bg-secondary-900/20 border border-secondary-100 dark:border-secondary-900/40">
                  <p className="text-xs font-bold text-secondary-600 dark:text-secondary-300 uppercase tracking-wider mb-1">
                    💬 Ví dụ câu
                  </p>
                  <p className="font-chinese text-lg font-bold">{word.example}</p>
                  {word.exampleVi && (
                    <p className="text-sm text-slate-500 italic mt-1">{word.exampleVi}</p>
                  )}
                  <button
                    onClick={() => play(word.example!)}
                    className="mt-2 flex items-center gap-1 text-xs text-secondary-600 dark:text-secondary-300 hover:underline"
                  >
                    <Volume2 className="w-3 h-3" /> Nghe câu
                  </button>
                </div>
              )}

              {/* Stroke order */}
              <div>
                <p className="text-xs font-bold text-accent-600 dark:text-accent-300 uppercase tracking-wider mb-3">
                  ✏️ Thứ tự viết nét
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {/* Với từ ghép (2+ chữ), hiện từng chữ riêng */}
                  {Array.from(word.hanzi).map((char, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      {char.trim() && /[\u4e00-\u9fff]/.test(char) ? (
                        <StrokeOrderWriter hanzi={char} size={160} animate quiz />
                      ) : null}
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs text-slate-400 mt-3">
                  Nhấn <strong>▶ Xem viết</strong> để xem animation · <strong>✏️ Tự vẽ</strong> để luyện tập
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
