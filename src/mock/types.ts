export interface SentenceData {
  text: string
  translation?: string
  predicates: string[]
  clauseIntroducers: string[]
  notes?: { phrase: string; note: string }[]
  rubyNotes?: { title: string; body: string }[]
  structureNotes?: { title: string; body: string }[]
  panelNotes?: { title: string; body: string }[]
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
  level: "NCE2" | "NCE3" | "NCE4" | "IELTS16"
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

