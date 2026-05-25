'use client';

import { useStreak } from '@/hooks/useStreak';
import { Card } from '@/components/ui/Card';

export function StreakCard() {
  const { streak } = useStreak();

  return (
    <Card className="!p-5 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 border-orange-200">
      <div className="flex items-center gap-4">
        <div className="text-5xl animate-bounce-slow">🔥</div>
        <div>
          <p className="text-3xl font-extrabold text-orange-600">{streak}</p>
          <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
            ngày học liên tiếp
          </p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Giữ chuỗi này để mở khoá huy hiệu đặc biệt!
      </p>
    </Card>
  );
}
