import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

type Color = 'primary' | 'secondary' | 'accent' | 'success' | 'slate' | 'lavender';

interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  color?: Color;
}

const colorMap: Record<Color, string> = {
  primary: 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-200',
  secondary: 'bg-secondary-50 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-200',
  accent: 'bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-200',
  success: 'bg-success-50 text-success-700 dark:bg-success-900/30 dark:text-success-200',
  slate: 'bg-cream-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200',
  lavender: 'bg-lavender-100 text-lavender-400 dark:bg-lavender-400/20 dark:text-lavender-300'
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
