export interface SentenceMeta {
  predicates: string[]
  clauseIntroducers: string[]
  notes?: { phrase: string; note: string }[]
}

export interface VocabItem {
  word: string
  pos: string
  meaning: string
  syllables?: string
  phonetic?: string
}

export interface Article {
  original: {
    paragraphs: string[]
    predicateParagraph: SentenceMeta[][]
  }
  translation: { paragraphs: string[] }
  vocabulary: VocabItem[]
}

export interface ArticleMeta {
  id: string
  title: string
  titleCn?: string
  level: 'NCE2' | 'NCE3' | 'NCE4'
  lesson: number
  tag?: string
  keyArticle?: boolean
  heatmap?: number[][]
}

export const articleMetas: ArticleMeta[] = [
  {
    id: 'nce2-l1',
    lesson: 1,
    title: 'A private conversation',
    titleCn: '私人谈话',
    level: 'NCE2',
  },
  {
    id: 'nce2-l2',
    lesson: 2,
    title: 'Breakfast or lunch?',
    titleCn: '早餐还是午餐？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l3',
    lesson: 3,
    title: 'Please send me a card',
    titleCn: '请给我寄一张明信片',
    level: 'NCE2',
  },
  {
    id: 'nce2-l4',
    lesson: 4,
    title: 'An exciting trip',
    titleCn: '激动人心的旅行',
    level: 'NCE2',
  },
  {
    id: 'nce2-l5',
    lesson: 5,
    title: 'No wrong numbers',
    titleCn: '无错号之虞',
    level: 'NCE2',
  },
  {
    id: 'nce2-l6',
    lesson: 6,
    title: 'Percy Buttons',
    titleCn: '珀西·巴顿斯',
    level: 'NCE2',
  },
  {
    id: 'nce2-l7',
    lesson: 7,
    title: 'Too late',
    titleCn: '为时太晚',
    level: 'NCE2',
  },
  {
    id: 'nce2-l8',
    lesson: 8,
    title: 'The best and the worst',
    titleCn: '最好的和最差的',
    level: 'NCE2',
  },
  {
    id: 'nce2-l9',
    lesson: 9,
    title: 'A cold welcome',
    titleCn: '冷遇',
    level: 'NCE2',
  },
  {
    id: 'nce2-l10',
    lesson: 10,
    title: 'Not for jazz',
    titleCn: '不适于演奏爵士乐',
    level: 'NCE2',
  },
  {
    id: 'nce2-l11',
    lesson: 11,
    title: 'One good turn deserves another',
    titleCn: '礼尚往来',
    level: 'NCE2',
  },
  {
    id: 'nce2-l12',
    lesson: 12,
    title: 'Goodbye and good luck',
    titleCn: '再见，一路顺风',
    level: 'NCE2',
  },
  {
    id: 'nce2-l13',
    lesson: 13,
    title: 'The Greenwood Boys',
    titleCn: '绿林少年',
    level: 'NCE2',
  },
  {
    id: 'nce2-l14',
    lesson: 14,
    title: 'Do you speak English?',
    titleCn: '你会讲英语吗？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l15',
    lesson: 15,
    title: 'Good news',
    titleCn: '佳音',
    level: 'NCE2',
  },
  {
    id: 'nce2-l16',
    lesson: 16,
    title: 'A polite request',
    titleCn: '彬彬有礼的要求',
    level: 'NCE2',
  },
  {
    id: 'nce2-l17',
    lesson: 17,
    title: 'Always young',
    titleCn: '青春常驻',
    level: 'NCE2',
  },
  {
    id: 'nce2-l18',
    lesson: 18,
    title: 'He often does this!',
    titleCn: '他经常干这种事！',
    level: 'NCE2',
  },
  {
    id: 'nce2-l19',
    lesson: 19,
    title: 'Sold out',
    titleCn: '票已售完',
    level: 'NCE2',
  },
  {
    id: 'nce2-l20',
    lesson: 20,
    title: 'One man in a boat',
    titleCn: '独坐孤舟',
    level: 'NCE2',
  },
  {
    id: 'nce2-l21',
    lesson: 21,
    title: 'Mad or not?',
    titleCn: '是不是疯了？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l22',
    lesson: 22,
    title: 'A glass envelope',
    titleCn: '玻璃信封',
    level: 'NCE2',
  },
  {
    id: 'nce2-l23',
    lesson: 23,
    title: 'A new house',
    titleCn: '新居',
    level: 'NCE2',
  },
  {
    id: 'nce2-l24',
    lesson: 24,
    title: 'It could be worse',
    titleCn: '不幸中之万幸',
    level: 'NCE2',
  },
  {
    id: 'nce2-l25',
    lesson: 25,
    title: 'Do the English speak English?',
    titleCn: '英国人讲的是英语吗？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l26',
    lesson: 26,
    title: 'The best art critics',
    titleCn: '最佳艺术评论家',
    level: 'NCE2',
  },
  {
    id: 'nce2-l27',
    lesson: 27,
    title: 'A wet night',
    titleCn: '雨夜',
    level: 'NCE2',
  },
  {
    id: 'nce2-l28',
    lesson: 28,
    title: 'No parking',
    titleCn: '禁止停车',
    level: 'NCE2',
  },
  {
    id: 'nce2-l29',
    lesson: 29,
    title: 'Taxi!',
    titleCn: '出租车！',
    level: 'NCE2',
  },
  {
    id: 'nce2-l30',
    lesson: 30,
    title: 'Football or polo?',
    titleCn: '足球还是水球？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l31',
    lesson: 31,
    title: 'Success story',
    titleCn: '成功者的故事',
    level: 'NCE2',
  },
  {
    id: 'nce2-l32',
    lesson: 32,
    title: 'Shopping made easy',
    titleCn: '购物变得很容易',
    level: 'NCE2',
  },
  {
    id: 'nce2-l33',
    lesson: 33,
    title: 'Out of the darkness',
    titleCn: '冲出黑暗',
    level: 'NCE2',
  },
  {
    id: 'nce2-l34',
    lesson: 34,
    title: 'Quick work',
    titleCn: '破案"神速"',
    level: 'NCE2',
  },
  {
    id: 'nce2-l35',
    lesson: 35,
    title: 'Stop thief!',
    titleCn: '捉贼！',
    level: 'NCE2',
  },
  {
    id: 'nce2-l36',
    lesson: 36,
    title: 'Across the Channel',
    titleCn: '横渡海峡',
    level: 'NCE2',
  },
  {
    id: 'nce2-l37',
    lesson: 37,
    title: 'The Olympic Games',
    titleCn: '奥林匹克运动会',
    level: 'NCE2',
  },
  {
    id: 'nce2-l38',
    lesson: 38,
    title: 'Everything except the weather',
    titleCn: '唯独没有考虑到天气',
    level: 'NCE2',
  },
  {
    id: 'nce2-l39',
    lesson: 39,
    title: 'Am I all right?',
    titleCn: '我是否痊愈？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l40',
    lesson: 40,
    title: 'Food and talk',
    titleCn: '进餐与交谈',
    level: 'NCE2',
  },
  {
    id: 'nce2-l41',
    lesson: 41,
    title: 'Do you call that a hat?',
    titleCn: '你把那个叫帽子吗？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l42',
    lesson: 42,
    title: 'Not very musical',
    titleCn: '并非很懂音乐',
    level: 'NCE2',
  },
  {
    id: 'nce2-l43',
    lesson: 43,
    title: 'Over the South Pole',
    titleCn: '飞越南极',
    level: 'NCE2',
  },
  {
    id: 'nce2-l44',
    lesson: 44,
    title: 'Through the forest',
    titleCn: '穿过森林',
    level: 'NCE2',
  },
  {
    id: 'nce2-l45',
    lesson: 45,
    title: 'A clear conscience',
    titleCn: '问心无愧',
    level: 'NCE2',
  },
  {
    id: 'nce2-l46',
    lesson: 46,
    title: 'Expensive and uncomfortable',
    titleCn: '既昂贵又受罪',
    level: 'NCE2',
  },
  {
    id: 'nce2-l47',
    lesson: 47,
    title: 'A thirsty ghost',
    titleCn: '嗜酒的鬼魂',
    level: 'NCE2',
  },
  {
    id: 'nce2-l48',
    lesson: 48,
    title: 'Did you want to tell me something?',
    titleCn: '你想对我说什么吗？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l49',
    lesson: 49,
    title: 'The end of a dream',
    titleCn: '美梦告终',
    level: 'NCE2',
  },
  {
    id: 'nce2-l50',
    lesson: 50,
    title: 'Taken for a ride',
    titleCn: '乘车兜风',
    level: 'NCE2',
  },
  {
    id: 'nce2-l51',
    lesson: 51,
    title: 'Reward for virtue',
    titleCn: '对美德的奖赏',
    level: 'NCE2',
  },
  {
    id: 'nce2-l52',
    lesson: 52,
    title: 'A pretty carpet',
    titleCn: '漂亮的地毯',
    level: 'NCE2',
  },
  {
    id: 'nce2-l53',
    lesson: 53,
    title: 'Hot snake',
    titleCn: '触电的蛇',
    level: 'NCE2',
  },
  {
    id: 'nce2-l54',
    lesson: 54,
    title: 'Sticky fingers',
    titleCn: '黏糊的手指',
    level: 'NCE2',
  },
  {
    id: 'nce2-l55',
    lesson: 55,
    title: 'Not a gold mine',
    titleCn: '并非金矿',
    level: 'NCE2',
  },
  {
    id: 'nce2-l56',
    lesson: 56,
    title: 'Faster than sound!',
    titleCn: '比声音还快！',
    level: 'NCE2',
  },
  {
    id: 'nce2-l57',
    lesson: 57,
    title: 'Can I help you, madam?',
    titleCn: '您要买什么，夫人？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l58',
    lesson: 58,
    title: 'A blessing in disguise?',
    titleCn: '是因祸得福吗？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l59',
    lesson: 59,
    title: 'In or out?',
    titleCn: '进来还是出去？',
    level: 'NCE2',
  },
  {
    id: 'nce2-l60',
    lesson: 60,
    title: 'The future',
    titleCn: '未来',
    level: 'NCE2',
  },
  {
    id: 'nce2-l61',
    lesson: 61,
    title: 'Trouble with the Hubble',
    titleCn: '哈勃望远镜的困境',
    level: 'NCE2',
  },
  {
    id: 'nce2-l62',
    lesson: 62,
    title: 'After the fire',
    titleCn: '大火之后',
    level: 'NCE2',
  },
  {
    id: 'nce2-l63',
    lesson: 63,
    title: 'She was not amused',
    titleCn: '她并不觉得好笑',
    level: 'NCE2',
  },
  {
    id: 'nce2-l64',
    lesson: 64,
    title: 'The Channel Tunnel',
    titleCn: '海峡隧道',
    level: 'NCE2',
  },
  {
    id: 'nce2-l65',
    lesson: 65,
    title: 'Jumbo versus the police',
    titleCn: '小象对警察',
    level: 'NCE2',
  },
  {
    id: 'nce2-l66',
    lesson: 66,
    title: 'Sweet as honey!',
    titleCn: '像蜜一样甜！',
    level: 'NCE2',
  },
  {
    id: 'nce2-l67',
    lesson: 67,
    title: 'Volcanoes',
    titleCn: '火山',
    level: 'NCE2',
  },
  {
    id: 'nce2-l68',
    lesson: 68,
    title: 'Persistent',
    titleCn: '纠缠不休',
    level: 'NCE2',
  },
  {
    id: 'nce2-l69',
    lesson: 69,
    title: 'But not murder!',
    titleCn: '并非谋杀！',
    level: 'NCE2',
  },
  {
    id: 'nce2-l70',
    lesson: 70,
    title: 'Red for danger',
    titleCn: '危险的红色',
    level: 'NCE2',
  },
  {
    id: 'nce2-l71',
    lesson: 71,
    title: 'A famous clock',
    titleCn: '大名鼎鼎的钟',
    level: 'NCE2',
  },
  {
    id: 'nce2-l72',
    lesson: 72,
    title: 'A car called Bluebird',
    titleCn: '蓝鸟汽车',
    level: 'NCE2',
  },
  {
    id: 'nce2-l73',
    lesson: 73,
    title: 'The record-holder',
    titleCn: '纪录保持者',
    level: 'NCE2',
  },
  {
    id: 'nce2-l74',
    lesson: 74,
    title: 'Out of the limelight',
    titleCn: '舞台之外',
    level: 'NCE2',
  },  {
    id: 'nce2-l75',
    lesson: 75,
    title: 'SOS',
    titleCn: '呼救信号',
    level: 'NCE2',
  },  {
    id: 'nce2-l76',
    lesson: 76,
    title: 'April Fools Day',
    titleCn: '愚人节',
    level: 'NCE2',
  },  {
    id: 'nce2-l77',
    lesson: 77,
    title: 'A successful operation',
    titleCn: '一例成功的手术',
    level: 'NCE2',
  },  {
    id: 'nce2-l78',
    lesson: 78,
    title: 'The last one? ？',
    titleCn: '最后一枝吗？',
    level: 'NCE2',
  },  {
    id: 'nce2-l79',
    lesson: 79,
    title: 'By air',
    titleCn: '乘飞机',
    level: 'NCE2',
  },  {
    id: 'nce2-l80',
    lesson: 80,
    title: 'The Crystal Palace',
    titleCn: '水晶宫',
    level: 'NCE2',
  },  {
    id: 'nce2-l81',
    lesson: 81,
    title: 'Escape',
    titleCn: '脱逃',
    level: 'NCE2',
  },  {
    id: 'nce2-l82',
    lesson: 82,
    title: 'Monster or fish? ？',
    titleCn: '是妖还是鱼？',
    level: 'NCE2',
  },  {
    id: 'nce2-l83',
    lesson: 83,
    title: 'After the elections',
    titleCn: '大选之后',
    level: 'NCE2',
  },  {
    id: 'nce2-l84',
    lesson: 84,
    title: 'On strike',
    titleCn: '罢工',
    level: 'NCE2',
  },  {
    id: 'nce2-l85',
    lesson: 85,
    title: 'Never too old to learn',
    titleCn: '活到老学到老',
    level: 'NCE2',
  },  {
    id: 'nce2-l86',
    lesson: 86,
    title: 'Out of control',
    titleCn: '失控',
    level: 'NCE2',
  },  {
    id: 'nce2-l87',
    lesson: 87,
    title: 'A perfect alibi',
    titleCn: '极好的不在犯罪现场的证据',
    level: 'NCE2',
  },  {
    id: 'nce2-l88',
    lesson: 88,
    title: 'Trapped in a mine',
    titleCn: '困在矿井里',
    level: 'NCE2',
  },  {
    id: 'nce2-l89',
    lesson: 89,
    title: 'A slip of the tongue',
    titleCn: '口误',
    level: 'NCE2',
  },  {
    id: 'nce2-l90',
    lesson: 90,
    title: 'Whats for supper ？ ？',
    titleCn: '晚餐吃什么？',
    level: 'NCE2',
  },  {
    id: 'nce2-l91',
    lesson: 91,
    title: 'Three men in a basket',
    titleCn: '三人同篮',
    level: 'NCE2',
  },  {
    id: 'nce2-l92',
    lesson: 92,
    title: 'Asking for trouble',
    titleCn: '自找麻烦',
    level: 'NCE2',
  },  {
    id: 'nce2-l93',
    lesson: 93,
    title: 'A noble gift',
    titleCn: '崇高的礼物',
    level: 'NCE2',
  },  {
    id: 'nce2-l94',
    lesson: 94,
    title: 'Future champions',
    titleCn: '未来的冠军',
    level: 'NCE2',
  },  {
    id: 'nce2-l95',
    lesson: 95,
    title: 'A fantasy',
    titleCn: '纯属虚构',
    level: 'NCE2',
  },  {
    id: 'nce2-l96',
    lesson: 96,
    title: 'The dead return',
    titleCn: '亡灵返乡',
    level: 'NCE2',
  },  {
    id: 'nce3-l1',
    lesson: 1,
    title: 'A Puma at Large',
    titleCn: '逃遁的美洲狮',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l2',
    lesson: 2,
    title: 'Thirteen Equals One',
    titleCn: '十三等于一',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l3',
    lesson: 3,
    title: 'An Unknown Goddess',
    titleCn: '无名女神',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l4',
    lesson: 4,
    title: 'The Double Life of Alfred Bloggs',
    titleCn: '阿尔弗雷德·布洛格斯的双重生活',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l5',
    lesson: 5,
    title: 'The Facts',
    titleCn: '事实',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l6',
    lesson: 6,
    title: 'Smash-and-grab',
    titleCn: '砸橱窗抢劫',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l7',
    lesson: 7,
    title: 'Mutilated ladies',
    titleCn: '残钞鉴别组',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l10',
    lesson: 10,
    title: 'The Loss of the Titanic',
    titleCn: '泰坦尼克号的沉没',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l12',
    lesson: 12,
    title: 'Life on a Desert Island',
    titleCn: '荒岛生活',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l13',
    lesson: 13,
    title: '‘It’s Only Me’',
    titleCn: '是我，别害怕',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l19',
    lesson: 19,
    title: 'A Very Dear Cat',
    titleCn: '一只贵重的宝贝猫',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l21',
    lesson: 21,
    title: 'Daniel Mendoza',
    titleCn: '丹尼尔·门多萨',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l22',
    lesson: 22,
    title: 'By Heart',
    titleCn: '熟记台词',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l24',
    lesson: 24,
    title: 'A Skeleton in the Cupboard',
    titleCn: '家丑',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l26',
    lesson: 26,
    title: 'Wanted: a Large Biscuit Tin',
    titleCn: '征购大饼干筒',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l27',
    lesson: 27,
    title: 'Nothing to Sell and Nothing to Buy',
    titleCn: '不卖也不买',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l29',
    lesson: 29,
    title: 'Funny or Not?',
    titleCn: '是否可笑？',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l30',
    lesson: 30,
    title: 'The Death of a Ghost',
    titleCn: '幽灵之死',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l31',
    lesson: 31,
    title: 'A Lovable Eccentric',
    titleCn: '可爱的怪人',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l32',
    lesson: 32,
    title: 'A Lost Ship',
    titleCn: '一艘沉船',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l33',
    lesson: 33,
    title: 'A Day to Remember',
    titleCn: '难忘的一天',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l37',
    lesson: 37,
    title: 'The Westhaven Express',
    titleCn: '开往威斯特海温的快车',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l38',
    lesson: 38,
    title: 'The First Calender',
    titleCn: '最早的日历',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l40',
    lesson: 40,
    title: 'Who\'s Who',
    level: 'NCE3',
  },
  {
    id: 'nce3-l41',
    lesson: 41,
    title: 'Illusions of Pastoral Peace',
    titleCn: '宁静田园生活的遐想',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l42',
    lesson: 42,
    title: 'Modern Cavemen',
    titleCn: '现代洞穴人',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l50',
    lesson: 50,
    title: 'New Year Resolutions',
    titleCn: '新年的决心',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l54',
    lesson: 54,
    title: 'Instinct or Cleverness?',
    titleCn: '是本能还是机智？',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l59',
    lesson: 59,
    title: 'Possession Amassing and Collecting',
    titleCn: '收藏',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce3-l60',
    lesson: 60,
    title: 'The Importance of Punctuality',
    titleCn: '太早和太晚',
    keyArticle: true,
    level: 'NCE3',
  },
  {
    id: 'nce4-l1',
    lesson: 1,
    tag: 'C1',
    title: 'Finding fossil man',
    titleCn: '发现化石人',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l2',
    lesson: 2,
    tag: 'C2',
    title: 'Spare that spider',
    titleCn: '不要伤害蜘蛛',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l3',
    lesson: 3,
    tag: 'C3',
    title: 'Matterhorn man',
    titleCn: '马特霍恩山区人',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l4',
    lesson: 4,
    tag: 'C4',
    title: 'Seeing hands',
    titleCn: '能看见东西的手',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l6',
    lesson: 6,
    tag: 'C7',
    title: 'The sports spirit',
    titleCn: '体育精神',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l7',
    lesson: 7,
    tag: 'C9',
    title: 'Bats',
    titleCn: '蝙蝠',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l8',
    lesson: 8,
    title: 'Trading Standards',
    titleCn: '贸易标准',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l11',
    lesson: 11,
    tag: 'C14',
    title: 'How to grow old',
    titleCn: '如何安度晚年',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l13',
    lesson: 13,
    title: 'The search for oil',
    titleCn: '探寻石油',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l15',
    lesson: 15,
    tag: 'C18',
    title: 'Secrecy in industry',
    titleCn: '工业中的秘密',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l16',
    lesson: 16,
    tag: 'C20',
    title: 'The modern city',
    titleCn: '现代城市',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l18',
    lesson: 18,
    tag: 'C22',
    title: 'Porpoises',
    titleCn: '海豚',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l21',
    lesson: 21,
    title: 'William S. Hart and the Early "Western" Film',
    titleCn: '威廉·S·哈特与早期的西部片',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l22',
    lesson: 22,
    tag: 'C27',
    title: 'Knowledge and progress',
    titleCn: '知识和进步',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l24',
    lesson: 24,
    tag: 'C29',
    title: 'Beauty',
    titleCn: '美',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l28',
    lesson: 28,
    tag: 'C34',
    title: 'Patients and doctors',
    titleCn: '病人与医生',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l30',
    lesson: 30,
    tag: 'C36',
    title: 'Exploring the sea-floor',
    titleCn: '海底勘探',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l32',
    lesson: 32,
    tag: 'C39',
    title: 'Galileo reborn',
    titleCn: '伽利略的复生',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l33',
    lesson: 33,
    tag: 'C41',
    title: 'Education',
    titleCn: '教育',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l34',
    lesson: 34,
    tag: 'C42',
    title: 'Adolescence',
    titleCn: '青春期',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l37',
    lesson: 37,
    tag: 'C45',
    title: 'The process of ageing',
    titleCn: '衰老过程',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l44',
    lesson: 44,
    tag: 'C55',
    title: 'Patterns of culture',
    titleCn: '文化的模式',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l46',
    lesson: 46,
    tag: 'C58',
    title: 'Hobbies',
    titleCn: '业余爱好',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'nce4-l48',
    lesson: 48,
    title: 'Planning a share portfolio',
    titleCn: '规划股票投资组合',
    keyArticle: true,
    level: 'NCE4',
  },
  {
    id: 'problem-of-youth',
    lesson: 5,
    tag: 'C6',
    title: 'The Problem of Youth',
    titleCn: '青年',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,1,2,0,1,3,2,1,0],
      [1,2,0,1,0,2,4,0,1],
      [0,0,1,3,2,0,1,2,0],
      [2,1,0,0,1,2,3,1,2],
    ],
  },
]

const articleNce2L1: Article = {
  original: {
    paragraphs: [
      "Last week I went to the theatre. I had a very good seat. The play was very interesting. I did not enjoy it. A young man and a young woman were sitting behind me. They were talking loudly. I got very angry. I could not hear the actors. I turned round. I looked at the man and the woman angrily. They did not pay any attention. In the end, I could not bear it. I turned round again. 'I can't hear a word!' I said angrily. ' It's none of your business,' the young man said rudely. ' This is a private conversation!'."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'private', pos: 'adj.', meaning: '私人的', phonetic: '/\'praivit/' },
    { word: 'conversation', pos: 'n.', meaning: '谈话', phonetic: '/kɔnvə\'seiʃən/' },
    { word: 'theatre', pos: 'n.', meaning: '剧场，戏院', phonetic: '/\'θiətə/' },
    { word: 'seat', pos: 'n.', meaning: '座位', phonetic: '/si:t/' },
    { word: 'play', pos: 'n.', meaning: '戏', phonetic: '/plei/' },
    { word: 'loudly', pos: 'adv.', meaning: '大声地', phonetic: '/\'laudli/' },
    { word: 'angry', pos: 'adj.', meaning: '生气的', phonetic: '/\'æŋgri/' },
    { word: 'angrily', pos: 'adv.', meaning: '生气地', phonetic: '/\'æŋgrili/' },
    { word: 'attention', pos: 'n.', meaning: '注意', phonetic: '/ə\'tenʃən/' },
    { word: 'bear', pos: 'v.', meaning: '容忍', phonetic: '/beə/' },
    { word: 'business', pos: 'n.', meaning: '事', phonetic: '/\'biznis/' },
    { word: 'rudely', pos: 'adv.', meaning: '无礼地，粗鲁地', phonetic: '/\'ru:dli/' }
  ],
}
const articleNce2L2: Article = {
  original: {
    paragraphs: [
      "It was Sunday. I never get up early on Sundays. I sometimes stay in bed until lunch time.",
        "Last Sunday I got up very late. I looked out of the window. It was dark outside.",
        "'What a day!' I thought. 'It's raining again.' Just then, the telephone rang. It was my aunt Lucy.' I've just arrived by train,' she said. 'I'm coming to see you.' 'But I'm still having breakfast,' I said.",
        "'What are you doing?' she asked. ' I'm having breakfast,' I repeated.",
        "'Dear me,' she said. 'Do you always get up so late? It's one o'clock!''"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'until', pos: 'prep.', meaning: '直到', phonetic: '/ən\'til, ʌn\'til/' },
    { word: 'outside', pos: 'adv.', meaning: '外面', phonetic: '/aut\'said/' },
    { word: 'ring', pos: 'v.', meaning: '(铃、电话等)响', phonetic: '/riŋ/' },
    { word: 'aunt', pos: 'n.', meaning: '姑，姨，婶，舅妈', phonetic: '/ɑ:nt/' },
    { word: 'repeat', pos: 'v.', meaning: '重复', phonetic: '/ri\'pi:t/' }
  ],
}
const articleNce2L3: Article = {
  original: {
    paragraphs: [
      "Postcards always spoil my holidays. Last summer, I went to Italy. I visited museums and sat in public gardens. A friendly waiter taught me a few words of Italian. 'Then he lent me a book. I read a few lines, but I did not understand a word. Every day I thought about postcards. My holidays passed quickly, but I did not send any cards to my friends. On the last day I made a big decision. I got up early and bought thirty-seven cards. I spent the whole day in my room, but I did not write a single card!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'send', pos: 'v.', meaning: '寄，送', phonetic: '/send/' },
    { word: 'postcard', pos: 'n.', meaning: '明信片', phonetic: '/\'pəustkɑ:d/' },
    { word: 'spoil', pos: 'v.', meaning: '使索然无味，损坏', phonetic: '/spɔil/' },
    { word: 'museum', pos: 'n.', meaning: '博物馆', phonetic: '/mju:\'ziəm/' },
    { word: 'public', pos: 'adj.', meaning: '公共的', phonetic: '/\'pʌblik/' },
    { word: 'friendly', pos: 'adj.', meaning: '友好的', phonetic: '/\'frendli/' },
    { word: 'waiter', pos: 'n.', meaning: '服务员，招待员', phonetic: '/\'weitə/' },
    { word: 'lend', pos: 'v.', meaning: '借给', phonetic: '/lend/' },
    { word: 'decision', pos: 'n.', meaning: '决定', phonetic: '/di\'siʒən/' },
    { word: 'whole', pos: 'adj.', meaning: '整个的', phonetic: '/həul/' },
    { word: 'single', pos: 'adj.', meaning: '唯一的，单一的', phonetic: '/\'siŋgəl/' }
  ],
}
const articleNce2L4: Article = {
  original: {
    paragraphs: [
      "I have just received a letter from my brother, Tim. He is in Australia. He has been there for six months. Tim is an engineer. He is working for a big firm and he has already visited a great number of different places in Australia. He has just bought an Australian car and has gone to Alice Springs, a small town in the centre of Australia. He will soon visit Darwin. From there, he will fly to Perth. My brother has never been abroad before, so he is finding this trip very exciting."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'exciting', pos: 'adj.', meaning: '令人兴奋的', phonetic: '/ik\'saitiŋ/' },
    { word: 'receive', pos: 'v.', meaning: '接受，收到', phonetic: '/ri\'si:v/' },
    { word: 'firm', pos: 'n.', meaning: '商行，公司', phonetic: '/fə:m/' },
    { word: 'different', pos: 'adj.', meaning: '不同的', phonetic: '/\'difrənt/' },
    { word: 'centre', pos: 'n.', meaning: '中心', phonetic: '/\'sentə/' },
    { word: 'abroad', pos: 'adv.', meaning: '在国外', phonetic: '/ə\'brɔ:d/' }
  ],
}
const articleNce2L5: Article = {
  original: {
    paragraphs: [
      "Mr James Scott has a garage in Silbury and now he has just bought another garage in Pinhurst. Pinhurstis only five miles from Silbury, but Mr Scott cannot get a telephone for his new garage, so he has just bought twelve pigeons. Yesterday, a pigeon carried the first message from Pinhurst to Silbury. The bird covered the distance in three minutes. Up to now, Mr Scott has sent a great many requests for spare parts and other urgent messages from one garage to the other. In this way, he has begun his own private telephone service."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'pigeon', pos: 'n.', meaning: '鸽子', phonetic: '/pidʒin/' },
    { word: 'message', pos: 'n.', meaning: '信息', phonetic: '/\'mesidʒ/' },
    { word: 'over', pos: 'v.', meaning: '越过', phonetic: '/\'əuvə/' },
    { word: 'distance', pos: 'n.', meaning: '距离', phonetic: '/\'distəns/' },
    { word: 'request', pos: 'n.', meaning: '要求，请求', phonetic: '/ri\'kwest/' },
    { word: 'service', pos: 'n.', meaning: '业务，服务', phonetic: '/\'sə:vis/' }
  ],
}
const articleNce2L6: Article = {
  original: {
    paragraphs: [
      "I have just moved to a house in Bridge Street. Yesterday a beggar knocked at my door. He asked me for a meal and a glass of beer. In return for this, the beggar stood on his head and sang songs. I gave him a meal. He ate the food and drank the beer. Then he put a piece of cheese in his pocket and went away. Later a neighbour told me about him. Everybody knows him. His name is Percy Buttons. He calls at every house in the street once a month and always asks for a meal and a glass of beer."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'beggar', pos: 'n.', meaning: '乞丐', phonetic: '/\'begə/' },
    { word: 'food', pos: 'n.', meaning: '食物', phonetic: '/fu:d/' },
    { word: 'pocket', pos: 'n.', meaning: '衣服口袋', phonetic: '/\'pɔkit/' },
    { word: 'call', pos: 'v.', meaning: '拜访，光顾', phonetic: '/kɔ:l/' }
  ],
}
const articleNce2L7: Article = {
  original: {
    paragraphs: [
      "The plane was late and detectives were waiting at the airport all morning. They were expecting a valuable parcel of diamond from South Africa. A few hours earlier, someone had told the police that thieves would try to steal the diamonds. When the plane arrived, some of the detectives were waiting inside the main building while others were waiting on the airfield. Two men took the parcel off the plane and carried it into the Customs House. While two detectives were keeping guard at the door, two others opened the parcel. To their surprise, the precious parcel was full of stones and sand!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'detective', pos: 'n.', meaning: '侦探', phonetic: '/di\'tektiv/' },
    { word: 'airport', pos: 'n.', meaning: '机场', phonetic: '/\'eəpɔ:t/' },
    { word: 'expect', pos: 'v.', meaning: '期待，等待', phonetic: '/ik\'spekt/' },
    { word: 'valuable', pos: 'adj.', meaning: '贵重的', phonetic: '/\'væljuəbəl, -jubəl/' },
    { word: 'parcel', pos: 'n.', meaning: '包裹', phonetic: '/\'pɑ:sl/' },
    { word: 'diamond', pos: 'n.', meaning: '钻石', phonetic: '/\'daiəmənd/' },
    { word: 'steal', pos: 'v.', meaning: '偷', phonetic: '/sti:l/' },
    { word: 'main', pos: 'adj.', meaning: '主要的', phonetic: '/mein/' },
    { word: 'airfield', pos: 'n.', meaning: '飞机起落的场地', phonetic: '/\'eəfi:ld/' },
    { word: 'guard', pos: 'n.', meaning: '警戒，守卫', phonetic: '/gɑ:d/' },
    { word: 'precious', pos: 'adj.', meaning: '珍贵的', phonetic: '/\'preʃəs/' },
    { word: 'stone', pos: 'n.', meaning: '石子', phonetic: '/stəun/' },
    { word: 'sand', pos: 'n.', meaning: '沙子', phonetic: '/sænd/' }
  ],
}
const articleNce2L8: Article = {
  original: {
    paragraphs: [
      "Joe Sanders has the most beautiful garden in our town. Nearly everybody enters for 'The Nicest Garden Competition' each year, but Joe wins every time. Bill Frith's garden is larger than Joe's. Bill works harder than Joe and grows more flowers and vegetables, but Joe's garden is more interesting. He has made neat paths and has built a wooden bridge over a pool. I like gardens too, but I do not like hard work. Every year I enter for the garden competition too, and I always win a little prize for the worst garden in the town!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'competition', pos: 'n.', meaning: '比赛,竞赛', phonetic: '/ˌkɔmpi\'tiʃən/' },
    { word: 'neat', pos: 'adj.', meaning: '整齐的，整洁的', phonetic: '/ni:t/' },
    { word: 'path', pos: 'n.', meaning: '小路，小径', phonetic: '/pɑ:θ/' },
    { word: 'wooden', pos: 'adj.', meaning: '木头的', phonetic: '/\'wudn/' },
    { word: 'pool', pos: 'n.', meaning: '水池', phonetic: '/pu:l/' }
  ],
}
const articleNce2L9: Article = {
  original: {
    paragraphs: [
      "On Wednesday evening, we went to the Town Hall. It was the last day of the year and a large crowd of people had gathered under the Town Hall clock. It would strike twelve in twenty minutes' time. Fifteen minutes passed and then, at five to twelve, the clock stopped. The big minute hand did not move. We waited and waited, but nothing happened. Suddenly someone shouted, 'It's two minutes past twelve! The clock has stopped!' I looked at my watch. It was true. The big clock refused to welcome the New Year. At that moment everybody began to laugh and sing."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'welcome', pos: 'n.', meaning: '欢迎', phonetic: '/\'welkəm/' },
    { word: 'welcome', pos: 'v.', meaning: '欢迎', phonetic: '/\'welkəm/' },
    { word: 'crowd', pos: 'n.', meaning: '人群', phonetic: '/kraud/' },
    { word: 'gather', pos: 'v.', meaning: '聚集', phonetic: '/\'gæeə/' },
    { word: 'hand', pos: 'n.', meaning: '(表或机器的)指针', phonetic: '/hænd/' },
    { word: 'shout', pos: 'v.', meaning: '喊叫', phonetic: '/ʃaut/' },
    { word: 'refuse', pos: 'v.', meaning: '拒绝', phonetic: '/ri\'fju:z, ri\'fju:s/' },
    { word: 'laugh', pos: 'v.', meaning: '笑', phonetic: '/lɑ:f/' }
  ],
}
const articleNce2L10: Article = {
  original: {
    paragraphs: [
      "We have an old musical instrument. It is called a clavichord. It was made in Germany in 1681. Our clavichord is kept in the living-room. It has belong to our family for a long time. The instrument was bought by my grandfather many years ago. Recently it was damaged by a visitor. She tried to play jazz on it! She struck the keys too hard and two of the strings were broken. My father was shocked. Now we are not allowed to touch it. It is being repaired by a friend of my father's."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'jazz', pos: 'n.', meaning: '爵士音乐', phonetic: '/dʒæz/' },
    { word: 'musical', pos: 'adj.', meaning: '音乐的', phonetic: '/\'mju:zikəl/' },
    { word: 'instrument', pos: 'n.', meaning: '乐器', phonetic: '/\'instrumənt/' },
    { word: 'clavichord', pos: 'n.', meaning: '古钢琴', phonetic: '/\'klævikɔ:d/' },
    { word: 'recently', pos: 'adv.', meaning: '最近', phonetic: '/\'ri:səntli/' },
    { word: 'damage', pos: 'v.', meaning: '损坏', phonetic: '/\'dæmidʒ/' },
    { word: 'key', pos: 'n.', meaning: '琴键', phonetic: '/ki:/' },
    { word: 'string', pos: 'n.', meaning: '(乐器的)弦', phonetic: '/striŋ/' },
    { word: 'shock', pos: 'v.', meaning: '使不悦或生气，震惊', phonetic: '/ʃɔk, ʃɑk/' },
    { word: 'allow', pos: 'v.', meaning: '允许，让', phonetic: '/ə\'lau/' },
    { word: 'touch', pos: 'v.', meaning: '触摸', phonetic: '/tʌtʃ/' }
  ],
}
const articleNce2L11: Article = {
  original: {
    paragraphs: [
      "I was having dinner at a restaurant when Harry Steele came in. Harry worked in a lawyer's office years ago, but he is now working at a bank. He gets a good salary, but he always borrows money from his friends and never pays it back. Harry saw me and came and sat at the same table. He has never borrowed money from me. While he was eating, I asked him to lend me £2. To my surprise, he gave me the money immediately. 'I have never borrowed any money from you,' Harry said, 'so now you can pay for my dinner!'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'turn', pos: 'n.', meaning: '行为，举止', phonetic: '/tə:n/' },
    { word: 'deserve', pos: 'v.', meaning: '应得到，值得', phonetic: '/di\'zə:v/' },
    { word: 'lawyer', pos: 'n.', meaning: '律师', phonetic: '/\'lɔ:jə/' },
    { word: 'bank', pos: 'n.', meaning: '银行', phonetic: '/bæŋk/' },
    { word: 'salary', pos: 'n.', meaning: '工资', phonetic: '/\'sæləri/' },
    { word: 'immediately', pos: 'adv.', meaning: '立刻', phonetic: '/i\'mi:diətli/' }
  ],
}
const articleNce2L12: Article = {
  original: {
    paragraphs: [
      "Our neighbor, Captain Charles Alison, will sail from Portsmouth tomorrow. We shall meet him at the harbour early in the morning. He will be in his small boat, Topsail.Tapsail is a famous little boat. It has sailed across the Atlantic many times. Captain Alison will set out at eight o'clock so we shall have plenty of time. We shall see his boat and then we shall say good-bye to him. He will be away for two months. We are very proud of him. He will take part in an important race across the Atlantic."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'luck', pos: 'n.', meaning: '运气，幸运', phonetic: '/lʌk/' },
    { word: 'captain', pos: 'n.', meaning: '船长', phonetic: '/\'kæptin/' },
    { word: 'sail', pos: 'v.', meaning: '航行', phonetic: '/seil/' },
    { word: 'harbour', pos: 'n.', meaning: '港口', phonetic: '/\'ha:bə/' },
    { word: 'proud', pos: 'adj.', meaning: '自豪', phonetic: '/praud/' },
    { word: 'important', pos: 'adj.', meaning: '重要的', phonetic: '/im\'pɔ:tənt/' }
  ],
}
const articleNce2L13: Article = {
  original: {
    paragraphs: [
      "The Greenwood Boys are a group of popular singers. At present, they are visiting all parts of the country. They will be arriving here tomorrow. They will be coming by train and most of the young people in the town will be meeting them at the station. Tomorrow evening they will be singing at the Workers' Club. The Greenwood Boys will be staying for five days. During this time, they will give five performances. As usual, the police will have a difficult time. They will be trying to keep order. It is always the same on these occasions."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'group', pos: 'n.', meaning: '小组，团体', phonetic: '/gru:p/' },
    { word: 'pop singer', pos: 'n.', meaning: '流行歌手', phonetic: '//' },
    { word: 'club', pos: 'n.', meaning: '俱乐部', phonetic: '/klʌb/' },
    { word: 'performance', pos: 'n.', meaning: '演出', phonetic: '/pə\'fɔ:məns/' },
    { word: 'occasion', pos: 'n.', meaning: '场合', phonetic: '/ə\'keiʒən/' }
  ],
}
const articleNce2L14: Article = {
  original: {
    paragraphs: [
      "I had an amusing experience last year. After I had left a small village in the south of France, I drove on to the next town. On the way, a young man waved to me. I stopped and he asked me for a lift. As soon as he had got into the car, I said good morning to him in French and he replied in the same language. Apart from a few words, I do not know any French at all. Neither of us spoke during the journey. I had nearly reached the town, when the young man suddenly said, very slowly, 'Do you speak English?' As I soon learnt, he was English himself!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'amusing', pos: 'adj.', meaning: '好笑的，有趣的', phonetic: '/ə\'mju:ziŋ/' },
    { word: 'experience', pos: 'n.', meaning: '经历', phonetic: '/ik\'spiəriəns/' },
    { word: 'wave', pos: 'v.', meaning: '招手', phonetic: '/weiv/' },
    { word: 'lift', pos: 'n.', meaning: '搭便车', phonetic: '/lift/' },
    { word: 'reply', pos: 'v.', meaning: '回答', phonetic: '/ri\'plai/' },
    { word: 'language', pos: 'n.', meaning: '语言', phonetic: '/\'læŋgwidʒ/' },
    { word: 'journey', pos: 'n.', meaning: '旅行', phonetic: '/\'dʒə:ni/' }
  ],
}
const articleNce2L15: Article = {
  original: {
    paragraphs: [
      "The secretary told me that Mr. Harmsworth would see me. I felt very nervous when. I went into his office. He did not look up from his desk when I entered. After I had sat down, he said that business was very bad. He told me that the firm could not afford to pay such large salaries. Twenty people had already left. I knew that my turn had come. 'Mr. Harmsworth,' I said in a weak voice. 'Don't interrupt,' he Said. Then he smiled and told me I would receive an extra £100 a year!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'secretary', pos: 'n.', meaning: '秘书', phonetic: '/\'sekrətəri, -teri/' },
    { word: 'nervous', pos: 'adj.', meaning: '精神紧张的', phonetic: '/\'nə:vəs/' },
    { word: 'afford', pos: 'v.', meaning: '负担得起', phonetic: '/ə\'fɔ:d/' },
    { word: 'weak', pos: 'adj.', meaning: '弱的', phonetic: '/wi:k/' },
    { word: 'interrupt', pos: 'v.', meaning: '插话，打断', phonetic: '/ˌintə\'rʌpt/' }
  ],
}
const articleNce2L16: Article = {
  original: {
    paragraphs: [
      "If you park your car in the wrong place, a traffic policeman will soon find it. You will be very lucky if he lets you go without a ticket. However, this does not always happen. Traffic police are sometimes very polite. During a holiday in Sweden, I found this note on my car:' Sir, we welcome you to our city. This is a \"No Parking\" area. You will enjoy your stay here if you pay attention to our street signs. This note is only a reminder.' If you receive a request like this, you cannot fail to obey it!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'park', pos: 'v.', meaning: '停放(汽车)', phonetic: '/pɑ:k/' },
    { word: 'traffic', pos: 'n.', meaning: '交通', phonetic: '/\'træfik/' },
    { word: 'ticket', pos: 'n.', meaning: '交通法规罚款单', phonetic: '/\'tikit/' },
    { word: 'note', pos: 'n.', meaning: '便条', phonetic: '/nəut/' },
    { word: 'area', pos: 'n.', meaning: '地点', phonetic: '/\'eəriə/' },
    { word: 'sign', pos: 'n.', meaning: '指示牌', phonetic: '/sain/' },
    { word: 'reminder', pos: 'n.', meaning: '指示', phonetic: '/ri\'maində/' },
    { word: 'fail', pos: 'v.', meaning: '无视，忘记', phonetic: '/feil/' },
    { word: 'obey', pos: 'v.', meaning: '服从', phonetic: '/ə\'bei/' }
  ],
}
const articleNce2L17: Article = {
  original: {
    paragraphs: [
      "My aunt Jennifer is an actress. She must be at least thirty-five years old. In spite of this, she often appears on the stage as a young girl. Jennifer will have to take part in a new play soon. This time, she will be a girl of seventeen. In the play, she must appear in a bright red dress and long black stockings. Last year in another play, she had to wear short socks and a bright, orange-coloured dress. If anyone ever asked her how old she is, she always answers, 'My dear, it must be terrible to be grown up!'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'appear', pos: 'v.', meaning: '登场，扮演', phonetic: '/ə\'piə/' },
    { word: 'stage', pos: 'n.', meaning: '舞台', phonetic: '/steidʒ/' },
    { word: 'bright', pos: 'adj.', meaning: '鲜艳的', phonetic: '/brait/' },
    { word: 'stocking', pos: 'n.', meaning: '(女用)长筒袜', phonetic: '/\'stɔkiŋ/' },
    { word: 'sock', pos: 'n.', meaning: '短袜', phonetic: '/sɔk/' }
  ],
}
const articleNce2L18: Article = {
  original: {
    paragraphs: [
      "After I had had lunch at a village inn, I looked for my bag. I had left it on a chair beside the door and now it wasn't there! As I was looking for it, the inn-keeper came in. 'Did you have a good meal?' he asked. 'Yes, thank you,' I answered, 'but I can't pay the bill. I haven't got my bag.' The inn-keeper smiled and immediately went out. In a few minutes he returned with my bag and gave it back to me. 'I'm very sorry,' he said ' My dog had taken it into the garden. He often does this.'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'pub', pos: 'n.', meaning: '小酒店', phonetic: '/pʌb/' },
    { word: 'landlord', pos: 'n.', meaning: '店主', phonetic: '/\'lændlɔ:d/' },
    { word: 'bill', pos: 'n.', meaning: '帐单', phonetic: '/bil/' }
  ],
}
const articleNce2L19: Article = {
  original: {
    paragraphs: [
      "'I hurried to the ticket-office. 'May I have two tickets please?' I asked.",
        "'Certainly, 'the girl said, 'but they are for next Wednesday's performance."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'hurry', pos: 'v.', meaning: '匆忙', phonetic: '/\'hʌri/' },
    { word: 'ticket office', pos: 'n.', meaning: '售票处', phonetic: '//' },
    { word: 'pity', pos: 'n.', meaning: '令人遗憾的事', phonetic: '/\'piti/' },
    { word: 'exclaim', pos: 'v.', meaning: '大声说', phonetic: '/ik\'skleim/' },
    { word: 'return', pos: 'v.', meaning: '退回', phonetic: '/ri\'tə:n/' },
    { word: 'sadly', pos: 'adv.', meaning: '悲哀地，丧气地', phonetic: '/\'sædli/' }
  ],
}
const articleNce2L20: Article = {
  original: {
    paragraphs: [
      "Fishing is my favourite sport. I often fish for hours without catching anything. But this does not worry me. Some fishermen are unlucky. Instead of catching fish, they catch old boots and rubbish. I am even less lucky. I never catch anything-not even old boots. After having spent whole mornings on the river, I always go home with an empty bag. 'You must give up fishing!' my friends say.' It's a waste of time.' But they don't realize one important thing. I'm not really interested in fishing. I am only interested in sitting in a boat and doing nothing at all!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'catch', pos: 'v.', meaning: '抓到', phonetic: '/kætʃ/' },
    { word: 'fisherman', pos: 'n.', meaning: '钓鱼人，渔民', phonetic: '/\'fiʃəmən/' },
    { word: 'boot', pos: 'n.', meaning: '靴子', phonetic: '/bu:t/' },
    { word: 'waste', pos: 'n.', meaning: '浪费', phonetic: '/weist/' },
    { word: 'realize', pos: 'v.', meaning: '意识到', phonetic: '/\'riəlaiz/' }
  ],
}
const articleNce2L21: Article = {
  original: {
    paragraphs: [
      "Aeroplanes are slowly driving me mad. I live near an airport and passing planes can be heard night and day. The airport was built during the war, but for some reason it could not be used then. Last year, however, it came into use. Over a hundred people must have been driven away from their homes by the noise. I am one of the few people left. Sometimes I think this house will be knocked down by a passing plane. I have been offered a large sum of money to go away, but I am determined to stay here. Everybody says I must be mad and they are probably right."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'mad', pos: 'adj.', meaning: '发疯', phonetic: '/mæd/' },
    { word: 'reason', pos: 'n.', meaning: '原因', phonetic: '/\'ri:zən/' },
    { word: 'sum', pos: 'n.', meaning: '量', phonetic: '/sʌm/' },
    { word: 'determined', pos: 'adj.', meaning: '坚定的，下决心的', phonetic: '/di\'tə:mind/' }
  ],
}
const articleNce2L22: Article = {
  original: {
    paragraphs: [
      "My daughter, Jane, never dreamed of [receiving a letter]from a girl of her own age in Holland. Last year, we were travelling across the Channel and Jane put a piece of paper with her name and address on it into a bottle. She threw the bottle into the sea. She never thought of it again, but ten months later, she received a letter from a girl in Holland. Both girls write to each other regularly now. However, they have decided to use the post-office. Letters will cost a litt1e more, but they will certainly travel faster."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'dream', pos: 'v.', meaning: '做梦，梦想', phonetic: '/dri:m/' },
    { word: 'age', pos: 'n.', meaning: '年龄', phonetic: '/eidʒ/' },
    { word: 'channel', pos: 'n.', meaning: '海峡', phonetic: '/\'tʃænəl/' },
    { word: 'throw', pos: 'v.', meaning: '扔，抛', phonetic: '/θrəu/' }
  ],
}
const articleNce2L23: Article = {
  original: {
    paragraphs: [
      "I had received a letter from my sister yesterday. She lives in Nigeria. In her letter, she said that she would come to England next year. If she comes, she will get a surprise. We are now living in a beautiful new house in the country. Work on it had begun [before my sister left]. The house was completed five months ago. In my letter, I told her that she could stay with us. The house has many large rooms and there is a lovely garden. It is a very modern house, so it looks strange to some people. It must be the only modern house in the district."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'complete', pos: 'v.', meaning: '完成', phonetic: '/kəm\'pli:t/' },
    { word: 'modern', pos: 'adj.', meaning: '新式的，与以往不同的', phonetic: '/\'mɔdən/' },
    { word: 'strange', pos: 'adj.', meaning: '奇怪的', phonetic: '/streindʒ/' },
    { word: 'district', pos: 'n.', meaning: '地区', phonetic: '/\'distrikt/' }
  ],
}
const articleNce2L24: Article = {
  original: {
    paragraphs: [
      "I entered the hotel manager's office and sat down. I had just lost £50 and I felt very upset.' I left the money in my room,' I said, 'and it's not there now.' The manager was sympathetic, but he could do nothing. 'Everyone's losing money these days,' he said. He started to complain about this wicked world but was interrupted by a knock at the door. A girl came in and put an envelope on his desk. It contained £50. 'I found this outside this gentleman's room' she said. 'Well,' I said to the manager, 'there is still some honesty in this world!'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'manager', pos: 'n.', meaning: '经理', phonetic: '/\'mænidʒə/' },
    { word: 'upset', pos: 'adj.', meaning: '不安', phonetic: '/ʌp\'set/' },
    { word: 'sympathetic', pos: 'adj.', meaning: '表示同情的', phonetic: '/ˌsimpə\'θetik/' },
    { word: 'complain', pos: 'v.', meaning: '抱怨', phonetic: '/kəm\'plein/' },
    { word: 'wicked', pos: 'adj.', meaning: '很坏的，邪恶的', phonetic: '/\'wikid/' },
    { word: 'contain', pos: 'v.', meaning: '包含，内装', phonetic: '/kən\'tein/' },
    { word: 'honesty', pos: 'n.', meaning: '诚实', phonetic: '/\'ɔnisti/' }
  ],
}
const articleNce2L25: Article = {
  original: {
    paragraphs: [
      "I arrived in London at last. The railway station was big, black and dark. I did not know the way to my hotel, so I asked a porter. I not only spoke English very carefully, but very clearly as well. The porter, however, could not understand me; I repeated my question several times and at last he understood. He answered me, but he spoke neither slowly nor clearly. 'I am a foreigner,' I said. Then he spoke slowly, but I could not understand him. My teacher never spoke English [like that]! The porter and I looked at each other and smiled. Then he said something and I understood it. 'You'll soon learn English!' he said. I wonder. In England, each man speaks a different language. The English understand each other, but I don't understand them! Do they speak English?"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'railway', pos: 'n.', meaning: '铁路', phonetic: '/\'reilwei/' },
    { word: 'porter', pos: 'n.', meaning: '搬运工', phonetic: '/\'pɔ:tə/' },
    { word: 'several', pos: 'det.', meaning: '几个', phonetic: '/\'sevərəl/' },
    { word: 'foreigner', pos: 'n.', meaning: '外国人', phonetic: '/\'fɔrinə/' },
    { word: 'wonder', pos: 'v.', meaning: '感到奇怪', phonetic: '/\'wʌndə/' }
  ],
}
const articleNce2L26: Article = {
  original: {
    paragraphs: [
      "I am an art student and I paint a lot of pictures. Many people pretend that they understand modern art. They always tell you [what a picture is 'about']. Of course, many pictures arc not 'about' anything. They are just pretty patterns. We like them in the same way [that we like pretty curtain material]. I think that young children often appreciate modern pictures better than anyone else. They notice more. My sister is only seven, but she always tells me [whether my pictures are good or not]. She came into my room yesterday. ' What are you doing?' she asked. ' I'm hanging this picture on the wall,' I answered. 'It's a new one. Do you like it?' She looked at it critically for a moment.' It's all right,' she said, 'but isn't it upside-down?' I looked at it again. She was right! It was!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'art', pos: 'n.', meaning: '艺术', phonetic: '/ɑ:t/' },
    { word: 'critic', pos: 'n.', meaning: '评论家', phonetic: '/\'kritik/' },
    { word: 'paint', pos: 'v.', meaning: '画', phonetic: '/peint/' },
    { word: 'pretend', pos: 'v.', meaning: '假装', phonetic: '/pri\'tend/' },
    { word: 'pattern', pos: 'n.', meaning: '图案', phonetic: '/\'pætn/' },
    { word: 'curtain', pos: 'n.', meaning: '窗帘，幕布', phonetic: '/\'kə:tən/' },
    { word: 'material', pos: 'n.', meaning: '材料', phonetic: '/mə\'tiəriəl/' },
    { word: 'appreciate', pos: 'v.', meaning: '鉴赏', phonetic: '/ə\'pri:ʃieit/' },
    { word: 'notice', pos: 'v.', meaning: '注意到', phonetic: '/\'nəutis/' },
    { word: 'whether', pos: 'conj.', meaning: '是否', phonetic: '/\'weeə/' },
    { word: 'hang', pos: 'v.', meaning: '悬挂，吊', phonetic: '/hæŋ/' },
    { word: 'critically', pos: 'adv.', meaning: '批评地', phonetic: '/\'kritikəli/' },
    { word: 'upside', pos: 'n.', meaning: '上部，上侧，上面', phonetic: '/\'ʌpsaid/' },
    { word: 'upside-down', pos: 'adj.', meaning: '上下颠倒的', phonetic: '/\'ʌpsaid dd/' }
  ],
}
const articleNce2L27: Article = {
  original: {
    paragraphs: [
      "Late in the afternoon, the boys put up their tent in the middle of a field. As soon as this was done, they cooked a meal over an open fire. They were all hungry and the food smelt good. After a wonderful meal, they told stories and sang songs by the camp fire. But some time later it began to rain. The boys felt tired so they pet out the fire and crept into their tent. Their sleeping-bags were warm and comfortable, so they all slept soundly. In the middle of the night, two boys woke up and began shouting. The tent was full of water! They all leapt out of their sleeping-bags and hurried outside. It was raining heavily and they found that a stream had formed in the field. The stream wound its way across the field and then flowed right under their tent!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'tent', pos: 'n.', meaning: '帐篷', phonetic: '/tent/' },
    { word: 'field', pos: 'n.', meaning: '田地，田野', phonetic: '/fi:ld/' },
    { word: 'smell', pos: 'v.', meaning: '闻起来', phonetic: '/smel/' },
    { word: 'wonderful', pos: 'adj.', meaning: '极好的', phonetic: '/\'wʌndəful/' },
    { word: 'campfire', pos: 'n.', meaning: '营火，篝火', phonetic: '/\'kæmpˌfaiə/' },
    { word: 'creep', pos: 'v.', meaning: '爬行', phonetic: '/kri:p/' },
    { word: 'sleeping bag', pos: 'n.', meaning: '睡袋', phonetic: '/\'sli:piŋ/' },
    { word: 'comfortable', pos: 'adj.', meaning: '舒适的，安逸的', phonetic: '/\'kʌmfətəbəl/' },
    { word: 'soundly', pos: 'adv.', meaning: '香甜地', phonetic: '/\'sʌundli/' },
    { word: 'leap', pos: 'v.', meaning: '跳跃，跳起', phonetic: '/li:p/' },
    { word: 'heavily', pos: 'adv.', meaning: '大量地', phonetic: '/\'hevili/' },
    { word: 'stream', pos: 'n.', meaning: '小溪', phonetic: '/stri:m/' },
    { word: 'form', pos: 'v.', meaning: '形成', phonetic: '/fɔ:m/' },
    { word: 'wind', pos: 'v.', meaning: '蜿蜒', phonetic: '/wind, waind/' },
    { word: 'right', pos: 'adv.', meaning: '正好', phonetic: '/rait/' }
  ],
}
const articleNce2L28: Article = {
  original: {
    paragraphs: [
      "Jasper White is one of those rare people who believes in ancient myths. He has just bought a new house in the city, but ever since he moved in, he has had trouble with motorists. when he returns home at night, he always finds that someone has parked a car outside his gate. Because of this, he has not been able to get his own car into his garage even once. Jasper has put up' No Parking' signs outside his gate, but these have not had any effect. Now he has put an ugly stone head over the gate. It is one of the ugliest faces I have ever seen. I asked him what it was and he told me that it was Medusa, the Gorgon. Jasper hopes that she will turn motorists to stone. But none of them has been turned to stone yet!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'rare', pos: 'adj.', meaning: '罕见的', phonetic: '/reə/' },
    { word: 'ancient', pos: 'adj.', meaning: '古代的，古老的', phonetic: '/\'einʃənt/' },
    { word: 'myth', pos: 'n.', meaning: '神话故事', phonetic: '/miθ/' },
    { word: 'trouble', pos: 'n.', meaning: '麻烦', phonetic: '/\'trʌbəl/' },
    { word: 'effect', pos: 'n.', meaning: '结果，效果', phonetic: '/i\'fekt/' },
    { word: 'Medusa', pos: 'n.', meaning: '美杜莎(古希腊神话中3位蛇发女怪之一)', phonetic: '/mi\'dju:zə/' },
    { word: 'Gorgon', pos: 'n.', meaning: '(古希腊神话中的)3位蛇发女怪之一', phonetic: '/\'gɔ:gən/' }
  ],
}
const articleNce2L29: Article = {
  original: {
    paragraphs: [
      "Captain Ben Fawcett has bought an unusual taxi and has begun a new service. The 'taxi' is a small Swiss aeroplane called a 'Pilatus Porter'. This wonderful plane can carry seven passengers. The most surprising thing about it, however, is that it can land anywhere: on snow, water, or even on a ploughed field. Captain Fawcett's first passenger was a doctor who flew from Birmingham to a lonely village in the Welsh mountains. Since then, Captain Fawcett has flown passengers to many unusual places. Once he landed on the roof of a block of flats and on another occasion, he landed in a deserted car park. Captain Fawcett has just refused a strange request from a businessman. The man wanted to fly to Rockall, a lonely island in the Atlantic Ocean, but Captain Fawcett did not take him because the trip was too dangerous."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'taxi', pos: 'n.', meaning: '出租汽车', phonetic: '/\'tæksi/' },
    { word: 'Pilatus Porter', pos: 'n.', meaning: '皮勒特斯·波特(飞机机名)', phonetic: '//' },
    { word: 'land', pos: 'v.', meaning: '着陆', phonetic: '/lænd/' },
    { word: 'plough', pos: 'v.', meaning: '耕地', phonetic: '/plau/' },
    { word: 'lonely', pos: 'adj.', meaning: '偏僻的，人迹罕至的', phonetic: '/\'ləunli/' },
    { word: 'Welsh', pos: 'adj.', meaning: '威尔士的', phonetic: '/welʃ/' },
    { word: 'roof', pos: 'n.', meaning: '楼顶', phonetic: '/ru:f/' },
    { word: 'block', pos: 'n.', meaning: '一座大楼', phonetic: '/blɔk/' },
    { word: 'flat', pos: 'n.', meaning: '公寓房', phonetic: '/flæt/' },
    { word: 'desert', pos: 'v.', meaning: '废弃', phonetic: '/\'dezət/' }
  ],
}
const articleNce2L30: Article = {
  original: {
    paragraphs: [
      "The Wayle is a small river that cuts across the park near my home. I like sitting by the Wayle on fine afternoons. It was warm last Sunday, so I went and sat on the river bank as usual. Some children were playing games on the bank and there were some people rowing on the river. Suddenly, one of the children kicked a ball very hard and it went towards a passing boat. Some people on the bank called out to the man in the boat, but he did not hear them. The ball struck him so hard that he nearly fell into the water. I turned to look at the children, but there weren't any in sight: they had all run away! The man laughed when he realized what had happened. He called out to the children and threw the ball back to the bank."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'polo', pos: 'n.', meaning: '水球', phonetic: '/\'pəuləu/' },
    { word: 'cut', pos: 'v.', meaning: '穿过', phonetic: '/kʌt/' },
    { word: 'row', pos: 'v.', meaning: '划(船)', phonetic: '/rəu, rou/' },
    { word: 'kick', pos: 'v.', meaning: '踢', phonetic: '/kik/' },
    { word: 'towards', pos: 'prep.', meaning: '朝，向', phonetic: '/tə\'wɔ:dz/' },
    { word: 'nearly', pos: 'adv.', meaning: '几乎', phonetic: '/\'niəli/' },
    { word: 'sight', pos: 'n.', meaning: '眼界，视域', phonetic: '/sait/' }
  ],
}
const articleNce2L31: Article = {
  original: {
    paragraphs: [
      "Yesterday afternoon Frank Hawkins was telling me about his experiences as a young man. Frank is now the head of a very large business company, but as a boy he used to work in a small shop. It was his job to repair bicycles and at that time he used to work fourteen hours a day. He saved money for years and in 1938 he bought a small work-shop of his own. During the war Frank used to make spare parts for aeroplanes. At that time he had two helpers. By the end of the war, the small work-shop had become a large factory which employed seven hundred and twenty-eight people. Frank smiled when he remembered his hard early years and the long road to success. He was still smiling when the door opened and his wife came in. She wanted him to repair their son's bicycle!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'retire', pos: 'v.', meaning: '退休', phonetic: '/ri\'taiə/' },
    { word: 'company', pos: 'n.', meaning: '公司', phonetic: '/\'kʌmpəni/' },
    { word: 'bicycle', pos: 'n.', meaning: '自行车', phonetic: '/\'baisik(ə)l/' },
    { word: 'save', pos: 'v.', meaning: '积蓄', phonetic: '/seiv/' },
    { word: 'workshop', pos: 'n.', meaning: '车间', phonetic: '/\'wə:kʃɔp/' },
    { word: 'helper', pos: 'n.', meaning: '帮手，助手', phonetic: '/\'helpə/' },
    { word: 'employ', pos: 'v.', meaning: '雇佣', phonetic: '/im\'plɔi/' },
    { word: 'grandson', pos: 'n.', meaning: '孙子', phonetic: '/\'grænsʌn/' }
  ],
}
const articleNce2L32: Article = {
  original: {
    paragraphs: [
      "People are not so honest as they once were (honest). The temptation [to steal]to do is greater than ever before -- especially in large shops. A detective recently watched a well-dressed woman who always went into a large store on Monday mornings. One Monday, there were fewer people in the shop than usual when the woman came in, so it was easier for the detective to watch her. The woman first bought a few small articles. After a little time, she chose one of the most expensive dresses in the shop and handed it to an assistant who wrapped it up for her as quickly as possible. Then the woman simply took the parcel and walked out of the shop without paying. When she was arrested, the detective found out that the shop-assistant was her daughter. The girl' gave' her mother a free dress once a week!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'once', pos: 'adv.', meaning: '曾经，以前', phonetic: '/wʌns/' },
    { word: 'temptation', pos: 'n.', meaning: '诱惑', phonetic: '/temp\'teiʃən/' },
    { word: 'article', pos: 'n.', meaning: '物品，东西', phonetic: '/\'ɑ:tikəl/' },
    { word: 'wrap', pos: 'v.', meaning: '包裹', phonetic: '/ræp/' },
    { word: 'simply', pos: 'adv.', meaning: '仅仅', phonetic: '/\'simpli/' },
    { word: 'arrest', pos: 'v.', meaning: '逮捕', phonetic: '/ə\'rest/' }
  ],
}
const articleNce2L33: Article = {
  original: {
    paragraphs: [
      "Nearly a week passed before the girl was able to explain what had happened to her. One afternoon she set out from the coast in a small boat and was caught in a storm. Towards evening, the boat struck a rock and the girl jumped into the sea. Then she swam to the shore after spending the whole night in the water. During that time she covered a distance of eight miles. Early next morning, she saw a light ahead. She knew she was near the shore because the light was high up on the cliffs. On arriving at the shore, the girl struggled up the cliff towards the light she had seen. That was all (that)[she remembered]. When she woke up a day later, she found herself in hospital."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'darkness', pos: 'n.', meaning: '黑暗', phonetic: '/\'dɑ:knis/' },
    { word: 'explain', pos: 'v.', meaning: '解释，叙述', phonetic: '/ik\'splein/' },
    { word: 'coast', pos: 'n.', meaning: '海岸', phonetic: '/kəust/' },
    { word: 'storm', pos: 'n.', meaning: '暴风雨', phonetic: '/stɔ:m/' },
    { word: 'towards', pos: 'prep.', meaning: '接近', phonetic: '/tə\'wɔ:dz/' },
    { word: 'rock', pos: 'n.', meaning: '岩石，礁石', phonetic: '/rɔk/' },
    { word: 'shore', pos: 'n.', meaning: '海岸', phonetic: '/ʃɔ:/' },
    { word: 'light', pos: 'n.', meaning: '灯光', phonetic: '/lait/' },
    { word: 'ahead', pos: 'adv.', meaning: '在前面', phonetic: '/ə\'hed/' },
    { word: 'cliff', pos: 'n.', meaning: '峭壁', phonetic: '/klif/' },
    { word: 'struggle', pos: 'v.', meaning: '挣扎', phonetic: '/\'strʌgl/' },
    { word: 'hospital', pos: 'n.', meaning: '医院', phonetic: '/\'hɔspitl/' }
  ],
}
const articleNce2L34: Article = {
  original: {
    paragraphs: [
      "Ted Robinson has been worried all the week. Last Tuesday he received a letter from the local police. In the letter he was asked to call at the station. Ted wondered why he was wanted by the police, but he went to the station yesterday and now he is not worried any more. At the station, he was told by a smiling policeman that his bicycle had been found. Five days ago, the policeman told him, the bicycle was picked up in a small village four hundred miles away. It is now being sent to his home by train. Ted was most surprised when he heard the news. He was amused too, because he never expected the bicycle to be found. It was stolen twenty years ago when Ted was a boy of fifteen!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'station', pos: 'n.', meaning: '(警察)局', phonetic: '/\'steiʃən/' },
    { word: 'most', pos: 'adv.', meaning: '相当，非常', phonetic: '/məust/' }
  ],
}
const articleNce2L35: Article = {
  original: {
    paragraphs: [
      "Rov Trenton used to drive a taxi. A short while ago, however, he became a bus-driver and he was not regretted it. He is finding his new work far more exciting. When he was driving along Catford Street recently, he saw two thieves [rush out of a shop and run towards a waiting car]do to. One of them was carrying a bag full of money. Roy acted quickly and drove the bus straight at the thieves. The one with the money got such a fright [that he dropped the bag]. As the thieves were trying to get away in their car, Roy drove his bus into the back of it. While the battered car was moving away, Roy stopped his bus and telephoned the police. The thieves' car was badly damaged and easy to recognize. Shortly afterwards, the police stopped the car and both men were arrested."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'while', pos: 'n.', meaning: '一段时间', phonetic: '/wail/' },
    { word: 'regret', pos: 'v.', meaning: '后悔', phonetic: '/ri\'gret/' },
    { word: 'far', pos: 'adv.', meaning: '非常', phonetic: '/fɑ:/' },
    { word: 'rush', pos: 'v.', meaning: '冲', phonetic: '/rʌʃ/' },
    { word: 'act', pos: 'v.', meaning: '行动', phonetic: '/æct/' },
    { word: 'straight', pos: 'adv.', meaning: '径直', phonetic: '/streit/' },
    { word: 'fright', pos: 'n.', meaning: '害怕', phonetic: '/frait/' },
    { word: 'battered', pos: 'adj.', meaning: '撞坏的', phonetic: '/\'bætəd/' },
    { word: 'shortly', pos: 'adv.', meaning: '很快，不久', phonetic: '/\'ʃɔ:tli/' },
    { word: 'afterwards', pos: 'adv.', meaning: '以后', phonetic: '/\'a:ftəwədz/' }
  ],
}
const articleNce2L36: Article = {
  original: {
    paragraphs: [
      "Erna Hart is going to swim across the English Channel tomorrow. She is going to set out from the French coast at five o'clock in the morning. Erna is only fourteen years old and she hopes to set up a new world record. She is a strong swimmer and many people feel that she is sure to succeed. Erna's father will set out with her in a small boat. Mr Hart has trained his daughter for years. Tomorrow he will be watching her anxiously as she swims the long distance to England. Erna intends to take short rests every two hours. She will have something to drink but she will not eat any solid food. Most of Erna's school friends will be waiting for her on the English coast. Among them will be Erna's mother, who swam the Channel herself when she was a girl."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'record', pos: 'n.', meaning: '记录', phonetic: '/\'rekɔ:d, ri\'kɔ:d/' },
    { word: 'strong', pos: 'adj.', meaning: '强壮的', phonetic: '/strɔŋ/' },
    { word: 'swimmer', pos: 'n.', meaning: '游泳运动员', phonetic: '/\'swimə/' },
    { word: 'succeed', pos: 'v.', meaning: '成功', phonetic: '/sək\'si:d/' },
    { word: 'train', pos: 'v.', meaning: '训练', phonetic: '/trein/' },
    { word: 'anxiously', pos: 'adv.', meaning: '焦急地', phonetic: '/\'æŋkʃəsli/' },
    { word: 'intend', pos: 'v.', meaning: '打算', phonetic: '/in\'tend/' },
    { word: 'solid', pos: 'adj.', meaning: '固体的，硬的', phonetic: '/\'sɔlid/' }
  ],
}
const articleNce2L37: Article = {
  original: {
    paragraphs: [
      "The Olympic Games will be held in our country in four years' time. Asa great many people will be visiting the country, the government will be building new hotels, an immense stadium, and a fine new swimming pool. 'They will also be building new roads and a special railway-line. The Games will be held just outside the capital and the whole area will be called 'Olympic City'. Workers will have completed the new roads by the end of this year. Bythe end of next year, they will have finished work on the new stadium. The fine modern buildings have been designed by Kurt Gunter. Everybody will be watching anxiously asthe new buildings go up. We are all very excited and are looking forward to the Olympic Games because they have never been held before in this country."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'Olympic', pos: 'adj.', meaning: '奥林匹克的', phonetic: '/ə\'limpik/' },
    { word: 'hold', pos: 'v.', meaning: '召开', phonetic: '/həuld/' },
    { word: 'government', pos: 'n.', meaning: '政府', phonetic: '/\'gʌvənmənt/' },
    { word: 'immense', pos: 'adj.', meaning: '巨大的', phonetic: '/i\'mens/' },
    { word: 'stadium', pos: 'n.', meaning: '露天体育场', phonetic: '/\'steidiəm/' },
    { word: 'standard', pos: 'n.', meaning: '标准', phonetic: '/\'stændəd/' },
    { word: 'capital', pos: 'n.', meaning: '首都', phonetic: '/\'kæpitl/' },
    { word: 'fantastic', pos: 'adj.', meaning: '巨大的', phonetic: '/fæn\'tæstik/' },
    { word: 'design', pos: 'v.', meaning: '设计', phonetic: '/di\'zain/' }
  ],
}
const articleNce2L38: Article = {
  original: {
    paragraphs: [
      "My old friend, Harrison, had lived in the Mediterranean for many years before he returned to England. He had often dreamedof retiring in England and had planned to settle down in the country. He had no sooner returned thanhe bought a fine house and went to live there. Almost immediately he began to complain about the weather, for even though it was still summer, it rained continually and it was often bitterly cold. After so many years of sunshine, Harrison got a shock. He acted as if he had never lived in England before. In the end, it was more than he could bear. He had hardly had time to settle down when he sold the house and left the country. The dream he had had for so many years ended there. Harrison had thought of everything except the weather."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'except', pos: 'prep.', meaning: '除了', phonetic: '/ik\'sept/' },
    { word: 'Mediterranean', pos: 'n.', meaning: '(the～)地中海', phonetic: '/ˌmeditə\'reiniən/' },
    { word: 'complain', pos: 'v.', meaning: '抱怨', phonetic: '/kəm\'plein/' },
    { word: 'continually', pos: 'adv.', meaning: '不断地', phonetic: '/kən\'tinjuəli/' },
    { word: 'bitterly', pos: 'adv.', meaning: '刺骨地', phonetic: '/\'bitəli/' },
    { word: 'sunshine', pos: 'n.', meaning: '阳光', phonetic: '/\'sʌnʃain/' }
  ],
}
const articleNce2L39: Article = {
  original: {
    paragraphs: [
      "While John Gilbert was in hospital, he askedhis doctor to tell him whether his operation had been successful, but the doctor refused to do so. The following day, the patient asked for a bedside telephone. When he was alone, he telephoned the hospital exchange and asked for Doctor Millington. When the doctor answered the phone, Mr Gilbert said he was inquiring about a certain patient, a Mr John Gilbert. He asked if Mr Gilbert's operation had been successful and the doctor told him that it had been. He then asked when Mr Gilbert would be allowed to go home and the doctor told him that he would have to stay in hospital for another two weeks. Then Dr Millington asked the caller if he was a relative of the patient. ' No,' the patient answered,' I am Mr John Gilbert.'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'operation', pos: 'n.', meaning: '手术', phonetic: '/ˌɔpə\'reiʃən/' },
    { word: 'successful', pos: 'adj.', meaning: '成功的', phonetic: '/sək\'sesfəl/' },
    { word: 'following', pos: 'adj.', meaning: '下一个', phonetic: '/\'fɔləuiŋ/' },
    { word: 'patient', pos: 'n.', meaning: '病人', phonetic: '/\'peiʃənt/' },
    { word: 'alone', pos: 'adj.', meaning: '独自的', phonetic: '/ə\'ləun/' },
    { word: 'exchange', pos: 'n.', meaning: '(电话的)交换台', phonetic: '/iks\'tʃeindʒ/' },
    { word: 'inquire', pos: 'v.', meaning: '询问，打听', phonetic: '/in\'kwaiə/' },
    { word: 'certain', pos: 'adj.', meaning: '某个', phonetic: '/\'sə:tən/' },
    { word: 'caller', pos: 'n.', meaning: '打电话的人', phonetic: '/\'kɔ:lə/' },
    { word: 'relative', pos: 'n.', meaning: '亲戚', phonetic: '/\'relətiv/' }
  ],
}
const articleNce2L40: Article = {
  original: {
    paragraphs: [
      "Last week at a dinner-party, the hostess asked me to sit next to Mrs Rumbold. Mrs Rumbold was a large, unsmiling lady in a tight black dress. She did not even look up when I took my seat beside her. Her eyes were fixed on her plate and in a short time, she was busy eating. I tried to make conversation.",
        "' A new play is coming to\" The Globe\" soon,' I said. 'Will you be seeing it?' ' No,' she answered. 'Will you be spending your holidays abroad this year?' I asked. ' No,' she answered.",
        "' Will you be staying in England?' I asked. ' No,' she answered.",
        "In despair, I asked her whether she was enjoying her dinnerIO，DO.",
        "' Young man,' she answered,' if you ate more and talked less, we would both enjoy our dinner!'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'hostess', pos: 'n.', meaning: '女主人', phonetic: '/\'həustis/' },
    { word: 'unsmiling', pos: 'adj.', meaning: '不笑的，严肃的', phonetic: '/\'ʌn\'smailiŋ/' },
    { word: 'tight', pos: 'adj.', meaning: '紧身的', phonetic: '/tait/' },
    { word: 'fix', pos: 'v.', meaning: '疑视', phonetic: '/fiks/' },
    { word: 'globe', pos: 'n.', meaning: '地球', phonetic: '/gləub/' },
    { word: 'despair', pos: 'n.', meaning: '绝望', phonetic: '/di\'speə/' }
  ],
}
const articleNce2L41: Article = {
  original: {
    paragraphs: [
      "'Do you call that a hat?' I said to my wife. 'You needn't be so rude about it,' my wife answered as she looked at herself in the mirror. I sat down on one of those modern chairs with holes in it and waited. We had been in the hat shop for half an hour and my wife was still in front of the mirror.",
        "' We mustn't buy things we don't need,' I remarked suddenly. I regretted saying it almost at once.",
        "'You needn't have said that,' my wife answered.' I need not remind you [of that terrible tie] you bought yesterday.'",
        "' I find it beautiful,' I said. 'A man can never have too many ties.'",
        "Ten minutes later we walked out of the shop together. My wife was wearing a hat that looked like a lighthouse!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'rude', pos: 'adj.', meaning: '无礼的', phonetic: '/ru:d/' },
    { word: 'mirror', pos: 'n.', meaning: '镜子', phonetic: '/\'mirə/' },
    { word: 'hole', pos: 'n.', meaning: '孔', phonetic: '/həul/' },
    { word: 'remark', pos: 'v.', meaning: '评说', phonetic: '/ri\'mɑ:k/' },
    { word: 'remind', pos: 'v.', meaning: '提醒', phonetic: '/ri\'maind/' },
    { word: 'lighthouse', pos: 'n.', meaning: '灯塔', phonetic: '/\'laithaus/' }
  ],
}
const articleNce2L42: Article = {
  original: {
    paragraphs: [
      "Aswe had had a long walk through one of the markets of Old Delhi, we stopped at a square to have a rest. After a time, we noticed a snake-charmer with two large baskets at the other side of the square, so we went to have a look at him. As soon as he saw us, he picked up a long pipe which was covered with coins and opened one of the baskets. When he began to play a tune, we had our first glimpse of the snake. It rose out of the basket and began to follow the movements of the pipe. We were very much surprised when the snake charmer suddenly began to play jazz tunes and modern pop songs. The snake, however, continued to 'dance' slowly. It obviously could not tell the difference between Indian music and jazz!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'musical', pos: 'adj.', meaning: '精通音乐的', phonetic: '/\'mju:zikəl/' },
    { word: 'market', pos: 'n.', meaning: '市场，集市', phonetic: '/\'mɑ:kit/' },
    { word: 'snake charmer', pos: 'n.', meaning: '玩蛇者(通常借音乐控制)', phonetic: '/ˈsneɪk ˌtʃɑːmə(r)/' },
    { word: 'pipe', pos: 'n.', meaning: '(吹奏地)管乐器', phonetic: '/paip/' },
    { word: 'tune', pos: 'n.', meaning: '曲调', phonetic: '/tju:n, tu:n/' },
    { word: 'glimpse', pos: 'n.', meaning: '一瞥', phonetic: '/glimps/' },
    { word: 'snake', pos: 'n.', meaning: '蛇', phonetic: '/sneik/' },
    { word: 'movement', pos: 'n.', meaning: '动作', phonetic: '/\'mu:vmənt/' },
    { word: 'continue', pos: 'v.', meaning: '继续', phonetic: '/kən\'tinju:/' },
    { word: 'dance', pos: 'v.', meaning: '跳舞', phonetic: '/dɑ:ns/' },
    { word: 'obviously', pos: 'adv.', meaning: '显然', phonetic: '/\'ɔbviəsli/' },
    { word: 'difference', pos: 'n.', meaning: '差别', phonetic: '/\'difrəns/' },
    { word: 'Indian', pos: 'adj.', meaning: '印度的', phonetic: '/\'indiən/' }
  ],
}
const articleNce2L43: Article = {
  original: {
    paragraphs: [
      "In 1929, three yearsafter his flight over the North Pole, the American explorer, R. E. Byrd, successfully flew over the South Pole for the first time. Though, at first, Byrd and his men were able to take a great many photographs of the mountains that lay below, they soon ran into serious trouble. At one point, it seemed certain that their plane would crash. It could only get over the mountains if it rose to 10,000 feet. Byrd at once ordered his men to throw out two heavy food sacks. The plane was then able to rise and it cleared the mountains by 400 feet. Byrd now knew that he would be able to reach the South Pole which was 300 miles away, for there were no more mountains in sight. The aircraft was able to fly over the endless white plains without difficulty."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'pole', pos: 'n.', meaning: '(地球的)极', phonetic: '/pəul/' },
    { word: 'flight', pos: 'n.', meaning: '飞行', phonetic: '/flait/' },
    { word: 'explorer', pos: 'n.', meaning: '探险家', phonetic: '/ik\'splɔ:rə/' },
    { word: 'lie', pos: 'v.', meaning: '处于', phonetic: '/lai/' },
    { word: 'serious', pos: 'adj.', meaning: '严重的', phonetic: '/\'siəriəs/' },
    { word: 'point', pos: 'n.', meaning: '地点', phonetic: '/pɔint/' },
    { word: 'seem', pos: 'v.', meaning: '似乎，好像', phonetic: '/si:m/' },
    { word: 'crash', pos: 'v.', meaning: '坠毁', phonetic: '/kræʃ/' },
    { word: 'sack', pos: 'n.', meaning: '袋子', phonetic: '/sæk/' },
    { word: 'clear', pos: 'v.', meaning: '越过', phonetic: '/kliə/' },
    { word: 'aircraft', pos: 'n.', meaning: '飞机', phonetic: '/\'eəkrɑ:ft/' },
    { word: 'endless', pos: 'adj.', meaning: '无尽的', phonetic: '/\'endlis/' },
    { word: 'plain', pos: 'n.', meaning: '平原', phonetic: '/plein/' }
  ],
}
const articleNce2L44: Article = {
  original: {
    paragraphs: [
      "Mrs Anne Sterling did not think of the risk she was taking when she ran through a forest after two men. They had rushed up to her while she was having a picnic at the edge of a forest with her children and tried to steal her handbag. In the struggle, the strap broke and, with the bag in their possession, both men started running through the trees. Mrs Sterling got so angry that she ran after them. She was soon out of breath, but she continued to run. When she caught up with them, she saw that they had sat down and were going through the contents of the bag, so she ran straight at them. The men got such a fright that they dropped the bag and ran away. 'The strap needs mending,' said Mrs Sterling later, 'but they did not steal anything.'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'forest', pos: 'n.', meaning: '森林', phonetic: '/\'fɔrist/' },
    { word: 'risk', pos: 'n.', meaning: '危险，冒险', phonetic: '/risk/' },
    { word: 'picnic', pos: 'n.', meaning: '野餐', phonetic: '/\'piknik/' },
    { word: 'edge', pos: 'n.', meaning: '边缘', phonetic: '/edʒ/' },
    { word: 'strap', pos: 'n.', meaning: '带，皮带', phonetic: '/stræp/' },
    { word: 'possession', pos: 'n.', meaning: '所有', phonetic: '/pə\'zeʃən/' },
    { word: 'breath', pos: 'n.', meaning: '呼吸', phonetic: '/breθ/' },
    { word: 'contents', pos: 'n.', meaning: '(常用复数)内有的物品', phonetic: '/\'kɔ:ntents/' },
    { word: 'mend', pos: 'v.', meaning: '修理', phonetic: '/mend/' }
  ],
}
const articleNce2L45: Article = {
  original: {
    paragraphs: [
      "The whole village soon learnt that a large sum of money had been lost. Sam Benton, the local butcher, had lost his wallet while taking his savings to the post-office. Sam was sure that the wallet must have been found by one of the villagers, but it was not returned to him. Three months passed, and then one morning, Sam found his wallet outside his front door. It had been wrapped up in newspaper and it contained half the money he had lost, together with a note which said: 'A thief, yes, 'but only 5o per cent a thief!' Two months later, some more money was sent to Sam with another note:' Only 25 per cent a thief now!' In time, all Sam's money was paid back in this way. The last note said:' I am 100 per cent honest now!'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'clear', pos: 'adj.', meaning: '无罪的，不亏心的', phonetic: '/kliə/' },
    { word: 'conscience', pos: 'n.', meaning: '良心，道德心', phonetic: '/\'kɔnʃəns/' },
    { word: 'wallet', pos: 'n.', meaning: '皮夹，钱夹', phonetic: '/\'wɑ:lit/' },
    { word: 'savings', pos: 'n.', meaning: '存款', phonetic: '/\'seiviŋz/' },
    { word: 'villager', pos: 'n.', meaning: '村民', phonetic: '/\'vilidʒə/' },
    { word: 'per cent', pos: 'n.', meaning: '百分之…', phonetic: '/pə\'sent/' }
  ],
}
const articleNce2L46: Article = {
  original: {
    paragraphs: [
      "When a plane from London arrived at Sydney airport, workers began to unload a number of wooden boxes which contained clothing. No one could account for the fact that one of the boxes was extremely heavy. It suddenly occurred to one of the workers to open up the box. He was astonished at what he found. A man was lying in the box on top of a pile of woollen goods. He was so surprised at being discovered that he did not even try to run away. After he was arrested, the man admitted hiding in the box before the plane left London. He had had a long and uncomfortable trip, for he had been confined to the wooden box for over ten hours. The man was ordered to pay345 pounds for the cost of the trip. The normal price of a ticket is 230 pounds!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'unload', pos: 'v.', meaning: '卸(货)', phonetic: '/ʌn\'ləud/' },
    { word: 'wooden', pos: 'adj.', meaning: '木制的', phonetic: '/\'wudn/' },
    { word: 'extremely', pos: 'adv.', meaning: '非常，极其', phonetic: '/ik\'stri:mli/' },
    { word: 'occur', pos: 'v.', meaning: '发生', phonetic: '/ə\'kə:/' },
    { word: 'astonish', pos: 'v.', meaning: '使惊讶', phonetic: '/ə\'stɔniʃ/' },
    { word: 'pile', pos: 'n.', meaning: '堆', phonetic: '/pail/' },
    { word: 'woollen', pos: 'n.', meaning: '羊毛的', phonetic: '/\'wulən/' },
    { word: 'goods', pos: 'n.', meaning: '(常用复数)货物，商品', phonetic: '/gudz/' },
    { word: 'discover', pos: 'v.', meaning: '发现', phonetic: '/dis\'kʌvə/' },
    { word: 'admit', pos: 'v.', meaning: '承认', phonetic: '/əd\'mit/' },
    { word: 'confine', pos: 'v.', meaning: '关在(一个狭小的空间里)', phonetic: '/kən\'fain/' },
    { word: 'normal', pos: 'adj.', meaning: '正常的，通常的', phonetic: '/\'nɔ:məl/' }
  ],
}
const articleNce2L47: Article = {
  original: {
    paragraphs: [
      "A public house which was recently bought by Mr Ian Thompson is up for sale. Mr Thompson is going to sell it because it is haunted. He told me that he could not go to sleep one night because he heard a strange noise coming from the bar. The next morning, he found that the doors had been blocked by chairs and the furniture had been moved. Though Mr Thompson had turned the lights off before he went to bed, they were on in the morning. He also said that he had found five empty whisky bottles which the ghost must have drunk the night before. When I suggested that some villagers must have come in for a free drink, Mr Thompson shook his head. The villagers have told him that they will not accept the inn even if he gives it away."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'thirsty', pos: 'adj.', meaning: '贪杯的', phonetic: '/\'θə:sti/' },
    { word: 'ghost', pos: 'n.', meaning: '鬼魂', phonetic: '/gəust/' },
    { word: 'haunt', pos: 'v.', meaning: '(鬼)来访，闹鬼', phonetic: '/hɔ:nt/' },
    { word: 'block', pos: 'v.', meaning: '堵', phonetic: '/blɔk/' },
    { word: 'furniture', pos: 'n.', meaning: '家具', phonetic: '/\'fə:nitʃə/' },
    { word: 'whisky', pos: 'n.', meaning: '威士忌酒', phonetic: '/\'wiski/' },
    { word: 'suggest', pos: 'v.', meaning: '暗示', phonetic: '/sə\'dʒest/' },
    { word: 'shake', pos: 'v.', meaning: '摇动', phonetic: '/ʃeik/' },
    { word: 'accept', pos: 'v.', meaning: '接受', phonetic: '/ək\'sept/' }
  ],
}
const articleNce2L48: Article = {
  original: {
    paragraphs: [
      "Dentists always ask questions when it is impossible for you to answer. My dentist had just pulled out one of my teeth and had told me to rest for a while. I tried to say something, but my mouth was full of cotton-wool. He knew I collected birds' eggs and asked me whether my collection was growing. He then asked me how my brother was and whether I liked my new job in London. In answer to these questions I either nodded or made strange noises. Meanwhile, my tongue was busy searching out the hole where the tooth had been. I suddenly felt very worried, but could not say anything. When the dentist at last removed the cotton-wool from my mouth, I was able to tell him that he had pulled out the wrong tooth."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'pull', pos: 'v.', meaning: '拔', phonetic: '/pul/' },
    { word: 'cotton', pos: 'n.', meaning: '药棉', phonetic: '/\'kɔtn/' },
    { word: 'collect', pos: 'v.', meaning: '搜集', phonetic: '/kə\'lekt/' },
    { word: 'collection', pos: 'n.', meaning: '收藏品，收集品', phonetic: '/kə\'lekʃən/' },
    { word: 'nod', pos: 'v.', meaning: '点头', phonetic: '/nɔd/' },
    { word: 'meanwhile', pos: 'adv.', meaning: '同时', phonetic: '/\'mi:n\'wail/' }
  ],
}
const articleNce2L49: Article = {
  original: {
    paragraphs: [
      "Tired of sleeping on the floor, a young man in Teheran saved up for years to buy a real bed. For the first time in his life, he became the proud owner of a bed which had springs and a mattress. Because the weather was very hot, he carried the bed on to the roof of his house. He slept very welladv. for the first two nights, but on the third night, a storm blew up. A gust of wind swept the bed off the roof and sent it crashing into the courtyard below.",
        "The young man did not wake up until the bed had struck the ground. Although the bed was smashedadj. to pieces, the man was miraculously unhurt. When he woke up, he was still on the mattress. Glancing at the bits of wood and metal that lay around him, the man sadly picked up the mattress and carried it into his house.After he had put it on the floor, he promptly went to sleep again."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'tired', pos: 'adj.', meaning: '厌烦的', phonetic: '/\'taiəd/' },
    { word: 'real', pos: 'adj.', meaning: '真正的', phonetic: '/riəl/' },
    { word: 'owner', pos: 'n.', meaning: '主人', phonetic: '/\'əunə/' },
    { word: 'spring', pos: 'n.', meaning: '弹簧', phonetic: '/spriŋ/' },
    { word: 'mattress', pos: 'n.', meaning: '床垫', phonetic: '/\'mætris/' },
    { word: 'gust', pos: 'n.', meaning: '一阵风', phonetic: '/gʌst/' },
    { word: 'sweep', pos: 'v.', meaning: '扫，刮', phonetic: '/swi:p/' },
    { word: 'courtyard', pos: 'n.', meaning: '院子', phonetic: '/\'kɔ:tjɑ:d/' },
    { word: 'smash', pos: 'v.', meaning: '碰碎，摔碎', phonetic: '/smæʃ/' },
    { word: 'miraculously', pos: 'adv.', meaning: '奇迹般地', phonetic: '/mi\'rækjuləsli/' },
    { word: 'unhurt', pos: 'adj.', meaning: '没有受伤的', phonetic: '/ʌn\'hə:t/' },
    { word: 'glance', pos: 'v.', meaning: '扫视', phonetic: '/glɑ:ns/' },
    { word: 'promptly', pos: 'adv.', meaning: '迅速地', phonetic: '/\'prɔmptli/' }
  ],
}
const articleNce2L50: Article = {
  original: {
    paragraphs: [
      "I love travelling in the country, but I don't like losing my way.",
        "I went on an excursion recently, but my trip took me longer than I expected.",
        "'I'm going to Woodford Green,' I said to the conductor as I got on the bus, 'but I don't know where it is.'",
        "I sat in the front of the bus to get a good view of the countryside. After some time, the bus stopped. Looking round, I realized with a shock that I was the only passenger left on the bus.",
        "'You'll have to get off here,' the conductor said. 'This is as far as we go.'",
        "'Oh dear,' said the conductor suddenly. 'I forgot to put you off.'",
        "'Well, in that case, I prefer to stay on the bus,' I answered."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'ride', pos: 'n.', meaning: '旅行', phonetic: '/raid/' },
    { word: 'excursion', pos: 'n.', meaning: '远足', phonetic: '/ik\'skə:ʃən/' },
    { word: 'conductor', pos: 'n.', meaning: '售票员', phonetic: '/kən\'dʌktə/' },
    { word: 'view', pos: 'n.', meaning: '景色', phonetic: '/vju:/' }
  ],
}
const articleNce2L51: Article = {
  original: {
    paragraphs: [
      "My friend, Hugh, has always been fat, but thingsgot so bad recently that he decided to go on a diet. He began his diet a week ago. First of all, he wrote out a long list of all the foods which were forbidden. The list included most of the things Hugh loves: butter, potatoes, rice, beer, milk, chocolate; and sweets.",
        "Yesterday I paid him a visit. I rang the bell and was not surprised to see that Hugh was still as fat as ever. He led me into his room and hurriedly hid a large parcel under his desk. It was obvious that he was very embarrassed. When I asked him what he was doing, he smiled guiltily and then put the parcel on the desk. He explained that his diet was so strict that he had to reward himself",
        "occasionally. Then he showed me the contents of the parcel. It contained five large bars of chocolate and three bags of sweets!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'reward', pos: 'n.', meaning: '报偿', phonetic: '/ri\'wɔ:d/' },
    { word: 'virtue', pos: 'n.', meaning: '美德', phonetic: '/\'və:tʃu:/' },
    { word: 'diet', pos: 'n.', meaning: '节食', phonetic: '/\'daiət/' },
    { word: 'forbid', pos: 'v.', meaning: '禁止', phonetic: '/fə\'bid/' },
    { word: 'hurriedly', pos: 'adv.', meaning: '匆忙地', phonetic: '/\'hʌridli/' },
    { word: 'embarrass', pos: 'v.', meaning: '使尴尬', phonetic: '/im\'bærəs/' },
    { word: 'guiltily', pos: 'adv.', meaning: '内疚地', phonetic: '/\'giltili/' },
    { word: 'strict', pos: 'adj.', meaning: '严格的', phonetic: '/strikt/' },
    { word: 'reward', pos: 'v.', meaning: '给奖赏', phonetic: '/ri\'wɔ:d/' },
    { word: 'occasionally', pos: 'adv.', meaning: '偶尔地', phonetic: '/ə\'keiʒənəli/' }
  ],
}
const articleNce2L52: Article = {
  original: {
    paragraphs: [
      "We have just moved into a new house and I have been working hard all morning. I have been trying to get my new room in order. This has not been easy because",
        "I own over a thousand books. To make matters worse, the room is rather small, so I have temporarily put my books on the floor.",
        "At the moment, they cover every inch of floor space and I actually have to walk on them to get in or out of the room. A short while ago, my sister helped me to carry one of my old bookcases up the stairs. She went into my room and got a big surprise when she saw all those books on the floor. 'This is the prettiest carpet I have ever seen,' she said. She gazed at it for some time then added, 'You don't need bookcases at all. You can sit here in your spare time and read the carpet!'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'temporarily', pos: 'adv.', meaning: '暂时地', phonetic: '/\'tempərərili/' },
    { word: 'inch', pos: 'n.', meaning: '英寸(度量单位)', phonetic: '/intʃ/' },
    { word: 'space', pos: 'n.', meaning: '空间', phonetic: '/speis/' },
    { word: 'actually', pos: 'adv.', meaning: '实际上', phonetic: '/\'æktʃuəli/' }
  ],
}
const articleNce2L53: Article = {
  original: {
    paragraphs: [
      "At last firemen have put out a big forest fire in California. Since then, they have been trying to find out how the fire began. Forest fires are often caused by broken glass or by cigarette ends which people carelessly throw away.",
        "Yesterday the firemen examined the ground carefully, but were not able to find any broken glass. They were also quite sure that a cigarette end did not start the fire. This morning, however, a firemen accidentally discovered the cause. He noticed the remains of a snake which was wound round the electric wires of a 16,000-volt power line. In this way, he was able to solve the mystery. The explanation was simple but very unusual. A bird had snatched up the snake from the ground and then dropped it on to the wires. The snake then, wound itself round the wires. When it did so, it sent sparks down to the ground and these immediately started a fire."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'hot', pos: 'adj.', meaning: '带电的，充电的', phonetic: '/hɔt/' },
    { word: 'fireman', pos: 'n.', meaning: '消防队员', phonetic: '/\'faiəmən/' },
    { word: 'cause', pos: 'v.', meaning: '引起', phonetic: '/kɔ:z/' },
    { word: 'cause', pos: 'n.', meaning: '原因', phonetic: '/kɔ:z/' },
    { word: 'examine', pos: 'v.', meaning: '检查', phonetic: '/ig\'zæmin/' },
    { word: 'accidentally', pos: 'adv.', meaning: '意外地,偶然地', phonetic: '/ˌæksi\'dentəli/' },
    { word: 'remains', pos: 'n.', meaning: '尸体，残骸', phonetic: '/ri\'meinz/' },
    { word: 'wire', pos: 'n.', meaning: '电线', phonetic: '/\'waiə/' },
    { word: 'volt', pos: 'n.', meaning: '伏特(电压单位)', phonetic: '/vəult/' },
    { word: 'power line', pos: 'n.', meaning: '电力线', phonetic: '//' },
    { word: 'solve', pos: 'v.', meaning: '解决', phonetic: '/sɔlv/' },
    { word: 'mystery', pos: 'n.', meaning: '谜', phonetic: '/\'mistəri/' },
    { word: 'snatch', pos: 'v.', meaning: '抓住', phonetic: '/snætʃ/' },
    { word: 'spark', pos: 'n.', meaning: '电火花', phonetic: '/spɑ:k/' }
  ],
}
const articleNce2L54: Article = {
  original: {
    paragraphs: [
      "After breakfast, I sent the children to school and then I went to the shops. It was still early when I returned home. The children were at school, my husband was at work and the house was quiet. So I decided to make some meat pies. In a short time I was busy mixing butter and flour and my hands were soon covered with sticky pastry.",
        "At exactly that moment, the telephone rang. Nothing could have been more annoying. I picked up the receiver between two sticky fingers and was dismayed when I recognized the voice of Helen Bates. It took me ten minutes to persuade her to ring back later. At last I hung up the receiver. What a mess! There was pastry on my fingers, on the telephone, and on the doorknobs. I had no sooner got back to the kitchen than the doorbell rang loud enough to wake the dead. This time it was the postman and he wanted me to sign for a registered letter!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'sticky', pos: 'adj.', meaning: '粘的', phonetic: '/\'stiki/' },
    { word: 'finger', pos: 'n.', meaning: '手指', phonetic: '/\'fiŋgə/' },
    { word: 'pie', pos: 'n.', meaning: '馅饼', phonetic: '/pai/' },
    { word: 'mix', pos: 'v.', meaning: '混合，拌和', phonetic: '/miks/' },
    { word: 'pastry', pos: 'n.', meaning: '面糊', phonetic: '/\'peistri/' },
    { word: 'annoying', pos: 'adj.', meaning: '恼人的', phonetic: '/ə\'nɔiiŋ/' },
    { word: 'receiver', pos: 'n.', meaning: '电话的话筒', phonetic: '/ri\'si:və/' },
    { word: 'dismay', pos: 'v.', meaning: '失望，泄气', phonetic: '/dis\'mei/' },
    { word: 'recognize', pos: 'v.', meaning: '认出，听出', phonetic: '/\'rekəgnaiz/' },
    { word: 'persuade', pos: 'v.', meaning: '说服，劝说', phonetic: '/pə\'sweid/' },
    { word: 'mess', pos: 'n.', meaning: '乱七八糟', phonetic: '/mes/' },
    { word: 'doorknob', pos: 'n.', meaning: '门把手', phonetic: '/\'dɔ:nɔb/' },
    { word: 'sign', pos: 'v.', meaning: '签字', phonetic: '/sain/' },
    { word: 'register', pos: 'v.', meaning: '挂号邮寄', phonetic: '/\'redʒistə/' }
  ],
}
const articleNce2L55: Article = {
  original: {
    paragraphs: [
      "Dreams of finding lost treasure almost came true recently. A new machine called 'The Revealer' has been invented and it has been used to detect gold which has been buried in the ground. The machine was used in a cave near the seashore where -- it is said -- pirates used to hide gold. The pirates would often bury gold in the cave and then fail to collect it. Armed with the new machine, a search party went into the cave hoping to find buried treasure.",
        "The leader of the party was examining the soil near the entrance to the cave when the machine showed that there was gold under the ground. Very excited, the party dug a hole two feel deep. They finally found a small gold coin which was almost worthless. The party then searched the whole cave thoroughly but did not find anything except an empty tin trunk. In spite of this, many people are confident that 'The Revealer' may reveal something of value fairly soon."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'gold', pos: 'n.', meaning: '金子', phonetic: '/gəuld/' },
    { word: 'mine', pos: 'n.', meaning: '矿', phonetic: '/main/' },
    { word: 'treasure', pos: 'n.', meaning: '财宝', phonetic: '/\'treʒə/' },
    { word: 'revealer', pos: 'n.', meaning: '探测器', phonetic: '/ri\'vi:lə/' },
    { word: 'invent', pos: 'v.', meaning: '发明', phonetic: '/in\'vent/' },
    { word: 'detect', pos: 'v.', meaning: '探测', phonetic: '/di\'tekt/' },
    { word: 'bury', pos: 'v.', meaning: '埋藏', phonetic: '/\'beri/' },
    { word: 'cave', pos: 'n.', meaning: '山洞', phonetic: '/keiv/' },
    { word: 'seashore', pos: 'n.', meaning: '海岸', phonetic: '/\'si:ʃɔ:/' },
    { word: 'pirate', pos: 'n.', meaning: '海盗', phonetic: '/\'paiərət/' },
    { word: 'arm', pos: 'v.', meaning: '武装', phonetic: '/ɑ:m/' },
    { word: 'soil', pos: 'n.', meaning: '泥土', phonetic: '/sɔil/' },
    { word: 'entrance', pos: 'n.', meaning: '入口', phonetic: '/\'entrəns/' },
    { word: 'finally', pos: 'adv.', meaning: '最后', phonetic: '/\'fainəli/' },
    { word: 'worthless', pos: 'adj.', meaning: '毫无价值的', phonetic: '/\'wə:θləs/' },
    { word: 'thoroughly', pos: 'adv.', meaning: '彻底地', phonetic: '/\'θʌrəli/' },
    { word: 'trunk', pos: 'n.', meaning: '行李箱', phonetic: '/trʌŋk/' },
    { word: 'confident', pos: 'adj.', meaning: '有信心的', phonetic: '/\'kɔnfidənt/' },
    { word: 'value', pos: 'n.', meaning: '价值', phonetic: '/\'vælju:/' }
  ],
}
const articleNce2L56: Article = {
  original: {
    paragraphs: [
      "Once a year, a race is held for old cars. A lot of cars entered for this race last year and there was a great deal of excitement just before it began. One of the most handsome cars was a Rolls-Royce Silver Ghost. The most unusual car was a Benz which had only three wheels. Built in 1885, it was the oldest car taking part. After a great many loud explosions, the race began.",
        "Many of the cars broke down on the course and some drivers spent more time under their cars than in them! A few cars, however, completed the race. The winning car reached a speed of forty miles an hour -- much faster than any of its rivals. It sped downhill at the end of the race and its driver had a lot of trouble trying to stop it. The race gave everyone a great deal of pleasure. It was very different from modern car races but no less exciting."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'sound', pos: 'n.', meaning: '声音', phonetic: '/saund/' },
    { word: 'excitement', pos: 'n.', meaning: '激动，兴奋', phonetic: '/ik\'saitmənt/' },
    { word: 'handsome', pos: 'adj.', meaning: '漂亮的，美观的', phonetic: '/\'hændsəm/' },
    { word: 'Rolls-Royce', pos: 'n.', meaning: '罗尔斯—罗伊斯', phonetic: '/\'rəʊlz\'rɔis/' },
    { word: 'Benz', pos: 'n.', meaning: '奔驰', phonetic: '//' },
    { word: 'wheel', pos: 'n.', meaning: '轮子', phonetic: '/wi:l/' },
    { word: 'explosion', pos: 'n.', meaning: '爆炸，轰响', phonetic: '/ik\'spləuʒən/' },
    { word: 'course', pos: 'n.', meaning: '跑道；行程', phonetic: '/kɔ:s/' },
    { word: 'rival', pos: 'n.', meaning: '对手', phonetic: '/\'raivəl/' },
    { word: 'speed', pos: 'v.', meaning: '疾驶', phonetic: '/spi:d/' },
    { word: 'downhill', pos: 'adv.', meaning: '下坡', phonetic: '/ˌdaun\'hil/' }
  ],
}
const articleNce2L57: Article = {
  original: {
    paragraphs: [
      "A woman in jeans stood at the window of an expensive shop. Though she hesitated for a moment, she finally went in and asked to see a dress that was in the window. The assistant who served her did not like the way she was dressed. Glancing at her scornfully, he told her that the dress was sold. The woman walked out of the shop angrily and decided to punish the assistant next day. She returned to the shop the following morning dressed in a fur coat, with a handbag in one hand and a long umbrella in the other.",
        "After seeking out the rude assistant, she asked for the same dress. Not realizing who she was, the assistant was eager to serve her this time. With great difficulty, he climbed into the shop window to get the dress. As soon as she saw it, the woman said she did not like it. She enjoyed herself making the assistant bring almost everything in the window before finally buying the dress she had first asked for."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'madam', pos: 'n.', meaning: '(对妇女的尊称)太太，夫人', phonetic: '/\'mædəm/' },
    { word: 'jeans', pos: 'n.', meaning: '牛仔裤', phonetic: '/dʒi:nz/' },
    { word: 'hesitate', pos: 'v.', meaning: '犹豫，迟疑', phonetic: '/\'heziteit/' },
    { word: 'serve', pos: 'v.', meaning: '接待(顾客)', phonetic: '/sə:v/' },
    { word: 'scornfully', pos: 'adv.', meaning: '轻蔑地', phonetic: '/\'skɔ:nfuli/' },
    { word: 'punish', pos: 'v.', meaning: '惩罚', phonetic: '/\'pʌniʃ/' },
    { word: 'fur', pos: 'n.', meaning: '裘皮', phonetic: '/fə:/' },
    { word: 'eager', pos: 'adj.', meaning: '热切的，热情的', phonetic: '/\'i:gə/' }
  ],
}
const articleNce2L58: Article = {
  original: {
    paragraphs: [
      "The tiny village of Frinley is said to possess a 'cursed tree'. Because the tree was mentioned in a newspaper, the number of visitors to Frinley has now increased. The tree was planted near the church fifty years ago, but it is only in recent years that it has gained an evil reputation. It is said that if anyone touches the tree, he will have bad luck; if he picks a leaf, he will die. Many villagers believe that the tree has already claimed a number of victims. The vicar has been asked to have the tree cut down, but so far he has refused. He has pointed out that the tree is a useful source of income, as tourists have been coming from all parts of the country to see it. In spite of all that has been said, the tourists have been picking leaves and cutting their names on the tree-trunk. So far, not one of them has been struck down by sudden death!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'blessing', pos: 'n.', meaning: '福分，福气', phonetic: '/\'blesiŋ/' },
    { word: 'disguise', pos: 'n.', meaning: '伪装', phonetic: '/dis\'gaiz/' },
    { word: 'tiny', pos: 'adj.', meaning: '极小的', phonetic: '/\'taini/' },
    { word: 'possess', pos: 'v.', meaning: '拥有', phonetic: '/pə\'zes/' },
    { word: 'cursed', pos: 'adj.', meaning: '可恨的', phonetic: '/\'kə:sid/' },
    { word: 'increase', pos: 'v.', meaning: '增加', phonetic: '/in\'kri:s, \'inkri:s/' },
    { word: 'plant', pos: 'v.', meaning: '种值', phonetic: '/plɑ:nt/' },
    { word: 'church', pos: 'n.', meaning: '教堂', phonetic: '/tʃə:tʃ/' },
    { word: 'evil', pos: 'adj.', meaning: '坏的', phonetic: '/\'i:vəl/' },
    { word: 'reputation', pos: 'n.', meaning: '名声', phonetic: '/repju\'teiʃən/' },
    { word: 'claim', pos: 'v.', meaning: '以…为其后果', phonetic: '/kleim/' },
    { word: 'victim', pos: 'n.', meaning: '受害者，牺牲品', phonetic: '/\'viktim/' },
    { word: 'vicar', pos: 'n.', meaning: '教区牧师', phonetic: '/\'vikə/' },
    { word: 'source', pos: 'n.', meaning: '来源', phonetic: '/sɔ:s/' },
    { word: 'income', pos: 'n.', meaning: '收入', phonetic: '/\'inkʌm/' },
    { word: 'trunk', pos: 'n.', meaning: '树干', phonetic: '/trʌŋk/' }
  ],
}
const articleNce2L59: Article = {
  original: {
    paragraphs: [
      "Our dog, Rex, used to sit outside our front gate and dark. Every time he wanted to come into the garden he would bark until someone opened the gate. As the neighbours complained of the noise, my husband spent weeks training him to press his paw on the latch to let himself in. Rex soon became an expert at opening the gate. However, when I was going out shopping last week, I noticed him in the garden near the gate. This time he was barking so that someone would let him out! Since then, he has developed another bad habit. As soon as he opens the gate from the outside, he comes into the garden and waits until the gate shuts. Then he sits and barks until someone lets him out. After this he immediately lets himself in and begins barking again. Yesterday my husband removed the gate and Rex got so annoyed we have not seen him since."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'bark', pos: 'v.', meaning: '狗叫', phonetic: '/bɑ:k/' },
    { word: 'press', pos: 'v.', meaning: '按压', phonetic: '/pres/' },
    { word: 'paw', pos: 'n.', meaning: '脚爪', phonetic: '/pɔ:/' },
    { word: 'latch', pos: 'n.', meaning: '门闩', phonetic: '/lætʃ/' },
    { word: 'expert', pos: 'n.', meaning: '专家', phonetic: '/\'ekspə:t/' },
    { word: 'develop', pos: 'v.', meaning: '养成', phonetic: '/di\'veləp/' },
    { word: 'habit', pos: 'n.', meaning: '习惯', phonetic: '/\'hæbit/' },
    { word: 'remove', pos: 'v.', meaning: '拆掉，取下', phonetic: '/ri\'mu:v/' }
  ],
}
const articleNce2L60: Article = {
  original: {
    paragraphs: [
      "At a village fair, I decided to visit a fortune-teller called Madam Bellinsky. I went into her tent and she told me to sit down. After I had given her some money, she looked into a crystal ball and said: 'A relation of yours is coming to see you. She will be arriving this evening and intends to stay for a few days. The moment you leave this tent, you will get a big surprise. A woman you know well will rush towards you. She will speak to you and then she will lead you away from this place. That is all.'",
        "As soon as I went outside, I forgot all about Madam Bellinsky because my wife hurried towards me. 'Where have you been hiding?' she asked impatiently. 'Your sister will be here in less than an hour and we must be at the station to meet her. We are late already.' As she walked away, I followed her out of the fair."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'future', pos: 'n.', meaning: '未来，前途', phonetic: '/\'fju:tʃə/' },
    { word: 'fair', pos: 'n.', meaning: '集市', phonetic: '/feə/' },
    { word: 'fortune-teller', pos: 'n.', meaning: '算命人', phonetic: '/\'fɔ:tʃən\'telə/' },
    { word: 'crystal', pos: 'n.', meaning: '水晶', phonetic: '/\'kristəl/' },
    { word: 'relation', pos: 'n.', meaning: '亲属', phonetic: '/ri\'leiʃən/' },
    { word: 'impatiently', pos: 'adv.', meaning: '不耐烦地', phonetic: '/im\'peiʃəntli/' }
  ],
}
const articleNce2L61: Article = {
  original: {
    paragraphs: [
      "The Hubble telescope was launched into space by NASA on April 20,1990 at a cost of over a billion dollars. Right from the start there was trouble with the Hubble. The pictures it sent us were very disappointing because its main mirror was faulty! NASA is now going to put the telescope right, so it will soon be sending up four astronauts to repair it. The shuttle Endeavour will be taking the astronauts to the Hubble. A robot-arm from the Endeavour will grab the telescope and hold it while the astronauts make the necessary repairs. Of course, the Hubble is above the earth's atmosphere, so it will soon be sending us the clearest pictures of the stars and distant galaxies that we have ever seen. The Hubble will tell us a great deal about the age and size of the universe. By the time you read this, the Hubble's eagle eye will have sent us thousands and thousands of wonderful pictures."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'Hubble', pos: 'n.', meaning: '哈勃', phonetic: '/\'hʌbl/' },
    { word: 'telescope', pos: 'n.', meaning: '望远镜', phonetic: '/\'teliskəup/' },
    { word: 'launch', pos: 'v.', meaning: '发射', phonetic: '/lɔ:ntʃ/' },
    { word: 'space', pos: 'n.', meaning: '空间', phonetic: '/speis/' },
    { word: 'NASA', pos: 'n.', meaning: '国家航空和宇宙航行局', phonetic: '/\'næsə/' },
    { word: 'billion', pos: 'n.', meaning: '亿', phonetic: '/\'biljən/' },
    { word: 'faulty', pos: 'adj.', meaning: '有错误的', phonetic: '/\'fɔ:lti/' },
    { word: 'astronaut', pos: 'n.', meaning: '宇航员', phonetic: '/\'æstrənɔ:t/' },
    { word: 'shuttle', pos: 'n.', meaning: '宇航飞机', phonetic: '/\'ʃʌtl/' },
    { word: 'Endeavour', pos: 'n.', meaning: '“奋进”号', phonetic: '/in\'devə/' },
    { word: 'robot-arm', pos: 'n.', meaning: '机器手', phonetic: '//' },
    { word: 'grab', pos: 'v.', meaning: '抓', phonetic: '/græb/' },
    { word: 'atmosphere', pos: 'n.', meaning: '大气层', phonetic: '/\'ætməsfiə/' },
    { word: 'distant', pos: 'adj.', meaning: '遥远的', phonetic: '/\'distənt/' },
    { word: 'galaxy', pos: 'n.', meaning: '星系', phonetic: '/\'gæləkəsi/' },
    { word: 'universe', pos: 'n.', meaning: '宇宙', phonetic: '/\'ju:nivə:s/' },
    { word: 'eagle eye', pos: 'n.', meaning: '鹰眼', phonetic: '//' }
  ],
}
const articleNce2L62: Article = {
  original: {
    paragraphs: [
      "Firemen had been fighting the forest for nearly three weeks before they could get it under control. A short time before, great trees had covered the countryside for miles around. Now, smoke still rose up from the warm ground over the desolate hills. Winter was coming on and the hills threatened the surrounding villages with destruction, for heavy rain would not only wash away the soil but would cause serious floods as well. When the fire had at last been put out, the forest authorities ordered several tons of a special type of grass-seed which would grow quickly. The seed was sprayed over the ground in huge quantities by aeroplanes. The planes had been planting seed for nearly a month when it began to rain. By then, however, in many places the grass had already taken root. In place of the great trees which had been growing there for centuries patches of green had begun to appear in the blackened soil."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'control', pos: 'n.', meaning: '控制', phonetic: '/kən\'trəul/' },
    { word: 'smoke', pos: 'n.', meaning: '烟', phonetic: '/sməuk/' },
    { word: 'desolate', pos: 'adj.', meaning: '荒凉的', phonetic: '/\'desəleit/' },
    { word: 'threaten', pos: 'v.', meaning: '威胁', phonetic: '/\'θretn/' },
    { word: 'surrounding', pos: 'adj.', meaning: '周围的', phonetic: '/sə\'raundiŋ/' },
    { word: 'destruction', pos: 'n.', meaning: '破坏，毁灭', phonetic: '/di\'strʌkʃən/' },
    { word: 'flood', pos: 'n.', meaning: '洪水，水灾', phonetic: '/flʌd/' },
    { word: 'authority', pos: 'n.', meaning: '(常用复数)当局', phonetic: '/ɔ:\'θɔriti/' },
    { word: 'grass-seed', pos: 'n.', meaning: '草籽', phonetic: '/\'gra:s\'si:d/' },
    { word: 'spray', pos: 'v.', meaning: '喷撒', phonetic: '/sprei/' },
    { word: 'quantity', pos: 'n.', meaning: '量', phonetic: '/\'kwɔntəti/' },
    { word: 'root', pos: 'n.', meaning: '根', phonetic: '/ru:t/' },
    { word: 'century', pos: 'n.', meaning: '世纪', phonetic: '/\'sentʃəri/' },
    { word: 'patch', pos: 'n.', meaning: '小片', phonetic: '/pætʃ/' },
    { word: 'blacken', pos: 'v.', meaning: '变黑，发暗', phonetic: '/\'blækən/' }
  ],
}
const articleNce2L63: Article = {
  original: {
    paragraphs: [
      "Jeremy Hampden has a large circle of friends and if very popular at parties. Everybody admires him for his great sense of humour -- everybody, that is, except his six-year-old daughter, Jenny. Recently, one of Jeremy's closest friends asked him to make a speech at a wedding reception. This is the sort of thing that Jeremy loves. He prepared the speech carefully and went to the wedding with Jenny. he had included a large number of funny stories in the speech and, of course, it was a great success. As soon as he had finished, Jenny told him she wanted to go home. Jeremy was a little disappointed by this but he did as his daughter asked. On the way home, he asked Jenny if she had enjoyed the speech. To his surprise, she said she hadn't. Jeremy asked her why this was so and she told him that she did not like to see so many people laughing at him!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'circle', pos: 'n.', meaning: '圈子', phonetic: '/\'sə:kəl/' },
    { word: 'admire', pos: 'v.', meaning: '赞美，钦佩', phonetic: '/əd\'maiə/' },
    { word: 'close', pos: 'adj.', meaning: '亲密的', phonetic: '/kləuz/' },
    { word: 'wedding', pos: 'n.', meaning: '婚礼', phonetic: '/\'wediŋ/' },
    { word: 'reception', pos: 'n.', meaning: '执行会', phonetic: '/ri\'sepʃən/' },
    { word: 'sort', pos: 'n.', meaning: '种类', phonetic: '/sɔ:t/' }
  ],
}
const articleNce2L64: Article = {
  original: {
    paragraphs: [
      "In 1858, a French engineer, Aime Thome de Gamond, arrived in England with a plan for a twenty-one-mile tunnel under the English Channel. He said that it would be possible to build a platform in the centre of the Channel. This platform would serve as a port and a railway station. The tunnel would be well-ventilated if tall chimneys were built above sea level. In 1860, a better plan was put forward by an Englishman, William Low. He suggested that a double railway-tunnel should be built. This would solve the problem of ventilation, for if a train entered this tunnel, it would draw in fresh air behind it. Forty-two years later a tunnel was actually begun. If, at the time, the British had not feared invasion, it would have been completed. The world had to wait almost another 100 years for the Channel Tunnel. It was officially opened on March 7,1994, finally connecting Britain to the European continent."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'tunnel', pos: 'n.', meaning: '隧道', phonetic: '/\'tʌnl/' },
    { word: 'port', pos: 'n.', meaning: '港口', phonetic: '/pɔ:t/' },
    { word: 'ventilate', pos: 'v.', meaning: '通风', phonetic: '/\'ventileit/' },
    { word: 'chimney', pos: 'n.', meaning: '烟囱', phonetic: '/\'tʃimni/' },
    { word: 'sea level', pos: 'n.', meaning: '海平面', phonetic: '//' },
    { word: 'double', pos: 'adj.', meaning: '双的', phonetic: '/\'dʌbəl/' },
    { word: 'ventilation', pos: 'n.', meaning: '通风', phonetic: '/ˌventi\'leiʃən/' },
    { word: 'fear', pos: 'v.', meaning: '害怕', phonetic: '/fiə/' },
    { word: 'invasion', pos: 'n.', meaning: '入侵，侵略', phonetic: '/in\'veiʒən/' },
    { word: 'officially', pos: 'adv.', meaning: '正式地', phonetic: '/ə\'fiʃəli/' },
    { word: 'connect', pos: 'v.', meaning: '连接', phonetic: '/kə\'nekt/' },
    { word: 'European', pos: 'adj.', meaning: '欧洲的', phonetic: '/juərə\'pi:ən/' },
    { word: 'continent', pos: 'n.', meaning: '大陆', phonetic: '/\'kɔntinənt/' }
  ],
}
const articleNce2L65: Article = {
  original: {
    paragraphs: [
      "Last Christmas, the circus owner, Jimmy Gates, decided to take some presents to a children's hospital. Dressed up as Father Christmas and accompanied by a 'guard of honour' of six pretty girls, he set off down the main street of the city riding a baby elephant called Jumbo. He should have known that the police would never allow this sort of thing. A policeman approached Jimmy and told him he ought to have gone along a side street as Jumbo was holding up the traffic. Though Jimmy agreed to go at once, Jumbo refused to move. Fifteen policemen had to push very hard to get him off the main street. The police had a difficult time, but they were most amused. 'Jumbo must weigh a few tons,' said a policeman afterwards, 'so it was fortunate that we didn't have to carry him. Of course, we should arrest him, but as he has a good record, we shall let him off this time.'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'versus', pos: 'prep.', meaning: '对', phonetic: '/\'və:səs/' },
    { word: 'Christmas', pos: 'n.', meaning: '圣诞节', phonetic: '/\'krisməs/' },
    { word: 'circus', pos: 'n.', meaning: '马戏团', phonetic: '/\'sə:kəs/' },
    { word: 'present', pos: 'n.', meaning: '礼物', phonetic: '/pri\'zent, \'prezənt/' },
    { word: 'accompany', pos: 'v.', meaning: '陪伴，随行', phonetic: '/ə\'kʌmpəni/' },
    { word: 'approach', pos: 'v.', meaning: '走近', phonetic: '/ə\'prəutʃ/' },
    { word: 'ought', pos: 'modal v', meaning: '应该', phonetic: '/ɔ:t/' },
    { word: 'weigh', pos: 'v.', meaning: '重', phonetic: '/wei/' },
    { word: 'fortunate', pos: 'adj.', meaning: '幸运的', phonetic: '/\'fɔ:tʃənət/' }
  ],
}
const articleNce2L66: Article = {
  original: {
    paragraphs: [
      "In 1963 a Lancaster bomber crashed on Wallis Island, a remote place in the South Pacific, a long way west of Samoa. The plane wasn't too badly damaged, but over the years, the crash was forgotten and the wreck remained undisturbed. Then in 1989, twenty-six years after the crash, the plane was accidentally rediscovered in an aerial survey of the island. By this time, a Lancaster bomber in reasonable condition was rare and worth rescuing. The French authorities had the plane packaged and moved in parts back to France. Now a group of enthusiasts are going to have the plane restored. It has four Rolls-Royce Merlin engines, but the group will need to have only three of them rebuilt. Imagine their surprise and delight when they broke open the packing cases and found that the fourth engine was sweet as honey -- still in perfect condition. A colony of bees had turned the engine into a hive and it was totally preserved in beeswax!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'Lancaster', pos: 'n.', meaning: '兰开斯特', phonetic: '/\'læŋkəstə/' },
    { word: 'bomber', pos: 'n.', meaning: '轰炸机', phonetic: '/\'bɔmə/' },
    { word: 'remote', pos: 'adj.', meaning: '偏僻的', phonetic: '/ri\'məut/' },
    { word: 'Pacific', pos: 'n.', meaning: '太平洋', phonetic: '/pə\'sifik/' },
    { word: 'damage', pos: 'v.', meaning: '毁坏', phonetic: '/\'dæmidʒ/' },
    { word: 'wreck', pos: 'n.', meaning: '残骸', phonetic: '/rek/' },
    { word: 'rediscover', pos: 'v.', meaning: '重新发现', phonetic: '/ri:di\'skʌvə/' },
    { word: 'aerial', pos: 'adj.', meaning: '航空的', phonetic: '/\'eəriəl/' },
    { word: 'survey', pos: 'n.', meaning: '调查', phonetic: '/\'sə:vei/' },
    { word: 'rescue', pos: 'v.', meaning: '营救', phonetic: '/\'reskju:/' },
    { word: 'package', pos: 'v.', meaning: '把…打包', phonetic: '/\'pækidʒ/' },
    { word: 'enthusiast', pos: 'n.', meaning: '热心人', phonetic: '/in\'θju:ziæst/' },
    { word: 'restore', pos: 'v.', meaning: '修复', phonetic: '/ri\'stɔ:/' },
    { word: 'imagine', pos: 'v.', meaning: '想像', phonetic: '/i\'mædʒin/' },
    { word: 'packing', pos: 'n.', meaning: '包装箱', phonetic: '/\'pækiŋ/' },
    { word: 'colony', pos: 'n.', meaning: '群', phonetic: '/\'kɔləni/' },
    { word: 'bee', pos: 'n.', meaning: '蜂', phonetic: '/bi:/' },
    { word: 'hive', pos: 'n.', meaning: '蜂房', phonetic: '/haiv/' },
    { word: 'preserve', pos: 'v.', meaning: '保护', phonetic: '/pri\'zə:v/' },
    { word: 'beeswax', pos: 'n.', meaning: '蜂蜡', phonetic: '/\'bi:zwæks/' }
  ],
}
const articleNce2L67: Article = {
  original: {
    paragraphs: [
      "Haroun Tazieff, the Polish scientist, has spent his lifetime studying active volcanoes and deep caves in all parts of the world. In 1948, he went to Lake Kivu in the Congo to observe a new volcano which he later named Kituro. Tazieff was able to set up his camp very close to the volcano while it was erupting violently. Though he managed to take a number of brilliant photographs, he could not stay near the volcano for very long. He noticed that a river of liquid rock was coming towards him. It threatened to surround him completely, but Tazieff managed to escape just in time. He waited until the volcano became quiet and he was able to return two days later. This time, he managed to climb into the mouth of Kituro so that he could take photographs and measure temperatures. Tazieff has often risked his life in this way. He has been able to tell us more about active volcanoes than any man alive."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'volcano', pos: 'n.', meaning: '火山', phonetic: '/vɔl\'keinəu/' },
    { word: 'active', pos: 'adj.', meaning: '活动的', phonetic: '/\'æktiv/' },
    { word: 'Kivu', pos: 'n.', meaning: '基伍湖', phonetic: '//' },
    { word: 'Congo', pos: 'n.', meaning: '(the～)刚果', phonetic: '/\'kɔŋgou/' },
    { word: 'Kituro', pos: 'n.', meaning: '基图罗', phonetic: '//' },
    { word: 'erupt', pos: 'v.', meaning: '(火山)喷发', phonetic: '/i\'rʌpt/' },
    { word: 'violently', pos: 'adv.', meaning: '猛烈地，剧烈地', phonetic: '/\'vaiələntli/' },
    { word: 'manage', pos: 'v.', meaning: '设法', phonetic: '/\'mænidʒ/' },
    { word: 'brilliant', pos: 'adj.', meaning: '精彩的', phonetic: '/\'briliənt/' },
    { word: 'liquid', pos: 'adj.', meaning: '液态的', phonetic: '/\'likwid/' },
    { word: 'escape', pos: 'v.', meaning: '逃脱', phonetic: '/i\'skeip/' },
    { word: 'alive', pos: 'adj.', meaning: '活着的', phonetic: '/ə\'laiv/' }
  ],
}
const articleNce2L68: Article = {
  original: {
    paragraphs: [
      "I crossed the street to avoid meeting him, but he saw me and came running towards me. It was no use pretending that I had not seen him, so I waved to him. I never enjoy meeting Nigel Dykes. He never has anything to do. No matter how busy you are, he always insists on coming with you. I had to think of a way of preventing him from following me around all morning.",
        "'Hi, Elizabeth,' Nigel answered. 'I was just wondering how to spend the morning -- until I saw you. You're not busy doing anything, are you?'",
        "'Would you mind my coming with you?' he asked, before I had finished speaking.",
        "'Then I'll come with you,' he answered. 'There's always plenty to read in the waiting room!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'persistent', pos: 'adj.', meaning: '坚持的，固执的', phonetic: '/pə\'sistənt/' },
    { word: 'avoid', pos: 'v.', meaning: '避开', phonetic: '/ə\'vɔid/' },
    { word: 'insist', pos: 'v.', meaning: '坚持做', phonetic: '/in\'sist/' }
  ],
}
const articleNce2L69: Article = {
  original: {
    paragraphs: [
      "I was being tested for a driving licence for the third time. I had been asked to drive in heavy traffic and had done so successfully. After having been instructed to drive out of town, I began to acquire confidence. Sure that I had passed, I was almost beginning to enjoy my test. The examiner must have been pleased with my performance, for he smiled and said. 'Just one more thing, Mr.Eames. Let us suppose that a child suddenly crosses the road in front of you. As soon as I tap on the window, you must stop within five feet.' I continued driving and after some time, the examiner tapped loudly, Though the sound could be heard clearly, it took me a long time to react. I suddenly pressed the brake pedal and we were both thrown forward. The examiner looked at me sadly. 'Mr.Eames,' he said, in a mournful voice, 'you have just killed that child!'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'murder', pos: 'n.', meaning: '谋杀', phonetic: '/\'mə:də/' },
    { word: 'instruct', pos: 'v.', meaning: '命令，指示', phonetic: '/in\'strʌkt/' },
    { word: 'acquire', pos: 'v.', meaning: '取得，获得', phonetic: '/ə\'kwaiə/' },
    { word: 'confidence', pos: 'n.', meaning: '信心', phonetic: '/\'kɔnfidəns/' },
    { word: 'examiner', pos: 'n.', meaning: '主考人', phonetic: '/ig\'zæminə/' },
    { word: 'suppose', pos: 'v.', meaning: '假设', phonetic: '/sə\'pəuz/' },
    { word: 'tap', pos: 'v.', meaning: '轻敲', phonetic: '/tæp/' },
    { word: 'react', pos: 'v.', meaning: '反应', phonetic: '/ri\'ækt/' },
    { word: 'brake', pos: 'n.', meaning: '刹车', phonetic: '/breik/' },
    { word: 'pedal', pos: 'n.', meaning: '踏板', phonetic: '/\'pedəl/' },
    { word: 'mournful', pos: 'adj.', meaning: '悲哀的', phonetic: '/\'mɔ:nful/' }
  ],
}
const articleNce2L70: Article = {
  original: {
    paragraphs: [
      "During a bullfight, a drunk suddenly wandered into the middle of the ring. The crowd began to shout, but the drunk was unaware of the danger. The bull was busy with the matador at the time, but it suddenly caught sight of the drunk who was shouting rude remarks and waving a red cap. Apparently sensitive to criticism, the bull forgot all about the matador and charged at the drunk. The crowd suddenly grew quiet. The drunk, however, seemed quite sure of himself. When the bull got close to him, he clumsily stepped aside to let it pass. The crowd broke into cheers and the drunk bowed. By this time, however, three men had come into the ring and they quickly dragged the drunk to safety. Even the bull seemed to feel sorry for him, for it looked on sympathetically until the drunk was out of the way before once more turning its attention to the matador."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'bullfight', pos: 'n.', meaning: '斗牛', phonetic: '/\'bulfait/' },
    { word: 'drunk', pos: 'n.', meaning: '醉汉', phonetic: '/drʌŋk/' },
    { word: 'wander', pos: 'v.', meaning: '溜达，乱走', phonetic: '/\'wɔndə, \'wɑ:n:dər/' },
    { word: 'ring', pos: 'n.', meaning: '圆形竞技场地', phonetic: '/riŋ/' },
    { word: 'unaware', pos: 'adj.', meaning: '不知道的，示觉察的', phonetic: '/ˌʌnə\'weə/' },
    { word: 'bull', pos: 'n.', meaning: '公牛', phonetic: '/bul/' },
    { word: 'matador', pos: 'n.', meaning: '斗牛士', phonetic: '/\'mætədɔ:/' },
    { word: 'remark', pos: 'n.', meaning: '评论；言语', phonetic: '/ri\'mɑ:k/' },
    { word: 'apparently', pos: 'adv.', meaning: '明显地', phonetic: '/ə\'pærəntli/' },
    { word: 'sensitive', pos: 'adj.', meaning: '敏感的', phonetic: '/\'sensitiv/' },
    { word: 'criticism', pos: 'n.', meaning: '批评', phonetic: '/\'kritisizəm/' },
    { word: 'charge', pos: 'v.', meaning: '冲上去', phonetic: '/tʃɑ:dʒ/' },
    { word: 'clumsily', pos: 'adv.', meaning: '笨拙地', phonetic: '/\'klʌmzili/' },
    { word: 'bow', pos: 'v.', meaning: '鞠躬', phonetic: '/bau/' },
    { word: 'safety', pos: 'n.', meaning: '安全地带', phonetic: '/\'seifti/' },
    { word: 'sympathetically', pos: 'adv.', meaning: '同情地', phonetic: '/ˌsimpə\'θetikəli/' }
  ],
}
const articleNce2L71: Article = {
  original: {
    paragraphs: [
      "When you visit London, one of the first things you will see is Big Ben, the famous clock which can be heard all over the world on the B.B.C. If the Houses of Parliament had hot been burned down in 1834, the great clock would never have been erected. Big Ben takes its name from Sir Benjamin Hall who was responsible for the making of the clock when the new Houses of Parliament were being built. It is not only of immense size, but is extremely accurate as well. Officials from Greenwich Observatory have the clock checked twice a day. On the B.B.C. you can hear the clock when it is actually striking because microphones are connected to the clock tower. Big Ben has rarely gone wrong. Once, however, it failed to give the correct time. A painter who had been working on the tower hung a pot of paint on one of the hands and slowed it down!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'parliament', pos: 'n.', meaning: '议会，国会', phonetic: '/\'pɑ:ləmənt/' },
    { word: 'erect', pos: 'v.', meaning: '建起', phonetic: '/i\'rekt/' },
    { word: 'accurate', pos: 'adj.', meaning: '准确的', phonetic: '/\'ækjurət/' },
    { word: 'official', pos: 'n.', meaning: '官员，行政人员', phonetic: '/ə\'fiʃəl/' },
    { word: 'Greenwich', pos: 'n.', meaning: '格林威治', phonetic: '/\'grinidʒ/' },
    { word: 'observatory', pos: 'n.', meaning: '天文台', phonetic: '/əb\'zə:vətəri/' },
    { word: 'check', pos: 'v.', meaning: '检查', phonetic: '/tʃek/' },
    { word: 'microphone', pos: 'n.', meaning: '扩音器，麦克风', phonetic: '/\'maikrəfəun/' },
    { word: 'tower', pos: 'n.', meaning: '塔', phonetic: '/\'tauə/' }
  ],
}
const articleNce2L72: Article = {
  original: {
    paragraphs: [
      "The great racing driver, Sir Malcolm Campbell, was the first man to drive at over 300 miles per hour. He set up a new world record in September 1935 at Bonneville Salt Flats, Utah. Bluebird, the car he was driving, had been specially built for him. It was over 30 feet in length and had a 2500 horse-power engine. Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car because a tyre burst during the first run. After his attempt, Campbell was disappointed to learn that his average speed had been 299 miles per hour. However, a few days later, he was told that a mistake had been made. His average speed had been 301 miles per hour. Since that time, racing drivers have reached speeds of over 400 miles an hour. Following his father's footsteps many years later, Sir Malcolm's son, Donald, also set up a world record. Like his father, he was driving a car called Bluebird."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'racing', pos: 'n.', meaning: '竞赛', phonetic: '/\'reisiŋ/' },
    { word: 'per', pos: 'prep.', meaning: '每', phonetic: '/pə:/' },
    { word: 'Utah', pos: 'n.', meaning: '犹他(美国州名)', phonetic: '/\'ju:tɑ:/' },
    { word: 'horsepower', pos: 'n.', meaning: '马力', phonetic: '/\'hɔ:sˌpauə/' },
    { word: 'burst', pos: 'v.', meaning: '爆裂', phonetic: '/bə:st/' },
    { word: 'average', pos: 'adj.', meaning: '平均的', phonetic: '/\'ævəridʒ/' },
    { word: 'footstep', pos: 'n.', meaning: '足迹', phonetic: '/\'futstep/' }
  ],
}
const articleNce2L73: Article = {
  original: {
    paragraphs: [
      "Little boys who play truant from school are unimaginative. A quiet day's fishing, or eight hours in a cinema seeing the same filmover and over again, is usually as far as they get. They have all been put to shame by a boy who, while playing truant, travelled 1600 miles. He hitch- hiked to Dover and, towards evening, went into a boat to find somewhere to sleep. When he woke up next morning, he discovered that the boat had, in the meantime, travelled to Calais. No one noticed the boy as he crept off. From there, he hitch-hiked to Paris in a lorry. The driver gave him a few biscuits and a cup of coffee and left him just outside the city. The next car [the boy stopped] did not take him into the centre of Paris as he hoped it would, but to Perpignan on the French-Spanish border. There he was picked up by a policeman and sent back to England by the local authorities. He has surely set up a record for the thousands of boys who dream of evading school."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'record-holder', pos: 'n.', meaning: '纪录保持者', phonetic: '/\'rekɔ:d\'həuldə/' },
    { word: 'truant', pos: 'n.', meaning: '逃学的孩子', phonetic: '/\'tru:ənt/' },
    { word: 'unimaginative', pos: 'adj.', meaning: '缺乏想象力的', phonetic: '/ˌʌni\'mædʒinətiv/' },
    { word: 'shame', pos: 'n.', meaning: '惭愧，羞耻', phonetic: '/ʃeim/' },
    { word: 'hitchhike', pos: 'v.', meaning: '搭便车旅行', phonetic: '/\'hitʃhaik/' },
    { word: 'meantime', pos: 'n.', meaning: '其间', phonetic: '/\'mi:ntaim/' },
    { word: 'lorry', pos: 'n.', meaning: '卡车', phonetic: '/\'lɔri/' },
    { word: 'border', pos: 'n.', meaning: '边界', phonetic: '/\'bɔ:də/' },
    { word: 'evade', pos: 'v.', meaning: '逃避，逃离', phonetic: '/i\'veid/' }
  ],
}
const articleNce2L74: Article = {
  original: {
    paragraphs: [
      "An ancient bus stopped by a dry river bed and a party of famous actors and actresses got off. Dressed in dark glasses and old clothes, they had taken special precautions so that no one should recognize them. But as they soon discovered, disguises can sometimes be too perfect.",
        "'This is a wonderful place for a picnic,' said Gloria Gleam.",
        "' It couldn't be better, Gloria,' Brinksley Meers agreed. 'No newspaper men, no film fans! Why don't we come more often?'",
        "Meanwhile, two other actors, Rockwall Slinger and Merlin Greeves, had carried two large food baskets to a shady spot under some trees. When they had all made themselves comfortable, a stranger appeared. He looked very angry.",
        "'Now you gut out of here, all of you!' he shouted: ' I'm sheriff here. Do you see that notice? It says\" No Camping\"-in case you can't read!'",
        "' Look, sheriff, 'said Rockwall,' don't be too hard on us. I'm Rockwall Slinger and this is Merlin Greeves.'",
        "' Oh, is it?' said the sheriff with a sneer. 'Well, I'm Brinksley Meers, and my other name is Gloria Gleam. Now you get out of here fast!'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'limelight', pos: 'n.', meaning: '舞台灯光', phonetic: '/\'laimlait/' },
    { word: 'precaution', pos: 'n.', meaning: '预防措施', phonetic: '/pri\'kɔ:ʃən/' },
    { word: 'fan', pos: 'n.', meaning: '狂热者，迷', phonetic: '/fæn/' },
    { word: 'shady', pos: 'adj.', meaning: '遮荫的', phonetic: '/\'ʃeidi/' },
    { word: 'sheriff', pos: 'n.', meaning: '司法长官', phonetic: '/\'ʃerif/' },
    { word: 'notice', pos: 'n.', meaning: '告示', phonetic: '/\'nəutis/' },
    { word: 'sneer', pos: 'n.', meaning: '冷笑', phonetic: '/sniə/' }
  ],
}
const articleNce2L75: Article = {
  original: {
    paragraphs: [
      "When a light passenger plane flew off course some time ago, it crashed in the mountains and its pilot was killed. The only passengers, a young woman and her two baby daughters, were unhurt. It was the middle of winter. Snow lay thick on the ground. The woman knew that the nearest village was miles away. When it grew dark. she turned a suitcase into a bed and put the children inside it, covering them with all the clothes she could find. During the night, it got terribly cold. The woman kept as near as she could to the children and even tried to get into the case herself, but it was too small. Early, next morning she heard planes passing overhead and wondered how she could send a signal. Then she had an idea. She stamped out the letters' SOS' in the snow. Fortunately, a pilot saw the signal and sent a message by radio to the nearest town. It was not long before a helicopter arrived on the scene to rescue the survivors of the scrash."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'thick', pos: 'adj.', meaning: '厚的', phonetic: '/θik/' },
    { word: 'signal', pos: 'n.', meaning: '信号', phonetic: '/\'signəl/' },
    { word: 'stamp', pos: 'v.', meaning: '跺，踩', phonetic: '/stæmp/' },
    { word: 'helicopter', pos: 'n.', meaning: '直升飞机', phonetic: '/\'helikɔptə/' },
    { word: 'scene', pos: 'n.', meaning: '现场', phonetic: '/si:n/' },
    { word: 'survivor', pos: 'n.', meaning: '幸存者', phonetic: '/sə\'vaivə/' }
  ],
}
const articleNce2L76: Article = {
  original: {
    paragraphs: [
      "'To end our special news bulletin,' said the voice of the television announcer,' we are taking you to the macaroni fields of Calabria. Macaroni has been grown in this area for over six hundred years. Two of the leading growers, Giuseppe Moldova and Ricardo Brabante, tell me that they have been expecting a splendid crop this year and harvestingn. has begun earlier than usual. Here you can see two workers who, between them, have just finished cutting three cart-loads of golden brown macaroni stalks. The whole village has been working day and night gathering and threshing this year's crop [before the September rains]. On the right, you can see Mrs Brabante herself. She has been helping her husband for thirty years now. Mrs Brabante is talking to the manager of the local factory where the crop is processed. This last scene shows you what will happen at the end of the harvest: the famous Calabrian macaroni-eating competition! Signor Fratelli, the present champion, has won it every year since 1961. And that ends our special bulletin for today, Thursday, April 1st. We are now returning you to the studio.'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'fool', pos: 'n.', meaning: '傻瓜', phonetic: '/fu:l/' },
    { word: 'bulletin', pos: 'n.', meaning: '亲闻简报', phonetic: '/\'bulətin/' },
    { word: 'announcer', pos: 'n.', meaning: '(电视、电台)播音员', phonetic: '/ə\'naunsə/' },
    { word: 'macaroni', pos: 'n.', meaning: '通心面，空心面条', phonetic: '/ˌmækə\'rəuni/' },
    { word: 'leading', pos: 'adj.', meaning: '主要的', phonetic: '/\'li:diŋ/' },
    { word: 'grower', pos: 'n.', meaning: '种植者', phonetic: '/\'grəuə/' },
    { word: 'splendid', pos: 'adj.', meaning: '极好的', phonetic: '/\'splendid/' },
    { word: 'stalk', pos: 'n.', meaning: '梗', phonetic: '/stɔ:k/' },
    { word: 'gather', pos: 'v.', meaning: '收庄稼', phonetic: '/\'gæeə/' },
    { word: 'thresh', pos: 'v.', meaning: '打(庄稼)', phonetic: '/θreʃ/' },
    { word: 'process', pos: 'v.', meaning: '加工', phonetic: '/\'prəuses/' },
    { word: 'signor', pos: 'n.', meaning: '(意大利语)先生', phonetic: '/\'si:njɔ:/' },
    { word: 'present', pos: 'adj.', meaning: '目前的', phonetic: '/pri\'zent, \'prezənt/' },
    { word: 'champion', pos: 'n.', meaning: '冠军', phonetic: '/\'tʃæmpiən/' },
    { word: 'studio', pos: 'n.', meaning: '播音室', phonetic: '/\'stju:diəu/' }
  ],
}
const articleNce2L77: Article = {
  original: {
    paragraphs: [
      "The mummy of an Egyptian woman [who died in 800 B.C.] has just had an operation. The mummy is that of Shepenmut who was once a singer in the Temple of Thebes. As there were strange marks on the X-ray plates taken of the mummy, doctors have been trying to find out whether the woman died of a rare disease. The only way to do this was to operate. The operation, which lasted for over four hours, proved to be very difficult because of the hard resin which covered the skin. The doctors removed a section of the mummy and sent it to a laboratory. They also found something which the X-ray of the god Duamutef. This god which has the head of a cow was normally placed inside a mummy. The doctors have not yet decided how the woman died. They feared that the mummy would fall to pieces when they cut it open, but fortunately this has not happened. The mummy successfully survived the operation."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'mummy', pos: 'n.', meaning: '木乃伊', phonetic: '/\'mʌmi/' },
    { word: 'Egyptian', pos: 'adj.', meaning: '埃及的', phonetic: '/i\'dʒipʃən/' },
    { word: 'temple', pos: 'n.', meaning: '庙', phonetic: '/\'tempəl/' },
    { word: 'mark', pos: 'n.', meaning: '斑点', phonetic: '/mɑ:k/' },
    { word: 'plate', pos: 'n.', meaning: '(照相)底片', phonetic: '/pleit/' },
    { word: 'disease', pos: 'n.', meaning: '疾病', phonetic: '/di\'zi:z/' },
    { word: 'last', pos: 'v.', meaning: '持续', phonetic: '/lɑ:st/' },
    { word: 'prove', pos: 'v.', meaning: '显示出', phonetic: '/pru:v/' },
    { word: 'resin', pos: 'n.', meaning: '树脂', phonetic: '/\'rezin/' },
    { word: 'skin', pos: 'n.', meaning: '皮，皮肤', phonetic: '/skin/' },
    { word: 'section', pos: 'n.', meaning: '切片', phonetic: '/\'sekʃən/' },
    { word: 'figure', pos: 'n.', meaning: '(人的)体形；人像', phonetic: '/\'figə/' },
    { word: 'normally', pos: 'adv.', meaning: '通常地', phonetic: '/\'nɔ:məli/' },
    { word: 'survive', pos: 'v.', meaning: '幸免于', phonetic: '/sə\'vaiv/' }
  ],
}
const articleNce2L78: Article = {
  original: {
    paragraphs: [
      "After reading an article entitled 'Cigarette Smoking and Your Health' I lit a cigarette to calm my nerves. I smoked with concentration and pleasure as I was sure that this would be my last cigarette. For a whole week I did not smoke at all and during this time, my wife suffered terribly. I had all the usual symptoms of someone giving up smoking: a bad temper and an enormous appetite. My friends kept on offering me cigarettes and cigars. They made no effort to hide their amusement whenever I produced a packet of sweets from my pocket. After seven days of this I went to a party. Everybody around me was smoking and I felt extremely uncomfortable. When my old friend Brian urged me to accept a cigarette, it was more than I could bear. I took one guiltily, lit it and smoked with satisfaction. My wife was delighted that things had returned to normal once more. Anyway, as Brian pointed out, it is the easiest thing in the world to give up smoking. He himself has done it lots of times!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'entitle', pos: 'v.', meaning: '以…为名', phonetic: '/in\'taitl/' },
    { word: 'calm', pos: 'v.', meaning: '使镇定', phonetic: '/kɑ:m/' },
    { word: 'nerve', pos: 'n.', meaning: '神经', phonetic: '/nə:v/' },
    { word: 'concentration', pos: 'n.', meaning: '集中，专心', phonetic: '/ˌkɔnsən\'treiʃən/' },
    { word: 'suffer', pos: 'v.', meaning: '受苦，受害', phonetic: '/\'sʌfə/' },
    { word: 'symptom', pos: 'n.', meaning: '症状', phonetic: '/\'simptəm/' },
    { word: 'temper', pos: 'n.', meaning: '脾气', phonetic: '/\'tempə/' },
    { word: 'appetite', pos: 'n.', meaning: '胃口，食欲', phonetic: '/\'æpitait/' },
    { word: 'produce', pos: 'v.', meaning: '拿出', phonetic: '/prə\'dju:s, \'prɔdju:s/' },
    { word: 'urge', pos: 'v.', meaning: '力劝，怂恿', phonetic: '/ə:dʒ/' },
    { word: 'satisfaction', pos: 'n.', meaning: '满意，满足', phonetic: '/ˌsætis\'fækʃən/' },
    { word: 'delighted', pos: 'adj.', meaning: '欣喜的', phonetic: '/di\'laitid/' }
  ],
}
const articleNce2L79: Article = {
  original: {
    paragraphs: [
      "I used to travel by air a great deal when I was a boy. My parents, used to live in South America and I used to fly there from Europe in the holidays. An air-hostess would take charge of me and I never had an unpleasant experience. I am used to travelling by air and only on one occasion have I ever felt frightened. After taking off, we were flying low over the city and slowly gaining height, when the plane suddenly turned round and flew back to the airport. While we were waiting to land, an air-hostess told us to keep calm and to get off the plane quietly as soon as it had touched down. Everybody on board was worried and we were curious to find out what had happened. Later we learnt that there was a very important person on board. The police had been told that a bomb had been planted on the plane. After we had landed, the plane was searched thoroughly. Fortunately, nothing was found and five hours later we were able to take off again."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'parent', pos: 'n.', meaning: '父(母)亲', phonetic: '/\'peərənt/' },
    { word: 'flight attendant', pos: 'n.', meaning: '空中乘务员', phonetic: '/\'flait əˌtendənt/' },
    { word: 'frightened', pos: 'adj.', meaning: '害怕，担惊', phonetic: '/\'fraitnd/' },
    { word: 'curious', pos: 'adj.', meaning: '急于了解，好奇的', phonetic: '/\'kjuəriəs/' },
    { word: 'bomb', pos: 'n.', meaning: '炸弹', phonetic: '/bɔm/' },
    { word: 'plant', pos: 'v.', meaning: '安放', phonetic: '/plɑ:nt/' }
  ],
}
const articleNce2L80: Article = {
  original: {
    paragraphs: [
      "Perhaps the most extraordinary building of the nineteenth century was the Crystal Palace, which was built in Hyde Park for the Great Exhibition of 1851. The Crystal Palace was different from all other buildings in the world, for it was made of iron and glass. It was one of the biggest buildings of all time and a lot of people from many countries came to see it. A great many goods were sent to the exhibition from various parts of the world. There was also a great deal of machinery on display. The most wonderful piece of machinery on show was Nasmyth's steam hammer. Though in those days, travelling was not as easy as it is today, steam boats carried thousands of visitors across the Channel from Europe. On arriving in England, they were taken to the Crystal Palace by train. There were six million visitors in all, and the profits from the exhibition were used to build museums and colleges. Later, the Crystal Palace was moved to South London. It remained one of the most famous buildings in the world until it was burnt down in 1936."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'palace', pos: 'n.', meaning: '宫殿', phonetic: '/\'pælis/' },
    { word: 'extraordinary', pos: 'adj.', meaning: '不平常的.非凡的', phonetic: '/ik\'strɔ:dinəri/' },
    { word: 'exhibition', pos: 'n.', meaning: '展览', phonetic: '/eksi\'biʃ(ə)n/' },
    { word: 'iron', pos: 'n.', meaning: '铁', phonetic: '/\'aiən/' },
    { word: 'various', pos: 'adj.', meaning: '各种各样的', phonetic: '/\'veəriəs/' },
    { word: 'machinery', pos: 'n.', meaning: '机器', phonetic: '/mə\'ʃi:nəri/' },
    { word: 'display', pos: 'n.', meaning: '展览', phonetic: '/di\'splei/' },
    { word: 'steam', pos: 'n.', meaning: '蒸汽', phonetic: '/sti:m/' },
    { word: 'profit', pos: 'n.', meaning: '利润', phonetic: '/\'prɔfit/' },
    { word: 'college', pos: 'n.', meaning: '学院', phonetic: '/\'kɔlidʒ/' }
  ],
}
const articleNce2L81: Article = {
  original: {
    paragraphs: [
      "When he had killed the guard, the prisoner of war quickly dragged him into the bushes. Working rapidly in the darkness, he soon changed into the dead man's clothes. Now, dressed in a blue uniform and with a rifle over his shoulder, the prisoner marched boldly up and down in front of the camp. He could hear shouting in the camp itself. Lights were blazing and men were running here and there: they had just discovered that a prisoner had escaped. At that moment, a large black car with four officers inside it, stopped at the camp gates. The officers got out and the prisoner stood to attention and saluted as they passed. When they had gone, the driver of the car came towards him. The man obviously wanted to talk. He was rather elderly with grey hair and clear blue eyes. The prisoner felt sorry for him, but there was nothing else he could do. As the man came near, the prisoner knocked him to the ground with a sharp blow. Then, jumping into the car, he drove off as quickly as he could."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'prisoner', pos: 'n.', meaning: '囚犯', phonetic: '/\'prizənə/' },
    { word: 'bush', pos: 'n.', meaning: '灌木丛', phonetic: '/buʃ/' },
    { word: 'rapidly', pos: 'adv.', meaning: '迅速地', phonetic: '/\'ræpidli/' },
    { word: 'uniform', pos: 'n.', meaning: '制服', phonetic: '/\'ju:nifɔ:m/' },
    { word: 'rifle', pos: 'n.', meaning: '来福枪，步枪', phonetic: '/\'raifl/' },
    { word: 'shoulder', pos: 'n.', meaning: '肩', phonetic: '/\'ʃəuldə/' },
    { word: 'march', pos: 'v.', meaning: '行进', phonetic: '/mɑ:tʃ/' },
    { word: 'boldly', pos: 'adv.', meaning: '大胆地', phonetic: '/\'bəuldli/' },
    { word: 'blaze', pos: 'v.', meaning: '闪耀', phonetic: '/bleiz/' },
    { word: 'salute', pos: 'v.', meaning: '行礼', phonetic: '/sə\'lu:t/' },
    { word: 'elderly', pos: 'adj.', meaning: '上了年纪的', phonetic: '/\'eldəli/' },
    { word: 'grey', pos: 'adj.', meaning: '灰白的', phonetic: '/grei/' },
    { word: 'sharp', pos: 'adj.', meaning: '猛烈的', phonetic: '/ʃɑ:p/' },
    { word: 'blow', pos: 'n.', meaning: '打击', phonetic: '/bləu/' }
  ],
}
const articleNce2L82: Article = {
  original: {
    paragraphs: [
      "Fishermen and sailors sometimes claim to have seen monsters in the sea. Though people have often laughed at stories told by seamen, it is now known that many of these 'monsters' which have at times been sighted are simply strange fish. Occasionally, unusual creatures are washed to the shore, but they are rarely caught out at sea. Some time ago, however, a peculiar fish was caught near Madagascar. A small fishing-boat was carried miles out to sea by the powerful fish as it pulled on the line. Realizing that this was no ordinary fish, the fisherman made every effort not to damage it in any way. When it was eventually brought to shore, it was found [to be over thirteen feet long]. It had a head like a horse, big blue eyes, shining silver skin, and a bright red tail, The fish, which has since been sent to a museum where it is being examined by a scientist, is called an oarfish. Such creatures have rarely been seen alive by man as they live at a depth of six hundred feet."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'monster', pos: 'n.', meaning: '怪物', phonetic: '/\'mɔnstə/' },
    { word: 'sailor', pos: 'n.', meaning: '海员', phonetic: '/\'seilə/' },
    { word: 'sight', pos: 'v.', meaning: '见到', phonetic: '/sait/' },
    { word: 'creature', pos: 'n.', meaning: '动物，生物', phonetic: '/\'kri:tʃə/' },
    { word: 'peculiar', pos: 'adj.', meaning: '奇怪的，不寻常的', phonetic: '/pi\'kju:liə/' },
    { word: 'shining', pos: 'adj.', meaning: '闪闪发光的', phonetic: '/\'ʃainiŋ/' },
    { word: 'oarfish', pos: 'n.', meaning: '桨鱼', phonetic: '/\'ɔ:fiʃ/' }
  ],
}
const articleNce2L83: Article = {
  original: {
    paragraphs: [
      "The former Prime Minister, Mr Wentworth Lane, was defeated in the recent elections. He is now retiring from political life and has gone abroad. My friend, Crawley, has always been a fanatical opponent of Mr Lane's Radical Progressive Party. After the elections, Crawley went to the former Prime Minister's house. When he asked if Mr Lane lived there, the policeman on duty told him that since his defeat, the ex-Prime Minister had gone abroad. On the following day, Crawley went to the house again. The same policeman was just walking slowly past the entrance, when Crawley asked the same question. Though a little suspicious this time, the policeman gave him the same answer. The day after, Crawley went to the house once more and asked exactly the same question. This time, the policeman lost his temper.' I told you yesterday and the day before yesterday,' he shouted, 'Mr Lane was defeated in the elections. He has retired from political life and gone to live abroad!' ' I know,' answered Crawley,' but I love to hear you say it!'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'election', pos: 'n.', meaning: '选举', phonetic: '/i\'lekʃən/' },
    { word: 'former', pos: 'adj.', meaning: '从前的', phonetic: '/\'fɔ:mə/' },
    { word: 'defeat', pos: 'v.', meaning: '打败', phonetic: '/di\'fi:t/' },
    { word: 'fanatical', pos: 'adj.', meaning: '狂热的', phonetic: '/fə\'nætikəl/' },
    { word: 'opponent', pos: 'n.', meaning: '反对者，对手', phonetic: '/ə\'pəunənt/' },
    { word: 'radical', pos: 'adj.', meaning: '激进的', phonetic: '/\'rædikəl/' },
    { word: 'progressive', pos: 'adj.', meaning: '进步的', phonetic: '/prə\'gresiv/' },
    { word: 'ex-', pos: 'prefix.', meaning: '(前缀，用于名词前)前…', phonetic: '//' },
    { word: 'suspicious', pos: 'adj.', meaning: '怀疑的', phonetic: '/sə\'spiʃəs/' }
  ],
}
const articleNce2L84: Article = {
  original: {
    paragraphs: [
      "Busmen have decided to go on strike next week. The strike is due to begin on Tuesday. No one knows how long it will last. The busmen have stated that the strike will continue until general agreement is reached about pay and working conditions. Most people believe that the strike will last for at least a week. Many owners of private cars are going to offer 'free rides' to people on their way to work. This will relieve pressure on the trains to some extent. Meanwhile, a number of university students have volunteered to drive buses while the strike lasts. All the young men are expert drivers, but before they drive any of the buses, they will have to pass a special test. The students are going to take the test in two days' time. Even so, people are going to find it difficult to get to work. But so far, the public has expressed its gratitude to the students in letters to the Press. Only one or two people have objected that the students will drive too fast!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'strike', pos: 'n.', meaning: '罢工', phonetic: '/straik/' },
    { word: 'busman', pos: 'n.', meaning: '公共汽车司机', phonetic: '/\'bʌsmən/' },
    { word: 'state', pos: 'v.', meaning: '正式提出，宣布', phonetic: '/steit/' },
    { word: 'agreement', pos: 'n.', meaning: '协议', phonetic: '/ə\'gri:mənt/' },
    { word: 'relieve', pos: 'v.', meaning: '减轻', phonetic: '/ri\'li:v/' },
    { word: 'pressure', pos: 'n.', meaning: '压力，麻烦', phonetic: '/\'preʃə/' },
    { word: 'extent', pos: 'n.', meaning: '程度', phonetic: '/ik\'stent/' },
    { word: 'volunteer', pos: 'v.', meaning: '自动提出，自愿', phonetic: '/ˌvɔlən\'tiə/' },
    { word: 'gratitude', pos: 'n.', meaning: '感激', phonetic: '/\'grætitju:d/' },
    { word: 'Press', pos: 'n.', meaning: '新闻界', phonetic: '/pres/' },
    { word: 'object', pos: 'v.', meaning: '不赞成，反对', phonetic: '/\'ɔbdʒiktˌ əb\'dʒekt/' }
  ],
}
const articleNce2L85: Article = {
  original: {
    paragraphs: [
      "I have just received a letter from my old school informing me that my former head- master, Mr Regmald Page, will be retiring next week. Pupils of the school, old and new, will be sending him a present to mark the occasion. All those who have contributed towards the gift will sign their names in a large album which will be sent to the headmaster's home. We shall all remember Mr Page for his patience and understanding and for the kindly encouragement he gave us when we went so unwillingly to school. A great many former pupils will be attending a farewell dinner in his honour next Thursday. It is a curious coincidence that the day before his retirement, Mr Page will have been teaching for a total of forty years. After he has retired, he will devote himself to gardening. For him, this will be an entirely new hobby. But this does not matter, for, as he has often remarked, one is never too old to learn."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'inform', pos: 'v.', meaning: '告诉，通知', phonetic: '/in\'fɔ:m/' },
    { word: 'headmaster', pos: 'n.', meaning: '校长', phonetic: '/ˌhed\'mɑ:stə/' },
    { word: 'contribute', pos: 'v.', meaning: '捐助，援助', phonetic: '/kən\'tribju:t/' },
    { word: 'gift', pos: 'n.', meaning: '礼物，赠品', phonetic: '/gift/' },
    { word: 'album', pos: 'n.', meaning: '签名簿，相册', phonetic: '/\'ælbəm/' },
    { word: 'patience', pos: 'n.', meaning: '耐心', phonetic: '/\'peiʃəns/' },
    { word: 'encouragement', pos: 'n.', meaning: '鼓励', phonetic: '/in\'kʌridʒmənt/' },
    { word: 'farewell', pos: 'n.', meaning: '告别', phonetic: '/feə\'wel/' },
    { word: 'honour', pos: 'n.', meaning: '敬意', phonetic: '/\'ɔnə/' },
    { word: 'coincidence', pos: 'n.', meaning: '巧合', phonetic: '/kəu\'insidəns/' },
    { word: 'total', pos: 'n.', meaning: '总数', phonetic: '/\'təutl/' },
    { word: 'devote', pos: 'v.', meaning: '致力于', phonetic: '/di\'vəut/' },
    { word: 'gardening', pos: 'n.', meaning: '园艺', phonetic: '/\'gɑ:dəniŋ/' },
    { word: 'hobby', pos: 'n.', meaning: '爱好，嗜好', phonetic: '/\'hɔbi/' }
  ],
}
const articleNce2L86: Article = {
  original: {
    paragraphs: [
      "As the man tried to swing the speed-boat round, the steering-wheel came away in his hands. He waved desperately to his companion, who had been water-skiing for the last fifteen minutes. Both men had hardly had time to realize what was happening when they were thrown violent1y into the sea. The speed-boat had struck a buoy, but it continued to move very quickly across the water. Both men had just begun to swim towards the shore. when they noticed with dismay that the speed-boat was moving in a circle. It now came straight towards them at tremendous speed. In less than a minute, it roared past them only a few feet away. After it had passed, they swam on as quickly as they could because they knew that the boat would soon return. They had just had enough time to swim out of danger when the boat again completed a circle. On this occasion, however, it had slowed down considerably. The petrol had nearly all been used up. Before long, the noise dropped completely and the boat began to drift gently across the water."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'swing', pos: 'v.', meaning: '转向', phonetic: '/swiŋ/' },
    { word: 'speedboat', pos: 'n.', meaning: '快艇', phonetic: '/\'spi:dbəut/' },
    { word: 'desperately', pos: 'adv.', meaning: '绝望地', phonetic: '/\'despəritli/' },
    { word: 'companion', pos: 'n.', meaning: '同伙，同伴', phonetic: '/kəm\'pæniən/' },
    { word: 'water ski', pos: 'phr.', meaning: '(由快艇牵引水橇)滑水', phonetic: '//' },
    { word: 'buoy', pos: 'n.', meaning: '浮标', phonetic: '/bɔi/' },
    { word: 'dismay', pos: 'n.', meaning: '沮丧', phonetic: '/dis\'mei/' },
    { word: 'tremendous', pos: 'adj.', meaning: '巨大的', phonetic: '/tri\'mendəs/' },
    { word: 'petrol', pos: 'n.', meaning: '汽油', phonetic: '/\'petrəl/' },
    { word: 'drift', pos: 'v.', meaning: '漂动，漂流', phonetic: '/drift/' },
    { word: 'gently', pos: 'adv.', meaning: '缓慢地，轻轻地', phonetic: '/\'dʒentli/' }
  ],
}
const articleNce2L87: Article = {
  original: {
    paragraphs: [
      "'At the time the murder was committed, I was travelling on the 8.0 o'clock train to London,' said the man.",
        "'Do you always catch such an early train?' asked the inspector.",
        "'Of course I do,' answered the man.' I must be at work at 10.0 o'clock. My employer will confirm that I was there on time.'",
        "' Would a later train get you to work on time?' asked the inspector.",
        "'At ten to eight. I bought a paper and waited for the train.'",
        "'I suggest,' said the inspector, 'that you are not telling the truth. I suggest that you did not catch the 8.0 o'clock train, but that you caught the 8.25 which would still get you to work on time. You see, on the morning of the murder, the 8.0 o'clock train did not run at all. It broke down at Ferngreen station and was taken off the line.'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'alibi', pos: 'n.', meaning: '不在犯罪现场', phonetic: '/\'ælibai/' },
    { word: 'commit', pos: 'v.', meaning: '犯(罪、错)', phonetic: '/kə\'mit/' },
    { word: 'inspector', pos: 'n.', meaning: '探长', phonetic: '/in\'spektə/' },
    { word: 'employer', pos: 'n.', meaning: '雇主', phonetic: '/im\'plɔiə/' },
    { word: 'confirm', pos: 'v.', meaning: '确认，证实', phonetic: '/kən\'fə:m/' },
    { word: 'suggest', pos: 'v.', meaning: '提醒', phonetic: '/sə\'dʒest/' },
    { word: 'truth', pos: 'n.', meaning: '真相', phonetic: '/tru:θ/' }
  ],
}
const articleNce2L88: Article = {
  original: {
    paragraphs: [
      "Six men have been trapped in a mine for seventeen hours. If they are not brought to the surface soon they may lose their lives. However, rescue operations are proving difficult. If explosives are used, vibrations will cause the roof of the mine to collapse. Rescue workers are therefore drilling a hole on the north side of the mine. They intend to bring the men up in a special capsule. If there had not been a hard layer of rock beneath the soil, they would have completed the job in a few hours. As it is, they have been drilling for sixteen hours and they still have a long way to go. Meanwhile, a microphone, which was lowered into the mine two hours ago, has enabled the men to keep in touch with the closest relatives. Though they are running out of food and drink, the men are cheerful and confident that they will get out soon. They have been told that rescue operations are progressing smoothly. If they knew how difficult it was to drill through the hard rock, they would lose heart."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'trap', pos: 'v.', meaning: '陷入，使陷于困境', phonetic: '/træp/' },
    { word: 'surface', pos: 'n.', meaning: '地面，表面', phonetic: '/\'sə:fis/' },
    { word: 'explosive', pos: 'n.', meaning: '炸药', phonetic: '/ik\'spləusiv/' },
    { word: 'vibration', pos: 'n.', meaning: '震动', phonetic: '/vai\'breiʃən/' },
    { word: 'collapse', pos: 'v.', meaning: '坍塌', phonetic: '/kə\'læps/' },
    { word: 'drill', pos: 'v.', meaning: '钻孔', phonetic: '/dril/' },
    { word: 'capsule', pos: 'n.', meaning: '容器', phonetic: '/\'kæpsju:l/' },
    { word: 'layer', pos: 'n.', meaning: '层', phonetic: '/\'leiə/' },
    { word: 'beneath', pos: 'prep.', meaning: '在…之下', phonetic: '/bi\'ni:θ/' },
    { word: 'lower', pos: 'v.', meaning: '放下，降低', phonetic: '/\'ləuə/' },
    { word: 'progress', pos: 'v.', meaning: '进展，进行', phonetic: '/\'prəugres, prə\'gres/' },
    { word: 'smoothly', pos: 'adv.', meaning: '顺利地', phonetic: '/\'smu:eli/' }
  ],
}
const articleNce2L89: Article = {
  original: {
    paragraphs: [
      "People will do anything to see a free show--even if it is a bad one. When the news got round that a variety show would be presented at our local cinema by the P. and U. Bird Seed Company, we all rushed to see it. We had to queue for hours to get in and there must have been several hundred people present just be- fore the show began. Unfortunately, the show was one of the dullest we have ever seen. Those who failed to get in need not have felt disappointed as many of the artistes who should have appeared did not come. The only funny things we heard that evening came from the advertiser at the beginning of the programme. He was obviously very nervous and for some minutes stood awkwardly before the microphone. As soon as he opened his mouth, everyone burst out laughing. We all know what the poor man should have said, but what he actually said was: 'This is the Poo and Ee Seed Bird Company. Good ladies, evening and gentlemen!'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'slip', pos: 'n.', meaning: '小错误', phonetic: '/slip/' },
    { word: 'comedy', pos: 'n.', meaning: '喜剧', phonetic: '/\'kɔmidi/' },
    { word: 'present', pos: 'v.', meaning: '演出', phonetic: '/pri\'zent, \'prezənt/' },
    { word: 'present', pos: 'adj.', meaning: '出席，到场的', phonetic: '/pri\'zent, \'prezənt/' },
    { word: 'queue', pos: 'v.', meaning: '排队', phonetic: '/kju:/' },
    { word: 'dull', pos: 'adj.', meaning: '枯燥，无味', phonetic: '/dʌl/' },
    { word: 'artiste', pos: 'n.', meaning: '艺人', phonetic: '/ɑ:\'ti:st/' },
    { word: 'advertiser', pos: 'n.', meaning: '报幕员', phonetic: '/\'ædvətaizə/' }
  ],
}
const articleNce2L90: Article = {
  original: {
    paragraphs: [
      "Though Brazil is one of the richest countries in the world, much of it has not yet been developed. It was mainly for this reason that the Brazilian government decided to have a new city built 600 miles north-west of Rio de Janeiro. Designed by the great architect Lucio Costa, the new city, Brasilia, replaced Rio de Janeiro as the capital of Brazif in 1960. Brasilia has been carefully planned for modern living. Its wide roads, which can take fourteen lanes of traffic, have been kept",
        "away from living areas. Children do not have to cross busy streets to go to school. Housewives can visit-shopping centres on foot, for in these specially designed living areas, cars are unnecessary. At first, the government had great difficulty in persuading people to leave Rio and to settle in Brasilia. Since 1960, however, the population has been growing all the time. Brasilia has quickly established itself as the capital of the country. The idea to have the capital moved so far inland will have a great effect on the future of Brazil."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'chip', pos: 'n.', meaning: '油煎豆片', phonetic: '/tʃip/' },
    { word: 'overfish', pos: 'v.', meaning: '过度捕捞', phonetic: '/əuvə\'fiʃ/' },
    { word: 'giant', pos: 'adj.', meaning: '巨大的', phonetic: '/\'dʒaiənt/' },
    { word: 'terrify', pos: 'v.', meaning: '吓，使恐怖', phonetic: '/\'terifai/' },
    { word: 'diver', pos: 'n.', meaning: '潜水员', phonetic: '/\'daivə/' },
    { word: 'oil rig', pos: 'n.', meaning: '石油钻塔', phonetic: '/\'ɔil ˌrig/' },
    { word: 'wit', pos: 'n.', meaning: '(复数)理智，头脑', phonetic: '/wit/' },
    { word: 'cage', pos: 'n.', meaning: '笼', phonetic: '/keidʒ/' },
    { word: 'shark', pos: 'n.', meaning: '鲨鱼', phonetic: '/ʃɑ:k/' },
    { word: 'whale', pos: 'n.', meaning: '鲸', phonetic: '/weil/' },
    { word: 'variety', pos: 'n.', meaning: '品种', phonetic: '/və\'raiəti/' },
    { word: 'cod', pos: 'n.', meaning: '鳕', phonetic: '/kɔd/' },
    { word: 'skate', pos: 'n.', meaning: '鳐', phonetic: '/skeit/' },
    { word: 'factor', pos: 'n.', meaning: '因素', phonetic: '/\'fæktə/' },
    { word: 'crew', pos: 'n.', meaning: '全体工作人员', phonetic: '/kru:/' }
  ],
}
const articleNce2L91: Article = {
  original: {
    paragraphs: [
      "A pilot noticed a balloon which seemed to be making for a Royal Air Force Station nearby. He informed the station at once, but no one there was able to explain the mystery. The officer in the control tower was very angry when he heard the news, because balloons can be a great danger to aircraft. He said that someone might by spying on the station and the pilot was ordered to keep track of the strange object. The pilot managed to circle the balloon for some time. He could make out three men in a basket under it and one of them was holding field-glasses. When the balloon was over the station, the pilot saw one of the men taking photographs. Soon afterwards, the balloon began to descend and it landed near an airfield. The police were called in, but they could not arrest anyone, for the basket contained two Members of Parliament and the Commanding Officer of the station! As the Commanding Officer explained later, one half of the station did not know what the other half was doing!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'balloon', pos: 'n.', meaning: '气球', phonetic: '/bə\'lu:n/' },
    { word: 'royal', pos: 'adj.', meaning: '皇家', phonetic: '/\'rɔiəl/' },
    { word: 'spy', pos: 'v.', meaning: '侦察', phonetic: '/spai/' },
    { word: 'track', pos: 'n.', meaning: '轨迹，踪迹', phonetic: '/træk/' },
    { word: 'binoculars', pos: 'n.', meaning: '望远镜', phonetic: '/bi\'nɔkjuləz/' }
  ],
}
const articleNce2L92: Article = {
  original: {
    paragraphs: [
      "It must have been about two in the morning when I returned home. I tried to wake up my wife by ringing the door-bell, but she was fast asleep, so I got a ladder from the shed in the garden, put it against the wall, and began climbing towards the bedroom window. I was almost there when a sarcastic voice below said,' I don't think the windows need cleaning at this time of the night.'",
        "I looked down and nearly fell off the ladder when I saw a policeman. I immediately regretted answering in the way I did, but I said, 'I enjoy cleaning windows at night.'",
        "'So do I,' answered the policeman in the same tone. 'Excuse my interrupting you. I hate to interrupt a man when he's busy working, but would you mind coming with me to the station?'",
        "'Well, I'd prefer to stay here,' I said. 'You see, I've forgotten my key.'",
        "Fortunately, the shouting woke up my wife who opened the window just as the policeman had started to climb towards me."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'fast', pos: 'adv.', meaning: '熟(睡)', phonetic: '/fɑ:st/' },
    { word: 'ladder', pos: 'n.', meaning: '梯子', phonetic: '/\'lædə/' },
    { word: 'shed', pos: 'n.', meaning: '棚子', phonetic: '/ʃed/' },
    { word: 'sarcastic', pos: 'adj.', meaning: '讽刺的，讥笑的', phonetic: '/sɑ:\'kæstik, sɑr-/' },
    { word: 'tone', pos: 'n.', meaning: '语气，腔调', phonetic: '/təun/' }
  ],
}
const articleNce2L93: Article = {
  original: {
    paragraphs: [
      "One of the most famous monuments in the world, the Statue of Liberty, was presented to the United States of America in the nineteenth century by the people of France. The great statue, which was designed by the sculptor Auguste Bartholdi, took ten years to complete. The actual figure was made of copper supported by a metal framework which had been especially constructed by Eiffel. Before it could be transported to the United States, a site had to be found for it and a pedestal had to be built. The site chosen was an island at the entrance of New York Harbour. By 1884, a statue which was 151 feet tall, had been erected in Paris. The following year, it was taken to pieces and sent to America. By the end of October 1886, the statue had been put together again and it was officially presented to the American people by Bartholdi. Ever since then, the great monument has been a symbol of liberty for the millions of people who have passed through New York Harbour to make their homes in America."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'noble', pos: 'adj.', meaning: '高尚的，壮丽的', phonetic: '/\'nəubəl/' },
    { word: 'monument', pos: 'n.', meaning: '纪念碑', phonetic: '/\'mɔnjumənt/' },
    { word: 'statue', pos: 'n.', meaning: '雕像', phonetic: '/\'stætʃu:/' },
    { word: 'liberty', pos: 'n.', meaning: '自由', phonetic: '/\'libəti/' },
    { word: 'present', pos: 'v.', meaning: '赠送', phonetic: '/pri\'zent, \'prezənt/' },
    { word: 'sculptor', pos: 'n.', meaning: '雕刻家', phonetic: '/\'skʌlptə/' },
    { word: 'actual', pos: 'adj.', meaning: '实际的，真实的', phonetic: '/\'æktʃuəl/' },
    { word: 'copper', pos: 'n.', meaning: '铜', phonetic: '/\'kɔpə/' },
    { word: 'support', pos: 'v.', meaning: '支持，支撑', phonetic: '/sə\'pɔ:t/' },
    { word: 'framework', pos: 'n.', meaning: '构架，框架', phonetic: '/\'freimwə:k/' },
    { word: 'transport', pos: 'v.', meaning: '运送', phonetic: '/træn\'spɔ:t/' },
    { word: 'site', pos: 'n.', meaning: '场地', phonetic: '/sait/' },
    { word: 'pedestal', pos: 'n.', meaning: '底座', phonetic: '/\'pedistl/' }
  ],
}
const articleNce2L94: Article = {
  original: {
    paragraphs: [
      "Experiments have proved that children can be instructed in swimming at a very early age. At a special swimming pool in Los Angeles, children become expert at holding their breath under water even before they can walk. Babies of two months old do not appear to be reluctant to enter the water, It is not long before they are so accustomed to swimming that they can pick up weights from the floor of the pool. A game that is very popular with these young swimmers is the underwater tricycle race. Tricycles are lined up on the floor of the pool seven feet under water. The children compete against each other to reach the other end of the pool. Many pedal their tricycles, but most of them prefer to push or drag them. Some children can cover the whole length of the pool without coming up for breath even once. Whether they will ever become future Olympic champions, only time will tell. Meanwhile, they should encourage those among us who cannot swim five yards before they are gasping for air."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'instruct', pos: 'v.', meaning: '指导，传授', phonetic: '/in\'strʌkt/' },
    { word: 'Los Angeles', pos: 'n', meaning: '洛杉矶', phonetic: '/lɔs\'ændʒili:z/' },
    { word: 'reluctant', pos: 'adj.', meaning: '勉强的，不愿意的', phonetic: '/ri\'lʌktənt/' },
    { word: 'weight', pos: 'n.', meaning: '重物', phonetic: '/weit/' },
    { word: 'underwater', pos: 'adj.', meaning: '水下的', phonetic: '/ˌʌndə\'wɔ:tə/' },
    { word: 'tricycle', pos: 'n.', meaning: '三轮车', phonetic: '/\'traisikəl/' },
    { word: 'compete', pos: 'v.', meaning: '比赛，对抗', phonetic: '/kəm\'pi:t/' },
    { word: 'yard', pos: 'n.', meaning: '码', phonetic: '/jɑ:d/' },
    { word: 'gasp', pos: 'v.', meaning: '喘气', phonetic: '/gɑ:sp/' }
  ],
}
const articleNce2L95: Article = {
  original: {
    paragraphs: [
      "When the Ambassador of Escalopia returned home for lunch, his wife got a shock. He looked pale and his clothes were in a frightful state.",
        "'A fire-extinguisher, my dear,' answered the Ambassador drily. 'University students set the Embassy on fire this morning.'",
        "'Good heavens!' exclaimed his wife. 'And where were you at the time?'",
        "'I was in my office as usual,' answered the Ambassador. 'The fire broke out in the basement. I went down immediately. of course, and that fool, Horst, aimed a fire-extinguisher at me. He thought I was on fire. I must definitely get that fellow posted.'",
        "The Ambassador's wife went on asking questions, when she suddenly noticed a big hole in her husband's hat. 'And how can you explain that?' she asked.",
        "'Oh, that,' said the Ambassador. 'Someone fired a shot through my office window. Accurate, don't you think? Fortunately, I wasn't wearing it at the time. If I had been, I would not have been able to get home for lunch.'"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'fantasy', pos: 'n.', meaning: '幻想故事', phonetic: '/\'fæntəsi/' },
    { word: 'ambassador', pos: 'n.', meaning: '大使', phonetic: '/æm\'bæsədə/' },
    { word: 'frightful', pos: 'adj.', meaning: '可怕的，令人吃惊的', phonetic: '/\'fraitfəl/' },
    { word: 'fire extinguisher', pos: 'n.', meaning: '灭火器', phonetic: '//' },
    { word: 'drily', pos: 'adv.', meaning: '冷淡地，枯燥无味地', phonetic: '/\'draili/' },
    { word: 'embassy', pos: 'n.', meaning: '大使馆', phonetic: '/\'embəsi/' },
    { word: 'heaven', pos: 'n.', meaning: '天，天堂', phonetic: '/\'hevən/' },
    { word: 'basement', pos: 'n.', meaning: '地下室', phonetic: '/\'beismənt/' },
    { word: 'definitely', pos: 'adv.', meaning: '肯定地', phonetic: '/\'definitli/' },
    { word: 'post', pos: 'v.', meaning: '派任', phonetic: '/pəust/' },
    { word: 'shot', pos: 'n.', meaning: '子弹', phonetic: '/ʃɔt/' }
  ],
}
const articleNce2L96: Article = {
  original: {
    paragraphs: [
      "A Festival for the Dead is held once a year in Japan. This festival is a cheerful occasion, for on this day, the dead are said to return to their homes and they are welcomed by the living. As they are expected to be hungry after their long journey, food is laid out for them. Specially-made lanterns are hung outside each house to help the dead to find their way. All night long, people dance and sing. In the early morning, the food that had been laid out for the dead is thrown into a river or into the sea as it is considered unlucky for anyone living to eat it. In towns that are near the sea, the tiny lanterns which had been hung in the streets the night before, are placed into the water when the festival is over. Thousands of lanterns slowly drift out to sea guiding the dead on their return journey to the other world. This is a moving spectacle, for crowds of people stand on the shore watching the lanterns drifting away until they can be seen no more."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'festival', pos: 'n.', meaning: '节日', phonetic: '/\'festivəl/' },
    { word: 'lantern', pos: 'n.', meaning: '灯笼', phonetic: '/\'læntən/' },
    { word: 'spectacle', pos: 'n.', meaning: '景象，壮观，场面', phonetic: '/\'spektəkəl/' }
  ],
}

const articleNce3L1: Article = {
  original: {
    paragraphs: [
      "Pumas are large, cat-like animals which are found in America. When reports came into London Zoo that a wild puma had been spotted forty-five miles south of London, they were not taken seriously. However, as the evidence began to accumulate, experts [from the Zoo] feltlv obligedbe doneto investigate, for the descriptions given by people who claimed to have seen the pumawere extraordinarily similar.",
        "The hunt for the puma began in a small village where a woman picking blackberries saw ‘a large cat’ only five yards away from her. It immediately ran away when she saw it, and experts confirmed that a puma will not attack a human being [unless it is cornered]. The search proved difficult, for the puma was often observed at one place in the morning and at another place twenty miles away in the evening. Wherever it went, it left behind ita trail of dead deer and small animals like rabbits. Paw prints were seen in a number of places and puma fur was found clinging to bushes. Several people complained of ‘cat-like noises’ at night and a businessman on a fishing tripsaw the puma up a tree. The experts were now fully convinced that the animal was a puma, but where had it come from? Asno pumas had been reported missing from any zoo in the country, this one must have been [in the possession of a private collector] and somehow managed to escape. The hunt went on for several weeks, but the puma was not caught. It is disturbing to think that a dangerous wild animal is still at large in the quiet countryside."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'puma', pos: 'n.', meaning: '美洲狮', phonetic: '/\'pju:mə/' },
    { word: 'spot', pos: 'v.', meaning: '看出，发现', phonetic: '/spɔt/' },
    { word: 'evidence', pos: 'n.', meaning: '证据', phonetic: '/\'evidəns/' },
    { word: 'accumulate', pos: 'v.', meaning: '积累，积聚', phonetic: '/ə\'kju:mjuleit/' },
    { word: 'oblige', pos: 'v.', meaning: '使…感到必须', phonetic: '/ə\'blaidʒ/' },
    { word: 'hunt', pos: 'n./v.', meaning: '追猎；寻找；打猎', phonetic: '/hʌnt/' },
    { word: 'blackberry', pos: 'n.', meaning: '黑莓', phonetic: '/\'blækbəri/' },
    { word: 'human', pos: 'n.', meaning: '人类', phonetic: '/\'hju:mən/' },
    { word: 'corner', pos: 'v./n.', meaning: '使走投无路，使陷入困境；角落', phonetic: '/\'kɔ:nə/' },
    { word: 'trail', pos: 'n.', meaning: '一串，一系列', phonetic: '/treil/' },
    { word: 'print', pos: 'n.', meaning: '印痕', phonetic: '/print/' },
    { word: 'cling', pos: 'v.', meaning: '粘', phonetic: '/kliŋ/' },
    { word: 'convince', pos: 'v.', meaning: '使…信服', phonetic: '/kən\'vins/' },
    { word: 'somehow', pos: 'adv.', meaning: '不知怎么搞的，不知什么原因', phonetic: '/\'sʌmhau/' },
    { word: 'disturb', pos: 'v.', meaning: '令人不安', phonetic: '/dis\'tə:b/' }
  ],
}
const articleNce3L2: Article = {
  original: {
    paragraphs: [
      "Our vicar is always raising money for one cause or another, but he has never managed to get enough money to have the church clock [repairedadj. The big clock [which used to strike the hours day and night] was damaged during the war and has been silent ever since.",
        "One night, however, our vicar woke up with a start: the clock was striking the hours! Looking at his watch, he saw that it was one o’clock, but the bell struck thirteen times before it stopped. Armed with a torch, the vicar went up into the clock tower [to see what was going on]. In the torchlight, he caught sight of a figure whom he immediately recognized as Bill Wilkins, our local grocer.",
        "‘I’m trying to repair the bell,’ answered Bill. ‘I’ve been coming up here night after night for weeks now. You see, I was hoping to give you a surprise.’",
        "‘You certainly did give me a surprise!’ saidthe vicar. ‘You’ve probably woken up everyone in the village as well. Still, I’m glad the bell is working again.’",
        "‘That’s the trouble, vicar,’ answered Bill. ‘It’s working all right, but I’m afraid that at one o’clock it will strike thirteen times and there’s nothing I can do about it.’",
        "‘We’ll get used to that, Bill,’ said the vicar. ‘Thirteen is not as good as one, but it’s better than nothing. Now let’s go downstairs and have a cup of tea.’"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'equal', pos: 'v.', meaning: '等于', phonetic: '/\'i:kwəl/' },
    { word: 'vicar', pos: 'n.', meaning: '牧师', phonetic: '/\'vikə/' },
    { word: 'raise', pos: 'v.', meaning: '募集，筹(款)', phonetic: '/\'reiz/' },
    { word: 'torchlight', pos: 'n.', meaning: '电筒光', phonetic: '/\'tɔ:tʃlait/' }
  ],
}
const articleNce3L3: Article = {
  original: {
    paragraphs: [
      "Some time ago, an interesting discovery was made by archaeologists on the Aegean island of Kea. An American team explored a temple which stands in an ancient city on the promontory of Ayia Irini. The city at one time must have been prosperous, for it enjoyed a high level of civilization. Houses -- often three storeys high -- were built of stone. They had large rooms with beautifully decorated walls. The city was even equipped with a drainage system, for a great many clay pipes were found beneath the narrow streets.",
        "The temple which the archaeologists explored was used as a place of worship from the fifteenth century B.C. until Roman times. In the most sacred room of the temple, clay fragments of fifteen statues were found. Each of these represented a goddess and had, at one time, been painted. The body of one statue was found among remains dating from the fifteenth century B.C. Its missing head happened to be among remains of the fifth century B.C. This head must have been found in Classical times and carefully preserved. It was very old and precious even then. When the archaeologists reconstructed the fragments, they were amazed to find that the goddess turned out to be a very modern-looking woman. She stood three feet high and her hands rested on her hips. She was wearing a full-length skirt which swept the ground. Despite her great age, she was very graceful indeed, but, so far, the archaeologists have been unable to discover her identity."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'goddess', pos: 'n.', meaning: '女神', phonetic: '/\'gɔdis/' },
    { word: 'archaeologist', pos: 'n.', meaning: '考古学家', phonetic: '/\'a:kiə\'lɔdʒist/' },
    { word: 'aegean', pos: 'adj.', meaning: '爱琴海的', phonetic: '/i:\'dʒi:ən/' },
    { word: 'explore', pos: 'v.', meaning: '考察，勘探', phonetic: '/iks\'plɔ:/' },
    { word: 'promontory', pos: 'n.', meaning: '海角', phonetic: '/\'prɔməntəri/' },
    { word: 'prosperous', pos: 'adj.', meaning: '(经济上)繁荣的，昌盛的', phonetic: '/\'prɔspərəs/' },
    { word: 'civilization', pos: 'n.', meaning: '文明', phonetic: '/\'sivilai\'zeiʃən/' },
    { word: 'storey', pos: 'n.', meaning: '楼层', phonetic: '/\'stɔ:ri/' },
    { word: 'drainage', pos: 'n.', meaning: '排水', phonetic: '/\'dreinidʒ/' },
    { word: 'worship', pos: 'n.', meaning: '崇拜', phonetic: '/\'wə:ʃip/' },
    { word: 'sacred', pos: 'adj.', meaning: '宗教的，神圣的', phonetic: '/\'seikrid/' },
    { word: 'fragment', pos: 'n.', meaning: '碎片', phonetic: '/\'frægmənt/' },
    { word: 'remains', pos: 'n.', meaning: '遗物，遗迹，废墟', phonetic: '/ri\'meinz/' },
    { word: 'classical', pos: 'adj.', meaning: '(希腊和罗马)古文化的', phonetic: '/\'klæsikəl/' },
    { word: 'reconstruct', pos: 'v.', meaning: '修复', phonetic: '/\'ri:kəns\'trʌkt/' },
    { word: 'rest', pos: 'v.', meaning: '倚放，放置', phonetic: '/rest/' },
    { word: 'hip', pos: 'n.', meaning: '屁股，臀部', phonetic: '/hip/' },
    { word: 'full-length', pos: 'adj.', meaning: '(裙衣)拖地长的', phonetic: '//' },
    { word: 'graceful', pos: 'adj.', meaning: '优雅的', phonetic: '/\'greisful/' },
    { word: 'identity', pos: 'n.', meaning: '身份', phonetic: '/ai\'dentiti/' }
  ],
}
const articleNce3L4: Article = {
  original: {
    paragraphs: [
      "These days, people who do manual work often receive far more money than clerks who work in offices. People who work in offices are frequently referred to as ‘white-collar workers’ for the simple reason that they usually wear a collar and tie to go to work. Such is human nature, that a great many people are often willing to sacrifice higher pay for the privilege of becoming white-collar workers. This can give rise to curious situations, as it did in the case of Alfred Bloggs who worked as a dustman for the Ellesmere Corporation.",
        "When he got married, Alf was too embarrassed tosay anything to his wife about his job. He simply told her that he worked for the Corporation. Every morning, he left home dressed in a fine black suit. He then changed into overalls and spent the next eight hours as a dustman. Before returning home at night, he took a shower and changed back into his suit. Alf did this for over two years and his fellow dustmen kept his secret. Alf’s wife has never discovered that she married a dustman and she never will, for Alf has just found another job. He will soon be working in an office as a junior clerk. He will be earning only half as much as he used to, but he feels [that his rise in status] is well worth the loss of money. From now on, he will wear a suit all day and others will call him ‘Mr Bloggs’, not ‘Alf’."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'manual', pos: 'adj.', meaning: '体力的', phonetic: '/\'mænjuəl/' },
    { word: 'collar', pos: 'n.', meaning: '衣领', phonetic: '/\'kɔlə/' },
    { word: 'sacrifice', pos: 'v.', meaning: '牺牲，献出', phonetic: '/\'sækrifais/' },
    { word: 'privilege', pos: 'n.', meaning: '好处，特权', phonetic: '/\'privilidʒ/' },
    { word: 'dustman', pos: 'n.', meaning: '清洁工', phonetic: '/\'dʌstmən/' },
    { word: 'corporation', pos: 'n.', meaning: '公司', phonetic: '/\'kɔ:pə\'reiʃən/' },
    { word: 'overalls', pos: 'n.', meaning: '工作服', phonetic: '//' },
    { word: 'shower', pos: 'n.', meaning: '淋浴', phonetic: '/\'ʃəuə, \'ʃauə/' },
    { word: 'secret', pos: 'n.', meaning: '秘密', phonetic: '/\'si:krit/' },
    { word: 'status', pos: 'n.', meaning: '地位', phonetic: '/\'steitəs/' }
  ],
}
const articleNce3L5: Article = {
  original: {
    paragraphs: [
      "Editors of newspapers and magazines often go to extremes to provide their readers with unimportant facts and statistics. Last year a journalist had been instructed by a well-known magazine to write an article on the president’s palace in a new African republic. When the article arrived, the editor read the first sentence and then refused to publish it. The article began: ‘Hundreds of steps lead to the high wall which surrounds the president’s palace’. The editor at once sent the journalist a telegram instructing him to find out the exact number of steps and the height of the wall.",
        "The journalist immediately set out to obtain these important facts, but he took a long time to send them. Meanwhile, the editor was getting impatient, for the magazine would soon go to press. He sent the journalist two urgent telegrams, but received no reply. He sent yet another telegram informing the journalist that if he did not reply soon he would be fired. When the journalist again failed to reply, the editor reluctantly published the article [as it had originally been written]. A week later, the editor at last received a telegram from the journalist. Not only had the poor man been arrested, but he had been sent to prison as well. However, he had at last been allowed to send a cable in which he informed the editor that the he had been arrested while counting the 1,084 steps leading to the 15-foot wall which surrounded the president’s palace."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'editor', pos: 'n.', meaning: '编辑', phonetic: '/\'editə/' },
    { word: 'extreme', pos: 'n.', meaning: '极端', phonetic: '/iks\'tri:m/' },
    { word: 'statistics', pos: 'n.', meaning: '统计数字', phonetic: '/stə\'tistiks/' },
    { word: 'journalist', pos: 'n.', meaning: '新闻记者', phonetic: '/\'dʒə:nəlist/' },
    { word: 'president', pos: 'n.', meaning: '总统', phonetic: '/\'prezidənt/' },
    { word: 'palace', pos: 'n.', meaning: '王宫；宏伟的住宅', phonetic: '/\'pælis/' },
    { word: 'publish', pos: 'v.', meaning: '出版', phonetic: '/\'pʌbliʃ/' },
    { word: 'fax', pos: 'n.', meaning: '传真', phonetic: '/fæks/' },
    { word: 'impatient', pos: 'adj.', meaning: '不耐烦的', phonetic: '/im\'peiʃənt/' },
    { word: 'fire', pos: 'v.', meaning: '解雇', phonetic: '/\'faiə/' },
    { word: 'originally', pos: 'adv.', meaning: '起初，原先，从前', phonetic: '/ə\'ridʒənəli/' }
  ],
}
const articleNce3L6: Article = {
  original: {
    paragraphs: [
      "The expensive shops [in a famous arcade near Piccadilly] were just opening. At this time of the morning, the arcade was almost empty. Mr Taylor, the owner of a jewellery shop was admiring a new window display. Two of his assistants had been working busily since 8 o’clock and had only just finished. Diamond necklaces and rings had been beautifully arranged on a background of black velvet. After gazing at the display for several minutes, Mr Taylor went back into his shop.",
        "The silence was suddenly broken when a large car, with its headlights on and its horn blaring, roared down the arcade. It came to a stop outside the jeweller’s. One man stayed at the wheel while two others with black stockings (being) over their faces jumped out and smashed the window of the shop with iron bars. While this was going on, Mr Taylor was upstairs. He and his staff began throwing furniture out of the window. Chairs and tables went flying into the arcade. One of the thieves was struck by a heavy statue, but he was too busy helping himself to diamonds to notice any pain. The raid was all over in three minutes, for the men scrambled back into the car and it moved off at a fantastic speed. Just as it was leaving, Mr Taylor rushed out and ran after it throwing ashtrays and vases, but it was impossible to stop the thieves. They had got away with thousands of pounds worth of diamonds."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'smash-and-grab', pos: 'n.', meaning: '砸窗户抢劫', phonetic: '//' },
    { word: 'arcade', pos: 'n.', meaning: '有拱廊的街道(两旁常设商店)', phonetic: '/a:\'keid/' },
    { word: 'Piccadilly', pos: 'n.', meaning: '皮卡迪利大街（伦敦市中心一条著名的街道）', phonetic: '/pikə\'dili/' },
    { word: 'jewellery', pos: 'n.', meaning: '珠宝(总称)', phonetic: '//' },
    { word: 'necklace', pos: 'n.', meaning: '项链', phonetic: '/\'neklis/' },
    { word: 'ring', pos: 'n.', meaning: '戒指；环形物', phonetic: '/riŋ/' },
    { word: 'background', pos: 'n.', meaning: '背景', phonetic: '/\'bækgraund/' },
    { word: 'velvet', pos: 'n.', meaning: '天鹅绒，丝绒', phonetic: '/\'velvit/' },
    { word: 'headlight', pos: 'n.', meaning: '(汽车等)前灯', phonetic: '/\'hedlait/' },
    { word: 'blare', pos: 'v.', meaning: '发嘟嘟声，吼叫', phonetic: '/blєə/' },
    { word: 'staff', pos: 'n.', meaning: '全体工作人员', phonetic: '/sta:f/' },
    { word: 'raid', pos: 'n.', meaning: '偷袭', phonetic: '/reid/' },
    { word: 'scramble', pos: 'v.', meaning: '爬行', phonetic: '/\'skræmbl/' },
    { word: 'fantastic', pos: 'adj.', meaning: '非常大的', phonetic: '/fæn\'tæstik/' },
    { word: 'ashtray', pos: 'n.', meaning: '烟灰缸', phonetic: '/\'æʃtrei/' }
  ],
}
const articleNce3L7: Article = {
  original: {
    paragraphs: [
      "Has it ever happened to you? Have you ever put your trousers in the washing machine and then remembered there was a large bank note in your back pocket? When you rescued your trousers, did note in your back pocket? When you rescued your trousers, did you find the note was whiter than white? People who live in Britain needn't despair when they made mistakes like this (and a lot of people do)! Fortunately for them, the Bank of England has a team called Mutilated Ladies which deals with claims from people who fed their money to a machine or to their dog. Dogs, it seems, love to chew up money!",
        "A recent case concerns Jane Butlin whose fiancé, John, runs a successful furniture business. John had very good day and put his wallet containing $3,000 into the microwave oven for safekeeping. Then he and Jane went horse-riding. When they got home, Jane cooked their dinner in the microwave oven and without realizing it, cooked her fiancé's wallet as well. Imagine their dismay when they found a beautifully-cooked wallet and notes turned to ash! John went to see his bank manager who sent the remains of wallet and the money to the special department of the Bank of England in Newcastle: the Mutilate Ladies! They examined the remain and John got all his money back. 'So long as there's something to identify, we will give people their money back,' said a spokeswoman for the Bank. 'Last year, we paid $1.5m on 21,000 claims. Damaged bank notes. The Queen's head appears on English bank notes, and 'lady' refers to this."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'mutilate', pos: 'v.', meaning: '使残缺不全，毁坏', phonetic: '/\'mju:tileit/' },
    { word: 'chew', pos: 'v.', meaning: '咀嚼', phonetic: '/tʃu:/' },
    { word: 'fiancé', pos: 'n.', meaning: '未婚夫', phonetic: '/fi\'ɑ:nsei/' },
    { word: 'microwave', pos: 'n.', meaning: '微波，微波炉', phonetic: '/\'maikrəweiv/' },
    { word: 'oven', pos: 'n.', meaning: '炉灶', phonetic: '/\'ʌvn/' },
    { word: 'safekeeping', pos: 'n.', meaning: '妥善保管', phonetic: '/\'seif\'ki:piŋ/' },
    { word: 'Newcastle', pos: 'n.', meaning: '纽卡斯尔(英国港口城市)', phonetic: '/\'nju:\'ka:sl/' },
    { word: 'identify', pos: 'v.', meaning: '鉴定，识别', phonetic: '/ai\'dentifai/' },
    { word: 'spokeswoman', pos: 'n.', meaning: '女发言人', phonetic: '//' }
  ],
}
const articleNce3L10: Article = {
  original: {
    paragraphs: [
      "The great ship, Titanic, sailed forNew York from Southampton on April 10th, 1912. She was carrying 1,316 passengers and a crew of 891. Even bymodern standards, the 46,000 ton Titanic was a colossal ship. At that time, however, she was not only the largest ship that had ever been built, but was regarded as unsinkable, for she had sixteen watertight compartments. Even if two of these were flooded, she would still be able to float. The tragic sinking of this great liner will always be remembered, for she went down on her first voyage with heavy loss of life.",
        "Four days after setting out, while the Titanic was sailing across the icy waters of the North Atlantic, a huge iceberg was suddenly spotted by a lookout. After the alarm had been given, the great ship turned sharply to avoid a direct collision. The Titanic turned just in time, narrowly missing the immense wall of ice which rose over 100 feet out of the water beside her. Suddenly, there was a slight trembling sound from below, and the captain went down to see what had happened. The noise had been so faint that no one thought that the ship had been damaged. Below, the captain realized to his horror that the Titanic was sinking rapidly, for five of her sixteen watertight compartments had already been flooded! The order to abandon ship was given and hundreds of people plunged into the icy water. Asthere were not enough life-boats for everybody, 1,500 lives were lost."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'Southampton', pos: 'n.', meaning: '南安普敦(英国港口城市)', phonetic: '/sauθ\'æmptən,sauθ\'hæmptən/' },
    { word: 'colossal', pos: 'adj.', meaning: '庞大的,巨大的', phonetic: '/kə\'lɔsl/' },
    { word: 'watertight', pos: 'adj.', meaning: '不漏水的', phonetic: '//' },
    { word: 'compartment', pos: 'n.', meaning: '(轮船的)密封舱', phonetic: '/kəm\'pa:tmənt/' },
    { word: 'flood', pos: 'v.', meaning: '充满水', phonetic: '/flʌd/' },
    { word: 'float', pos: 'v.', meaning: '漂浮，飘浮', phonetic: '/fləut/' },
    { word: 'tragic', pos: 'adj.', meaning: '悲惨的', phonetic: '/\'trædʒik/' },
    { word: 'liner', pos: 'n.', meaning: '班船, 大客轮；班机', phonetic: '/\'lainə/' },
    { word: 'voyage', pos: 'n.', meaning: '航行', phonetic: '/vɔidʒ/' },
    { word: 'iceberg', pos: 'n.', meaning: '冰山', phonetic: '/\'aisbə:g/' },
    { word: 'lookout', pos: 'n.', meaning: '瞭望员', phonetic: '/\'luk\'aut/' },
    { word: 'collision', pos: 'n.', meaning: '碰撞', phonetic: '/kə\'liʒ(ə)n/' },
    { word: 'narrowly', pos: 'adv.', meaning: '刚刚，勉强地', phonetic: '/\'nærouli/' },
    { word: 'miss', pos: 'v.', meaning: '避开', phonetic: '/mis/' },
    { word: 'slight', pos: 'adj.', meaning: '轻微的', phonetic: '/slait/' },
    { word: 'tremble', pos: 'v.', meaning: '震颤', phonetic: '/\'trembl/' },
    { word: 'faint', pos: 'adj.', meaning: '微弱的', phonetic: '/feint/' },
    { word: 'horror', pos: 'n.', meaning: '恐惧', phonetic: '/\'hɔrə/' },
    { word: 'abandon', pos: 'v.', meaning: '抛弃', phonetic: '/ə\'bændən/' },
    { word: 'plunge', pos: 'v.', meaning: '投入，跳入；陷入', phonetic: '/plʌndʒ/' },
    { word: 'lifeboat', pos: 'n.', meaning: '救生船', phonetic: '//' }
  ],
}
const articleNce3L12: Article = {
  original: {
    paragraphs: [
      "Most of us have formed an unrealistic picture of life on a desert island. We sometimes imagine a desert island to be a sort of paradise where the sun always shines. Life there is simple and good. Ripe fruit falls from the trees and you never have to work. The other side of the picture is quite the opposite. Life on a desert island is wretched. You either starve to death or live like Robinson Crusoe, waiting for a boat which never comes. Perhaps there is an element of truth in both these pictures, but few of us have had the opportunity to find out.",
        "Two men who recently spent five days on a coral island wished they had stayed there longer. They were taking a badly damaged boat from the Virgin Islands to Miami to have it repaired. During the journey, their boat began to sink. They quickly loaded a small rubber dinghy with food, matches, and tins of beer and rowed for a few miles across the Caribbean until they arrived at a tiny coral island. There were hardly any trees on the island and there was no water, but this did not prove to be a problem. The men collected rainwater in the rubber dinghy. As they had brought a spear gun with them, they had plenty to eat. They caught lobster and fish every day，and, as one of them put it ‘ate like kings’. When a passing tanker rescued them five days later, both men were genuinely sorry that they had to leave."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'desert', pos: 'v.', meaning: '(军队中)开小差', phonetic: '/\'dezət, di\'zə:t/' },
    { word: 'unrealistic', pos: 'adj.', meaning: '不真实的', phonetic: '/\'ʌnriə\'listik/' },
    { word: 'paradise', pos: 'n.', meaning: '天堂，乐土', phonetic: '/\'pærədais/' },
    { word: 'wretched', pos: 'adj.', meaning: '可怜的，艰苦的', phonetic: '/\'retʃid/' },
    { word: 'starve', pos: 'v.', meaning: '挨饿', phonetic: '/sta:v/' },
    { word: 'element', pos: 'n.', meaning: '成分', phonetic: '/\'elimənt/' },
    { word: 'opportunity', pos: 'n.', meaning: '机会', phonetic: '/\'ɔpə\'tju:niti/' },
    { word: 'coral', pos: 'n.', meaning: '珊瑚', phonetic: '/\'kɔrəl/' },
    { word: 'Virgin', pos: 'n.', meaning: '维尔京群岛', phonetic: '/\'və:dʒin/' },
    { word: 'Miami', pos: 'n.', meaning: '迈阿密(美国最南的城市)', phonetic: '/mai\'æmi/' },
    { word: 'dinghy', pos: 'n.', meaning: '救生筏，小船', phonetic: '//' },
    { word: 'Caribbean', pos: 'n.', meaning: '加勒比海', phonetic: '/\'kæri\'bi:ən/' },
    { word: 'spear', pos: 'n.', meaning: '捕鱼枪', phonetic: '/spiə/' },
    { word: 'lobster', pos: 'n.', meaning: '龙虾', phonetic: '/\'lɔbstə/' },
    { word: 'tanker', pos: 'n.', meaning: '油轮', phonetic: '/\'tæŋkə/' },
    { word: 'genuinely', pos: 'adv.', meaning: '由衷地', phonetic: '//' },
    { word: 'Robinson Crusoe', pos: 'n.', meaning: '鲁滨孙·克鲁索(《鲁滨孙漂流记》主人公)', phonetic: '//' }
  ],
}
const articleNce3L13: Article = {
  original: {
    paragraphs: [
      "After her husband had gone to work. Mrs. Richards sent her children to school and went upstairs to her bedroom. She was too excited to do any housework that morning, for in the evening she would be going to a fancy dress party with her husband. She intended to dress up as a ghost and as she had made her costume the night before, she was impatient to try it on. Though the costume consisted only of a sheet, it was very effective. After putting it on, Mrs. Richards went downstairs. She wanted to find out whether it would be comfortable to wear.",
        "Just as Mrs. Richards was entering the dinning room, there was a knock on the front door. She knew that it must be the baker. She had told him to come straight in if ever she failed to open the door and to leave the bread on the kitchen table. Not wanting to frighten the poor man, Mrs. Richards quickly hid in the small storeroom under the stairs. She heard the front door open and heavy footsteps in the hall. Suddenly the door of the storeroom was opened and a man entered. Mrs. Richards realized that it must be the man from the Electricity Board who had come to read the meter. She tried to explain the situation, saying ‘It’s only me’, but it was too late. The man let out a cry and jumped back several paces. When Mrs. Richards walked towards him, he fled, slamming the door behind him."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'costume', pos: 'n.', meaning: '化装服', phonetic: '/\'kɔstju:m/' },
    { word: 'consist', pos: 'v.', meaning: '由…组成', phonetic: '/kən\'sist/' },
    { word: 'sheet', pos: 'n.', meaning: '被单', phonetic: '/ʃi:t/' },
    { word: 'effective', pos: 'adj.', meaning: '有明显效果的，有作用的; 生效的', phonetic: '/i\'fektiv/' },
    { word: 'comfortable', pos: 'adj.', meaning: '舒适的', phonetic: '/\'kʌmfətəbl/' },
    { word: 'storeroom', pos: 'n.', meaning: '储藏室', phonetic: '/\'stɔ:rum/' },
    { word: 'electricity', pos: 'n.', meaning: '电', phonetic: '/ilek\'trisiti/' },
    { word: 'ammeter', pos: 'n.', meaning: '电表', phonetic: '/\'æmi:tə/' },
    { word: 'pace', pos: 'n.', meaning: '一步', phonetic: '/peis/' },
    { word: 'flee', pos: 'v.', meaning: '逃走', phonetic: '/fli:/' },
    { word: 'slam', pos: 'v.', meaning: '砰地关上', phonetic: '/slæm/' }
  ],
}
const articleNce3L19: Article = {
  original: {
    paragraphs: [
      "Kidnappers are rarely interested in animals, but they recently took considerable interest in Mrs. Eleanor Ramsay’s cat. Mrs. Eleanor Ramsay, a very wealthy old lady, has shared a flat with her cat, Rastus, for a great many years. Rastus leads an orderly life. He usually takes a short walk in the evenings and is always home by seven o’clock. One evening, however, he failed to arrive. Mrs. Ramsay got very worried. She looked everywhere for him but could not find him.",
        "Three days after Rastus’ disappearance, Mrs. Ramsay received an anonymous letter. The writer stated that Rastus was in safe hands and would be returned immediately if Mrs. Ramsay paid a ransom of £1,000. Mrs. Ramsay was instructed to place the money in a cardboard box and to leave it outside her door. At first, she decided to go to the police, but fearing that she would never see Rastus again -- the letter had made that quite clear -- she changed her mind. She drew £1000 from her bank and followed the kidnapper’s instructions. The next morning, the box had disappeared but Mrs. Ramsay was sure that the kidnapper would keep his word. Sure enough, Rastus arrived punctually at seven o’clock that evening. He looked very well, though he was rather thirsty, for he drank half a bottle of milk. The police were astounded when Mrs. Ramsay told them what she had done. She explained that Rastus was very dear to her. Considering the amount she paid, he was dear in more ways than one!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'dear', pos: 'adj.', meaning: '亲爱的；珍贵的；昂贵的', phonetic: '/diə/' },
    { word: 'kidnapper', pos: 'n.', meaning: '绑架者，拐骗者', phonetic: '//' },
    { word: 'considerable', pos: 'adj.', meaning: '相当大的', phonetic: '/kən\'sidərəbl/' },
    { word: 'wealthy', pos: 'adj.', meaning: '富的，有钱的', phonetic: '/\'welθi/' },
    { word: 'orderly', pos: 'adj.', meaning: '有规律的', phonetic: '/\'ɔ:dəli/' },
    { word: 'disappearance', pos: 'n.', meaning: '失踪', phonetic: '/\'disə\'piərəns/' },
    { word: 'anonymous', pos: 'adj.', meaning: '匿名的', phonetic: '/ə\'nɔniməs/' },
    { word: 'ransom', pos: 'n.', meaning: '赎金', phonetic: '/\'rænsəm/' },
    { word: 'cardboard', pos: 'n.', meaning: '硬纸板', phonetic: '/\'ka:dbɔ:d/' },
    { word: 'withdraw', pos: 'v.', meaning: '(从银行)取钱', phonetic: '/wið\'drɔ:/' },
    { word: 'punctually', pos: 'adv.', meaning: '准时地', phonetic: '//' },
    { word: 'astound', pos: 'v.', meaning: '使吃惊', phonetic: '/əs\'taund/' }
  ],
}
const articleNce3L21: Article = {
  original: {
    paragraphs: [
      "Boxing matches were very popular in England two hundred years ago. In those days, boxers fought with bare fists for prize money. Because of this, they were known as ‘prizefighters’. However, boxing was very crude, for there were no rules and a prizefighter could be seriously injured or even killed during a match.",
        "One of the most colourful figures in boxing history was Daniel Mendoza, who was born in 1764. The use of gloves was not introduced until 1860 when the Marquis of Queensberry drew up the first set of rules. Though he was technically a prizefighter, Mendoza did much to change crude prizefighting into a sport, for he brought science to the game. In this day, Mendoza enjoyed tremendous popularity. He was adored by rich and poor alike.",
        "Mendoza rose to fame swiftly after a boxing match when he was only fourteen years old. This attracted the attention of Richard Humphries who was then the most eminent boxer in England. He offered to train Mendoza and his young pupil was quick to learn. In fact, Mendoza soon became so successful that Humphries turned against him. The two men quarrelled bitterly and it was clear that the argument could only be settled by a fight. A match was held at Stilton where both men fought for an hour. The public bet a great deal of money on Mendoza, but he was defeated. Mendoza met Humphries in the ring on a later occasion and he lost for a second time. It was not until his third match in 1790 that he finally beat Humphries and became Champion of England. Meanwhile, he founded a highly successful Academy and even Lord Byron became one of his pupils. He earned enormous sums of money and was paid as much as £100 for a single appearance. Despite this, he was so extravagant that he was always in debt. After he was defeated by a boxer called Gentleman Jackson, he was quickly forgotten. He was sent to prison for failing to pay his debts and died in poverty in 1836."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'boxing', pos: 'n.', meaning: '拳击', phonetic: '/\'bɔksiŋ/' },
    { word: 'boxer', pos: 'n.', meaning: '拳击手', phonetic: '/\'bɔksə/' },
    { word: 'bare', pos: 'adj.', meaning: '赤裸的；空荡的', phonetic: '/bєə/' },
    { word: 'prizefighter', pos: 'n.', meaning: '职业拳击手(尤指古时赤手拳击手)', phonetic: '//' },
    { word: 'crude', pos: 'adj.', meaning: '粗野的', phonetic: '/kru:d/' },
    { word: 'marquis', pos: 'n.', meaning: '侯爵', phonetic: '/\'ma:kwis/' },
    { word: 'technically', pos: 'adv.', meaning: '严格根据法律意义地', phonetic: '/\'teknikəli/' },
    { word: 'science', pos: 'n.', meaning: '科学', phonetic: '/\'saiəns/' },
    { word: 'popularity', pos: 'n.', meaning: '名望', phonetic: '/\'pɔpju\'læriti/' },
    { word: 'adore', pos: 'v.', meaning: '崇拜，爱戴；非常喜欢', phonetic: '/ə\'dɔ:/' },
    { word: 'alike', pos: 'adv.', meaning: '一样地', phonetic: '/ə\'laik/' },
    { word: 'fame', pos: 'n.', meaning: '名声', phonetic: '/feim/' },
    { word: 'eminent', pos: 'adj.', meaning: '著名的，杰出的', phonetic: '/\'eminənt/' },
    { word: 'bitterly', pos: 'adv.', meaning: '厉害地', phonetic: '/\'bitəli/' },
    { word: 'bet', pos: 'v.', meaning: '打赌', phonetic: '/bet/' },
    { word: 'academy', pos: 'n.', meaning: '专业学校', phonetic: '/ə\'kædəmi/' },
    { word: 'extravagant', pos: 'adj.', meaning: '浪费的，奢侈的', phonetic: '/iks\'trævigənt/' },
    { word: 'poverty', pos: 'n.', meaning: '贫困', phonetic: '/\'pɔvəti/' }
  ],
}
const articleNce3L22: Article = {
  original: {
    paragraphs: [
      "Some plays are so successful that they run for years on end, In many ways, this is unfortunate for the poor actors who are required to go on repeating the same lines night after night. One would expect them to know their parts by heart and never have cause to falter. Yet this is not always the case.",
        "A famous actor in a highly successful play was once cast in the role of an aristocrat who had been imprisoned in the Bastille for twenty years. In the last act, a gaoler would always come on to the stage with a letter which he would hand to the prisoner. Even though the noble was expected to read the letter at each performance, he always insisted that it should be written out in full.",
        "One night, the gaoler decided to play a joke on his colleague to find out if, after so many performances, he had managed to learn the contents of the letter by heart. The curtain went up on the final act of the play and revealed the aristocrat sitting alone behind bars in his dark cell. Just then, the gaoler appeared with the precious letter in his bands. He entered the cell and presented the letter to the aristocrat. But the copy [he gave him] had not been written out in full as usual. It was simply a blank sheet of paper. The gaoler looked on eagerly, anxious to see if his fellow actor had at last learnt his lines. The noble stared at the blank sheet of paper for a few seconds. Then, squinting his eyes, he said: ‘The light is dim. Read the letter to me.’ And he promptly handed the sheet of paper to the gaoler. Finding that he could not remember a word of the letter either, the gaoler replied: ‘The light is indeed dim, sire. I must get my glasses.’ With this, he hurried off the stage. Much to the aristocrat’s amusement, the gaoler returned a few moments later with a pair of glasses and the usual copy of the letter which he proceeded to read to the prisoner."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'run', pos: 'v.', meaning: '(戏剧，电影等)连演，连映', phonetic: '/rʌn/' },
    { word: 'lines', pos: 'n.', meaning: '(剧本中的)台词', phonetic: '//' },
    { word: 'part', pos: 'n.', meaning: '剧中的角色，台词', phonetic: '/pa:t/' },
    { word: 'falter', pos: 'v.', meaning: '支吾，结巴说', phonetic: '/\'fɔ:ltə/' },
    { word: 'cast', pos: 'v.', meaning: '选派……扮演角色', phonetic: '/ka:st/' },
    { word: 'role', pos: 'n.', meaning: '角色', phonetic: '/rəul/' },
    { word: 'aristocrat', pos: 'n.', meaning: '贵族', phonetic: '/\'æristəkræt/' },
    { word: 'imprison', pos: 'v.', meaning: '关押', phonetic: '/im\'prizn/' },
    { word: 'Bastille', pos: 'n.', meaning: '巴士底狱', phonetic: '//' },
    { word: 'gaoler', pos: 'n.', meaning: '监狱长，看守', phonetic: '//' },
    { word: 'colleague', pos: 'n.', meaning: '同事', phonetic: '/\'kɔli:g/' },
    { word: 'curtain', pos: 'n.', meaning: '(舞台上的)幕布', phonetic: '/\'kə:tn/' },
    { word: 'reveal', pos: 'v.', meaning: '使显露;泄漏', phonetic: '/ri\'vi:l/' },
    { word: 'cell', pos: 'n.', meaning: '单人监房，监号', phonetic: '/sel/' },
    { word: 'blank', pos: 'adj.', meaning: '空白的', phonetic: '/blæŋk/' },
    { word: 'squint', pos: 'v.', meaning: '眯着(眼)看，瞄', phonetic: '/skwint/' },
    { word: 'dim', pos: 'adj.', meaning: '昏暗的', phonetic: '/dim/' },
    { word: 'sire', pos: 'n.', meaning: '(古用法)陛下', phonetic: '/\'saiə/' },
    { word: 'proceed', pos: 'v.', meaning: '继续进行', phonetic: '/prə\'si:d/' }
  ],
}
const articleNce3L24: Article = {
  original: {
    paragraphs: [
      "We often read in novels how a seemingly respectable person or family has some terrible secret which has been concealed from strangers for years. The English language possesses a vivid saying to describe this sort of situation. The terrible secret is called ‘a skeleton in the cupboard’. At some dramatic moment in the story, the terrible secret becomes known and a reputation is ruined. The reader’s hair stands on end when he reads in the final pages of the novel that the heroine, a dear old lady who had always been so kind to everybody, had, in her youth, poisoned every one of her five husbands.",
        "It is all very well for such things to occur in fiction. To varying degrees, we all have secrets which we do not want even our closest friends to learn, but few of us have skeletons in the cupboard. The only person I know [who has a skeleton in the cupboard] is George Carlton, and he is very pound of the fact. George studied medicine in his youth. Instead of becoming a doctor, however, he became a successful writer of detective stories. I once spent an uncomfortable weekend which I shall never forget at his house. George showed me to the guestroom which, he said, was rarely used. He told me to unpack my things and then come down to dinner. After I had stacked my shirts and underclothes in two empty drawers, I decided to hang in the cupboard one of the two suits [I had brought] with me. I opened the cupboard door and then stood in front of it petrified. A skeleton was dangling before my eyes. The sudden movement of the door made it sway slightly and it gave me the impression that it was about to leap out at me. Dropping my suit, I dashed downstairs to tell George. This was worse than ‘a terrible secret’; this was a real skeleton! But George was unsympathetic. ‘Oh, that,’ he said with a smile as if he were talking about an old friend. ‘That's Sebastian. You forget that I was a medical student once upon a time.’"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'skeleton', pos: 'n.', meaning: '骷髅', phonetic: '/\'skelitən/' },
    { word: 'Seemingly', pos: 'adv.', meaning: '表面上地', phonetic: '//' },
    { word: 'Respectable', pos: 'adj.', meaning: '体面的，雅观的', phonetic: '/ris\'pektəbl/' },
    { word: 'conceal', pos: 'v.', meaning: '隐藏，隐瞒', phonetic: '/kən\'si:l/' },
    { word: 'vivid', pos: 'adj.', meaning: '生动的', phonetic: '/\'vivid/' },
    { word: 'dramatic', pos: 'adj.', meaning: '令人激动的，扣人心弦的', phonetic: '/drə\'mætik/' },
    { word: 'ruin', pos: 'v.', meaning: '毁坏', phonetic: '/\'ruin/' },
    { word: 'heroine', pos: 'n.', meaning: '女主人公', phonetic: '/\'herəuin/' },
    { word: 'fiction', pos: 'n.', meaning: '小说', phonetic: '/\'fikʃən/' },
    { word: 'varying', pos: 'adj.', meaning: '不同的', phonetic: '//' },
    { word: 'medicine', pos: 'n.', meaning: '医学', phonetic: '/\'medisin/' },
    { word: 'guestroom', pos: 'n.', meaning: '(家庭中的)客房', phonetic: '//' },
    { word: 'unpack', pos: 'vt.', meaning: '(从箱中)取出', phonetic: '/\'ʌn\'pæk/' },
    { word: 'stack', pos: 'v./n.', meaning: '(整齐地)堆放，排放；堆', phonetic: '/stæk/' },
    { word: 'underclothes', pos: 'n.', meaning: '内衣', phonetic: '/\'ʌndəkləuðz/' },
    { word: 'drawer', pos: 'n.', meaning: '抽屉', phonetic: '/drɔ:/' },
    { word: 'petrify', pos: 'v.', meaning: '使惊呆', phonetic: '/\'petrifai/' },
    { word: 'dangle', pos: 'v.', meaning: '悬挂', phonetic: '/\'dæŋgl/' },
    { word: 'sway', pos: 'v.', meaning: '摇摆', phonetic: '/swei/' },
    { word: 'unsympathetic', pos: 'adj.', meaning: '不表同情的，无动于衷的', phonetic: '/\'ʌn\'simpə\'θetik/' },
    { word: 'medical', pos: 'adj.', meaning: '医学的', phonetic: '/\'medikəl/' }
  ],
}
const articleNce3L26: Article = {
  original: {
    paragraphs: [
      "No one can avoid being influenced by advertisements. Much as we may pride ourselves on our good taste, we are no longer free to choose the things we want, for advertising exerts a subtle influence on us. In their efforts to persuade us to buy this or that product, advertisers have made a close study of human nature and have classified all our little weaknesses.",
        "Advertisers discovered years ago that all of us love to get something for nothing. An advertisement which begins with the magic word FREE can rarely go wrong. These days, advertisers not only offer free samples, but free cars, free houses, and free trips round the world as well. They devise hundreds of competitions which will enable us to win huge sums of money. Radio and television have made it possible for advertisers to capture the attention of millions of people in this way.",
        "During a radio programme, a company of biscuit manufacturers once asked listeners to bake biscuits and send them to their factory. They offered to pay $2 a pound for the biggest biscuit baked by a listener. The response to this competition was tremendous. Before long, biscuits of all shapes and sizes began arriving at the factory. One lady brought in a biscuit on a wheelbarrow. It weighed nearly 500 pounds. A little later, a man came along with a biscuit which occupied the whole boot of his car. All the biscuits [that were sent] were carefully weighed. The largest was 713 pounds. It seemed certain that this would win the prize. But just before the competition closed, a lorry arrived at the factory with a truly colossal biscuit which weighed 2,400 pounds. It had been baked by a college student who had used over 1,000 pounds of flour, 800 pounds of sugar, 200 pounds of fat, and 400 pounds of various other ingredients. It was so heavy that a crane had to be used to remove it from the lorry. The manufacturers had to pay more money than they had anticipated, for they bought the biscuit from the student for $4,800."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'influence', pos: 'v.', meaning: '影响', phonetic: '/\'influəns/' },
    { word: 'pride', pos: 'v.', meaning: '骄傲', phonetic: '/praid/' },
    { word: 'taste', pos: 'n.', meaning: '鉴赏力;品尝', phonetic: '/teist/' },
    { word: 'exert', pos: 'v.', meaning: '施加', phonetic: '/ig\'zə:t/' },
    { word: 'subtle', pos: 'adj.', meaning: '微妙的，难以捉摸的', phonetic: '/\'sʌbtl/' },
    { word: 'advertiser', pos: 'n.', meaning: '做广告的人', phonetic: '/\'ædvətaizə/' },
    { word: 'classify', pos: 'v.', meaning: '分类', phonetic: '/\'klæsifai/' },
    { word: 'magic', pos: 'adj.', meaning: '有奇妙作用的', phonetic: '/\'mædʒik/' },
    { word: 'sample', pos: 'n.', meaning: '样品', phonetic: '/\'sa:mpl/' },
    { word: 'devise', pos: 'v.', meaning: '设计，想出', phonetic: '/di\'vaiz/' },
    { word: 'capture', pos: 'v.', meaning: '吸引，赢得', phonetic: '/\'kæptʃə/' },
    { word: 'manufacturer', pos: 'n.', meaning: '生产厂家，制造商', phonetic: '/\'mænju\'fæktʃərə/' },
    { word: 'wheelbarrow', pos: 'n.', meaning: '独轮手推车', phonetic: '/\'wi:l\'bærəu/' },
    { word: 'boot', pos: 'n.', meaning: '(汽车尾部的)行李箱', phonetic: '/bu:t/' },
    { word: 'ingredient', pos: 'n.', meaning: '配料', phonetic: '/in\'gri:djənt/' },
    { word: 'crane', pos: 'n.', meaning: '起重机', phonetic: '/krein/' },
    { word: 'anticipate', pos: 'v.', meaning: '预期，预料', phonetic: '/æn\'tisipeit/' }
  ],
}
const articleNce3L27: Article = {
  original: {
    paragraphs: [
      "It has been said that everyone lives by selling something. In the light of this statement, teachers live by selling knowledge, philosophers () by selling wisdom and priests () by selling spiritual comfort. Though it may be possible to measure the value of material goods in terms of money, it is extremely difficult to estimate the true value of the services which people perform for us. There are times when we would willingly give everything [we possess] to save our lives, yet we might grudge paying a surgeon a high fee for offering us precisely this service. The conditions of society are such that skills have to be paid for in the same way that goods are paid for at a shop. Everyone has something to sell.",
        "Tramps seem to be the only exception to this general rule. Beggars almost sell themselves as human being to arouse the pity of passers-by. But real tramps are not beggars. They have nothing to sell and require nothing from others. In seeking independence, they do not sacrifice their human dignity. A tramp may ask you for money, but he will never ask you to feel sorry for him. He has deliberately chosen to lead the life [he leads] and is fully aware of the consequences. He may never be sure where the next meal is coming from, but he is free from the thousands of anxieties which afflict other people. His few material possessions make it possible for him to move from place to place with ease. By having to sleep in the open, he gets far closer to the world of nature than most of us ever do. He may hunt, beg, or steal occasionally to keep himself alive; he may even, in times of real need, do a little work; but he will never sacrifice his freedom. We often speak of tramps with contempt and put them in the same class as beggars, but how many of us can honestly say that we have not felt a little envious of their simple way of life and their freedom from care?in sth / doing sth ad. in return / reward of ad.in arouse ，",
        "with easy a. it has been said be aware of. anxiety ； upset free from/of sth …protect A from B spare harm"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'philosopher', pos: 'n.', meaning: '哲学家', phonetic: '/fi\'lɔsəfə/' },
    { word: 'wisdom', pos: 'n.', meaning: '智慧', phonetic: '/\'wizdəm/' },
    { word: 'priest', pos: 'n.', meaning: '牧师', phonetic: '/pri:st/' },
    { word: 'spiritual', pos: 'adj.', meaning: '精神上的', phonetic: '/\'spiritjuəl/' },
    { word: 'grudge', pos: 'v.', meaning: '不愿给，舍不得给', phonetic: '/grʌdʒ/' },
    { word: 'surgeon', pos: 'n.', meaning: '外科大夫', phonetic: '/\'sə:dʒən/' },
    { word: 'passer-by', pos: 'n.', meaning: '过路人(复数passers-by)', phonetic: '//' },
    { word: 'dignity', pos: 'n.', meaning: '尊严', phonetic: '/\'digniti/' },
    { word: 'deliberately', pos: 'adv.', meaning: '故意地', phonetic: '/di\'libəritli/' },
    { word: 'consequence', pos: 'n.', meaning: '后果，结果', phonetic: '/\'kɔnsikwəns/' },
    { word: 'afflict', pos: 'v.', meaning: '使苦恼，折磨', phonetic: '/ə\'flikt/' },
    { word: 'ease', pos: 'n.', meaning: '容易', phonetic: '/i:z/' },
    { word: 'nature', pos: 'n.', meaning: '大自然', phonetic: '/\'neitʃə/' },
    { word: 'contempt', pos: 'n.', meaning: '蔑视', phonetic: '/kən\'tempt/' },
    { word: 'envious', pos: 'adj.', meaning: '嫉妒的', phonetic: '/\'enviəs/' }
  ],
}
const articleNce3L29: Article = {
  original: {
    paragraphs: [
      "Whether we find a joke funny or not largely depends on where we have been brought up. The sense of humour is mysteriously bound up with national characteristics. A Frenchman, for instance, might find it hard to laugh at a Russian joke. In the same way, a Russian might fail to see anything amusing in a joke which would make an Englishman laugh to tears.",
        "Most funny stories are based on comic situations. In spite of national differences, certain funny situations have a universal appeal. No matter where you live, you would find it difficult not to laugh at, say, Charlie Chaplin’s early films. However, a new type of humour, which stems largely from America, has recently come into fashion. It is called ‘sick humour’. Comedians base their jokes on tragic situations like violent death or serious accidents. Many people find this sort of joke distasteful. The following example of ‘sick humour’ will enable you to judge for yourself.",
        "A man [who had broken his right leg] was taken to hospital a few weeks before Christmas. From the moment he arrived there, he kept on pestering his doctor to tell him when he would be able to go home. He dreaded having to spend Christmas in hospital. Though the doctors did his best, the patient's recovery was slow. On Christmas Day, the man still had his right leg in plaster. He spent a miserable day in bed thinking of all the fun he was missing. The following day, however, the doctor consoled him by telling him that his chances of being able to leave hospital in time for New Year celebrationswere good. The man took heart and, sure enough, on New Year’s Eve he was able to hobble along to a party. To compensate for his unpleasant experiences in hospital, the man drank a little more than was good for him. In the process, he enjoyed himself thoroughly and kept telling everybody how much he hated hospitals. He was still mumbling something about hospitals at the end of the party when he slipped on a piece of ice and broke his left leg."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'largely', pos: 'adv.', meaning: '在很大程度上', phonetic: '/\'la:dʒli/' },
    { word: 'comic', pos: 'adj.', meaning: '喜剧的，可笑的', phonetic: '/\'kɔmik/' },
    { word: 'universal', pos: 'adj.', meaning: '普遍的', phonetic: '/\'ju:ni\'və:səl/' },
    { word: 'comedian', pos: 'n.', meaning: '滑稽演员，喜剧演员', phonetic: '/kə\'mi:djən/' },
    { word: 'distasteful', pos: 'adj.', meaning: '讨厌的', phonetic: '/dis\'teistful/' },
    { word: 'pester', pos: 'v.', meaning: '一再要求，纠缠', phonetic: '/\'pestə/' },
    { word: 'dread', pos: 'v.', meaning: '惧怕', phonetic: '/dred/' },
    { word: 'recovery', pos: 'n.', meaning: '康复', phonetic: '/ri\'kʌvəri/' },
    { word: 'plaster', pos: 'n.', meaning: '熟石膏', phonetic: '/\'pla:stə/' },
    { word: 'console', pos: 'v.', meaning: '安慰，慰问', phonetic: '/kən\'səul/' },
    { word: 'hobble', pos: 'v.', meaning: '瘸着腿走', phonetic: '/\'hɔbl/' },
    { word: 'compensate', pos: 'v.', meaning: '补偿', phonetic: '/\'kɔmpenseit/' },
    { word: 'mumble', pos: 'v.', meaning: '喃喃而语', phonetic: '/\'mʌmbl/' }
  ],
}
const articleNce3L30: Article = {
  original: {
    paragraphs: [
      "For years, villagers believed that Endley Farm was haunted. The farm was owned by two brothers, Joe and Bert Cox. They employed a few farmhands, but no one was willing to work there long. Every time a worker gave up his job, he told the same story. Farm labourers said that they always woke up to find that work had been done overnight. Hay had been cut and cowsheds had been cleaned. A farm worker, who stayed up all night, claimed to have seen a figure cutting corn in the moonlight. In time, it became an accepted fact the Cox brothers employed a conscientious ghost that did most of their work for them.",
        "No one suspected that there might be someone else on the farm who had never been seen. This was indeed the case. A short time ago, villagers were astonished to learn that the ghost of Endley had died. Everyone went to the funeral, for the ‘ghost’ was none other than Eric Cox, a third brother who was supposed to have died as a young man. After the funeral, Joe and Bert revealed a secret which they had kept for over forty years.",
        "Eric had been the eldest son of the family. He had been obliged to join the army during the first World War. As he hated army life he decided to desert his regiment. When he learnt that he would be sent abroad, he returned to the farm and his father hid him until the end of the war. Fearing the authorities, Eric remained in hiding after the war as well. His father told everybody that Eric had been killed in action. The only other people who knew the secret were Joe and Bert. They did not even tell their wives. When their father died, they thought it their duty to keep Eric in hiding. All these years, Eric had lived as a recluse. He used to sleep during the day and work at night, (being) quite unaware of the fact that he had become the ghost of Endley. When he died, however, his brothers found it impossible to keep the secret any longer."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'labourer', pos: 'n.', meaning: '劳动者(也做laborer)', phonetic: '/\'leibərə/' },
    { word: 'overnight', pos: 'adv.', meaning: '一夜期间', phonetic: '/\'əuvənait/' },
    { word: 'hay', pos: 'n.', meaning: '干草', phonetic: '/hei/' },
    { word: 'corn', pos: 'n.', meaning: '谷物', phonetic: '/kɔ:n/' },
    { word: 'moonlight', pos: 'n.', meaning: '月光', phonetic: '/\'mu:nlait/' },
    { word: 'conscientious', pos: 'adj.', meaning: '认真的', phonetic: '/\'kɔnʃi\'enʃəs/' },
    { word: 'suspect', pos: 'v.', meaning: '怀疑', phonetic: '/səs\'pekt, \'sʌspekt/' },
    { word: 'desert', pos: 'v.', meaning: '(军队中)开小差', phonetic: '/\'dezət, di\'zə:t/' },
    { word: 'regiment', pos: 'n.', meaning: '(军队)团', phonetic: '/\'redʒimənt/' },
    { word: 'action', pos: 'n.', meaning: '战斗', phonetic: '/\'ækʃən/' },
    { word: 'recluse', pos: 'n.', meaning: '隐士', phonetic: '/ri\'klu:s/' }
  ],
}
const articleNce3L31: Article = {
  original: {
    paragraphs: [
      "True eccentrics never deliberately set out to draw attention to themselves. They disregard social conventions without being conscious that they are doing anything extraordinary. This invariably wins them the love and respect of others, for they add colour to the dull routine of everyday life.",
        "Up to the time of his death, Richard Colson was one of the most notable figures in our town. He was a shrewd and wealthy businessman, but the ordinary town folk hardly knew anything about this side of his life. He was known to us all as Dickie and his eccentricity had become legendary long before he died.",
        "Dickie disliked snobs intensely. Though he owned a large car, he hardly ever used it, preferring always to go on foot. Even when it was raining heavily, he refused to carry an umbrella. One day, he walked into an expensive shop after having been caught in a particularly heavy shower. He wanted to buy a £300 fur coat for his wife, but he was in such a bedraggled condition that an assistant refused to serve him. Dickie left the shop without a word and returned carrying a large cloth bag. Asit was extremely heavy, he dumped it on the counter. The assistant asked him to leave, but Dickie paid no attention to him and requested to see the manager. Recognizing who the customer was, the manager was most apologetic and reprimanded the assistant severely. When Dickie was given the fur coat, he presented the assistant with the cloth bag. It contained £300 in pennies. He insisted on the assistant’s counting the money before he left -- 72,000 pennies in all! On another occasion, he invited a number of important critics to see his private collection of modern paintings. This exhibition received a great deal of attention in the press, for though the pictures were supposed to be the work of famous artists, they had in fact been painted by Dickie. It took him four years to stage this elaborate joke simply to prove that critics do not always know what they are talking about."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'lovable', pos: 'adj.', meaning: '可爱的', phonetic: '/\'lʌvəbl/' },
    { word: 'eccentric', pos: 'n.', meaning: '(行为)古怪的人', phonetic: '/ik\'sentrik/' },
    { word: 'disregard', pos: 'v.', meaning: '不顾，无视', phonetic: '/\'disri\'ga:d/' },
    { word: 'convention', pos: 'n.', meaning: '习俗，风俗', phonetic: '/kən\'venʃən/' },
    { word: 'conscious', pos: 'adj.', meaning: '感觉（意识）到的', phonetic: '/\'kɔnʃəs/' },
    { word: 'invariably', pos: 'adv.', meaning: '总是，经常地', phonetic: '/in\'vєəriəbli/' },
    { word: 'routine', pos: 'n./a.', meaning: '常规；惯例;常规的', phonetic: '/ru:\'ti:n/' },
    { word: 'shrewd', pos: 'adj.', meaning: '精明的', phonetic: '/ʃru:d/' },
    { word: 'eccentricity', pos: 'n.', meaning: '怪癖', phonetic: '/\'eksen\'trisiti/' },
    { word: 'legendary', pos: 'adj.', meaning: '传奇般的', phonetic: '/\'ledʒəndəri/' },
    { word: 'snob', pos: 'n.', meaning: '势利小人，谄上欺下的人', phonetic: '/snɔb/' },
    { word: 'intensely', pos: 'adv.', meaning: '强烈地', phonetic: '//' },
    { word: 'bedraggled', pos: 'adj.', meaning: '拖泥带水的；又脏又湿的', phonetic: '/bi\'drægld/' },
    { word: 'dump', pos: 'v.', meaning: '把……砰的一声抛下', phonetic: '/dʌmp/' },
    { word: 'apologetic', pos: 'adj.', meaning: '道歉的', phonetic: '/əpɔlə\'dʒetik/' },
    { word: 'reprimand', pos: 'v.', meaning: '训斥', phonetic: '/\'reprima:nd/' },
    { word: 'stage', pos: 'v.', meaning: '暗中策划', phonetic: '/steidʒ/' },
    { word: 'elaborate', pos: 'adj.', meaning: '精心构思的；精致的', phonetic: '/i\'læbərit/' }
  ],
}
const articleNce3L32: Article = {
  original: {
    paragraphs: [
      "The salvage operation had been a complete failure. The small ship, the Elkor, which had been searching the Barents Sea for weeks, was on its way home. A radio message [from the mainland] had been received by the ship’s captain instructing him to give up the search. The captain knew that another attempt would be made later, for the sunken ship [he was trying to find] had been carrying a precious cargo of gold bullion.",
        "Despite the message, the captain of the Elkor decided to try once more. The sea bed was scoured with powerful nets and there was tremendous excitement on board when a chest was raised from the bottom. Though the crew were at first under the impression that the lost ship had been found, the contents of the sea-chest proved them wrong. What they had in fact found was a ship which had been sunk many years before.",
        "The chest contained the personal belongings of a seaman, Alan Fielding. There were books, clothing and photographs, together with letters which the seaman had once received from his wife. The captain of the Elkor ordered his men to salvage as much as possible from the wreck. Nothing of value was found, but the numerous items [which were brought to the surface] proved to be of great interest. From a heavy gun that was raised, the captain realized that the ship must have been a cruiser. In another sea-chest, which contained the belongings of a ship’s officer, there was an unfinished letter which had been written on March 14th, 1943. The captain learnt from the letter that the name of the lost ship was the Karen. [The most valuable find of all] was the ship’s log book, parts of which it was still possible to read. From this the captain was able to piece together all the information that had come to light. The Karen had been sailing in a convoy to Russia when she was torpedoed by an enemy submarine. This was later confirmed by a naval official at the Ministry of Defence [after the Elkor had returned home]. All the items that were found were sent to the War Museum."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'salvage', pos: 'v./n.', meaning: '救助，营救，打捞', phonetic: '/\'sælvidʒ/' },
    { word: 'Barents', pos: 'n.', meaning: '巴伦支(海)', phonetic: '/\'bærənts/' },
    { word: 'sunken', pos: 'adj.', meaning: '沉没的', phonetic: '/\'sʌŋkən/' },
    { word: 'cargo', pos: 'n.', meaning: '货物', phonetic: '/\'ka:gəu/' },
    { word: 'bullion', pos: 'n.', meaning: '金条；银条', phonetic: '/\'buljən/' },
    { word: 'scour', pos: 'v.', meaning: '彻底搜索', phonetic: '/\'skauə/' },
    { word: 'chest', pos: 'n.', meaning: '大箱子', phonetic: '/tʃest/' },
    { word: 'contents', pos: 'n.', meaning: '(复数)所装的东西', phonetic: '//' },
    { word: 'belongings', pos: 'n.', meaning: '(复数)所有物', phonetic: '/bi\'lɔŋiŋz/' },
    { word: 'item', pos: 'n.', meaning: '物件', phonetic: '/\'aitəm/' },
    { word: 'cruiser', pos: 'n.', meaning: '巡洋舰', phonetic: '/\'kru:zə/' },
    { word: 'find', pos: 'n.', meaning: '找到的物品', phonetic: '/faind/' },
    { word: 'log book', pos: 'n.', meaning: '航海日志', phonetic: '//' },
    { word: 'piece', pos: 'v.', meaning: '拼成整体', phonetic: '/pi:s/' },
    { word: 'convoy', pos: 'v./n.', meaning: '护航', phonetic: '/\'kɔnvɔi/' },
    { word: 'torpedo', pos: 'v.', meaning: '用鱼雷攻击', phonetic: '/tɔ:\'pi:dəu/' },
    { word: 'submarine', pos: 'n.', meaning: '潜水艇', phonetic: '/\'sʌbməri:n/' },
    { word: 'naval', pos: 'adj.', meaning: '海军的', phonetic: '/\'neivəl/' },
    { word: 'ministry', pos: 'n.', meaning: '(政府的)部', phonetic: '/\'ministri/' }
  ],
}
const articleNce3L33: Article = {
  original: {
    paragraphs: [
      "We have all experienced days when everything goes wrong. A day may begin well enough, but suddenly everything seems to get out of control. What invariably happens is that a great number of things choose to go wrong at precisely the same moment. It is as if a single unimportant event set up a chain of reactions. Let us suppose that you are preparing a meal and keeping an eye on the baby at the same time. The telephone rings and this marks the prelude to an unforeseen series of catastrophes. While you are on the phone, the baby pulls the tablecloth off the table, smashing half your best crockery and cutting himself in the process. You hang up hurriedly and attend to baby, crockery, etc. Meanwhile, the meal gets burnt. As if this were not enough to reduce you to tears, your husband arrives, unexpectedly bringing three guests to dinner.",
        "Things can go wrong on a big scale as a number of people recently discovered in Parramatta, a suburb of Sydney. During the rush hour one evening two cars collided and both drivers began to argue. The woman immediately behind the two cars happened to be a learner. She suddenly got into a panic and stopped her car. This made the driver following her brake hard. His wife was sitting beside him holding a large cake. As she was thrown forward, the cake went right through the windscreen and landed on the road. Seeing a cake flying through the air, a lorry driver who was drawing up alongside the car, pulled up all of a sudden. The lorry was loaded with empty beer bottles and hundreds of them slid off the back of the vehicle and on to the road. This led to yet another angry argument. Meanwhile, the traffic piled up behind. It took the police nearly an hour to get the traffic on the move again. In the meantime, the lorry driver had to sweep up hundreds of broken bottles. Only two stray dogs benefited from all this confusion, for they greedily devoured [what was left of the cake]. It was just one of those days!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'prelude', pos: 'n.', meaning: '序幕，前奏', phonetic: '/\'prelju:d/' },
    { word: 'unforeseen', pos: 'adj.', meaning: '意料之外的', phonetic: '/\'ʌnfɔ:\'si:n/' },
    { word: 'series', pos: 'n.', meaning: '系列', phonetic: '/\'siəri:z/' },
    { word: 'catastrophe', pos: 'n.', meaning: '大祸，灾难', phonetic: '/kə\'tæstrəfi/' },
    { word: 'crockery', pos: 'n.', meaning: '陶器，瓦器', phonetic: '/\'krɔkəri/' },
    { word: 'suburb', pos: 'n.', meaning: '郊区', phonetic: '/\'sʌbə:b/' },
    { word: 'collide', pos: 'v.', meaning: '猛撞', phonetic: '/kə\'laid/' },
    { word: 'learner', pos: 'n.', meaning: '初学者', phonetic: '/\'lə:nə/' },
    { word: 'panic', pos: 'n.', meaning: '惊慌，恐慌', phonetic: '/\'pænik/' },
    { word: 'windscreen', pos: 'n.', meaning: '(汽车的)挡风玻璃', phonetic: '//' },
    { word: 'alongside', pos: 'prep.', meaning: '在……的旁边，与……并排', phonetic: '/ə\'lɔŋ\'said/' },
    { word: 'slide', pos: 'v.', meaning: '滑；回避', phonetic: '/slaid/' },
    { word: 'stray', pos: 'a./v.', meaning: '迷失的，离群的；迷路，偏离', phonetic: '/strei/' },
    { word: 'confusion', pos: 'n.', meaning: '混乱', phonetic: '/kən\'fju:ʒən/' },
    { word: 'greedily', pos: 'adv.', meaning: '贪婪地', phonetic: '/\'gri:dili/' },
    { word: 'devour', pos: 'v.', meaning: '狼吞虎咽地吃', phonetic: '/di\'vauə/' }
  ],
}
const articleNce3L37: Article = {
  original: {
    paragraphs: [
      "We have learnt to expect that trains will be punctual. After years of pre-conditioning, most of us have developed an unshakable faith in railway timetables. Ships may be delayed by storms; air flights may be cancelled because of bad weather; but trains must be on time. Only an exceptionally heavy snowfall might temporarily dislocate railway services. It is all too easy to blame the railway authorities when something does go wrong. The truth is that when mistakes occur, they are more likely to be ours than theirs.",
        "After consulting my railway timetable, I noted with satisfaction that there was an express train to Westhaven. It went direct from my local station and the journey lasted a mere hour and seventeen minutes. When I boarded the train, I could not help noticing that a great many local people got on as well. At the time, this did not strike me as odd. I reflected that there must be a great many people besides myself who wished to take advantage of this excellent service. Neither was I surprised when the train stopped at Widley, a tiny station a few miles along the line. Even a mighty express train can be held up by signals. But when the train dawdled at station after station, I began to wonder. It suddenly dawned on me that this express was not roaring down the line at ninety miles an hour, but barely chugging along at thirty. One hour and seventeen minutes passed and we had not even covered half the distance. I asked a passenger if this was the Westhaven Express, but he had not even heard of it. I determined to lodge a complaint as soon as we arrived. Two hours later, I was talking angrily to the station master at Westhaven. When he denied the train’s existence, I borrowed his copy of the timetable. There was a note of triumph in my voice when I told him that it was there in black and white. Glancing at it briefly, he told me to look again. A tiny asterisk conducted me to a footnote at the bottom of the page. It said: ‘This service has been suspended.’"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'express', pos: 'n./a.', meaning: '快车；高速的', phonetic: '/iks\'pres/' },
    { word: 'punctual', pos: 'adj.', meaning: '准时的', phonetic: '/\'pʌŋktjuəl/' },
    { word: 'condition', pos: 'v.', meaning: '使习惯于', phonetic: '/kən\'diʃən/' },
    { word: 'unshakable', pos: 'adj.', meaning: '不可动摇的', phonetic: '/ʌn\'ʃeikəbl/' },
    { word: 'faith', pos: 'n.', meaning: '信任', phonetic: '/feiθ/' },
    { word: 'cancel', pos: 'v.', meaning: '取消', phonetic: '/\'kænsəl/' },
    { word: 'exceptionally', pos: 'adv.', meaning: '例外地', phonetic: '//' },
    { word: 'dislocate', pos: 'v.', meaning: '打乱(计划等)', phonetic: '/\'disləkeit/' },
    { word: 'blame', pos: 'v.', meaning: '责怪', phonetic: '/bleim/' },
    { word: 'consult', pos: 'v.', meaning: '请教，查阅', phonetic: '/kən\'sʌlt/' },
    { word: 'direct', pos: 'adv.', meaning: '径直地', phonetic: '/di\'rekt/' },
    { word: 'odd', pos: 'adj.', meaning: '奇怪的，异常的', phonetic: '/ɔd/' },
    { word: 'reflect', pos: 'v.', meaning: '细想', phonetic: '/ri\'flekt/' },
    { word: 'advantage', pos: 'n.', meaning: '优势', phonetic: '/əd\'va:ntidʒ/' },
    { word: 'mighty', pos: 'adj.', meaning: '强大的，有力的', phonetic: '/\'maiti/' },
    { word: 'dawdle', pos: 'v.', meaning: '慢吞吞地动或做', phonetic: '/\'dɔ:dl/' },
    { word: 'chug', pos: 'v.', meaning: '咔嚓咔嚓地响', phonetic: '/tʃʌg/' },
    { word: 'lodge', pos: 'v./n.', meaning: '提出；小屋，(旅游区的)小旅馆', phonetic: '/lɔdʒ/' },
    { word: 'complaint', pos: 'n.', meaning: '抱怨', phonetic: '/kəm\'pleint/' },
    { word: 'triumph', pos: 'n./v.', meaning: '胜利;战胜', phonetic: '/\'traiəmf/' },
    { word: 'asterisk', pos: 'n.', meaning: '星号', phonetic: '/\'æstərisk/' },
    { word: 'conduct', pos: 'v.', meaning: '引向，引导', phonetic: '/\'kɔndəkt, kən\'dʌkt/' }
  ],
}
const articleNce3L38: Article = {
  original: {
    paragraphs: [
      "Future historians will be in a unique position when they come to record the history of our own times. They will hardly know which facts to select from the great mass of evidence that steadily accumulates. What is more, they will not have to rely solely on the written word. Films, gramophone records, and magnetic tapes will provide them with a bewildering amount of information. They will be able, as it were, to see and hear us in action. But the historian attempting to reconstruct the distant past is always faced with a difficult task. He has to deduce what he can from the few scanty clues available. Even seemingly insignificant remains can shed interesting light on the history of early man.",
        "Up to now, historians have assumed that calendars came into being with the advent of agriculture, for then man was faced with a real need to understand something about the seasons. Recent scientific evidence seems to indicate that this assumption is incorrect.",
        "Historians have long been puzzled by dots, lines and symbols which have been engraved on walls, bones, and the ivory tusks of mammoths. The nomads who made these markings lived by hunting and fishing during the last Ice Age which began about 35,000 B.C. and ended about 10,000 B.C. By correlating markings made in various parts of the world, historians have been able to read this difficult code. They have found that it is connected with the passage of days and the phases of the moon. It is, in fact, a primitive type of calendar. It has long been known that the hunting scenes depicted on walls were not simply a form of artistic expression. They had a definite meaning, for they were as near as early man could get to writing. It is possible that there is a definite relation between these paintings and the markings that sometimes accompany them. It seems that man was making a real effort to understand the seasons 20,000 years earlier than has been supposed.",
        "came to do ①. ② happened to do.， have been able to have done be able to passage ， hallway"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'calendar', pos: 'n.', meaning: '历法，日历', phonetic: '/\'kælində/' },
    { word: 'historian', pos: 'n.', meaning: '历史学家', phonetic: '/his\'tɔ:riən/' },
    { word: 'unique', pos: 'adj.', meaning: '无与伦比的；独特的', phonetic: '/ju:\'ni:k/' },
    { word: 'steadily', pos: 'adv.', meaning: '不断地', phonetic: '/\'stedili/' },
    { word: 'solely', pos: 'adv.', meaning: '唯一地', phonetic: '/\'səuli/' },
    { word: 'video', pos: 'n.', meaning: '录像', phonetic: '/\'vidiəu/' },
    { word: 'CD-ROM', pos: 'n.', meaning: '(只读)光盘驱动器', phonetic: '//' },
    { word: 'bewilder', pos: 'v.', meaning: '令人眼花缭乱', phonetic: '/bi\'wildə/' },
    { word: 'deduce', pos: 'v.', meaning: '推断，推理', phonetic: '/di\'dju:s/' },
    { word: 'scanty', pos: 'adj.', meaning: '不足的，贫乏的', phonetic: '/\'skænti/' },
    { word: 'mammoth', pos: 'n.', meaning: '(古生物)长毛象', phonetic: '/\'mæməθ/' },
    { word: 'tusk', pos: 'n.', meaning: '獠牙，长牙，象牙', phonetic: '/tʌsk/' },
    { word: 'nomad', pos: 'n.', meaning: '游牧民', phonetic: '/\'nɔməd/' },
    { word: 'correlate', pos: 'v.', meaning: '使相互联系', phonetic: '/\'kɔrileit/' },
    { word: 'clue', pos: 'n.', meaning: '线索', phonetic: '/klu:/' },
    { word: 'insignificant', pos: 'adj.', meaning: '不重要的', phonetic: '/\'insig\'nifikənt/' },
    { word: 'shed', pos: 'v.', meaning: '使流出，泻', phonetic: '/ʃed/' },
    { word: 'advent', pos: 'n.', meaning: '出现，到来，来临', phonetic: '/\'ædvənt/' },
    { word: 'agriculture', pos: 'n.', meaning: '农业', phonetic: '/\'ægrikʌltʃə/' },
    { word: 'assumption', pos: 'n.', meaning: '假定，设想', phonetic: '/ə\'sʌmpʃən/' },
    { word: 'dot', pos: 'n.', meaning: '小圆点', phonetic: '/dɔt/' },
    { word: 'symbol', pos: 'n.', meaning: '符号', phonetic: '/\'simbəl/' },
    { word: 'engrave', pos: 'v.', meaning: '雕刻', phonetic: '/in\'greiv/' },
    { word: 'ivory', pos: 'n.', meaning: '象牙制品', phonetic: '/\'aivəri/' },
    { word: 'phase', pos: 'n.', meaning: '月相，天相', phonetic: '/feiz/' },
    { word: 'primitive', pos: 'adj.', meaning: '原始的', phonetic: '/\'primitiv/' },
    { word: 'depict', pos: 'v.', meaning: '描画，描绘', phonetic: '/di\'pikt/' }
  ],
}
const articleNce3L40: Article = {
  original: {
    paragraphs: [
      "It has never been explained why university students seem to enjoy practical jokes more than anyone else. Students specialize in a particular type of practical joke: the hoax. Inviting the fire brigade to put out a non-existent fire is a crude form of deception which no self-respecting student would ever indulge in. Students often create amusing situations which are funny to everyone except the victims.",
        "When a student recently saw two workmen using a pneumatic drill outside his university, he immediately telephoned the police and informed them that two students dressed up as workmen were tearing up the road with a pneumatic drill. As soon as he had hung up, he went over to the workmen and told them that if a policeman ordered them to go away, they were not to take him seriously. He added that a student had dressed up as a policeman and was playing all sorts of silly jokes on people. Both the police and the workmen were grateful to the student for this piece of advance information.",
        "The student hid in an archway nearby where he could watch and hear everything that went on. Sure enough, a policeman arrived on the scene and politely asked the workmen to go away. When he received a very rude reply from one of the workmen, he threatened to remove them by force. The workmen told him to do as he pleased and the policeman telephoned for help. Shortly afterwards, four more policemen arrived and remonstrated with the workmen. As the men refused to stop working, the police attempted to seize the pneumatic drill. The workmen struggled fiercely and one of them lost his temper. He threatened to call the police. At this, the police pointed out ironically that this would hardly be necessary as the men were already under arrest. Pretending to speak seriously, one of the workmen asked if he might make a telephone call before being taken to the station. Permission was granted and a policeman accompanied him to a call box. Only when he saw that the man was actually telephoning the police did he realize that they had all been the victims of a hoax."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'hoax', pos: 'n.', meaning: '骗局，戏弄', phonetic: '/həuks/' },
    { word: 'deception', pos: 'n.', meaning: '欺骗，骗局', phonetic: '/di\'sepʃən/' },
    { word: 'self-respecting', pos: 'adj.', meaning: '自重的，自尊的', phonetic: '//' },
    { word: 'indulge', pos: 'v.', meaning: '使沉迷；享受', phonetic: '/in\'dʌldʒ/' },
    { word: 'pneumatic', pos: 'adj.', meaning: '气动的', phonetic: '/nju:\'mætik/' },
    { word: 'drill', pos: 'n.', meaning: '钻', phonetic: '/dril/' },
    { word: 'silly', pos: 'adj.', meaning: '无意义的，无聊的', phonetic: '/\'sili/' },
    { word: 'advance', pos: 'adj.', meaning: '预先的，事先获得的', phonetic: '/əd\'va:ns/' },
    { word: 'archway', pos: 'n.', meaning: '拱形门楼', phonetic: '/\'a:tʃwei/' },
    { word: 'remonstrate', pos: 'v.', meaning: '规劝，告诫', phonetic: '/ri\'mɔnstreit/' },
    { word: 'ironically', pos: 'adv.', meaning: '讽刺地', phonetic: '/ai\'rɔnikəli/' },
    { word: 'permission', pos: 'n.', meaning: '许可', phonetic: '/pə(:)\'miʃən/' },
    { word: 'grant', pos: 'v.', meaning: '同意，准予', phonetic: '/gra:nt/' }
  ],
}
const articleNce3L41: Article = {
  original: {
    paragraphs: [
      "The quiet life of the country has never appealed to me. City born and city bred, I have always regarded the country as something [you look at through a train window], or something you occasionally visit during the weekend. Most of my friends live in the city, yet they always go into raptures at the mere mention of the country. Though they extol the virtues of the peaceful life, only one of them has ever gone to live in the country and he was back in town within six months. Even he still lives under the illusion that country life is somehow superior to town life. He is forever talking about the friendly people, the clean atmosphere, the closeness to nature and the gentle pace of living. Nothing can be compared, he maintains, with the first cockcrow, the twittering of birds at dawn, the sight of the rising sun glinting on the trees and pastures. This idyllicadj. pastoraladj. scene is only part of the picture. My friend fails to mention the long and friendless winter evenings which are interrupted only by an occasional visit to the local cinema -- virtually the only form of entertainment. He says nothing about the poor selection of goods in the shops, or about those unfortunate people who have to travel from the country to the city every day to get to work. Why people are prepared to tolerate a four-hour journey each day for the dubious privilege of living in the country is beyond my ken. They could be saved so much misery and expense if they chose to live in the city where they rightly belong.",
        "If you can do without the few pastoral pleasures of the country, you will find the city can provide you with the best that life can offer. You never have to travel miles to see your friends. They invariably live nearby and are always available for an informal chat or an evening’s entertainment. Some of my acquaintances in the country come up to town once or twice a year to visit the theatre as a special treat. For them this is a major operation which involves considerable planning. As the play draws to its close, they wonder whether they will ever catch that last train home. The city dweller never experiences anxieties of this sort. The latest exhibitions, films, or plays are only a short bus ride away. Shopping, too, is always a pleasure. There is so much variety that you never have to make do with second best. Country people run wild when they go shopping in the city and stagger home loaded with as many of the necessities of life as they can carry. Nor is the city without its moments of beauty. There is something comforting about the warm glow shed by advertisements on cold wet winter nights. Few things could be more impressive than the peace that descends on deserted city streets at weekends when the thousands that travel to work every day are tucked away in their homes in the country. It has always been a mystery to me why city dwellers, who appreciate all these things, obstinately pretend that they would prefer to live in the country."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'illusion', pos: 'n.', meaning: '幻想，错觉', phonetic: '/i\'lju:ʒən/' },
    { word: 'pastoral', pos: 'adj.', meaning: '田园的', phonetic: '/\'pa:stərəl/' },
    { word: 'breed', pos: 'v.', meaning: '培育', phonetic: '/bri:d/' },
    { word: 'rapture', pos: 'n.', meaning: '欣喜', phonetic: '/\'ræptʃə/' },
    { word: 'extol', pos: 'v.', meaning: '赞美，颂扬', phonetic: '/iks\'tɔl/' },
    { word: 'superior', pos: 'adj.', meaning: '优越的', phonetic: '/sju:\'piəriə/' },
    { word: 'cockcrow', pos: 'n.', meaning: '鸡叫', phonetic: '//' },
    { word: 'twitter', pos: 'v.', meaning: '(鸟)吱吱叫，嘁嘁喳喳叫', phonetic: '/\'twitə/' },
    { word: 'glint', pos: 'v.', meaning: '闪烁', phonetic: '/glint/' },
    { word: 'pasture', pos: 'n.', meaning: '牧场', phonetic: '/\'pa:stʃə/' },
    { word: 'idyllic', pos: 'adj.', meaning: '田园诗的', phonetic: '/ai\'dilik/' },
    { word: 'virtually', pos: 'adv.', meaning: '几乎，差不多', phonetic: '/\'və:tjuəli/' },
    { word: 'dubious', pos: 'adj.', meaning: '可疑的，怀疑的', phonetic: '/\'dju:bjəs/' },
    { word: 'privilege', pos: 'n.', meaning: '好处，特权', phonetic: '/\'privilidʒ/' },
    { word: 'misery', pos: 'n.', meaning: '苦难', phonetic: '/\'mizəri/' },
    { word: 'acquaintance', pos: 'n.', meaning: '熟人', phonetic: '/ə\'kweintəns/' },
    { word: 'treat', pos: 'n.', meaning: '难得的乐事，享受', phonetic: '/tri:t/' },
    { word: 'dweller', pos: 'n.', meaning: '居住者', phonetic: '/\'dwelə/' },
    { word: 'stagger', pos: 'v.', meaning: '摇晃，蹒跚', phonetic: '/\'stægə/' },
    { word: 'exotic', pos: 'adj.', meaning: '异乎寻常的，外来的', phonetic: '/ig\'zɔutik/' },
    { word: 'glow', pos: 'n.', meaning: '白炽光', phonetic: '/gləu/' },
    { word: 'descend', pos: 'v.', meaning: '下落，降临', phonetic: '/di\'send/' },
    { word: 'tuck', pos: 'v.', meaning: '缩进，隐藏', phonetic: '/tʌk/' },
    { word: 'obstinately', pos: 'adv.', meaning: '固执地，顽固地', phonetic: '//' }
  ],
}
const articleNce3L42: Article = {
  original: {
    paragraphs: [
      "Cave exploration, or potholing, asit has come to be known, is a relatively new sport. Perhaps it is the desire for solitude or the chance of [making an unexpected discovery] that lures men down to the depths of the earth. It is impossible to give a satisfactory explanation for a potholer’s motives. For him, caves have the same peculiar fascination which high mountains have for the climber. They arouse instincts which can only be dimly understood.",
        "Exploring really deep caves is not a task for the Sunday afternoon rambler. Such undertakings require the precise planning and foresight of military operations. It can take as long as eight days to rig up rope ladders and to establish supply bases before a descent can be made into a very deep cave. Precautions of this sort are necessary, for it is impossible to foretell the exact nature of the difficulties which will confront the potholer. The deepest known cave in the world is the Gouffre Berger near Grenoble. It extends to a depth of 3,723 feet. This immense chasm has been formed by an underground stream which has tunneled a course through a flaw in the rocks. The entrance to the cave is on a plateau in the Dauphiné Alps. Asit is only six feet across, it is barely noticeable. The cave might never have been discovered (if) had not the entrance been spotted by the distinguished French potholer, Berger. Sinceits discovery, it has become a sort of potholers’ Everest. Though a number of descents have been made, much of it still remains to be explored.",
        "A team of potholers recently went down the Gouffre Berger. After entering the narrow gap on the plateau, they climbed down the steep sides of the cave until they came to a narrow corridor. They had to edge their way along this, sometimes wading across shallow streams, or swimming across deep pools. Suddenly they came to a waterfall which dropped into an underground lake at the bottom of the cave. They plunged into the lake, and after loading their gear on an inflatable rubber dinghy, let the current carry them to the other side. To protect themselves from the icy water, they had to wear special rubber suits. At the far end of the lake, they came to huge piles of rubble which had been washed up by the water. In this part of the cave, they could hear an insistent booming sound [which they found] was caused by a small waterspout shooting down into a pool from the roof of the cave. Squeezing through a cleft in the rocks, the potholers arrived at an enormous cavern, the size of a huge concert hall. After switching on powerful arc lights, they saw great stalagmites -- some of them over forty feet high -- rising up like tree trunks to meet the stalactites suspended from the roof. Round about, piles of limestone glistened in all the colours of the rainbow. In the eerie silence of the cavern, the only sound that could be heard was made by water which dripped continuously from the high dome above them."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'caveman', pos: 'n.', meaning: '(远古)洞穴人', phonetic: '//' },
    { word: 'pot-holing', pos: 'n.', meaning: '洞穴探险，洞穴探险运动', phonetic: '//' },
    { word: 'solitude', pos: 'n.', meaning: '孤独，寂寞', phonetic: '/\'sɔlitju:d/' },
    { word: 'lure', pos: 'v.', meaning: '引诱，诱惑', phonetic: '/ljuə/' },
    { word: 'pot-holer', pos: 'n.', meaning: '洞穴探险者', phonetic: '//' },
    { word: 'rambler', pos: 'n.', meaning: '漫步者，散步者', phonetic: '/\'ræmblə/' },
    { word: 'undertaking', pos: 'n.', meaning: '任务，工作', phonetic: '/\'ʌndə\'teikiŋ/' },
    { word: 'foresight', pos: 'n.', meaning: '预见；深谋远虑', phonetic: '/\'fɔ:sait/' },
    { word: 'foretell', pos: 'v.', meaning: '预言', phonetic: '/fɔ:\'tel/' },
    { word: 'Grenoble', pos: 'n.', meaning: '格里诺布尔', phonetic: '/grə\'noubl/' },
    { word: 'chasm', pos: 'n.', meaning: '断层，裂口，陷坑', phonetic: '/tʃæzəm/' },
    { word: 'flaw', pos: 'n.', meaning: '小裂缝；缺点，瑕疵', phonetic: '/flɔ:/' },
    { word: 'distinguished', pos: 'adj.', meaning: '杰出的，著名的', phonetic: '/dis\'tiŋgwiʃt/' },
    { word: 'Everest', pos: 'n.', meaning: '珠穆朗玛峰', phonetic: '/\'evərist/' },
    { word: 'wade', pos: 'v.', meaning: '涉水', phonetic: '/weid/' },
    { word: 'waterfall', pos: 'n.', meaning: '瀑布', phonetic: '/\'wɔ:təfɔ:l/' },
    { word: 'gear', pos: 'n.', meaning: '(汽车)排档', phonetic: '/giə/' },
    { word: 'inflatable', pos: 'adj.', meaning: '可充气的', phonetic: '/in\'fleitəbl/' },
    { word: 'rubble', pos: 'n.', meaning: '碎瓦，瓦块', phonetic: '/\'rʌbl/' },
    { word: 'insistent', pos: 'adj.', meaning: '连续的，不断的', phonetic: '/in\'sistənt/' },
    { word: 'boom', pos: 'v.', meaning: '轰响', phonetic: '/bu:m/' },
    { word: 'waterspout', pos: 'n.', meaning: '强大的水柱', phonetic: '/\'wɔtəspaut/' },
    { word: 'cleft', pos: 'n.', meaning: '裂隙，开口', phonetic: '/kleft/' },
    { word: 'cavern', pos: 'n.', meaning: '大洞穴', phonetic: '/\'kævən/' },
    { word: 'stalagmite', pos: 'n.', meaning: '石笋', phonetic: '/\'stæləgmait/' },
    { word: 'stalactite', pos: 'n.', meaning: '钟乳石', phonetic: '/\'stæləktait/' },
    { word: 'limestone', pos: 'n.', meaning: '石灰石', phonetic: '/\'laimstəun/' },
    { word: 'glisten', pos: 'v.', meaning: '闪烁', phonetic: '/\'glisn/' },
    { word: 'eerie', pos: 'adj.', meaning: '引起恐惧的，可怕的', phonetic: '/\'iəri/' },
    { word: 'dome', pos: 'n.', meaning: '穹窿，圆顶', phonetic: '/dəum/' }
  ],
}
const articleNce3L50: Article = {
  original: {
    paragraphs: [
      "The New Year is a time for resolutions. Mentally, at least, most of us could compile formidable lists of ‘do’s’ and ‘don’ts’. The same old favorites recur year in year out with monotonous regularity. We resolve to get up earlier each morning, eat less, find more time to play with the children, do a thousand and one jobs about the house, be nice to people we don’t like, drive carefully, and take the dog for a walk every day. Past experience has taught us that certain accomplishments are beyond attainment. If we remain inveterate smokers, it is only because we have so often experienced the frustration that results from failure. Most of us fail in our efforts at self-improvement because our schemes are too ambitious and we never have time to carry them out. We also make the fundamental error of announcing our resolutions to everybody so that we look even more foolish when we slip back into bad old ways. Aware of these pitfalls, this year I attempted to keep my resolutions to myself. I limited myself to two modest ambitions: to do physical exercises every morning and to read more of an evening. An all-night party on New Year’s Eve provided me with a good excuse for not carrying outeither of these new resolutions on the first day of the year, but on the second, I applied myself assiduously to the task.",
        "The daily exercises lasted only eleven minutes and I proposed to do them early in the morning before anyone had got up. The self-discipline required to drag myself out of bed eleven minutes earlier than usual was considerable. Nevertheless, I managed to creep down into the living room for two days before anyone found me out. After jumping about on the carpet and twisting the human frame into uncomfortable positions, I sat down at the breakfast table in an exhausted condition. It was this that betrayed me. The next morning the whole family trooped in to watch the performance. That was really unsettling, but I fended off the taunts and jibes of the family good-humouredly and soon everybody got used to the idea. However, my enthusiasm waned.The time I spent at exercises gradually diminished. Little by little the eleven minutes fell to zero. By January 10th, I was back to where I had started from. I argued that if I spent less time exhausting myself at exercises in the morning, I would keep my mind fresh for reading when I got home from work. Resisting the hypnotizing effect of television, I sat in my room for a few evenings with my eyes glued to a book. One night, however, feeling cold and lonely, I went downstairs and sat in front of the television pretending to read. That proved to be my undoing, for I soon got back to my old bad habit of dozing off in front of the screen. I still haven’t given up my resolution to do more reading. In fact, I have just bought a book entitled ‘How to Read a Thousand Words a Minute’. Perhaps it will solve my problem, but I just haven’t had time to read it!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'resolution', pos: 'n.', meaning: '决心', phonetic: '/\'rezə\'lju:ʃən/' },
    { word: 'mentally', pos: 'adv.', meaning: '内心里', phonetic: '/\'mentli/' },
    { word: 'compile', pos: 'v.', meaning: '编辑，编制', phonetic: '/kəm\'pail/' },
    { word: 'formidable', pos: 'adj.', meaning: '令人畏惧的', phonetic: '/\'fɔ:midəbl/' },
    { word: 'recur', pos: 'v.', meaning: '再发生，又出现', phonetic: '/ri\'kə:/' },
    { word: 'regularity', pos: 'n.', meaning: '规律性', phonetic: '/\'regju\'læriti/' },
    { word: 'accomplishment', pos: 'n.', meaning: '成就', phonetic: '/ə\'kɔmpliʃmənt/' },
    { word: 'attainment', pos: 'n.', meaning: '达到；成就，造诣', phonetic: '/ə\'teinmənt/' },
    { word: 'inveterate', pos: 'adj.', meaning: '根深蒂固的', phonetic: '/in\'vetərit/' },
    { word: 'self-improvement', pos: 'n.', meaning: '自我完善', phonetic: '//' },
    { word: 'scheme', pos: 'n.', meaning: '简单的计划，方案', phonetic: '/ski:m/' },
    { word: 'ambitious', pos: 'adj.', meaning: '雄心勃勃的', phonetic: '/æm\'biʃəs/' },
    { word: 'pitfall', pos: 'n.', meaning: '意外的困难，易犯的错误', phonetic: '/\'pitfɔ:l/' },
    { word: 'modest', pos: 'adj.', meaning: '要求不过分的,谦虚的', phonetic: '/\'mɔdist/' },
    { word: 'assiduously', pos: 'adv.', meaning: '刻苦地', phonetic: '//' },
    { word: 'self-discipline', pos: 'n.', meaning: '自我约束', phonetic: '//' },
    { word: 'frame', pos: 'n.', meaning: '躯体', phonetic: '/freim/' },
    { word: 'betray', pos: 'v.', meaning: '暴露，显露', phonetic: '/bi\'trei/' },
    { word: 'troop', pos: 'v.', meaning: '成群结队地走动', phonetic: '/tru:p/' },
    { word: 'unsettle', pos: 'v.', meaning: '使不安', phonetic: '/ʌn\'setl/' },
    { word: 'taunt', pos: 'n./v.', meaning: '嘲笑，奚落人的话', phonetic: '/tɔ:nt/' },
    { word: 'jibe', pos: 'n.', meaning: '嘲弄，挖苦', phonetic: '/dʒaib/' },
    { word: 'good-humouredly', pos: 'adv.', meaning: '和气地，心情好地', phonetic: '//' },
    { word: 'wane', pos: 'v.', meaning: '逐渐变小，变弱', phonetic: '/wein/' },
    { word: 'diminish', pos: 'v.', meaning: '减少，缩小', phonetic: '/di\'miniʃ/' },
    { word: 'hypnotize', pos: 'v.', meaning: '使欲睡，使朦胧', phonetic: '/\'hipnətaiz/' },
    { word: 'undoing', pos: 'n.', meaning: '祸根，毁灭的原因', phonetic: '/ʌn\'du:iŋ/' },
    { word: 'screen', pos: 'n.', meaning: '电视机屏幕', phonetic: '/skri:n/' }
  ],
}
const articleNce3L54: Article = {
  original: {
    paragraphs: [
      "We have been brought up to fear insects. We regard them as unnecessary creatures that do more harm than good. Man continually wages war on them, for they contaminate his food, carry diseases, or devour his crops. They sting or bite without provocation; they fly uninvited into our rooms on summer nights, or beat against our lighted windows. We live in dread not only of unpleasant insects like spiders or wasps, but of quiteadv. harmlessadj. ones [like moths]. [Reading about them] increases our understanding without dispelling our fears. Knowing that the industrious ant lives in a highly organized society does nothing to prevent us from being filled with revulsion when we find hordes of them crawling over a carefully prepared picnic lunch. No matter how much we like honey, or how much we have read about the uncanny sense of direction which bees possess, we have a horror of being stung. Most of our fears are unreasonable, but they are impossible to erase. At the same time, however, insects are strangely fascinating. We enjoy reading about them, especially when we find that, like the praying mantis, they lead perfectly horrible lives. We enjoy staring at them, entranced as they go about their business, unaware (we hope) of our presence. Who has not stood in awe at the sight of a spider pouncing on a fly, or a column of ants triumphantly bearing home an enormous dead beetle?",
        "Last summer I spent days in the garden watching thousands of ants crawling up the trunk of my prize peach tree. The tree has grown against a warm wall on a sheltered side of the house. I am especially proud of it, not only because it has survived several severe winters, but because it occasionally produces luscious peaches. During the summer, I noticed that the leaves of the tree were beginning to wither. Clusters of tiny insects called aphids were to be found on the underside of the leaves. They were visited by a large colony of ants whichobtained a sort of honey from them. I immediately embarked on an experiment which, even though it failed to get rid of the ants, kept me fascinated for twenty-four hours. I bound the base of the tree with sticky tape, making it impossible for the ants to reach the aphids. The tape was so sticky that they did not dare to cross it. For a long time, I watched them scurrying around the base of the tree in bewilderment. I even went out at midnight with a torch and noted with satisfaction (and surprise) that the ants were still swarming around the sticky tape without being able to do anything about it. I got up early next morning hoping to find that the ants had given up in despair. Instead, I saw that they had discovered a new route. They were climbing up the wall of the house and then on to the leaves of the tree. I realized sadly that I had been completely defeated by their ingenuity. The ants had been quick to find an answer to my thoroughly unscientific methods!"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'insect', pos: 'n.', meaning: '昆虫', phonetic: '/\'insekt/' },
    { word: 'wage', pos: 'v.', meaning: '进行(斗争)', phonetic: '/weidʒ/' },
    { word: 'contaminate', pos: 'v.', meaning: '弄脏', phonetic: '/kən\'tæmineit/' },
    { word: 'provocation', pos: 'n.', meaning: '惹怒', phonetic: '/\'prɔvə\'keiʃən/' },
    { word: 'spider', pos: 'n.', meaning: '蜘蛛', phonetic: '/\'spaidə/' },
    { word: 'wasp', pos: 'n.', meaning: '黄蜂', phonetic: '/wɔsp/' },
    { word: 'moth', pos: 'n.', meaning: '飞蛾', phonetic: '/mɔθ/' },
    { word: 'ant', pos: 'n.', meaning: '蚂蚁', phonetic: '/ænt/' },
    { word: 'revulsion', pos: 'n.', meaning: '厌恶', phonetic: '/ri\'vʌlʃən/' },
    { word: 'horde', pos: 'n.', meaning: '群', phonetic: '/hɔ:d/' },
    { word: 'uncanny', pos: 'adj.', meaning: '神秘的，不可思议的', phonetic: '/ʌn\'kæni/' },
    { word: 'erase', pos: 'v.', meaning: '擦，抹去', phonetic: '/i\'reiz/' },
    { word: 'praying mantis', pos: 'n.', meaning: '螳螂', phonetic: '//' },
    { word: 'entranced', pos: 'adj.', meaning: '出神的', phonetic: '//' },
    { word: 'beetle', pos: 'n.', meaning: '甲虫', phonetic: '/\'bi:tl/' },
    { word: 'sheltered', pos: 'adj.', meaning: '伤不着的，无危险的', phonetic: '//' },
    { word: 'luscious', pos: 'adj.', meaning: '甘美的', phonetic: '/\'lʌʃəs/' },
    { word: 'cluster', pos: 'n.', meaning: '一簇，一群', phonetic: '/\'klʌstə/' },
    { word: 'aphid', pos: 'n.', meaning: '蚜虫', phonetic: '/\'eifid/' },
    { word: 'underside', pos: 'n.', meaning: '底面，下侧', phonetic: '/\'ʌndəsaid/' },
    { word: 'colony', pos: 'n.', meaning: '一群', phonetic: '/\'kɔləni/' },
    { word: 'sticky', pos: 'adj.', meaning: '粘的', phonetic: '/\'stiki/' },
    { word: 'scurry', pos: 'v.', meaning: '小步跑', phonetic: '/\'skʌri/' },
    { word: 'swarm', pos: 'v.', meaning: '聚集', phonetic: '/swɔ:m/' },
    { word: 'ingenuity', pos: 'n.', meaning: '机灵', phonetic: '/\'indʒi\'nju(:)iti/' }
  ],
}
const articleNce3L59: Article = {
  original: {
    paragraphs: [
      "People tend to amass possessions, sometimes without being aware of doing so. Indeed they can have a delightful surprise when they find something useful which they did not knowthey owned. Those [who never have to change house] become indiscriminate collectors of what can only be described as clutter. They leave unwanted objects in drawers, cupboards and attics for years, in the belief that they may one day need just those very things. As they grow old, people also accumulate belongings for two other reasons, lack of physical and mental energy, both of which are essential in turning out and throwing away, and sentiment. Things owned for a long time are full of associations with the past, perhaps with relatives who are dead, and so they gradually acquire a value beyond their true worth.",
        "Some things are collected deliberately in the home in an attempt to avoid waste. Among these I would list string and brown paper, kept by thrifty people when a parcel has been opened, to save buying these two requisites. Collecting small items can easily become a mania. I know someone who always cuts out from newspapers sketches of model clothes that she would like to buy, if she had the money. As she is not rich, the chances that she will ever be able to afford such purchases are remote; but she is never sufficiently strong-minded to be able to stop the practice. It is a harmless habit, but it litters up her desk to such an extent that every time she opens it, loose bits of paper fall out in every direction.",
        "Collecting as a serious hobby is quite different and has many advantages. It provides relaxation for leisure hours, as just looking at one’s treasures is always a joy. One does not have to go outside for amusement, since the collection is housed at home. Whatever it consists of, stamps, records, first editions of books, china, glass, antique furniture, pictures, model cars, stuffed birds, toy animals, there is always something [to do] in connection with it, from finding the right place for the latest addition, to verifying facts in reference books. This hobby educates one not only in the chosen subject, but also in general matters which have some bearing on it. There are also other benefits. One wants to meet like-minded collectors, [to get advice, to compare notes, to exchange articles, to show off the latest find]. So one’s circle of friends grows. Soon the hobby leads to travel, perhaps to a meeting in another town, possibly a trip abroad in search of a rare specimen, for collectors are not confined to any one country. Over the years, one may well become an authority on one’s hobby and will very probably be asked to give informal talks to little gatherings and then, if (he is) successful, to larger audiences. In this way self-confidence grows, first from mastering a subject, then from being able to talk about it. Collecting, by occupying spare time so constructively, makes a person contented, with no time for boredom.",
        "litter (up) quite different show off in political circles in connection with it about as to ad. reference book bibliography"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'amass', pos: 'v.', meaning: '积聚，收集', phonetic: '/ə\'mæs/' },
    { word: 'indiscriminate', pos: 'adj.', meaning: '不加选择的', phonetic: '/\'indis\'kriminit/' },
    { word: 'clutter', pos: 'n./v.', meaning: '一堆杂物;乱糟糟地堆满', phonetic: '/\'klʌtə/' },
    { word: 'string', pos: 'n.', meaning: '细线, 细绳', phonetic: '/striŋ/' },
    { word: 'requisite', pos: 'n.', meaning: '必需品', phonetic: '/\'rekwizit/' },
    { word: 'mania', pos: 'n.', meaning: '癖好,狂热', phonetic: '/\'meinjə/' },
    { word: 'sketch', pos: 'n.', meaning: '草图，图样', phonetic: '/sketʃ/' },
    { word: 'remote', pos: 'adj.', meaning: '(机会，可能性)极少的，小的', phonetic: '/ri\'məut/' },
    { word: 'strong-minded', pos: 'adj.', meaning: '意志坚强的', phonetic: '//' },
    { word: 'relaxation', pos: 'n.', meaning: '休息，娱乐', phonetic: '/ri:læk\'seiʃən/' },
    { word: 'verify', pos: 'v.', meaning: '查证，核实', phonetic: '/\'verifai/' },
    { word: 'bearing', pos: 'n.', meaning: '关系，联系', phonetic: '/\'bєəriŋ/' },
    { word: 'like-minded', pos: 'adj.', meaning: '志趣相投的', phonetic: '//' },
    { word: 'specimen', pos: 'n.', meaning: '标本', phonetic: '/\'spesimin/' },
    { word: 'constructively', pos: 'adv.', meaning: '有益的，积极的', phonetic: '//' },
    { word: 'contented', pos: 'adj.', meaning: '心满意足的', phonetic: '/kən\'tentid/' },
    { word: 'boredom', pos: 'n.', meaning: '烦恼，无聊', phonetic: '/\'bɔ:dəm/' }
  ],
}
const articleNce3L60: Article = {
  original: {
    paragraphs: [
      "Punctuality is a necessary habit in all public affairs of a civilized society. Without it, nothing could ever be brought to a conclusion; everything would be in a state of chaos. Onlyin a sparsely populated rural community is it possible to disregard it. In ordinary living there can be some tolerance of unpunctuality. The intellectual, who is working on some abstruse problem, has everything coordinated and organized for the matter in hand. He is therefore forgiven, if (he is) late for a dinner party. But people are often reproached for unpunctuality when their only fault is cutting things fine. It is hard for energetic, quick-minded people to waste time, so they are often tempted to finish a job before setting out to keep an appointment. If no accidents occur on the way, like punctured tyres, diversions of traffic, sudden descent of fog, they will be on time. They are often more industrious, useful citizens than those who are never late. The over-punctual can be as much a trial to others as the unpunctual. The guest who arrives half an hour too soon is the greatest nuisance. Some friends of my family had this irritating habit. The only thing to dowas to ask them to come half an hour later than the other guests. Then they arrived just when we wanted them.",
        "If you are catching a train, it is always better [to be comfortably early]than even a fraction of a minute too late. Although being early may mean wasting a little time, this will be less than (it will be) if you miss the train and have to wait an hour or more for the next one; and you avoid the frustration of arriving at the very moment when the train is drawing out of the station and being unable to get on it. An even harder situation is to be on the platform in good time for a train and still to see it go off without you. Such an experience befell a certain young girl the first time [she was travelling alone].",
        "She entered the station twenty minutes before the train was due, since her parents had impressed upon her that it would be unforgivable to miss it and cause the friends with whom she was going to stay to make two journeys to meet her. She gave her luggage to a porter and showed him her ticket. To her horror he said that she was two hours too soon. She felt in her handbagfor the piece of paper on which her father had written down all the details of the journey and gave it to the porter. He agreed that a train did come into the station at the time on the paper and that it did stop, but only to take on water, not passengers. The girl asked to see a timetable, feeling sure that her father could not have made such a mistake. The porter went to fetch one and arrived back with the stationmaster, who produced it with a flourish and pointed out a microscopic ‘o’ beside [the time of the arrival of the train] at his station; this little ‘o’ indicated that the train only stopped for water. Just as that moment the train came into the station. The girl, tears streaming down her face, begged to be allowed to slip into the guard’s van. But the stationmaster was adamant: rules could not be broken. And she had to watch that train disappear towards her destination while she was left behind.",
        "due feel for. do sth with a flourish to do was to ask them doto to do“except/but”，do to",
        "work on sth/doing. be a trial to sb due to; have sth done 1. 2. 3. take on. ← get onthe matter/job in hand as much A as B ad.AB reproach approach v",
        ".if (he is) late for a dinner party impress sth on/upon sb We’ll resolve the Taiwan issue with peaceful means when (it is) ever possible, with force when (it is) necessary."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'punctuality', pos: 'n.', meaning: '准时', phonetic: '/\'pʌŋktju\'æliti/' },
    { word: 'rural', pos: 'adv.', meaning: '农村的', phonetic: '/\'ruərəl/' },
    { word: 'disregard', pos: 'v.', meaning: '不顾，无视', phonetic: '/\'disri\'ga:d/' },
    { word: 'intellectual', pos: 'n.', meaning: '知识分子', phonetic: '/\'inti\'lektjuəl/' },
    { word: 'abstruse', pos: 'adj.', meaning: '深奥的', phonetic: '/æb\'stru:s/' },
    { word: 'coordinate', pos: 'v.', meaning: '协调', phonetic: '/kəu\'ɔdinit/' },
    { word: 'reproach', pos: 'v.', meaning: '责备', phonetic: '/ri\'prəutʃ/' },
    { word: 'puncture', pos: 'v.', meaning: '刺破(轮胎)', phonetic: '/\'pʌŋktʃə/' },
    { word: 'diversion', pos: 'n.', meaning: '改道，绕道', phonetic: '/dai\'və:ʃən/' },
    { word: 'trial', pos: 'n.', meaning: '讨厌的事、人', phonetic: '/\'traiəl/' },
    { word: 'fraction', pos: 'n.', meaning: '很小一点儿', phonetic: '/\'frækʃən/' },
    { word: 'flourish', pos: 'n.', meaning: '挥舞(打手势)', phonetic: '/\'flʌriʃ/' },
    { word: 'microscopic', pos: 'adj.', meaning: '微小的', phonetic: '/\'maikrə\'skɔpik/' },
    { word: 'adamant', pos: 'adj.', meaning: '坚定的，不动摇的', phonetic: '/\'ædəmənt/' }
  ],
}

const articleNce4L1: Article = {
  original: {
    paragraphs: [
      "We can read of things that happened 5,000 years ago in the Near East, where people first learned to write. But there are some parts of the world where even now people cannot write. The only way[that they can preserve their history]isto recount it as sagas -- legends handed down from one generation of story-tellers to another. These legends are useful because they can tell us something about migrations of people who lived long ago, but none could write down what they did. Anthropologists wondered where the remote ancestors of the Polynesian peoples now living in the Pacific Islands came from. The sagas of these people explain that some of them came from Indonesia about 2,000 years ago.",
        "But the first people [who were like ourselves] lived so long ago that even their sagas, if they had any, are forgotten. So archaeologists have neither history nor legends to help them to find out where the first 'modern men' came from.",
        "Fortunately, however, ancient men made tools of stone, especially flint, because this is easier to shape than other kinds. They may also have used wood and skins, but these have rotted away. Stone does not decay, and so the tools of long ago have remained wheneven the bones of the men who made them have disappeared without trace."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'fossil (man)', pos: 'adj.', meaning: '化石(人)', phonetic: '/英[ˈfɒsl/' },
    { word: 'recount', pos: 'v.', meaning: '叙述', phonetic: '/ri\'kaunt/' },
    { word: 'saga', pos: 'n.', meaning: '英雄故事', phonetic: '/\'sa:gə/' },
    { word: 'legend', pos: 'n.', meaning: '传说，传奇', phonetic: '/\'ledʒənd/' },
    { word: 'migration', pos: 'n.', meaning: '迁移，移居', phonetic: '/mai\'greiʃən/' },
    { word: 'anthropologist', pos: 'n.', meaning: '人类学家', phonetic: '/ænθrə\'pɔlədʒist/' },
    { word: 'archaeologist', pos: 'n.', meaning: '考古学家', phonetic: '/\'a:kiə\'lɔdʒist/' },
    { word: 'ancestor', pos: 'n.', meaning: '祖先', phonetic: '/\'ænsistə/' },
    { word: 'Polynesian', pos: 'adj.', meaning: '波利尼西亚(中太平洋之一群岛)的', phonetic: '/pɔli\'ni:zjən/' },
    { word: 'Indonesia', pos: 'n.', meaning: '印度尼西亚', phonetic: '/\'indəu\'ni:zjə/' },
    { word: 'flint', pos: 'n.', meaning: '燧石', phonetic: '/flint/' },
    { word: 'rot', pos: 'v.', meaning: '烂掉', phonetic: '/rɔt/' }
  ],
}
const articleNce4L2: Article = {
  original: {
    paragraphs: [
      "Why, you may wonder, should spiders be our friends? Because they destroy so many insects, and insects include some of the greatest enemies of the human race. Insects would make it impossible for us to live in the world; they would devour all our crops and kill our flocks and herds, if it were not for the protection we get from insect-eating animals. We owe a lot to the birds and beasts [who eat insects] but all of them put together kill only a fraction of the number destroyed by spiders. Moreover, unlike some of the other insect eaters, spiders never do the least harm to us or our belongings.",
        "Spiders are not insects, as many people think, noreven nearly (are they) related to them. One can tell the difference almost at a glance, for a spider always has eight legs and an insect has never more than six.",
        "How many spiders are engaged in this work on our behalf? One authority on spiders made a census of the spiders in a grass field in the south of England, and he estimated that there were more than 2,250,000 in one acre, that is something like 6,000,000 spiders [of different kinds] on a football pitch. Spiders are busy for at least half the year in killing insects. It is impossible to make more than the wildest guess at how many they kill, but they are hungry creatures, not content with only three meals a day. It has been estimated that the weight of all the insects destroyed by spiders in Britain in one year would be greater than the total weight of all the human beings in the country.",
        "distinguish /sifferentiate /discriminate between A and/from B AB attribute to. owe A to B AB greater a.；;；"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'beast', pos: 'n.', meaning: '野兽', phonetic: '/bi:st/' },
    { word: 'census', pos: 'n.', meaning: '统计数字', phonetic: '/\'sensəs/' },
    { word: 'acre', pos: 'n.', meaning: '英亩', phonetic: '/\'eikə/' },
    { word: 'content', pos: 'adj.', meaning: '满足的', phonetic: '/\'kɔntent, kən\'tent/' }
  ],
}
const articleNce4L3: Article = {
  original: {
    paragraphs: [
      "Modern alpinists try to climb mountains by a route which will give them good sport, and the more difficult it is, the more highly it is regarded. In the pioneering days, however, this was not the case at all. The early climbers were looking for the easiest way to the top because the summit was the prize they sought, especially if it had never been attained before. It is true that during their explorations they often faced difficulties and dangers of the most perilous nature, equipped in a manner which would make a modern climber shudder at the thought, but they did not go out of their way to court such excitement. They had a single aim, a solitary goal--the top!",
        "It is hard for us to realize nowadays how difficult it was for the pioneers. Except for one or two places such as Zermatt and Chamonix, which had rapidly become popular, Alpine villages tended to be impoverished settlements [cut off from civilization by the high mountains]. Such inns as there were were generally dirty and flea-ridden; the food was simply, local cheese accompanied by bread often twelve months old, all washed down with coarse wine. Often a valley boasted no inn at all, and climbers found shelter wherever they could--sometimes with the local priest [who was usually as poor as his parishioners], sometimes with shepherds or cheese-makers. Invariably the background was the same: dirt and poverty, and very uncomfortable. For men accustomed to eating seven-course dinners and sleeping between fine linen sheets at home, the change [to the Alps] must have been very hard indeed."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'Matterhorn', pos: 'n.', meaning: '马特霍恩峰(阿尔卑斯山峰之一)', phonetic: '/\'mætəhɔ:n/' },
    { word: 'alpinist', pos: 'n.', meaning: '登山运动员', phonetic: '/\'ælpinist/' },
    { word: 'pioneer', pos: 'v./n.', meaning: '开辟，倡导;先锋，开辟者', phonetic: '/\'paiə\'niə/' },
    { word: 'summit', pos: 'n.', meaning: '顶峰', phonetic: '/\'sʌmit/' },
    { word: 'attain', pos: 'v.', meaning: '到达', phonetic: '/ə\'tein/' },
    { word: 'perilous', pos: 'adj.', meaning: '危险的', phonetic: '/\'periləs/' },
    { word: 'shudder', pos: 'v.', meaning: '不寒而栗', phonetic: '/\'ʃʌdə/' },
    { word: 'court', pos: 'v.', meaning: '追求', phonetic: '/kɔ:t/' },
    { word: 'solitary', pos: 'adj.', meaning: '唯一的', phonetic: '/\'sɔlitəri/' },
    { word: 'impoverish', pos: 'v.', meaning: '使贫困', phonetic: '/im\'pɔvəriʃ/' },
    { word: 'Alpine', pos: 'adj.', meaning: '阿尔卑斯山的', phonetic: '/\'ælpain/' },
    { word: 'flea-ridden', pos: 'adj.', meaning: '布满跳蚤的', phonetic: '//' },
    { word: 'coarse', pos: 'adj.', meaning: '粗劣的', phonetic: '/kɔ:s/' },
    { word: 'boast', pos: 'v.', meaning: '自恃有', phonetic: '/bəust/' },
    { word: 'parishioner', pos: 'n.', meaning: '教区居民', phonetic: '/pə\'riʃənə/' },
    { word: 'shepherd', pos: 'n.', meaning: '牧羊人', phonetic: '/\'ʃepəd/' },
    { word: 'linen', pos: 'n.', meaning: '亚麻布', phonetic: '/\'linin/' },
    { word: 'the Alps', pos: 'n.', meaning: '阿尔卑斯山脉', phonetic: '//' }
  ],
}
const articleNce4L4: Article = {
  original: {
    paragraphs: [
      "In the Soviet Union several cases have been reported recently of people who can read and detect colours with their fingers, and even see through solid doors and walls. One case concerns an 'eleven-year-old schoolgirl, Vera Petrova, who has normal vision but who can also perceive things with different parts of her skin, and through solid walls. This ability was first noticed by her father. One day she came into his office and happened to put her hands on the door of a locked safe. Suddenly she asked her father why he kept so many old newspapers locked away there, and even described the way they were done up in bundles.",
        "Vera's curious talent was brought to the notice of a scientific research institute in the town of UIyanovsk, near where she lives, and in April she was given a series of tests by a special commission of the Ministry of Health of the Russian Federal Republic. During these tests she was able to read a newspaper through an opaque screen and, stranger still, by moving her elbow over a child's game of Lotto she was able to describe the figures and colours printed on it; and, in another instance, wearing stockings and slippers, () to make out with her foot the outlines and colours of a picture hidden under a carpet. Other experiments showed that her knees and shoulders had a similar sensitivity. During all these tests Vera was blindfold; and, indeed, except when blindfold she lacked the ability to perceive things with her skin. It was also found that although she could perceive things with her fingers this ability ceased the moment her hands were wet."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'solid', pos: 'adj.', meaning: '坚实的', phonetic: '/\'sɔlid/' },
    { word: 'safe', pos: 'n.', meaning: '保险柜', phonetic: '/seif/' },
    { word: 'Ulyanovsk', pos: 'n.', meaning: '乌里扬诺夫斯克', phonetic: '/u:\'lja:nɔfsk/' },
    { word: 'commission', pos: 'n.', meaning: '委员会', phonetic: '/kə\'miʃən/' },
    { word: 'opaque', pos: 'adj.', meaning: '不透明的', phonetic: '/əu\'peik/' },
    { word: 'lotto', pos: 'n.', meaning: '一种有编号的纸牌', phonetic: '/\'lɔtou/' },
    { word: 'slipper', pos: 'n.', meaning: '拖鞋', phonetic: '/\'slipə/' },
    { word: 'blindfold', pos: 'a./ad.', meaning: '被蒙上眼睛的', phonetic: '/\'blaindfəuld/' }
  ],
}
const articleNce4L6: Article = {
  original: {
    paragraphs: [
      "I am always amazed when I hear people saying that sport creates goodwill between the nations, and that if only the common peoples of the world could meet one another at football or cricket, they would have no inclination to meet on the battlefield. Even if one didn't know from concrete examples (the 1936 Olympic Games, for instance) that international sporting contests lead to orgies of hatred, one could deduce it from general principles.",
        "Nearly all the sports practised nowadays are competitive. You play to win, and the game has littlemeaning unless you do your utmost to win. On the village green, where you pick up sides and no feeling of local patriotism is involved, it is possible to play simply for the fun and exercise: but as soon as the question of prestige arises, as soon as you feel that you and some larger unit will be disgraced if you lose, the most savage combative instincts are aroused. Anyone [who has played] even in a school football match knows this. At the international level sport is frankly mimic warfare. But the significant thing is not the behaviour of the players but the attitude of the spectators: and, behind the spectators, (the attitude) of the nations. who work themselves into furies over these absurd contests, and seriously believe--at any rate for short periods--that running, jumping and kicking a ball are tests of national virtue."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'goodwill', pos: 'n.', meaning: '友好', phonetic: '//' },
    { word: 'cricket', pos: 'n.', meaning: '板球', phonetic: '/\'krikit/' },
    { word: 'inclination', pos: 'n.', meaning: '意愿', phonetic: '/\'inkli\'neiʃən/' },
    { word: 'contest', pos: 'n.', meaning: '比赛', phonetic: '/kən\'test, \'kɔntest/' },
    { word: 'orgy', pos: 'n.', meaning: '无节制，放荡', phonetic: '/\'ɔ:dʒi/' },
    { word: 'deduce', pos: 'v.', meaning: '推断', phonetic: '/di\'dju:s/' },
    { word: 'competitive', pos: 'adj.', meaning: '竞争性的', phonetic: '/kəm\'petitiv/' },
    { word: 'patriotism', pos: 'n.', meaning: '地方观念，爱国主义', phonetic: '/\'pætriətizm/' },
    { word: 'disgrace', pos: 'v.', meaning: '使丢脸', phonetic: '/dis\'greis/' },
    { word: 'savage', pos: 'adj.', meaning: '野性的', phonetic: '/\'sævidʒ/' },
    { word: 'combative', pos: 'adj.', meaning: '好斗的', phonetic: '/\'kɔmbətiv/' },
    { word: 'mimic warfare', pos: 'n.', meaning: '模拟战争', phonetic: '//' },
    { word: 'behaviour', pos: 'n.', meaning: '行动，举止', phonetic: '/bi\'heivjə/' },
    { word: 'absurd', pos: 'adj.', meaning: '荒唐的', phonetic: '/əb\'sə:d/' }
  ],
}
const articleNce4L7: Article = {
  original: {
    paragraphs: [
      "Not all sounds made by animals serve as language, and we have only to turn to that extraordinary discovery of echo-location in bats [to see a case in which the voice plays a strictly utilitarian role].",
        "To get a full appreciation of what this meanswe must turn first to some recent human inventions. Everyone knows that if he shouts in the vicinity of a wall or a mountainside, an echo will come back. The further off this solid obstruction, the longer time will elapse for the return of the echo. A sound made by tapping on the hull of a ship will be reflected from the sea bottom, and by measuring the time interval between the taps and the receipt of the echoes, the depth of the sea at that point can be calculated. So was born the echo-sounding apparatus, now in general use in ships. Every solid object will reflect a sound, varying according to the size and nature of the object. A shoal of fish will do this. So it is a comparatively simple step from locating the sea bottom to locating a shoal of fish. With experience, and with improved apparatus, it is now possible not only to locate a shoal but to tell if it is herring, cod, or other well-known fish, by the pattern of its echo.",
        "It has been found that certain bats emit squeaks and by receiving the echoes, they can locate and steer clear of obstacles -- or locate flying insects on which they feed. This echo-location in bats is often compared with radar, the principle of which is similar."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'bat', pos: 'n.', meaning: '蝙蝠', phonetic: '/bæt/' },
    { word: 'strictly', pos: 'adv.', meaning: '明确地', phonetic: '/\'striktli/' },
    { word: 'utilitarian', pos: 'adj.', meaning: '实用的', phonetic: '/\'ju:tili\'tєəriən/' },
    { word: 'appreciation', pos: 'n.', meaning: '理解', phonetic: '/ə\'pri:ʃi\'eiʃən/' },
    { word: 'obstruction', pos: 'n.', meaning: '障碍物', phonetic: '/əb\'strʌkʃən/' },
    { word: 'elapse', pos: 'v.', meaning: '消逝', phonetic: '/i\'læps/' },
    { word: 'hull', pos: 'n.', meaning: '船体', phonetic: '/hʌl/' },
    { word: 'interval', pos: 'n.', meaning: '间隔', phonetic: '/\'intəvəl/' },
    { word: 'receipt', pos: 'n.', meaning: '收到', phonetic: '/ri\'si:t/' },
    { word: 'apparatus', pos: 'n.', meaning: '仪器', phonetic: '/,æpə\'reitəs/' },
    { word: 'shoal', pos: 'n.', meaning: '鱼群', phonetic: '/ʃəul/' },
    { word: 'herring', pos: 'n.', meaning: '鲱鱼', phonetic: '/\'heriŋ/' },
    { word: 'cod', pos: 'n.', meaning: '鳕鱼', phonetic: '/kɔd/' },
    { word: 'squeak', pos: 'n.', meaning: '尖叫声', phonetic: '/skwi:k/' }
  ],
}
const articleNce4L8: Article = {
  original: {
    paragraphs: [
      "Chickens slaughtered in the United States, claim officials in Brussels, are not fit to grace European tables. No, say the American: our fowl are fine, we simply clean them in a different way. These days, it is differences in national regulations, far more than tariffs, that put sand in the wheels of trade between rich countries. It is not just farmers who are complaining. An electric razor that meets the European Union's safety standards must be approved by American testers [before it can be sold in the United States], and an American-made dialysis machine needs the EU's okay [before it hits the market in Europe].",
        "As it happens, a razor that is safe in Europeis unlikely to electrocute Americans. So, ask businesses on both sides of the Atlantic, why have two lots of tests where one would do? Politicians agree, in principle, so America and the EU have been trying to reach a deal which would eliminate the need to double-test many products. They hope to finish in time for a trade summit between America and the EU on May 28th. Although negotiators are optimistic, the details are complex enough that they may be hard-pressed to get a deal at all.",
        "Why? One difficulty is to construct the agreements. The Americans would happily reach one accord on standards for medical devices and then hammer out different pacts covering, say, electronic goods and drug manufacturing. The EU -- following fine continental traditions -- wants agreement on general principles, which could be applied to many types of products and perhaps extended to other countries."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'slaughter', pos: 'v.', meaning: '屠宰', phonetic: '/\'slɔ:tə/' },
    { word: 'fit', pos: 'adj.', meaning: '适合', phonetic: '/fit/' },
    { word: 'grace', pos: 'v.', meaning: '给…增光', phonetic: '/greis/' },
    { word: 'tariff', pos: 'n.', meaning: '关税', phonetic: '/\'tærif/' },
    { word: 'standard', pos: 'n.', meaning: '标准', phonetic: '/\'stændəd/' },
    { word: 'dialysis', pos: 'n.', meaning: '分离，分解；透析，渗析', phonetic: '/dai\'ælisis/' },
    { word: 'electrocute', pos: 'v.', meaning: '使触电身亡', phonetic: '/i\'lektrəkjut/' },
    { word: 'eliminate', pos: 'v.', meaning: '消灭', phonetic: '/i\'limineit/' },
    { word: 'accord', pos: 'n.', meaning: '协议', phonetic: '/ə\'kɔ:d/' },
    { word: 'device', pos: 'n.', meaning: '仪器，器械', phonetic: '/di\'vais/' },
    { word: 'hammer out', pos: 'v.', meaning: '推敲', phonetic: '//' },
    { word: 'pact', pos: 'n.', meaning: '合同，条约，公约', phonetic: '/pækt/' }
  ],
}
const articleNce4L11: Article = {
  original: {
    paragraphs: [
      "Some old people are oppressed by the fear of death. In the young there is a justification for this feeling. Young men who have reason to fear that they will be killed in battle may justifiably feel bitter in the thought that they have been cheated of the best things that life has to offer. But in an old man who has known human joys and sorrows, and has achieved whatever work it was in himto do, the fear of death is some [what abject and ignoble]. The best way to overcome it－so at least it seems to me－is to make your interests gradually wider and more impersonal, until bit by bit [the walls of the ego] recede, and your life becomes increasingly merged in the universal life. An individual human existence should be like a river--small at first, narrowly contained within its banks, and rushing passionately past boulders and over waterfalls. Gradually the river grows wider,the banks recede, the waters flow more quietly, and in the end, without any visible break, they become merged in the sea, and painlessly lose their individual being. The man who, in old age, can see his life in this way, will not suffer from the fear of death, since the things [he cares for] will continue. And it, with the decay of vitality, weariness increases, the thought of rest will be not unwelcome.I should wish to die while still at workthey are, knowing that others will carry on [what I can no longer do], and being content in the thought that [what was possible] has been done."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'oppress', pos: 'v.', meaning: '忧郁，压抑', phonetic: '/ə\'pres/' },
    { word: 'justification', pos: 'n.', meaning: '正当理由', phonetic: '/\'dʒʌstifi\'keiʃən/' },
    { word: 'justifiably', pos: 'adv.', meaning: '无可非议地', phonetic: '/-faiəbli/' },
    { word: 'cheat', pos: 'v.', meaning: '欺骗', phonetic: '/tʃi:t/' },
    { word: 'abject', pos: 'adj.', meaning: '可怜的', phonetic: '/\'æbdʒekt/' },
    { word: 'ignoble', pos: 'adj.', meaning: '不体面的，可耻的', phonetic: '/ig\'nəubl/' },
    { word: 'impersonal', pos: 'adj.', meaning: '超脱个人感情影响的', phonetic: '/im\'pə:sənl/' },
    { word: 'ego', pos: 'n.', meaning: '自我', phonetic: '/\'egəu/' },
    { word: 'recede', pos: 'v.', meaning: '退去', phonetic: '/ri\'si:d/' },
    { word: 'increasingly', pos: 'adv.', meaning: '日益，不断', phonetic: '/in\'kri:siŋli/' },
    { word: 'passionately', pos: 'adv.', meaning: '激昂地', phonetic: '//' },
    { word: 'painlessly', pos: 'adv.', meaning: '毫无痛苦地', phonetic: '//' },
    { word: 'vitality', pos: 'n.', meaning: '精力', phonetic: '/vai\'tæliti/' },
    { word: 'weariness', pos: 'n.', meaning: '疲惫感', phonetic: '/wiərinis/' }
  ],
}
const articleNce4L13: Article = {
  original: {
    paragraphs: [
      "The deepest holes of all are made for oil, and they go down to as much as 25,000 feet. But we do not need to send men down to get the oil out, as we mustwith other mineral deposits. The holes are only boringsn., less than a foot in diameter. My particular experience is largely in oil, and the search for oil has done more to improve deep drilling than any other mining activity. When it has been decided where we are going to drill, we put up at the surface an oil derrick. It has to be tall because it is like a giant block and tackle, and we have to lowervt. [] into the ground and haul [] out of the ground great lengths of drill pipe which are rotated by an engine at the top and are fitted with a cutting bit at the bottom.",
        "The geologist needs to know what rocks the drill has reached, so every so often a sample is obtained with a coring bit. It cuts a clean cylinder of rock, from which can be seen the strata the drill has been cutting through. Once we get down to the oil, it usually flows to the surface because great pressure, either from gas or water, is pushing it. This pressure must be under control, and we control it by means of the mud which we circulate down the drill pipe. We endeavour to avoid the old, romantic idea of a gusher, which wastes oil and gas. We want it to stay down the hole until we can lead it off in a controlled manner."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'mineral', pos: 'adj.', meaning: '矿物的', phonetic: '/\'minərəl/' },
    { word: 'boring', pos: 'n.', meaning: '钻孔', phonetic: '/\'bɔ:riŋ/' },
    { word: 'derrick', pos: 'n.', meaning: '井架', phonetic: '/\'derik/' },
    { word: 'block and tackle', pos: 'n.', meaning: '滑轮组', phonetic: '//' },
    { word: 'haul', pos: 'v.', meaning: '拖，拉', phonetic: '/hɔ:l/' },
    { word: 'rotate', pos: 'v.', meaning: '使转动', phonetic: '/rəu\'teit/' },
    { word: 'cutting bit', pos: 'n.', meaning: '钻头', phonetic: '//' },
    { word: 'geologist', pos: 'n.', meaning: '地质学家', phonetic: '/dʒi\'ɔlədʒist/' },
    { word: 'coring bit', pos: 'n.', meaning: '取芯钻头', phonetic: '//' },
    { word: 'cylinder', pos: 'n.', meaning: '圆柱体', phonetic: '/\'silində/' },
    { word: 'strata', pos: 'n.', meaning: '岩层［复］(［单］stratum)', phonetic: '/\'streitə/' },
    { word: 'circulate', pos: 'v.', meaning: '注入，环流', phonetic: '/\'sə:kjuleit/' },
    { word: 'gusher', pos: 'n.', meaning: '喷油井', phonetic: '//' }
  ],
}
const articleNce4L15: Article = {
  original: {
    paragraphs: [
      "Two factors weigh heavily against the effectiveness of scientific in industry. One is the general atmosphere of secrecy [in which] it is carried out, the other (being) the lack of freedom of the individual research worker. In so far as any inquiry is a secret one, it naturally limits [all those engaged in carrying it out] from effective [contact with their fellow scientists] either in other countries or in universities, or even, often enough, in other departments of the same firm. The degree of secrecy naturally varies considerably. Some of the bigger firms are engaged in researches which are [of such general and fundamental nature][that it is a positive advantage to them not to keep them secret].Yet a great many processes depending on such research are sought for with complete secrecy until the stage at which patents can be taken out. Even more processes are never patented at all but kept as secret processes. This applies particularly to chemical industries, where chance discoveries play a much larger part than they do in physical and mechanical industries. Sometimes the secrecy goes to such an extent that the whole nature of the research cannot be mentioned. Many firms, for instance, have great difficulty in obtaining technical or scientific books from libraries because they are unwilling to have their names entered as having taken out such and such a book for fear the agents of other firms should be able to trace the kind of research [they are likely to be undertaking]."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'secrecy', pos: 'n.', meaning: '秘密', phonetic: '//' },
    { word: 'effectiveness', pos: 'n.', meaning: '成效，效力', phonetic: '/i\'fektivnis/' },
    { word: 'inquiry', pos: 'n.', meaning: '调查研究', phonetic: '/in\'kwaiəri/' },
    { word: 'positive', pos: 'adj.', meaning: '确实的', phonetic: '/\'pɔzətiv/' },
    { word: 'process', pos: 'n.', meaning: '过程', phonetic: '/\'prəuses/' },
    { word: 'patent', pos: 'n./v.', meaning: '专利；得到专利权', phonetic: '/\'peitənt/' },
    { word: 'agent', pos: 'n.', meaning: '情报人员', phonetic: '/\'eidʒənt/' }
  ],
}
const articleNce4L16: Article = {
  original: {
    paragraphs: [
      "In the organization of industrial lifethe influence of the factory upon the physiological and mental state of the workers has been completely neglected. Modern industry is based on the conception of the maximum production at lowest cost, in order that [an individual or a group of individuals] may earn as much money as possible. It has expanded without any idea of the true nature of the human beings [who run the machines], and without (any idea of) giving any consideration to the effects produced [on the individuals and on their descendants] by the artificial mode of existence imposed by the factory. The great cities have been built with no regard for us. The shape and dimensions of the skyscrapers depend entirely on the necessityn. of obtaining the maximum income per square foot of ground, and of offering to the tenants offices and apartments that please them. This caused the construction of gigantic buildings where too large masses of human beings are crowded together. Civilized men like such a way of living. While they enjoy the comfort and banal luxury of their dwelling, they do not realize that they are deprived of the necessities of life. The modern city consists of monstrous edifices and consists of dark, narrow streets [full of petrol fumes], coal dust, and toxic gases, torn by the noise of the taxi-cabs, lorries and buses, and thronged ceaselessly by great crowds. Obviously, it has no been planned for the good of its inhabitants."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'physiological', pos: 'adj.', meaning: '生理的', phonetic: '/\'fiziə\'lɔdʒikəl/' },
    { word: 'maximum', pos: 'adj.', meaning: '最大限度的', phonetic: '/\'mæksiməm/' },
    { word: 'consideration', pos: 'n.', meaning: '考虑', phonetic: '/kən\'sidə\'reiʃən/' },
    { word: 'descendant', pos: 'n.', meaning: '子孙，后代', phonetic: '/di\'sendənt/' },
    { word: 'artificial', pos: 'adj.', meaning: '人工的', phonetic: '/\'a:ti\'fiʃəl/' },
    { word: 'impose', pos: 'v.', meaning: '强加', phonetic: '/im\'pəuz/' },
    { word: 'dimension', pos: 'n.', meaning: '直径', phonetic: '/di\'menʃən/' },
    { word: 'skyscraper', pos: 'n.', meaning: '摩天大楼', phonetic: '/\'skai\'skreipə/' },
    { word: 'tenant', pos: 'n.', meaning: '租户', phonetic: '/\'tenənt/' },
    { word: 'civilized', pos: 'adj.', meaning: '文明的', phonetic: '/\'sivilaizd/' },
    { word: 'banal', pos: 'adj.', meaning: '平庸的', phonetic: '/bə\'na:l/' },
    { word: 'luxury', pos: 'n.', meaning: '豪华', phonetic: '/\'lʌkʃəri/' },
    { word: 'deprive', pos: 'v.', meaning: '剥夺', phonetic: '/di\'praiv/' },
    { word: 'monstrous', pos: 'adj.', meaning: '畸形的', phonetic: '/\'mɔnstrəs/' },
    { word: 'edifice', pos: 'n.', meaning: '大厦', phonetic: '/\'edifis/' },
    { word: 'toxic', pos: 'adj.', meaning: '有毒的', phonetic: '/\'tɔksik/' },
    { word: 'ceaselessly', pos: 'adv.', meaning: '不停地', phonetic: '/\'si:slisli/' },
    { word: 'throng', pos: 'v.', meaning: '挤满，壅塞', phonetic: '/θrɔŋ/' }
  ],
}
const articleNce4L18: Article = {
  original: {
    paragraphs: [
      "There has long been a superstition (in which) among mariners that porpoises will save drowning men by pushing them to the surface, or protect them from sharks by surrounding them in defensive formation. Marine Studio biologists have pointed outadv.that, howeverintelligent they may be, it is probably a mistake to credit dolphins with any motive of life-saving. On the occasions [when they have pushed to shore an unconscious human being] they have much more likely done it out of curiosity or for sport, as () in riding the bow waves of a ship. In 1928 some porpoises were photographed working like beavers to push ashore a waterlogged mattress. If, as has been reported, they have protected humans from sharks, it may have been because curiosity attracted them and because the scent of a possible meal attracted the sharks. Porpoises and sharks are natural enemies. It is possible that upon such an occasion a battle ensued, with the sharks being driven away or killed.",
        "Whether [it be bird, fish or beast, the porpoise]be,is intrigued with anything [that is alive]. They are constantly [afterprepthe turtles], the Ferdinands of marine life, who peacefully submit to all sorts of indignities. One young calf especially enjoyed raising a turtle to the surface with his snout and then shoving him across the tank like an aquaplane. Almost [any day] a young porpoise may be seen trying to turn a 300-pound sea turtle over by sticking his snout under the edge of his shell and pushing up for dear life. This is not easy, and may require two porpoises working together. In another game, as the turtle swims across the oceanarium, the first porpoise swoops down from above and butts his shell with his belly. This knocks the turtle down several feet. He no sooner recovers his equilibrium than the next porpoise comes along and hits him another crack. Eventually the turtle has been butted all the way [down to the floor of the tank]. He is now satisfied merely to try to stand up, but as soon as he does so a porpoise knocks him flat. The turtle at last gives up by pulling his feet under his shell and the game is over.",
        ". have pointed out that. that in that/but that/except that, outadv. be after. ； for life ， for dear life a."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'porpoise', pos: 'n.', meaning: '海豚', phonetic: '//' },
    { word: 'mariner', pos: 'n.', meaning: '水手', phonetic: '/\'mærinə/' },
    { word: 'shark', pos: 'n.', meaning: '鲨鱼', phonetic: '/ʃa:k/' },
    { word: 'formation', pos: 'n.', meaning: '队形', phonetic: '/fɔ:\'meiʃən/' },
    { word: 'dolphin', pos: 'n.', meaning: '海豚科动物', phonetic: '/\'dɔlfin/' },
    { word: 'unconscious', pos: 'adj.', meaning: '不省人事的', phonetic: '/ʌn\'kɔʃəs/' },
    { word: 'beaver', pos: 'n.', meaning: '海狸', phonetic: '/\'bi:və/' },
    { word: 'ashore', pos: 'adv.', meaning: '上岸', phonetic: '/ə\'ʃɔ:/' },
    { word: 'waterlogged', pos: 'adj.', meaning: '浸满水的', phonetic: '//' },
    { word: 'scent', pos: 'n.', meaning: '香味', phonetic: '/sent/' },
    { word: 'ensue', pos: 'v.', meaning: '接着发生', phonetic: '/in\'sju:/' },
    { word: 'intrigue', pos: 'v.', meaning: '引起兴趣', phonetic: '/in\'tri:g/' },
    { word: 'indignity', pos: 'n.', meaning: '侮辱', phonetic: '/in\'digniti/' },
    { word: 'snout', pos: 'n.', meaning: '口鼻部', phonetic: '/snaut/' },
    { word: 'shove', pos: 'v.', meaning: '硬推', phonetic: '/ʃʌv/' },
    { word: 'aquaplane', pos: 'n.', meaning: '驾浪滑水板', phonetic: '/\'ækwəplein/' },
    { word: 'oceanarium', pos: 'n.', meaning: '水族馆', phonetic: '/\'ouʃən\'ʒəri-əm/' },
    { word: 'swoop', pos: 'v.', meaning: '猛扑', phonetic: '/swu:p/' },
    { word: 'belly', pos: 'n.', meaning: '腹部', phonetic: '/\'beli/' },
    { word: 'equilibrium', pos: 'n.', meaning: '平衡', phonetic: '/i:kwi\'libriəm/' },
    { word: 'butt', pos: 'v.', meaning: '碰撞', phonetic: '/bʌt/' },
    { word: 'crack', pos: 'n.', meaning: '重击', phonetic: '/kræk/' }
  ],
}
const articleNce4L21: Article = {
  original: {
    paragraphs: [
      "William S. Hart was, perhaps, the greatest of all Western stars, for unlike Gary Cooper and John Wayne he appeared in nothing but Westerns. From 1914 to 1924 he was supreme and unchallenged. It was Hart who created the basic formula of the Western film, and devised the protagonist he played in every film he made, the good-bad man, the accidental, noble outlaw, or the honest but framed cowboy, or the sheriff made suspect by vicious gossip; in short, the individual in conflict with himself and his frontier environment.",
        "Unlike most of his contemporaries in Hollywood, Hart actually knew something of the old West. He had lived in it as a child when it was already disappearing, and his hero was firmly rooted in his memories and experiences, and in both the history and the mythology of the vanished frontier. And although no period or place in American history has been more absurdly romanticized, myth and reality did join hands in at least one arena, the conflict between the individual and encroaching civilization.",
        "Men accustomed to struggling for survival against the elements and Indian were bewildered by politicians, bankers and business-men, and unhorsed by fences, laws and alien taboos. Hart's good-bad man was always an outsider, always one of the disinherited, and if he found it necessary to shoot a sheriff or rob a bank along the way, his early audiences found it easy to understand and forgive, especially when it was Hart who, in the end, overcame the attacking Indians.",
        "Audiences in the second decade of the twentieth century found it pleasant to escape to a time when life, though hard, was relatively simple. We still do; living in a world in which undeclared aggression, war, hypocrisy, chicanery, anarchy and impending immolation are part of our daily lives, we all want a code to live by."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'supreme', pos: 'adj.', meaning: '首屈一指的', phonetic: '/sju:\'pri:m/' },
    { word: 'protagonist', pos: 'n.', meaning: '主角', phonetic: '/prəu\'tægənist/' },
    { word: 'outlaw', pos: 'n.', meaning: '逃犯，亡命之徒', phonetic: '/\'autlɔ:/' },
    { word: 'framed', pos: 'adj.', meaning: '遭到陷害的', phonetic: '//' },
    { word: 'vicious', pos: 'adj.', meaning: '恶毒的', phonetic: '/\'viʃəs/' },
    { word: 'mythology', pos: 'n.', meaning: '神话', phonetic: '/mi\'θɔlədʒi/' },
    { word: 'vanished', pos: 'adj.', meaning: '消失了的', phonetic: '//' },
    { word: 'absurdly', pos: 'adv.', meaning: '荒诞地', phonetic: '/əb\'sə:dli/' },
    { word: 'arena', pos: 'n.', meaning: '竞技场地', phonetic: '/ə\'ri:nə/' },
    { word: 'encroaching', pos: 'adj.', meaning: '渐渐渗入的', phonetic: '//' },
    { word: 'Indian', pos: 'n.', meaning: '印第安人', phonetic: '/\'indiən/' },
    { word: 'bewilder', pos: 'v.', meaning: '使手足无措', phonetic: '/bi\'wildə/' },
    { word: 'alien', pos: 'adj.', meaning: '外来的', phonetic: '/\'eiljən/' },
    { word: 'taboo', pos: 'n.', meaning: '戒律', phonetic: '/tə\'bu:/' },
    { word: 'disinherit', pos: 'v.', meaning: '剥夺…继承权', phonetic: '/\'disin\'herit/' },
    { word: 'undeclared', pos: 'adj.', meaning: '未经宣布的', phonetic: '/\'ʌndi\'klєəd/' },
    { word: 'hypocrisy', pos: 'n.', meaning: '伪善', phonetic: '/hi\'pɔkrəsi/' },
    { word: 'chicanery', pos: 'n.', meaning: '诈骗', phonetic: '/ʃi\'keinəri/' },
    { word: 'impending', pos: 'adj.', meaning: '迫近的，迫在眉睫的', phonetic: '/im\'pendiŋ/' },
    { word: 'immolation', pos: 'n.', meaning: '杀戮', phonetic: '/iməu\'leiʃən/' },
    { word: 'code', pos: 'n.', meaning: '准则', phonetic: '/kəud/' }
  ],
}
const articleNce4L22: Article = {
  original: {
    paragraphs: [
      "Why does the idea of progress loom so large in the modern world? Surely because progress of a particular kind is actually taking place around us and is becoming more and more manifest. Although mankind has undergone no general improvement in intelligence or morality, it has made extraordinary progress in the accumulation of knowledge. Knowledge began to increase as soon as the thoughts of one individual could be communicated to another by means of speech. With the invention of writing, a great advance was made, for knowledge could then be not only communicated but also stored. Libraries made education possible, and education in its turn added to libraries: the growth of knowledge followed a kind of compound interest law, which was greatly enhanced by the invention of printing. All this was comparatively slow until, with the coming science, the tempo was suddenly raised. Then knowledge began to be accumulated according to a systematic plan. The trickle became a stream; the stream has now become a torrent. Moreover, as soon as new knowledge is acquired, it is now turned to practical account. [What is called 'modern civilization'] is not the result of a balanced development of all man's nature, but of accumulated knowledge applied to practical life. The problem now [facing humanity] is: What is going to be done with all this knowledge? Asis so often pointed out, knowledge is a two-edged weapon which can be used equally for good or evil. It is now being used indifferently for both. Could any spectacle, for instance, be more grimly whimsical than that of gunners using science to shatter men's bodies while, close at hand, surgeons use it to restore them? We have to ask ourselves very seriously what will happen if this twofold use of knowledge, with its ever-increasing power, continues."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'loom', pos: 'v.', meaning: '赫然耸起', phonetic: '/lu:m/' },
    { word: 'manifest', pos: 'adj.', meaning: '明显的', phonetic: '/\'mænifest/' },
    { word: 'morality', pos: 'n.', meaning: '道德', phonetic: '/mə\'ræliti/' },
    { word: 'communicate', pos: 'v.', meaning: '交流，交际', phonetic: '/kə\'mju:nikeit/' },
    { word: 'compound', pos: 'adj.', meaning: '复合的', phonetic: '/\'kɔmpaund, kəm\'paund/' },
    { word: 'enhance', pos: 'v.', meaning: '增进', phonetic: '/in\'ha:ns/' },
    { word: 'tempo', pos: 'n.', meaning: '速率', phonetic: '/\'tempəu/' },
    { word: 'trickle', pos: 'n.', meaning: '涓涓细流', phonetic: '/\'trikl/' },
    { word: 'torrent', pos: 'n.', meaning: '滔滔洪流', phonetic: '/\'tɔrənt/' },
    { word: 'humanity', pos: 'n.', meaning: '人类', phonetic: '/hju:\'mæniti/' },
    { word: 'indifferently', pos: 'adv.', meaning: '不在乎地', phonetic: '/in\'difrəntli/' },
    { word: 'grimly', pos: 'adv.', meaning: '可怖地', phonetic: '/\'grimli/' },
    { word: 'whimsical', pos: 'adj.', meaning: '怪诞的', phonetic: '/\'wimzikl/' },
    { word: 'shatter', pos: 'v.', meaning: '毁坏', phonetic: '/\'ʃætə/' },
    { word: 'twofold', pos: 'adj.', meaning: '双重的', phonetic: '/\'tu:fəuld/' }
  ],
}
const articleNce4L24: Article = {
  original: {
    paragraphs: [
      "A young man sees a sunset and, (being) unable to understand or to express the emotion that it rouses in him, concludes that it must be the gateway to a world that lies beyondadv. It is difficult for any of us in moments of intense aesthetic experience to resist the suggestion that we are catching a glimpse of a light that shines down to us from a different realm of existence, different and, [because the experience is intensely moving], in some way higher. And, though the gleams blind and dazzle, yet dothey convey a hint of beauty and serenity greater than we have known or imagined. Greater too than we can describe, for language, which was invented to convey the meanings of this world, cannot readily be fitted to the uses of another.",
        "In some moods, Nature shares it. There is no sky in June so blue that it does not point forward to a bluer, no sunset so beautiful that it does not waken the vision of a greater beauty, a vision which passes [before it is fully glimpsed], and in passing leaves an indefinable longing and regret. But, if this world is not merely a bad joke, (if) life () a vulgar flare amid the cool radiance of the stars, and existence () an empty laugh braying across the mysteries; if these intimations of a somethingn. [behind and beyond] are not evil humour born of indigestion, or whimsies sent by the devil to mock and madden us, if, in a word, beauty means something, yet we must not seek to interpret the meaning. If we glimpse the unutterable, it is unwise to try to utter it, nor should we seek to invest with significance that which we cannot grasp. Beauty in terms of our human meanings is meaningless."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'intense', pos: 'adj.', meaning: '强烈的', phonetic: '/in\'tens/' },
    { word: 'aesthetic', pos: 'adj.', meaning: '审美的', phonetic: '/i:s\'θetik/' },
    { word: 'realm', pos: 'n.', meaning: '世界', phonetic: '/\'relm/' },
    { word: 'serenity', pos: 'n.', meaning: '静谧', phonetic: '/si\'reniti/' },
    { word: 'undeniable', pos: 'adj.', meaning: '不可否认的', phonetic: '/\'ʌndi\'naiəbl/' },
    { word: 'indefinable', pos: 'adj.', meaning: '模糊不清的', phonetic: '/\'indi\'fainəbl/' },
    { word: 'vulgar', pos: 'adj.', meaning: '平庸的', phonetic: '/\'vʌlgə/' },
    { word: 'radiance', pos: 'n.', meaning: '发光', phonetic: '/\'reidjəns/' },
    { word: 'intimation', pos: 'n.', meaning: '暗示', phonetic: '/inti\'meiʃən/' },
    { word: 'unutterable', pos: 'adj.', meaning: '不可言传的', phonetic: '/ʌn\'ʌtərəbl/' },
    { word: 'invest', pos: 'v.', meaning: '赋予', phonetic: '/in\'vest/' }
  ],
}
const articleNce4L28: Article = {
  original: {
    paragraphs: [
      "This is a sceptical age, but although our faith in many of the things in which our forefathers fervently believedhas weakened, our confidence in the curative properties of the bottle of medicine remains the same as theirs. This modern faith in medicines is proved by the fact that [the annual drug bill of the Health Services] is mounting to astronomical figures and shows no signs at present of ceasing to rise. The majority of patients attending [the medical out-patients departments of our hospitals] feel that they have not received adequate treatment unless they are able to carry home with them some tangible remedy in the shape of [a bottle of medicine, a box of pills, or a small jar of ointment], and the doctor in charge of the department is only too ready to provide them with these requirements. There is no quicker method of disposing of patients than by giving them what they are asking for, and sincemost medical men in the Health Services are overworked and have little time for offering time-consuming and little appreciated advice on such subjects as [diet, right living, and the need for abandoning bad habits, etc., the bottle, the box, and the jar] are almost always granted them.",
        "Nor is it only the ignorant and ill-educated person who has such faith in the bottle of medicine, especially if it be wrapped in white paper and sealed with a dab of red sealing-wax by a clever chemist. It is recounted of Thomas Carlyle that when he heard of the illness of his friend, Henry Taylor, he went off immediately to visit him, carrying with him in his pocket [what remained of a bottle of medicine (formerly prescribed for an indisposition of Mrs Carlyle's)].",
        "Carlyle was entirely ignorant of what the bottle in his pocket contained, of the nature of the illness from which his friend was suffering, and of what had previously been wrong with his wife, but a medicine [that had worked so well in one form of illness] would surely be [of equal benefit in another], and comforted by the thought of the help [he was bringing to his friend], he hastened to Henry Taylor's house. History does not relate whether his friend accepted his medical help, but in all probability he did. The great advantage of taking medicine is that it makes no demands on the taker beyond that of putting up for a moment with a disgusting taste, and that is what all patients demand of their doctors--to be cured at no inconvenience to themselves."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'skeptical', pos: 'adj.', meaning: '怀疑的', phonetic: '/\'skeptikəl/' },
    { word: 'forefathers', pos: 'n.', meaning: '祖先', phonetic: '//' },
    { word: 'fervently', pos: 'adv.', meaning: '热情地', phonetic: '/\'fə:vəntli/' },
    { word: 'curative', pos: 'adj.', meaning: '治病的', phonetic: '/\'kjuərətiv/' },
    { word: 'astronomical', pos: 'adj.', meaning: '天文学的', phonetic: '/\'æstrə\'nɔmikəl/' },
    { word: 'tangible', pos: 'adj.', meaning: '实实在在的', phonetic: '/tændʒəbl/' },
    { word: 'remedy', pos: 'n.', meaning: '药物', phonetic: '/\'remidi/' },
    { word: 'ointment', pos: 'n.', meaning: '药膏', phonetic: '/\'ɔintmənt/' },
    { word: 'prescribe', pos: 'v.', meaning: '开药方', phonetic: '/pri\'skraib/' },
    { word: 'indisposition', pos: 'n.', meaning: '小病', phonetic: '/in\'dispə\'ziʃən/' },
    { word: 'disgusting', pos: 'adj.', meaning: '令人讨厌的', phonetic: '//' },
    { word: 'inconvenience', pos: 'n.', meaning: '不便', phonetic: '/\'inkən\'vi:njəns/' }
  ],
}
const articleNce4L30: Article = {
  original: {
    paragraphs: [
      "Our knowledge of the oceans a hundred years ago was confined to the two-dimen sional shape [of the sea-surface] and the hazards of navigation presented by the irregularities in depth of the shallow water close to the land. The open sea was deep and mysterious, and anyone who gave more than a passing thought to the bottom confines of the oceansprobably assumed that the sea-bed was flat. Sir James Clark Ross had obtained a sounding of over 2,400 fathoms in 1836 but it was not until 1800, when H.M.S. Porcupine was put at the disposal of the Royal Society for several cruises, that a series of deep soundings was obtained in the Atlantic and the first samples were collected by dredging the bottom. Shortly after this the famous H.M.S. Challenger expedition established the study of the sea-floor as a subject worthy of the most qualified physicists and geologists. A burst of activity associated with the laying of submarine cables soon confirmed the Challenger's observation [that many parts of the ocean were two to three miles deep], and the existence of underwater features of considerable magnitude.",
        "Today enough soundings are available to enable a relief map of the Atlantic to be drawn and we know something of the great variety of the sea-bed's topography. Since the sea covers the greater part of the earth's surface it is quite reasonable to regard the sea-floor as the basic form of the crust of the earth, with superimposed upon it, [the continents, together with the islands and other features of the oceans]. The continents form rugged tablelands which standnearly three miles above the floor of the open ocean. From the shore-line out to a distance which may be anywhere from a few miles to a few hundred miles, runs the gentle slope of the continental shelf, geologically part of the continents. The real dividing-line between continents and oceans occurs at the foot of a steeper slope.",
        "This continental slope usually starts at a place somewhere near the 100-fathom mark and in the course of a few hundred miles reaches the true ocean-floor at 2,500-3,000 fathoms. The slope averages about 1 in 30, but contains steep, probably vertical, cliffs, and gentle sediment-covered terraces, and near its lower reaches [there is a long tailing-off] which is almost certainly the result of material transported out to deep water [after being eroded from the continental masses]."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'navigation', pos: 'n.', meaning: '航海', phonetic: '/\'nævi\'geiʃən/' },
    { word: 'sounding', pos: 'n.', meaning: '水深度', phonetic: '//' },
    { word: 'porcupine', pos: 'n.', meaning: '箭猪', phonetic: '/\'pɔ:kjupain/' },
    { word: 'dredge', pos: 'v.', meaning: '挖掘', phonetic: '/dredʒ/' },
    { word: 'expedition', pos: 'n.', meaning: '远征', phonetic: '/\'ekspi\'diʃən/' },
    { word: 'physicist', pos: 'n.', meaning: '物理学家', phonetic: '/\'fizisist/' },
    { word: 'magnitude', pos: 'n.', meaning: '很多', phonetic: '/\'mægnitju:d/' },
    { word: 'topography', pos: 'n.', meaning: '地形', phonetic: '/tə\'pɔgrəfi/' },
    { word: 'crust', pos: 'n.', meaning: '地壳', phonetic: '/krʌst/' },
    { word: 'rugged', pos: 'adj.', meaning: '崎岖不平的', phonetic: '/\'rʌgid/' },
    { word: 'tableland', pos: 'n.', meaning: '高地', phonetic: '//' },
    { word: 'sediment', pos: 'n.', meaning: '沉淀物', phonetic: '/\'sedimənt/' },
    { word: 'terrace', pos: 'n.', meaning: '阶地', phonetic: '/\'terəs/' },
    { word: 'erode', pos: 'v.', meaning: '侵蚀', phonetic: '/i\'rəud/' }
  ],
}
const articleNce4L32: Article = {
  original: {
    paragraphs: [
      "In his own lifetime Galileo was the centre of violent controversy; but the scientific dust has long since settled, and today we can see [even his famous clash with the Inquisition] in something like its proper perspective. But, in contrast, it is only in modern times that Galileo has become a problem child for historians of science.",
        "The old view of Galileo was delightfully uncomplicated. He was, above all, a man who experimented: who despised the prejudices and book learning of the Aristotelians, who put his questions to nature instead of to the ancients, and who drew his conclusions fearlessly. He had been the first to turn a telescope to the sky, and he had seen there evidence enough to overthrow Aristotle and Ptolemy together. He was the man who climbed the Leaning Tower of Pisa and dropped various weights from the top, who rolled balls down inclined planes, and then generalized the results of his many experiments into the famous law of free fall.",
        "But a closer study of the evidence, supported by a deeper sense of the period, and particularly by a new consciousness of the philosophical undercurrents in the scientific revolution, has profoundly modified this view of Galileo. Today, although the old Galileo lives on in many popular writings, among historians of science a new and more sophisticated picture has emerged. At the same time our sympathy for Balileo's opponents has grown somewhat. His telescopic observation are justly immortal; they aroused great interest at the time, they had important theoretical consequences, and they provided a striking demonstration of the potentialities hidden in instruments and apparatus. But can we blame those who looked and failed to see what Galileo saw, if we remember that to use a telescope at the limit of its powers calls for long experience and intimate familiarity with one's instrument? Was the philosopher [who refused to look through Galileo's telescope] more culpable than those [who alleged that the spiral nebulae observed with Lord Rosse's great telescope in the eighteen-forties were scratches left by the grinder]? We can perhaps forgive those who said the moons of Jupiter were produced by Galileo's spy-glass if we recall that in his day, asfor centuries before, curved glass was the popular contrivance for producing not truth but illusion, untruth; and if a single curved glass would distort nature, how much more would a pair of them?"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'controversy', pos: 'n.', meaning: '争议，争论', phonetic: '/\'kɔntrəvə:si/' },
    { word: 'dust', pos: 'n.', meaning: '纠纷，骚动', phonetic: '/dʌst/' },
    { word: 'clash', pos: 'n.', meaning: '冲突', phonetic: '/klæʃ/' },
    { word: 'Inquisition', pos: 'n.', meaning: '(罗马天主教的)宗教法庭', phonetic: '/inkwi\'ziʃən/' },
    { word: 'perspective', pos: 'n.', meaning: '观点，看法', phonetic: '/pə:\'spektiv/' },
    { word: 'despise', pos: 'v.', meaning: '蔑视', phonetic: '/dis\'paiz/' },
    { word: 'generalize', pos: 'v.', meaning: '归纳', phonetic: '/\'dʒenərəlaiz/' },
    { word: 'undercurrent', pos: 'n.', meaning: '潜流', phonetic: '/\'ʌndə\'kʌrənt/' },
    { word: 'theoretical', pos: 'adj.', meaning: '理论上的', phonetic: '/θiə\'retikl/' },
    { word: 'potentiality', pos: 'n.', meaning: '潜能', phonetic: '/pə\'tenʃi\'æliti/' },
    { word: 'intimate', pos: 'adj.', meaning: '详尽的', phonetic: '/\'intimit/' },
    { word: 'familiarity', pos: 'n.', meaning: '熟悉', phonetic: '/fə\'mili\'æriti/' },
    { word: 'culpable', pos: 'adj.', meaning: '应受谴责的', phonetic: '/\'kʌlpəbl/' },
    { word: 'Aristotelian', pos: 'n.', meaning: '亚里士多德学派的人', phonetic: '/æristə\'ti:liən/' },
    { word: 'Aristotle', pos: 'n.', meaning: '亚里士多德(古希腊哲学家)', phonetic: '/\'æristɔtl/' },
    { word: 'Ptolemy', pos: 'n.', meaning: '托勒密(公元-，古希腊天文学家)', phonetic: '//' },
    { word: 'Leaning Tower Pisa', pos: 'n.', meaning: '比萨斜塔', phonetic: '//' },
    { word: 'spiral', pos: 'adj.', meaning: '螺旋状的', phonetic: '/\'spaiərəl/' },
    { word: 'nebula', pos: 'n.', meaning: '星云', phonetic: '/\'nebjulə/' },
    { word: 'scratch', pos: 'n.', meaning: '擦痕', phonetic: '/skrætʃ/' },
    { word: 'contrivance', pos: 'n.', meaning: '器械', phonetic: '/kən\'traivəns/' },
    { word: 'distort', pos: 'v.', meaning: '歪曲', phonetic: '/dis\'tɔ:t/' }
  ],
}
const articleNce4L33: Article = {
  original: {
    paragraphs: [
      "Education is one of the key words of our time. A man without an education, many of us believe, is an unfortunate victim of adverse circumstances deprived of one of the greatest twentieth-century opportunities. Convinced of the importance of education, modern states 'invest' in institutions of learning to get back 'interest' in the form of a large group of enlightened young men and women who are potential leaders. Education, with its cycles of instruction so carefully worked out, punctuated by text-books--those purchasable wells of wisdom-- what would civilization be like without its benefits?",
        "So much is certain: that we would have doctors and preachers, lawyers and defendants, marriages and births--but our spiritual outlook would be different. We would lay less stress on 'facts and figures' and more on a good memory, on applied psychology, and on the capacity of a man to get along with his fellow-citizens. If our educational system were fashioned after its bookless past we would have the most democratic form of 'college' imaginable. Among the people [whom we like to call savages all knowledge inherited by tradition] is shared by all; it is taught to every member of the tribe so that in this respect everybody is, equally equipped for life.",
        "It is the ideal condition of the 'equal start' which only our most progressive forms of modern education try to regain. In primitive cultures the obligation to seek and to receive the traditional instruction is binding to all. There are no 'illiterates '--if the term can be applied to peoples without a script--while our own compulsory school attendance became law in Germany in 1642, in France in 1806, and in England in 1876, and is still non-existent in a number of 'civilized' nations. This shows how long it was before we deemed it necessary [to make sure that all our children could share in the knowledge accumulated by the 'happy few' during the past centuries].",
        "Education in the wilderness is not a matter of monetary means. All are entitled to an equal start. There is none of the hurry which, in our society, often hampers the full development of a growing personality.There, a child grows up under the ever-present attention of his parents, therefore the jungles and the savannahs know of no 'juvenile delinquency.' No necessity of making a living away from home results in neglect of children, and no father is confronted with his inability to 'buy' an education for his child.",
        "From: Julius E. Lips The Origin of Things – A Cultural History of Man - Education without books"
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'adverse', pos: 'adj.', meaning: '逆的，相反的', phonetic: '/\'ædvə:s/' },
    { word: 'purchasable', pos: 'adj.', meaning: '可买到的', phonetic: '/\'pə:tʃəsəbl/' },
    { word: 'preacher', pos: 'n.', meaning: '传教士', phonetic: '/\'pri:tʃə/' },
    { word: 'defendant', pos: 'n.', meaning: '被告', phonetic: '/di\'fendənt/' },
    { word: 'outlook', pos: 'n.', meaning: '视野', phonetic: '/\'aut-luk/' },
    { word: 'capacity', pos: 'n.', meaning: '能力', phonetic: '/kə\'pæsiti/' },
    { word: 'means', pos: 'n.', meaning: '方法，手段，财产，资力', phonetic: '/mi:nz/' },
    { word: 'hamper', pos: 'v.', meaning: '妨碍', phonetic: '/\'hæmpə/' },
    { word: 'savannah', pos: 'n.', meaning: '大草原', phonetic: '/sə\'vænə/' },
    { word: 'democratic', pos: 'adj.', meaning: '民主的', phonetic: '/\'demə\'krætik/' },
    { word: 'tribal', pos: 'adj.', meaning: '部落的', phonetic: '/traibl/' },
    { word: 'tribe', pos: 'n.', meaning: '部落', phonetic: '/traib/' },
    { word: 'illiterate', pos: 'n.', meaning: '文盲', phonetic: '/i\'litərit/' },
    { word: 'compulsory', pos: 'adj.', meaning: '义务的', phonetic: '/kəm\'pʌlsəri/' },
    { word: 'deem', pos: 'v.', meaning: '认为', phonetic: '/di:m/' },
    { word: 'juvenile', pos: 'adj.', meaning: '青少年的', phonetic: '/\'dʒu:vinail/' },
    { word: 'delinquency', pos: 'n.', meaning: '犯罪', phonetic: '/di\'liŋkwənsi/' }
  ],
}
const articleNce4L34: Article = {
  original: {
    paragraphs: [
      "Parents are often upset when their children praise the homes of their friends and regard it as a slur on their own cooking, or cleaning, or furniture, and often are foolish enough to letthe adolescents see that they are annoyed. They may even accuse them of disloyalty, or make some spiteful remark about the friends' parents. Such a loss of dignity and descent into childish behaviour on the part of the adults deeply shocks the adolescents, and makes them resolve that in future they will not talk to their parents about the places or people [they visit]. Before very long the parents will be complaining that the child is so secretive and never tells them anything, but they seldom realize that they have brought this on themselves.",
        "Disillusionment with the parents, however good and adequate they may be both as parents and as individuals, is to some degree inevitable. Most children have such a high ideal of their parents, unless the parents themselves have been unsatisfactory, that it can hardly hope to stand up to a realistic evaluation. Parents would be greatly surprised and deeply touched if they realize how much belief their children usually have in their character and infallibility, and how much this faith means to a child. If parents were prepared for this adolescent reaction, and realized that it was a sign that the child was growing up and developing valuable powers of observation and independent judgement, they would not be so hurt, and therefore would not drive the child into opposition by resenting and resisting it.",
        "The adolescent, with his passion for sincerity,always respects a parent who admits that he is wrong, or ignorant, or even that he has been unfair or unjust. What the child cannot forgive is the parents' refusal to admit these charges if the child knows them to be true.",
        "Victorian parents believed that they kept their dignity by retreating behind an unreasoning authoritarian attitude; in fact they did nothing of the kind, but children were then too cowed to let them know how they really felt. Today we tend to go to the other extreme, but on the whole this is a healthier attitude both for the child and the parent. It is always wiser and safer to face up to reality, however painful it may be at the moment."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'adolescence', pos: 'n.', meaning: '青春期', phonetic: '/\'ædəu\'lesns/' },
    { word: 'slur', pos: 'n.', meaning: '诋毁', phonetic: '/slə:/' },
    { word: 'adolescent', pos: 'n.', meaning: '青少年(-岁)', phonetic: '/ædə\'lesənt/' },
    { word: 'disloyalty', pos: 'n.', meaning: '不忠实', phonetic: '/dis\'lɔiəlti/' },
    { word: 'spiteful', pos: 'adj.', meaning: '恶意的，怀恨的', phonetic: '/\'spaitful/' },
    { word: 'disillusionment', pos: 'n.', meaning: '幻灭感', phonetic: '/-mənt/' },
    { word: 'evaluation', pos: 'n.', meaning: '评价', phonetic: '/i\'vælju\'eiʃən/' },
    { word: 'Infallibility', pos: 'n.', meaning: '一贯正确', phonetic: '/in\'fælə\'biləti/' },
    { word: 'resent', pos: 'v.', meaning: '怨恨', phonetic: '/ri\'zent/' },
    { word: 'sincerity', pos: 'n.', meaning: '诚挚', phonetic: '/sin\'seriti/' },
    { word: 'victorian', pos: 'adj.', meaning: '维多利亚式的', phonetic: '/vik\'tɔ:riən/' },
    { word: 'retreat', pos: 'v.', meaning: '后退', phonetic: '/ri\'tri:t/' },
    { word: 'unreasoning', pos: 'adj.', meaning: '不凭理智的', phonetic: '/ʌn\'ri:zəniŋ/' },
    { word: 'authoritarian', pos: 'adj.', meaning: '专制的', phonetic: '/ɔ:\'θɔri\'tєəriən/' },
    { word: 'cow', pos: 'v.', meaning: '吓唬', phonetic: '/kau/' }
  ],
}
const articleNce4L37: Article = {
  original: {
    paragraphs: [
      "At the age of twelve years, the human body is at its most vigorous. It has yet to reach its full size and strength, and its ownerhis or her full intelligence; but at this age the likelihood of death is the least. Earlier we were infants and young children, and consequently more vulnerable; later, we shall undergo a progressive loss of our vigour and resistance which, though imperceptible at first, will finally become so steep that we can live no longer, however well we look after ourselves, and however well society, and our doctors, look after us. This decline in vigour with the passing of time is called ageing. It is one of the most unpleasant discoveries which we all make that we must decline in this way, that ifwe escape wars, accidents and diseases we shall eventually die of old age, and that this happens at a rate which differs little from person to person, so that there are heavy odds in favour of our dying between the ages of sixty-five and eighty. Some of us will die sooner, a few will live longer-- on into a ninth or tenth decade. But the chances are against it, and there is a virtual limit on how long we can hope to remain alive, however lucky and robust we are.",
        "Normal people tend to forget this process unless and until they are reminded of it. We are so familiar with the fact that man ages, that people have for years assumed that the process of losing vigour with time, of becoming (the) more likely to die the older we get, was something self-evident, like the cooling of a hot kettle or the wearing-out of a pair of shoes. They have also assumed that all animals, and probably other organisms such as trees, or even the universe itself, must in the nature of things 'wear out'. Most animals we commonly observe do in fact age as we do if given the chance to live long enough; and mechanical systems like a wound watch or the sun, do in fact run out of energy in accordance with the second law of thermodynamics (whether the whole universe does so is a moot point at present). But these are not analogous to what happens when man ages. A run-down watch is still a watch and can be rewound. An old watch, by contrast, becomes so worn and unreliable that it eventually is not worth mending. But a watch could never repair itself -- it does not consist of living parts, only of metal, which wears away by friction. We could, at one time, repair ourselves well enough, at least, to overcome all but the most instantly fatal illnesses an accidents. Between twelve and eighty years we gradually lose this power; an illness which at twelve would knock us over, at eighty can knock us out, and into our grave. If we could stay as vigorous as we are at twelve, it would take about 700 years for half of us to die, and () another 700 for the survivors to be reduce by half again."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'likelihood', pos: 'n.', meaning: '可能性', phonetic: '/\'laiklihud/' },
    { word: 'infant', pos: 'n.', meaning: '婴儿', phonetic: '/\'infənt/' },
    { word: 'vulnerable', pos: 'adj.', meaning: '脆弱的', phonetic: '/\'vʌlnərəbl/' },
    { word: 'imperceptible', pos: 'adj.', meaning: '感觉不到的', phonetic: '/\'impə\'septəbl/' },
    { word: 'robust', pos: 'adj.', meaning: '强健的', phonetic: '/rəu\'bʌst/' },
    { word: 'organism', pos: 'n.', meaning: '有机体', phonetic: '/\'ɔ:gənizəm/' },
    { word: 'thermodynamics', pos: 'n.', meaning: '热力学', phonetic: '/\'θə:məudai\'næmiks/' },
    { word: 'steep', pos: 'adj.', meaning: '急转直下的', phonetic: '/sti:p/' },
    { word: 'ageing', pos: 'n.', meaning: '老化', phonetic: '//' },
    { word: 'odds', pos: 'n.', meaning: '可能性', phonetic: '/ɔdz/' },
    { word: 'virtual', pos: 'adj.', meaning: '实际上的', phonetic: '/\'və:tjuəl/' },
    { word: 'moot', pos: 'adj.', meaning: '争论未决的', phonetic: '/mu:t/' },
    { word: 'run-down', pos: 'adj.', meaning: '破旧的', phonetic: '//' },
    { word: 'friction', pos: 'n.', meaning: '摩擦', phonetic: '/\'frikʃən/' }
  ],
}
const articleNce4L44: Article = {
  original: {
    paragraphs: [
      "Custom has not been commonly regarded as a subject of any great moment. The inner workings of our own brainswe feel to be uniquely worthy of investigation, but custom have a way of thinking, is behaviour at its most commonplace. As a matter of fact, it is the other way around. Traditional custom, taken the world over, is a mass of detailed behaviour more astonishing than what any one person can ever evolve in individual actions, no matter how aberrant. Yet that is a rather trivial aspect of the matter. The fact of first-rate importance is the predominant role that custom plays in experience and in belief, and the very great varieties [it may manifest].",
        "No man ever looks at the world with pristine eyes. He sees it edited by a definite set of customs and institutions and ways of thinking. Even in his philosophical probings he cannot go behind these stereotypes; his very concepts of the true and the false will still have reference to his particular traditional customs. John Dewey has said in all seriousness that the part played by custom in shaping the behaviour of the individual as over against any way in which he can affect traditional custom, is as the proportion of the total vocabulary of his mother tongue over against those words of his own baby talk that are taken up into the vernacular of his family. When one seriously studies the social orders that have had the opportunity to develop autonomously, the figure becomes no more than an exact and matter-of-fact observation. The life history of the individual is first and foremost an accommodation to the patterns and standards traditionally handed down in his community. From the moment of his birth, the customs into which he is born shape his experience and behaviour. By the time he can talk, he is the little creature of his culture, and by the time he is grown and able to take part in its activities, its habits are his habits, its beliefs (are) his beliefs, its impossibilities (are) his impossibilities. Every child that is born into his group will share them with him, and no child born into one on the opposite side of the globecan ever achieve the thousandth part. There is no social problem (which) it is more incumbent upon us to understand than this (social problem) of the role of custom. Until we are intelligent as to its laws and varieties, the main complicating facts of human life must remain unintelligible.",
        "The study of custom can be profitable only after certain preliminary propositions have been accepted, and some of these propositions have been violently opposed. In the first place any scientific study requires that there be no preferential weighting of one or another of the items in the series [it selects for its consideration]. In all the less controversial fields like the study of cacti or termites or the nature of nebulae, the necessary method of study is to group the relevant material and to take note of all possible variant forms and conditions. In this way we have learned all that we know of the laws of astronomy, or of the habits of the social insects, let us say. It is only in the study of man himself that the major social sciences have substituted the study of one local variation, that of Western civilization.",
        "Anthropology was by definition impossible as long as these distinctions between ourselves and the primitive, ourselves and the barbarian, ourselves and the pagan, held sway over people's minds. It was necessary first to arrive at that degree,of sophistication where we no longer set our own belief over against our neighbour's superstition. It was necessary to recognize that these institutions which are based on the same premises, let us say the supernatural, must be considered together, our own (institutions) among the rest."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'commonplace', pos: 'adj.', meaning: '平凡的', phonetic: '/\'kɔmənpleis/' },
    { word: 'aberrant', pos: 'adj.', meaning: '脱离常轨的，异常的', phonetic: '/æ\'berənt/' },
    { word: 'trivial', pos: 'adj.', meaning: '微不足道的', phonetic: '/\'triviəl/' },
    { word: 'predominant', pos: 'adj.', meaning: '占优势的，起支配作用的', phonetic: '/pri\'dɔminənt/' },
    { word: 'manifest', pos: 'adj.', meaning: '明显的', phonetic: '/\'mænifest/' },
    { word: 'pristine', pos: 'adj.', meaning: '纯洁的，质朴的', phonetic: '/\'pristain/' },
    { word: 'stereotype', pos: 'n.', meaning: '陈规', phonetic: '/stiəriətaip/' },
    { word: 'vernacular', pos: 'n.', meaning: '方言', phonetic: '/və\'nækjulə/' },
    { word: 'accommodation', pos: 'n.', meaning: '适应', phonetic: '/ə,kɔmə\'deiʃən/' },
    { word: 'incumbent', pos: 'adj.', meaning: '义不容辞的，有责任的', phonetic: '/in\'kʌmbənt/' },
    { word: 'preliminary', pos: 'adj.', meaning: '初步的', phonetic: '/pri\'liminəri/' },
    { word: 'proposition', pos: 'n.', meaning: '主张', phonetic: '/\'prɔpə\'ziʃən/' },
    { word: 'preferential', pos: 'adj.', meaning: '优先的', phonetic: '/prefə\'renʃəl/' },
    { word: 'controversial', pos: 'adj.', meaning: '引起争论的', phonetic: '/\'kɔntrə\'və:ʃəl/' },
    { word: 'cactus', pos: 'n.', meaning: '仙人掌', phonetic: '/\'kæktəs/' },
    { word: 'termite', pos: 'n.', meaning: '白蚁', phonetic: '/\'tə:mait/' },
    { word: 'nebula', pos: 'n.', meaning: '星云', phonetic: '/\'nebjulə/' },
    { word: 'variant', pos: 'adj.', meaning: '不同的', phonetic: '/\'vєəriənt/' },
    { word: 'barbarian', pos: 'n.', meaning: '野蛮人', phonetic: '/ba:\'bєəriən/' },
    { word: 'pagan', pos: 'n.', meaning: '异教徒', phonetic: '/\'peigən/' },
    { word: 'sophistication', pos: 'n.', meaning: '老练', phonetic: '/sə\'fisti\'keiʃən/' },
    { word: 'premise', pos: 'n.', meaning: '前提', phonetic: '/\'premis, pri\'maiz/' },
    { word: 'supernatural', pos: 'adj.', meaning: '超自然的', phonetic: '/\'sju:pə\'nætʃərəl/' }
  ],
}
const articleNce4L46: Article = {
  original: {
    paragraphs: [
      "A gifted American psychologist has said, 'Worry is a spasm of the emotion; the mind catches hold of something and will not let it go.' It is useless to argue with the mind in this condition. The stronger the will, the more futile the task. One can only gently insinuate something else into its convulsive grasp. And if this something else is rightly chosen, if it is really attended by the illumination of another field of interest, gradually, and often quite swiftly, the old undue grip relaxes and the process of recuperation and repair begins.",
        "The cultivation of a hobby and new forms of interest is therefore [a policy of first importance] to a public man. But this is not a business that can be undertaken in a day or swiftly improvised by a mere command of the will. The growth of alternative mental interests is a long process. The seeds must be carefully chosen; they must fall on good ground; they must be sedulously tended, if the vivifying fruits are [to be at hand when needed].",
        "To be really happy and really safe, one ought to have at least two or three hobbies, and they must all be real. It is no use starting late in life to say: 'I will take an interest in this or that.' Such an attempt only aggravates the strain of mental effort. A man may acquire great knowledge of topics unconnected with his daily work, and yet hardly get any benefit or relief. It is no use doing what you like, you have got to like what you do. Broadly speaking, human beings may be divided into three classes: those who are toiled to death, those who are worried to death, and those who are bored to death. It is no use offering the manual labourer, tired out with a hard week's sweat and effort, the chance of playing a game of football or baseball on Saturday afternoon. It is no use inviting the politician or the professional or business man, who has been working or worrying about serious things for six days, to work or worry about trifling things at the weekend.",
        "As for the unfortunate people who can command everything they want, who can gratify every caprice and lay their hands on almost every object of desire—for them a new pleasure, a new excitement is only an additional satiation. In vain they rush frantically round from place to place, trying to escape from avenging boredom by mere clatter and motion. For them discipline in one form or another is the most hopeful path.",
        "It may also be said that rational, industrious, useful human beings are divided into two classes: first, those whose work is work and whose pleasure is pleasure; and secondly, those whose work and pleasure are one. Of these the former are the majority. They have their compensations. The long hours in the office or the factory bring with them as their reward, not only the means of sustenance, but a keen appetite for pleasure even in its simplest and most modest forms. But fortune's favoured children belong to the second class. Their life is a natural harmony. For them the working hours are never long enough. Each day is a holiday, and ordinary holidays when they come are grudged as enforced interruptions in an absorbing vocation. Yet to both classes the need of an alternative outlook, of a change of atmosphere, of a diversion of effort, is essential. Indeed, it may well be that [those whose work is their pleasure] are those who most need the means of banishing it at intervals from their minds."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'gifted', pos: 'adj.', meaning: '有天才的', phonetic: '/\'giftid/' },
    { word: 'psychologist', pos: 'n.', meaning: '心理学家', phonetic: '/sai\'kɔlədʒist/' },
    { word: 'spasm', pos: 'n.', meaning: '一阵(感情)发作', phonetic: '/\'spæzəm/' },
    { word: 'futile', pos: 'adj.', meaning: '无用的', phonetic: '/\'fju:tail/' },
    { word: 'insinuate', pos: 'v.', meaning: '使潜入，暗示', phonetic: '/in\'sinjueit/' },
    { word: 'convulsive', pos: 'adj.', meaning: '起痉挛的', phonetic: '/kən\'vʌlsiv/' },
    { word: 'illumination', pos: 'n.', meaning: '启发，照明', phonetic: '/i\'lju:mi\'neiʃən/' },
    { word: 'undue', pos: 'adj.', meaning: '不适当的', phonetic: '/\'ʌn\'dju:/' },
    { word: 'grip', pos: 'n.', meaning: '紧张', phonetic: '/grip/' },
    { word: 'recuperation', pos: 'n.', meaning: '休息', phonetic: '/ri\'kju:pə\'reiʃən/' },
    { word: 'improvise', pos: 'v.', meaning: '临时作成', phonetic: '/\'imprəvaiz/' },
    { word: 'sedulously', pos: 'adv.', meaning: '孜孜不倦地', phonetic: '//' },
    { word: 'vivify', pos: 'v.', meaning: '使生气勃勃', phonetic: '/\'vivifai/' },
    { word: 'aggravate', pos: 'v.', meaning: '加剧', phonetic: '/\'ægrəveit/' },
    { word: 'trifling', pos: 'adj.', meaning: '微小的', phonetic: '/\'traifliŋ/' },
    { word: 'gratify', pos: 'v.', meaning: '使满意', phonetic: '/\'grætifai/' },
    { word: 'caprice', pos: 'n.', meaning: '任性', phonetic: '/kə\'pri:s/' },
    { word: 'satiation', pos: 'n.', meaning: '满足', phonetic: '/\'seiʃi\'eiʃən/' },
    { word: 'frantically', pos: 'adv.', meaning: '狂乱地', phonetic: '/\'fræntikəli/' },
    { word: 'avenge', pos: 'v.', meaning: '替…报复', phonetic: '/ə\'vendʒ/' },
    { word: 'boredom', pos: 'n.', meaning: '厌烦', phonetic: '/\'bɔ:dəm/' },
    { word: 'clatter', pos: 'n.', meaning: '喧闹的谈话', phonetic: '/\'klætə/' },
    { word: 'sustenance', pos: 'n.', meaning: '支撑力', phonetic: '/\'sʌstənəns/' },
    { word: 'appetite', pos: 'n.', meaning: '欲望', phonetic: '/\'æpitait/' },
    { word: 'grudge', pos: 'v.', meaning: '怨恨', phonetic: '/grʌdʒ/' },
    { word: 'absorbing', pos: 'adj.', meaning: '引人入胜的', phonetic: '/əb\'sɔ:biŋ/' },
    { word: 'banish', pos: 'v.', meaning: '排除，放弃', phonetic: '/\'bæniʃ/' }
  ],
}
const articleNce4L48: Article = {
  original: {
    paragraphs: [
      "There is no shortage of tipsters around offering ‘get-rich-quick’ opportunities. But if you are a serious private investor, leave the Las Vegas mentality to those with money to fritter. The serious investor needs a proper ‘portfolio’ – a well-planned selection of investments, with a definite structure and a clear aim. But exactly how does a newcomer to the stock market go about achieving that?",
        "Well, if you go to five reputable stock brokers and ask them what you should do with your money, you’re likely to get five different answers, -- even if you give all the relevant information about your age, family, finances and what you want from your investments. Moral? There is no one ‘right’ way to structure a portfolio. However, there are undoubtedly some wrong ways, and you can be sure that none of our five advisers would have suggested sinking all (or perhaps any) of your money into Periwigs.",
        "So what should you do? We’ll assume that you have sorted out the basics – like mortgages, pensions, insurance and access to sufficient cash reserves. You should then establish your own individual aims. These are partly a matter of personal circumstances, partly a matter of psychology.",
        "For instance, if you are older you have less time to recover from any major losses, and you may well wish to boost your pension income. So preserving your capital and generating extra income are your main priorities. In this case, you’d probably construct a portfolio with some shares (but not high risk ones), along with gifts, cash deposits, and perhaps convertibles or the income shares of split capital investment trusts.",
        "If you are younger, and in a solid financial position, you may decide to take an aggressive approach – but only if you‘re blessed with a sanguine disposition and won’t suffer sleepless nights over share prices. If you recognize yourself in this description, you might include a couple of heady growth stocks in your portfolio, alongside your more pedestrian investments. Once you have decides on your investment aims, you can then decide where to put your money. The golden rule here is spread your risk – if you put all of your money into Periwigs International, you’re setting yourself up as a hostage to fortune."
    ],
    predicateParagraph: [
      [
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] },
        { predicates: [], clauseIntroducers: [] }
      ],
    ],
  },
  translation: {
    paragraphs: ['', ''],
  },
  vocabulary: [
    { word: 'portfolio', pos: 'n.', meaning: '投资组合', phonetic: '/pɔ:t\'fouljou/' },
    { word: 'tipster', pos: 'n.', meaning: '(提供证券投机等消息为生的)情报贩子', phonetic: '/\'tipstə/' },
    { word: 'Las Vegas', pos: 'n.', meaning: '拉斯韦加斯', phonetic: '//' },
    { word: 'fritter', pos: 'v.', meaning: '挥霍，浪费', phonetic: '/\'fritə/' },
    { word: 'reputable', pos: 'adj.', meaning: '享有声望的', phonetic: '/\'repjutəbl/' },
    { word: 'broker', pos: 'n.', meaning: '经纪人', phonetic: '/\'brəukə/' },
    { word: 'finance', pos: 'n.', meaning: '资金，财源', phonetic: '/fai\'næns, fi-/' },
    { word: 'mortgage', pos: 'n.', meaning: '抵押贷款', phonetic: '/\'mɔ:gidʒ/' },
    { word: 'pension', pos: 'n.', meaning: '养老金', phonetic: '/\'penʃən/' },
    { word: 'priority', pos: 'n.', meaning: '优先权', phonetic: '/prai\'ɔriti/' },
    { word: 'gilt', pos: 'n.', meaning: '金边证券(高度可靠的证券)', phonetic: '/gilt/' },
    { word: 'convertible', pos: 'n.', meaning: '可换证券', phonetic: '/kən\'və:təbl/' },
    { word: 'sanguine', pos: 'adj.', meaning: '乐观的', phonetic: '/\'sæŋgwin/' },
    { word: 'heady', pos: 'adj.', meaning: '令人陶醉的', phonetic: '/\'hedi/' },
    { word: 'alongside', pos: 'prep.', meaning: '在…旁边，和…一起', phonetic: '/ə\'lɔŋ\'said/' },
    { word: 'pedestrian', pos: 'adj.', meaning: '平淡无奇的，乏味的', phonetic: '/pi\'destriən/' }
  ],
}

const article: Article = {
  original: {
    paragraphs: [
      "People are always talking about 'the problem of youth'. If there is one—which I take leave to doubt—then it is older people who create it, not the young themselves. Let us get down to fundamentals and agree that the young are after all human beings—people just like their elders. There is only one difference between an old man and a young one: the young man has a glorious future before him and the old one has a splendid future behind him: and maybe that is where the rub is.",
      'When I was a teenager, I felt that I was just young and uncertain—that I was a new boy in a huge school, and I would have been very pleased to be regarded as something so interesting as a problem. For one thing, being a problem gives you a certain identity, and that is one of the things the young are busily engaged in seeking.',
      'I find young people exciting. They have an air of freedom, and they have not a dreary commitment to mean ambitions or love of comfort. They are not anxious social climbers, and they have no devotion to material things. All this seems to me to link them with life, and the origins of things. It\'s as if they were in some sense cosmic beings in violent and lovely contrast with us suburban creatures. All that is in my mind when I meet a young person. He may be conceited, ill-mannered, presumptuous or fatuous, but I do not turn for protection to dreary clichés about respect for elders—as if mere age were a reason for respect. I accept that we are equals, and I will argue with him, as an equal, if I think he is wrong.',
    ],
    predicateParagraph: [
      [
        { predicates: ['are talking'], clauseIntroducers: [] },
        { predicates: ['is', 'take', 'create'], clauseIntroducers: ['If', 'which', 'then'] },
        { predicates: ['get', 'agree', 'are'], clauseIntroducers: ['that'], notes: [{ phrase: 'get down to', note: '着手处理' }, { phrase: 'fundamentals', note: '基本原则' }] },
        { predicates: ['is', 'has', 'has', 'is'], clauseIntroducers: ['where'], notes: [{ phrase: 'glorious', note: '辉煌的' }, { phrase: 'splendid', note: '灿烂的' }, { phrase: 'the rub', note: '症结所在' }] },
      ],
      [
        { predicates: ['felt', 'was', 'was', 'would have been very pleased'], clauseIntroducers: ['When', 'that', 'that'], notes: [{ phrase: 'would have been very pleased', note: '过去一定会高兴' }] },
        { predicates: ['gives', 'are engaged'], clauseIntroducers: ['that'] },
      ],
      [
        { predicates: ['find'], clauseIntroducers: [] },
        { predicates: ['have', 'have'], clauseIntroducers: [], notes: [{ phrase: 'dreary', note: '沉闷的' }] },
        { predicates: ['are', 'have'], clauseIntroducers: [] },
        { predicates: ['seems'], clauseIntroducers: [] },
        { predicates: ['were'], clauseIntroducers: ['as if'], notes: [{ phrase: 'cosmic', note: '宇宙的' }, { phrase: 'suburban', note: '市郊的' }] },
        { predicates: ['is', 'meet'], clauseIntroducers: ['when'] },
        { predicates: ['may be', 'do turn'], clauseIntroducers: ['but'] },
        { predicates: ['accept', 'are', 'will argue', 'think', 'is'], clauseIntroducers: ['that', 'if'] },
      ],
    ],
  },
  translation: {
    paragraphs: [
      '人们总是在谈论「青年问题」。如果真有这个问题——我对此持怀疑态度——那也是年长者造成的，而不是年轻人自己。让我们回到基本点，承认年轻人毕竟也是人——和他们的长辈一样。老人和年轻人之间只有一个区别：年轻人有辉煌的未来在前方，而老人有灿烂的过去在身后：也许问题就在这里。',
      '当我还是个十几岁的少年时，我觉得自己只是年轻和不确定——我就像一所大学校里的新生，如果有人把我看作一个有趣的问题，我会非常高兴。毕竟，成为问题会给你一种身份认同，而这正是年轻人忙于追求的东西之一。',
      '我发现年轻人令人兴奋。他们有一种自由的气息，没有对平庸野心的沉闷承诺或对舒适的贪恋。他们不是焦虑的社交攀爬者，也不迷恋物质。这一切在我看来，将他们与生命和万物的起源联系在一起。他们仿佛在某种意义上是宇宙生灵，与我们这些市郊生物形成强烈而可爱的对比。当我遇见一个年轻人时，这一切都在我脑海中。他可能自负、无礼、冒昧或愚蠢，但我不会用那些关于尊敬长辈的陈词滥调来保护自己——仿佛年龄本身就是一个值得尊敬的理由。我接受我们是平等的，如果我认为他错了，我会以平等的身份与他争论。',
    ],
  },
  vocabulary: [
    { word: 'leave', pos: 'n.', meaning: '允许', phonetic: '/li:v/' },
    { word: 'fundamentals', pos: 'n.', meaning: '基本原则', phonetic: '//' },
    { word: 'glorious', pos: 'adj.', meaning: '光辉灿烂的', phonetic: '/\'glɔ:riəs/' },
    { word: 'splendid', pos: 'adj.', meaning: '灿烂的', phonetic: '/\'splendid/' },
    { word: 'rub', pos: 'n.', meaning: '难题', phonetic: '/rʌb/' },
    { word: 'identity', pos: 'n.', meaning: '身份', phonetic: '/ai\'dentiti/' },
    { word: 'dreary', pos: 'adj.', meaning: '沉郁的', phonetic: '/\'driəri/' },
    { word: 'commitment', pos: 'n.', meaning: '信奉', phonetic: '/kə\'mitmənt/' },
    { word: 'mean', pos: 'adj.', meaning: '吝啬，小气', phonetic: '/mi:n/' },
    { word: 'social climber', pos: 'n.', meaning: '追求更高社会地位的人，向上爬的人', phonetic: '//' },
    { word: 'devotion', pos: 'n.', meaning: '热爱', phonetic: '/di\'vəuʃən/' },
    { word: 'cosmic', pos: 'adj.', meaning: '宇宙的', phonetic: '/\'kɔzmik/' },
    { word: 'suburban', pos: 'adj.', meaning: '见识不广的，偏狭的', phonetic: '/sə\'bə:bən/' },
    { word: 'conceited', pos: 'adj.', meaning: '自高自大的', phonetic: '/kən\'si:tid/' },
    { word: 'presumptuous', pos: 'adj.', meaning: '自以为是的，放肆的', phonetic: '/pri\'zʌmptjuəs/' },
    { word: 'fatuous', pos: 'adj.', meaning: '愚蠢的', phonetic: '/\'fætjuəs/' },
    { word: 'cliché', pos: 'n.', meaning: '陈词滥调', phonetic: '/\'kli:ʃei/' }
  ],
}

export const articles: Record<string, Article> = {
  'nce2-l1': articleNce2L1,
  'nce2-l2': articleNce2L2,
  'nce2-l3': articleNce2L3,
  'nce2-l4': articleNce2L4,
  'nce2-l5': articleNce2L5,
  'nce2-l6': articleNce2L6,
  'nce2-l7': articleNce2L7,
  'nce2-l8': articleNce2L8,
  'nce2-l9': articleNce2L9,
  'nce2-l10': articleNce2L10,
  'nce2-l11': articleNce2L11,
  'nce2-l12': articleNce2L12,
  'nce2-l13': articleNce2L13,
  'nce2-l14': articleNce2L14,
  'nce2-l15': articleNce2L15,
  'nce2-l16': articleNce2L16,
  'nce2-l17': articleNce2L17,
  'nce2-l18': articleNce2L18,
  'nce2-l19': articleNce2L19,
  'nce2-l20': articleNce2L20,
  'nce2-l21': articleNce2L21,
  'nce2-l22': articleNce2L22,
  'nce2-l23': articleNce2L23,
  'nce2-l24': articleNce2L24,
  'nce2-l25': articleNce2L25,
  'nce2-l26': articleNce2L26,
  'nce2-l27': articleNce2L27,
  'nce2-l28': articleNce2L28,
  'nce2-l29': articleNce2L29,
  'nce2-l30': articleNce2L30,
  'nce2-l31': articleNce2L31,
  'nce2-l32': articleNce2L32,
  'nce2-l33': articleNce2L33,
  'nce2-l34': articleNce2L34,
  'nce2-l35': articleNce2L35,
  'nce2-l36': articleNce2L36,
  'nce2-l37': articleNce2L37,
  'nce2-l38': articleNce2L38,
  'nce2-l39': articleNce2L39,
  'nce2-l40': articleNce2L40,
  'nce2-l41': articleNce2L41,
  'nce2-l42': articleNce2L42,
  'nce2-l43': articleNce2L43,
  'nce2-l44': articleNce2L44,
  'nce2-l45': articleNce2L45,
  'nce2-l46': articleNce2L46,
  'nce2-l47': articleNce2L47,
  'nce2-l48': articleNce2L48,
  'nce2-l49': articleNce2L49,
  'nce2-l50': articleNce2L50,
  'nce2-l51': articleNce2L51,
  'nce2-l52': articleNce2L52,
  'nce2-l53': articleNce2L53,
  'nce2-l54': articleNce2L54,
  'nce2-l55': articleNce2L55,
  'nce2-l56': articleNce2L56,
  'nce2-l57': articleNce2L57,
  'nce2-l58': articleNce2L58,
  'nce2-l59': articleNce2L59,
  'nce2-l60': articleNce2L60,
  'nce2-l61': articleNce2L61,
  'nce2-l62': articleNce2L62,
  'nce2-l63': articleNce2L63,
  'nce2-l64': articleNce2L64,
  'nce2-l65': articleNce2L65,
  'nce2-l66': articleNce2L66,
  'nce2-l67': articleNce2L67,
  'nce2-l68': articleNce2L68,
  'nce2-l69': articleNce2L69,
  'nce2-l70': articleNce2L70,
  'nce2-l71': articleNce2L71,
  'nce2-l72': articleNce2L72,
  'nce2-l73': articleNce2L73,
  'nce2-l74': articleNce2L74,
  'nce2-l75': articleNce2L75,
  'nce2-l76': articleNce2L76,
  'nce2-l77': articleNce2L77,
  'nce2-l78': articleNce2L78,
  'nce2-l79': articleNce2L79,
  'nce2-l80': articleNce2L80,
  'nce2-l81': articleNce2L81,
  'nce2-l82': articleNce2L82,
  'nce2-l83': articleNce2L83,
  'nce2-l84': articleNce2L84,
  'nce2-l85': articleNce2L85,
  'nce2-l86': articleNce2L86,
  'nce2-l87': articleNce2L87,
  'nce2-l88': articleNce2L88,
  'nce2-l89': articleNce2L89,
  'nce2-l90': articleNce2L90,
  'nce2-l91': articleNce2L91,
  'nce2-l92': articleNce2L92,
  'nce2-l93': articleNce2L93,
  'nce2-l94': articleNce2L94,
  'nce2-l95': articleNce2L95,
  'nce2-l96': articleNce2L96,
  'nce3-l1': articleNce3L1,
  'nce3-l2': articleNce3L2,
  'nce3-l3': articleNce3L3,
  'nce3-l4': articleNce3L4,
  'nce3-l5': articleNce3L5,
  'nce3-l6': articleNce3L6,
  'nce3-l7': articleNce3L7,
  'nce3-l10': articleNce3L10,
  'nce3-l12': articleNce3L12,
  'nce3-l13': articleNce3L13,
  'nce3-l19': articleNce3L19,
  'nce3-l21': articleNce3L21,
  'nce3-l22': articleNce3L22,
  'nce3-l24': articleNce3L24,
  'nce3-l26': articleNce3L26,
  'nce3-l27': articleNce3L27,
  'nce3-l29': articleNce3L29,
  'nce3-l30': articleNce3L30,
  'nce3-l31': articleNce3L31,
  'nce3-l32': articleNce3L32,
  'nce3-l33': articleNce3L33,
  'nce3-l37': articleNce3L37,
  'nce3-l38': articleNce3L38,
  'nce3-l40': articleNce3L40,
  'nce3-l41': articleNce3L41,
  'nce3-l42': articleNce3L42,
  'nce3-l50': articleNce3L50,
  'nce3-l54': articleNce3L54,
  'nce3-l59': articleNce3L59,
  'nce3-l60': articleNce3L60,
  'nce4-l1': articleNce4L1,
  'nce4-l2': articleNce4L2,
  'nce4-l3': articleNce4L3,
  'nce4-l4': articleNce4L4,
  'nce4-l6': articleNce4L6,
  'nce4-l7': articleNce4L7,
  'nce4-l8': articleNce4L8,
  'nce4-l11': articleNce4L11,
  'nce4-l13': articleNce4L13,
  'nce4-l15': articleNce4L15,
  'nce4-l16': articleNce4L16,
  'nce4-l18': articleNce4L18,
  'nce4-l21': articleNce4L21,
  'nce4-l22': articleNce4L22,
  'nce4-l24': articleNce4L24,
  'nce4-l28': articleNce4L28,
  'nce4-l30': articleNce4L30,
  'nce4-l32': articleNce4L32,
  'nce4-l33': articleNce4L33,
  'nce4-l34': articleNce4L34,
  'nce4-l37': articleNce4L37,
  'nce4-l44': articleNce4L44,
  'nce4-l46': articleNce4L46,
  'nce4-l48': articleNce4L48,
  'problem-of-youth': article,
}
