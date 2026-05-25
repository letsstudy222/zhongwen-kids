import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Mascot } from '@/components/ui/Mascot';

const tips = [
  {
    emoji: '⏰',
    title: 'Đều đặn 15 phút mỗi ngày',
    desc: 'Học ngắn nhưng đều mỗi ngày hiệu quả hơn nhiều so với học dồn cuối tuần.'
  },
  {
    emoji: '🎵',
    title: 'Bật bài hát Trung Quốc khi ăn cơm',
    desc: 'Tạo môi trường tiếng Trung tự nhiên giúp bé quen với âm điệu.'
  },
  {
    emoji: '🗣️',
    title: 'Nói chuyện với bé bằng câu đơn giản',
    desc: 'Dùng những câu chào hỏi cơ bản: 你好, 再见, 谢谢...'
  },
  {
    emoji: '🏆',
    title: 'Khen ngợi mỗi khi bé hoàn thành bài',
    desc: 'Động viên tích cực giúp bé yêu thích việc học hơn.'
  },
  {
    emoji: '🎮',
    title: 'Chơi trò chơi cùng bé',
    desc: 'Cùng tham gia phần Trò chơi để biến giờ học thành thời gian gia đình.'
  },
  {
    emoji: '📊',
    title: 'Theo dõi tiến độ qua dashboard',
    desc: 'Nắm rõ bé đang học đến đâu, gặp khó khăn ở phần nào.'
  }
];

export default function ParentsPage() {
  return (
    <>
      <PageHero
        emoji="👨‍👩‍👧"
        title="Đồng hành cùng bé"
        subtitle="Hướng dẫn dành cho phụ huynh – giúp bé học tiếng Trung hiệu quả ngay tại nhà."
      />

      <section className="container mx-auto px-4 py-8">
        {/* Mascot intro */}
        <Card className="mb-10 bg-gradient-to-r from-secondary-100 to-primary-100 dark:from-secondary-900/20 dark:to-primary-900/20 border-secondary-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Mascot mood="wave" className="w-32 h-32 flex-shrink-0" />
            <div>
              <h2 className="font-display text-2xl font-extrabold mb-2">
                Xin chào ba mẹ! 👋
              </h2>
              <p className="text-slate-700 dark:text-slate-200">
                Cảm ơn ba mẹ đã đồng hành cùng bé trên hành trình học tiếng
                Trung. Trang này tổng hợp các mẹo và công cụ giúp ba mẹ hỗ trợ
                con học hiệu quả hơn – kể cả khi ba mẹ chưa biết tiếng Trung.
              </p>
            </div>
          </div>
        </Card>

        {/* Tips */}
        <h2 className="font-display text-3xl font-extrabold mb-5">
          💡 6 mẹo hữu ích
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {tips.map((t) => (
            <Card key={t.title} className="!p-5">
              <div className="text-4xl mb-2">{t.emoji}</div>
              <h3 className="font-display text-lg font-extrabold mb-1">
                {t.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t.desc}
              </p>
            </Card>
          ))}
        </div>

        {/* Parent dashboard mockup */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-display text-3xl font-extrabold">
              📊 Dashboard phụ huynh
            </h2>
            <Pill color="accent">Demo</Pill>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Tổng quan */}
            <Card className="lg:col-span-2">
              <h3 className="font-display text-xl font-extrabold mb-4">
                Tuần này của bé Linh
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-2xl bg-primary-50 dark:bg-primary-900/20">
                  <p className="text-3xl font-extrabold text-primary-600">5</p>
                  <p className="text-xs text-slate-500 font-bold">Ngày học</p>
                </div>
                <div className="text-center p-3 rounded-2xl bg-secondary-50 dark:bg-secondary-900/20">
                  <p className="text-3xl font-extrabold text-secondary-600">
                    24
                  </p>
                  <p className="text-xs text-slate-500 font-bold">Từ mới</p>
                </div>
                <div className="text-center p-3 rounded-2xl bg-accent-50 dark:bg-accent-900/20">
                  <p className="text-3xl font-extrabold text-accent-600">
                    320
                  </p>
                  <p className="text-xs text-slate-500 font-bold">XP đạt</p>
                </div>
                <div className="text-center p-3 rounded-2xl bg-success-50 dark:bg-success-900/20">
                  <p className="text-3xl font-extrabold text-secondary-600">8</p>
                  <p className="text-xs text-slate-500 font-bold">
                    Bài học xong
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-bold mb-2">
                  Tiến độ YCT 1: 65% hoàn thành
                </p>
                <ProgressBar value={65} color="primary" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold mb-2">
                  Phát âm Pinyin: 80% chính xác
                </p>
                <ProgressBar value={80} color="secondary" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold mb-2">
                  Nhận biết chữ Hán: 45%
                </p>
                <ProgressBar value={45} color="accent" />
              </div>
            </Card>

            {/* Khuyến nghị */}
            <Card className="bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-900/20 dark:to-primary-900/20">
              <h3 className="font-display text-xl font-extrabold mb-3">
                💬 Gợi ý cho ba mẹ
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>
                    Bé học rất tốt phần <b>màu sắc</b>. Hãy khen bé nhé!
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>⚠️</span>
                  <span>
                    Bé đang gặp khó với <b>thanh 3</b>. Cùng nghe lại bài Pinyin.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>🎯</span>
                  <span>
                    Mục tiêu tuần tới: hoàn thành <b>Chủ đề Gia đình</b>.
                  </span>
                </li>
              </ul>
              <Button size="sm" variant="primary" className="mt-4 w-full">
                📩 Gửi báo cáo về email
              </Button>
            </Card>
          </div>
        </div>

        {/* FAQ ngắn */}
        <Card>
          <h3 className="font-display text-xl font-extrabold mb-4">
            ❓ Câu hỏi thường gặp
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Bé nên học bao lâu mỗi ngày?</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                15–20 phút mỗi ngày là lý tưởng cho lứa tuổi tiểu học.
              </p>
            </div>
            <div>
              <p className="font-bold">Ba mẹ không biết tiếng Trung có sao không?</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Hoàn toàn không! Toàn bộ giao diện và lời giải thích đều bằng
                tiếng Việt, có audio chuẩn để bé nghe.
              </p>
            </div>
            <div>
              <p className="font-bold">Khi nào bé có thể thi YCT thật?</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Sau khi hoàn thành lộ trình YCT 1 (3–4 tháng), bé đã sẵn sàng cho
                kỳ thi YCT 1 chính thức.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
