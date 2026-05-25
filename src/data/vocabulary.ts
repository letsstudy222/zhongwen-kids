import type { VocabWord } from '@/types';

/**
 * Bộ từ vựng đầy đủ theo chuẩn YCT chính thức của Hanban.
 * - YCT 1: ~80 từ vựng cơ bản, đủ để giao tiếp đơn giản
 * - YCT 2: ~150 từ vựng (gồm cả YCT 1), mở rộng giao tiếp đời thường
 * - YCT 3, 4: mẫu - dự kiến mở rộng sau
 *
 * Phân loại theo 14 chủ đề để dễ học từng nhóm.
 */
export const vocabulary: VocabWord[] = [
  // ============================================================
  // CHÀO HỎI & GIAO TIẾP CƠ BẢN (GREETINGS) — YCT 1
  // ============================================================
  { id: 'gr-1', hanzi: '你好', pinyin: 'nǐ hǎo', meaningVi: 'xin chào', category: 'greetings', yctLevel: 1, imageEmoji: '👋', example: '你好,老师!', exampleVi: 'Xin chào cô giáo!' },
  { id: 'gr-2', hanzi: '再见', pinyin: 'zài jiàn', meaningVi: 'tạm biệt', category: 'greetings', yctLevel: 1, imageEmoji: '👋', example: '再见,妈妈。', exampleVi: 'Tạm biệt mẹ.' },
  { id: 'gr-3', hanzi: '谢谢', pinyin: 'xiè xie', meaningVi: 'cảm ơn', category: 'greetings', yctLevel: 1, imageEmoji: '🙏', example: '谢谢你!', exampleVi: 'Cảm ơn bạn!' },
  { id: 'gr-4', hanzi: '不客气', pinyin: 'bú kè qi', meaningVi: 'không có gì', category: 'greetings', yctLevel: 1, imageEmoji: '😊' },
  { id: 'gr-5', hanzi: '对不起', pinyin: 'duì bu qǐ', meaningVi: 'xin lỗi', category: 'greetings', yctLevel: 1, imageEmoji: '🙇', example: '对不起,我错了。', exampleVi: 'Xin lỗi, mình sai rồi.' },
  { id: 'gr-6', hanzi: '没关系', pinyin: 'méi guān xi', meaningVi: 'không sao', category: 'greetings', yctLevel: 1, imageEmoji: '🙆' },
  { id: 'gr-7', hanzi: '你好吗', pinyin: 'nǐ hǎo ma', meaningVi: 'bạn khỏe không', category: 'greetings', yctLevel: 1, imageEmoji: '🤔' },
  { id: 'gr-8', hanzi: '很好', pinyin: 'hěn hǎo', meaningVi: 'rất tốt', category: 'greetings', yctLevel: 1, imageEmoji: '👍' },
  { id: 'gr-9', hanzi: '早上好', pinyin: 'zǎo shang hǎo', meaningVi: 'chào buổi sáng', category: 'greetings', yctLevel: 2, imageEmoji: '🌅' },
  { id: 'gr-10', hanzi: '晚安', pinyin: 'wǎn ān', meaningVi: 'chúc ngủ ngon', category: 'greetings', yctLevel: 2, imageEmoji: '🌙' },
  { id: 'gr-11', hanzi: '请', pinyin: 'qǐng', meaningVi: 'xin mời', category: 'greetings', yctLevel: 2, imageEmoji: '🤲', example: '请坐。', exampleVi: 'Mời ngồi.' },
  { id: 'gr-12', hanzi: '欢迎', pinyin: 'huān yíng', meaningVi: 'hoan nghênh', category: 'greetings', yctLevel: 2, imageEmoji: '🤗' },

  // ĐẠI TỪ
  { id: 'pr-1', hanzi: '我', pinyin: 'wǒ', meaningVi: 'tôi/mình', category: 'pronouns', yctLevel: 1, imageEmoji: '🙋', example: '我是学生。', exampleVi: 'Mình là học sinh.' },
  { id: 'pr-2', hanzi: '你', pinyin: 'nǐ', meaningVi: 'bạn', category: 'pronouns', yctLevel: 1, imageEmoji: '👉' },
  { id: 'pr-3', hanzi: '他', pinyin: 'tā', meaningVi: 'anh ấy', category: 'pronouns', yctLevel: 1, imageEmoji: '👨' },
  { id: 'pr-4', hanzi: '她', pinyin: 'tā', meaningVi: 'cô ấy', category: 'pronouns', yctLevel: 1, imageEmoji: '👩' },
  { id: 'pr-5', hanzi: '我们', pinyin: 'wǒ men', meaningVi: 'chúng tôi', category: 'pronouns', yctLevel: 2, imageEmoji: '👥' },
  { id: 'pr-6', hanzi: '你们', pinyin: 'nǐ men', meaningVi: 'các bạn', category: 'pronouns', yctLevel: 2, imageEmoji: '👬' },
  { id: 'pr-7', hanzi: '他们', pinyin: 'tā men', meaningVi: 'họ', category: 'pronouns', yctLevel: 2, imageEmoji: '👨‍👨‍👦' },
  { id: 'pr-8', hanzi: '这', pinyin: 'zhè', meaningVi: 'này/đây', category: 'pronouns', yctLevel: 1, imageEmoji: '👈' },
  { id: 'pr-9', hanzi: '那', pinyin: 'nà', meaningVi: 'kia/đó', category: 'pronouns', yctLevel: 1, imageEmoji: '👉' },
  { id: 'pr-10', hanzi: '什么', pinyin: 'shén me', meaningVi: 'cái gì', category: 'pronouns', yctLevel: 1, imageEmoji: '❓', example: '这是什么?', exampleVi: 'Đây là cái gì?' },
  { id: 'pr-11', hanzi: '谁', pinyin: 'shéi', meaningVi: 'ai', category: 'pronouns', yctLevel: 2, imageEmoji: '❓' },
  { id: 'pr-12', hanzi: '哪里', pinyin: 'nǎ lǐ', meaningVi: 'ở đâu', category: 'pronouns', yctLevel: 2, imageEmoji: '📍' },
  { id: 'pr-13', hanzi: '几', pinyin: 'jǐ', meaningVi: 'mấy', category: 'pronouns', yctLevel: 1, imageEmoji: '🔢' },
  { id: 'pr-14', hanzi: '多少', pinyin: 'duō shao', meaningVi: 'bao nhiêu', category: 'pronouns', yctLevel: 2, imageEmoji: '🔢' },

  // GIA ĐÌNH
  { id: 'fam-1', hanzi: '爸爸', pinyin: 'bà ba', meaningVi: 'bố', category: 'family', yctLevel: 1, imageEmoji: '👨', example: '我爱爸爸。', exampleVi: 'Con yêu bố.' },
  { id: 'fam-2', hanzi: '妈妈', pinyin: 'mā ma', meaningVi: 'mẹ', category: 'family', yctLevel: 1, imageEmoji: '👩' },
  { id: 'fam-3', hanzi: '哥哥', pinyin: 'gē ge', meaningVi: 'anh trai', category: 'family', yctLevel: 1, imageEmoji: '👦' },
  { id: 'fam-4', hanzi: '姐姐', pinyin: 'jiě jie', meaningVi: 'chị gái', category: 'family', yctLevel: 1, imageEmoji: '👧' },
  { id: 'fam-5', hanzi: '弟弟', pinyin: 'dì di', meaningVi: 'em trai', category: 'family', yctLevel: 1, imageEmoji: '🧒' },
  { id: 'fam-6', hanzi: '妹妹', pinyin: 'mèi mei', meaningVi: 'em gái', category: 'family', yctLevel: 1, imageEmoji: '👶' },
  { id: 'fam-7', hanzi: '爷爷', pinyin: 'yé ye', meaningVi: 'ông nội', category: 'family', yctLevel: 2, imageEmoji: '👴' },
  { id: 'fam-8', hanzi: '奶奶', pinyin: 'nǎi nai', meaningVi: 'bà nội', category: 'family', yctLevel: 2, imageEmoji: '👵' },
  { id: 'fam-9', hanzi: '家', pinyin: 'jiā', meaningVi: 'nhà/gia đình', category: 'family', yctLevel: 1, imageEmoji: '🏠', example: '我爱我的家。', exampleVi: 'Mình yêu gia đình mình.' },
  { id: 'fam-10', hanzi: '人', pinyin: 'rén', meaningVi: 'người', category: 'family', yctLevel: 1, imageEmoji: '🧑' },

  // CON SỐ
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
  { id: 'num-11', hanzi: '零', pinyin: 'líng', meaningVi: 'không (0)', category: 'numbers', yctLevel: 2, imageEmoji: '0️⃣' },
  { id: 'num-12', hanzi: '百', pinyin: 'bǎi', meaningVi: 'trăm', category: 'numbers', yctLevel: 2, imageEmoji: '💯' },
  { id: 'num-13', hanzi: '岁', pinyin: 'suì', meaningVi: 'tuổi', category: 'numbers', yctLevel: 1, imageEmoji: '🎂', example: '我七岁。', exampleVi: 'Mình bảy tuổi.' },
  { id: 'num-14', hanzi: '个', pinyin: 'gè', meaningVi: '(lượng từ) cái', category: 'numbers', yctLevel: 1, imageEmoji: '📦' },

  // MÀU SẮC
  { id: 'col-1', hanzi: '红色', pinyin: 'hóng sè', meaningVi: 'màu đỏ', category: 'colors', yctLevel: 1, imageEmoji: '🔴' },
  { id: 'col-2', hanzi: '黄色', pinyin: 'huáng sè', meaningVi: 'màu vàng', category: 'colors', yctLevel: 1, imageEmoji: '🟡' },
  { id: 'col-3', hanzi: '蓝色', pinyin: 'lán sè', meaningVi: 'màu xanh dương', category: 'colors', yctLevel: 1, imageEmoji: '🔵' },
  { id: 'col-4', hanzi: '绿色', pinyin: 'lǜ sè', meaningVi: 'màu xanh lá', category: 'colors', yctLevel: 2, imageEmoji: '🟢' },
  { id: 'col-5', hanzi: '白色', pinyin: 'bái sè', meaningVi: 'màu trắng', category: 'colors', yctLevel: 1, imageEmoji: '⚪' },
  { id: 'col-6', hanzi: '黑色', pinyin: 'hēi sè', meaningVi: 'màu đen', category: 'colors', yctLevel: 2, imageEmoji: '⚫' },
  { id: 'col-7', hanzi: '颜色', pinyin: 'yán sè', meaningVi: 'màu sắc', category: 'colors', yctLevel: 2, imageEmoji: '🎨' },

  // ĐỘNG VẬT
  { id: 'ani-1', hanzi: '猫', pinyin: 'māo', meaningVi: 'mèo', category: 'animals', yctLevel: 1, imageEmoji: '🐱', example: '猫很可爱。', exampleVi: 'Mèo rất dễ thương.' },
  { id: 'ani-2', hanzi: '狗', pinyin: 'gǒu', meaningVi: 'chó', category: 'animals', yctLevel: 1, imageEmoji: '🐶' },
  { id: 'ani-3', hanzi: '鱼', pinyin: 'yú', meaningVi: 'cá', category: 'animals', yctLevel: 1, imageEmoji: '🐟' },
  { id: 'ani-4', hanzi: '鸟', pinyin: 'niǎo', meaningVi: 'chim', category: 'animals', yctLevel: 2, imageEmoji: '🐦' },
  { id: 'ani-5', hanzi: '兔子', pinyin: 'tù zi', meaningVi: 'thỏ', category: 'animals', yctLevel: 2, imageEmoji: '🐰' },
  { id: 'ani-6', hanzi: '熊猫', pinyin: 'xióng māo', meaningVi: 'gấu trúc', category: 'animals', yctLevel: 2, imageEmoji: '🐼' },
  { id: 'ani-7', hanzi: '马', pinyin: 'mǎ', meaningVi: 'ngựa', category: 'animals', yctLevel: 2, imageEmoji: '🐴' },
  { id: 'ani-8', hanzi: '牛', pinyin: 'niú', meaningVi: 'bò', category: 'animals', yctLevel: 2, imageEmoji: '🐮' },

  // TRƯỜNG HỌC
  { id: 'sch-1', hanzi: '老师', pinyin: 'lǎo shī', meaningVi: 'thầy/cô giáo', category: 'school', yctLevel: 1, imageEmoji: '👩‍🏫' },
  { id: 'sch-2', hanzi: '学生', pinyin: 'xué sheng', meaningVi: 'học sinh', category: 'school', yctLevel: 1, imageEmoji: '🎒' },
  { id: 'sch-3', hanzi: '书', pinyin: 'shū', meaningVi: 'sách', category: 'school', yctLevel: 1, imageEmoji: '📕' },
  { id: 'sch-4', hanzi: '笔', pinyin: 'bǐ', meaningVi: 'bút', category: 'school', yctLevel: 2, imageEmoji: '✏️' },
  { id: 'sch-5', hanzi: '学校', pinyin: 'xué xiào', meaningVi: 'trường học', category: 'school', yctLevel: 2, imageEmoji: '🏫' },
  { id: 'sch-6', hanzi: '同学', pinyin: 'tóng xué', meaningVi: 'bạn học', category: 'school', yctLevel: 2, imageEmoji: '👫' },
  { id: 'sch-7', hanzi: '中文', pinyin: 'zhōng wén', meaningVi: 'tiếng Trung', category: 'school', yctLevel: 1, imageEmoji: '🇨🇳', example: '我学中文。', exampleVi: 'Mình học tiếng Trung.' },
  { id: 'sch-8', hanzi: '汉语', pinyin: 'hàn yǔ', meaningVi: 'Hán ngữ', category: 'school', yctLevel: 2, imageEmoji: '📖' },
  { id: 'sch-9', hanzi: '字', pinyin: 'zì', meaningVi: 'chữ', category: 'school', yctLevel: 2, imageEmoji: '🔤' },
  { id: 'sch-10', hanzi: '名字', pinyin: 'míng zi', meaningVi: 'tên', category: 'school', yctLevel: 1, imageEmoji: '🏷️', example: '我的名字叫小明。', exampleVi: 'Mình tên là Tiểu Minh.' },

  // THỨC ĂN
  { id: 'foo-1', hanzi: '米饭', pinyin: 'mǐ fàn', meaningVi: 'cơm', category: 'food', yctLevel: 2, imageEmoji: '🍚' },
  { id: 'foo-2', hanzi: '水', pinyin: 'shuǐ', meaningVi: 'nước', category: 'food', yctLevel: 1, imageEmoji: '💧' },
  { id: 'foo-3', hanzi: '苹果', pinyin: 'píng guǒ', meaningVi: 'táo', category: 'food', yctLevel: 1, imageEmoji: '🍎' },
  { id: 'foo-4', hanzi: '面包', pinyin: 'miàn bāo', meaningVi: 'bánh mì', category: 'food', yctLevel: 2, imageEmoji: '🍞' },
  { id: 'foo-5', hanzi: '牛奶', pinyin: 'niú nǎi', meaningVi: 'sữa', category: 'food', yctLevel: 2, imageEmoji: '🥛' },
  { id: 'foo-6', hanzi: '茶', pinyin: 'chá', meaningVi: 'trà', category: 'food', yctLevel: 2, imageEmoji: '🍵' },
  { id: 'foo-7', hanzi: '吃', pinyin: 'chī', meaningVi: 'ăn', category: 'food', yctLevel: 1, imageEmoji: '😋', example: '我吃苹果。', exampleVi: 'Mình ăn táo.' },
  { id: 'foo-8', hanzi: '喝', pinyin: 'hē', meaningVi: 'uống', category: 'food', yctLevel: 1, imageEmoji: '🥤', example: '我喝水。', exampleVi: 'Mình uống nước.' },

  // BỘ PHẬN CƠ THỂ
  { id: 'bo-1', hanzi: '头', pinyin: 'tóu', meaningVi: 'đầu', category: 'body', yctLevel: 2, imageEmoji: '🗣️' },
  { id: 'bo-2', hanzi: '眼睛', pinyin: 'yǎn jing', meaningVi: 'mắt', category: 'body', yctLevel: 2, imageEmoji: '👁️' },
  { id: 'bo-3', hanzi: '鼻子', pinyin: 'bí zi', meaningVi: 'mũi', category: 'body', yctLevel: 2, imageEmoji: '👃' },
  { id: 'bo-4', hanzi: '嘴', pinyin: 'zuǐ', meaningVi: 'miệng', category: 'body', yctLevel: 2, imageEmoji: '👄' },
  { id: 'bo-5', hanzi: '耳朵', pinyin: 'ěr duo', meaningVi: 'tai', category: 'body', yctLevel: 2, imageEmoji: '👂' },
  { id: 'bo-6', hanzi: '手', pinyin: 'shǒu', meaningVi: 'tay', category: 'body', yctLevel: 2, imageEmoji: '✋' },
  { id: 'bo-7', hanzi: '脚', pinyin: 'jiǎo', meaningVi: 'chân', category: 'body', yctLevel: 2, imageEmoji: '🦶' },

  // THỜI GIAN
  { id: 'ti-1', hanzi: '今天', pinyin: 'jīn tiān', meaningVi: 'hôm nay', category: 'time', yctLevel: 2, imageEmoji: '📅' },
  { id: 'ti-2', hanzi: '明天', pinyin: 'míng tiān', meaningVi: 'ngày mai', category: 'time', yctLevel: 2, imageEmoji: '🗓️' },
  { id: 'ti-3', hanzi: '昨天', pinyin: 'zuó tiān', meaningVi: 'hôm qua', category: 'time', yctLevel: 2, imageEmoji: '📆' },
  { id: 'ti-4', hanzi: '现在', pinyin: 'xiàn zài', meaningVi: 'bây giờ', category: 'time', yctLevel: 2, imageEmoji: '⏰' },
  { id: 'ti-5', hanzi: '年', pinyin: 'nián', meaningVi: 'năm', category: 'time', yctLevel: 2, imageEmoji: '📅' },
  { id: 'ti-6', hanzi: '月', pinyin: 'yuè', meaningVi: 'tháng', category: 'time', yctLevel: 2, imageEmoji: '🌙' },
  { id: 'ti-7', hanzi: '日', pinyin: 'rì', meaningVi: 'ngày', category: 'time', yctLevel: 2, imageEmoji: '☀️' },
  { id: 'ti-8', hanzi: '星期', pinyin: 'xīng qī', meaningVi: 'tuần', category: 'time', yctLevel: 2, imageEmoji: '📆' },
  { id: 'ti-9', hanzi: '点', pinyin: 'diǎn', meaningVi: 'giờ', category: 'time', yctLevel: 2, imageEmoji: '🕐' },
  { id: 'ti-10', hanzi: '生日', pinyin: 'shēng rì', meaningVi: 'sinh nhật', category: 'time', yctLevel: 2, imageEmoji: '🎂' },

  // ĐỘNG TỪ
  { id: 've-1', hanzi: '是', pinyin: 'shì', meaningVi: 'là', category: 'verbs', yctLevel: 1, imageEmoji: '✅', example: '我是学生。', exampleVi: 'Mình là học sinh.' },
  { id: 've-2', hanzi: '有', pinyin: 'yǒu', meaningVi: 'có', category: 'verbs', yctLevel: 1, imageEmoji: '✋' },
  { id: 've-3', hanzi: '不', pinyin: 'bù', meaningVi: 'không', category: 'verbs', yctLevel: 1, imageEmoji: '🚫' },
  { id: 've-4', hanzi: '没有', pinyin: 'méi yǒu', meaningVi: 'không có', category: 'verbs', yctLevel: 1, imageEmoji: '🙅' },
  { id: 've-5', hanzi: '叫', pinyin: 'jiào', meaningVi: 'tên/gọi', category: 'verbs', yctLevel: 1, imageEmoji: '📢' },
  { id: 've-6', hanzi: '爱', pinyin: 'ài', meaningVi: 'yêu', category: 'verbs', yctLevel: 1, imageEmoji: '❤️' },
  { id: 've-7', hanzi: '喜欢', pinyin: 'xǐ huan', meaningVi: 'thích', category: 'verbs', yctLevel: 1, imageEmoji: '👍' },
  { id: 've-8', hanzi: '看', pinyin: 'kàn', meaningVi: 'xem/nhìn', category: 'verbs', yctLevel: 1, imageEmoji: '👀' },
  { id: 've-9', hanzi: '听', pinyin: 'tīng', meaningVi: 'nghe', category: 'verbs', yctLevel: 2, imageEmoji: '👂' },
  { id: 've-10', hanzi: '说', pinyin: 'shuō', meaningVi: 'nói', category: 'verbs', yctLevel: 2, imageEmoji: '🗣️' },
  { id: 've-11', hanzi: '读', pinyin: 'dú', meaningVi: 'đọc', category: 'verbs', yctLevel: 2, imageEmoji: '📖' },
  { id: 've-12', hanzi: '写', pinyin: 'xiě', meaningVi: 'viết', category: 'verbs', yctLevel: 2, imageEmoji: '✍️' },
  { id: 've-13', hanzi: '去', pinyin: 'qù', meaningVi: 'đi', category: 'verbs', yctLevel: 2, imageEmoji: '🚶' },
  { id: 've-14', hanzi: '来', pinyin: 'lái', meaningVi: 'đến', category: 'verbs', yctLevel: 2, imageEmoji: '🏃' },
  { id: 've-15', hanzi: '在', pinyin: 'zài', meaningVi: 'ở/đang', category: 'verbs', yctLevel: 2, imageEmoji: '📍' },
  { id: 've-16', hanzi: '想', pinyin: 'xiǎng', meaningVi: 'muốn/nghĩ', category: 'verbs', yctLevel: 2, imageEmoji: '💭' },
  { id: 've-17', hanzi: '学习', pinyin: 'xué xí', meaningVi: 'học tập', category: 'verbs', yctLevel: 2, imageEmoji: '📚' },
  { id: 've-18', hanzi: '坐', pinyin: 'zuò', meaningVi: 'ngồi', category: 'verbs', yctLevel: 2, imageEmoji: '🪑' },
  { id: 've-19', hanzi: '站', pinyin: 'zhàn', meaningVi: 'đứng', category: 'verbs', yctLevel: 2, imageEmoji: '🧍' },
  { id: 've-20', hanzi: '走', pinyin: 'zǒu', meaningVi: 'đi bộ', category: 'verbs', yctLevel: 2, imageEmoji: '🚶' },

  // TÍNH TỪ
  { id: 'ad-1', hanzi: '好', pinyin: 'hǎo', meaningVi: 'tốt', category: 'adjectives', yctLevel: 1, imageEmoji: '👍' },
  { id: 'ad-2', hanzi: '大', pinyin: 'dà', meaningVi: 'to/lớn', category: 'adjectives', yctLevel: 1, imageEmoji: '🐘' },
  { id: 'ad-3', hanzi: '小', pinyin: 'xiǎo', meaningVi: 'nhỏ/bé', category: 'adjectives', yctLevel: 1, imageEmoji: '🐭' },
  { id: 'ad-4', hanzi: '多', pinyin: 'duō', meaningVi: 'nhiều', category: 'adjectives', yctLevel: 2, imageEmoji: '➕' },
  { id: 'ad-5', hanzi: '少', pinyin: 'shǎo', meaningVi: 'ít', category: 'adjectives', yctLevel: 2, imageEmoji: '➖' },
  { id: 'ad-6', hanzi: '高', pinyin: 'gāo', meaningVi: 'cao', category: 'adjectives', yctLevel: 2, imageEmoji: '🦒' },
  { id: 'ad-7', hanzi: '矮', pinyin: 'ǎi', meaningVi: 'thấp', category: 'adjectives', yctLevel: 2, imageEmoji: '👶' },
  { id: 'ad-8', hanzi: '漂亮', pinyin: 'piào liang', meaningVi: 'đẹp', category: 'adjectives', yctLevel: 2, imageEmoji: '🌸' },
  { id: 'ad-9', hanzi: '可爱', pinyin: 'kě ài', meaningVi: 'dễ thương', category: 'adjectives', yctLevel: 2, imageEmoji: '🥰' },
  { id: 'ad-10', hanzi: '很', pinyin: 'hěn', meaningVi: 'rất', category: 'adjectives', yctLevel: 1, imageEmoji: '⭐' },
  { id: 'ad-11', hanzi: '太', pinyin: 'tài', meaningVi: 'quá', category: 'adjectives', yctLevel: 2, imageEmoji: '💯' },
  { id: 'ad-12', hanzi: '快', pinyin: 'kuài', meaningVi: 'nhanh', category: 'adjectives', yctLevel: 2, imageEmoji: '⚡' },
  { id: 'ad-13', hanzi: '慢', pinyin: 'màn', meaningVi: 'chậm', category: 'adjectives', yctLevel: 2, imageEmoji: '🐢' },

  // ĐỒ VẬT TRONG NHÀ
  { id: 'ho-1', hanzi: '桌子', pinyin: 'zhuō zi', meaningVi: 'bàn', category: 'home', yctLevel: 2, imageEmoji: '🪑' },
  { id: 'ho-2', hanzi: '椅子', pinyin: 'yǐ zi', meaningVi: 'ghế', category: 'home', yctLevel: 2, imageEmoji: '🪑' },
  { id: 'ho-3', hanzi: '电视', pinyin: 'diàn shì', meaningVi: 'tivi', category: 'home', yctLevel: 2, imageEmoji: '📺' },
  { id: 'ho-4', hanzi: '电话', pinyin: 'diàn huà', meaningVi: 'điện thoại', category: 'home', yctLevel: 2, imageEmoji: '📞' },
  { id: 'ho-5', hanzi: '电脑', pinyin: 'diàn nǎo', meaningVi: 'máy tính', category: 'home', yctLevel: 2, imageEmoji: '💻' },
  { id: 'ho-6', hanzi: '门', pinyin: 'mén', meaningVi: 'cửa', category: 'home', yctLevel: 2, imageEmoji: '🚪' },

  // THIÊN NHIÊN
  { id: 'na-1', hanzi: '天', pinyin: 'tiān', meaningVi: 'trời', category: 'nature', yctLevel: 2, imageEmoji: '☁️' },
  { id: 'na-2', hanzi: '云', pinyin: 'yún', meaningVi: 'mây', category: 'nature', yctLevel: 2, imageEmoji: '☁️' },
  { id: 'na-3', hanzi: '雨', pinyin: 'yǔ', meaningVi: 'mưa', category: 'nature', yctLevel: 2, imageEmoji: '🌧️' },
  { id: 'na-4', hanzi: '风', pinyin: 'fēng', meaningVi: 'gió', category: 'nature', yctLevel: 2, imageEmoji: '💨' },
  { id: 'na-5', hanzi: '山', pinyin: 'shān', meaningVi: 'núi', category: 'nature', yctLevel: 2, imageEmoji: '⛰️' },
  { id: 'na-6', hanzi: '花', pinyin: 'huā', meaningVi: 'hoa', category: 'nature', yctLevel: 2, imageEmoji: '🌸' },
  { id: 'na-7', hanzi: '树', pinyin: 'shù', meaningVi: 'cây', category: 'nature', yctLevel: 2, imageEmoji: '🌳' },
  { id: 'na-8', hanzi: '太阳', pinyin: 'tài yáng', meaningVi: 'mặt trời', category: 'nature', yctLevel: 2, imageEmoji: '☀️' },
  { id: 'na-9', hanzi: '月亮', pinyin: 'yuè liang', meaningVi: 'mặt trăng', category: 'nature', yctLevel: 2, imageEmoji: '🌙' }
];

