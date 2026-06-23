<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { articles, articleMetas, type Article, type ArticleMeta } from '../mock/readData'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.id as string)
const exists = computed(() => !!articles[id.value])

const activeTab = ref('meta')

function cloneArticle(src: Article): Article {
  return JSON.parse(JSON.stringify(src))
}
function cloneMeta(src: ArticleMeta): ArticleMeta {
  return JSON.parse(JSON.stringify(src))
}

const editArticle = ref<Article | null>(null)
const editMeta = ref<ArticleMeta | null>(null)

watch(id, (newId) => {
  if (articles[newId]) {
    editArticle.value = cloneArticle(articles[newId])
    const m = articleMetas.find(a => a.id === newId)
    editMeta.value = m ? cloneMeta(m) : null
  } else {
    editArticle.value = null
    editMeta.value = null
  }
}, { immediate: true })

function addVocab() {
  editArticle.value?.vocabulary.push({ word: '', pos: '', meaning: '', phonetic: '', syllables: '' })
}
function removeVocab(idx: number) {
  editArticle.value?.vocabulary.splice(idx, 1)
}

function addOriginalParagraph() {
  editArticle.value?.original.paragraphs.push('')
  editArticle.value?.original.predicateParagraph.push([])
}
function removeOriginalParagraph(idx: number) {
  editArticle.value?.original.paragraphs.splice(idx, 1)
  editArticle.value?.original.predicateParagraph.splice(idx, 1)
}

function addTranslationParagraph() {
  editArticle.value?.translation.paragraphs.push('')
}
function removeTranslationParagraph(idx: number) {
  editArticle.value?.translation.paragraphs.splice(idx, 1)
}

function getPredicateJson(idx: number): string {
  if (!editArticle.value) return '[]'
  const pp = editArticle.value.original.predicateParagraph[idx]
  return pp ? JSON.stringify(pp, null, 2) : '[]'
}
function setPredicateJson(idx: number, val: string) {
  if (!editArticle.value) return
  try {
    editArticle.value.original.predicateParagraph[idx] = JSON.parse(val)
  } catch { /* ignore parse errors */ }
}

const showPredicateIdx = ref<string>('')
function togglePredicate(idx: number) {
  showPredicateIdx.value = showPredicateIdx.value === String(idx) ? '' : String(idx)
}

function save() {
  if (!editArticle.value || !editMeta.value) return
  articles[id.value] = cloneArticle(editArticle.value)
  const metaIdx = articleMetas.findIndex(m => m.id === id.value)
  if (metaIdx >= 0) {
    const m = cloneMeta(editMeta.value)
    Object.assign(articleMetas[metaIdx], m)
  }
  ElMessage.success('保存成功（刷新页面后丢失）')
}

function goBack() {
  if (window.history.length > 1) router.back()
  else router.push({ name: 'home' })
}
</script>

