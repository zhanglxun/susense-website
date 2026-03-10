# CLAUDE.md — 速睿森视官网项目

> 最后更新：2026年3月
> 定位：以AI应用为核心驱动、咨询为主要切入的专业数字化服务公司

---

## 一、项目技术信息

- **技术栈**：纯静态 HTML/CSS/JS（Bootstrap 4.3.1 + jQuery）
- **公共模板**：通过 `assets/js/layout.js` 注入 header 和 footer
- **本地服务**：`python -m http.server 8000`
- **ICP备案**：粤ICP备19105210号
- **联系电话**：13266680807

---

## 二、当前导航结构

```
首页
服务与方案（左右两栏下拉，卡片式）
  ├── 左栏：服务
  │   ├── 软件系统开发 — 企业级系统定制开发
  │   ├── 产品体验设计 — APP与产品体验优化
  │   └── AI 赋能服务 — AI培训与Agent落地
  └── 右栏：方案
      ├── 医疗健康 — 健康管理与数字疗法
      ├── 智能制造 — 生产数字化转型
      └── 注意力培训 — 青少年认知能力训练
产品系列
  └── 数智织机 — 中小服装制造数字化产品
客户案例 → news.html
关于我们 → about.html
[联系我们] → contact.html（右侧按钮）
```

---

## 三、页脚结构

| 栏目 | 内容 |
|------|------|
| 品牌 | Logo + 联系电话 + 备案号 |
| 服务 | 软件系统开发、产品体验设计、AI 赋能服务 |
| 方案 | 医疗健康、智能制造、注意力培训 |
| 产品与案例 | 数智织机、客户案例 |
| 关于我们 | 公司介绍、联系我们 |

---

## 四、核心业务定位

### 三大服务
1. **软件系统开发** — 企业级系统定制开发、小程序、移动端应用
2. **产品体验设计** — APP体验优化、产品设计、界面设计
3. **AI 赋能服务** — Claude Code/OpenClaw培训、Agent开发、私有化部署

### 三大行业方案
1. **医疗健康** — 健康管理系统、数字疗法
2. **智能制造** — 生产数字化转型（含数智织机ERP）
3. **注意力培训** — 青少年认知专注力训练系统

### 产品
- **数智织机** — 中小服装制造数字化ERP产品（solution-digitalloom.html）

---

## 五、页面清单

| 文件 | 定位 | 状态 |
|------|------|------|
| `index.html` | 首页 | ✅ 已更新 |
| `about.html` | 关于我们 | ⚠️ 待更新 |
| `contact.html` | 联系我们 | ✅ 保留 |
| `news.html` | 客户案例 | ⚠️ 待完善 |
| `solution-digitalloom.html` | 数智织机产品页 | ✅ 保留 |

### 待清理页面（旧定位，可删除）
- `case-business.html`, `case-data.html`, `case-ai.html`, `case-tech.html`, `case-devops.html`
- `solution1.html`, `solution2.html`, `solution9.html`
- `job.html`, `rental.html`, `cloud.html`, `coworking.html`（模板演示页）

---

## 六、首页内容结构

1. **Hero区** — AI驱动企业提效主题
2. **服务卡片** — 三大服务能力展示
3. **Work Agent** — 帮客户定制工作Agent解决方案
4. **AI培训** — Claude Code/OpenClaw培训与私有化部署
5. **行业深耕** — 医疗健康、智能制造、注意力培训三大场景
6. **系统建设经验** — 50+项目验证的落地能力
7. **客户评价** — 客户案例与反馈
8. **CTA** — 联系咨询入口

---

## 七、技术规范

### 修改导航/页脚
只需修改 `assets/js/layout.js`，headerTemplate 和 footerTemplate 两个常量。

### 新增页面模板
```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="[页面描述]">
  <link rel="stylesheet" href="assets/fonts/Feather/feather.css">
  <link rel="stylesheet" href="assets/libs/aos/dist/aos.css">
  <link rel="stylesheet" href="assets/css/theme.min.css">
  <title>[页面标题] - 速睿森视</title>
</head>
<body>
  <nav id="header" class="navbar navbar-expand-lg navbar-light bg-white border-bottom"></nav>
  <!-- 页面内容 -->
  <footer id="footer" class="py-8 py-md-11 bg-dark"></footer>
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
