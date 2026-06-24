<script setup lang="ts">
/**
 * Article.vue — 文章阅读页
 * 
 * 数据流：URL :id → articles[id] (SentenceData[][]) → 逐句渲染
 * - 每个句子拆成 Segment[]，标记谓语/从句引导词/句子横批
 * - 谓语 → 橘红字体 (.predicate-mark)
 * - 从句引导词 → 斜体加粗 (.clause-mark)
 * - 句子横批 → <ruby> 元素显示在词下方
 * - 点击羽毛图标 → 展开/收起笔记面板 + 聚光灯效果
 * - 右侧词汇表 → 单击切换音节拆分
 */

import { ref, computed, nextTick, onBeforeUnmount, onMounted, watch } from 'vue' 
import { articles, type SentenceData, type VocabItem } from '../mock/readData'
import { useRoute } from 'vue-router'
import { SuccessFilled, CopyDocument } from '@element-plus/icons-vue'

const route = useRoute()
const article = computed(() => articles[route.params.id as string])
import editIcon from '../asserts/icon/edit.svg'
import pzIcon from '../asserts/icon/pz.svg'
import copyIcon from '../asserts/icon/copy.svg'
import grNoteIcon from '../asserts/icon/gr-note.svg'
import SentenceNotes from '../components/SentenceNotes.vue'
import Heatmap from '../components/Heatmap.vue'

// 当前文章元数据：从 article.value 直接读取（已合并 ArticleMeta 字段）
const currentMeta = computed(() => article.value ?? null)
// 同 level 下的上一篇/下一篇文章，用于导航按钮
const neighbors = computed(() => {
  if (!currentMeta.value) return { prev: null, next: null }
  const sameLevel = Object.values(articles).filter(a => a.level === currentMeta.value!.level).sort((a, b) => a.lesson - b.lesson)
  const idx = sameLevel.findIndex(a => a.id === currentMeta.value!.id)
  return {
    prev: idx > 0 ? sameLevel[idx - 1] : null,
    next: idx < sameLevel.length - 1 ? sameLevel[idx + 1] : null,
  }
})

// 句子被 markWords() 拆分后的最小渲染单元
interface Segment {
  text: string        // 片段文字
  clause?: boolean    // 从句引导词 → 斜体加粗
  predicate?: boolean // 谓语 → 橘红色
  structure?: boolean // 语法摘要命中片段 → 下划线
  structureTone?: number // 语法摘要对应段落色
  noteText?: string   // 句子横批 → ruby 下方小字
}

interface SegmentGroup {
  noteText?: string
  startIndex: number
  segments: Segment[]
}

interface GrammarSummaryNote {
  title: string
  body: string
  key: string
}

interface GrammarSummaryGroup {
  key: string
  paragraphIndex: number
  tone: number
  notes: GrammarSummaryNote[]
}

interface GrammarSummaryBlockMetric {
  top: number
  height: number
}

interface VocabParagraphGroup {
  key: string
  paragraphIndex: number
  tone: number
  items: VocabItem[]
}

/**
 * 将句子文字 + 语法标注 → Segment[]
 * 1) 谓语词 → predicate 标记
 * 2) 从句引导词 → clause 标记（要求词边界匹配）
 * 3) 句子横批短语 → noteText 标记（大小写不敏感子串匹配）
 * 最后合并相邻同类 Segment
 */
