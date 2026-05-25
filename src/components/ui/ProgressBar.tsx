import { cn } from '@/utils/cn';

interface ProgressBarProps {
  value: number;        // 0 -> 100
  max?: number;
  showLabel?: boolean;
  color?: 'primary' | 'secondary' | 'accent' | 'success';
  className?: string;
}

const colorMap = {
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  accent: 'bg-accent-400',
  success: 'bg-emerald-500'
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
      <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500 ease-out',
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
