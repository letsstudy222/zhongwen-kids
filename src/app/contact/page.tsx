'use client';

import { useState } from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Pill } from '@/components/ui/Pill';
import { Mascot } from '@/components/ui/Mascot';
import { siteConfig } from '@/lib/site-config';

const faqs = [
  {
    q: 'Zhongwen Kids miễn phí không?',
    a: 'Hầu hết nội dung đều miễn phí. Một số khoá học nâng cao và tài liệu in sẽ có gói trả phí dành cho phụ huynh.'
  },
  {
    q: 'Bé cần thiết bị gì để học?',
    a: 'Chỉ cần điện thoại, máy tính bảng hoặc máy tính có kết nối Internet và loa/tai nghe.'
  },
  {
    q: 'Nội dung có chính xác với chương trình YCT chính thức không?',
    a: 'Có. Từ vựng và cấu trúc bài học được xây dựng theo khung YCT do Hanban công bố.'
  },
  {
    q: 'Tôi muốn cộng tác giảng dạy/biên soạn nội dung?',
    a: 'Tuyệt vời! Hãy gửi mail giới thiệu về địa chỉ ở dưới, đội ngũ sẽ phản hồi trong 3 ngày làm việc.'
  }
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: chỉ giả lập gửi
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <PageHero
        emoji="✉️"
        title="Liên hệ với chúng tôi"
        subtitle="Có thắc mắc, góp ý hay muốn hợp tác? Hãy nhắn cho đội ngũ Zhongwen Kids – panda sẽ phản hồi trong 24 giờ!"
      />

      <section className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <Card className="lg:col-span-2">
          <h2 className="font-display text-2xl font-extrabold mb-5">
            📨 Gửi tin nhắn cho chúng tôi
          </h2>

          {sent && (
            <div className="mb-4 p-4 rounded-2xl bg-success-100 dark:bg-success-900/30 border border-success-200 text-secondary-700 dark:text-success-200 font-bold flex items-center gap-2">
              <span>✅</span> Cảm ơn bạn! Tin nhắn đã được gửi (demo).
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1.5">
                  Họ và tên
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  className="w-full px-4 py-3 rounded-2xl border border-cream-200 dark:border-slate-700 dark:bg-slate-800 focus:outline-none focus:border-primary-400"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  placeholder="ban@example.com"
                  className="w-full px-4 py-3 rounded-2xl border border-cream-200 dark:border-slate-700 dark:bg-slate-800 focus:outline-none focus:border-primary-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1.5">
                Bạn là ai?
              </label>
              <div className="flex flex-wrap gap-2">
                {['Phụ huynh', 'Giáo viên', 'Học sinh', 'Khác'].map((r) => (
                  <label
                    key={r}
                    className="px-4 py-2 rounded-full border border-cream-200 dark:border-slate-700 cursor-pointer hover:border-primary-300 text-sm font-bold"
                  >
                    <input type="radio" name="role" className="mr-1.5" />
                    {r}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1.5">Chủ đề</label>
              <select
                className="w-full px-4 py-3 rounded-2xl border border-cream-200 dark:border-slate-700 dark:bg-slate-800 focus:outline-none focus:border-primary-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Chọn chủ đề
                </option>
                <option>Hỏi đáp về khoá học</option>
                <option>Hợp tác giảng dạy</option>
                <option>Báo lỗi kỹ thuật</option>
                <option>Khác</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1.5">
                Tin nhắn
              </label>
              <textarea
                required
                rows={5}
                placeholder="Bạn muốn chia sẻ điều gì với chúng tôi?"
                className="w-full px-4 py-3 rounded-2xl border border-cream-200 dark:border-slate-700 dark:bg-slate-800 focus:outline-none focus:border-primary-400 resize-none"
              />
            </div>
            <Button type="submit" size="lg" variant="primary">
              🚀 Gửi tin nhắn
            </Button>
          </form>
        </Card>

        {/* Thông tin liên hệ */}
        <div className="space-y-5">
          <Card className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 text-center">
            <Mascot mood="wave" className="w-24 h-24 mx-auto" />
            <h3 className="font-display text-xl font-extrabold mt-2">
              Panda đang đợi tin từ bạn!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Phản hồi trong vòng 24 giờ làm việc.
            </p>
          </Card>

          <Card>
            <h3 className="font-display text-lg font-extrabold mb-3">
              📌 Thông tin
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-slate-500">{siteConfig.contactEmail}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-bold">Văn phòng</p>
                  <p className="text-slate-500">
                    Hà Nội, Việt Nam (hoạt động online)
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">⏰</span>
                <div>
                  <p className="font-bold">Giờ làm việc</p>
                  <p className="text-slate-500">Thứ 2 – Thứ 7, 9h – 18h</p>
                </div>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="font-display text-lg font-extrabold mb-3">
              🌐 Mạng xã hội
            </h3>
            <div className="flex flex-wrap gap-2">
              <Pill color="primary">📘 Facebook</Pill>
              <Pill color="secondary">▶ YouTube</Pill>
              <Pill color="accent">📸 Instagram</Pill>
              <Pill color="success">🎵 TikTok</Pill>
            </div>
          </Card>
        </div>

        {/* FAQ */}
        <div className="lg:col-span-3 mt-6">
          <h2 className="font-display text-3xl font-extrabold mb-5">
            ❓ Câu hỏi thường gặp
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Card key={i} className="!p-0 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                  >
                    <span className="font-display text-lg font-extrabold">
                      {f.q}
                    </span>
                    <span className="text-2xl text-primary-500 flex-shrink-0">
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-slate-600 dark:text-slate-300">
                      {f.a}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