function markWords(
  sentence: string,
  predicates: string[],
  clauseIntroducers: string[],
  notes: { title: string; body: string }[],
  structureNotes: { title: string; body: string }[],
  structureTone: number,
): Segment[] {
  // 无标注数据 → 整句作为一个 Segment
  if (!predicates.length && !clauseIntroducers.length && !notes.length && !structureNotes.length) return [{ text: sentence }]

  // Span：字符级标记区间，三色可叠加
  interface Span { start: number; end: number; predicate: boolean; clause: boolean; structure: boolean; noteText: string }
  const spans: Span[] = []
  const lower = sentence.toLowerCase()

  // 步骤 1：谓语拆分单词 → 词边界正则匹配
  const predWords = new Set<string>()
  for (const pred of predicates) for (const w of pred.split(/\s+/)) predWords.add(w.toLowerCase())
  for (const pw of predWords) {
    const escaped = pw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`(?<![a-zA-Z'-])${escaped}(?![a-zA-Z'-])`, 'gi')
    let m: RegExpExecArray | null
    while ((m = regex.exec(lower)) !== null)
      spans.push({ start: m.index, end: m.index + pw.length, predicate: true, clause: false, structure: false, noteText: '' })
  }

  // 步骤 2：从句引导词 → 要求词边界（前后为空格或标点）
  for (const ci of clauseIntroducers) {
    const lc = ci.toLowerCase(); let idx = lower.indexOf(lc)
    while (idx !== -1) {
      const bo = idx === 0 || /\s|[—,'"(\[{]/.test(sentence[idx - 1])
      const ao = idx + ci.length === sentence.length || /\s|[—,.'"!?;:)\]}。，！？；：、]/.test(sentence[idx + ci.length])
      if (bo && ao) spans.push({ start: idx, end: idx + ci.length, predicate: false, clause: true, structure: false, noteText: '' })
      idx = lower.indexOf(lc, idx + 1)
    }
  }

  // 步骤 3：句子横批 → 大小写不敏感子串匹配（不需要词边界）
  for (const note of notes) {
    const ln = note.title.toLowerCase(); let idx = lower.indexOf(ln)
    while (idx !== -1) {
      spans.push({ start: idx, end: idx + ln.length, predicate: false, clause: false, structure: false, noteText: note.body })
      idx = lower.indexOf(ln, idx + 1)
    }
  }

  // 步骤 4：语法摘要标题 → 下划线；后续会优先于 ruby 横批显示
  for (const note of structureNotes) {
    const ln = note.title.toLowerCase(); let idx = lower.indexOf(ln)
    while (idx !== -1) {
      spans.push({ start: idx, end: idx + ln.length, predicate: false, clause: false, structure: true, noteText: '' })
      idx = lower.indexOf(ln, idx + 1)
    }
  }
  if (!spans.length) return [{ text: sentence }]

  // 按字符位元标记 → 合并相邻同类 → 合并 noteText 相同的 Segment
  spans.sort((a, b) => a.start - b.start)

  const len = sentence.length
  const cP = new Array(len).fill(false); const cC = new Array(len).fill(false); const cS = new Array(len).fill(false)
  const cN: (string | null)[] = new Array(len).fill(null)
  for (const s of spans) for (let i = s.start; i < s.end; i++) {
    if (s.predicate) cP[i] = true; if (s.clause) cC[i] = true; if (s.structure) cS[i] = true; if (s.noteText) cN[i] = s.noteText
  }
  for (let i = 0; i < len; i++) if (cS[i]) cN[i] = null

  const segs: Segment[] = []; let i = 0
  while (i < len) {
    const p = cP[i]; const c = cC[i]; const s = cS[i]; const n = cN[i]; let j = i + 1
    while (j < len && cP[j] === p && cC[j] === c && cS[j] === s && cN[j] === n) j++
    const seg: Segment = { text: sentence.slice(i, j) }
    if (p) seg.predicate = true; if (c) seg.clause = true; if (s) { seg.structure = true; seg.structureTone = structureTone } if (n) seg.noteText = n
    segs.push(seg); i = j
  }

  // 相邻且 noteText 相同的 Segment 合并（避免重复显示多次笔记）
  const merged: Segment[] = []
  for (const seg of segs) {
    const last = merged[merged.length - 1]
    if (last && seg.noteText && seg.noteText === last.noteText && seg.predicate === last.predicate && seg.clause === last.clause && seg.structure === last.structure) last.text += seg.text
    else merged.push({ ...seg })
  }
  return merged
}

// 核心渲染数据：段落 → 句子 → { segments, key }
// key 用于聚光灯 toggle（句首 40 字符 + 索引）
const grammarSummaryGroups = computed<GrammarSummaryGroup[]>(() =>
  article.value.original.paragraphs
    .map((para: SentenceData[], pIdx: number) => ({
      key: `grammar-${pIdx}`,
      paragraphIndex: pIdx,
      tone: 1,
      notes: para.flatMap((sentence: SentenceData, sIdx: number) =>
        (sentence.structureNotes ?? []).map((note, nIdx) => ({ ...note, key: `${pIdx}-${sIdx}-${nIdx}` }))
      ),
    }))
    .filter((group: GrammarSummaryGroup) => group.notes.length > 0)
    .map((group: GrammarSummaryGroup, index: number) => ({ ...group, tone: (index % 5) + 1 })),
)

const grammarSummaryToneByParagraph = computed(() => new Map(grammarSummaryGroups.value.map(group => [group.paragraphIndex, group.tone])))

const originalSentences = computed(() =>
  article.value.original.paragraphs.map((para: SentenceData[], pIdx: number) =>
    para.map((sd: SentenceData, sIdx: number) => ({
      segments: markWords(sd.text, sd.predicates, sd.clauseIntroducers, sd.rubyNotes ?? [], sd.structureNotes ?? [], grammarSummaryToneByParagraph.value.get(pIdx) ?? 1),
      key: sd.text.slice(0, 40) + '-' + sIdx,
      panelNotes: sd.panelNotes ?? [],
    }))
  ),
)

const vocabParagraphGroups = computed<VocabParagraphGroup[]>(() => {
  const paragraphTexts = article.value.original.paragraphs.map((para: SentenceData[]) => para.map((sentence: SentenceData) => sentence.text).join(' ').toLowerCase())
  const groups: VocabParagraphGroup[] = paragraphTexts.map((_: string, pIdx: number) => ({
    key: `vocab-${pIdx}`,
    paragraphIndex: pIdx,
    tone: grammarSummaryToneByParagraph.value.get(pIdx) ?? (pIdx % 5) + 1,
    items: [],
  }))
  const fallbackIndex = Math.max(0, groups.length - 1)

  for (const item of article.value.vocabulary) {
    const paragraphIndex = paragraphTexts.findIndex((text: string) => {
      const candidates = Array.from(new Set([item.word.trim(), item.word.replace(/\s*\([^)]*\)/g, '').trim()].filter(Boolean).map(candidate => candidate.toLowerCase())))
      return candidates.some(candidate => {
        const escaped = candidate.split(/\s+/).map((value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s+')
        return new RegExp(`(?<![a-zA-Z-])${escaped}(?![a-zA-Z-])`, 'i').test(text)
      })
    })
    groups[paragraphIndex === -1 ? fallbackIndex : paragraphIndex].items.push(item)
  }

  return groups.filter(group => group.items.length > 0)
})

function isVocabGroupEnd(groupIndex: number, itemIndex: number) {
  return groupIndex < vocabParagraphGroups.value.length - 1 && itemIndex === vocabParagraphGroups.value[groupIndex].items.length - 1
}

// 当前展开笔记面板的句子 key（空 = 全部收起）
const activeKey = ref('')
const activeSideTab = ref<'vocab' | 'grammar'>('grammar')
const paragraphEls = ref<HTMLElement[]>([])
const grammarSummaryBlockMetrics = ref<Record<number, GrammarSummaryBlockMetric>>({})
const grammarSummaryContainerHeight = ref(0)
let paragraphResizeObserver: ResizeObserver | null = null
// 已切换为音节显示的词汇（单击词汇表单词切换）
const vocabSyllableKeys = ref(new Set<string>())

// 右键菜单 & 句子横批输入框
const ctxMenu = ref({ show: false, x: 0, y: 0, text: '', pIdx: -1, sIdx: -1 })
const noteDialog = ref<{ show: boolean; phrase: string; note: string; grown: boolean; mode?: string }>({ show: false, phrase: '', note: '', grown: false })
const ciInitH = ref(0)

function onContextMenu(e: MouseEvent) {
  const sel = window.getSelection()
  if (!sel || sel.isCollapsed) return
  const text = sel.toString().trim()
  if (!text) return
  e.preventDefault()
  const anchor = sel.anchorNode
  const sentenceEl = anchor?.parentElement?.closest('.sentence-inline')
  let pIdx = -1, sIdx = -1
  if (sentenceEl) {
    const paragraphEl = sentenceEl.closest('.paragraph-wrapper')
    pIdx = Array.from(paragraphEl?.parentElement?.children || []).indexOf(paragraphEl!)
    sIdx = Array.from(sentenceEl.parentElement?.children || []).indexOf(sentenceEl)
  }
  ctxMenu.value = { show: true, x: e.clientX, y: e.clientY, text, pIdx, sIdx }
}
function closeCtxMenu() { ctxMenu.value.show = false }
function copySelection() { navigator.clipboard.writeText(ctxMenu.value.text); closeCtxMenu() }

function addRubyNote() {
  const { text } = ctxMenu.value
  if (!text) return
  closeCtxMenu()
  setTimeout(() => openNoteDialog(text), 100)
}

function openNoteDialog(phrase: string) {
  noteDialog.value = { show: true, phrase, note: '', grown: false, mode: 'ruby' }; ciInitH.value = 0
  setTimeout(() => { const ta = document.querySelector('.ci-input') as HTMLTextAreaElement; if (ta) ta.focus() }, 50)
}
function submitNoteDialog() {
  const { phrase, note, mode } = noteDialog.value
  if (!note.trim()) return
  const { pIdx, sIdx } = ctxMenu.value
  if (pIdx < 0 || sIdx < 0) return
  const sentence = article.value.original.paragraphs[pIdx][sIdx]
  if (mode === 'structure') {
    if (!sentence.structureNotes) sentence.structureNotes = []
    sentence.structureNotes.push({ title: phrase, body: note.trim() })
  } else {
    if (!sentence.notes) sentence.notes = []
    sentence.notes.push({ phrase, note: note.trim() })
  }
  noteDialog.value.show = false
}
function addStructureNote() {
  const { text } = ctxMenu.value
  if (!text) return
  closeCtxMenu()
  setTimeout(() => openStructureDialog(text), 100)
}
function openStructureDialog(phrase: string) {
  noteDialog.value = { show: true, phrase, note: '', grown: false }
  noteDialog.value.mode = 'structure'
  setTimeout(() => { const ta = document.querySelector('.ci-input') as HTMLTextAreaElement; if (ta) ta.focus() }, 50)
}
function submitStructureNote() {
  const { phrase, note } = noteDialog.value
  if (!note.trim()) return
  const { pIdx, sIdx } = ctxMenu.value
  if (pIdx < 0 || sIdx < 0) return
  const sentence = article.value.original.paragraphs[pIdx][sIdx]
  if (!sentence.structureNotes) sentence.structureNotes = []
  sentence.structureNotes.push({ title: phrase, body: note.trim() })
  noteDialog.value.show = false
}
function cancelNoteDialog() { noteDialog.value.show = false }
function ciAutoResize(e: Event) {
  const el = e.target as HTMLTextAreaElement
  el.style.height = 'auto'
  const h = el.scrollHeight
  if (!ciInitH.value) ciInitH.value = h
  el.style.height = h + 'px'
  noteDialog.value.grown = h > ciInitH.value + 2
}


// 点击羽毛图标 → 展开/收起笔记面板（再次点击同一句关闭）
function togglePanel(key: string) { activeKey.value = activeKey.value === key ? '' : key }

// 单击词汇表单词 → 切换原形/音节拆分显示
function toggleVocabSyllable(word: string) {
  if (vocabSyllableKeys.value.has(word)) vocabSyllableKeys.value.delete(word)
  else vocabSyllableKeys.value.add(word)
  vocabSyllableKeys.value = new Set(vocabSyllableKeys.value)
}

// 返回 Segment 的 CSS class 字符串（clause-mark / predicate-mark / structure-mark 可叠加）
function segClass(seg: Segment, hideStructure = false): string {
  const c: string[] = []; if (seg.clause) c.push('clause-mark'); if (seg.predicate) c.push('predicate-mark'); if (seg.structure && !hideStructure) c.push('structure-mark', grammarToneClass(seg.structureTone ?? 1))
  return c.join(' ')
}

function grammarToneClass(tone: number) { return `grammar-tone-${tone}` }

function segmentGroups(segments: Segment[]): SegmentGroup[] {
  const groups: SegmentGroup[] = []
  for (const [index, seg] of segments.entries()) {
    const last = groups[groups.length - 1]
    if (seg.noteText && last?.noteText === seg.noteText) last.segments.push(seg)
    else groups.push({ noteText: seg.noteText, startIndex: index, segments: [seg] })
  }
  return groups
}

function displaySegmentText(seg: Segment, segments: Segment[], index: number) {
  let text = seg.text.replace(/([A-Za-z])\?/g, '$1\u2009?')
  const previousText = segments[index - 1]?.text ?? ''
  if (text.startsWith('?') && /[A-Za-z]$/.test(previousText)) text = `\u2009${text}`
  return text
}

function setParagraphRef(el: unknown, index: number) {
  if (el instanceof HTMLElement) paragraphEls.value[index] = el
}

function syncGrammarSummaryBlockHeights() {
  const firstParagraphEl = paragraphEls.value[0] ?? paragraphEls.value.find(Boolean)
  if (!firstParagraphEl) return

  const baseTop = firstParagraphEl.getBoundingClientRect().top
  const nextMetrics: Record<number, GrammarSummaryBlockMetric> = {}
  let nextContainerHeight = 0

  for (const group of grammarSummaryGroups.value) {
    const el = paragraphEls.value[group.paragraphIndex]
    if (!el) continue

    const rect = el.getBoundingClientRect()
    const top = Math.max(0, Math.round(rect.top - baseTop))
    const height = Math.ceil(rect.height)
    nextMetrics[group.paragraphIndex] = { top, height }
    nextContainerHeight = Math.max(nextContainerHeight, top + height)
  }

  grammarSummaryBlockMetrics.value = nextMetrics
  grammarSummaryContainerHeight.value = nextContainerHeight
}

function observeParagraphHeights() {
  paragraphResizeObserver?.disconnect()
  paragraphResizeObserver = new ResizeObserver(syncGrammarSummaryBlockHeights)
  for (const group of grammarSummaryGroups.value) {
    const el = paragraphEls.value[group.paragraphIndex]
    if (el) paragraphResizeObserver.observe(el)
  }
  syncGrammarSummaryBlockHeights()
}

function grammarSummaryBlockStyle(paragraphIndex: number) {
  const metric = grammarSummaryBlockMetrics.value[paragraphIndex]
  return metric ? { top: `${metric.top}px`, maxHeight: `${metric.height}px` } : {}
}

function grammarSummaryStyle() {
  return grammarSummaryContainerHeight.value ? { height: `${grammarSummaryContainerHeight.value}px` } : {}
}

onMounted(() => {
  nextTick(observeParagraphHeights)
  window.addEventListener('resize', syncGrammarSummaryBlockHeights)
})

onBeforeUnmount(() => {
  paragraphResizeObserver?.disconnect()
  window.removeEventListener('resize', syncGrammarSummaryBlockHeights)
})

watch([originalSentences, grammarSummaryGroups], () => nextTick(observeParagraphHeights), { flush: 'post' })
watch(activeSideTab, tab => { if (tab === 'grammar') nextTick(syncGrammarSummaryBlockHeights) })
watch(() => [currentMeta.value?.id, grammarSummaryGroups.value.length] as const, ([, grammarCount]) => {
  activeSideTab.value = grammarCount > 0 ? 'grammar' : 'vocab'
}, { immediate: true })
</script>

<template>
  <!-- 
    页面结构：
    1. spotlight-overlay — 聚光灯遮罩（点击关闭）
    2. main-content
       ├─ article-section 1: 英文原文 + 词汇侧栏
       │   ├─ nav-buttons — ← Lesson N / Lesson N →
       │   ├─ article-title + Heatmap
       │   ├─ paragraph-wrapper (.paragraph) — 逐句渲染
       │   │   └─ sentence-inline (.spotlight 聚光灯) + sentence-panel
       │   └─ section-side (.vocab-list) — 词汇表
       └─ article-section 2: 参考译文
  -->
  <div class="reading-page">
    <!-- 聚光灯遮罩：点击空白处关闭面板 -->
    <div v-if="activeKey" class="spotlight-overlay" @click="activeKey = ''"></div>


    <div class="main-content">
      <div class="article-section">
        <div class="section-row">
          <div class="section-main">
            <!-- 上下课导航按钮（← Lesson N / Lesson N →） -->
            <div class="nav-buttons">
              <button v-if="neighbors.prev" class="nav-btn nav-prev" @click="$router.push({ name: 'article', params: { id: neighbors.prev.id } })">← Lesson {{ neighbors.prev.lesson }}</button>
              <span v-else class="nav-btn nav-prev nav-disabled"></span>
              <button v-if="neighbors.next" class="nav-btn nav-next" @click="$router.push({ name: 'article', params: { id: neighbors.next.id } })">Lesson {{ neighbors.next.lesson }} →</button>
              <span v-else class="nav-btn nav-next nav-disabled"></span>
            </div>

            <!-- 文章标题：L课号 + 标签 + 标题 + 热力图 -->
            <h1 class="article-title">
              <span class="title-text-wrap"><template v-if="currentMeta"><span class="title-lesson">L{{ currentMeta.lesson }}</span><span v-if="currentMeta.tag" class="title-tag">{{ currentMeta.tag }}</span> {{ currentMeta.title }}</template><img :src="editIcon" class="edit-icon" title="编辑文章" @click.stop="$router.push({ name: 'editArticle', params: { id: currentMeta?.id } })" /></span>
              <Heatmap v-if="currentMeta?.heatmap" :data="currentMeta.heatmap" />
            </h1>
            <p v-if="currentMeta?.attribution" class="article-attribution">—— {{ currentMeta.attribution }}</p>
            <!-- 段落 → 句子渲染：span.sentence-inline（高亮 + 羽毛图标）+ transition 笔记面板 -->
            <div v-for="(sentences, pIdx) in originalSentences" :key="pIdx" :ref="el => setParagraphRef(el, pIdx)" class="paragraph-wrapper">
              <div class="paragraph" @contextmenu="onContextMenu">
                <template v-for="(s, sIdx) in sentences" :key="s.key">
                  <!-- 单句：非面板展开时用 ruby 显示句子横批，面板展开时收起笔记 -->
                  <span class="sentence-inline" :class="{ spotlight: activeKey === s.key }"
                    ><template v-for="(group, gIdx) in segmentGroups(s.segments)" :key="gIdx">
                      <ruby v-if="group.noteText && activeKey !== s.key" class="noted-ruby">
                        <span><template v-for="(seg, sgIdx) in group.segments" :key="sgIdx">
                          <span v-if="segClass(seg, activeKey === s.key)" :class="segClass(seg, activeKey === s.key)">{{ displaySegmentText(seg, s.segments, group.startIndex + sgIdx) }}</span>
                          <template v-else>{{ displaySegmentText(seg, s.segments, group.startIndex + sgIdx) }}</template>
                        </template></span><rt>{{ group.noteText }}</rt>
                      </ruby>
                      <template v-else v-for="(seg, sgIdx) in group.segments" :key="sgIdx">
                        <span v-if="segClass(seg, activeKey === s.key)" :class="segClass(seg, activeKey === s.key)">{{ displaySegmentText(seg, s.segments, group.startIndex + sgIdx) }}</span>
                        <template v-else>{{ displaySegmentText(seg, s.segments, group.startIndex + sgIdx) }}</template>
                      </template>
                    </template><SentenceNotes v-if="s.panelNotes && s.panelNotes.length" :sentence-key="s.key" :panel-notes="s.panelNotes" @toggle="togglePanel" /></span>
                  <!-- 笔记面板：展开时显示 200px 浅绿底 -->
                  <transition name="panel">
                    <div v-if="activeKey === s.key" class="sentence-panel">
                      <table class="panel-note-table">
                        <tr v-for="(pn, pni) in s.panelNotes" :key="'pn'+pni" class="panel-note-item">
                          <td class="panel-note-td"><span class="panel-note-snippet">{{ pn.title }}</span></td>
                          <td class="panel-note-td"><span class="panel-note-desc">{{ pn.body }}</span></td>
                        </tr>
                      </table>
                    </div>
                  </transition>
                  {{ sIdx < sentences.length - 1 ? '\t' : '' }}
                </template>
              </div>
            </div>
          </div>
          <div class="section-divider"></div>
          <!-- 右侧词汇侧栏：单击切换音节拆分，el-tooltip 显示音标 -->
          <div class="section-side">
            <el-tabs v-model="activeSideTab" class="side-tabs">
              <el-tab-pane label="语法摘要" name="grammar">
                <div class="grammar-summary" :style="grammarSummaryStyle()">
                  <div v-for="group in grammarSummaryGroups" :key="group.key" class="grammar-summary-block" :class="grammarToneClass(group.tone)" :style="grammarSummaryBlockStyle(group.paragraphIndex)">
                    <div v-for="note in group.notes" :key="note.key" class="grammar-summary-item">
                      <span class="grammar-summary-title">{{ note.title }}</span>
                      <span class="grammar-summary-body">{{ note.body }}</span>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="课文单词" name="vocab">
                <div class="vocab-list">
                  <template v-for="(group, groupIndex) in vocabParagraphGroups" :key="group.key">
                    <div
                      v-for="(item, itemIndex) in group.items"
                      :key="item.word"
                      class="vocab-item"
                      :class="[grammarToneClass(group.tone), { 'vocab-item-group-end': isVocabGroupEnd(groupIndex, itemIndex) }]"
                      @click="toggleVocabSyllable(item.word)"
                    >
                      <span class="vocab-word">{{ vocabSyllableKeys.has(item.word) && item.syllables ? item.syllables : item.word }}</span><span v-if="item.phonetic && item.phonetic !== '//'" class="vocab-phonetic">{{ item.phonetic }}</span>
                      <span class="vocab-pos">{{ item.pos }}</span>
                      <span class="vocab-meaning">{{ item.meaning }}</span>
                    </div>
                  </template>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
      <div class="article-section">
        <div class="section-row">
          <div class="section-main">
            <!-- 课文注释 -->
            <div v-if="article.notesOnText && article.notesOnText.length" class="article-notes">
              <h2 class="section-title">课文注释</h2>
              <div v-for="(note, ni) in article.notesOnText" :key="ni" class="note-item">
                <span class="note-index">{{ ni + 1 }}.</span>
                <span class="note-label">{{ note.title }}</span>
                <span class="note-body">{{ note.body }}</span>
              </div>
            </div>
            <h2 class="section-title">参考译文</h2>
            <div v-for="(para, pIdx) in article.original.paragraphs" :key="'tp'+pIdx">
              <p class="paragraph translation">{{ para.map((s: SentenceData) => s.translation || '').filter(Boolean).join('') }}</p>
            </div>
          </div>
          <div class="section-divider"></div>
          <div class="section-side"></div>
        </div>
      </div>
    </div>
  </div>

    <!-- 右键菜单 (Teleport) -->
    <Teleport to="body">
      <div v-if="ctxMenu.show" class="cm-overlay" @click="closeCtxMenu"></div>
      <div v-if="ctxMenu.show" class="cm-menu" :style="{ left: ctxMenu.x + 'px', top: ctxMenu.y + 'px' }" @click.stop>
        <div class="cm-item" @click="copySelection"><img :src="copyIcon" class="cm-icon-svg" />复制</div>
        <div class="cm-item" @click="addRubyNote"><img :src="pzIcon" class="cm-icon-svg" />添加句子横批</div>
        <div class="cm-item" @click="addStructureNote"><img :src="grNoteIcon" class="cm-icon-svg cm-icon-faded" />添加语法摘要</div>
      </div>
    </Teleport>

    <!-- 句子横批输入框 (Teleport) -->
    <Teleport to="body">
      <div v-if="noteDialog.show" class="ci-overlay" @click="cancelNoteDialog"></div>
      <div v-if="noteDialog.show" class="ci-dialog" :class="{ 'ci-grown': noteDialog.grown }" :style="{ left: ctxMenu.x + 'px', top: ctxMenu.y + 'px' }" @click.stop>
        <div class="ci-wrap">
          <textarea v-model="noteDialog.note" class="ci-input" :placeholder="noteDialog.mode === 'structure' ? '输入解析…' : '输入注解…'" rows="1" @keyup.enter.prevent="submitNoteDialog" @input="ciAutoResize" />
          <el-icon class="ci-submit" :class="{ active: noteDialog.note.trim() }" @click="submitNoteDialog"><SuccessFilled /></el-icon>
        </div>
      </div>
    </Teleport>

</template>

<style lang="scss" scoped>
// 页面背景：圆点纹理（手账风格）
.reading-page {
  min-height: 100vh; position: relative;
  background-color: #fff;
  background-image: radial-gradient(circle, #d8d0c0 1px, transparent 1px);
  background-size: 24px 24px;
}
.main-content { max-width: 1040px; margin: 0 auto; padding: 24px 24px 60px; background: #fff; }
.section-row { display: flex; align-items: stretch; }
.section-main { flex: 7; min-width: 0; }
.section-divider { width: 1px; background: rgba(55, 53, 47, 0.08); flex-shrink: 0; margin: 0 24px; }
.section-side { flex: 3; min-width: 0; padding: 0 0 16px; }
.vocab-title { font-size: 1rem; font-weight: 600; margin-bottom: 20px; padding-top: 76px; font-family: inherit; }
.side-tabs { padding-top: 76px; }
.side-tabs :deep(.el-tabs__header) { margin-bottom: 18px; }
.side-tabs :deep(.el-tabs__nav-wrap::after) { display: none; }
.side-tabs :deep(.el-tabs__item) {
  height: 32px; line-height: 32px; padding: 0 10px;
  color: var(--color-text-secondary); font-size: 1rem; font-weight: 550;
  font-family: inherit;
}
.side-tabs :deep(.el-tabs__item:hover) { color: var(--color-text); }
.side-tabs :deep(.el-tabs__item.is-active) { color: var(--color-text); }
.side-tabs :deep(.el-tabs__active-bar) { height: 2px; background: #d49345; }
.grammar-summary { position: relative; min-height: 160px; }
.grammar-summary-block {
  position: absolute; left: 0; right: 0;
  padding: 0 0 0 10px;
  border-left: 3px solid transparent;
  box-sizing: border-box; overflow: auto;
}
.grammar-tone-1 { --grammar-mark-color: #d6c9b8; --grammar-underline-color: #ded4c8; --grammar-title-bg: #e5dfd5; }
.grammar-tone-2 { --grammar-mark-color: #c7d7de; --grammar-underline-color: #d3e0e5; --grammar-title-bg: #dce5e9; }
.grammar-tone-3 { --grammar-mark-color: #cbdcc4; --grammar-underline-color: #d5e4cf; --grammar-title-bg: #dfe8da; }
.grammar-tone-4 { --grammar-mark-color: #dcc6d0; --grammar-underline-color: #e5d5dd; --grammar-title-bg: #e9dce2; }
.grammar-tone-5 { --grammar-mark-color: #d0c7df; --grammar-underline-color: #d9d2e6; --grammar-title-bg: #e1dcea; }
.grammar-summary-block { border-left-color: var(--grammar-mark-color); }
.grammar-summary-item {
  display: flex; flex-direction: column; gap: 4px; padding: 7px 0;
  border-bottom: 1px solid rgba(55, 53, 47, 0.08);
  &:last-child { border-bottom: none; }
}
.grammar-summary-title {
  display: inline-block; width: fit-content; padding: 1px 6px;
  font-size: 0.85rem; font-weight: 550; color: #37352f;
  border-radius: 6px; background: var(--grammar-title-bg);
  font-family: 'MiSans Normal', sans-serif;
}
.grammar-summary-body { font-size: 0.82rem; line-height: 1.65; color: var(--color-text-secondary); }
.article-attribution { font-size: 0.85rem; color: #999; margin: 0 0 4px 140px; font-style: italic; }
.article-title { font-size: 1.6rem; font-weight: 700; margin-bottom: 8px; font-family: 'Merriweather', Georgia, serif; display: flex; align-items: center; }
.title-text-wrap { flex: 1; min-width: 0; }

.title-lesson { color: #999; font-weight: 400; }
.edit-icon { width: 16px; height: 16px; margin-left: 10px; cursor: pointer; opacity: 0.5; transition: opacity 0.2s; flex-shrink: 0; }
.edit-icon:hover { opacity: 0.75; }
.title-tag { display: inline-block; vertical-align: middle; position: relative; top: -2px; width: 20px; height: 20px; line-height: 20px; text-align: center; font-size: 0.55rem; color: #fff; font-weight: 600; background: #f0a030; border-radius: 50%; margin: 0 4px; font-family: inherit; }
.article-notes { margin-bottom: 24px; }
.note-item { margin-bottom: 8px; font-size: 0.85rem; line-height: 1.7; }
.note-index { font-size: 0.85rem; font-weight: 550; color: #aaa; margin-right: 6px; }
.note-label { display: inline-block; padding: 2px 8px; font-size: 0.85rem; font-weight: 550; color: #37352f; border-radius: 6px; margin-right: 8px; }
/* 莫兰迪色系轮换 */
.note-item:nth-child(5n+1) .note-label { background: #ede8e3; }
.note-item:nth-child(5n+2) .note-label { background: #e3e8ed; }
.note-item:nth-child(5n+3) .note-label { background: #e8ede3; }
.note-item:nth-child(5n+4) .note-label { background: #ede3e8; }
.note-item:nth-child(5n+5) .note-label { background: #e8e3ed; }
.note-body { color: #666; }
.section-title { font-size: 1.15rem; font-weight: 600; margin-bottom: 20px; padding-top: 28px; }
.paragraph-wrapper { & + & { margin-top: 12px; } }
.paragraph { font-size: 1.15rem; line-height: 2; text-indent: 2em; font-family: 'Merriweather', Georgia, serif; }
// 句子行内：去掉方块感，只保留轻微的点击反馈
.sentence-inline {

}

// 聚光灯遮罩：覆盖全屏的半透明黑底
.spotlight-overlay {
  position: fixed; inset: 0; z-index: 10;
  background: rgba(0, 0, 0, 0.35);
}

// 被聚光句子：提升 z-index + 白色半透明背景
.sentence-inline.spotlight {
  position: relative; z-index: 11;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
  padding: 2px 6px;
  margin: 0 -6px;
}

// 笔记面板：浅绿底色 200px 高
.sentence-panel {
  display: block; margin: 6px 0; border-radius: 8px; padding: 12px 16px;
  background: #f2f7f2; min-height: 200px;
  position: relative; z-index: 11;
}
.panel-note-table { width: 100%; border-collapse: collapse; }
.panel-note-item { font-size: 0.85rem; line-height: 1.7; }
.panel-note-td { padding: 4px 8px 4px 0; vertical-align: baseline; }
.panel-note-td:first-child { width: 1%; white-space: nowrap; }
.panel-note-item + .panel-note-item .panel-note-td { border-top: 1px solid #e2e8e0; }
.panel-note-snippet { display: inline-block; padding: 1px 6px; flex-shrink: 0; font-size: 0.85rem; font-weight: 550; color: #37352f; border-radius: 6px; font-family: 'MiSans Normal', sans-serif; }
/* panelNotes 莫兰迪色轮换 */
.panel-note-item:nth-child(5n+1) .panel-note-snippet { background: #ede8e3; }
.panel-note-item:nth-child(5n+2) .panel-note-snippet { background: #e3e8ed; }
.panel-note-item:nth-child(5n+3) .panel-note-snippet { background: #e8ede3; }
.panel-note-item:nth-child(5n+4) .panel-note-snippet { background: #ede3e8; }
.panel-note-item:nth-child(5n+5) .panel-note-snippet { background: #e8e3ed; }
.panel-note-desc { color: #666; font-family: 'LXGW WenKai', 'PingFang SC', 'Microsoft YaHei', serif; }

// 语法标记：从句引导词（斜体加粗暗色）/ 谓语（橘红）
.clause-mark { font-style: italic; font-weight: 600; color: #3d3d3d; }
.predicate-mark { color: #e0552a; }
.structure-mark {
  text-decoration: underline; text-decoration-color: var(--grammar-underline-color);
  text-decoration-thickness: 1.5px; text-underline-offset: 8px;
}

// 句子横批：使用 CSS ruby 在词下方显示灰色小字
.noted-ruby {
  ruby-position: under; ruby-align: center;
  rt { font-size: 0.65rem; color: #555; padding-top: 1px; font-family: 'LXGW WenKai', 'PingFang SC', 'Microsoft YaHei', serif; }
}

.vocab-list { display: flex; flex-direction: column; }
.vocab-item {
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px; padding: 6px 0;
  border-bottom: 1px solid rgba(55, 53, 47, 0.08); cursor: pointer; user-select: none;

  &:last-child { border-bottom: none; }
}
.vocab-item-group-end { border-bottom: 1px solid rgba(55, 53, 47, 0.08); }
.vocab-phonetic { font-size: 0.75rem; color: #999; font-family: 'Noto Sans', sans-serif; flex-shrink: 0; }
.vocab-word { font-weight: 400; font-size: 0.9rem; color: var(--color-text); font-family: 'MiSans Normal', sans-serif; }
.vocab-pos { font-size: 0.75rem; color: #aaa; flex-shrink: 0; font-family: 'MiSans Latin', 'LXGW WenKai', 'PingFang SC', serif; }
.vocab-meaning { font-size: 0.82rem; color: var(--color-text-secondary); font-family: 'MiSans Latin', 'LXGW WenKai', 'PingFang SC', serif; }

.panel-enter-active, .panel-leave-active { transition: all 0.25s ease; }
.panel-enter-from, .panel-leave-to { opacity: 0; transform: translateY(-6px); }
.translation { font-size: 1rem; color: var(--color-text-secondary); font-family: inherit; }
.nav-buttons {
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 0 16px; margin-bottom: 20px;
  border-bottom: 1px solid rgba(55, 53, 47, 0.08);
}
.nav-btn {
  padding: 5px 16px; border: 1px solid rgba(55, 53, 47, 0.08);
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

// 右键菜单
.cm-overlay { position: fixed; inset: 0; z-index: 999; }
.cm-menu { position: fixed; z-index: 1000; background: #fff; border-radius: 6px; border: 0.9px solid #f0eee9; padding: 8px 6px; min-width: 140px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); }
.cm-item { display: flex; align-items: center; padding: 4px 8px; margin: 2px 4px; font-size: 0.75rem; cursor: pointer; color: rgba(55,53,47,0.85); user-select: none; border-radius: 6px; }
.cm-icon { margin-right: 6px; font-size: 14px; }
.cm-icon-svg { width: 16px; height: 16px; margin-right: 6px; opacity: 0.6; }
.cm-icon-faded { opacity: 0.5; transform: scale(0.75); transform-origin: center; }
.cm-item:hover { background: rgba(55,53,47,0.08); }
.cm-item:hover .cm-icon-svg { opacity: 0.9; }

// 句子横批输入框
.ci-overlay { position: fixed; inset: 0; z-index: 2000; }
.ci-dialog { position: fixed; z-index: 2001; background: #fff; border-radius: 8px; border: 0.9px solid #f0eee9; padding: 3px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); }
.ci-wrap { display: flex; align-items: center; }
.ci-grown .ci-wrap { align-items: flex-end; }
.ci-input { width: 220px; border: none; padding: 4px 8px; margin: 2px 4px; font-size: 0.82rem; outline: none; color: var(--color-text); font-family: inherit; background: transparent; resize: none; overflow: hidden; line-height: 1.4; }
.ci-submit { display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; cursor: pointer; color: rgba(55,53,47,0.25); font-size: 16px; flex-shrink: 0; margin: 0 4px; }
.ci-submit.active { color: #3d76d5; }
.ci-submit.active:hover { color: #3568c0; }

</style>
