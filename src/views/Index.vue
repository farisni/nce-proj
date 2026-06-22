<script setup lang="ts">
import { ref, computed } from 'vue'
import { article } from '../mock/readData'
import yumaoIcon from '../asserts/icon/yumao.svg'

const sentencePattern = /([^.!?。！？]+[.!?。！？]+)/g

function splitSentences(paragraph: string): string[] {
  const matches = paragraph.match(sentencePattern)
  if (!matches || matches.length === 0) return [paragraph]
  return matches.map(s => s.trim()).filter(Boolean)
}

interface Segment {
  text: string
  clause?: boolean
  predicate?: boolean
}

function markWords(sentence: string, predicates: string[], clauseIntroducers: string[]): Segment[] {
  if (!predicates.length && !clauseIntroducers.length) return [{ text: sentence }]

  interface Range {
    start: number
    end: number
    type: 'predicate' | 'clause'
  }

  const ranges: Range[] = []
  const lower = sentence.toLowerCase()

  const predWords = new Set<string>()
  for (const pred of predicates) {
    for (const w of pred.split(/\s+/)) {
      predWords.add(w.toLowerCase())
    }
  }
  for (const pw of predWords) {
    const escaped = pw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`(?<![a-zA-Z'-])${escaped}(?![a-zA-Z'-])`, 'gi')
    let match: RegExpExecArray | null
    while ((match = regex.exec(lower)) !== null) {
      ranges.push({ start: match.index, end: match.index + pw.length, type: 'predicate' })
    }
  }

  for (const ci of clauseIntroducers) {
    const lc = ci.toLowerCase()
    let idx = lower.indexOf(lc)
    while (idx !== -1) {
      const beforeOk = idx === 0 || /\s|[—,'"(\[{]/.test(sentence[idx - 1])
      const afterOk = idx + ci.length === sentence.length || /\s|[—,.'"!?;:)\]}。，！？；：、]/.test(sentence[idx + ci.length])
      if (beforeOk && afterOk) {
        if (!ranges.some(r => r.type === 'predicate' && r.start < idx + ci.length && r.end > idx)) {
          ranges.push({ start: idx, end: idx + ci.length, type: 'clause' })
        }
      }
      idx = lower.indexOf(lc, idx + 1)
    }
  }

  if (!ranges.length) return [{ text: sentence }]

  ranges.sort((a, b) => a.start - b.start)

  const segments: Segment[] = []
  let pos = 0

  for (const r of ranges) {
    if (r.start < pos) {
      if (r.end > pos && r.type === 'predicate') {
        segments.push({ text: sentence.slice(pos, r.end), predicate: true })
        pos = r.end
      }
      continue
    }
    if (r.start > pos) {
      segments.push({ text: sentence.slice(pos, r.start) })
    }
    segments.push({
      text: sentence.slice(r.start, r.end),
      predicate: r.type === 'predicate',
      clause: r.type === 'clause',
    })
    pos = r.end
  }

  if (pos < sentence.length) {
    segments.push({ text: sentence.slice(pos) })
  }

  return segments
}

interface SentenceData {
  segments: Segment[]
  key: string
}

const originalSentences = computed(() =>
  article.original.paragraphs.map((paragraph, pIdx) => {
    const sentences = splitSentences(paragraph)
    return sentences.map((sentence, sIdx) => {
      const meta = article.original.predicateParagraph[pIdx]?.[sIdx]
      return {
        segments: markWords(sentence, meta?.predicates ?? [], meta?.clauseIntroducers ?? []),
        key: `${pIdx}-${sIdx}`,
      }
    })
  }),
)

const activeKey = ref('')

function togglePanel(key: string) {
  activeKey.value = activeKey.value === key ? '' : key
}
</script>

<template>
  <div class="reading-page">
    <div class="main-content">
      <!-- 英文原文 -->
      <div class="article-section">
        <div class="section-row">
          <div class="section-main">
            <h1 class="article-title">The Problem of Youth</h1>
            <div
              v-for="(sentences, pIdx) in originalSentences"
              :key="pIdx"
              class="paragraph-wrapper"
            >
              <div class="paragraph">
                <template v-for="(s, sIdx) in sentences" :key="s.key">
                  <span class="sentence-inline"
                    ><template v-for="(seg, gIdx) in s.segments" :key="gIdx">
                      <span v-if="seg.clause" class="clause-mark">{{ seg.text }}</span>
                      <span v-else-if="seg.predicate" class="predicate-mark">{{ seg.text }}</span>
                      <template v-else>{{ seg.text }}</template>
                    </template><img
                      :src="yumaoIcon"
                      class="sentence-icon"
                      @click.stop="togglePanel(s.key)"
                    /></span>
                  <transition name="panel">
                    <div
                      v-if="activeKey === s.key"
                      class="sentence-panel"
                    ></div>
                  </transition>
                </template>
              </div>
            </div>
          </div>
          <div class="section-divider"></div>
          <div class="section-side">
            <div class="vocab-list">
              <div
                v-for="item in article.vocabulary"
                :key="item.word"
                class="vocab-item"
              >
                <span class="vocab-word">{{ item.word }}</span>
                <span class="vocab-pos">{{ item.pos }}</span>
                <span class="vocab-meaning">{{ item.meaning }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 全文翻译 -->
      <div class="article-section">
        <div class="section-row">
          <div class="section-main">
            <h2 class="section-title">全文翻译</h2>
            <p
              v-for="(t, idx) in article.translation.paragraphs"
              :key="idx"
              class="paragraph translation"
            >{{ t }}</p>
          </div>
          <div class="section-divider"></div>
          <div class="section-side"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reading-page {
  min-height: 100vh;
}

.main-content {
  max-width: 1040px;
  margin: 0 auto;
  padding: 60px 24px 80px;
}

.section-row {
  display: flex;
  align-items: stretch;
}

.section-main {
  flex: 7;
  min-width: 0;
}

.section-divider {
  width: 1px;
  background: var(--color-border);
  flex-shrink: 0;
  margin: 0 24px;
}

.section-side {
  flex: 3;
  min-width: 0;
  padding: 56px 0 16px;
}

.article-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.section-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 12px;
  padding-top: 28px;
}

.side-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
}

.paragraph-wrapper {
  & + & {
    margin-top: 20px;
  }
}

.paragraph {
  font-size: 1.15rem;
  line-height: 2;
  text-indent: 2em;
}

.sentence-inline {
  .sentence-icon {
    width: 18px;
    height: 18px;
    margin-left: 6px;
    margin-right: 4px;
    vertical-align: middle;
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
}

.clause-mark {
  font-style: italic;
  font-weight: 600;
  color: #3d3d3d;
}

.predicate-mark {
  color: #e0552a;
}

.vocab-list {
  display: flex;
  flex-direction: column;
}

.vocab-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
}

.vocab-word {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-text);
}

.vocab-pos {
  font-size: 0.75rem;
  color: #aaa;
  flex-shrink: 0;
}

.vocab-meaning {
  font-size: 0.82rem;
  color: var(--color-text-secondary);
}

.sentence-panel {
  display: block;
  margin: 6px 0;
  border-radius: 8px;
  background: #f2f7f2;
  min-height: 200px;
}

.panel-enter-active,
.panel-leave-active {
  transition: all 0.25s ease;
}
.panel-enter-from,
.panel-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.translation {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
</style>
