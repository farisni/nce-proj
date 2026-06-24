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
  <span class="sentence-icon-button" @click.stop="toggle">
    <img :src="dotsIcon" class="sentence-icon" alt="展开笔记" title="展开笔记" />
  </span>
</template>

<style scoped>
.sentence-icon-button {
  display: inline-flex; align-items: center; justify-content: center;
  width: 24px; height: 24px; margin-left: 6px; margin-right: 4px;
  border: none; vertical-align: middle; border-radius: 3px; background: transparent;
  cursor: pointer; transition: background-color 0.2s ease, opacity 0.2s ease;
}
.sentence-icon-button:hover {
  background: rgba(55, 53, 47, 0.06);
}
.sentence-icon {
  width: 17px; height: 17px; opacity: 0.6; transition: opacity 0.2s;
}
.sentence-icon:hover { opacity: 0.85; }
</style>
