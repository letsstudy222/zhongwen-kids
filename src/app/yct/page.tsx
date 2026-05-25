import Link from 'next/link';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Button } from '@/components/ui/Button';
import { Mascot } from '@/components/ui/Mascot';
import { vocabulary } from '@/data/vocabulary';
import { conversations } from '@/data/conversations';
import { sampleQuizzes } from '@/data/quizzes';

export const metadata = {
  title: 'YCT – Lộ trình học tiếng Trung trẻ em'
};

interface LevelInfo {
  level: number;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  borderColor: string;
  ageRange: string;
  duration: string;
  description: string;
  canDo: string[];
  goals: string[];
  topics: string[];
}

const levels: LevelInfo[] = [
  {
    level: 1,
    title: 'YCT 1',
    subtitle: 'Bước đầu giao tiếp',
    emoji: '🎈',
    color: 'from-primary-300 to-blush-300',
    borderColor: 'border-primary-200',
    ageRange: 'Lớp 1-3 (6-9 tuổi)',
    duration: '2-3 tháng',
    description: 'Sau khi học xong, bé có thể chào hỏi, giới thiệu bản thân và nói về gia đình bằng tiếng Trung!',
    canDo: [
      'Tự giới thiệu tên, tuổi',
      'Chào hỏi, cảm ơn, xin lỗi',
      'Nói về gia đình và bạn bè',
      'Đếm số từ 0 đến 100'
    ],
    goals: [
      '80 từ vựng cơ bản',
      '4 cấu trúc câu đơn giản',
      'Đọc được pinyin trôi chảy',
      'Nhận biết 20 chữ Hán'
    ],
    topics: ['👋 Chào hỏi', '🙋 Đại từ', '🔢 Con số', '👨‍👩‍👧 Gia đình', '🍎 Thức ăn']
  },
  {
    level: 2,
    title: 'YCT 2',
    subtitle: 'Giao tiếp đời thường',
    emoji: '🚀',
    color: 'from-accent-300 to-accent-400',
    borderColor: 'border-accent-200',
    ageRange: 'Lớp 2-4 (7-10 tuổi)',
    duration: '3-4 tháng',
    description: 'Bé bắt đầu nói được câu hoàn chỉnh, miêu tả mọi thứ xung quanh và biểu lộ cảm xúc.',
    canDo: [
      'Miêu tả người, vật, nơi chốn',
      'Hỏi và trả lời về thời gian',
      'Nói về sở thích',
      'Đặt câu hỏi đơn giản'
    ],
    goals: [
      '150 từ vựng (gồm YCT 1)',
      '10+ cấu trúc câu',
      'Hội thoại 4-6 câu',
      'Viết được 50 chữ Hán'
    ],
    topics: ['👁️ Cơ thể', '⏰ Thời gian', '🌳 Thiên nhiên', '🏃 Động từ', '✨ Tính từ']
  },
  {
    level: 3,
    title: 'YCT 3',
    subtitle: 'Mở rộng kỹ năng',
    emoji: '🌟',
    color: 'from-secondary-300 to-secondary-400',
    borderColor: 'border-secondary-200',
    ageRange: 'Lớp 3-5 (8-11 tuổi)',
    duration: '4-5 tháng',
    description: 'Bé có thể kể chuyện, miêu tả sự việc và trao đổi với người Trung Quốc trong các tình huống đơn giản.',
    canDo: [
      'Kể lại câu chuyện ngắn',
      'Miêu tả hoạt động đang diễn ra',
      'So sánh người/vật',
      'Đặt câu hỏi phức tạp hơn'
    ],
    goals: [
      '300 từ vựng',
      '20+ cấu trúc câu',
      'Đọc đoạn văn ngắn',
      'Viết được 100 chữ Hán'
    ],
    topics: ['🎨 Hoạt động', '🚌 Đi lại', '🏪 Mua sắm', '💭 Cảm xúc', '🎭 So sánh']
  },
  {
    level: 4,
    title: 'YCT 4',
    subtitle: 'Sẵn sàng HSK',
    emoji: '🏆',
    color: 'from-lavender-300 to-lavender-400',
    borderColor: 'border-lavender-200',
    ageRange: 'Lớp 4-5 (9-11 tuổi)',
    duration: '5-6 tháng',
    description: 'Hoàn thành YCT 4, bé đã có nền tảng vững để chuyển sang HSK ở cấp 2 với tự tin!',
    canDo: [
      'Tham gia hội thoại 10+ câu',
      'Viết đoạn văn ngắn',
      'Đọc hiểu truyện ngắn',
      'Nói về tương lai, ước mơ'
    ],
    goals: [
      '600+ từ vựng',
      '30+ cấu trúc câu',
      'Viết được 300 chữ Hán',
      'Tự tin thi YCT chính thức'
    ],
    topics: ['🌏 Văn hoá', '✈️ Du lịch', '📚 Truyện cổ', '💡 Tương lai', '🎓 Trường lớp']
  }
];

