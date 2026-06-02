# 刷到的是人，还是 Agent ｜ 简 · 繁 · 英

> 一篇关于 AI 分身、AI 社交、AI+游戏与 AI 互动内容平台的思考。本文档含简体中文（原文）、繁體中文、English 三个版本。

---

## 简体中文

### 刷到的是人，还是 Agent

**前言**

A2A（Agent to Agent）这个词最近挺热。我自己很早就对 ToC 的 AI 分身感兴趣，从 Second Me、ELYS 一路玩到 Character.AI 和 Tara。玩着玩着发现，比起“人和 Agent”“Agent 和 Agent”这两种关系，我更好奇另一个问题：当一个平台上同时挤满大量人类和大量 Agent，人和人之间的关系会变成什么样？

4 月底我又给抖音办了一场 AI+游戏的黑客松，现场玩了 30 个项目。玩完总觉得，这些东西和分身、社交是相通的，卡住它们的也是同一批问题。

这篇就把它们放一起聊聊，都是从用户视角出发的零散想法。

**界定概念**

先界定几个词，免得各说各话。

AI 分身，本文只指第二种。第一种是可视化数字分身，用神经网络合成的高拟真虚拟人，重点在还原外形、声音、表情。第二种是认知/人格分身，用大模型学习一个真实个体的数据，在记忆、态度、判断层面去模拟并代表这个人，比如 Second Me、ELYS。这类分身有的切陪伴，有的切社交；我用的大多在社交场景，但也带点陪伴属性。

AI 社交，本文更多指第三类。一是人和虚拟人交流的陪伴式产品（Character.AI），二是用 AI 辅助人和人匹配交流的社交（交友、dating 软件里的“AI 推荐”），三是人机混杂场景下用来活跃氛围、连接用户和创作者的 AI 工具。

AI+游戏，本文更多指第二种，甚至更窄——在一个平台里用 AI 生成类似“抖音小游戏”的东西。第一种是游戏里用 AI 生成 NPC 那种有反应、自适应的行为来改善体验；第二种是 AI 直接生成（小）游戏，有点 UGC 平台的味道。

AI 互动内容平台，这个其实没有特别权威的定义。大概是“AI 生成轻量作品—集合—社区”的平台，部分共识把它当成 AI+游戏的 UGC 平台。但如果我把分身也放进平台、让大家来玩别人的分身，这算不算一种 AI 互动内容？

四样看着是四个赛道，可我想其中任何一个，都会牵出另外三个。游戏提供玩法，分身是社交的一种实现形式，互动内容平台为 AI 生成的东西提供载体，而社交是这三者背后的部分动因——它是“关系层”。

**一、先从分身说起**

Second Me 提供的是一份“数字身份”资产。可以本地训练，可以自我塑造，可以根据我喂的东西调出一个专属模型，再派一个或多个轻量分身替我在 AI 小镇里聊天、向我主动提问。功能挺全，也比较合我的习惯。

ELYS 更像一个有特制人设的“社交代理”，主打自动化的社媒互动，分身 24 小时替你浏览、点赞、评论、做预筛选。它的反问式 onboarding 做得不错，塑造分身时不是让你单方面喂信息，而是不停反问、往深里挖，有几个问题问得我停下来重新想了想自己。

但用下来有几个有意思的问题。

结构上，分身要喂数据，而一个人的数据大头在 PC 端，文档、聊天记录、工作痕迹；可社交场景偏偏长在移动端。对普通用户来说，数据和使用场景是错位的。

功能上，分身在社交里最常见的用法，是替你做 sourcing、做预聊天，把“该和谁 coffee chat”这件事工程化，去提升匹配的准确率。但这里有个天花板。陈嘉映谈过的“默会知识”（tacit knowledge）——社交直觉、情绪共振、价值观、幽默感、磁场，这些说不清道不明的东西，在人和人能不能聊到一块、能不能建立深度共识里，毛估占了七八成的权重；而简历、学历、兴趣标签、收入、年龄这些能用语言和数据讲清楚的，只占两三成。偏偏分身能建模的，只有后面那两三成。如果分身是为某种业务（比如 sourcing）而设的，它其实更像一个 AI 员工，而不是“你”。

