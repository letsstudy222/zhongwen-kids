import type { Badge } from '@/types';

export const sampleBadges: Badge[] = [
  {
    id: 'badge-first-lesson',
    nameVi: 'Bài học đầu tiên',
    icon: '🌟',
    description: 'Hoàn thành bài học đầu tiên',
    unlocked: true,
    unlockedAt: '2025-04-12'
  },
  {
    id: 'badge-streak-3',
    nameVi: 'Học 3 ngày liên tiếp',
    icon: '🔥',
    description: 'Duy trì chuỗi học 3 ngày',
    unlocked: true,
    unlockedAt: '2025-04-15'
  },
  {
    id: 'badge-pinyin-master',
    nameVi: 'Bậc thầy Pinyin',
    icon: '🔤',
    description: 'Học hết 4 thanh điệu',
    unlocked: true,
    unlockedAt: '2025-04-20'
  },
  {
    id: 'badge-yct1-done',
    nameVi: 'Hoàn thành YCT 1',
    icon: '🏅',
    description: 'Vượt qua bài kiểm tra YCT 1',
    unlocked: false
  },
  {
    id: 'badge-streak-7',
    nameVi: 'Tuần lễ chăm chỉ',
    icon: '⚡',
    description: 'Học 7 ngày liên tiếp',
    unlocked: false
  },
  {
    id: 'badge-100-words',
    nameVi: '100 từ vựng',
    icon: '📚',
    description: 'Học được 100 từ',
    unlocked: false
  }
];
