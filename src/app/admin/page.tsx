import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';

const stats = [
  { label: 'Tổng người dùng', value: '12,840', delta: '+8.2%', emoji: '👥', color: 'primary' as const },
  { label: 'Học sinh hoạt động', value: '7,123', delta: '+4.5%', emoji: '🎓', color: 'secondary' as const },
  { label: 'Bài học hoàn thành', value: '98,521', delta: '+12.1%', emoji: '✅', color: 'success' as const },
  { label: 'Doanh thu tháng', value: '₫68M', delta: '+3.4%', emoji: '💰', color: 'accent' as const }
];

const recentUsers = [
  { name: 'Bé Minh', age: 7, level: 'YCT 1', progress: 65, joined: '2025-05-20' },
  { name: 'Bé An', age: 9, level: 'YCT 2', progress: 42, joined: '2025-05-18' },
  { name: 'Bé Linh', age: 8, level: 'YCT 1', progress: 88, joined: '2025-05-15' },
  { name: 'Bé Phúc', age: 10, level: 'YCT 3', progress: 30, joined: '2025-05-12' },
  { name: 'Bé Hà', age: 6, level: 'Pre-YCT', progress: 22, joined: '2025-05-10' }
];

const contentItems = [
  { type: 'Bài học', name: 'YCT 1 – Bài 8: Số đếm 11-20', status: 'Đã xuất bản', emoji: '📘' },
  { type: 'Trò chơi', name: 'Nghe và chọn (đang chỉnh sửa)', status: 'Bản nháp', emoji: '🎮' },
  { type: 'Bài hát', name: '小苹果 – Quả táo nhỏ', status: 'Đã xuất bản', emoji: '🎵' },
  { type: 'Truyện', name: '愚公移山 – Ngu công dời núi', status: 'Chờ duyệt', emoji: '📖' }
];

const colorMap = {
  primary: 'from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200',
  secondary: 'from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 border-secondary-200',
  accent: 'from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border-accent-200',
  success: 'from-success-50 to-secondary-100 dark:from-success-900/20 dark:to-secondary-900/20 border-success-200'
};

export default function AdminPage() {
  return (
    <>
      <PageHero
        emoji="⚙️"
        title="Quản trị hệ thống"
        subtitle="Trang demo dành cho quản trị viên – theo dõi người dùng, nội dung và doanh thu."
      >
        <Pill color="accent" className="mt-3">
          ⚠️ Trang mockup, chưa kết nối backend thật
        </Pill>
      </PageHero>

      <section className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <Card
              key={s.label}
              className={`!p-5 bg-gradient-to-br ${colorMap[s.color]}`}
            >
              <div className="flex items-start justify-between">
                <div className="text-3xl">{s.emoji}</div>
                <Pill color="success">{s.delta}</Pill>
              </div>
              <p className="mt-3 text-3xl font-extrabold">{s.value}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-bold">
                {s.label}
              </p>
            </Card>
          ))}
        </div>

        {/* Recent users + content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {/* Users */}
          <Card className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl font-extrabold">
                👥 Người dùng mới
              </h3>
              <Button size="sm" variant="outline">
                Xem tất cả →
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b-2 border-slate-100 dark:border-slate-700">
                    <th className="py-2 px-2 font-bold">Học sinh</th>
                    <th className="py-2 px-2 font-bold">Tuổi</th>
                    <th className="py-2 px-2 font-bold">Cấp</th>
                    <th className="py-2 px-2 font-bold">Tiến độ</th>
                    <th className="py-2 px-2 font-bold">Tham gia</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((u) => (
                    <tr
                      key={u.name}
                      className="border-b border-slate-50 dark:border-slate-800"
                    >
                      <td className="py-3 px-2 font-bold">{u.name}</td>
                      <td className="py-3 px-2 text-slate-500">{u.age}</td>
                      <td className="py-3 px-2">
                        <Pill color="primary">{u.level}</Pill>
                      </td>
                      <td className="py-3 px-2 min-w-[120px]">
                        <ProgressBar value={u.progress} />
                      </td>
                      <td className="py-3 px-2 text-slate-500 text-xs">
                        {u.joined}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Quick actions */}
          <Card>
            <h3 className="font-display text-xl font-extrabold mb-4">
              ⚡ Thao tác nhanh
            </h3>
            <div className="space-y-2.5">
              <Button variant="primary" className="w-full justify-start">
                ➕ Thêm bài học mới
              </Button>
              <Button variant="secondary" className="w-full justify-start">
                🎮 Tạo trò chơi
              </Button>
              <Button variant="accent" className="w-full justify-start">
                🏅 Cấu hình huy hiệu
              </Button>
              <Button variant="outline" className="w-full justify-start">
                📊 Xuất báo cáo
              </Button>
              <Button variant="outline" className="w-full justify-start">
                📩 Gửi thông báo
              </Button>
            </div>
          </Card>
        </div>

        {/* Content management */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-xl font-extrabold">
              📚 Quản lý nội dung
            </h3>
            <Button size="sm" variant="primary">
              ➕ Thêm mới
            </Button>
          </div>
          <ul className="space-y-2">
            {contentItems.map((it, i) => (
              <li
                key={i}
                className="flex items-center gap-4 p-3 rounded-2xl border border-cream-100 dark:border-slate-700 hover:border-primary-200"
              >
                <div className="text-3xl">{it.emoji}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold truncate">{it.name}</p>
                  <p className="text-xs text-slate-500">{it.type}</p>
                </div>
                <Pill
                  color={
                    it.status === 'Đã xuất bản'
                      ? 'success'
                      : it.status === 'Bản nháp'
                        ? 'slate'
                        : 'accent'
                  }
                >
                  {it.status}
                </Pill>
                <Button size="sm" variant="ghost">
                  ✏️
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
}