结果上，就算把它当代理员工看，交付也是模糊的。分身就算真帮我“连上”一个人，我也很难从中看到什么能把我留住的东西。社交本身太大太泛；如果当代理用，我要的反而是更细分的东西——LinkedIn 给我工作机会，dating app 给我约会，那分身社交给我什么？

（还有个细节：有的分身社交产品强制你选 MBTI，有的不填会影响功能，有的根本跳不过去。对一个从没完整测过一次 MBTI 的人来说，挺劝退的。）

社交产品的“人格分发”很重要。好的产品，或许不该带着“社交”这副镣铐跳舞。

**二、AI 游戏、内容互动，和平台**

前两天十字路口的播客里有句话很有意思，大意是：对内容产品来说，“可生成”是终点；对游戏和互动来说，“可生成”只是设计的起点。

办那场黑客松的两天，我玩了 30 支队伍的 demo。不少 idea 都挺有趣，但还是那个老问题：怎么把一开始觉得好玩的人留下来？这背后藏着两个问题——创作者怎么被有效激励，用户怎么会上瘾。

进一个 AI+内容互动的平台，用户往往带着一个期待：能给每个人生成千人千面的东西，那一定更好玩。可最强的刺激常常是最大公约数，人比我们以为的更共通。AI 互动产品给的是炫技式的新鲜，不是确定的爽感，恰恰满足不了那个最大公约数。

换个角度，从平台看：不管是分身还是内容互动，获客还是信息流加邀请码，创作者关系还是人设加粉丝，内容还是 feed 里划过去就走的成品，硬件还是手机。AI 只是被塞进这套上一代的结构里。

我们看到的，似乎还是在用旧基建，做新内容。

**三、新的基建？**

B 站大概是互联网时代二次元、鬼畜、弹幕这些高认同感年轻社群养出来的；后来随着规模、留存和商业化的压力，慢慢长成了一个综合性内容平台。小红书生在新消费时代的“种草”和生活方式分享里；但“种草”对注意力的分发方式，加上内容离消费场景太近，它最后走成了流量平台和电商。

一条隐约的路径浮出来：圈层文化入口 → 内容平台 → 流量与商业平台。

AI 时代或许也会在某个时间点长出新平台。但要建一个有“代际迁移”意味的新平台，难度不小。至少按现在的共识，它得回答几个问题：为什么这个平台能装下旧平台装不下的内容？为什么会有一批人从旧平台迁过来？为什么它的入口很难被替代？它有没有产生新的生产机制？有没有重构出新的高频行为？

很多人期待 AI 时代一人一个、甚至好几个分身 Agent。它或许能让人重新想想“我如何塑造我自己”，也或许能把人的一部分能力、时间和表达外包出去。但比起急着造分身，我们可能更缺的是新的基建。

第一层是新的组织机制。不是新功能，而是把“获客、创作者关系、内容形式”重新组织一遍的那套东西。门户时代靠网址导航和搜索，移动时代靠算法推荐；博客靠订阅，公众号靠私域，直播靠打赏。

那 AI 时代真正值得期待的机制是什么？又该怎么重新定义“创作者”？如果内容能被大规模生成，“生产能力”还指什么？如果 Agent 大量替人表达，“创作者”还只是今天这个“内容创作者”吗？如果用户不是在“刷内容”，而是在“调用一个人格”，那平台分发的到底是什么？

再往下，是一连串关系：刷到人类的人类、刷到 Agent 的人类、用 Agent 去刷人类或刷 Agent 的人类……这些关系是什么？或者说，这种关系还重要吗？

