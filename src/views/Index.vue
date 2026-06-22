<script setup lang="ts">
import { article } from '../mock/readData'
</script>

<template>
  <div class="reading-page">
    <div class="main-content">
      <!-- 英文原文 -->
      <div class="article-section">
        <div class="section-row">
          <div class="section-main">
            <h1 class="article-title">The Problem of Youth</h1>
            <p
              v-for="(p, idx) in article.original.paragraphs"
              :key="idx"
              class="paragraph"
            >{{ p }}</p>
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

.paragraph {
  font-size: 1.15rem;
  line-height: 2;
  margin-bottom: 20px;
  text-indent: 2em;

  &:last-child {
    margin-bottom: 0;
  }
}

.translation {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
</style>
