import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Button } from '@/components/ui/Button';

const resources = [
  {
    emoji: '📄',
    title: 'Giáo án YCT 1 – Chủ đề Gia đình',
    desc: '12 trang | 4 tiết học | Bao gồm hoạt động và bài tập',
    type: 'PDF',
    size: '2.4 MB',
    color: 'from-primary-300 to-blush-300'
  },
  {
    emoji: '🖨️',
    title: 'Worksheet luyện viết Pinyin',
    desc: 'In ra cho học sinh luyện viết tại lớp',
    type: 'PDF',
    size: '850 KB',
    color: 'from-secondary-200 to-lavender-300'
  },
  {
    emoji: '🎴',
    title: 'Bộ thẻ Flashcard 100 từ YCT 1',
    desc: 'In khổ A4, cắt thành thẻ – có hình minh hoạ',
    type: 'PDF',
    size: '5.1 MB',
    color: 'from-accent-300 to-accent-400'
  },
  {
    emoji: '🎬',
    title: 'Slide bài giảng PowerPoint',
    desc: '40 slide kèm hiệu ứng animation cho lớp học',
    type: 'PPTX',
    size: '12 MB',
    color: 'from-lavender-300 to-lavender-400'
  },
  {
    emoji: '📊',
    title: 'Bảng đánh giá học sinh',
    desc: 'Excel template theo dõi tiến độ cả lớp',
    type: 'XLSX',
    size: '180 KB',
    color: 'from-secondary-300 to-secondary-400'
  },
  {
    emoji: '🎯',
    title: 'Đề mẫu YCT 1',
    desc: '5 đề thi thử có đáp án chi tiết',
    type: 'PDF',
    size: '3.2 MB',
    color: 'from-accent-200 to-accent-300'
  }
];

const activities = [
  {
    name: 'Đoán chữ qua hành động',
    time: '10 phút',
    desc: 'Một bé diễn tả, các bé khác đoán chữ Hán.',
    emoji: '🤹'
  },
  {
    name: 'Vòng tròn từ vựng',
    time: '15 phút',
    desc: 'Cả lớp ngồi vòng tròn, mỗi bé nói 1 từ theo chủ đề.',
    emoji: '🔁'
  },
  {
    name: 'Hát theo nhóm',
    time: '20 phút',
    desc: 'Chia nhóm, mỗi nhóm tập 1 đoạn bài hát ngắn.',
    emoji: '🎤'
  },
  {
    name: 'Vẽ và đặt tên',
    time: '15 phút',
    desc: 'Bé vẽ con vật yêu thích rồi ghi chữ Hán + pinyin.',
    emoji: '🎨'
  }
];

export default function TeachersPage() {
  return (
    <>
      <PageHero
        emoji="👩‍🏫"
        title="Tài nguyên cho giáo viên"
        subtitle="Giáo án, worksheet, slide và mọi công cụ giúp thầy cô dạy tiếng Trung cho bé tiểu học hiệu quả hơn."
      />

      <section className="container mx-auto px-4 py-8">
        {/* Tài liệu tải về */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-display text-3xl font-extrabold">
              📥 Tài liệu tải xuống
            </h2>
            <Pill color="success">Miễn phí</Pill>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r) => (
              <Card key={r.title} className="!p-0 overflow-hidden">
                <div
                  className={`bg-gradient-to-br ${r.color} p-5 text-white flex items-center justify-between`}
                >
                  <div className="text-5xl">{r.emoji}</div>
                  <Pill color="slate" className="!bg-white/30 !text-white backdrop-blur">
                    {r.type}
                  </Pill>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-extrabold mb-1">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    {r.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-bold">
                      📦 {r.size}
                    </span>
                    <Button size="sm" variant="primary">
                      ⬇️ Tải về
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hoạt động trên lớp */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-extrabold mb-5">
            🎲 Hoạt động trên lớp
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {activities.map((a) => (
              <Card key={a.name} className="!p-5">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{a.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-lg font-extrabold">
                        {a.name}
                      </h3>
                      <Pill color="accent">⏱ {a.time}</Pill>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {a.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Cộng đồng */}
        <Card className="bg-gradient-to-r from-secondary-100 to-primary-100 dark:from-secondary-900/20 dark:to-primary-900/20 border-secondary-200">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="text-6xl">👩‍🏫</div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-extrabold mb-1">
                Cộng đồng giáo viên Zhongwen Kids
              </h3>
              <p className="text-slate-700 dark:text-slate-200">
                Tham gia nhóm 500+ thầy cô đang dạy tiếng Trung tiểu học để trao
                đổi bài giảng và kinh nghiệm.
              </p>
            </div>
            <Button variant="primary">💬 Tham gia ngay</Button>
          </div>
        </Card>
      </section>
    </>
  );
}
