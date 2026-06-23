# AGENTS.md — NCE 新概念英语阅读项目

## Git 提交规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 1.0.0。

### 格式

```
<type>: <简短中文描述>
```

### Type 类型

| type | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 bug |
| `refactor` | 重构（不改变功能） |
| `style` | 样式/UI 调整 |
| `docs` | 文档/注释 |
| `chore` | 构建/工具/依赖 |
| `perf` | 性能优化 |

### 规则

- 描述用中文，简洁一句话，不加句号
- 一个 commit 只做一件事
- 小改动频繁提交，不攒大 commit

### 示例

```
feat: 双击卡片进入文章编辑页
fix: Youth文章id改为nce4-l5统一路由
style: 行间笔记字体变深
refactor: 数据结构重构为句子级SentenceData
docs: Article.vue 核心注释
chore: 排除大字体文件
```

## 术语约定

- **句子横批** — 词/短语下方的小字注解，对应 `SentenceData.notes`，CSS ruby 渲染
- **行间笔记** — 展开面板中的片段+解析，对应 `SentenceData.panelNotes`，面板内渲染

## 数据规范

### 英文句子拆分规则

向 `SentenceData[]` 拆分英文原文时，以下标点视为句子边界：

| 标点 | 说明 |
|------|------|
| `.` 句号 | 句子边界 |
| `?` 问号 | 句子边界 |
| `!` 感叹号 | 句子边界 |
| `;` 分号 | **也视为句子边界**，拆成独立句 |

**注意：** `;` 分号连接的两个独立分句应拆为两个 `SentenceData`，各自对应独立的翻译句。破折号 `--` 不拆句。

### 示例

原文：
```
The hovercraft is particularly useful in large areas such as Africa; it can become a 'flying fruit-bowl'.
```

拆为两句：
```ts
{ text: "The hovercraft is particularly useful in large areas such as Africa;", ... },
{ text: "it can become a 'flying fruit-bowl'.", ... },
```
