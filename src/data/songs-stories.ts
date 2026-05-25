export interface Song {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  duration: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó';
  emoji: string;
  color: string;
  lyrics?: string[];
}

export interface Story {
  id: string;
  title: string;
  titleVi: string;
  summary: string;
  duration: string;
  yctLevel: 1 | 2 | 3 | 4;
  emoji: string;
  color: string;
}

export const songs: Song[] = [
  {
    id: 's-1',
    title: '两只老虎',
    titleVi: 'Hai chú hổ',
    description: 'Bài hát kinh điển dạy về số đếm và phương hướng.',
    duration: '1:30',
    difficulty: 'Dễ',
    emoji: '🐯',
    color: 'from-accent-300 to-accent-400',
    lyrics: [
      '两只老虎，两只老虎，跑得快！跑得快！',
      'Liǎng zhī lǎohǔ, liǎng zhī lǎohǔ, pǎo de kuài! Pǎo de kuài!',
      'Hai chú hổ, hai chú hổ, chạy thật nhanh! Chạy thật nhanh!'
    ]
  },
  {
    id: 's-2',
    title: '一闪一闪亮晶晶',
    titleVi: 'Twinkle Twinkle phiên bản tiếng Trung',
    description: 'Học từ vựng về bầu trời và ngôi sao.',
    duration: '2:00',
    difficulty: 'Dễ',
    emoji: '⭐',
    color: 'from-secondary-300 to-lavender-300'
  },
  {
    id: 's-3',
    title: '小星星',
    titleVi: 'Ngôi sao nhỏ',
    description: 'Giai điệu nhẹ nhàng, dễ thuộc.',
    duration: '1:45',
    difficulty: 'Dễ',
    emoji: '✨',
    color: 'from-accent-200 to-accent-300'
  },
  {
    id: 's-4',
    title: '数鸭子',
    titleVi: 'Đếm vịt con',
    description: 'Bài hát dạy số đếm 1-10 thật vui nhộn.',
    duration: '2:15',
    difficulty: 'Trung bình',
    emoji: '🦆',
    color: 'from-success-300 to-secondary-300'
  }
];

export const stories: Story[] = [
  {
    id: 'st-1',
    title: '小红帽',
    titleVi: 'Cô bé quàng khăn đỏ',
    summary: 'Phiên bản tiếng Trung đơn giản cho bé mới bắt đầu.',
    duration: '5 phút',
    yctLevel: 1,
    emoji: '👧',
    color: 'from-primary-300 to-primary-400'
  },
  {
    id: 'st-2',
    title: '三只小猪',
    titleVi: 'Ba chú heo con',
    summary: 'Câu chuyện về tình anh em và sự chăm chỉ.',
    duration: '7 phút',
    yctLevel: 2,
    emoji: '🐷',
    color: 'from-blush-300 to-primary-300'
  },
  {
    id: 'st-3',
    title: '龟兔赛跑',
    titleVi: 'Rùa và Thỏ',
    summary: 'Bài học về sự kiên trì và khiêm tốn.',
    duration: '6 phút',
    yctLevel: 2,
    emoji: '🐢',
    color: 'from-secondary-300 to-secondary-400'
  },
  {
    id: 'st-4',
    title: '猴子捞月',
    titleVi: 'Khỉ vớt trăng',
    summary: 'Truyện cổ Trung Hoa hài hước và ý nghĩa.',
    duration: '8 phút',
    yctLevel: 3,
    emoji: '🐵',
    color: 'from-amber-300 to-yellow-400'
  }
];
