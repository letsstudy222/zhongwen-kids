'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useAudio } from '@/hooks/useAudio';
import { Volume2 } from 'lucide-react';

const StrokeOrderWriter = dynamic(
  () => import('@/components/learning/StrokeOrderWriter').then((m) => m.StrokeOrderWriter),
  { ssr: false, loading: () => <div className="w-48 h-48 rounded-2xl bg-cream-100 dark:bg-slate-700 animate-pulse" /> }
);

interface PracticeChar {
  hanzi: string;
  pinyin: string;
  vi: string;
  emoji: string;
  group: string;
}

const PRACTICE_CHARS: PracticeChar[] = [
  // Số đếm — YCT 1
  { hanzi: '一', pinyin: 'yī', vi: 'một', emoji: '1️⃣', group: 'Số đếm' },
  { hanzi: '二', pinyin: 'èr', vi: 'hai', emoji: '2️⃣', group: 'Số đếm' },
  { hanzi: '三', pinyin: 'sān', vi: 'ba', emoji: '3️⃣', group: 'Số đếm' },
  { hanzi: '四', pinyin: 'sì', vi: 'bốn', emoji: '4️⃣', group: 'Số đếm' },
  { hanzi: '五', pinyin: 'wǔ', vi: 'năm', emoji: '5️⃣', group: 'Số đếm' },
  { hanzi: '六', pinyin: 'liù', vi: 'sáu', emoji: '6️⃣', group: 'Số đếm' },
  { hanzi: '七', pinyin: 'qī', vi: 'bảy', emoji: '7️⃣', group: 'Số đếm' },
  { hanzi: '八', pinyin: 'bā', vi: 'tám', emoji: '8️⃣', group: 'Số đếm' },
  { hanzi: '九', pinyin: 'jiǔ', vi: 'chín', emoji: '9️⃣', group: 'Số đếm' },
  { hanzi: '十', pinyin: 'shí', vi: 'mười', emoji: '🔟', group: 'Số đếm' },
  // Con người & gia đình
  { hanzi: '人', pinyin: 'rén', vi: 'người', emoji: '🧑', group: 'Thiên nhiên & người' },
  { hanzi: '大', pinyin: 'dà', vi: 'to/lớn', emoji: '🐘', group: 'Thiên nhiên & người' },
  { hanzi: '小', pinyin: 'xiǎo', vi: 'nhỏ/bé', emoji: '🐭', group: 'Thiên nhiên & người' },
  { hanzi: '山', pinyin: 'shān', vi: 'núi', emoji: '⛰️', group: 'Thiên nhiên & người' },
  { hanzi: '水', pinyin: 'shuǐ', vi: 'nước', emoji: '💧', group: 'Thiên nhiên & người' },
  { hanzi: '日', pinyin: 'rì', vi: 'mặt trời/ngày', emoji: '☀️', group: 'Thiên nhiên & người' },
  { hanzi: '月', pinyin: 'yuè', vi: 'mặt trăng/tháng', emoji: '🌙', group: 'Thiên nhiên & người' },
  { hanzi: '火', pinyin: 'huǒ', vi: 'lửa', emoji: '🔥', group: 'Thiên nhiên & người' },
  { hanzi: '木', pinyin: 'mù', vi: 'gỗ/cây', emoji: '🌳', group: 'Thiên nhiên & người' },
  // Động từ cơ bản
  { hanzi: '好', pinyin: 'hǎo', vi: 'tốt', emoji: '👍', group: 'Từ thông dụng' },
  { hanzi: '是', pinyin: 'shì', vi: 'là', emoji: '✅', group: 'Từ thông dụng' },
  { hanzi: '有', pinyin: 'yǒu', vi: 'có', emoji: '✋', group: 'Từ thông dụng' },
  { hanzi: '不', pinyin: 'bù', vi: 'không', emoji: '🚫', group: 'Từ thông dụng' },
  { hanzi: '我', pinyin: 'wǒ', vi: 'mình/tôi', emoji: '🙋', group: 'Từ thông dụng' },
  { hanzi: '你', pinyin: 'nǐ', vi: 'bạn', emoji: '👉', group: 'Từ thông dụng' },
  { hanzi: '爱', pinyin: 'ài', vi: 'yêu', emoji: '❤️', group: 'Từ thông dụng' },
  // Gia đình
  { hanzi: '家', pinyin: 'jiā', vi: 'nhà/gia đình', emoji: '🏠', group: 'Gia đình' },
  { hanzi: '口', pinyin: 'kǒu', vi: 'miệng/cửa', emoji: '👄', group: 'Gia đình' },
  { hanzi: '手', pinyin: 'shǒu', vi: 'tay', emoji: '✋', group: 'Gia đình' },
  { hanzi: '心', pinyin: 'xīn', vi: 'tim/lòng', emoji: '💝', group: 'Gia đình' },
];

