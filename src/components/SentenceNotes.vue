<script setup lang="ts">
import { ref } from 'vue'
import { More } from '@element-plus/icons-vue'

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
  <el-icon class="sentence-icon" @click.stop="toggle"><More /></el-icon>
</template>

<style scoped>
.sentence-icon {
  margin-left: 4px; margin-right: 2px;
  vertical-align: middle; opacity: 0.45; cursor: pointer;
  font-size: 16px; transition: opacity 0.2s;
}
.sentence-icon:hover { opacity: 0.75; }
</style>
