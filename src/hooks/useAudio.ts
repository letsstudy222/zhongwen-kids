'use client';

/**
 * Hook phát âm thanh – sử dụng Web Speech API (TTS trình duyệt) làm fallback
 * khi chưa có file audio thật. Trong production nên thay bằng audio đã thu sẵn.
 */
export function useAudio() {
  const play = (text: string, lang = 'zh-CN') => {
    if (typeof window === 'undefined') return;
    if (!('speechSynthesis' in window)) {
      // Trình duyệt không hỗ trợ
      console.warn('Trình duyệt không hỗ trợ Web Speech API');
      return;
    }
    // Dừng phát âm trước đó nếu có
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85; // chậm hơn để trẻ dễ nghe
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  };

  return { play };
}
