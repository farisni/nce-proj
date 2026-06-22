// Mock 数据：The Problem of Youth

export interface SentenceMeta {
  predicates: string[]
  clauseIntroducers: string[]
}

export interface TextSegment {
  text: string
  class?: 'vocab' | 'predicate' | 'clause'
}

export interface VocabItem {
  word: string
  pos: string
  meaning: string
}

export interface Article {
  original: {
    paragraphs: string[]
    predicateParagraph: SentenceMeta[][]
  }
  translation: {
    paragraphs: string[]
  }
  vocabulary: VocabItem[]
}

export const article: Article = {
  original: {
    paragraphs: [
      "People are always talking about 'the problem of youth'. If there is one—which I take leave to doubt—then it is older people who create it, not the young themselves. Let us get down to fundamentals and agree that the young are after all human beings—people just like their elders. There is only one difference between an old man and a young one: the young man has a glorious future before him and the old one has a splendid future behind him: and maybe that is where the rub is.",
      'When I was a teenager, I felt that I was just young and uncertain—that I was a new boy in a huge school, and I would have been very pleased to be regarded as something so interesting as a problem. For one thing, being a problem gives you a certain identity, and that is one of the things the young are busily engaged in seeking.',
      'I find young people exciting. They have an air of freedom, and they have not a dreary commitment to mean ambitions or love of comfort. They are not anxious social climbers, and they have no devotion to material things. All this seems to me to link them with life, and the origins of things. It\'s as if they were in some sense cosmic beings in violent and lovely contrast with us suburban creatures. All that is in my mind when I meet a young person. He may be conceited, ill-mannered, presumptuous or fatuous, but I do not turn for protection to dreary clichés about respect for elders—as if mere age were a reason for respect. I accept that we are equals, and I will argue with him, as an equal, if I think he is wrong.',
    ],
    predicateParagraph: [
      // Paragraph 1 (4 sentences)
      [
        { predicates: ['are talking'], clauseIntroducers: [] },
        { predicates: ['is', 'take', 'create'], clauseIntroducers: ['If', 'which', 'then'] },
        { predicates: ['get', 'agree', 'are'], clauseIntroducers: ['that'] },
        { predicates: ['is', 'has', 'has', 'is'], clauseIntroducers: ['where'] },
      ],
      // Paragraph 2 (2 sentences)
      [
        { predicates: ['felt', 'was', 'was', 'would have been pleased'], clauseIntroducers: ['When', 'that', 'that'] },
        { predicates: ['gives', 'are engaged'], clauseIntroducers: ['that'] },
      ],
      // Paragraph 3 (8 sentences)
      [
        { predicates: ['find'], clauseIntroducers: [] },
        { predicates: ['have', 'have'], clauseIntroducers: [] },
        { predicates: ['are', 'have'], clauseIntroducers: [] },
        { predicates: ['seems'], clauseIntroducers: [] },
        { predicates: ['were'], clauseIntroducers: ['as if'] },
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
    { word: 'youth', pos: 'n.', meaning: '青春；青年' },
    { word: 'doubt', pos: 'n./v.', meaning: '怀疑' },
    { word: 'fundamental', pos: 'n.', meaning: '基本原则；根本' },
    { word: 'glorious', pos: 'adj.', meaning: '辉煌的；光荣的' },
    { word: 'splendid', pos: 'adj.', meaning: '灿烂的；极好的' },
    { word: 'rub', pos: 'n.', meaning: '困难；症结' },
    { word: 'teenager', pos: 'n.', meaning: '青少年' },
    { word: 'uncertain', pos: 'adj.', meaning: '不确定的；犹豫的' },
    { word: 'identity', pos: 'n.', meaning: '身份；认同' },
    { word: 'exciting', pos: 'adj.', meaning: '令人兴奋的' },
    { word: 'dreary', pos: 'adj.', meaning: '沉闷的；枯燥的' },
    { word: 'commitment', pos: 'n.', meaning: '承诺；投入' },
    { word: 'ambition', pos: 'n.', meaning: '野心；抱负' },
    { word: 'anxious', pos: 'adj.', meaning: '焦虑的；渴望的' },
    { word: 'devotion', pos: 'n.', meaning: '热爱；奉献' },
    { word: 'cosmic', pos: 'adj.', meaning: '宇宙的' },
    { word: 'violent', pos: 'adj.', meaning: '强烈的；暴力的' },
    { word: 'contrast', pos: 'n.', meaning: '对比；反差' },
    { word: 'suburban', pos: 'adj.', meaning: '市郊的；平凡的' },
    { word: 'conceited', pos: 'adj.', meaning: '自负的' },
    { word: 'presumptuous', pos: 'adj.', meaning: '冒昧的；放肆的' },
    { word: 'fatuous', pos: 'adj.', meaning: '愚蠢的；昏庸的' },
    { word: 'cliché', pos: 'n.', meaning: '陈词滥调' },
  ],
}
