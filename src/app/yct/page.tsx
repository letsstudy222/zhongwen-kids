import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { vocabulary } from '@/data/vocabulary';
import { conversations } from '@/data/conversations';
import { sampleQuizzes } from '@/data/quizzes';

export const metadata = {
  title: 'YCT – Cấp độ học tiếng Trung trẻ em'
};

const levels = [
  {
    level: 1,
    title: 'YCT 1',
    subtitle: 'Bắt đầu hành trình',
    emoji: '🌱',
    color: 'from-secondary-300 to-secondary-400',
    description: 'Từ vựng đời thường, chào hỏi đơn giản. Dành cho bé lớp 1-2.'
  },
  {
    level: 2,
    title: 'YCT 2',
    subtitle: 'Giao tiếp cơ bản',
    emoji: '🎈',
    color: 'from-accent-300 to-accent-400',
    description: 'Câu đơn giản, miêu tả người và vật. Dành cho bé lớp 2-3.'
  },
  {
    level: 3,
    title: 'YCT 3',
    subtitle: 'Mở rộng hội thoại',
    emoji: '🚀',
    color: 'from-secondary-200 to-lavender-300',
    description: 'Câu phức, kể chuyện, đặt câu hỏi. Dành cho bé lớp 3-4.'
  },
  {
    level: 4,
    title: 'YCT 4',
    subtitle: 'Sẵn sàng HSK',
    emoji: '🏆',
    color: 'from-lavender-300 to-lavender-400',
    description: 'Đoạn văn ngắn, đọc hiểu cơ bản. Dành cho bé lớp 4-5.'
  }
];

export default function YctPage() {
  return (
    <>
      <PageHero
        emoji="🎯"
        title="Học theo cấp YCT"
        subtitle="YCT (Youth Chinese Test) là kỳ thi tiếng Trung dành cho trẻ em – nhẹ nhàng, phù hợp lứa tuổi."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {levels.map((lv) => {
            const vocabCount = vocabulary.filter((v) => v.yctLevel === lv.level).length;
            const convCount = conversations.filter((c) => c.yctLevel === lv.level).length;
            const quizCount = sampleQuizzes[lv.level]?.length ?? 0;

            return (
              <Link key={lv.level} href={`/yct/${lv.level}`}>
                <Card interactive className="!p-0 overflow-hidden h-full">
                  <div className={`bg-gradient-to-br ${lv.color} p-6 text-white`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-bold opacity-90 uppercase tracking-wider">
                          Cấp độ
                        </p>
                        <h2 className="font-display text-4xl font-extrabold">{lv.title}</h2>
                        <p className="opacity-90">{lv.subtitle}</p>
                      </div>
                      <div className="text-7xl">{lv.emoji}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {lv.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Pill color="primary">📚 {vocabCount} từ</Pill>
                      <Pill color="secondary">💬 {convCount} hội thoại</Pill>
                      <Pill color="accent">📝 {quizCount} câu hỏi</Pill>
                    </div>
                    <p className="mt-4 font-bold text-primary-600 text-sm">
                      Vào học ngay →
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800/50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-center mb-6">
            Vì sao chọn YCT thay vì HSK?
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Phù hợp tuổi', desc: 'YCT thiết kế dành riêng cho thiếu nhi, từ vựng và chủ đề gần gũi.', emoji: '🧒' },
              { title: 'Tập trung nghe-nói', desc: 'YCT 1-2 không yêu cầu viết, giúp bé tự tin giao tiếp trước.', emoji: '🗣️' },
              { title: 'Bước đệm hoàn hảo', desc: 'Hoàn thành YCT 4 = sẵn sàng HSK 1-2 ở cấp 2.', emoji: '🪜' }
            ].map((it, i) => (
              <Card key={i} className="text-center">
                <div className="text-5xl mb-2">{it.emoji}</div>
                <h3 className="font-display text-lg">{it.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{it.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
