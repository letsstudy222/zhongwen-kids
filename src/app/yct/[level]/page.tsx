import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout/PageHero';
import { Flashcard } from '@/components/learning/Flashcard';
import { ConversationCard } from '@/components/learning/ConversationCard';
import { Quiz } from '@/components/learning/Quiz';
import { Pill } from '@/components/ui/Pill';
import { vocabulary } from '@/data/vocabulary';
import { conversations } from '@/data/conversations';
import { sampleQuizzes } from '@/data/quizzes';

interface PageProps {
  params: { level: string };
}

export function generateStaticParams() {
  return [{ level: '1' }, { level: '2' }, { level: '3' }, { level: '4' }];
}

export default function YctLevelPage({ params }: PageProps) {
  const lvl = parseInt(params.level, 10);
  if (![1, 2, 3, 4].includes(lvl)) notFound();

  const words = vocabulary.filter((v) => v.yctLevel === lvl);
  const convs = conversations.filter((c) => c.yctLevel === lvl);
  const quizzes = sampleQuizzes[lvl] ?? [];

  const emojiMap: Record<number, string> = { 1: '🌱', 2: '🎈', 3: '🚀', 4: '🏆' };

  return (
    <>
      <PageHero
        emoji={emojiMap[lvl]}
        title={`YCT ${lvl}`}
        subtitle={`Cấp độ ${lvl} – ${words.length} từ vựng, ${convs.length} hội thoại, ${quizzes.length} câu hỏi luyện tập.`}
      >
        <div className="flex flex-wrap justify-center gap-2">
          <Pill color="primary">📚 Từ vựng</Pill>
          <Pill color="secondary">💬 Hội thoại</Pill>
          <Pill color="accent">📝 Quiz</Pill>
        </div>
      </PageHero>

      {/* Từ vựng */}
      <section id="vocabulary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-3xl font-extrabold">
            📚 Từ vựng ({words.length})
          </h2>
        </div>
        {words.length === 0 ? (
          <p className="text-slate-500">Chưa có từ vựng cho cấp này.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {words.map((w) => (
              <Flashcard key={w.id} word={w} />
            ))}
          </div>
        )}
      </section>

      {/* Hội thoại */}
      <section id="conversations" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="font-display text-3xl font-extrabold mb-6">
          💬 Hội thoại mẫu ({convs.length})
        </h2>
        {convs.length === 0 ? (
          <p className="text-slate-500">Chưa có hội thoại cho cấp này.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {convs.map((c) => (
              <ConversationCard key={c.id} conversation={c} />
            ))}
          </div>
        )}
      </section>

      {/* Quiz */}
      <section id="quiz" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="font-display text-3xl font-extrabold mb-6 text-center">
          📝 Mini Quiz – Kiểm tra hiểu bài
        </h2>
        <Quiz questions={quizzes} />
      </section>
    </>
  );
}
