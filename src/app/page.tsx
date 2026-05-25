import Link from 'next/link';
import { Sparkles, Volume2, BookOpen, GamepadIcon, Trophy, Heart } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Mascot } from '@/components/ui/Mascot';
import { roadmap } from '@/data/roadmap';
import { categoryMeta } from '@/data/vocabulary';
import { songs } from '@/data/songs-stories';
import { VocabCategoryCard } from '@/components/learning/VocabCategoryCard';

export default function HomePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">
        {/* Decorative blobs - giảm độ rực */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-100/60 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-accent-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-secondary-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="animate-fade-in">
              <Pill color="accent" className="mb-4 animate-bounce-slow">
                <Sparkles className="w-3 h-3" /> Học vui · Học chơi · Học giỏi
              </Pill>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-800 dark:text-slate-50">
                Khám phá{' '}
                <span className="bg-gradient-to-r from-primary-500 via-accent-400 to-secondary-500 bg-clip-text text-transparent">
                  tiếng Trung
                </span>{' '}
                cùng Panda 🐼
              </h1>
              <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Nền tảng học tiếng Trung dành cho học sinh{' '}
                <strong className="text-primary-600 dark:text-primary-300">tiểu học Việt Nam</strong>, định hướng kỳ thi{' '}
                <strong className="text-secondary-600 dark:text-secondary-300">YCT</strong>. Pinyin, từ vựng, hội thoại, trò chơi – tất cả
                trong một thế giới đầy màu sắc!
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/foundation" className="btn-primary">
                  🌱 Bắt đầu từ đầu
                </Link>
                <Link href="/yct" className="btn-outline">
                  🎯 Xem lộ trình YCT
                </Link>
              </div>

              {/* Trust stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                <div>
                  <p className="font-display text-3xl font-extrabold text-primary-500">600+</p>
                  <p className="text-xs text-slate-500">Từ vựng</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-secondary-500">4</p>
                  <p className="text-xs text-slate-500">Cấp YCT</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-accent-500">20+</p>
                  <p className="text-xs text-slate-500">Trò chơi</p>
                </div>
              </div>
            </div>

            {/* Mascot illustration */}
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Floating elements */}
                <div className="absolute top-10 left-0 w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center text-3xl animate-float font-chinese">
                  你
                </div>
                <div className="absolute top-20 right-0 w-16 h-16 rounded-2xl bg-accent-50 border border-accent-100 shadow-soft-accent flex items-center justify-center text-3xl animate-float font-chinese" style={{ animationDelay: '0.5s' }}>
                  好
                </div>
                <div className="absolute bottom-20 left-4 w-16 h-16 rounded-2xl bg-secondary-50 border border-secondary-100 shadow-soft-secondary flex items-center justify-center text-3xl animate-float" style={{ animationDelay: '1s' }}>
                  🌸
                </div>
                <div className="absolute bottom-10 right-4 w-16 h-16 rounded-2xl bg-primary-50 border border-primary-100 shadow-soft flex items-center justify-center text-3xl animate-float" style={{ animationDelay: '1.5s' }}>
                  🎈
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary-100 via-cream to-secondary-100 flex items-center justify-center shadow-soft-lg">
                    <Mascot mood="wave" className="w-60 h-60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FEATURES ============== */}
      <section className="py-16 bg-white dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Pill color="primary">Vì sao chọn Zhongwen Kids?</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold mt-3 text-slate-800 dark:text-slate-50">
              4 kỹ năng – 1 nền tảng
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Volume2, color: 'from-primary-300 to-primary-400', title: 'Nghe', desc: 'Phát âm chuẩn, audio rõ ràng theo từng từ.' },
              { icon: BookOpen, color: 'from-secondary-300 to-secondary-400', title: 'Nói', desc: 'Bắt chước, lặp lại, ghi âm so sánh.' },
              { icon: Sparkles, color: 'from-accent-300 to-accent-400', title: 'Pinyin', desc: '4 thanh điệu trực quan bằng màu sắc.' },
              { icon: GamepadIcon, color: 'from-lavender-300 to-lavender-400', title: 'Chữ Hán', desc: 'Tập viết trên khung ô vuông kẻ mễ.' }
            ].map((f, i) => (
              <Card key={i} interactive className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mx-auto mb-3 shadow-soft`}>
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-extrabold">{f.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ROADMAP PREVIEW ============== */}
      <section className="py-16 relative bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <Pill color="secondary">🗺️ Lộ trình học</Pill>
              <h2 className="font-display text-4xl font-extrabold mt-3 text-slate-800 dark:text-slate-50">
                5 chặng đường khám phá
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-2">
                Từ con số 0 đến tự tin giao tiếp YCT 4.
              </p>
            </div>
            <Link href="/roadmap" className="btn-outline">
              Xem toàn bộ lộ trình →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {roadmap.map((stage) => (
              <Card key={stage.id} interactive className="!p-0 overflow-hidden">
                <div className={`bg-gradient-to-br ${stage.color} p-4 text-white`}>
                  <p className="text-xs font-bold opacity-90">Chặng {stage.order}</p>
                  <div className="text-3xl mt-1">{stage.emoji}</div>
                  <h3 className="font-display text-lg font-extrabold mt-1 leading-tight">
                    {stage.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-500">{stage.subtitle}</p>
                  <p className="text-xs font-bold mt-2">⏱ {stage.duration}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============== VOCAB CATEGORIES ============== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Pill color="accent">📚 Chủ đề từ vựng</Pill>
            <h2 className="font-display text-4xl font-extrabold mt-3 text-slate-800 dark:text-slate-50">
              Học theo chủ đề yêu thích
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.keys(categoryMeta).map((cat) => (
              <VocabCategoryCard key={cat} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ============== SONGS PREVIEW ============== */}
      <section className="py-16 bg-blob-cool">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <Pill color="primary">🎵 Bài hát thiếu nhi</Pill>
              <h2 className="font-display text-4xl font-extrabold mt-3 text-slate-800 dark:text-slate-50">
                Hát theo Panda
              </h2>
            </div>
            <Link href="/songs-stories" className="btn-outline">
              Xem thêm →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {songs.slice(0, 4).map((s) => (
              <Card key={s.id} interactive>
                <div className={`bg-gradient-to-br ${s.color} w-full aspect-video rounded-2xl flex items-center justify-center text-6xl mb-3 shadow-soft`}>
                  {s.emoji}
                </div>
                <h3 className="font-display text-lg font-extrabold font-chinese">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.titleVi}</p>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <Pill color="slate">⏱ {s.duration}</Pill>
                  <Pill color="success">{s.difficulty}</Pill>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-primary-400 via-primary-500 to-accent-400 p-10 sm:p-14 text-center text-white shadow-soft-lg">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />

            <div className="relative">
              <Trophy className="w-12 h-12 mx-auto mb-3" />
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold">
                Sẵn sàng nói tiếng Trung?
              </h2>
              <p className="mt-3 text-lg opacity-95 max-w-xl mx-auto leading-relaxed">
                Bắt đầu chặng đường học YCT cùng Panda ngay hôm nay – hoàn toàn miễn phí.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/dashboard" className="bg-white text-primary-600 font-extrabold px-7 py-3 rounded-2xl shadow-soft hover:-translate-y-0.5 hover:shadow-soft-lg transition-all">
                  Vào học miễn phí 🚀
                </Link>
                <Link href="/parents" className="bg-white/20 backdrop-blur text-white font-extrabold px-7 py-3 rounded-2xl border-2 border-white/40 hover:bg-white/30 transition">
                  <Heart className="w-4 h-4 inline mr-1" /> Dành cho phụ huynh
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
