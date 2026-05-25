import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Button } from '@/components/ui/Button';
import { AudioButton } from '@/components/ui/AudioButton';
import { Mascot } from '@/components/ui/Mascot';
import {
  basicStrokes,
  strokeRules,
  firstCharacters,
  foundationSteps
} from '@/data/foundation';

export default function FoundationPage() {
  return (
    <>
      <PageHero
        emoji="🌱"
        title="Làm quen với tiếng Trung"
        subtitle="Đây là điểm xuất phát! Cùng Panda khám phá những điều thú vị nhất về tiếng Trung trước khi bước vào YCT 1 nhé 🐼"
      >
        <div className="flex items-center justify-center gap-3 mt-4">
          <Pill color="success">✨ Dành cho bé mới bắt đầu</Pill>
          <Pill color="accent">⏱ 2 giờ tổng cộng</Pill>
        </div>
      </PageHero>

      <section className="container mx-auto px-4 py-8 max-w-5xl">
        {/* GIỚI THIỆU TỔNG QUAN */}
        <Card className="mb-12 bg-gradient-to-br from-secondary-50 via-cream-50 to-primary-50 dark:from-secondary-900/20 dark:to-primary-900/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Mascot mood="happy" className="w-32 h-32 flex-shrink-0" />
            <div>
              <h2 className="font-display text-2xl font-extrabold mb-2">
                Chào bé! 👋
              </h2>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Trước khi học từ vựng và hội thoại, bé cần biết một vài điều cơ bản
                về tiếng Trung. Đừng lo - Panda sẽ dẫn dắt bé qua từng bước nhỏ một
                cách thật vui!
              </p>
              <p className="mt-2 text-slate-700 dark:text-slate-200 leading-relaxed">
                Sau khi học xong 6 bước dưới đây, bé sẽ <strong className="text-primary-600 dark:text-primary-300">sẵn sàng vào YCT 1</strong> và học từ vựng đầu tiên!
              </p>
            </div>
          </div>
        </Card>

        {/* 6 BƯỚC LÀM QUEN */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-extrabold mb-2 text-center">
            📋 Lộ trình 6 bước
          </h2>
          <p className="text-center text-slate-500 mb-8">
            Học theo thứ tự để hiệu quả nhất nhé!
          </p>
          <div className="space-y-4">
            {foundationSteps.map((step, idx) => {
              const Tag = step.href ? Link : 'div';
              return (
                <Tag
                  key={step.id}
                  href={step.href ?? '#'}
                  className={`block ${step.href ? 'cursor-pointer' : ''}`}
                >
                  <Card
                    interactive={!!step.href}
                    className="!p-0 overflow-hidden"
                  >
                    <div className="flex items-stretch">
                      {/* Số thứ tự */}
                      <div className="flex items-center justify-center bg-gradient-to-br from-primary-300 to-accent-300 text-white w-20 sm:w-24 flex-shrink-0">
                        <div className="text-center">
                          <p className="text-xs font-bold opacity-80">Bước</p>
                          <p className="font-display text-4xl font-extrabold">
                            {step.order}
                          </p>
                        </div>
                      </div>

                      {/* Nội dung */}
                      <div className="flex-1 p-5 flex items-center gap-4">
                        <div className="text-5xl">{step.emoji}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="font-display text-xl font-extrabold">
                              {step.title}
                            </h3>
                            {step.highlight && (
                              <Pill color="success">{step.highlight}</Pill>
                            )}
                          </div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-2">
                            {step.subtitle}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="mt-2 flex items-center gap-3 text-xs">
                            <Pill color="accent">⏱ {step.duration}</Pill>
                            <a href={`#${step.id}`} className="text-primary-600 dark:text-primary-300 font-bold hover:underline">
                              Xem chi tiết →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Tag>
              );
            })}
          </div>
        </div>

        {/* BƯỚC 1: TIẾNG TRUNG LÀ GÌ */}
        <section id="intro" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-300 to-accent-300 text-white flex items-center justify-center font-display font-extrabold text-xl shadow-soft">
              1
            </div>
            <h2 className="font-display text-3xl font-extrabold">
              Tiếng Trung là gì? 🐼
            </h2>
          </div>

          <Card className="mb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display text-lg font-extrabold mb-2 text-primary-600 dark:text-primary-300">
                  🌍 Một ngôn ngữ siêu thú vị
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li className="flex gap-2">
                    <span>✨</span>
                    <span>Hơn <strong>1 tỷ người</strong> trên thế giới nói tiếng Trung</span>
                  </li>
                  <li className="flex gap-2">
                    <span>📜</span>
                    <span>Có lịch sử <strong>hơn 3.000 năm</strong> - rất cổ kính!</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🎨</span>
                    <span>Chữ viết giống như <strong>bức tranh nhỏ</strong> - mỗi chữ kể một câu chuyện</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🎵</span>
                    <span>Có <strong>4 thanh điệu</strong> - nghe như đang hát vậy!</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-extrabold mb-2 text-secondary-600 dark:text-secondary-300">
                  🎯 Học tiếng Trung để làm gì?
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li className="flex gap-2">
                    <span>🎬</span>
                    <span>Xem phim hoạt hình, nghe nhạc Trung Quốc</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🤝</span>
                    <span>Kết bạn với các bạn nhỏ Trung Quốc, Đài Loan</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🧠</span>
                    <span>Bộ não thông minh hơn vì học 2 ngôn ngữ</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🌏</span>
                    <span>Du lịch và khám phá thế giới</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20">
            <div className="flex items-start gap-3">
              <div className="text-4xl">💡</div>
              <div>
                <h4 className="font-display font-extrabold mb-1">Bí mật nhỏ</h4>
                <p className="text-sm text-slate-700 dark:text-slate-200">
                  Tiếng Trung không có chữ cái như tiếng Anh hay tiếng Việt. Thay vào đó, mỗi <strong>chữ Hán</strong> đại diện cho một âm và một ý nghĩa. Ví dụ chữ <span className="font-chinese text-xl text-primary-600">日</span> có nghĩa là &ldquo;mặt trời&rdquo; và phát âm là <em>rì</em>!
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* BƯỚC 2: 4 THANH ĐIỆU */}
        <section id="tones" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-300 to-accent-300 text-white flex items-center justify-center font-display font-extrabold text-xl shadow-soft">
              2
            </div>
            <h2 className="font-display text-3xl font-extrabold">
              4 thanh điệu 🎵
            </h2>
          </div>

          <Card className="mb-4">
            <p className="text-slate-700 dark:text-slate-200 mb-4 leading-relaxed">
              Hãy thử nói &ldquo;ma&rdquo; với 4 cách lên xuống giọng khác nhau - bé sẽ thấy có 4 nghĩa hoàn toàn khác nhau đấy!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: 1, mark: 'mā', hanzi: '妈', meaning: 'mẹ', textClass: 'text-red-400', desc: 'Giọng đều, cao, kéo dài', visual: '➖' },
                { num: 2, mark: 'má', hanzi: '麻', meaning: 'cây gai', textClass: 'text-amber-500', desc: 'Đi lên - như đang hỏi "Hả?"', visual: '↗️' },
                { num: 3, mark: 'mǎ', hanzi: '马', meaning: 'ngựa', textClass: 'text-teal-500', desc: 'Xuống rồi lên - giọng bẻ cong', visual: '✓' },
                { num: 4, mark: 'mà', hanzi: '骂', meaning: 'mắng', textClass: 'text-indigo-400', desc: 'Đi xuống - mạnh, dứt khoát', visual: '↘️' }
              ].map((tone) => (
                <div key={tone.num} className="flex items-center gap-3 p-4 rounded-2xl bg-cream-50 dark:bg-slate-700/30 border border-cream-100 dark:border-slate-700">
                  <div className={`text-4xl ${tone.textClass}`}>{tone.visual}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-lg ${tone.textClass}`}>Thanh {tone.num}</span>
                      <span className={`font-mono text-xl ${tone.textClass}`}>{tone.mark}</span>
                      <span className="font-chinese text-xl">{tone.hanzi}</span>
                    </div>
                    <p className="text-xs text-slate-500">{tone.desc}</p>
                    <p className="text-sm font-bold">= {tone.meaning}</p>
                  </div>
                  <AudioButton text={tone.mark} showSlow />
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-primary-50 dark:bg-primary-900/20">
              <p className="text-sm text-slate-700 dark:text-slate-200">
                💡 <strong>Mẹo:</strong> Nhấn nút loa 🔊 để nghe phát âm. Nhấn nút rùa 🐢 để nghe chậm hơn nhé!
              </p>
            </div>
          </Card>

          <div className="text-center">
            <Link href="/pinyin">
              <Button variant="primary" size="lg">
                Học chi tiết Pinyin & 4 thanh điệu →
              </Button>
            </Link>
          </div>
        </section>

        {/* BƯỚC 4: 8 NÉT CƠ BẢN */}
        <section id="strokes" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-300 to-accent-300 text-white flex items-center justify-center font-display font-extrabold text-xl shadow-soft">
              4
            </div>
            <h2 className="font-display text-3xl font-extrabold">
              8 nét cơ bản ✏️
            </h2>
          </div>

          <Card className="mb-4">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Mọi chữ Hán đều được tạo từ 8 nét này. Học thuộc chúng để viết chữ Hán đẹp nào!
            </p>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {basicStrokes.map((stroke, idx) => (
              <Card key={stroke.id} className="!p-5">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900/30 dark:to-secondary-800/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-chinese text-4xl text-secondary-700 dark:text-secondary-200">
                      {stroke.symbol}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-display text-lg font-extrabold">
                        {idx + 1}. {stroke.name}
                      </h3>
                      <span className="text-xs text-slate-500 font-mono">
                        {stroke.nameZh}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                      {stroke.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">Ví dụ:</span>
                      {stroke.examples.map((ex) => (
                        <span key={ex} className="font-chinese text-lg text-primary-600 dark:text-primary-300">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* BƯỚC 5: 7 QUY TẮC VIẾT */}
        <section id="rules" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-300 to-accent-300 text-white flex items-center justify-center font-display font-extrabold text-xl shadow-soft">
              5
            </div>
            <h2 className="font-display text-3xl font-extrabold">
              7 quy tắc viết chữ Hán 📐
            </h2>
          </div>

          <Card className="mb-4">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Nhớ những quy tắc này, chữ Hán bé viết sẽ vừa đẹp vừa đúng thứ tự!
            </p>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {strokeRules.map((rule, idx) => (
              <Card key={rule.id} className="!p-5">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{rule.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-primary-500 mb-1">
                      Quy tắc {idx + 1}
                    </p>
                    <h3 className="font-display text-base font-extrabold mb-1">
                      {rule.rule}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                      {rule.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-chinese text-2xl text-primary-600 dark:text-primary-300">
                        {rule.example}
                      </span>
                      <span className="text-slate-500 italic">
                        ({rule.exampleVi})
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* BƯỚC 6: 10 CHỮ ĐẦU TIÊN */}
        <section id="first10" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-300 to-accent-300 text-white flex items-center justify-center font-display font-extrabold text-xl shadow-soft">
              6
            </div>
            <h2 className="font-display text-3xl font-extrabold">
              10 chữ Hán đầu tiên 🎉
            </h2>
          </div>

          <Card className="mb-4">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Đây là 10 chữ siêu đơn giản và đẹp. Mỗi chữ có một câu chuyện riêng giúp bé nhớ dễ dàng!
            </p>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {firstCharacters.map((char, idx) => (
              <Card key={char.hanzi} className="!p-5">
                <div className="flex items-start gap-4">
                  <div className="text-center flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-blush-100 dark:from-primary-900/30 dark:to-blush-300/10 flex items-center justify-center">
                      <span className="font-chinese text-5xl font-bold text-primary-700 dark:text-primary-200">
                        {char.hanzi}
                      </span>
                    </div>
                    <AudioButton text={char.hanzi} className="mt-2" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <p className="text-xs font-bold text-primary-500">
                        Chữ {idx + 1}
                      </p>
                      <Pill color="slate">{char.strokes} nét</Pill>
                    </div>
                    <p className="font-mono text-secondary-600 dark:text-secondary-300 font-bold italic">
                      {char.pinyin}
                    </p>
                    <p className="font-display font-extrabold text-lg">
                      {char.meaningVi}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      <strong className="text-primary-600">💭 Câu chuyện:</strong> {char.story}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-6 bg-gradient-to-br from-secondary-50 to-success-50 dark:from-secondary-900/20 dark:to-success-900/20">
            <div className="text-center">
              <p className="text-5xl mb-2">🎊</p>
              <h3 className="font-display text-2xl font-extrabold mb-2">
                Chúc mừng bé!
              </h3>
              <p className="text-slate-700 dark:text-slate-200 mb-4 max-w-md mx-auto">
                Bé đã hoàn thành phần Làm quen với tiếng Trung. Bé đã sẵn sàng bước vào YCT 1 rồi đấy!
              </p>
              <Link href="/yct/1">
                <Button variant="primary" size="lg">
                  🚀 Vào học YCT 1 ngay
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </section>
    </>
  );
}
