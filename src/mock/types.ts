export interface SentenceData {
  text: string
  translation?: string
  predicates: string[]
  clauseIntroducers: string[]
  notesOnText?: { phrase: string; note: string }[]
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
  level: "NCE2" | "NCE3" | "NCE4"
  lesson: number
  tag?: string
  keyArticle?: boolean
  heatmap?: number[][]
  attribution?: string
  notesOnText?: { title: string; body: string }[]

  original: {
    paragraphs: SentenceData[][]
  }

  vocabulary: VocabItem[]
}

