'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggle, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        aria-label="Đổi chế độ"
        className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-cute border-2 border-slate-100 dark:border-slate-700"
      />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Chuyển chế độ sáng/tối"
      className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-cute border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center hover:rotate-12 transition-transform"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-slate-600" />
      ) : (
        <Sun className="w-5 h-5 text-accent-400" />
      )}
    </button>
  );
}
