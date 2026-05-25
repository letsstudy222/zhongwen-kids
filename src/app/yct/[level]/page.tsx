import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, BookOpen, MessagesSquare, ClipboardCheck, PenTool } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Flashcard } from '@/components/learning/Flashcard';
import { ConversationCard } from '@/components/learning/ConversationCard';
import { Quiz } from '@/components/learning/Quiz';
import { Pill } from '@/components/ui/Pill';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mascot } from '@/components/ui/Mascot';
import { vocabulary, categoryMeta } from '@/data/vocabulary';
import { conversations } from '@/data/conversations';
import { sampleQuizzes } from '@/data/quizzes';

interface PageProps {
  params: { level: string };
}

export function generateStaticParams() {
  return [{ level: '1' }, { level: '2' }, { level: '3' }, { level: '4' }];
}

interface LevelMeta {
  emoji: string;
  title: string;
  subtitle: string;
  intro: string;
  color: string;
  nextLevel?: number;
  prevLevel?: number;
  prevHref?: string;
}

const levelMeta: Record<number, LevelMeta> = {
  1: {
    emoji: '🎈',
    title: 'YCT 1',
    subtitle: 'Bước đầu giao tiếp',
    intro: 'Cùng học những câu chào hỏi, đại từ và con số đầu tiên. Sau 2-3 tháng, bé sẽ tự tin giới thiệu bản thân bằng tiếng Trung!',
    color: 'from-primary-300 to-blush-300',
    nextLevel: 2,
    prevHref: '/foundation'
  },
  2: {
    emoji: '🚀',
    title: 'YCT 2',
    subtitle: 'Giao tiếp đời thường',
    intro: 'Mở rộng vốn từ về cơ thể, thời gian, đồ vật. Bé sẽ nói được câu hoàn chỉnh và miêu tả thế giới xung quanh!',
    color: 'from-accent-300 to-accent-400',
    nextLevel: 3,
    prevLevel: 1
  },
  3: {
    emoji: '🌟',
    title: 'YCT 3',
    subtitle: 'Mở rộng kỹ năng',
    intro: 'Học cách kể chuyện, miêu tả hoạt động và so sánh. Bé bắt đầu hiểu các đoạn văn ngắn!',
    color: 'from-secondary-300 to-secondary-400',
    nextLevel: 4,
    prevLevel: 2
  },
  4: {
    emoji: '🏆',
    title: 'YCT 4',
    subtitle: 'Sẵn sàng HSK',
    intro: 'Hoàn thành cấp cuối cùng dành cho trẻ em. Sau YCT 4, bé đã sẵn sàng cho hành trình HSK!',
    color: 'from-lavender-300 to-lavender-400',
    prevLevel: 3
  }
};

