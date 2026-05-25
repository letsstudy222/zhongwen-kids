import { PageHero } from '@/components/layout/PageHero';
import { VocabCategoryCard } from '@/components/learning/VocabCategoryCard';
import { categoryMeta } from '@/data/vocabulary';

export const metadata = { title: 'Từ vựng theo chủ đề' };

export default function VocabularyIndex() {
  return (
    <>
      <PageHero
        emoji="📚"
        title="Từ vựng theo chủ đề"
        subtitle="Học theo nhóm sẽ ghi nhớ nhanh hơn. Chọn chủ đề bé yêu thích!"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.keys(categoryMeta).map((c) => (
            <VocabCategoryCard key={c} category={c} />
          ))}
        </div>
      </section>
    </>
  );
}
