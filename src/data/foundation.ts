/**
 * Dữ liệu cho phần "Làm quen với tiếng Trung" - bước khởi đầu cho bé.
 * Bao gồm: 8 nét cơ bản, thứ tự viết, 10 chữ Hán đầu tiên, các bước học.
 */

export interface BasicStroke {
  id: string;
  name: string;          // tên nét (tiếng Việt)
  nameZh: string;        // tên Hán
  symbol: string;        // ký hiệu nét
  description: string;   // mô tả cách viết
  examples: string[];    // chữ Hán có chứa nét này
  emoji: string;
}

/**
 * 8 nét cơ bản trong chữ Hán - bé cần học để viết bất kỳ chữ Hán nào.
 */
export const basicStrokes: BasicStroke[] = [
  {
    id: 'heng',
    name: 'Nét ngang',
    nameZh: '横 (héng)',
    symbol: '一',
    description: 'Kéo nét từ trái sang phải, thẳng và đều.',
    examples: ['一', '二', '三', '十'],
    emoji: '➖'
  },
  {
    id: 'shu',
    name: 'Nét sổ thẳng',
    nameZh: '竖 (shù)',
    symbol: '丨',
    description: 'Kéo nét từ trên xuống dưới, thẳng đứng.',
    examples: ['十', '中', '下', '上'],
    emoji: '|'
  },
  {
    id: 'pie',
    name: 'Nét phẩy',
    nameZh: '撇 (piě)',
    symbol: '丿',
    description: 'Kéo nét từ trên xuống dưới, nghiêng sang trái.',
    examples: ['人', '八', '九', '大'],
    emoji: '↙️'
  },
  {
    id: 'na',
    name: 'Nét mác',
    nameZh: '捺 (nà)',
    symbol: '㇏',
    description: 'Kéo nét từ trên xuống dưới, nghiêng sang phải, dày dần.',
    examples: ['人', '八', '大', '木'],
    emoji: '↘️'
  },
  {
    id: 'dian',
    name: 'Nét chấm',
    nameZh: '点 (diǎn)',
    symbol: '丶',
    description: 'Một chấm nhỏ, viết từ trên xuống.',
    examples: ['六', '小', '心', '不'],
    emoji: '•'
  },
  {
    id: 'ti',
    name: 'Nét hất',
    nameZh: '提 (tí)',
    symbol: '㇀',
    description: 'Kéo nét từ dưới lên trên, nghiêng sang phải.',
    examples: ['打', '我', '冰', '北'],
    emoji: '↗️'
  },
  {
    id: 'gou',
    name: 'Nét móc',
    nameZh: '钩 (gōu)',
    symbol: '亅',
    description: 'Đuôi nét cong lên hoặc móc lại.',
    examples: ['小', '了', '水', '你'],
    emoji: '⤴️'
  },
  {
    id: 'zhe',
    name: 'Nét gập',
    nameZh: '折 (zhé)',
    symbol: '𠃍',
    description: 'Đổi hướng giữa nét, từ ngang sang sổ hoặc ngược lại.',
    examples: ['口', '日', '回', '中'],
    emoji: '↩️'
  }
];

/**
 * 7 quy tắc viết chữ Hán cơ bản.
 */
export interface StrokeRule {
  id: string;
  rule: string;
  description: string;
  example: string;       // chữ minh họa
  exampleVi: string;
  emoji: string;
}

