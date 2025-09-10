## 项目优化清单与代办事项（v1）

### 范围与依据
- 基于当前仓库扫描（HTML、assets、libs、公共 `header.html`/`footer.html`）与页面引用分析（远程/本地资源、标题、元信息、结构）。
- 技术约束：保持技术最简（原生 HTML/CSS/JS），公共头尾统一维护，风格为企业官网。

## 一、性能与打开速度
- 优先级建议：P0 高、P1 中、P2 低

### 诊断要点
- 多数页面 CSS/JS 走 `http://image.susense.cn/*` 远程资源，离线/网络不佳会阻塞；存在潜在混合内容与可用性风险。
- `job.html`/`rental.html` 引用 `assets/css/theme.min2.css`（仓库缺失）。
- 图片体积较大（covers/photos/screenshots），未见 `srcset`/`loading=lazy`/WebP/AVIF。
- 多库并行加载（AOS/Jarallax/Flickity/Typed/Highlight/Fancybox 等），未按需拆分；阻塞脚本较多、缺少 `defer/async`。
- 未设置字体加载策略与子集化，可能造成 FOIT/FOUT。

### 待办（P0）
- [ ] P0 资源本地化：将远程 CSS/JS 引用替换为 `assets/libs` 本地路径（确保与本地版本一致）。
- [ ] P0 修复断链：将 `theme.min2.css` 统一替换为 `assets/css/theme.min.css` 或补齐文件（以统一版本为准）。
- [ ] P0 脚本阻塞优化：所有第三方与主题脚本改为 `defer`（无需 `async` 的用 `defer`），仅首屏必要脚本保留同步。
- [ ] P0 图片懒加载：为所有非首屏图片添加 `loading="lazy"`，并为 `<img>` 设置明确 `width/height` 以降低 CLS。
- [ ] P0 链接修复：`index.html` 的 `overview.html` 不存在；导航中的 `blog-post.html`/`blog-showcase.html` 等缺页，需移除或补齐。

### 待办（P1）
- [ ] P1 图片自适应：为核心图片添加 `srcset/sizes`，并补充 WebP/AVIF（保留回退 JPG/PNG）。
- [ ] P1 按需加载库：按页面清单拆分加载 AOS/Jarallax/Flickity/Typed/Highlight/Fancybox，仅在使用页面加载。
- [ ] P1 CSS 优化：去除未使用样式，保留 `theme.min.css`，必要时按页面拆分；为首屏内联关键 CSS（Critical CSS）。
- [ ] P1 字体优化：提供 WOFF2 优先、`font-display: swap`，必要时做字形子集化（Feather/HK Grotesk）。
- [ ] P1 连接优化：对仍需外域的资源添加 `rel="preconnect dns-prefetch"`；首屏关键资源 `preload`。

### 待办（P2）
- [ ] P2 缓存策略：为静态资源（CSS/JS/字体/图片）启用长缓存（文件名加指纹或通过静态服务器配置）。
- [ ] P2 运行时优化：滚动/窗口事件使用 `passive: true`，节流/防抖长任务；AOS/Jarallax 延迟至 `requestIdleCallback`。
- [ ] P2 监控基线：记录 Lighthouse 基准分数与性能预算（TTFB/LCP/CLS/INP）。

## 二、响应与交互（可用性/可访问性）
### 诊断要点
- 动效较多，可能影响低端设备交互延迟；无 `prefers-reduced-motion` 适配。
- 部分图片无 `alt`；交互元素可访问性语义/`aria-*` 未系统梳理。

### 待办
- [ ] P0 交互稳定性：所有媒体设置固定尺寸或比例容器，避免布局抖动（降低 CLS）。
- [ ] P1 辅助功能：为装饰性图片设空 `alt`，关键信息图设描述；补充导航 landmark/`aria-label`。
- [ ] P1 降低动效负担：对 AOS/Jarallax 等在 `prefers-reduced-motion` 下禁用或弱化。
- [ ] P2 键盘无障碍：聚焦样式可见、Tab 顺序合理、跳转到内容（skip link）。

