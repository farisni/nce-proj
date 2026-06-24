<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { articles } from '../mock/readData'
import tudingIcon from '../asserts/icon/tuding.svg'

const props = defineProps<{ activeLevel: 'NCE2' | 'NCE3' | 'NCE4'; searchText?: string }>()
const router = useRouter()

const filteredArticles = computed(() => {
  const q = props.searchText?.trim().toLowerCase()
  if (q) {
    return Object.values(articles).filter(a =>
      a.title.toLowerCase().includes(q) ||
      (a.titleCn && a.titleCn.includes(q))
    ).sort((a, b) => a.lesson - b.lesson)
  }
  return Object.values(articles).filter(a => a.level === props.activeLevel).sort((a, b) => a.lesson - b.lesson)
})

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
          <span v-if="item.keyArticle" class="key-dot"></span>Lesson {{ item.lesson
          }}<span v-if="item.tag" class="card-tag">{{ item.tag }}</span>
        </span>
        <span class="title-text">{{ item.title }}</span>
        <span v-if="item.titleCn" class="title-cn">{{ item.titleCn }}</span>
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-area {
  padding: 48px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 28px;
  align-content: start;
  background-color: var(--color-bg);
  background-image: radial-gradient(circle, #d8d0c0 1px, transparent 1px);
  background-size: 24px 24px;
  min-height: 100vh;
}

.article-card {
  position: relative;
  background: #ffc;
  
  border-radius: 3px;
  padding: 20px 18px;
  cursor: pointer;
  box-shadow: 3px 3px 6px rgba(33,33,33,.35);
  transform: rotate(-4deg);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.08);
    box-shadow: 8px 8px 12px rgba(33,33,33,.5);
    z-index: 5;
  }

  // 交替配色 + 角度
  &:nth-child(2n+1) {
    background: #cfc;
    transform: rotate(3.5deg);
    top: 4px;
  }

  &:nth-child(5n) {
    background: #ccf;
    transform: rotate(-6deg);
    top: -4px;
  }

  &:nth-child(3n) {
    background: #d4eafc;
    transform: rotate(1.5deg);
    top: -2px;
  }

  &:nth-child(7n) {
    background: #fde0e8;
    transform: rotate(-3.5deg);
    top: 2px;
  }

}

.card-title { font-size: 1.25rem; font-weight: 600; color: var(--color-text); line-height: 1.6; }
.lesson-line { display: block; margin-bottom: 4px; color: #1a1a1a; font-weight: 600; font-size: 1rem; font-family: 'Caveat', cursive; }
.key-dot { display: inline-block; width: 8px; height: 8px; background: #d94a4a; border-radius: 50%; margin-right: 6px; vertical-align: middle; position: relative; top: -1px; }
.title-text { font-size: 1.5rem; font-family: 'Caveat', cursive; }

.card-tag {
  display: inline-block; position: relative; top: -5px;
  width: 18px; height: 18px; line-height: 18px; text-align: center;
  font-size: 0.55rem; color: #fff; font-weight: 600;
  background: #f0a030; border-radius: 50%;
  margin-left: 4px;
}

.tuding-icon {
  position: absolute; top: -10px; left: 10px;
  width: 28px; height: 28px;
  filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.12));
  pointer-events: none;
}

.title-cn { display: block; font-size: 1.1rem; color: #888; font-weight: 400; font-family: 'Huiwen Mingchao', serif; margin-top: 2px; }

.empty-tip { grid-column: 1 / -1; text-align: center; color: var(--color-text-secondary); padding: 80px 0; font-size: 0.95rem; }
</style>
