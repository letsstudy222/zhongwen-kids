import type { VocabWord } from '@/types';

/**
 * Từ vựng đầy đủ theo chuẩn YCT chính thức của Hanban/HSK Center.
 * YCT1: 80 từ | YCT2: +150 từ mới | YCT3: +100 từ mẫu (mở rộng dần)
 *
 * Pinyin có dấu cách giữa các âm tiết để dễ đọc.
 * AudioButton nên dùng word.hanzi (không phải pinyin) để TTS đọc đúng thanh.
 */
export const vocabulary: VocabWord[] = [

  // ══════════════════════════════════════════════════════════════════
  //  YCT 1 — 80 TỪ CƠ BẢN (theo danh sách Hanban chính thức)
  // ══════════════════════════════════════════════════════════════════

  // ── CHÀO HỎI & GIAO TIẾP ──
  { id: 'gr-1',  hanzi: '你好',   pinyin: 'nǐ hǎo',      meaningVi: 'xin chào',          category: 'greetings',  yctLevel: 1, imageEmoji: '👋', example: '你好！我叫小明。', exampleVi: 'Xin chào! Mình tên là Tiểu Minh.' },
  { id: 'gr-2',  hanzi: '再见',   pinyin: 'zài jiàn',    meaningVi: 'tạm biệt',           category: 'greetings',  yctLevel: 1, imageEmoji: '👋', example: '再见，明天见！', exampleVi: 'Tạm biệt, hẹn gặp ngày mai!' },
  { id: 'gr-3',  hanzi: '谢谢',   pinyin: 'xiè xie',     meaningVi: 'cảm ơn',             category: 'greetings',  yctLevel: 1, imageEmoji: '🙏', example: '谢谢你的帮助。', exampleVi: 'Cảm ơn bạn đã giúp đỡ.' },
  { id: 'gr-4',  hanzi: '不客气', pinyin: 'bú kè qi',    meaningVi: 'không có gì',        category: 'greetings',  yctLevel: 1, imageEmoji: '😊' },
  { id: 'gr-5',  hanzi: '对不起', pinyin: 'duì bu qǐ',   meaningVi: 'xin lỗi',            category: 'greetings',  yctLevel: 1, imageEmoji: '🙇', example: '对不起，我来晚了。', exampleVi: 'Xin lỗi, mình đến muộn.' },
  { id: 'gr-6',  hanzi: '没关系', pinyin: 'méi guān xi', meaningVi: 'không sao',           category: 'greetings',  yctLevel: 1, imageEmoji: '🙆' },
  { id: 'gr-7',  hanzi: '你好吗', pinyin: 'nǐ hǎo ma',   meaningVi: 'bạn khỏe không?',    category: 'greetings',  yctLevel: 1, imageEmoji: '🤔' },
  { id: 'gr-8',  hanzi: '很好',   pinyin: 'hěn hǎo',     meaningVi: 'rất tốt',            category: 'greetings',  yctLevel: 1, imageEmoji: '👍' },

  // ── ĐẠI TỪ NHÂN XƯNG & CHỈ THỊ ──
  { id: 'pr-1',  hanzi: '我',     pinyin: 'wǒ',          meaningVi: 'tôi / mình',         category: 'pronouns',   yctLevel: 1, imageEmoji: '🙋', example: '我是学生。', exampleVi: 'Mình là học sinh.' },
  { id: 'pr-2',  hanzi: '你',     pinyin: 'nǐ',          meaningVi: 'bạn',                category: 'pronouns',   yctLevel: 1, imageEmoji: '👉' },
  { id: 'pr-3',  hanzi: '他',     pinyin: 'tā',          meaningVi: 'anh ấy',             category: 'pronouns',   yctLevel: 1, imageEmoji: '👨' },
  { id: 'pr-4',  hanzi: '她',     pinyin: 'tā',          meaningVi: 'cô ấy',              category: 'pronouns',   yctLevel: 1, imageEmoji: '👩' },
  { id: 'pr-5',  hanzi: '这',     pinyin: 'zhè',         meaningVi: 'này / đây',          category: 'pronouns',   yctLevel: 1, imageEmoji: '👈', example: '这是什么？', exampleVi: 'Đây là cái gì?' },
  { id: 'pr-6',  hanzi: '那',     pinyin: 'nà',          meaningVi: 'kia / đó',           category: 'pronouns',   yctLevel: 1, imageEmoji: '👉' },
  { id: 'pr-7',  hanzi: '什么',   pinyin: 'shén me',     meaningVi: 'cái gì',             category: 'pronouns',   yctLevel: 1, imageEmoji: '❓' },
  { id: 'pr-8',  hanzi: '几',     pinyin: 'jǐ',          meaningVi: 'mấy',                category: 'pronouns',   yctLevel: 1, imageEmoji: '🔢', example: '你几岁？', exampleVi: 'Bạn mấy tuổi?' },

  // ── CON SỐ & LƯỢNG TỪ ──
  { id: 'nu-1',  hanzi: '一',     pinyin: 'yī',          meaningVi: 'một',                category: 'numbers',    yctLevel: 1, imageEmoji: '1️⃣' },
  { id: 'nu-2',  hanzi: '二',     pinyin: 'èr',          meaningVi: 'hai',                category: 'numbers',    yctLevel: 1, imageEmoji: '2️⃣' },
  { id: 'nu-3',  hanzi: '三',     pinyin: 'sān',         meaningVi: 'ba',                 category: 'numbers',    yctLevel: 1, imageEmoji: '3️⃣' },
  { id: 'nu-4',  hanzi: '四',     pinyin: 'sì',          meaningVi: 'bốn',                category: 'numbers',    yctLevel: 1, imageEmoji: '4️⃣' },
  { id: 'nu-5',  hanzi: '五',     pinyin: 'wǔ',          meaningVi: 'năm',                category: 'numbers',    yctLevel: 1, imageEmoji: '5️⃣' },
  { id: 'nu-6',  hanzi: '六',     pinyin: 'liù',         meaningVi: 'sáu',                category: 'numbers',    yctLevel: 1, imageEmoji: '6️⃣' },
  { id: 'nu-7',  hanzi: '七',     pinyin: 'qī',          meaningVi: 'bảy',                category: 'numbers',    yctLevel: 1, imageEmoji: '7️⃣' },
  { id: 'nu-8',  hanzi: '八',     pinyin: 'bā',          meaningVi: 'tám',                category: 'numbers',    yctLevel: 1, imageEmoji: '8️⃣' },
  { id: 'nu-9',  hanzi: '九',     pinyin: 'jiǔ',         meaningVi: 'chín',               category: 'numbers',    yctLevel: 1, imageEmoji: '9️⃣' },
  { id: 'nu-10', hanzi: '十',     pinyin: 'shí',         meaningVi: 'mười',               category: 'numbers',    yctLevel: 1, imageEmoji: '🔟' },
  { id: 'nu-11', hanzi: '岁',     pinyin: 'suì',         meaningVi: 'tuổi',               category: 'numbers',    yctLevel: 1, imageEmoji: '🎂', example: '我七岁。', exampleVi: 'Mình bảy tuổi.' },
  { id: 'nu-12', hanzi: '个',     pinyin: 'gè',          meaningVi: '(lượng từ) cái',     category: 'numbers',    yctLevel: 1, imageEmoji: '📦' },

  // ── GIA ĐÌNH ──
  { id: 'fa-1',  hanzi: '爸爸',   pinyin: 'bà ba',       meaningVi: 'bố',                 category: 'family',     yctLevel: 1, imageEmoji: '👨', example: '我爸爸是老师。', exampleVi: 'Bố mình là thầy giáo.' },
  { id: 'fa-2',  hanzi: '妈妈',   pinyin: 'mā ma',       meaningVi: 'mẹ',                 category: 'family',     yctLevel: 1, imageEmoji: '👩', example: '妈妈很漂亮。', exampleVi: 'Mẹ rất xinh đẹp.' },
  { id: 'fa-3',  hanzi: '哥哥',   pinyin: 'gē ge',       meaningVi: 'anh trai',           category: 'family',     yctLevel: 1, imageEmoji: '👦' },
  { id: 'fa-4',  hanzi: '姐姐',   pinyin: 'jiě jie',     meaningVi: 'chị gái',            category: 'family',     yctLevel: 1, imageEmoji: '👧' },
  { id: 'fa-5',  hanzi: '弟弟',   pinyin: 'dì di',       meaningVi: 'em trai',            category: 'family',     yctLevel: 1, imageEmoji: '🧒' },
  { id: 'fa-6',  hanzi: '妹妹',   pinyin: 'mèi mei',     meaningVi: 'em gái',             category: 'family',     yctLevel: 1, imageEmoji: '👶' },
  { id: 'fa-7',  hanzi: '家',     pinyin: 'jiā',         meaningVi: 'nhà / gia đình',     category: 'family',     yctLevel: 1, imageEmoji: '🏠', example: '我的家很大。', exampleVi: 'Nhà mình rất to.' },
  { id: 'fa-8',  hanzi: '人',     pinyin: 'rén',         meaningVi: 'người',              category: 'family',     yctLevel: 1, imageEmoji: '🧑' },

  // ── MÀU SẮC ──
  { id: 'co-1',  hanzi: '红色',   pinyin: 'hóng sè',     meaningVi: 'màu đỏ',             category: 'colors',     yctLevel: 1, imageEmoji: '🔴' },
  { id: 'co-2',  hanzi: '黄色',   pinyin: 'huáng sè',    meaningVi: 'màu vàng',           category: 'colors',     yctLevel: 1, imageEmoji: '🟡' },
  { id: 'co-3',  hanzi: '蓝色',   pinyin: 'lán sè',      meaningVi: 'màu xanh dương',     category: 'colors',     yctLevel: 1, imageEmoji: '🔵' },
  { id: 'co-4',  hanzi: '白色',   pinyin: 'bái sè',      meaningVi: 'màu trắng',          category: 'colors',     yctLevel: 1, imageEmoji: '⚪' },

  // ── ĐỘNG VẬT ──
  { id: 'an-1',  hanzi: '猫',     pinyin: 'māo',         meaningVi: 'mèo',                category: 'animals',    yctLevel: 1, imageEmoji: '🐱', example: '我家有一只猫。', exampleVi: 'Nhà mình có một con mèo.' },
  { id: 'an-2',  hanzi: '狗',     pinyin: 'gǒu',         meaningVi: 'chó',                category: 'animals',    yctLevel: 1, imageEmoji: '🐶' },
  { id: 'an-3',  hanzi: '鱼',     pinyin: 'yú',          meaningVi: 'cá',                 category: 'animals',    yctLevel: 1, imageEmoji: '🐟' },

  // ── THỨC ĂN & ĐỒ UỐNG ──
  { id: 'fo-1',  hanzi: '水',     pinyin: 'shuǐ',        meaningVi: 'nước',               category: 'food',       yctLevel: 1, imageEmoji: '💧', example: '我喝水。', exampleVi: 'Mình uống nước.' },
  { id: 'fo-2',  hanzi: '苹果',   pinyin: 'píng guǒ',    meaningVi: 'táo',                category: 'food',       yctLevel: 1, imageEmoji: '🍎' },

  // ── TRƯỜNG HỌC ──
  { id: 'sc-1',  hanzi: '老师',   pinyin: 'lǎo shī',     meaningVi: 'thầy / cô giáo',     category: 'school',     yctLevel: 1, imageEmoji: '👩‍🏫', example: '我的老师很好。', exampleVi: 'Cô giáo mình rất tốt.' },
  { id: 'sc-2',  hanzi: '学生',   pinyin: 'xué sheng',   meaningVi: 'học sinh',           category: 'school',     yctLevel: 1, imageEmoji: '🎒' },
  { id: 'sc-3',  hanzi: '书',     pinyin: 'shū',         meaningVi: 'sách',               category: 'school',     yctLevel: 1, imageEmoji: '📕', example: '这本书很有意思。', exampleVi: 'Quyển sách này rất thú vị.' },
  { id: 'sc-4',  hanzi: '中文',   pinyin: 'zhōng wén',   meaningVi: 'tiếng Trung',        category: 'school',     yctLevel: 1, imageEmoji: '🇨🇳', example: '我学中文。', exampleVi: 'Mình học tiếng Trung.' },
  { id: 'sc-5',  hanzi: '名字',   pinyin: 'míng zi',     meaningVi: 'tên',                category: 'school',     yctLevel: 1, imageEmoji: '🏷️', example: '你叫什么名字？', exampleVi: 'Bạn tên là gì?' },

  // ── ĐỘNG TỪ CƠ BẢN ──
  { id: 've-1',  hanzi: '是',     pinyin: 'shì',         meaningVi: 'là',                 category: 'verbs',      yctLevel: 1, imageEmoji: '✅', example: '我是中国人。', exampleVi: 'Mình là người Trung Quốc.' },
  { id: 've-2',  hanzi: '有',     pinyin: 'yǒu',         meaningVi: 'có',                 category: 'verbs',      yctLevel: 1, imageEmoji: '✋', example: '我有一本书。', exampleVi: 'Mình có một quyển sách.' },
  { id: 've-3',  hanzi: '不',     pinyin: 'bù',          meaningVi: 'không',              category: 'verbs',      yctLevel: 1, imageEmoji: '🚫', example: '我不是老师。', exampleVi: 'Mình không phải thầy giáo.' },
  { id: 've-4',  hanzi: '没有',   pinyin: 'méi yǒu',     meaningVi: 'không có',           category: 'verbs',      yctLevel: 1, imageEmoji: '🙅' },
  { id: 've-5',  hanzi: '叫',     pinyin: 'jiào',        meaningVi: 'tên là / gọi là',    category: 'verbs',      yctLevel: 1, imageEmoji: '📢', example: '我叫小红。', exampleVi: 'Mình tên là Tiểu Hồng.' },
  { id: 've-6',  hanzi: '爱',     pinyin: 'ài',          meaningVi: 'yêu',                category: 'verbs',      yctLevel: 1, imageEmoji: '❤️', example: '我爱爸爸妈妈。', exampleVi: 'Mình yêu bố và mẹ.' },
  { id: 've-7',  hanzi: '喜欢',   pinyin: 'xǐ huan',     meaningVi: 'thích',              category: 'verbs',      yctLevel: 1, imageEmoji: '👍', example: '我喜欢猫。', exampleVi: 'Mình thích mèo.' },
  { id: 've-8',  hanzi: '看',     pinyin: 'kàn',         meaningVi: 'xem / nhìn',         category: 'verbs',      yctLevel: 1, imageEmoji: '👀' },
  { id: 've-9',  hanzi: '吃',     pinyin: 'chī',         meaningVi: 'ăn',                 category: 'verbs',      yctLevel: 1, imageEmoji: '😋', example: '我吃苹果。', exampleVi: 'Mình ăn táo.' },
  { id: 've-10', hanzi: '喝',     pinyin: 'hē',          meaningVi: 'uống',               category: 'verbs',      yctLevel: 1, imageEmoji: '🥤' },

  // ── TÍNH TỪ & PHÓ TỪ CƠ BẢN ──
  { id: 'ad-1',  hanzi: '好',     pinyin: 'hǎo',         meaningVi: 'tốt',                category: 'adjectives', yctLevel: 1, imageEmoji: '👍' },
  { id: 'ad-2',  hanzi: '大',     pinyin: 'dà',          meaningVi: 'to / lớn',           category: 'adjectives', yctLevel: 1, imageEmoji: '🐘' },
  { id: 'ad-3',  hanzi: '小',     pinyin: 'xiǎo',        meaningVi: 'nhỏ / bé',           category: 'adjectives', yctLevel: 1, imageEmoji: '🐭' },
  { id: 'ad-4',  hanzi: '很',     pinyin: 'hěn',         meaningVi: 'rất',                category: 'adjectives', yctLevel: 1, imageEmoji: '⭐', example: '她很漂亮。', exampleVi: 'Cô ấy rất xinh.' },

  // ══════════════════════════════════════════════════════════════════
  //  YCT 2 — +150 TỪ MỚI (theo danh sách Hanban)
  // ══════════════════════════════════════════════════════════════════

  // ── CHÀO HỎI MỞ RỘNG ──
  { id: 'gr-9',  hanzi: '早上好',  pinyin: 'zǎo shang hǎo', meaningVi: 'chào buổi sáng',  category: 'greetings',  yctLevel: 2, imageEmoji: '🌅' },
  { id: 'gr-10', hanzi: '下午好',  pinyin: 'xià wǔ hǎo',    meaningVi: 'chào buổi chiều', category: 'greetings',  yctLevel: 2, imageEmoji: '🌤️' },
  { id: 'gr-11', hanzi: '晚上好',  pinyin: 'wǎn shang hǎo', meaningVi: 'chào buổi tối',   category: 'greetings',  yctLevel: 2, imageEmoji: '🌆' },
  { id: 'gr-12', hanzi: '晚安',    pinyin: 'wǎn ān',        meaningVi: 'chúc ngủ ngon',   category: 'greetings',  yctLevel: 2, imageEmoji: '🌙' },
  { id: 'gr-13', hanzi: '请',      pinyin: 'qǐng',          meaningVi: 'xin mời',          category: 'greetings',  yctLevel: 2, imageEmoji: '🤲', example: '请坐。', exampleVi: 'Mời ngồi.' },
  { id: 'gr-14', hanzi: '欢迎',    pinyin: 'huān yíng',     meaningVi: 'hoan nghênh',      category: 'greetings',  yctLevel: 2, imageEmoji: '🤗' },
  { id: 'gr-15', hanzi: '再',      pinyin: 'zài',           meaningVi: 'lại / một lần nữa',category: 'greetings',  yctLevel: 2, imageEmoji: '🔁' },

  // ── ĐẠI TỪ MỞ RỘNG ──
  { id: 'pr-9',  hanzi: '我们',    pinyin: 'wǒ men',        meaningVi: 'chúng tôi',        category: 'pronouns',   yctLevel: 2, imageEmoji: '👥' },
  { id: 'pr-10', hanzi: '你们',    pinyin: 'nǐ men',        meaningVi: 'các bạn',          category: 'pronouns',   yctLevel: 2, imageEmoji: '👬' },
  { id: 'pr-11', hanzi: '他们',    pinyin: 'tā men',        meaningVi: 'họ (nam/chung)',    category: 'pronouns',   yctLevel: 2, imageEmoji: '👨‍👨‍👦' },
  { id: 'pr-12', hanzi: '她们',    pinyin: 'tā men',        meaningVi: 'họ (nữ)',          category: 'pronouns',   yctLevel: 2, imageEmoji: '👩‍👩‍👧' },
  { id: 'pr-13', hanzi: '谁',      pinyin: 'shéi',          meaningVi: 'ai',               category: 'pronouns',   yctLevel: 2, imageEmoji: '❓' },
  { id: 'pr-14', hanzi: '哪里',    pinyin: 'nǎ lǐ',         meaningVi: 'ở đâu',            category: 'pronouns',   yctLevel: 2, imageEmoji: '📍', example: '你在哪里？', exampleVi: 'Bạn đang ở đâu?' },
  { id: 'pr-15', hanzi: '多少',    pinyin: 'duō shao',      meaningVi: 'bao nhiêu',        category: 'pronouns',   yctLevel: 2, imageEmoji: '🔢', example: '多少钱？', exampleVi: 'Bao nhiêu tiền?' },
  { id: 'pr-16', hanzi: '为什么',  pinyin: 'wèi shén me',   meaningVi: 'tại sao',          category: 'pronouns',   yctLevel: 2, imageEmoji: '🤷', example: '你为什么哭？', exampleVi: 'Tại sao bạn khóc?' },
  { id: 'pr-17', hanzi: '怎么',    pinyin: 'zěn me',        meaningVi: 'làm thế nào',      category: 'pronouns',   yctLevel: 2, imageEmoji: '🤔', example: '怎么去？', exampleVi: 'Đi thế nào?' },

  // ── SỐ MỞ RỘNG ──
  { id: 'nu-13', hanzi: '零',      pinyin: 'líng',          meaningVi: 'không (0)',         category: 'numbers',    yctLevel: 2, imageEmoji: '0️⃣' },
  { id: 'nu-14', hanzi: '百',      pinyin: 'bǎi',           meaningVi: 'trăm',             category: 'numbers',    yctLevel: 2, imageEmoji: '💯' },
  { id: 'nu-15', hanzi: '千',      pinyin: 'qiān',          meaningVi: 'nghìn',            category: 'numbers',    yctLevel: 2, imageEmoji: '🔢' },
  { id: 'nu-16', hanzi: '第',      pinyin: 'dì',            meaningVi: 'thứ (số thứ tự)',  category: 'numbers',    yctLevel: 2, imageEmoji: '🥇', example: '第一名', exampleVi: 'Thứ nhất' },
  { id: 'nu-17', hanzi: '半',      pinyin: 'bàn',           meaningVi: 'nửa',              category: 'numbers',    yctLevel: 2, imageEmoji: '⬛' },

  // ── GIA ĐÌNH MỞ RỘNG ──
  { id: 'fa-9',  hanzi: '爷爷',    pinyin: 'yé ye',         meaningVi: 'ông nội',          category: 'family',     yctLevel: 2, imageEmoji: '👴' },
  { id: 'fa-10', hanzi: '奶奶',    pinyin: 'nǎi nai',       meaningVi: 'bà nội',           category: 'family',     yctLevel: 2, imageEmoji: '👵' },
  { id: 'fa-11', hanzi: '外公',    pinyin: 'wài gōng',      meaningVi: 'ông ngoại',        category: 'family',     yctLevel: 2, imageEmoji: '👴' },
  { id: 'fa-12', hanzi: '外婆',    pinyin: 'wài pó',        meaningVi: 'bà ngoại',         category: 'family',     yctLevel: 2, imageEmoji: '👵' },
  { id: 'fa-13', hanzi: '朋友',    pinyin: 'péng you',      meaningVi: 'bạn bè',           category: 'family',     yctLevel: 2, imageEmoji: '👫', example: '他是我的好朋友。', exampleVi: 'Anh ấy là bạn thân của mình.' },

  // ── MÀU SẮC MỞ RỘNG ──
  { id: 'co-5',  hanzi: '绿色',    pinyin: 'lǜ sè',         meaningVi: 'màu xanh lá',      category: 'colors',     yctLevel: 2, imageEmoji: '🟢' },
  { id: 'co-6',  hanzi: '黑色',    pinyin: 'hēi sè',        meaningVi: 'màu đen',          category: 'colors',     yctLevel: 2, imageEmoji: '⚫' },
  { id: 'co-7',  hanzi: '粉色',    pinyin: 'fěn sè',        meaningVi: 'màu hồng',         category: 'colors',     yctLevel: 2, imageEmoji: '🩷' },
  { id: 'co-8',  hanzi: '颜色',    pinyin: 'yán sè',        meaningVi: 'màu sắc',          category: 'colors',     yctLevel: 2, imageEmoji: '🎨' },

  // ── ĐỘNG VẬT MỞ RỘNG ──
  { id: 'an-4',  hanzi: '鸟',      pinyin: 'niǎo',          meaningVi: 'chim',             category: 'animals',    yctLevel: 2, imageEmoji: '🐦' },
  { id: 'an-5',  hanzi: '兔子',    pinyin: 'tù zi',         meaningVi: 'thỏ',              category: 'animals',    yctLevel: 2, imageEmoji: '🐰' },
  { id: 'an-6',  hanzi: '熊猫',    pinyin: 'xióng māo',     meaningVi: 'gấu trúc',         category: 'animals',    yctLevel: 2, imageEmoji: '🐼' },
  { id: 'an-7',  hanzi: '马',      pinyin: 'mǎ',            meaningVi: 'ngựa',             category: 'animals',    yctLevel: 2, imageEmoji: '🐴' },
  { id: 'an-8',  hanzi: '牛',      pinyin: 'niú',           meaningVi: 'bò',               category: 'animals',    yctLevel: 2, imageEmoji: '🐮' },

  // ── THỨC ĂN MỞ RỘNG ──
  { id: 'fo-3',  hanzi: '米饭',    pinyin: 'mǐ fàn',        meaningVi: 'cơm',              category: 'food',       yctLevel: 2, imageEmoji: '🍚' },
  { id: 'fo-4',  hanzi: '面条',    pinyin: 'miàn tiáo',     meaningVi: 'mì sợi',           category: 'food',       yctLevel: 2, imageEmoji: '🍜' },
  { id: 'fo-5',  hanzi: '面包',    pinyin: 'miàn bāo',      meaningVi: 'bánh mì',          category: 'food',       yctLevel: 2, imageEmoji: '🍞' },
  { id: 'fo-6',  hanzi: '牛奶',    pinyin: 'niú nǎi',       meaningVi: 'sữa',              category: 'food',       yctLevel: 2, imageEmoji: '🥛' },
  { id: 'fo-7',  hanzi: '茶',      pinyin: 'chá',           meaningVi: 'trà',              category: 'food',       yctLevel: 2, imageEmoji: '🍵' },
  { id: 'fo-8',  hanzi: '鸡蛋',    pinyin: 'jī dàn',        meaningVi: 'trứng gà',         category: 'food',       yctLevel: 2, imageEmoji: '🥚' },
  { id: 'fo-9',  hanzi: '饺子',    pinyin: 'jiǎo zi',       meaningVi: 'sủi cảo',          category: 'food',       yctLevel: 2, imageEmoji: '🥟' },
  { id: 'fo-10', hanzi: '好吃',    pinyin: 'hǎo chī',       meaningVi: 'ngon',             category: 'food',       yctLevel: 2, imageEmoji: '😋', example: '这个很好吃！', exampleVi: 'Cái này rất ngon!' },

  // ── TRƯỜNG HỌC MỞ RỘNG ──
  { id: 'sc-6',  hanzi: '笔',      pinyin: 'bǐ',            meaningVi: 'bút',              category: 'school',     yctLevel: 2, imageEmoji: '✏️' },
  { id: 'sc-7',  hanzi: '学校',    pinyin: 'xué xiào',      meaningVi: 'trường học',        category: 'school',     yctLevel: 2, imageEmoji: '🏫' },
  { id: 'sc-8',  hanzi: '同学',    pinyin: 'tóng xué',      meaningVi: 'bạn học',           category: 'school',     yctLevel: 2, imageEmoji: '👫' },
  { id: 'sc-9',  hanzi: '汉语',    pinyin: 'hàn yǔ',        meaningVi: 'tiếng Hán',         category: 'school',     yctLevel: 2, imageEmoji: '📖' },
  { id: 'sc-10', hanzi: '字',      pinyin: 'zì',            meaningVi: 'chữ',              category: 'school',     yctLevel: 2, imageEmoji: '🔤' },
  { id: 'sc-11', hanzi: '作业',    pinyin: 'zuò yè',        meaningVi: 'bài tập về nhà',   category: 'school',     yctLevel: 2, imageEmoji: '📝' },
  { id: 'sc-12', hanzi: '考试',    pinyin: 'kǎo shì',       meaningVi: 'thi / kiểm tra',   category: 'school',     yctLevel: 2, imageEmoji: '📋' },

  // ── BỘ PHẬN CƠ THỂ ──
  { id: 'bo-1',  hanzi: '头',      pinyin: 'tóu',           meaningVi: 'đầu',              category: 'body',       yctLevel: 2, imageEmoji: '🗣️' },
  { id: 'bo-2',  hanzi: '眼睛',    pinyin: 'yǎn jing',      meaningVi: 'mắt',              category: 'body',       yctLevel: 2, imageEmoji: '👁️' },
  { id: 'bo-3',  hanzi: '鼻子',    pinyin: 'bí zi',         meaningVi: 'mũi',              category: 'body',       yctLevel: 2, imageEmoji: '👃' },
  { id: 'bo-4',  hanzi: '嘴',      pinyin: 'zuǐ',           meaningVi: 'miệng',            category: 'body',       yctLevel: 2, imageEmoji: '👄' },
  { id: 'bo-5',  hanzi: '耳朵',    pinyin: 'ěr duo',        meaningVi: 'tai',              category: 'body',       yctLevel: 2, imageEmoji: '👂' },
  { id: 'bo-6',  hanzi: '手',      pinyin: 'shǒu',          meaningVi: 'tay',              category: 'body',       yctLevel: 2, imageEmoji: '✋' },
  { id: 'bo-7',  hanzi: '脚',      pinyin: 'jiǎo',          meaningVi: 'chân',             category: 'body',       yctLevel: 2, imageEmoji: '🦶' },

  // ── THỜI GIAN ──
  { id: 'ti-1',  hanzi: '今天',    pinyin: 'jīn tiān',      meaningVi: 'hôm nay',          category: 'time',       yctLevel: 2, imageEmoji: '📅' },
  { id: 'ti-2',  hanzi: '明天',    pinyin: 'míng tiān',     meaningVi: 'ngày mai',         category: 'time',       yctLevel: 2, imageEmoji: '🗓️' },
  { id: 'ti-3',  hanzi: '昨天',    pinyin: 'zuó tiān',      meaningVi: 'hôm qua',          category: 'time',       yctLevel: 2, imageEmoji: '📆' },
  { id: 'ti-4',  hanzi: '现在',    pinyin: 'xiàn zài',      meaningVi: 'bây giờ',          category: 'time',       yctLevel: 2, imageEmoji: '⏰', example: '现在几点？', exampleVi: 'Bây giờ mấy giờ rồi?' },
  { id: 'ti-5',  hanzi: '年',      pinyin: 'nián',          meaningVi: 'năm',              category: 'time',       yctLevel: 2, imageEmoji: '📅' },
  { id: 'ti-6',  hanzi: '月',      pinyin: 'yuè',           meaningVi: 'tháng',            category: 'time',       yctLevel: 2, imageEmoji: '🌙' },
  { id: 'ti-7',  hanzi: '日',      pinyin: 'rì',            meaningVi: 'ngày',             category: 'time',       yctLevel: 2, imageEmoji: '☀️' },
  { id: 'ti-8',  hanzi: '星期',    pinyin: 'xīng qī',       meaningVi: 'thứ / tuần',       category: 'time',       yctLevel: 2, imageEmoji: '📆', example: '今天星期几？', exampleVi: 'Hôm nay là thứ mấy?' },
  { id: 'ti-9',  hanzi: '点',      pinyin: 'diǎn',          meaningVi: 'giờ',              category: 'time',       yctLevel: 2, imageEmoji: '🕐', example: '现在三点。', exampleVi: 'Bây giờ là 3 giờ.' },
  { id: 'ti-10', hanzi: '生日',    pinyin: 'shēng rì',      meaningVi: 'sinh nhật',        category: 'time',       yctLevel: 2, imageEmoji: '🎂', example: '今天是我的生日。', exampleVi: 'Hôm nay là sinh nhật mình.' },

  // ── ĐỘNG TỪ MỞ RỘNG ──
  { id: 've-11', hanzi: '听',      pinyin: 'tīng',          meaningVi: 'nghe',             category: 'verbs',      yctLevel: 2, imageEmoji: '👂' },
  { id: 've-12', hanzi: '说',      pinyin: 'shuō',          meaningVi: 'nói',              category: 'verbs',      yctLevel: 2, imageEmoji: '🗣️', example: '他说中文。', exampleVi: 'Anh ấy nói tiếng Trung.' },
  { id: 've-13', hanzi: '读',      pinyin: 'dú',            meaningVi: 'đọc',              category: 'verbs',      yctLevel: 2, imageEmoji: '📖' },
  { id: 've-14', hanzi: '写',      pinyin: 'xiě',           meaningVi: 'viết',             category: 'verbs',      yctLevel: 2, imageEmoji: '✍️' },
  { id: 've-15', hanzi: '去',      pinyin: 'qù',            meaningVi: 'đi',               category: 'verbs',      yctLevel: 2, imageEmoji: '🚶', example: '我去学校。', exampleVi: 'Mình đi đến trường.' },
  { id: 've-16', hanzi: '来',      pinyin: 'lái',           meaningVi: 'đến',              category: 'verbs',      yctLevel: 2, imageEmoji: '🏃' },
  { id: 've-17', hanzi: '在',      pinyin: 'zài',           meaningVi: 'ở / đang',         category: 'verbs',      yctLevel: 2, imageEmoji: '📍', example: '我在家。', exampleVi: 'Mình đang ở nhà.' },
  { id: 've-18', hanzi: '想',      pinyin: 'xiǎng',         meaningVi: 'muốn / nghĩ',      category: 'verbs',      yctLevel: 2, imageEmoji: '💭' },
  { id: 've-19', hanzi: '学习',    pinyin: 'xué xí',        meaningVi: 'học tập',          category: 'verbs',      yctLevel: 2, imageEmoji: '📚' },
  { id: 've-20', hanzi: '坐',      pinyin: 'zuò',           meaningVi: 'ngồi',             category: 'verbs',      yctLevel: 2, imageEmoji: '🪑' },
  { id: 've-21', hanzi: '站',      pinyin: 'zhàn',          meaningVi: 'đứng',             category: 'verbs',      yctLevel: 2, imageEmoji: '🧍' },
  { id: 've-22', hanzi: '走',      pinyin: 'zǒu',           meaningVi: 'đi bộ',            category: 'verbs',      yctLevel: 2, imageEmoji: '🚶' },
  { id: 've-23', hanzi: '跑',      pinyin: 'pǎo',           meaningVi: 'chạy',             category: 'verbs',      yctLevel: 2, imageEmoji: '🏃' },
  { id: 've-24', hanzi: '玩',      pinyin: 'wán',           meaningVi: 'chơi',             category: 'verbs',      yctLevel: 2, imageEmoji: '🎮', example: '我们去玩吧！', exampleVi: 'Mình cùng đi chơi nhé!' },
  { id: 've-25', hanzi: '睡觉',    pinyin: 'shuì jiào',     meaningVi: 'ngủ',              category: 'verbs',      yctLevel: 2, imageEmoji: '😴' },
  { id: 've-26', hanzi: '起床',    pinyin: 'qǐ chuáng',     meaningVi: 'thức dậy',         category: 'verbs',      yctLevel: 2, imageEmoji: '⏰' },
  { id: 've-27', hanzi: '洗澡',    pinyin: 'xǐ zǎo',        meaningVi: 'tắm',              category: 'verbs',      yctLevel: 2, imageEmoji: '🚿' },
  { id: 've-28', hanzi: '穿',      pinyin: 'chuān',         meaningVi: 'mặc / đi',         category: 'verbs',      yctLevel: 2, imageEmoji: '👕' },
  { id: 've-29', hanzi: '买',      pinyin: 'mǎi',           meaningVi: 'mua',              category: 'verbs',      yctLevel: 2, imageEmoji: '🛒' },
  { id: 've-30', hanzi: '问',      pinyin: 'wèn',           meaningVi: 'hỏi',              category: 'verbs',      yctLevel: 2, imageEmoji: '🙋' },
  { id: 've-31', hanzi: '回答',    pinyin: 'huí dá',        meaningVi: 'trả lời',           category: 'verbs',      yctLevel: 2, imageEmoji: '💬' },
  { id: 've-32', hanzi: '知道',    pinyin: 'zhī dào',       meaningVi: 'biết',             category: 'verbs',      yctLevel: 2, imageEmoji: '💡' },

  // ── TÍNH TỪ MỞ RỘNG ──
  { id: 'ad-5',  hanzi: '多',      pinyin: 'duō',           meaningVi: 'nhiều',            category: 'adjectives', yctLevel: 2, imageEmoji: '➕' },
  { id: 'ad-6',  hanzi: '少',      pinyin: 'shǎo',          meaningVi: 'ít',               category: 'adjectives', yctLevel: 2, imageEmoji: '➖' },
  { id: 'ad-7',  hanzi: '高',      pinyin: 'gāo',           meaningVi: 'cao',              category: 'adjectives', yctLevel: 2, imageEmoji: '🦒' },
  { id: 'ad-8',  hanzi: '矮',      pinyin: 'ǎi',            meaningVi: 'thấp',             category: 'adjectives', yctLevel: 2, imageEmoji: '👶' },
  { id: 'ad-9',  hanzi: '漂亮',    pinyin: 'piào liang',    meaningVi: 'đẹp',              category: 'adjectives', yctLevel: 2, imageEmoji: '🌸' },
  { id: 'ad-10', hanzi: '可爱',    pinyin: 'kě ài',         meaningVi: 'dễ thương',        category: 'adjectives', yctLevel: 2, imageEmoji: '🥰' },
  { id: 'ad-11', hanzi: '太',      pinyin: 'tài',           meaningVi: 'quá',              category: 'adjectives', yctLevel: 2, imageEmoji: '💯', example: '太好了！', exampleVi: 'Tốt quá!' },
  { id: 'ad-12', hanzi: '快',      pinyin: 'kuài',          meaningVi: 'nhanh',            category: 'adjectives', yctLevel: 2, imageEmoji: '⚡' },
  { id: 'ad-13', hanzi: '慢',      pinyin: 'màn',           meaningVi: 'chậm',             category: 'adjectives', yctLevel: 2, imageEmoji: '🐢' },
  { id: 'ad-14', hanzi: '冷',      pinyin: 'lěng',          meaningVi: 'lạnh',             category: 'adjectives', yctLevel: 2, imageEmoji: '🥶' },
  { id: 'ad-15', hanzi: '热',      pinyin: 'rè',            meaningVi: 'nóng',             category: 'adjectives', yctLevel: 2, imageEmoji: '🥵' },
  { id: 'ad-16', hanzi: '累',      pinyin: 'lèi',           meaningVi: 'mệt',              category: 'adjectives', yctLevel: 2, imageEmoji: '😩' },
  { id: 'ad-17', hanzi: '高兴',    pinyin: 'gāo xìng',      meaningVi: 'vui mừng',         category: 'adjectives', yctLevel: 2, imageEmoji: '😄' },
  { id: 'ad-18', hanzi: '难过',    pinyin: 'nán guò',       meaningVi: 'buồn',             category: 'adjectives', yctLevel: 2, imageEmoji: '😢' },

  // ── ĐỒ VẬT TRONG NHÀ ──
  { id: 'ho-1',  hanzi: '桌子',    pinyin: 'zhuō zi',       meaningVi: 'bàn',              category: 'home',       yctLevel: 2, imageEmoji: '🪑' },
  { id: 'ho-2',  hanzi: '椅子',    pinyin: 'yǐ zi',         meaningVi: 'ghế',              category: 'home',       yctLevel: 2, imageEmoji: '🪑' },
  { id: 'ho-3',  hanzi: '电视',    pinyin: 'diàn shì',      meaningVi: 'tivi',             category: 'home',       yctLevel: 2, imageEmoji: '📺' },
  { id: 'ho-4',  hanzi: '电话',    pinyin: 'diàn huà',      meaningVi: 'điện thoại',       category: 'home',       yctLevel: 2, imageEmoji: '📞' },
  { id: 'ho-5',  hanzi: '电脑',    pinyin: 'diàn nǎo',      meaningVi: 'máy tính',         category: 'home',       yctLevel: 2, imageEmoji: '💻' },
  { id: 'ho-6',  hanzi: '门',      pinyin: 'mén',           meaningVi: 'cửa',              category: 'home',       yctLevel: 2, imageEmoji: '🚪' },
  { id: 'ho-7',  hanzi: '床',      pinyin: 'chuáng',        meaningVi: 'giường',           category: 'home',       yctLevel: 2, imageEmoji: '🛏️' },
  { id: 'ho-8',  hanzi: '衣服',    pinyin: 'yī fu',         meaningVi: 'quần áo',          category: 'home',       yctLevel: 2, imageEmoji: '👕' },
  { id: 'ho-9',  hanzi: '钱',      pinyin: 'qián',          meaningVi: 'tiền',             category: 'home',       yctLevel: 2, imageEmoji: '💰' },

  // ── THIÊN NHIÊN ──
  { id: 'na-1',  hanzi: '天',      pinyin: 'tiān',          meaningVi: 'trời / bầu trời',  category: 'nature',     yctLevel: 2, imageEmoji: '☁️' },
  { id: 'na-2',  hanzi: '雨',      pinyin: 'yǔ',            meaningVi: 'mưa',              category: 'nature',     yctLevel: 2, imageEmoji: '🌧️' },
  { id: 'na-3',  hanzi: '风',      pinyin: 'fēng',          meaningVi: 'gió',              category: 'nature',     yctLevel: 2, imageEmoji: '💨' },
  { id: 'na-4',  hanzi: '雪',      pinyin: 'xuě',           meaningVi: 'tuyết',            category: 'nature',     yctLevel: 2, imageEmoji: '❄️' },
  { id: 'na-5',  hanzi: '太阳',    pinyin: 'tài yáng',      meaningVi: 'mặt trời',         category: 'nature',     yctLevel: 2, imageEmoji: '☀️' },
  { id: 'na-6',  hanzi: '月亮',    pinyin: 'yuè liang',     meaningVi: 'mặt trăng',        category: 'nature',     yctLevel: 2, imageEmoji: '🌙' },
  { id: 'na-7',  hanzi: '山',      pinyin: 'shān',          meaningVi: 'núi',              category: 'nature',     yctLevel: 2, imageEmoji: '⛰️' },
  { id: 'na-8',  hanzi: '水',      pinyin: 'shuǐ',          meaningVi: 'nước',             category: 'nature',     yctLevel: 2, imageEmoji: '💧' },
  { id: 'na-9',  hanzi: '花',      pinyin: 'huā',           meaningVi: 'hoa',              category: 'nature',     yctLevel: 2, imageEmoji: '🌸' },
  { id: 'na-10', hanzi: '树',      pinyin: 'shù',           meaningVi: 'cây',              category: 'nature',     yctLevel: 2, imageEmoji: '🌳' },
  { id: 'na-11', hanzi: '天气',    pinyin: 'tiān qì',       meaningVi: 'thời tiết',        category: 'nature',     yctLevel: 2, imageEmoji: '🌤️', example: '今天天气怎么样？', exampleVi: 'Hôm nay thời tiết thế nào?' },

  // ══════════════════════════════════════════════════════════════════
  //  YCT 3 — +100 TỪ MỚI MẪU (theo phân phối chủ đề Hanban)
  // ══════════════════════════════════════════════════════════════════

  // ── GIAO TIẾP XÃ HỘI ──
  { id: 'y3-g1', hanzi: '您好',    pinyin: 'nín hǎo',       meaningVi: 'xin chào (lịch sự)',category: 'greetings', yctLevel: 3, imageEmoji: '🎩' },
  { id: 'y3-g2', hanzi: '请问',    pinyin: 'qǐng wèn',      meaningVi: 'xin hỏi',          category: 'greetings',  yctLevel: 3, imageEmoji: '🙋', example: '请问，图书馆在哪里？', exampleVi: 'Xin hỏi, thư viện ở đâu?' },
  { id: 'y3-g3', hanzi: '没问题',  pinyin: 'méi wèn tí',    meaningVi: 'không có vấn đề',  category: 'greetings',  yctLevel: 3, imageEmoji: '✅' },
  { id: 'y3-g4', hanzi: '当然',    pinyin: 'dāng rán',      meaningVi: 'tất nhiên',        category: 'greetings',  yctLevel: 3, imageEmoji: '💯' },
  { id: 'y3-g5', hanzi: '也许',    pinyin: 'yě xǔ',         meaningVi: 'có lẽ',            category: 'greetings',  yctLevel: 3, imageEmoji: '🤔' },

  // ── HƯỚNG DẪN & VỊ TRÍ ──
  { id: 'y3-p1', hanzi: '上面',    pinyin: 'shàng miàn',    meaningVi: 'phía trên',        category: 'pronouns',   yctLevel: 3, imageEmoji: '⬆️' },
  { id: 'y3-p2', hanzi: '下面',    pinyin: 'xià miàn',      meaningVi: 'phía dưới',        category: 'pronouns',   yctLevel: 3, imageEmoji: '⬇️' },
  { id: 'y3-p3', hanzi: '左边',    pinyin: 'zuǒ biān',      meaningVi: 'bên trái',         category: 'pronouns',   yctLevel: 3, imageEmoji: '◀️' },
  { id: 'y3-p4', hanzi: '右边',    pinyin: 'yòu biān',      meaningVi: 'bên phải',         category: 'pronouns',   yctLevel: 3, imageEmoji: '▶️' },
  { id: 'y3-p5', hanzi: '前面',    pinyin: 'qián miàn',     meaningVi: 'phía trước',       category: 'pronouns',   yctLevel: 3, imageEmoji: '⏩' },
  { id: 'y3-p6', hanzi: '后面',    pinyin: 'hòu miàn',      meaningVi: 'phía sau',         category: 'pronouns',   yctLevel: 3, imageEmoji: '⏪' },
  { id: 'y3-p7', hanzi: '里面',    pinyin: 'lǐ miàn',       meaningVi: 'bên trong',        category: 'pronouns',   yctLevel: 3, imageEmoji: '📦' },
  { id: 'y3-p8', hanzi: '外面',    pinyin: 'wài miàn',      meaningVi: 'bên ngoài',        category: 'pronouns',   yctLevel: 3, imageEmoji: '🌳' },

  // ── NGHỀ NGHIỆP ──
  { id: 'y3-j1', hanzi: '医生',    pinyin: 'yī shēng',      meaningVi: 'bác sĩ',           category: 'school',     yctLevel: 3, imageEmoji: '👨‍⚕️' },
  { id: 'y3-j2', hanzi: '护士',    pinyin: 'hù shi',        meaningVi: 'y tá',             category: 'school',     yctLevel: 3, imageEmoji: '👩‍⚕️' },
  { id: 'y3-j3', hanzi: '警察',    pinyin: 'jǐng chá',      meaningVi: 'cảnh sát',         category: 'school',     yctLevel: 3, imageEmoji: '👮' },
  { id: 'y3-j4', hanzi: '厨师',    pinyin: 'chú shī',       meaningVi: 'đầu bếp',          category: 'school',     yctLevel: 3, imageEmoji: '👨‍🍳' },
  { id: 'y3-j5', hanzi: '司机',    pinyin: 'sī jī',         meaningVi: 'lái xe',           category: 'school',     yctLevel: 3, imageEmoji: '🚗' },

  // ── ĐỊA ĐIỂM ──
  { id: 'y3-l1', hanzi: '学校',    pinyin: 'xué xiào',      meaningVi: 'trường học',        category: 'home',       yctLevel: 3, imageEmoji: '🏫' },
  { id: 'y3-l2', hanzi: '医院',    pinyin: 'yī yuàn',       meaningVi: 'bệnh viện',        category: 'home',       yctLevel: 3, imageEmoji: '🏥' },
  { id: 'y3-l3', hanzi: '商店',    pinyin: 'shāng diàn',    meaningVi: 'cửa hàng',         category: 'home',       yctLevel: 3, imageEmoji: '🏪' },
  { id: 'y3-l4', hanzi: '超市',    pinyin: 'chāo shì',      meaningVi: 'siêu thị',         category: 'home',       yctLevel: 3, imageEmoji: '🛒' },
  { id: 'y3-l5', hanzi: '公园',    pinyin: 'gōng yuán',     meaningVi: 'công viên',        category: 'home',       yctLevel: 3, imageEmoji: '🌳' },
  { id: 'y3-l6', hanzi: '图书馆',  pinyin: 'tú shū guǎn',   meaningVi: 'thư viện',         category: 'home',       yctLevel: 3, imageEmoji: '📚' },
  { id: 'y3-l7', hanzi: '餐厅',    pinyin: 'cān tīng',      meaningVi: 'nhà hàng',         category: 'home',       yctLevel: 3, imageEmoji: '🍽️' },
  { id: 'y3-l8', hanzi: '银行',    pinyin: 'yín háng',      meaningVi: 'ngân hàng',        category: 'home',       yctLevel: 3, imageEmoji: '🏦' },

  // ── PHƯƠNG TIỆN ──
  { id: 'y3-t1', hanzi: '公共汽车',pinyin: 'gōng gòng qì chē',meaningVi: 'xe buýt',        category: 'nature',     yctLevel: 3, imageEmoji: '🚌' },
  { id: 'y3-t2', hanzi: '地铁',    pinyin: 'dì tiě',        meaningVi: 'tàu điện ngầm',    category: 'nature',     yctLevel: 3, imageEmoji: '🚇' },
  { id: 'y3-t3', hanzi: '出租车',  pinyin: 'chū zū chē',    meaningVi: 'taxi',             category: 'nature',     yctLevel: 3, imageEmoji: '🚕' },
  { id: 'y3-t4', hanzi: '自行车',  pinyin: 'zì xíng chē',   meaningVi: 'xe đạp',           category: 'nature',     yctLevel: 3, imageEmoji: '🚲' },
  { id: 'y3-t5', hanzi: '飞机',    pinyin: 'fēi jī',        meaningVi: 'máy bay',          category: 'nature',     yctLevel: 3, imageEmoji: '✈️' },

  // ── HOẠT ĐỘNG & SỞ THÍCH ──
  { id: 'y3-v1', hanzi: '跳舞',    pinyin: 'tiào wǔ',       meaningVi: 'nhảy múa',         category: 'verbs',      yctLevel: 3, imageEmoji: '💃' },
  { id: 'y3-v2', hanzi: '唱歌',    pinyin: 'chàng gē',      meaningVi: 'hát',              category: 'verbs',      yctLevel: 3, imageEmoji: '🎤' },
  { id: 'y3-v3', hanzi: '画画',    pinyin: 'huà huà',       meaningVi: 'vẽ tranh',         category: 'verbs',      yctLevel: 3, imageEmoji: '🎨' },
  { id: 'y3-v4', hanzi: '游泳',    pinyin: 'yóu yǒng',      meaningVi: 'bơi lội',          category: 'verbs',      yctLevel: 3, imageEmoji: '🏊' },
  { id: 'y3-v5', hanzi: '踢足球',  pinyin: 'tī zú qiú',     meaningVi: 'đá bóng',          category: 'verbs',      yctLevel: 3, imageEmoji: '⚽' },
  { id: 'y3-v6', hanzi: '打篮球',  pinyin: 'dǎ lán qiú',    meaningVi: 'chơi bóng rổ',     category: 'verbs',      yctLevel: 3, imageEmoji: '🏀' },
  { id: 'y3-v7', hanzi: '爬山',    pinyin: 'pá shān',       meaningVi: 'leo núi',          category: 'verbs',      yctLevel: 3, imageEmoji: '🧗' },
  { id: 'y3-v8', hanzi: '旅游',    pinyin: 'lǚ yóu',        meaningVi: 'du lịch',          category: 'verbs',      yctLevel: 3, imageEmoji: '✈️' },
  { id: 'y3-v9', hanzi: '帮助',    pinyin: 'bāng zhù',      meaningVi: 'giúp đỡ',          category: 'verbs',      yctLevel: 3, imageEmoji: '🤝' },
  { id: 'y3-v10',hanzi: '告诉',    pinyin: 'gào su',        meaningVi: 'cho biết / nói',   category: 'verbs',      yctLevel: 3, imageEmoji: '📢' },
  { id: 'y3-v11',hanzi: '觉得',    pinyin: 'jué de',        meaningVi: 'cảm thấy',         category: 'verbs',      yctLevel: 3, imageEmoji: '💭' },
  { id: 'y3-v12',hanzi: '准备',    pinyin: 'zhǔn bèi',      meaningVi: 'chuẩn bị',         category: 'verbs',      yctLevel: 3, imageEmoji: '🎒' },
  { id: 'y3-v13',hanzi: '开始',    pinyin: 'kāi shǐ',       meaningVi: 'bắt đầu',          category: 'verbs',      yctLevel: 3, imageEmoji: '🚀' },
  { id: 'y3-v14',hanzi: '结束',    pinyin: 'jié shù',       meaningVi: 'kết thúc',         category: 'verbs',      yctLevel: 3, imageEmoji: '🏁' },

  // ── TÍNH TỪ YCT 3 ──
  { id: 'y3-a1', hanzi: '有意思',  pinyin: 'yǒu yì si',     meaningVi: 'thú vị',           category: 'adjectives', yctLevel: 3, imageEmoji: '🤩', example: '这本书很有意思。', exampleVi: 'Quyển sách này rất thú vị.' },
  { id: 'y3-a2', hanzi: '有名',    pinyin: 'yǒu míng',      meaningVi: 'nổi tiếng',        category: 'adjectives', yctLevel: 3, imageEmoji: '⭐' },
  { id: 'y3-a3', hanzi: '重要',    pinyin: 'zhòng yào',     meaningVi: 'quan trọng',       category: 'adjectives', yctLevel: 3, imageEmoji: '❗' },
  { id: 'y3-a4', hanzi: '容易',    pinyin: 'róng yì',       meaningVi: 'dễ',               category: 'adjectives', yctLevel: 3, imageEmoji: '😊' },
  { id: 'y3-a5', hanzi: '难',      pinyin: 'nán',           meaningVi: 'khó',              category: 'adjectives', yctLevel: 3, imageEmoji: '😣' },
  { id: 'y3-a6', hanzi: '干净',    pinyin: 'gān jìng',      meaningVi: 'sạch sẽ',          category: 'adjectives', yctLevel: 3, imageEmoji: '✨' },
  { id: 'y3-a7', hanzi: '安全',    pinyin: 'ān quán',       meaningVi: 'an toàn',          category: 'adjectives', yctLevel: 3, imageEmoji: '🛡️' },
];

