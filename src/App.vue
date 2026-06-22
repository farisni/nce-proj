<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { articleMetas } from './mock/readData'

const router = useRouter()
const route = useRoute()

const activeLevel = ref<'NCE2' | 'NCE3' | 'NCE4'>('NCE4')
const levels = ['NCE2', 'NCE3', 'NCE4'] as const

function navToLevel(lv: typeof activeLevel.value) {
  activeLevel.value = lv
  if (route.name !== 'home') {
    router.push({ name: 'home' })
  }
}

let scrollTimer: ReturnType<typeof setTimeout> | null = null
function showScrollBarWhileScrolling() {
  document.documentElement.classList.add('is-scrolling')
  if (scrollTimer) clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => document.documentElement.classList.remove('is-scrolling'), 700)
}
onMounted(() => window.addEventListener('scroll', showScrollBarWhileScrolling, { passive: true }))
onUnmounted(() => { window.removeEventListener('scroll', showScrollBarWhileScrolling); if (scrollTimer) clearTimeout(scrollTimer) })
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar">
      <div class="sidebar-title" @click="router.push({ name: 'home' })">新概念英语</div>
      <nav class="sidebar-nav">
        <div
          v-for="lv in levels" :key="lv"
          class="nav-item" :class="[lv.toLowerCase(), { active: activeLevel === lv }]"
          @click="navToLevel(lv)"
        >{{ lv }}</div>
      </nav>
    </aside>
    <main class="app-main">
      <router-view :activeLevel="activeLevel" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-layout { display: flex; min-height: 100vh; }
.sidebar { width: 200px; flex-shrink: 0; background: var(--color-panel-bg); border-right: 1px solid var(--color-border); padding: 48px 0; }
.sidebar-title { font-size: 1.1rem; font-weight: 700; color: var(--color-text); padding: 0 24px 24px; cursor: pointer; }
.sidebar-nav { display: flex; flex-direction: column; }
.nav-item {
  padding: 10px 24px; font-size: 0.95rem; color: var(--color-text-secondary);
  cursor: pointer; transition: all 0.15s; border-left: 3px solid transparent;
  &:hover { background: var(--color-bg); color: var(--color-text); }
  &.active { color: var(--color-text); font-weight: 600; background: var(--color-bg); }
}
.nce2.active { border-left-color: #d9534f; }
.nce3.active { border-left-color: #f0ad4e; }
.nce4.active { border-left-color: #428bca; }
.app-main { flex: 1; min-width: 0; }
</style>
