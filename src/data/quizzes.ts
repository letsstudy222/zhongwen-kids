import type { QuizQuestion } from '@/types';

export const sampleQuizzes: Record<number, QuizQuestion[]> = {
  1: [
    {
      id: 'q1-1',
      type: 'multiple-choice',
      question: '"猫" có nghĩa là gì?',
      prompt: '猫',
      options: ['Chó', 'Mèo', 'Cá', 'Chim'],
      correctIndex: 1,
      explanationVi: '猫 (māo) nghĩa là "mèo".'
    },
    {
      id: 'q1-2',
      type: 'multiple-choice',
      question: 'Pinyin của "妈妈" là gì?',
      prompt: '妈妈',
      options: ['bàba', 'māma', 'gēge', 'jiějie'],
      correctIndex: 1,
      explanationVi: '妈妈 đọc là "māma" — nghĩa là mẹ.'
    },
    {
      id: 'q1-3',
      type: 'multiple-choice',
      question: 'Chọn chữ Hán nghĩa là "ba (số 3)"',
      options: ['一', '二', '三', '四'],
      correctIndex: 2,
      explanationVi: '三 (sān) là số 3.'
    }
  ],
  2: [
    {
      id: 'q2-1',
      type: 'multiple-choice',
      question: '"学校" có nghĩa là gì?',
      prompt: '学校',
      options: ['Bệnh viện', 'Trường học', 'Công viên', 'Cửa hàng'],
      correctIndex: 1,
      explanationVi: '学校 (xuéxiào) = trường học.'
    },
    {
      id: 'q2-2',
      type: 'multiple-choice',
      question: '"苹果" đọc là?',
      prompt: '苹果',
      options: ['píngguǒ', 'miànbāo', 'niúnǎi', 'mǐfàn'],
      correctIndex: 0
    }
  ],
  3: [
    {
      id: 'q3-1',
      type: 'multiple-choice',
      question: '"好吃" có nghĩa là gì?',
      prompt: '好吃',
      options: ['Đẹp', 'Ngon', 'Đắt', 'To'],
      correctIndex: 1
    }
  ],
  4: [
    {
      id: 'q4-1',
      type: 'multiple-choice',
      question: '"今天天气怎么样" hỏi điều gì?',
      prompt: '今天天气怎么样?',
      options: [
        'Hôm nay là thứ mấy?',
        'Hôm nay thời tiết thế nào?',
        'Hôm nay bạn đi đâu?',
        'Hôm nay bạn ăn gì?'
      ],
      correctIndex: 1
    }
  ]
};
