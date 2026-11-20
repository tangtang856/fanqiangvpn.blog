# fanqiangvpn.blog · 2026专业中文机场与VPN评测资讯系统

专为 **Bing SEO** 与极速性能优化设计的中文机场与VPN推荐、横向评测与全平台客户端教程门户。

- **正式域名**：`https://fanqiangvpn.blog`
- **主攻关键词**：`机场推荐` `机场节点` `性价比机场` `梯子推荐` `vpn` `vpn机场` `vpn节点` `vpn推荐`
- **核心架构**：纯静态 HTML + 原生原生 CSS + Vanilla JS（秒开级加载，本地 `file://` 双击无损浏览，零重型框架依赖）

---

## ⚡ 特性亮点

1. **秒开级纯原生体验**：
   - 彻底摒弃冗长臃肿的前端框架与运行库，整站纯原生 HTML/CSS/JS 构建，加载耗时低至数十毫秒。
   - 所有 CSS、JS、图片及站内页面跳转严格遵循**标准相对路径**（如 `css/style.css`、`../../ranking/value/index.html`），绝无以 `/` 开头的根绝对路径，不仅在线上完美运行，在本地直接双击（`file://` 协议）也能顺畅跳转。

2. **严谨的统一机场数据库 (`src/data/airports.js`)**：
   - 统一维护机场套餐、节点线路、协议、流媒体与 AI 支持。
   - 自动化测算单 GB 真实使用成本，杜绝虚假倍率与营销吹捧。

3. **Bing 技术 SEO 全套支持**：
   - 全站 50 个核心页面均具备独立 Title、Meta Description、规范 Canonical URL、唯一 H1 与 Schema.org JSON-LD 结构化数据。
   - 自动生成符合标准的 `sitemap.xml` 与 `robots.txt`。
   - 完整支持 **IndexNow 协议**（配置验证密钥 `e89f53c82d414a93864a78cb69420b91.txt`），提供命令行一键推送。

4. **自动化质量验收体系**：
   - `npm run audit`：全站 SEO 元数据与相对路径规范审计。
   - `npm run check-links`：遍历检查 2,700+ 处站内相对链接，确保 0 死链。
   - `npm run validate`：数据库完整性与真实性核验。

---

## 🛠 常用命令

```bash
# 生成全站静态 HTML 并执行双重自动化 QA 审计
npm run build

# 单独重新生成页面
npm run generate

# 运行全站 SEO 审计
npm run audit

# 检查站内相对链接有效性
npm run check-links

# 校验数据库与关键词映射完整性
npm run validate

# 向 Bing 搜索引擎提交 IndexNow 更新推送
npm run indexnow
# 提交全站所有 URL：
npm run indexnow -- --all
```

---

## 🚀 部署指南 (Cloudflare Pages)

1. 将代码推送到 GitHub 远程仓库 `https://github.com/tangtang856/fanqiangvpn.blog`。
2. 登录 Cloudflare 控制台，进入 **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**。
3. 选择 `fanqiangvpn.blog` 仓库：
   - **Framework preset**：`None`
   - **Build command**：`npm run build`
   - **Build output directory**：`.`（根目录）
4. 保存并部署。在 **Custom domains** 中添加 `fanqiangvpn.blog` 即可完成正式上线。
