import type { Conversation } from '@/types';

/**
 * Hội thoại mẫu theo cấp YCT.
 * Mỗi câu có phần "breakdown" phân tích từng từ,
 * giúp bé hiểu cấu trúc câu thay vì chỉ học thuộc lòng.
 */
export const conversations: Conversation[] = [

  // ══════════════════════════════════════════════════════════
  //  YCT 1
  // ══════════════════════════════════════════════════════════

  {
    id: 'y1-greet-1',
    title: 'Gặp bạn mới lần đầu',
    situation: 'Bé mới đến lớp, gặp một bạn chưa quen',
    yctLevel: 1,
    lines: [
      {
        speaker: 'A', hanzi: '你好！', pinyin: 'Nǐ hǎo!', vi: 'Xin chào!',
        breakdown: [
          { hanzi: '你', pinyin: 'nǐ', vi: 'bạn', note: 'đại từ ngôi 2' },
          { hanzi: '好', pinyin: 'hǎo', vi: 'tốt / khỏe', note: '"你好" = "bạn khỏe" → chào hỏi' }
        ]
      },
      {
        speaker: 'B', hanzi: '你好！我叫小红。', pinyin: 'Nǐ hǎo! Wǒ jiào Xiǎo Hóng.', vi: 'Xin chào! Mình tên là Tiểu Hồng.',
        breakdown: [
          { hanzi: '我', pinyin: 'wǒ', vi: 'mình / tôi' },
          { hanzi: '叫', pinyin: 'jiào', vi: 'tên là / được gọi là', note: 'dùng 叫 để giới thiệu tên' },
          { hanzi: '小红', pinyin: 'Xiǎo Hóng', vi: 'Tiểu Hồng', note: 'tên người' }
        ]
      },
      {
        speaker: 'A', hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', vi: 'Bạn tên là gì?',
        breakdown: [
          { hanzi: '你', pinyin: 'nǐ', vi: 'bạn' },
          { hanzi: '叫', pinyin: 'jiào', vi: 'tên là' },
          { hanzi: '什么', pinyin: 'shénme', vi: 'cái gì', note: 'từ hỏi' },
          { hanzi: '名字', pinyin: 'míngzi', vi: 'tên' }
        ]
      },
      {
        speaker: 'B', hanzi: '我叫小明。很高兴认识你！', pinyin: 'Wǒ jiào Xiǎo Míng. Hěn gāoxìng rènshi nǐ!', vi: 'Mình tên Tiểu Minh. Rất vui được gặp bạn!',
        breakdown: [
          { hanzi: '很', pinyin: 'hěn', vi: 'rất' },
          { hanzi: '高兴', pinyin: 'gāoxìng', vi: 'vui mừng' },
          { hanzi: '认识', pinyin: 'rènshi', vi: 'quen biết' },
          { hanzi: '你', pinyin: 'nǐ', vi: 'bạn' }
        ]
      }
    ]
  },

  {
    id: 'y1-age-1',
    title: 'Hỏi tuổi nhau',
    situation: 'Hai bạn nhỏ chơi cùng nhau',
    yctLevel: 1,
    lines: [
      {
        speaker: 'A', hanzi: '你几岁？', pinyin: 'Nǐ jǐ suì?', vi: 'Bạn mấy tuổi?',
        breakdown: [
          { hanzi: '你', pinyin: 'nǐ', vi: 'bạn' },
          { hanzi: '几', pinyin: 'jǐ', vi: 'mấy', note: 'hỏi số lượng nhỏ (dưới 10)' },
          { hanzi: '岁', pinyin: 'suì', vi: 'tuổi' }
        ]
      },
      {
        speaker: 'B', hanzi: '我七岁。你呢？', pinyin: 'Wǒ qī suì. Nǐ ne?', vi: 'Mình bảy tuổi. Còn bạn?',
        breakdown: [
          { hanzi: '我', pinyin: 'wǒ', vi: 'mình' },
          { hanzi: '七', pinyin: 'qī', vi: 'bảy' },
          { hanzi: '岁', pinyin: 'suì', vi: 'tuổi' },
          { hanzi: '你呢', pinyin: 'nǐ ne', vi: 'còn bạn thì sao?', note: '呢 dùng để hỏi ngược lại' }
        ]
      },
      {
        speaker: 'A', hanzi: '我八岁。', pinyin: 'Wǒ bā suì.', vi: 'Mình tám tuổi.',
        breakdown: [
          { hanzi: '八', pinyin: 'bā', vi: 'tám' }
        ]
      }
    ]
  },

  {
    id: 'y1-family-1',
    title: 'Giới thiệu gia đình',
    situation: 'Bé giới thiệu gia đình với bạn',
    yctLevel: 1,
    lines: [
      {
        speaker: 'A', hanzi: '这是我的爸爸妈妈。', pinyin: 'Zhè shì wǒ de bàba māma.', vi: 'Đây là bố và mẹ của mình.',
        breakdown: [
          { hanzi: '这', pinyin: 'zhè', vi: 'đây / này' },
          { hanzi: '是', pinyin: 'shì', vi: 'là', note: 'động từ "là" trong tiếng Trung' },
          { hanzi: '我的', pinyin: 'wǒ de', vi: 'của mình', note: '的 biểu thị sở hữu' },
          { hanzi: '爸爸', pinyin: 'bàba', vi: 'bố' },
          { hanzi: '妈妈', pinyin: 'māma', vi: 'mẹ' }
        ]
      },
      {
        speaker: 'B', hanzi: '叔叔好！阿姨好！', pinyin: 'Shūshu hǎo! Āyí hǎo!', vi: 'Cháu chào bác trai! Cháu chào bác gái!',
        breakdown: [
          { hanzi: '叔叔', pinyin: 'shūshu', vi: 'chú / bác trai (cha của bạn)' },
          { hanzi: '好', pinyin: 'hǎo', vi: 'ổn / tốt', note: 'dùng sau tên/chức danh = lời chào lịch sự' },
          { hanzi: '阿姨', pinyin: 'āyí', vi: 'cô / bác gái (mẹ của bạn)' }
        ]
      },
      {
        speaker: 'A', hanzi: '你有哥哥姐姐吗？', pinyin: 'Nǐ yǒu gēge jiějie ma?', vi: 'Bạn có anh chị không?',
        breakdown: [
          { hanzi: '有', pinyin: 'yǒu', vi: 'có' },
          { hanzi: '哥哥', pinyin: 'gēge', vi: 'anh trai' },
          { hanzi: '姐姐', pinyin: 'jiějie', vi: 'chị gái' },
          { hanzi: '吗', pinyin: 'ma', vi: '(không dịch)', note: '吗 cuối câu = câu hỏi Yes/No' }
        ]
      },
      {
        speaker: 'B', hanzi: '我有一个哥哥。', pinyin: 'Wǒ yǒu yī gè gēge.', vi: 'Mình có một anh trai.',
        breakdown: [
          { hanzi: '一', pinyin: 'yī', vi: 'một' },
          { hanzi: '个', pinyin: 'gè', vi: '(lượng từ)', note: '个 là lượng từ chung dùng cho người' }
        ]
      }
    ]
  },

  {
    id: 'y1-color-1',
    title: 'Màu sắc yêu thích',
    situation: 'Bé hỏi bạn về màu sắc',
    yctLevel: 1,
    lines: [
      {
        speaker: 'A', hanzi: '你喜欢什么颜色？', pinyin: 'Nǐ xǐhuan shénme yánsè?', vi: 'Bạn thích màu gì?',
        breakdown: [
          { hanzi: '喜欢', pinyin: 'xǐhuan', vi: 'thích' },
          { hanzi: '什么', pinyin: 'shénme', vi: 'cái gì' },
          { hanzi: '颜色', pinyin: 'yánsè', vi: 'màu sắc' }
        ]
      },
      {
        speaker: 'B', hanzi: '我喜欢蓝色。你呢？', pinyin: 'Wǒ xǐhuan lánsè. Nǐ ne?', vi: 'Mình thích màu xanh. Còn bạn?',
        breakdown: [
          { hanzi: '蓝色', pinyin: 'lánsè', vi: 'màu xanh dương' }
        ]
      },
      {
        speaker: 'A', hanzi: '我喜欢红色！红色很漂亮！', pinyin: 'Wǒ xǐhuan hóngsè! Hóngsè hěn piàoliang!', vi: 'Mình thích màu đỏ! Màu đỏ rất đẹp!',
        breakdown: [
          { hanzi: '红色', pinyin: 'hóngsè', vi: 'màu đỏ' },
          { hanzi: '很', pinyin: 'hěn', vi: 'rất' },
          { hanzi: '漂亮', pinyin: 'piàoliang', vi: 'đẹp' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  YCT 2
  // ══════════════════════════════════════════════════════════

  {
    id: 'y2-school-1',
    title: 'Ở trường học',
    situation: 'Đầu giờ học, thầy cô vào lớp',
    yctLevel: 2,
    lines: [
      {
        speaker: 'A', hanzi: '老师好！', pinyin: 'Lǎoshī hǎo!', vi: 'Chào thầy/cô ạ!',
        breakdown: [
          { hanzi: '老师', pinyin: 'lǎoshī', vi: 'thầy / cô giáo', note: '老 = lớn tuổi, 师 = thầy' },
          { hanzi: '好', pinyin: 'hǎo', vi: '(chào)', note: 'dùng sau danh xưng = chào lịch sự' }
        ]
      },
      {
        speaker: 'B', hanzi: '同学们好！今天我们学新词。', pinyin: 'Tóngxuémen hǎo! Jīntiān wǒmen xué xīn cí.', vi: 'Chào các em! Hôm nay chúng ta học từ mới.',
        breakdown: [
          { hanzi: '同学们', pinyin: 'tóngxuémen', vi: 'các bạn học', note: '们 = số nhiều' },
          { hanzi: '今天', pinyin: 'jīntiān', vi: 'hôm nay' },
          { hanzi: '我们', pinyin: 'wǒmen', vi: 'chúng ta' },
          { hanzi: '学', pinyin: 'xué', vi: 'học' },
          { hanzi: '新', pinyin: 'xīn', vi: 'mới' },
          { hanzi: '词', pinyin: 'cí', vi: 'từ vựng' }
        ]
      },
      {
        speaker: 'A', hanzi: '老师，这个字怎么读？', pinyin: 'Lǎoshī, zhège zì zěnme dú?', vi: 'Thưa cô, chữ này đọc thế nào ạ?',
        breakdown: [
          { hanzi: '这个', pinyin: 'zhège', vi: 'cái này' },
          { hanzi: '字', pinyin: 'zì', vi: 'chữ' },
          { hanzi: '怎么', pinyin: 'zěnme', vi: 'thế nào / như thế nào' },
          { hanzi: '读', pinyin: 'dú', vi: 'đọc' }
        ]
      },
      {
        speaker: 'B', hanzi: '你们跟我读：你好！', pinyin: 'Nǐmen gēn wǒ dú: Nǐ hǎo!', vi: 'Các em đọc theo cô: Nǐ hǎo!',
        breakdown: [
          { hanzi: '你们', pinyin: 'nǐmen', vi: 'các bạn' },
          { hanzi: '跟', pinyin: 'gēn', vi: 'theo / cùng với' },
          { hanzi: '我', pinyin: 'wǒ', vi: 'tôi / cô' },
          { hanzi: '读', pinyin: 'dú', vi: 'đọc' }
        ]
      }
    ]
  },

  {
    id: 'y2-food-1',
    title: 'Ăn sáng cùng bạn',
    situation: 'Hai bạn cùng ăn sáng ở căng tin trường',
    yctLevel: 2,
    lines: [
      {
        speaker: 'A', hanzi: '你早饭吃什么了？', pinyin: 'Nǐ zǎofàn chī shénme le?', vi: 'Bạn ăn sáng gì rồi?',
        breakdown: [
          { hanzi: '早饭', pinyin: 'zǎofàn', vi: 'bữa sáng', note: '早 = sáng sớm, 饭 = cơm/bữa ăn' },
          { hanzi: '吃', pinyin: 'chī', vi: 'ăn' },
          { hanzi: '什么', pinyin: 'shénme', vi: 'gì' },
          { hanzi: '了', pinyin: 'le', vi: '(rồi)', note: '了 biểu thị hành động đã xảy ra' }
        ]
      },
      {
        speaker: 'B', hanzi: '我吃了面包和牛奶。你呢？', pinyin: 'Wǒ chī le miànbāo hé niúnǎi. Nǐ ne?', vi: 'Mình ăn bánh mì và sữa. Còn bạn?',
        breakdown: [
          { hanzi: '面包', pinyin: 'miànbāo', vi: 'bánh mì' },
          { hanzi: '和', pinyin: 'hé', vi: 'và', note: 'nối hai danh từ' },
          { hanzi: '牛奶', pinyin: 'niúnǎi', vi: 'sữa', note: '牛 = bò, 奶 = sữa' }
        ]
      },
      {
        speaker: 'A', hanzi: '我没吃，我现在很饿！', pinyin: 'Wǒ méi chī, wǒ xiànzài hěn è!', vi: 'Mình chưa ăn, bây giờ mình đói lắm!',
        breakdown: [
          { hanzi: '没吃', pinyin: 'méi chī', vi: 'chưa ăn', note: '没 + động từ = phủ định quá khứ' },
          { hanzi: '现在', pinyin: 'xiànzài', vi: 'bây giờ' },
          { hanzi: '饿', pinyin: 'è', vi: 'đói' }
        ]
      },
      {
        speaker: 'B', hanzi: '快去吃吧！今天有好吃的饺子！', pinyin: 'Kuài qù chī ba! Jīntiān yǒu hǎochī de jiǎozi!', vi: 'Đi ăn đi! Hôm nay có sủi cảo ngon lắm!',
        breakdown: [
          { hanzi: '快', pinyin: 'kuài', vi: 'nhanh lên' },
          { hanzi: '去', pinyin: 'qù', vi: 'đi' },
          { hanzi: '吧', pinyin: 'ba', vi: '(đi)', note: '吧 cuối câu = lời mời/đề nghị' },
          { hanzi: '好吃的', pinyin: 'hǎochī de', vi: 'ngon', note: '好吃 = ngon, 的 biến thành tính từ bổ nghĩa' },
          { hanzi: '饺子', pinyin: 'jiǎozi', vi: 'sủi cảo' }
        ]
      }
    ]
  },

  {
    id: 'y2-time-1',
    title: 'Hỏi giờ giấc',
    situation: 'Bạn muốn biết mấy giờ rồi',
    yctLevel: 2,
    lines: [
      {
        speaker: 'A', hanzi: '现在几点了？', pinyin: 'Xiànzài jǐ diǎn le?', vi: 'Bây giờ mấy giờ rồi?',
        breakdown: [
          { hanzi: '现在', pinyin: 'xiànzài', vi: 'bây giờ' },
          { hanzi: '几', pinyin: 'jǐ', vi: 'mấy' },
          { hanzi: '点', pinyin: 'diǎn', vi: 'giờ', note: '几点 = mấy giờ' },
          { hanzi: '了', pinyin: 'le', vi: '(rồi)', note: '了 nhấn mạnh đã qua thời điểm nào đó' }
        ]
      },
      {
        speaker: 'B', hanzi: '现在三点半。', pinyin: 'Xiànzài sān diǎn bàn.', vi: 'Bây giờ là ba giờ rưỡi.',
        breakdown: [
          { hanzi: '三', pinyin: 'sān', vi: 'ba' },
          { hanzi: '点', pinyin: 'diǎn', vi: 'giờ' },
          { hanzi: '半', pinyin: 'bàn', vi: 'rưỡi / nửa', note: '半 = nửa → 三点半 = 3:30' }
        ]
      },
      {
        speaker: 'A', hanzi: '啊！我要迟到了！', pinyin: 'Ā! Wǒ yào chídào le!', vi: 'Ồ! Mình sắp trễ rồi!',
        breakdown: [
          { hanzi: '要', pinyin: 'yào', vi: 'sắp / sẽ' },
          { hanzi: '迟到', pinyin: 'chídào', vi: 'đến muộn / trễ', note: '迟 = muộn, 到 = đến' },
          { hanzi: '了', pinyin: 'le', vi: '(rồi)', note: 'biểu thị tình huống sắp xảy ra' }
        ]
      },
      {
        speaker: 'B', hanzi: '快走吧！', pinyin: 'Kuài zǒu ba!', vi: 'Đi nhanh thôi!',
        breakdown: [
          { hanzi: '快', pinyin: 'kuài', vi: 'nhanh' },
          { hanzi: '走', pinyin: 'zǒu', vi: 'đi bộ / đi' },
          { hanzi: '吧', pinyin: 'ba', vi: '(thôi nào!)' }
        ]
      }
    ]
  },

  {
    id: 'y2-weather-1',
    title: 'Nói chuyện về thời tiết',
    situation: 'Sáng sớm, nhìn ra cửa sổ',
    yctLevel: 2,
    lines: [
      {
        speaker: 'A', hanzi: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', vi: 'Hôm nay thời tiết thế nào?',
        breakdown: [
          { hanzi: '今天', pinyin: 'jīntiān', vi: 'hôm nay' },
          { hanzi: '天气', pinyin: 'tiānqì', vi: 'thời tiết', note: '天 = trời, 气 = khí hậu' },
          { hanzi: '怎么样', pinyin: 'zěnmeyàng', vi: 'thế nào', note: 'dùng hỏi về tình trạng' }
        ]
      },
      {
        speaker: 'B', hanzi: '今天很热，没有风。', pinyin: 'Jīntiān hěn rè, méiyǒu fēng.', vi: 'Hôm nay rất nóng, không có gió.',
        breakdown: [
          { hanzi: '热', pinyin: 'rè', vi: 'nóng' },
          { hanzi: '没有', pinyin: 'méiyǒu', vi: 'không có' },
          { hanzi: '风', pinyin: 'fēng', vi: 'gió' }
        ]
      },
      {
        speaker: 'A', hanzi: '那我们去游泳吧！', pinyin: 'Nà wǒmen qù yóuyǒng ba!', vi: 'Vậy thì đi bơi thôi!',
        breakdown: [
          { hanzi: '那', pinyin: 'nà', vi: 'vậy thì', note: 'dùng nối ý với mệnh đề trước' },
          { hanzi: '去', pinyin: 'qù', vi: 'đi' },
          { hanzi: '游泳', pinyin: 'yóuyǒng', vi: 'bơi lội' }
        ]
      },
      {
        speaker: 'B', hanzi: '好主意！我喜欢游泳！', pinyin: 'Hǎo zhǔyi! Wǒ xǐhuan yóuyǒng!', vi: 'Ý hay đó! Mình thích bơi lắm!',
        breakdown: [
          { hanzi: '好主意', pinyin: 'hǎo zhǔyi', vi: 'ý hay', note: '好 = tốt, 主意 = ý kiến' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  YCT 3
  // ══════════════════════════════════════════════════════════

  {
    id: 'y3-shopping-1',
    title: 'Đi mua đồ',
    situation: 'Bé vào cửa hàng mua đồ dùng học tập',
    yctLevel: 3,
    lines: [
      {
        speaker: 'A', hanzi: '你好，这个笔多少钱？', pinyin: 'Nǐ hǎo, zhège bǐ duōshao qián?', vi: 'Xin chào, cây bút này bao nhiêu tiền?',
        breakdown: [
          { hanzi: '这个', pinyin: 'zhège', vi: 'cái này' },
          { hanzi: '笔', pinyin: 'bǐ', vi: 'bút' },
          { hanzi: '多少', pinyin: 'duōshao', vi: 'bao nhiêu' },
          { hanzi: '钱', pinyin: 'qián', vi: 'tiền' }
        ]
      },
      {
        speaker: 'B', hanzi: '这个笔五块钱。你要几支？', pinyin: 'Zhège bǐ wǔ kuài qián. Nǐ yào jǐ zhī?', vi: 'Bút này 5 tệ. Bạn cần mấy cây?',
        breakdown: [
          { hanzi: '五', pinyin: 'wǔ', vi: 'năm' },
          { hanzi: '块', pinyin: 'kuài', vi: 'tệ (đơn vị tiền Trung Quốc)' },
          { hanzi: '要', pinyin: 'yào', vi: 'cần / muốn' },
          { hanzi: '支', pinyin: 'zhī', vi: '(lượng từ cho bút/que dài)', note: '支 dùng cho vật dài, thẳng' }
        ]
      },
      {
        speaker: 'A', hanzi: '我要两支。还有，这本书多少钱？', pinyin: 'Wǒ yào liǎng zhī. Háiyǒu, zhè běn shū duōshao qián?', vi: 'Cho mình hai cây. Còn quyển sách này bao nhiêu?',
        breakdown: [
          { hanzi: '两', pinyin: 'liǎng', vi: 'hai', note: '两 dùng trước lượng từ, 二 dùng đếm đơn thuần' },
          { hanzi: '还有', pinyin: 'háiyǒu', vi: 'còn nữa / ngoài ra' },
          { hanzi: '本', pinyin: 'běn', vi: '(lượng từ cho sách)' }
        ]
      },
      {
        speaker: 'B', hanzi: '书十二块。一共十七块钱。', pinyin: 'Shū shí èr kuài. Yīgòng shíqī kuài qián.', vi: 'Sách 12 tệ. Tổng cộng 17 tệ.',
        breakdown: [
          { hanzi: '一共', pinyin: 'yīgòng', vi: 'tổng cộng', note: '一 = một, 共 = cộng lại' },
          { hanzi: '十七', pinyin: 'shíqī', vi: 'mười bảy', note: '十 = mười, 七 = bảy → ghép lại = 17' }
        ]
      }
    ]
  },

  {
    id: 'y3-hobby-1',
    title: 'Nói về sở thích',
    situation: 'Hai bạn nói chuyện sau giờ học',
    yctLevel: 3,
    lines: [
      {
        speaker: 'A', hanzi: '你平时喜欢做什么？', pinyin: 'Nǐ píngshí xǐhuan zuò shénme?', vi: 'Bình thường bạn thích làm gì?',
        breakdown: [
          { hanzi: '平时', pinyin: 'píngshí', vi: 'bình thường / thường ngày' },
          { hanzi: '做', pinyin: 'zuò', vi: 'làm' }
        ]
      },
      {
        speaker: 'B', hanzi: '我喜欢踢足球和画画。你呢？', pinyin: 'Wǒ xǐhuan tī zúqiú hé huàhuà. Nǐ ne?', vi: 'Mình thích đá bóng và vẽ tranh. Còn bạn?',
        breakdown: [
          { hanzi: '踢', pinyin: 'tī', vi: 'đá (chân)' },
          { hanzi: '足球', pinyin: 'zúqiú', vi: 'bóng đá', note: '足 = chân, 球 = bóng' },
          { hanzi: '画画', pinyin: 'huàhuà', vi: 'vẽ tranh', note: 'lặp từ 画 = vừa danh từ vừa động từ' }
        ]
      },
      {
        speaker: 'A', hanzi: '我喜欢唱歌，但是我唱得不好！', pinyin: 'Wǒ xǐhuan chànggē, dànshì wǒ chàng de bù hǎo!', vi: 'Mình thích hát, nhưng mình hát không hay!',
        breakdown: [
          { hanzi: '唱歌', pinyin: 'chànggē', vi: 'hát', note: '唱 = hát, 歌 = bài hát' },
          { hanzi: '但是', pinyin: 'dànshì', vi: 'nhưng mà' },
          { hanzi: '得', pinyin: 'de', vi: '(bổ trợ kết quả)', note: '唱得不好 = hát không hay (得 + tính từ đánh giá)' }
        ]
      },
      {
        speaker: 'B', hanzi: '没关系！多练习就会好的！', pinyin: 'Méiguānxi! Duō liànxí jiù huì hǎo de!', vi: 'Không sao! Luyện tập nhiều sẽ tốt thôi!',
        breakdown: [
          { hanzi: '多', pinyin: 'duō', vi: 'nhiều' },
          { hanzi: '练习', pinyin: 'liànxí', vi: 'luyện tập' },
          { hanzi: '就', pinyin: 'jiù', vi: 'thì sẽ', note: '多…就… = càng nhiều…thì sẽ…' },
          { hanzi: '会', pinyin: 'huì', vi: 'sẽ' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  YCT 4
  // ══════════════════════════════════════════════════════════

  {
    id: 'y4-plan-1',
    title: 'Lên kế hoạch cuối tuần',
    situation: 'Bàn kế hoạch đi chơi cuối tuần với bạn',
    yctLevel: 4,
    lines: [
      {
        speaker: 'A', hanzi: '这个周末你有什么计划？', pinyin: 'Zhège zhōumò nǐ yǒu shénme jìhuà?', vi: 'Cuối tuần này bạn có kế hoạch gì không?',
        breakdown: [
          { hanzi: '这个', pinyin: 'zhège', vi: 'cái này' },
          { hanzi: '周末', pinyin: 'zhōumò', vi: 'cuối tuần', note: '周 = tuần, 末 = cuối' },
          { hanzi: '计划', pinyin: 'jìhuà', vi: 'kế hoạch' }
        ]
      },
      {
        speaker: 'B', hanzi: '我打算和家人去公园爬山。', pinyin: 'Wǒ dǎsuan hé jiārén qù gōngyuán pá shān.', vi: 'Mình định cùng gia đình đi leo núi ở công viên.',
        breakdown: [
          { hanzi: '打算', pinyin: 'dǎsuan', vi: 'định / dự tính', note: '打 = làm, 算 = tính → định làm gì đó' },
          { hanzi: '家人', pinyin: 'jiārén', vi: 'gia đình', note: '家 = nhà, 人 = người' },
          { hanzi: '爬山', pinyin: 'pá shān', vi: 'leo núi' }
        ]
      },
      {
        speaker: 'A', hanzi: '听起来很有意思！我能一起去吗？', pinyin: 'Tīng qǐlái hěn yǒuyìsi! Wǒ néng yīqǐ qù ma?', vi: 'Nghe có vẻ thú vị quá! Mình có thể đi cùng không?',
        breakdown: [
          { hanzi: '听起来', pinyin: 'tīng qǐlái', vi: 'nghe có vẻ', note: '起来 bổ trợ hướng/ý nghĩa đánh giá' },
          { hanzi: '有意思', pinyin: 'yǒuyìsi', vi: 'thú vị', note: '有 = có, 意思 = ý nghĩa → có ý nghĩa → thú vị' },
          { hanzi: '能', pinyin: 'néng', vi: 'có thể' },
          { hanzi: '一起', pinyin: 'yīqǐ', vi: 'cùng nhau' }
        ]
      },
      {
        speaker: 'B', hanzi: '当然可以！我们早上八点在公园门口见！', pinyin: 'Dāngrán kěyǐ! Wǒmen zǎoshang bā diǎn zài gōngyuán ménkǒu jiàn!', vi: 'Tất nhiên được! Mình hẹn 8 giờ sáng ở cổng công viên!',
        breakdown: [
          { hanzi: '当然', pinyin: 'dāngrán', vi: 'tất nhiên' },
          { hanzi: '可以', pinyin: 'kěyǐ', vi: 'được / có thể' },
          { hanzi: '早上', pinyin: 'zǎoshang', vi: 'buổi sáng' },
          { hanzi: '门口', pinyin: 'ménkǒu', vi: 'cổng / lối vào', note: '门 = cửa, 口 = miệng/lối' },
          { hanzi: '见', pinyin: 'jiàn', vi: 'gặp nhau' }
        ]
      }
    ]
  }
];

export function getConversationsByLevel(level: number) {
  return conversations.filter((c) => c.yctLevel === level);
}
