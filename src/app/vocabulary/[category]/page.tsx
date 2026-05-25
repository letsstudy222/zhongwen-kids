import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout/PageHero';
import { Flashcard } from '@/components/learning/Flashcard';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Button } from '@/components/ui/Button';
import {
  categoryMeta,
  vocabulary,
  getVocabByCategory
} from '@/data/vocabulary';

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }));
}

export default function VocabCategoryPage({
  params
}: {
  params: { category: string };
}) {
  const meta = categoryMeta[params.category];
  if (!meta) notFound();

  const words = getVocabByCategory(params.category);

  // Phân nhóm theo cấp YCT
  const groupedByLevel = [1, 2, 3, 4].map((lvl) => ({
    level: lvl,
    items: words.filter((w) => w.yctLevel === lvl)
  }));

  return (
    <>
      <PageHero
        emoji={meta.emoji}
        title={meta.labelVi}
        subtitle={`Khám phá ${words.length} từ vựng chủ đề ${meta.labelVi.toLowerCase()} – mỗi thẻ đều có phát âm và ví dụ minh họa.`}
      >
        <div className="flex items-center justify-center gap-2 mt-4">
          <Link href="/vocabulary">
            <Button variant="outline" size="sm">
              ← Tất cả chủ đề
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="container mx-auto px-4 py-8">
        {/* Tóm tắt cấp độ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {groupedByLevel.map((g) => (
            <Card key={g.level} className="!p-4 text-center">
              <p className="text-3xl mb-1">🎯</p>
              <p className="font-display font-extrabold text-lg">
                YCT {g.level}
              </p>
              <p className="text-sm text-slate-500">{g.items.length} từ</p>
            </Card>
          ))}
        </div>

        {/* Flashcards theo từng cấp */}
        {groupedByLevel.map((g) =>
          g.items.length === 0 ? null : (
            <div key={g.level} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-2xl font-extrabold">
                  Cấp độ YCT {g.level}
                </h2>
                <Pill color="accent">{g.items.length} thẻ</Pill>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {g.items.map((w) => (
                  <Flashcard key={w.id} word={w} />
                ))}
              </div>
            </div>
          )
        )}

        {/* Mẹo học */}
        <Card className="bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-900/20 dark:to-primary-900/20 border-accent-200 dark:border-accent-800">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="font-display text-xl font-extrabold mb-1">
                Mẹo ghi nhớ chủ đề {meta.labelVi}
              </h3>
              <p className="text-slate-700 dark:text-slate-200">
                Hãy nhìn vào emoji minh hoạ và đọc to phát âm. Sau đó nhấn vào
                thẻ để xem nghĩa. Lặp lại mỗi từ ít nhất 3 lần để nhớ lâu hơn!
              </p>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
