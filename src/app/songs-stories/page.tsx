import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Button } from '@/components/ui/Button';
import { AudioButton } from '@/components/ui/AudioButton';
import { songs, stories } from '@/data/songs-stories';

export default function SongsStoriesPage() {
  return (
    <>
      <PageHero
        emoji="🎵"
        title="Bài hát & Truyện cổ"
        subtitle="Học tiếng Trung qua giai điệu vui nhộn và những câu chuyện cổ tích kinh điển."
      />

      <section className="container mx-auto px-4 py-8">
        {/* Songs */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-display text-3xl font-extrabold">
              🎶 Bài hát thiếu nhi
            </h2>
            <Pill color="primary">{songs.length} bài</Pill>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {songs.map((s) => (
              <Card key={s.id} className="!p-0 overflow-hidden">
                <div
                  className={`bg-gradient-to-br ${s.color} p-6 text-white relative`}
                >
                  <div className="absolute top-3 right-3">
                    <Pill color="slate" className="!bg-white/30 !text-white backdrop-blur">
                      ⏱ {s.duration}
                    </Pill>
                  </div>
                  <div className="text-5xl mb-2">{s.emoji}</div>
                  <p className="font-chinese text-3xl font-bold">{s.title}</p>
                  <p className="text-white/90 text-sm italic">{s.titleVi}</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    {s.description}
                  </p>
                  {s.lyrics && (
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 mb-4 space-y-1">
                      {s.lyrics.map((line, i) => (
                        <p
                          key={i}
                          className={
                            i === 0
                              ? 'font-chinese text-lg font-bold'
                              : i === 1
                                ? 'text-sm text-secondary-600 italic'
                                : 'text-sm text-slate-500'
                          }
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <Pill color="accent">⚡ {s.difficulty}</Pill>
                    <div className="flex items-center gap-2">
                      <AudioButton text={s.title} />
                      <Button size="sm" variant="primary">
                        ▶ Nghe
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stories */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-display text-3xl font-extrabold">
              📖 Truyện cổ tích
            </h2>
            <Pill color="secondary">{stories.length} truyện</Pill>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stories.map((st) => (
              <Card
                key={st.id}
                interactive
                className="!p-0 overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-br ${st.color} p-6 text-white h-36 flex flex-col justify-between`}
                >
                  <div className="text-5xl">{st.emoji}</div>
                  <div>
                    <p className="font-chinese text-xl font-bold leading-tight">
                      {st.title}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-display font-bold text-base mb-1">
                    {st.titleVi}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                    {st.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <Pill color="primary">YCT {st.yctLevel}</Pill>
                    <span className="text-xs text-slate-500">
                      ⏱ {st.duration}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