export default function YctPage() {
  return (
    <>
      <PageHero
        emoji="🎯"
        title="Lộ trình học YCT"
        subtitle="YCT là kỳ thi tiếng Trung chính thức dành cho trẻ em do Hanban (Trung Quốc) tổ chức. 4 cấp YCT là 4 chặng đường nhỏ giúp bé tiến bộ từng bước."
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* CTA Foundation - quan trọng cho người mới */}
        <Card className="mb-10 bg-gradient-to-br from-success-50 via-secondary-50 to-cream-50 dark:from-success-900/20 dark:to-secondary-900/20 border-success-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Mascot mood="wave" className="w-28 h-28 flex-shrink-0" />
            <div className="flex-1 text-center md:text-left">
              <Pill color="success" className="mb-2">💡 Dành cho bé mới bắt đầu</Pill>
              <h2 className="font-display text-2xl font-extrabold mb-2">
                Bé chưa biết gì về tiếng Trung?
              </h2>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                Hãy bắt đầu với phần <strong>&ldquo;Làm quen với tiếng Trung&rdquo;</strong> - học về thanh điệu, Pinyin, các nét cơ bản và 10 chữ Hán đầu tiên trước nhé!
              </p>
              <Link href="/foundation">
                <Button variant="primary" size="lg">
                  🌱 Bắt đầu từ đầu
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Lộ trình tổng quan */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl font-extrabold mb-2">
            🗺️ Lộ trình 4 chặng
          </h2>
          <p className="text-slate-500">
            Học tuần tự từ YCT 1 → YCT 4. Mỗi chặng ~2-6 tháng.
          </p>
        </div>

        {/* Lộ trình vertical timeline */}
        <div className="space-y-6">
          {levels.map((lv, idx) => {
            const vocabCount = vocabulary.filter((v) => v.yctLevel === lv.level).length;
            const convCount = conversations.filter((c) => c.yctLevel === lv.level).length;
            const quizCount = sampleQuizzes[lv.level]?.length ?? 0;

            return (
              <div key={lv.level} className="relative">
                {/* Đường nối giữa các bước */}
                {idx < levels.length - 1 && (
                  <div className="absolute left-10 top-24 bottom-0 w-1 bg-gradient-to-b from-primary-200 to-transparent dark:from-primary-900/50 -z-10" />
                )}

                <Card className={`!p-0 overflow-hidden border-2 ${lv.borderColor}`}>
                  <div className="flex flex-col lg:flex-row">
                    {/* Bên trái: badge cấp độ */}
                    <div className={`bg-gradient-to-br ${lv.color} p-6 lg:w-72 flex-shrink-0 text-white relative overflow-hidden`}>
                      <div className="absolute -top-4 -right-4 text-9xl opacity-20">
                        {lv.emoji}
                      </div>
                      <div className="relative">
                        <p className="text-xs font-bold uppercase tracking-wider opacity-80">
                          Chặng {lv.level}
                        </p>
                        <h3 className="font-display text-4xl font-extrabold mt-1">
                          {lv.title}
                        </h3>
                        <p className="text-white/90 mt-1">{lv.subtitle}</p>
                        <div className="mt-4 space-y-1 text-sm">
                          <p className="flex items-center gap-2">
                            <span className="opacity-80">🎂</span>
                            <span>{lv.ageRange}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="opacity-80">⏱</span>
                            <span>{lv.duration}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bên phải: chi tiết */}
                    <div className="flex-1 p-6">
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                        {lv.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-5 mb-4">
                        {/* Bé học được gì */}
                        <div>
                          <h4 className="font-display font-extrabold text-sm mb-2 text-primary-600 dark:text-primary-300 flex items-center gap-1">
                            <Star className="w-4 h-4" /> BÉ LÀM ĐƯỢC GÌ?
                          </h4>
                          <ul className="space-y-1.5">
                            {lv.canDo.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Mục tiêu */}
                        <div>
                          <h4 className="font-display font-extrabold text-sm mb-2 text-secondary-600 dark:text-secondary-300 flex items-center gap-1">
                            🎯 MỤC TIÊU
                          </h4>
                          <ul className="space-y-1.5">
                            {lv.goals.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <span className="text-secondary-500 mt-0.5">▸</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Chủ đề */}
                      <div className="mb-4">
                        <h4 className="font-display font-extrabold text-sm mb-2 text-accent-600 dark:text-accent-300">
                          📚 CHỦ ĐỀ CHÍNH
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {lv.topics.map((t) => (
                            <Pill key={t} color="slate">{t}</Pill>
                          ))}
                        </div>
                      </div>

                      {/* Số liệu + nút */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-cream-100 dark:border-slate-700">
                        <div className="flex flex-wrap gap-2">
                          <Pill color="primary">📚 {vocabCount} từ</Pill>
                          <Pill color="secondary">💬 {convCount} hội thoại</Pill>
                          <Pill color="accent">📝 {quizCount} câu quiz</Pill>
                        </div>
                        <Link href={`/yct/${lv.level}`}>
                          <Button variant="primary" size="md">
                            Vào học {lv.title} <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vì sao chọn YCT */}
      <section className="bg-white dark:bg-slate-800/30 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Pill color="secondary">🤔 Câu hỏi thường gặp</Pill>
            <h2 className="font-display text-3xl font-extrabold mt-3">
              Vì sao chọn YCT cho bé?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Phù hợp lứa tuổi',
                desc: 'YCT thiết kế dành riêng cho bé từ 6-12 tuổi - từ vựng và chủ đề gần gũi với đời sống bé.',
                emoji: '🧒'
              },
              {
                title: 'Tập trung Nghe-Nói',
                desc: 'YCT 1-2 không yêu cầu viết. Bé tự tin giao tiếp trước, không bị áp lực bởi chữ Hán phức tạp.',
                emoji: '🗣️'
              },
              {
                title: 'Bước đệm tuyệt vời',
                desc: 'Hoàn thành YCT 4, bé đã sẵn sàng cho HSK 1-2 khi lên cấp 2 - vững bước trên đường dài.',
                emoji: '🪜'
              }
            ].map((it, i) => (
              <Card key={i} className="text-center">
                <div className="text-5xl mb-3">{it.emoji}</div>
                <h3 className="font-display text-lg font-extrabold mb-2">{it.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{it.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