export const strokeRules: StrokeRule[] = [
  {
    id: 'r1',
    rule: 'Ngang trước, sổ sau',
    description: 'Khi có cả nét ngang và nét sổ giao nhau, viết nét ngang trước.',
    example: '十',
    exampleVi: 'chữ "thập" (mười)',
    emoji: '➕'
  },
  {
    id: 'r2',
    rule: 'Phẩy trước, mác sau',
    description: 'Khi có cả nét phẩy và nét mác, viết nét phẩy bên trái trước.',
    example: '人',
    exampleVi: 'chữ "nhân" (người)',
    emoji: '🚶'
  },
  {
    id: 'r3',
    rule: 'Từ trên xuống dưới',
    description: 'Viết phần trên của chữ trước, phần dưới sau.',
    example: '三',
    exampleVi: 'chữ "tam" (ba)',
    emoji: '⬇️'
  },
  {
    id: 'r4',
    rule: 'Từ trái sang phải',
    description: 'Viết phần bên trái trước, bên phải sau.',
    example: '川',
    exampleVi: 'chữ "xuyên" (sông)',
    emoji: '➡️'
  },
  {
    id: 'r5',
    rule: 'Ngoài trước, trong sau',
    description: 'Khi có khung bao quanh, viết khung bên ngoài trước.',
    example: '日',
    exampleVi: 'chữ "nhật" (ngày/mặt trời)',
    emoji: '🔲'
  },
  {
    id: 'r6',
    rule: 'Vào trước, đóng sau',
    description: 'Viết phần trong khung trước rồi mới đóng khung lại.',
    example: '回',
    exampleVi: 'chữ "hồi" (trở lại)',
    emoji: '🔄'
  },
  {
    id: 'r7',
    rule: 'Giữa trước, hai bên sau',
    description: 'Với chữ có phần giữa và hai bên đối xứng, viết phần giữa trước.',
    example: '小',
    exampleVi: 'chữ "tiểu" (nhỏ)',
    emoji: '⚖️'
  }
];

/**
 * 10 chữ Hán đầu tiên - đơn giản, dễ viết, ý nghĩa trực quan.
 */
export interface FirstCharacter {
  hanzi: string;
  pinyin: string;
  meaningVi: string;
  strokes: number;       // số nét
  story: string;         // câu chuyện giúp nhớ chữ
  imageHint: string;     // gợi ý hình ảnh
  emoji: string;
}

export const firstCharacters: FirstCharacter[] = [
  {
    hanzi: '一',
    pinyin: 'yī',
    meaningVi: 'một / số 1',
    strokes: 1,
    story: 'Chỉ một nét ngang đơn giản - giống như một đường thẳng nằm ngang.',
    imageHint: 'Hình dung như một cây bút nằm ngang.',
    emoji: '1️⃣'
  },
  {
    hanzi: '二',
    pinyin: 'èr',
    meaningVi: 'hai / số 2',
    strokes: 2,
    story: 'Hai nét ngang - tượng trưng cho con số 2.',
    imageHint: 'Hai chiếc đũa nằm song song.',
    emoji: '2️⃣'
  },
  {
    hanzi: '三',
    pinyin: 'sān',
    meaningVi: 'ba / số 3',
    strokes: 3,
    story: 'Ba nét ngang - dễ nhớ là số 3.',
    imageHint: 'Ba chiếc đũa nằm song song.',
    emoji: '3️⃣'
  },
  {
    hanzi: '人',
    pinyin: 'rén',
    meaningVi: 'người',
    strokes: 2,
    story: 'Giống như hình một người đang đứng dang chân.',
    imageHint: 'Một bé đang đứng và giang hai chân.',
    emoji: '🧍'
  },
  {
    hanzi: '大',
    pinyin: 'dà',
    meaningVi: 'to / lớn',
    strokes: 3,
    story: 'Là chữ 人 (người) thêm một nét ngang ở trên - giống người đang giơ hai tay lên trời nói "TO ƠI LÀ TO!".',
    imageHint: 'Một bé đang giơ hai tay thật cao để khoe "to lắm".',
    emoji: '🙌'
  },
  {
    hanzi: '小',
    pinyin: 'xiǎo',
    meaningVi: 'nhỏ / bé',
    strokes: 3,
    story: 'Một nét móc ở giữa với hai chấm nhỏ hai bên - giống như một viên kẹo bé xíu giữa hai bàn tay.',
    imageHint: 'Một viên kẹo nhỏ xíu giữa hai chấm.',
    emoji: '🐭'
  },
  {
    hanzi: '日',
    pinyin: 'rì',
    meaningVi: 'mặt trời / ngày',
    strokes: 4,
    story: 'Là hình vẽ giản lược của Mặt Trời - hình vuông với một nét ngang ở giữa.',
    imageHint: 'Một chiếc kính ngắm mặt trời hình vuông.',
    emoji: '☀️'
  },
  {
    hanzi: '月',
    pinyin: 'yuè',
    meaningVi: 'mặt trăng / tháng',
    strokes: 4,
    story: 'Hình vẽ giản lược của Mặt Trăng khuyết - hơi cong cong như trăng lưỡi liềm.',
    imageHint: 'Một mặt trăng khuyết với hai chấm nhỏ.',
    emoji: '🌙'
  },
  {
    hanzi: '山',
    pinyin: 'shān',
    meaningVi: 'núi',
    strokes: 3,
    story: 'Ba ngọn núi nhô lên - đỉnh giữa cao nhất, hai bên thấp hơn.',
    imageHint: 'Ba đỉnh núi xếp cạnh nhau.',
    emoji: '⛰️'
  },
  {
    hanzi: '水',
    pinyin: 'shuǐ',
    meaningVi: 'nước',
    strokes: 4,
    story: 'Hình vẽ dòng nước chảy với những giọt nước bắn ra hai bên.',
    imageHint: 'Một dòng suối với các giọt nước văng ra.',
    emoji: '💧'
  }
];