// HELPERS
export function getVocabByCategory(category: string) {
  return vocabulary.filter((v) => v.category === category);
}

export function getVocabByYctLevel(level: number) {
  return vocabulary.filter((v) => v.yctLevel === level);
}

export function getVocabUpToLevel(level: number) {
  return vocabulary.filter((v) => v.yctLevel <= level);
}

export const categoryMeta: Record<
  string,
  { labelVi: string; emoji: string; gradient: string; order: number }
> = {
  greetings: { labelVi: 'Chào hỏi', emoji: '👋', gradient: 'from-primary-300 to-blush-300', order: 1 },
  pronouns: { labelVi: 'Đại từ', emoji: '🙋', gradient: 'from-secondary-200 to-lavender-300', order: 2 },
  numbers: { labelVi: 'Con số', emoji: '🔢', gradient: 'from-lavender-300 to-lavender-400', order: 3 },
  colors: { labelVi: 'Màu sắc', emoji: '🌈', gradient: 'from-accent-300 to-primary-300', order: 4 },
  family: { labelVi: 'Gia đình', emoji: '👨‍👩‍👧', gradient: 'from-primary-300 to-accent-300', order: 5 },
  body: { labelVi: 'Cơ thể', emoji: '👁️', gradient: 'from-blush-300 to-primary-300', order: 6 },
  animals: { labelVi: 'Động vật', emoji: '🐼', gradient: 'from-secondary-300 to-secondary-400', order: 7 },
  food: { labelVi: 'Thức ăn', emoji: '🍱', gradient: 'from-success-300 to-secondary-300', order: 8 },
  school: { labelVi: 'Trường học', emoji: '🏫', gradient: 'from-accent-300 to-accent-400', order: 9 },
  home: { labelVi: 'Đồ vật trong nhà', emoji: '🏠', gradient: 'from-accent-200 to-accent-300', order: 10 },
  time: { labelVi: 'Thời gian', emoji: '⏰', gradient: 'from-lavender-300 to-secondary-300', order: 11 },
  verbs: { labelVi: 'Động từ', emoji: '🏃', gradient: 'from-secondary-300 to-success-300', order: 12 },
  adjectives: { labelVi: 'Tính từ', emoji: '✨', gradient: 'from-primary-300 to-lavender-300', order: 13 },
  nature: { labelVi: 'Thiên nhiên', emoji: '🌳', gradient: 'from-success-300 to-success-400', order: 14 }
};
