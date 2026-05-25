import { cn } from '@/utils/cn';

interface ProgressBarProps {
  value: number; // 0 -> 100
  max?: number;
  showLabel?: boolean;
  color?: 'primary' | 'secondary' | 'accent' | 'success';
  className?: string;
}

const colorMap = {
  primary: 'bg-gradient-to-r from-primary-400 to-primary-500',
  secondary: 'bg-gradient-to-r from-secondary-400 to-secondary-500',
  accent: 'bg-gradient-to-r from-accent-300 to-accent-400',
  success: 'bg-gradient-to-r from-success-400 to-success-500'
};

export function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  color = 'primary',
  className
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn('w-full', className)}>
      <div className="h-3 bg-cream-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-700 ease-out',
            colorMap[color]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
          {Math.round(percentage)}%
        </p>
      )}
    </div>
  );
}