第二层是新的通用硬件。逻辑很直接：内容长什么样，是被硬件的输入输出方式决定的。PC 互联网的基建里长出了 QQ，移动互联网的基建里长出了微信。AI 时代的原生内容长什么样，取决于下一个随身设备怎么输入、怎么输出——是眼镜、戒指、手环、项链，是现在多半只提供陪伴和情绪价值的智能小宠物，还是某种能随时接收信息、随时干活的终端？

**四、一定得是“某种硬件”吗**

我以前一直觉得，新的通用硬件是个很终局的东西，找到它就等于找到了真理。可在琢磨“通用”之前，大家其实更关注那些有迹可循的垂类智能硬件。最近看到不少有意思的小东西——录音豆、会玩的吉他、能交互的口罩、挖耳勺，都在解决一些小而真实的需求。

它们看起来更“小”，但也可能更“大”。我们想要的，似乎不是一把更锋利的倚天剑、屠龙刀，而是像魔法一样、能从指尖随手发出去的六脉神剑。

**结语**

这只是一些从用户视角出发的零散想法。我平时不太玩游戏，玩过最好玩的“游戏”是植物大战僵尸和 Claude Code；分身偶尔用用；但做内容、上社交网络是真不少。

平台寄托了用户的人格，而内容和流量是平台的重要导向。可当流量变成存量，当内容在“量”上的成本越来越低，人格又该怎么被分发？

---

## 繁體中文

### 刷到的是人，還是 Agent

**前言**

A2A（Agent to Agent）這個詞最近挺熱。我自己很早就對 ToC 的 AI 分身感興趣，從 Second Me、ELYS 一路玩到 Character.AI 和 Tara。玩著玩著發現，比起「人和 Agent」「Agent 和 Agent」這兩種關係，我更好奇另一個問題：當一個平台上同時擠滿大量人類和大量 Agent，人和人之間的關係會變成什麼樣？

4 月底我又給抖音辦了一場 AI+遊戲的黑客松，現場玩了 30 個項目。玩完總覺得，這些東西和分身、社交是相通的，卡住它們的也是同一批問題。

這篇就把它們放一起聊聊，都是從用戶視角出發的零散想法。

**界定概念**

先界定幾個詞，免得各說各話。

AI 分身，本文只指第二種。第一種是可視化數字分身，用神經網絡合成的高擬真虛擬人，重點在還原外形、聲音、表情。第二種是認知/人格分身，用大模型學習一個真實個體的數據，在記憶、態度、判斷層面去模擬並代表這個人，比如 Second Me、ELYS。這類分身有的切陪伴，有的切社交；我用的大多在社交場景，但也帶點陪伴屬性。

AI 社交，本文更多指第三類。一是人和虛擬人交流的陪伴式產品（Character.AI），二是用 AI 輔助人和人匹配交流的社交（交友、dating 軟件裡的「AI 推薦」），三是人機混雜場景下用來活躍氣氛、連接用戶和創作者的 AI 工具。

AI+遊戲，本文更多指第二種，甚至更窄——在一個平台裡用 AI 生成類似「抖音小遊戲」的東西。第一種是遊戲裡用 AI 生成 NPC 那種有反應、自適應的行為來改善體驗；第二種是 AI 直接生成（小）遊戲，有點 UGC 平台的味道。

AI 互動內容平台，這個其實沒有特別權威的定義。大概是「AI 生成輕量作品—集合—社區」的平台，部分共識把它當成 AI+遊戲的 UGC 平台。但如果我把分身也放進平台、讓大家來玩別人的分身，這算不算一種 AI 互動內容？

四樣看著是四個賽道，可我想其中任何一個，都會牽出另外三個。遊戲提供玩法，分身是社交的一種實現形式，互動內容平台為 AI 生成的東西提供載體，而社交是這三者背後的部分動因——它是「關係層」。

**一、先從分身說起**

Second Me 提供的是一份「數字身份」資產。可以本地訓練，可以自我塑造，可以根據我餵的東西調出一個專屬模型，再派一個或多個輕量分身替我在 AI 小鎮裡聊天、向我主動提問。功能挺全，也比較合我的習慣。

