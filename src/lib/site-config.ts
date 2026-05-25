export const siteConfig = {
  name: 'Zhongwen Kids',
  tagline: 'Học tiếng Trung vui nhộn cho bé tiểu học',
  description:
    'Nền tảng học tiếng Trung định hướng YCT dành cho học sinh tiểu học Việt Nam – nghe, nói, pinyin, chữ Hán cơ bản qua trò chơi tương tác.',
  url: 'https://zhongwen-kids.example.com',
  ogImage: '/images/og-image.png',
  author: 'Zhongwen Kids Team',
  links: {
    github: 'https://github.com/your-username/zhongwen-kids',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com'
  },
  contactEmail: 'hello@zhongwen-kids.example.com'
};

// Menu chính hiển thị trên thanh điều hướng - sắp xếp theo lộ trình học
export const mainNav = [
  { href: '/', label: 'Trang chủ', emoji: '🏠' },
  { href: '/foundation', label: 'Làm quen', emoji: '🌱' },
  { href: '/yct', label: 'YCT', emoji: '🎯' },
  { href: '/pinyin', label: 'Pinyin', emoji: '🔤' },
  { href: '/vocabulary', label: 'Từ vựng', emoji: '📚' },
  { href: '/games', label: 'Trò chơi', emoji: '🎮' },
  { href: '/songs-stories', label: 'Bài hát & Truyện', emoji: '🎵' }
];

export const utilityNav = [
  { href: '/parents', label: 'Phụ huynh', emoji: '👨‍👩‍👧' },
  { href: '/teachers', label: 'Giáo viên', emoji: '👩‍🏫' },
  { href: '/about', label: 'Giới thiệu', emoji: '✨' },
  { href: '/contact', label: 'Liên hệ', emoji: '✉️' }
];
