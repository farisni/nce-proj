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
    id: 'problem-of-youth',
    lesson: 5,
    tag: 'c6',
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
  'problem-of-youth': article,
}
