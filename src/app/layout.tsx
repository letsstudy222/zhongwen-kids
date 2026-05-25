import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'học tiếng Trung cho trẻ em',
    'YCT',
    'pinyin',
    'tiếng Trung tiểu học',
    'học tiếng Trung Việt Nam'
  ],
  authors: [{ name: siteConfig.author }],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport: Viewport = {
  themeColor: '#ff2e63',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-cream dark:bg-slate-900 text-slate-800 dark:text-slate-100">
        {/* Script đặt theme trước khi React thuỷ hóa để tránh flicker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
