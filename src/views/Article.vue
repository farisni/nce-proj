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

import { ref, computed } from 'vue' 
import { articles } from '../mock/readData'
import { useRoute } from 'vue-router'

const route = useRoute()
const article = computed(() => articles[route.params.id as string])
import yumaoIcon from '../asserts/icon/yumao.svg'
import editIcon from '../asserts/icon/edit.svg'
import Heatmap from '../components/Heatmap.vue'

// 当前文章元数据：从 article.value 直接读取（已合并 ArticleMeta 字段）
const currentMeta = computed(() => article.value ?? null)
// 同 level 下的上一篇/下一篇文章，用于导航按钮
const neighbors = computed(() => {
  if (!currentMeta.value) return { prev: null, next: null }
  const sameLevel = Object.values(articles).filter(a => a.level === currentMeta.value!.level)
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
  noteText?: string   // 句子横批 → ruby 下方小字
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
  notes: { phrase: string; note: string }[],
): Segment[] {
  // 无标注数据 → 整句作为一个 Segment
  if (!predicates.length && !clauseIntroducers.length && !notes.length) return [{ text: sentence }]

  // Span：字符级标记区间，三色可叠加
  interface Span { start: number; end: number; predicate: boolean; clause: boolean; noteText: string }
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
      spans.push({ start: m.index, end: m.index + pw.length, predicate: true, clause: false, noteText: '' })
  }

  // 步骤 2：从句引导词 → 要求词边界（前后为空格或标点）
  for (const ci of clauseIntroducers) {
    const lc = ci.toLowerCase(); let idx = lower.indexOf(lc)
    while (idx !== -1) {
      const bo = idx === 0 || /\s|[—,'"(\[{]/.test(sentence[idx - 1])
      const ao = idx + ci.length === sentence.length || /\s|[—,.'"!?;:)\]}。，！？；：、]/.test(sentence[idx + ci.length])
      if (bo && ao) spans.push({ start: idx, end: idx + ci.length, predicate: false, clause: true, noteText: '' })
      idx = lower.indexOf(lc, idx + 1)
    }
  }

  // 步骤 3：句子横批 → 大小写不敏感子串匹配（不需要词边界）
  for (const note of notes) {
    const ln = note.phrase.toLowerCase(); let idx = lower.indexOf(ln)
    while (idx !== -1) {
      spans.push({ start: idx, end: idx + ln.length, predicate: false, clause: false, noteText: note.note })
      idx = lower.indexOf(ln, idx + 1)
    }
  }
  if (!spans.length) return [{ text: sentence }]

  // 步骤 4：按字符位元标记 → 合并相邻同类 → 合并 noteText 相同的 Segment
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

  // 步骤 5：相邻且 noteText 相同的 Segment 合并（避免重复显示多次笔记）
  const merged: Segment[] = []
  for (const seg of segs) {
    const last = merged[merged.length - 1]
    if (last && seg.noteText && seg.noteText === last.noteText) last.text += seg.text
    else merged.push({ ...seg })
  }
  return merged
}

// 核心渲染数据：段落 → 句子 → { segments, key }
// key 用于聚光灯 toggle（句首 40 字符 + 索引）
const originalSentences = computed(() =>
  article.value.original.paragraphs.map((para) =>
    para.map((sd, sIdx) => ({
      segments: markWords(sd.text, sd.predicates, sd.clauseIntroducers, sd.notes ?? []),
      key: sd.text.slice(0, 40) + '-' + sIdx,
      panelNotes: sd.panelNotes ?? [],
    }))
  ),
)

// 当前展开笔记面板的句子 key（空 = 全部收起）
const activeKey = ref('')
// 已切换为音节显示的词汇（单击词汇表单词切换）
const vocabSyllableKeys = ref(new Set<string>())

// 点击羽毛图标 → 展开/收起笔记面板（再次点击同一句关闭）
function togglePanel(key: string) { activeKey.value = activeKey.value === key ? '' : key }

// 单击词汇表单词 → 切换原形/音节拆分显示
function toggleVocabSyllable(word: string) {
  if (vocabSyllableKeys.value.has(word)) vocabSyllableKeys.value.delete(word)
  else vocabSyllableKeys.value.add(word)
  vocabSyllableKeys.value = new Set(vocabSyllableKeys.value)
}

// 返回 Segment 的 CSS class 字符串（clause-mark / predicate-mark 可叠加）
function segClass(seg: Segment): string {
  const c: string[] = []; if (seg.clause) c.push('clause-mark'); if (seg.predicate) c.push('predicate-mark')
  return c.join(' ')
}
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
       └─ article-section 2: 全文翻译
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
            <!-- 段落 → 句子渲染：span.sentence-inline（高亮 + 羽毛图标）+ transition 笔记面板 -->
            <div v-for="(sentences, pIdx) in originalSentences" :key="pIdx" class="paragraph-wrapper">
              <div class="paragraph">
                <template v-for="(s, sIdx) in sentences" :key="s.key">
                  <!-- 单句：非面板展开时用 ruby 显示句子横批，面板展开时收起笔记 -->
                  <span class="sentence-inline" :class="{ spotlight: activeKey === s.key }"
                    ><template v-for="(seg, gIdx) in s.segments" :key="gIdx">
                      <ruby v-if="seg.noteText && activeKey !== s.key" class="noted-ruby">
                        <span :class="segClass(seg)">{{ seg.text }}</span><rt>{{ seg.noteText }}</rt>
                      </ruby>
                      <span v-else-if="segClass(seg)" :class="segClass(seg)">{{ seg.text }}</span>
                      <template v-else>{{ seg.text }}</template>
                    </template><img :src="yumaoIcon" class="sentence-icon" @click.stop="togglePanel(s.key)"
                  /></span>
                  <!-- 笔记面板：展开时显示 200px 浅绿底 -->
                  <transition name="panel">
                    <div v-if="activeKey === s.key" class="sentence-panel">
                      <div v-for="(pn, pni) in s.panelNotes" :key="'pn'+pni" class="panel-note-item">
                        <span class="panel-note-snippet">{{ pn.snippet }}</span>
                        <span class="panel-note-desc">{{ pn.desc }}</span>
                      </div>
                    </div>
                  </transition>
                </template>
              </div>
            </div>
          </div>
          <div class="section-divider"></div>
          <!-- 右侧词汇侧栏：单击切换音节拆分，el-tooltip 显示音标 -->
          <div class="section-side">
            <div class="vocab-title">课文单词</div>
            <div class="vocab-list">
              <div
                v-for="item in article.vocabulary"
                :key="item.word"
                class="vocab-item"
                @click="toggleVocabSyllable(item.word)"
              >
                <el-tooltip :content="item.phonetic" effect="light" placement="top" :show-after="300" popper-class="phonetic-tooltip"><span class="vocab-word">{{ vocabSyllableKeys.has(item.word) && item.syllables ? item.syllables : item.word }}</span></el-tooltip>
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
// 页面背景：圆点纹理（手账风格）
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
.section-side { flex: 3; min-width: 0; padding: 0 0 16px; }
.vocab-title { font-size: 1rem; font-weight: 600; margin-bottom: 20px; padding-top: 76px; font-family: inherit; }
.article-title { font-size: 1.6rem; font-weight: 700; margin-bottom: 16px; font-family: 'Merriweather', Georgia, serif; display: flex; align-items: center; }
.title-text-wrap { flex: 1; min-width: 0; }

.title-lesson { color: #999; font-weight: 400; }
.edit-icon { width: 18px; height: 18px; margin-left: 10px; cursor: pointer; opacity: 0.35; transition: opacity 0.2s; flex-shrink: 0; }
.edit-icon:hover { opacity: 0.75; }
.title-tag { display: inline-block; vertical-align: middle; position: relative; top: -2px; width: 20px; height: 20px; line-height: 20px; text-align: center; font-size: 0.55rem; color: #fff; font-weight: 600; background: #f0a030; border-radius: 50%; margin: 0 4px; font-family: inherit; }
.section-title { font-size: 1.15rem; font-weight: 600; margin-bottom: 20px; padding-top: 28px; }
.paragraph-wrapper { & + & { margin-top: 12px; } }
.paragraph { font-size: 1.15rem; line-height: 2; text-indent: 2em; font-family: 'Merriweather', Georgia, serif; }
// 句子行内：羽毛图标默认半透明，聚光灯模式下全亮
.sentence-inline {
  .sentence-icon {
    width: 18px; height: 18px; margin-left: 6px; margin-right: 4px;
    vertical-align: middle; cursor: pointer; opacity: 0.4; transition: opacity 0.2s;
    &:hover { opacity: 0.8; }
    .spotlight & { opacity: 1; filter: drop-shadow(0 0 3px rgba(220,180,80,0.6)); }
  }
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
  border-radius: 4px;
  padding: 2px 6px;
  margin: 0 -6px;
}

// 笔记面板：浅绿底色 200px 高
.sentence-panel {
  display: block; margin: 6px 0; border-radius: 8px; padding: 12px 16px;
  background: #f2f7f2; min-height: 200px;
  position: relative; z-index: 11;
}
.panel-note-item { display: flex; gap: 8px; padding: 4px 0; font-size: 0.85rem; }
.panel-note-item + .panel-note-item { border-top: 1px solid #e2e8e0; }
.panel-note-snippet { font-weight: 600; color: #3d3d3d; min-width: 80px; font-family: 'MiSans Latin', 'LXGW WenKai', 'PingFang SC', serif; }
.panel-note-desc { color: #666; }

// 语法标记：从句引导词（斜体加粗暗色）/ 谓语（橘红）
.clause-mark { font-style: italic; font-weight: 600; color: #3d3d3d; }
.predicate-mark { color: #e0552a; }

// 句子横批：使用 CSS ruby 在词下方显示灰色小字
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
.vocab-word { font-weight: 400; font-size: 0.9rem; color: var(--color-text); font-family: 'MiSans Latin', 'LXGW WenKai', 'PingFang SC', serif; }
.vocab-pos { font-size: 0.75rem; color: #aaa; flex-shrink: 0; font-family: 'MiSans Latin', 'LXGW WenKai', 'PingFang SC', serif; }
.vocab-meaning { font-size: 0.82rem; color: var(--color-text-secondary); font-family: 'MiSans Latin', 'LXGW WenKai', 'PingFang SC', serif; }

.panel-enter-active, .panel-leave-active { transition: all 0.25s ease; }
.panel-enter-from, .panel-leave-to { opacity: 0; transform: translateY(-6px); }
.translation { font-size: 0.9rem; color: var(--color-text-secondary); font-family: inherit; }
.nav-buttons {
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 0 16px; margin-bottom: 20px;
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
