import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Mascot } from '@/components/ui/Mascot';
import { Heart, Target, Sparkles, Users } from 'lucide-react';

export const metadata = {
  title: 'Giới thiệu'
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Yêu thương trẻ em',
      desc: 'Mọi nội dung được thiết kế phù hợp tâm lý lứa tuổi tiểu học.',
      color: 'from-rose-300 to-pink-400'
    },
    {
      icon: Target,
      title: 'Định hướng YCT',
      desc: 'Lộ trình bám sát chương trình YCT 1–4 thay vì HSK nặng nề.',
      color: 'from-sky-300 to-blue-400'
    },
    {
      icon: Sparkles,
      title: 'Học bằng cảm xúc',
      desc: 'Bài hát, trò chơi, hoạt hình giúp ghi nhớ lâu hơn.',
      color: 'from-amber-300 to-orange-400'
    },
    {
      icon: Users,
      title: 'Cùng cha mẹ',
      desc: 'Phụ huynh có dashboard riêng để đồng hành cùng con.',
      color: 'from-emerald-300 to-teal-400'
    }
  ];

  return (
    <>
      <PageHero
        emoji="✨"
        title="Câu chuyện Zhongwen Kids"
        subtitle="Chúng mình tin rằng học tiếng Trung có thể vui như chơi đồ chơi."
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Card className="!p-8 sm:!p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                <Mascot mood="happy" className="w-40 h-40" />
              </div>
            </div>
            <div className="md:col-span-2">
              <Pill color="primary">Sứ mệnh</Pill>
              <h2 className="font-display text-3xl font-extrabold mt-3">
                Để mỗi bạn nhỏ Việt Nam được tiếp cận tiếng Trung một cách tự nhiên
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                Zhongwen Kids ra đời từ một câu hỏi: <em>&ldquo;Tại sao học tiếng Trung phải khô khan?&rdquo;</em> Chúng mình tập hợp giáo viên bản ngữ, chuyên gia giáo dục Việt Nam và họa sĩ minh họa để xây dựng một thế giới nơi mỗi chữ Hán là một người bạn dễ thương, mỗi bài học là một cuộc phiêu lưu.
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                Không có áp lực thi cử – chỉ có niềm vui khám phá. Khi bạn nhỏ vui, bạn ấy học giỏi.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="py-16 bg-white dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Pill color="accent">Giá trị cốt lõi</Pill>
            <h2 className="font-display text-4xl font-extrabold mt-3">
              4 giá trị làm nền tảng
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Card key={i} interactive className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-3 shadow-cute`}>
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  {v.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold text-center mb-8">
          Đội ngũ phát triển
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { name: 'Cô Lan', role: 'Giáo viên chính', emoji: '👩‍🏫' },
            { name: 'Thầy Ming', role: 'Cố vấn bản ngữ', emoji: '👨‍🏫' },
            { name: 'Họa sĩ Mai', role: 'Thiết kế minh họa', emoji: '🎨' }
          ].map((p, i) => (
            <Card key={i} className="text-center">
              <div className="text-6xl mb-2">{p.emoji}</div>
              <p className="font-display text-xl font-extrabold">{p.name}</p>
              <p className="text-sm text-slate-500">{p.role}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
