import Link from 'next/link';
import { mainNav, siteConfig, utilityNav } from '@/lib/site-config';
import { Github, Facebook, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary-50 via-cream to-secondary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border-t-2 border-slate-100 dark:border-slate-800 mt-20">
      {/* Decorative wave */}
      <svg viewBox="0 0 1440 60" className="w-full h-12 -mt-12 text-cream dark:text-slate-900" fill="currentColor">
        <path d="M0,30 C320,60 720,0 1440,30 L1440,60 L0,60 Z" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-3xl shadow-cute">
                🐼
              </div>
              <div>
                <p className="font-display font-extrabold text-xl">{siteConfig.name}</p>
                <p className="text-xs text-slate-500">中文小朋友</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-2 mt-4">
              <a href={siteConfig.links.github} className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 shadow-cute flex items-center justify-center hover:bg-primary-50">
                <Github className="w-4 h-4" />
              </a>
              <a href={siteConfig.links.facebook} className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 shadow-cute flex items-center justify-center hover:bg-primary-50">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.links.youtube} className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 shadow-cute flex items-center justify-center hover:bg-primary-50">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={`mailto:${siteConfig.contactEmail}`} className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 shadow-cute flex items-center justify-center hover:bg-primary-50">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Học tập */}
          <div>
            <h4 className="font-extrabold mb-3 text-sm uppercase tracking-wide text-primary-600 dark:text-primary-300">
              Học tập
            </h4>
            <ul className="space-y-2 text-sm">
              {mainNav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-300 inline-flex items-center gap-1">
                    <span>{item.emoji}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Người dùng */}
          <div>
            <h4 className="font-extrabold mb-3 text-sm uppercase tracking-wide text-primary-600 dark:text-primary-300">
              Dành cho
            </h4>
            <ul className="space-y-2 text-sm">
              {utilityNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-300 inline-flex items-center gap-1">
                    <span>{item.emoji}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-extrabold mb-3 text-sm uppercase tracking-wide text-primary-600 dark:text-primary-300">
              Nhận tin học tập
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              Mẹo học tiếng Trung và tài liệu mới hàng tuần
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email của bố mẹ"
                className="px-4 py-2 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:border-primary-400 outline-none"
              />
              <button
                type="button"
                className="btn-primary !py-2 !text-sm"
              >
                Đăng ký 📬
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t-2 border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Học vui mỗi ngày 🌸</p>
          <p>Phát triển bởi {siteConfig.author}</p>
        </div>
      </div>
    </footer>
  );
}