<template>
  <div class="edit-page" v-if="exists">
    <div class="edit-header">
      <el-page-header @back="goBack" />
      <div class="edit-title-row">
        <span class="header-title">编辑：{{ editMeta?.title || id }}</span>
        <el-button-group>
          <el-button @click="goBack">取消</el-button>
          <el-button type="primary" @click="save">保存</el-button>
        </el-button-group>
      </div>
    </div>

    <el-tabs v-model="activeTab" class="edit-tabs">
      <el-tab-pane label="元数据" name="meta">
        <div class="tab-content" v-if="editMeta">
          <el-form label-width="100px" label-position="left" size="default">
            <el-form-item label="ID"><el-input v-model="editMeta.id" /></el-form-item>
            <el-form-item label="英文标题"><el-input v-model="editMeta.title" /></el-form-item>
            <el-form-item label="中文标题"><el-input v-model="editMeta.titleCn" /></el-form-item>
            <el-row :gutter="16">
              <el-col :span="8">
                <el-form-item label="课号"><el-input-number v-model="editMeta.lesson" :min="1" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="标签 (Cx)">
                  <el-select v-model="editMeta.tag" clearable placeholder="可选">
                    <el-option v-for="n in 20" :key="n" :label="'C' + n" :value="'C' + n" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="册">
                  <el-select v-model="editMeta.level">
                    <el-option label="NCE2" value="NCE2" />
                    <el-option label="NCE3" value="NCE3" />
                    <el-option label="NCE4" value="NCE4" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="重点文章"><el-switch v-model="editMeta.keyArticle" /></el-form-item>
          </el-form>
        </div>
      </el-tab-pane>

      <el-tab-pane label="原文 & 翻译" name="text">
        <div class="tab-content" v-if="editArticle">
          <div class="section-label">英文原文段落</div>
          <div v-for="(p, idx) in editArticle.original.paragraphs" :key="'op'+idx" class="para-block">
            <div class="para-head">
              <span class="para-label">段落 {{ idx + 1 }}</span>
              <el-button type="danger" size="small" text @click="removeOriginalParagraph(idx)" v-if="editArticle.original.paragraphs.length > 1">删除</el-button>
            </div>
            <el-input v-model="editArticle.original.paragraphs[idx]" type="textarea" :rows="3" />
          </div>
          <el-button class="add-btn" size="small" @click="addOriginalParagraph">+ 添加段落</el-button>

          <div class="section-label" style="margin-top:28px">中文翻译段落</div>
          <div v-for="(p, idx) in editArticle.translation.paragraphs" :key="'tp'+idx" class="para-block">
            <div class="para-head">
              <span class="para-label">段落 {{ idx + 1 }}</span>
              <el-button type="danger" size="small" text @click="removeTranslationParagraph(idx)" v-if="editArticle.translation.paragraphs.length > 1">删除</el-button>
            </div>
            <el-input v-model="editArticle.translation.paragraphs[idx]" type="textarea" :rows="2" />
          </div>
          <el-button class="add-btn" size="small" @click="addTranslationParagraph">+ 添加段落</el-button>
        </div>
      </el-tab-pane>

      <el-tab-pane label="词汇表" name="vocab">
        <div class="tab-content" v-if="editArticle">
          <div class="section-label">词汇列表 · {{ editArticle.vocabulary.length }} 个</div>
          <el-button class="add-btn" size="small" @click="addVocab" style="margin-bottom:12px">+ 添加单词</el-button>
          <el-table :data="editArticle.vocabulary" size="small" max-height="500" empty-text="暂无词汇">
            <el-table-column prop="word" label="单词" width="140">
              <template #default="{ row, $index }">
                <el-input v-model="editArticle!.vocabulary[$index].word" size="small" placeholder="单词" />
              </template>
            </el-table-column>
            <el-table-column prop="phonetic" label="音标" width="150">
              <template #default="{ row, $index }">
                <el-input v-model="editArticle!.vocabulary[$index].phonetic" size="small" placeholder="音标" />
              </template>
            </el-table-column>
            <el-table-column prop="pos" label="词性" width="80">
              <template #default="{ row, $index }">
                <el-input v-model="editArticle!.vocabulary[$index].pos" size="small" placeholder="词性" />
              </template>
            </el-table-column>
            <el-table-column prop="meaning" label="释义" min-width="160">
              <template #default="{ row, $index }">
                <el-input v-model="editArticle!.vocabulary[$index].meaning" size="small" placeholder="释义" />
              </template>
            </el-table-column>
            <el-table-column prop="syllables" label="音节拆分" width="150">
              <template #default="{ row, $index }">
                <el-input v-model="editArticle!.vocabulary[$index].syllables" size="small" placeholder="音节拆分" />
              </template>
            </el-table-column>
            <el-table-column label="操作" width="80" fixed="right">
              <template #default="{ $index }">
                <el-popconfirm title="确定删除？" @confirm="removeVocab($index)">
                  <template #reference>
                    <el-button type="danger" size="small" text>删除</el-button>
                  </template>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="语法标注" name="grammar">
        <div class="tab-content" v-if="editArticle">
          <div class="section-label">语法标注 JSON</div>
          <div class="notion-hint">
            每段为一个数组，数组中每个对象对应一个句子：<code>{ predicates: string[], clauseIntroducers: string[], notes: { phrase, note }[] }</code>
          </div>
          <div v-for="(p, idx) in editArticle.original.paragraphs" :key="'gp'+idx" class="para-block">
            <div class="para-head notion-toggle" @click="togglePredicate(idx)">
              <span>{{ showPredicateIdx === String(idx) ? '▾' : '▸' }}</span>
              <span class="para-label">段落 {{ idx + 1 }}</span>
            </div>
            <el-input
              v-if="showPredicateIdx === String(idx)"
              :model-value="getPredicateJson(idx)"
              @update:model-value="setPredicateJson(idx, $event)"
              type="textarea"
              :rows="6"
            />
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>

  <div class="edit-page" v-else>
    <div class="edit-header">
      <el-page-header @back="goBack" />
      <div class="edit-title-row">
        <span class="header-title">文章不存在</span>
      </div>
    </div>
    <el-empty description="未找到文章" />
  </div>
</template>

