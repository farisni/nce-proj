<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { articleMetas } from '../mock/readData'

const props = defineProps<{ activeLevel: 'NCE2' | 'NCE3' | 'NCE4' }>()
const router = useRouter()

const filteredArticles = computed(() =>
  articleMetas.filter(a => a.level === props.activeLevel)
)

function goArticle(id: string) {
  router.push({ name: 'article', params: { id } })
}
</script>

<template>
  <div class="card-area">
    <div v-if="filteredArticles.length === 0" class="empty-tip">暂无文章</div>
    <div
      v-for="item in filteredArticles" :key="item.id"
      class="article-card" @click="goArticle(item.id)"
    >
      <h3 class="card-title">
        <span class="lesson-line">L{{ item.lesson }}<sup v-if="item.tag" class="card-tag">{{ item.tag }}</sup></span>
        {{ item.title }}
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-area { padding: 48px 40px; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; align-content: start; }
.article-card { background: #f2f7f2; box-shadow: 0 1px 4px rgba(0,0,0,0.06); border-radius: var(--radius); padding: 32px 28px; cursor: pointer; transition: box-shadow 0.2s; &:hover { box-shadow: 0 2px 12px rgba(0,0,0,0.08); } }
.card-title { font-size: 1.25rem; font-weight: 600; color: var(--color-text); line-height: 1.6; }
.lesson-line { display: block; margin-bottom: 6px; }
.card-tag {
  font-size: 0.55rem; color: #fff; font-weight: 600;
  background: #e6a23c; border-radius: 50%; width: 16px; height: 16px;
  display: inline-flex; align-items: center; justify-content: center; padding: 0;
  position: relative; top: -4px; margin-left: 2px;
}
.empty-tip { grid-column: 1 / -1; text-align: center; color: var(--color-text-secondary); padding: 80px 0; font-size: 0.95rem; }
</style>
