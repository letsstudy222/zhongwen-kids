'use client';

import { useEffect, useState } from 'react';

/**
 * Hook tính số ngày học liên tiếp.
 * Lưu trữ trong localStorage để hoạt động hoàn toàn ở client.
 */
export function useStreak() {
  const [streak, setStreak] = useState(0);
  const [lastDate, setLastDate] = useState<string | null>(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const savedStreak = parseInt(localStorage.getItem('streak') ?? '0', 10);
    const savedDate = localStorage.getItem('streak-date');

    if (savedDate === today) {
      // Đã ghi nhận hôm nay
      setStreak(savedStreak);
    } else if (savedDate) {
      // Kiểm tra xem có phải hôm qua không
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (savedDate === yesterday.toDateString()) {
        const newStreak = savedStreak + 1;
        setStreak(newStreak);
        localStorage.setItem('streak', String(newStreak));
      } else {
        setStreak(1);
        localStorage.setItem('streak', '1');
      }
      localStorage.setItem('streak-date', today);
    } else {
      setStreak(1);
      localStorage.setItem('streak', '1');
      localStorage.setItem('streak-date', today);
    }

    setLastDate(today);
  }, []);

  return { streak, lastDate };
}
