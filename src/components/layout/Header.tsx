'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { mainNav, utilityNav, siteConfig } from '@/lib/site-config';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useStreak } from '@/hooks/useStreak';
import { cn } from '@/utils/cn';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { streak } = useStreak();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-cream/85 dark:bg-slate-900/90 backdrop-blur-md border-b border-cream-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-300 to-accent-300 flex items-center justify-center text-2xl shadow-soft group-hover:rotate-6 transition-transform">
              🐼
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-extrabold text-lg leading-tight">
                {siteConfig.name}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                中文小朋友
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 rounded-xl font-bold text-sm transition-colors',
                  isActive(item.href)
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                )}
              >
                <span className="mr-1">{item.emoji}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            {/* Streak badge */}
            <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent-50 to-accent-100 dark:from-accent-900/40 dark:to-accent-800/40 border border-accent-200 dark:border-accent-700">
              <Flame className="w-4 h-4 text-accent-500" />
              <span className="text-sm font-extrabold text-accent-700 dark:text-accent-300">
                {streak}
              </span>
            </div>

            <ThemeToggle />

            <Link
              href="/dashboard"
              className="hidden md:inline-flex btn-primary !py-2 !px-4 !text-sm"
            >
              Vào học
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-soft border border-cream-100 dark:border-slate-700 flex items-center justify-center"
              aria-label="Mở menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden pb-4 animate-pop-in">
            <div className="grid grid-cols-2 gap-2">
              {[...mainNav, ...utilityNav].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'px-3 py-2.5 rounded-2xl font-bold text-sm flex items-center gap-2 border',
                    isActive(item.href)
                      ? 'bg-primary-50 border-primary-200 text-primary-700 dark:bg-primary-900/40 dark:border-primary-700 dark:text-primary-200'
                      : 'bg-white dark:bg-slate-800 border-cream-100 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                  )}
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="btn-primary w-full mt-3"
            >
              🚀 Vào học ngay
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
