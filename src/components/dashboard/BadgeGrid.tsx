import { sampleBadges } from '@/data/badges';
import { cn } from '@/utils/cn';

export function BadgeGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {sampleBadges.map((b) => (
        <div
          key={b.id}
          className={cn(
            'rounded-2xl p-3 text-center border-2 transition-all',
            b.unlocked
              ? 'bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-900/30 dark:to-primary-900/30 border-accent-300 hover:-translate-y-1'
              : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-60'
          )}
          title={b.description}
        >
          <div
            className={cn(
              'text-4xl mb-1',
              !b.unlocked && 'grayscale'
            )}
          >
            {b.unlocked ? b.icon : '🔒'}
          </div>
          <p className="text-xs font-bold leading-tight">{b.nameVi}</p>
        </div>
      ))}
    </div>
  );
}
