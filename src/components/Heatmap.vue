<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ data: number[][] }>()

function cellDate(row: number, col: number): string {
  const cols = props.data[0]?.length ?? 7
  const rows = props.data.length
  const daysBack = (rows - 1 - row) * cols + (cols - 1 - col) + 1
  const d = new Date()
  d.setDate(d.getDate() - daysBack)
  return `${d.getMonth() + 1}/${d.getDate()}`
}
</script>

<template>
  <span class="title-heatmap">
    <span v-for="(row, ri) in data" :key="ri" class="heatmap-row">
      <el-tooltip v-for="(val, ci) in row" :key="ci" :content="`${cellDate(ri, ci)} — 学习 ${val} 次`" effect="light" placement="top">
        <span class="heatmap-cell" :data-level="val"></span>
      </el-tooltip>
    </span>
  </span>
</template>

<style lang="scss" scoped>
.title-heatmap { display: inline-flex; flex-direction: column; gap: 2px; flex-shrink: 0; }
.heatmap-row { display: flex; gap: 2px; }
.heatmap-cell {
  width: 10px; height: 10px; border-radius: 2px;
  background: #ebedf0; cursor: pointer;
}
.heatmap-cell[data-level="1"] { background: #9be9a8; }
.heatmap-cell[data-level="2"] { background: #40c463; }
.heatmap-cell[data-level="3"] { background: #30a14e; }
.heatmap-cell[data-level="4"] { background: #216e39; }
</style>
