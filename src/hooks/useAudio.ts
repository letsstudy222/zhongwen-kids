'use client';

/**
 * Hook phát âm thanh – sử dụng Web Speech API (TTS trình duyệt) làm fallback
 * khi chưa có file audio thật. Trong production nên thay bằng audio đã thu sẵn.
 *
 * Tốc độ được điều chỉnh chậm hơn (0.7) để bé tiểu học dễ nghe phân biệt thanh điệu.
 * Cho phép tuỳ chỉnh rate qua tham số nếu cần phát chậm/nhanh tuỳ ngữ cảnh.
 */

interface PlayOptions {
  rate?: number; // tốc độ: 0.5 (rất chậm) → 1.0 (bình thường) → 2.0 (rất nhanh)
  pitch?: number; // cao độ: 0.5 → 2.0
  lang?: string;
}

export function useAudio() {
  const play = (text: string, options: PlayOptions = {}) => {
    if (typeof window === 'undefined') return;
    if (!('speechSynthesis' in window)) {
      console.warn('Trình duyệt không hỗ trợ Web Speech API');
      return;
    }

    // Dừng phát âm trước đó nếu có
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = options.lang ?? 'zh-CN';
    utterance.rate = options.rate ?? 0.7;   // chậm rõ rệt cho bé dễ nghe
    utterance.pitch = options.pitch ?? 1.05; // hơi cao 1 chút - giọng tươi tắn
    utterance.volume = 1;

    // Chọn giọng nữ tiếng Trung nếu trình duyệt có sẵn (thân thiện với trẻ em hơn)
    const voices = window.speechSynthesis.getVoices();
    const chineseVoice =
      voices.find(
        (v) =>
          v.lang.startsWith('zh') &&
          (v.name.includes('Female') ||
            v.name.includes('Xiaoxiao') ||
            v.name.includes('女'))
      ) ?? voices.find((v) => v.lang.startsWith('zh'));

    if (chineseVoice) utterance.voice = chineseVoice;

    window.speechSynthesis.speak(utterance);
  };

  /** Phát chậm hơn để luyện nghe từng âm tiết */
  const playSlow = (text: string) => play(text, { rate: 0.55 });

  return { play, playSlow };
}
