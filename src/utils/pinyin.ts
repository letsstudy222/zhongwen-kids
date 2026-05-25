// Helper liên quan đến pinyin & thanh điệu tiếng Trung

const TONE_COLORS: Record<number, string> = {
  1: 'text-rose-500',     // thanh 1 — cao bằng
  2: 'text-amber-500',    // thanh 2 — đi lên
  3: 'text-emerald-500',  // thanh 3 — xuống rồi lên
  4: 'text-sky-500',      // thanh 4 — đi xuống
  0: 'text-slate-400'     // thanh nhẹ
};

/**
 * Trả về class màu cho từng thanh điệu trong pinyin.
 * Giúp trẻ dễ phân biệt thanh điệu bằng màu sắc.
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
