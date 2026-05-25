import { PageHero } from '@/components/layout/PageHero';
import { roadmap } from '@/data/roadmap';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Lộ trình học tiếng Trung'
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        emoji="🗺️"
        title="Lộ trình học tập"
        subtitle="5 chặng đường khám phá – từ bé chưa biết gì đến tự tin giao tiếp YCT 4."
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative">
          {/* Đường vẽ nối các chặng */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-accent-200 to-secondary-200 md:-translate-x-1/2 rounded-full" />

          <div className="space-y-10">
            {roadmap.map((stage, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={stage.id}
                  className={`relative grid md:grid-cols-2 gap-5 items-center ${
                    isLeft ? '' : 'md:[direction:rtl]'
                  }`}
                >
                  <div className={isLeft ? 'md:pr-12' : 'md:pl-12 md:[direction:ltr]'}>
                    <Card>
                      <div className="flex items-center justify-between mb-2">
                        <Pill color="primary">Chặng {stage.order}</Pill>
                        {stage.yctLevel && (
                          <Pill color="accent">YCT {stage.yctLevel}</Pill>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-3xl shadow-cute`}>
                          {stage.emoji}
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-extrabold">
                            {stage.title}
                          </h3>
                          <p className="text-slate-500 text-sm">{stage.subtitle}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2 flex-wrap">
                        <Pill color="slate">⏱ {stage.duration}</Pill>
                        <Pill color="slate">🎂 {stage.ageRange}</Pill>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {stage.goals.map((g, gi) => (
                          <li key={gi} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>

                      {stage.yctLevel && (
                        <Link
                          href={`/yct/${stage.yctLevel}`}
                          className="mt-4 inline-flex items-center gap-1 text-primary-600 font-bold text-sm hover:underline"
                        >
                          Vào học YCT {stage.yctLevel} <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </Card>
                  </div>

                  {/* Marker */}
                  <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center text-2xl shadow-cute border-4 border-cream dark:border-slate-900`}>
                      {stage.order}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-slate-800 dark:to-slate-700">
            <h3 className="font-display text-2xl font-extrabold">
              🎓 Hoàn thành lộ trình
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              Sau khi xong YCT 4, bé đã sẵn sàng chuyển tiếp sang HSK 1-2 ở trung học cơ sở.
            </p>
            <Link href="/dashboard" className="btn-primary mt-4 inline-flex">
              🚀 Bắt đầu chặng 1
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}
