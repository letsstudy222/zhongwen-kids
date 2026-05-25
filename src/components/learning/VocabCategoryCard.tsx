import Link from 'next/link';
import { categoryMeta, vocabulary } from '@/data/vocabulary';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';

interface VocabCategoryCardProps {
  category: string;
}

export function VocabCategoryCard({ category }: VocabCategoryCardProps) {
  const meta = categoryMeta[category];
  const count = vocabulary.filter((v) => v.category === category).length;

  if (!meta) return null;

  return (
    <Link href={`/vocabulary/${category}`}>
      <Card interactive className="!p-0 overflow-hidden h-full">
        <div className={`bg-gradient-to-br ${meta.gradient} p-6 text-white`}>
          <div className="text-5xl mb-2">{meta.emoji}</div>
          <h3 className="font-display text-2xl font-extrabold">{meta.labelVi}</h3>
          <p className="text-white/80 text-sm mt-1">{count} từ vựng</p>
        </div>
        <div className="p-4 flex items-center justify-between">
          <Pill color="slate">📖 Vào học</Pill>
          <span className="text-primary-500 font-extrabold">→</span>
        </div>
      </Card>
    </Link>
  );
}
