export interface SentenceData {
  text: string
  translation?: string
  predicates: string[]
  clauseIntroducers: string[]
  notes?: { phrase: string; note: string }[]
  panelNotes?: { snippet: string; desc: string }[]
}

export interface VocabItem {
  word: string
  pos: string
  meaning: string
  syllables?: string
  phonetic?: string
}

export interface Article {
  id: string
  title: string
  titleCn?: string
  level: 'NCE2' | 'NCE3' | 'NCE4'
  lesson: number
  tag?: string
  keyArticle?: boolean
  heatmap?: number[][]
  attribution?: string

  original: {
    paragraphs: SentenceData[][]
  }

  vocabulary: VocabItem[]
}

const articleNce2L1: Article = {

    id: 'nce2-l1',
    lesson: 1,
    title: 'A private conversation',
    titleCn: '私人谈话',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Last week I went to the theatre.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I had a very good seat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The play was very interesting.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I did not enjoy it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A young man and a young woman were sitting behind me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They were talking loudly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I got very angry.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I could not hear the actors.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I turned round.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I looked at the man and the woman angrily.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They did not pay any attention.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the end, I could not bear it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I turned round again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'I can\'t hear a word!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I said angrily.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' It\'s none of your business,\' the young man said rudely.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' This is a private conversation!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l2',
    lesson: 2,
    title: 'Breakfast or lunch?',
    titleCn: '早餐还是午餐？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'It was Sunday.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I never get up early on Sundays.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I sometimes stay in bed until lunch time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Last Sunday I got up very late.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I looked out of the window.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was dark outside.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'What a day!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I thought.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'It\'s raining again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' Just then, the telephone rang.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was my aunt Lucy.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I\'ve just arrived by train,\' she said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'I\'m coming to see you.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' \'But I\'m still having breakfast,\' I said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'What are you doing?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' she asked.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I\'m having breakfast,\' I repeated.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Dear me,\' she said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Do you always get up so late?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It\'s one o\'clock!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l3',
    lesson: 3,
    title: 'Please send me a card',
    titleCn: '请给我寄一张明信片',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Postcards always spoil my holidays.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Last summer, I went to Italy.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I visited museums and sat in public gardens.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A friendly waiter taught me a few words of Italian.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Then he lent me a book.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I read a few lines, but I did not understand a word.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Every day I thought about postcards.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My holidays passed quickly, but I did not send any cards to my friends.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On the last day I made a big decision.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I got up early and bought thirty-seven cards.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I spent the whole day in my room, but I did not write a single card!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l4',
    lesson: 4,
    title: 'An exciting trip',
    titleCn: '激动人心的旅行',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I have just received a letter from my brother, Tim.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He is in Australia.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has been there for six months.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Tim is an engineer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He is working for a big firm and he has already visited a great number of different places in Australia.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has just bought an Australian car and has gone to Alice Springs, a small town in the centre of Australia.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He will soon visit Darwin.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From there, he will fly to Perth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My brother has never been abroad before, so he is finding this trip very exciting.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l5',
    lesson: 5,
    title: 'No wrong numbers',
    titleCn: '无错号之虞',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Mr James Scott has a garage in Silbury and now he has just bought another garage in Pinhurst.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Pinhurstis only five miles from Silbury, but Mr Scott cannot get a telephone for his new garage, so he has just bought twelve pigeons.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Yesterday, a pigeon carried the first message from Pinhurst to Silbury.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The bird covered the distance in three minutes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Up to now, Mr Scott has sent a great many requests for spare parts and other urgent messages from one garage to the other.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In this way, he has begun his own private telephone service.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l6',
    lesson: 6,
    title: 'Percy Buttons',
    titleCn: '珀西·巴顿斯',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I have just moved to a house in Bridge Street.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Yesterday a beggar knocked at my door.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He asked me for a meal and a glass of beer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In return for this, the beggar stood on his head and sang songs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I gave him a meal.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He ate the food and drank the beer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then he put a piece of cheese in his pocket and went away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Later a neighbour told me about him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Everybody knows him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'His name is Percy Buttons.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He calls at every house in the street once a month and always asks for a meal and a glass of beer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'beggar', pos: 'n.', meaning: '乞丐', phonetic: '/\'begə/' },
    { word: 'food', pos: 'n.', meaning: '食物', phonetic: '/fu:d/' },
    { word: 'pocket', pos: 'n.', meaning: '衣服口袋', phonetic: '/\'pɔkit/' },
    { word: 'call', pos: 'v.', meaning: '拜访，光顾', phonetic: '/kɔ:l/' }
  ],
}
const articleNce2L7: Article = {

    id: 'nce2-l7',
    lesson: 7,
    title: 'Too late',
    titleCn: '为时太晚',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The plane was late and detectives were waiting at the airport all morning.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They were expecting a valuable parcel of diamond from South Africa.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A few hours earlier, someone had told the police that thieves would try to steal the diamonds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When the plane arrived, some of the detectives were waiting inside the main building while others were waiting on the airfield.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Two men took the parcel off the plane and carried it into the Customs House.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'While two detectives were keeping guard at the door, two others opened the parcel.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To their surprise, the precious parcel was full of stones and sand!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l8',
    lesson: 8,
    title: 'The best and the worst',
    titleCn: '最好的和最差的',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Joe Sanders has the most beautiful garden in our town.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Nearly everybody enters for \'The Nicest Garden Competition\' each year, but Joe wins every time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Bill Frith\'s garden is larger than Joe\'s.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Bill works harder than Joe and grows more flowers and vegetables, but Joe\'s garden is more interesting.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has made neat paths and has built a wooden bridge over a pool.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I like gardens too, but I do not like hard work.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Every year I enter for the garden competition too, and I always win a little prize for the worst garden in the town!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l9',
    lesson: 9,
    title: 'A cold welcome',
    titleCn: '冷遇',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'On Wednesday evening, we went to the Town Hall.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was the last day of the year and a large crowd of people had gathered under the Town Hall clock.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It would strike twelve in twenty minutes\' time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Fifteen minutes passed and then, at five to twelve, the clock stopped.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The big minute hand did not move.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We waited and waited, but nothing happened.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Suddenly someone shouted, \'It\'s two minutes past twelve!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The clock has stopped!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I looked at my watch.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was true.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The big clock refused to welcome the New Year.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At that moment everybody began to laugh and sing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l10',
    lesson: 10,
    title: 'Not for jazz',
    titleCn: '不适于演奏爵士乐',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'We have an old musical instrument.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is called a clavichord.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was made in Germany in 1681.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Our clavichord is kept in the living-room.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It has belong to our family for a long time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The instrument was bought by my grandfather many years ago.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Recently it was damaged by a visitor.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She tried to play jazz on it!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She struck the keys too hard and two of the strings were broken.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My father was shocked.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Now we are not allowed to touch it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is being repaired by a friend of my father\'s.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l11',
    lesson: 11,
    title: 'One good turn deserves another',
    titleCn: '礼尚往来',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I was having dinner at a restaurant when Harry Steele came in.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Harry worked in a lawyer\'s office years ago, but he is now working at a bank.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He gets a good salary, but he always borrows money from his friends and never pays it back.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Harry saw me and came and sat at the same table.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has never borrowed money from me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'While he was eating, I asked him to lend me £2.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To my surprise, he gave me the money immediately.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'I have never borrowed any money from you,\' Harry said, \'so now you can pay for my dinner!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l12',
    lesson: 12,
    title: 'Goodbye and good luck',
    titleCn: '再见，一路顺风',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Our neighbor, Captain Charles Alison, will sail from Portsmouth tomorrow.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We shall meet him at the harbour early in the morning.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He will be in his small boat, Topsail.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Tapsail is a famous little boat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It has sailed across the Atlantic many times.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Captain Alison will set out at eight o\'clock so we shall have plenty of time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We shall see his boat and then we shall say good-bye to him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He will be away for two months.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We are very proud of him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He will take part in an important race across the Atlantic.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l13',
    lesson: 13,
    title: 'The Greenwood Boys',
    titleCn: '绿林少年',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The Greenwood Boys are a group of popular singers.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At present, they are visiting all parts of the country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They will be arriving here tomorrow.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They will be coming by train and most of the young people in the town will be meeting them at the station.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Tomorrow evening they will be singing at the Workers\' Club.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Greenwood Boys will be staying for five days.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'During this time, they will give five performances.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As usual, the police will have a difficult time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They will be trying to keep order.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is always the same on these occasions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l14',
    lesson: 14,
    title: 'Do you speak English?',
    titleCn: '你会讲英语吗？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I had an amusing experience last year.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After I had left a small village in the south of France, I drove on to the next town.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On the way, a young man waved to me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I stopped and he asked me for a lift.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As soon as he had got into the car, I said good morning to him in French and he replied in the same language.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Apart from a few words, I do not know any French at all.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Neither of us spoke during the journey.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I had nearly reached the town, when the young man suddenly said, very slowly, \'Do you speak English?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' As I soon learnt, he was English himself!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l15',
    lesson: 15,
    title: 'Good news',
    titleCn: '佳音',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The secretary told me that Mr.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Harmsworth would see me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I felt very nervous when.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I went into his office.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He did not look up from his desk when I entered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After I had sat down, he said that business was very bad.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He told me that the firm could not afford to pay such large salaries.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Twenty people had already left.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I knew that my turn had come.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Mr.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Harmsworth,\' I said in a weak voice.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Don\'t interrupt,\' he Said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then he smiled and told me I would receive an extra £100 a year!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l16',
    lesson: 16,
    title: 'A polite request',
    titleCn: '彬彬有礼的要求',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'If you park your car in the wrong place, a traffic policeman will soon find it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You will be very lucky if he lets you go without a ticket.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, this does not always happen.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Traffic police are sometimes very polite.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'During a holiday in Sweden, I found this note on my car:\' Sir, we welcome you to our city.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This is a "No Parking" area.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You will enjoy your stay here if you pay attention to our street signs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This note is only a reminder.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' If you receive a request like this, you cannot fail to obey it!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l17',
    lesson: 17,
    title: 'Always young',
    titleCn: '青春常驻',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'My aunt Jennifer is an actress.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She must be at least thirty-five years old.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In spite of this, she often appears on the stage as a young girl.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Jennifer will have to take part in a new play soon.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This time, she will be a girl of seventeen.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the play, she must appear in a bright red dress and long black stockings.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Last year in another play, she had to wear short socks and a bright, orange-coloured dress.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If anyone ever asked her how old she is, she always answers, \'My dear, it must be terrible to be grown up!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l18',
    lesson: 18,
    title: 'He often does this!',
    titleCn: '他经常干这种事！',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'After I had had lunch at a village inn, I looked for my bag.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I had left it on a chair beside the door and now it wasn\'t there!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As I was looking for it, the inn-keeper came in.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Did you have a good meal?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' he asked.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Yes, thank you,\' I answered, \'but I can\'t pay the bill.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I haven\'t got my bag.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' The inn-keeper smiled and immediately went out.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In a few minutes he returned with my bag and gave it back to me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'I\'m very sorry,\' he said \' My dog had taken it into the garden.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He often does this.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'pub', pos: 'n.', meaning: '小酒店', phonetic: '/pʌb/' },
    { word: 'landlord', pos: 'n.', meaning: '店主', phonetic: '/\'lændlɔ:d/' },
    { word: 'bill', pos: 'n.', meaning: '帐单', phonetic: '/bil/' }
  ],
}
const articleNce2L19: Article = {

    id: 'nce2-l19',
    lesson: 19,
    title: 'Sold out',
    titleCn: '票已售完',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: '\'I hurried to the ticket-office.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'May I have two tickets please?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I asked.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Certainly, \'the girl said, \'but they are for next Wednesday\'s performance.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l20',
    lesson: 20,
    title: 'One man in a boat',
    titleCn: '独坐孤舟',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Fishing is my favourite sport.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I often fish for hours without catching anything.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But this does not worry me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some fishermen are unlucky.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Instead of catching fish, they catch old boots and rubbish.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I am even less lucky.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I never catch anything-not even old boots.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After having spent whole mornings on the river, I always go home with an empty bag.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'You must give up fishing!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' my friends say.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' It\'s a waste of time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' But they don\'t realize one important thing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I\'m not really interested in fishing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I am only interested in sitting in a boat and doing nothing at all!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l21',
    lesson: 21,
    title: 'Mad or not?',
    titleCn: '是不是疯了？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Aeroplanes are slowly driving me mad.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I live near an airport and passing planes can be heard night and day.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The airport was built during the war, but for some reason it could not be used then.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Last year, however, it came into use.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Over a hundred people must have been driven away from their homes by the noise.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I am one of the few people left.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sometimes I think this house will be knocked down by a passing plane.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I have been offered a large sum of money to go away, but I am determined to stay here.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Everybody says I must be mad and they are probably right.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'mad', pos: 'adj.', meaning: '发疯', phonetic: '/mæd/' },
    { word: 'reason', pos: 'n.', meaning: '原因', phonetic: '/\'ri:zən/' },
    { word: 'sum', pos: 'n.', meaning: '量', phonetic: '/sʌm/' },
    { word: 'determined', pos: 'adj.', meaning: '坚定的，下决心的', phonetic: '/di\'tə:mind/' }
  ],
}
const articleNce2L22: Article = {

    id: 'nce2-l22',
    lesson: 22,
    title: 'A glass envelope',
    titleCn: '玻璃信封',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'My daughter, Jane, never dreamed of [receiving a letter]from a girl of her own age in Holland.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Last year, we were travelling across the Channel and Jane put a piece of paper with her name and address on it into a bottle.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She threw the bottle into the sea.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She never thought of it again, but ten months later, she received a letter from a girl in Holland.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Both girls write to each other regularly now.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, they have decided to use the post-office.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Letters will cost a litt1e more, but they will certainly travel faster.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'dream', pos: 'v.', meaning: '做梦，梦想', phonetic: '/dri:m/' },
    { word: 'age', pos: 'n.', meaning: '年龄', phonetic: '/eidʒ/' },
    { word: 'channel', pos: 'n.', meaning: '海峡', phonetic: '/\'tʃænəl/' },
    { word: 'throw', pos: 'v.', meaning: '扔，抛', phonetic: '/θrəu/' }
  ],
}
const articleNce2L23: Article = {

    id: 'nce2-l23',
    lesson: 23,
    title: 'A new house',
    titleCn: '新居',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I had received a letter from my sister yesterday.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She lives in Nigeria.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In her letter, she said that she would come to England next year.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If she comes, she will get a surprise.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We are now living in a beautiful new house in the country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Work on it had begun [before my sister left].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The house was completed five months ago.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In my letter, I told her that she could stay with us.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The house has many large rooms and there is a lovely garden.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is a very modern house, so it looks strange to some people.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It must be the only modern house in the district.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'complete', pos: 'v.', meaning: '完成', phonetic: '/kəm\'pli:t/' },
    { word: 'modern', pos: 'adj.', meaning: '新式的，与以往不同的', phonetic: '/\'mɔdən/' },
    { word: 'strange', pos: 'adj.', meaning: '奇怪的', phonetic: '/streindʒ/' },
    { word: 'district', pos: 'n.', meaning: '地区', phonetic: '/\'distrikt/' }
  ],
}
const articleNce2L24: Article = {

    id: 'nce2-l24',
    lesson: 24,
    title: 'It could be worse',
    titleCn: '不幸中之万幸',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I entered the hotel manager\'s office and sat down.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I had just lost £50 and I felt very upset.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I left the money in my room,\' I said, \'and it\'s not there now.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' The manager was sympathetic, but he could do nothing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Everyone\'s losing money these days,\' he said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He started to complain about this wicked world but was interrupted by a knock at the door.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A girl came in and put an envelope on his desk.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It contained £50.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'I found this outside this gentleman\'s room\' she said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Well,\' I said to the manager, \'there is still some honesty in this world!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l25',
    lesson: 25,
    title: 'Do the English speak English?',
    titleCn: '英国人讲的是英语吗？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I arrived in London at last.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The railway station was big, black and dark.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I did not know the way to my hotel, so I asked a porter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I not only spoke English very carefully, but very clearly as well.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The porter, however, could not understand me; I repeated my question several times and at last he understood.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He answered me, but he spoke neither slowly nor clearly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'I am a foreigner,\' I said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then he spoke slowly, but I could not understand him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My teacher never spoke English [like that]!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The porter and I looked at each other and smiled.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then he said something and I understood it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'You\'ll soon learn English!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' he said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I wonder.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In England, each man speaks a different language.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The English understand each other, but I don\'t understand them!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Do they speak English?', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l26',
    lesson: 26,
    title: 'The best art critics',
    titleCn: '最佳艺术评论家',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I am an art student and I paint a lot of pictures.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Many people pretend that they understand modern art.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They always tell you [what a picture is \'about\'].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Of course, many pictures arc not \'about\' anything.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They are just pretty patterns.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We like them in the same way [that we like pretty curtain material].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I think that young children often appreciate modern pictures better than anyone else.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They notice more.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My sister is only seven, but she always tells me [whether my pictures are good or not].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She came into my room yesterday.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' What are you doing?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' she asked.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I\'m hanging this picture on the wall,\' I answered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'It\'s a new one.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Do you like it?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' She looked at it critically for a moment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' It\'s all right,\' she said, \'but isn\'t it upside-down?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I looked at it again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She was right!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l27',
    lesson: 27,
    title: 'A wet night',
    titleCn: '雨夜',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Late in the afternoon, the boys put up their tent in the middle of a field.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As soon as this was done, they cooked a meal over an open fire.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They were all hungry and the food smelt good.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After a wonderful meal, they told stories and sang songs by the camp fire.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But some time later it began to rain.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The boys felt tired so they pet out the fire and crept into their tent.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Their sleeping-bags were warm and comfortable, so they all slept soundly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the middle of the night, two boys woke up and began shouting.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The tent was full of water!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They all leapt out of their sleeping-bags and hurried outside.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was raining heavily and they found that a stream had formed in the field.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The stream wound its way across the field and then flowed right under their tent!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l28',
    lesson: 28,
    title: 'No parking',
    titleCn: '禁止停车',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Jasper White is one of those rare people who believes in ancient myths.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has just bought a new house in the city, but ever since he moved in, he has had trouble with motorists.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'when he returns home at night, he always finds that someone has parked a car outside his gate.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Because of this, he has not been able to get his own car into his garage even once.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Jasper has put up\' No Parking\' signs outside his gate, but these have not had any effect.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Now he has put an ugly stone head over the gate.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is one of the ugliest faces I have ever seen.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I asked him what it was and he told me that it was Medusa, the Gorgon.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Jasper hopes that she will turn motorists to stone.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But none of them has been turned to stone yet!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l29',
    lesson: 29,
    title: 'Taxi!',
    titleCn: '出租车！',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Captain Ben Fawcett has bought an unusual taxi and has begun a new service.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The \'taxi\' is a small Swiss aeroplane called a \'Pilatus Porter\'.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This wonderful plane can carry seven passengers.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The most surprising thing about it, however, is that it can land anywhere: on snow, water, or even on a ploughed field.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Captain Fawcett\'s first passenger was a doctor who flew from Birmingham to a lonely village in the Welsh mountains.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Since then, Captain Fawcett has flown passengers to many unusual places.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Once he landed on the roof of a block of flats and on another occasion, he landed in a deserted car park.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Captain Fawcett has just refused a strange request from a businessman.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The man wanted to fly to Rockall, a lonely island in the Atlantic Ocean, but Captain Fawcett did not take him because the trip was too dangerous.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l30',
    lesson: 30,
    title: 'Football or polo?',
    titleCn: '足球还是水球？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The Wayle is a small river that cuts across the park near my home.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I like sitting by the Wayle on fine afternoons.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was warm last Sunday, so I went and sat on the river bank as usual.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some children were playing games on the bank and there were some people rowing on the river.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Suddenly, one of the children kicked a ball very hard and it went towards a passing boat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some people on the bank called out to the man in the boat, but he did not hear them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The ball struck him so hard that he nearly fell into the water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I turned to look at the children, but there weren\'t any in sight: they had all run away!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The man laughed when he realized what had happened.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He called out to the children and threw the ball back to the bank.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l31',
    lesson: 31,
    title: 'Success story',
    titleCn: '成功者的故事',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Yesterday afternoon Frank Hawkins was telling me about his experiences as a young man.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Frank is now the head of a very large business company, but as a boy he used to work in a small shop.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was his job to repair bicycles and at that time he used to work fourteen hours a day.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He saved money for years and in 1938 he bought a small work-shop of his own.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'During the war Frank used to make spare parts for aeroplanes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At that time he had two helpers.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By the end of the war, the small work-shop had become a large factory which employed seven hundred and twenty-eight people.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Frank smiled when he remembered his hard early years and the long road to success.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was still smiling when the door opened and his wife came in.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She wanted him to repair their son\'s bicycle!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l32',
    lesson: 32,
    title: 'Shopping made easy',
    titleCn: '购物变得很容易',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'People are not so honest as they once were (honest).', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The temptation [to steal]to do is greater than ever before -- especially in large shops.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A detective recently watched a well-dressed woman who always went into a large store on Monday mornings.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One Monday, there were fewer people in the shop than usual when the woman came in, so it was easier for the detective to watch her.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The woman first bought a few small articles.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After a little time, she chose one of the most expensive dresses in the shop and handed it to an assistant who wrapped it up for her as quickly as possible.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then the woman simply took the parcel and walked out of the shop without paying.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When she was arrested, the detective found out that the shop-assistant was her daughter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The girl\' gave\' her mother a free dress once a week!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l33',
    lesson: 33,
    title: 'Out of the darkness',
    titleCn: '冲出黑暗',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Nearly a week passed before the girl was able to explain what had happened to her.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One afternoon she set out from the coast in a small boat and was caught in a storm.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Towards evening, the boat struck a rock and the girl jumped into the sea.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then she swam to the shore after spending the whole night in the water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'During that time she covered a distance of eight miles.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Early next morning, she saw a light ahead.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She knew she was near the shore because the light was high up on the cliffs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On arriving at the shore, the girl struggled up the cliff towards the light she had seen.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'That was all (that)[she remembered].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When she woke up a day later, she found herself in hospital.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l34',
    lesson: 34,
    title: 'Quick work',
    titleCn: '破案"神速"',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Ted Robinson has been worried all the week.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Last Tuesday he received a letter from the local police.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the letter he was asked to call at the station.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ted wondered why he was wanted by the police, but he went to the station yesterday and now he is not worried any more.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At the station, he was told by a smiling policeman that his bicycle had been found.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Five days ago, the policeman told him, the bicycle was picked up in a small village four hundred miles away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is now being sent to his home by train.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ted was most surprised when he heard the news.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was amused too, because he never expected the bicycle to be found.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was stolen twenty years ago when Ted was a boy of fifteen!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'station', pos: 'n.', meaning: '(警察)局', phonetic: '/\'steiʃən/' },
    { word: 'most', pos: 'adv.', meaning: '相当，非常', phonetic: '/məust/' }
  ],
}
const articleNce2L35: Article = {

    id: 'nce2-l35',
    lesson: 35,
    title: 'Stop thief!',
    titleCn: '捉贼！',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Rov Trenton used to drive a taxi.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A short while ago, however, he became a bus-driver and he was not regretted it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He is finding his new work far more exciting.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When he was driving along Catford Street recently, he saw two thieves [rush out of a shop and run towards a waiting car]do to.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One of them was carrying a bag full of money.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Roy acted quickly and drove the bus straight at the thieves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The one with the money got such a fright [that he dropped the bag].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As the thieves were trying to get away in their car, Roy drove his bus into the back of it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'While the battered car was moving away, Roy stopped his bus and telephoned the police.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The thieves\' car was badly damaged and easy to recognize.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Shortly afterwards, the police stopped the car and both men were arrested.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l36',
    lesson: 36,
    title: 'Across the Channel',
    titleCn: '横渡海峡',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Erna Hart is going to swim across the English Channel tomorrow.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She is going to set out from the French coast at five o\'clock in the morning.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Erna is only fourteen years old and she hopes to set up a new world record.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She is a strong swimmer and many people feel that she is sure to succeed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Erna\'s father will set out with her in a small boat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mr Hart has trained his daughter for years.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Tomorrow he will be watching her anxiously as she swims the long distance to England.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Erna intends to take short rests every two hours.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She will have something to drink but she will not eat any solid food.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Most of Erna\'s school friends will be waiting for her on the English coast.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Among them will be Erna\'s mother, who swam the Channel herself when she was a girl.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l37',
    lesson: 37,
    title: 'The Olympic Games',
    titleCn: '奥林匹克运动会',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The Olympic Games will be held in our country in four years\' time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Asa great many people will be visiting the country, the government will be building new hotels, an immense stadium, and a fine new swimming pool.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'They will also be building new roads and a special railway-line.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Games will be held just outside the capital and the whole area will be called \'Olympic City\'.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Workers will have completed the new roads by the end of this year.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Bythe end of next year, they will have finished work on the new stadium.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The fine modern buildings have been designed by Kurt Gunter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Everybody will be watching anxiously asthe new buildings go up.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We are all very excited and are looking forward to the Olympic Games because they have never been held before in this country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l38',
    lesson: 38,
    title: 'Everything except the weather',
    titleCn: '唯独没有考虑到天气',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'My old friend, Harrison, had lived in the Mediterranean for many years before he returned to England.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He had often dreamedof retiring in England and had planned to settle down in the country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He had no sooner returned thanhe bought a fine house and went to live there.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Almost immediately he began to complain about the weather, for even though it was still summer, it rained continually and it was often bitterly cold.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After so many years of sunshine, Harrison got a shock.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He acted as if he had never lived in England before.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the end, it was more than he could bear.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He had hardly had time to settle down when he sold the house and left the country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The dream he had had for so many years ended there.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Harrison had thought of everything except the weather.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l39',
    lesson: 39,
    title: 'Am I all right?',
    titleCn: '我是否痊愈？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'While John Gilbert was in hospital, he askedhis doctor to tell him whether his operation had been successful, but the doctor refused to do so.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The following day, the patient asked for a bedside telephone.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When he was alone, he telephoned the hospital exchange and asked for Doctor Millington.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When the doctor answered the phone, Mr Gilbert said he was inquiring about a certain patient, a Mr John Gilbert.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He asked if Mr Gilbert\'s operation had been successful and the doctor told him that it had been.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He then asked when Mr Gilbert would be allowed to go home and the doctor told him that he would have to stay in hospital for another two weeks.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then Dr Millington asked the caller if he was a relative of the patient.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' No,\' the patient answered,\' I am Mr John Gilbert.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l40',
    lesson: 40,
    title: 'Food and talk',
    titleCn: '进餐与交谈',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Last week at a dinner-party, the hostess asked me to sit next to Mrs Rumbold.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mrs Rumbold was a large, unsmiling lady in a tight black dress.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She did not even look up when I took my seat beside her.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Her eyes were fixed on her plate and in a short time, she was busy eating.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I tried to make conversation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\' A new play is coming to" The Globe" soon,\' I said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Will you be seeing it?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' \' No,\' she answered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Will you be spending your holidays abroad this year?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I asked.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' No,\' she answered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\' Will you be staying in England?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I asked.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' No,\' she answered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'In despair, I asked her whether she was enjoying her dinnerIO，DO.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\' Young man,\' she answered,\' if you ate more and talked less, we would both enjoy our dinner!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l41',
    lesson: 41,
    title: 'Do you call that a hat?',
    titleCn: '你把那个叫帽子吗？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: '\'Do you call that a hat?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I said to my wife.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'You needn\'t be so rude about it,\' my wife answered as she looked at herself in the mirror.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I sat down on one of those modern chairs with holes in it and waited.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We had been in the hat shop for half an hour and my wife was still in front of the mirror.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\' We mustn\'t buy things we don\'t need,\' I remarked suddenly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I regretted saying it almost at once.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'You needn\'t have said that,\' my wife answered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I need not remind you [of that terrible tie] you bought yesterday.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\' I find it beautiful,\' I said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'A man can never have too many ties.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Ten minutes later we walked out of the shop together.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My wife was wearing a hat that looked like a lighthouse!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l42',
    lesson: 42,
    title: 'Not very musical',
    titleCn: '并非很懂音乐',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Aswe had had a long walk through one of the markets of Old Delhi, we stopped at a square to have a rest.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After a time, we noticed a snake-charmer with two large baskets at the other side of the square, so we went to have a look at him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As soon as he saw us, he picked up a long pipe which was covered with coins and opened one of the baskets.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When he began to play a tune, we had our first glimpse of the snake.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It rose out of the basket and began to follow the movements of the pipe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We were very much surprised when the snake charmer suddenly began to play jazz tunes and modern pop songs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The snake, however, continued to \'dance\' slowly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It obviously could not tell the difference between Indian music and jazz!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l43',
    lesson: 43,
    title: 'Over the South Pole',
    titleCn: '飞越南极',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'In 1929, three yearsafter his flight over the North Pole, the American explorer, R.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'E.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Byrd, successfully flew over the South Pole for the first time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though, at first, Byrd and his men were able to take a great many photographs of the mountains that lay below, they soon ran into serious trouble.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At one point, it seemed certain that their plane would crash.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It could only get over the mountains if it rose to 10,000 feet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Byrd at once ordered his men to throw out two heavy food sacks.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The plane was then able to rise and it cleared the mountains by 400 feet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Byrd now knew that he would be able to reach the South Pole which was 300 miles away, for there were no more mountains in sight.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The aircraft was able to fly over the endless white plains without difficulty.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l44',
    lesson: 44,
    title: 'Through the forest',
    titleCn: '穿过森林',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Mrs Anne Sterling did not think of the risk she was taking when she ran through a forest after two men.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They had rushed up to her while she was having a picnic at the edge of a forest with her children and tried to steal her handbag.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the struggle, the strap broke and, with the bag in their possession, both men started running through the trees.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mrs Sterling got so angry that she ran after them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She was soon out of breath, but she continued to run.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When she caught up with them, she saw that they had sat down and were going through the contents of the bag, so she ran straight at them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The men got such a fright that they dropped the bag and ran away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'The strap needs mending,\' said Mrs Sterling later, \'but they did not steal anything.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l45',
    lesson: 45,
    title: 'A clear conscience',
    titleCn: '问心无愧',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The whole village soon learnt that a large sum of money had been lost.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sam Benton, the local butcher, had lost his wallet while taking his savings to the post-office.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sam was sure that the wallet must have been found by one of the villagers, but it was not returned to him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Three months passed, and then one morning, Sam found his wallet outside his front door.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It had been wrapped up in newspaper and it contained half the money he had lost, together with a note which said: \'A thief, yes, \'but only 5o per cent a thief!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' Two months later, some more money was sent to Sam with another note:\' Only 25 per cent a thief now!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' In time, all Sam\'s money was paid back in this way.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The last note said:\' I am 100 per cent honest now!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l46',
    lesson: 46,
    title: 'Expensive and uncomfortable',
    titleCn: '既昂贵又受罪',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'When a plane from London arrived at Sydney airport, workers began to unload a number of wooden boxes which contained clothing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'No one could account for the fact that one of the boxes was extremely heavy.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It suddenly occurred to one of the workers to open up the box.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was astonished at what he found.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A man was lying in the box on top of a pile of woollen goods.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was so surprised at being discovered that he did not even try to run away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After he was arrested, the man admitted hiding in the box before the plane left London.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He had had a long and uncomfortable trip, for he had been confined to the wooden box for over ten hours.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The man was ordered to pay345 pounds for the cost of the trip.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The normal price of a ticket is 230 pounds!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l47',
    lesson: 47,
    title: 'A thirsty ghost',
    titleCn: '嗜酒的鬼魂',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'A public house which was recently bought by Mr Ian Thompson is up for sale.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mr Thompson is going to sell it because it is haunted.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He told me that he could not go to sleep one night because he heard a strange noise coming from the bar.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The next morning, he found that the doors had been blocked by chairs and the furniture had been moved.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though Mr Thompson had turned the lights off before he went to bed, they were on in the morning.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He also said that he had found five empty whisky bottles which the ghost must have drunk the night before.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When I suggested that some villagers must have come in for a free drink, Mr Thompson shook his head.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The villagers have told him that they will not accept the inn even if he gives it away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l48',
    lesson: 48,
    title: 'Did you want to tell me something?',
    titleCn: '你想对我说什么吗？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Dentists always ask questions when it is impossible for you to answer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My dentist had just pulled out one of my teeth and had told me to rest for a while.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I tried to say something, but my mouth was full of cotton-wool.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He knew I collected birds\' eggs and asked me whether my collection was growing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He then asked me how my brother was and whether I liked my new job in London.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In answer to these questions I either nodded or made strange noises.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Meanwhile, my tongue was busy searching out the hole where the tooth had been.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I suddenly felt very worried, but could not say anything.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When the dentist at last removed the cotton-wool from my mouth, I was able to tell him that he had pulled out the wrong tooth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l49',
    lesson: 49,
    title: 'The end of a dream',
    titleCn: '美梦告终',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Tired of sleeping on the floor, a young man in Teheran saved up for years to buy a real bed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For the first time in his life, he became the proud owner of a bed which had springs and a mattress.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Because the weather was very hot, he carried the bed on to the roof of his house.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He slept very welladv.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'for the first two nights, but on the third night, a storm blew up.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A gust of wind swept the bed off the roof and sent it crashing into the courtyard below.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The young man did not wake up until the bed had struck the ground.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Although the bed was smashedadj.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'to pieces, the man was miraculously unhurt.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When he woke up, he was still on the mattress.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Glancing at the bits of wood and metal that lay around him, the man sadly picked up the mattress and carried it into his house.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After he had put it on the floor, he promptly went to sleep again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l50',
    lesson: 50,
    title: 'Taken for a ride',
    titleCn: '乘车兜风',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I love travelling in the country, but I don\'t like losing my way.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'I went on an excursion recently, but my trip took me longer than I expected.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'I\'m going to Woodford Green,\' I said to the conductor as I got on the bus, \'but I don\'t know where it is.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'I sat in the front of the bus to get a good view of the countryside.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After some time, the bus stopped.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Looking round, I realized with a shock that I was the only passenger left on the bus.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'You\'ll have to get off here,\' the conductor said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'This is as far as we go.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Oh dear,\' said the conductor suddenly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'I forgot to put you off.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Well, in that case, I prefer to stay on the bus,\' I answered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'ride', pos: 'n.', meaning: '旅行', phonetic: '/raid/' },
    { word: 'excursion', pos: 'n.', meaning: '远足', phonetic: '/ik\'skə:ʃən/' },
    { word: 'conductor', pos: 'n.', meaning: '售票员', phonetic: '/kən\'dʌktə/' },
    { word: 'view', pos: 'n.', meaning: '景色', phonetic: '/vju:/' }
  ],
}
const articleNce2L51: Article = {

    id: 'nce2-l51',
    lesson: 51,
    title: 'Reward for virtue',
    titleCn: '对美德的奖赏',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'My friend, Hugh, has always been fat, but thingsgot so bad recently that he decided to go on a diet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He began his diet a week ago.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'First of all, he wrote out a long list of all the foods which were forbidden.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The list included most of the things Hugh loves: butter, potatoes, rice, beer, milk, chocolate; and sweets.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Yesterday I paid him a visit.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I rang the bell and was not surprised to see that Hugh was still as fat as ever.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He led me into his room and hurriedly hid a large parcel under his desk.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was obvious that he was very embarrassed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When I asked him what he was doing, he smiled guiltily and then put the parcel on the desk.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'occasionally.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then he showed me the contents of the parcel.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It contained five large bars of chocolate and three bags of sweets!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l52',
    lesson: 52,
    title: 'A pretty carpet',
    titleCn: '漂亮的地毯',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'We have just moved into a new house and I have been working hard all morning.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I have been trying to get my new room in order.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'I own over a thousand books.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To make matters worse, the room is rather small, so I have temporarily put my books on the floor.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'At the moment, they cover every inch of floor space and I actually have to walk on them to get in or out of the room.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A short while ago, my sister helped me to carry one of my old bookcases up the stairs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She went into my room and got a big surprise when she saw all those books on the floor.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'This is the prettiest carpet I have ever seen,\' she said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She gazed at it for some time then added, \'You don\'t need bookcases at all.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You can sit here in your spare time and read the carpet!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'temporarily', pos: 'adv.', meaning: '暂时地', phonetic: '/\'tempərərili/' },
    { word: 'inch', pos: 'n.', meaning: '英寸(度量单位)', phonetic: '/intʃ/' },
    { word: 'space', pos: 'n.', meaning: '空间', phonetic: '/speis/' },
    { word: 'actually', pos: 'adv.', meaning: '实际上', phonetic: '/\'æktʃuəli/' }
  ],
}
const articleNce2L53: Article = {

    id: 'nce2-l53',
    lesson: 53,
    title: 'Hot snake',
    titleCn: '触电的蛇',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'At last firemen have put out a big forest fire in California.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Since then, they have been trying to find out how the fire began.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Forest fires are often caused by broken glass or by cigarette ends which people carelessly throw away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Yesterday the firemen examined the ground carefully, but were not able to find any broken glass.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They were also quite sure that a cigarette end did not start the fire.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This morning, however, a firemen accidentally discovered the cause.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He noticed the remains of a snake which was wound round the electric wires of a 16,000-volt power line.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In this way, he was able to solve the mystery.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The explanation was simple but very unusual.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A bird had snatched up the snake from the ground and then dropped it on to the wires.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The snake then, wound itself round the wires.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When it did so, it sent sparks down to the ground and these immediately started a fire.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l54',
    lesson: 54,
    title: 'Sticky fingers',
    titleCn: '黏糊的手指',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'After breakfast, I sent the children to school and then I went to the shops.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was still early when I returned home.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The children were at school, my husband was at work and the house was quiet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'So I decided to make some meat pies.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In a short time I was busy mixing butter and flour and my hands were soon covered with sticky pastry.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'At exactly that moment, the telephone rang.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Nothing could have been more annoying.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I picked up the receiver between two sticky fingers and was dismayed when I recognized the voice of Helen Bates.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It took me ten minutes to persuade her to ring back later.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At last I hung up the receiver.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'What a mess!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There was pastry on my fingers, on the telephone, and on the doorknobs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I had no sooner got back to the kitchen than the doorbell rang loud enough to wake the dead.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This time it was the postman and he wanted me to sign for a registered letter!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l55',
    lesson: 55,
    title: 'Not a gold mine',
    titleCn: '并非金矿',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Dreams of finding lost treasure almost came true recently.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A new machine called \'The Revealer\' has been invented and it has been used to detect gold which has been buried in the ground.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The machine was used in a cave near the seashore where -- it is said -- pirates used to hide gold.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The pirates would often bury gold in the cave and then fail to collect it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Armed with the new machine, a search party went into the cave hoping to find buried treasure.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The leader of the party was examining the soil near the entrance to the cave when the machine showed that there was gold under the ground.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Very excited, the party dug a hole two feel deep.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They finally found a small gold coin which was almost worthless.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The party then searched the whole cave thoroughly but did not find anything except an empty tin trunk.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In spite of this, many people are confident that \'The Revealer\' may reveal something of value fairly soon.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l56',
    lesson: 56,
    title: 'Faster than sound!',
    titleCn: '比声音还快！',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Once a year, a race is held for old cars.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A lot of cars entered for this race last year and there was a great deal of excitement just before it began.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One of the most handsome cars was a Rolls-Royce Silver Ghost.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The most unusual car was a Benz which had only three wheels.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Built in 1885, it was the oldest car taking part.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After a great many loud explosions, the race began.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Many of the cars broke down on the course and some drivers spent more time under their cars than in them!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A few cars, however, completed the race.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The winning car reached a speed of forty miles an hour -- much faster than any of its rivals.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It sped downhill at the end of the race and its driver had a lot of trouble trying to stop it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The race gave everyone a great deal of pleasure.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was very different from modern car races but no less exciting.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l57',
    lesson: 57,
    title: 'Can I help you, madam?',
    titleCn: '您要买什么，夫人？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'A woman in jeans stood at the window of an expensive shop.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though she hesitated for a moment, she finally went in and asked to see a dress that was in the window.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The assistant who served her did not like the way she was dressed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Glancing at her scornfully, he told her that the dress was sold.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The woman walked out of the shop angrily and decided to punish the assistant next day.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She returned to the shop the following morning dressed in a fur coat, with a handbag in one hand and a long umbrella in the other.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'After seeking out the rude assistant, she asked for the same dress.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Not realizing who she was, the assistant was eager to serve her this time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'With great difficulty, he climbed into the shop window to get the dress.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As soon as she saw it, the woman said she did not like it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She enjoyed herself making the assistant bring almost everything in the window before finally buying the dress she had first asked for.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l58',
    lesson: 58,
    title: 'A blessing in disguise?',
    titleCn: '是因祸得福吗？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The tiny village of Frinley is said to possess a \'cursed tree\'.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Because the tree was mentioned in a newspaper, the number of visitors to Frinley has now increased.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The tree was planted near the church fifty years ago, but it is only in recent years that it has gained an evil reputation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is said that if anyone touches the tree, he will have bad luck; if he picks a leaf, he will die.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Many villagers believe that the tree has already claimed a number of victims.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The vicar has been asked to have the tree cut down, but so far he has refused.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has pointed out that the tree is a useful source of income, as tourists have been coming from all parts of the country to see it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In spite of all that has been said, the tourists have been picking leaves and cutting their names on the tree-trunk.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'So far, not one of them has been struck down by sudden death!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l59',
    lesson: 59,
    title: 'In or out?',
    titleCn: '进来还是出去？',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Our dog, Rex, used to sit outside our front gate and dark.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Every time he wanted to come into the garden he would bark until someone opened the gate.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As the neighbours complained of the noise, my husband spent weeks training him to press his paw on the latch to let himself in.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Rex soon became an expert at opening the gate.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, when I was going out shopping last week, I noticed him in the garden near the gate.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This time he was barking so that someone would let him out!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Since then, he has developed another bad habit.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As soon as he opens the gate from the outside, he comes into the garden and waits until the gate shuts.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then he sits and barks until someone lets him out.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After this he immediately lets himself in and begins barking again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Yesterday my husband removed the gate and Rex got so annoyed we have not seen him since.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l60',
    lesson: 60,
    title: 'The future',
    titleCn: '未来',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'At a village fair, I decided to visit a fortune-teller called Madam Bellinsky.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I went into her tent and she told me to sit down.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After I had given her some money, she looked into a crystal ball and said: \'A relation of yours is coming to see you.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She will be arriving this evening and intends to stay for a few days.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The moment you leave this tent, you will get a big surprise.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A woman you know well will rush towards you.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She will speak to you and then she will lead you away from this place.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'That is all.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'As soon as I went outside, I forgot all about Madam Bellinsky because my wife hurried towards me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Where have you been hiding?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' she asked impatiently.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Your sister will be here in less than an hour and we must be at the station to meet her.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We are late already.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' As she walked away, I followed her out of the fair.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l61',
    lesson: 61,
    title: 'Trouble with the Hubble',
    titleCn: '哈勃望远镜的困境',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The Hubble telescope was launched into space by NASA on April 20,1990 at a cost of over a billion dollars.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Right from the start there was trouble with the Hubble.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The pictures it sent us were very disappointing because its main mirror was faulty!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'NASA is now going to put the telescope right, so it will soon be sending up four astronauts to repair it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The shuttle Endeavour will be taking the astronauts to the Hubble.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A robot-arm from the Endeavour will grab the telescope and hold it while the astronauts make the necessary repairs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Of course, the Hubble is above the earth\'s atmosphere, so it will soon be sending us the clearest pictures of the stars and distant galaxies that we have ever seen.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Hubble will tell us a great deal about the age and size of the universe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By the time you read this, the Hubble\'s eagle eye will have sent us thousands and thousands of wonderful pictures.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l62',
    lesson: 62,
    title: 'After the fire',
    titleCn: '大火之后',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Firemen had been fighting the forest for nearly three weeks before they could get it under control.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A short time before, great trees had covered the countryside for miles around.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Now, smoke still rose up from the warm ground over the desolate hills.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Winter was coming on and the hills threatened the surrounding villages with destruction, for heavy rain would not only wash away the soil but would cause serious floods as well.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When the fire had at last been put out, the forest authorities ordered several tons of a special type of grass-seed which would grow quickly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The seed was sprayed over the ground in huge quantities by aeroplanes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The planes had been planting seed for nearly a month when it began to rain.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By then, however, in many places the grass had already taken root.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In place of the great trees which had been growing there for centuries patches of green had begun to appear in the blackened soil.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l63',
    lesson: 63,
    title: 'She was not amused',
    titleCn: '她并不觉得好笑',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Jeremy Hampden has a large circle of friends and if very popular at parties.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Everybody admires him for his great sense of humour -- everybody, that is, except his six-year-old daughter, Jenny.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Recently, one of Jeremy\'s closest friends asked him to make a speech at a wedding reception.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This is the sort of thing that Jeremy loves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He prepared the speech carefully and went to the wedding with Jenny.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'he had included a large number of funny stories in the speech and, of course, it was a great success.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As soon as he had finished, Jenny told him she wanted to go home.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Jeremy was a little disappointed by this but he did as his daughter asked.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On the way home, he asked Jenny if she had enjoyed the speech.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To his surprise, she said she hadn\'t.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Jeremy asked her why this was so and she told him that she did not like to see so many people laughing at him!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l64',
    lesson: 64,
    title: 'The Channel Tunnel',
    titleCn: '海峡隧道',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'In 1858, a French engineer, Aime Thome de Gamond, arrived in England with a plan for a twenty-one-mile tunnel under the English Channel.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He said that it would be possible to build a platform in the centre of the Channel.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This platform would serve as a port and a railway station.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The tunnel would be well-ventilated if tall chimneys were built above sea level.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In 1860, a better plan was put forward by an Englishman, William Low.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He suggested that a double railway-tunnel should be built.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This would solve the problem of ventilation, for if a train entered this tunnel, it would draw in fresh air behind it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Forty-two years later a tunnel was actually begun.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If, at the time, the British had not feared invasion, it would have been completed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The world had to wait almost another 100 years for the Channel Tunnel.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was officially opened on March 7,1994, finally connecting Britain to the European continent.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l65',
    lesson: 65,
    title: 'Jumbo versus the police',
    titleCn: '小象对警察',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Last Christmas, the circus owner, Jimmy Gates, decided to take some presents to a children\'s hospital.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Dressed up as Father Christmas and accompanied by a \'guard of honour\' of six pretty girls, he set off down the main street of the city riding a baby elephant called Jumbo.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He should have known that the police would never allow this sort of thing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A policeman approached Jimmy and told him he ought to have gone along a side street as Jumbo was holding up the traffic.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though Jimmy agreed to go at once, Jumbo refused to move.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Fifteen policemen had to push very hard to get him off the main street.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The police had a difficult time, but they were most amused.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Jumbo must weigh a few tons,\' said a policeman afterwards, \'so it was fortunate that we didn\'t have to carry him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Of course, we should arrest him, but as he has a good record, we shall let him off this time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l66',
    lesson: 66,
    title: 'Sweet as honey!',
    titleCn: '像蜜一样甜！',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'In 1963 a Lancaster bomber crashed on Wallis Island, a remote place in the South Pacific, a long way west of Samoa.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The plane wasn\'t too badly damaged, but over the years, the crash was forgotten and the wreck remained undisturbed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then in 1989, twenty-six years after the crash, the plane was accidentally rediscovered in an aerial survey of the island.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By this time, a Lancaster bomber in reasonable condition was rare and worth rescuing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The French authorities had the plane packaged and moved in parts back to France.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Now a group of enthusiasts are going to have the plane restored.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It has four Rolls-Royce Merlin engines, but the group will need to have only three of them rebuilt.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Imagine their surprise and delight when they broke open the packing cases and found that the fourth engine was sweet as honey -- still in perfect condition.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A colony of bees had turned the engine into a hive and it was totally preserved in beeswax!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l67',
    lesson: 67,
    title: 'Volcanoes',
    titleCn: '火山',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Haroun Tazieff, the Polish scientist, has spent his lifetime studying active volcanoes and deep caves in all parts of the world.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In 1948, he went to Lake Kivu in the Congo to observe a new volcano which he later named Kituro.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Tazieff was able to set up his camp very close to the volcano while it was erupting violently.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though he managed to take a number of brilliant photographs, he could not stay near the volcano for very long.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He noticed that a river of liquid rock was coming towards him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It threatened to surround him completely, but Tazieff managed to escape just in time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He waited until the volcano became quiet and he was able to return two days later.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This time, he managed to climb into the mouth of Kituro so that he could take photographs and measure temperatures.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Tazieff has often risked his life in this way.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has been able to tell us more about active volcanoes than any man alive.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l68',
    lesson: 68,
    title: 'Persistent',
    titleCn: '纠缠不休',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I crossed the street to avoid meeting him, but he saw me and came running towards me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was no use pretending that I had not seen him, so I waved to him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I never enjoy meeting Nigel Dykes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He never has anything to do.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'No matter how busy you are, he always insists on coming with you.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I had to think of a way of preventing him from following me around all morning.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Hi, Elizabeth,\' Nigel answered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'I was just wondering how to spend the morning -- until I saw you.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You\'re not busy doing anything, are you?', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Would you mind my coming with you?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' he asked, before I had finished speaking.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Then I\'ll come with you,\' he answered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'There\'s always plenty to read in the waiting room!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'persistent', pos: 'adj.', meaning: '坚持的，固执的', phonetic: '/pə\'sistənt/' },
    { word: 'avoid', pos: 'v.', meaning: '避开', phonetic: '/ə\'vɔid/' },
    { word: 'insist', pos: 'v.', meaning: '坚持做', phonetic: '/in\'sist/' }
  ],
}
const articleNce2L69: Article = {

    id: 'nce2-l69',
    lesson: 69,
    title: 'But not murder!',
    titleCn: '并非谋杀！',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'I was being tested for a driving licence for the third time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I had been asked to drive in heavy traffic and had done so successfully.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After having been instructed to drive out of town, I began to acquire confidence.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sure that I had passed, I was almost beginning to enjoy my test.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The examiner must have been pleased with my performance, for he smiled and said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Just one more thing, Mr.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Eames.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Let us suppose that a child suddenly crosses the road in front of you.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As soon as I tap on the window, you must stop within five feet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I continued driving and after some time, the examiner tapped loudly, Though the sound could be heard clearly, it took me a long time to react.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I suddenly pressed the brake pedal and we were both thrown forward.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The examiner looked at me sadly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Mr.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Eames,\' he said, in a mournful voice, \'you have just killed that child!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l70',
    lesson: 70,
    title: 'Red for danger',
    titleCn: '危险的红色',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'During a bullfight, a drunk suddenly wandered into the middle of the ring.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The crowd began to shout, but the drunk was unaware of the danger.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The bull was busy with the matador at the time, but it suddenly caught sight of the drunk who was shouting rude remarks and waving a red cap.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Apparently sensitive to criticism, the bull forgot all about the matador and charged at the drunk.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The crowd suddenly grew quiet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The drunk, however, seemed quite sure of himself.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When the bull got close to him, he clumsily stepped aside to let it pass.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The crowd broke into cheers and the drunk bowed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By this time, however, three men had come into the ring and they quickly dragged the drunk to safety.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even the bull seemed to feel sorry for him, for it looked on sympathetically until the drunk was out of the way before once more turning its attention to the matador.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l71',
    lesson: 71,
    title: 'A famous clock',
    titleCn: '大名鼎鼎的钟',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'When you visit London, one of the first things you will see is Big Ben, the famous clock which can be heard all over the world on the B.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'B.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'C.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If the Houses of Parliament had hot been burned down in 1834, the great clock would never have been erected.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Big Ben takes its name from Sir Benjamin Hall who was responsible for the making of the clock when the new Houses of Parliament were being built.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is not only of immense size, but is extremely accurate as well.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Officials from Greenwich Observatory have the clock checked twice a day.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On the B.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'B.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'C.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'you can hear the clock when it is actually striking because microphones are connected to the clock tower.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Big Ben has rarely gone wrong.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Once, however, it failed to give the correct time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A painter who had been working on the tower hung a pot of paint on one of the hands and slowed it down!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l72',
    lesson: 72,
    title: 'A car called Bluebird',
    titleCn: '蓝鸟汽车',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The great racing driver, Sir Malcolm Campbell, was the first man to drive at over 300 miles per hour.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He set up a new world record in September 1935 at Bonneville Salt Flats, Utah.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Bluebird, the car he was driving, had been specially built for him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was over 30 feet in length and had a 2500 horse-power engine.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car because a tyre burst during the first run.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After his attempt, Campbell was disappointed to learn that his average speed had been 299 miles per hour.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, a few days later, he was told that a mistake had been made.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'His average speed had been 301 miles per hour.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Since that time, racing drivers have reached speeds of over 400 miles an hour.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Following his father\'s footsteps many years later, Sir Malcolm\'s son, Donald, also set up a world record.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Like his father, he was driving a car called Bluebird.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l73',
    lesson: 73,
    title: 'The record-holder',
    titleCn: '纪录保持者',
    level: 'NCE2',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Little boys who play truant from school are unimaginative.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A quiet day\'s fishing, or eight hours in a cinema seeing the same filmover and over again, is usually as far as they get.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They have all been put to shame by a boy who, while playing truant, travelled 1600 miles.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He hitch- hiked to Dover and, towards evening, went into a boat to find somewhere to sleep.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When he woke up next morning, he discovered that the boat had, in the meantime, travelled to Calais.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'No one noticed the boy as he crept off.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From there, he hitch-hiked to Paris in a lorry.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The driver gave him a few biscuits and a cup of coffee and left him just outside the city.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The next car [the boy stopped] did not take him into the centre of Paris as he hoped it would, but to Perpignan on the French-Spanish border.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There he was picked up by a policeman and sent back to England by the local authorities.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has surely set up a record for the thousands of boys who dream of evading school.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l74',
    lesson: 74,
    title: 'Out of the limelight',
    titleCn: '舞台之外',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'An ancient bus stopped by a dry river bed and a party of famous actors and actresses got off.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Dressed in dark glasses and old clothes, they had taken special precautions so that no one should recognize them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But as they soon discovered, disguises can sometimes be too perfect.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'This is a wonderful place for a picnic,\' said Gloria Gleam.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\' It couldn\'t be better, Gloria,\' Brinksley Meers agreed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'No newspaper men, no film fans!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Why don\'t we come more often?', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Meanwhile, two other actors, Rockwall Slinger and Merlin Greeves, had carried two large food baskets to a shady spot under some trees.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When they had all made themselves comfortable, a stranger appeared.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He looked very angry.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Now you gut out of here, all of you!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' he shouted: \' I\'m sheriff here.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Do you see that notice?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It says" No Camping"-in case you can\'t read!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\' Look, sheriff, \'said Rockwall,\' don\'t be too hard on us.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I\'m Rockwall Slinger and this is Merlin Greeves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\' Oh, is it?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' said the sheriff with a sneer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Well, I\'m Brinksley Meers, and my other name is Gloria Gleam.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Now you get out of here fast!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l75',
    lesson: 75,
    title: 'SOS',
    titleCn: '呼救信号',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'When a light passenger plane flew off course some time ago, it crashed in the mountains and its pilot was killed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The only passengers, a young woman and her two baby daughters, were unhurt.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was the middle of winter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Snow lay thick on the ground.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The woman knew that the nearest village was miles away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When it grew dark.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'she turned a suitcase into a bed and put the children inside it, covering them with all the clothes she could find.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'During the night, it got terribly cold.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The woman kept as near as she could to the children and even tried to get into the case herself, but it was too small.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Early, next morning she heard planes passing overhead and wondered how she could send a signal.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then she had an idea.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She stamped out the letters\' SOS\' in the snow.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Fortunately, a pilot saw the signal and sent a message by radio to the nearest town.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was not long before a helicopter arrived on the scene to rescue the survivors of the scrash.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l76',
    lesson: 76,
    title: 'April Fools Day',
    titleCn: '愚人节',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: '\'To end our special news bulletin,\' said the voice of the television announcer,\' we are taking you to the macaroni fields of Calabria.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Macaroni has been grown in this area for over six hundred years.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Two of the leading growers, Giuseppe Moldova and Ricardo Brabante, tell me that they have been expecting a splendid crop this year and harvestingn.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'has begun earlier than usual.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Here you can see two workers who, between them, have just finished cutting three cart-loads of golden brown macaroni stalks.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The whole village has been working day and night gathering and threshing this year\'s crop [before the September rains].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On the right, you can see Mrs Brabante herself.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She has been helping her husband for thirty years now.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mrs Brabante is talking to the manager of the local factory where the crop is processed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This last scene shows you what will happen at the end of the harvest: the famous Calabrian macaroni-eating competition!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Signor Fratelli, the present champion, has won it every year since 1961.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And that ends our special bulletin for today, Thursday, April 1st.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We are now returning you to the studio.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l77',
    lesson: 77,
    title: 'A successful operation',
    titleCn: '一例成功的手术',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'The mummy of an Egyptian woman [who died in 800 B.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'C.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '] has just had an operation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The mummy is that of Shepenmut who was once a singer in the Temple of Thebes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As there were strange marks on the X-ray plates taken of the mummy, doctors have been trying to find out whether the woman died of a rare disease.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The only way to do this was to operate.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The operation, which lasted for over four hours, proved to be very difficult because of the hard resin which covered the skin.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The doctors removed a section of the mummy and sent it to a laboratory.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They also found something which the X-ray of the god Duamutef.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This god which has the head of a cow was normally placed inside a mummy.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The doctors have not yet decided how the woman died.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They feared that the mummy would fall to pieces when they cut it open, but fortunately this has not happened.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The mummy successfully survived the operation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l78',
    lesson: 78,
    title: 'The last one? ？',
    titleCn: '最后一枝吗？',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'After reading an article entitled \'Cigarette Smoking and Your Health\' I lit a cigarette to calm my nerves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I smoked with concentration and pleasure as I was sure that this would be my last cigarette.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For a whole week I did not smoke at all and during this time, my wife suffered terribly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I had all the usual symptoms of someone giving up smoking: a bad temper and an enormous appetite.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My friends kept on offering me cigarettes and cigars.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They made no effort to hide their amusement whenever I produced a packet of sweets from my pocket.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After seven days of this I went to a party.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Everybody around me was smoking and I felt extremely uncomfortable.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When my old friend Brian urged me to accept a cigarette, it was more than I could bear.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I took one guiltily, lit it and smoked with satisfaction.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My wife was delighted that things had returned to normal once more.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Anyway, as Brian pointed out, it is the easiest thing in the world to give up smoking.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He himself has done it lots of times!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l79',
    lesson: 79,
    title: 'By air',
    titleCn: '乘飞机',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'I used to travel by air a great deal when I was a boy.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My parents, used to live in South America and I used to fly there from Europe in the holidays.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'An air-hostess would take charge of me and I never had an unpleasant experience.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I am used to travelling by air and only on one occasion have I ever felt frightened.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After taking off, we were flying low over the city and slowly gaining height, when the plane suddenly turned round and flew back to the airport.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'While we were waiting to land, an air-hostess told us to keep calm and to get off the plane quietly as soon as it had touched down.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Everybody on board was worried and we were curious to find out what had happened.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Later we learnt that there was a very important person on board.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The police had been told that a bomb had been planted on the plane.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After we had landed, the plane was searched thoroughly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Fortunately, nothing was found and five hours later we were able to take off again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l80',
    lesson: 80,
    title: 'The Crystal Palace',
    titleCn: '水晶宫',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'Perhaps the most extraordinary building of the nineteenth century was the Crystal Palace, which was built in Hyde Park for the Great Exhibition of 1851.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Crystal Palace was different from all other buildings in the world, for it was made of iron and glass.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was one of the biggest buildings of all time and a lot of people from many countries came to see it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A great many goods were sent to the exhibition from various parts of the world.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There was also a great deal of machinery on display.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The most wonderful piece of machinery on show was Nasmyth\'s steam hammer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though in those days, travelling was not as easy as it is today, steam boats carried thousands of visitors across the Channel from Europe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On arriving in England, they were taken to the Crystal Palace by train.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There were six million visitors in all, and the profits from the exhibition were used to build museums and colleges.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Later, the Crystal Palace was moved to South London.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It remained one of the most famous buildings in the world until it was burnt down in 1936.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l81',
    lesson: 81,
    title: 'Escape',
    titleCn: '脱逃',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'When he had killed the guard, the prisoner of war quickly dragged him into the bushes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Working rapidly in the darkness, he soon changed into the dead man\'s clothes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Now, dressed in a blue uniform and with a rifle over his shoulder, the prisoner marched boldly up and down in front of the camp.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He could hear shouting in the camp itself.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Lights were blazing and men were running here and there: they had just discovered that a prisoner had escaped.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At that moment, a large black car with four officers inside it, stopped at the camp gates.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The officers got out and the prisoner stood to attention and saluted as they passed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When they had gone, the driver of the car came towards him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The man obviously wanted to talk.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was rather elderly with grey hair and clear blue eyes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The prisoner felt sorry for him, but there was nothing else he could do.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As the man came near, the prisoner knocked him to the ground with a sharp blow.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then, jumping into the car, he drove off as quickly as he could.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l82',
    lesson: 82,
    title: 'Monster or fish? ？',
    titleCn: '是妖还是鱼？',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'Fishermen and sailors sometimes claim to have seen monsters in the sea.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though people have often laughed at stories told by seamen, it is now known that many of these \'monsters\' which have at times been sighted are simply strange fish.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Occasionally, unusual creatures are washed to the shore, but they are rarely caught out at sea.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some time ago, however, a peculiar fish was caught near Madagascar.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A small fishing-boat was carried miles out to sea by the powerful fish as it pulled on the line.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Realizing that this was no ordinary fish, the fisherman made every effort not to damage it in any way.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When it was eventually brought to shore, it was found [to be over thirteen feet long].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It had a head like a horse, big blue eyes, shining silver skin, and a bright red tail, The fish, which has since been sent to a museum where it is being examined by a scientist, is called an oarfish.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Such creatures have rarely been seen alive by man as they live at a depth of six hundred feet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l83',
    lesson: 83,
    title: 'After the elections',
    titleCn: '大选之后',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'The former Prime Minister, Mr Wentworth Lane, was defeated in the recent elections.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He is now retiring from political life and has gone abroad.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My friend, Crawley, has always been a fanatical opponent of Mr Lane\'s Radical Progressive Party.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After the elections, Crawley went to the former Prime Minister\'s house.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When he asked if Mr Lane lived there, the policeman on duty told him that since his defeat, the ex-Prime Minister had gone abroad.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On the following day, Crawley went to the house again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The same policeman was just walking slowly past the entrance, when Crawley asked the same question.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though a little suspicious this time, the policeman gave him the same answer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The day after, Crawley went to the house once more and asked exactly the same question.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This time, the policeman lost his temper.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I told you yesterday and the day before yesterday,\' he shouted, \'Mr Lane was defeated in the elections.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has retired from political life and gone to live abroad!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' \' I know,\' answered Crawley,\' but I love to hear you say it!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l84',
    lesson: 84,
    title: 'On strike',
    titleCn: '罢工',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'Busmen have decided to go on strike next week.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The strike is due to begin on Tuesday.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'No one knows how long it will last.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The busmen have stated that the strike will continue until general agreement is reached about pay and working conditions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Most people believe that the strike will last for at least a week.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Many owners of private cars are going to offer \'free rides\' to people on their way to work.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This will relieve pressure on the trains to some extent.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Meanwhile, a number of university students have volunteered to drive buses while the strike lasts.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'All the young men are expert drivers, but before they drive any of the buses, they will have to pass a special test.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The students are going to take the test in two days\' time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even so, people are going to find it difficult to get to work.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But so far, the public has expressed its gratitude to the students in letters to the Press.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Only one or two people have objected that the students will drive too fast!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l85',
    lesson: 85,
    title: 'Never too old to learn',
    titleCn: '活到老学到老',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'I have just received a letter from my old school informing me that my former head- master, Mr Regmald Page, will be retiring next week.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Pupils of the school, old and new, will be sending him a present to mark the occasion.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'All those who have contributed towards the gift will sign their names in a large album which will be sent to the headmaster\'s home.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We shall all remember Mr Page for his patience and understanding and for the kindly encouragement he gave us when we went so unwillingly to school.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A great many former pupils will be attending a farewell dinner in his honour next Thursday.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is a curious coincidence that the day before his retirement, Mr Page will have been teaching for a total of forty years.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After he has retired, he will devote himself to gardening.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For him, this will be an entirely new hobby.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But this does not matter, for, as he has often remarked, one is never too old to learn.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l86',
    lesson: 86,
    title: 'Out of control',
    titleCn: '失控',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'As the man tried to swing the speed-boat round, the steering-wheel came away in his hands.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He waved desperately to his companion, who had been water-skiing for the last fifteen minutes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Both men had hardly had time to realize what was happening when they were thrown violent1y into the sea.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The speed-boat had struck a buoy, but it continued to move very quickly across the water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Both men had just begun to swim towards the shore.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'when they noticed with dismay that the speed-boat was moving in a circle.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It now came straight towards them at tremendous speed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In less than a minute, it roared past them only a few feet away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After it had passed, they swam on as quickly as they could because they knew that the boat would soon return.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They had just had enough time to swim out of danger when the boat again completed a circle.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On this occasion, however, it had slowed down considerably.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The petrol had nearly all been used up.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Before long, the noise dropped completely and the boat began to drift gently across the water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l87',
    lesson: 87,
    title: 'A perfect alibi',
    titleCn: '极好的不在犯罪现场的证据',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: '\'At the time the murder was committed, I was travelling on the 8.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '0 o\'clock train to London,\' said the man.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Do you always catch such an early train?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' asked the inspector.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Of course I do,\' answered the man.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' I must be at work at 10.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '0 o\'clock.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My employer will confirm that I was there on time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\' Would a later train get you to work on time?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' asked the inspector.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'At ten to eight.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I bought a paper and waited for the train.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'I suggest,\' said the inspector, \'that you are not telling the truth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I suggest that you did not catch the 8.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '0 o\'clock train, but that you caught the 8.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '25 which would still get you to work on time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You see, on the morning of the murder, the 8.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '0 o\'clock train did not run at all.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It broke down at Ferngreen station and was taken off the line.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l88',
    lesson: 88,
    title: 'Trapped in a mine',
    titleCn: '困在矿井里',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'Six men have been trapped in a mine for seventeen hours.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If they are not brought to the surface soon they may lose their lives.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, rescue operations are proving difficult.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If explosives are used, vibrations will cause the roof of the mine to collapse.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Rescue workers are therefore drilling a hole on the north side of the mine.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They intend to bring the men up in a special capsule.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If there had not been a hard layer of rock beneath the soil, they would have completed the job in a few hours.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As it is, they have been drilling for sixteen hours and they still have a long way to go.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Meanwhile, a microphone, which was lowered into the mine two hours ago, has enabled the men to keep in touch with the closest relatives.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though they are running out of food and drink, the men are cheerful and confident that they will get out soon.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They have been told that rescue operations are progressing smoothly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If they knew how difficult it was to drill through the hard rock, they would lose heart.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l89',
    lesson: 89,
    title: 'A slip of the tongue',
    titleCn: '口误',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'People will do anything to see a free show--even if it is a bad one.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When the news got round that a variety show would be presented at our local cinema by the P.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'and U.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Bird Seed Company, we all rushed to see it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We had to queue for hours to get in and there must have been several hundred people present just be- fore the show began.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Unfortunately, the show was one of the dullest we have ever seen.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Those who failed to get in need not have felt disappointed as many of the artistes who should have appeared did not come.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The only funny things we heard that evening came from the advertiser at the beginning of the programme.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was obviously very nervous and for some minutes stood awkwardly before the microphone.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As soon as he opened his mouth, everyone burst out laughing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We all know what the poor man should have said, but what he actually said was: \'This is the Poo and Ee Seed Bird Company.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Good ladies, evening and gentlemen!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l90',
    lesson: 90,
    title: 'Whats for supper ？ ？',
    titleCn: '晚餐吃什么？',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'Though Brazil is one of the richest countries in the world, much of it has not yet been developed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was mainly for this reason that the Brazilian government decided to have a new city built 600 miles north-west of Rio de Janeiro.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Designed by the great architect Lucio Costa, the new city, Brasilia, replaced Rio de Janeiro as the capital of Brazif in 1960.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Brasilia has been carefully planned for modern living.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'away from living areas.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Children do not have to cross busy streets to go to school.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Housewives can visit-shopping centres on foot, for in these specially designed living areas, cars are unnecessary.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At first, the government had great difficulty in persuading people to leave Rio and to settle in Brasilia.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Since 1960, however, the population has been growing all the time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Brasilia has quickly established itself as the capital of the country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The idea to have the capital moved so far inland will have a great effect on the future of Brazil.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l91',
    lesson: 91,
    title: 'Three men in a basket',
    titleCn: '三人同篮',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'A pilot noticed a balloon which seemed to be making for a Royal Air Force Station nearby.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He informed the station at once, but no one there was able to explain the mystery.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The officer in the control tower was very angry when he heard the news, because balloons can be a great danger to aircraft.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He said that someone might by spying on the station and the pilot was ordered to keep track of the strange object.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The pilot managed to circle the balloon for some time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He could make out three men in a basket under it and one of them was holding field-glasses.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When the balloon was over the station, the pilot saw one of the men taking photographs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Soon afterwards, the balloon began to descend and it landed near an airfield.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The police were called in, but they could not arrest anyone, for the basket contained two Members of Parliament and the Commanding Officer of the station!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As the Commanding Officer explained later, one half of the station did not know what the other half was doing!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l92',
    lesson: 92,
    title: 'Asking for trouble',
    titleCn: '自找麻烦',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'It must have been about two in the morning when I returned home.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I tried to wake up my wife by ringing the door-bell, but she was fast asleep, so I got a ladder from the shed in the garden, put it against the wall, and began climbing towards the bedroom window.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I was almost there when a sarcastic voice below said,\' I don\'t think the windows need cleaning at this time of the night.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'I looked down and nearly fell off the ladder when I saw a policeman.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I immediately regretted answering in the way I did, but I said, \'I enjoy cleaning windows at night.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'So do I,\' answered the policeman in the same tone.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Excuse my interrupting you.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I hate to interrupt a man when he\'s busy working, but would you mind coming with me to the station?', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Well, I\'d prefer to stay here,\' I said.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'You see, I\'ve forgotten my key.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Fortunately, the shouting woke up my wife who opened the window just as the policeman had started to climb towards me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l93',
    lesson: 93,
    title: 'A noble gift',
    titleCn: '崇高的礼物',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'One of the most famous monuments in the world, the Statue of Liberty, was presented to the United States of America in the nineteenth century by the people of France.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The great statue, which was designed by the sculptor Auguste Bartholdi, took ten years to complete.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The actual figure was made of copper supported by a metal framework which had been especially constructed by Eiffel.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Before it could be transported to the United States, a site had to be found for it and a pedestal had to be built.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The site chosen was an island at the entrance of New York Harbour.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By 1884, a statue which was 151 feet tall, had been erected in Paris.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The following year, it was taken to pieces and sent to America.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By the end of October 1886, the statue had been put together again and it was officially presented to the American people by Bartholdi.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ever since then, the great monument has been a symbol of liberty for the millions of people who have passed through New York Harbour to make their homes in America.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l94',
    lesson: 94,
    title: 'Future champions',
    titleCn: '未来的冠军',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'Experiments have proved that children can be instructed in swimming at a very early age.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At a special swimming pool in Los Angeles, children become expert at holding their breath under water even before they can walk.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Babies of two months old do not appear to be reluctant to enter the water, It is not long before they are so accustomed to swimming that they can pick up weights from the floor of the pool.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A game that is very popular with these young swimmers is the underwater tricycle race.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Tricycles are lined up on the floor of the pool seven feet under water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The children compete against each other to reach the other end of the pool.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Many pedal their tricycles, but most of them prefer to push or drag them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some children can cover the whole length of the pool without coming up for breath even once.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Whether they will ever become future Olympic champions, only time will tell.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Meanwhile, they should encourage those among us who cannot swim five yards before they are gasping for air.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l95',
    lesson: 95,
    title: 'A fantasy',
    titleCn: '纯属虚构',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'When the Ambassador of Escalopia returned home for lunch, his wife got a shock.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He looked pale and his clothes were in a frightful state.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'A fire-extinguisher, my dear,\' answered the Ambassador drily.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'University students set the Embassy on fire this morning.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Good heavens!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' exclaimed his wife.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'And where were you at the time?', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'I was in my office as usual,\' answered the Ambassador.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'The fire broke out in the basement.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I went down immediately.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'of course, and that fool, Horst, aimed a fire-extinguisher at me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He thought I was on fire.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I must definitely get that fellow posted.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The Ambassador\'s wife went on asking questions, when she suddenly noticed a big hole in her husband\'s hat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'And how can you explain that?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' she asked.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '\'Oh, that,\' said the Ambassador.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Someone fired a shot through my office window.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Accurate, don\'t you think?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Fortunately, I wasn\'t wearing it at the time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If I had been, I would not have been able to get home for lunch.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce2-l96',
    lesson: 96,
    title: 'The dead return',
    titleCn: '亡灵返乡',
    level: 'NCE2',

    original: {
    paragraphs: [
      [
        { text: 'A Festival for the Dead is held once a year in Japan.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This festival is a cheerful occasion, for on this day, the dead are said to return to their homes and they are welcomed by the living.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As they are expected to be hungry after their long journey, food is laid out for them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Specially-made lanterns are hung outside each house to help the dead to find their way.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'All night long, people dance and sing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the early morning, the food that had been laid out for the dead is thrown into a river or into the sea as it is considered unlucky for anyone living to eat it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In towns that are near the sea, the tiny lanterns which had been hung in the streets the night before, are placed into the water when the festival is over.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Thousands of lanterns slowly drift out to sea guiding the dead on their return journey to the other world.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This is a moving spectacle, for crowds of people stand on the shore watching the lanterns drifting away until they can be seen no more.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'festival', pos: 'n.', meaning: '节日', phonetic: '/\'festivəl/' },
    { word: 'lantern', pos: 'n.', meaning: '灯笼', phonetic: '/\'læntən/' },
    { word: 'spectacle', pos: 'n.', meaning: '景象，壮观，场面', phonetic: '/\'spektəkəl/' }
  ],
}

const articleNce3L1: Article = {

    id: 'nce3-l1',
    lesson: 1,
    title: 'A Puma at Large',
    titleCn: '逃遁的美洲狮',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Pumas are large, cat-like animals which are found in America.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When reports came into London Zoo that a wild puma had been spotted forty-five miles south of London, they were not taken seriously.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, as the evidence began to accumulate, experts [from the Zoo] feltlv obligedbe doneto investigate, for the descriptions given by people who claimed to have seen the pumawere extraordinarily similar.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The hunt for the puma began in a small village where a woman picking blackberries saw ‘a large cat’ only five yards away from her.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It immediately ran away when she saw it, and experts confirmed that a puma will not attack a human being [unless it is cornered].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The search proved difficult, for the puma was often observed at one place in the morning and at another place twenty miles away in the evening.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Wherever it went, it left behind ita trail of dead deer and small animals like rabbits.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Paw prints were seen in a number of places and puma fur was found clinging to bushes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Several people complained of ‘cat-like noises’ at night and a businessman on a fishing tripsaw the puma up a tree.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The experts were now fully convinced that the animal was a puma, but where had it come from?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Asno pumas had been reported missing from any zoo in the country, this one must have been [in the possession of a private collector] and somehow managed to escape.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The hunt went on for several weeks, but the puma was not caught.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is disturbing to think that a dangerous wild animal is still at large in the quiet countryside.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l2',
    lesson: 2,
    title: 'Thirteen Equals One',
    titleCn: '十三等于一',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Our vicar is always raising money for one cause or another, but he has never managed to get enough money to have the church clock [repairedadj.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The big clock [which used to strike the hours day and night] was damaged during the war and has been silent ever since.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'One night, however, our vicar woke up with a start: the clock was striking the hours!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Looking at his watch, he saw that it was one o’clock, but the bell struck thirteen times before it stopped.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Armed with a torch, the vicar went up into the clock tower [to see what was going on].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the torchlight, he caught sight of a figure whom he immediately recognized as Bill Wilkins, our local grocer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '‘I’m trying to repair the bell,’ answered Bill.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '‘I’ve been coming up here night after night for weeks now.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You see, I was hoping to give you a surprise.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '‘You certainly did give me a surprise!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '’ saidthe vicar.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '‘You’ve probably woken up everyone in the village as well.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Still, I’m glad the bell is working again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '‘That’s the trouble, vicar,’ answered Bill.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '‘It’s working all right, but I’m afraid that at one o’clock it will strike thirteen times and there’s nothing I can do about it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: '‘We’ll get used to that, Bill,’ said the vicar.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '‘Thirteen is not as good as one, but it’s better than nothing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Now let’s go downstairs and have a cup of tea.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
  },

  vocabulary: [
    { word: 'equal', pos: 'v.', meaning: '等于', phonetic: '/\'i:kwəl/' },
    { word: 'vicar', pos: 'n.', meaning: '牧师', phonetic: '/\'vikə/' },
    { word: 'raise', pos: 'v.', meaning: '募集，筹(款)', phonetic: '/\'reiz/' },
    { word: 'torchlight', pos: 'n.', meaning: '电筒光', phonetic: '/\'tɔ:tʃlait/' }
  ],
}
const articleNce3L3: Article = {

    id: 'nce3-l3',
    lesson: 3,
    title: 'An Unknown Goddess',
    titleCn: '无名女神',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Some time ago, an interesting discovery was made by archaeologists on the Aegean island of Kea.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'An American team explored a temple which stands in an ancient city on the promontory of Ayia Irini.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The city at one time must have been prosperous, for it enjoyed a high level of civilization.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Houses -- often three storeys high -- were built of stone.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They had large rooms with beautifully decorated walls.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The city was even equipped with a drainage system, for a great many clay pipes were found beneath the narrow streets.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The temple which the archaeologists explored was used as a place of worship from the fifteenth century B.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'C.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'until Roman times.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the most sacred room of the temple, clay fragments of fifteen statues were found.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Each of these represented a goddess and had, at one time, been painted.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The body of one statue was found among remains dating from the fifteenth century B.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'C.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Its missing head happened to be among remains of the fifth century B.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'C.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This head must have been found in Classical times and carefully preserved.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was very old and precious even then.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When the archaeologists reconstructed the fragments, they were amazed to find that the goddess turned out to be a very modern-looking woman.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She stood three feet high and her hands rested on her hips.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She was wearing a full-length skirt which swept the ground.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Despite her great age, she was very graceful indeed, but, so far, the archaeologists have been unable to discover her identity.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l4',
    lesson: 4,
    title: 'The Double Life of Alfred Bloggs',
    titleCn: '阿尔弗雷德·布洛格斯的双重生活',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'These days, people who do manual work often receive far more money than clerks who work in offices.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'People who work in offices are frequently referred to as ‘white-collar workers’ for the simple reason that they usually wear a collar and tie to go to work.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Such is human nature, that a great many people are often willing to sacrifice higher pay for the privilege of becoming white-collar workers.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This can give rise to curious situations, as it did in the case of Alfred Bloggs who worked as a dustman for the Ellesmere Corporation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'When he got married, Alf was too embarrassed tosay anything to his wife about his job.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He simply told her that he worked for the Corporation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Every morning, he left home dressed in a fine black suit.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He then changed into overalls and spent the next eight hours as a dustman.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Before returning home at night, he took a shower and changed back into his suit.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Alf did this for over two years and his fellow dustmen kept his secret.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Alf’s wife has never discovered that she married a dustman and she never will, for Alf has just found another job.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He will soon be working in an office as a junior clerk.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He will be earning only half as much as he used to, but he feels [that his rise in status] is well worth the loss of money.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From now on, he will wear a suit all day and others will call him ‘Mr Bloggs’, not ‘Alf’.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l5',
    lesson: 5,
    title: 'The Facts',
    titleCn: '事实',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Editors of newspapers and magazines often go to extremes to provide their readers with unimportant facts and statistics.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Last year a journalist had been instructed by a well-known magazine to write an article on the president’s palace in a new African republic.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When the article arrived, the editor read the first sentence and then refused to publish it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The article began: ‘Hundreds of steps lead to the high wall which surrounds the president’s palace’.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The editor at once sent the journalist a telegram instructing him to find out the exact number of steps and the height of the wall.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The journalist immediately set out to obtain these important facts, but he took a long time to send them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Meanwhile, the editor was getting impatient, for the magazine would soon go to press.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He sent the journalist two urgent telegrams, but received no reply.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He sent yet another telegram informing the journalist that if he did not reply soon he would be fired.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When the journalist again failed to reply, the editor reluctantly published the article [as it had originally been written].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A week later, the editor at last received a telegram from the journalist.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Not only had the poor man been arrested, but he had been sent to prison as well.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, he had at last been allowed to send a cable in which he informed the editor that the he had been arrested while counting the 1,084 steps leading to the 15-foot wall which surrounded the president’s palace.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l6',
    lesson: 6,
    title: 'Smash-and-grab',
    titleCn: '砸橱窗抢劫',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The expensive shops [in a famous arcade near Piccadilly] were just opening.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At this time of the morning, the arcade was almost empty.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mr Taylor, the owner of a jewellery shop was admiring a new window display.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Two of his assistants had been working busily since 8 o’clock and had only just finished.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Diamond necklaces and rings had been beautifully arranged on a background of black velvet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After gazing at the display for several minutes, Mr Taylor went back into his shop.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The silence was suddenly broken when a large car, with its headlights on and its horn blaring, roared down the arcade.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It came to a stop outside the jeweller’s.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One man stayed at the wheel while two others with black stockings (being) over their faces jumped out and smashed the window of the shop with iron bars.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'While this was going on, Mr Taylor was upstairs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He and his staff began throwing furniture out of the window.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Chairs and tables went flying into the arcade.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One of the thieves was struck by a heavy statue, but he was too busy helping himself to diamonds to notice any pain.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The raid was all over in three minutes, for the men scrambled back into the car and it moved off at a fantastic speed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Just as it was leaving, Mr Taylor rushed out and ran after it throwing ashtrays and vases, but it was impossible to stop the thieves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They had got away with thousands of pounds worth of diamonds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l7',
    lesson: 7,
    title: 'Mutilated ladies',
    titleCn: '残钞鉴别组',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Has it ever happened to you?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Have you ever put your trousers in the washing machine and then remembered there was a large bank note in your back pocket?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When you rescued your trousers, did note in your back pocket?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When you rescued your trousers, did you find the note was whiter than white?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'People who live in Britain needn\'t despair when they made mistakes like this (and a lot of people do)!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Fortunately for them, the Bank of England has a team called Mutilated Ladies which deals with claims from people who fed their money to a machine or to their dog.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Dogs, it seems, love to chew up money!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'A recent case concerns Jane Butlin whose fiancé, John, runs a successful furniture business.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'John had very good day and put his wallet containing $3,000 into the microwave oven for safekeeping.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then he and Jane went horse-riding.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When they got home, Jane cooked their dinner in the microwave oven and without realizing it, cooked her fiancé\'s wallet as well.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Imagine their dismay when they found a beautifully-cooked wallet and notes turned to ash!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'John went to see his bank manager who sent the remains of wallet and the money to the special department of the Bank of England in Newcastle: the Mutilate Ladies!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They examined the remain and John got all his money back.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'So long as there\'s something to identify, we will give people their money back,\' said a spokeswoman for the Bank.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'Last year, we paid $1.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '5m on 21,000 claims.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Damaged bank notes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Queen\'s head appears on English bank notes, and \'lady\' refers to this.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l10',
    lesson: 10,
    title: 'The Loss of the Titanic',
    titleCn: '泰坦尼克号的沉没',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The great ship, Titanic, sailed forNew York from Southampton on April 10th, 1912.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She was carrying 1,316 passengers and a crew of 891.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even bymodern standards, the 46,000 ton Titanic was a colossal ship.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At that time, however, she was not only the largest ship that had ever been built, but was regarded as unsinkable, for she had sixteen watertight compartments.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even if two of these were flooded, she would still be able to float.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The tragic sinking of this great liner will always be remembered, for she went down on her first voyage with heavy loss of life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Four days after setting out, while the Titanic was sailing across the icy waters of the North Atlantic, a huge iceberg was suddenly spotted by a lookout.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After the alarm had been given, the great ship turned sharply to avoid a direct collision.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Titanic turned just in time, narrowly missing the immense wall of ice which rose over 100 feet out of the water beside her.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Suddenly, there was a slight trembling sound from below, and the captain went down to see what had happened.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The noise had been so faint that no one thought that the ship had been damaged.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Below, the captain realized to his horror that the Titanic was sinking rapidly, for five of her sixteen watertight compartments had already been flooded!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The order to abandon ship was given and hundreds of people plunged into the icy water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Asthere were not enough life-boats for everybody, 1,500 lives were lost.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l12',
    lesson: 12,
    title: 'Life on a Desert Island',
    titleCn: '荒岛生活',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Most of us have formed an unrealistic picture of life on a desert island.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We sometimes imagine a desert island to be a sort of paradise where the sun always shines.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Life there is simple and good.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ripe fruit falls from the trees and you never have to work.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The other side of the picture is quite the opposite.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Life on a desert island is wretched.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You either starve to death or live like Robinson Crusoe, waiting for a boat which never comes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Perhaps there is an element of truth in both these pictures, but few of us have had the opportunity to find out.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Two men who recently spent five days on a coral island wished they had stayed there longer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They were taking a badly damaged boat from the Virgin Islands to Miami to have it repaired.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'During the journey, their boat began to sink.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They quickly loaded a small rubber dinghy with food, matches, and tins of beer and rowed for a few miles across the Caribbean until they arrived at a tiny coral island.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There were hardly any trees on the island and there was no water, but this did not prove to be a problem.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The men collected rainwater in the rubber dinghy.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As they had brought a spear gun with them, they had plenty to eat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They caught lobster and fish every day，and, as one of them put it ‘ate like kings’.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When a passing tanker rescued them five days later, both men were genuinely sorry that they had to leave.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l13',
    lesson: 13,
    title: '‘It’s Only Me’',
    titleCn: '是我，别害怕',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'After her husband had gone to work.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Richards sent her children to school and went upstairs to her bedroom.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She was too excited to do any housework that morning, for in the evening she would be going to a fancy dress party with her husband.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She intended to dress up as a ghost and as she had made her costume the night before, she was impatient to try it on.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though the costume consisted only of a sheet, it was very effective.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After putting it on, Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Richards went downstairs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She wanted to find out whether it would be comfortable to wear.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Just as Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Richards was entering the dinning room, there was a knock on the front door.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She knew that it must be the baker.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She had told him to come straight in if ever she failed to open the door and to leave the bread on the kitchen table.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Not wanting to frighten the poor man, Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Richards quickly hid in the small storeroom under the stairs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She heard the front door open and heavy footsteps in the hall.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Suddenly the door of the storeroom was opened and a man entered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Richards realized that it must be the man from the Electricity Board who had come to read the meter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She tried to explain the situation, saying ‘It’s only me’, but it was too late.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The man let out a cry and jumped back several paces.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Richards walked towards him, he fled, slamming the door behind him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l19',
    lesson: 19,
    title: 'A Very Dear Cat',
    titleCn: '一只贵重的宝贝猫',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Kidnappers are rarely interested in animals, but they recently took considerable interest in Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Eleanor Ramsay’s cat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Eleanor Ramsay, a very wealthy old lady, has shared a flat with her cat, Rastus, for a great many years.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Rastus leads an orderly life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He usually takes a short walk in the evenings and is always home by seven o’clock.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One evening, however, he failed to arrive.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ramsay got very worried.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She looked everywhere for him but could not find him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Three days after Rastus’ disappearance, Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ramsay received an anonymous letter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The writer stated that Rastus was in safe hands and would be returned immediately if Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ramsay paid a ransom of £1,000.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ramsay was instructed to place the money in a cardboard box and to leave it outside her door.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At first, she decided to go to the police, but fearing that she would never see Rastus again -- the letter had made that quite clear -- she changed her mind.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She drew £1000 from her bank and followed the kidnapper’s instructions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The next morning, the box had disappeared but Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ramsay was sure that the kidnapper would keep his word.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sure enough, Rastus arrived punctually at seven o’clock that evening.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He looked very well, though he was rather thirsty, for he drank half a bottle of milk.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The police were astounded when Mrs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ramsay told them what she had done.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She explained that Rastus was very dear to her.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Considering the amount she paid, he was dear in more ways than one!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l21',
    lesson: 21,
    title: 'Daniel Mendoza',
    titleCn: '丹尼尔·门多萨',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Boxing matches were very popular in England two hundred years ago.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In those days, boxers fought with bare fists for prize money.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Because of this, they were known as ‘prizefighters’.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, boxing was very crude, for there were no rules and a prizefighter could be seriously injured or even killed during a match.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'One of the most colourful figures in boxing history was Daniel Mendoza, who was born in 1764.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The use of gloves was not introduced until 1860 when the Marquis of Queensberry drew up the first set of rules.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though he was technically a prizefighter, Mendoza did much to change crude prizefighting into a sport, for he brought science to the game.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In this day, Mendoza enjoyed tremendous popularity.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was adored by rich and poor alike.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Mendoza rose to fame swiftly after a boxing match when he was only fourteen years old.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This attracted the attention of Richard Humphries who was then the most eminent boxer in England.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He offered to train Mendoza and his young pupil was quick to learn.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In fact, Mendoza soon became so successful that Humphries turned against him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The two men quarrelled bitterly and it was clear that the argument could only be settled by a fight.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A match was held at Stilton where both men fought for an hour.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The public bet a great deal of money on Mendoza, but he was defeated.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mendoza met Humphries in the ring on a later occasion and he lost for a second time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was not until his third match in 1790 that he finally beat Humphries and became Champion of England.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Meanwhile, he founded a highly successful Academy and even Lord Byron became one of his pupils.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He earned enormous sums of money and was paid as much as £100 for a single appearance.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Despite this, he was so extravagant that he was always in debt.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After he was defeated by a boxer called Gentleman Jackson, he was quickly forgotten.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was sent to prison for failing to pay his debts and died in poverty in 1836.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l22',
    lesson: 22,
    title: 'By Heart',
    titleCn: '熟记台词',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Some plays are so successful that they run for years on end, In many ways, this is unfortunate for the poor actors who are required to go on repeating the same lines night after night.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One would expect them to know their parts by heart and never have cause to falter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Yet this is not always the case.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'A famous actor in a highly successful play was once cast in the role of an aristocrat who had been imprisoned in the Bastille for twenty years.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the last act, a gaoler would always come on to the stage with a letter which he would hand to the prisoner.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even though the noble was expected to read the letter at each performance, he always insisted that it should be written out in full.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'One night, the gaoler decided to play a joke on his colleague to find out if, after so many performances, he had managed to learn the contents of the letter by heart.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The curtain went up on the final act of the play and revealed the aristocrat sitting alone behind bars in his dark cell.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Just then, the gaoler appeared with the precious letter in his bands.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He entered the cell and presented the letter to the aristocrat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But the copy [he gave him] had not been written out in full as usual.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was simply a blank sheet of paper.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The gaoler looked on eagerly, anxious to see if his fellow actor had at last learnt his lines.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The noble stared at the blank sheet of paper for a few seconds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then, squinting his eyes, he said: ‘The light is dim.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Read the letter to me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '’ And he promptly handed the sheet of paper to the gaoler.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Finding that he could not remember a word of the letter either, the gaoler replied: ‘The light is indeed dim, sire.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I must get my glasses.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '’ With this, he hurried off the stage.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Much to the aristocrat’s amusement, the gaoler returned a few moments later with a pair of glasses and the usual copy of the letter which he proceeded to read to the prisoner.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l24',
    lesson: 24,
    title: 'A Skeleton in the Cupboard',
    titleCn: '家丑',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'We often read in novels how a seemingly respectable person or family has some terrible secret which has been concealed from strangers for years.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The English language possesses a vivid saying to describe this sort of situation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The terrible secret is called ‘a skeleton in the cupboard’.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At some dramatic moment in the story, the terrible secret becomes known and a reputation is ruined.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The reader’s hair stands on end when he reads in the final pages of the novel that the heroine, a dear old lady who had always been so kind to everybody, had, in her youth, poisoned every one of her five husbands.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'It is all very well for such things to occur in fiction.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To varying degrees, we all have secrets which we do not want even our closest friends to learn, but few of us have skeletons in the cupboard.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The only person I know [who has a skeleton in the cupboard] is George Carlton, and he is very pound of the fact.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'George studied medicine in his youth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Instead of becoming a doctor, however, he became a successful writer of detective stories.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I once spent an uncomfortable weekend which I shall never forget at his house.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'George showed me to the guestroom which, he said, was rarely used.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He told me to unpack my things and then come down to dinner.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After I had stacked my shirts and underclothes in two empty drawers, I decided to hang in the cupboard one of the two suits [I had brought] with me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I opened the cupboard door and then stood in front of it petrified.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A skeleton was dangling before my eyes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The sudden movement of the door made it sway slightly and it gave me the impression that it was about to leap out at me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Dropping my suit, I dashed downstairs to tell George.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This was worse than ‘a terrible secret’; this was a real skeleton!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But George was unsympathetic.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '‘Oh, that,’ he said with a smile as if he were talking about an old friend.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '‘That\'s Sebastian.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You forget that I was a medical student once upon a time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l26',
    lesson: 26,
    title: 'Wanted: a Large Biscuit Tin',
    titleCn: '征购大饼干筒',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'No one can avoid being influenced by advertisements.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Much as we may pride ourselves on our good taste, we are no longer free to choose the things we want, for advertising exerts a subtle influence on us.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In their efforts to persuade us to buy this or that product, advertisers have made a close study of human nature and have classified all our little weaknesses.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Advertisers discovered years ago that all of us love to get something for nothing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'An advertisement which begins with the magic word FREE can rarely go wrong.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'These days, advertisers not only offer free samples, but free cars, free houses, and free trips round the world as well.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They devise hundreds of competitions which will enable us to win huge sums of money.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Radio and television have made it possible for advertisers to capture the attention of millions of people in this way.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'During a radio programme, a company of biscuit manufacturers once asked listeners to bake biscuits and send them to their factory.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They offered to pay $2 a pound for the biggest biscuit baked by a listener.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The response to this competition was tremendous.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Before long, biscuits of all shapes and sizes began arriving at the factory.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One lady brought in a biscuit on a wheelbarrow.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It weighed nearly 500 pounds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A little later, a man came along with a biscuit which occupied the whole boot of his car.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'All the biscuits [that were sent] were carefully weighed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The largest was 713 pounds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It seemed certain that this would win the prize.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But just before the competition closed, a lorry arrived at the factory with a truly colossal biscuit which weighed 2,400 pounds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It had been baked by a college student who had used over 1,000 pounds of flour, 800 pounds of sugar, 200 pounds of fat, and 400 pounds of various other ingredients.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was so heavy that a crane had to be used to remove it from the lorry.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The manufacturers had to pay more money than they had anticipated, for they bought the biscuit from the student for $4,800.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l27',
    lesson: 27,
    title: 'Nothing to Sell and Nothing to Buy',
    titleCn: '不卖也不买',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'It has been said that everyone lives by selling something.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the light of this statement, teachers live by selling knowledge, philosophers () by selling wisdom and priests () by selling spiritual comfort.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though it may be possible to measure the value of material goods in terms of money, it is extremely difficult to estimate the true value of the services which people perform for us.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There are times when we would willingly give everything [we possess] to save our lives, yet we might grudge paying a surgeon a high fee for offering us precisely this service.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The conditions of society are such that skills have to be paid for in the same way that goods are paid for at a shop.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Everyone has something to sell.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Tramps seem to be the only exception to this general rule.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Beggars almost sell themselves as human being to arouse the pity of passers-by.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But real tramps are not beggars.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They have nothing to sell and require nothing from others.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In seeking independence, they do not sacrifice their human dignity.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A tramp may ask you for money, but he will never ask you to feel sorry for him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has deliberately chosen to lead the life [he leads] and is fully aware of the consequences.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He may never be sure where the next meal is coming from, but he is free from the thousands of anxieties which afflict other people.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'His few material possessions make it possible for him to move from place to place with ease.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By having to sleep in the open, he gets far closer to the world of nature than most of us ever do.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He may hunt, beg, or steal occasionally to keep himself alive; he may even, in times of real need, do a little work; but he will never sacrifice his freedom.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We often speak of tramps with contempt and put them in the same class as beggars, but how many of us can honestly say that we have not felt a little envious of their simple way of life and their freedom from care?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'in sth / doing sth ad.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'in return / reward of ad.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'with easy a.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'it has been said be aware of.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l29',
    lesson: 29,
    title: 'Funny or Not?',
    titleCn: '是否可笑？',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Whether we find a joke funny or not largely depends on where we have been brought up.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The sense of humour is mysteriously bound up with national characteristics.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A Frenchman, for instance, might find it hard to laugh at a Russian joke.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the same way, a Russian might fail to see anything amusing in a joke which would make an Englishman laugh to tears.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Most funny stories are based on comic situations.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In spite of national differences, certain funny situations have a universal appeal.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'No matter where you live, you would find it difficult not to laugh at, say, Charlie Chaplin’s early films.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, a new type of humour, which stems largely from America, has recently come into fashion.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is called ‘sick humour’.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Comedians base their jokes on tragic situations like violent death or serious accidents.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Many people find this sort of joke distasteful.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The following example of ‘sick humour’ will enable you to judge for yourself.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'A man [who had broken his right leg] was taken to hospital a few weeks before Christmas.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From the moment he arrived there, he kept on pestering his doctor to tell him when he would be able to go home.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He dreaded having to spend Christmas in hospital.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though the doctors did his best, the patient\'s recovery was slow.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On Christmas Day, the man still had his right leg in plaster.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He spent a miserable day in bed thinking of all the fun he was missing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The following day, however, the doctor consoled him by telling him that his chances of being able to leave hospital in time for New Year celebrationswere good.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The man took heart and, sure enough, on New Year’s Eve he was able to hobble along to a party.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To compensate for his unpleasant experiences in hospital, the man drank a little more than was good for him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the process, he enjoyed himself thoroughly and kept telling everybody how much he hated hospitals.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was still mumbling something about hospitals at the end of the party when he slipped on a piece of ice and broke his left leg.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l30',
    lesson: 30,
    title: 'The Death of a Ghost',
    titleCn: '幽灵之死',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'For years, villagers believed that Endley Farm was haunted.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The farm was owned by two brothers, Joe and Bert Cox.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They employed a few farmhands, but no one was willing to work there long.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Every time a worker gave up his job, he told the same story.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Farm labourers said that they always woke up to find that work had been done overnight.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Hay had been cut and cowsheds had been cleaned.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A farm worker, who stayed up all night, claimed to have seen a figure cutting corn in the moonlight.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In time, it became an accepted fact the Cox brothers employed a conscientious ghost that did most of their work for them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'No one suspected that there might be someone else on the farm who had never been seen.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This was indeed the case.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A short time ago, villagers were astonished to learn that the ghost of Endley had died.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Everyone went to the funeral, for the ‘ghost’ was none other than Eric Cox, a third brother who was supposed to have died as a young man.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After the funeral, Joe and Bert revealed a secret which they had kept for over forty years.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Eric had been the eldest son of the family.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He had been obliged to join the army during the first World War.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As he hated army life he decided to desert his regiment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When he learnt that he would be sent abroad, he returned to the farm and his father hid him until the end of the war.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Fearing the authorities, Eric remained in hiding after the war as well.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'His father told everybody that Eric had been killed in action.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The only other people who knew the secret were Joe and Bert.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They did not even tell their wives.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When their father died, they thought it their duty to keep Eric in hiding.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'All these years, Eric had lived as a recluse.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He used to sleep during the day and work at night, (being) quite unaware of the fact that he had become the ghost of Endley.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When he died, however, his brothers found it impossible to keep the secret any longer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l31',
    lesson: 31,
    title: 'A Lovable Eccentric',
    titleCn: '可爱的怪人',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'True eccentrics never deliberately set out to draw attention to themselves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They disregard social conventions without being conscious that they are doing anything extraordinary.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This invariably wins them the love and respect of others, for they add colour to the dull routine of everyday life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Up to the time of his death, Richard Colson was one of the most notable figures in our town.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was a shrewd and wealthy businessman, but the ordinary town folk hardly knew anything about this side of his life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was known to us all as Dickie and his eccentricity had become legendary long before he died.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Dickie disliked snobs intensely.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though he owned a large car, he hardly ever used it, preferring always to go on foot.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even when it was raining heavily, he refused to carry an umbrella.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One day, he walked into an expensive shop after having been caught in a particularly heavy shower.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He wanted to buy a £300 fur coat for his wife, but he was in such a bedraggled condition that an assistant refused to serve him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Dickie left the shop without a word and returned carrying a large cloth bag.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Asit was extremely heavy, he dumped it on the counter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The assistant asked him to leave, but Dickie paid no attention to him and requested to see the manager.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Recognizing who the customer was, the manager was most apologetic and reprimanded the assistant severely.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When Dickie was given the fur coat, he presented the assistant with the cloth bag.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It contained £300 in pennies.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He insisted on the assistant’s counting the money before he left -- 72,000 pennies in all!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On another occasion, he invited a number of important critics to see his private collection of modern paintings.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This exhibition received a great deal of attention in the press, for though the pictures were supposed to be the work of famous artists, they had in fact been painted by Dickie.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It took him four years to stage this elaborate joke simply to prove that critics do not always know what they are talking about.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l32',
    lesson: 32,
    title: 'A Lost Ship',
    titleCn: '一艘沉船',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The salvage operation had been a complete failure.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The small ship, the Elkor, which had been searching the Barents Sea for weeks, was on its way home.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A radio message [from the mainland] had been received by the ship’s captain instructing him to give up the search.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The captain knew that another attempt would be made later, for the sunken ship [he was trying to find] had been carrying a precious cargo of gold bullion.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Despite the message, the captain of the Elkor decided to try once more.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The sea bed was scoured with powerful nets and there was tremendous excitement on board when a chest was raised from the bottom.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though the crew were at first under the impression that the lost ship had been found, the contents of the sea-chest proved them wrong.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'What they had in fact found was a ship which had been sunk many years before.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The chest contained the personal belongings of a seaman, Alan Fielding.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There were books, clothing and photographs, together with letters which the seaman had once received from his wife.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The captain of the Elkor ordered his men to salvage as much as possible from the wreck.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Nothing of value was found, but the numerous items [which were brought to the surface] proved to be of great interest.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From a heavy gun that was raised, the captain realized that the ship must have been a cruiser.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In another sea-chest, which contained the belongings of a ship’s officer, there was an unfinished letter which had been written on March 14th, 1943.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The captain learnt from the letter that the name of the lost ship was the Karen.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '[The most valuable find of all] was the ship’s log book, parts of which it was still possible to read.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From this the captain was able to piece together all the information that had come to light.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Karen had been sailing in a convoy to Russia when she was torpedoed by an enemy submarine.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This was later confirmed by a naval official at the Ministry of Defence [after the Elkor had returned home].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'All the items that were found were sent to the War Museum.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l33',
    lesson: 33,
    title: 'A Day to Remember',
    titleCn: '难忘的一天',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'We have all experienced days when everything goes wrong.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A day may begin well enough, but suddenly everything seems to get out of control.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'What invariably happens is that a great number of things choose to go wrong at precisely the same moment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is as if a single unimportant event set up a chain of reactions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Let us suppose that you are preparing a meal and keeping an eye on the baby at the same time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The telephone rings and this marks the prelude to an unforeseen series of catastrophes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'While you are on the phone, the baby pulls the tablecloth off the table, smashing half your best crockery and cutting himself in the process.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You hang up hurriedly and attend to baby, crockery, etc.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Meanwhile, the meal gets burnt.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As if this were not enough to reduce you to tears, your husband arrives, unexpectedly bringing three guests to dinner.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Things can go wrong on a big scale as a number of people recently discovered in Parramatta, a suburb of Sydney.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'During the rush hour one evening two cars collided and both drivers began to argue.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The woman immediately behind the two cars happened to be a learner.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She suddenly got into a panic and stopped her car.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This made the driver following her brake hard.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'His wife was sitting beside him holding a large cake.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As she was thrown forward, the cake went right through the windscreen and landed on the road.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Seeing a cake flying through the air, a lorry driver who was drawing up alongside the car, pulled up all of a sudden.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The lorry was loaded with empty beer bottles and hundreds of them slid off the back of the vehicle and on to the road.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This led to yet another angry argument.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Meanwhile, the traffic piled up behind.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It took the police nearly an hour to get the traffic on the move again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the meantime, the lorry driver had to sweep up hundreds of broken bottles.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Only two stray dogs benefited from all this confusion, for they greedily devoured [what was left of the cake].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was just one of those days!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l37',
    lesson: 37,
    title: 'The Westhaven Express',
    titleCn: '开往威斯特海温的快车',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'We have learnt to expect that trains will be punctual.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After years of pre-conditioning, most of us have developed an unshakable faith in railway timetables.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ships may be delayed by storms; air flights may be cancelled because of bad weather; but trains must be on time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Only an exceptionally heavy snowfall might temporarily dislocate railway services.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is all too easy to blame the railway authorities when something does go wrong.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The truth is that when mistakes occur, they are more likely to be ours than theirs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'After consulting my railway timetable, I noted with satisfaction that there was an express train to Westhaven.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It went direct from my local station and the journey lasted a mere hour and seventeen minutes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When I boarded the train, I could not help noticing that a great many local people got on as well.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At the time, this did not strike me as odd.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I reflected that there must be a great many people besides myself who wished to take advantage of this excellent service.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Neither was I surprised when the train stopped at Widley, a tiny station a few miles along the line.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even a mighty express train can be held up by signals.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But when the train dawdled at station after station, I began to wonder.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It suddenly dawned on me that this express was not roaring down the line at ninety miles an hour, but barely chugging along at thirty.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One hour and seventeen minutes passed and we had not even covered half the distance.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I asked a passenger if this was the Westhaven Express, but he had not even heard of it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I determined to lodge a complaint as soon as we arrived.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Two hours later, I was talking angrily to the station master at Westhaven.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When he denied the train’s existence, I borrowed his copy of the timetable.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There was a note of triumph in my voice when I told him that it was there in black and white.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Glancing at it briefly, he told me to look again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A tiny asterisk conducted me to a footnote at the bottom of the page.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It said: ‘This service has been suspended.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l38',
    lesson: 38,
    title: 'The First Calender',
    titleCn: '最早的日历',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Future historians will be in a unique position when they come to record the history of our own times.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They will hardly know which facts to select from the great mass of evidence that steadily accumulates.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'What is more, they will not have to rely solely on the written word.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Films, gramophone records, and magnetic tapes will provide them with a bewildering amount of information.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They will be able, as it were, to see and hear us in action.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But the historian attempting to reconstruct the distant past is always faced with a difficult task.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He has to deduce what he can from the few scanty clues available.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even seemingly insignificant remains can shed interesting light on the history of early man.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Up to now, historians have assumed that calendars came into being with the advent of agriculture, for then man was faced with a real need to understand something about the seasons.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Recent scientific evidence seems to indicate that this assumption is incorrect.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Historians have long been puzzled by dots, lines and symbols which have been engraved on walls, bones, and the ivory tusks of mammoths.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The nomads who made these markings lived by hunting and fishing during the last Ice Age which began about 35,000 B.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'C.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'and ended about 10,000 B.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'C.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By correlating markings made in various parts of the world, historians have been able to read this difficult code.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They have found that it is connected with the passage of days and the phases of the moon.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is, in fact, a primitive type of calendar.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It has long been known that the hunting scenes depicted on walls were not simply a form of artistic expression.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They had a definite meaning, for they were as near as early man could get to writing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is possible that there is a definite relation between these paintings and the markings that sometimes accompany them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It seems that man was making a real effort to understand the seasons 20,000 years earlier than has been supposed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'came to do ①.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '② happened to do.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l40',
    lesson: 40,
    title: 'Who\'s Who',
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'It has never been explained why university students seem to enjoy practical jokes more than anyone else.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Students specialize in a particular type of practical joke: the hoax.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Inviting the fire brigade to put out a non-existent fire is a crude form of deception which no self-respecting student would ever indulge in.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Students often create amusing situations which are funny to everyone except the victims.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'When a student recently saw two workmen using a pneumatic drill outside his university, he immediately telephoned the police and informed them that two students dressed up as workmen were tearing up the road with a pneumatic drill.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As soon as he had hung up, he went over to the workmen and told them that if a policeman ordered them to go away, they were not to take him seriously.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He added that a student had dressed up as a policeman and was playing all sorts of silly jokes on people.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Both the police and the workmen were grateful to the student for this piece of advance information.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The student hid in an archway nearby where he could watch and hear everything that went on.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sure enough, a policeman arrived on the scene and politely asked the workmen to go away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When he received a very rude reply from one of the workmen, he threatened to remove them by force.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The workmen told him to do as he pleased and the policeman telephoned for help.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Shortly afterwards, four more policemen arrived and remonstrated with the workmen.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As the men refused to stop working, the police attempted to seize the pneumatic drill.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The workmen struggled fiercely and one of them lost his temper.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He threatened to call the police.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At this, the police pointed out ironically that this would hardly be necessary as the men were already under arrest.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Pretending to speak seriously, one of the workmen asked if he might make a telephone call before being taken to the station.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Permission was granted and a policeman accompanied him to a call box.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Only when he saw that the man was actually telephoning the police did he realize that they had all been the victims of a hoax.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l41',
    lesson: 41,
    title: 'Illusions of Pastoral Peace',
    titleCn: '宁静田园生活的遐想',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The quiet life of the country has never appealed to me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'City born and city bred, I have always regarded the country as something [you look at through a train window], or something you occasionally visit during the weekend.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Most of my friends live in the city, yet they always go into raptures at the mere mention of the country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though they extol the virtues of the peaceful life, only one of them has ever gone to live in the country and he was back in town within six months.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even he still lives under the illusion that country life is somehow superior to town life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He is forever talking about the friendly people, the clean atmosphere, the closeness to nature and the gentle pace of living.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Nothing can be compared, he maintains, with the first cockcrow, the twittering of birds at dawn, the sight of the rising sun glinting on the trees and pastures.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This idyllicadj.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'pastoraladj.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'scene is only part of the picture.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My friend fails to mention the long and friendless winter evenings which are interrupted only by an occasional visit to the local cinema -- virtually the only form of entertainment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He says nothing about the poor selection of goods in the shops, or about those unfortunate people who have to travel from the country to the city every day to get to work.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Why people are prepared to tolerate a four-hour journey each day for the dubious privilege of living in the country is beyond my ken.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They could be saved so much misery and expense if they chose to live in the city where they rightly belong.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'If you can do without the few pastoral pleasures of the country, you will find the city can provide you with the best that life can offer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You never have to travel miles to see your friends.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They invariably live nearby and are always available for an informal chat or an evening’s entertainment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some of my acquaintances in the country come up to town once or twice a year to visit the theatre as a special treat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For them this is a major operation which involves considerable planning.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As the play draws to its close, they wonder whether they will ever catch that last train home.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The city dweller never experiences anxieties of this sort.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The latest exhibitions, films, or plays are only a short bus ride away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Shopping, too, is always a pleasure.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There is so much variety that you never have to make do with second best.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Country people run wild when they go shopping in the city and stagger home loaded with as many of the necessities of life as they can carry.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Nor is the city without its moments of beauty.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There is something comforting about the warm glow shed by advertisements on cold wet winter nights.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Few things could be more impressive than the peace that descends on deserted city streets at weekends when the thousands that travel to work every day are tucked away in their homes in the country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It has always been a mystery to me why city dwellers, who appreciate all these things, obstinately pretend that they would prefer to live in the country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l42',
    lesson: 42,
    title: 'Modern Cavemen',
    titleCn: '现代洞穴人',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Cave exploration, or potholing, asit has come to be known, is a relatively new sport.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Perhaps it is the desire for solitude or the chance of [making an unexpected discovery] that lures men down to the depths of the earth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is impossible to give a satisfactory explanation for a potholer’s motives.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For him, caves have the same peculiar fascination which high mountains have for the climber.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They arouse instincts which can only be dimly understood.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Exploring really deep caves is not a task for the Sunday afternoon rambler.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Such undertakings require the precise planning and foresight of military operations.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It can take as long as eight days to rig up rope ladders and to establish supply bases before a descent can be made into a very deep cave.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Precautions of this sort are necessary, for it is impossible to foretell the exact nature of the difficulties which will confront the potholer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The deepest known cave in the world is the Gouffre Berger near Grenoble.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It extends to a depth of 3,723 feet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This immense chasm has been formed by an underground stream which has tunneled a course through a flaw in the rocks.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The entrance to the cave is on a plateau in the Dauphiné Alps.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Asit is only six feet across, it is barely noticeable.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The cave might never have been discovered (if) had not the entrance been spotted by the distinguished French potholer, Berger.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sinceits discovery, it has become a sort of potholers’ Everest.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though a number of descents have been made, much of it still remains to be explored.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'A team of potholers recently went down the Gouffre Berger.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After entering the narrow gap on the plateau, they climbed down the steep sides of the cave until they came to a narrow corridor.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They had to edge their way along this, sometimes wading across shallow streams, or swimming across deep pools.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Suddenly they came to a waterfall which dropped into an underground lake at the bottom of the cave.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They plunged into the lake, and after loading their gear on an inflatable rubber dinghy, let the current carry them to the other side.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To protect themselves from the icy water, they had to wear special rubber suits.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At the far end of the lake, they came to huge piles of rubble which had been washed up by the water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In this part of the cave, they could hear an insistent booming sound [which they found] was caused by a small waterspout shooting down into a pool from the roof of the cave.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Squeezing through a cleft in the rocks, the potholers arrived at an enormous cavern, the size of a huge concert hall.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After switching on powerful arc lights, they saw great stalagmites -- some of them over forty feet high -- rising up like tree trunks to meet the stalactites suspended from the roof.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Round about, piles of limestone glistened in all the colours of the rainbow.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the eerie silence of the cavern, the only sound that could be heard was made by water which dripped continuously from the high dome above them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l50',
    lesson: 50,
    title: 'New Year Resolutions',
    titleCn: '新年的决心',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The New Year is a time for resolutions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mentally, at least, most of us could compile formidable lists of ‘do’s’ and ‘don’ts’.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The same old favorites recur year in year out with monotonous regularity.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We resolve to get up earlier each morning, eat less, find more time to play with the children, do a thousand and one jobs about the house, be nice to people we don’t like, drive carefully, and take the dog for a walk every day.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Past experience has taught us that certain accomplishments are beyond attainment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If we remain inveterate smokers, it is only because we have so often experienced the frustration that results from failure.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Most of us fail in our efforts at self-improvement because our schemes are too ambitious and we never have time to carry them out.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We also make the fundamental error of announcing our resolutions to everybody so that we look even more foolish when we slip back into bad old ways.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Aware of these pitfalls, this year I attempted to keep my resolutions to myself.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I limited myself to two modest ambitions: to do physical exercises every morning and to read more of an evening.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'An all-night party on New Year’s Eve provided me with a good excuse for not carrying outeither of these new resolutions on the first day of the year, but on the second, I applied myself assiduously to the task.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The daily exercises lasted only eleven minutes and I proposed to do them early in the morning before anyone had got up.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The self-discipline required to drag myself out of bed eleven minutes earlier than usual was considerable.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Nevertheless, I managed to creep down into the living room for two days before anyone found me out.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After jumping about on the carpet and twisting the human frame into uncomfortable positions, I sat down at the breakfast table in an exhausted condition.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was this that betrayed me.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The next morning the whole family trooped in to watch the performance.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'That was really unsettling, but I fended off the taunts and jibes of the family good-humouredly and soon everybody got used to the idea.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, my enthusiasm waned.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The time I spent at exercises gradually diminished.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Little by little the eleven minutes fell to zero.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By January 10th, I was back to where I had started from.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I argued that if I spent less time exhausting myself at exercises in the morning, I would keep my mind fresh for reading when I got home from work.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Resisting the hypnotizing effect of television, I sat in my room for a few evenings with my eyes glued to a book.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One night, however, feeling cold and lonely, I went downstairs and sat in front of the television pretending to read.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'That proved to be my undoing, for I soon got back to my old bad habit of dozing off in front of the screen.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I still haven’t given up my resolution to do more reading.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In fact, I have just bought a book entitled ‘How to Read a Thousand Words a Minute’.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Perhaps it will solve my problem, but I just haven’t had time to read it!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l54',
    lesson: 54,
    title: 'Instinct or Cleverness?',
    titleCn: '是本能还是机智？',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'We have been brought up to fear insects.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We regard them as unnecessary creatures that do more harm than good.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Man continually wages war on them, for they contaminate his food, carry diseases, or devour his crops.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They sting or bite without provocation; they fly uninvited into our rooms on summer nights, or beat against our lighted windows.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We live in dread not only of unpleasant insects like spiders or wasps, but of quiteadv.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'harmlessadj.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'ones [like moths].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '[Reading about them] increases our understanding without dispelling our fears.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Knowing that the industrious ant lives in a highly organized society does nothing to prevent us from being filled with revulsion when we find hordes of them crawling over a carefully prepared picnic lunch.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'No matter how much we like honey, or how much we have read about the uncanny sense of direction which bees possess, we have a horror of being stung.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Most of our fears are unreasonable, but they are impossible to erase.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At the same time, however, insects are strangely fascinating.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We enjoy reading about them, especially when we find that, like the praying mantis, they lead perfectly horrible lives.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We enjoy staring at them, entranced as they go about their business, unaware (we hope) of our presence.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Who has not stood in awe at the sight of a spider pouncing on a fly, or a column of ants triumphantly bearing home an enormous dead beetle?', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Last summer I spent days in the garden watching thousands of ants crawling up the trunk of my prize peach tree.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The tree has grown against a warm wall on a sheltered side of the house.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I am especially proud of it, not only because it has survived several severe winters, but because it occasionally produces luscious peaches.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'During the summer, I noticed that the leaves of the tree were beginning to wither.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Clusters of tiny insects called aphids were to be found on the underside of the leaves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They were visited by a large colony of ants whichobtained a sort of honey from them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I immediately embarked on an experiment which, even though it failed to get rid of the ants, kept me fascinated for twenty-four hours.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I bound the base of the tree with sticky tape, making it impossible for the ants to reach the aphids.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The tape was so sticky that they did not dare to cross it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For a long time, I watched them scurrying around the base of the tree in bewilderment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I even went out at midnight with a torch and noted with satisfaction (and surprise) that the ants were still swarming around the sticky tape without being able to do anything about it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I got up early next morning hoping to find that the ants had given up in despair.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Instead, I saw that they had discovered a new route.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They were climbing up the wall of the house and then on to the leaves of the tree.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I realized sadly that I had been completely defeated by their ingenuity.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The ants had been quick to find an answer to my thoroughly unscientific methods!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l59',
    lesson: 59,
    title: 'Possession Amassing and Collecting',
    titleCn: '收藏',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'People tend to amass possessions, sometimes without being aware of doing so.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Indeed they can have a delightful surprise when they find something useful which they did not knowthey owned.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Those [who never have to change house] become indiscriminate collectors of what can only be described as clutter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They leave unwanted objects in drawers, cupboards and attics for years, in the belief that they may one day need just those very things.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As they grow old, people also accumulate belongings for two other reasons, lack of physical and mental energy, both of which are essential in turning out and throwing away, and sentiment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Things owned for a long time are full of associations with the past, perhaps with relatives who are dead, and so they gradually acquire a value beyond their true worth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Some things are collected deliberately in the home in an attempt to avoid waste.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Among these I would list string and brown paper, kept by thrifty people when a parcel has been opened, to save buying these two requisites.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Collecting small items can easily become a mania.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I know someone who always cuts out from newspapers sketches of model clothes that she would like to buy, if she had the money.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As she is not rich, the chances that she will ever be able to afford such purchases are remote; but she is never sufficiently strong-minded to be able to stop the practice.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is a harmless habit, but it litters up her desk to such an extent that every time she opens it, loose bits of paper fall out in every direction.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Collecting as a serious hobby is quite different and has many advantages.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It provides relaxation for leisure hours, as just looking at one’s treasures is always a joy.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One does not have to go outside for amusement, since the collection is housed at home.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Whatever it consists of, stamps, records, first editions of books, china, glass, antique furniture, pictures, model cars, stuffed birds, toy animals, there is always something [to do] in connection with it, from finding the right place for the latest addition, to verifying facts in reference books.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This hobby educates one not only in the chosen subject, but also in general matters which have some bearing on it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There are also other benefits.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One wants to meet like-minded collectors, [to get advice, to compare notes, to exchange articles, to show off the latest find].', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'So one’s circle of friends grows.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Soon the hobby leads to travel, perhaps to a meeting in another town, possibly a trip abroad in search of a rare specimen, for collectors are not confined to any one country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Over the years, one may well become an authority on one’s hobby and will very probably be asked to give informal talks to little gatherings and then, if (he is) successful, to larger audiences.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In this way self-confidence grows, first from mastering a subject, then from being able to talk about it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Collecting, by occupying spare time so constructively, makes a person contented, with no time for boredom.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'litter (up) quite different show off in political circles in connection with it about as to ad.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce3-l60',
    lesson: 60,
    title: 'The Importance of Punctuality',
    titleCn: '太早和太晚',
    keyArticle: true,
    level: 'NCE3',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Punctuality is a necessary habit in all public affairs of a civilized society.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Without it, nothing could ever be brought to a conclusion; everything would be in a state of chaos.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Onlyin a sparsely populated rural community is it possible to disregard it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In ordinary living there can be some tolerance of unpunctuality.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The intellectual, who is working on some abstruse problem, has everything coordinated and organized for the matter in hand.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He is therefore forgiven, if (he is) late for a dinner party.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But people are often reproached for unpunctuality when their only fault is cutting things fine.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is hard for energetic, quick-minded people to waste time, so they are often tempted to finish a job before setting out to keep an appointment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If no accidents occur on the way, like punctured tyres, diversions of traffic, sudden descent of fog, they will be on time.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They are often more industrious, useful citizens than those who are never late.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The over-punctual can be as much a trial to others as the unpunctual.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The guest who arrives half an hour too soon is the greatest nuisance.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some friends of my family had this irritating habit.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The only thing to dowas to ask them to come half an hour later than the other guests.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then they arrived just when we wanted them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'If you are catching a train, it is always better [to be comfortably early]than even a fraction of a minute too late.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Although being early may mean wasting a little time, this will be less than (it will be) if you miss the train and have to wait an hour or more for the next one; and you avoid the frustration of arriving at the very moment when the train is drawing out of the station and being unable to get on it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'An even harder situation is to be on the platform in good time for a train and still to see it go off without you.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Such an experience befell a certain young girl the first time [she was travelling alone].', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'She entered the station twenty minutes before the train was due, since her parents had impressed upon her that it would be unforgivable to miss it and cause the friends with whom she was going to stay to make two journeys to meet her.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She gave her luggage to a porter and showed him her ticket.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To her horror he said that she was two hours too soon.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She felt in her handbagfor the piece of paper on which her father had written down all the details of the journey and gave it to the porter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He agreed that a train did come into the station at the time on the paper and that it did stop, but only to take on water, not passengers.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The girl asked to see a timetable, feeling sure that her father could not have made such a mistake.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The porter went to fetch one and arrived back with the stationmaster, who produced it with a flourish and pointed out a microscopic ‘o’ beside [the time of the arrival of the train] at his station; this little ‘o’ indicated that the train only stopped for water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Just as that moment the train came into the station.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The girl, tears streaming down her face, begged to be allowed to slip into the guard’s van.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But the stationmaster was adamant: rules could not be broken.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And she had to watch that train disappear towards her destination while she was left behind.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'due feel for.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'work on sth/doing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'be a trial to sb due to; have sth done 1.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '2.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '3.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'take on.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '← get onthe matter/job in hand as much A as B ad.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'if (he is) late for a dinner party impress sth on/upon sb We’ll resolve the Taiwan issue with peaceful means when (it is) ever possible, with force when (it is) necessary.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l1',
    lesson: 1,
    tag: 'C1',
    title: 'Finding fossil man',
    titleCn: '发现化石人',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'ROBIN PLACE Finding fossil man',
    original: {
    paragraphs: [
      [
        { text: 'We can read of things that happened 5,000 years ago in the Near East, where people first learned to write.', translation: '我们从书籍中可读到5,000 年前近东发生的事情，那里的人最早学会了写字。但直到现在,世界上有些地方，人们还不会书写。 他们保存历史的唯一办法是将历史当作传说讲述，由讲述人一代接一代地将史实描述为传奇故事口传下来。人类学家过去不清楚如今生活在太平洋诸岛上的波利尼西亚人的祖先来自何方，当地人的传说却告诉人们：其中一部分是约在2,000年前从印度尼西亚迁来的。 但是，和我们相似的原始人生活的年代太久远了，因此，有关他们的传说既使有如今也失传了。于是，考古学家们既缺乏历史记载，又无口头传说来帮助他们弄清最早的“现代人”是从哪里来的。 然而， 幸运的是，远古人用石头制作了工具，特别是用燧石，因为燧石较之其他石头更容易成形。他们也可能用过木头和兽皮，但这类东西早已腐烂殆尽。石头是不会腐烂的。因此，尽管制造这些工具的人的骨头早已荡然无存，但远古时代的石头工具却保存了下来。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But there are some parts of the world where even now people cannot write.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The only way that they can preserve their history is to recount it as sagas -- legends handed down from one generation of story tellers to another.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'These legends are useful because they can tell us something about migrations of people who lived long ago, but none could write down what they did.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Anthropologists wondered where the remote ancestors of the Polynesian peoples now living in the Pacific Islands came from.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The sagas of these people explain that some of them came from Indonesia about 2,000 years ago.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'But the first people who were like ourselves lived so long ago that even their sagas, if they had any, are forgotten.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'So archaeologists have neither history nor legends to help them to find out where the first \'modern men\' came from.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Fortunately, however, ancient men made tools of stone, especially flint, because this is easier to shape than other kinds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They may also have used wood and skins, but these have rotted away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Stone does not decay, and so the tools of long ago have remained when even the bones of the men who made them have disappeared without trace.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l2',
    lesson: 2,
    tag: 'C2',
    title: 'Spare that spider',
    titleCn: '不要伤害蜘蛛',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
        paragraphs: [
      [
        { text: 'Why, you may wonder, should spiders be our friends?', translation: '你可能会觉得奇怪， 蜘蛛怎么会是我们的朋友呢？因为它们能消灭那么多的昆虫，其中包括一些人类的大敌，要不是人类受一些食虫动物的保护，昆虫就会使我们无法在地球上生活下去，昆虫会吞食我们的全部庄稼，杀死我们的成群的牛羊。我们要十分感谢那些吃昆虫的鸟和兽，然而把它们所杀死的昆虫全部加在一起也只相当于蜘蛛所消灭的一小部分。此外，蜘蛛不同于其他食虫动物，它们丝毫不危害我们和我们的财物。  许多人认为蜘蛛是昆虫，但它们不是昆虫，甚至与昆虫毫无关系。人们几乎一眼就能看出二者的差异，因为蜘蛛都是8条腿，而昆虫的腿从不超过6条。  有多少蜘蛛在为我们效力呢？一位研究蜘蛛的权威对英国南部一块草坪上的蜘蛛作了一次调查。他估计每英亩草坪里有225万多只蜘蛛。这就是说，在一个足球场上约有600万只不同种类的蜘蛛。蜘蛛至少有半年在忙于吃昆虫。它们一年中消灭了多少昆虫，我们简直无法猜测，它们是吃不饱的动物，不满意一日三餐。据估计，在英国蜘蛛一年里所消灭昆虫的重量超过这个国家人口的总重量。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Because they destroy so many insects, and insects include some of the greatest enemies of the human race.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Insects would make it impossible for us to live in the world; they would devour all our crops and kill our flocks and herds, if it were not for the protection we get from insect-eating animals.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We owe a lot to the birds and beasts who eat insects but all of them put together kill only a fraction of the number destroyed by spiders.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Moreover, unlike some of the other insect eaters, spiders never do the least harm to us or our belongings.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Spiders are not insects, as many people think, nor even nearly related to them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One can tell the difference almost at a glance, for a spider always has eight legs and an insect never more than six.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'How many spiders are engaged in this work on our behalf?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One authority on spiders made a census of the spiders in a grass field in the south of England, and he estimated that there were more than 2,250,000 in one acre; that is something like 6 million spiders of different kinds on a football pitch.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Spiders are busy for at least half the year in killing insects.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is impossible to make more than the wildest guess at how many they kill, but they are hungry creatures, not content with only three meals a day.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It has been estimated that the weight of all the insects destroyed by spiders in Britain in one year would be greater than the total weight of all the human beings in the country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'T.H.GILLESPIE Spare that spider from The Listener', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },

  vocabulary: [
    { word: 'beast', pos: 'n.', meaning: '野兽', phonetic: '/bi:st/' },
    { word: 'census', pos: 'n.', meaning: '统计数字', phonetic: '/\'sensəs/' },
    { word: 'acre', pos: 'n.', meaning: '英亩', phonetic: '/\'eikə/' },
    { word: 'content', pos: 'adj.', meaning: '满足的', phonetic: '/\'kɔntent, kən\'tent/' }
  ],
}
const articleNce4L3: Article = {

    id: 'nce4-l3',
    lesson: 3,
    tag: 'C3',
    title: 'Matterhorn man',
    titleCn: '马特霍恩山区人',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'WALTER UNSWORTH Matterhorn Man',
    original: {
    paragraphs: [
      [
        { text: 'Modern alpinists try to climb mountains by a route which will give them good sport, and the more difficult it is, the more highly it is regarded.', translation: '现代登山运动员总想找一条能够给他们带来运动乐趣的路线来攀登山峰。他们认为， 道路愈艰险愈带劲儿。然而，在登山运动的初期，全然不是这种情况。早期登山者所寻找的是通往山顶的最方便的途径，因为顶峰特别是前人未曾到过的顶峰 -- 才是他们寻求的目标。确实，在探险中他们经常遇到惊心动魄的困难和危险，而他们装备之简陋足以使现代登山者一想起来就胆战心惊。但是，他们并非故意寻求这种刺激，他们只有一个目标，唯一的目标 -- 顶峰！ 我们今天很难想像昔日的登山先驱们是多么艰苦。除了泽曼特和夏蒙尼等一两个很快出了名的地方外，阿尔卑斯山山区的小村几乎全是高山环抱、与世隔绝的穷乡僻壤。那里的小客栈一般都很肮脏，而且跳蚤猖獗。 食物是当地的干酪和通常存放了一年之久的面包，人们就着劣酒吞下这种食物。山谷里常常没有小客栈，登山者只好随遇而安。有时同当地牧师 （他通常和他的教民一样穷）住在一起，有时同牧羊人或制乳酪的人住在一起。无论住在哪儿，情况都一样：肮脏、贫穷，极其不舒适。对于过惯了一顿饭吃7道菜、睡亚麻细布床单的人来说，变换一下生活环境来到阿尔卑斯山山区，那一定是很艰难的。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the pioneering days, however, this was not the case at all.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The early climbers were looking for the easiest way to the top, because the summit was the prize they sought, especially if it had never been attained before.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is true that during their explorations they often faced difficulties and dangers of the most perilous nature, equipped in a manner which would make a modern climber shudder at the thought, but they did not go out of their way to court such excitement.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They had a single aim, a solitary goal -- the top!', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'It is hard for us to realize nowadays how difficult it was for the pioneers.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Except for one or two places such as Zermatt and Chamonix, which had rapidly become popular, Alpine villages tended to be impoverished settlements cut off from civilization by the high mountains.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Such inns as there were generally dirty and flea-ridden; the food simply local cheese accompanied by bread often twelve months old, all washed down with coarse wine.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Often a valley boasted no inn at all, and climbers found shelter wherever they could -- sometimes with the local priest who was usually as poor as his parishioners, sometimes with shepherds or cheese-makers.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Invariably the background was the same: dirt and poverty, and very uncomfortable.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For men accustomed to eating seven-course dinners and sleeping between fine linen sheets at home, the change to the Alps must have been very hard indeed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l4',
    lesson: 4,
    tag: 'C4',
    title: 'Seeing hands',
    titleCn: '能看见东西的手',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'ERIC DE MAUNY Seeing hands from The Listener',
    original: {
        paragraphs: [
      [
        { text: 'Several cases have been reported in Russia recently of people who can read and detect colours with their fingers, and even see through solid doors and walls.', translation: '俄罗斯最近报导了几个事例，有人能用手指看书识字和辨认颜色，甚至能透过厚实的门和墙看到东西。 其中有一例谈到有一个名叫维拉.彼托洛娃的11岁学生。她的视力与常人一样，但她还能用皮肤的不同部位辨认东西，甚至看穿坚实的墙壁。是她父亲首先发现她这一功能的。一天，维拉走进父亲的办公室，偶然把手放在一个锁着的保险柜的门上，她突然问父亲为什么把这么多的旧报纸锁在柜子里，还说了报纸捆扎的情况。 维拉的特异功能引起了她家附近乌里扬诺夫斯克城一个科研单位的注意。4月里，俄罗斯卫生部一个特别委员会对她进行了一系列的测试。在这些测试中，她能隔着不透明的屏幕读报纸。更为奇怪的是，她把肘部在儿童玩的“罗托”纸牌上移动一下，便能说出印在纸牌上的数字和颜色。还有一次，她穿着长筒袜子和拖鞋，能用脚步识别出藏在地毯下面的一幅画的轮廓和颜色。其他实验表明，她的膝盖和双肩有类似的感觉能力，在所有这些实验中，维拉的双眼都是蒙着的。如果不蒙上双眼她的皮肤就不再具有识别物体的能力。这是千真万确的。同时还发现，尽管她能用手指识别东西，但她的手一旦弄湿，这种功能便会立即消失。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One case concerns an eleven-year-old schoolgirl, Vera Petrova, who has normal vision but who can also perceive things with different parts of her skin, and through solid walls.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This ability was first noticed by her father.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One day she came into his office and happened to put her hands on the door of a locked safe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Suddenly she asked her father why he kept so many old newspapers locked away there, and even described the way they were done up in bundles.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Vera\'s curious talent was brought to the notice of a scientific research institute in the town of Ulyanovsk, near where she lives, and in April she was given a series of tests by a special commission of the Ministry of Health of the Russian Federal Republic.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'During these tests she was able to read a newspaper through an opaque screen and, stranger still, by moving her elbow over a child\'s game of Lotto she was able to describe the figures and colours printed on it; and, in another instance, wearing stockings and slippers, to make out with her foot the outlines and colours of a picture hidden under a carpet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Other experiments showed that her knees and shoulders had a similar sensitivity.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'During all these tests Vera was blindfold; and, indeed, except when blindfold she lacked the ability to perceive things with her skin.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was also found that although she could perceive things with her fingers this ability ceased the moment her hands were wet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'ERIC DE MAUNY Seeing hands from The Listener Another Russian girl,Rosa Kuleshova,reads blindfold.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
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

    id: 'nce4-l6',
    lesson: 6,
    tag: 'C7',
    title: 'The sports spirit',
    titleCn: '体育精神',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'GEORGE ORWELL The sporting spirit',
    original: {
    paragraphs: [
      [
        { text: 'I am always amazed when I hear people saying that sport creates goodwill between the nations, and that if only the common peoples of the world could meet one another at football or cricket, they would have no inclination to meet on the battlefield.', translation: '当我听人们说体育运动可创造国家之间的友谊，还说各国民众若在足球场或板球场上交锋，就不愿在战场上残杀的时候，我总是惊愕不已。一个人即使不能从具体的事例（例如1936年的奥林匹克运动会）了解到国际运动比赛会导致疯狂的仇恨，也可以从常理中推断出结论。 现在开展的体育运动几乎都是竞争性的。参加比赛就是为了取胜。如果不拚命去赢，比赛就没有什么意义了。 在乡间的草坪上，当你随意组成两个队，并且不涉及任何地方情绪时，那才可能是单纯的为了娱乐和锻炼而进行比赛。可是一量涉及到荣誉问题，一旦你想到你和某一团体会因为你输而丢脸时，那么最野蛮的争斗天性便会激发起来。即使是仅仅参加过学校足球赛的人也有种体会。在国际比赛中，体育简直是一场模拟战争。但是，要紧的还不是运动员的行为，而是观众的态度，以及观众身后各个国家的态度。面对着这些荒唐的比赛，参赛的各个国家会如痴如狂，甚至煞有介事地相信 -- 至少在短期内如此 -- 跑跑、跳跳、踢踢球是对一个民族品德素质的检验。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even if one didn\'t know from concrete examples (the 1936 Olympic Games, for instance) that international sporting contests lead to orgies of hatred, one could deduce it from general principles.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Nearly all the sports practised nowadays are competitive.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You play to win, and the game has little meaning unless you do your utmost to win.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On the village green, where you pick up sides and no feeling of local patriotism is involved, it is possible to play simply for the fun and exercise: but as soon as the question of prestige arises, as soon as you feel that you and some larger unit will be disgraced if you lose, the most savage combative instincts are aroused.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Anyone who has played even in a school football match knows this.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At the international level, sport is frankly mimic warfare.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But the significant thing is not the behaviour of the players but the attitude of the spectators: and, behind the spectators, (the attitude) of the nations.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But the significant thing is not the behaviour of the players but the attitude of the spectators: and, behind the spectators, of the nations who work themselves into furies over these absurd contests, and seriously believe -- at any rate for short periods -- that running, jumping and kicking a ball are tests of national virtue.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l7',
    lesson: 7,
    tag: 'C9',
    title: 'Bats',
    titleCn: '蝙蝠',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'MAURICE BURTON Curiosities of animal life',
    original: {
    paragraphs: [
      [
        { text: 'Not all sounds made by animals serve as language, and we have only to turn to that extraordinary discovery of echo-location in bats to see a case in which the voice plays a strictly utilitarian role.', translation: '动物发出的声音不都是用作语言交际。我们只要看一看蝙蝠回声定位这一极不寻常的发现，就可以探究一下声音在什么情况下有绝对的实用价值。 要透彻理解这句话的意义，我们应先回顾一下人类最近的几项发明。大家都知道，在墙壁或山腰附近发出的喊声，就会听到回声。固体障碍物越远。回声返回所用时间就越长。敲打船体所发了的声音会从海底传回来，测出回声间隔的时间，便可算出该处海洋的深度。这样就产生了目前各种船舶上普遍应用的回声探测仪。任何固体者反射声音，反射的声音因物体的大小和性质的不同而不同。鱼群也反射声音。从测定海深到测定鱼群，这一进展比较容易。根据经验和改进了的仪器，不仅能够确定鱼群的位置，而且可以根据鱼群回声的特点分辨出是鲱鱼、鳕鱼，这是人们所熟悉的其他鱼。 人们发现，某些蝙蝠能发出尖叫声，并能通过回声来确定并躲开障碍物，或找到它们赖以为生的昆虫。蝙蝠这种回声定位常常可与雷达相比较，其原理是相似的。', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'To get a full appreciation of what this means we must turn first to some recent human inventions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Everyone knows that if he shouts in the vicinity of a wall or a mountainside, an echo will come back.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The further off this solid obstruction, the longer time will elapse for the return of the echo.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A sound made by tapping on the hull of a ship will be reflected from the sea bottom, and by measuring the time interval between the taps and the receipt of the echoes, the depth of the sea at that point can be calculated.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'So was born the echo-sounding apparatus, now in general use in ships.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Every solid object will reflect a sound, varying according to the size and nature of the object.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A shoal of fish will do this.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'So it is a comparatively simple step from locating the sea bottom to locating a shoal of fish.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'With experience, and with improved apparatus, it is now possible not only to locate a shoal but to tell if it is herring, cod, or other well-known fish, by the pattern of its echo.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'It has been found that certain bats emit squeaks and by receiving the echoes, they can locate and steer clear of obstacles -- or locate flying insects on which they feed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This echo-location in bats is often compared with radar, the principle of which is similar.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l8',
    lesson: 8,
    title: 'Trading Standards',
    titleCn: '贸易标准',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Chickens slaughtered in the United States, claim officials in Brussels, are not fit to grace European tables.', translation: '布鲁塞尔的官员说，在美国屠宰的鸡不适于用来装点欧洲的餐桌。不，美国人说，我们的家禽很好，只是我们使用了另一种清洗方式。当前，是各国管理条例上的差异，而不是关税阻碍了发达国家之间的贸易。并不仅仅是农民在抱怨。一把符合欧洲联盟安全标准的电动剃须刀必须得到美国检测人员的认可，方可在美国市场上销售；而美国制造的透析仪也要得到欧盟的首肯才能进入欧洲市场。 碰巧在欧洲使用安全的剃须刀不大可能使美国人触电身亡，因此，大西洋两岸的企业都在问，当一套测试可以解决问题时，为什么需要两套呢？政治家在原则上同意了， 因此，美国和欧洲一直在寻求达成协议，以便为许多产品取消双重检查。他们希望尽早达成协议，为5月28日举行的美国和欧洲贸易的最高通级会议作准备。然谈判代表持乐观态度，但协议细节如此复杂，他们所面临的困难很可能使他们无法取得一致。 为什么呢？困难之一是起草这些协议。美国人很愿意就医疗器械的标准达成一个协议，然后推敲出不同的合同，用以涵盖 -- 比如说 -- 电子产品和药品的生产。欧洲人遵循优良的大陆传统，则希望就普遍的原则取得一致，而这些原则适用于许多不同产品，同时可能延伸到其它国家。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'No, say the Americans: our fowl are fine, we simply clean them in a different way.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'These days, it is differences in national regulations, far more than tariffs, that put sand in the wheels of trade between rich countries.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is not just farmers who are complaining.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'An electric razor that meets the European Union\'s safety standards must be approved by American testers before it can be sold in the United States, and an American-made dialysis machine needs the EU\'s okay before it hits the market in Europe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'As it happens, a razor that is safe in Europe is unlikely to electrocute Americans.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'So, ask businesses on both sides of the Atlantic, why have two lots of tests where one would do?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Politicians agree, in principle, so America and the EU have been trying to reach a deal which would eliminate the need to double-test many products.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They hope to finish in time for a trade summit between America and the EU on May 28th.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Although negotiators are optimistic, the details are complex enough that they may be hard-pressed to get a deal at all.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Why?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One difficulty is to construct the agreements.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Americans would happily reach one accord on standards for medical devices and then hammer out different pacts covering, say, electronic goods and drug manufacturing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The EU -- following fine continental traditions -- wants agreement on general principles, which could be applied to many types of products and perhaps extended to other countries.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l11',
    lesson: 11,
    tag: 'C14',
    title: 'How to grow old',
    titleCn: '如何安度晚年',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'BERTRAND RUSSELL How to grow old from Portraits from Memory',
    original: {
    paragraphs: [
      [
        { text: 'Some old people are oppressed by the fear of death.', translation: '有些老年人因为怕死而感到烦恼。青年人有这种感觉是情有可原的。有理由害怕自己会死在战场上的年轻人，想到自己被剥夺了生活所能给予的最美好的东西时，感到痛苦，这是可以理解的。可是老年人已经饱尝了人间的甘苦，一切能做的都做了，如果怕死，就有点儿可怜又可鄙。克服怕死的最好办法 -- 至少在我看来是这样 -- 就是逐渐使自己的兴趣更加广泛，逐渐摆脱个人狭小的圈子，直到自我的围墙一点一点地倒塌下来，自己的生活慢慢地和整个宇宙的生活融合在一起。个人的存在应该像一条河流，开始很小，被紧紧地夹在两岸中间，接着热情奔放地冲过巨石，飞下瀑布。然后河面渐渐地变宽，两岸后撤，河水流得平缓起来，最后连绵不断地汇入大海，毫无痛苦地失去了自我的存在。上了年纪的人这样看待生命，就不会有惧怕死亡的心情了，因为自己关心的一切事件都会继续下去。 再者，随着精力的衰退，老年人的疲惫会增长，有长眠的愿望未尝不是一件好事情，我希望工作到死为止，明白了有人会继续我的未竟事业，想到能做的事都做了，也就坦然了。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the young there is a justification for this feeling.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Young men who have reason to fear that they will be killed in battle may justifiably feel bitter in the thought that they have been cheated of the best things that life has to offer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But in an old man who has known human joys and sorrows, and has achieved whatever work it was in him to do, the fear of death is somewhat abject and ignoble.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The best way to overcome it -- so at least it seems to me -- is to make your interests gradually wider and more impersonal, until bit by bit the walls of the ego recede, and your life becomes increasingly merged in the universal life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'An individual human existence should be like a river -- small at first, narrowly contained within its banks, and rushing passionately past boulders and over waterfalls.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Gradually the river grows wider, the banks recede, the waters flow more quietly, and in the end, without any visible break, they become merged in the sea, and painlessly lose their individual being.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The man who, in old age, can see his life in this way, will not suffer from the fear of death, since the things he cares for will continue.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And if, with the decay of vitality, weariness increases, the thought of rest will be not unwelcome.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I should wish to die while still at work, knowing that others will carry on what I can no longer do, and content in the thought that what was possible has been done.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l13',
    lesson: 13,
    title: 'The search for oil',
    titleCn: '探寻石油',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'The deepest holes of all are made for oil, and they go down to as much as 25,000 feet.', translation: '在所有洞穴中，为寻找石油所钻出的洞是最深的，这些洞可深达25,000英尺。但是，我们不必像开采其他矿藏那样，把人送到地下去把石油取出。这些洞只不过是一些钻孔，直径不到1英尺。我是专门搞石油的，寻找石油比其他任何采矿业对改进钻探作的贡献都要大。当确定钻孔地点后，我们就在那里竖起一个井架。井架必须很高，因为它像一个巨型滑轮组。我们必须把很长的钻杆一节节地钻入地下，然后再从地下拉出来。钻杆顶部安装的发动机带动钻杆旋转，它的底部装有钻头。 地质学家需要知道钻头已以到达什么样的岩层，因此时常要用芯钻头取样。这种钻头能切割一段光滑的圆柱形岩石，从中能看出所钻透的地层。一旦到达油层，石油就会由于地下巨大的压力流到地面上来，这种巨大的压力来自地下天然气或水。这种压力必须加以控制，我们让泥桨顺着钻杆向下循环，用这种方法来控制压力。我们尽量避免使用陈旧天真的喷井方法，那样会浪费石油和天然气。我们要让石油留在井下，直到我们能用一种有控制的方法把它引上来为止。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But we do not need to send men down to get the oil out, as we must with other mineral deposits.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The holes are only borings, less than a foot in diameter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'T.F.GASKELL The Search for the Earth\'s Minerals from Discovery', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'My particular experience is largely in oil, and the search for oil has done more to improve deep drilling than any other mining activity.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When it has been decided where we are going to drill, we put up at the surface an oil derrick.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It has to be tall because it is like a giant block and tackle, and we have to lowervt.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It has to be tall because it is like a giant block and tackle, and we have to lower into the ground and haul out of the ground great lengths of drill pipe which are rotated by an engine at the top and are fitted with a cutting bit at the bottom.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The geologist needs to know what rocks the drill has reached, so every so often a sample is obtained with a coring bit.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It cuts a clean cylinder of rock, from which can be seen the strata the drill has been cutting through.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Once we get down to the oil, it usually flows to the surface because great pressure, either from gas or water, is pushing it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This pressure must be under control, and we control it by means of the mud which we circulate down the drill pipe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We endeavour to avoid the old, romantic idea of a gusher, which wastes oil and gas.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We want it to stay down the hole until we can lead it off in a controlled manner.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l15',
    lesson: 15,
    tag: 'C18',
    title: 'Secrecy in industry',
    titleCn: '工业中的秘密',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Two factors weigh heavily against the effectiveness of scientific research in industry.', translation: '有两个因素严重地妨碍工业中科学研究的效率：一是科研工作中普遍存在的保密气氛；二是研究人员缺乏个人自由。任何一项研究都涉及到保密，那些从事科研的人员自然受到了限制。他们不能和其他国家、其他大学、甚至往往不能与本公司的其他部门的同行们进行有效的接触。保密程度自然差别很大。某些大公司进行的研究属于一般和基础的研究，因此不保密对他们才有利。然而，依赖这种研究的很多工艺程序是在完全保密的情况下进行的，直到可以取得专利权的阶段为止。更多的工艺过程根本就不会取得专利权，而是作为秘方保存着。在这化学工业方面尤为突出。同物理和机械工业相比，化学工业中偶然发现的机会要多得多。有时，保密竟达到了这样的程度，即连研究工作的整个性质都不准提及。比如，很多公司向图书馆借阅科技书籍时感到困难，因为它们不愿让人家记下它们公司的名字和借阅的某一本书。他们生怕别的公司的情报人员据此摸到他们可能要从事的某项科研项目。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One is the general atmosphere of secrecy in which it is carried out, the other the lack of freedom of the individual research worker.In so far as any inquiry is a secret one, it naturally limits all those engaged in carrying it out from effective contact with their fellow scientists either in other countries or in universities, or even, often enough, in other departments of the same firm.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In so far as any inquiry is a secret one, it naturally limits [all those engaged in carrying it out] from effective [contact with their fellow scientists] either in other countries or in universities, or even, often enough, in other departments of the same firm.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The degree of secrecy naturally varies considerably.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some of the bigger firms are engaged in researches which are of such general and fundamental nature that it is a positive advantage to them not to keep them secret.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Yet a great many processes depending on such research are sought for with complete secrecy until the stage at which patents can be taken out.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even more processes are never patented at all but kept as secret processes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This applies particularly to chemical industries, where chance discoveries play a much larger part than they do in physical and mechanical industries.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sometimes the secrecy goes to such an extent that the whole nature of the research cannot be mentioned.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Many firms, for instance, have great difficulty in obtaining technical or scientific books from libraries because they are unwilling to have their names entered as having taken out such and such a book, for fear the agents of other firms should be able to trace the kind of research they are likely to be undertaking.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l16',
    lesson: 16,
    tag: 'C20',
    title: 'The modern city',
    titleCn: '现代城市',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'ALEXIS CARREL Man, the Unknown',
    original: {
    paragraphs: [
      [
        { text: 'In the organisation of industrial life the influence of the factory upon the physiological and mental state of the workers has been completely neglected.', translation: '在工业生活的组织中，工厂对工人的生理和精神状态的影响完全被忽视了。现代工业的基本概念是：以最低成本获取最多产品，为的是让某个个人或某一部分人尽可能多地赚钱。现代工业发展起来了，却根本没想到操作机器的人的本质。工厂把一种人为的生存方式强加给工人，却不顾及这种生存方式给工人及其后代带来的影响。大城市的建设毫不关心我们。摩天大楼完全是按这样的需要修建的：每平方英尺地皮取得最大收入和向租房人提供使他满意的办公室和住房。这样就导致了许多摩天大厦拔地而起，大厦内众多的人挤地一起。文明人喜欢这样一种生活方式。在享受自己住宅的舒适和庸俗的豪华时，却没有意识到被剥夺了生活所必需的东西。大得吓人的高楼和阴暗狭窄的街道组成了今日现代化的城市。街道上充斥着汽油味和有毒气体，出租汽车、卡车、公共汽车的噪音刺耳难忍，络绎不绝的人群挤来挤去。显然，现代化的城市不是这居民的利益而规划的。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Modern industry is based on the conception of the maximum production at lowest cost, in order that an individual or a group of individuals may earn as much money as possible.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It has expanded without any idea of the true nature of the human beings who run the machines, and without giving any consideration to the effects produced on the individuals and on their descendants by the artificial mode of existence imposed by the factory.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The great cities have been built with no regard for us.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The shape and dimensions of the skyscrapers depend entirely on the necessityn.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The shape and dimensions of the skyscrapers depend entirely on the necessity of obtaining the maximum income per square foot of ground, and of offering to the tenants offices and apartments that please them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This caused the construction of gigantic buildings where too large masses of human beings are crowded together.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Civilised men like such a way of living.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'While they enjoy the comfort and banal luxury of their dwelling, they do not realise that they are deprived of the necessities of life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The modern city consists of monstrous edifices and of dark, narrow streets full of petrol fumes and toxic gases, torn by the noise of the taxicabs, lorries and buses, and thronged ceaselessly by great crowds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Obviously, it has not been planned for the good of its inhabitants.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l18',
    lesson: 18,
    tag: 'C22',
    title: 'Porpoises',
    titleCn: '海豚',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'RALPH NADING HILL Window in the Sea',
    original: {
    paragraphs: [
      [
        { text: 'There has long been a superstition among mariners that porpoises will save drowning men by pushing them to the surface, or protect them from sharks by surrounding them in defensive formation.', translation: '长期以来，海员中流传着一种迷信的说法，认为海豚会把快要淹死的人托到水面，救人性命；或在人们周围列队保护，使他们免遭鲨鱼伤害。海洋摄影室的生物学家指出，无论海豚多么聪明，认为它们有救人的动机可能是错误的。当它们偶尔把一个失去知觉的人推到岸边时，更大的可能是出于好奇或游戏，就像它们追逐被船首犁开的浪花一样。1928年，有人拍摄到了海豚像海狸一样把浸透水的床垫推上岸的情景。正如报道中所说，如果海豚保护人不受鲨鱼侵害，那么它们可能是出于好奇；而鲨鱼可能是闻到了可以美食一顿的香味。海豚和鲨鱼是天然仇敌，双方可能随之发生搏斗，搏斗结果是海豚赶走或咬死鲨鱼。 海豚对凡是活的东西都感兴趣，不管是鸟、是鱼，还是野兽。它们经常追逐海龟，海龟则温顺地忍受着各种侮辱。一只小海豚特别喜欢用鼻子把海龟推到水面，然后像滑水板一样把海龟从水池的这一边推到那一边。几乎每天都可以看到一只小海豚把鼻子顶入一只300磅重的海龟的硬壳下面，拼命地把它翻过来。这并非易事，可能需要两只海豚合伙干才行。在另一场游戏中，当海龟游过水族馆时，第一只海豚从上方猛扑下去，用腹部撞击龟壳。这一下子把海龟撞下去好几英尺。海龟刚恢复平衡，第二只海豚又冲过来猛击一下。这只海龟最终被撞到池底。此时的海龟，只要能站起来就满足了，但它刚站起来，就被一只海豚击倒。海龟终于屈服了，将4条腿缩进壳内。游戏到此结束。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Marine Studio biologists have pointed outadv.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Marine Studio biologists have pointed out that, however intelligent they may be, it is probably a mistake to credit dolphins with any motive of lifesaving.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On the occasions when they have pushed to shore an unconscious human being they have much more likely done it out of curiosity or for sport, as in riding the bow waves of a ship.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In 1928 some porpoises were photographed working like beavers to push ashore a waterlogged mattress.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If, as has been reported, they have protected humans from sharks, it may have been because curiosity attracted them and because the scent of a possible meal attracted the sharks.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Porpoises and sharks are natural enemies.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is possible that upon such an occasion a battle ensued, with the sharks being driven away or killed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Whether it be bird, fish or beast, the porpoise is intrigued with anything that is alive.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They are constantly after the turtles, who peacefully submit to all sorts of indignities.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One young calf especially enjoyed raising a turtle to the surface with his snout and then shoving him across the tank like an aquaplane.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Almost any day a young porpoise may be seen trying to turn a 300-pound sea turtle over by sticking his snout under the edge of his shell and pushing up for dear life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This is not easy, and may require two porpoises working together.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In another game, as the turtle swims across the oceanarium, the first porpoise swoops down from above and butts his shell with his belly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This knocks the turtle down several feet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He no sooner recovers his equilibrium than the next porpoise comes along and hits him another crack.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Eventually the turtle has been butted all the way down to the floor of the tank.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He is now satisfied merely to try to stand up, but as soon as he does so a porpoise knocks him flat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The turtle at last gives up by pulling his feet under his shell and the game is over.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'have pointed out that.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'that in that/but that/except that, outadv.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'be after.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '； for life ， for dear life a.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l21',
    lesson: 21,
    title: 'William S. Hart and the Early "Western" Film',
    titleCn: '威廉·S·哈特与早期的西部片',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'CARL FOREMAN Virtue and a Fast Gun from The Observer',
    original: {
    paragraphs: [
      [
        { text: 'William S.', translation: '威廉.S.哈特大概是美国西部电影明星中的佼佼者。他和加里.古柏、约翰.韦恩不同，他只在西部电影中扮演角色。在1914年至1924年期间，他首屈一指，独霸影坛。正是他创造了西部电影的基调，即在他自己的拍摄的影片中他所塑造的主人公形象：被认为是坏人的好人，出人意料的高尚的逃犯，诚实却遭陷害的牛仔或因流言蜚语蒙受嫌疑的司法官。总之，主人公是一个自相矛盾，又与他的拓荒环境相矛盾的人物。 哈特与大部分同时代在好莱坞的演员不同，他确实了解西部早期拓荒生活的一些情况。作为一个孩子他曾在西部生活过，当时西部拓荒生活正在消失。他塑造的英雄人物深深地扎根于他本人的记忆和经历之中，也扎根于有关已经消失的拓荒生活的历史和神话之中。虽然在美国历史上没有任何时期或地区像西部拓荒时期那样被荒谬地浪漫主义化了，但神话和事实至少在某一个舞台上共存，也就是存在于个人与渐渐闯入的文明这两者的冲突之中。 习惯与大自然和印第安人作斗争以求生存的拓荒者被政客、银行家和商人搞得晕头转向，最后被圈地、尖律我外来的清规戒律所击败。哈特扮演的被误为坏人的好人总是一个局外人，总是一个被剥夺继承权的人。如果他认为在进行过程中有必要枪击一个司法官或抢劫一个银行，他的早期观众很容易接受，觉得应该原谅他，特别是当哈特最后战胜了前来进攻的印第安人时，观众更能原谅他。 生活在20世纪20年代的观众认为，逃到一个即使艰苦但比较简朴的时代中去是件愉快的事，我们今天仍有这种感觉。如今，不宣而战的侵略、战争、虚伪、诈骗、无政府状态以及即将临头的毁灭成了我们日常生活的一部分，我们都希望有一个赖以生存的行为准则。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Hart was, perhaps, the greatest of all Western stars, for unlike Gary Cooper and John Wayne he appeared in nothing but Westerns.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From 1914 to 1924 he was supreme and unchallenged.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was Hart who created the basic formula of the Western film, and devised the protagonist he played in every film he made, the good-bad man, the accidental-noble outlaw, or the honest-but-framed cowboy, or the sheriff made suspect by vicious gossip; in short, the individual in conflict with himself and his frontier environment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Unlike most of his contemporaries in Hollywood, Hart actually knew something of the old West.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He had lived in it as a child when it was already disappearing, and his hero was firmly rooted in his memories and experiences, and in both the history and the mythology of the vanished frontier.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And although no period or place in American history has been more absurdly romanticized, myth and reality did join hands in at least one arena, the conflict between the individual and encroaching civilization.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Men accustomed to struggling for survival against the elements and Indians were bewildered by politicians, bankers and businessmen, and unhorsed by fences, laws and alien taboos.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Hart\'s good-bad man was always an outsider, always one of the disinherited, and if he found it necessary to shoot a sheriff or rob a bank along the way, his early audiences found it easy to understand and forgive, especially when it was Hart who, in the end, overcame the attacking Indians.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Audiences in the second decade of the twentieth century found it pleasant to escape to a time when life, though hard, was relatively simple.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We still do; living in a world in which undeclared aggression, war, hypocrisy, chicanery, anarchy and impending immolation are part of our daily lives, we all want a code to live by.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l22',
    lesson: 22,
    tag: 'C27',
    title: 'Knowledge and progress',
    titleCn: '知识和进步',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Why does the idea of progress loom so large in the modern world?', translation: '为什么进步这个概念在现代世界显得如此突出？无疑是因为有一种特殊的进步实际上正在我们周围发生，而且变得越来越明显。虽然人类有智力和道德上没有得到普遍提高，但在知识积累方面却取得了巨大的进步。人一旦能用语言同别人交流思想，知识的积累便开始了。随着书写的发明，又迈进了一大步，因为这样一来，知识不仅能交流，而且能储存了。藏书使教育成为可能，而教育反过来又丰富了藏书，因为知识的增长遵循着一种“滚雪球”的规律。印刷术的发明又大大提高了知识增长的速度。所有这些发展都比较缓慢，而随着科学的到来，增长的速度才突然加快。于是，知识便开始有系统有计划地积累起来。涓涓细流汇成小溪，小溪现已变成了奔腾的江河。而且，新知识一旦获得，便得到实际应用。所谓“现代文明”并不是人的天性平衡发展的结果，而是积累起来的知识应用到实际生活中的结果。现在人类面临的问题是：用这些知识去做什么？正像人们常常指出的，知识是一把双刃刀，可以用于造福，也可以用来为害。人们现在正漫不经心地把知识用于这两个方面，例如：炮兵利用科学毁坏人的身体、而外科医生就在附近用科学抢救被炮兵毁坏的人体，还有什么情景比这更可怕、更怪诞的吗？我们不得不严肃地问问我们自己：随着日益增长的知识的力量，如果我们继续利用知识的这种双重性，将会发生什么样的情况呢？', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Surely because progress of a particular kind is actually taking place around us and is becoming more and more manifest.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Although mankind has undergone no general improvement in intelligence or morality, it has made extraordinary progress in the accumulation of knowledge.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Knowledge began to increase as soon as the thoughts of one individual could be communicated to another by means of speech.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'With the invention of writing, a great advance was made, for knowledge could then be not only communicated but also stored.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Libraries made education possible, and education in its turn added to libraries: the growth of knowledge followed a kind of compound interest law, which was greatly enhanced by the invention of printing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'All this was comparatively slow until, with the coming of science, the tempo was suddenly raised.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then knowledge began to be accumulated according to a systematic plan.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The trickle became a stream; the stream has now become a torrent.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Moreover, as soon as new knowledge is acquired, it is now turned to practical account.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'What is called \'modern civilization\' is not the result of a balanced development of all man\'s nature, but of accumulated knowledge applied to practical life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The problem now facing humanity is: What is going to be done with all this knowledge?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As is so often pointed out, knowledge is a two-edged weapon which can be used equally for good or evil.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is now being used indifferently for both.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Could any spectacle, for instance, be more grimly whimsical than that of gunners using science to shatter men\'s bodies while, close at hand, surgeons use it to restore them?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We have to ask ourselves very seriously what will happen if this twofold use of knowledge, with its ever-increasing power, continues.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l24',
    lesson: 24,
    tag: 'C29',
    title: 'Beauty',
    titleCn: '美',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'A young man sees a sunset and, unable to understand or to express the emotion that it rouses in him, concludes that it must be the gateway to a world that lies beyond.', translation: '一个年轻人看到日落，由于无法理解和表达日落在他心中唤起的激情，便得出结论：日落处想必是通往遥远世界的大门。无论是谁，在强烈感受到美的时刻，心中都不禁油生一种遐想：我们似乎瞥见从另一个世界射向我们的一线光芒，那个世界不仅不同于我们这个世界，而且由于美感的强烈感染，在某些方面比我们这个世界更美好。虽然这光芒令人眼花缭乱，但它确实给予我们一种不曾经历和无法想象的美感和静谧的启示。这种美感和静谧是我们无法描述的，因为我们发明的语言是用来描述这个世界的含义，不能随便拿来去描述另一个世界。 不可否认，一切伟大的艺术都具有使人遐想到进入天外世界的魅力。在某种状态下，大自然也有这种魅力。六月蔚蓝的天空总使人遥想一个更加蔚蓝的苍穹；美丽的落日总会引起一个更加绚丽的景象未及饱览便一闪即逝，并在消逝中给人留下不可名状的渴望和惆怅。如果这个世界不只是一个拙劣的恶作剧，如果人生不只是群星寒光中平凡的一闪，如果存在不只是对神秘事物的一种空虚的笑声，如果某种玄妙事物的暗示不是消化不良引起的邪恶情绪，也不是魔鬼为了捉弄我们，使我们发狂而送给我们的邪念，一句话，如果美有某种意义的话，我们千万不要去阐明它的意义。如果我瞥见了只可意会不可言传的事物，企图把它说出来，那是不明智的；对于我们不理解的事物，我们也不应该去赋予它某种意义。用对我们人类有意义的词解释美是没有意义的。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is difficult for any of us in moments of intense aesthetic experience to resist the suggestion that we are catching a glimpse of a light that shines down to us from a different realm of existence, different and, because the experience is intensely moving, in some way higher.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And, though the gleams blind and dazzle, yet do they convey a hint of beauty and serenity greater than we have known or imagined.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Greater too than we can describe; for language, which was invented to convey the meanings of this world, cannot readily be fitted to the uses of another.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'In some moods, Nature shares it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There is no sky in June so blue that it does not point forward to a bluer, no sunset so beautiful that it does not waken the vision of a greater beauty, a vision which passes before it is fully glimpsed, and in passing leaves an indefinable longing and regret.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But, if this world is not merely a bad joke, life a vulgar flare amid the cool radiance of the stars, and existence an empty laugh braying across the mysteries; if these intimations of a something behind and beyond are not evil humour born of indigestion, or whimsies sent by the devil to mock and madden us.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If, in a word, beauty means something, yet we must not seek to interpret the meaning.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If we glimpse the unutterable, it is unwise to try to utter it, nor should we seek to invest with significance that which we cannot grasp.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'That all great art has this power of suggesting a world beyond is undeniable.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l28',
    lesson: 28,
    tag: 'C34',
    title: 'Patients and doctors',
    titleCn: '病人与医生',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'KENNETH WALKER Patients and doctors',
    original: {
    paragraphs: [
      [
        { text: 'This is a sceptical age, but although our faith in many of the things in which our forefathers fervently believed has weakened, our confidence in the curative properties of the bottle of medicine remains the same as theirs.', translation: '这是一个怀疑一切的时代，可是虽然我们对我们祖先笃信的许多事物已不太相信，我们对瓶装药品疗效的信心仍与祖辈一样坚定。卫生部门的年度药费上升到了天文数字，并且目前尚无停止上升的迹象，这个事实证实了现代人对药物的依赖。在医院门诊部看病的大多数人觉得，如果不能带回一些看得见、摸得着的药物，如一瓶药水，一盒药丸、一小瓶药膏回家的话，就没算得到了充分的治疗。负责门诊的医生也非常乐意为前来看病的人提供他们想要得到的药物，病人要什么就给什么，没有比这样处理病人更快的方法了。因为卫生部门的大多数医生超负荷工作，所以没有多少时间提出一些既费时而又不受人欢迎的忠告，如注意饮食、生活有规律，需要克服坏习惯等等，结果就是把瓶药、盒药、罐药开给看病的人而完事大吉。 并不只是那些无知和没受过良好教育的人才迷信药瓶子。据说托马斯.卡莱尔有过这么一件事：他听说朋友亨利.泰勒病了，就立刻跑去看他，衣袋里装上了他妻子不舒服时吃剩下的一瓶药。卡莱尔不知道药瓶子里装的是什么药，不知道他的朋友得的是什么病，也不知道妻子以前得的是什么病，只知道一种药对一种病有好处，肯定对另一种病也会有好处。想到能对朋友有所帮助，他感到很欣慰，于是急急忙忙来到了亨利.泰勒的家里，他的朋友是否接受了他的药物治疗，历史没有记载，但很可能接受了。服药的最大优点是：除了暂时忍受一下令人作呕的味道外，对服药人别无其他要求。这也正是病人对医生的要求 -- 病要治好，但不要太麻烦。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This modern faith in medicines is proved by the fact that the annual drug bill of the Health Services is mounting to astronomical figures and shows no signs at present of ceasing to rise.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The majority of the patients attending the medical out-patients departments of our hospitals feel that they have not received adequate treatment unless they are able to carry home with them some tangible remedy in the shape of a bottle of medicine, a box of pills, or a small jar of ointment, and the doctor in charge of the department is only too ready to provide them with these requirements.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There is no quicker method of disposing of patients than by giving them what they are asking for, and since most medical men in the Health Services are overworked and have little time for offering time-consuming and little-appreciated advice on such subjects as diet, right living, and the need for abandoning bad habits etc., the bottle, the box, and the jar are almost always granted them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: ', the bottle, the box, and the jar] are almost always granted them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Nor is it only the ignorant and ill-educated person who has such faith in the bottle of medicine.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is recounted of Thomas Carlyle that when he heard of the illness of his friend, Henry Taylor, he went off immediately to visit him, carrying with him in his pocket what remained of a bottle of medicine formerly prescribed for an indisposition of Mrs. Carlyle\'s.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Carlyle was entirely ignorant of what the bottle in his pocket contained, of the nature of the illness from which his friend was suffering, and of what had previously been wrong with his wife, but a medicine that had worked so well in one form of illness would surely be of equal benefit in another, and comforted by the thought of the help he was bringing to his friend, he hastened to Henry Taylor\'s house.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'History does not relate whether his friend accepted his medical help, but in all probability he did.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The great advantage of taking medicine is that it makes no demands on the taker beyond that of putting up for a moment with a disgusting taste, and that is what all patients demand of their doctors -- to be cured at no inconvenience to themselves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l30',
    lesson: 30,
    tag: 'C36',
    title: 'Exploring the sea-floor',
    titleCn: '海底勘探',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'Our knowledge of the oceans a hundred years ago was confined to the two-dimensional shape of the sea surface and the hazards of navigation presented by the irregularities in depth of the shallow water close to the land.', translation: '100年前，我们只知道海洋是二维平面形的，以及靠近陆地浅水区的深浅不一能给航行带来危险。无边无际的海洋深邃而又神秘，凡是稍稍想过大海海底的人大概都会认为海底是平坦的。1839年，詹姆斯.克拉克.罗斯爵士曾测得海水深度超过2,400英寻；但直到1869年，皇家学会用英国“豪猪”号舰艇进行了几次巡航后，才在大西洋测得一个海水深度，同时能过挖掘海底，取得了研究海底的首批样品。此后不久，英国著名的“挑战者”号舰艇对海底的那次考察，把对海床的研究确立为一个值得一流物理学家和地质学家从事的研究课题，铺设海底电缆的热潮很快证实了“挑战者”号的观察结果：海洋中很多地方可深达两三英里，水下特征差异极大。 现在已有足够的水深测量数据来绘制一张大西洋洋底地形图，而且我对海底地形的千变万化也有了一定的了解。既然海洋覆盖着地球的大部分表面，因此完全有理由把海床看作地壳的基本模壳，上面附加着大陆以及岛屿和海洋的其他形态。大陆是崎岖不平的高地，高出辽阔的海洋海底近三英里。从海岸线向大海延伸几英里到几百英里的区域是大陆架慢坡，从地质学上来说，它是大陆的一部分。大陆和海洋的真正分界线是在陡破脚下。 大陆架慢坡一般是从差不多100英寻水深的地方开始的，一直延伸到几百英里远深达2,500至3,500的地方，那里才是真正的海底。坡度平均约为1/30，但其中包括陡峭的、乃至垂直的峭壁和沉积物覆盖的缓和的阶梯地带，在这个地带的低处是很长的一段尾沙地段，基本上可以断定这个地段是大陆块体上侵蚀下来的物质被水冲到深水处形成的。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The open sea was deep and mysterious, and anyone who gave more than a passing thought to the bottom confines of the oceans probably assumed that the sea bed was flat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sir James Clark Ross had obtained a sounding of over 2,400 fathoms in 1839, but it was not until 1869, when H.M.S.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'M.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'S.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Porcupine was put at the disposal of the Royal Society for several cruises, that a series of deep soundings was obtained in the Atlantic and the first samples were collected by dredging the bottom.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Shortly after this the famous H.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'M.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'S.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Challenger expedition established the study of the sea-floor as a subject worthy of the most qualified physicists and geologists.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A burst of activity associated with the laying of submarine cables soon confirmed the challenger\'s observation that many parts of the ocean were two to three miles deep, and the existence of underwater features of considerable magnitude.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Today, enough soundings are available to enable a relief map of the Atlantic to be drawn and we know something of the great variety of the sea bed\'s topography.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Since the sea covers the greater part of the earth\'s surface, it is quite reasonable to regard the sea floor as the basic form of the crust of the earth, with, superimposed upon it, the continents, together with the islands and other features of the oceans.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The continents form rugged tablelands which stand nearly three miles above the floor of the open ocean.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From the shore line, out a distance which may be anywhere from a few miles to a few hundred miles, runs the gentle slope of the continental shelf, geologically part of the continents.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The real dividing line between continents and oceans occurs at the foot of a steeper slope.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'This continental slope usually starts at a place somewhere near the 100-fatheom mark and in the course of a few hundred miles reaches the true ocean floor at 2,500-3,500 fathoms.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The slope averages about 1 in 30. but contains steep, probably vertical, cliffs, and gentle sediment-covered terraces, and near its lower reaches there is a long tailing-off which is almost certainly the result of material transported out to deep water after being eroded from the continental masses.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l32',
    lesson: 32,
    tag: 'C39',
    title: 'Galileo reborn',
    titleCn: '伽利略的复生',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'MICHAEL HOSKIN Galileo Reborn from The Listener',
    original: {
        paragraphs: [
      [
        { text: 'In his own lifetime Galileo was the centre of violent controversy; but the scientific dust has long since settled, and today we can see even his famous clash with the Inquisition in something like its proper perspective.', translation: '伽利略在世时是激烈论战的中心。但是，自他逝世以来，那场科学上的纷争早已平息了下来，甚至他和宗教法庭的著名冲突，我们今天也能正确如实地看待。但是相比之下，对于科学史家来说，伽利略只是在现代才变成了一个新的难题。 令人高兴的是，过去对伽利略的看法并不复杂。他首先是个实验工作者，他蔑视亚里士多德学派的偏见和空洞的书本知识。他向自然界而不是向古人提出问题，并大胆地得出结论。他是第一个把望远镜对准天空的人，观察到的论据足以把亚里士多德和托勒密一起推翻。他就是那个曾经爬上比萨斜塔，从塔顶向下抛掷各种重物的人；他是那个使球体沿斜面向下滚动，然后将多次实验结果概括成著名的自由落体定律的人。 但是，对那个时代的深化了解，尤其是以科学家革命中哲学潜流的新意识为依据，进一步仔细研究，就会极大地改变对伽利略的看法。今天，虽然已故的伽利略继续活在许多通俗读物中，但在科学史家中间，一个新的更加复杂的伽利略形象出现了。与此同时，我们对伽利略的反对派的同情也有所增加。伽利略用望远镜所作的观察确实是不朽的，这些观察当时引起人们极大的兴趣，具有重要的理论意义，并充分显示出了仪表和仪器的潜在力量。但是，如果我们想到，使用一架倍数有限的望远镜需要长期的经验和对自己仪器的熟悉程度，那么我们怎么能去责备观察了天空但没有看到伽利略所看到的东西的那些人呢？某位哲学家曾拒绝使用伽利略的望远镜去观察天空；到了19世纪40年代，有人硬把罗斯勋爵高倍望远镜观测到的螺旋状星云说成是磨镜工留下的磨痕。难道反对伽利略的哲学家比诋毁罗斯勋爵造谣者应受到更大的谴责吗？如果我们回想一下伽利略之前几个世纪期间，曲面镜一直是一种用于产生幻影而不是产生真象的把戏装置，那么我们就会原谅那些当时把伽利略观察到的木星卫星说成是伽利略用他的小望远镜变出来的人们，何况一片曲面镜就可歪曲自然，那么伽利略的两片曲面镜对自然的歪曲又该多大呢？', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But, in contrast, it is only in modern times that Galileo has become a problem child for historians of science.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The old view of Galileo was delightfully uncomplicated.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was, above all, a man who experimented: who despised the prejudices and book learning of the Aristotelians, who put his questions to nature instead of to the ancients, and who drew his conclusions fearlessly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He had been the first to turn a telescope to the sky, and he had seen their evidence enough to overthrow Aristotle and Ptolemy together.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was the man who climbed the Leaning Tower of Pisa and dropped various weights from the top, who rolled balls down inclined planes, and then generalized the results of his many experiments into the famous law of free fall.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But a closer study of the evidence, supported by a deeper sense of the period, and particularly by a new consciousness of the philosophical undercurrents in the scientific revolution, has profoundly modified this view of Galileo.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Today, although the old Galileo lives on in many popular writings, among historians of science a new and more sophisticated picture has emerged.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At the same time our sympathy for Galileo\'s opponents has grown somewhat.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'His telescopic observations are justly immortal; they aroused great interest at the time, they had important theoretical consequences, and they provided a striking demonstration of the potentialities hidden in instruments and apparatus.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But can we blame those who looked and failed to see what Galileo saw, if we remember that to use a telescope at the limit of its powers calls for long experience and intimate familiarity with one\'s instrument?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Was the philosopher who refused to look through Galileo\'s telescope more culpable than those who alleged that the spiral nebulae observed with Lord Rosse\'s great telescope in the 1840s were scratches left by the grinder?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We can perhaps forgive those who said the moons of Jupiter were produced by Galileo\'s spyglass if we recall that in his day, as for centuries before, curved glass was the popular contrivance for producing not truth but illusion, untruth; and if a single curved glass would distort nature, how much more would a pair of them?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'MICHAEL HOSKIN Galileo Reborn from The Listener', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
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

    id: 'nce4-l33',
    lesson: 33,
    tag: 'C41',
    title: 'Education',
    titleCn: '教育',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'JULIUS E. LIPS The Origin of Things',
    original: {
    paragraphs: [
      [
        { text: 'Education is one of the key words of our time.', translation: '教育是我们这个时代的关键词之一。我们许多人都相信，一个没有受过教育的人，是逆境的牺牲品，被剥夺了20世纪的最优越的机会之一。现代国家深深懂得教育的重要性，对教育机构投资，收回的‘利息’便是培养出大批有知识的男女青年，这些人可能成为未来的栋梁。教育，以其教学周期如此精心地安排，并以教科书 -- 那些可以买到的智慧源泉 -- 予以强化，如果不受其惠，文明将会是个什么样子呢？ 至少，这些是可以肯定的：虽然我们还会有医生和牧师、律师和被告、婚姻和生育，但人们的精神面貌将是另一个样子。人们不会重视‘资料和数据’，而靠好记性、实用心理学与同伴相处的能力。如果我们的教育制度仿效没有书籍的古代教育，我们的学院将具有可以想象得出的最民主的形式了。在部落中，通过传统继承的知识为所有人共享，并传授给部落中的每一个成员。从这个意义上讲，人人受到的有关生活本领的教育是相等的。 这就是我们最进步的现代教育试图恢复的“平等起步”的理想状况。在原始文化中，寻求和接受传统教育的义务对全民都有约束力。因而没有“文盲”（如果这个字眼儿可以用于没有文字的民族的话）。而我们的义务教育成为法律在德国是在1642年，在法国是在1806年，在英国是在1876年。今天，在许多“文明” 国家里，义务教育迄今尚未实行。这说明，经过了多么漫长的时间之后，我们才认识到，有必要确保我们的孩子享有多少个世纪以来由‘少数幸运者’所积累起来的知识。 荒凉地区的教育不是钱的问题，所有的人都享有平等起步的权利。那里没有我们今天社会中的匆忙生活，而匆忙的生活常常妨碍个性的全面发展。荒凉地区的孩子无时无刻不在父母关怀下成长。因此，丛林和荒凉地区不知道什么叫“青少年犯罪”。人们没有必要离家谋生，所以不会产生孩子无人管的问题，也不存在父亲无力为孩子支付教育费用而犯难的问题。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A man without an education, many of us believe, is an unfortunate victim of adverse circumstances, deprived of one of the greatest twentieth-century opportunities.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Convinced of the importance of education, modern states \'invest\' in institutions of learning to get back \'interest\' in the form of a large group of enlightened young men and women who are potential leaders.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Education, with its cycles of instruction so carefully worked out, punctuated by textbooks -- those purchasable wells of wisdom - what would civilization be like without its benefits?', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'So much is certain: that we would have doctors and preachers, lawyers and defendants, marriages and births -- but our spiritual outlook would be different.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We would lay less stress on \'facts and figures\' and more on a good memory, on applied psychology, and on the capacity of a man to get along with his fellow-citizens.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If our educational system were fashioned after its bookless past we would have the most democratic form of \'college\' imaginable.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Among tribal people all knowledge inherited by tradition is shared by all; it is taught to every member of the tribe so that in this respect everybody is equally equipped for life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'It is the ideal condition of the \'equal start\' which only our most progressive forms of modern education try to regain.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In primitive cultures the obligation to seek and to receive the traditional instruction is binding to all.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There are no \'illiterates\' -- if the term can be applied to peoples without a script -- while our own compulsory school attendance became law in Germany in 1642, in France in 1806, and in England in 1876, and is still non-existent in a number of \'civilized\' nations.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This shows how long it was before we deemed it necessary to make sure that all our children could share in the knowledge accumulated by the \'happy few\' during the past centuries.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Education in the wilderness is not a matter of monetary means.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'All are entitled to an equal start.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There is none of the hurry which, in our society, often hampers the full development of a growing personality.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There, a child grows up under the ever-present attention of his parent; therefore the jungles and the savannahs know of no \'juvenile delinquency\'.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'No necessity of making a living away from home results in neglect of children, and no father is confronted with his inability to \'buy\' an education for his child.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'From: Julius E.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l34',
    lesson: 34,
    tag: 'C42',
    title: 'Adolescence',
    titleCn: '青春期',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'DOTID OFLUM Journey Through Adolescence',
    original: {
    paragraphs: [
      [
        { text: 'Parents are often upset when their children praise the homes of their friends and regard it as a slur on their own cooking, or cleaning, or furniture, and often are foolish enough to let the adolescents see that they are annoyed.', translation: '当家长听到孩子赞扬自己朋友的家时，总感到不安，认为孩子在嫌弃自家的饭菜、卫生、或家具，而且愚蠢地让孩子看出自己的烦恼。他们甚至责备孩子不忠，或者讲些小朋友家长的坏话。家长这种有失身份和孩子气的作法使青春期的孩子大为震惊，决心以后不再向父母讲述去过的地方和见过的人。不要很久,家长就会抱怨孩子守口如瓶，什么事也不告诉他们，殊不知这是他们自找的。 不管家长的人品有多么好，作为父母有多么合格，孩子们对家长幻想的破灭在某种程度上是不可避免的。除非父母自身不能令人满意，大多数孩子对父母估价过高，以致这种估价很难指望经受住现实的考验。如果家长意识到孩子们通常是多么相信家长的品行和绝对正确，意识到孩子们的这种信念会对孩子产生多么大的影响，那么家长会大为吃惊和深受感动的。如果家长对青少年的这种反应有思想准备，并且意识到这象征着孩子们正在成熟和正在发展宝贵的观察力、独立判断力，那么他们就不会那样伤心，也就不会由于怨恨和抵触这种反应，而把孩子推到自己的对立面去。 青少年酷爱真诚，对于能够承认错误或无知、甚至承认自己做得不公平或不公正的父母，他们总是尊敬的，孩子们所不能原谅的是：父母错了，孩子们也看出来了，可是做父母的还不肯承认。 维多利亚时代的父母认为，他们可以靠无理的权威气派来维护自己的尊严，实际上那是根本不行的。孩子们只不过被吓得不敢让父母知道自己的想法罢了。虽然现在我们倾向于走向另一个极端，但总地来看，孩子和家长双方态度都比较端正。遇事采取面对现实的态度总是比较明智和稳妥的，尽管会有暂时的痛苦。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They may even accuse them of disloyalty, or make some spiteful remark about the friends\' parents.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Such a loss of dignity and descent into childish behaviour on the part of the adults deeply shocks the adolescents, and make them resolve that in future they will not talk to their parents about the places or people they visit.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Before very long the parents will be complaining that the child is so secretive and never tells them anything, but they seldom realize that they have brought this on themselves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Disillusionment with the parents, however good and adequate they may be both as parents and as individuals, is to some degree inevitable.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Most children have such a high ideal of their parents, unless the parents themselves have been unsatisfactory, that it can hardly hope to stand up to a realistic evaluation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Parents would be greatly surprised and deeply touched if they realized how much belief their children usually have in their character and infallibility, and how much this faith means to a child.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If parents were prepared for this adolescent reaction, and realized that it was a sign that the child was growing up and developing valuable powers of observation and independent judgment, they would not be so hurt, and therefore would not drive the child into opposition by resenting and resisting it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The adolescent, with his passion for sincerity, always respects a parent who admits that he is wrong, or ignorant, or even that he has been unfair or unjust.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'What the child cannot forgive is the parent\'s refusal to admit these charges if the child knows them to be true.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Victorian parents believed that they kept their dignity by retreating behind an unreasoning authoritarian attitude; in fact they did nothing of the kind, but children were then too cowed to let them know how they really felt.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Today we tend to go to the other extreme, but on the whole this is a healthier attitude both for the child and the parent.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is always wiser and safer to face up to reality, however painful it may be at the moment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l37',
    lesson: 37,
    tag: 'C45',
    title: 'The process of ageing',
    titleCn: '衰老过程',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'ALEX COMPORT The process of ageing',
    original: {
    paragraphs: [
      [
        { text: 'At the age of 12 years, the human body is at its most vigorous.', translation: '人体在12岁时是生命力最旺盛的时期。虽然这个时期人的身材、体力和智力还有待发展和完善，但在这个年龄死亡的可能性最小。再早一些，我们是幼儿和小孩子，身体较脆弱；再迟一些，我们就要经历生命力和抵抗力逐步衰退的过程。虽然这个过程起初难以觉察，但最终会急转直下，不管我们怎样精心照料我们自己，不管社会和医生怎样对我们进行精心照顾，我们也无法再活下去了。生命力随着时间的流失而衰退叫做衰老。人类发现的最不愉快的一个事实是：人必然会衰老。既使我们能避开战争、意外的事故和各种疾病，我们最终也会“老死”；衰老的速度在人与人之间相差甚微，我们最可能死亡的年龄在65至80岁之间，有些人会死得早一些，少数人寿命会长一些 -- 活到八十几岁或九十几岁，但这种可能性很小。不管我们多么幸运，多么健壮，我们所希望的长寿实际上是有限度的。 衰老的过程，不经提起，正常人容易忘记；一经提醒，才会记起。我们对人总是要衰老的现象并不陌生，多年来就已认识到。生命随着时间流失而丧失活力，人随着年龄的增长而接近死亡，这是不言而喻的，就像一壶热水迟早会凉不来，一双鞋渐渐会磨破一样。人们不但认识到所有的动物，大概也认识到所有的有机物。如树木，甚至宇宙本身，从事物的本质上来说都会“磨损掉”。我们通常看到的大多数动物，即使能让它们活得足够长久的话，也会像我们一样衰老的。像上紧发条的手表那样的机械装置，或太阳，也都会消耗完其能量（整个宇宙是否如此，目前沿有争论）。不过，这些衰老的情况同人并不相似。手表停了依然是只手表，还可以重上好发条。然而一只老掉牙的手表，磨损太厉害，老得一点儿不准了，最终不值得修理了。但是，手表决不会自行修理，它不是由有生命的部件组成，而是由金属组成，而金属可以随着磨擦而磨损殆尽。而我们人，在一定时间内是可以自行修复的，除了暴病死或意外事故外，至少足以克服一切疾病和事故。在12岁至80岁之间，我们逐渐丧失这种能力。能使我们在12岁时病倒的疾病，到了80岁可能会使我们一蹶不振而进入坟墓。假如我们能保持12岁时的旺盛生命力，那么我们当中的一半人过700年才会死去，剩下的一半人再过700年，才会又减少一半。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It has yet to reach its full size and strength, and its owner his or her full intelligence; but at this age the likelihood of death is least.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Earlier, we were infants and young children, and consequently more vulnerable; later, we shall undergo a progressive loss of our vigour and resistance which, though imperceptible at first, will finally become so steep that we can live no longer, however well we look after ourselves, and however well society, and our doctors, look after us.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This decline in vigour with the passing of time is called ageing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is one of the most unpleasant discoveries which we all make that we must decline in this way, that if we escape wars, accidents and diseases we shall eventually \'die of old age\', and that this happens at a rate which differs little from person to person, so that there are heavy odds in favour of our dying between the ages of 65 and 80.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some of us will die sooner, a few will live longer -- on into a ninth or tenth decade.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But the chances are against it, and there is a virtual limit on how long we can hope to remain alive, however lucky and robust we are.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Normal people tend to forget this process unless and until they are reminded of it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We are so familiar with the fact that man ages, that people have for years assumed that the process of losing vigour with time, of becoming more likely to die the older we get, was something self-evident, like the cooling of a hot kettle or the wearing-out of a pair of shoes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They have also assumed that all animals, and probably other organisms such as trees, or even the universe itself, must in the nature of things \'wear out\'.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Most animals we commonly observe do in fact age as we do, if given the chance to live long enough; and mechanical systems like a wound watch, or the sun, do in fact run out of energy in accordance with the second law of thermodynamics (whether the whole universe does so is a moot point at present).', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But these are not analogous to what happens when man ages.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A run-down watch is still a watch and can be rewound.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'An old watch, by contrast, becomes so worn and unreliable that it eventually is not worth mending.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But a watch could never repair itself -- it does not consist of living parts, only of metal, which wears away by friction.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We could, at one time, repair ourselves --well enough, at least, to overcome all but the most instantly fatal illnesses and accidents.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Between 12 and 80 years we gradually lose this power; an illness which at 12 would knock us over, at 80 can knock us out, and into our grave.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If we could stay as vigorous as we are at 12 , it would take about 700 years for half of us to die, and another 700 for the survivors to be reduced by half again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l44',
    lesson: 44,
    tag: 'C55',
    title: 'Patterns of culture',
    titleCn: '文化的模式',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'RUTH BENEDICT Patterns of Culture',
    original: {
    paragraphs: [
      [
        { text: 'Custom has not commonly been regarded as a subject of any great moment.', translation: '风俗一般未被认为是什么重要的课题。我们觉得，只有我们大脑内部的活动情况才值得研究，至于风俗呢，只是些司空见惯的行为而已。事实小，情况正好相反。从世界范围来看，传统风俗是由许多细节性的习惯行为组成，它比任何一个养成的行为都更加引人注目，不管个人行为多么异常。这只是问题的一个次要的侧面。最重要的是，风俗在实践中和信仰上所起的举足轻重的作用，以及它所表现出来的极其丰富多采的形式。 没有一个人是用纯洁而无偏见的眼光看待世界。人们所看到的是一个受特定风俗习惯、制度和思想方式剪辑过的世界。甚至在哲学领域的探索中，人们也无法超越这此定型的框框。人们关于真与伪的概念依然和特定的传统风俗有关。约翰.杜威曾经非常严肃地指出：风俗在形成个人行为方面所起的作用和一个对风俗的任何影响相比，就好像他本国语言的总词汇量和自己咿呀学语时他家庭所接纳的他的词汇量之比。当一个人认真地研究自发形成的社会秩序时，杜威的比喻就是他实事求是观察得来的形象化的说法。个人的生活史首先是适应他的社团世代相传形成的生活方式和准则。从他呱呱坠地的时刻起，他所生于其中的风俗就开始塑造他的经历和行为规范。到会说话时，他就是传统文化塑造的一个小孩子；等他长大了，能做各种事了，他的社团的习惯就是他的习惯，他的社团的信仰就是他的信仰，他的社团不能做的事就是他不能做的事。每一个和他诞生在同一个社团中的孩子和他一样具有相同的风俗；而在地球的另一边。诞生在另一个社团的孩子与他就是少有相同的风俗。没有任何一个社会问题比得上风俗的作用问题更要求我们对它理解。直到我们理解了风俗的规律性和多样性，我们才能明白人为生活中主要的复杂现象。 只有在某些基本的主张被接受下来、同时有些主张被激烈反对时，对风俗的研究才是全面的，才会有收获。首先，任何科学研究都要求人们对可供考虑的诸多因素不能厚此薄彼，偏向某一方面。在一切争议较小的领域里，如对仙人掌、白议或星云性质的研究，应采取的研究方法是。把有关各方面的材料汇集起来，同时注意任何可能出现的异常情况和条件。例如，用这种方法，我们完全掌握了天文学的规律和昆虫群居的习性。只是在对人类自身的研究。只要我们同原始人，我们同野蛮人，我们同异教徒之间存有的区别在人的思想中占主工导地位，那么人类学按其定义来说就无法存在。我们首先需要达到这样一种成熟的程度：不用自己的信仰去反对我们邻居的迷信。必须认识到，这些建立在相同前提基础上的风俗，暂且可以说是超自然的东西，必须放在一起加以考虑，我们自己的风俗和其他民族的风俗都在其中。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The inner workings of our own brains we feel to be uniquely worthy of investigation, but custom, we have a way of thinking, is behaviour at its most commonplace.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As a matter of fact, it is the other way around.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Traditional custom, taken the world over, is a mass of detailed behaviour more astonishing than what any one person can ever evolve in individual actions, no matter how aberrant.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Yet that is a rather trivial aspect of the matter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The fact of first-rate importance is the predominant role that custom plays in experience and in belief, and the very great varieties it may manifest.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'No man ever looks at the world with pristine eyes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He sees it edited by a definite set of customs and institutions and ways of thinking.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even in his philosophical probings he cannot go behind these stereotypes; his very concepts of the true and the false will still have reference to his particular traditional customs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'John Dewey has said in all seriousness that the part played by custom in shaping the behaviour of the individual, as against any way in which he can affect traditional custom, is as the proportion of the total vocabulary of his mother tongue against those words of his own baby talk that are taken up into the vernacular of his family.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When one seriously studies the social orders that have had the opportunity to develop autonomously, the figure becomes no more than an exact and matter-of-fact observation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The life history of the individual is first and foremost an accommodation to the patterns and standards traditionally handed down in his community.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From the moment of his birth, the customs into which he is born shape his experience and behaviour.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By the time he can talk, he is the little creature of his culture, and by the time he is grown and able to take part in its activities, its habits are his habits, its beliefs his beliefs, its impossibilities his impossibilities.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Every child that is born into his group will share them with him, and no child born into one on the opposite side of the globe can ever achieve the thousandth part.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There is no social problem it is more incumbent upon us to understand than this of the role of custom.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Until we are intelligent as to its laws and varieties, the main complicating facts of human life must remain unintelligible.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The study of custom can be profitable only after certain preliminary propositions have been accepted, and some of these propositions have been violently opposed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the first place, any scientific study requires that there be no preferential weighting of one or another of the items in the series it selects for its consideration.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In all the less controversial fields, like the study of cacti or termites or the mature of nebulae, the necessary method of study is to group the relevant material and to take note of all possible variant forms and conditions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In this way, we have learned all that we know of the laws of astronomy, or of the habits of the social insects, let us say.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is only in the study of man himself that the major social sciences have substituted the study of one local variation, that of Western civilization.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Anthropology was by definition impossible, as long as these distinctions between ourselves and the primitive, ourselves and the barbarian, ourselves and the pagan, held sway over people\'s minds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was necessary first to arrive at that degree of sophistication where we no longer set our own belief against our neighbour\'s superstition.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was necessary to recognize that these institutions which are based on the same premises, let us say the supernatural, must be considered together, our own among the rest.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l46',
    lesson: 46,
    tag: 'C58',
    title: 'Hobbies',
    titleCn: '业余爱好',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],


  attribution: 'WINSTON CHURCHILL Painting as a Pastime',
    original: {
    paragraphs: [
      [
        { text: 'A gifted American psychologist has said, \'Worry is a spasm of the emotion; the mind catches hold of something and will not let it go.\' It is useless to argue with the mind in this condition.', translation: '一位天才的美国心理学家曾经说过：“烦恼是感情的发作，此时脑子纠缠住了某种东西又不肯松手。”在这种情况下，你又和头脑争吵让它松手是无济于事的。这种意志越是强烈，这种尝试越是徒劳。你只能缓和而巧纱地让另一种东西进入痉挛僵持的头脑中。如果选得合适，而且的确受到别的领域的情趣的启迪，那么渐渐地，往往也是很顺利地，原先不适当的紧张就会松弛下来，恢复和修整的过程就会开始。 因此，对一个从事社会活动的人来说，培养一种业余爱好和各种新的兴趣是关等重要的作法。但这并非一日之功，也不是单凭一蹴而就的事。精神上多种情趣的培养是一个长期的过程。要想在需要的时候可随手摘取充满生机的果实，那就必然从选良种做起，然后将其植入肥沃的土地，还需要勤勉地护理。 一个人要想真正感到幸福和平安，至少应有两三种爱好，而且都比较实际。到了晚年才开始说：“我会对这些人或那个人发生兴趣”，已没有用了。这种愿望只能加剧精神紧张。一个人可能会获得与其日常工作无关的某些课题的渊博知识，而没有从中得到什么实益或宽慰。干你所喜欢的事是没有用的，你喜欢你所干的事。泛泛地说，人可以分为3类：劳累至死的人、忧虑至死的人、无聊至死的人。对于流汗出力干了一周苦活的体力劳动者来说，让他们在星期六下午再踢足球或打垒球是不合适的；同样，对于为严肃的公务操劳或烦恼了6天的政界人士、专业人员、商人来说，在周未再让他们为琐事而动脑子和忧虑也是无益的。 至于那些能任意支配一切的“可怜的人”，他们能够恣意妄为，能染指一切追求的目标。对这种人来说，多一种新的乐趣、多一种新的刺激只是增加一分厌腻而已。他们到处奔乱跑，企图以闲聊和乱窜来摆脱无聊对他们的报复，但这是徒劳的。对他们来说，用某种形式的纪律约束他们一下才能有希望使他们走上正道。 也可以这样说，理智的，勤劳的、有用的人可以分为两类：第一类是他分清工作是工作，娱乐是娱乐的人；第二类人的工作和娱乐是一回事。这两类人当中，第一类人是大多数，他们能够得到补偿。在办公室或工厂里长时间工作给他们带来了酬劳，这不仅是谋生的手段，而且还带来了寻找乐趣的强烈欲望，那怕是最简单的、最低等的乐趣。但是，命运之神的宠儿是第二类人，他们的生活是一种自然的和谐，对他们来说，工作时间总不会太长，每天都是假日，而通常的假期来到，他们却惋惜这假期强制打断了他们埋头从事的工作。然而对这两种人来说，都需要换一换脑子，改变一下气氛，转移一下注意力，这是不可缺少的。说实在的，把工作当作享受的那些人最需要每隔一段时间把工作从头脑中撇开。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' It is useless to argue with the mind in this condition.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The stronger the will, the more futile the task.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One can only gently insinuate something else into its convulsive grasp.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And if this something else is rightly chosen, if it is really attended by the illumination of another field of interest, gradually, and often quite swiftly, the old undue grip relaxes and the process of recuperation and repair begins.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'The cultivation of a hobby and new forms of interest is therefore a policy of the first importance to a public man.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But this is not a business that can be undertaken in a day or swiftly improvised by a mere command of the will.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The growth of alternative mental interests is a long process.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The seeds must be carefully chosen; they must fall on good ground; they must be sedulously tended, if the vivifying fruits are to be at hand when needed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'To be really happy and really safe, one ought to have at least two or three hobbies, and they must all be real.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is no use starting late in life to say: \'I will take an interest in this or that.\' Such an attempt only aggravates the strain of mental effort.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\' Such an attempt only aggravates the strain of mental effort.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A man may acquire great knowledge of topics unconnected with his daily work, and yet get hardly any benefit or relief.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is no use doing what you like; you have got to like what you do.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Broadly speaking, human beings may be divided into three classes: those who are toiled to death, those who are worried to death, and those who are bored to death.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is no use offering the manual labourer, tired out with a hard week\'s sweat and effort, the chance of playing a game of football or baseball on Saturday afternoon.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is no use inviting the politician or the professional or business man, who has been working or worrying about serious things for six days, to work or worry about trifling things at the weekend.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'As for the unfortunate people who can command everything they want, who can gratify every caprice and lay their hands on almost every object of desire -- for them a new pleasure, a new excitement is only an additional satiation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In vain they rush frantically round from place to place, trying to escape from avenging boredom by mere clatter and motion.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For them discipline in one form or another is the most hopeful path.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'It may also be said that rational, industrious, useful human beings are divided into two classes: first,those whose work is work and whose pleasure is pleasure; and secondly those whose work and pleasure are one.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Of these the former are the majority.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They have their compensations.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The long hours in the office or the factory bring with them as their reward, not only the means of sustenance, but a keen appetite for pleasure even in its simplest and most modest forms.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But Fortune\'s favoured children belong to the second class.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Their life is a natural harmony.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For them the working hours are never long enough.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Each day is a holiday, and ordinary holidays, when they come, are grudged as enforced interruptions in an absorbing vocation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Yet to both classes, the need of an alternative outlook, of a change of atmosphere, of a diversion of effort, is essential.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Indeed, it may well be that those whose work is their pleasure are those who most need the means of banishing it at intervals from their minds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

    id: 'nce4-l48',
    lesson: 48,
    title: 'Planning a share portfolio',
    titleCn: '规划股票投资组合',
    keyArticle: true,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

    original: {
    paragraphs: [
      [
        { text: 'There is no shortage of tipsters around offering \'get-rich-quick\' opportunities.', translation: '我们周围不乏情报贩子，向人们提供迅速发财致富的机遇。但是，如果你是一个认真的私人投资者，就把拉斯韦加斯的心态留给那些有钱可供挥霍的人。认真的投资者需要一份正规的投资组合表 -- 一种计划很周密的投资选择，包括你的投资结构和明确的目标。但是, 一个股票市场的新手又如何能做到这一点呢？ 如果你去向5位有威望的股票经纪人咨询，询问你应该如何使用你的资金，你可能得到5种不同的答复，即便你提供了有关于你的年龄、家庭、财源和你想从投资中获得好处的信息。这是个道德问题吗？没有一种完全“正确”的方法来排列这种投资组合，然而，却毫无疑问地有几种错误的方法。可以相信5位经纪人中不会有人建议你把全部（或一部份）资金投入佩里威格斯公司。 那么你该怎么做呢？我们假定你已把基本情况弄清楚了，如抵押贷款、养老金、保险金和动用现金储备的机会。然后，你一定要建立起自己的目标。这里一方面是个所处的环境，另一方面是个心理学的问题。 比如说，如果你年纪较大，你从重大投资损失中恢复过来的时间就较少，你就很希望能够提高你的养老金收入。因此，你的首要任务就是保护你的资金和引发额外的收入。在这种情况下，你大概想制定一份包括某些股份（但不是风险很大的股份）的投资组合，同时还有高度可靠的证券、现金储蓄，可能还有可换证券，或分割资本投资信托公司的所得股。 如果你年轻一些，并且经济状况可靠，你可能会采取一种积极进取的方式 -- 你必须性格开朗，不会因股票价格的浮动而夜不能眠。如果你觉得你的情况是这样的话，你可在投资组合中包括几项有令人陶醉的增值前景的增长股，和其他比较平淡的投资项目放在一起。一旦你的投资组合中包括几项有令人陶醉的增值前景的增长股，和其他比较平淡的投资项目放在一起。一旦你的投资目标确立以后，你就可以决定你的钱投向何处。这里的指导原则是：分散你的投资风险。如果你把所有资金投入佩里威格斯国际公司，你就把自己当成了命运的人质。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But if you are a serious private investor, leave the Las Vegas mentality to those with money to fritter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The serious investor needs a proper \'portfolio\' -- a well-planned selection of investments, with a definite structure and a clear aim.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But exactly how does a newcomer to the stock market go about achieving that?', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'Well, if you go to five reputable stock brokers and ask them what you should do with your money, you\'re likely to get five different answers, -- even if you give all the relevant information about your age, family, finances and what you want from your investments.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Moral?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There is no one \'right\' way to structure a portfolio.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'However, there are undoubtedly some wrong ways, and you can be sure that none of our five advisers would have suggested sinking all (or perhaps any) of your money into Periwigs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'So what should you do?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We\'ll assume that you have sorted out the basics -- like mortgages, pensions, insurance and access to sufficient cash reserves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You should then establish your own individual aims.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'These are partly a matter of personal circumstances, partly a matter of psychology.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'For instance, if you are older you have less time to recover from any major losses, and you may well wish to boost your pension income.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'So preserving your capital and generating extra income are your main priorities.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In this case, you\'d probably construct a portfolio with some shares (but not high risk ones), along with gilts, cash deposits, and perhaps convertibles or the income shares of split capital investment trusts.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ],
      [
        { text: 'If you are younger, and in a solid financial position, you may decide to take an aggressive approach -- but only if you\'re blessed with a sanguine disposition and won\'t suffer sleepless nights over share prices.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If you recognize yourself in this description, you might include a couple of heady growth stocks in your portfolio, alongside your more pedestrian investments.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Once you have decided on your investment aims, you can then decide where to put your money.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The golden rule here is spread your risk -- if you put all of your money into Periwigs International, you\'re setting yourself up as a hostage to fortune.', translation: '', predicates: [], clauseIntroducers: [], notes: [] }
      ]
    ],
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

const articleNce4L5: Article = {

    id: 'nce4-l5',
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

  attribution: 'T.H.GILLESPIE Spare that spider from The Listener',
  original: {
    paragraphs: [
      [
        { text: "People are always talking about 'the problem of youth'.", translation: '人们总是在谈论「青年问题」。', predicates: ['are talking'], clauseIntroducers: [], notes: [{ phrase: "about 'the problem of youth'", note: '介词 + 名词 → 作状语' }] },
        { text: 'If there is one—which I take leave to doubt—then it is older people who create it, not the young themselves.', translation: '', predicates: ['is', 'take', 'create'], clauseIntroducers: ['If', 'which', 'then'], notes: [] },
        { text: 'Let us get down to fundamentals and agree that the young are after all human beings—people just like their elders.', translation: '', predicates: ['get', 'agree', 'are'], clauseIntroducers: ['that'], notes: [{ phrase: 'get down to', note: '着手处理' }, { phrase: 'fundamentals', note: '基本原则' }] },
        { text: 'There is only one difference between an old man and a young one: the young man has a glorious future before him and the old one has a splendid future behind him: and maybe that is where the rub is.', translation: '', predicates: ['is', 'has', 'has', 'is'], clauseIntroducers: ['where'], notes: [{ phrase: 'glorious', note: '辉煌的' }, { phrase: 'splendid', note: '灿烂的' }, { phrase: 'the rub', note: '症结所在' }] },
      ],
      [
        { text: 'When I was a teenager, I felt that I was just young and uncertain—that I was a new boy in a huge school, and I would have been very pleased to be regarded as something so interesting as a problem.', translation: '', predicates: ['felt', 'was', 'was', 'would have been very pleased'], clauseIntroducers: ['When', 'that', 'that'], notes: [{ phrase: 'would have been very pleased', note: '过去一定会高兴' }] },
        { text: 'For one thing, being a problem gives you a certain identity, and that is one of the things the young are busily engaged in seeking.', translation: '', predicates: ['gives', 'are engaged'], clauseIntroducers: ['that'], notes: [] },
      ],
      [
        { text: 'I find young people exciting.', translation: '', predicates: ['find'], clauseIntroducers: [], notes: [] },
        { text: 'They have an air of freedom, and they have not a dreary commitment to mean ambitions or love of comfort.', translation: '', predicates: ['have', 'have'], clauseIntroducers: [], notes: [{ phrase: 'dreary', note: '沉闷的' }] },
        { text: 'They are not anxious social climbers, and they have no devotion to material things.', translation: '', predicates: ['are', 'have'], clauseIntroducers: [], notes: [] },
        { text: 'All this seems to me to link them with life, and the origins of things.', translation: '', predicates: ['seems'], clauseIntroducers: [], notes: [] },
        { text: "It's as if they were in some sense cosmic beings in violent and lovely contrast with us suburban creatures.", translation: '', predicates: ['were'], clauseIntroducers: ['as if'], notes: [{ phrase: 'cosmic', note: '宇宙的' }, { phrase: 'suburban', note: '市郊的' }] },
        { text: 'All that is in my mind when I meet a young person.', translation: '', predicates: ['is', 'meet'], clauseIntroducers: ['when'], notes: [] },
        { text: 'He may be conceited, ill-mannered, presumptuous or fatuous, but I do not turn for protection to dreary clichés about respect for elders—as if mere age were a reason for respect.', translation: '', predicates: ['may be', 'do turn'], clauseIntroducers: ['but'], notes: [] },
        { text: 'I accept that we are equals, and I will argue with him, as an equal, if I think he is wrong.', translation: '', predicates: ['accept', 'are', 'will argue', 'think', 'is'], clauseIntroducers: ['that', 'if'], notes: [] },
      ],
    ],
  },
  vocabulary: [
    { word: 'leave', pos: 'n.', meaning: '允许', phonetic: '/li:v/' },
    { word: 'fundamentals', pos: 'n.', meaning: '基本原则', phonetic: '//' },
    { word: 'glorious', pos: 'adj.', meaning: '光辉灿烂的', phonetic: "/'glɔ:riəs/" },
    { word: 'splendid', pos: 'adj.', meaning: '灿烂的', phonetic: "/'splendid/" },
    { word: 'rub', pos: 'n.', meaning: '难题', phonetic: '/rʌb/' },
    { word: 'identity', pos: 'n.', meaning: '身份', phonetic: "/ai'dentiti/" },
    { word: 'dreary', pos: 'adj.', meaning: '沉郁的', phonetic: "/'driəri/" },
    { word: 'commitment', pos: 'n.', meaning: '信奉', phonetic: "/kə'mitmənt/" },
    { word: 'mean', pos: 'adj.', meaning: '吝啬，小气', phonetic: '/mi:n/' },
    { word: 'social climber', pos: 'n.', meaning: '追求更高社会地位的人，向上爬的人', phonetic: '//' },
    { word: 'devotion', pos: 'n.', meaning: '热爱', phonetic: "/di'vəuʃən/" },
    { word: 'cosmic', pos: 'adj.', meaning: '宇宙的', phonetic: "/'kɔzmik/" },
    { word: 'suburban', pos: 'adj.', meaning: '见识不广的，偏狭的', phonetic: "/sə'bə:bən/" },
    { word: 'conceited', pos: 'adj.', meaning: '自高自大的', phonetic: "/kən'si:tid/" },
    { word: 'presumptuous', pos: 'adj.', meaning: '自以为是的，放肆的', phonetic: "/pri'zʌmptjuəs/" },
    { word: 'fatuous', pos: 'adj.', meaning: '愚蠢的', phonetic: "/'fætjuəs/" },
    { word: 'cliché', pos: 'n.', meaning: '陈词滥调', phonetic: "/'kli:ʃei/" },
  ],
}

const articleNce4L9: Article = {
    id: 'nce4-l9',
    lesson: 9,
    tag: 'C9',
    title: 'Royal espionage',
    titleCn: '王室谍报活动',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'BERNARD NEWMAN Spies in Britain',
  original: {
    paragraphs: [
      [
        { text: 'Alfred the Great acted as his own spy, visiting Danish camps disguised as a minstrel.', translation: '阿尔弗雷德大帝曾亲自充当间谍。他扮作吟游歌手到丹麦军队的营地里侦察。当时，浪迹天涯的吟游歌手到处受欢迎，他们不是作战人员，竖琴就是他们的通行证。阿尔弗德年轻时学过许多民歌，并能穿插演一些杂技和小魔术使自己的节目多样化。 阿尔弗雷德人数不多的军队开始在阿塞尔纳慢慢集结时，他亲自潜入丹麦入侵司令官古瑟罗姆的营地。丹麦军已在切本哈姆扎下营准备过冬，阿尔弗雷便来到此地。他马上发现丹麦军纪律松弛，他们以征服者自居，安全措施马马虎虎。他们靠掠夺附近的地区的财物过着舒适的生活。他们不仅搜刮吃的喝的，而且抢掠妇女，安逸的生活已使丹麦军队变得软弱无力。 阿尔弗雷德在敌营呆了一个星期后，回到了阿塞尔纳。他集结在那里的军队和丹麦大军相比是微不足道的，然而，阿尔弗雷德断定，丹麦人已不再适应持久的战争，他们的军需供应处于无组织状态，只是靠临时抢夺来维持。 因此，面对丹麦人的进攻，阿尔弗雷德没有贸然同敌人作战，而是采用骚扰敌人的战术。他的部队不停地移动，牵着敌人的鼻子，让他们跟着跑。他派出巡逻队阻止敌人抢劫，因而饥饿威胁着丹麦军队。这时，阿尔弗雷德发起一连串小规模的进攻，结果不出一个月，丹麦人就投降了。这一幕历史可以说是王室谍报活动中最精彩的篇章。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In those days wandering minstrels were welcome everywhere.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They were not fighting men, and their harp was their passport.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Alfred had learned many of their ballads in his youth, and could vary his programme with acrobatic tricks and simple conjuring.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'While Alfred\'s little army slowly began to gather at Athelney, the king himself set out to penetrate the camp of Guthrum, the commander of the Danish invaders.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'These had settled down for the winter at Chippenham: thither Alfred went.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He noticed at once that discipline was slack: the Danes had the self-confidence of conquerors, and their security precautions were casual.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They lived well, on the proceeds of raids on neighbouring regions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There they collected women as well as food and drink, and a life of ease had made them soft.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Alfred stayed in the camp a week before he returned to Athelney.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The force there assembled was trivial compared with the Danish horde.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But Alfred had deduced that the Danes were no longer fit for prolonged battle: and that their commissariat had no organization, but depended on irregular raids.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'So, faced with the Danish advance, Alfred did not risk open battle but harried the enemy.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He was constantly on the move, drawing the Danes after him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'His patrols halted the raiding parties: hunger assailed the Danish army.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Now Alfred began a long series of skirmishes -- and within a month the Danes had surrendered.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The episode could reasonably serve as a unique epic of royal espionage!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L10: Article = {
    id: 'nce4-l10',
    lesson: 10,
    tag: 'C10',
    title: 'Silicon valley',
    titleCn: '硅谷',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'US NEWS AND WORLD REPORT, October 2, 1989',
  original: {
    paragraphs: [
      [
        { text: 'Technology trends may push Silicon Valley back to the future.', translation: '技术的发展趋势有可能把硅谷重新推向未来。卡弗.米德 -- 集成电路的一位先驱，加州理工学院的计算机教授 -- 注意到，现在有些计算机工作站使工程技术人员可以在他们的办公桌上设计、试验和生产芯片，就像一位编辑在苹果机上编出一份时事通讯一样。由于制造一块芯片的时间已缩短至几天，费用也只有几百美元，因此，工程技术人员可能很块就可充分发挥他们的想像力，而不会因失败而造成经济上的损失。米德预言发明者可以在办公室用一个周末的时间生产了完美的、功能很强的、按客户需求设计的芯片 -- 造就新一代从汽车间起家的技术人员，在把产品推向市场方面使美国把它的外国对手们打个措手不及。 “我们有更多的汽车间，那里有许多聪明人，”米德说。“我们确实是靠这种无政府状态发展起来的。” 靠的是亚洲人。硅谷许多公司中工程技术人员的大多数是东方人和亚裔美国人。中国、韩国、菲律宾和印度的工程师一批批地从加州的大学毕业。作为新掘起一代的带头人，亚裔发明家可以凭借他们在习惯和语言上的优势，与关键的太平洋沿岸市场建立起更加牢固的联系。比如说，亚历克斯.奥，一位来自香港的斯坦福大学博士，已经在台湾建厂，对日本在内存条市场上近似垄断的局面提出了挑战。印度出生的N.达莫达.雷迪经营的小小的加州公司在堪萨斯城重新启用了美国电话电报公司的一家芯片工厂，并从密苏里州获取了财政上的支持。在硅谷变成一个退休村之前，它很可能成为建立全球商业的一个教学场地。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Carver Mead, a pioneer in integrated circuits and a professor of computer science at the California Institute of Technology, notes there are now work-stations that enable engineers to design, test and produce chips right on their desks, much the way an editor creates a newsletter on a Macintosh.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As the time and cost of making a chip drop to a few days and a few hundred dollars, engineers may soon be free to let their imaginations soar without being penalized by expensive failures.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mead predicts that inventors will be able to perfect powerful customized chips over a weekend at the office -- spawning a new generation of garage start-ups and giving the U.S. a jump on its foreign rivals in getting new products to market fast.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'We\'ve got more garages with smart people,\' Mead observes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: '\'We really thrive on anarchy.\'', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'And on Asians.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Already, orientals and Asian Americans constitute the majority of the engineering staffs at many Valley firms.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And Chinese, Korean, Filipino and Indian engineers are graduating in droves from California\'s colleges.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As the heads of next-generation start-ups, these Asian innovators can draw on customs and languages to forge tighter links with crucial Pacific Rim markets.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For instance, Alex Au, a Stanford Ph.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'D. from Hong Kong, has set up a Taiwan factory to challenge Japan\'s near lock on the memory-chip market.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'India-born N.Damodar Reddy\'s tiny California company reopened an AT&T chip plant in Kansas City last spring with financing from the state of Missouri.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Before it becomes a retirement village, Silicon Valley may prove a classroom for building a global business.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L12: Article = {
    id: 'nce4-l12',
    lesson: 12,
    tag: 'C12',
    title: 'Banks and their customers',
    titleCn: '银行和顾客',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'GORDON BARRIE and AUBREY L. DLAMOND The Consumer Society and the Law',
  original: {
    paragraphs: [
      [
        { text: 'When anyone opens a current account at a bank, he is lending the bank money, repayment of which he may demand at any time, either in cash or by drawing a cheque in favour of another person.', translation: '任何人在银行开一个活期账户，就等于把钱借给了银行。这笔钱他可以随时提取，提取的方式可以是取现金，也可以是开一张以他人为收款人的支票。银行与储户的关系主要是债务人和债权人的关系。究竟谁是债务人谁是债权人，要看储户是有结余还是透支。除了这一基本的简单的概念外，银行和储户彼此还需承担大量义务。其中许多义务往往引起问题和纠纷。但是储户不能像货物的买主那样来抱怨法律对自己不利。 银行必须遵照储户的嘱托办事，不能听从其他人的指令。比如，储户首次在银行开户时，嘱咐银行他的存款只能凭本世人签字的支票来提取。他把自己签名的样本交给银行，对此有一条非常严格的规定：银行没有任何权利或理由把储户的钱让伪造储户的支票取走。即使伪造得很巧妙，也不能付款，因为银行有责任辨认出其储户的签名。因此，某些银行已采用把储户印在支票上的作法。这种做法对储户毫无风险。如果因这种作法出现了伪造的话，受损失的将不是储户，而是银行。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Primarily, the banker-customer relationship is that of debtor and creditor -- who is which depending on whether the customer\'s account is in credit or is overdrawn.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But, in addition to that basically simple concept, the bank and its customer owe a large number of obligations to one another.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Many of these obligations can give rise to problems and complications but a bank customer, unlike, say, a buyer of goods, cannot complain that the law is loaded against him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The bank must obey its customer\'s instructions, and not those of anyone else.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When, for example, a customer first opens an account, he instructs the bank to debit his account only in respect of cheques drawn by himself.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He gives the bank specimens of his signature, and there is a very firm rule that the bank has no right or authority to pay out a customer\'s money on a cheque on which its customer\'s signature has been forged.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It makes no difference that the forgery may have been a very skillful one: the bank must recognize its customer\'s signature.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For this reason there is no risk to the customer in the practice, adopted by banks, of printing the customer\'s name on his cheques.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If this facilitates forgery, it is the bank which will lose, not the customer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L14: Article = {
    id: 'nce4-l14',
    lesson: 14,
    tag: 'C14',
    title: 'The Butterfly Effect',
    titleCn: '蝴蝶效应',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'JAMES GLEICK, Chaos',
  original: {
    paragraphs: [
      [
        { text: 'Beyond two or three days, the world\'s best weather forecasts are speculative, and beyond six or seven they are worthless.', translation: '世界上最好的两三天以上的天气预报具有很强的猜测性，如果超过六七天，天气预报就没有了任何价值。 原因是蝴蝶效应。对于小片的恶劣天气 -- 对一个全球性的气象预报员来说，“小”可以意味着雷暴雨和暴风雪 -- 任何预测的质量会很快下降。错误和不可靠性上升，接踵而来的是一系列湍流的徵状，从小尘暴和暴风发展到只有卫星上可以看到的席卷整块大陆的旋涡。 现代气象模型以一个坐标图来显示，图中每个点大约是间隔60英里。既使是这样，有些开始时的资料也不得不依靠推测，因为地面工作站和卫星不可能看到地球上的每一个地方。假设地球上可以布满传感器，每个相隔1英尺，并按1英尺的间隔从地面一直排列到大气层的顶端。再假定每个传感器都极极端准确地读出了温度、气压、温度和气象学家需要的任何其他数据。在正午时分，一个功能巨大的计算机搜集了所有的资料，并算出在每一个点上12：01、12：02、12：03时可能出现的情况。 计算机无法推断出1个月以后的某一天，新泽西州的普林斯顿究竟是晴天还是雨天。正午时分，传感器之间的距离会掩盖计算机无法知道的波动、任何偏平均值的变化。到12：01时，那些波动就已经会在1英尺远的地方造成偏差。很快这种偏差会增加到尺10英的范围，如此等等，一直到全球的范围。', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'The Butterfly Effect is the reason.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For small pieces of weather -- and to a global forecaster, small can mean thunderstorms and blizzards -- any prediction deteriorates rapidly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Errors and uncertainties multiply, cascading upward through a chain of turbulent features, from dust devils and squalls up to continent-size eddies that only satellites can see.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The modern weather models work with a grid of points of the order of 60 miles apart, and even so, some starting data has to be guessed, since ground stations and satellites cannot see everywhere.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But suppose the earth could be covered with sensors spaced one foot apart, rising at one-foot intervals all the way to the top of the atmosphere.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Suppose every sensor gives perfectly accurate readings of temperature, pressure, humidity, and any other quantity a meteorologist would want.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Precisely at noon an infinitely powerful computer takes all the data and calculates what will happen at each point at 12.01, then 12.02, then 12.03...', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'The computer will still be unable to predict whether Princeton, New Jersey, will have sun or rain on a day one month away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At noon the spaces between the sensors will hide fluctuations that the computer will not know about, tiny deviations from the average.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By 12.01, those fluctuations will already have created small errors one foot away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Soon the errors will have multiplied to the ten-foot scale, and so on up to the size of the globe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L17: Article = {
    id: 'nce4-l17',
    lesson: 17,
    tag: 'C17',
    title: 'A man-made disease',
    titleCn: '人为的疾病',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'RITCHIE CALDER Science Makes Sense',
  original: {
    paragraphs: [
      [
        { text: 'In the early days of the settlement of Australia,enterprising settlers unwisely introduced the European rabbit.', translation: '在澳大利亚移民初期，一些有创业精神的移民不明智地把欧洲兔子引进了澳大利亚。这种兔子在澳大利亚及新西兰没有天敌，因此便以兔子所特有的杂乱交配迅猛繁殖起来。整个澳洲兔子成灾。它们在地下打洞，吃掉本可以饲养数百万头牛羊的牧草，给澳洲大陆造成了毁灭性的破坏。科学家们发现，这种特殊品种的兔子（显然不包括别的动物）易患一种叫“多发性粘液瘤”的致命毒性疾病。通过让染上此病的动物在洞内乱跑，就可以使这种疾病在一个地区蔓延起来。后来又发现，有一种蚊子是传播这种疾病的媒介，能把此病传染给兔子。因此，世界上其他地方在设法消灭蚊子的时候，澳大利亚却在促使这种蚊子大量繁殖。蚊子把这种疾病扩散到整个澳洲大陆，效果甚佳，结果兔子的数目在为减少。后来，明显看出，兔子对这种疾病已产生了一定程度的免疫力，所以兔子不可能被完全消灭。但是，已有希望解决兔子所带来的问题。 具有讽刺意味的是，欧洲把这种兔子作为有害动物传给澳洲，而欧洲自己却染上了这种人为的瘟疫般的疾病。一位法国内科医生决定除掉自己庄园内的野兔子，于是引进了这种多发性粘液瘤疾病。然而，这种疾病并未被局限在他的庄园内，结果在整个法国蔓延开来。野兔在法国一般不被当作有害动物，而被视为打猎取乐的玩物和有用的食物来源。这种疾病又蔓延到了英国。在英国，野兔被当作有害的动物，可是家兔是赚钱的毛皮工业的基础，然而家兔同样易感染这种疾病。现在的问题是，人类能否控制住这种人为的疾病。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This rabbit had no natural enemies in the Antipodes, so that it multiplied with that promiscuous abandon characteristic of rabbits.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It overran a whole continent.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It caused devastation by burrowing and by devouring the herbage which might have maintained millions of sheep and cattle.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Scientists discovered that this particular variety of rabbit (and apparently no other animal) was susceptible to a fatal virus disease, myxomatosis.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'By infecting animals and letting them loose in the burrows, local epidemics of this disease could be created.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Later it was found that there was a type of mosquito which acted as the carrier of this disease and passed it on to the rabbits.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'So while the rest of the world was trying to get rid of mosquitoes, Australia was encouraging this one.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It effectively spread the disease all over the continent and drastically reduced the rabbit population.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It later became apparent that rabbits were developing a degree of resistance to this disease, so that the rabbit population was unlikely to be completely exterminated.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There were hopes, however, that the problem of the rabbit would become manageable.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Ironically, Europe, which had bequeathed the rabbit as a pest to Australia acquired this man-made disease as a pestilence.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A French physician decided to get rid of the wild rabbits on his own estate and introduced myxomatosis.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It did not, however, remain within the confines of his estate.It spread through France where wild rabbits are not generally regarded as a pest but as a sport and a useful food supply, and it spread to Britain where wild rabbits are regarded as a pest but where domesticated rabbits, equally susceptible to the disease, are the basis of a profitable fur industry.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The question became one of whether Man could control the disease he had invented.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L19: Article = {
    id: 'nce4-l19',
    lesson: 19,
    tag: 'C19',
    title: 'The stuff of dreams',
    titleCn: '话说梦的本质',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],
  original: {
    paragraphs: [
      [
        { text: 'Circadian rhythm experiment.', translation: '很清楚，睡眠必然具有某种作用。睡眠占去那么多时间，所以其作用似乎还是很重要。人们对睡眠作用的种种猜测，确实有数千年之久。一项使人对这个问题感到困惑的奇怪的发现是，睡眠在很大程度似乎并不仅仅是为了使身体得到休息。“休息”，从使肌肉得到放松等方面来看，只要稍微躺一躺，甚至坐一坐就能达到。人体组织在一定程度上有自我修补和自我恢复的能力，有张有弛地连续活动时，其功能最佳。事实上，睡眠状态下仍有着基本的活动量，以防止肌肉活动停止。 如果睡眠的功能不是在于使身体得到休息，那么也许是让大脑得以休息？若不是下面两点，这种假使似乎是有道理的。第一点，脑电图记录仪（不过是一种把电极接到头皮上记录脑电活动的仪器）显示，人在睡眠时大脑活动的方式有变化，但没有迹象表明，其活动总量有任何减少。第二点更有意思，也更重要。前些年，美国一位精神病学者发表了一篇报告，报告中记录了眼球在睡眠时的活动情况。他指出，平常人的睡眠周期中不时伴有一阵阵奇怪的眼球队活动，这些活动有的飘忽而缓慢，有的急剧而快速。在眼球活动期间被叫醒的人都说自己在做梦；在其他期间叫醒他们，则说没有做梦。如果有两组人，一组人连续几夜在眼球队活动时被叫醒；另一组人也是连续几夜被叫醒，但是在眼球没活动时被叫醒的。结果，第一组人开始出现性格失常，而第二组人似乎没受什么影响。这一切暗示我们：睡眠受到干忧没关系，而做梦受到干忧是有问题的。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A patient is asleep in a sleep research laboratory.Electrocles are attached to his head to measure brainwaves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L20: Article = {
    id: 'nce4-l20',
    lesson: 20,
    tag: 'C20',
    title: 'Snake poison',
    titleCn: '蛇',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'JOHN CROMPTON The snake',
  original: {
    paragraphs: [
      [
        { text: 'How it came about that snakes manufactured poison is a mystery.', translation: '蛇是怎样产生毒液的，这是一个谜。蛇的唾液本来和我们人的消化液一样柔和，但经过漫长的时间，演变成了今天仍无法分析清楚的毒液。毒液不是生存竞争强加给它们的，它们也可以不用毒液捕捉动物而生存，就像今天成千上万的无毒蛇那样。毒液对毒蛇来说只不过是一种舒适生存的优越手段，它使蛇不用费多大力气就能捕获到食物，轻咬一口即可。为什么只有蛇才有毒液呢？譬如说，如果猫有毒液，那对猫会大有帮助，它就不必再和又大又凶的老鼠边跑边博斗了，也不必再和大兔子扭斗了，只要咬一口，就不必再费大力气。因此，任何食肉动物有了毒液，都能从中获益。不过，当它们相互撕打时，毒液就成了利弊参半的武，可以杀死对方，也可以被对方的毒液杀死。然而，在脊椎动物中，大自然神秘模测地只选择了蛇（还有一种蜥蜴），人们弄不清楚大自然为什么在某些蛇的身上调制出如此高效的毒液来。 人们可能认为，唾液转变成毒液，其中有固定的程序。其实没有。有些蛇产生的毒液也在各方面与另外一些毒蛇产生的毒液不同，就像砒霜不同于马钱子碱一样。不同毒蛇产生的毒液产生的效果不同，一种毒液作用于神经，另一种毒液作用于血液。 产生神经毒液的蛇有一种非洲树眼镜蛇和眼镜蛇，它们的毒液称为神经毒素。蝰蛇（蝮蛇）和响尾蛇产生血液毒素，称为溶血性毒液。这两种毒液都很可怕，但溶血性毒液尤其厉害。据说，神经毒液在两种毒液中是较为原始的一种，而溶血性毒液，打个比方说，是根据改良配方生产的一种较新的产品。不过，神经毒辣液比溶血性毒液在人身上起作用快得多。但是，这没有什么关系，因为蛇有毒液不是用来对付人的，而是对付它的猎物，诸如鼠类，毒液对这些猎物会立刻起作用。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Over the periods their saliva, a mild, digestive juice like our own, was converted into a poison that defies analysis even today.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was not forced upon them by the survival competition; they could have caught and lived on prey without using poison, just as the thousands of non-poisonous snakes still do.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Poison to a snake is merely a luxury; it enables it to get its food with very little effort, no more effort than one bite.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And why only snakes?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Cats, for instance, would be greatly helped; no running fights with large, fierce rats or tussles with grown rabbits -- just a bite and no more effort needed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In fact, it would be an assistance to all carnivores though it would be a two-edged weapon when they fought each other.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But, of the vertebrates, unpredictable Nature selected only snakes (and one lizard).', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One wonders also why Nature, with some snakes, concocted poison of such extreme potency.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'In the conversion of saliva into poison, one might suppose that a fixed process took place.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It did not; some snakes manufacture a poison different in every respect from that of others, as different as arsenic is from strychnine, and having different effects.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One poison acts on the nerves, the other on the blood.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'The makers of the nerve poison include the mambas and the cobras and their venom is called neurotoxic.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Vipers (adders) and rattlesnakes manufacture the blood poison, which is known as haemolytic.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Both poisons are unpleasant, but by far the more unpleasant is the blood poison.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is said that the nerve poison is the more primitive of the two, that the blood poison is, so to speak, a newer product from an improved formula.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Be that as it may, the nerve poison does its business with man far more quickly than the blood poison.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This, however, means nothing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Snakes did not acquire their poison for use against man but for use against prey such as rats and mice, and the effects on these of viperine poison is almost immediate.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L23: Article = {
    id: 'nce4-l23',
    lesson: 23,
    tag: 'C23',
    title: 'Bird flight',
    titleCn: '鸟的飞行方法',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'WILLIAM BEACH THOMAS A Countryman\'s Creed',
  original: {
    paragraphs: [
      [
        { text: 'No two sorts of birds practise quite the same sort of flight; the varieties are infinite; but two classes may be roughly seen.', translation: '没有任何两种鸟的飞行方式是相同的。鸟的飞行方式千差万别，但大体上可分为两类。任何一艘横度太平洋的轮船都会有一种小信天翁伴随飞行许多天。它们随船飞行一小时也难得见其扇动一下翅膀。沿船体的上升的气流和沿航线向前的气流给这种巨翼大鸟以足够的浮力和推力。信天翁是滑翔飞行的鸟类之王，它能自如地驾驭空气，但必须顺气流飞行。与滑翔鸟相对的另一类鸟中，数野鸭本领最高。它更近乎于人类自夸的“征服”了空气的发动机。野鸭及它们相似的鸽子有天赋的钢铁般的肌肉，占了体重的很大一部分。这些肌肉以巨大的力量扇动短小的翅膀，使这类鸟能顶着大风飞行很远的路才会疲劳。次于野鸭和鸽子的鸟，如鹧鸪，有相似的巨大推动力，但很快会疲劳。如果海风驱使它们飞行很长距离，你可以捡到一些因筋疲力尽而摔下来的鹧鸪。燕子充分兼有这两类鸟的长处，它既不疲劳，也不炫耀自己的飞翔力；在空中十分自如，可以飞行6，000英里，可以飞往北方做窝的老家，再从老家飞回；一边飞一边喂养会飞的雏燕，甚至在顶风时也能在气流中滑翔，似乎气流在帮它前进。这些鸟对我们是有益的，虽然我们不再从它们的飞翔姿态来占卜吉凶，连最迷信的村民也不再对喜鹊脱帽行礼，祝它早安了。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Any ship that crosses the Pacific is accompanied for many days by the smaller albatross, which may keep company with the vessel for an hour without visible or more than occasional movement of wing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The currents of air that the walls of the ship direct upwards, as well as in the line of its course, are enough to give the great bird with its immense wings sufficient sustenance and progress.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The albatross is the king of the gliders, the class of fliers which harness the air to their purpose, but must yield to its opposition.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the contrary school, the duck is supreme.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It comes nearer to the engines with which man has \'conquered\' the air, as he boasts.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Duck, and like them the pigeons, are endowed with steel-like muscles, that are a good part of the weight of the bird, and these will ply the short wings with such irresistible power that they can bore for long distances through an opposing gale before exhaustion follows.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Their humbler followers, such as partridges, have a like power of strong propulsion, but soon tire.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'You may pick them up in utter exhaustion, if wind over the sea has driven them to a long journey.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The swallow shares the virtues of both schools in highest measure.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It tires not, nor does it boast of its power; but belongs to the air,travelling it may be 6,000 miles to and from its northern nesting home, feeding its flown young as it flies, and slipping through a medium that seems to help its passage even when the wind is adverse.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Such birds do us good, though we no longer take omens from their flight on this side and that; and even the most superstitious villagers no longer take off their hats to the magpie and wish it good-morning.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L25: Article = {
    id: 'nce4-l25',
    lesson: 25,
    tag: 'C25',
    title: 'Non-auditory effects of noise',
    titleCn: '',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'D.E.BROADBENT Non-auditory effects of noise from Science Survey',
  original: {
    paragraphs: [
      [
        { text: 'Many people in industry and the Services, who have practical experience of noise, regard any investigation of this question as a waste of time; they are not prepared even to admit the possibility that noise affects people.', translation: '在工业部门工作和在军队中服役的许多人对噪声音有切身的体会，他们认为对这个问题进行调查中浪费时间，甚至不愿承认噪音可能对人有影响。另一方面，那些讨厌噪音的人有时会用不充分的证据来支持他们希望有一个较为安静的社会环境的要求。要求减少噪音是件好事，但是如果与拙劣的科学掺杂在一起的话，就不会被人们所信任，这是很遗憾的。 常见的一种指责是，噪音能引起精神病。例如，最近一家周报刊登了一篇文章，文章上方有一幅引人注目的插图，是一位表情沮丧的女子。图的文字说明：“她是又一个受害者，成了只会尖叫的可怜虫。”当人们急切地看完正文后，便知道这女子是个打字员，办公室打字机的声音使她越来越烦，最终住进了精神病医院。这类奇闻的疑难之处是无法区别因果关系。是噪音引起了（精神）病呢，还是（精神）病的症状之一是对噪音的抱怨？另有一位病人可能同样有理由抱怨说，她的邻居们正在联合起来对她进行诽谤和迫害，不过，人们不会轻信她的抱怨。 对于噪音问题，需要对大量生活在噪音中的人进行研究，看一看他们是否比其他人更易患精神病。例如，美国海军前些时候调查了许多在航空母航上工作的人，这次调查被称之为：“安内英工程”。即使住在离机场几英里以外的地方，机场的噪音也会使人难受。因此，如果你能想像出和几个中队的喷气机同在一个甲板上是什么滋味儿的话，你就会认识到现代海军是研究噪音的好地方。但是，不管进行精神病学的调查访问，还是进行客观的测试，都不能显示噪音对这些美国水兵有任何影响。这个结果只不过证实了美国和英国早些时候的研究结论：如果噪音对精神健康有影响的话，那也一定是微乎其微，以致现代的精神病诊断方法还发现不了。这并不是证实不存在噪音对健康的影响。但它确实说明，噪音的危险性 -- 比如说 -- 比在孤儿院长大所受的危害要小一些，孤儿院才是真正危害精神健康的地方。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On the other hand, those who dislike noise will sometimes use most inadequate evidence to support their pleas for a quieter society.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This is a pity, because noise abatement really is a good cause. and it is likely to be discredited if it gets to be associated with bad science.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One allegation often made is that noise produces mental illness.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A recent article in a weekly newspaper, for instance, was headed with a striking illustration of a lady in a state of considerable distress, with the caption \'She was yet another victim, reduced to a screaming wreck \'.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'On turning eagerly to the text, one learns that the lady was a typist who found the sound of office typewriters worried her more and more until eventually she had to go into a mental hospital.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Now the snag in this sort of anecdote is of course that one cannot distinguish cause and effect.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Was the noise a cause of the illness, or were the complaints about noise merely a symptom?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Another patient might equally well complain that her neighbours were combining to slander her and persecute her, and yet one might be cautious about believing this statement.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'What is needed in the case of noise is a study of large numbers of people living under noisy conditions, to discover whether they are mentally ill more often than other people are.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some time ago the United States Navy, for instance, examined a very large number of men working on aircraft carriers: the study was known as Project Anehin.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It can be unpleasant to live even several miles from an aerodrome; if you think what it must be like to share the deck of a ship with several squadrons of jet aircraft, you will realize that a modern navy is a good place to study noise.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But neither psychiatric interviews nor objective tests were able to show any effects upon these American sailors.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This result merely confirms earlier American and British studies: if there is any effect of noise upon mental health it must be so small that present methods of psychiatric diagnosis cannot find it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'That does not prove that it does not exist; but it does mean that noise is less dangerous than, say, being brought up in an orphanage -- which really is a mental health hazard.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'D.E.BROADBENT Non-auditory effects of noise from Science Survey', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L26: Article = {
    id: 'nce4-l26',
    lesson: 26,
    tag: 'C26',
    title: 'The past life of the earth',
    titleCn: '地球上的昔日生命',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'ERROL WHITE The past life of the earth from Discovery',
  original: {
    paragraphs: [
      [
        { text: 'It is animals and plants which lived in or near water whose remains are most likely to be preserved, for one of the necessary conditions of preservation is quick burial, and it is only in the seas and rivers, and sometimes lakes, where mud and silt have been continuously deposited, that bodies and the like can be rapidly covered over and preserved.', translation: '只有生活在水中或水边的动植物尸体最有可能被保存下来，因为保存的必要条件之一是迅速掩埋，所以只有在泥沙不停淤积的海洋和江河里，有时在湖泊里，尸体之类的东西才能被迅速地覆盖而保存下来。 即使是在最有利的环境中，死去的生物中也只有一小部分能在开始腐烂前，或更可能在被食腐动物吃掉之前，被这样保存下来。因为一切生物都是靠吃别的东西来活命的，不管这种东西是植物还是动物，死的还是活的，因此，生物偶尔才能避免被吃掉的命运。曾在陆地上生活过的动植物的遗体被保存下来的更为罕见，因为陆地上几乎没有什么东西覆盖它们。你可以想象出天上有看得见的飞来飞去、数不清的鸟，地上有不显眼的无数的老鼠和田鼠之类的小动物，但是，除非在路上，很少有人遇到这些动物的尸体，因为它们腐败之后很快就被风化掉，或被别的动物吃掉了。 几乎总是由于某些特殊的条件，陆地动物的遗体才被存下来，如掉进难以到达的洞穴，或掉进冰河裂缝里，或者像西伯利亚长毛象那样掉进冰窟中，有时整个动物像被放在冰箱里一样被保存下来，著名的那林索夫卡长毛象就是这样被保存下来的，而且保存得很好。它嘴里还留着冷杉 -- 它掉进冰河裂隙折断脊椎柱之前的最后一顿饭。这头长毛象已被修复，现存于圣彼得堡古生物学博物馆。有的动物掉进天然沥清坑里被保存下来，如在兰桥.拉.布里 -- 现在是洛杉矶的郊区发现的大象、剑齿虎和许多其他动物。显然，事情的经过是这样：沥青坑里积存了水，大象那样的大动物冒险到似乎坚固的水面上去饮水，立即掉进了沥青坑。大象死后，一些食肉动物，如剑齿虎和大灰狼就来吃大象，结果遭到了同样的命运。沥青坑里还有无数只鸟的尸体。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But even in the most favourable circumstances only a small fraction of the creatures that die are preserved in this way before decay sets in or, even more likely, before scavengers eat them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'After all, all living creatures live by feeding on something else, whether it be plant or animal, dead or alive, and it is only by chance that such a fate is avoided.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The remains of plants and animals that lived on land are much more rarely preserved, for there is seldom anything to cover them over.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When you think of the innumerable birds that one sees flying about, not to mention the equally numerous small animals like field mice and voles which you do not see, it is very rarely that one comes across a dead body, except, of course, on the roads.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They decompose and are quickly destroyed by the weather or eaten by some other creature.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'It is almost always due to some very special circumstances that traces of land animals survive, as by falling into inaccessible caves, or into an ice crevasse, like the Siberian mammoths, when the whole animal is sometimes preserved, as in a refrigerator.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This is what happened to the famous Beresovka mammoth which was found preserved and in good condition.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In his mouth were the remains of fir trees - the last meal that he had before he fell into the crevasse and broke his back.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The mammoth has now been restored in the Palaeontological Museum in St. Petersburg.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Other animals were trapped in tar pits, like the elephants, saber-toothed cats and numerous other creatures that are found at Racho La Brea, which is now just a suburb of Los Angeles.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Apparently what happened was that water collected on these tar pits, and the bigger animals like the elephants ventured out on to the apparently firm surface to drink, and were promptly bogged in the tar.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And then, when they were dead, the carnivores, like the sabre-toothed cats and the giant wolves, came out to feed and suffered exactly the same fate.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There are also endless numbers of birds in the tar as well.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L27: Article = {
    id: 'nce4-l27',
    lesson: 27,
    tag: 'C27',
    title: 'The \'Vasa\' ＂',
    titleCn: '瓦萨＂号',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: "ROY SAUNGERS The Raising of the 'Vasa' from The Listener",
  original: {
        paragraphs: [
      [
        { text: 'From the seventeenth-century empire of Sweden, the story of a galleon that sank at the start of her maiden voyage in 1628 must be one of the strangest tales of the sea.', translation: '1628年，一艘大帆船在处女航时就沉没了，这个从7世纪瑞典帝国流传至今的故事无疑是航海史上最离奇的事件之一。这艘大船在斯德哥尔摩港口的海底躺了将近3个半世纪之后，直到1956年才被发现。这就是“瓦萨”号，帝国大舰队的皇家旗舰。 当时号称“北方飓风”的国王古斯夫斯.阿道尔弗正处在“三十年战争”的军事鼎盛阶段，他亲自规定了这艘船的规模和武器配备。3层的火炮甲板上装着64门青铜加农炮，目的就是要在不断增长的瑞典势力中起主导作用。 1628年8月10日，“瓦萨”号准备首航时，斯德哥尔摩一片欢腾。人们从斯开波斯布朗和周围的岛屿前来观看这艘美丽的战船扬帆起航，乘风前进。瑞典人辛辛苦苦干了3年才建成这件水上艺术品，它比以往任何船只雕刻得都更加精美，装饰得都更加华丽。高耸的船楼上雕刻了令人眼花缭乱的神仙、妖魔、骑士、国王、武士、美人鱼和小天使，还有用红色、金黄色、蓝色绘制的光彩夺目的兽形图案，象征着勇敢、力量和残暴，以激起当时崇尚迷信的水手们的想像。 这时，停泊在港口的其他战船向“瓦萨”号鸣炮致礼，“瓦萨”号也鸣炮回礼。当“瓦萨”号从弥漫的礼炮烟云中出现时，船头下浪花四溅，舰旗迎风招展，三角旗随风飘动，微风鼓起风帆，金碧辉煌的船楼闪耀着灿烂的色彩。“瓦萨”号展现的壮观景象是斯德哥尔摩人从未见过的。船上的炮眼开着，炮口虎视眈眈地向外窥视着。 当风力增强时，突然刮来一阵大风，“瓦萨”号奇怪地摇晃了一下，便向左舷倾斜。炮长命令把左舷上所有大炮搬到右舷上来以抵消船的倾斜，但甲板的倾斜度仍在增加。当物品、压舱物、弹药和400个人轰地一声滑向陡斜的左舷时，岸上的观众听到了雷鸣般的轰响。下层炮眼已淹没在水里，涌进船舱的水给“瓦萨”号带来了难以逃脱的厄运。就这样，想要统治波罗的海的大型战舰“瓦萨”号，在它壮丽的起航时刻，带着全身飘扬的彩旗，沉没在了它诞生的港口。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For nearly three and a half centuries she lay at the bottom of Stockholm harbour until her discovery in 1956.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This was the Vasa, royal flagship of the great imperial fleet.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'King Gustavus Adolphus, \'The Northern Hurricane\', then at the height of his military success in the Thirty Years\' War, had dictated her measurements and armament.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Triple gun-decks mounted sixty-four bronze cannon.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'She was intended to play a leading role in the growing might of Sweden.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As she was prepared for her maiden voyage on August 10th, 1628, Stockholm was in a ferment.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From the Skeppsbron and surrounding islands the people watched this thing of beauty begin to spread her sails and catch the wind.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They had laboured for three years to produce this floating work of art; she was more richly carved and ornamented than any previous ship.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The high stern castle was a riot of carved gods, demons, knights, kings, warriors, mermaids, cherubs; and zoomorphic animal shapes ablaze with red and gold and blue, symbols of courage, power, and cruelty, were portrayed to stir the imaginations of the superstitious sailors of the day.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then the cannons of the anchored warships thundered a salute to which the Vasa fired in reply.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As she emerged from her drifting cloud of gun smoke with the water churned to foam beneath her bow, her flags flying, pennants waving, sails fillng in the breeze, and the red and gold of her superstructure ablaze with colour, she presented a more majestic spectacle than Stockholmers had ever seen before.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'All gun-ports were open and the muzzles peeped wickedly from them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As the wind freshened there came a sudden squall and the ship made a strange movement, listing to port.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Ordnance Officer ordered all the port cannon to be heaved to starboard to counteract the list, but the steepening angle of the decks increased.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Then the sound of rumbling thunder reached the watchers on the shore, as cargo, ballast, ammunition and 400 people went sliding and crashing down to the port side of the steeply listing ship.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The lower gun-ports were now below water and the inrush sealed the ship\'s fate.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In that first glorious hour, the mighty Vasa, which was intended to rule the Baltic, sank with all flags flying-in the harbour of her birth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'ROY SAUNGERS The Raising of the \'Vasa\' from The Listener', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L29: Article = {
    id: 'nce4-l29',
    lesson: 29,
    tag: 'C29',
    title: 'The hovercraft',
    titleCn: '气垫船',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'EGON LARSEN The Pegasus Book of Inventors',
  original: {
    paragraphs: [
      [
        { text: 'Many strange new means of transport have been developed in our century, the strangest of them being perhaps the hovercraft.', translation: '本世纪已研制出许多新奇的交通工具，其中最新奇的要数气垫船了。1953年，有一位50多岁名叫克里斯托弗.科克雷的原电子工程师，改行在诺福克郡的湖泊地区从事造船业，他向英国政府和工业界提出了他研究多年的一项计划。他的设想是：用一个低压空气或软垫来支撑船体，软垫周围用高压空气环绕。自那以后，人们很难决定是否应该将这种运载工具列为轮船、飞机，或是陆上交通工具，因为它是介于船和飞机之间。作为一个船舶技师，科克雷尔在寻找解决波浪阻力的方法，因为波浪阻力浪费掉了船在水面行驶的大量动力，从而限制了船的速度。他的解决办法是把船体提离水面，让船在一个气垫上行驶，气垫只有一两英尺厚。船底装上大量环状喷气嘴以实现这一目的。这样，船就能飞了，但飞不高。它的飞行限决于它所悬浮的水面或地面。 1959年，在苏伦特海峡进行的首次试航引起了轰动，气垫船先是在水面上行驶，后又登上海岸，爬上沙丘，最后停在路上。后来气垫船跨越英吉利海峡，平衡地在波浪上方行驶，波浪不再产生阻力。 从那以后，各种各样的气垫船出现了，并开始了定期航行服务。气垫船在非洲、澳大利亚等交通不发达地区特别有用。它能成为“飞行水果盘子”，把香蕉从种植园运到港口。大型的气垫班轮或许能跨越大西洋。未来的火车或许能成为“气垫火车”，靠气垫在单轨上行驶而不接触轨道，时速可达每小时300英里。气垫船的前途是不可限量的。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In 1953, a former electronics engineer in his fifties, Christopher Cockerell, who had turned to boat-building on the Norfolk Broads, suggested an idea on which he had been working for many years to the British Government and industrial circles.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was the idea of supporting a craft on a \'pad\', or cushion, of low-pressure air, ringed with a curtain of higher pressure air.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ever since, people have had difficulty in deciding whether the craft should be ranged among ships, planes, or land vehicles -- for it is something in between a boat and an aircraft.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As a shipbuilder, Cockerell was trying to find a solution to the problem of the wave resistance which wastes a good deal of a surface ship\'s power and limits its speed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'His answer was to lift the vessel out of the water by making it ride on a cushion of air, no more than one or two feet thick.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This is done by a great number of ring-shaped air jets on the bottom of the craft.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It \'flies\', therefore, but it cannot fly higher -- its action depends on the surface, water or ground, over which it rides.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'The first tests on the Solent in 1959 caused a sensation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The hovercraft travelled first over the water, then mounted the beach, climbed up the dunes, and sat down on a road.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Later it crossed the Channel, riding smoothly over the waves, which presented no problem.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Since that time, various types of hovercraft have appeared and taken up regular service.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The hovercraft is particularly useful in large areas with poor communications such as Africa or Australia; it can become a \'flying fruit-bowl\', carrying bananas from the plantations to the ports; giant hovercraft liners could span the Atlantic; and the railway of the future may well be the \'hovertrain\', riding on its air cushion over a single rail, which it never touches, at speeds up to 300 m.p.h. -- the possibilities appear unlimited.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L31: Article = {
    id: 'nce4-l31',
    lesson: 31,
    tag: 'C31',
    title: 'The sculptor speaks',
    titleCn: '雕塑家的语言',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'HENRY MOORE The Sculptor Speaks from The Listener',
  original: {
        paragraphs: [
      [
        { text: 'Appreciation of sculpture depends upon the ability to respond to form in three dimensions.', translation: '对雕塑的鉴赏力取决于对立体的反应能力。雕塑被说成是所有艺术中最难的艺术，可能就是这个道理。欣赏雕塑品当然比欣赏平面的艺术品要难。“形盲”的人数比 “色盲”的人数要多得多。正在学看东西的儿童起初只会分辨二维形态，不会判断距离和深度。慢慢地，由于自身安全和实际需要，儿童必须发展（部分通过触觉）粗略判断三维空间距离的能力。但是。大部分人在满足了实际需要后，就不再继续发展这种能力了。虽然他们对平面形式的感觉能达到相当准确的程度，但他们没有在智力和感情上进一步努力去理解存在于空间的整个形态。 而雕塑家就必须做到这一点。他必须勤于想像并且利用形体在空间中的完整性。可以说，当他想像一个物体时，不管其大小如何，他脑子里得到的是一个立体的概念，就好像完全握在自己手心里一样。他的大脑能从物体周围的各个角度勾画出其复杂的形象，他看物体的一边时，便知道另一边是个什么样子。他把自身和物体重心、质量、重量融为一体。他能意识到物体的体积，那就是它的形状在空气中所占的空间。 因此，敏锐的雕塑观赏者也必须学会把形体作为形体来感觉，不要靠描述和印象去想象。以鸟蛋为例。观赏者必须感觉到它是一个单一的实体形态，而完全不靠它的食用意义或它会变成鸟这样的文字概念来感觉。对于其他实体，如，贝壳、核桃、李子、梨子、蝌蚪、蘑菇、山峰、肾脏、胡萝卜、树干、鸟儿、花蕾、云雀、瓢虫、芦苇以及骨头也应这样来感觉。从这些形体出发，观赏者可进一步观察更为复杂的形体或若干形体的组合。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'That is perhaps why sculpture has been described as the most difficult of all arts; certainly it is more difficult than the arts which involve appreciation of flat forms, shape in only two dimensions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Many more people are \'form-blind\' than colour-blind.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The child learning to see, first distinguishes only two-dimensional shape; it cannot judge distances, depths.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Later, for its personal safety and practical needs, it has to develop (partly by means of touch) the ability to judge roughly three-dimensonal distances.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But having satisfied the requirements of practical necessity, most people go no further.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Though they may attain considerable accuracy in the perception of flat form, they do not make the further intellectual and emotional effort needed to comprehend form in its full spatial existence.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This is what the sculptor must do.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He must strive continually to think of, and use, form in its full spatial completeness.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He gets the solid shape, as it were, inside his head-he thinks of it, whatever its size, as if he were holding it completely enclosed in the hollow of his hand.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He mentally visualizes a complex form from all round itself; he knows while he looks at one side what the other side is like, he identifies himself with its centre of gravity, its mass, its weight; he realizes its volume, as the space that the shape displaces in the air.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And the sensitive observer of sculpture must also learn to feel shape simply as shape, not as description or reminiscence.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He must, for example, perceive an egg as a simple single solid shape, quite apart from its significance as food, or from the literary idea that it will become a bird.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And so with solids such as a shell, a nut, a plum, a pear, a tadpole, a mushroom, a mountain peak, a kidney, a carrot, a tree-trunk, a bird, a bud, a lark, a ladybird, a bulrush, a bone.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'From these he can go on to appreciate more complex forms or combinations of several forms.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'HENRY MOORE The Sculptor Speaks from The Listener', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L35: Article = {
    id: 'nce4-l35',
    lesson: 35,
    tag: 'C35',
    title: 'Space odyssey',
    titleCn: '太空探索',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],
  original: {
    paragraphs: [
      [
        { text: 'The Moon is likely to become the industrial hub of the Solar System, supplying the rocket fuels for its ships, easily obtainable from the lunar rocks in the form of liquid oxygen.', translation: '月球很可能成为太阳系的工业中心。从月球上的岩石中很容易提炼出液态氧，作为航天飞船的燃料。其原因在于月球的重力。因为月球的重只有地球的1/8，因此，从月球到地球的25万英里所消耗的能量要比从地球表面进入地球轨道的200英里所耗能量少97%。 这点听起来令人难以置信，但却很容易计算出来。要乘坐一枚火箭飞离地球，火箭的速度要达到每秒7英里，而从月球出发的相应速度是每秒1.5英里。由于月球表面的重力仅是地球表面的1/6 -- 还记得阿波罗飞船中的宇航员轻松地跳跃 -- 在月球上加速到每秒1.5英里比在地球上所用能源要少得多。月球居民在太空遨游的费用仅是地球上朋友飞越同样路所需费用的3%。 亚瑟.C.克拉克曾提议，一种创新的想法要经过以下3个阶段： 1 “根本不可能，不要浪费我的时间。” 2 “可能，但不值得做。” 3 “我一直说这是个好想法。” 如果有相当数量的人永久性地住在太空，征服火星的计划 -- 一个比月球远160倍的星球 -- 就可以明确地从第2阶段进入第3阶段。火星对未来的星际旅客来说有着特殊的魅力。美国、俄罗斯和欧洲都有许多热心此项事业的人 -- 其中的不少是认真和资深的科学家，他们一直梦想着把人送上火星。他们的目标是可以理解的。火星是太阳系里与地球最接近的一颗行星。这是一个红色沙漠的世界（因而得名：红色行星），无云的天空，凶猛的沙暴，比大峡谷还宽的裂缝，起码有一座山有珠穆朗玛峰的近两倍高。看起来，它很合适居住。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The reason lies in its gravity.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Because the Moon has only an eightieth of the Earth\'s mass, it requires 97 per cent less energy to travel the quarter of a million miles from the Moon to Earth-orbit than the 200 mile-journey from Earth\'s surface into orbit!', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'This may sound fantastic, but it is easily calculated.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To escape from the Earth in a rocket, one must travel at seven miles per second.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The comparable speed from the Moon is only 1.5 miles per second.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Because the gravity on the Moon\'s surface is only a sixth of Earth\'s (remember how easily the Apollo astronauts bounded along), it takes much less energy to accelerate to that 1.5 miles per second than it does on Earth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Moon-dwellers will be able to fly in space at only three per cent of the cost of similar journeys by their terrestrial dwellers will be able to fly in space at only three per cent of the cost of similar journeys by their terrestrial cousins.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Arthur C.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Clark once suggested a revolutionary idea passes through three phases:', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: '1 \'It\'s impossible -- don\'t waste my time.\'', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: '2 \'It\'s possible, but not worth doing.\'', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: '3 \'I said it was a good idea all along.\'', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'The idea of colonising Mars -- a world 160 times more distant time the Moon -- will move decisively from the second phase to the third, when a significant number of people are living permanently in space.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mars has an extraordinary fascination for would-be voyagers.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'America, Russia and Europe are filled with enthusiasts -- many of them serious and senior scientists -- who dream of sending people to it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Their aim is understandable.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is the one world in the Solar System that is most like the Earth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is a world of red sandy deserts (hence its name -- the Red Planet), cloudless skies, savage sandstorms, chasms wider than the Grand Canyon and at least one mountain more than twice as tall as Everest.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It seems ideal for settlement.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: '7 DAYS, February 19, 1989', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L36: Article = {
    id: 'nce4-l36',
    lesson: 36,
    tag: 'C36',
    title: 'The cost of government',
    titleCn: '政府的开支',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'RAYMOND FROST The Backward Society',
  original: {
    paragraphs: [
      [
        { text: 'If a nation is essentially disunited, it is left to the government to hold it together.', translation: '如果一个国家实际上处于分裂状态，使之联合起来就是政府的事了。这样的一来就增加了政府的开支，从而相应地减少了可以用来了展国家的那部分经济资源。不应忘记，在一个贫穷落后的国家里，那部分财力是很有限的。凡是政府管理费用高的地方，用于发展国家经济的资金就会相应地减少。 把国家的状况同私人企业的状况加以比较，就可以看清这个问题。一个企业为了继续经营，不得不支出一定的费用和开销。就我们的目的而言，我们只关心一种费用 -- 企业行政管理费。一家企业的行政管理开支类似于一个国家的政府管理所用的开支。如果企业中的每个人都在真诚地为提高企业利润而工作，那么企业的管理费用就会降低到相应的程度。如果企业的每个人都信得过，人人都认真负责，在各自的工作范围内发挥主动性，行政管理费用就会降低。行政管理费用的降低的原因是：每项工作只需要一个人去完成，用不着另外再有一个人检查工作。督促他遵守章程，或向有关人士汇报他的工作。但是，如果企业中谁也不可信赖会对工作尽忠守职，那公企业就会需大批的管理人员、检查人员和带班人员，管理费用就会相应在增加。管理费用增加了，那么在扣除管理费用后，企业的收入就降低了。因此用于分红的金额就用于将来开拓和发展的投资就相应地减少了。 一个国家的情况也完全相同。如果人民忠于职守，举止规矩，能受到政府的信赖，那么政府就不需要大批的警察和文职人员运去促使人民遵纪守法。但是，如果一个国家处于分裂状态，政府不能相信人民的行动有利于国家，那么政府就不得不对人民进行监督、检查和控制。因此，一个处于分裂的国家必须要支付过高的行政管理费用。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This increases the expense of government, and reduces correspondingly the amount of economic resources that could be used for developing the country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'And it should not be forgotten how small those resources are in a poor and backward country.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Where the cost of government is high, resources for development are correspondingly low.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'This may be illustrated by comparing the position of a nation with that of a private business enterprise.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'An enterprise has to incur certain costs and expenses in order to stay in business.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For our purposes, we are concerned only with one kind of cost -- the cost of managing and administering the business.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Such administrative overheads in a business are analogous to the cost of government in a nation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The administrative overheads of a business are low to the extent that everyone working in the business can be trusted to behave in a way that best promotes the interests of the firm.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If they can each be trusted to take such responsibilities and to exercise such initiative as falls within their sphere, then administrative overheads will be low.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It will be low because it will be necessary to have only one man looking after each job, without having another man to check upon what he is doing, keep him in line, and report on him to someone else.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But if no one can be trusted to act in a loyal and responsible manner towards his job, then the business will require armies of administrators, checkers, and foremen and administrative overheads will rise correspondingly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As administrative overheads rise, so the earnings of the business after meeting the expense of administration, will fall; and the business will have less money to distribute as dividends or invest directly in its future progress and development.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'It is precisely the same with a nation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To the extent that the people can be relied upon to behave in a loyal and responsible manner, the government does not require armies of police and civil servants to keep them in order.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But if a nation is disunited, the government cannot be sure that the actions of the people will be in the interests of the nation; and it will have to watch, check, and control the people accordingly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A disunited nation therefore has to incur unduly high costs of government.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L38: Article = {
    id: 'nce4-l38',
    lesson: 38,
    tag: 'C38',
    title: 'Water and the traveller',
    titleCn: '水和旅行者',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'RICHARD DAWOOD Travellers\' Health',
  original: {
    paragraphs: [
      [
        { text: 'Contamination of water supplies is usually due to poor sanitation close to water sources, sewage disposal into the sources themselves, leakage of sewage into distribution systems or contamination with industrial or farm waste.', translation: '水源的污染通常是由于接近水源的地方卫条件太差而造成的：污水排入水源，污水渗入给水系统或工农业污水造成污染。即使管道供水系统在水源处安全的，等水到达龙头时就不一定总是安全的了。断断续续的水管应该被视为是非常可疑的。 短途旅行到水质不保险的地区时，应避免饮用水龙头的水或未经处理任何其他来源的水。最好仅饮用开水，名牌瓶装或罐装水 -- 装瓶厂通常遵循国际水处理的标准。碳酸饮料是酸性的，就更安全一些。确保瓶子是当你面开启的，瓶口清洁干燥。 烧开一直是水处理的一种好办法。有的酒店根据要求可提供开水，这些开水可用于饮用和刷牙。如果有相配的电压，可以煮少量水的便携式热水装置是有用的。应谢绝任何不明来源的冷饮。 冰块只有当制造冰块的水安全时才是保险的，只有知道冰块安全时才能加入饮料。可以把饮料置于冰块之上来冷却，而不是把冰块加进饮料之中。 酒精可能是医学上的消毒剂，但决不可用来消毒饮用水。乙醇的浓度为50%至70%时比较有效，浓度低于20%时，杀菌能力基本上就不存在了。强度标为95的酒中含有47%的酒精。要提防甲基化酒精，那是剧毒的，永远不能掺入饮用水。 如果没有其他安全的饮用水，水管中流出的烫手的水可以留下来冷却。这种水一般是安全的。那些计划去偏远地区旅行，或在饮用水不现成的国家居住的人，应该知道如何使水适于饮用的各种办法。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Even if a piped water supply is safe at its source, it is not always safe by the time it reaches the tap.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Intermittent tap-water supplies should be regarded as particularly suspect.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Travellers on short trips to areas with water supplies of uncertain quality should avoid drinking tap-water, or untreated water from any other source.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is best to keep to hot drinks, bottled or canned drinks of well-known brand names -- international standards of water treatment are usually followed at bottling plants.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Carbonated drinks are acidic, and slightly safer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Make sure that all bottles are opened in your presence, and that their rims are clean and dry.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Boiling is always a good way of treating water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some hotels supply boiled water on request and this can be used for drinking, or for brushing teeth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Portable boiling elements that can boil small quantities of water are useful when the right voltage of electricity is available.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Refuse politely any cold drink from an unknown source.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Ice is only as safe as the water from which it is made, and should not be put in drinks unless it is known to be safe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Drinks can be cooled by placing them on ice rather than adding ice to them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Alcohol may be a medical disinfectant, but should not be relied upon to sterilize water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ethanol is more effective at a concentration of 50-70 per cent; below 20 per cent, its bactericidal action is negligible.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Spirits labelled 95 proof contain only about 47 per cent alcohol.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Beware of methylated alcohol, which is very poisonous, and should never be added to drinking water.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'If no other safe water supply can be obtained, tap water that is too hot to touch can be left to cool and is generally safe to drink.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Those planning a trip to remote areas, or intending to live in countries where drinking water is not readily available, should know about the various possible methods for making water safe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L39: Article = {
    id: 'nce4-l39',
    lesson: 39,
    tag: 'C39',
    title: 'What every writer wants',
    titleCn: '作家之所需',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'JOHN LE CARRE What every writer wants from Harper\'s',
  original: {
    paragraphs: [
      [
        { text: 'I have known very few writers, but those I have known, and whom I respect, confess at once that they have little idea where they are going when they first set pen to paper.', translation: '我认识的作家寥寥无几，然而凡是我所认识和尊敬的作家，都立即承认在他们动笔时，不清楚要写什么，怎么写。他们心中只在一个或两个角色。他们处于急切不安的状态，而被当作是灵感。他们无不承认，一旦“旅程”开始，“目的地”常有急剧的变化。据我所知，有位作家花了9个月的时间写了一部关于克什米尔的小说，后来却把整个故事背景换成了苏格兰高地。我从未听说过任何一位作家像我们在学校那样，动笔前先列什么提纲。作家在剪裁修改、构思时间、穿插情节、以至从头重写的过程中，会领悟到素材中很多东西是他刚动笔时所未意识到的。这种有机的加工过程往往达到不寻常自我发现的境界，具有难以言表的构思魅力。一个朦胧的形象出现在作家的脑海里，他左添一笔，右添一笔，形象反而消逝了；可是，好像还有什么东西存在着，不把它捕捉到，作家是不会罢休的。有时，一个作家一本书写完了，但兴奋仍不消散。我听说一些作家，除了自己的书外，别的书一概不读，犹如希腊神话中那位漂亮的少年，站在镜前，不能辨认自身的真面目。由于这个原因，作家喋喋不休地谈论自己的书，挖掘其隐晦的含义，询问周围人的反应。作家如此行事当然被人误解。他还不如给人讲一个犯罪案件或一个恋爱故事。顺便说一句，他也是个不可饶恕的令人厌烦的人。 这种企图消除自己和读者之间距离的作法，企图用不了解自己的人的观点来研究自己塑造的形象的作法，会导致作家的毁灭，因为他已经开始为取悦他人而写作了。 一两年前，一位年轻的英国作家发表了中肯的看法。他说，初稿是才华，以后各稿是艺术。也是由于这个原因，作家同任何艺术家一样，找不到可休息的场所，找不到伙伴和活动使自己得到安逸。任何局外人的判断也比不上他内心的正确判断。一旦作家从内心的紊乱中理出头绪，就应该按任何评论家想像不到的无情规范约束自己写作；当他沽名钓誉时，他就脱离了自我生活，脱离了对自己灵魂最深处世界的探索。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'They have a character, perhaps two; they are in that condition of eager discomfort which passes for inspiration; all admit radical changes of destination once the journey has begun; one, to my certain knowledge, spent nine months on a novel about Kashmir, then reset the whole thing in the Scottish Highlands.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I never heard of anyone making a \'skeleton\', as we were taught at school.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the breaking and remaking, in the timing, interweaving, beginning afresh, the writer comes to discern things in his material which were not consciously in his mind when he began.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This organic process, often leading to moments of extraordinary self-discovery, is of an indescribable fascination.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A blurred image appears; he adds a brushstroke and another, and it is gone; but something was there, and he will not rest till he has captured it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sometimes the yeast within a writer outlives a book he has written.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I have heard of writers who read nothing but their own books; like adolescents they stand before the mirror, and still cannot fathom the exact outline of the vision before them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For the same reason, writers talk interminably about their own books, winkling out hidden meanings, super-imposing new ones, begging response from those around them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Of course a writer doing this is misunderstood: he might as well try to explain a crime or a love affair.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'He is also, incidentally, an unforgivable bore.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'This temptation to cover the distance between himself and the reader, to study his image in the sight of those who do not know him, can be his undoing: he has begun to write to please.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'A young English writer made the pertinent observation a year or two back that the talent goes into the first draft, and the art into the drafts that follow.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For this reason also the writer, like any other artist, has no resting place, no crowd or movement in which he may take comfort, no judgment from outside which can replace the judgment from within.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A writer makes order out of the anarchy of his heart; he submits himself to a more ruthless discipline than any critic dreamed of, and when he flirts with fame, he is taking time off from living with himself, from the search for what his world contains at its inmost point.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L40: Article = {
    id: 'nce4-l40',
    lesson: 40,
    tag: 'C40',
    title: 'Waves',
    titleCn: '海浪',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],
  original: {
    paragraphs: [
      [
        { text: 'Waves are the children of the struggle between ocean and atmosphere, the ongoing signatures of infinity.', translation: '海浪是大海和空气相斗的产物，无限的一种不间断的标志。太阳光刺激了地球的大气层，并给予它能量；阳光使空气开始流动，产生节奏，获得生命。然后，风把太阳的住处带给了大海，海洋用波浪的形式传递这个信息 -- 一个源过流长、高雅而有力的信息。 这些海浪属于地球上最复杂的自然现象。它们的基本特征包括浪峰（波浪的最高点）、波谷（最低点）、浪高（从波谷到浪峰的垂直距离）、波长（两个浪峰间的水平距离）和周期（海峰走过一个波长所需的时间）。虽然，海浪给人的印象是一堵由水组成的墙向你压过来，而实际上，浪从水中移过，而水则留在原处。如果水和浪一起移动的话，那么大海和海里所有的东西就会向岸边疾涌过来，带来明显的灾难性后果。 穿过深水的海浪使水面上的一个微粒按照一种近乎圆形的轨道移动，先把微粒拉向前移动的海浪，然后推上波浪，随着波浪移动，然后 -- 当波浪把微粒留在身后时 -- 又回到出发点。 从成熟到消亡，波浪和其他任何“活动中”的东西一样，都受制于共同的法则。一度它获得非凡的个性，但最终又被重新融进生命的大洋。 公海上起伏的波浪是由3个自然因素构成的：风、地球的运动或震颤和月亮、太阳的引力。一旦波浪形成，地球引力是持续不断企图使海面复原为平面的力量。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Rays from the sun excite and energize the atmosphere of the earth, awakening it to flow, to movement, to rhythm, to life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The wind then speaks the message of the sun to the sea and the sea transmits it on through waves -- an ancient, exquisite, powerful message.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'These ocean waves are among the earth\'s most complicated natural phenomena.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The basic features include a crest (the highest point of the wave), a trough (the lowest point), a height (the vertical distance from the trough to the crest), a wave length (the horizontal distance between two wave crests), and a period (which is the time it takes a wave crest to travel one wave length).', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Although an ocean wave gives the impression of a wall of water moving in your direction, in actuality waves move through the water leaving the water about where it was.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If the water was moving with the wave, the ocean and everything on it would be racing in to the shore with obviously catastrophic results.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'An ocean wave passing through deep water causes a particle on the surface to move in a roughly circular orbit, drawing the particle first towards the advancing wave, then up into the wave, then forward with it and then -- as the wave leaves the particles behind -- back to its starting point again.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'From both maturity to death, a wave is subject to the same laws as any other \'living\' thing.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'For a time it assumes a miraculous individuality that, in the end, is reabsorbed into the great ocean of life.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'The undulating waves of the open sea are generated by three natural causes: wind, earth movements or tremors, and the gravitational pull of the moon and the sun.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Once waves have been generated, gravity is the force that drives them in a continual attempt to restore the ocean surface to a flat plain.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'from World Magazine (BBC Enterprises)', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L41: Article = {
    id: 'nce4-l41',
    lesson: 41,
    tag: 'C41',
    title: 'Training elephants',
    titleCn: '训练大象',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'RICHARD CARRINGTON Elephants',
  original: {
    paragraphs: [
      [
        { text: 'Two main techniques have been used for training elephants, which we may call respectively the tough and the gentle.', translation: '驯象有两种主要的方法，我们分别称之为强硬法和温柔法。强硬法就是驱使象去干活，把它打顺从为止。且不说道义问题，这本身就是一种愚蠢的训练方法，因为这种方法训练会使动物反感，在以后某个时期可能会变成伤人的动物。温柔法要求在最初阶段保持较大的耐心，但这种方法可以训练出性情愉快、脾气温顺，能忠实为人服务多年的大象。 驯象中至关重要的是指派一名专门的驯象员，全面负责这项工作。大象和狗一样，喜欢有一个专一的主人，而且会对主人产生相当深厚的私人感情。甚至有这样的故事：训练了一半的小象，由于不可避免的情况与他们的主人分离后，竟拒绝吃食，消瘦至死。这种极端的事例虽不可全信，但强调了一项基本原则，象和驯象员之间的关系是驯象成功与否的关健。 捕捉15至20岁之间年龄的大象进行驯象最为经济。 这个年龄的象差不多已能干重活，可以很快挣回饲养它的开支。但这个年龄的象不易驯服，因此开始阶段需要有一位强有力的老手。捕来拴在树上的大象，每当有人走近它时，就会向前猛冲并发出尖叫，甚至一连几天都由于愤怒和恐惧而拒绝进食。有时，把一头已驯服的象拴在旁边能给野象以信心。在大多数情况下，刚缚来的象会慢慢静下来，接着开始吃食。下一步就是把象带到训练场所，这是一件棘手的事，需要在它两侧拴上两头驯服的大象才能完成。 几只象同时训练时，通常是把新到的安置在两头训练得很好的大象的象厩中间，然后给它以充足的食物和水，一定不要惊扰它，以便让他能适应新居的气氛，并且看到自己的同伴身上没有发生让自己担惊受怕的事。当它进食正常了，训练就开始。驯练员手持一根有锋利金属尖头的长棒，站在象前。两位助手骑在驯服的象的背上，从两侧控制新捕的象，其他人唱着单调的歌声用手抚摸象的皮肤。据说这是为了使象产生愉快的感觉，为了加强这种效果，人们还按象的年龄性别，给以亲切的外号，如“嗬！我的孩子”、“嗬！我的爸爸”、“嗬！我的妈妈”。然而大象不会立刻被这些讨好的话感动，而往往是用鼻子朝各个方向猛烈地甩动。训练员要用有锋利金属尖的长棒控制它的这种举动，象鼻子最后疼得卷了起来，以后它就很少用鼻子去进攻了。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The former method simply consists of setting an elephant to work and beating him until he does what is expected of him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Apart from any moral considerations this is a stupid method of training, for it produces a resentful animal who at a later stage may well turn man-killer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The gentle method requires more patience in the early stages, but produces a cheerful, good-tempered elephant who will give many years of loyal service.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'The first essential in elephant training is to assign to the animal a single mahout who will be entirely responsible for the job.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Elephants like to have one master just as dogs do, and are capable of a considerable degree of personal affection.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There are even stories of half-trained elephant calves who have refused to feed and pined to death when by some unavoidable circumstance they have been deprived of their own trainer.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Such extreme cases must probably be taken with a grain of salt, but they do underline the general principle that the relationship between elephant and mahout is the key to successful training.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'The most economical age to capture an elephant for training is between 15 and 20 years, for it is then almost ready to undertake heavy work and can begin to earn its keep straight away.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But animals of this age do not easily become subservient to man, and a very firm hand must be employed in the early stages.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The captive elephant, still roped to a tree, plunges and screams every time a man approaches, and for several days will probably refuse all food through anger and fear.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Sometimes a tame elephant is tethered nearby to give the wild one confidence, and in most cases the captive gradually quietens down and begins to accept its food.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The next stage is to get the elephant to the training establishment, a ticklish business which is achieved with the aid of two tame elephants roped to the captive on either side.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'When several elephants are being trained at one time, it is customary for the new arrival to be placed between the stalls of two captives whose training is already well advanced.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is then left completely undisturbed with plenty of food and water so that it can absorb the atmosphere of its new home and see that nothing particularly alarming is happening to its companions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When it is eating normally, its own training begins.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The trainer stands in front of the elephant holding a long stick with a sharp metal point.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Two assistants, mounted on tame elephants, control the captive from either side, while others rub their hands over his skin to the accompaniment of a monotonous and soothing chant.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This is supposed to induce pleasurable sensations in the elephant, and its effects are reinforced by the use of endearing epithets. such as \'ho! my son\', or \'ho! my father\', or \'my mother\', according to the age and sex of the captive.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The elephant is not immediately susceptible to such blandishments, however, and usually lashes fiercely with its trunk in all directions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'These movements are controlled by the trainer with the metal-pointed stick, and the trunk eventually becomes so sore that the elephant curls it up and seldom afterwards uses it for offensive purposes.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'A wild Indian elephant is roped to two trained ones during the first few days of training.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L42: Article = {
    id: 'nce4-l42',
    lesson: 42,
    tag: 'C42',
    title: 'Recording and earthquake',
    titleCn: '记录地震',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],
  original: {
    paragraphs: [
      [
        { text: 'An earthquake comes like a thief in the night, without warning.', translation: '地震就像夜间的小偷，不打招呼就来了。因此，有必要发明一种仪器，既不打盹儿，也不睡觉。有些装置非常简单。例如，有一种装置是由一些长短、粗细不同的木棒组成，就像九柱戏的木棒一样坚立着，一旦有地震，就会震动竖立在坚硬的桌上的木棒。如果地震轻微，只有不稳定的木棒倒下；如果地震剧烈，所有的木棒都会例下。由于地震太弱而未惊醒科学家时，木棒倒下的多少和倒下的方向就为科学家记录下了地震的强度和地震方向。 但是，如果要取得真正重大的进展，需要有比这种装置精细得多的仪器。理想的目标是设计出这样一种仪器：当地震发生时，它能用笔在纸上记录下大地和桌子运动情况。我写字时，笔是移动的，纸是静止的。毫无疑问，经过练习，我最终能够学会笔不动而纸动来写字。这听起来似乎是一种愚蠢的想法，但是早期记录地震波的仪器（地震仪）正是采用了这中思路。可是，当桌子、夹笔装置、纸都在移动时，怎么能书写得清楚呢？可以从我们的日常生活观察中找到这个问题的答案。一个站在公共汽车或火车上，当车突然开动时，他为什么会倾倒呢？这是因为他的脚动了，而他的头保持着静止。再做一个简单的实验可以帮助我们进一步理解这个问题。把一个生物拴在一根长绳子的一端，把手高高举在空中握住绳子，让重物几乎接触地面。然后把手前后左右以及旋转摆动，但不要上下摆动。结果会发现，重物是动了，但动得很小，甚至没动。假定把一支笔拴在重物上，笔尖落在地板上的一张纸上，假定地震发生了，地板、纸、你和你的手都会动，重物和笔却不动。由于纸在笔下来回运动，纸的表面就会用墨水记录下地板运动的情况。根据这一原理，制造出了最初的地震仪器，但是纸是卷在慢慢放置的圆筒上的。只要一切都是静止的，笔就会划出一条直线；但是，圆筒受到震动，笔所画出的线就会就会左右摆动。然而，这里所说的仪器记录下来的只是地震波运动中的水平部份，地震波的运动实际比这要复杂得多。假如我们真能看到诸如岩石中一个沙粒子的运动轨迹，那就像一只嗡嗡叫的绿头苍蝇在屋内飞行的轨迹，呈现出上上下下、来来回回、左左右右3种性质的运动。已经设计出了一些仪器，它按照一定的安放方式就可测绘出这三种运动的曲线图。 如果把这种仪器安装在距震源700多英里远的地方，曲线记录就能显示出前后相同的这3种地震波。首先记录下的是纵向波的到达；然后记录下的是横向波的到达，横向波比纵向波传播得慢，在纵向波到过几分钟后能到达。这珍两种波都是穿过地球而来的。正是从这两种波中的研究中，我们可以了解到地球内部的许多情况。第三种波，即主波，是最慢的，是围绕地球通过表面岩石传来的。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was necessary, therefore, to invent instruments that neither slumbered nor slept.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Some devices were quite simple.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'One, for instance, consisted of rods of various lengths and thicknesses which would stand up on end like ninepins.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'When a shock came, it shook the rigid table upon which these stood.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If it were gentle, only the more unstable rods fell.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If it were severe, they all fell.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Thus the rods, by falling, and by the direction in which they fell, recorded for the slumbering scientist the strength of a shock that was too weak to waken him, and the direction from which it came.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'But instruments far more delicate than that were needed if any really serious advance was to be made.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The ideal to be aimed at was to devise an instrument that could record with a pen on paper, the movements of the ground or of the table as the quake passed by.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'While I write my pen moves, but the paper keeps still.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'With practice, no doubt, I could in time learn to write by holding the pen still while the paper moved.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'That sounds a silly suggestion, but that was precisely the idea adopted in some of the early instruments (seismometers) for recording earthquake waves.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But when table, penholder and paper are all moving, how is it possible to write legibly?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The key to a solution of that problem lay in an everyday observation.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Why does a person standing in a bus or train tend to fall when a sudden start is made?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is because his feet move on , but his head stays still.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'A simple experiment will help us a little further.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Tie a heavy weight at the end of a long piece of string.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'With the hand held high in the air, hold the string so that the weight nearly touches the ground.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Now move the hand to and fro and around but not up and down.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It will be found that the weight moves but slightly or not at all.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Imagine a pen attached to the weight in such a way that its point rests upon a piece of paper on the floor.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Imagine an earthquake shock shaking the floor, the paper, you and your hand.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'In the midst of all this movement, the weight and the pen would be still.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But as the paper moved from side to side under the pen point, its movement would be recorded in ink upon its surface.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was upon this principle that the first instruments were made, but the paper was wrapped round a drum which rotated slowly.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As long as all was still, the pen drew a straight line, but while the drum was being shaken, the line that the pen was drawing wriggled from side to side.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The apparatus thus described, however, records only the horizontal component of the wave movement, which is, in fact, much more complicated.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'If we could actually see the path described by a particle, such as a sand grain in the rock, it would be more like that of a bluebottle buzzing round the room; it would be up and down, to and fro and from side to side.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Instruments have been devised and can be so placed that all three elements can be recorded in different graphs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'When the instrument is situated at more than 700 miles from the earthquake centre, the graphic record shows three waves arriving one after the other at short intervals.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The first records the arrival of longitudinal vibrations.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The second marks the arrival of transverse vibrations which travel more slowly and arrive several minutes after the first.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'These two have travelled through the earth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It was from the study of these that so much was learnt about the interior of the earth.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The third, or main wave, is the slowest and has travelled round the earth through the surface rocks.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'H.H,SWINNERTON The Earth beneath Us', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L43: Article = {
    id: 'nce4-l43',
    lesson: 43,
    tag: 'C43',
    title: 'Are there strangers in space?',
    titleCn: '宇宙中有外星人吗？',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'ANTHONY MICHAELIS Are There Strangers in Space? from The Weekend Telegraph',
  original: {
    paragraphs: [
      [
        { text: 'We must conclude from the work of those who have studied the origin of life, that given a planet only approximately like our own, life is almost certain to start.', translation: '根据研究生命起源的人们所作的工作，我们必然会得出这样的结论：如果设想有一颗行星和我们地球的情况基本相似，那几乎肯定会产生生命。我们目前可以肯定的是，在我们太阳系的所有行星中，地球是生命能存在的唯一行星。火星太干燥又缺氧，金星太热，水星也一样。除此之外，太阳系的其他行星的温度都接近绝对零度，并围绕着以氢气为主的大气层。但是，其他的太阳，既天文学家所说的恒星，肯定会有像我们地球一样的行星。因为宇宙中恒星的数目极其庞大，所以存在着产生生命星球的这种可能性是肯定无疑的。仅我们的银河系就有1000亿颗星，况且在宇宙中还有30亿个天河，即银河系。因此，我们所知道的现有恒星数目估计约有30亿X1000亿颗。 虽然在已经产生生命的某个地方，可能只有1%会发展成高度复杂有智力的生命形态，但是行星的数目是那么庞大，有智力的生命必然是宇宙的自然组成部分。 既然我们如此坚信宇宙中存在着其他有智力的生命，那么我们为什么还未见到外层空间来访的客人呢？首先，他们可能在几千年前或几百年前已来过我们地球，并且发现我们地球那时普遍存在着的原始状态同他们的先进的知识相比是索然无味的。美国一位重要的射电天文学家罗纳德.布雷斯韦尔教授在《自然》杂志上提出了这样的观点：假如有如此高级文明生命访问了我们的太阳系，很可能会在离开太阳系时留下自动化信号装置，等待先进文明的觉醒。这种自动化信息装置，在接收到我们的无线电和电视信号后，完全有可能把这些信号发回到原来的行星。至于其他文明行星对我们地球会有什么印象，还是不说为好。 然而，在和外星人联系中我们遇到的最大困难是分隔我们的天文距离。据合理推算，外星人离我们平均距离也有100光年之远（1光年是光以每秒186，000 英里的速度在一年内走的距离即6万亿英里）。无线电波也是以光速传播的。假定外星人的这种自动化信息装置接收了我们二十世纪二十年代的第一次广播信号，那么这个信号在发回到原来的行星途中刚刚走了一半路程。同样，我们目前使用的原始化学火箭，虽然把人送入轨道，但尚不能把我们送到离我们最近、相距4光年的其他星球上去，更不用说几十光年或几百光年远的地方了。 幸运的是，有一种我们可以和其他智力生命通迅联系的“唯一合理的方法”，正如活尔特.沙利方在其杰作《我们并不孤独》中阐述的。这种通迅联系要靠21厘米波段，即每秒1420兆周的精确无线电频率。这个频率是空间氢原子释放的自然频率，是在1951年被人类发现的。这个频率是宇宙中任何射电天文学家都应该熟悉的。 一旦这种波长的实际存在被发现，提出把它作为星际间唯一可辨认的广播频率就为期不远了。没有这手段，要想寻觅其他星球上的智力生命，就如同去伦敦见一位朋友，事先未约定地点，而荒唐地在街上游逛，以期待碰巧遇上一样。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Of all the planets in our own solar system, we ware now pretty certain the Earth is the only one on which life can survive.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Mars is too dry and poor in oxygen, Venus far too hot, and so is Mercury, and the outer planets have temperatures near absolute zero and hydrogen-dominated atmospheres.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But other suns, stars as the astronomers call them, are bound to have planets like our own, and as is the number of stars in the universe is so vast, this possibility becomes virtual certainty.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There are 100,000 million stars in our own Milky Way alone, and then there are 3,000 million other Milky Ways, or galaxies, in the universe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'So the number of stars that we know exist is now estimated at about 300 million million million.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Although perhaps only 1% of the life that has started somewhere will develop into highly complex and intelligent patterns, so vast is the number of planets, that intelligent life is bound to be a natural part of the universe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'If then we are so certain that other intelligent life exists in the universe, why have we had no visitors from outer space yet?', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'First of all, they may have come to this planet of ours thousands or millions of years ago, and found our then prevailing primitive state completely uninteresting to their own advanced knowledge.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Professor Ronald Bracewell, a leading American radio astronomer, argued in Nature that such a superior civilization, on a visit to our own solar system, may have left an automatic messenger behind to await the possible awakening of an advanced civilization.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Such a messenger, receiving our radio and television signals, might well re-transmit them back to its home-planet, although what impression any other civilization would thus get from us is best left unsaid.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'But here we come up against the most difficult of all obstacles to contact with people on other planets -- the astronomical distances which separate us.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'As a reasonable guess, they might, on an average, be 100 light years away. (A light year is the distance which light travels at 186,000 miles per second in one year, namely 6 million million miles.) Radio waves also travel at the speed of light, and assuming such an automatic messenger picked up our first broadcasts of the 1920\'s, the message to its home planet is barely halfway there.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Similarly, our own present primitive chemical rockets, though good enough to orbit men, have no chance of transporting us to the nearest other star, four light years away, let alone distances of tens or hundreds of light years.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Fortunately, there is a \'uniquely rational way\' for us to communicate with other intelligent beings, as Walter Sullivan has put it in his excellent book, We Are not Alone.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This depends on the precise radio frequency of the 21-cm wavelength, or 1420 megacycles per second.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is the natural frequency of emission of the hydrogen atoms in space and was discovered by us in 1951; it must be known to any kind of radio astronomer in the universe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Once the existence of this wave-length had been discovered, it was not long before its use as the uniquely recognizable broadcasting frequency for interstellar communication was suggested.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Without something of this kind, searching for intelligences on other planets would be like trying to meet a friend in London without a pre-arranged rendezvous and absurdly wandering the streets in the hope of a chance encounter.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Simulation of a hypothetical sighting of a UFO(unidentified flying object) in the small town of Bellelille,Wisconsin,USA.For several months in 1986-1989,the town was plagued by UFO sightings.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L45: Article = {
    id: 'nce4-l45',
    lesson: 45,
    tag: 'C45',
    title: 'Of men and galaxies',
    titleCn: '人生星系',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'FRED HOYLE Of Men and Galaxies',
  original: {
    paragraphs: [
      [
        { text: 'In man\'s early days, competition with other creatures must have been critical.', translation: '在人类早期，人类与其他生物的竞争一定是必不可少的。但这个发展阶段已经结束。确实，我们今天缺乏对付原始环境的实践和经验。我断定，如果没有现代化的武器，要我和一只熊去争洞穴，我会出洋相的；我也相信，出洋相者并非我一人。能与竞争的生物最后只有蚊子，然而即使蚊子，也由于我们注意清理污水和喷洒化学药品就被制服了。 然而人类之间的战争，人与人，团体与团体，依然在进行着，而且和以前一样激烈。 但是，人与人的竞争并不像生物学中想像的那样是一个简单过程。它已不是为争得物质环境所决定的东西所决定。摩洛哥和加利福尼亚是地球上纬度极其相似的两个地方，都在各自大陆的西海岸，气候相似，自然资源也可能相似。但是，这两个地方目前的发展程度完全不一样。这倒不是因为人民不同，而是由于居民头脑中的思想不同。 这是我要强调的论点。我们环境中最重要的因素就是我们的思想状况。 众所周知，凡是白人侵入原始文化的地方，破坏作用最大的不是杀人的武器，而是思想。思想是危险的。宗教法庭对此是非常清楚的，因此从前它总是把异教徒烧死。的确，言论自由的概念只存在于我们现代社会中，因为当你生活在一个社团中时，社团的风俗习惯会严格地制约你，使你很难有破坏性的想法。只有外部的旁观者才能灌输危险的思想。向现代世界灌输一种思想以便摧毁我们人类是可能的事，对此我并不怀疑。我愿为你举个例子，但幸亏我举不出。也许提一下核弹就足以证明了。对一个尚未拥有核弹、但科技相当发达的社会，如果告诉它制造核弹的可能性，而且向它提供制造核弹的细节，那么可以设想，这将对这个社会产生何等的影响。如果把二三十页的情报交给1952年前后的任何一个世界强国，就足以改变世界历史的进程。二三十页材料中的思想和情报会将当今的世界翻天覆地，甚至毁灭这个世界。这是个离奇的想法。不过我认为这个想法是正确的。我常常试图想像这些纸上所写的东西，不过我是做不到的，因为我和你们大家一样，是当今世界上的凡人。我们不能脱离我们大脑所限定的模式去思考问题，我们只能稍微离开一点儿，就这也需要我们有独创的思想。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But this phase of our development is now finished.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Indeed, we lack practice and experience nowadays in dealing with primitive conditions.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I am sure that, without modern weapons, I would make a very poor show of disputing the ownership of a cave with a bear, and in this I do not think that I stand alone.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The last creature to compete with man was the mosquito.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But even the mosquito has been subdued by attention to drainage and by chemical sprays.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Competition between ourselves, person against person, community against community, still persists, however; and it is as fierce as it ever was.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'But the competition of man against man is not the simple process envisioned in biology.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is not a simple competition for a fixed amount of food determined by the physical environment, because the environment that determines our evolution is no longer essentially physical.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Our environment is chiefly conditioned by the things we believe.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Morocco and California are bits of the Earth in very similar latitudes, both on the west coasts of continents with similar climates, and probably with rather similar natural resources.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Yet their present development is wholly different, not so much because of different people even, but because of the different thoughts that exist in the minds of their inhabitants.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'This is the point I wish to emphasize.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The most important factor in our environment is the state of our own minds.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'It is well known that where the white man has invaded a primitive culture, the most destructive effects have come not from physical weapons but from ideas.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Ideas are dangerous.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Holy Office knew this full well when it caused heretics to be burned in days gone by.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Indeed, the concept of free speech only exists in our modern society because when you are inside a community, you are conditioned by the conventions of the community to such a degree that it is very difficult to conceive of anything really destructive.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is only someone looking on from outside that can inject the dangerous thoughts.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I do not doubt that it would be possible to inject ideas into the modern world that would utterly destroy us.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I would like to give you an example, but fortunately I cannot do so.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Perhaps it will suffice to mention the nuclear bomb.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Imagine the effect on a reasonably advanced technological society, one that still does not possess the bomb, of making it aware of the possibility, of supplying sufficient details to enable the thing to be constructed.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Twenty or thirty pages of information handed to any of the major world powers around the year 1925 would have been sufficient to change the course of world history.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It is a strange thought, but I believe a correct one, that twenty or thirty pages of ideas and information would be capable of turning the present-day world upside down, or even destroying it.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'I have often tried to conceive of what those pages might contain, but of course I cannot do so because I am a prisoner of the present-day world, just as all of you are.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'We cannot think outside the particular patterns that our brains are conditioned to, or, to be more accurate, we can think only a very little way outside, and then only if we are very original.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
  ],
}
const articleNce4L47: Article = {
    id: 'nce4-l47',
    lesson: 47,
    tag: 'C47',
    title: 'The great escape',
    titleCn: '大逃亡',
    keyArticle: false,
    level: 'NCE4',
    heatmap: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ],

  attribution: 'NIGEL BUXTON The Great Escape from The Weekend Telegraph',
  original: {
    paragraphs: [
      [
        { text: 'Economy is one powerful motive for camping, since after the initial outlay upon equipment, or through hiring it, the total expense can be far less than the cost of hotels.', translation: '图省钱是露营的一个主要动机，因为除了开始时购置或是租借一套露营装备外，总费用算起来要比住旅馆开支少得多。但是，和一般的看法相反，这决非是仅有的，甚至不是最主要的动机。如果一位游客漫不经心地驾车驶入欧洲无数常年营地之一，花20镑租用一个空位，那么他可能会碰见一辆本特利汽车，更可能会望见一辆福特.康索尔或一辆雷诺或一辆梅塞迪斯并排停放着，不过双人自行车则不容易看到。 现代露营装备一年比一年讲究，这对那些厌世嫉俗者来说是一件有趣的自相矛盾的事情。而对于发誓用露营来摆脱烦恼的人来说，却带来了更光明的前景。学社会学的大学生来露营是另一种形式的摆脱现实，他们的目的很可能是根据观察到的露营现象去写论文。现代露营旅游的人往往讨厌在“斯普兰迪德”和“贝拉维斯塔” 这样的大酒店，这并不是因为他们付不起钱，也不是为了躲避物质享受，而是因为他们害怕酒店。他们可能很富有，但给看门人和房间女服务多少小费，心中却根本没有数；他们在家可能是主人，但不知道什么时候才能对酒店的经理表示不满。 露营使人们免除了这些忧虑。诚然，露营地本身也存在以露营装备和方式取人的势利现象，但如果有这种情况，露营者也容易理解，知道如何对付，但在露营地里根本不会有管人的“人上人”和酒店里的等级制度来使露营者的假日过得阴郁低沉。 除以上动机外，还应加上一个。当前崇拜汽车现象可以用与所有权相伴的独立和自由意识来解释。因此开车去露营会给这种快乐意识增加一种优雅意境。 从自己的家门出发到国内国外的山区或沙滩上露营然后返回，一切都很便利。完全在自己掌握之中的私人汽车不仅是到达假日天堂的工具，而且也是逃离假日地狱（如海滩太挤，当地天气恶劣）方便工具，因为汽车就停在帐篷外面，或者汽车本身可能就是露营帐篷的一个组成部分。 理想主义者像反对旅行社安排一切的一揽子旅游一样反对露营的作法，说这种封闭的作法使到国外旅游者失去了了解所去国家人民的机会。他们争论说，心胸狭窄和自我封闭是并存的。但这种说法在受人欢迎的欧洲露营地是站不住脚的。假日旅馆有只接待来自一个国家的旅游者的倾向，有时会达到排他的程度。而露营驻地则相反，是高度世界性的。在大多数地中海露营地里，德国人占优势似乎是个普遍现象，确实如此，但并没有特别的优待。禁止露天晒衣服、禁止用水龙头冲洗汽车的布告和邀请露营朋友参加舞会、乘船观光的招贴不仅印志法语、意大利语、西班牙语，而且也印成英语、德语、荷兰语。用饭的时候，德国泡菜味和大蒜味争相散发，法国人的早点咖啡和英国人的咸肉煎蛋竞相比美。 有组织的露营活动的明显发展是否意味着较独立的自我封闭式露营的最终消失，还很难说。市政当局当然希望获得露营者的场地费和其他光临的好处，警察则对那些查不出有固定营地或住处的游荡者保持警惕。但最重要的或许是露营者自己，即他们引起了多少场野火，留下了多少垃圾。总之，他们是否弄得土地的主人和乡间的居民同他们反目。只有优良的童子军活动才能保持不朽的童子军所衷心热爱的各项自由。', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But, contrary to a popular assumption, it is far from being the only one, or even the greatest.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The man who manoeuvres carelessly into his 20 pounds\' worth of space at one of Europe\'s myriad permanent sites may find himself bumping a Bentley.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'More likely, Ford Escort will be hub to hub with Renault or Mercedes, but rarely with bicycles made for two.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'That the equipment of modern camping becomes yearly more sophisticated is an entertaining paradox for the cynic, a brighter promise for the hopeful traveler who has sworn to get away from it all.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'It also provides and some student sociologist might care to base his thesis upon the phenomenon -- an escape of another kind.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The modern traveller is often a man who dislikes the Splendide and the Bellavista, not because he cannot afford, or shuns their material comforts. but because he is afraid of them.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Affluent he may be, but he is by no means sure what to tip the doorman or the chambermaid.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Master in his own house, he has little idea of when to say boo to a maitre d\'hotel.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'From all such fears camping releases him.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Granted, a snobbery of camping itself, based upon equipment and techniques, already exists; but it is of a kind that, if he meets it, he can readily understand and deal with.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'There is no superior \'they\' in the shape of managements and hotel hierarchies to darken his holiday days.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'To such motives, yet another must be added.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The contemporary phenomenon of car worship is to be explained not least by the sense of independence and freedom that ownership entails.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'To this pleasure camping gives an exquisite refinement.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'From one\'s own front door to home or foreign hills or sands and back again, everything is to hand.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Not only are the means of arriving at the holiday paradise entirely within one\'s own command and keeping, but the means of escape from holiday hell (if the beach proves too crowded, the local weather too inclement) are there, outside -- or, as likely, part of -- the tent.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Idealists have objected to the practice of camping, as to the package tour, that the traveller abroad thereby denies himself the opportunity of getting to know the people of the country visited.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Insularity and self-containment, it is argued, go hand in hand.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The opinion does not survive experience of a popular Continental camping place.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Holiday hotels tend to cater for one nationality of visitors especially, sometimes exclusively.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Camping sites, by contrast, are highly cosmopolitan.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Granted, a preponderance of Germans is a characteristic that seems common to most Mediterranean sites; but as yet there is no overwhelmingly specialized patronage.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Notices forbidding the open-air drying of clothes, or the use of water points for car washing, or those inviting \'our camping friends\' to a dance or a boat trip are printed not only in French or Italian or Spanish, but also in English, German and Dutch.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'At meal times the odour of sauerkraut vies with that of garlic.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'The Frenchman\'s breakfast coffee competes with the Englishman\'s bacon and eggs.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Whether the remarkable growth of organized camping means the eventual death of the more independent kind is hard to say.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Municipalities naturally want to secure the campers\' site fees and other custom.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Police are wary of itinerants who cannot be traced to a recognized camp boundary or to four walls.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'But most probably it will all depend upon campers themselves: how many heath fires they cause; how much litter they leave; in short, whether or not they wholly alienate landowners and those who live in the countryside.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
        { text: 'Only good scouting is likely to preserve the freedoms so dear to the heart of the eternal Boy Scout.', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
      [
        { text: 'Modern camping', translation: '', predicates: [], clauseIntroducers: [], notes: [] },
      ],
    ],
  },
  vocabulary: [
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
  'nce4-l5': articleNce4L5,
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
  'nce4-l9': articleNce4L9,
  'nce4-l10': articleNce4L10,
  'nce4-l12': articleNce4L12,
  'nce4-l14': articleNce4L14,
  'nce4-l17': articleNce4L17,
  'nce4-l19': articleNce4L19,
  'nce4-l20': articleNce4L20,
  'nce4-l23': articleNce4L23,
  'nce4-l25': articleNce4L25,
  'nce4-l26': articleNce4L26,
  'nce4-l27': articleNce4L27,
  'nce4-l29': articleNce4L29,
  'nce4-l31': articleNce4L31,
  'nce4-l35': articleNce4L35,
  'nce4-l36': articleNce4L36,
  'nce4-l38': articleNce4L38,
  'nce4-l39': articleNce4L39,
  'nce4-l40': articleNce4L40,
  'nce4-l41': articleNce4L41,
  'nce4-l42': articleNce4L42,
  'nce4-l43': articleNce4L43,
  'nce4-l45': articleNce4L45,
  'nce4-l47': articleNce4L47,
}