const GROUPS = Array.from(new Set(PRACTICE_CHARS.map(c => c.group)));

export function WritingPracticeSection() {
  const [selectedGroup, setSelectedGroup] = useState<string>(GROUPS[0]);
  const [selectedChar, setSelectedChar] = useState<PracticeChar>(PRACTICE_CHARS[0]);
  const { play } = useAudio();

  const groupChars = PRACTICE_CHARS.filter(c => c.group === selectedGroup);

  return (
    <div className="flex flex-col gap-6">
      {/* Chọn nhóm */}
      <div className="flex flex-wrap gap-2 justify-center">
        {GROUPS.map(g => (
          <button
            key={g}
            onClick={() => {
              setSelectedGroup(g);
              const first = PRACTICE_CHARS.find(c => c.group === g);
              if (first) setSelectedChar(first);
            }}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              selectedGroup === g
                ? 'bg-primary-500 text-white shadow-soft'
                : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-600'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Danh sách chữ bên trái */}
        <div>
          <p className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">
            Chọn chữ để luyện:
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
            {groupChars.map(char => (
              <button
                key={char.hanzi}
                onClick={() => {
                  setSelectedChar(char);
                  play(char.hanzi);
                }}
                className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-0.5 border-2 transition-all ${
                  selectedChar.hanzi === char.hanzi
                    ? 'border-primary-400 bg-primary-50 dark:bg-primary-900/30 shadow-soft'
                    : 'border-cream-200 dark:border-slate-600 bg-white dark:bg-slate-700/50 hover:border-primary-200 hover:-translate-y-0.5'
                }`}
              >
                <span className="font-chinese text-2xl font-bold text-primary-700 dark:text-primary-200">
                  {char.hanzi}
                </span>
                <span className="text-xs text-slate-400">{char.pinyin}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stroke order bên phải */}
        <div className="flex flex-col items-center gap-4">
          {/* Thông tin chữ đang luyện */}
          <div className="w-full bg-white dark:bg-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-soft border border-cream-100 dark:border-slate-700">
            <span className="text-4xl">{selectedChar.emoji}</span>
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-chinese text-3xl font-bold text-primary-700 dark:text-primary-200">
                  {selectedChar.hanzi}
                </span>
                <span className="font-mono italic text-secondary-600 dark:text-secondary-300">
                  {selectedChar.pinyin}
                </span>
              </div>
              <p className="font-bold text-slate-700 dark:text-slate-200">{selectedChar.vi}</p>
            </div>
            <button
              onClick={() => play(selectedChar.hanzi)}
              className="w-10 h-10 rounded-full bg-secondary-500 text-white flex items-center justify-center hover:bg-secondary-600 shadow-soft"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          {/* Writer */}
          <StrokeOrderWriter
            key={selectedChar.hanzi}  // remount khi đổi chữ
            hanzi={selectedChar.hanzi}
            size={200}
            animate
            quiz
          />

          <p className="text-xs text-slate-400 text-center leading-relaxed">
            Xem thứ tự nét rồi bấm <strong>✏️ Tự vẽ</strong> để luyện.<br />
            Vẽ đúng nét → xanh sáng lên ✅
          </p>
        </div>
      </div>
    </div>
  );
}