ELYS 更像一個有特製人設的「社交代理」，主打自動化的社媒互動，分身 24 小時替你瀏覽、點讚、評論、做預篩選。它的反問式 onboarding 做得不錯，塑造分身時不是讓你單方面餵信息，而是不停反問、往深裡挖，有幾個問題問得我停下來重新想了想自己。

但用下來有幾個有意思的問題。

結構上，分身要餵數據，而一個人的數據大頭在 PC 端，文檔、聊天記錄、工作痕跡；可社交場景偏偏長在移動端。對普通用戶來說，數據和使用場景是錯位的。

功能上，分身在社交裡最常見的用法，是替你做 sourcing、做預聊天，把「該和誰 coffee chat」這件事工程化，去提升匹配的準確率。但這裡有個天花板。陳嘉映談過的「默會知識」（tacit knowledge）——社交直覺、情緒共振、價值觀、幽默感、磁場，這些說不清道不明的東西，在人和人能不能聊到一塊、能不能建立深度共識裡，毛估佔了七八成的權重；而簡歷、學歷、興趣標籤、收入、年齡這些能用語言和數據講清楚的，只佔兩三成。偏偏分身能建模的，只有後面那兩三成。如果分身是為某種業務（比如 sourcing）而設的，它其實更像一個 AI 員工，而不是「你」。

結果上，就算把它當代理員工看，交付也是模糊的。分身就算真幫我「連上」一個人，我也很難從中看到什麼能把我留住的東西。社交本身太大太泛；如果當代理用，我要的反而是更細分的東西——LinkedIn 給我工作機會，dating app 給我約會，那分身社交給我什麼？

（還有個細節：有的分身社交產品強制你選 MBTI，有的不填會影響功能，有的根本跳不過去。對一個從沒完整測過一次 MBTI 的人來說，挺勸退的。）

社交產品的「人格分發」很重要。好的產品，或許不該帶著「社交」這副鐐銬跳舞。

**二、AI 遊戲、內容互動，和平台**

前兩天十字路口的播客裡有句話很有意思，大意是：對內容產品來說，「可生成」是終點；對遊戲和互動來說，「可生成」只是設計的起點。

辦那場黑客松的兩天，我玩了 30 支隊伍的 demo。不少 idea 都挺有趣，但還是那個老問題：怎麼把一開始覺得好玩的人留下來？這背後藏著兩個問題——創作者怎麼被有效激勵，用戶怎麼會上癮。

進一個 AI+內容互動的平台，用戶往往帶著一個期待：能給每個人生成千人千面的東西，那一定更好玩。可最強的刺激常常是最大公約數，人比我們以為的更共通。AI 互動產品給的是炫技式的新鮮，不是確定的爽感，恰恰滿足不了那個最大公約數。

換個角度，從平台看：不管是分身還是內容互動，獲客還是信息流加邀請碼，創作者關係還是人設加粉絲，內容還是 feed 裡劃過去就走的成品，硬件還是手機。AI 只是被塞進這套上一代的結構裡。

我們看到的，似乎還是在用舊基建，做新內容。

**三、新的基建？**

B 站大概是互聯網時代二次元、鬼畜、彈幕這些高認同感年輕社群養出來的；後來隨著規模、留存和商業化的壓力，慢慢長成了一個綜合性內容平台。小紅書生在新消費時代的「種草」和生活方式分享裡；但「種草」對注意力的分發方式，加上內容離消費場景太近，它最後走成了流量平台和電商。

一條隱約的路徑浮出來：圈層文化入口 → 內容平台 → 流量與商業平台。

AI 時代或許也會在某個時間點長出新平台。但要建一個有「代際遷移」意味的新平台，難度不小。至少按現在的共識，它得回答幾個問題：為什麼這個平台能裝下舊平台裝不下的內容？為什麼會有一批人從舊平台遷過來？為什麼它的入口很難被替代？它有沒有產生新的生產機制？有沒有重構出新的高頻行為？

