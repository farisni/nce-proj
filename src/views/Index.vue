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

const originalSentences = computed(() =>
  article.original.paragraphs.map(p => splitSentences(p))
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
                <template v-for="(s, sIdx) in sentences" :key="sIdx">
                  <span class="sentence-inline"
                    >{{ s }}<img
                      :src="yumaoIcon"
                      class="sentence-icon"
                      @click.stop="togglePanel(`${pIdx}-${sIdx}`)"
                    /></span>
                  <transition name="panel">
                    <div
                      v-if="activeKey === `${pIdx}-${sIdx}`"
                      class="sentence-panel"
                    ></div>
                  </transition>
                </template>
              </div>
            </div>
          </div>
          <div class="section-divider"></div>
          <div class="section-side"></div>
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
