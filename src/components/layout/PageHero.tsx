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
    <section
      className={cn(
        'relative py-12 sm:py-16 overflow-hidden bg-blob-warm',
        className
      )}
    >
      {/* Decorative soft circles */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary-100/40 blur-2xl animate-float-slow" />
      <div className="absolute top-20 right-16 w-32 h-32 rounded-full bg-secondary-100/40 blur-3xl animate-float" />
      <div className="absolute bottom-5 right-1/3 w-24 h-24 rounded-full bg-accent-100/40 blur-2xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {emoji && (
          <div className="text-6xl mb-4 inline-block animate-float">{emoji}</div>
        )}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-slate-50">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