<style lang="scss" scoped>
.edit-page { max-width: 780px; margin: 0 auto; padding: 32px 24px 80px; }

// Notion-style header
.edit-header { margin-bottom: 24px; }
.edit-title-row { display: flex; align-items: center; justify-content: space-between; margin-top: 20px; }
.header-title { font-size: 1.5rem; font-weight: 600; color: #1a1a1a; }

// Notion-style tabs
.edit-tabs {
  :deep(.el-tabs__header) { margin-bottom: 24px; }
  :deep(.el-tabs__nav-wrap::after) { height: 1px; background: #ededec; }
  :deep(.el-tabs__item) {
    font-size: 0.9rem; color: #6b6b6b; height: 36px; line-height: 36px;
    &:hover { color: #1a1a1a; }
    &.is-active { color: #1a1a1a; font-weight: 500; }
  }
  :deep(.el-tabs__active-bar) { background: #1a1a1a; height: 2px; }
}

.tab-content { padding: 0; }

// Notion-style section labels
.section-label {
  font-size: 0.8rem; font-weight: 500; color: #9b9a97;
  text-transform: uppercase; letter-spacing: 0.5px;
  margin-bottom: 12px;
}

// Notion-style hint
.notion-hint {
  font-size: 0.85rem; color: #9b9a97; margin-bottom: 16px; line-height: 1.6;
  code { background: #f1f1ef; padding: 1px 6px; border-radius: 3px; font-size: 0.82rem; color: #e0552a; }
}

// Paragraph blocks
.para-block { margin-bottom: 14px; }
.para-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 4px 0; margin-bottom: 4px;
}
.para-label { font-size: 0.85rem; color: #6b6b6b; }

// Notion toggle
.notion-toggle {
  cursor: pointer; user-select: none; gap: 6px; justify-content: flex-start;
  &:hover { .para-label { color: #1a1a1a; } }
}

// Add button - minimal
.add-btn {
  border: none; background: transparent; color: #9b9a97; padding: 4px 0;
  font-size: 0.85rem;
  &:hover { color: #1a1a1a; background: #f1f1ef; border-radius: 4px; padding: 4px 8px; }
}

// Notion-style form overrides
:deep(.el-form-item) { margin-bottom: 14px; }
:deep(.el-form-item__label) { color: #6b6b6b; font-weight: 400; font-size: 0.85rem; }
:deep(.el-input__wrapper) { box-shadow: none !important; border: 1px solid #e3e2e0; border-radius: 4px; background: #fff; }
:deep(.el-input__wrapper:hover) { border-color: #b4b3b0; }
:deep(.el-input.is-focus .el-input__wrapper) { border-color: #2383e2; box-shadow: 0 0 0 1px rgba(35,131,226,0.2) !important; }
:deep(.el-textarea__inner) { border-color: #e3e2e0; border-radius: 4px; font-size: 0.9rem; }
:deep(.el-textarea__inner:focus) { border-color: #2383e2; box-shadow: 0 0 0 1px rgba(35,131,226,0.2); }
:deep(.el-select .el-input__wrapper) { box-shadow: none !important; border: 1px solid #e3e2e0; }
:deep(.el-input-number .el-input__wrapper) { box-shadow: none !important; border: 1px solid #e3e2e0; }

// Notion-style table
:deep(.el-table) {
  border: none;
  --el-table-border-color: #ededec;
  --el-table-header-bg-color: #f7f6f3;
  font-size: 0.88rem;
  th { font-weight: 500; color: #6b6b6b; font-size: 0.82rem; border-bottom: 1px solid #ededec; }
  td { border-bottom: 1px solid #f1f1ef; padding: 6px 0; }
  .el-input__wrapper { box-shadow: none !important; border: 1px solid transparent; background: transparent; padding: 2px 8px; }
  .el-input__wrapper:hover { border-color: #e3e2e0; background: #fafaf8; }
  .el-input.is-focus .el-input__wrapper { border-color: #2383e2; background: #fff; box-shadow: 0 0 0 1px rgba(35,131,226,0.2) !important; }
  tr:hover td { background: #fafaf8; }
}

// Buttons
:deep(.el-button--primary) { background: #2383e2; border-color: #2383e2; border-radius: 4px; font-weight: 400; }
:deep(.el-button) { border-radius: 4px; }

// Page header back button
:deep(.el-page-header__back) { color: #6b6b6b; font-size: 0.9rem; }
:deep(.el-page-header__back:hover) { color: #1a1a1a; }

// Empty state
:deep(.el-empty__description) { color: #b4b3b0; }
</style>