很多人期待 AI 時代一人一個、甚至好幾個分身 Agent。它或許能讓人重新想想「我如何塑造我自己」，也或許能把人的一部分能力、時間和表達外包出去。但比起急著造分身，我們可能更缺的是新的基建。

第一層是新的組織機制。不是新功能，而是把「獲客、創作者關係、內容形式」重新組織一遍的那套東西。門戶時代靠網址導航和搜索，移動時代靠算法推薦；博客靠訂閱，公眾號靠私域，直播靠打賞。

那 AI 時代真正值得期待的機制是什麼？又該怎麼重新定義「創作者」？如果內容能被大規模生成，「生產能力」還指什麼？如果 Agent 大量替人表達，「創作者」還只是今天這個「內容創作者」嗎？如果用戶不是在「刷內容」，而是在「調用一個人格」，那平台分發的到底是什麼？

再往下，是一連串關係：刷到人類的人類、刷到 Agent 的人類、用 Agent 去刷人類或刷 Agent 的人類……這些關係是什麼？或者說，這種關係還重要嗎？

第二層是新的通用硬件。邏輯很直接：內容長什麼樣，是被硬件的輸入輸出方式決定的。PC 互聯網的基建裡長出了 QQ，移動互聯網的基建裡長出了微信。AI 時代的原生內容長什麼樣，取決於下一個隨身設備怎麼輸入、怎麼輸出——是眼鏡、戒指、手環、項鏈，是現在多半只提供陪伴和情緒價值的智能小寵物，還是某種能隨時接收信息、隨時幹活的終端？

**四、一定得是「某種硬件」嗎**

我以前一直覺得，新的通用硬件是個很終局的東西，找到它就等於找到了真理。可在琢磨「通用」之前，大家其實更關注那些有跡可循的垂類智能硬件。最近看到不少有意思的小東西——錄音豆、會玩的吉他、能互動的口罩、挖耳勺，都在解決一些小而真實的需求。

它們看起來更「小」，但也可能更「大」。我們想要的，似乎不是一把更鋒利的倚天劍、屠龍刀，而是像魔法一樣、能從指尖隨手發出去的六脈神劍。

**結語**

這只是一些從用戶視角出發的零散想法。我平時不太玩遊戲，玩過最好玩的「遊戲」是植物大戰殭屍和 Claude Code；分身偶爾用用；但做內容、上社交網絡是真不少。

平台寄託了用戶的人格，而內容和流量是平台的重要導向。可當流量變成存量，當內容在「量」上的成本越來越低，人格又該怎麼被分發？

---

## English

### Are You Scrolling Into People, or Agents?

**Preface**

A2A (Agent to Agent) has been a hot phrase lately. I got into consumer-facing AI clones fairly early, working my way from Second Me and ELYS through to Character.AI and Tara. The more I played with them, the less curious I was about the "human–agent" or "agent–agent" relationships, and the more I found myself asking a different question: when a single platform is packed with both huge numbers of humans and huge numbers of agents, what happens to the relationships *between people*?

At the end of April I also ran an AI-plus-gaming hackathon for Douyin and played through 30 of the projects on site. Afterward I kept feeling that all of this — clones, social, games — was connected, and that the same set of problems was holding all of them back.

So this piece puts them side by side. These are scattered thoughts, all from a user's point of view.

**Defining the terms**

Let me pin down a few words first, so we're not talking past each other.

**AI clone.** This piece means only the second sense. The first is the *visual* digital clone — a high-fidelity virtual human synthesized by neural networks, focused on reproducing your appearance, voice, and expressions. The second is the *cognitive / personality* clone — a generative agent that learns a real individual's data and simulates and represents that person at the level of memory, attitude, and judgment, like Second Me or ELYS. Some of these clones target companionship, some target social use; the ones I use are mostly social, though they carry a bit of companionship too.

