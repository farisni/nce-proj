<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { articleMetas } from './mock/readData'

const router = useRouter()
const route = useRoute()

const activeLevel = ref<'NCE2' | 'NCE3' | 'NCE4'>('NCE4')
const searchText = ref('')
const levels = ['NCE2', 'NCE3', 'NCE4'] as const

function doSearch() {
  if (route.name !== 'home') {
    router.push({ name: 'home' })
  }
}

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
      <div class="sidebar-search">
        <el-input v-model="searchText" placeholder="搜索文章..."  clearable :prefix-icon="Search" @keyup.enter="doSearch" />
      </div>
      <nav class="sidebar-nav">
        <div
          v-for="lv in levels" :key="lv"
          class="nav-item" :class="[lv.toLowerCase(), { active: activeLevel === lv }]"
          @click="navToLevel(lv)"
        >{{ lv }}</div>
      </nav>
    </aside>
    <main class="app-main">
      <router-view :activeLevel="activeLevel" :searchText="searchText" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-layout { display: flex; min-height: 100vh; }
.sidebar { width: 200px; flex-shrink: 0; background: #fff; border-right: 1px solid var(--color-border); padding: 14px 0; }
.sidebar-search { padding: 0 14px 8px; }
.sidebar-search :deep(.el-input__wrapper) { box-shadow: none !important; border: 1px solid #e0ddd5; border-radius: 20px; }
.sidebar-search :deep(.el-input__wrapper:hover) { border-color: #c5c0b5; }
.sidebar-search :deep(.el-input.is-focus .el-input__wrapper) { box-shadow: none !important; border-color: #c5c0b5; background: #f7f6f3; }
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
.nce2:hover { color: #d9534f; }
.nce3:hover { color: #f0ad4e; }
.nce4:hover { color: #428bca; }
.app-main { flex: 1; min-width: 0; }
</style>

<style lang="scss">
.sidebar-search .el-input.is-focus .el-input__wrapper {
  background: #f7f6f3 !important;
}
</style>
