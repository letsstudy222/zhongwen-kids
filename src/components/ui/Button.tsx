import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary-500 text-white shadow-soft hover:bg-primary-600 hover:shadow-soft-lg hover:-translate-y-0.5',
  secondary:
    'bg-secondary-500 text-white shadow-soft-secondary hover:bg-secondary-600 hover:-translate-y-0.5',
  accent:
    'bg-accent-400 text-accent-900 shadow-soft-accent hover:bg-accent-500 hover:-translate-y-0.5',
  outline:
    'bg-white text-primary-600 border-2 border-primary-200 shadow-soft hover:border-primary-300 hover:bg-primary-50 dark:bg-slate-800 dark:text-primary-300 dark:border-slate-700',
  ghost:
    'bg-transparent text-slate-700 hover:bg-cream-100 dark:text-slate-200 dark:hover:bg-slate-700'
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-2xl',
  md: 'px-5 py-2.5 text-base rounded-2xl',
  lg: 'px-7 py-3.5 text-lg rounded-3xl'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
