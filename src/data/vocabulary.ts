import type { VocabWord } from '@/types';

/**
 * Bộ từ vựng mẫu, phân loại theo chủ đề và cấp YCT.
 * Trong dự án thực tế nên đẩy lên CMS hoặc DB.
 */
export const vocabulary: VocabWord[] = [
  // ==== GIA ĐÌNH (FAMILY) — YCT 1 ====
  { id: 'fam-1', hanzi: '爸爸', pinyin: 'bàba', meaningVi: 'bố', category: 'family', yctLevel: 1, imageEmoji: '👨', example: '我爱爸爸。', exampleVi: 'Con yêu bố.' },
  { id: 'fam-2', hanzi: '妈妈', pinyin: 'māma', meaningVi: 'mẹ', category: 'family', yctLevel: 1, imageEmoji: '👩', example: '妈妈很漂亮。', exampleVi: 'Mẹ rất xinh.' },
  { id: 'fam-3', hanzi: '哥哥', pinyin: 'gēge', meaningVi: 'anh trai', category: 'family', yctLevel: 1, imageEmoji: '👦' },
  { id: 'fam-4', hanzi: '姐姐', pinyin: 'jiějie', meaningVi: 'chị gái', category: 'family', yctLevel: 1, imageEmoji: '👧' },
  { id: 'fam-5', hanzi: '弟弟', pinyin: 'dìdi', meaningVi: 'em trai', category: 'family', yctLevel: 2, imageEmoji: '🧒' },
  { id: 'fam-6', hanzi: '妹妹', pinyin: 'mèimei', meaningVi: 'em gái', category: 'family', yctLevel: 2, imageEmoji: '👶' },
  { id: 'fam-7', hanzi: '爷爷', pinyin: 'yéye', meaningVi: 'ông nội', category: 'family', yctLevel: 2, imageEmoji: '👴' },
  { id: 'fam-8', hanzi: '奶奶', pinyin: 'nǎinai', meaningVi: 'bà nội', category: 'family', yctLevel: 2, imageEmoji: '👵' },

  // ==== ĐỘNG VẬT (ANIMALS) ====
  { id: 'ani-1', hanzi: '猫', pinyin: 'māo', meaningVi: 'mèo', category: 'animals', yctLevel: 1, imageEmoji: '🐱', example: '猫很可爱。', exampleVi: 'Con mèo rất dễ thương.' },
  { id: 'ani-2', hanzi: '狗', pinyin: 'gǒu', meaningVi: 'chó', category: 'animals', yctLevel: 1, imageEmoji: '🐶' },
  { id: 'ani-3', hanzi: '鱼', pinyin: 'yú', meaningVi: 'cá', category: 'animals', yctLevel: 1, imageEmoji: '🐟' },
  { id: 'ani-4', hanzi: '鸟', pinyin: 'niǎo', meaningVi: 'chim', category: 'animals', yctLevel: 2, imageEmoji: '🐦' },
  { id: 'ani-5', hanzi: '兔子', pinyin: 'tùzi', meaningVi: 'thỏ', category: 'animals', yctLevel: 2, imageEmoji: '🐰' },
  { id: 'ani-6', hanzi: '熊猫', pinyin: 'xióngmāo', meaningVi: 'gấu trúc', category: 'animals', yctLevel: 3, imageEmoji: '🐼' },

  // ==== MÀU SẮC (COLORS) ====
  { id: 'col-1', hanzi: '红色', pinyin: 'hóngsè', meaningVi: 'màu đỏ', category: 'colors', yctLevel: 1, imageEmoji: '🔴' },
  { id: 'col-2', hanzi: '黄色', pinyin: 'huángsè', meaningVi: 'màu vàng', category: 'colors', yctLevel: 1, imageEmoji: '🟡' },
  { id: 'col-3', hanzi: '蓝色', pinyin: 'lánsè', meaningVi: 'màu xanh dương', category: 'colors', yctLevel: 2, imageEmoji: '🔵' },
  { id: 'col-4', hanzi: '绿色', pinyin: 'lǜsè', meaningVi: 'màu xanh lá', category: 'colors', yctLevel: 2, imageEmoji: '🟢' },
  { id: 'col-5', hanzi: '白色', pinyin: 'báisè', meaningVi: 'màu trắng', category: 'colors', yctLevel: 2, imageEmoji: '⚪' },
  { id: 'col-6', hanzi: '黑色', pinyin: 'hēisè', meaningVi: 'màu đen', category: 'colors', yctLevel: 2, imageEmoji: '⚫' },

  // ==== CON SỐ (NUMBERS) ====
  { id: 'num-1', hanzi: '一', pinyin: 'yī', meaningVi: 'một', category: 'numbers', yctLevel: 1, imageEmoji: '1️⃣' },
  { id: 'num-2', hanzi: '二', pinyin: 'èr', meaningVi: 'hai', category: 'numbers', yctLevel: 1, imageEmoji: '2️⃣' },
  { id: 'num-3', hanzi: '三', pinyin: 'sān', meaningVi: 'ba', category: 'numbers', yctLevel: 1, imageEmoji: '3️⃣' },
  { id: 'num-4', hanzi: '四', pinyin: 'sì', meaningVi: 'bốn', category: 'numbers', yctLevel: 1, imageEmoji: '4️⃣' },
  { id: 'num-5', hanzi: '五', pinyin: 'wǔ', meaningVi: 'năm', category: 'numbers', yctLevel: 1, imageEmoji: '5️⃣' },
  { id: 'num-6', hanzi: '六', pinyin: 'liù', meaningVi: 'sáu', category: 'numbers', yctLevel: 1, imageEmoji: '6️⃣' },
  { id: 'num-7', hanzi: '七', pinyin: 'qī', meaningVi: 'bảy', category: 'numbers', yctLevel: 1, imageEmoji: '7️⃣' },
  { id: 'num-8', hanzi: '八', pinyin: 'bā', meaningVi: 'tám', category: 'numbers', yctLevel: 1, imageEmoji: '8️⃣' },
  { id: 'num-9', hanzi: '九', pinyin: 'jiǔ', meaningVi: 'chín', category: 'numbers', yctLevel: 1, imageEmoji: '9️⃣' },
  { id: 'num-10', hanzi: '十', pinyin: 'shí', meaningVi: 'mười', category: 'numbers', yctLevel: 1, imageEmoji: '🔟' },

  // ==== TRƯỜNG HỌC (SCHOOL) ====
  { id: 'sch-1', hanzi: '老师', pinyin: 'lǎoshī', meaningVi: 'thầy/cô giáo', category: 'school', yctLevel: 1, imageEmoji: '👩‍🏫' },
  { id: 'sch-2', hanzi: '学生', pinyin: 'xuésheng', meaningVi: 'học sinh', category: 'school', yctLevel: 1, imageEmoji: '🎒' },
  { id: 'sch-3', hanzi: '书', pinyin: 'shū', meaningVi: 'sách', category: 'school', yctLevel: 1, imageEmoji: '📕' },
  { id: 'sch-4', hanzi: '笔', pinyin: 'bǐ', meaningVi: 'bút', category: 'school', yctLevel: 2, imageEmoji: '✏️' },
  { id: 'sch-5', hanzi: '学校', pinyin: 'xuéxiào', meaningVi: 'trường học', category: 'school', yctLevel: 2, imageEmoji: '🏫' },
  { id: 'sch-6', hanzi: '同学', pinyin: 'tóngxué', meaningVi: 'bạn học', category: 'school', yctLevel: 3, imageEmoji: '👫' },

  // ==== THỨC ĂN (FOOD) ====
  { id: 'foo-1', hanzi: '米饭', pinyin: 'mǐfàn', meaningVi: 'cơm', category: 'food', yctLevel: 1, imageEmoji: '🍚' },
  { id: 'foo-2', hanzi: '水', pinyin: 'shuǐ', meaningVi: 'nước', category: 'food', yctLevel: 1, imageEmoji: '💧' },
  { id: 'foo-3', hanzi: '苹果', pinyin: 'píngguǒ', meaningVi: 'táo', category: 'food', yctLevel: 2, imageEmoji: '🍎' },
  { id: 'foo-4', hanzi: '面包', pinyin: 'miànbāo', meaningVi: 'bánh mì', category: 'food', yctLevel: 2, imageEmoji: '🍞' },
  { id: 'foo-5', hanzi: '牛奶', pinyin: 'niúnǎi', meaningVi: 'sữa', category: 'food', yctLevel: 2, imageEmoji: '🥛' },
  { id: 'foo-6', hanzi: '饺子', pinyin: 'jiǎozi', meaningVi: 'sủi cảo', category: 'food', yctLevel: 3, imageEmoji: '🥟' }
];

// ==== Helper truy vấn ====
export function getVocabByCategory(category: string) {
  return vocabulary.filter((v) => v.category === category);
}

export function getVocabByYctLevel(level: number) {
  return vocabulary.filter((v) => v.yctLevel === level);
}

export const categoryMeta: Record<
  string,
  { labelVi: string; emoji: string; gradient: string }
> = {
  family: { labelVi: 'Gia đình', emoji: '👨‍👩‍👧', gradient: 'from-primary-300 to-blush-300' },
  animals: { labelVi: 'Động vật', emoji: '🐼', gradient: 'from-secondary-300 to-secondary-400' },
  colors: { labelVi: 'Màu sắc', emoji: '🌈', gradient: 'from-lavender-300 to-lavender-400' },
  numbers: { labelVi: 'Con số', emoji: '🔢', gradient: 'from-secondary-200 to-lavender-300' },
  school: { labelVi: 'Trường học', emoji: '🏫', gradient: 'from-accent-300 to-accent-400' },
  food: { labelVi: 'Thức ăn', emoji: '🍱', gradient: 'from-success-300 to-secondary-300' }
};
