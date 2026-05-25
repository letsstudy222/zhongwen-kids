// Helper liên quan đến pinyin & thanh điệu tiếng Trung
// Màu thanh điệu theo chuẩn quốc tế (Pleco/Dummitt method) - giúp bé phân biệt nhanh

const TONE_COLORS: Record<number, string> = {
  1: 'text-red-400',      // thanh 1 — cao bằng (đỏ dịu)
  2: 'text-amber-500',    // thanh 2 — đi lên (vàng cam)
  3: 'text-teal-500',     // thanh 3 — xuống rồi lên (xanh ngọc)
  4: 'text-indigo-400',   // thanh 4 — đi xuống (xanh chàm dịu)
  0: 'text-slate-400'     // thanh nhẹ
};

/**
 * Trả về class màu cho từng thanh điệu trong pinyin.
 * Bốn màu tone tuân thủ chuẩn quốc tế để bé dễ phân biệt thanh điệu bằng màu sắc.
 */
export function getToneColor(tone: number): string {
  return TONE_COLORS[tone] ?? TONE_COLORS[0];
}

/**
 * Xác định thanh điệu của một âm tiết pinyin dựa trên dấu thanh.
 */
export function detectTone(syllable: string): number {
  if (/[āēīōūǖ]/.test(syllable)) return 1;
  if (/[áéíóúǘ]/.test(syllable)) return 2;
  if (/[ǎěǐǒǔǚ]/.test(syllable)) return 3;
  if (/[àèìòùǜ]/.test(syllable)) return 4;
  return 0;
}
