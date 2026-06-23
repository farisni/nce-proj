# NCE Proj — 新概念英语阅读器

基于 Vue 3 的新概念英语课文阅读与学习工具，覆盖 NCE2/3/4 共 151 篇文章，支持语法标注、行间笔记、词汇表音节拆分、热力图等学习辅助功能。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3 (Composition API + `<script setup>`) |
| 语言 | TypeScript |
| 构建 | Vite |
| UI 库 | Element Plus |
| 路由 | Vue Router |
| 样式 | SCSS |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
src/
├── mock/readData.ts      # 151 篇文章数据（元数据、原文、翻译、词汇、语法标注）
├── router/index.ts       # 路由：首页 /、文章 /article/:id、编辑 /edit/:id
├── views/
│   ├── Home.vue          # 首页：NCE2/3/4 导航 + 便利贴风格文章卡片 + 搜索
│   ├── Article.vue       # 文章阅读页：原文/翻译分栏、语法高亮、行间笔记、聚光灯
│   └── EditArticle.vue   # 文章编辑页：元数据/原文翻译/词汇表/语法标注 4 Tab
├── components/
│   └── Heatmap.vue       # GitHub 风格热力图组件（36 天学习热度）
└── asserts/icon/         # SVG 图标（羽毛、图钉等）
```

## 数据模型

每篇文章为 `SentenceData[][]` — 段落 → 句子矩阵，每句自带：

```ts
interface SentenceData {
  text: string              // 英文原文
  translation?: string      // 中文翻译
  predicates: string[]      // 谓语词（橘红高亮）
  clauseIntroducers: string[] // 从句引导词（斜体加粗）
  notes?: { phrase: string; note: string }[] // 行间笔记（词下方显示）
}
```

## 功能清单

- **卡片首页** — 便利贴风格倾斜卡片，5 色交替，双击编辑/单击阅读
- **模糊搜索** — 按标题中/英文模糊过滤卡片
- **语法高亮** — 原文中谓语橘红、从句引导词斜体加粗
- **行间笔记** — 指定短语下方显示中文注解（CSS ruby）
- **羽毛面板** — 点击句末图标展开浅绿笔记面板 + 聚光灯效果
- **词汇侧栏** — 单击单词切换原形/音节拆分，hover 显示音标
- **热力图** — 文章标题右侧 GitHub 风格学习热度（9×4=36 天）
- **上下课导航** — 文章标题上方固定导航按钮
- **文章编辑** — 双击卡片进入 Notion 风格编辑页（元数据/原文/翻译/词汇/语法）
- **手账背景** — 圆点纹理 + 暖灰底色 `rgb(247, 246, 243)`
- **中文手写体** — 霞鹜文楷（全局）+ 汇文明朝体（卡片标题）

## Git 提交规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/)：

```
<type>: <中文描述>
```

| type | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 bug |
| `style` | 样式/UI |
| `refactor` | 重构 |
| `docs` | 文档/注释 |
| `chore` | 构建/工具 |

详见 [AGENTS.md](./AGENTS.md)
