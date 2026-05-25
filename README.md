# 🐼 Zhongwen Kids — Học tiếng Trung vui nhộn cho bé tiểu học

> Nền tảng học tiếng Trung định hướng **YCT** dành cho học sinh tiểu học Việt Nam (lớp 1 → lớp 5). Tập trung vào **nghe, nói, Pinyin và chữ Hán cơ bản** thông qua flashcard, trò chơi và bài hát thiếu nhi.

![Made with Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## ✨ Tính năng nổi bật

- 🎯 **Lộ trình YCT 1 → YCT 4** với từ vựng, hội thoại mẫu, mini quiz
- 🔤 **Học Pinyin** đầy đủ thanh điệu + bảng phụ âm/nguyên âm có audio
- 🃏 **Flashcards 3D** lật để xem nghĩa, có nút phát âm
- 🎮 **Khu trò chơi tương tác** (ghép từ, lật thẻ trí nhớ, viết chữ Hán...)
- 🎵 **Bài hát & truyện cổ tích** Trung Quốc dành cho thiếu nhi
- 📊 **Dashboard học sinh** – streak, XP, level, huy hiệu, lịch sử hoạt động
- 👨‍👩‍👧 **Dashboard phụ huynh** + hướng dẫn đồng hành cùng bé
- 👩‍🏫 **Tài nguyên giáo viên** – giáo án, worksheet, slide
- ⚙️ **Admin panel mockup** – quản lý người dùng, nội dung, thống kê
- 🌙 **Dark mode** mượt mà
- 🏆 **Hệ thống huy hiệu & chuỗi ngày học liên tiếp**
- 📱 **Mobile-first**, responsive trên mọi thiết bị
- 🇻🇳 **Toàn bộ giao diện tiếng Việt** thân thiện với bé

---

## 🛠️ Công nghệ sử dụng

| Lớp | Công nghệ |
|---|---|
| Framework | **Next.js 14** (App Router) |
| Ngôn ngữ | **TypeScript 5** |
| Style | **Tailwind CSS 3** + custom design tokens |
| Icon | lucide-react |
| Animation | framer-motion |
| Audio | Web Speech API (placeholder, dễ thay bằng audio thật) |
| Font | Baloo 2 + Nunito + Noto Sans SC |

> Toàn bộ dữ liệu hiện ở dạng **mock data trong `/src/data`** – có thể chuyển sang CMS (Sanity, Strapi) hoặc DB (Supabase, Postgres) khi triển khai thực tế.

---

## 📁 Cấu trúc thư mục

```
zhongwen-kids/
├─ public/                      # ảnh, audio, favicon
├─ src/
│  ├─ app/                      # Next.js App Router
│  │  ├─ layout.tsx             # layout gốc + header + footer
│  │  ├─ page.tsx               # Trang chủ
│  │  ├─ about/
│  │  ├─ roadmap/
│  │  ├─ yct/
│  │  │  ├─ page.tsx            # 4 cấp YCT
│  │  │  └─ [level]/page.tsx    # trang chi tiết YCT 1..4
│  │  ├─ pinyin/
│  │  ├─ vocabulary/
│  │  │  ├─ page.tsx            # 6 chủ đề
│  │  │  └─ [category]/page.tsx # chi tiết theo chủ đề
│  │  ├─ games/
│  │  ├─ songs-stories/
│  │  ├─ parents/
│  │  ├─ teachers/
│  │  ├─ contact/
│  │  ├─ dashboard/             # dashboard học sinh
│  │  └─ admin/                 # admin mockup
│  ├─ components/
│  │  ├─ ui/                    # Button, Card, Pill, Mascot...
│  │  ├─ layout/                # Header, Footer, PageHero
│  │  ├─ learning/              # Flashcard, Quiz, CharacterWriter...
│  │  ├─ games/                 # MatchingGame
│  │  └─ dashboard/             # StreakCard, BadgeGrid
│  ├─ data/                     # mock data: vocab, quiz, badges...
│  ├─ hooks/                    # useTheme, useStreak, useAudio
│  ├─ lib/                      # site-config
│  ├─ styles/globals.css
│  ├─ types/                    # TypeScript types dùng chung
│  └─ utils/                    # cn, pinyin helpers
├─ .env.example
├─ .eslintrc.json
├─ .gitignore
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
└─ tsconfig.json
```

---

## 🚀 Cài đặt & chạy local

### Yêu cầu

- **Node.js ≥ 18.17** (khuyến nghị 20+)
- **npm** hoặc **yarn / pnpm**

### Các bước

```bash
# 1. Clone về máy
git clone https://github.com/your-username/zhongwen-kids.git
cd zhongwen-kids

# 2. Cài thư viện
npm install

# 3. Chạy chế độ dev
npm run dev
```

Mở trình duyệt tại **http://localhost:3000** 🎉

### Các script khác

```bash
npm run build      # build production
npm run start      # chạy bản đã build
npm run lint       # kiểm tra ESLint
```

---

## 🌐 Triển khai (Deploy)

### Cách 1 — Vercel (khuyến nghị, 1 click)

1. Đăng ký tài khoản tại [vercel.com](https://vercel.com) (đăng nhập bằng GitHub).
2. Bấm **"Add New Project"** → chọn repository `zhongwen-kids`.
3. Vercel tự nhận diện Next.js, **không cần đổi setting nào**.
4. Bấm **Deploy** và đợi ~1 phút.
5. Bạn sẽ có URL công khai dạng `https://zhongwen-kids.vercel.app`.

### Cách 2 — Netlify / Cloudflare Pages

- Build command: `npm run build`
- Output directory: `.next`
- Node version: `20`

### Cách 3 — Docker (tự host)

Có thể tạo `Dockerfile` chuẩn Next.js, tham khảo [tài liệu chính thức](https://nextjs.org/docs/app/building-your-application/deploying#docker-image).

---

## 📤 Đẩy code lên GitHub

```bash
# Khởi tạo repo (nếu chưa có)
git init
git add .
git commit -m "feat: initial commit – Zhongwen Kids"

# Đổi nhánh chính thành main
git branch -M main

# Tạo repo trống trên GitHub (qua web), rồi:
git remote add origin https://github.com/your-username/zhongwen-kids.git
git push -u origin main
```

---

## 🎨 Tuỳ chỉnh

### Đổi màu chủ đạo
Sửa trong `tailwind.config.ts` ở phần `theme.extend.colors.primary` (mặc định là hồng coral `#ff2e63`).

### Thêm từ vựng
Sửa file `src/data/vocabulary.ts`, thêm phần tử mới vào mảng `vocabulary` với đầy đủ `hanzi`, `pinyin`, `meaningVi`, `category`, `yctLevel`.

### Thay audio thật
Hook `src/hooks/useAudio.ts` hiện dùng **Web Speech API** làm placeholder. Khi có file mp3 thật, sửa lại để phát file `word.audioSrc` trong `VocabWord`.

### Thêm trò chơi
Tạo component mới trong `src/components/games/`, sau đó nhúng vào `src/app/games/page.tsx`.

---

## 🗺️ Lộ trình phát triển (Roadmap)

- [ ] 🔊 Thay TTS bằng audio chất lượng cao do giáo viên thu
- [ ] 🎬 Tích hợp video bài giảng hoạt hình
- [ ] 🤖 Trợ lý AI hỏi đáp tiếng Trung dành riêng cho bé
- [ ] 🔐 Đăng nhập (NextAuth) – đồng bộ tiến độ trên nhiều thiết bị
- [ ] 💾 Lưu tiến độ lên Supabase/Postgres
- [ ] 📱 Ứng dụng mobile (React Native / Expo)
- [ ] 🎤 Luyện nói có chấm điểm phát âm (Speech-to-Text + so khớp pinyin)
- [ ] 🌏 Đa ngôn ngữ (thêm tiếng Anh)
- [ ] 🏪 Cửa hàng nội dung mở rộng (truyện, bài hát premium)
- [ ] 📈 Hệ thống quà thưởng, xếp hạng tuần / tháng

---

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork repository
2. Tạo branch mới: `git checkout -b feature/ten-tinh-nang`
3. Commit theo chuẩn [Conventional Commits](https://www.conventionalcommits.org/)
4. Tạo Pull Request

---

## 📄 Giấy phép

Phát hành theo giấy phép **MIT** – xem file [LICENSE](./LICENSE).

---

## 💖 Lời cảm ơn

Cảm ơn các thầy cô, phụ huynh và đặc biệt là các bé đã truyền cảm hứng cho dự án này. Chúc các bé học tiếng Trung thật vui! 🐼❤️

```
学习中文，快乐成长！
Xuéxí Zhōngwén, kuàilè chéngzhǎng!
Học tiếng Trung, lớn lên thật vui!
```
