import type { Conversation } from '@/types';

export const conversations: Conversation[] = [
  {
    id: 'conv-yct1-greet',
    title: 'Chào hỏi đầu tiên',
    yctLevel: 1,
    lines: [
      { speaker: 'A', hanzi: '你好!', pinyin: 'Nǐ hǎo!', vi: 'Xin chào!' },
      { speaker: 'B', hanzi: '你好!', pinyin: 'Nǐ hǎo!', vi: 'Xin chào!' },
      { speaker: 'A', hanzi: '你叫什么名字?', pinyin: 'Nǐ jiào shénme míngzi?', vi: 'Bạn tên là gì?' },
      { speaker: 'B', hanzi: '我叫小明。', pinyin: 'Wǒ jiào Xiǎomíng.', vi: 'Mình tên là Tiểu Minh.' }
    ]
  },
  {
    id: 'conv-yct1-family',
    title: 'Giới thiệu gia đình',
    yctLevel: 1,
    lines: [
      { speaker: 'A', hanzi: '这是我的妈妈。', pinyin: 'Zhè shì wǒ de māma.', vi: 'Đây là mẹ của mình.' },
      { speaker: 'B', hanzi: '阿姨好!', pinyin: 'Āyí hǎo!', vi: 'Cháu chào cô ạ!' }
    ]
  },
  {
    id: 'conv-yct2-school',
    title: 'Ở trường',
    yctLevel: 2,
    lines: [
      { speaker: 'A', hanzi: '老师好!', pinyin: 'Lǎoshī hǎo!', vi: 'Chào thầy/cô ạ!' },
      { speaker: 'B', hanzi: '同学们好!', pinyin: 'Tóngxuémen hǎo!', vi: 'Chào các em!' },
      { speaker: 'A', hanzi: '今天我们学什么?', pinyin: 'Jīntiān wǒmen xué shénme?', vi: 'Hôm nay chúng ta học gì ạ?' },
      { speaker: 'B', hanzi: '我们学新词。', pinyin: 'Wǒmen xué xīn cí.', vi: 'Chúng ta học từ mới nhé.' }
    ]
  },
  {
    id: 'conv-yct3-food',
    title: 'Đi ăn',
    yctLevel: 3,
    lines: [
      { speaker: 'A', hanzi: '你想吃什么?', pinyin: 'Nǐ xiǎng chī shénme?', vi: 'Bạn muốn ăn gì?' },
      { speaker: 'B', hanzi: '我想吃饺子。', pinyin: 'Wǒ xiǎng chī jiǎozi.', vi: 'Mình muốn ăn sủi cảo.' },
      { speaker: 'A', hanzi: '好吃吗?', pinyin: 'Hǎochī ma?', vi: 'Có ngon không?' },
      { speaker: 'B', hanzi: '很好吃!', pinyin: 'Hěn hǎochī!', vi: 'Rất ngon!' }
    ]
  },
  {
    id: 'conv-yct4-weather',
    title: 'Thời tiết',
    yctLevel: 4,
    lines: [
      { speaker: 'A', hanzi: '今天天气怎么样?', pinyin: 'Jīntiān tiānqì zěnmeyàng?', vi: 'Hôm nay thời tiết thế nào?' },
      { speaker: 'B', hanzi: '今天很热。', pinyin: 'Jīntiān hěn rè.', vi: 'Hôm nay rất nóng.' },
      { speaker: 'A', hanzi: '我们去公园吧。', pinyin: 'Wǒmen qù gōngyuán ba.', vi: 'Chúng ta đi công viên nhé.' }
    ]
  }
];

export function getConversationsByLevel(level: number) {
  return conversations.filter((c) => c.yctLevel === level);
}
