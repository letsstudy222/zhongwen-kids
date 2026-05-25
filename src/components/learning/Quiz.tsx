'use client';

import { useState } from 'react';
import { Check, X, Trophy, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Mascot } from '@/components/ui/Mascot';
import { ProgressBar } from '@/components/ui/ProgressBar';
import type { QuizQuestion } from '@/types';
import { cn } from '@/utils/cn';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="card-cute text-center">
        <p>Chưa có câu hỏi nào.</p>
      </div>
    );
  }

  const current = questions[index];
  const progress = ((index + (showResult ? 1 : 0)) / questions.length) * 100;

  function handleSelect(i: number) {
    if (showResult) return;
    setSelected(i);
  }

  function handleSubmit() {
    if (selected === null) return;
    const isCorrect = selected === current.correctIndex;
    if (isCorrect) setScore((s) => s + 1);
    setShowResult(true);
  }

  function handleNext() {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
      onComplete?.(score + (selected === current.correctIndex ? 0 : 0), questions.length);
    }
  }

  function handleRestart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setFinished(false);
  }

  // ----- Kết quả -----
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="card-cute text-center animate-pop-in">
        <Mascot mood="celebrate" className="mx-auto w-32 h-32" />
        <h3 className="font-display text-3xl mt-4">
          {percentage >= 70 ? 'Tuyệt vời!' : 'Cố lên nhé!'}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mt-2">
          Bạn đã trả lời đúng{' '}
          <span className="font-extrabold text-primary-600">{score}</span> /{' '}
          {questions.length} câu
        </p>
        <div className="my-6 flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" stroke="#fee2e2" strokeWidth="10" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="#ff2e63"
                strokeWidth="10"
                fill="none"
                strokeDasharray={`${(percentage * 264) / 100} 264`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-3xl font-extrabold">{percentage}%</span>
            </div>
          </div>
        </div>
        <Button onClick={handleRestart} variant="primary">
          <RotateCcw className="w-4 h-4" /> Làm lại
        </Button>
      </div>
    );
  }

  // ----- Câu hỏi -----
  return (
    <div className="card-cute">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Câu {index + 1} / {questions.length}
        </p>
        <div className="flex items-center gap-1 text-sm font-bold text-primary-600">
          <Trophy className="w-4 h-4" /> {score}
        </div>
      </div>
      <ProgressBar value={progress} color="primary" />

      <div className="mt-6 text-center">
        {current.prompt && (
          <p className="font-chinese text-5xl mb-4 text-primary-600 dark:text-primary-300">
            {current.prompt}
          </p>
        )}
        <h3 className="font-display text-xl">{current.question}</h3>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {current.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === current.correctIndex;
          let state: 'idle' | 'correct' | 'wrong' | 'selected' = 'idle';
          if (showResult) {
            if (isCorrect) state = 'correct';
            else if (isSelected) state = 'wrong';
          } else if (isSelected) {
            state = 'selected';
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={cn(
                'p-4 rounded-2xl border-2 font-bold text-left transition-all',
                state === 'idle' && 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-primary-300',
                state === 'selected' && 'bg-primary-100 border-primary-400 dark:bg-primary-900/40',
                state === 'correct' && 'bg-success-100 border-success-400 text-secondary-700 dark:bg-success-900/40 dark:text-success-200',
                state === 'wrong' && 'bg-primary-50 border-primary-400 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200 animate-shake'
              )}
            >
              <div className="flex items-center justify-between">
                <span>{opt}</span>
                {showResult && isCorrect && <Check className="w-5 h-5" />}
                {showResult && !isCorrect && isSelected && <X className="w-5 h-5" />}
              </div>
            </button>
          );
        })}
      </div>

      {showResult && current.explanationVi && (
        <div className="mt-4 p-4 rounded-2xl bg-secondary-50 dark:bg-secondary-900/30 border-2 border-secondary-200 dark:border-secondary-800 text-sm">
          💡 {current.explanationVi}
        </div>
      )}

      <div className="mt-6 flex justify-end">
        {!showResult ? (
          <Button onClick={handleSubmit} disabled={selected === null}>
            Kiểm tra
          </Button>
        ) : (
          <Button onClick={handleNext} variant="secondary">
            {index < questions.length - 1 ? 'Câu tiếp →' : 'Hoàn thành 🎉'}
          </Button>
        )}
      </div>
    </div>
  );
}
