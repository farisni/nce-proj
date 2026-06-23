<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { articles, type Article, type SentenceData } from '../mock/readData'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.id as string)
const exists = computed(() => !!articles[id.value])

const activeTab = ref('meta')

function cloneArticle(src: Article): Article {
  return JSON.parse(JSON.stringify(src))
}
const editArticle = ref<Article | null>(null)

watch(id, (newId) => {
  if (articles[newId]) {
    editArticle.value = cloneArticle(articles[newId])
  } else {
    editArticle.value = null
  }
}, { immediate: true })

// Vocab
function addVocab() {
  editArticle.value?.vocabulary.push({ word: '', pos: '', meaning: '', phonetic: '', syllables: '' })
}
function removeVocab(idx: number) {
  editArticle.value?.vocabulary.splice(idx, 1)
}

// Paragraph operations
function addParagraph() {
  editArticle.value?.original.paragraphs.push([])
}
function removeParagraph(pIdx: number) {
  editArticle.value?.original.paragraphs.splice(pIdx, 1)
}

// Sentence operations
function addSentence(pIdx: number) {
  editArticle.value?.original.paragraphs[pIdx].push({
    text: '', translation: '', predicates: [], clauseIntroducers: [], notes: [], panelNotes: []
  })
}
function removeSentence(pIdx: number, sIdx: number) {
  editArticle.value?.original.paragraphs[pIdx].splice(sIdx, 1)
}

// Grammar helpers - inline tag add
const newPredicate = ref<Record<string, string>>({})
const newClause = ref<Record<string, string>>({})

function addPredicate(pIdx: number, sIdx: number) {
  const key = pIdx + '-' + sIdx
  const val = newPredicate.value[key]?.trim()
  if (!val) return
  const sent = editArticle.value?.original.paragraphs[pIdx]?.[sIdx]
  if (sent) sent.predicates.push(val)
  newPredicate.value[key] = ''
}
function addClause(pIdx: number, sIdx: number) {
  const key = pIdx + '-' + sIdx
  const val = newClause.value[key]?.trim()
  if (!val) return
  const sent = editArticle.value?.original.paragraphs[pIdx]?.[sIdx]
  if (sent) sent.clauseIntroducers.push(val)
  newClause.value[key] = ''
}
function addNote(pIdx: number, sIdx: number) {
  const sent = editArticle.value?.original.paragraphs[pIdx]?.[sIdx]
  if (sent) {
    if (!sent.notes) sent.notes = []
    sent.notes.push({ phrase: '', note: '' })
  }
}

function addPanelNote(pIdx: number, sIdx: number) {
  const sent = editArticle.value?.original.paragraphs[pIdx]?.[sIdx]
  if (sent) {
    if (!sent.panelNotes) sent.panelNotes = []
    sent.panelNotes.push({ snippet: '', desc: '' })
  }
}

// Collapse state
const showParagraph = ref<Record<number, boolean>>({})
// 双击编辑状态：记录哪些单元格/字段处于编辑模式
const editingCells = ref(new Set<string>())
const editingMetaFields = ref(new Set<string>())

function startEdit(key: string) { editingCells.value.add(key); editingCells.value = new Set(editingCells.value) }
function stopEdit(key: string) { editingCells.value.delete(key); editingCells.value = new Set(editingCells.value) }
function startMetaEdit(key: string) { editingMetaFields.value.add(key); editingMetaFields.value = new Set(editingMetaFields.value) }
function stopMetaEdit(key: string) { editingMetaFields.value.delete(key); editingMetaFields.value = new Set(editingMetaFields.value) }
function toggleParagraph(idx: number) {
  showParagraph.value[idx] = !showParagraph.value[idx]
}

