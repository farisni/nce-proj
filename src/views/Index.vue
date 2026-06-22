<script setup lang="ts">
import { ref, computed } from 'vue'
import { article, type TextSegment } from '../mock/reading'

// ===== 状态 =====
const drawerVisible = ref(false)
const activeSentenceKey = ref('')

// ===== 句子拆分 =====
const sentencePattern = /([^.!?。！？]+[.!?。！？]+)/g

function splitSentences(paragraph: string): string[] {
  const matches = paragraph.match(sentencePattern)
  if (!matches || matches.length === 0) return [paragraph]
  return matches.map(s => s.trim()).filter(Boolean)
}

// ===== 高亮逻辑 =====
function highlightWords(
  sentence: string,
  predicates: string[],
  clauseIntroducers: string[],
): TextSegment[] {
  interface Range {
    start: number
    end: number
    class: 'vocab' | 'predicate' | 'clause'
  }

  const ranges: Range[] = []
  const lower = sentence.toLowerCase()

  for (const pred of predicates) {
    const lp = pred.toLowerCase()
    let idx = lower.indexOf(lp)
    while (idx !== -1) {
      ranges.push({ start: idx, end: idx + pred.length, class: 'predicate' })
      idx = lower.indexOf(lp, idx + 1)
    }
  }

  for (const ci of clauseIntroducers) {
    const lc = ci.toLowerCase()
    let idx = lower.indexOf(lc)
    while (idx !== -1) {
      const beforeOk = idx === 0 || /\s|[—,'"(\[{]/.test(sentence[idx - 1])
      const afterOk = idx + ci.length === sentence.length || /\s|[—,.'"!?;:)\]}。，！？；：、]/.test(sentence[idx + ci.length])
      if (beforeOk && afterOk) {
        ranges.push({ start: idx, end: idx + ci.length, class: 'clause' })
      }
      idx = lower.indexOf(lc, idx + 1)
    }
  }

  for (const item of article.vocabulary) {
    const lw = item.word.toLowerCase()
    const escaped = lw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`(?<![a-zA-Z'-])${escaped}(?![a-zA-Z'-])`, 'gi')
    let match: RegExpExecArray | null
    while ((match = regex.exec(lower)) !== null) {
      const start = match.index
      const end = start + item.word.length
      if (!ranges.some(r => r.class !== 'vocab' && r.start < end && r.end > start)) {
        ranges.push({ start, end, class: 'vocab' })
      }
    }
  }

  ranges.sort((a, b) => a.start - b.start)

  if (ranges.length === 0) return [{ text: sentence }]

  const segments: TextSegment[] = []
  let pos = 0

  for (let i = 0; i < ranges.length; i++) {
    const r = ranges[i]
    if (r.start < pos) {
      if (r.end > pos) {
        segments.push({ text: sentence.slice(pos, r.end), class: r.class })
        pos = r.end
      }
      continue
    }
    if (r.start > pos) {
      segments.push({ text: sentence.slice(pos, r.start) })
    }
    segments.push({ text: sentence.slice(r.start, r.end), class: r.class })
    pos = r.end
  }

  if (pos < sentence.length) {
    segments.push({ text: sentence.slice(pos) })
  }

  return segments
}

// ===== 计算属性：拆分后的段落数据 =====
const originalParagraphs = computed(() =>
  article.original.paragraphs.map((paragraph, pIdx) => {
    const sentences = splitSentences(paragraph)
    return sentences.map((sentence, sIdx) => {
      const meta = article.original.predicateParagraph[pIdx]?.[sIdx]
      return {
        sentence,
        segments: highlightWords(sentence, meta?.predicates ?? [], meta?.clauseIntroducers ?? []),
        predicates: meta?.predicates ?? [],
        clauseIntroducers: meta?.clauseIntroducers ?? [],
        key: `${pIdx}-${sIdx}`,
      }
    })
  }),
)

// ===== 切换句子面板 =====
function toggleSentence(key: string) {
  activeSentenceKey.value = activeSentenceKey.value === key ? '' : key
}
</script>

<template>
  <div class="reading-page">
    <div class="main-content">
      <!-- 英文原文区 -->
      <div class="article-section">
        <div class="section-row">
          <div class="section-main">
            <div class="section-header">
              <h1 class="article-title">The Problem of Youth</h1>
              <el-button
                type="primary"
                size="small"
                @click="drawerVisible = !drawerVisible"
              >
                {{ drawerVisible ? '收起词表' : '词表' }}
              </el-button>
            </div>

            <div class="paragraphs">
              <div
                v-for="(sentences, pIdx) in originalParagraphs"
                :key="pIdx"
                class="paragraph"
              >
                <div
                  v-for="item in sentences"
                  :key="item.key"
                  class="sentence-wrapper"
                  :class="{ active: activeSentenceKey === item.key }"
                >
                  <div class="sentence-line" @click="toggleSentence(item.key)">
                    <span
                      v-for="(seg, sIdx) in item.segments"
                      :key="sIdx"
                      :class="['segment', seg.class]"
                    >{{ seg.text }}</span>
                  </div>

                  <transition name="panel">
                    <div v-if="activeSentenceKey === item.key" class="sentence-panel">
                      <div v-if="item.predicates.length" class="panel-row">
                        <span class="panel-label">谓语：</span>
                        <el-tag
                          v-for="(pred, pIdx2) in item.predicates"
                          :key="pIdx2"
                          size="small"
                          class="pred-tag"
                        >{{ pred }}</el-tag>
                      </div>
                      <div v-if="item.clauseIntroducers.length" class="panel-row">
                        <span class="panel-label">从句引导词：</span>
                        <el-tag
                          v-for="(ci, cIdx) in item.clauseIntroducers"
                          :key="cIdx"
                          size="small"
                          type="warning"
                        >{{ ci }}</el-tag>
                      </div>
                      <div v-if="!item.predicates.length && !item.clauseIntroducers.length" class="panel-row">
                        <span class="panel-empty">暂无标注</span>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>

          <div class="section-divider"></div>
          <div class="section-side"></div>
        </div>
      </div>

      <!-- 翻译区 -->
      <div class="article-section translation-section">
        <div class="section-row">
          <div class="section-main">
            <h2 class="section-title">全文翻译</h2>
            <div class="paragraphs">
              <p
                v-for="(t, idx) in article.translation.paragraphs"
                :key="idx"
                class="translation-paragraph"
              >{{ t }}</p>
            </div>
          </div>

          <div class="section-divider"></div>
          <div class="section-side"></div>
        </div>
      </div>
    </div>

    <!-- 词汇抽屉 -->
    <el-drawer
      v-model="drawerVisible"
      title="Words"
      direction="rtl"
      size="320px"
      :modal="false"
      :lock-scroll="false"
    >
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
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
.reading-page {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

// ===== 文章区块 =====
.article-section {
  background: var(--color-panel-bg);
  border-radius: var(--radius);
  
  margin-bottom: 32px;
}

.section-row {
  display: flex;
  align-items: stretch;
}

.section-main {
  flex: 7;
  padding: 32px 36px;
  min-width: 0;
}

.section-divider {
  width: 1px;
  background: var(--color-border);
  flex-shrink: 0;
}

.section-side {
  flex: 3;
  min-width: 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.article-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
}

.section-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  
}

// ===== 段落 & 句子 =====
.paragraph {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.sentence-wrapper {
  border-radius: 6px;
  transition: background 0.2s;

  &.active {
    background: var(--color-sentence-active);
  }
}

.sentence-line {
  padding: 6px 8px;
  cursor: pointer;
  font-size: 1.05rem;
  line-height: 2;
  border-radius: 6px;
  transition: background 0.15s;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
}

// ===== 高亮片段 =====
.segment {
  &.vocab {
    color: var(--color-vocab);
    font-weight: 600;
    border-bottom: 2px dashed var(--color-vocab);
    cursor: pointer;
  }

  &.predicate {
    color: var(--color-predicate);
    font-weight: 600;
    border-bottom: 2px solid var(--color-predicate);
  }

  &.clause {
    color: var(--color-clause);
    font-style: italic;
    font-weight: 500;
  }
}

// ===== 展开面板 =====
.sentence-panel {
  padding: 12px 16px;
  margin: 0 8px 4px;
  background: #faf9f7;
  border-radius: 6px;
  border: none;
}

.panel-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
}

.panel-label {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  white-space: nowrap;
}

.panel-empty {
  font-size: 0.85rem;
  color: #aaa;
}

.pred-tag {
  margin: 0 !important;
}

// ===== 过渡动画 =====
.panel-enter-active,
.panel-leave-active {
  transition: all 0.25s ease;
}
.panel-enter-from,
.panel-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

// ===== 翻译区 =====
.translation-section {
  .translation-paragraph {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 2;
    text-indent: 2em;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

// ===== 词汇抽屉 =====
.vocab-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.vocab-item {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 10px 0;
  

  &:last-child {
    border-bottom: none;
  }
}

.vocab-word {
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-text);
  min-width: 100px;
}

.vocab-pos {
  font-size: 0.8rem;
  color: #999;
  min-width: 50px;
}

.vocab-meaning {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
</style>
