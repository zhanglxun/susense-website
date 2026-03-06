# CLAUDE.md — 速睿森视官网重构项目

> 项目接手时间：2026年3月
> 目标：将一个2020年代外包公司官网，升级为2025年以AI应用+咨询为主的专业服务公司形象。

---

## 一、项目技术基本信息

- **技术栈**：纯静态 HTML/CSS/JS（Bootstrap 4.3.1 + jQuery）
- **公共模板**：`header.html` / `footer.html` — 通过 `assets/js/layout.js` 注入
- **本地服务**：`python -m http.server 8000` 或 `npx serve .`
- **ICP备案**：粤ICP备19105210号
- **联系电话**：13266680807

---

## 二、现有页面清单（诊断时）

| 文件 | 当前定位 | 状态 |
|---|---|---|
| `index.html` | 首页"领先的企业数字化建设者" | ⚠️ 内容严重过时 |
| `about.html` | 关于我们（旧介绍） | ⚠️ 需全面更新 |
| `contact.html` | 联系我们 | ✅ 保留，内容可更新 |
| `news.html` | 客户案例 | ⚠️ 保留但需重新定位 |
| `case-business.html` | 业务中台 | ❌ 旧定位，待评估 |
| `case-data.html` | 数据中台 | ❌ 旧定位，待评估 |
| `case-ai.html` | AI中台 | ❌ 旧定位，待评估 |
| `case-tech.html` | 基础技术平台 | ❌ 旧定位，待评估 |
| `case-devops.html` | 研发效能平台 | ❌ 旧定位，待评估 |
| `solution1.html` | 电商零售方案 | ❌ 旧行业方案 |
| `solution2.html` | 珠宝分销方案 | ❌ 旧行业方案 |
| `solution9.html` | 未知 | ❓ 待核实 |
| `tech-doc.html` | 技术文档 | ❓ 定位不明 |
| `product-tempoflow.html` | TempoFlow 穿戴设备产品页 | ❓ 与主业务关联待确认 |
| `solution-digitalloom.html` | 数字织机ERP | ✅ 保留，行业产品案例 |
| `job.html` | 招聘（Landkit模板） | ❌ 废弃模板页 |
| `rental.html` | 租赁（Landkit模板） | ❌ 废弃模板页 |
| `cloud.html` | 云服务（Landkit模板） | ❌ 废弃模板页 |
| `coworking.html` | 联合办公（Landkit模板） | ❌ 废弃模板页 |
| `verification.html` | 未知用途 | ❓ 待核实 |

---

## 三、当前问题诊断（P0级别——最严重）

### 3.1 内容与定位严重错位（核心问题）

- **首页标题**："领先的企业数字化建设者 / 提供企业数字化业务全栈智能平台" → 2020年代中台热词，已完全脱离2025年市场语境
- **导航结构**：分为"企业中台"（业务/数据/AI）+"研发平台"（DevOps/Tech），是典型的互联网大厂技术产品公司定位，与咨询服务公司不符
- **解决方案**：电商零售/珠宝分销/智慧制造，这些行业垂直案例可作为历史项目，但不应是一级导航
- **关于我们**：强调"容器云、大数据技术及深度学习技术"等技术堆砌，而非战略咨询/体验设计/AI应用能力

### 3.2 死链（导航/页脚有多个指向不存在页面的链接）

| 链接 | 来源 | 问题 |
|---|---|---|
| `blog-post.html` | header.html 导航 | 文件不存在 |
| `blog-showcase.html` | header.html 导航 | 文件不存在 |
| `solution3.html` | header.html + footer.html | 文件不存在 |
| `overview.html` | index.html 内 | 文件不存在 |
| `log.html` | footer.html | 文件不存在 |
| 登录按钮 `href=""` | header.html | 无目标地址 |

### 3.3 废弃页面占用空间

- `job.html`, `rental.html`, `cloud.html`, `coworking.html` — Landkit 购买模板的演示页，与业务完全无关
- 部分页面引用了 `theme.min2.css`，该文件不存在

### 3.4 页脚社交媒体不适配

- 目前展示 Facebook / Instagram / Twitter / Pinterest 图标，指向 `#!`（空链接）
- 国内B2B咨询公司更合适的平台：微信公众号、微信联系、LinkedIn（如有出海业务）

### 3.5 品牌展示缺失

- `header.html` 中 LOGO 图片被注释掉（`<!-- <img src="assets/img/brand-su.svg"> -->`）
- 导航中没有显示品牌标识

---

## 四、新业务方向定位（2025年转型）

### 公司核心定位
**以AI应用为核心驱动、咨询为主要切入的专业数字化服务公司**

### 四大业务支柱