function save() {
  if (!editArticle.value) return
  articles[id.value] = cloneArticle(editArticle.value)
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
        <span class="header-title">编辑：{{ editArticle?.title || id }}</span>
        <div class="header-actions">
          <el-button size="small" class="notion-btn notion-btn-cancel" @click="goBack">取消</el-button>
          <el-button size="small" class="notion-btn notion-btn-save"  @click="save">保存</el-button>
        </div>
      </div>
    </div>

    <el-tabs v-model="activeTab" class="edit-tabs">
      <!-- Tab 1: 元数据 -->
      <el-tab-pane label="元数据" name="meta">
        <div class="tab-content" v-if="editArticle">
          <el-form label-width="100px" label-position="left" size="default">
            <el-form-item label="ID">
                <template v-if="editingMetaFields.has('id')">
                  <el-input v-model="editArticle.id" @blur="stopMetaEdit('id')" @keyup.enter="stopMetaEdit('id')" autofocus />
                </template>
                <span v-else class="cell-text" @dblclick="startMetaEdit('id')">{{ editArticle.id || '—' }}</span>
              </el-form-item>
            <el-form-item label="英文标题">
                <template v-if="editingMetaFields.has('title')">
                  <el-input v-model="editArticle.title" @blur="stopMetaEdit('title')" @keyup.enter="stopMetaEdit('title')" autofocus />
                </template>
                <span v-else class="cell-text" @dblclick="startMetaEdit('title')">{{ editArticle.title || '—' }}</span>
              </el-form-item>
            <el-form-item label="中文标题">
                <template v-if="editingMetaFields.has('titleCn')">
                  <el-input v-model="editArticle.titleCn" @blur="stopMetaEdit('titleCn')" @keyup.enter="stopMetaEdit('titleCn')" autofocus />
                </template>
                <span v-else class="cell-text" @dblclick="startMetaEdit('titleCn')">{{ editArticle.titleCn || '—' }}</span>
              </el-form-item>
            <el-row :gutter="16" class="meta-compact">
              <el-col :span="8">
                <el-form-item label="课号"><el-input-number v-model="editArticle.lesson" :min="1" size="small" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="标签 (Cx)">
                  <el-select v-model="editArticle.tag" clearable placeholder="可选" size="small">
                    <el-option v-for="n in 20" :key="n" :label="'C' + n" :value="'C' + n" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="册">
                  <el-select v-model="editArticle.level" size="small">
                    <el-option label="NCE2" value="NCE2" />
                    <el-option label="NCE3" value="NCE3" />
                    <el-option label="NCE4" value="NCE4" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="重点文章"><el-switch v-model="editArticle.keyArticle" size="small" /></el-form-item>
          </el-form>
        </div>
      </el-tab-pane>

      <!-- Tab 2: 原文 & 翻译 (per sentence) -->
      <el-tab-pane label="原文 & 翻译" name="text">
        <div class="tab-content" v-if="editArticle">
          <div v-for="(para, pIdx) in editArticle.original.paragraphs" :key="'p'+pIdx" class="grammar-para">
            <div class="para-head notion-toggle" @click="toggleParagraph(pIdx)">
              <span>{{ showParagraph[pIdx] ? '▾' : '▸' }}</span>
              <span class="para-label">段落 {{ pIdx + 1 }}</span>
              <span class="grammar-meta">{{ para.length }} 句</span>
              <el-popconfirm v-if="editArticle.original.paragraphs.length > 1" title="确定删除？" @confirm="removeParagraph(pIdx)"><template #reference><span class="del-btn" style="margin-left:auto">删除段</span></template></el-popconfirm>
            </div>
            <div v-if="showParagraph[pIdx]" class="grammar-body">
              <div v-for="(sd, sIdx) in para" :key="'s'+sIdx" class="grammar-sentence">
                <div class="grammar-sentence-head">
                  <span class="grammar-sentence-label">句子 {{ sIdx + 1 }}</span>
                  <el-popconfirm title="确定删除？" @confirm="removeSentence(pIdx, sIdx)"><template #reference><span class="del-btn">删除</span></template></el-popconfirm>
                </div>
                <el-input v-model="sd.text" type="textarea" :rows="2" placeholder="原文" style="margin-bottom:6px" class="text-en-ta" />
                <el-input v-model="sd.translation" type="textarea" :rows="1" placeholder="翻译" />
              </div>
              <el-button class="add-btn" size="small" @click="addSentence(pIdx)">+ 添加句子</el-button>
            </div>
          </div>
          <el-button class="add-btn" size="small" @click="addParagraph" style="margin-top:12px">+ 添加段落</el-button>
        </div>
      </el-tab-pane>

      <!-- Tab 3: 词汇表 -->
      <el-tab-pane label="词汇表" name="vocab">
        <div class="tab-content" v-if="editArticle">
          <div class="section-label">词汇列表 · {{ editArticle.vocabulary.length }} 个</div>
          <el-button class="add-btn" size="small" @click="addVocab" style="margin-bottom:12px">+ 添加单词</el-button>
          <div class="notion-table-wrapper">
            <div class="notion-table-header">
              <span class="nth-col" style="width:140px">单词</span>
              <span class="nth-col" style="width:150px">音标</span>
              <span class="nth-col" style="width:80px">词性</span>
              <span class="nth-col" style="flex:1">释义</span>
              <span class="nth-col" style="width:150px">音节拆分</span>
              <span class="nth-col" style="width:60px"></span>
            </div>
            <div v-if="editArticle.vocabulary.length === 0" class="notion-table-empty">暂无词汇</div>
            <div v-for="(item, vi) in editArticle.vocabulary" :key="vi" class="notion-table-row">
              <div class="ntd-cell" style="width:140px"><input v-model="editArticle!.vocabulary[vi].word" placeholder="单词" class="notion-cell-input" /></div>
              <div class="ntd-cell" style="width:150px"><input v-model="editArticle!.vocabulary[vi].phonetic" placeholder="音标" class="notion-cell-input" /></div>
              <div class="ntd-cell" style="width:80px"><input v-model="editArticle!.vocabulary[vi].pos" placeholder="词性" class="notion-cell-input" /></div>
              <div class="ntd-cell" style="flex:1"><input v-model="editArticle!.vocabulary[vi].meaning" placeholder="释义" class="notion-cell-input" /></div>
              <div class="ntd-cell" style="width:150px"><input v-model="editArticle!.vocabulary[vi].syllables" placeholder="音节拆分" class="notion-cell-input" /></div>
              <div class="ntd-cell ntd-action" style="width:60px">
                <el-popconfirm title="确定删除？" @confirm="removeVocab(vi)">
                  <template #reference><span class="notion-row-delete">✕</span></template>
                </el-popconfirm>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <!-- Tab 4: 语法标注 (per sentence) -->
      <el-tab-pane label="语法标注" name="grammar">
        <div class="tab-content" v-if="editArticle">
          <div class="section-label">语法标注</div>
          <div class="notion-hint">标注谓语、从句引导词、句子横批</div>
          <div v-for="(para, pIdx) in editArticle.original.paragraphs" :key="'gp'+pIdx" class="grammar-para">
            <div class="para-head notion-toggle" @click="toggleParagraph(pIdx)">
              <span>{{ showParagraph[pIdx] ? '▾' : '▸' }}</span>
              <span class="para-label">段落 {{ pIdx + 1 }}</span>
              <span class="grammar-meta">{{ para.length }} 句</span>
            </div>
            <div v-if="showParagraph[pIdx]" class="grammar-body">
              <div v-for="(sd, sIdx) in para" :key="'gs'+sIdx" class="grammar-sentence">
                <div class="grammar-sentence-head">
                  <span class="grammar-sentence-label">句子 {{ sIdx + 1 }}</span>
                </div>
                <div class="grammar-sentence-text">{{ sd.text || '(无文本)' }}</div>

                <!-- Predicates -->
                <div class="grammar-field">
                  <span class="grammar-field-label">谓语</span>
                  <div class="grammar-tags">
                    <el-tag v-for="(pred, pi) in sd.predicates" :key="'pred'+pi" closable size="small" type="danger" effect="light" @close="sd.predicates.splice(pi, 1)">{{ pred }}</el-tag>
                    <el-input v-model="newPredicate[pIdx+'-'+sIdx]" size="small" placeholder="添加谓语..." class="grammar-tag-input" @keyup.enter="addPredicate(pIdx, sIdx)" @blur="addPredicate(pIdx, sIdx)" />
                  </div>
                </div>

                <!-- Clause Introducers -->
                <div class="grammar-field">
                  <span class="grammar-field-label">从句引导词</span>
                  <div class="grammar-tags">
                    <el-tag v-for="(ci, cii) in sd.clauseIntroducers" :key="'ci'+cii" closable size="small" effect="light" @close="sd.clauseIntroducers.splice(cii, 1)">{{ ci }}</el-tag>
                    <el-input v-model="newClause[pIdx+'-'+sIdx]" size="small" placeholder="添加引导词..." class="grammar-tag-input" @keyup.enter="addClause(pIdx, sIdx)" @blur="addClause(pIdx, sIdx)" />
                  </div>
                </div>

                <!-- Notes -->
                <div class="grammar-field">
                  <span class="grammar-field-label">句子横批</span>
                  <el-table :data="sd.notes || []" size="small" class="grammar-notes-table" empty-text="暂无笔记">
                    <el-table-column prop="phrase" label="单词 / 短语 / 片段" min-width="140">
                      <template #default="{ $index }">
                        <template v-if="editingCells.has('note-phrase-'+pIdx+'-'+sIdx+'-'+$index)">
                          <el-input v-model="sd.notes![$index].phrase" size="small" @blur="stopEdit('note-phrase-'+pIdx+'-'+sIdx+'-'+$index)" @keyup.enter="stopEdit('note-phrase-'+pIdx+'-'+sIdx+'-'+$index)" autofocus />
                        </template>
                        <span v-else class="cell-text" @dblclick="startEdit('note-phrase-'+pIdx+'-'+sIdx+'-'+$index)">{{ sd.notes![$index].phrase || '—' }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="note" label="笔记" min-width="180">
                      <template #default="{ $index }">
                        <template v-if="editingCells.has('note-note-'+pIdx+'-'+sIdx+'-'+$index)">
                          <el-input v-model="sd.notes![$index].note" size="small" @blur="stopEdit('note-note-'+pIdx+'-'+sIdx+'-'+$index)" @keyup.enter="stopEdit('note-note-'+pIdx+'-'+sIdx+'-'+$index)" autofocus />
                        </template>
                        <span v-else class="cell-text" @dblclick="startEdit('note-note-'+pIdx+'-'+sIdx+'-'+$index)">{{ sd.notes![$index].note || '—' }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="操作" width="80">
                      <template #default="{ $index }">
<el-popconfirm title="确定删除？" @confirm="sd.notes!.splice($index, 1)"><template #reference><span class="del-btn">删除</span></template></el-popconfirm>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-button class="add-btn" size="small" @click="addNote(pIdx, sIdx)">+ 添加笔记</el-button>
                </div>

                <!-- Panel Notes -->
                <div class="grammar-field">
                  <span class="grammar-field-label">行间笔记</span>
                  <el-table :data="sd.panelNotes || []" size="small" class="grammar-notes-table" empty-text="暂无行间笔记">
                    <el-table-column prop="snippet" label="片段" min-width="140">
                      <template #default="{ $index }">
                        <template v-if="editingCells.has('pn-snippet-'+pIdx+'-'+sIdx+'-'+$index)">
                          <el-input v-model="sd.panelNotes![$index].snippet" size="small" @blur="stopEdit('pn-snippet-'+pIdx+'-'+sIdx+'-'+$index)" @keyup.enter="stopEdit('pn-snippet-'+pIdx+'-'+sIdx+'-'+$index)" autofocus />
                        </template>
                        <span v-else class="cell-text" @dblclick="startEdit('pn-snippet-'+pIdx+'-'+sIdx+'-'+$index)">{{ sd.panelNotes![$index].snippet || '—' }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="desc" label="解析" min-width="180">
                      <template #default="{ $index }">
                        <template v-if="editingCells.has('pn-desc-'+pIdx+'-'+sIdx+'-'+$index)">
                          <el-input v-model="sd.panelNotes![$index].desc" size="small" @blur="stopEdit('pn-desc-'+pIdx+'-'+sIdx+'-'+$index)" @keyup.enter="stopEdit('pn-desc-'+pIdx+'-'+sIdx+'-'+$index)" autofocus />
                        </template>
                        <span v-else class="cell-text" @dblclick="startEdit('pn-desc-'+pIdx+'-'+sIdx+'-'+$index)">{{ sd.panelNotes![$index].desc || '—' }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="操作" width="80">
                      <template #default="{ $index }">
<el-popconfirm title="确定删除？" @confirm="sd.panelNotes!.splice($index, 1)"><template #reference><span class="del-btn">删除</span></template></el-popconfirm>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-button class="add-btn" size="small" @click="addPanelNote(pIdx, sIdx)">+ 添加行间笔记</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>

  <div class="edit-page" v-else>
    <div class="edit-header">
      <el-page-header @back="goBack" />
      <div class="edit-title-row"><span class="header-title">文章不存在</span></div>
    </div>
    <el-empty description="未找到文章" />
  </div>
</template>

<style lang="scss" scoped>
.edit-page { max-width: 780px; margin: 0 auto; padding: 32px 24px 80px; }

.edit-header { margin-bottom: 24px; }
/* 编辑页使用 MiSans */
.edit-page .cell-text,
.edit-page :deep(.el-input__inner) { font-family: 'MiSans Latin', sans-serif; }
/* 元数据表单组件缩短 */
.meta-compact :deep(.el-input-number) { width: 140px; }
.meta-compact :deep(.el-select) { width: 120px; }
.edit-title-row { display: flex; align-items: center; justify-content: space-between; margin-top: 20px; }
.header-title { font-size: 1.5rem; font-weight: 600; color: #1a1a1a; }
.header-actions { display: flex; gap: 2px; }

.edit-tabs {
  :deep(.el-tabs__header) { margin-bottom: 24px; }
  :deep(.el-tabs__nav-wrap::after) { height: 1px; background: #ededec; }
  :deep(.el-tabs__item) { font-size: 0.9rem; color: #6b6b6b; height: 36px; line-height: 36px;
    &:hover { color: #1a1a1a; }
    &.is-active { color: #1a1a1a; font-weight: 500; }
  }
  :deep(.el-tabs__active-bar) { background: #1a1a1a; height: 2px; }
}

.tab-content { padding: 0; }
.section-label { font-size: 0.8rem; font-weight: 500; color: #9b9a97; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
.notion-hint { font-size: 0.85rem; color: #9b9a97; margin-bottom: 16px; line-height: 1.6;
  code { background: #f1f1ef; padding: 1px 6px; border-radius: 3px; font-size: 0.82rem; color: #e0552a; }
}

.para-block { margin-bottom: 14px; }
.para-head { display: flex; align-items: center; justify-content: flex-start; padding: 4px 0; margin-bottom: 4px; gap: 6px; }
.para-label { font-size: 0.85rem; color: #6b6b6b; }

.notion-toggle { cursor: pointer; user-select: none;
  &:hover { .para-label { color: #1a1a1a; } }
}

.add-btn { border: none; background: transparent; color: #888; padding: 2px 0; font-size: 0.75rem; cursor: pointer; 
  &:hover { color: #1a1a1a; background: #f1f1ef; border-radius: 4px; padding: 4px 8px; }
}
.del-btn { color: #888; font-size: 0.75rem; cursor: pointer; padding: 2px 4px; border-radius: 3px; display: inline-block; transition: all 0.15s;
  &:hover { color: #e0552a; background: #fef0f0; border-radius: 4px; padding: 4px 8px; }
}
:deep(.el-popconfirm__action) { .el-button--primary { font-size: 0.75rem; } }

// Grammar section
.grammar-para { margin-bottom: 8px; }
.grammar-meta { font-size: 0.78rem; color: #b4b3b0; margin-left: 8px; }
.grammar-body { padding: 12px 0 8px 16px; border-left: 2px solid #f1f1ef; margin-left: 8px; }
.grammar-sentence { margin-bottom: 16px; padding: 12px 14px; background: #fafaf8; border-radius: 6px; }
.grammar-sentence-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.grammar-sentence-label { font-size: 0.85rem; font-weight: 600; color: #1a1a1a; }
.grammar-sentence-text {
  font-size: 0.85rem; color: #1a1a1a; font-weight: 500; margin-bottom: 12px;
  padding: 6px 10px; background: #fff; border-radius: 4px; border-left: 3px solid #e3e2e0; line-height: 1.5;
}
.grammar-field { margin-bottom: 12px; }
.grammar-field-label { display: block; font-size: 0.75rem; color: #6e6e6b; font-weight: 600; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
.grammar-tags { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
.grammar-tag-input { width: 150px; }
.grammar-notes-table { margin-bottom: 8px; }
.cell-text { display: flex; align-items: center; padding: 0 12px; min-height: 32px; cursor: pointer; color: #37352f; border-radius: 3px; border: 1px solid transparent; }
.cell-text:hover { background: #f1f1f1; border-color: #e3e2e0; }

// Sentence border colors
.grammar-sentence:nth-child(1) .grammar-sentence-text { border-left-color: #f0c040; }
.grammar-sentence:nth-child(2) .grammar-sentence-text { border-left-color: #7bc87b; }
.grammar-sentence:nth-child(3) .grammar-sentence-text { border-left-color: #6b8fce; }
.grammar-sentence:nth-child(4) .grammar-sentence-text { border-left-color: #6db8d4; }
.grammar-sentence:nth-child(5) .grammar-sentence-text { border-left-color: #e898a8; }
.grammar-sentence:nth-child(6) .grammar-sentence-text { border-left-color: #d4a060; }
.grammar-sentence:nth-child(7) .grammar-sentence-text { border-left-color: #8cb88c; }
.grammar-sentence:nth-child(8) .grammar-sentence-text { border-left-color: #7e9ed4; }
.grammar-sentence:nth-child(9) .grammar-sentence-text { border-left-color: #7cc8d8; }
.grammar-sentence:nth-child(10) .grammar-sentence-text { border-left-color: #e8a8b4; }

// Notion table
.notion-table-wrapper { border: 1px solid #ededec; border-radius: 6px; overflow: hidden; }
.notion-table-header { display: flex; align-items: center; background: #f7f6f3; border-bottom: 1px solid #e3e2e0; padding: 7px 12px; }
.nth-col { font-size: 0.78rem; font-weight: 500; color: #6b6b6b; flex-shrink: 0; padding: 0 6px; }
.notion-table-empty { padding: 32px 12px; text-align: center; font-size: 0.85rem; color: #b4b3b0; }
.notion-table-row { display: flex; align-items: center; padding: 0 12px; border-bottom: 1px solid #f1f1ef; transition: background 0.1s;
  &:last-child { border-bottom: none; }
  &:hover { background: #fafaf8; .notion-row-delete { opacity: 1; } }
}
.ntd-cell { flex-shrink: 0; padding: 4px 6px; display: flex; align-items: center; }
.ntd-action { justify-content: center; }
.notion-cell-input { width: 100%; border: 1px solid transparent; background: transparent; padding: 4px 6px; font-size: 0.85rem; font-family: inherit; color: #1a1a1a; border-radius: 3px; outline: none;
  &:focus { border-color: #409EFF; background: #fff; box-shadow: 0 0 0 1px rgba(35,131,226,0.2); }
  &:hover:not(:focus) { border-color: #e3e2e0; background: #fdfdfc; }
}
.notion-row-delete { opacity: 0; font-size: 0.85rem; color: #d94a4a; cursor: pointer; padding: 2px 6px; border-radius: 3px; transition: opacity 0.1s;
  &:hover { background: #fef0f0; }
}

:deep(.el-form-item) { margin-bottom: 14px; }
:deep(.el-form-item__label) { color: #6b6b6b; font-weight: 400; font-size: 0.85rem; }
:deep(.el-input__wrapper) { box-shadow: none !important; border: 1px solid #e3e2e0; border-radius: 4px; background: #fff; }
:deep(.el-input__wrapper:hover) { border-color: #b4b3b0; }
:deep(.el-input.is-focus .el-input__wrapper) { border-color: #409EFF; box-shadow: 0 0 0 1px rgba(35,131,226,0.2) !important; }
:deep(.el-textarea__inner) { border-color: #e3e2e0; border-radius: 4px; font-size: 0.9rem; }
:deep(.el-textarea__inner:focus) { border-color: #409EFF; box-shadow: 0 0 0 1px rgba(35,131,226,0.2); }
:deep(.el-select .el-input__wrapper) { box-shadow: none !important; border: 1px solid #e3e2e0; }
:deep(.el-input-number .el-input__wrapper) { box-shadow: none !important; border: 1px solid #e3e2e0; }
:deep(.el-button--primary) { background: #409EFF; border-color: #409EFF; border-radius: 4px; font-weight: 400; }
:deep(.el-button) { border-radius: 4px; }
:deep(.el-page-header__back) { color: #6b6b6b; font-size: 0.9rem; }
:deep(.el-page-header__back:hover) { color: #1a1a1a; }
:deep(.el-empty__description) { color: #b4b3b0; }
/* Notion-style header buttons */
.notion-btn { border-radius: 4px; font-size: 0.8rem; padding: 4px 12px; transition: background 0.15s; }
.notion-btn-cancel { border: 1px solid #e3e2e0; background: #fff; color: #37352f; }
.notion-btn-cancel:hover { background: #f1f1ef; color: #37352f; border-color: #d3d2d0; }
.notion-btn-save { border: 1px solid #409EFF; background: #409EFF; color: #fff; }
.notion-btn-save:hover { background: #337ECC; border-color: #337ECC; color: #fff; }
.text-en-ta :deep(textarea) { font-family: 'MiSans Latin', sans-serif; }
</style>