**AI social.** This piece mostly means the third kind. One: companionship products where you talk to a virtual being (Character.AI). Two: AI-assisted social, where AI helps match and connect people (the "AI recommendations" in dating and friend-finding apps). Three: AI tools in mixed human-and-machine settings, used to liven up the atmosphere and connect users with creators.

**AI + gaming.** This piece mostly means the second sense, and an even narrower one — using AI inside a platform to generate something like a "Douyin mini-game." The first sense is using AI in a game to give NPCs responsive, adaptive behavior that improves the experience; the second is AI directly generating (mini-)games, with the flavor of a UGC platform.

**AI interactive-content platform.** This one doesn't really have an authoritative definition yet. Roughly, it's an "AI generates lightweight works → aggregation → community" platform; one common read treats it as the UGC platform for AI + gaming. But if I also put clones onto a platform and let people play with each other's clones — does that count as a kind of AI interactive content too?

The four look like four separate races, but whenever I think about one, it pulls in the other three. Games supply the gameplay; the clone is one way social gets implemented; the interactive-content platform is the vehicle for the things AI generates; and social is part of what drives all three — it's the "relationship layer."

**1. Starting with clones**

Second Me gives you a "digital identity" asset. You can train it locally, shape it yourself, tune up a dedicated model from whatever you feed it, then dispatch one or several lightweight clones to chat for you in an "AI town" and to ask you questions on their own. It's quite full-featured, and it fits my habits reasonably well.

ELYS is more like a "social agent" with a custom-built persona, centered on automated social-media activity — a clone that browses, likes, comments, and pre-screens for you 24 hours a day. Its interrogative onboarding is well done: instead of letting you feed it information one-way, it keeps asking questions and digging deeper, and a few of those questions made me stop and rethink myself.

But after using them, a few interesting problems show up.

Structurally: a clone needs data fed into it, and the bulk of a person's data lives on the PC side — documents, chat logs, traces of work — yet social scenarios happen to live on mobile. For an ordinary user, the data and the use case are misaligned.

Functionally: the most common way to use a clone in social settings is to have it do sourcing and pre-chat for you, engineering the question of "who should I grab a coffee chat with" to improve match accuracy. But there's a ceiling here. The "tacit knowledge" that Chen Jiaying has discussed — social intuition, emotional resonance, values, a sense of humor, chemistry, the things you can't quite put into words — probably accounts for seventy to eighty percent of the weight in whether two people actually click and whether they can build deep common ground (a rough estimate); while the things you *can* state clearly in words and data — résumé, education, interest tags, income, age — make up only twenty or thirty. And those last twenty or thirty percent are exactly the only part a clone can model. If a clone is set up to run some kind of business for you (sourcing, say), it's really more like an AI employee than like "you."

In terms of outcomes: even taken as a proxy employee, the delivery is fuzzy. Even if a clone really does "connect" me with someone, I struggle to see anything in it that would keep me around. Social is itself too big and too diffuse; if I'm using it as a proxy, what I actually want is something more specific — LinkedIn gives me job opportunities, a dating app gives me dates, so what does clone-based social give me?

(One more detail: some clone-based social products force you to pick an MBTI type; for some, skipping it hurts the experience; some won't let you skip it at all. For someone who has never once sat through a full MBTI test, that's pretty off-putting.)

"Personality distribution" matters a lot for a social product. A good product, maybe, shouldn't have to dance in the shackles of "social."

**2. AI gaming, interactive content, and platforms**

A couple of days ago there was a line on the *Crossroads* podcast I found really interesting, roughly: for content products, "generatable" is the finish line; but for games and interaction, "generatable" is only the starting line of design.

Over the two days of that hackathon, I played 30 teams' demos. Plenty of the ideas were fun, but it always came back to that old, plain question: how do you keep the people who found it fun at first? Behind it sit two more questions — how do you effectively reward creators, and how do users get hooked.

