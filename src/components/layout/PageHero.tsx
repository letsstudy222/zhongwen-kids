import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface PageHeroProps {
  emoji?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

export function PageHero({ emoji, title, subtitle, className, children }: PageHeroProps) {
  return (
    <section className={cn('relative py-12 sm:py-16 overflow-hidden', className)}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {emoji && (
          <div className="text-6xl mb-4 inline-block animate-float">{emoji}</div>
        )}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