/**
 * Lộ trình "Làm quen" - 6 bước nhỏ để bé bắt đầu.
 */
export interface FoundationStep {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  emoji: string;
  duration: string;
  description: string;
  href?: string;
  highlight?: string;
}

export const foundationSteps: FoundationStep[] = [
  {
    id: 'intro',
    order: 1,
    title: 'Tiếng Trung là gì?',
    subtitle: 'Khám phá ngôn ngữ thú vị nhất thế giới',
    emoji: '🐼',
    duration: '5 phút',
    description: 'Tìm hiểu về tiếng Trung - ngôn ngữ có 1 tỷ người sử dụng, dùng chữ tượng hình rất đẹp và thú vị!',
    highlight: 'Bắt đầu tại đây'
  },
  {
    id: 'tones',
    order: 2,
    title: '4 thanh điệu',
    subtitle: 'Học cách lên xuống giọng cho đúng',
    emoji: '🎵',
    duration: '15 phút',
    description: 'Tiếng Trung có 4 thanh điệu. Cùng 1 âm "ma" - 4 thanh khác nhau sẽ có 4 nghĩa khác nhau đấy!',
    href: '/pinyin'
  },
  {
    id: 'pinyin',
    order: 3,
    title: 'Bảng phiên âm Pinyin',
    subtitle: 'Học bảng chữ cái phiên âm tiếng Trung',
    emoji: '🔤',
    duration: '30 phút',
    description: 'Pinyin là cách dùng chữ Latinh để đọc tiếng Trung. Học pinyin xong, bé sẽ đọc được mọi chữ Hán!',
    href: '/pinyin'
  },
  {
    id: 'strokes',
    order: 4,
    title: '8 nét cơ bản',
    subtitle: 'Những "chú nét" để viết chữ Hán',
    emoji: '✏️',
    duration: '20 phút',
    description: 'Bất kỳ chữ Hán nào cũng được tạo từ 8 nét này. Biết 8 nét = viết được mọi chữ!'
  },
  {
    id: 'rules',
    order: 5,
    title: '7 quy tắc viết chữ',
    subtitle: 'Cách viết chữ Hán đúng và đẹp',
    emoji: '📐',
    duration: '15 phút',
    description: 'Học các quy tắc đơn giản: ngang trước sổ sau, trên trước dưới sau, trái trước phải sau...'
  },
  {
    id: 'first10',
    order: 6,
    title: '10 chữ Hán đầu tiên',
    subtitle: 'Bắt đầu với những chữ đơn giản nhất',
    emoji: '🎉',
    duration: '45 phút',
    description: 'Học 10 chữ siêu dễ và đẹp: 一, 二, 三, 人, 大, 小, 日, 月, 山, 水. Mỗi chữ đều có câu chuyện riêng!'
  }
];