When a user enters an AI-plus-interactive-content platform, they often arrive with an expectation: if it can generate something tailored to each individual, surely that's more fun. But the strongest stimulation is often the common denominator — people are more alike than we assume. What AI interactive products deliver is show-off novelty, not a reliable payoff, and that's exactly what fails to satisfy that common denominator.

From another angle, from the platform's side: whether it's clones or interactive content, user acquisition is still the algorithmic feed plus invite codes; the creator relationship is still persona plus followers; the content is still a finished product you scroll past in a feed; the hardware is still the phone. AI has just been stuffed into this last-generation structure.

What we're seeing, it seems, is still new content built on old infrastructure.

**3. New infrastructure?**

Bilibili probably grew out of the internet era's ACG, *guichu* remix, and danmaku cultures — young communities with a strong sense of belonging; later, under the pressure of scale, retention, and monetization, it slowly grew into a general-purpose content platform. Xiaohongshu was born from the new-consumption era's "seeding" culture and the urge to share lifestyles; but the way "seeding" distributes attention, plus how close its content sits to the point of purchase, meant it ended up as a traffic platform and an e-commerce one.

A faint path surfaces: subculture entry point → content platform → traffic-and-commerce platform.

In the AI era a new platform may well grow at some point. But building a new platform with a real "generational shift" quality to it is no small feat. By today's consensus, at minimum it has to answer a few questions: why can this platform hold content the old ones can't? Why would a batch of people migrate over from the old platforms? Why is its entry point hard to replace? Has it produced a new mechanism of production? Has it reconstructed a new high-frequency behavior?

A lot of people expect that in the AI era everyone will have one — or several — clone agents. It might let people rethink "how do I shape myself," and it might let people outsource part of their abilities, time, and expression. But rather than rushing to manufacture "clones," what we may be lacking more is new infrastructure.

The first layer is a new organizing mechanism. Not a new feature, but the whole system that reorganizes "user acquisition, creator relationships, and content forms." The portal era ran on web directories and search; the mobile era leaned on algorithmic recommendation; blogs ran on subscriptions, official accounts on the "private domain," livestreaming on tipping.

So what's the mechanism actually worth anticipating in the AI era? And how should we redefine "creator"? If content can be generated at scale, what does "productive capacity" even refer to? If agents do a lot of the expressing for people, is "creator" still just today's "content creator"? If a user isn't "scrolling content" but "calling up a personality," then what is the platform actually distributing?

And further down, a whole chain of relationships: a human who scrolls into a human, a human who scrolls into an agent, a human who uses an agent to scroll into humans or into agents… what are these relationships? Or rather — do these relationships still matter?

The second layer is new general-purpose hardware. The logic is direct: what content looks like is determined by the input and output of the hardware. QQ grew out of the infrastructure of the PC internet; WeChat grew out of the infrastructure of the mobile internet. What AI-native content looks like depends on how the next wearable device takes input and gives output — glasses, a ring, a wristband, a necklace; the smart little pet that today mostly just offers companionship and emotional value; or some terminal that can take in information and get work done at any moment?

**4. Does it have to be "some piece of hardware"?**

I used to think new general-purpose hardware was a very endgame thing — find it and you've found the truth. But before chasing "general-purpose," people are actually paying more attention to vertical smart-hardware, where the path is clearer. Lately I've seen plenty of interesting little things — a quirky voice recorder, a playable guitar, an interactive face mask, an ear-pick — all solving small but real needs.

They look "smaller," but they might also be "bigger." What we want, it seems, isn't a sharper legendary blade; it's something more like magic you can loose from your fingertips.

**Closing**

These are just scattered thoughts from a user's point of view. I don't play games much; the most fun "games" I've played are Plants vs. Zombies and Claude Code. I use clones now and then. But making content and being on social networks — that I do a lot of.

A platform holds the personhood that users entrust to it, and content and traffic are a major orientation for the platform. But when traffic turns into a fixed stock, and when the cost of producing content — in sheer quantity — keeps dropping, how, then, should personhood be distributed?
