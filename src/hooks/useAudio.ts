'use client';

/**
 * Hook phát âm thanh tiếng Trung – dùng Web Speech API (TTS trình duyệt).
 *
 * QUAN TRỌNG về thanh điệu:
 * - Phải truyền chữ Hán thật (不是 pinyin) để TTS đọc đúng thanh.
 * - Pinyin như "mā" sẽ bị đọc như Latin → sai hoàn toàn.
 * - Chữ Hán 妈/麻/马/骂 → TTS tự biết thanh điệu đúng.
 *
 * Các tham số pitch/rate được tinh chỉnh:
 * - Thanh 1 (bằng, cao): rate thấp, pitch cao đều
 * - Thanh 2 (lên): rate thấp, pitch tăng dần (browser TTS tự xử lý khi đọc đúng chữ)
 * - Thanh 3 (xuống-lên): rate rất chậm để nghe rõ
 * - Thanh 4 (xuống): rate nhanh hơn, pitch thấp hơn
 *
 * Trong production, nên thay bằng file audio thu sẵn từ người Trung Quốc bản ngữ.
 */

interface PlayOptions {
  rate?: number;   // 0.5 (rất chậm) → 1.0 (bình thường) → 2.0 (nhanh)
  pitch?: number;  // 0.1 → 2.0
  lang?: string;
  slow?: boolean;
}

/** Hàm nội bộ để lấy voices, chờ load nếu chưa có */
function getChineseVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  // Ưu tiên: giọng nữ Xiaoxiao (Microsoft) > giọng Google zh > bất kỳ zh
  return (
    voices.find((v) => v.name.includes('Xiaoxiao')) ??
    voices.find((v) => v.name.includes('Yunxi')) ??
    voices.find((v) => v.lang === 'zh-CN' && v.name.includes('Female')) ??
    voices.find((v) => v.lang === 'zh-CN') ??
    voices.find((v) => v.lang.startsWith('zh')) ??
    null
  );
}

function speakInternal(text: string, options: PlayOptions = {}) {
  if (typeof window === 'undefined') return;
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = options.lang ?? 'zh-CN';
  utter.rate = options.rate ?? (options.slow ? 0.5 : 0.7);
  utter.pitch = options.pitch ?? 1.1;
  utter.volume = 1;

  const voice = getChineseVoice();
  if (voice) utter.voice = voice;

  window.speechSynthesis.speak(utter);
}

/** Đợi voices load nếu chưa sẵn sàng (Chrome lazy-loads voices) */
function speakWhenReady(text: string, options: PlayOptions = {}) {
  if (typeof window === 'undefined') return;

  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    speakInternal(text, options);
    return;
  }

  // Chrome cần load voices trước — thử lại sau 300ms
  const timeout = setTimeout(() => {
    speakInternal(text, options);
  }, 300);

  window.speechSynthesis.addEventListener('voiceschanged', () => {
    clearTimeout(timeout);
    speakInternal(text, options);
  }, { once: true });
}

export function useAudio() {
  /**
   * Phát âm thanh tiếng Trung.
   * @param text - PHẢI là chữ Hán thật (không phải pinyin latin).
   *              Ví dụ đúng: '妈', '你好'
   *              Ví dụ sai: 'mā', 'nǐ hǎo'
   */
  const play = (text: string, options: PlayOptions = {}) => {
    speakWhenReady(text, options);
  };

  /** Phát siêu chậm để bé nghe rõ từng âm tiết */
  const playSlow = (text: string) => {
    speakWhenReady(text, { rate: 0.45, pitch: 1.1, slow: true });
  };

  return { play, playSlow };
}
