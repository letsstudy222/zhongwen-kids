export interface RoadmapStage {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  emoji: string;
  duration: string;       // ví dụ "2-3 tháng"
  ageRange: string;       // độ tuổi gợi ý
  goals: string[];
  yctLevel?: 1 | 2 | 3 | 4;
  color: string;          // gradient tailwind
}

export const roadmap: RoadmapStage[] = [
  {
    id: 'stage-1',
    order: 1,
    title: 'Làm quen tiếng Trung',
    subtitle: 'Khởi đầu vui vẻ với Pinyin',
    emoji: '🌱',
    duration: '1-2 tháng',
    ageRange: 'Lớp 1-2',
    goals: [
      'Nhận biết 6 nguyên âm cơ bản',
      'Làm quen 4 thanh điệu qua bài hát',
      'Chào hỏi đơn giản'
    ],
    color: 'from-emerald-300 to-green-400'
  },
  {
    id: 'stage-2',
    order: 2,
    title: 'YCT 1',
    subtitle: 'Từ vựng đời thường',
    emoji: '🎈',
    duration: '2-3 tháng',
    ageRange: 'Lớp 1-3',
    yctLevel: 1,
    goals: [
      'Học 80 từ vựng theo chủ đề',
      'Hội thoại ngắn về gia đình, lớp học',
      'Tập viết 20 chữ Hán đầu tiên'
    ],
    color: 'from-rose-300 to-pink-400'
  },
  {
    id: 'stage-3',
    order: 3,
    title: 'YCT 2',
    subtitle: 'Mở rộng giao tiếp',
    emoji: '🎯',
    duration: '3-4 tháng',
    ageRange: 'Lớp 2-4',
    yctLevel: 2,
    goals: [
      'Học thêm 150 từ vựng',
      'Đặt câu đơn giản',
      'Viết tên, số, màu sắc bằng chữ Hán'
    ],
    color: 'from-amber-300 to-orange-400'
  },
  {
    id: 'stage-4',
    order: 4,
    title: 'YCT 3',
    subtitle: 'Kể chuyện & miêu tả',
    emoji: '🚀',
    duration: '4-5 tháng',
    ageRange: 'Lớp 3-5',
    yctLevel: 3,
    goals: [
      '300 từ vựng phong phú',
      'Đọc và kể lại truyện ngắn',
      'Tham gia hội thoại 4-6 câu'
    ],
    color: 'from-sky-300 to-blue-400'
  },
  {
    id: 'stage-5',
    order: 5,
    title: 'YCT 4',
    subtitle: 'Tự tin tiểu học',
    emoji: '🏆',
    duration: '5-6 tháng',
    ageRange: 'Lớp 4-5',
    yctLevel: 4,
    goals: [
      '600+ từ vựng',
      'Viết đoạn văn ngắn',
      'Sẵn sàng chuyển sang HSK 1-2'
    ],
    color: 'from-purple-300 to-fuchsia-400'
  }
];
