// Định nghĩa các kiểu dữ liệu dùng chung trên toàn dự án

export type YctLevel = 1 | 2 | 3 | 4;

export type VocabularyCategory =
  | 'family'
  | 'animals'
  | 'colors'
  | 'numbers'
  | 'school'
  | 'food'
  | 'greetings'   // chào hỏi - YCT 1 core
  | 'pronouns'    // đại từ - YCT 1 core
  | 'body'        // bộ phận cơ thể
  | 'time'        // thời gian
  | 'verbs'       // động từ thông dụng
  | 'adjectives'  // tính từ
  | 'home'        // đồ vật trong nhà
  | 'nature';     // thiên nhiên, thời tiết

export interface VocabWord {
  id: string;
  hanzi: string;          // chữ Hán
  pinyin: string;         // phiên âm
  meaningVi: string;      // nghĩa tiếng Việt
  example?: string;       // ví dụ câu tiếng Trung
  exampleVi?: string;     // dịch ví dụ
  audioSrc?: string;      // đường dẫn file audio
  category: VocabularyCategory;
  yctLevel: YctLevel;
  imageEmoji?: string;    // emoji minh họa
}

export interface Conversation {
  id: string;
  title: string;          // tiêu đề tiếng Việt
  yctLevel: YctLevel;
  lines: {
    speaker: 'A' | 'B';
    hanzi: string;
    pinyin: string;
    vi: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'matching' | 'listening';
  question: string;
  prompt?: string;       // hanzi hoặc pinyin
  options: string[];
  correctIndex: number;
  explanationVi?: string;
}

export interface Badge {
  id: string;
  nameVi: string;
  icon: string;          // emoji
  description: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface UserProgress {
  totalXp: number;
  streakDays: number;
  lessonsCompleted: number;
  wordsLearned: number;
  badges: Badge[];
  lastActiveDate: string;
}

export interface PinyinSound {
  id: string;
  symbol: string;        // ví dụ "ma"
  type: 'initial' | 'final' | 'tone';
  exampleHanzi?: string;
  exampleMeaning?: string;
  toneNumber?: 1 | 2 | 3 | 4;
}
