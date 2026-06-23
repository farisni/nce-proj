<script setup lang="ts">
import { ref, computed } from 'vue'
import { articles, articleMetas } from '../mock/readData'
import { useRoute } from 'vue-router'

const route = useRoute()
const article = computed(() => articles[route.params.id as string])
import yumaoIcon from '../asserts/icon/yumao.svg'
import Heatmap from '../components/Heatmap.vue'

const currentMeta = computed(() => articleMetas.find(m => m.id === route.params.id))
const neighbors = computed(() => {
  if (!currentMeta.value) return { prev: null, next: null }
  const sameLevel = articleMetas.filter(m => m.level === currentMeta.value!.level)
  const idx = sameLevel.indexOf(currentMeta.value)
  return {
    prev: idx > 0 ? sameLevel[idx - 1] : null,
    next: idx < sameLevel.length - 1 ? sameLevel[idx + 1] : null,
  }
})

interface Segment {
  text: string
  clause?: boolean
  predicate?: boolean
  noteText?: string
}

function markWords(
  sentence: string,
  predicates: string[],
  clauseIntroducers: string[],
  notes: { phrase: string; note: string }[],
): Segment[] {
  if (!predicates.length && !clauseIntroducers.length && !notes.length) return [{ text: sentence }]

  interface Span { start: number; end: number; predicate: boolean; clause: boolean; noteText: string }
  const spans: Span[] = []
  const lower = sentence.toLowerCase()

  const predWords = new Set<string>()
  for (const pred of predicates) for (const w of pred.split(/\s+/)) predWords.add(w.toLowerCase())
  for (const pw of predWords) {
    const escaped = pw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`(?<![a-zA-Z'-])${escaped}(?![a-zA-Z'-])`, 'gi')
    let m: RegExpExecArray | null
    while ((m = regex.exec(lower)) !== null)
      spans.push({ start: m.index, end: m.index + pw.length, predicate: true, clause: false, noteText: '' })
  }

  for (const ci of clauseIntroducers) {
    const lc = ci.toLowerCase(); let idx = lower.indexOf(lc)
    while (idx !== -1) {
      const bo = idx === 0 || /\s|[—,'"(\[{]/.test(sentence[idx - 1])
      const ao = idx + ci.length === sentence.length || /\s|[—,.'"!?;:)\]}。，！？；：、]/.test(sentence[idx + ci.length])
      if (bo && ao) spans.push({ start: idx, end: idx + ci.length, predicate: false, clause: true, noteText: '' })
      idx = lower.indexOf(lc, idx + 1)
    }
  }

  for (const note of notes) {
    const ln = note.phrase.toLowerCase(); let idx = lower.indexOf(ln)
    while (idx !== -1) {
      spans.push({ start: idx, end: idx + ln.length, predicate: false, clause: false, noteText: note.note })
      idx = lower.indexOf(ln, idx + 1)
    }
  }

  if (!spans.length) return [{ text: sentence }]
  spans.sort((a, b) => a.start - b.start)

  const len = sentence.length
  const cP = new Array(len).fill(false); const cC = new Array(len).fill(false)
  const cN: (string | null)[] = new Array(len).fill(null)
  for (const s of spans) for (let i = s.start; i < s.end; i++) {
    if (s.predicate) cP[i] = true; if (s.clause) cC[i] = true; if (s.noteText) cN[i] = s.noteText
  }

  const segs: Segment[] = []; let i = 0
  while (i < len) {
    const p = cP[i]; const c = cC[i]; const n = cN[i]; let j = i + 1
    while (j < len && cP[j] === p && cC[j] === c && cN[j] === n) j++
    const seg: Segment = { text: sentence.slice(i, j) }
    if (p) seg.predicate = true; if (c) seg.clause = true; if (n) seg.noteText = n
    segs.push(seg); i = j
  }

  const merged: Segment[] = []
  for (const seg of segs) {
    const last = merged[merged.length - 1]
    if (last && seg.noteText && seg.noteText === last.noteText) last.text += seg.text
    else merged.push({ ...seg })
  }
  return merged
}

const originalSentences = computed(() =>
  article.value.original.paragraphs.map((para) =>
    para.map((sd, sIdx) => ({
      segments: markWords(sd.text, sd.predicates, sd.clauseIntroducers, sd.notes ?? []),
      key: sd.text.slice(0, 40) + '-' + sIdx,
    }))
  ),
)

const activeKey = ref('')
const vocabSyllableKeys = ref(new Set<string>())

function togglePanel(key: string) { activeKey.value = activeKey.value === key ? '' : key }

function toggleVocabSyllable(word: string) {
  if (vocabSyllableKeys.value.has(word)) vocabSyllableKeys.value.delete(word)
  else vocabSyllableKeys.value.add(word)
  vocabSyllableKeys.value = new Set(vocabSyllableKeys.value)
}

function segClass(seg: Segment): string {
  const c: string[] = []; if (seg.clause) c.push('clause-mark'); if (seg.predicate) c.push('predicate-mark')
  return c.join(' ')
}
</script>

<template>
  <div class="reading-page">
    <div v-if="activeKey" class="spotlight-overlay" @click="activeKey = ''"></div>


    <div class="main-content">
      <div class="article-section">
        <div class="section-row">
          <div class="section-main">
            <div class="nav-buttons">
              <button v-if="neighbors.prev" class="nav-btn nav-prev" @click="$router.push({ name: 'article', params: { id: neighbors.prev.id } })">← Lesson {{ neighbors.prev.lesson }}</button>
              <span v-else class="nav-btn nav-prev nav-disabled"></span>
              <button v-if="neighbors.next" class="nav-btn nav-next" @click="$router.push({ name: 'article', params: { id: neighbors.next.id } })">Lesson {{ neighbors.next.lesson }} →</button>
              <span v-else class="nav-btn nav-next nav-disabled"></span>
            </div>

            <h1 class="article-title">
              <span class="title-text-wrap"><template v-if="currentMeta"><span class="title-lesson">L{{ currentMeta.lesson }}</span><span v-if="currentMeta.tag" class="title-tag">{{ currentMeta.tag }}</span> {{ currentMeta.title }}</template></span>
              <Heatmap v-if="currentMeta?.heatmap" :data="currentMeta.heatmap" />
            </h1>
            <div v-for="(sentences, pIdx) in originalSentences" :key="pIdx" class="paragraph-wrapper">
              <div class="paragraph">
                <template v-for="(s, sIdx) in sentences" :key="s.key">
                  <span class="sentence-inline" :class="{ spotlight: activeKey === s.key }"
                    ><template v-for="(seg, gIdx) in s.segments" :key="gIdx">
                      <ruby v-if="seg.noteText && activeKey !== s.key" class="noted-ruby">
                        <span :class="segClass(seg)">{{ seg.text }}</span><rt>{{ seg.noteText }}</rt>
                      </ruby>
                      <span v-else-if="segClass(seg)" :class="segClass(seg)">{{ seg.text }}</span>
                      <template v-else>{{ seg.text }}</template>
                    </template><img :src="yumaoIcon" class="sentence-icon" @click.stop="togglePanel(s.key)"
                  /></span>
                  <transition name="panel">
                    <div v-if="activeKey === s.key" class="sentence-panel"></div>
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
                @click="toggleVocabSyllable(item.word)"
              >
                <el-tooltip :content="item.phonetic" effect="light" placement="top" :show-after="300"><span class="vocab-word">{{ vocabSyllableKeys.has(item.word) && item.syllables ? item.syllables : item.word }}</span></el-tooltip>
                <span class="vocab-pos">{{ item.pos }}</span>
                <span class="vocab-meaning">{{ item.meaning }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="article-section">
        <div class="section-row">
          <div class="section-main">
            <h2 class="section-title">全文翻译</h2>
            <div v-for="(para, pIdx) in article.original.paragraphs" :key="'tp'+pIdx">
              <p class="paragraph translation">{{ para.map(s => s.translation || '').filter(Boolean).join('') }}</p>
            </div>
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
  min-height: 100vh; position: relative;
  background-color: var(--color-bg);
  background-image: radial-gradient(circle, #d8d0c0 1px, transparent 1px);
  background-size: 24px 24px;
}
.main-content { max-width: 1040px; margin: 0 auto; padding: 24px 24px 60px; background: var(--color-bg); }
.section-row { display: flex; align-items: stretch; }
.section-main { flex: 7; min-width: 0; }
.section-divider { width: 1px; background: var(--color-border); flex-shrink: 0; margin: 0 24px; }
.section-side { flex: 3; min-width: 0; padding: 56px 0 16px; }
.article-title { font-size: 1.6rem; font-weight: 700; margin-bottom: 16px; font-family: 'Merriweather', Georgia, serif; display: flex; align-items: center; }
.title-text-wrap { flex: 1; min-width: 0; }

.title-lesson { color: #999; font-weight: 400; }
.title-tag { display: inline-block; vertical-align: middle; position: relative; top: -2px; width: 20px; height: 20px; line-height: 20px; text-align: center; font-size: 0.55rem; color: #fff; font-weight: 600; background: #f0a030; border-radius: 50%; margin: 0 4px; font-family: inherit; }
.section-title { font-size: 1.15rem; font-weight: 600; margin-bottom: 12px; padding-top: 28px; }
.paragraph-wrapper { & + & { margin-top: 12px; } }
.paragraph { font-size: 1.15rem; line-height: 2; text-indent: 2em; font-family: 'Merriweather', Georgia, serif; }
.sentence-inline {
  .sentence-icon {
    width: 18px; height: 18px; margin-left: 6px; margin-right: 4px;
    vertical-align: middle; cursor: pointer; opacity: 0.4; transition: opacity 0.2s;
    &:hover { opacity: 0.8; }
  }
}

.spotlight-overlay {
  position: fixed; inset: 0; z-index: 10;
  background: rgba(0, 0, 0, 0.35);
}

.sentence-inline.spotlight {
  position: relative; z-index: 11;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  padding: 2px 6px;
  margin: 0 -6px;
}

.sentence-panel {
  display: block; margin: 6px 0; border-radius: 8px;
  background: #f2f7f2; min-height: 200px;
  position: relative; z-index: 11;
}

.clause-mark { font-style: italic; font-weight: 600; color: #3d3d3d; }
.predicate-mark { color: #e0552a; }

.noted-ruby {
  ruby-position: under; ruby-align: center;
  rt { font-size: 0.65rem; color: #555; padding-top: 1px; font-family: 'LXGW WenKai', 'PingFang SC', 'Microsoft YaHei', serif; }
}

.vocab-list { display: flex; flex-direction: column; }
.vocab-item {
  display: flex; align-items: baseline; gap: 8px; padding: 6px 0;
  border-bottom: 1px solid var(--color-border); cursor: pointer; user-select: none;

  &:last-child { border-bottom: none; }
}
.vocab-word { font-weight: 400; font-size: 0.9rem; color: var(--color-text); font-family: 'Poppins', sans-serif; }
.vocab-pos { font-size: 0.75rem; color: #aaa; flex-shrink: 0; font-family: 'Poppins', sans-serif; }
.vocab-meaning { font-size: 0.82rem; color: var(--color-text-secondary); }

.panel-enter-active, .panel-leave-active { transition: all 0.25s ease; }
.panel-enter-from, .panel-leave-to { opacity: 0; transform: translateY(-6px); }
.translation { font-size: 0.9rem; color: var(--color-text-secondary); font-family: inherit; }
.nav-buttons {
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 0 16px; margin-bottom: 12px;
  border-bottom: 1px solid var(--color-border);
}
.nav-btn {
  padding: 5px 16px; border: 1px solid var(--color-border);
  border-radius: 5px; cursor: pointer;
  background: var(--color-panel-bg);
  color: var(--color-text);
  font-size: 0.8rem; font-family: inherit;
  transition: background 0.2s, box-shadow 0.2s;
  max-width: 45%;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  &:hover { background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
}
.nav-prev { text-align: left; }
.nav-next { text-align: right; margin-left: auto; }
.nav-disabled { visibility: hidden; }
</style>