| # | 业务线 | 关键词 | 目标客户 |
|---|---|---|---|
| 1 | **数字化咨询服务** | 转型规划、信息系统建设顾问、战略咨询 | 中小企业主、管理层 |
| 2 | **软件系统设计开发** | 定制系统、小程序、移动端、全栈开发 | 有研发需求的企业 |
| 3 | **用户体验设计（UX/UI）** | APP体验优化、产品设计、界面设计 | 有产品的科技/金融公司 |
| 4 | **AI系统应用开发与咨询** | Agent开发、RAG、企业AI落地、AI培训 | 想应用AI的企业 |

### 产品与案例资产

| 产品/案例 | 性质 | 建议处理 |
|---|---|---|
| **数字织机**（服装制造ERP） | 行业垂直产品案例 | 保留，独立案例页 |
| **青少年认知专注力训练系统** | 行业垂直产品案例 | 保留，需补充页面 |
| **TempoFlow** | 待确认（穿戴设备概念？） | 需澄清是否是公司产品 |
| **TempoSnap** | 待确认（AI图片概念？） | 需澄清是否是公司产品 |

---

## 五、网站改造方案（等待确认后执行）

### 5.1 新导航结构（建议）

```
首页
服务
  ├── 数字化咨询
  ├── 软件开发
  ├── 用户体验设计（UX/UI）
  └── AI 应用开发
案例
  ├── 行业解决方案（数字织机、教育系统等）
  └── 服务案例（按业务线分类）
关于我们
联系我们
```

### 5.2 页面改造优先级

**P0 - 必须做（核心转型）**
- [ ] `index.html` — 重写首页，新定位+新价值主张+新Hero
- [ ] `header.html` / `footer.html` — 重建导航结构，修复所有死链
- [ ] `about.html` — 重写关于页，体现转型故事+团队优势
- [ ] 修复LOGO（取消注释，确认SVG路径正确）

**P1 - 需要做（内容填充）**
- [ ] 新增"服务介绍"页（4大业务，可分页或合并一页）
- [ ] `news.html` → 重新定位为"客户案例/合作案例"
- [ ] 保留`solution-digitalloom.html`，完善数字织机内容
- [ ] 新增教育系统案例页

**P2 - 优化项（形象提升）**
- [ ] 修复页脚社交链接（换成微信/LinkedIn等适合的平台）
- [ ] 添加合适的meta description和OG标签
- [ ] 清理废弃页面（job/rental/cloud/coworking）
- [ ] 图片懒加载优化

### 5.3 首页新价值主张（建议方向）

```
Hero标题候选：
- "让AI成为你企业最聪明的员工"
- "从战略咨询到AI落地，全程陪你跑"
- "专注企业AI应用，从规划到交付"

副标题：
为中小企业提供 AI 应用咨询、软件系统开发和用户体验设计服务。
把复杂的技术问题，变成可以落地的业务价值。
```

---

## 六、待确认问题（执行前需要明确）

在正式动手前，需要你回答以下问题：

### Q1: TempoFlow 和 TempoSnap 的定位是什么？
- 选项A：这是速睿森视自有产品，需要在官网展示
- 选项B：这是概念/探索性产品，暂时不对外展示
- 选项C：这是帮客户做的案例，作为案例展示即可

### Q2: 旧的"中台"相关案例页怎么处理？
- `case-business.html`, `case-data.html`, `case-ai.html`, `case-tech.html`, `case-devops.html`
- 选项A：彻底删除，内容过时
- 选项B：保留但重新包装成服务案例
- 选项C：合并成一个"历史案例"页

### Q3: 出海/香港方向的业务是否需要在官网体现？
- `data/website.md` 提到"APP体验优化面向香港金融行业"、"内容运营出海"
- 是否需要英文版或专门模块？

### Q4: 网站是否需要联系表单/在线咨询？
- 目前`contact.html`只展示联系方式，没有表单
- 咨询公司通常需要"留资"功能

### Q5: 品牌LOGO和颜色
- 目前`brand-su.svg`存在，是否是最新版本？
- 主色调：目前是蓝色（`#335EEA`），是否保留？

---

## 七、技术维护规范

### 修改导航
必须同步修改：
1. `header.html` — 直接文件
2. `assets/js/layout.js` — 内联模板（两处要同步！）

### 新增页面
```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="[唯一描述，50-160字]">
  <link rel="stylesheet" href="assets/fonts/Feather/feather.css">
  <link rel="stylesheet" href="assets/libs/aos/dist/aos.css">
  <link rel="stylesheet" href="assets/css/theme.min.css">
  <title>[页面标题] - 速睿森视</title>
</head>
<body>
  <nav id="header" class="navbar navbar-expand-lg navbar-light bg-white border-bottom"></nav>
  <!-- 页面内容 -->
  <footer id="footer" class="py-8 py-md-11 bg-dark"></footer>
  <!-- 脚本 -->
  <script src="assets/libs/jquery/dist/jquery.min.js"></script>
  <script src="assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/libs/aos/dist/aos.js"></script>
  <script src="assets/js/theme.min.js"></script>
  <script src="assets/js/layout.js"></script>
</body>
</html>
```

### 本地测试
```bash
python -m http.server 8000
# 访问 http://localhost:8000
```