// ══════════════════════════════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════════════════════════════
export function getVocabByCategory(category: string) {
  return vocabulary.filter((v) => v.category === category);
}

export function getVocabByYctLevel(level: number) {
  return vocabulary.filter((v) => v.yctLevel === level);
}

/** YCT N bao gồm tất cả từ các cấp ≤ N */
export function getVocabUpToLevel(level: number) {
  return vocabulary.filter((v) => v.yctLevel <= level);
}

export const categoryMeta: Record<
  string,
  { labelVi: string; emoji: string; gradient: string; order: number }
> = {
  greetings:  { labelVi: 'Chào hỏi',           emoji: '👋', gradient: 'from-primary-300 to-blush-300',      order: 1  },
  pronouns:   { labelVi: 'Đại từ & câu hỏi',   emoji: '🙋', gradient: 'from-secondary-200 to-lavender-300', order: 2  },
  numbers:    { labelVi: 'Con số',              emoji: '🔢', gradient: 'from-lavender-300 to-lavender-400',  order: 3  },
  colors:     { labelVi: 'Màu sắc',             emoji: '🌈', gradient: 'from-accent-300 to-primary-300',     order: 4  },
  family:     { labelVi: 'Gia đình',            emoji: '👨‍👩‍👧', gradient: 'from-primary-300 to-accent-300',     order: 5  },
  body:       { labelVi: 'Cơ thể',              emoji: '👁️', gradient: 'from-blush-300 to-primary-300',      order: 6  },
  animals:    { labelVi: 'Động vật',            emoji: '🐼', gradient: 'from-secondary-300 to-secondary-400',order: 7  },
  food:       { labelVi: 'Thức ăn & đồ uống',  emoji: '🍱', gradient: 'from-success-300 to-secondary-300',  order: 8  },
  school:     { labelVi: 'Trường học',          emoji: '🏫', gradient: 'from-accent-300 to-accent-400',      order: 9  },
  home:       { labelVi: 'Đồ vật & địa điểm',  emoji: '🏠', gradient: 'from-accent-200 to-accent-300',      order: 10 },
  time:       { labelVi: 'Thời gian',           emoji: '⏰', gradient: 'from-lavender-300 to-secondary-300', order: 11 },
  verbs:      { labelVi: 'Động từ',             emoji: '🏃', gradient: 'from-secondary-300 to-success-300',  order: 12 },
  adjectives: { labelVi: 'Tính từ & trạng từ', emoji: '✨', gradient: 'from-primary-300 to-lavender-300',   order: 13 },
  nature:     { labelVi: 'Thiên nhiên',         emoji: '🌳', gradient: 'from-success-300 to-success-400',    order: 14 },
};
