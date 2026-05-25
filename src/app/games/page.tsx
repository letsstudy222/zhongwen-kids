import { PageHero } from '@/components/layout/PageHero';
import { MatchingGame } from '@/components/games/MatchingGame';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';

const upcomingGames = [
  {
    emoji: '🎴',
    title: 'Lật thẻ trí nhớ',
    desc: 'Tìm cặp chữ Hán giống nhau bằng cách lật từng thẻ.',
    color: 'from-rose-300 to-pink-400',
    difficulty: 'Dễ'
  },
  {
    emoji: '👂',
    title: 'Nghe và chọn',
    desc: 'Lắng nghe phát âm rồi chọn chữ Hán đúng.',
    color: 'from-sky-300 to-blue-400',
    difficulty: 'Trung bình'
  },
  {
    emoji: '🎯',
    title: 'Đoán thanh điệu',
    desc: 'Phân biệt 4 thanh điệu pinyin qua âm thanh.',
    color: 'from-purple-300 to-fuchsia-400',
    difficulty: 'Trung bình'
  },
  {
    emoji: '✏️',
    title: 'Viết chữ Hán',
    desc: 'Tập viết chữ theo thứ tự nét cơ bản.',
    color: 'from-amber-300 to-orange-400',
    difficulty: 'Khó'
  },
  {
    emoji: '🐼',
    title: 'Phiêu lưu cùng Panda',
    desc: 'Học từ vựng theo bản đồ phiêu lưu hấp dẫn.',
    color: 'from-emerald-300 to-teal-400',
    difficulty: 'Tổng hợp'
  },
  {
    emoji: '🎲',
    title: 'Xúc xắc từ vựng',
    desc: 'Lăn xúc xắc, gặp từ nào học từ đó!',
    color: 'from-yellow-300 to-amber-400',
    difficulty: 'Dễ'
  }
];

export default function GamesPage() {
  return (
    <>
      <PageHero
        emoji="🎮"
        title="Khu trò chơi"
        subtitle="Học mà chơi, chơi mà học! Mỗi trò chơi giúp bé luyện một kỹ năng tiếng Trung khác nhau."
      />

      <section className="container mx-auto px-4 py-8">
        {/* Trò chơi có thể chơi ngay */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-display text-3xl font-extrabold">Chơi ngay</h2>
            <Pill color="success">▶ Đã sẵn sàng</Pill>
          </div>
          <MatchingGame />
        </div>

        {/* Trò chơi sắp ra mắt */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-display text-3xl font-extrabold">
              Sắp ra mắt
            </h2>
            <Pill color="accent">🚧 Đang phát triển</Pill>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingGames.map((g) => (
              <Card
                key={g.title}
                interactive
                className="!p-0 overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-br ${g.color} p-6 text-white`}
                >
                  <div className="text-5xl mb-2">{g.emoji}</div>
                  <h3 className="font-display text-xl font-extrabold">
                    {g.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    {g.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <Pill color="slate">⚡ {g.difficulty}</Pill>
                    <span className="text-xs font-bold text-slate-400">
                      Coming soon
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mẹo chơi */}
        <Card className="mt-12 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 border-primary-200">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🌟</div>
            <div>
              <h3 className="font-display text-xl font-extrabold mb-1">
                Mỗi ngày một trò chơi
              </h3>
              <p className="text-slate-700 dark:text-slate-200">
                Hãy thử chơi ít nhất 1 trò mỗi ngày để giữ chuỗi 🔥 và mở khóa
                các huy hiệu đặc biệt nhé!
              </p>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
