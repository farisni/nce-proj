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
  level: 'NCE2' | 'NCE3' | 'NCE4'
  lesson: number
  tag?: string
}

export const articleMetas: ArticleMeta[] = [
  {
    id: 'nce3-l1',
    lesson: 1,
    title: 'A Puma at Large',
    level: 'NCE3',
  },
  {
    id: 'nce3-l2',
    lesson: 2,
    title: 'Thirteen Equals One',
    level: 'NCE3',
  },
  {
    id: 'nce3-l3',
    lesson: 3,
    title: 'An Unknown Goddess',
    level: 'NCE3',
  },
  {
    id: 'nce3-l4',
    lesson: 4,
    title: 'The Double Life of Alfred Bloggs',
    level: 'NCE3',
  },
  {
    id: 'nce3-l5',
    lesson: 5,
    title: 'The Facts',
    level: 'NCE3',
  },
  {
    id: 'nce3-l6',
    lesson: 6,
    title: 'Smash-and-grab',
    level: 'NCE3',
  },
  {
    id: 'nce3-l7',
    lesson: 7,
    title: 'Mutilated ladies',
    level: 'NCE3',
  },
  {
    id: 'nce3-l10',
    lesson: 10,
    title: 'The Loss of the Titanic',
    level: 'NCE3',
  },
  {
    id: 'nce3-l12',
    lesson: 12,
    title: 'Life on a Desert Island',
    level: 'NCE3',
  },
  {
    id: 'nce3-l13',
    lesson: 13,
    title: '‘It’s Only Me’',
    level: 'NCE3',
  },
  {
    id: 'nce3-l19',
    lesson: 19,
    title: 'A Very Dear Cat',
    level: 'NCE3',
  },
  {
    id: 'nce3-l21',
    lesson: 21,
    title: 'Daniel Mendoza',
    level: 'NCE3',
  },
  {
    id: 'nce3-l22',
    lesson: 22,
    title: 'By Heart',
    level: 'NCE3',
  },
  {
    id: 'nce3-l24',
    lesson: 24,
    title: 'A Skeleton in the Cupboard',
    level: 'NCE3',
  },
  {
    id: 'nce3-l26',
    lesson: 26,
    title: 'Wanted: a Large Biscuit Tin',
    level: 'NCE3',
  },
  {
    id: 'nce3-l27',
    lesson: 27,
    title: 'Nothing to Sell and Nothing to Buy',
    level: 'NCE3',
  },
  {
    id: 'nce3-l29',
    lesson: 29,
    title: 'Funny or Not?',
    level: 'NCE3',
  },
  {
    id: 'nce3-l30',
    lesson: 30,
    title: 'The Death of a Ghost',
    level: 'NCE3',
  },
  {
    id: 'nce3-l31',
    lesson: 31,
    title: 'A Lovable Eccentric',
    level: 'NCE3',
  },
  {
    id: 'nce3-l32',
    lesson: 32,
    title: 'A Lost Ship',
    level: 'NCE3',
  },
  {
    id: 'nce3-l33',
    lesson: 33,
    title: 'A Day to Remember',
    level: 'NCE3',
  },
  {
    id: 'nce3-l37',
    lesson: 37,
    title: 'The Westhaven Express',
    level: 'NCE3',
  },
  {
    id: 'nce3-l38',
    lesson: 38,
    title: 'The First Calender',
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
    level: 'NCE3',
  },
  {
    id: 'nce3-l42',
    lesson: 42,
    title: 'Modern Cavemen',
    level: 'NCE3',
  },
  {
    id: 'nce3-l50',
    lesson: 50,
    title: 'New Year Resolutions',
    level: 'NCE3',
  },
  {
    id: 'nce3-l54',
    lesson: 54,
    title: 'Instinct or Cleverness?',
    level: 'NCE3',
  },
  {
    id: 'nce3-l59',
    lesson: 59,
    title: 'Possession Amassing and Collecting',
    level: 'NCE3',
  },
  {
    id: 'nce3-l60',
    lesson: 60,
    title: 'The Importance of Punctuality',
    level: 'NCE3',
  },
  {
    id: 'nce4-l1',
    lesson: 1,
    tag: 'C1',
    title: 'Finding fossil man',
    level: 'NCE4',
  },
  {
    id: 'nce4-l2',
    lesson: 2,
    tag: 'C2',
    title: 'Spare that spider',
    level: 'NCE4',
  },
  {
    id: 'nce4-l3',
    lesson: 3,
    tag: 'C3',
    title: 'Matterhorn man',
    level: 'NCE4',
  },
  {
    id: 'nce4-l4',
    lesson: 4,
    tag: 'C4',
    title: 'Seeing hands',
    level: 'NCE4',
  },
  {
    id: 'nce4-l6',
    lesson: 6,
    tag: 'C7',
    title: 'The sports spirit',
    level: 'NCE4',
  },
  {
    id: 'nce4-l7',
    lesson: 7,
    tag: 'C9',
    title: 'Bats',
    level: 'NCE4',
  },
  {
    id: 'nce4-l8',
    lesson: 8,
    title: 'Trading Standards',
    level: 'NCE4',
  },
  {
    id: 'nce4-l11',
    lesson: 11,
    tag: 'C14',
    title: 'How to grow old',
    level: 'NCE4',
  },
  {
    id: 'nce4-l13',
    lesson: 13,
    title: 'The search for oil',
    level: 'NCE4',
  },
  {
    id: 'nce4-l15',
    lesson: 15,
    tag: 'C18',
    title: 'Secrecy in industry',
    level: 'NCE4',
  },
  {
    id: 'nce4-l16',
    lesson: 16,
    tag: 'C20',
    title: 'The modern city',
    level: 'NCE4',
  },
  {
    id: 'nce4-l18',
    lesson: 18,
    tag: 'C22',
    title: 'Porpoises',
    level: 'NCE4',
  },
  {
    id: 'nce4-l21',
    lesson: 21,
    title: 'William S. Hart and the Early "Western" Film',
    level: 'NCE4',
  },
  {
    id: 'nce4-l22',
    lesson: 22,
    tag: 'C27',
    title: 'Knowledge and progress',
    level: 'NCE4',
  },
  {
    id: 'nce4-l24',
    lesson: 24,
    tag: 'C29',
    title: 'Beauty',
    level: 'NCE4',
  },
  {
    id: 'nce4-l28',
    lesson: 28,
    tag: 'C34',
    title: 'Patients and doctors',
    level: 'NCE4',
  },
  {
    id: 'nce4-l30',
    lesson: 30,
    tag: 'C36',
    title: 'Exploring the sea-floor',
    level: 'NCE4',
  },
  {
    id: 'nce4-l32',
    lesson: 32,
    tag: 'C39',
    title: 'Galileo reborn',
    level: 'NCE4',
  },
  {
    id: 'nce4-l33',
    lesson: 33,
    tag: 'C41',
    title: 'Education',
    level: 'NCE4',
  },
  {
    id: 'nce4-l34',
    lesson: 34,
    tag: 'C42',
    title: 'Adolescence',
    level: 'NCE4',
  },
  {
    id: 'nce4-l37',
    lesson: 37,
    tag: 'C45',
    title: 'The process of ageing',
    level: 'NCE4',
  },
  {
    id: 'nce4-l44',
    lesson: 44,
    tag: 'C55',
    title: 'Patterns of culture',
    level: 'NCE4',
  },
  {
    id: 'nce4-l46',
    lesson: 46,
    tag: 'C58',
    title: 'Hobbies',
    level: 'NCE4',
  },
  {
    id: 'nce4-l48',
    lesson: 48,
    title: 'Planning a share portfolio',
    level: 'NCE4',
  },
  {
    id: 'problem-of-youth',
    lesson: 5,
    tag: 'C6',
    title: 'The Problem of Youth',
    level: 'NCE4',
  },
]

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
