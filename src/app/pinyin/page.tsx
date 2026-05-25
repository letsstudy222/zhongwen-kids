import { PageHero } from '@/components/layout/PageHero';
import { PinyinTile } from '@/components/learning/PinyinTile';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { WritingPracticeSection } from '@/components/learning/WritingPracticeSection';
import { initials, finals, tones } from '@/data/pinyin';

export const metadata = {
  title: 'Học Pinyin – Phiên âm tiếng Trung'
};

export default function PinyinPage() {
  return (
    <>
      <PageHero
        emoji="🔤"
        title="Học Pinyin"
        subtitle="Pinyin là 'chìa khóa vàng' để đọc tiếng Trung. Học cùng Panda thật vui!"
      />

      {/* Thanh điệu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Pill color="primary">⭐ Quan trọng nhất</Pill>
            <h2 className="font-display text-3xl font-extrabold mt-2">4 Thanh điệu</h2>
            <p className="text-slate-600 dark:text-slate-300">
              Cùng một âm &ldquo;ma&rdquo; – 4 thanh khác nhau, 4 nghĩa khác nhau!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tones.map((t) => (
            <PinyinTile key={t.id} sound={t} />
          ))}
        </div>

        {/* Hướng dẫn thanh điệu */}
        <Card className="mt-6 bg-gradient-to-br from-secondary-50 to-cream dark:from-slate-800 dark:to-slate-700">
          <h3 className="font-display text-xl mb-3">💡 Mẹo nhớ thanh điệu</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <div className="flex gap-2">
              <span className="font-extrabold text-primary-500 text-2xl">1.</span>
              <p>Cao và bằng – như khi <em>hát</em> nốt cao đều.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-extrabold text-accent-500 text-2xl">2.</span>
              <p>Đi lên – như <em>hỏi</em> &ldquo;Cái gì?&rdquo;</p>
            </div>
            <div className="flex gap-2">
              <span className="font-extrabold text-success-500 text-2xl">3.</span>
              <p>Xuống rồi lên – như khi <em>ngạc nhiên</em>.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-extrabold text-secondary-500 text-2xl">4.</span>
              <p>Đi xuống dứt khoát – như khi <em>ra lệnh</em>.</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Phụ âm đầu */}
      <section className="bg-white dark:bg-slate-800/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Pill color="secondary">声母</Pill>
          <h2 className="font-display text-3xl font-extrabold mt-2 mb-6">
            Phụ âm đầu (Initials)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {initials.map((s) => (
              <PinyinTile key={s.id} sound={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Nguyên âm */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Pill color="accent">韵母</Pill>
          <h2 className="font-display text-3xl font-extrabold mt-2 mb-6">
            Nguyên âm (Finals)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {finals.map((s) => (
              <PinyinTile key={s.id} sound={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Tập viết */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-slate-800 dark:to-slate-700 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-extrabold mb-2">
              ✍️ Luyện viết chữ Hán
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Bấm <strong>▶ Xem viết</strong> để xem thứ tự nét · Bấm <strong>✏️ Tự vẽ</strong> để luyện tập theo
            </p>
          </div>

          <WritingPracticeSection />
        </div>
      </section>
    </>
  );
}
