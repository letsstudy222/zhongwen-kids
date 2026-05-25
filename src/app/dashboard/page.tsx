import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Mascot } from '@/components/ui/Mascot';
import { StreakCard } from '@/components/dashboard/StreakCard';
import { BadgeGrid } from '@/components/dashboard/BadgeGrid';
import { categoryMeta } from '@/data/vocabulary';

const recentActivities = [
  { emoji: '🎯', text: 'Hoàn thành bài 5 – YCT 1', time: '2 giờ trước', xp: 30 },
  { emoji: '🃏', text: 'Học 10 thẻ chủ đề Gia đình', time: '1 ngày trước', xp: 50 },
  { emoji: '🎶', text: 'Nghe bài hát "两只老虎"', time: '2 ngày trước', xp: 10 },
  { emoji: '🧩', text: 'Chơi trò ghép chữ Hán', time: '3 ngày trước', xp: 25 }
];

export default function DashboardPage() {
  const xp = 1240;
  const xpForNextLevel = 1500;
  const level = 4;

  return (
    <>
      <PageHero
        emoji="🎓"
        title="Bảng điều khiển học tập"
        subtitle="Theo dõi tiến độ, chuỗi học và huy hiệu của bé."
      />

      <section className="container mx-auto px-4 py-8">
        {/* Hàng tóm tắt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <StreakCard />

          <Card className="!p-5 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200">
            <div className="flex items-center gap-4">
              <div className="text-5xl">⭐</div>
              <div>
                <p className="text-3xl font-extrabold text-primary-600">{xp}</p>
                <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                  điểm XP – Cấp độ {level}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <ProgressBar
                value={xp}
                max={xpForNextLevel}
                color="primary"
              />
              <p className="text-xs text-slate-500 mt-1">
                Còn {xpForNextLevel - xp} XP nữa lên Cấp {level + 1}!
              </p>
            </div>
          </Card>

          <Card className="!p-5 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 border-secondary-200">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🏆</div>
              <div>
                <p className="text-3xl font-extrabold text-secondary-600">3/6</p>
                <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                  huy hiệu đã mở
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Học thêm để mở khoá huy hiệu mới!
            </p>
          </Card>
        </div>

        {/* Continue learning */}
        <Card className="mb-8 bg-gradient-to-r from-primary-500 to-accent-400 text-white !border-0">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <Mascot mood="wave" className="w-28 h-28 flex-shrink-0" />
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-wider opacity-80">
                Tiếp tục học
              </p>
              <h2 className="font-display text-2xl font-extrabold">
                YCT 1 – Bài 6: Chủ đề Thức ăn
              </h2>
              <p className="text-white/90 text-sm mt-1">
                Bạn đã hoàn thành 65% bài học này.
              </p>
              <div className="mt-3 max-w-xs">
                <ProgressBar value={65} color="accent" />
              </div>
            </div>
            <Link href="/yct/1">
              <Button variant="accent" size="lg">
                ▶ Học tiếp
              </Button>
            </Link>
          </div>
        </Card>

        {/* Grid: badges + activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          <Card className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl font-extrabold">
                🏅 Huy hiệu của bạn
              </h3>
              <Pill color="accent">3 / 6</Pill>
            </div>
            <BadgeGrid />
          </Card>

          <Card>
            <h3 className="font-display text-xl font-extrabold mb-4">
              📝 Hoạt động gần đây
            </h3>
            <ul className="space-y-3">
              {recentActivities.map((a, i) => (
                <li key={i} className="flex items-start gap-3 pb-3 border-b border-slate-100 dark:border-slate-700 last:border-0">
                  <div className="text-2xl">{a.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{a.text}</p>
                    <p className="text-xs text-slate-500">{a.time}</p>
                  </div>
                  <Pill color="success">+{a.xp} XP</Pill>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Tiến độ theo chủ đề */}
        <Card>
          <h3 className="font-display text-xl font-extrabold mb-5">
            📚 Tiến độ theo chủ đề từ vựng
          </h3>
          <div className="space-y-4">
            {Object.entries(categoryMeta).map(([key, meta], idx) => {
              // Demo tiến độ ngẫu nhiên ổn định
              const progress = [80, 60, 45, 100, 30, 15][idx] ?? 50;
              return (
                <div key={key}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{meta.emoji}</span>
                      <span className="font-bold">{meta.labelVi}</span>
                    </div>
                    <span className="text-sm font-bold text-slate-500">
                      {progress}%
                    </span>
                  </div>
                  <ProgressBar
                    value={progress}
                    color={
                      progress >= 80
                        ? 'success'
                        : progress >= 50
                          ? 'primary'
                          : 'accent'
                    }
                  />
                </div>
              );
            })}
          </div>
        </Card>
      </section>
    </>
  );
}
