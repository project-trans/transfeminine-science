---
title: 翻译指南
description: 为符合原站文章的高标准，并为所有新译文提供一个统一、可重复的指引，特此列出翻译应当注意的要素。
weight: 1
---

为符合原站文章的高标准，并为所有新译文提供一个统一、可重复的指引，特此列出翻译应当注意的要素。其中许多也适用于本站以外的其它翻译要求。

最后更新：2023 年 2 月 28 日

## 一、基本要求 {#concepts}

1. **如实、准确传达原文内容。**
1. 在“如实传达”的基础上，尽量做到“**信达雅**”。
1. 如以 Markdown 文档的形式投稿，电脑必须已安装 [Hugo](https://gohugo.io)，以便检查格式。

## 二、细则 {#rules}

1. 用语简练，行文通顺，消除语病。尽量避免口语化的叙述。可以参考中文医学文献，了解如何遣词排句。
1. 除“参考文献”（References）一节外，正文内容必须全部翻译。\
  例外：正文中插入的引用文献仅翻译标题，于原标题后括注。
1. 一切医学、统计学等术语应在全站——或*至少* 在同一文章内——有一致、准确的译名。一般绝大多数术语可通过在线词典查询到中文意义，如遇难以检索者，可参考现有译文的解释（另见[附录二]({{< ref "#indefinitive-words" >}})），或尝试搜索“统计学 SD”等。
1. 一切缩写必须在其初次出现时解释其意义，此后可沿用缩写（但可能造成混淆的除外）。此外，极个别疑似缩写（如斜体字 *P* ——统计学的一种概念 P 值）本身就是全称，无需作解释。\
   缩写译名参考见[附录一]({{< ref "#abbreviations" >}})。
1. 某些非术语词汇的原意可能并不常用（如“caveat”，常用意“警告”，一说“问题/疑问”）。翻译时必须留意非术语词汇的常用意是否能使整句通顺，并参考在线词典给出的例句。
1. 人名（如 Tanner）一律不译。机构、企业、组织等名称（含缩写）可酌情翻译。
1. 数字单位一般不译。但有*完整* 英文单词的（如“mg/day”）除外；对此仅翻译其中的*完整* 单词（如译作“mg/天”）。
1. 图片、表格等应有序号，无论原文是否有之。
1. **如以 Markdown 文档的形式投稿**，排版、格式须符合 Markdown 语言规范，且原则上尽量接近原文。此外建议如下：
   - 不建议将链接置于稿件正文内，而应使用“声明式链接”（即正文内链接采用 `[链接][link-tag1]` 的形式，而后将 URL 置于文末：`[link-tag1]: https://www.example.com` ）。
   - 建议为所有在正文内标注引用文献的括注前后分别添加 `<sup>` 和 `</sup>`，使文章更易于阅读。
   - 图片、表格（含附注）上下分别插入 `<section class="box">` 和 `</section>` ，以与正文区分。
   - 图片、表格附注无需使用小号字体，但应为每个序号断行，序号应改为数字（如 `(1)... (2)...` ）。
   - 表格可使用 CSV 格式，在前后分别插入一行 ` ```csv ` 和 ` ``` `。
   - 本站提供了若干链接模板（即 Hugo 的 shortcode 功能），便于站内引用、插入图片等，详见 [Hugo 文档](https://gohugo.io/content-management/shortcodes/)。
1. 未尽事宜可参考 [Bersella AI]({{< ref "about#bersella-ai" >}}) 自行完成的各译文底稿之细节。

## 三、可用资源 {#resources}

- **[有道词典](https://www.youdao.com)**——收录非术语词汇、大多数缩写和医学术语词汇，免费使用。
- **Markdown 格式原文底稿**——节约排版时间，便于翻译。因涉及版权问题，底稿仅限内部使用，可[联系 MtF.wiki 项目组成员]({{< ref "about#contact-translators" >}})取得底稿。\
  作为替代，可以考虑使用 HTML 转换为 Markdown 的工具（搜索 `html to markdown`；[这款](https://www.convertsimple.com/convert-html-to-markdown/)经测试效果不错）。转换前，需要在原网页打开开发者选项（`F12` 键），在“元素”或“查看器”处复制 `<div id="article">` 以内所有 HTML 内容。

## 四、示例 {#practices}

最近一位热心读者 [Aquaticat]({{< ref "about#aquaticat" >}}) 联系到 Wiki 项目组成员，希望参与翻译项目；其通过 [Pull Request #7](https://github.com/mtf-wiki/transfeminine-science/pull/7) 投稿，在项目组的指引下前前后后修正超过 50 处问题。尽管该稿件从质量上不尽人意，但其问题基本上覆盖了翻译中常见的错误，具备一定指导意义。勘误细节参见[附录三]({{< ref "#erratum" >}})。


--------


## 附录一、缩写译名参考 {#abbreviations}

> **注：** 以下译名可能不适用于繁体中文环境。*斜体* 表示该译名*未确定* 。某些缩写后跟小写“s”，是英语复数之意，翻译时去除。

```csv
缩写,译名或暂定译名,备注
**性激素及其衍生物**,,
E,雌激素,
P,孕激素,后跟数字的除外
E2,雌二醇,
T,睾酮,
P4,孕酮,不建议用俗称“黄体酮”
LH,促黄体激素,一说“（促）黄体生成素”
FSH,促卵泡激素,一说“卵泡刺激素”
GnRH,促性腺激素释放激素,
DHT,双氢睾酮,一说“二氢睾酮”
DHEA,*脱氢表雄酮*,一说“去氢表雄酮”
DHEA-S,*硫酸脱氢表雄酮*,一说“硫酸去氢表雄酮”
A4,雄烯二酮,
E1,雌酮,
E3,雌三醇,
AAS,*雄激素/蛋白同化激素*,
**性激素结合靶点**,,
ER,雌激素受体,
AR,雄激素受体,
PR,孕激素受体,
ERE,*雌激素响应元件*,
SHBG,性激素结合球蛋白,
**人工合成类固醇物质**,,
CEE,合成雌激素,
DES,乙烯雌酚,
EB,苯甲酸雌二醇,
EC,环戊丙酸雌二醇,
EE,炔雌醇,
EEn,庚酸雌二醇,
EU,十一酸雌二醇,
EV,戊酸雌二醇,
PEP,*聚磷酸雌二醇*,
SERM,选择性雌激素受体调节剂,
GnRHa,GnRH 类似物,
CMA,醋酸氯地孕酮,
CPA,醋酸环丙孕酮,
DNG,地诺孕素,
DSG,去氧孕烯,
LNG,左炔诺孕酮,
MPA,醋酸甲羟孕酮,
NET,炔诺酮,
NETA,醋酸炔诺酮,
**非类固醇物质**,,
NSAA,非甾体类抗雄激素制剂,
ND,癸酸诺龙,
**疾病**,,
CAIS,完全性雄激素不敏感综合征,
PCOS,多囊卵巢综合征,
VTE,静脉血栓栓塞,
**实验室检测手段**,,
HPLC-MS,高压液相色谱—质谱联用测定法,可略去“测定”，下同
LC-MS,液相色谱—质谱联用测定法,
MS,质谱测定法,
RIA,放射免疫测定法,
*Log P*,*亲脂性*,
**统计学术语**,,**原则上需全部翻译并替换原缩写**
SD,标准差,
S.I.,*国际单位*,法语缩写
95% CI,95% 置信区间,一作“95% 可信区间”
*P*,\-,统计学概念，*P* 越小，结果显著性越高，可不译
μM,微摩尔浓度,即 μmol/L
nM,纳摩尔浓度,即 nmol/L
pM,皮摩尔浓度,即 pmol/L
**药理学术语**,,
C<sub>max</sub>,血药浓度峰值,可略去“血药”，下同
T<sub>max</sub>,血药浓度达峰用时,
C<sub>min</sub>,血药浓度谷值,
C<sub>avg</sub>,血药综合平均浓度,
t<sub>1/2</sub>,*血药消除半衰期*,一作“清除半衰期”
t<sub>90%</sub>,*血药消除 90% 用时*,一作“清除 90% 用时”
AUC<sub>0-∞</sub>,血药曲线下面积,药理学概念，表示药物的生物利用度
```

## 附录二、未确定的术语译名一览 {#indefinitive-words}

若不同文章间出现了相同的未确定翻译，则以其按照顺序中第一次出现的文章计入本表。

see [女性倾向跨性别者的激素治疗简介]({{< ref "transfem-intro" >}})

```csv
英文原词,中文待定翻译
GAH therapy,性别肯定激素治疗
Gender-Affirming Hormone therapy,
Hormonal profile,激素状况
Transfeminine hormone therapy,女性化激素治疗
Transfeminine people,女性倾向跨性别者
```

## 附录三、对 Pull Request #7 的勘误 {#erratum}

> 被翻译的原文参见《[顺性别女性发育期的激素水平](https://transfemscience.org/articles/hormone-levels-female-puberty/)》。

### 原始稿件的勘误

原始稿件全文见此 [commit](https://github.com/mtf-wiki/transfeminine-science/pull/7/commits/e82345084144f8a45438b4da032cd2745c7f9bcd)。

**第 26 行：**

```markdown
这是一组记录了顺性别女性[发育期间]https://zh.wikipedia.org/wiki/%E9%9D%92%E6%98%A5%E6%9C%9F)激素水平变化的数据。
```

细则第 9 条：以 Markdown 文档投稿时，格式须符合 Markdown 语言规范。此处链接缺少必要的左括号 `(`。

**第 29~30 行：**

```markdown
除了无法用下述方式分析的数据，数据已通过[质谱法](https://zh.wikipedia.org/wiki/%E8%B4%A8%E8%B0%B1%E6%B3%95)
等[数据分析技术](https://en.wikipedia.org/wiki/Analytical_technique)筛选。

（原文：Data are limited to those determined with mass spectrometry-based analytic techniques wherever available.）
```

不符合基本要求，不仅遗漏“wherever available”（尽可能），且全句不通顺。如这种情况多次出现，投稿可能会被驳回。

**第 36~38 行：**

```markdown
Esoterix/LabCorp. (2020). Endocrinology Expected Values and S.I. Unit Conversion
Tables. [[PDF](https://web.archive.org/web/20200330030510/https://www.esoterix.com/sites/default/files/L5167-0320-17.pdf)] 
（激素水平的期望值和 S.I. 单位的换算表）：
```

此处属于正文内插入的文献，译者也的确翻译了标题。不过“SI”缩写未被解释；尽管其有多个解释，但结合其后的“单位换算”来看，取法文“国际单位”更合理。

**第 40~51 行的表格：**

```markdown
| 发育阶段   | 年龄段       | 平均值（pg/mL） | 范围（pg/mL） | 平均值（pg/mL） | 范围（pg/mL） |
| 谭纳阶段 1 | <9.2      | 8.0        | 5.0-20    | 13         | 4.0-29    |
```

Tanner（音译：谭纳）为人名，无需翻译。青春期乳房发育的不同阶段是 Tanner 首先提出的，此处引用了其概念。详见：《[青春期乳腺正常发育的Tanner分期及各期的超声表现](https://www.cn-healthcare.com/articlewm/20210912/content-1263306.html)》

**第 53 行：**

```markdown
*图示*：顺性别女性发育期的平均（± 参考范围） 雌二醇和雌酮水平（HPLC-MS/MS）：
```

同样地，缩写首次出现时必须予以解释，下不赘述。为便于理解，加上“以……测定”几个字。

**第 60 行：**

> 图示 X 轴：谭纳阶段和该阶段正中间的年龄。
>
> （原文：Tanner puberty stage and midpoint age）

“正中间的年龄”会给人以“最高值和最低值之间取中间值”的印象，而统计学中这个值很难具备意义。应该将“midpoint”理解为“中位数”，其代表样本群体中第 50% 百分位的值，是常用概念之一。

**第 64~74 行：** 相同的片段不应出现两次。另外，标题翻译遗漏“Sex-specific”（不同性别的），而“late adulthood”应指代晚年——成人在更年期前后处于截然不同的激素状态，不能相提并论。

**第 76 行：**

```markdown
下面的两个图示是经过分析 [Sam](https://transfemscience.org/about/#sam) 的这个研究所绘成的。

（原文：The graphs below were created from analysis of this study by Sam）
```

不符合基本要求，被动句和其中嵌套说明的主从关系被混淆了。从上下文知，“study”不是 Sam 的，而是 64~74 行刚刚提及的研究。经指正，“下图为 Sam 依据以上研究的分析结果所作”被采信。\
由此，必须注意你的英语功底是否能够胜任这类文章的翻译；*光有热爱是不够的* 。

**第 93 行：**

> 运用精密的生物检定法评判顺性别少女少男中雌二醇的分泌和水平：十年间的经验。
>
> （原标题：Estradiol levels and secretory dynamics in normal girls and boys as determined by an ultrasensitive bioassay: a 10 year experience.）

“少男”在现代中文语境中已不再使用。另外 ultrasensitive 不适宜用“精密”表述，“超灵敏”更符合原意。


**第 96 行：**

```markdown
*表格*： 375 个顺性别少女的雌二醇水平（RCBA—精密重组细胞生物检定）：
```

注意量词的选用。除主语“人”之外，衡量人数也用“名”，例如“两个人”“三名儿童”“三个孩子”；“个”偏口语，“名”偏书面。此类文章一般无需用有尊敬意的“位”。

**第 98~104 行的表格行首：**

```markdown
| 发育阶段   | 数据个数（n） | 平均年龄       | 雌二醇平均值（pg/mL） | 雌二醇范围（pg/mL） |
```

注意“n”的意思。一般指统计学中的“样本数”，但“n”本身可以指人数，也可以指采样次数，应当视上下文变通。此处可以视作人数，而在《注射用雌二醇荟萃分析》中要视为“注射人次”。

**第 108~110 行：** 这段引用文献的标题未被翻译。此前已多次提示有遗漏之处。

**第 112 行：**

> *表格*：顺性别女性雌二醇和雌酮的水平
>
> （原文：Estradiol and estrone levels in cisgender girls and women）

原则上不能将“女孩”和“女性”（通常指*成年* 女性）相提并论。不过下方表格内容的确包含了全年龄段的数据，此情况下统称“女性”也是合理的。

**第 129 行：**

> *图示*：顺性别女性雌二醇和雌酮的水平
>
> （原文：Median estradiol and estrone levels around puberty in cisgender girls）

又一遗漏之处。可以发现哪里遗漏了吗？

**第 133 行：**

> 注意：此研究被批评过 （……）。
>
> （原文：It should be noted that this study has been criticized）

“被批评过”是很口语化的说法。宜用偏书面的“质疑”“曾受到……”表述。

有一段引用 Janfaza et al. (2006) 的叙述，本应位于 Madsen et al. (2020) 之前，却被放在 Kushnir et al. (2008) 前面。这种错位可能会对日后的修订、校对制造困难。

**第 142 行：**

> 对于运用超声波胸部测试和血液化验测试检测女性发育期开始时间的参考
>
> （原标题：Hormone references for ultrasound breast staging and endocrine profiling to detect female onset of puberty）

这句译文也很不通顺，“激素参考值”没翻译出来。经指正，暂译为“用于检测女性是否开始青春期的超声波乳腺扫描和内分泌化验的激素参考值”。

**第 187~203 行的表格：**

```markdown
| 成人黄体期 (days 16–28)* | ≤25.6      |
| 停经后                 | ≤0.10      |
| 怀孕第一阶段              | 6.3–45.5   |
```

“Days”也被遗漏了。\
“Pregnancy”可用“怀孕”，不过建议用更正式的“妊娠”。

**第 207 行：**

> 少年男子（1 - 16 岁）的孕酮水平 ≤0.15 ng/mL。

原文并无这个年龄段的男性的定语，不过为便于理解，可以添上。“少年”一般指 7~14 岁；这个年龄段应该称“未成年”，但也可作“男孩”或“16 岁以下”。

**第 257 行：**

> 注意：RIA 技术比基于 MS 的技术准确度低，结果经常偏高。

涉及到有缩写的术语比较时，建议将术语展开为全称，以便理解。

**第 284、307 行：** 均遗漏医学名词的翻译。

**第 319 行：** “Undated”不宜用“无日期”“没有日期”等口语化表达。“未标注日期”比较正式。

**第 324 行：**

> 睾酮的活跃水平和总水平（总水平包括绑定性荷尔蒙的球蛋白），女性或者儿童。
>
> （原标题：Testosterone, Free and Total (Includes Sex Hormone Binding Globulin), Females or Children.）

此译文同样令人不明所以。首先，Sex Hormone-Binding Globulin（SHBG）有一个明确的中文称谓“性激素结合球蛋白”；而“Free”没有“活跃”之意，Free testosterone（游离睾酮）也是明确的内分泌学概念，指血液中未与其它蛋白（含 SHBG）结合的睾酮，可参见《[性激素与 SHBG 的相互作用]({{< ref "shbg" >}})》。\
其次，在原标题本身已非完整段落的情况下（这种情况很常见），翻译时要适当加以修饰，使句意完整。经指正，最终采用“从出生到晚年，女性游离睾酮和总睾酮（含有与血蛋白结合的睾酮）水平的变化”。

### 第一次修订后的勘误

第一次修订后的全文见此 [commit](https://github.com/mtf-wiki/transfeminine-science/pull/7/commits/0165313b48fbe1f34fde34134d48f0b90e67522e)。该版本仍有遗漏之处。

**第 94~96 行表格行首：**

```markdown
|                 | 雌二醇           | 雌酮           |
|-----------------|---------------|--------------|
| 生命阶段或年龄         | 参考范围 (pg/mL)	 | 参考范围 (pg/mL) |
```

可以考虑合并这两行行首。

**第 158~159 行：**

> Biro, F. M., Pinney, S. M., Huang, B., Baker, E. R., Walt Chandler, D., & Dorn, L. D. (2014). Hormone changes in peripubertal girls.
> 发育期前女孩的荷尔蒙变化

注意 `peripubertal` 之前缀的一字之差。`peri-` 前缀是“某个时期当中”的意思；“某个时期前”用 `pre-`，“某个时期后”用 `post-`。

**第 163~164 行：**

> 按照性别和发育期定下了不同的血清雄烯二酮、睾酮、双氢睾酮、雌酮和雌二醇水平的参考范围。
> 以气相色谱-串联质谱法分别对不同性别和是否处于发育期的人的血清雄烯二酮、睾酮、双氢睾酮、雌酮和雌二醇水平进行高灵敏度的定量分析。

**译文只需保留一个版本。** 给读者*做选择* 是很不负责任的，会造成严重困惑。此处 `-specific` 后缀没有“按照……定下”这样的**主观意识**，只是用于按照**客观事实**区分人群类型。

**第 168 行：** “Has estrone sulfate levels in the different Tanner breast stages”实为文章作者的注解，不属于被引用文献的部分，翻译时替换之。

**第 216~218 行：** 遗漏了“years”。

### 第二次修订后的勘误

第二次修订后的全文见此 [commit](https://github.com/mtf-wiki/transfeminine-science/pull/7/commits/09755b3b65eef8eec4717bcb2b5932473660b0e7)。

**第 140~147 行表格：** 数据与原文对应的 Madsen et al. (2020) 所列数据南辕北辙。这提示在手打数据时应仔细校对。\
不过，内部使用的 [Markdown 底稿]({{< ref "#resources" >}})可以避免数据出错。

**第 167 行：**

> 在不同的 Tanner 乳房发育阶段的雌酮水平。

此处是上次修订后要求翻译的第 168 行，仍遗漏了“Has”和“sulfate”。

**第 169~170 行：**

> Bae, Y. J., Zeidler, R., Baber, R., Vogel, M., Wirkner, K., Loeffler, M., … & Kratzsch, J. (2019). Reference intervals of nine steroid hormones over the life-span analyzed by LC-MS/MS: Effect of age, gender, puberty, and oral contraceptives.\
> 探讨年龄，性别，发育期，和口服式避孕药对以 LC-MS/MS 测得的九种类固醇荷尔蒙的参考范围的影响。

此标题的翻译令人不明所以。“以 LC-MS/MS 测得”在整句中属于附加说明，可以括注并置于句末。“荷尔蒙”是较过时的说法，一般用“激素”。经指正，暂译为“一生中人体九种类固醇激素的参考范围（以 LC-MS/MS 测定），以及年龄、性别、青春期和口服避孕药对其的影响”。

**第 223 行：**

> 5 - 17 岁青少年男孩的孕酮水平 ≤0.3 ng/mL。成年男性的孕酮水平 ≤1.2 ng/mL。
>
> （原文：Progesterone levels in males: ≤1.2 ng/mL (age 5–17 years) and ≤0.3 ng/mL (adult).）

数据弄反了，属于不应有的错误。

**第 289~297 行表格：** 对应的是“雄烯二酮水平”表格，注意第 297 行“成人停经前期”的年龄。原表格是 18-40 岁，而非“大于 18”。

**第 301~309 行表格：** 与以上类似，“成人停经前期”的年龄是 18-50 岁，而非“大于 18”。\
以上三处纰漏均提示，**翻译完成后要仔细核对至少一遍**。

**第 339~340 行：**

> 2006). Performance characteristics of a novel tandem mass spectrometry assay for serum testosterone.
> 一种新型的血清睾丸激素串联质谱分析法的性能和特点。

细则第 3 条：同一术语应*至少* 在同一文章内有一致的译名。不能这边用“睾丸激素”，那边用“睾酮”。

