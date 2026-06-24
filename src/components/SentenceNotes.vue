<script setup lang="ts">
import { ref } from 'vue'
import dotsIcon from '../asserts/icon/dots.svg'

const props = defineProps<{
  sentenceKey: string
  panelNotes?: { title: string; body: string }[]
}>()

const emit = defineEmits<{
  toggle: [key: string]
}>()

const active = ref(false)

function toggle() {
  active.value = !active.value
  emit('toggle', props.sentenceKey)
}
</script>

<template>
  <img :src="dotsIcon" class="sentence-icon" alt="展开笔记" title="展开笔记" @click.stop="toggle" />
</template>

<style scoped>
.sentence-icon {
  width: 20px; height: 20px; margin-left: 3px; margin-right: 3px;
  vertical-align: middle; opacity: 0.5; cursor: pointer;
  transition: opacity 0.2s;
}
.sentence-icon:hover { opacity: 0.8; }
</style>
