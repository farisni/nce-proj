<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { articleMetas } from '../mock/readData'
import tudingIcon from '../asserts/icon/tuding.svg'

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
        <img :src="tudingIcon" class="tuding-icon" alt="" />
      <h3 class="card-title">
        <span class="lesson-line">
          Lesson {{ item.lesson
          }}<span v-if="item.tag" class="card-tag">{{ item.tag }}</span>
        </span>
        <span class="title-text">{{ item.title }}</span>
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-area {
  padding: 48px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  align-content: start;
  background-color: var(--color-bg);
  background-image: radial-gradient(circle, #d8d0c0 1px, transparent 1px);
  background-size: 24px 24px;
  min-height: 100vh;
}

.article-card {
  border: 1px solid #ece4d5;  position: relative;
  background: #f2f7f2;
  border-radius: 3px;
  padding: 32px 28px;
  cursor: pointer;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.06), 2px 4px 8px rgba(0,0,0,0.12);
  transition: box-shadow 0.2s;

  &:hover { box-shadow: 2px 4px 12px rgba(0,0,0,0.12), 3px 6px 16px rgba(0,0,0,0.06); }

  // 右下角卷起
  &::after {
    content: '';
    position: absolute;
    bottom: 0; right: 0;
    width: 0; height: 0;
    border-style: solid;
    border-width: 0 0 32px 32px;
    border-color: transparent transparent #f0ebe0 transparent;
    border-radius: 0 0 6px 0;
    box-shadow: -2px 3px 6px rgba(0,0,0,0.12);
  }
}

.card-title { font-size: 1.25rem; font-weight: 600; color: var(--color-text); line-height: 1.6; }
.lesson-line { display: block; margin-bottom: 6px; color: #666; font-weight: 500; }
.title-text { font-size: 1.4rem; }
.tuding-icon {
  position: absolute; top: -10px; left: 10px;
  width: 28px; height: 28px;
  filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.12));
  pointer-events: none;
}
.card-tag {
  display: inline-block; position: relative; top: -5px;
  width: 18px; height: 18px; line-height: 18px; text-align: center;
  font-size: 0.55rem; color: #fff; font-weight: 600;
  background: #f0a030; border-radius: 50%;
  margin-left: 4px;
}
.empty-tip { grid-column: 1 / -1; text-align: center; color: var(--color-text-secondary); padding: 80px 0; font-size: 0.95rem; }
</style>
