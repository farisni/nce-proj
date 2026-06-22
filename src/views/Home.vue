<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { articleMetas, type ArticleMeta } from '../mock/readData'

const router = useRouter()
const activeLevel = ref<'NCE2' | 'NCE3' | 'NCE4'>('NCE4')

const levels = ['NCE2', 'NCE3', 'NCE4'] as const

const filteredArticles = computed(() =>
  articleMetas.filter(a => a.level === activeLevel.value)
)

function goArticle(id: string) {
  router.push({ name: 'article', params: { id } })
}
</script>

<template>
  <div class="home-page">
    <!-- 左侧导航 -->
    <aside class="sidebar">
      <div class="sidebar-title">新概念英语</div>
      <nav class="sidebar-nav">
        <div
          v-for="lv in levels"
          :key="lv"
          class="nav-item"
          :class="{ active: activeLevel === lv }"
          @click="activeLevel = lv"
        >{{ lv }}</div>
      </nav>
    </aside>

    <!-- 右侧卡片区 -->
    <main class="card-area">
      <div v-if="filteredArticles.length === 0" class="empty-tip">暂无文章</div>
      <div
        v-for="item in filteredArticles"
        :key="item.id"
        class="article-card"
        @click="goArticle(item.id)"
      >
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-excerpt">{{ item.excerpt }}</p>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 200px;
  flex-shrink: 0;
  background: var(--color-panel-bg);
  border-right: 1px solid var(--color-border);
  padding: 48px 0;
}

.sidebar-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  padding: 0 24px 24px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
}

.nav-item {
  padding: 10px 24px;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.15s;
  border-left: 3px solid transparent;

  &:hover {
    background: var(--color-bg);
    color: var(--color-text);
  }

  &.active {
    color: var(--color-text);
    font-weight: 600;
    border-left-color: var(--color-accent);
    background: var(--color-bg);
  }
}

.card-area {
  flex: 1;
  padding: 48px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  align-content: start;
}

.article-card {
  background: var(--color-panel-bg);
  border-radius: var(--radius);
  padding: 24px;
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  }
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 10px;
}

.card-excerpt {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.empty-tip {
  grid-column: 1 / -1;
  text-align: center;
  color: var(--color-text-secondary);
  padding: 80px 0;
  font-size: 0.95rem;
}
</style>