export default function YctLevelPage({ params }: PageProps) {
  const lvl = parseInt(params.level, 10);
  if (![1, 2, 3, 4].includes(lvl)) notFound();

  const meta = levelMeta[lvl];
  const words = vocabulary.filter((v) => v.yctLevel === lvl);
  const convs = conversations.filter((c) => c.yctLevel === lvl);
  const quizzes = sampleQuizzes[lvl] ?? [];

  // Nhóm từ vựng theo chủ đề
  const wordsByCategory = Object.keys(categoryMeta)
    .map((cat) => ({
      key: cat,
      meta: categoryMeta[cat],
      words: words.filter((w) => w.category === cat)
    }))
    .filter((g) => g.words.length > 0)
    .sort((a, b) => a.meta.order - b.meta.order);

  const totalCharsToLearn = Math.min(words.length, 50);

  return (
    <>
      <PageHero
        emoji={meta.emoji}
        title={meta.title}
        subtitle={meta.intro}
      >
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Pill color="primary">📚 {words.length} từ</Pill>
          <Pill color="secondary">💬 {convs.length} hội thoại</Pill>
          <Pill color="accent">📝 {quizzes.length} câu quiz</Pill>
        </div>
      </PageHero>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* HƯỚNG DẪN HỌC - 4 BƯỚC */}
        <Card className="mb-10 bg-gradient-to-br from-cream-50 to-primary-50 dark:from-slate-800 dark:to-primary-900/20">
          <div className="flex items-center gap-4 mb-5">
            <Mascot mood="happy" className="w-20 h-20 flex-shrink-0" />
            <div>
              <h2 className="font-display text-2xl font-extrabold">
                Học {meta.title} như thế nào?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Đi qua 4 bước nhỏ này để học hiệu quả nhất nhé!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                num: 1,
                icon: BookOpen,
                title: 'Học từ vựng',
                desc: 'Flashcard có audio',
                href: '#vocabulary',
                color: 'primary'
              },
              {
                num: 2,
                icon: MessagesSquare,
                title: 'Tập hội thoại',
                desc: 'Nghe và bắt chước',
                href: '#conversations',
                color: 'secondary'
              },
              {
                num: 3,
                icon: PenTool,
                title: 'Luyện viết',
                desc: 'Trên giấy ô vuông',
                href: '/pinyin',
                color: 'accent'
              },
              {
                num: 4,
                icon: ClipboardCheck,
                title: 'Kiểm tra',
                desc: 'Mini quiz vui',
                href: '#quiz',
                color: 'success'
              }
            ].map((step) => {
              const colorClasses: Record<string, string> = {
                primary: 'from-primary-300 to-primary-400 text-primary-700 bg-primary-50',
                secondary: 'from-secondary-300 to-secondary-400 text-secondary-700 bg-secondary-50',
                accent: 'from-accent-300 to-accent-400 text-accent-700 bg-accent-50',
                success: 'from-success-300 to-success-400 text-success-700 bg-success-50'
              };
              const [gradStart, gradEnd, textColor, bgColor] = colorClasses[step.color].split(' ');
              return (
                <Link
                  key={step.num}
                  href={step.href}
                  className="block group"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-cream-100 dark:border-slate-700 hover:shadow-soft transition-all hover:-translate-y-1 h-full">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradStart} ${gradEnd} flex items-center justify-center mb-3 shadow-soft`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs font-bold text-slate-400">BƯỚC {step.num}</p>
                    <h3 className="font-display font-extrabold">{step.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Card>

        {/* Mục tiêu cụ thể */}
        <Card className="mb-10">
          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <h3 className="font-display font-extrabold text-sm mb-2 text-primary-600 dark:text-primary-300 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> KẾT QUẢ KHI HỌC XONG
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                <li>✓ Học {words.length} từ vựng</li>
                <li>✓ Nắm {convs.length} hội thoại mẫu</li>
                <li>✓ Nhận biết {totalCharsToLearn} chữ Hán</li>
                <li>✓ Hoàn thành quiz {quizzes.length} câu</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-extrabold text-sm mb-2 text-secondary-600 dark:text-secondary-300">
                ⏱ THỜI GIAN ƯỚC TÍNH
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                <li>📅 Mỗi ngày: 15-20 phút</li>
                <li>📆 Mỗi tuần: 3-5 ngày</li>
                <li>🎯 Tổng cộng: 2-4 tháng</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-extrabold text-sm mb-2 text-accent-600 dark:text-accent-300">
                💡 MẸO HỌC HIỆU QUẢ
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                <li>🔊 Luôn nghe audio và lặp lại</li>
                <li>🐢 Dùng nút &ldquo;chậm&rdquo; khi mới học</li>
                <li>📝 Ghi chú từ khó vào sổ tay</li>
                <li>🎮 Chơi trò chơi để củng cố</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* BƯỚC 1: TỪ VỰNG THEO CHỦ ĐỀ */}
        <section id="vocabulary" className="mb-12 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-300 to-primary-400 text-white flex items-center justify-center font-display font-extrabold text-xl shadow-soft">
              1
            </div>
            <div>
              <h2 className="font-display text-3xl font-extrabold">
                Từ vựng ({words.length} từ)
              </h2>
              <p className="text-sm text-slate-500">
                Học theo {wordsByCategory.length} chủ đề - chạm vào thẻ để xem nghĩa
              </p>
            </div>
          </div>

          {words.length === 0 ? (
            <Card>
              <p className="text-center text-slate-500 py-8">
                🚧 Từ vựng cho cấp này đang được biên soạn. Sắp ra mắt!
              </p>
            </Card>
          ) : (
            <div className="space-y-8">
              {wordsByCategory.map((group) => (
                <div key={group.key}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.meta.gradient} flex items-center justify-center text-xl shadow-soft`}>
                      {group.meta.emoji}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-extrabold">
                        {group.meta.labelVi}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {group.words.length} từ
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {group.words.map((w) => (
                      <Flashcard key={w.id} word={w} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* BƯỚC 2: HỘI THOẠI */}
        <section id="conversations" className="mb-12 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary-300 to-secondary-400 text-white flex items-center justify-center font-display font-extrabold text-xl shadow-soft">
              2
            </div>
            <div>
              <h2 className="font-display text-3xl font-extrabold">
                Hội thoại mẫu ({convs.length})
              </h2>
              <p className="text-sm text-slate-500">
                Nghe rồi tập đóng vai từng nhân vật
              </p>
            </div>
          </div>

          {convs.length === 0 ? (
            <Card>
              <p className="text-center text-slate-500 py-8">
                🚧 Hội thoại đang được biên soạn. Sắp ra mắt!
              </p>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {convs.map((c) => (
                <ConversationCard key={c.id} conversation={c} />
              ))}
            </div>
          )}
        </section>

        {/* BƯỚC 3: GỢI Ý LUYỆN VIẾT */}
        <section className="mb-12 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-300 to-accent-400 text-white flex items-center justify-center font-display font-extrabold text-xl shadow-soft">
              3
            </div>
            <div>
              <h2 className="font-display text-3xl font-extrabold">
                Luyện viết chữ Hán
              </h2>
              <p className="text-sm text-slate-500">
                Viết tay giúp bé nhớ chữ Hán lâu hơn
              </p>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-accent-50 to-cream-50 dark:from-accent-900/20 dark:to-slate-800">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="text-6xl">✍️</div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-extrabold mb-2">
                  Tập viết trên ô kẻ mễ
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-200 mb-3 leading-relaxed">
                  Sang trang Pinyin để dùng công cụ tập viết online. Bé có thể vẽ từng nét, xem thứ tự nét đúng. Mỗi chữ tập 5-10 lần để nhớ lâu!
                </p>
                <Link href="/pinyin">
                  <Button variant="accent">
                    🖊️ Mở công cụ tập viết
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* BƯỚC 4: QUIZ */}
        <section id="quiz" className="mb-12 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-success-300 to-success-400 text-white flex items-center justify-center font-display font-extrabold text-xl shadow-soft">
              4
            </div>
            <div>
              <h2 className="font-display text-3xl font-extrabold">
                Quiz kiểm tra
              </h2>
              <p className="text-sm text-slate-500">
                Hãy xem bé đã nhớ được bao nhiêu nhé!
              </p>
            </div>
          </div>
          {quizzes.length > 0 ? (
            <Quiz questions={quizzes} />
          ) : (
            <Card>
              <p className="text-center text-slate-500 py-8">
                🚧 Quiz đang được biên soạn. Sắp ra mắt!
              </p>
            </Card>
          )}
        </section>

        {/* Điều hướng tiếp theo */}
        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {meta.prevLevel ? (
            <Link href={`/yct/${meta.prevLevel}`}>
              <Card interactive className="!p-5">
                <p className="text-xs text-slate-500 font-bold mb-1">← BƯỚC TRƯỚC</p>
                <p className="font-display text-lg font-extrabold">
                  Xem lại YCT {meta.prevLevel}
                </p>
              </Card>
            </Link>
          ) : meta.prevHref ? (
            <Link href={meta.prevHref}>
              <Card interactive className="!p-5">
                <p className="text-xs text-slate-500 font-bold mb-1">← BƯỚC TRƯỚC</p>
                <p className="font-display text-lg font-extrabold">
                  🌱 Phần Làm quen
                </p>
              </Card>
            </Link>
          ) : (
            <div />
          )}

          {meta.nextLevel && (
            <Link href={`/yct/${meta.nextLevel}`}>
              <Card interactive className="!p-5 text-right bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
                <p className="text-xs text-primary-500 font-bold mb-1">BƯỚC TIẾP THEO →</p>
                <p className="font-display text-lg font-extrabold">
                  Tiến tới YCT {meta.nextLevel}
                </p>
              </Card>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
