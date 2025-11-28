# susense网站

## 全局索引（初始化）

### 页面与标题
- `index.html`：深圳市速睿森视科技有限公司
- `about.html`：关于我们
- `news.html`：新闻动态
- `contact.html`：联系我们
- `tech-doc.html`：技术文档
- `case-business.html`：业务中台
- `case-data.html`：数据中台
- `case-ai.html`：AI中台
- `case-devops.html`：研发效能平台
- `case-tech.html`：基础技术平台
- `solution1.html`：零售解决方案
- `solution2.html`：在线分销解决方案
- `solution3.html`：智慧制造解决方案
- `solution9.html`：电商 零售 解决方案
- `cloud.html`：Landkit
- `coworking.html`：Landkit
- `job.html`：Landkit
- `rental.html`：Landkit
- `verification.html`：域名验证文件（非页面）

说明：多数业务相关页面标题已设置；`cloud.html`、`coworking.html`、`job.html`、`rental.html` 为模板示例页标题未定制。

### 公共区块与结构
- 公共头部：`header.html`；各页面包含占位 `nav#header`
- 公共底部：`footer.html`；各页面包含占位 `footer#footer`
- 注入方式：页面存在占位，实际注入可能由 `theme.min.js`（多数页面引用远程版本）完成；需要统一为本地可控方案以便维护

### 静态资源与第三方库
- 字体与图标：
  - `assets/fonts/Feather`（`feather.css`、woff/ttf/svg）
  - `assets/fonts/HK Grotesk Pro`（Regular/Medium）
- 本地库（`assets/libs/`）：
  - `jquery`、`bootstrap`、`flickity`、`flickity-fade`、`aos`、`jarallax`、`smooth-scroll`、`typed.js`、`countup.js`、`highlightjs`、`@fancyapps/fancybox`
- 脚本与主题：
  - 本地：`assets/js/theme.min.js`、`assets/js/mapbox-gl.js`
  - 主题样式：`assets/css/theme.min.css`
- 外部/远程依赖：
  - 多数页面 CSS/JS 指向 `http://image.susense.cn/*`（feather/flickity/aos/jarallax/fancybox/theme.min.css 等）
  - `mapbox-gl.css` 来自 `https://api.mapbox.com/...`

### 图片与多媒体资源
- 主目录：`assets/img/`
  - `icons/`、`illustrations/`、`covers/`、`photos/`、`screenshots/`、`masks/`
- 屏幕截图：`assets/img/screenshots/`（desktop、mobile、landkit 分类）

### 发现的异常与风险
- `job.html`、`rental.html` 引用 `assets/css/theme.min2.css`，但仓库仅有 `assets/css/theme.min.css`（疑似断链）
- `index.html` 按钮链接 `overview.html` 不存在
- `header.html`/`footer.html` 中存在 `blog-post.html`、`blog-showcase.html` 等链接，仓库未提供对应页面
- 绝大多数页面未设置 `meta name="description"`（SEO 待补全）
- 公共头尾的注入依赖远程脚本，离线或网络异常时可能无法渲染

### 初始优化建议（待确认）
- 资源本地化与统一：将 `image.susense.cn` 的依赖切换为 `assets/libs` 本地版本，统一加载路径
- 纠正断链：新增或移除 `theme.min2.css` 的引用；补齐 `overview.html`、博客相关页面或移除导航入口
- SEO 与基础信息：补充每页 `title` 规范化与 `meta description`；设置 `lang="zh-CN"`、OG/Twitter 卡片等
- 公共区块装配：以本地脚本注入或构建时注入替代远程注入，确保一致性与可维护性
- 资源体积与性能：图片压缩、开启懒加载、合并与按需加载脚本；生成 `sitemap.xml` 与 `robots.txt`

### 快速运行
- 这是纯静态站点，直接用浏览器打开 `index.html` 即可预览（建议通过静态服务器以避免部分相对路径/跨域限制）

### 后续更新内容
- 首页
- 解决方案与服务
  - 解决方案
    - 智慧零售 （无人零售的相关方案）
    - 教育培训 （朴慧的方案介绍）
    - 数字化转型 （这个比较宽泛，需要细化到AI agent 的方案介绍）
  - 咨询和服务
    - 数字化咨询服务
    - 系统设计研发
    - 用户体验设计
    - AI应用开发
- 速睿产品系列
  - 智能制造-数字织机
  - 健康管家-toc的个人助理
  - AI agent 代理
- 客户案例
- 关于我们
