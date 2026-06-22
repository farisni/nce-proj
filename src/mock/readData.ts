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
    { word: 'private', pos: 'a.', meaning: '私人的' },
    { word: 'theatre', pos: 'n.', meaning: '剧场，戏院' },
    { word: 'seat', pos: 'n.', meaning: '座位' },
    { word: 'play', pos: 'n.', meaning: '戏；v.玩,游戏' },
    { word: 'loudly', pos: 'ad.', meaning: '大声地' },
    { word: 'angry', pos: 'a.', meaning: '生气的' },
    { word: 'angrily', pos: 'ad.', meaning: '生气地' },
    { word: 'attention', pos: 'n.', meaning: '注意' },
    { word: 'bear', pos: 'v.', meaning: '容忍' },
    { word: 'business', pos: 'n.', meaning: '事；商业,生意' },
    { word: 'rudely', pos: 'ad.', meaning: '无礼地，粗鲁地' }
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
    { word: 'until', pos: 'prep.', meaning: '直到' },
    { word: 'outside', pos: 'ad.', meaning: '外面' },
    { word: 'ring', pos: 'v.', meaning: '(铃、电话等)响' },
    { word: 'aunt', pos: 'n.', meaning: '姑母，姨母' },
    { word: 'repeat', pos: 'v.', meaning: '/n.重复' },
    { word: 'postcard', pos: '', meaning: 'spoil' }
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
    { word: 'send', pos: 'v.', meaning: '寄，送' }
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
    { word: 'pigeon', pos: 'n.', meaning: '鸽子' },
    { word: 'message', pos: 'n.', meaning: '信息' }
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
    { word: 'beggar', pos: 'n.', meaning: '乞丐' },
    { word: 'detective', pos: 'n.', meaning: '侦探' },
    { word: 'expect', pos: 'v.', meaning: '期待，等待' },
    { word: 'stone', pos: 'n.', meaning: '石子' }
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
    { word: 'airport', pos: 'n.', meaning: '机场' },
    { word: 'valuable', pos: 'a.', meaning: '有价值的' },
    { word: 'parcel', pos: 'n.', meaning: '包裹' },
    { word: 'diamond', pos: 'n.', meaning: '钻石' },
    { word: 'steal', pos: 'v.', meaning: '偷窃' },
    { word: 'main', pos: 'a.', meaning: '主要的' },
    { word: 'airfield', pos: 'n.', meaning: '飞机起落的场地' },
    { word: 'guard', pos: 'n.', meaning: '警戒，守卫' },
    { word: 'precious', pos: 'a.', meaning: '珍贵的' },
    { word: 'sand', pos: 'n.', meaning: '沙子' }
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
    { word: 'competition', pos: 'n.', meaning: '比赛，竞赛' },
    { word: 'neat', pos: 'a.', meaning: '整齐的，整洁的' },
    { word: 'path', pos: 'n.', meaning: '小路，小径' },
    { word: 'wooden', pos: 'a.', meaning: '木头的' },
    { word: 'gather', pos: 'vt.', meaning: '聚集' },
    { word: 'refuse', pos: '', meaning: 'v./n.喊叫' }
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
    { word: 'jazz', pos: 'n.', meaning: '爵士音乐' },
    { word: 'musical', pos: 'a.', meaning: '音乐的' },
    { word: 'instrument', pos: 'n.', meaning: '乐器,器械' },
    { word: 'clavichord', pos: 'n.', meaning: '古钢琴' },
    { word: 'recently', pos: 'ad.', meaning: '最近' },
    { word: 'damage', pos: 'v.', meaning: '损坏' }
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
    { word: 'salary', pos: 'n.', meaning: '工资' },
    { word: 'immediately', pos: 'ad.', meaning: '立刻' }
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
    { word: 'luck', pos: 'n.', meaning: '运气，幸运' },
    { word: 'captain', pos: 'n.', meaning: '船长，首领' },
    { word: 'sail', pos: 'vi.', meaning: '航行' },
    { word: 'harbour', pos: 'n.', meaning: '港口' },
    { word: 'proud', pos: 'a.', meaning: '自豪的' },
    { word: 'important', pos: 'a.', meaning: '重要的' },
    { word: 'pop singer', pos: '', meaning: '流行歌手' },
    { word: 'performance', pos: 'n.', meaning: '演出' },
    { word: 'occasion', pos: 'n.', meaning: '场合' }
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
    { word: 'group', pos: 'n.', meaning: '小组，团体' },
    { word: 'club', pos: 'n.', meaning: '俱乐部' }
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
    { word: 'amusing', pos: 'a.', meaning: '好笑的，有趣的' },
    { word: 'experience', pos: 'n.', meaning: '经历' },
    { word: 'lift', pos: 'n.', meaning: '搭便车' },
    { word: 'reply', pos: 'vi.', meaning: '回答' },
    { word: 'language', pos: 'n.', meaning: '语言' },
    { word: 'journey', pos: '', meaning: 'secretary' }
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
    { word: 'weak', pos: 'a.', meaning: '弱的' },
    { word: 'interrupt', pos: 'v.', meaning: '插话，打断' }
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
    { word: 'reminder', pos: 'n.', meaning: '提示' }
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
    { word: 'pub', pos: 'n.', meaning: '小酒店' },
    { word: 'landlord', pos: 'n.', meaning: '店主' },
    { word: 'bill', pos: 'n.', meaning: '账单' },
    { word: 'hurry', pos: 'v.', meaning: '/n.匆忙' },
    { word: 'ticket office', pos: '', meaning: '售票处' },
    { word: 'sadly', pos: 'ad.', meaning: '悲哀地，丧气地' }
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
    { word: 'upset', pos: 'a.', meaning: '不安' },
    { word: 'sympathetic', pos: 'a.', meaning: '表示同情的' },
    { word: 'complain', pos: 'v.', meaning: '抱怨' },
    { word: 'wicked', pos: 'a.', meaning: '很坏的，邪恶的' },
    { word: 'contain', pos: 'v.', meaning: '包含，内装' },
    { word: 'honesty', pos: 'n.', meaning: '诚实' }
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
    { word: 'railway', pos: 'n.', meaning: '铁路' },
    { word: 'porter', pos: 'n.', meaning: '搬运工' },
    { word: 'several', pos: '', meaning: 'foreigner' }
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
    { word: 'pretend', pos: 'v.', meaning: '假装' },
    { word: 'pattern', pos: 'n.', meaning: '图案' },
    { word: 'curtain', pos: 'n.', meaning: '窗帘，幕布' },
    { word: 'material', pos: 'n.', meaning: '材料' },
    { word: 'appreciate', pos: 'v.', meaning: '鉴赏' },
    { word: 'notice', pos: 'v.', meaning: '注意到' },
    { word: 'whether', pos: 'conj.', meaning: '是否' },
    { word: 'hang', pos: 'v.', meaning: '悬挂，吊' },
    { word: 'critically', pos: 'ad.', meaning: '批评地' },
    { word: 'upside', pos: '', meaning: '上下颠倒地' }
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
    { word: 'rare', pos: 'a.', meaning: '罕见的' },
    { word: 'ancient', pos: 'a.', meaning: '古代的，古老的' },
    { word: 'myth', pos: 'n.', meaning: '神话故事' },
    { word: 'trouble', pos: 'n.', meaning: '麻烦' },
    { word: 'effect', pos: 'n.', meaning: '结果，效果' },
    { word: 'Medusa', pos: 'n.', meaning: '美杜莎(古希腊神话中3位蛇发女怪之一)' },
    { word: 'Gorgon', pos: 'n.', meaning: '(古希腊神话中的)3位蛇发女怪之一' },
    { word: 'Pilatus Porter', pos: '', meaning: '皮勒特斯·波特(飞机机名)' },
    { word: 'plough', pos: 'v.', meaning: '耕地' },
    { word: 'flat', pos: 'n.', meaning: '公寓房' },
    { word: 'desert', pos: 'v.', meaning: '废弃' }
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
    { word: 'taxi', pos: 'n.', meaning: '出租汽车' },
    { word: 'land', pos: 'v.', meaning: '着陆' },
    { word: 'lonely', pos: 'a.', meaning: '偏僻的，人迹罕至的' },
    { word: 'Welsh', pos: 'a.', meaning: '威尔士的' },
    { word: 'roof', pos: 'n.', meaning: '楼顶' },
    { word: 'block', pos: 'n.', meaning: '一座大楼' }
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
    { word: 'polo', pos: 'n.', meaning: '水球' },
    { word: 'Wayle', pos: 'n.', meaning: '威尔(河名)' },
    { word: 'cut', pos: 'v.', meaning: '穿过' },
    { word: 'row', pos: 'v.', meaning: '划(船)' },
    { word: 'kick', pos: 'v.', meaning: '踢' },
    { word: 'towards', pos: 'prep.', meaning: '朝，向' },
    { word: 'smoke', pos: 'n.', meaning: '烟' },
    { word: 'desolate', pos: 'a.', meaning: '荒凉的' },
    { word: 'threaten', pos: 'v.', meaning: '威胁' },
    { word: 'surrounding', pos: 'a.', meaning: '周围的' },
    { word: 'destruction', pos: 'n.', meaning: '破坏，毁灭' },
    { word: 'flood', pos: 'n.', meaning: '洪水，水灾' },
    { word: 'authority', pos: 'n.', meaning: '(常用复数)当局' },
    { word: 'grass-seed', pos: 'n.', meaning: '草籽' },
    { word: 'spray', pos: 'v.', meaning: '喷撒' },
    { word: 'quantity', pos: 'n.', meaning: '量' },
    { word: 'root', pos: 'n.', meaning: '根' },
    { word: 'century', pos: 'n.', meaning: '世纪' },
    { word: 'patch', pos: 'n.', meaning: '小片' },
    { word: 'blacken', pos: 'v.', meaning: '变黑，发暗' },
    { word: 'circle', pos: 'n.', meaning: '圈子' },
    { word: 'admire', pos: 'v.', meaning: '赞美，钦佩' },
    { word: 'close', pos: 'a.', meaning: '亲密的' },
    { word: 'wedding', pos: 'n.', meaning: '婚礼' },
    { word: 'reception', pos: 'n.', meaning: '招待会' },
    { word: 'sort', pos: 'n.', meaning: '种类' }
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
    { word: 'tunnel', pos: 'n.', meaning: '隧道' },
    { word: 'port', pos: '', meaning: 'ventilate' },
    { word: 'prep. 对', pos: '', meaning: 'Christmas' },
    { word: 'aux.v 应该', pos: '', meaning: 'weigh' }
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
    { word: 'Lancaster', pos: 'n.', meaning: '兰开斯特' },
    { word: 'bomber', pos: 'n.', meaning: '轰炸机' },
    { word: 'remote', pos: 'a.', meaning: '偏僻的' },
    { word: 'Pacific', pos: 'n.', meaning: '太平洋' },
    { word: 'wreck', pos: 'n.', meaning: '残骸' },
    { word: 'rediscover', pos: 'v.', meaning: '重新发现' },
    { word: 'aerial', pos: 'a.', meaning: '航空的' },
    { word: 'survey', pos: 'n.', meaning: '调查' },
    { word: 'rescue', pos: 'v.', meaning: '营救' },
    { word: 'package', pos: 'v.', meaning: '把…打包' },
    { word: 'enthusiast', pos: 'n.', meaning: '热心人' },
    { word: 'restore', pos: 'v.', meaning: '修复' },
    { word: 'imagine', pos: 'v.', meaning: '想像' },
    { word: 'packing', pos: '', meaning: '包装箱' },
    { word: 'colony', pos: 'n.', meaning: '群' },
    { word: 'bee', pos: 'n.', meaning: '蜜蜂' },
    { word: 'hive', pos: 'n.', meaning: '蜂房' },
    { word: 'preserve', pos: 'v.', meaning: '保护' },
    { word: 'beeswax', pos: 'n.', meaning: '蜂蜡' },
    { word: 'erupt', pos: 'v.', meaning: '(火山)喷发' },
    { word: 'manage', pos: 'v.', meaning: '设法' }
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
    { word: 'volcano', pos: 'n.', meaning: '火山' },
    { word: 'active', pos: 'a.', meaning: '活动的' },
    { word: 'Kivu', pos: 'n.', meaning: '基伍湖' },
    { word: 'Congo', pos: 'n.', meaning: '(the～)刚果' },
    { word: 'Kituro', pos: 'n.', meaning: '基图罗' },
    { word: 'violently', pos: 'ad.', meaning: '猛烈地，剧烈地' },
    { word: 'brilliant', pos: 'a.', meaning: '精彩的' },
    { word: 'liquid', pos: 'a.', meaning: '液态的' },
    { word: 'escape', pos: 'v.', meaning: '逃脱' },
    { word: 'alive', pos: 'a.', meaning: '活着的' }
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
    { word: 'persistent', pos: 'a.', meaning: '坚持的，固执的' },
    { word: 'avoid', pos: 'v.', meaning: '避开' },
    { word: 'insist', pos: 'v.', meaning: '坚持' },
    { word: 'murder', pos: 'n.', meaning: '谋杀' },
    { word: 'instruct', pos: 'v.', meaning: '命令，指示' }
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
    { word: 'acquire', pos: 'v.', meaning: '取得，获得' },
    { word: 'confidence', pos: 'n.', meaning: '信心' },
    { word: 'examiner', pos: 'n.', meaning: '主考人' },
    { word: 'suppose', pos: 'v.', meaning: '假设' },
    { word: 'tap', pos: 'v.', meaning: '轻敲' },
    { word: 'react', pos: 'v.', meaning: '反应' },
    { word: 'brake', pos: 'n.', meaning: '刹车' },
    { word: 'pedal', pos: 'n.', meaning: '踏板' },
    { word: 'mournful', pos: 'a.', meaning: '悲哀的' }
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
    { word: 'bullfight', pos: 'n.', meaning: '斗牛' },
    { word: 'drunk', pos: 'n.', meaning: '醉汉' },
    { word: 'wander', pos: 'v.', meaning: '溜达，乱走' },
    { word: 'unaware', pos: 'a.', meaning: '不知道的，无觉察的' },
    { word: 'bull', pos: 'n.', meaning: '公牛' },
    { word: 'matador', pos: 'n.', meaning: '斗牛士' },
    { word: 'apparently', pos: 'ad.', meaning: '明显地' },
    { word: 'sensitive', pos: 'a.', meaning: '敏感的' },
    { word: 'criticism', pos: 'n.', meaning: '批评' },
    { word: 'microphone', pos: 'n.', meaning: '扩音器，麦克风' }
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
    { word: 'tower', pos: 'n.', meaning: '塔' }
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
    { word: 'racing', pos: 'n.', meaning: '竞赛' },
    { word: 'per', pos: 'prep.', meaning: '每' },
    { word: 'Utah', pos: 'n.', meaning: '犹他(美国州名)' },
    { word: 'horsepower', pos: 'n.', meaning: '马力' },
    { word: 'burst', pos: 'v.', meaning: '爆裂' },
    { word: 'average', pos: 'a.', meaning: '平均的' },
    { word: 'footstep', pos: 'n.', meaning: '足迹，脚步声' },
    { word: 'record-holder', pos: '', meaning: '纪录保持者' },
    { word: 'hitchhike', pos: 'v.', meaning: '搭便车旅行' },
    { word: 'evade', pos: 'v.', meaning: '逃避，逃离' }
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
    { word: 'truant', pos: 'n.', meaning: '逃学的孩子' },
    { word: 'unimaginative', pos: 'a.', meaning: '缺乏想象力的' },
    { word: 'shame', pos: 'n.', meaning: '惭愧，羞耻' },
    { word: 'meantime', pos: 'n.', meaning: '期间' },
    { word: 'lorry', pos: 'n.', meaning: '卡车' },
    { word: 'border', pos: 'n.', meaning: '边界' }
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
    { word: 'limelight', pos: 'n.', meaning: '舞台灯光' },
    { word: 'precaution', pos: 'n.', meaning: '预防措施' },
    { word: 'fan', pos: 'n.', meaning: '狂热者，迷' },
    { word: 'shady', pos: 'a.', meaning: '遮荫的' },
    { word: 'sheriff', pos: 'n.', meaning: '司法长官' },
    { word: 'sneer', pos: 'n.', meaning: '冷笑' },
    { word: 'stamp', pos: 'v.', meaning: '跺，踩' },
    { word: 'survivor', pos: 'n.', meaning: '幸存者' }
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
    { word: 'thick', pos: 'a.', meaning: '厚的' },
    { word: 'signal', pos: 'n.', meaning: '信号' },
    { word: 'helicopter', pos: 'n.', meaning: '直升飞机' },
    { word: 'scene', pos: 'n.', meaning: '现场' }
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
    { word: 'fool', pos: 'n.', meaning: '傻瓜' },
    { word: 'bulletin', pos: 'n.', meaning: '新闻简报' },
    { word: 'announcer', pos: 'n.', meaning: '(电视、电台)播音员' },
    { word: 'macaroni', pos: 'n.', meaning: '通心面，空心面条' },
    { word: 'leading', pos: '', meaning: 'grower' },
    { word: 'stalk', pos: 'n.', meaning: '梗' },
    { word: 'thresh', pos: 'v.', meaning: '打(庄稼)' },
    { word: 'process', pos: 'v.', meaning: '加工' },
    { word: 'Signor', pos: 'n.', meaning: '(意大利语)先生' },
    { word: 'champion', pos: 'n.', meaning: '冠军' },
    { word: 'studio', pos: 'n.', meaning: '播音室' },
    { word: 'prove', pos: 'v.', meaning: '证明' },
    { word: 'figure', pos: 'n.', meaning: '(人的)体形；人像' },
    { word: 'survive', pos: 'v.', meaning: '幸免于' }
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
    { word: 'mummy', pos: 'n.', meaning: '木乃伊' },
    { word: 'Egyptian', pos: 'a.', meaning: '埃及的' },
    { word: 'temple', pos: 'n.', meaning: '庙' },
    { word: 'resin', pos: 'n.', meaning: '树脂' },
    { word: 'skin', pos: 'n.', meaning: '皮，皮肤' },
    { word: 'section', pos: 'n.', meaning: '切片' },
    { word: 'normally', pos: 'ad.', meaning: '通常地' }
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
    { word: 'entitle', pos: 'v.', meaning: '以…为名' },
    { word: 'calm', pos: 'v.', meaning: '使镇定' },
    { word: 'nerve', pos: 'n.', meaning: '神经' },
    { word: 'concentration', pos: 'n.', meaning: '集中，专心' },
    { word: 'suffer', pos: 'v.', meaning: '受苦，受害' },
    { word: 'symptom', pos: 'n.', meaning: '症状' },
    { word: 'temper', pos: 'n.', meaning: '脾气' },
    { word: 'appetite', pos: 'n.', meaning: '胃口，食欲' },
    { word: 'produce', pos: 'v.', meaning: '拿出' },
    { word: 'urge', pos: 'v.', meaning: '力劝，怂恿' },
    { word: 'satisfaction', pos: 'n.', meaning: '满意，满足' },
    { word: 'delighted', pos: 'a.', meaning: '欣喜的' },
    { word: 'parent', pos: 'n.', meaning: '父(母)亲' },
    { word: 'flight attendant', pos: '', meaning: '空中乘务员' }
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
    { word: 'frightened', pos: 'a.', meaning: '害怕，担惊' },
    { word: 'curious', pos: 'a.', meaning: '急于了解，好奇的' },
    { word: 'bomb', pos: 'n.', meaning: '炸弹' }
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
    { word: 'palace', pos: 'n.', meaning: '宫殿' },
    { word: 'extraordinary', pos: 'a.', meaning: '不平常的，非凡的' },
    { word: 'exhibition', pos: 'n.', meaning: '展览' },
    { word: 'iron', pos: 'n.', meaning: '铁' },
    { word: 'various', pos: 'a.', meaning: '各种各样的' },
    { word: 'machinery', pos: 'n.', meaning: '机器' },
    { word: 'display', pos: '', meaning: 'steam' }
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
    { word: 'monster', pos: 'n.', meaning: '怪物' },
    { word: 'sailor', pos: 'n.', meaning: '海员' },
    { word: 'creature', pos: 'n.', meaning: '动物，生物' },
    { word: 'peculiar', pos: 'a.', meaning: '奇怪的，不寻常的' },
    { word: 'shining', pos: 'a.', meaning: '闪闪发光的' },
    { word: 'oarfish', pos: 'n.', meaning: '桨鱼' },
    { word: 'election', pos: 'n.', meaning: '选举' },
    { word: 'ex- prefix.', pos: '', meaning: '(前缀，用于名词前)前…' }
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
    { word: 'former', pos: 'a.', meaning: '从前的' },
    { word: 'defeat', pos: 'v.', meaning: '打败' },
    { word: 'fanatical', pos: 'a.', meaning: '狂热的' },
    { word: 'opponent', pos: 'n.', meaning: '反对者，对手' },
    { word: 'radical', pos: 'a.', meaning: '激进的' },
    { word: 'progressive', pos: 'a.', meaning: '进步的' },
    { word: 'suspicious', pos: 'a.', meaning: '怀疑的' }
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
    { word: 'strike', pos: 'vt.', meaning: '报时' },
    { word: 'busman', pos: 'n.', meaning: '公共汽车司机' },
    { word: 'state', pos: 'v.', meaning: '正式提出，宣布' },
    { word: 'agreement', pos: 'n.', meaning: '协议' },
    { word: 'relieve', pos: 'v.', meaning: '减轻' },
    { word: 'pressure', pos: 'n.', meaning: '压力，麻烦' },
    { word: 'extent', pos: 'n.', meaning: '程度' },
    { word: 'volunteer', pos: 'v.', meaning: '自动提出，自愿' },
    { word: 'gratitude', pos: 'n.', meaning: '感激' },
    { word: 'Press', pos: 'n.', meaning: '新闻界' },
    { word: 'object', pos: 'v.', meaning: '不赞成，反对' },
    { word: 'inform', pos: 'v.', meaning: '告诉，通知' },
    { word: 'headmaster', pos: 'n.', meaning: '校长' },
    { word: 'contribute', pos: 'v.', meaning: '捐助，援助' }
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
    { word: 'gift', pos: 'n.', meaning: '礼物，赠品' },
    { word: 'album', pos: 'n.', meaning: '签名簿，相册' },
    { word: 'patience', pos: 'n.', meaning: '耐心' },
    { word: 'encouragement', pos: 'n.', meaning: '鼓励' },
    { word: 'farewell', pos: 'n.', meaning: '告别' },
    { word: 'honour', pos: 'n.', meaning: '敬意, 荣幸' },
    { word: 'coincidence', pos: 'n.', meaning: '巧合' },
    { word: 'total', pos: 'n.', meaning: '总数' },
    { word: 'devote', pos: 'v.', meaning: '致力于' },
    { word: 'gardening', pos: 'n.', meaning: '园艺' },
    { word: 'hobby', pos: 'n.', meaning: '爱好，嗜好' }
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
    { word: 'swing', pos: 'v.', meaning: '转向' },
    { word: 'speedboat', pos: 'n.', meaning: '快艇' },
    { word: 'desperately', pos: 'ad.', meaning: '绝望地' },
    { word: 'companion', pos: 'n.', meaning: '同伙，同伴' },
    { word: 'water ski', pos: '', meaning: '(由快艇牵引水橇)滑水' },
    { word: 'buoy', pos: 'n.', meaning: '浮标' },
    { word: 'tremendous', pos: '', meaning: 'petrol' }
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
    { word: 'trap', pos: 'v.', meaning: '陷入，使陷于困境' },
    { word: 'surface', pos: 'n.', meaning: '地面，表面' },
    { word: 'explosive', pos: 'n.', meaning: '炸药' },
    { word: 'vibration', pos: 'n.', meaning: '震动' },
    { word: 'dye', pos: 'v.', meaning: '染' },
    { word: 'suspension', pos: 'n.', meaning: '悬，吊' },
    { word: 'agreeable', pos: '', meaning: 'situation' },
    { word: 'eminent', pos: 'a.', meaning: '著名的，杰出的' },
    { word: 'lines', pos: 'n.', meaning: '(剧本中的)台词' },
    { word: 'part', pos: 'n.', meaning: '剧中的角色，台词' },
    { word: 'falter', pos: 'v.', meaning: '支吾，结巴说' },
    { word: 'cast', pos: 'v.', meaning: '选派……扮演角色' },
    { word: 'role', pos: 'n.', meaning: '角色' },
    { word: 'aristocrat', pos: 'n.', meaning: '贵族' },
    { word: 'imprison', pos: 'v.', meaning: '关押' },
    { word: 'Bastille', pos: 'n.', meaning: '巴士底狱' },
    { word: 'gaoler', pos: 'n.', meaning: '监狱长，看守' },
    { word: 'colleague', pos: 'n.', meaning: '同事' },
    { word: 'fry', pos: 'v.', meaning: '油炸' },
    { word: 'fat', pos: 'n.', meaning: '(动物、植物)油' },
    { word: 'abuse', pos: 'n.', meaning: '辱骂，责骂' },
    { word: 'snail', pos: 'n.', meaning: '蜗牛' },
    { word: 'luxury', pos: 'n.', meaning: '奢侈品，珍品' },
    { word: 'associate', pos: 'v.', meaning: '联想到' },
    { word: 'despise', pos: 'v.', meaning: '鄙视' },
    { word: 'appeal', pos: 'v.', meaning: '引起兴致' },
    { word: 'stroll', pos: 'n.', meaning: '溜达，散步' },
    { word: 'impulse', pos: 'n.', meaning: '冲动' },
    { word: 'dozen', pos: 'n.', meaning: '12个，一打' },
    { word: 'fancy', pos: 'v.', meaning: '喜爱，喜欢' },
    { word: 'skeleton', pos: 'n.', meaning: '骷髅' },
    { word: 'seemingly', pos: 'ad.', meaning: '表面上地' },
    { word: 'respectable', pos: 'a.', meaning: '体面的，雅观的' },
    { word: 'conceal', pos: 'v.', meaning: '隐藏，隐瞒' },
    { word: 'vivid', pos: 'a.', meaning: '生动的' },
    { word: 'dramatic', pos: 'a.', meaning: '令人激动的，扣人心弦的' },
    { word: 'ruin', pos: 'v.', meaning: '毁坏' },
    { word: 'heroine', pos: 'n.', meaning: '女主人公' },
    { word: 'fiction', pos: 'n.', meaning: '小说' },
    { word: 'varying', pos: 'n.', meaning: '医学' },
    { word: 'guestroom', pos: 'n.', meaning: '(家庭中的)客房' },
    { word: 'unpack', pos: 'vt.', meaning: '(从箱中)取出' },
    { word: 'stack', pos: 'v.', meaning: '(整齐地)堆放，排放；n.堆' },
    { word: 'underclothes', pos: 'n.', meaning: '内衣' },
    { word: 'drawer', pos: 'n.', meaning: '抽屉' },
    { word: 'petrify', pos: 'v.', meaning: '使惊呆' },
    { word: 'dangle', pos: '', meaning: 'sway' },
    { word: 'influence', pos: '', meaning: 'v./n.耽误' },
    { word: 'classify', pos: 'v.', meaning: '分类' },
    { word: 'magic', pos: 'a.', meaning: '有奇妙作用的' },
    { word: 'sample', pos: 'n.', meaning: '样品' },
    { word: 'devise', pos: 'v.', meaning: '设计，想出' },
    { word: 'capture', pos: 'v.', meaning: '吸引，赢得' },
    { word: 'manufacturer', pos: 'n.', meaning: '生产厂家，制造商' },
    { word: 'wheelbarrow', pos: 'n.', meaning: '独轮手推车' },
    { word: 'spiritual', pos: 'a.', meaning: '精神上的' },
    { word: 'grudge', pos: 'v.', meaning: '不愿给，舍不得给' },
    { word: 'surgeon', pos: 'n.', meaning: '外科大夫' },
    { word: 'passer-by', pos: 'n.', meaning: '过路人(复数passers-by)' },
    { word: 'dignity', pos: 'n.', meaning: '尊严' },
    { word: 'deliberately', pos: 'ad.', meaning: '故意地' },
    { word: 'consequence', pos: 'n.', meaning: '后果，结果' },
    { word: 'afflict', pos: 'v.', meaning: '使苦恼，折磨' },
    { word: 'ease', pos: 'n.', meaning: '容易' },
    { word: 'nature', pos: 'n.', meaning: '大自然' },
    { word: 'contempt', pos: 'n.', meaning: '蔑视' },
    { word: 'envious', pos: 'a.', meaning: '嫉妒的' },
    { word: 'wares', pos: 'n.', meaning: '货物，商品' },
    { word: 'deck', pos: 'n.', meaning: '甲板' },
    { word: 'silverware', pos: 'n.', meaning: '银器' },
    { word: 'tempt', pos: 'v.', meaning: '吸引；引诱' },
    { word: 'bargain', pos: 'v.', meaning: '讨价还价; n.便宜货' },
    { word: 'disembark', pos: 'v.', meaning: '下船上岸' },
    { word: 'assail', pos: 'v.', meaning: '纠缠' },
    { word: 'marble', pos: 'n.', meaning: '小玻璃球' },
    { word: 'inscribe', pos: 'v.', meaning: '刻写，雕' },
    { word: 'favour', pos: 'n.', meaning: '好处，优惠' },
    { word: 'gesticulate', pos: 'v.', meaning: '(讲话时)打手势' },
    { word: 'outrageous', pos: 'a.', meaning: '出人预料的；令人不悦的' },
    { word: 'thrust', pos: 'v.', meaning: '硬塞给；强行挤进' },
    { word: 'largely', pos: 'ad.', meaning: '在很大程度上' },
    { word: 'comic', pos: 'a.', meaning: '喜剧的，可笑的' },
    { word: 'universal', pos: 'a.', meaning: '普遍的' },
    { word: 'comedian', pos: 'n.', meaning: '滑稽演员，喜剧演员' },
    { word: 'distasteful', pos: 'a.', meaning: '讨厌的' },
    { word: 'pester', pos: 'v.', meaning: '一再要求，纠缠' },
    { word: 'dread', pos: 'v.', meaning: '惧怕' },
    { word: 'recovery', pos: 'n.', meaning: '康复' },
    { word: 'plaster', pos: 'n.', meaning: '熟石膏' },
    { word: 'console', pos: 'v.', meaning: '安慰，慰问' },
    { word: 'hobble', pos: 'v.', meaning: '瘸着腿走' },
    { word: 'compensate', pos: 'v.', meaning: '补偿' },
    { word: 'mumble', pos: 'v.', meaning: '喃喃而语' },
    { word: 'labourer', pos: 'n.', meaning: '劳动者(也做laborer)' },
    { word: 'overnight', pos: 'ad.', meaning: '一夜期间' },
    { word: 'hay', pos: 'n.', meaning: '干草' },
    { word: 'corn', pos: 'n.', meaning: '谷物' },
    { word: 'moonlight', pos: 'n.', meaning: '月光' },
    { word: 'conscientious', pos: 'a.', meaning: '认真的' },
    { word: 'suspect', pos: 'v.', meaning: '怀疑' },
    { word: 'regiment', pos: 'n.', meaning: '(军队)团' },
    { word: 'action', pos: 'n.', meaning: '战斗' },
    { word: 'recluse', pos: 'n.', meaning: '隐士' },
    { word: 'lovable', pos: 'a.', meaning: '可爱的' },
    { word: 'eccentric', pos: 'n.', meaning: '(行为)古怪的人' },
    { word: 'disregard', pos: 'v.', meaning: '不顾，无视' },
    { word: 'convention', pos: 'n.', meaning: '习俗，风俗' },
    { word: 'conscious', pos: 'a.', meaning: '感觉到的，意识到的' },
    { word: 'invariably', pos: 'ad.', meaning: '总是，经常地' },
    { word: 'routine', pos: 'n.', meaning: '常规；惯例; a.常规的' },
    { word: 'shrewd', pos: 'a.', meaning: '精明的' },
    { word: 'eccentricity', pos: 'n.', meaning: '怪癖' },
    { word: 'legendary', pos: 'a.', meaning: '传奇般的' },
    { word: 'snob', pos: 'n.', meaning: '势利小人，谄上欺下的人' },
    { word: 'intensely', pos: 'ad.', meaning: '强烈地' },
    { word: 'bedraggled', pos: 'a.', meaning: '拖泥带水的；又脏又湿的' },
    { word: 'dump', pos: 'v.', meaning: '把……砰的一声抛下' },
    { word: 'apologetic', pos: 'a.', meaning: '道歉的' },
    { word: 'chest', pos: 'n.', meaning: '大箱子' },
    { word: 'log book', pos: '', meaning: '航海日志' },
    { word: 'torpedo', pos: '', meaning: 'v./n.护航' },
    { word: 'dedicated', pos: 'a.', meaning: '专心致志的；全身心投入的' },
    { word: 'bargain hunter', pos: 'n.', meaning: '到处找便宜货买的人' },
    { word: 'dealer', pos: 'v.', meaning: '商人' },
    { word: 'cherish', pos: 'v.', meaning: '期望，渴望；珍爱' },
    { word: 'amply', pos: 'ad.', meaning: '足够地' },
    { word: 'masterpiece', pos: 'n.', meaning: '杰作' },
    { word: 'mere', pos: 'a.', meaning: '仅仅的' },
    { word: 'miniature', pos: 'a.', meaning: '小巧的，小型的' },
    { word: 'composition', pos: 'n.', meaning: '构图' },
    { word: 'justice', pos: 'n.', meaning: '正义，公正；司法' },
    { word: 'court', pos: 'n.', meaning: '法院' },
    { word: 'law', pos: 'n.', meaning: '法律' },
    { word: 'innocence', pos: 'n.', meaning: '无辜' },
    { word: 'undertake', pos: 'v.', meaning: '承担，着手做' },
    { word: 'arduous', pos: 'a.', meaning: '艰苦的，艰难的' },
    { word: 'abstract', pos: 'a.', meaning: '抽象的' },
    { word: 'concept', pos: 'n.', meaning: '概念，观念' },
    { word: 'mete', pos: '', meaning: '给予，处置' },
    { word: 'interference', pos: 'n.', meaning: '干涉' },
    { word: 'accord', pos: 'v.', meaning: '/n.一致' },
    { word: 'premises', pos: 'n.', meaning: '房屋' },
    { word: 'convert', pos: 'v.', meaning: '转变，改变' },
    { word: 'disused', pos: 'a.', meaning: '不再用的，废弃的' },
    { word: 'fireplace', pos: 'n.', meaning: '壁炉' },
    { word: 'muffle', pos: 'v.', meaning: '捂住，压抑' },
    { word: 'emerge', pos: 'v.', meaning: '(从某处)出现' },
    { word: 'credulous', pos: 'a.', meaning: '轻信的' },
    { word: 'improbable', pos: 'a.', meaning: '不大可能的' },
    { word: 'obscure', pos: 'a.', meaning: '不起眼的；v.遮掩，模糊' },
    { word: 'maidservant', pos: 'n.', meaning: '女仆，女佣' },
    { word: 'presume', pos: 'v.', meaning: '假定' },
    { word: 'wickedly', pos: 'ad.', meaning: '心眼坏地，居心叵测地' },
    { word: 'plot', pos: 'v.', meaning: '密谋' },
    { word: 'downfall', pos: 'n.', meaning: '倒台，垮台' },
    { word: 'naive', pos: 'a.', meaning: '天真的' },
    { word: 'unacceptable', pos: 'a.', meaning: '不能接受的' },
    { word: 'conspire', pos: 'v.', meaning: '(事件)巧合促成' },
    { word: 'incredible', pos: 'a.', meaning: '难以置信的' },
    { word: 'resemblance', pos: 'n.', meaning: '相似' },
    { word: 'scorn', pos: 'n.', meaning: '嘲弄，挖苦' },
    { word: 'acquaint', pos: 'v.', meaning: '使了解' },
    { word: 'reunite', pos: 'v.', meaning: '使团聚' },
    { word: 'assume', pos: 'v.', meaning: '假定，认为' },
    { word: 'express', pos: 'n.', meaning: '快车 a.高速的' },
    { word: 'punctual', pos: 'a.', meaning: '准时的' },
    { word: 'condition', pos: 'v.', meaning: '使习惯于' },
    { word: 'unshakable', pos: 'a.', meaning: '不可动摇的' },
    { word: 'faith', pos: 'n.', meaning: '信任' },
    { word: 'cancel', pos: 'v.', meaning: '取消' },
    { word: 'exceptionally', pos: 'ad.', meaning: '例外地' },
    { word: 'dislocate', pos: 'v.', meaning: '打乱(计划等)' },
    { word: 'blame', pos: 'v.', meaning: '责怪' },
    { word: 'consult', pos: 'v.', meaning: '请教，查阅' },
    { word: 'direct', pos: 'ad.', meaning: '径直地' },
    { word: 'odd', pos: 'a.', meaning: '奇怪的，异常的' },
    { word: 'reflect', pos: 'v.', meaning: '细想' },
    { word: 'advantage', pos: 'n.', meaning: '优势' },
    { word: 'mighty', pos: 'a.', meaning: '强大的，有力的' },
    { word: 'dawdle', pos: 'v.', meaning: '慢吞吞地动或做' },
    { word: 'chug', pos: 'v.', meaning: '咔嚓咔嚓地响' },
    { word: 'lodge', pos: 'v.', meaning: '提出；n.小屋，(旅游区的)小旅馆' },
    { word: 'complaint', pos: 'n.', meaning: '抱怨' },
    { word: 'triumph', pos: 'n.', meaning: '胜利; v.战胜' },
    { word: 'asterisk', pos: 'n.', meaning: '星号(' },
    { word: 'conduct', pos: 'v.', meaning: '引向，引导' },
    { word: 'calendar', pos: 'n.', meaning: '历法，日历' },
    { word: 'historian', pos: 'n.', meaning: '历史学家' },
    { word: 'unique', pos: 'a.', meaning: '无与伦比的；独特的' },
    { word: 'steadily', pos: '', meaning: 'solely' },
    { word: 'advent', pos: 'n.', meaning: '出现，到来，来临' },
    { word: 'agriculture', pos: 'n.', meaning: '农业' },
    { word: 'assumption', pos: 'n.', meaning: '假定，设想' },
    { word: 'dot', pos: 'n.', meaning: '小圆点' },
    { word: 'symbol', pos: 'n.', meaning: '符号' },
    { word: 'engrave', pos: 'v.', meaning: '雕刻' },
    { word: 'ivory', pos: 'n.', meaning: '象牙制品' },
    { word: 'phase', pos: 'n.', meaning: '月相，天相' },
    { word: 'primitive', pos: 'a.', meaning: '原始的' },
    { word: 'depict', pos: 'v.', meaning: '描画，描绘' },
    { word: 'rough', pos: 'a.', meaning: '崎岖不平的' },
    { word: 'boulder', pos: 'n.', meaning: '大石块' },
    { word: 'pit', pos: 'v.', meaning: '使得坑坑洼洼' },
    { word: 'perturb', pos: 'v.', meaning: '使不安' },
    { word: 'underestimate', pos: 'v.', meaning: '低估' },
    { word: 'swerve', pos: 'v.', meaning: '急转弯' },
    { word: 'scoop', pos: 'v.', meaning: '挖出' },
    { word: 'silly', pos: 'a.', meaning: '无意义的，无聊的' },
    { word: 'advance', pos: 'a.', meaning: '预先的，事先获得的' },
    { word: 'archway', pos: 'n.', meaning: '拱形门楼' },
    { word: 'remonstrate', pos: 'v.', meaning: '规劝，告诫' },
    { word: 'ironically', pos: '', meaning: 'permission' },
    { word: 'pasture', pos: 'n.', meaning: '牧场' },
    { word: 'idyllic', pos: 'a.', meaning: '田园诗的' },
    { word: 'virtually', pos: 'ad.', meaning: '几乎，差不多' },
    { word: 'dubious', pos: 'a.', meaning: '可疑的，怀疑的' },
    { word: 'misery', pos: 'n.', meaning: '苦难' },
    { word: 'acquaintance', pos: 'n.', meaning: '熟人' },
    { word: 'treat', pos: 'n.', meaning: '难得的乐事，享受' },
    { word: 'dweller', pos: 'n.', meaning: '居住者' },
    { word: 'stagger', pos: 'v.', meaning: '摇晃，蹒跚' },
    { word: 'exotic', pos: 'a.', meaning: '异乎寻常的，外来的' },
    { word: 'glow', pos: 'n.', meaning: '白炽光' },
    { word: 'descend', pos: 'v.', meaning: '下落，降临' },
    { word: 'tuck', pos: 'v.', meaning: '缩进，隐藏' },
    { word: 'obstinately', pos: 'ad.', meaning: '固执地，顽固地' },
    { word: 'caveman', pos: 'n.', meaning: '(远古)洞穴人' },
    { word: 'pot-holing', pos: 'n.', meaning: '洞穴探险，洞穴探险运动' },
    { word: 'solitude', pos: 'n.', meaning: '孤独，寂寞' },
    { word: 'lure', pos: 'v.', meaning: '引诱，诱惑' },
    { word: 'pot-holer', pos: 'n.', meaning: '洞穴探险者' },
    { word: 'rambler', pos: 'n.', meaning: '漫步者，散步者' },
    { word: 'undertaking', pos: 'n.', meaning: '任务，工作' },
    { word: 'foresight', pos: 'n.', meaning: '预见；深谋远虑' },
    { word: 'foretell', pos: 'v.', meaning: '预言' },
    { word: 'Grenoble', pos: 'n.', meaning: '格里诺布尔' },
    { word: 'chasm', pos: 'n.', meaning: '断层，裂口，陷坑' },
    { word: 'flaw', pos: 'n.', meaning: '小裂缝；缺点，瑕疵' },
    { word: 'distinguished', pos: 'a.', meaning: '杰出的，著名的' },
    { word: 'Everest', pos: 'n.', meaning: '珠穆朗玛峰' },
    { word: 'wade', pos: 'v.', meaning: '涉水' },
    { word: 'waterfall', pos: 'n.', meaning: '瀑布' },
    { word: 'inflatable', pos: 'a.', meaning: '可充气的' },
    { word: 'rubble', pos: 'n.', meaning: '碎瓦，瓦块' },
    { word: 'insistent', pos: 'a.', meaning: '连续的，不断的' },
    { word: 'boom', pos: 'v.', meaning: '轰响' },
    { word: 'waterspout', pos: 'n.', meaning: '强大的水柱' },
    { word: 'cleft', pos: 'n.', meaning: '裂隙，开口' },
    { word: 'cavern', pos: 'n.', meaning: '大洞穴' },
    { word: 'stalagmite', pos: 'n.', meaning: '石笋' },
    { word: 'stalactite', pos: 'n.', meaning: '钟乳石' },
    { word: 'limestone', pos: 'n.', meaning: '石灰石' },
    { word: 'glisten', pos: '', meaning: 'eerie' },
    { word: 'annual', pos: 'a.', meaning: '一年一度的' },
    { word: 'teenager', pos: 'n.', meaning: '(13岁至19岁的)青少年' },
    { word: 'capsize', pos: 'v.', meaning: '(船)翻' },
    { word: 'shiver', pos: 'v.', meaning: '打颤，发抖' },
    { word: 'dive', pos: 'v.', meaning: '(头向下)跳水' },
    { word: 'haul', pos: 'v.', meaning: '拖曳' },
    { word: 'hawser', pos: 'n.', meaning: '粗缆绳' },
    { word: 'rim', pos: 'n.', meaning: '(圆形物品的)外沿，边' },
    { word: 'winch', pos: 'n.', meaning: '绞车(带有绞盘的车)' },
    { word: 'premium', pos: 'n.', meaning: '保险费' },
    { word: 'recover', pos: 'v.', meaning: '使……得到补偿，弥补' },
    { word: 'agonizing', pos: 'a.', meaning: '精神紧张的，提心吊胆的' },
    { word: 'perch', pos: 'v.', meaning: '处于(高处)' },
    { word: 'precariously', pos: 'ad.', meaning: '危险地，不稳固地' },
    { word: 'overbalance', pos: 'v.', meaning: '失去平衡' },
    { word: 'clamp', pos: 'n.', meaning: '夹钳，夹板' },
    { word: 'vertically', pos: 'ad.', meaning: '垂直地' },
    { word: 'torrent', pos: 'n.', meaning: '激流，洪流' },
    { word: 'rebound', pos: 'v.', meaning: '弹回' },
    { word: 'positively', pos: 'ad.', meaning: '绝对地，完全地' },
    { word: 'cramped', pos: 'a.', meaning: '窄小的' },
    { word: 'stuffy', pos: 'a.', meaning: '憋气的，闷气的' },
    { word: 'monotonous', pos: 'a.', meaning: '枯燥的，乏味的，单调的' },
    { word: 'rhythm', pos: 'n.', meaning: '有节奏的运动' },
    { word: 'click', pos: 'v.', meaning: '发出咔哒声' },
    { word: 'lull', pos: 'v.', meaning: '催人欲睡' },
    { word: 'fresh', pos: 'a.', meaning: '精神饱满的' },
    { word: 'uncrumpled', pos: 'a.', meaning: '没有垮下来' },
    { word: 'democratic', pos: 'a.', meaning: '民主的' },
    { word: 'restrict', pos: 'v.', meaning: '限制' },
    { word: 'contention', pos: 'n.', meaning: '论点' },
    { word: 'quintuplet', pos: 'n.', meaning: '五胞胎之一' },
    { word: 'obscurity', pos: 'n.', meaning: '默默无闻' },
    { word: 'radically', pos: 'ad.', meaning: '彻底地，完全地' },
    { word: 'exclusive', pos: 'a.', meaning: '独占的，独家的' },
    { word: 'untold', pos: 'a.', meaning: '数不尽地，无限的' },
    { word: 'South', pos: '', meaning: '南达科他州(美国)' },
    { word: 'perpetual', pos: 'a.', meaning: '永久的' },
    { word: 'nursery', pos: 'n.', meaning: '育婴室，保育室' },
    { word: 'commercialization', pos: 'n.', meaning: '商品化' },
    { word: 'commodity', pos: 'n.', meaning: '商品' },
    { word: 'plead', pos: 'v.', meaning: '找(借口)，辩解' },
    { word: 'ignorance', pos: 'n.', meaning: '无知，不懂' },
    { word: 'publication', pos: 'n.', meaning: '出版物，出版' },
    { word: 'newlyweds', pos: 'n.', meaning: '新婚夫妇' },
    { word: 'gaily', pos: 'ad.', meaning: '愉快地，高兴地' },
    { word: 'leisure', pos: 'n.', meaning: '空闲' },
    { word: 'keen', pos: 'a.', meaning: '热心的，渴望的' },
    { word: 'advisory', pos: 'a.', meaning: '咨询的' },
    { word: 'novice', pos: 'n.', meaning: '新手' },
    { word: 'consumer', pos: 'n.', meaning: '消费者，顾客' },
    { word: 'assemble', pos: 'v.', meaning: '装配，组装' },
    { word: 'outlet', pos: 'n.', meaning: '出路，出口' },
    { word: 'creative', pos: 'a.', meaning: '创造性的' },
    { word: 'handyman', pos: 'n.', meaning: '手巧的人，能工巧匠' },
    { word: 'resourceful', pos: 'a.', meaning: '足智多谋的' },
    { word: 'fuse', pos: 'v.', meaning: '由于烧断保险丝而短路' },
    { word: 'rickety', pos: 'a.', meaning: '要散架的，晃动的' },
    { word: 'clog', pos: 'v.', meaning: '堵塞' },
    { word: 'delusion', pos: 'n.', meaning: '错觉' },
    { word: 'lawn mower', pos: '', meaning: '割草机' },
    { word: 'adjustment', pos: 'n.', meaning: '调整' },
    { word: 'screw', pos: 'n.', meaning: '螺丝钉' },
    { word: 'dismantle', pos: 'v.', meaning: '拆卸' },
    { word: 'chunk', pos: 'n.', meaning: '(厚)块' },
    { word: 'snap', pos: 'v.', meaning: '绷断' },
    { word: 'insurmountable', pos: 'a.', meaning: '不能克服的，难以对付的' },
    { word: 'jigsaw', pos: 'n.', meaning: '线锯' },
    { word: 'nag', pos: 'v.', meaning: '唠叨不休' },
    { word: 'rust', pos: 'v.', meaning: '生锈' },
    { word: 'pollution', pos: 'n.', meaning: '污染' },
    { word: 'overpopulated', pos: 'a.', meaning: '人口多的' },
    { word: 'over-industrialized', pos: 'a.', meaning: '过度工业化的' },
    { word: 'sheer', pos: 'a.', meaning: '纯粹的，不掺杂的' },
    { word: 'worldwide', pos: 'ad.', meaning: '在全世界' },
    { word: 'overwhelm', pos: 'v.', meaning: '制服，使不知所措' },
    { word: 'pollute', pos: 'v.', meaning: '污染' },
    { word: 'pesticide', pos: 'n.', meaning: '杀虫剂' },
    { word: 'fertilizer', pos: 'n.', meaning: '肥料' },
    { word: 'salmonella', pos: 'n.', meaning: '沙门氏菌' },
    { word: 'listeria', pos: 'n.', meaning: '利斯特杆菌' },
    { word: 'vegetarian', pos: 'n.', meaning: '吃素的人' },
    { word: 'organically-grown', pos: 'a.', meaning: '有机培植的(不施化肥和其他化学药品培植)' },
    { word: 'insidious', pos: 'a.', meaning: '暗中为害的' },
    { word: 'urban', pos: 'a.', meaning: '城市的' },
    { word: 'burglar', pos: 'n.', meaning: '窃贼' },
    { word: 'burgle', pos: 'v.', meaning: '入室偷窃' },
    { word: 'scream', pos: 'v.', meaning: '尖叫' },
    { word: 'profound', pos: 'a.', meaning: '极度的' },
    { word: 'irritation', pos: 'n.', meaning: '烦躁' },
    { word: 'incessantly', pos: 'ad.', meaning: '连续不断地' },
    { word: 'whine', pos: 'v.', meaning: '发呜呜声' },
    { word: 'maximum', pos: 'a.', meaning: '最大的' },
    { word: 'technology', pos: 'n.', meaning: '技术' },
    { word: 'contribution', pos: 'n.', meaning: '贡献' },
    { word: 'mobile', pos: 'a.', meaning: '可移动的' },
    { word: 'snore', pos: 'v.', meaning: '打鼾' },
    { word: 'offender', pos: 'n.', meaning: '冒犯者' },
    { word: 'staggering', pos: 'a.', meaning: '令人惊愕的' },
    { word: 'trumpet', pos: 'v.', meaning: '吹号' },
    { word: 'partner', pos: 'n.', meaning: '伙伴' },
    { word: 'inaccessible', pos: 'a.', meaning: '难接近的，达不到的' },
    { word: 'hospitable', pos: 'a.', meaning: '好客的' },
    { word: 'hostile', pos: 'a.', meaning: '不友好的，有敌意的' },
    { word: 'vicinity', pos: 'n.', meaning: '周围,附近' },
    { word: 'architectural', pos: 'a.', meaning: '建筑的' },
    { word: 'fresco', pos: 'n.', meaning: '壁画' },
    { word: 'abruptly', pos: 'ad.', meaning: '突然地，意外地' },
    { word: 'taunt', pos: 'n.', meaning: '/v.嘲笑，奚落人的话' },
    { word: 'jibe', pos: '', meaning: 'good-humouredly' },
    { word: '磁盘操作系统(Disk Operating System)', pos: '', meaning: 'Microsoft' },
    { word: 'tint', pos: 'v.', meaning: '给染色' },
    { word: 'delicate', pos: 'a.', meaning: '淡色的' },
    { word: 'shade', pos: 'n.', meaning: '色度' },
    { word: 'observant', pos: 'a.', meaning: '观察力敏锐的' },
    { word: 'greyish', pos: 'a.', meaning: '浅灰色的' },
    { word: 'dispel', pos: 'v.', meaning: '驱散，消除' },
    { word: 'outlandish', pos: 'a.', meaning: '稀奇古怪的' },
    { word: 'acquisition', pos: 'n.', meaning: '获得' },
    { word: 'cosmetic', pos: 'n.', meaning: '化妆品' },
    { word: 'fanciful', pos: 'a.', meaning: '想象出来的' },
    { word: 'insoluble', pos: 'a.', meaning: '不可溶解的' },
    { word: 'prompt', pos: 'v.', meaning: '敦促，激励' },
    { word: 'syllable', pos: 'n.', meaning: '音节' },
    { word: 'bewilderment', pos: 'n.', meaning: '迷惑，糊涂' },
    { word: 'freckle', pos: 'n.', meaning: '雀斑' },
    { word: 'evidently', pos: 'ad.', meaning: '显然地，明显地' },
    { word: 'weird', pos: 'a.', meaning: '奇异的，古怪的' },
    { word: 'concoction', pos: 'n.', meaning: '调制品' },
    { word: 'intoxicate', pos: 'v.', meaning: '陶醉，得意忘形' },
    { word: 'discreetly', pos: 'ad.', meaning: '谨慎地' },
    { word: 'clutch', pos: '', meaning: 'adorn' },
    { word: 'parliamentary', pos: 'a.', meaning: '国会的' },
    { word: 'qualified', pos: 'a.', meaning: '合格的' },
    { word: 'grievance', pos: 'n.', meaning: '不平，冤屈' },
    { word: 'Justiteombudsman', pos: 'n.', meaning: '(瑞典的)司法特派员' },
    { word: 'ombudsman', pos: 'n.', meaning: '(瑞典和英国的)司法特派员' },
    { word: 'secretive', pos: 'a.', meaning: '保密的' },
    { word: 'correspondence', pos: 'n.', meaning: '来往信件' },
    { word: 'alter', pos: 'v.', meaning: '改变' },
    { word: 'accusation', pos: 'n.', meaning: '谴责，指控' },
    { word: 'ascertain', pos: 'v.', meaning: '查出，查明' },
    { word: 'prejudiced', pos: 'a.', meaning: '有偏见的，不公平的' },
    { word: 'insect', pos: 'n.', meaning: '昆虫' },
    { word: 'wage', pos: 'v.', meaning: '进行(斗争)' },
    { word: 'contaminate', pos: 'v.', meaning: '弄脏' },
    { word: 'provocation', pos: 'n.', meaning: '惹怒' },
    { word: 'spider', pos: 'n.', meaning: '蜘蛛' },
    { word: 'wasp', pos: 'n.', meaning: '黄蜂' },
    { word: 'moth', pos: 'n.', meaning: '飞蛾' },
    { word: 'ant', pos: 'n.', meaning: '蚂蚁' },
    { word: 'revulsion', pos: 'n.', meaning: '厌恶' },
    { word: 'horde', pos: '', meaning: 'uncanny' },
    { word: 'infinitely', pos: 'ad.', meaning: '无限地，无穷地' },
    { word: 'solar', pos: 'a.', meaning: '太阳系的' },
    { word: 'Venus', pos: 'n.', meaning: '金星' },
    { word: 'Mars', pos: 'n.', meaning: '火星' },
    { word: 'orbit', pos: 'n.', meaning: '运行轨道' },
    { word: 'astronomical', pos: 'a.', meaning: '天文学的' },
    { word: 'generate', pos: 'v.', meaning: '产生' },
    { word: 'particle', pos: 'n.', meaning: '微粒，粒子' },
    { word: 'Jupiter', pos: 'n.', meaning: '木星' },
    { word: 'blot', pos: 'v.', meaning: '遮暗' },
    { word: 'analyse', pos: 'v.', meaning: '分析' },
    { word: 'bacteria', pos: 'n.', meaning: '细菌' },
    { word: 'oxygen', pos: 'n.', meaning: '氧气' },
    { word: 'realm', pos: 'n.', meaning: '领域' },
    { word: 'endeavour', pos: 'n.', meaning: '努力' },
    { word: 'boundary', pos: 'n.', meaning: '界线；边界' },
    { word: 'pump', pos: 'v.', meaning: '用泵抽' },
    { word: 'alien', pos: 'a.', meaning: '异国的，外国的' },
    { word: 'emigrate', pos: 'v.', meaning: '移居(国外)' },
    { word: 'absorb', pos: 'v.', meaning: '全神贯注于' },
    { word: 'embedded', pos: 'a.', meaning: '扎牢的' },
    { word: 'mortally', pos: 'ad.', meaning: '致命地' },
    { word: 'comprehensive', pos: 'a.', meaning: '广泛的；丰富的' },
    { word: 'milestone', pos: 'n.', meaning: '里程碑' },
    { word: 'territory', pos: 'n.', meaning: '领地；地区' },
    { word: 'milometer', pos: 'n.', meaning: '计程表' },
    { word: 'spire', pos: 'n.', meaning: '(教堂的)塔尖' },
    { word: 'retrace', pos: 'v.', meaning: '返回，重走' },
    { word: 'stumble', pos: 'v.', meaning: '趔趄地走' },
    { word: 'horizon', pos: 'n.', meaning: '地平线' },
    { word: 'reservoir', pos: 'n.', meaning: '水库' },
    { word: 'lurk', pos: 'v.', meaning: '潜藏' },
    { word: 'hinder', pos: 'v.', meaning: '妨碍' },
    { word: 'fingerprint', pos: 'n.', meaning: '指纹' },
    { word: 'chaos', pos: 'n.', meaning: '混乱，无秩序' },
    { word: 'inconceivable', pos: 'a.', meaning: '不可思议的' },
    { word: 'veritable', pos: 'a.', meaning: '真正的，地地道道的' },
    { word: 'magpie', pos: 'n.', meaning: '喜欢收藏物品的人' },
    { word: 'toss', pos: 'v.', meaning: '扔' },
    { word: 'discard', pos: 'v.', meaning: '丢弃' },
    { word: 'constable', pos: 'n.', meaning: '警察' },
    { word: 'ransack', pos: 'v.', meaning: '洗劫' },
    { word: 'balcony', pos: 'n.', meaning: '阳台' },
    { word: 'fussy', pos: 'a.', meaning: '大惊小怪的，小题大做的' },
    { word: 'amass', pos: 'v.', meaning: '积聚，收集' },
    { word: 'indiscriminate', pos: 'a.', meaning: '不加选择的' },
    { word: 'clutter', pos: 'n.', meaning: '/v.一堆杂物;乱糟糟地堆满' },
    { word: 'strong-minded', pos: 'a.', meaning: '意志坚强的' },
    { word: 'relaxation', pos: 'n.', meaning: '休息，娱乐' },
    { word: 'verify', pos: 'v.', meaning: '查证，核实' },
    { word: 'bearing', pos: 'n.', meaning: '关系，联系' },
    { word: 'like-minded', pos: 'a.', meaning: '志趣相投的' },
    { word: 'specimen', pos: 'n.', meaning: '标本' },
    { word: 'constructively', pos: 'ad.', meaning: '有益的，积极的' },
    { word: 'contented', pos: 'a.', meaning: '心满意足的' },
    { word: 'boredom', pos: 'n.', meaning: '烦恼，无聊' },
    { word: 'punctuality', pos: 'n.', meaning: '准时' },
    { word: 'rural', pos: 'ad.', meaning: '农村的' },
    { word: 'intellectual', pos: 'n.', meaning: '知识分子' },
    { word: 'abstruse', pos: 'a.', meaning: '深奥的' },
    { word: 'coordinate', pos: 'v.', meaning: '协调' },
    { word: 'reproach', pos: 'v.', meaning: '责备' },
    { word: 'puncture', pos: 'v.', meaning: '刺破(轮胎)' },
    { word: 'diversion', pos: 'n.', meaning: '改道，绕道' },
    { word: 'trial', pos: 'n.', meaning: '讨厌的事、人' },
    { word: 'fraction', pos: 'n.', meaning: '很小一点儿' },
    { word: 'flourish', pos: 'n.', meaning: '挥舞(打手势)' },
    { word: 'microscopic', pos: 'a.', meaning: '微小的' },
    { word: 'adamant', pos: 'a.', meaning: '坚定的，不动摇的' },
    { word: 'fossil man', pos: 'a.', meaning: '化石人' },
    { word: 'recount', pos: 'v.', meaning: '叙述' },
    { word: 'saga', pos: 'n.', meaning: '英雄故事' },
    { word: 'legend', pos: 'n.', meaning: '传说，传奇' },
    { word: 'migration', pos: 'n.', meaning: '迁移，移居' },
    { word: 'anthropologist', pos: 'n.', meaning: '人类学家' },
    { word: 'ancestor', pos: 'n.', meaning: '祖先' },
    { word: 'Polynesian', pos: 'a.', meaning: '波利尼西亚(中太平洋之一群岛)的' },
    { word: 'Indonesia', pos: 'n.', meaning: '印度尼西亚' },
    { word: 'flint', pos: 'n.', meaning: '燧石' },
    { word: 'rot', pos: 'v.', meaning: '烂掉' },
    { word: 'beast', pos: 'n.', meaning: '野兽' },
    { word: 'census', pos: '', meaning: 'acre' },
    { word: 'summit', pos: 'n.', meaning: '顶峰' },
    { word: 'attain', pos: '', meaning: 'perilous' },
    { word: 'solitary', pos: 'a.', meaning: '唯一的' },
    { word: 'impoverish', pos: 'v.', meaning: '使贫困' },
    { word: 'Alpine', pos: 'a.', meaning: '阿尔卑斯山的' },
    { word: 'flea-ridden', pos: 'a.', meaning: '布满跳蚤的' },
    { word: 'coarse', pos: 'a.', meaning: '粗劣的' },
    { word: 'boast', pos: 'v.', meaning: '自恃有' },
    { word: 'parishioner', pos: 'n.', meaning: '教区居民' },
    { word: 'shepherd', pos: 'n.', meaning: '牧羊人' },
    { word: 'linen', pos: 'n.', meaning: '亚麻布' },
    { word: 'the Alps', pos: 'n.', meaning: '阿尔卑斯山脉' },
    { word: 'fundamentals', pos: 'n.', meaning: '基本原则' },
    { word: 'glorious', pos: 'a.', meaning: '光辉灿烂的' },
    { word: 'social climber', pos: '', meaning: '追求更高社会地位的人，向上爬的人' },
    { word: 'devotion', pos: 'n.', meaning: '热爱' },
    { word: 'cosmic', pos: 'a.', meaning: '宇宙的' },
    { word: 'suburban', pos: 'a.', meaning: '见识不广的，偏狭的' },
    { word: 'conceited', pos: 'a.', meaning: '自高自大的' },
    { word: 'presumptuous', pos: 'a.', meaning: '自以为是的，放肆的' },
    { word: 'fatuous', pos: 'a.', meaning: '愚蠢的' },
    { word: 'cliche', pos: 'n.', meaning: '陈词滥调' },
    { word: 'goodwill', pos: 'n.', meaning: '友好' },
    { word: 'cricket', pos: 'n.', meaning: '板球' },
    { word: 'inclination', pos: 'n.', meaning: '意愿' },
    { word: 'contest', pos: '', meaning: 'orgy' },
    { word: 'competitive', pos: 'a.', meaning: '竞争性的' },
    { word: 'patriotism', pos: 'n.', meaning: '地方观念，爱国主义' },
    { word: 'disgrace', pos: 'v.', meaning: '使丢脸' },
    { word: 'savage', pos: 'a.', meaning: '野性的' },
    { word: 'combative', pos: 'a.', meaning: '好斗的' },
    { word: 'mimic warfare', pos: 'n.', meaning: '模拟战争' },
    { word: 'behaviour', pos: 'n.', meaning: '行动，举止' },
    { word: 'absurd', pos: 'a.', meaning: '荒唐的' },
    { word: 'bat', pos: 'n.', meaning: '蝙蝠' },
    { word: 'strictly', pos: 'ad.', meaning: '明确地' },
    { word: 'utilitarian', pos: 'a.', meaning: '实用的' },
    { word: 'appreciation', pos: 'n.', meaning: '理解' },
    { word: 'obstruction', pos: 'n.', meaning: '障碍物' },
    { word: 'elapse', pos: 'v.', meaning: '消逝' },
    { word: 'hull', pos: 'n.', meaning: '船体' },
    { word: 'interval', pos: 'n.', meaning: '间隔' },
    { word: 'receipt', pos: 'n.', meaning: '收到' },
    { word: 'apparatus', pos: 'n.', meaning: '仪器' },
    { word: 'shoal', pos: 'n.', meaning: '鱼群' },
    { word: 'herring', pos: 'n.', meaning: '鲱鱼' },
    { word: 'grace', pos: 'v.', meaning: '给…增光' },
    { word: 'tariff', pos: 'n.', meaning: '关税' },
    { word: 'dialysis', pos: 'n.', meaning: '分离，分解；透析，渗析' },
    { word: 'electrocute', pos: 'v.', meaning: '使触电身亡' },
    { word: 'eliminate', pos: 'v.', meaning: '消灭' },
    { word: 'device', pos: 'n.', meaning: '仪器，器械' },
    { word: 'hammer out', pos: 'v.', meaning: '推敲' },
    { word: 'pact', pos: 'n.', meaning: '合同，条约，公约' },
    { word: 'espionage(title)', pos: 'n.', meaning: '间谍活动' },
    { word: 'proceeds', pos: 'n.', meaning: '所得' },
    { word: 'skirmish', pos: 'n.', meaning: '小规模战斗' },
    { word: 'silicon', pos: 'n.', meaning: '硅' },
    { word: 'integrated', pos: 'a.', meaning: '综合的' },
    { word: 'circuit', pos: 'n.', meaning: '线路，电路' },
    { word: 'California', pos: 'n.', meaning: '加利福尼亚(美国州名)' },
    { word: 'workstation', pos: 'n.', meaning: '工作站' },
    { word: 'innovator', pos: 'n.', meaning: '改革者' },
    { word: 'forge', pos: 'v.', meaning: '发展' },
    { word: 'memory-chip', pos: 'n.', meaning: '内存条' },
    { word: 'AT&T', pos: '', meaning: '美国电话电报公司(American Telephone and Telegraph)' },
    { word: 'Kansas', pos: 'n.', meaning: '堪萨斯(美国州名)' },
    { word: 'Missouri', pos: 'n.', meaning: '密苏里(美国州名)' },
    { word: 'oppress', pos: 'v.', meaning: '忧郁，压抑' },
    { word: 'justification', pos: 'n.', meaning: '正当理由' },
    { word: 'justifiably', pos: 'ad.', meaning: '无可非议地' },
    { word: 'cheat', pos: 'v.', meaning: '欺骗' },
    { word: 'abject', pos: 'a.', meaning: '可怜的' },
    { word: 'ignoble', pos: 'a.', meaning: '不体面的，可耻的' },
    { word: 'impersonal', pos: 'a.', meaning: '超脱个人感情影响的' },
    { word: 'ego', pos: 'n.', meaning: '自我' },
    { word: 'recede', pos: 'v.', meaning: '退去' },
    { word: 'increasingly', pos: 'ad.', meaning: '日益，不断' },
    { word: 'passionately', pos: 'ad.', meaning: '激昂地' },
    { word: 'painlessly', pos: 'ad.', meaning: '毫无痛苦地' },
    { word: 'vitality', pos: 'n.', meaning: '精力' },
    { word: 'weariness', pos: 'n.', meaning: '疲惫感' },
    { word: 'forgery', pos: 'n.', meaning: '伪造(文件，签名等)' },
    { word: 'adopt', pos: 'v.', meaning: '采用' },
    { word: 'facilitate', pos: 'v.', meaning: '使便利' },
    { word: 'mineral', pos: 'a.', meaning: '矿物的' },
    { word: 'boring', pos: 'n.', meaning: '钻孔' },
    { word: 'derrick', pos: 'n.', meaning: '井架' },
    { word: 'block and tackle', pos: '', meaning: '滑轮组' },
    { word: 'cascade', pos: 'v.', meaning: '瀑布似地落下' },
    { word: 'turbulent', pos: 'a.', meaning: '狂暴的' },
    { word: 'dust devil', pos: '', meaning: '小尘暴，尘旋风' },
    { word: 'squall', pos: 'n.', meaning: '暴风' },
    { word: 'eddy', pos: 'n.', meaning: '旋涡' },
    { word: 'grid', pos: 'n.', meaning: '坐标方格' },
    { word: 'sensor', pos: 'n.', meaning: '传感器' },
    { word: 'humidity', pos: 'n.', meaning: '湿度' },
    { word: 'meteorologist', pos: 'n.', meaning: '气象学家' },
    { word: 'Princeton', pos: 'n.', meaning: '普林斯顿(美国城市名)' },
    { word: 'Mew Jersey', pos: 'n.', meaning: '新泽西(美国州名)' },
    { word: 'fluctuation', pos: 'n.', meaning: '起伏，波动' },
    { word: 'deviation', pos: 'n.', meaning: '偏差' },
    { word: 'secrecy (title)', pos: '', meaning: 'effectiveness' },
    { word: 'patent', pos: 'n.', meaning: '专利 v.得到专利权' },
    { word: 'agent', pos: 'n.', meaning: '情报人员' },
    { word: 'physiological', pos: 'a.', meaning: '生理的' },
    { word: 'deprive', pos: 'v.', meaning: '剥夺' },
    { word: 'monstrous', pos: 'a.', meaning: '畸形的' },
    { word: 'edifice', pos: 'n.', meaning: '大厦' },
    { word: 'toxic', pos: 'a.', meaning: '有毒的' },
    { word: 'ceaselessly', pos: 'ad.', meaning: '不停地' },
    { word: 'throng', pos: 'v.', meaning: '挤满，壅塞' },
    { word: 'settlement', pos: 'n.', meaning: '新拓居地' },
    { word: 'enterprising', pos: 'a.', meaning: '有事业心的' },
    { word: 'settler', pos: 'n.', meaning: '移居者' },
    { word: 'Antipodes', pos: 'n.', meaning: '(the～)新西兰和澳大利亚(英)' },
    { word: 'promiscuous', pos: 'a.', meaning: '杂乱的' },
    { word: 'domesticate', pos: 'v.', meaning: '驯养' },
    { word: 'porpoise(title)', pos: 'n.', meaning: '海豚' },
    { word: 'mariner', pos: 'n.', meaning: '水手' },
    { word: 'formation', pos: 'n.', meaning: '队形' },
    { word: 'dolphin', pos: 'n.', meaning: '海豚科动物' },
    { word: 'unconscious', pos: 'a.', meaning: '不省人事的' },
    { word: 'beaver', pos: 'n.', meaning: '海狸' },
    { word: 'ashore', pos: 'ad.', meaning: '上岸' },
    { word: 'waterlogged', pos: 'a.', meaning: '浸满水的' },
    { word: 'scent', pos: 'n.', meaning: '香味' },
    { word: 'ensue', pos: 'v.', meaning: '接着发生' },
    { word: 'intrigue', pos: 'v.', meaning: '引起兴趣' },
    { word: 'indignity', pos: 'n.', meaning: '侮辱' },
    { word: 'snout', pos: 'n.', meaning: '口鼻部' },
    { word: 'shove', pos: 'v.', meaning: '硬推' },
    { word: 'aquaplane', pos: 'n.', meaning: '驾浪滑水板' },
    { word: 'oceanarium', pos: 'n.', meaning: '水族馆' },
    { word: 'swoop', pos: 'v.', meaning: '猛扑' },
    { word: 'belly', pos: 'n.', meaning: '腹部' },
    { word: 'equilibrium', pos: 'n.', meaning: '平衡' },
    { word: 'butt', pos: 'v.', meaning: '碰撞' },
    { word: 'tissue', pos: 'n.', meaning: '组织' },
    { word: 'plausible', pos: 'a.', meaning: '似乎有理的' },
    { word: 'hypothesis', pos: 'n.', meaning: '假说' },
    { word: 'electroencephalograph', pos: 'n.', meaning: '脑电图仪' },
    { word: 'electrode', pos: 'n.', meaning: '电极' },
    { word: 'scaly', pos: 'n.', meaning: '头发' },
    { word: 'psychiatrist', pos: 'n.', meaning: '精神病学家' },
    { word: 'punctuate', pos: 'v.', meaning: '不时介入' },
    { word: 'jerky', pos: 'a.', meaning: '急动的' },
    { word: 'disorder', pos: 'n.', meaning: '失调' },
    { word: 'implication', pos: 'n.', meaning: '表明' },
    { word: 'saliva', pos: 'n.', meaning: '唾液' },
    { word: 'digestive', pos: 'a.', meaning: '助消化的' },
    { word: 'defy', pos: 'v.', meaning: '使不可能' },
    { word: 'analysis', pos: 'n.', meaning: '分析' },
    { word: 'prey', pos: 'n.', meaning: '被捕食的动物' },
    { word: 'fierce', pos: 'a.', meaning: '凶猛的' },
    { word: 'tussle', pos: 'n.', meaning: '扭打' },
    { word: 'carnivore', pos: 'n.', meaning: '食肉动物' },
    { word: 'vertebrate', pos: 'n.', meaning: '脊椎动物' },
    { word: 'lizard', pos: 'n.', meaning: '蜥蜴' },
    { word: 'concoct', pos: 'v.', meaning: '调制' },
    { word: 'potency', pos: 'n.', meaning: '效力' },
    { word: 'conversion', pos: 'n.', meaning: '转变' },
    { word: 'arsenic', pos: 'n.', meaning: '砒霜' },
    { word: 'strychnine', pos: 'n.', meaning: '马钱子碱' },
    { word: 'mamba', pos: 'n.', meaning: '树眼镜蛇' },
    { word: 'cobra', pos: 'n.', meaning: '眼镜蛇' },
    { word: 'venom', pos: 'n.', meaning: '毒液' },
    { word: 'neurotoxic', pos: 'a.', meaning: '毒害神经的' },
    { word: 'viper', pos: 'n.', meaning: '蝰蛇' },
    { word: 'rattlesnake', pos: 'n.', meaning: '响尾蛇' },
    { word: 'haemolytic', pos: 'a.', meaning: '溶血性的' },
    { word: 'viperine', pos: 'a.', meaning: '毒蛇的' },
    { word: 'supreme', pos: 'a.', meaning: '首屈一指的' },
    { word: 'protagonist', pos: 'n.', meaning: '主角' },
    { word: 'outlaw', pos: 'n.', meaning: '逃犯，亡命之徒' },
    { word: 'framed', pos: 'a.', meaning: '遭到陷害的' },
    { word: 'vicious', pos: 'a.', meaning: '恶毒的' },
    { word: 'mythology', pos: 'n.', meaning: '神话' },
    { word: 'vanished', pos: 'a.', meaning: '消失了的' },
    { word: 'absurdly', pos: 'ad.', meaning: '荒诞地' },
    { word: 'arena', pos: 'n.', meaning: '竞技场地' },
    { word: 'encroaching', pos: 'a.', meaning: '渐渐渗入的' },
    { word: 'humanity', pos: 'n.', meaning: '人类' },
    { word: 'indifferently', pos: 'ad.', meaning: '不在乎地' },
    { word: 'grimly', pos: 'ad.', meaning: '可怖地' },
    { word: 'whimsical', pos: 'a.', meaning: '怪诞的' },
    { word: 'shatter', pos: '', meaning: 'twofold' },
    { word: 'propulsion', pos: 'n.', meaning: '推进力' },
    { word: 'utter', pos: 'a.', meaning: '完全的' },
    { word: 'radiance', pos: 'n.', meaning: '发光' },
    { word: 'intimation', pos: 'n.', meaning: '暗示' },
    { word: 'unutterable', pos: 'a.', meaning: '不可言传的' },
    { word: 'invest', pos: 'v.', meaning: '赋予' },
    { word: 'auditory', pos: 'a.', meaning: '听觉的' },
    { word: 'inadequate', pos: 'a.', meaning: '不适当的' },
    { word: 'plea', pos: 'n.', meaning: '要求' },
    { word: 'abatement', pos: 'n.', meaning: '减少' },
    { word: 'discredit', pos: '', meaning: 'allegation' },
    { word: 'snag', pos: 'n.', meaning: '疑难之处，障碍' },
    { word: 'anecdote', pos: 'n.', meaning: '轶闻' },
    { word: 'slander', pos: 'v.', meaning: '诽谤' },
    { word: 'persecute', pos: 'v.', meaning: '迫害' },
    { word: 'squadron', pos: 'n.', meaning: '中队' },
    { word: 'psychiatric', pos: 'a.', meaning: '精神病学的' },
    { word: 'diagnosis', pos: 'n.', meaning: '诊断' },
    { word: 'orphanage', pos: 'n.', meaning: '孤儿院' },
    { word: 'preservation', pos: 'n.', meaning: '保存' },
    { word: 'silt', pos: 'n.', meaning: '淤泥' },
    { word: 'scavenger', pos: 'n.', meaning: '食腐动物' },
    { word: 'vole', pos: 'n.', meaning: '野鼠，鼹鼠' },
    { word: 'decompose', pos: 'v.', meaning: '腐烂' },
    { word: 'Siberian', pos: 'a.', meaning: '西伯利亚的' },
    { word: 'paleontological', pos: 'a.', meaning: '古生物学的' },
    { word: 'St.Petersbrug', pos: 'n.', meaning: '圣彼得堡' },
    { word: 'sabre-toothed', pos: 'a.', meaning: '长着锐利的长犬牙的' },
    { word: 'venture', pos: 'v.', meaning: '冒险' },
    { word: 'bogged', pos: 'a.', meaning: '陷入泥沼的，陷于困境的' },
    { word: 'galleon', pos: 'n.', meaning: '大型帆船' },
    { word: 'Stockholm', pos: 'n.', meaning: '斯德哥尔摩' },
    { word: 'flagship', pos: 'n.', meaning: '旗舰' },
    { word: 'imperial', pos: 'a.', meaning: '帝国的' },
    { word: 'hurricane', pos: 'n.', meaning: '飓风' },
    { word: 'might', pos: 'n.', meaning: '力量' },
    { word: 'ferment', pos: 'n.', meaning: '激动不安' },
    { word: 'ornament', pos: 'v.', meaning: '装饰' },
    { word: 'riot', pos: 'n.', meaning: '丰富' },
    { word: 'demon', pos: 'n.', meaning: '恶魔' },
    { word: 'mermaid', pos: 'n.', meaning: '美人鱼' },
    { word: 'cherub', pos: 'n.', meaning: '小天使' },
    { word: 'zoomorphic', pos: 'a.', meaning: '兽形的' },
    { word: 'ablaze', pos: 'a.', meaning: '光彩的' },
    { word: 'portray', pos: 'v.', meaning: '绘制' },
    { word: 'drifting', pos: 'a.', meaning: '弥漫的' },
    { word: 'churn', pos: 'v.', meaning: '翻滚' },
    { word: 'pennant', pos: 'n.', meaning: '三角旗' },
    { word: 'superstructure', pos: 'n.', meaning: '上部结构' },
    { word: 'armament', pos: 'n.', meaning: '军械' },
    { word: 'triple', pos: 'a.', meaning: '三层的' },
    { word: 'mount', pos: 'v.', meaning: '登上' },
    { word: 'bronze', pos: 'n.', meaning: '青铜' },
    { word: 'cannon', pos: 'n.', meaning: '加农炮' },
    { word: 'majestic', pos: 'a.', meaning: '威严的' },
    { word: 'muzzle', pos: 'n.', meaning: '炮口' },
    { word: 'freshen', pos: 'v.', meaning: '变强' },
    { word: 'ordnance', pos: '', meaning: 'heave' },
    { word: 'forefathers', pos: '', meaning: 'fervently' },
    { word: 'Solent', pos: 'n.', meaning: '(英国的)苏伦特海峡' },
    { word: 'sensation', pos: 'n.', meaning: '轰动' },
    { word: 'dune', pos: 'n.', meaning: '沙丘' },
    { word: 'plantation', pos: 'n.', meaning: '种植园' },
    { word: 'hover-train', pos: 'n.', meaning: '气垫火车' },
    { word: 'navigation', pos: 'n.', meaning: '航海' },
    { word: 'sounding', pos: 'n.', meaning: '水深度' },
    { word: 'porcupine', pos: 'n.', meaning: '箭猪' },
    { word: 'dredge', pos: 'v.', meaning: '挖掘' },
    { word: 'expedition', pos: 'n.', meaning: '远征' },
    { word: 'physicist', pos: 'n.', meaning: '物理学家' },
    { word: 'magnitude', pos: 'n.', meaning: '很多' },
    { word: 'topography', pos: 'n.', meaning: '地形' },
    { word: 'crust', pos: 'n.', meaning: '地壳' },
    { word: 'rugged', pos: '', meaning: 'tableland' },
    { word: 'clash', pos: 'n.', meaning: '冲突' },
    { word: 'Inquisition', pos: 'n.', meaning: '(罗马天主教的)宗教法庭' },
    { word: 'perspective', pos: 'n.', meaning: '观点，看法' },
    { word: 'means', pos: 'n.', meaning: '方法，手段，财产，资力' },
    { word: 'hamper', pos: '', meaning: 'savannah' },
    { word: 'senior', pos: 'a.', meaning: '资历深的，年长的' },
    { word: 'overheads', pos: 'n.', meaning: '一般费用' },
    { word: 'initiative', pos: 'n.', meaning: '主动，积极性' },
    { word: 'checker', pos: 'n.', meaning: '检查人员' },
    { word: 'foreman', pos: 'n.', meaning: '监工' },
    { word: 'dividend', pos: 'n.', meaning: '红利' },
    { word: 'likelihood', pos: 'n.', meaning: '可能性' },
    { word: 'infant', pos: '', meaning: 'vulnerable' },
    { word: 'virtual', pos: 'a.', meaning: '实际上的' },
    { word: 'moot', pos: 'a.', meaning: '争论未决的' },
    { word: 'run-down', pos: 'a.', meaning: '破旧的' },
    { word: 'friction', pos: 'n.', meaning: '摩擦' },
    { word: 'contamination', pos: '', meaning: 'sanitation' },
    { word: 'inspiration', pos: 'n.', meaning: '灵感' },
    { word: 'Kashmir', pos: 'n.', meaning: '克什米尔' },
    { word: 'interweave', pos: 'v.', meaning: '交织' },
    { word: 'afresh', pos: 'ad.', meaning: '重新' },
    { word: 'discern', pos: 'v.', meaning: '辨明，领悟' },
    { word: 'indescribable', pos: 'a.', meaning: '无法描述的' },
    { word: 'blur', pos: 'v.', meaning: '使…模糊不清' },
    { word: 'yeast', pos: 'n.', meaning: '激动' },
    { word: 'fathom', pos: 'n.', meaning: '噚（1噚等于1.8米）' },
    { word: 'interminably', pos: 'ad.', meaning: '没完没了地' },
    { word: 'winkle', pos: '', meaning: 'incidentally' },
    { word: 'transmit', pos: 'v.', meaning: '传送' },
    { word: 'exquisite', pos: 'a.', meaning: '高雅的' },
    { word: 'phenomena', pos: 'n.', meaning: '现象' },
    { word: 'crest', pos: 'n.', meaning: '浪峰' },
    { word: 'trough', pos: 'n.', meaning: '波谷' },
    { word: 'vertical', pos: 'a.', meaning: '垂直的' },
    { word: 'horizontal', pos: 'a.', meaning: '水平的' },
    { word: 'actuality', pos: 'n.', meaning: '现实' },
    { word: 'catastrophic', pos: 'a.', meaning: '大灾难的' },
    { word: 'tough', pos: 'a.', meaning: '强硬的' },
    { word: 'resentful', pos: 'a.', meaning: '仇恨不满的' },
    { word: 'assign', pos: 'v.', meaning: '分配，指派' },
    { word: 'mahout', pos: 'n.', meaning: '驯象的人' },
    { word: 'calf', pos: 'n.', meaning: '幼仔' },
    { word: 'pine', pos: 'v.', meaning: '消瘦' },
    { word: 'underline', pos: 'v.', meaning: '着重说明，强调' },
    { word: 'tame', pos: 'a.', meaning: '养驯服了的' },
    { word: 'tether', pos: 'v.', meaning: '(用绳)拴' },
    { word: 'ticklish', pos: 'a.', meaning: '难对付的，棘手的' },
    { word: 'alarming', pos: 'a.', meaning: '引起惊恐的' },
    { word: 'accompaniment', pos: 'n.', meaning: '伴奏' },
    { word: 'soothe', pos: 'v.', meaning: '镇定' },
    { word: 'chant', pos: 'n.', meaning: '单调的歌' },
    { word: 'reinforce', pos: 'v.', meaning: '加强' },
    { word: 'endearing', pos: 'a.', meaning: '惹人喜爱的' },
    { word: 'epithet', pos: 'n.', meaning: '称呼' },
    { word: 'blandishment', pos: 'n.', meaning: '奉承' },
    { word: 'lash', pos: 'v.', meaning: '猛烈地甩' },
    { word: 'curl', pos: 'v.', meaning: '使卷曲' },
    { word: 'earthquake', pos: 'n.', meaning: '地震' }
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
    { word: 'umbrella', pos: 'n.', meaning: '伞' },
    { word: 'bring', pos: 'v.', meaning: '带来，送来' },
    { word: 'serve', pos: 'v.', meaning: '照应，服务，接待' },
    { word: 'jeans', pos: 'n.', meaning: '牛仔裤' }
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
    { word: 'today', pos: 'ad.', meaning: '今天' },
    { word: 'brown', pos: 'a.', meaning: '棕色的' },
    { word: 'Thursday', pos: '', meaning: '星期四' },
    { word: 'bulletin', pos: 'n.', meaning: '新闻简报' },
    { word: 'announcer', pos: 'n.', meaning: '(电视、电台)播音员' },
    { word: 'macaroni', pos: 'n.', meaning: '通心面，空心面条' },
    { word: 'leading', pos: '', meaning: 'grower' },
    { word: 'Signor', pos: 'n.', meaning: '(意大利语)先生' },
    { word: 'champion', pos: 'n.', meaning: '冠军' },
    { word: 'studio', pos: 'n.', meaning: '播音室' }
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
    { word: 'blue', pos: 'a.', meaning: '蓝色的' }
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
    { word: 'perhaps', pos: 'ad.', meaning: '大概' },
    { word: 'hammer', pos: 'n.', meaning: '锤子' },
    { word: 'palace', pos: 'n.', meaning: '宫殿' },
    { word: 'extraordinary', pos: 'a.', meaning: '不平常的，非凡的' },
    { word: 'exhibition', pos: 'n.', meaning: '展览' },
    { word: 'iron', pos: 'n.', meaning: '铁' },
    { word: 'various', pos: 'a.', meaning: '各种各样的' },
    { word: 'machinery', pos: 'n.', meaning: '机器' },
    { word: 'display', pos: '', meaning: 'steam' }
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
    { word: 'green', pos: 'a.', meaning: '绿色' },
    { word: 'conductor', pos: 'n.', meaning: '售票员' },
    { word: 'view', pos: 'n.', meaning: '景色' }
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
    { word: 'officer', pos: 'n.', meaning: '官员' },
    { word: 'track', pos: '', meaning: 'sign' },
    { word: 'object', pos: 'v.', meaning: '不赞成，反对' },
    { word: 'descend', pos: 'v.', meaning: '下落，降临' }
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
    { word: 'matter', pos: 'n.', meaning: '事情' },
    { word: 'spend', pos: 'v.', meaning: '度过' },
    { word: 'avoid', pos: 'v.', meaning: '避开' }
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
    { word: 'kitchen', pos: 'n.', meaning: '厨房' },
    { word: 'meat', pos: 'n.', meaning: '(食用)肉' },
    { word: 'husband', pos: 'n.', meaning: '丈夫' },
    { word: 'mess', pos: 'n.', meaning: '杂乱，凌乱' },
    { word: 'enough', pos: 'a.', meaning: '足够的；ad.足够地' },
    { word: 'quiet', pos: 'a.', meaning: '宁静的，安静的' },
    { word: 'ring', pos: 'v.', meaning: '(铃、电话等)响' },
    { word: 'sticky', pos: 'a.', meaning: '粘的' },
    { word: 'pastry', pos: 'n.', meaning: '面糊，甜馅饼' },
    { word: 'annoying', pos: 'a.', meaning: '恼人的' },
    { word: 'receiver', pos: 'n.', meaning: '电话的话筒' }
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
    { word: 'electric', pos: 'a.', meaning: '带电的，可通电的' },
    { word: 'line', pos: 'n.', meaning: '线路' },
    { word: 'cause', pos: 'v.', meaning: '引起;n.原因' },
    { word: 'accidentally', pos: 'ad.', meaning: '意外地，偶然地' },
    { word: 'remains', pos: 'n.', meaning: '尸体，残骸' },
    { word: 'solve', pos: 'v.', meaning: '解决' },
    { word: 'mystery', pos: 'n.', meaning: '谜' }
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
    { word: 'cup', pos: 'n.', meaning: '茶杯' },
    { word: 'coffee', pos: 'n.', meaning: '咖啡' },
    { word: 'usually', pos: 'ad.', meaning: '通常' },
    { word: 'Paris', pos: 'n.', meaning: '巴黎' },
    { word: 'cinema', pos: 'n.', meaning: '电影院' },
    { word: 'truant', pos: 'n.', meaning: '逃学的孩子' },
    { word: 'unimaginative', pos: 'a.', meaning: '缺乏想象力的' },
    { word: 'shame', pos: 'n.', meaning: '惭愧，羞耻' },
    { word: 'meantime', pos: 'n.', meaning: '期间' },
    { word: 'lorry', pos: 'n.', meaning: '卡车' },
    { word: 'border', pos: 'n.', meaning: '边界' },
    { word: 'Calais', pos: 'n.', meaning: '加来(法国港口城市)' }
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
    { word: 'bedroom', pos: 'n.', meaning: '卧室' },
    { word: 'key', pos: 'n.', meaning: '钥匙' },
    { word: 'hate', pos: 'v.', meaning: '讨厌' },
    { word: 'ladder', pos: 'n.', meaning: '梯子' },
    { word: 'shed', pos: 'n.', meaning: '棚子' },
    { word: 'sarcastic', pos: 'a.', meaning: '讽刺的，讥笑的' },
    { word: 'tone', pos: 'n.', meaning: '语气，腔调' }
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
    { word: 'air', pos: 'v.', meaning: '使…通风，换换空气' },
    { word: 'March', pos: 'n.', meaning: '三月' },
    { word: 'platform', pos: 'n.', meaning: '站台' },
    { word: 'low', pos: 'a.', meaning: '低的，矮的' },
    { word: 'tunnel', pos: 'n.', meaning: '隧道' },
    { word: 'port', pos: '', meaning: 'ventilate' }
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
    { word: 'clothes', pos: 'n.', meaning: '衣服' },
    { word: 'film', pos: 'n.', meaning: '电影' },
    { word: 'dry', pos: 'a.', meaning: '干燥的，干的' },
    { word: 'shady', pos: 'a.', meaning: '遮荫的' },
    { word: 'sheriff', pos: 'n.', meaning: '司法长官' },
    { word: 'sneer', pos: 'n.', meaning: '冷笑' },
    { word: 'fast', pos: 'ad.', meaning: '熟(睡)' },
    { word: 'spot', pos: 'v.', meaning: '看出，发现' },
    { word: 'gleam', pos: 'v.', meaning: '发亮，闪光' }
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
    { word: 'tree', pos: 'n.', meaning: '树' },
    { word: 'believe', pos: 'v.', meaning: '相信，认为' },
    { word: 'luck', pos: 'n.', meaning: '运气，幸运' },
    { word: 'cut', pos: 'v.', meaning: '穿过' },
    { word: 'tiny', pos: 'a.', meaning: '极小的' },
    { word: 'possess', pos: 'v.', meaning: '拥有' },
    { word: 'church', pos: 'n.', meaning: '教堂' },
    { word: 'evil', pos: 'a.', meaning: '坏的' },
    { word: 'reputation', pos: 'n.', meaning: '名声' },
    { word: 'vicar', pos: 'n.', meaning: '教区牧师' },
    { word: 'source', pos: 'n.', meaning: '来源' },
    { word: 'income', pos: 'n.', meaning: '收入' }
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
    { word: 'climb', pos: 'v.', meaning: '爬，攀登' },
    { word: 'surround', pos: 'v.', meaning: '包围' },
    { word: 'volcano', pos: 'n.', meaning: '火山' },
    { word: 'active', pos: 'a.', meaning: '活动的' },
    { word: 'Kivu', pos: 'n.', meaning: '基伍湖' },
    { word: 'Congo', pos: 'n.', meaning: '(the～)刚果' },
    { word: 'Kituro', pos: 'n.', meaning: '基图罗' },
    { word: 'violently', pos: 'ad.', meaning: '猛烈地，剧烈地' },
    { word: 'brilliant', pos: 'a.', meaning: '精彩的' },
    { word: 'liquid', pos: 'a.', meaning: '液态的' },
    { word: 'escape', pos: 'v.', meaning: '逃脱' },
    { word: 'alive', pos: 'a.', meaning: '活着的' }
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
    { word: 'grass', pos: 'n.', meaning: '草，草地' },
    { word: 'winter', pos: 'n.', meaning: '冬天' },
    { word: 'grow', pos: 'v.', meaning: '长，让…生长' },
    { word: 'control', pos: 'n.', meaning: '控制' }
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
    { word: 'truth', pos: 'n.', meaning: '实情' },
    { word: 'suggest', pos: 'v.', meaning: '暗示' },
    { word: 'murder', pos: 'n.', meaning: '谋杀' }
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
    { word: 'April', pos: 'n.', meaning: '四月' },
    { word: 'size', pos: 'n.', meaning: '尺寸，尺码，大小' }
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
    { word: 'September', pos: 'n.', meaning: '九月' },
    { word: 'mistake', pos: 'n.', meaning: '错误' },
    { word: 'tyre', pos: 'n.', meaning: '轮胎' },
    { word: 'racing', pos: 'n.', meaning: '竞赛' },
    { word: 'Utah', pos: 'n.', meaning: '犹他(美国州名)' },
    { word: 'burst', pos: 'v.', meaning: '爆裂' },
    { word: 'average', pos: 'a.', meaning: '平均的' },
    { word: 'length', pos: 'n.', meaning: '根，段; 长度' }
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
    { word: 'October', pos: 'n.', meaning: '十月' },
    { word: 'figure', pos: 'n.', meaning: '(人的)体形；人像' },
    { word: 'monument', pos: 'n.', meaning: '纪念碑' },
    { word: 'statue', pos: 'n.', meaning: '雕像' },
    { word: 'liberty', pos: 'n.', meaning: '自由' },
    { word: 'sculptor', pos: 'n.', meaning: '雕刻家' },
    { word: 'actual', pos: 'a.', meaning: '实际的，真实的' },
    { word: 'copper', pos: 'n.', meaning: '铜' },
    { word: 'framework', pos: 'n.', meaning: '构架，框架' },
    { word: 'site', pos: 'n.', meaning: '场地' },
    { word: 'pedestal', pos: 'n.', meaning: '底座' },
    { word: 'symbol', pos: 'n.', meaning: '符号' }
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
    { word: 'west', pos: 'n.', meaning: '西方' },
    { word: 'worth', pos: 'prep.', meaning: '值…钱' },
    { word: 'Lancaster', pos: 'n.', meaning: '兰开斯特' },
    { word: 'bomber', pos: 'n.', meaning: '轰炸机' },
    { word: 'remote', pos: 'a.', meaning: '偏僻的' },
    { word: 'Pacific', pos: 'n.', meaning: '太平洋' },
    { word: 'wreck', pos: 'n.', meaning: '残骸' },
    { word: 'aerial', pos: 'a.', meaning: '航空的' },
    { word: 'survey', pos: 'n.', meaning: '调查' },
    { word: 'imagine', pos: 'v.', meaning: '想像' },
    { word: 'packing', pos: '', meaning: '包装箱' },
    { word: 'colony', pos: 'n.', meaning: '群' },
    { word: 'hive', pos: 'n.', meaning: '蜂房' },
    { word: 'beeswax', pos: 'n.', meaning: '蜂蜡' },
    { word: 'condition', pos: 'v.', meaning: '使习惯于' }
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
    { word: 'remember', pos: 'v.', meaning: '记得，记住' },
    { word: 'mark', pos: 'n.', meaning: '分数' },
    { word: 'kindly', pos: 'ad.', meaning: '和蔼地' },
    { word: 'gift', pos: 'n.', meaning: '礼物，赠品' },
    { word: 'album', pos: 'n.', meaning: '签名簿，相册' },
    { word: 'patience', pos: 'n.', meaning: '耐心' },
    { word: 'encouragement', pos: 'n.', meaning: '鼓励' },
    { word: 'farewell', pos: 'n.', meaning: '告别' },
    { word: 'honour', pos: 'n.', meaning: '敬意, 荣幸' },
    { word: 'coincidence', pos: 'n.', meaning: '巧合' },
    { word: 'total', pos: 'n.', meaning: '总数' },
    { word: 'devote', pos: 'v.', meaning: '致力于' },
    { word: 'gardening', pos: 'n.', meaning: '园艺' },
    { word: 'hobby', pos: 'n.', meaning: '爱好，嗜好' }
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
    { word: 'stand', pos: 'v.', meaning: '站立' },
    { word: 'help', pos: 'v.', meaning: '帮助' },
    { word: 'dance', pos: 'v.', meaning: '跳舞' },
    { word: 'festival', pos: 'n.', meaning: '节日' },
    { word: 'spectacle', pos: 'n.', meaning: '景象，壮观，场面' }
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
    { word: 'suitcase', pos: 'n.', meaning: '手提箱' },
    { word: 'pilot', pos: 'n.', meaning: '飞行员' },
    { word: 'idea', pos: 'n.', meaning: '主意' },
    { word: 'terribly', pos: 'ad.', meaning: '非常' },
    { word: 'rescue', pos: 'v.', meaning: '营救' },
    { word: 'thick', pos: 'a.', meaning: '厚的' },
    { word: 'signal', pos: 'n.', meaning: '信号' },
    { word: 'helicopter', pos: 'n.', meaning: '直升飞机' },
    { word: 'scene', pos: 'n.', meaning: '现场' }
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
    { word: 'person', pos: 'n.', meaning: '人' },
    { word: 'frightened', pos: 'a.', meaning: '害怕，担惊' },
    { word: 'curious', pos: 'a.', meaning: '急于了解，好奇的' },
    { word: 'bomb', pos: 'n.', meaning: '炸弹' }
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
    { word: 'poor', pos: 'a.', meaning: '可怜的; 贫穷的' },
    { word: 'queue', pos: 'v.', meaning: '排队' },
    { word: 'advertiser', pos: 'n.', meaning: '报幕员' }
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
    { word: 'fall', pos: 'v.', meaning: '落下，跌倒' },
    { word: 'X-ray', pos: 'n.', meaning: 'X光透视' },
    { word: 'mummy', pos: 'n.', meaning: '木乃伊' },
    { word: 'Egyptian', pos: 'a.', meaning: '埃及的' },
    { word: 'temple', pos: 'n.', meaning: '庙' },
    { word: 'resin', pos: 'n.', meaning: '树脂' },
    { word: 'skin', pos: 'n.', meaning: '皮，皮肤' },
    { word: 'section', pos: 'n.', meaning: '切片' },
    { word: 'normally', pos: 'ad.', meaning: '通常地' },
    { word: 'cow', pos: 'v.', meaning: '吓唬' }
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
    { word: 'offer', pos: 'v.', meaning: '提供' },
    { word: 'continue', pos: 'v.', meaning: '继续' },
    { word: 'agreement', pos: 'n.', meaning: '协议' },
    { word: 'relieve', pos: 'v.', meaning: '减轻' },
    { word: 'pressure', pos: 'n.', meaning: '压力，麻烦' },
    { word: 'extent', pos: 'n.', meaning: '程度' },
    { word: 'gratitude', pos: 'n.', meaning: '感激' }
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
    { word: 'future', pos: 'a.', meaning: '未来的' }
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
    { word: 'damage', pos: 'v.', meaning: '损坏' },
    { word: 'claim', pos: 'v.', meaning: '以…为其后果' },
    { word: 'peculiar', pos: 'a.', meaning: '奇怪的，不寻常的' },
    { word: 'shining', pos: 'a.', meaning: '闪闪发光的' },
    { word: 'oarfish', pos: 'n.', meaning: '桨鱼' }
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
    { word: 'dismay', pos: 'v.', meaning: '失望，泄气' },
    { word: 'swing', pos: 'v.', meaning: '转向' },
    { word: 'desperately', pos: 'ad.', meaning: '绝望地' },
    { word: 'companion', pos: 'n.', meaning: '同伙，同伴' },
    { word: 'buoy', pos: 'n.', meaning: '浮标' },
    { word: 'tremendous', pos: '', meaning: 'petrol' }
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
    { word: 'mine', pos: 'n.', meaning: '矿' },
    { word: 'microphone', pos: 'n.', meaning: '扩音器，麦克风' },
    { word: 'surface', pos: 'n.', meaning: '地面，表面' }
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
    { word: 'fool', pos: 'n.', meaning: '傻瓜' },
    { word: 'state', pos: 'v.', meaning: '正式提出，宣布' },
    { word: 'ambassador', pos: 'n.', meaning: '大使' },
    { word: 'Escalopia', pos: 'n.', meaning: '艾斯卡罗比亚(虚构的国名)' },
    { word: 'frightful', pos: 'a.', meaning: '可怕的，令人吃惊的' },
    { word: 'drily', pos: 'ad.', meaning: '冷淡地，枯燥无味地' },
    { word: 'embassy', pos: 'n.', meaning: '大使馆' },
    { word: 'basement', pos: 'n.', meaning: '地下室' },
    { word: 'definitely', pos: 'ad.', meaning: '肯定地' },
    { word: 'shot', pos: 'n.', meaning: '子弹' }
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
    { word: 'calm', pos: 'v.', meaning: '使镇定' },
    { word: 'concentration', pos: 'n.', meaning: '集中，专心' },
    { word: 'temper', pos: 'n.', meaning: '脾气' },
    { word: 'appetite', pos: 'n.', meaning: '胃口，食欲' },
    { word: 'satisfaction', pos: 'n.', meaning: '满意，满足' },
    { word: 'delighted', pos: 'a.', meaning: '欣喜的' }
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
    { word: 'former', pos: 'a.', meaning: '从前的' },
    { word: 'defeat', pos: 'v.', meaning: '打败' },
    { word: 'fanatical', pos: 'a.', meaning: '狂热的' },
    { word: 'opponent', pos: 'n.', meaning: '反对者，对手' },
    { word: 'radical', pos: 'a.', meaning: '激进的' },
    { word: 'progressive', pos: 'a.', meaning: '进步的' },
    { word: 'suspicious', pos: 'a.', meaning: '怀疑的' }
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
    { word: 'reluctant', pos: 'a.', meaning: '勉强的，不愿意的' },
    { word: 'underwater', pos: 'a.', meaning: '水下的;ad. 在水下' },
    { word: 'tricycle', pos: 'n.', meaning: '三轮车' },
    { word: 'compete', pos: 'v.', meaning: '比赛，对抗' }
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
  vocabulary: [],
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
    { word: 'youth', pos: 'n.', meaning: '青春；青年', syllables: 'youth', phonetic: '/juːθ/' },
    { word: 'doubt', pos: 'n./v.', meaning: '怀疑', syllables: 'doubt', phonetic: '/daʊt/' },
    { word: 'fundamentals', pos: 'n.', meaning: '基本原则；根本', syllables: 'fun·da·men·tals', phonetic: '/ˌfʌndəˈmentlz/' },
    { word: 'glorious', pos: 'adj.', meaning: '辉煌的；光荣的', syllables: 'glo·ri·ous', phonetic: '/ˈɡlɔːriəs/' },
    { word: 'splendid', pos: 'adj.', meaning: '灿烂的；极好的', syllables: 'splen·did', phonetic: '/ˈsplendɪd/' },
    { word: 'rub', pos: 'n.', meaning: '困难；症结', syllables: 'rub', phonetic: '/rʌb/' },
    { word: 'teenager', pos: 'n.', meaning: '青少年', syllables: 'teen·ag·er', phonetic: '/ˈtiːneɪdʒər/' },
    { word: 'uncertain', pos: 'adj.', meaning: '不确定的；犹豫的', syllables: 'un·cer·tain', phonetic: '/ʌnˈsɜːrtn/' },
    { word: 'identity', pos: 'n.', meaning: '身份；认同', syllables: 'i·den·ti·ty', phonetic: '/aɪˈdentəti/' },
    { word: 'exciting', pos: 'adj.', meaning: '令人兴奋的', syllables: 'ex·cit·ing', phonetic: '/ɪkˈsaɪtɪŋ/' },
    { word: 'dreary', pos: 'adj.', meaning: '沉闷的；枯燥的', syllables: 'drear·y', phonetic: '/ˈdrɪəri/' },
    { word: 'commitment', pos: 'n.', meaning: '承诺；投入', syllables: 'com·mit·ment', phonetic: '/kəˈmɪtmənt/' },
    { word: 'ambition', pos: 'n.', meaning: '野心；抱负', syllables: 'am·bi·tion', phonetic: '/æmˈbɪʃn/' },
    { word: 'anxious', pos: 'adj.', meaning: '焦虑的；渴望的', syllables: 'anx·ious', phonetic: '/ˈæŋkʃəs/' },
    { word: 'devotion', pos: 'n.', meaning: '热爱；奉献', syllables: 'de·vo·tion', phonetic: '/dɪˈvoʊʃn/' },
    { word: 'cosmic', pos: 'adj.', meaning: '宇宙的', syllables: 'cos·mic', phonetic: '/ˈkɑːzmɪk/' },
    { word: 'violent', pos: 'adj.', meaning: '强烈的；暴力的', syllables: 'vi·o·lent', phonetic: '/ˈvaɪələnt/' },
    { word: 'contrast', pos: 'n.', meaning: '对比；反差', syllables: 'con·trast', phonetic: '/ˈkɑːntræst/' },
    { word: 'suburban', pos: 'adj.', meaning: '市郊的；平凡的', syllables: 'sub·ur·ban', phonetic: '/səˈbɜːrbən/' },
    { word: 'conceited', pos: 'adj.', meaning: '自负的', syllables: 'con·ceit·ed', phonetic: '/kənˈsiːtɪd/' },
    { word: 'presumptuous', pos: 'adj.', meaning: '冒昧的；放肆的', syllables: 'pre·sump·tu·ous', phonetic: '/prɪˈzʌmptʃuəs/' },
    { word: 'fatuous', pos: 'adj.', meaning: '愚蠢的；昏庸的', syllables: 'fat·u·ous', phonetic: '/ˈfætʃuəs/' },
    { word: 'cliché', pos: 'n.', meaning: '陈词滥调', syllables: 'cli·ché', phonetic: '/kliːˈʃeɪ/' },
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
