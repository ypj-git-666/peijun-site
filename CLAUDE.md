# 杨培俊个人网站 — Astro 项目

## 项目概况
为杨培俊(Peijun Yang)做个人名片网站,兼具简历和博客功能。
受众：AI 创业者、投资人。

## 技术栈
- 框架：Astro（最新稳定版）
- 样式：原生 CSS（已有完整设计稿）
- CMS：Decap CMS（GitHub 后端）
- 部署：Vercel
- 字体：Noto Serif SC + Noto Sans SC（Google Fonts）

## 命令
- 安装依赖：`npm install`
- 开发：`npm run dev`
- 构建：`npm run build`
- 预览：`npm run preview`

## 核心文件
- `index_v4.html` — 已确认的 HTML 原型（视觉、交互、文案均已定稿）
- `PROJECT_BRIEF_v4.md` — 完整项目文档
- `taste_skill.md` — 设计规范
- `avatar.jpg` — 头像图片
- `文案-请修改后发回.txt` — 所有文章完整全文

## 工作指引
1. 基于 index_v4.html 拆分为 Astro 组件，**不改动任何视觉和文案**
2. 页面结构：Hero → 在做的事(01) → 经历(02) → 内容创作(03) → 播客&视频(04) → Footer
3. 中英文切换用 CSS class 方案（[lang="en"] .zh {display:none}），不用 i18n 框架
4. 文章展开/收起用原生 JS，保持现有逻辑
5. 配置 Decap CMS（public/admin/），3 个 collection：observations、notes、guest
6. 所有文章全文必须从「文案-请修改后发回.txt」原文录入，不得截断

## 约束
- 不加任何第三方 JS 框架（React/Vue）
- 不改配色方案（方案 B 灰白暖棕）
- 不改字体方案
- avatar.jpg 放 public/ 目录，不用 base64
- 图片放 public/images/
