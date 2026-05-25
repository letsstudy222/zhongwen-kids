import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ interactive = false, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-soft border border-cream-100 dark:border-slate-700/50',
          interactive &&
            'transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
