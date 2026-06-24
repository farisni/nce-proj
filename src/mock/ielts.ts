import type { Article, SentenceData, VocabItem } from './types'

function buildSentenceItems(text: string): SentenceData[] {
  const trimmed = text.replace(/\s+/g, ' ').trim()
  const parts = trimmed
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean)

  return parts.map((part) => ({
    text: part.replace(/^['"“]+|['"”]+$/g, '').trim(),
    translation: '',
    predicates: [],
    clauseIntroducers: [],
    rubyNotes: [],
  }))
}

function buildArticle(
  id: string,
  title: string,
  titleCn: string,
  lesson: number,
  paragraphs: string[],
  vocabulary: VocabItem[],
): Article {
  return {
    id,
    title,
    titleCn,
    level: 'IELTS16',
    lesson,
    heatmap: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    attribution: 'Based on IELTS_16 Reading',
    original: {
      paragraphs: paragraphs.map((paragraph) => buildSentenceItems(paragraph)),
    },
    vocabulary,
  }
}

const polarBearsParagraphs = [
  'Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences. They are uniquely adapted to the extreme conditions of the Arctic Circle, where temperatures can reach −40°C. One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.',
  'A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. This allowed them to determine the genes that have allowed polar bears to survive in one of the toughest environments on Earth. Liu and his colleagues found the polar bears had a gene known as ApoB, which reduces levels of low-density lipoproteins (LDLs) – a form of bad cholesterol. In humans, mutations of this gene are associated with increased risk of heart disease. Polar bears may therefore be an important study model to understand heart disease in humans.',
  'The genome of the polar bear may also provide the solution for another condition, one that particularly affects our older generation: osteoporosis. This is a disease where bones show reduced density, usually caused by insufficient exercise, reduced calcium intake or food starvation. Bone tissue is constantly being remodelled, meaning that bone is added or removed, depending on nutrient availability and the stress that the bone is under. Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs. This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, depleting their own calcium and calorie reserves. Despite this, their bones remain strong and dense.',
  'Physiologists Alanda Lennox and Allen Goodship found an explanation for this paradox in 2008. They discovered that pregnant bears were able to increase the density of their bones before they started to build their dens. In addition, six months later, when they finally emerged from the den with their cubs, there was no evidence of significant loss of bone density. Hibernating brown bears do not have this capacity and must therefore resort to major bone reformation in the following spring. If the mechanism of bone remodelling in polar bears can be understood, many bedridden humans, and even astronauts, could potentially benefit.',
  'The medical benefits of the polar bear for humanity certainly have their importance in our conservation efforts, but these should not be the only factors taken into consideration. We tend to want to protect animals we think are intelligent and possess emotions, such as elephants and primates. Bears, on the other hand, seem to be perceived as stupid and in many cases violent. And yet anecdotal evidence from the field challenges those assumptions, suggesting for example that polar bears have good problem-solving abilities. A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat hung out of his reach. Problem-solving ability has also been witnessed in wild polar bears, although not as obviously as with GoGo. A calculated move by a male bear involved running and jumping onto barrels in an attempt to get to a photographer standing on a platform four metres high.',
  'In other studies, such as one by Alison Ames in 2008, polar bears showed deliberate and focused manipulation. For example, Ames observed bears putting objects in piles and then knocking them over in what appeared to be a game. The study demonstrates that bears are capable of agile and thought-out behaviours. These examples suggest bears have greater creativity and problem-solving abilities than previously thought.',
  'As for emotions, while the evidence is once again anecdotal, many bears have been seen to hit out at ice and snow – seemingly out of frustration – when they have just missed out on a kill. Moreover, polar bears can form unusual relationships with other species, including playing with the dogs used to pull sleds in the Arctic. Remarkably, one hand-raised polar bear called Agee has formed a close relationship with her owner Mark Dumas to the point where they even swim together. This is even more astonishing since polar bears are known to actively hunt humans in the wild.',
  'If climate change were to lead to their extinction, this would mean the loss not only of potential breakthroughs in human medicine, but more importantly, the disappearance of an intelligent, majestic animal.',
]

const futureOfWorkParagraphs = [
  'According to a leading business consultancy, 3–14% of the global workforce will need to switch to a different occupation within the next 10–15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or embodied artificial intelligence (AI) – is one aspect of the disruptive effects of technology on the labour market. Disembodied AI, like the algorithms running in our smartphones, is another.',
  'Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the algorithmication of jobs that are dependent on data rather than on production – the so-called knowledge economy. Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, such as reading legal contracts, analysing medical scans and gathering market intelligence.',
  'In many cases, they can outperform humans, says Pachidi. Organisations are attracted to using algorithms because they want to make choices based on what they consider is perfect information, as well as to reduce costs and enhance productivity. But these enhancements are not without consequences. If routine cognitive tasks are taken over by AI, how do professions develop their future experts? One way of learning about a job is legitimate peripheral participation – a novice stands next to experts and learns by observation. If this is not happening, then you need to find new ways to learn.',
  'Another issue is the extent to which the technology influences or even controls the workforce. For over two years, Pachidi monitored a telecommunications company. The way telecoms salespeople work is through personal and frequent contact with clients, using the benefit of experience to assess a situation and reach a decision. However, the company had started using an algorithm that defined when account managers should contact certain customers about which kinds of campaigns and what to offer them.',
  'The algorithm – usually built by external designers – often becomes the keeper of knowledge, she explains. In cases like this, Pachidi believes, a short-sighted view begins to creep into working practices whereby workers learn through the algorithm’s eyes and become dependent on its instructions. Alternative explorations – where experimentation and human instinct lead to progress and new ideas – are effectively discouraged.',
  'Pachidi and colleagues even observed people developing strategies to make the algorithm work to their own advantage. We are seeing cases where workers feed the algorithm with false data to reach their targets, she reports.',
  'It is scenarios like these that many researchers are working to avoid. Their objective is to make AI technologies more trustworthy and transparent, so that organisations and individuals understand how AI decisions are made. In the meantime, says Pachidi, we need to make sure we fully understand the dilemmas that this new world raises regarding expertise, occupational boundaries and control.',
  'Economist Professor Hamish Low believes that the future of work will involve major transitions across the whole life course for everyone. The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement is a thing of the past, says Low. Instead, he envisages a multistage employment life: one where retraining happens across the life course, and where multiple jobs and no job happen by choice at different stages.',
  'On the subject of job losses, Low believes the predictions are founded on a fallacy. It assumes that the number of jobs is fixed. If in 30 years, half of 100 jobs are being carried out by robots, that does not mean we are left with just 50 jobs for humans. The number of jobs will increase: we would expect there to be 150 jobs.',
  'Dr Ewan McGaughey, at Cambridge’s Centre for Business Research and King’s College London, agrees that apocalyptic views about the future of work are misguided. It is the laws that restrict the supply of capital to the job market, not the advent of new technologies that causes unemployment. His recently published research answers the question of whether automation, AI and robotics will mean a jobless future by looking at the causes of unemployment. History is clear that change can mean redundancies. But social policies can tackle this through retraining and redeployment.',
  'He adds that if there is going to be change to jobs as a result of AI and robotics then he would like to see governments seizing the opportunity to improve policy to enforce good job security. We can reprogramme the law to prepare for a fairer future of work and leisure. McGaughey’s findings are a call to arms to leaders of organisations, governments and banks to pre-empt the coming changes with bold new policies that guarantee full employment, fair incomes and a thriving economic democracy.',
]

const polarBearsVocabulary: VocabItem[] = [
  { word: 'threatened', pos: 'adj.', meaning: '受到威胁的', phonetic: '/ˈθretnd/' },
  { word: 'consequences', pos: 'n.', meaning: '后果', phonetic: '/ˈkɒnsɪkwənsɪz/' },
  { word: 'adapted', pos: 'adj.', meaning: '适应的', phonetic: '/əˈdæptɪd/' },
  { word: 'fat', pos: 'n.', meaning: '脂肪', phonetic: '/fæt/' },
  { word: 'obese', pos: 'adj.', meaning: '肥胖的', phonetic: '/əʊˈbiːs/' },
  { word: 'genetic', pos: 'adj.', meaning: '基因的', phonetic: '/dʒəˈnetɪk/' },
  { word: 'mutation', pos: 'n.', meaning: '突变', phonetic: '/mjuːˈteɪʃən/' },
  { word: 'osteoporosis', pos: 'n.', meaning: '骨质疏松症', phonetic: '/ˌɒstiəʊpəˈrəʊsɪs/' },
  { word: 'remodelled', pos: 'adj.', meaning: '重塑的', phonetic: '/ˌriːˈmɒdəld/' },
  { word: 'hibernating', pos: 'adj.', meaning: '冬眠的', phonetic: '/ˈhaɪbərneɪtɪŋ/' },
]

const futureOfWorkVocabulary: VocabItem[] = [
  { word: 'workforce', pos: 'n.', meaning: '劳动力', phonetic: '/ˈwɜːkfɔːs/' },
  { word: 'occupation', pos: 'n.', meaning: '职业', phonetic: '/ˌɒkjʊˈpeɪʃən/' },
  { word: 'automation', pos: 'n.', meaning: '自动化', phonetic: '/ˌɔːtəˈmeɪʃən/' },
  { word: 'algorithm', pos: 'n.', meaning: '算法', phonetic: '/ˈælgərɪðəm/' },
  { word: 'cognitive', pos: 'adj.', meaning: '认知的', phonetic: '/ˈkɒɡnətɪv/' },
  { word: 'telecommunications', pos: 'n.', meaning: '电信', phonetic: '/ˌtelɪkəˌmjuːnɪˈkeɪʃənz/' },
  { word: 'redundancies', pos: 'n.', meaning: '裁员', phonetic: '/rɪˈdʌndənsiːz/' },
  { word: 'redeployment', pos: 'n.', meaning: '重新部署', phonetic: '/ˌriːdɪˈplɔɪmənt/' },
  { word: 'employment', pos: 'n.', meaning: '就业', phonetic: '/ɪmˈplɔɪmənt/' },
  { word: 'economic', pos: 'adj.', meaning: '经济的', phonetic: '/ˌiːkəˈnɒmɪk/' },
]

export const articlesIelts: Record<string, Article> = {
  'ielts-1': buildArticle('ielts-1', 'Why we need to protect polar bears', '为什么我们需要保护北极熊', 1, polarBearsParagraphs, polarBearsVocabulary),
  'ielts-3': buildArticle('ielts-3', 'The future of work', '未来的工作', 3, futureOfWorkParagraphs, futureOfWorkVocabulary),
}
