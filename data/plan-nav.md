# M1 — 导航 + 页脚改造计划

## 修改文件
- `header.html`
- `footer.html`
- `assets/js/layout.js`（两处要同步！）

## 新导航结构

```
[LOGO]  首页  服务▾  客户案例  关于我们  [联系我们 按钮]

服务下拉：
├── 数字化咨询    → service.html#consulting
├── 软件系统开发  → service.html#development
├── 产品体验设计  → service.html#design
└── AI 应用开发   → service.html#ai
```

## 删除旧结构
- 企业中台 / 研发平台 / 产品支持 / 解决方案 等旧导航项
- 登录按钮 → 改为"联系我们"按钮，链接 contact.html
- 修复 LOGO：取消注释，确认使用 assets/img/brand-su.png

## 新页脚结构（4列）

| 列1 | 列2 | 列3 | 列4 |
|-----|-----|-----|-----|
| LOGO | 服务 | 案例 | 关于 |
| 微信: zhanglixun | 数字化咨询 | 数字织机·蓝沃 | 关于速睿森视 |
| 电话: 132-6668-0807 | 软件系统开发 | 珠宝分销系统 | 联系我们 |
| zhanglixun@susense.cn | 产品体验设计 | 新零售管理平台 | |
| 粤ICP备19105210号 | AI应用开发 | 中银国际App | |

## 删除页脚
- Facebook / Instagram / Twitter / Pinterest 图标

## 状态
- [ ] 待执行
