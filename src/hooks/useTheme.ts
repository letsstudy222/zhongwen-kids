'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/**
 * Hook quản lý chế độ sáng/tối, lưu trong localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = (localStorage.getItem('theme') as Theme | null) ?? 'light';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return { theme, toggle, mounted };
}
