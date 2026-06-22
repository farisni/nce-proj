<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Index from './views/Index.vue'

let scrollTimer: ReturnType<typeof setTimeout> | null = null

function showScrollBarWhileScrolling() {
  document.documentElement.classList.add('is-scrolling')
  if (scrollTimer) clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => {
    document.documentElement.classList.remove('is-scrolling')
  }, 700)
}

onMounted(() => {
  window.addEventListener('scroll', showScrollBarWhileScrolling, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', showScrollBarWhileScrolling)
  if (scrollTimer) clearTimeout(scrollTimer)
})
</script>

<template>
  <Index />
</template>