## 三、适配（多终端/多浏览器）
### 诊断要点
- 框架为 Bootstrap，`<meta viewport>` 已设置；`<html lang>` 需从 `en` 统一为 `zh-CN`。

### 待办
- [ ] P0 语言语义：将所有页面 `<html lang="zh-CN">` 统一设置。
- [ ] P1 断点检查：核对常用断点下的导航与页脚排版（溢出/遮挡/可点区域大小）。
- [ ] P1 触控优化：增大移动端点击热区，表单控件原生对齐移动端样式。
- [ ] P2 移动端 Meta：设置 `theme-color`、Apple Touch Icon、favicon，补充 PWA 基础（可选）。

## 四、内容结构与 SEO
### 诊断要点
- 未检测到 `meta description`；标题与层级（H1/H2）需规范；无 sitemap/robots，缺少 OG/Twitter 元数据与结构化数据。

### 待办
- [ ] P0 页面元信息：为每个页面补充唯一 `title` 与 `meta name="description"`（50–160 字）。
- [ ] P1 标题结构：每页仅 1 个 H1，层级语义清晰；面包屑（若有）使用列表语义。
- [ ] P1 社交卡片：添加 Open Graph/Twitter 元数据（标题/描述/缩略图）。
- [ ] P1 站点地图：生成 `sitemap.xml` 与 `robots.txt`，在站点根提供。
- [ ] P2 结构化数据：`Organization`/`Website` JSON-LD（公司名、logo、联系方式）。

## 五、公共区块与信息架构
### 诊断要点
- 页头/页脚通过占位 `#header`/`#footer` 使用公共模板；需统一本地注入与依赖控制。

### 待办
- [ ] P0 统一注入：使用本地脚本装配 `header.html`/`footer.html`（fetch/innerHTML），移除远程依赖注入路径。
- [ ] P0 链接清理：移除或补齐缺失页面入口（`overview.html`、博客系列等）。
- [ ] P1 导航一致性：统一各页面导航/高亮状态、页脚栏目与排序。

## 六、资源与链接完整性
### 待办
- [ ] P0 全站链接扫描：输出 404/跳转列表，逐一修复或替换。
- [ ] P0 资源对账：列出页面→依赖映射表（CSS/JS/字体/图片），去重与按需加载。
- [ ] P1 版权与备案：页脚展示信息统一（电话、备案号、社交链接）。

## 七、质量与基线
### 待办
- [ ] P1 建立测试清单：Chrome/Firefox/Safari/iOS/Android 主流版本截图与关键路径（首页→联系→案例→解决方案）。
- [ ] P2 周期评估：优化前后对比 Lighthouse 指标与核心 Web Vitals 趋势。

## 执行顺序建议（里程碑）
1) 稳定性与断链（P0）：本地化依赖、修复断链/缺页、统一注入 → 保证可用
2) 首屏性能（P0/P1）：脚本 `defer`、图片懒加载/尺寸占位、按需加载库 → 提升打开速度
3) SEO/内容（P0/P1）：补全 `title/description`、OG 卡片、sitemap/robots
4) 适配与可访问性（P1）：断点与交互、无障碍与动效降级
5) 进阶优化（P2）：缓存策略、字体子集、监控与预算

## 验收标准（样例）
- 首页 Lighthouse：Performance ≥ 90，Accessibility ≥ 90，Best Practices ≥ 90，SEO ≥ 90。
- 最大内容绘制 LCP ≤ 2.5s（4G 快速连接），累计位移 CLS ≤ 0.1，交互 INP ≤ 200ms。
- 全站无 404/混合内容；首屏阻塞脚本为 0（第三方均 `defer`/按需）。

## 需要你确认的事项
- 博客/日志相关页面是否保留？若暂不提供，导航是否移除。
- `theme.min2.css` 取舍：统一至 `theme.min.css` 还是新增 `min2` 版本。
- 是否允许添加 WebP/AVIF 与 JSON-LD（均不改变栈，仅静态内容）。


