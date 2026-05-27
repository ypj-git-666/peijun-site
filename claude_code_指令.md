# Claude Code 指令 — 请整段粘贴到 Claude Code 的 > 提示符中

请执行以下修改：

## 修改 1：友人投稿区 — 添加阿澤的卡片和文章

在"友人投稿"panel 中，删除占位文字，改为以下结构：

阿澤是第一个投稿人，用卡片形式展示：
- 卡片标题：阿澤
- 卡片下方列出他的两篇文章，每篇文章有标题+节选+展开全文按钮

文章 1：
- 标题：破局与共生：从国民党主席大陆之行，看两岸产业新创格局
- 节选（150字以内）：这是睽违十年后，国共两党最高领导人再次会面。此次「2026和平之旅」，政治固然是基础，但更着墨于两岸在AI、新创、产业、治理以及两岸未来发展等众多实务议题。
- 全文：读取项目根目录下的「阿澤_破局与共生.txt」文件的完整内容作为展开全文的内容。如果文件不存在，请从 /Users/yangpeijun/Desktop/peijun-site/ 目录查找。全文必须完整，一个字都不能少。
- 文章中有简体中文、繁体中文、英文三种文字混排，必须全部原样保留，不做任何简繁转换。

文章 2：
- 标题：为什么我们什么都不拥有，却要付出这样昂贵的代价？
- 节选（150字以内）：一台售价160美元的打印机，其制造商惠普可能更希望你每月支付8美元来租用它。订阅制是企业稳定获利的利器，却削弱消费者的所有权。
- 全文：读取项目根目录下的「阿澤_为什么我们什么都不拥有.txt」文件的完整内容。同样必须完整保留所有简繁中英文混排。

英文版（EN切换后）：两篇文章只显示英文节选，不翻译全文：
- 文章1英文节选：A decade after the last meeting between KMT and CCP leaders, the 2026 Peace Mission focused not only on politics but also on cross-strait AI, startups, industry, and governance.
- 文章2英文节选：A $160 printer whose maker would rather you pay $8/month to rent it. Subscriptions are a profit engine for corporations — but they erode consumer ownership.

## 修改 2：添加繁体中文语言选项

在现有的「中/EN」切换基础上，改为三语切换：「简/繁/EN」
- 简体中文 = 当前的中文内容（lang="zh-CN"）
- 繁体中文 = 新增（lang="zh-TW"），所有简体中文内容自动转换为繁体中文版本
- 英文 = 当前的英文内容（lang="en"）

实现方式：
- CSS 方案：添加 [lang="zh-TW"] .zh { display:none } [lang="zh-TW"] .en { display:none } [lang="zh-TW"] .zht { display:block/inline }
- 在每个已有 zh/en span 旁边添加 class="zht" 的繁体中文版本
- 顶栏切换按钮改为三个：简 | 繁 | EN
- toggleLang 函数改为支持三语循环切换

注意：阿澤的文章原文中已经包含繁体中文，在繁体中文模式下保持原文不变。

## 修改 3：绝对不改动任何原文内容

所有文章内容必须和原始 word 文档/txt 文件完全一致。不做任何字符变动、不做简繁转换（原文是什么就是什么）、不删除任何标点符号、不修改任何格式。

## 执行完毕后

1. 先把「阿澤_破局与共生.txt」和「阿澤_为什么我们什么都不拥有.txt」这两个文件复制到项目根目录（如果还没有的话）
2. 运行 npm run build 确认构建成功
3. 执行 git add . && git commit -m "add guest posts + traditional chinese + content sync" && git push origin main
