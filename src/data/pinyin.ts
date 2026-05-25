import type { PinyinSound } from '@/types';

// Phụ âm đầu (initials) cơ bản
export const initials: PinyinSound[] = [
  { id: 'i-b', symbol: 'b', type: 'initial', exampleHanzi: '爸', exampleMeaning: 'bố (bà)' },
  { id: 'i-p', symbol: 'p', type: 'initial', exampleHanzi: '怕', exampleMeaning: 'sợ (pà)' },
  { id: 'i-m', symbol: 'm', type: 'initial', exampleHanzi: '妈', exampleMeaning: 'mẹ (mā)' },
  { id: 'i-f', symbol: 'f', type: 'initial', exampleHanzi: '飞', exampleMeaning: 'bay (fēi)' },
  { id: 'i-d', symbol: 'd', type: 'initial', exampleHanzi: '大', exampleMeaning: 'to (dà)' },
  { id: 'i-t', symbol: 't', type: 'initial', exampleHanzi: '他', exampleMeaning: 'anh ấy (tā)' },
  { id: 'i-n', symbol: 'n', type: 'initial', exampleHanzi: '你', exampleMeaning: 'bạn (nǐ)' },
  { id: 'i-l', symbol: 'l', type: 'initial', exampleHanzi: '老', exampleMeaning: 'già (lǎo)' },
  { id: 'i-g', symbol: 'g', type: 'initial', exampleHanzi: '哥', exampleMeaning: 'anh (gē)' },
  { id: 'i-k', symbol: 'k', type: 'initial', exampleHanzi: '看', exampleMeaning: 'xem (kàn)' },
  { id: 'i-h', symbol: 'h', type: 'initial', exampleHanzi: '好', exampleMeaning: 'tốt (hǎo)' }
];

// Nguyên âm (finals) cơ bản
export const finals: PinyinSound[] = [
  { id: 'f-a', symbol: 'a', type: 'final', exampleHanzi: '啊', exampleMeaning: 'a (à)' },
  { id: 'f-o', symbol: 'o', type: 'final', exampleHanzi: '哦', exampleMeaning: 'ồ (ó)' },
  { id: 'f-e', symbol: 'e', type: 'final', exampleHanzi: '饿', exampleMeaning: 'đói (è)' },
  { id: 'f-i', symbol: 'i', type: 'final', exampleHanzi: '一', exampleMeaning: 'một (yī)' },
  { id: 'f-u', symbol: 'u', type: 'final', exampleHanzi: '五', exampleMeaning: 'năm (wǔ)' },
  { id: 'f-v', symbol: 'ü', type: 'final', exampleHanzi: '雨', exampleMeaning: 'mưa (yǔ)' },
  { id: 'f-ai', symbol: 'ai', type: 'final', exampleHanzi: '爱', exampleMeaning: 'yêu (ài)' },
  { id: 'f-ao', symbol: 'ao', type: 'final', exampleHanzi: '猫', exampleMeaning: 'mèo (māo)' }
];

// 4 thanh điệu + thanh nhẹ
export const tones: PinyinSound[] = [
  { id: 't-1', symbol: 'mā', type: 'tone', toneNumber: 1, exampleHanzi: '妈', exampleMeaning: 'mẹ' },
  { id: 't-2', symbol: 'má', type: 'tone', toneNumber: 2, exampleHanzi: '麻', exampleMeaning: 'cây gai' },
  { id: 't-3', symbol: 'mǎ', type: 'tone', toneNumber: 3, exampleHanzi: '马', exampleMeaning: 'ngựa' },
  { id: 't-4', symbol: 'mà', type: 'tone', toneNumber: 4, exampleHanzi: '骂', exampleMeaning: 'mắng' }
];
