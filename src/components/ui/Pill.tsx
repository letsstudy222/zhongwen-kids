import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

type Color = 'primary' | 'secondary' | 'accent' | 'success' | 'slate';

interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  color?: Color;
}

const colorMap: Record<Color, string> = {
  primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-200',
  secondary: 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-200',
  accent: 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-200',
  success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200',
  slate: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
};

export function Pill({ color = 'primary', className, children, ...props }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold',
        colorMap[color],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
