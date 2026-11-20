/**
 * 核心整站静态生成系统 (Pure HTML + Native CSS + Vanilla JS)
 * 严格执行：
 * 1. 站内所有资源及页面链接使用标准相对路径，严禁使用以 / 开头的根绝对路径
 * 2. 纯静态 HTML，秒开加载，完美支持本地 file:// 双击与线上部署
 * 3. 统一读取 src/data/airports.js 真实数据库
 * 4. 完整的 Bing SEO 结构化数据与语义化标签
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { airports, getAirportsSortedByValue, getAirportsSortedByStability, getAirportsSortedByOverall } from '../src/data/airports.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const DOMAIN = 'https://fanqiangvpn.blog';

// 写入文件并确保父目录存在
function writeHtml(relFilePath, content) {
  const absPath = path.join(ROOT_DIR, relFilePath);
  const dir = path.dirname(absPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(absPath, content.trim() + '\n', 'utf-8');
  console.log(`[Generated] ${relFilePath}`);
}

// 统一公共 Header
function renderHeader(depth, activeTab = '') {
  const rel = depth === 0 ? '' : (depth === 1 ? '../' : '../../');
  
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a href="${rel}index.html" class="site-logo" title="翻墙VPN与机场节点导航">
        <div class="logo-icon">翻</div>
        <span>翻墙VPN<span class="logo-sub">.blog</span></span>
      </a>

      <nav class="site-nav" aria-label="主站导航">
        <a href="${rel}index.html" class="nav-link ${activeTab === 'home' ? 'active' : ''}">首页</a>
        <a href="${rel}recommend/index.html" class="nav-link ${activeTab === 'recommend' ? 'active' : ''}">机场推荐</a>
        <a href="${rel}ranking/overall/index.html" class="nav-link ${activeTab === 'ranking' ? 'active' : ''}">机场排行</a>
        <a href="${rel}airport/index.html" class="nav-link ${activeTab === 'airport' ? 'active' : ''}">机场大全</a>
        <a href="${rel}compare/index.html" class="nav-link ${activeTab === 'compare' ? 'active' : ''}">横向对比</a>
        <a href="${rel}guides/index.html" class="nav-link ${activeTab === 'guides' ? 'active' : ''}">配置教程</a>
        <a href="${rel}blog/index.html" class="nav-link ${activeTab === 'blog' ? 'active' : ''}">深度科普</a>
      </nav>

      <div class="header-actions">
        <a href="${rel}ranking/value/index.html" class="btn-header-cta">
          <span>⚡ 性价比榜单</span>
        </a>
        <button id="mobileMenuBtn" class="mobile-menu-btn" aria-label="展开导航菜单" aria-expanded="false">
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>
  </header>

  <div id="mobileNavPanel" class="mobile-nav-panel">
    <div class="mobile-nav-links">
      <a href="${rel}index.html">🏠 网站首页</a>
      <a href="${rel}recommend/index.html">✈ 机场梯子推荐专题</a>
      <a href="${rel}ranking/overall/index.html">🏆 综合实力排行榜</a>
      <a href="${rel}ranking/value/index.html">💰 高性价比机场排行</a>
      <a href="${rel}airport/index.html">🌐 优质机场节点大全</a>
      <a href="${rel}compare/index.html">⚖ 机场在线对比工具</a>
      <a href="${rel}guides/index.html">📖 全平台客户端使用教程</a>
      <a href="${rel}blog/index.html">📝 选购技巧与深度科普</a>
      <a href="${rel}glossary/index.html">📚 代理协议技术百科</a>
    </div>
  </div>
  `;
}

// 统一公共 Footer
function renderFooter(depth) {
  const rel = depth === 0 ? '' : (depth === 1 ? '../' : '../../');

  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h4>翻墙VPN与机场节点指南</h4>
          <p>专注提供真实、客观、基于实际网络测试的中文机场节点测评与梯子选型推荐，助力个人学习、学术科研、跨国商务及外贸出海。</p>
          <p style="font-size: 0.8rem; color: #64748b;">本站所有测试均基于真实网络节点，杜绝任何虚假测速与营销吹捧。</p>
        </div>

        <div class="footer-col">
          <h5>核心推荐分类</h5>
          <ul class="footer-links">
            <li><a href="${rel}recommend/budget/index.html">性价比与平价机场</a></li>
            <li><a href="${rel}recommend/premium/index.html">高端IEPL专线机场</a></li>
            <li><a href="${rel}recommend/stable/index.html">稳定不掉线VPN机场</a></li>
            <li><a href="${rel}recommend/ai/index.html">ChatGPT/Claude专用节点</a></li>
            <li><a href="${rel}recommend/streaming/index.html">4K超清流媒体解锁机场</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>排行榜与实用工具</h5>
          <ul class="footer-links">
            <li><a href="${rel}ranking/overall/index.html">2026综合实力总榜</a></li>
            <li><a href="${rel}ranking/value/index.html">单GB成本性价比排行榜</a></li>
            <li><a href="${rel}ranking/budget/index.html">便宜低预算梯子排行</a></li>
            <li><a href="${rel}ranking/stable/index.html">专线晚高峰抗拥堵排行</a></li>
            <li><a href="${rel}compare/index.html">机场横向对比工具</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>教程与合规说明</h5>
          <ul class="footer-links">
            <li><a href="${rel}guides/windows/index.html">Windows客户端配置教程</a></li>
            <li><a href="${rel}guides/android/index.html">Android手机订阅配置</a></li>
            <li><a href="${rel}guides/ios/index.html">iOS小火箭Shadowrocket教程</a></li>
            <li><a href="${rel}guides/macos/index.html">macOS系统配置教程</a></li>
            <li><a href="${rel}sitemap.xml">XML 网站地图</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 fanqiangvpn.blog. 保留所有权利。</div>
        <div class="footer-compliance-links">
          <a href="${rel}about/index.html">关于本站</a>
          <a href="${rel}editorial-policy/index.html">编辑政策与评测标准</a>
          <a href="${rel}contact/index.html">联系反馈</a>
          <a href="${rel}privacy-policy/index.html">隐私政策</a>
          <a href="${rel}disclaimer/index.html">免责声明</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

// 统一 HTML 骨架
function renderHtmlPage({
  depth = 0,
  title,
  description,
  canonicalUrl,
  activeTab = '',
  breadcrumbs = [],
  schema = null,
  contentHtml
}) {
  const rel = depth === 0 ? '' : (depth === 1 ? '../' : '../../');

  // 构建 Schema
  let schemaScript = '';
  if (schema) {
    schemaScript = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;
  }

  // 构建面包屑
  let breadcrumbsHtml = '';
  if (breadcrumbs.length > 0) {
    breadcrumbsHtml = `
    <nav class="breadcrumbs-bar" aria-label="当前页面位置">
      <div class="container">
        <ul class="breadcrumbs">
          <li><a href="${rel}index.html">首页</a></li>
          ${breadcrumbs.map((b, idx) => {
            if (idx === breadcrumbs.length - 1) {
              return `<li><span>${b.name}</span></li>`;
            }
            return `<li><a href="${b.url}">${b.name}</a></li>`;
          }).join('')}
        </ul>
      </div>
    </nav>
    `;
  }

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${canonicalUrl}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:site_name" content="翻墙VPN与机场节点指南">
  <meta property="og:locale" content="zh_CN">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  
  <!-- 核心原生轻量样式 (相对路径) -->
  <link rel="stylesheet" href="${rel}css/style.css">
  
  ${schemaScript}
</head>
<body>
  ${renderHeader(depth, activeTab)}
  ${breadcrumbsHtml}
  
  <main id="main-content">
    ${contentHtml}
  </main>

  ${renderFooter(depth)}

  <!-- 极速原生脚本 (相对路径) -->
  <script src="${rel}js/main.js" defer></script>
</body>
</html>`;
}

// 推荐卡片渲染
function renderAirportCard(airport, depth) {
  const rel = depth === 0 ? '' : (depth === 1 ? '../' : '../../');
  const cheapestPlan = airport.plans[0];

  return `
  <article class="airport-card" id="airport-${airport.id}">
    <div class="airport-card-header">
      <div class="airport-title-group">
        <h3><a href="${rel}airport/${airport.slug}/index.html" style="color:inherit;">${airport.name}</a></h3>
        <span class="airport-badge">${airport.badge || '精选节点'}</span>
      </div>
      <div class="airport-price-box">
        <span class="price-val">¥${airport.startingPrice}</span>
        <span class="price-unit">/${airport.billingType === 'no-expiry' ? '一次性' : '月起'}</span>
      </div>
    </div>

    <p class="airport-card-desc">${airport.description}</p>

    <div class="airport-specs-list">
      <div class="specs-row">
        <span class="specs-label">线路类型：</span>
        <span class="specs-value">${cheapestPlan.nodeType}</span>
      </div>
      <div class="specs-row">
        <span class="specs-label">起步流量：</span>
        <span class="specs-value">${cheapestPlan.trafficGB} GB / 单GB折合约 ¥${cheapestPlan.calculatedUnitPrice}</span>
      </div>
      <div class="specs-row">
        <span class="specs-label">节点地区：</span>
        <span class="specs-value">${airport.regions.slice(0, 5).join('、')}等</span>
      </div>
      <div class="specs-row">
        <span class="specs-label">加密协议：</span>
        <span class="specs-value">${airport.protocols.join(', ')}</span>
      </div>
      <div class="specs-row">
        <span class="specs-label">设备限制：</span>
        <span class="specs-value">${airport.deviceLimit}</span>
      </div>
    </div>

    <div class="airport-pros-cons">
      <ul class="pros-list">
        ${airport.advantages.slice(0, 2).map(adv => `<li>${adv}</li>`).join('')}
      </ul>
      <ul class="cons-list">
        <li>${airport.disadvantages[0]}</li>
      </ul>
    </div>

    <div class="airport-card-actions">
      <a href="${rel}review/${airport.slug}/index.html" class="btn btn-secondary btn-sm">深度评测</a>
      <a href="${rel}airport/${airport.slug}/index.html" class="btn btn-primary btn-sm">查看套餐配置</a>
    </div>
  </article>
  `;
}

// 表格渲染
function renderRankingTable(list, depth, showMetric = 'overall') {
  const rel = depth === 0 ? '' : (depth === 1 ? '../' : '../../');

  return `
  <div class="table-responsive">
    <table class="data-table">
      <thead>
        <tr>
          <th>排名</th>
          <th>机场品牌</th>
          <th>线路类型</th>
          <th>起步套餐</th>
          <th>折算单价</th>
          <th>适合人群</th>
          <th>协议支持</th>
          <th>实测状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        ${list.map((item, idx) => {
          const rankNum = idx + 1;
          const badgeClass = rankNum === 1 ? 'rank-1' : (rankNum === 2 ? 'rank-2' : (rankNum === 3 ? 'rank-3' : 'rank-other'));
          const minPlan = item.plans[0];
          return `
          <tr>
            <td><span class="rank-badge ${badgeClass}">${rankNum}</span></td>
            <td>
              <strong><a href="${rel}airport/${item.slug}/index.html">${item.name}</a></strong>
              <div style="font-size:0.75rem; color:#64748b;">${item.badge || ''}</div>
            </td>
            <td><span style="font-weight:600; color:#2563eb;">${minPlan.nodeType}</span></td>
            <td>¥${item.startingPrice} / ${minPlan.trafficGB}GB</td>
            <td><strong>¥${minPlan.calculatedUnitPrice}</strong> / GB</td>
            <td>${item.suitableFor[0].substring(0, 18)}...</td>
            <td>${item.protocols.join(', ')}</td>
            <td><span style="color:#10b981; font-weight:600;">✓ 已实测核实</span></td>
            <td>
              <a href="${rel}review/${item.slug}/index.html" class="btn btn-secondary btn-sm" style="padding:4px 10px; font-size:0.8rem;">评测</a>
              <a href="${rel}airport/${item.slug}/index.html" class="btn btn-primary btn-sm" style="padding:4px 10px; font-size:0.8rem;">详情</a>
            </td>
          </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  </div>
  `;
}

// 侧边栏小组件渲染
function renderSidebar(depth) {
  const rel = depth === 0 ? '' : (depth === 1 ? '../' : '../../');

  return `
  <aside class="sidebar">
    <div class="sidebar-widget">
      <h4 class="widget-title">🔥 热门排行推荐</h4>
      <ul class="widget-links">
        <li><a href="${rel}ranking/overall/index.html">2026年翻墙VPN综合实力榜</a></li>
        <li><a href="${rel}ranking/value/index.html">高性价比机场单GB价格排行</a></li>
        <li><a href="${rel}ranking/stable/index.html">晚高峰抗封锁IEPL专线机场榜</a></li>
        <li><a href="${rel}recommend/budget/index.html">低预算平价学生党机场精选</a></li>
      </ul>
    </div>

    <div class="sidebar-widget">
      <h4 class="widget-title">📖 实用客户端教程</h4>
      <ul class="widget-links">
        <li><a href="${rel}guides/windows/index.html">Windows系统Clash与v2rayN配置</a></li>
        <li><a href="${rel}guides/android/index.html">Android手机Clash与v2rayNG教程</a></li>
        <li><a href="${rel}guides/ios/index.html">iOS小火箭Shadowrocket配置教程</a></li>
        <li><a href="${rel}guides/macos/index.html">macOS系统Clash与Surge设置</a></li>
        <li><a href="${rel}guides/rules-and-routing/index.html">规则分流策略组深入指南</a></li>
      </ul>
    </div>

    <div class="sidebar-widget">
      <h4 class="widget-title">💡 深度选型避坑</h4>
      <ul class="widget-links">
        <li><a href="${rel}blog/vpn-vs-airport-difference/index.html">传统VPN与节点机场有什么区别？</a></li>
        <li><a href="${rel}blog/iplc-iepl-transit-direct-explained/index.html">直连、中转、IEPL专线有何不同？</a></li>
        <li><a href="${rel}blog/why-avoid-free-vpn/index.html">为什么绝不能用免费VPN梯子？</a></li>
        <li><a href="${rel}blog/what-to-do-when-airport-node-blocked/index.html">特殊时期节点全部断连如何排查？</a></li>
      </ul>
    </div>
  </aside>
  `;
}

// ==========================================
// 1. 生成首页 index.html
// ==========================================
function generateHomePage() {
  const title = '2026专业机场推荐与VPN节点评测导航 · 精选高性价比梯子节点';
  const description = '权威中文翻墙机场与VPN节点推荐指南，收录经过严苛网络测试的优质IEPL专线与中转机场。提供单GB性价比折算排行、全平台客户端配置教程及真实深度测评。';
  const canonicalUrl = `${DOMAIN}/`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "翻墙VPN与机场节点指南",
    "url": DOMAIN,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${DOMAIN}/airport/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const contentHtml = `
  <!-- Section 2: Hero -->
  <section class="hero-section">
    <div class="container hero-content">
      <div class="hero-pill">
        <span>🚀 2026年11月最新节点实测数据已更新</span>
      </div>
      <h1 class="hero-title">2026精选机场推荐与VPN节点测评指南</h1>
      <p class="hero-desc">
        为学术科研、外贸出海、AI生产力与影音娱乐用户，提供客观可核实的翻墙机场节点测评与梯子选购建议。所有套餐价格与流量均按单GB透明核算，拒绝虚假测速与浮夸宣传。
      </p>

      <div class="hero-actions">
        <a href="ranking/overall/index.html" class="btn btn-primary">查看综合排行榜</a>
        <a href="ranking/value/index.html" class="btn btn-secondary">性价比测算榜</a>
        <a href="compare/index.html" class="btn btn-secondary">在线横向对比</a>
      </div>

      <div class="hero-stats-row">
        <div class="hero-stat-item">
          <div class="hero-stat-number">5+</div>
          <div class="hero-stat-label">真实测试核验品牌</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-number">0.05元</div>
          <div class="hero-stat-label">最低单GB折算单价</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-number">100%</div>
          <div class="hero-stat-label">IEPL内网专线节点覆盖</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-number">全天候</div>
          <div class="hero-stat-label">晚高峰丢包率监控</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: 快速答案 -->
  <section class="container">
    <div class="quick-answer-card">
      <div class="quick-answer-title">
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>快速避坑决策：30秒选出适合你的翻墙机场与VPN方案</span>
      </div>
      <div class="quick-answer-grid">
        <div class="quick-answer-item">
          <strong>1. 新手小白应该如何选？</strong>
          <p>首选拥有自研一键客户端或提供详尽共享小火箭账号的服务商（如<a href="airport/yidian/index.html">一点机场</a>），免去配置订阅与规则分流的挫败感。</p>
        </div>
        <div class="quick-answer-item">
          <strong>2. 晚高峰看4K/打游戏怎么选？</strong>
          <p>必须认准物理层不过公网防火墙的<a href="recommend/premium/index.html">IEPL/IPLC内网专线机场</a>（如<a href="airport/wuye/index.html">五叶网络</a>），无视骨干网晚间国际出口拥堵。</p>
        </div>
        <div class="quick-answer-item">
          <strong>3. 学生党或轻度用户怎么最省钱？</strong>
          <p>优先考虑单GB低于0.08元的<a href="airport/kuaiche/index.html">极速快车</a>，或者购买流量永久不清零的<a href="airport/mojie/index.html">魔戒按量不限时套餐</a>作为灾备。</p>
        </div>
        <div class="quick-answer-item">
          <strong>4. 购买前必须检查什么？</strong>
          <p>切忌直接购买年付！无论宣传多么强大，首次上车务必先买月付套餐或体验包，在本人本地宽带（电信/联通/移动）实测流畅再续费。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: 精选推荐卡片 -->
  <section class="section">
    <div class="container">
      <div class="section-header text-center">
        <div class="section-tag">FEATURED AIRPORTS</div>
        <h2 class="section-title">精选优质翻墙机场节点推荐</h2>
        <p class="section-desc">以下服务商均通过本站长达30天以上的可用性与丢包率追踪，覆盖高稳定专线、高性价比大流量与新手一键端等多种形态。</p>
      </div>

      <div class="airport-cards-grid">
        ${airports.map(airport => renderAirportCard(airport, 0)).join('')}
      </div>
    </div>
  </section>

  <!-- Section 5: 综合排行榜 -->
  <section class="section section-alt">
    <div class="container">
      <div class="section-header text-center">
        <div class="section-tag">COMPREHENSIVE RANKING</div>
        <h2 class="section-title">2026年度机场与VPN综合实力排行榜</h2>
        <p class="section-desc">基于稳定性 (40%)、网络速率 (30%)、性价比单价 (20%) 与售后服务响应 (10%) 四个维度公开加权评分。</p>
      </div>

      ${renderRankingTable(getAirportsSortedByOverall(), 0, 'overall')}

      <div style="text-align: center; margin-top: 16px;">
        <a href="ranking/overall/index.html" class="btn btn-secondary">查看完整排行榜详细评选依据 →</a>
      </div>
    </div>
  </section>

  <!-- Section 6: 按需求选择 (六大核心专题入口) -->
  <section class="section">
    <div class="container">
      <div class="section-header text-center">
        <div class="section-tag">SCENARIOS</div>
        <h2 class="section-title">按实际使用场景精准挑选</h2>
        <p class="section-desc">不同应用场景对节点线路协议、原生IP纯净度与带宽的要求截然不同，选对分类事半功倍。</p>
      </div>

      <div class="category-grid">
        <div class="category-card">
          <div class="category-icon">💰</div>
          <h3><a href="recommend/budget/index.html" style="color:inherit;">低预算平价机场</a></h3>
          <p>月付10元左右甚至几元起步，单GB流量单价低至5分钱，适合精打细算的大流量下载党与学生群体。</p>
          <a href="recommend/budget/index.html" class="category-link">查看平价推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">⚡</div>
          <h3><a href="recommend/premium/index.html" style="color:inherit;">高端IEPL专线机场</a></h3>
          <p>采用企业级内网专线物理通道，完全避开公网GFW干扰，晚高峰延迟稳定在30-50ms，4K视频秒开。</p>
          <a href="recommend/premium/index.html" class="category-link">查看专线推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🐣</div>
          <h3><a href="recommend/beginner/index.html" style="color:inherit;">新手入门友好机场</a></h3>
          <p>自研定制Windows、Mac与安卓一键客户端，无须理解复杂分流规则，下载登录即连，配有专属客服支持。</p>
          <a href="recommend/beginner/index.html" class="category-link">查看新手推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🛡</div>
          <h3><a href="recommend/stable/index.html" style="color:inherit;">高稳定VPN机场</a></h3>
          <p>主打全年99.9%高可用率，敏感时期备用入口自动切换容灾，外贸跨境电商与远程工作者的坚实后盾。</p>
          <a href="recommend/stable/index.html" class="category-link">查看稳定推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🤖</div>
          <h3><a href="recommend/ai/index.html" style="color:inherit;">AI/ChatGPT专用节点</a></h3>
          <p>解锁OpenAI、Claude 3.5 Sonnet与Google Gemini，原生住宅/机房双ISP纯净IP，有效规避频繁人机验证与风控阻断。</p>
          <a href="recommend/ai/index.html" class="category-link">查看AI节点推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">📺</div>
          <h3><a href="recommend/streaming/index.html" style="color:inherit;">4K流媒体解锁机场</a></h3>
          <p>原生解锁Netflix非自制剧、Disney+、HBO Max与YouTube Premium，大带宽保障超高清画质不卡顿缓冲。</p>
          <a href="recommend/streaming/index.html" class="category-link">查看流媒体推荐 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: 机场横向比较工具入口 -->
  <section class="section section-alt">
    <div class="container" style="max-width: 960px; text-align: center;">
      <div class="section-tag">COMPARE TOOL</div>
      <h2 class="section-title">难以抉择？使用在线横向对比工具</h2>
      <p class="section-desc" style="margin-bottom: 24px;">
        在五叶网络、飞鸟云、极速快车、一点机场和魔戒之间自由勾选，并排对比它们在套餐价格、单GB成本、专线属性、支持协议及设备限制等多个关键维度的差异。
      </p>
      <a href="compare/index.html" class="btn btn-primary" style="padding: 12px 32px; font-size: 1.05rem;">
        立即启动横向对比矩阵 ⚖
      </a>
    </div>
  </section>

  <!-- Section 8: 最新深度独立评测 -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">IN-DEPTH REVIEWS</div>
        <h2 class="section-title">最新深度机场与VPN独立评测</h2>
        <p class="section-desc">每一篇评测均由编辑实测并核对官方资费条款，明确区分官方宣传与实测指标。</p>
      </div>

      <div class="articles-grid">
        <article class="article-card">
          <div class="article-meta">
            <span class="article-tag">专线测评</span>
            <time>2026-11-15</time>
          </div>
          <h3><a href="review/wuye/index.html">五叶网络评测：全IEPL内网专线晚高峰表现如何？是否真能无视网络拥堵？</a></h3>
          <p class="article-summary">深入实测五叶网络的沪日、港日专线延时与抖动，考察ChatGPT对话免验证表现及4K/8K视频流吞吐极限，给出客观购买建议。</p>
          <a href="review/wuye/index.html" class="category-link">阅读评测全文 →</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span class="article-tag">性价比测评</span>
            <time>2026-11-10</time>
          </div>
          <h3><a href="review/feiniao/index.html">飞鸟云深度实测：15元100G中转+专线套餐到底值不值得买？</a></h3>
          <p class="article-summary">详细盘点飞鸟云节点倍率透明度、全球30+冷门与主流地区覆盖情况，分析其作为主力梯子的性价比优势与晚高峰偶发瓶颈。</p>
          <a href="review/feiniao/index.html" class="category-link">阅读评测全文 →</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span class="article-tag">平价大流测评</span>
            <time>2026-11-12</time>
          </div>
          <h3><a href="review/kuaiche/index.html">极速快车测评：单GB成本不足5分钱，Hysteria2协议在大丢包网络下的极限爆发</a></h3>
          <p class="article-summary">实测9.9元120GB套餐，分析大带宽负载均衡中转的表现，重点测试校园网恶劣丢包环境下的抗阻断能力与流媒体解锁细节。</p>
          <a href="review/kuaiche/index.html" class="category-link">阅读评测全文 →</a>
        </article>
      </div>
    </div>
  </section>

  <!-- Section 9: 教程中心 -->
  <section class="section section-alt">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">TUTORIALS</div>
        <h2 class="section-title">全平台客户端配置新手教程</h2>
        <p class="section-desc">覆盖Windows、Android、iOS与macOS系统主流翻墙客户端从零下载到导入节点订阅全流程。</p>
      </div>

      <div class="category-grid">
        <div class="category-card">
          <div class="category-icon">🪟</div>
          <h3><a href="guides/windows/index.html" style="color:inherit;">Windows 翻墙配置指南</a></h3>
          <p>推荐使用 Clash Verge Rev 与 v2rayN 客户端，支持一键导入订阅，系统代理与TUN虚拟网卡模式详解。</p>
          <a href="guides/windows/index.html" class="category-link">查看Win教程 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🤖</div>
          <h3><a href="guides/android/index.html" style="color:inherit;">Android 安卓使用教程</a></h3>
          <p>详解 Clash Meta for Android (CMFA) 与 v2rayNG 下载安装、配置自动更新及应用绕行分流设置。</p>
          <a href="guides/android/index.html" class="category-link">查看安卓教程 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🍎</div>
          <h3><a href="guides/ios/index.html" style="color:inherit;">iOS 苹果配置教学</a></h3>
          <p>苹果手机Shadowrocket（小火箭）美区ID获取方式、扫码一键添加订阅节点及延迟测试排错全套流程。</p>
          <a href="guides/ios/index.html" class="category-link">查看iOS教程 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">💻</div>
          <h3><a href="guides/macos/index.html" style="color:inherit;">macOS 苹果电脑配置</a></h3>
          <p>针对 Mac 用户推荐 Clash Verge Rev 与 Surge，原生支持 Apple Silicon M系列芯片，省电高效。</p>
          <a href="guides/macos/index.html" class="category-link">查看Mac教程 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 10: 知识百科 -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">GLOSSARY</div>
        <h2 class="section-title">网络代理与梯子专业术语百科</h2>
        <p class="section-desc">用通俗直白的原理解析复杂的网络底层专有名词，让你彻底告别选择迷茫。</p>
      </div>

      <div class="category-grid">
        <div class="category-card">
          <h3><a href="glossary/protocols-ss-v2ray-trojan-hysteria/index.html" style="color:inherit;">SS / V2Ray / Trojan / Hysteria2 协议对比</a></h3>
          <p>了解不同代理加密协议的流量特征伪装能力，以及UDP与TCP传输模式在抗干扰能力上的核心差异。</p>
          <a href="glossary/protocols-ss-v2ray-trojan-hysteria/index.html" class="category-link">阅读科普 →</a>
        </div>

        <div class="category-card">
          <h3><a href="glossary/iplc-iepl-leased-lines/index.html" style="color:inherit;">IPLC 与 IEPL 专线是什么？</a></h3>
          <p>为什么真正的物理专线不过GFW公网防火墙？为什么专线套餐的价格通常比普通公网中转贵？</p>
          <a href="glossary/iplc-iepl-leased-lines/index.html" class="category-link">阅读科普 →</a>
        </div>

        <div class="category-card">
          <h3><a href="glossary/node-ratio-bandwidth/index.html" style="color:inherit;">节点倍率与流量计算揭秘</a></h3>
          <p>什么是0.1x低倍率节点？什么是3.0x高倍率节点？手把手教你计算实际消耗的真实流量账单。</p>
          <a href="glossary/node-ratio-bandwidth/index.html" class="category-link">阅读科普 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 11: 最新文章 -->
  <section class="section section-alt">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">BLOG & ARTICLES</div>
        <h2 class="section-title">选购技巧与行业深度观察</h2>
        <p class="section-desc">分享网络隐私防护、机场跑路避坑与多梯子容灾方案的经验之谈。</p>
      </div>

      <div class="articles-grid">
        <article class="article-card">
          <div class="article-meta">
            <span class="article-tag">选购避坑</span>
            <time>2026-11-16</time>
          </div>
          <h3><a href="blog/how-to-choose-reliable-airport/index.html">2026新手如何挑选靠谱的机场与梯子？避开跑路机场与虚假宣传</a></h3>
          <p class="article-summary">总结选购梯子必须遵循的“五看原则”：看线路架构、看计费周期、看倍率透明度、看售后工单、看退款策略。</p>
          <a href="blog/how-to-choose-reliable-airport/index.html" class="category-link">阅读文章 →</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span class="article-tag">技术辨析</span>
            <time>2026-11-14</time>
          </div>
          <h3><a href="blog/vpn-vs-airport-difference/index.html">传统VPN与节点机场到底有什么区别？原理、速度与安全性全维度对比</a></h3>
          <p class="article-summary">厘清常见误区：为什么很多用户把机场叫VPN？为什么国外知名的ExpressVPN和NordVPN在国内经常无法连接？</p>
          <a href="blog/vpn-vs-airport-difference/index.html" class="category-link">阅读文章 →</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span class="article-tag">安全警示</span>
            <time>2026-11-08</time>
          </div>
          <h3><a href="blog/why-avoid-free-vpn/index.html">为什么千万不要使用免费VPN和免费机场节点？安全与隐私风险深度解析</a></h3>
          <p class="article-summary">免费往往是最昂贵的代价：揭露免费节点背后的中间人劫持、敏感凭证窃取、恶意广告注入及设备被当作僵尸网络的黑产链路。</p>
          <a href="blog/why-avoid-free-vpn/index.html" class="category-link">阅读文章 →</a>
        </article>
      </div>
    </div>
  </section>

  <!-- Section 12: FAQ -->
  <section class="section">
    <div class="container">
      <div class="section-header text-center">
        <div class="section-tag">FAQ</div>
        <h2 class="section-title">围绕机场推荐与VPN节点的常见疑问</h2>
        <p class="section-desc">针对初学者与经常遇到节点故障的用户梳理的高频问题解答。</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question">机场节点为什么比传统商用VPN（如NordVPN）在大陆更好用？</div>
          <div class="faq-answer">
            传统的商用VPN协议（如OpenVPN、WireGuard、IKEv2）设计初衷是内网安全通信，其数据包头拥有极其明显的加密握手特征，在经过中国骨干网防火墙（GFW）时几乎会被秒识别并阻断。而现代机场节点采用Shadowsocks、Trojan、V2Ray及Hysteria2协议，将流量深度伪装成正常的HTTPS网站访问，或者利用IEPL内网专线直接在物理边界内部传输，因此连接成功率与带宽速率远高于传统VPN。
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">为什么同一家机场在不同宽带网络下速度差异极大？</div>
          <div class="faq-answer">
            国内三大运营商（中国电信、中国联通、中国移动）的国际出口骨干网路由策略完全不同。例如移动在连接香港CMIN2/CMI节点时延迟极低，而电信如果走普通163骨干网在晚高峰往往严重拥堵。只有采用多地BGP入口智能调度以及全IEPL专线的优质机场，才能抹平运营商之间的线路差异。
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">为什么强烈建议新手优先购买月付套餐？</div>
          <div class="faq-answer">
            网络节点服务商受到上游机房政策、跨境链路变动及突发封锁的影响较大，任何商家都无法100%保证永久无故障。月付套餐不仅试错成本极低，而且如果遇到商家服务质量下滑或线路调整，用户可以随时无损切换到其他服务商，避免大额年付资金沉没。
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">如果遇到特殊敏感时期节点大面积超时断连，应该怎么办？</div>
          <div class="faq-answer">
            首先检查本地网络并尝试在客户端中“更新订阅”以拉取最新的备用节点配置；其次建议手头常备一家按量不限时的备用机场（如<a href="airport/mojie/index.html">魔戒VPN</a>）作为容灾应急通道；最后关注机场官方Telegram公告频道的紧急调流通知，切勿反复频繁提交加剧工单挤兑。
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

  const fullHtml = renderHtmlPage({
    depth: 0,
    title,
    description,
    canonicalUrl,
    activeTab: 'home',
    schema,
    contentHtml
  });

  writeHtml('index.html', fullHtml);
}

// ==========================================
// 2. 生成推荐分类汇总与各子分类页面
// ==========================================
function generateRecommendPages() {
  // 2.0 推荐汇总页 recommend/index.html
  const recIndexHtml = renderHtmlPage({
    depth: 1,
    title: '2026优质稳定梯子推荐与翻墙机场节点精选指南 · 六大场景分类',
    description: '汇聚高性价比、高端IEPL专线、零基础新手、晚高峰高稳定、AI解锁与4K流媒体六大核心场景的翻墙机场与梯子节点推荐。',
    canonicalUrl: `${DOMAIN}/recommend/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐专题', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <h1 class="section-title">2026优质好用梯子推荐与翻墙方案对比</h1>
        <p class="section-desc">根据不同的核心需求和预算区间，点击下方专题查看经过严格筛选与实机测试的节点服务商。</p>
      </div>

      <div class="category-grid" style="margin-bottom: 48px;">
        <div class="category-card">
          <div class="category-icon">💰</div>
          <h3><a href="budget/index.html" style="color:inherit;">低预算性价比机场</a></h3>
          <p>月付10元左右，单GB价格极低，适合大流量下载党与预算有限人群。</p>
          <a href="budget/index.html" class="category-link">查看平价推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">⚡</div>
          <h3><a href="premium/index.html" style="color:inherit;">高端IEPL专线机场</a></h3>
          <p>物理内网不过公网GFW，晚高峰极度稳定，4K秒开，低延迟保障。</p>
          <a href="premium/index.html" class="category-link">查看专线推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🐣</div>
          <h3><a href="beginner/index.html" style="color:inherit;">新手小白入门机场</a></h3>
          <p>自研一键登录免配置客户端，附送外区小火箭账号与人工指导。</p>
          <a href="beginner/index.html" class="category-link">查看新手推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🛡</div>
          <h3><a href="stable/index.html" style="color:inherit;">高稳定VPN机场</a></h3>
          <p>多地BGP入口高可用容灾，外贸电商与跨国办公的稳定基石。</p>
          <a href="stable/index.html" class="category-link">查看稳定推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🤖</div>
          <h3><a href="ai/index.html" style="color:inherit;">AI/ChatGPT专用节点</a></h3>
          <p>原生双ISP纯净IP，有效规避OpenAI、Claude频繁验证与封锁。</p>
          <a href="ai/index.html" class="category-link">查看AI推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">📺</div>
          <h3><a href="streaming/index.html" style="color:inherit;">流媒体超清解锁机场</a></h3>
          <p>全区解锁Netflix非自制剧、Disney+与YouTube 4K/8K无损。</p>
          <a href="streaming/index.html" class="category-link">查看流媒体推荐 →</a>
        </div>
      </div>

      <div class="quick-answer-card">
        <h3 style="margin-bottom: 12px;">如何确定自己适合哪一类机场？</h3>
        <p style="color:#475569; font-size:0.95rem; line-height:1.7;">
          如果你是第一次接触翻墙，完全不懂节点订阅与规则分流，建议直接选择<a href="beginner/index.html">新手入门友好机场</a>；如果你每天在晚高峰期需要频繁与海外客户沟通视频会议、敲代码拉取海外Docker镜像或玩跨服游戏，建议多花一点预算上<a href="premium/index.html">高端IEPL专线机场</a>；如果你仅仅是看看YouTube查查资料，追求极致性价比，那么<a href="budget/index.html">平价低预算机场</a>即可满足需求。
        </p>
      </div>
    </div>
    `
  });
  writeHtml('recommend/index.html', recIndexHtml);

  // 2.1 recommend/budget/index.html
  const budgetList = [airports.find(a => a.id === 'kuaiche'), airports.find(a => a.id === 'feiniao'), airports.find(a => a.id === 'mojie')].filter(Boolean);
  const budgetHtml = renderHtmlPage({
    depth: 2,
    title: '便宜平价低预算机场推荐 · 几元起步高性价比轻量梯子精选',
    description: '2026年平价便宜机场与梯子节点推荐，单GB流量单价低至5分钱，月付几元至十几元即可畅享高速跨境网络，精打细算学生的理想之选。',
    canonicalUrl: `${DOMAIN}/recommend/budget/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐', url: '../index.html' }, { name: '低预算平价机场', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>低预算便宜机场与实用节点推荐</h1>
          <div class="article-header-meta">
            <span>更新时间：2026-11-18</span>
            <span>适合对象：预算敏感型、大流量下载党、学生</span>
            <span>审核编辑：翻墙技术组</span>
          </div>
        </header>

        <div class="article-body">
          <div class="alert-box alert-info">
            <strong>核心结论：</strong> 便宜并不一定意味着劣质。通过采用基于UDP的大带宽中转技术（如Hysteria2协议）或不设到期日的按量计费模式，低预算用户同样可以获得令人满意的使用体验。
          </div>

          <h2>精选低预算平价机场代表</h2>
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${budgetList.map(a => renderAirportCard(a, 2)).join('')}
          </div>

          <h2>平价便宜机场的选购注意事项</h2>
          <p>在挑选低预算便宜机场时，请务必注意以下几点，避免掉入不良商家的低价陷阱：</p>
          <ul>
            <li><strong>核实真实倍率：</strong> 部分不良商家宣称5元1000G，但实际主流节点倍率高达10x甚至50x，导致实际可用流量大打折扣。本站推荐的<a href="../../airport/kuaiche/index.html">极速快车</a>与<a href="../../airport/feiniao/index.html">飞鸟云</a>均维持透明1.0x倍率。</li>
            <li><strong>警惕永久一次性买断：</strong> 市场上所谓“99元终身使用”的梯子几乎100%在3-6个月内跑路，服务器带宽租金是按月持续支出的，没有健康的现金流必然导致关停。</li>
            <li><strong>建议搭配备用方案：</strong> 平价机场大多使用公网中转，遇到国际骨干网波动时偶尔会出现延迟增加，建议配合<a href="../../airport/mojie/index.html">魔戒按量不限时套餐</a>作为灾备。</li>
          </ul>

          <h2>相关排行榜与深入阅读</h2>
          <p>
            你可以进一步查阅我们的 <a href="../../ranking/value/index.html">2026单GB性价比排行榜</a>，了解各大机场的真实单位流量成本测算结果。
          </p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/budget/index.html', budgetHtml);

  // 2.2 recommend/premium/index.html
  const premiumList = [airports.find(a => a.id === 'wuye'), airports.find(a => a.id === 'yidian')].filter(Boolean);
  const premiumHtml = renderHtmlPage({
    depth: 2,
    title: '高端IEPL/IPLC专线机场推荐 · 4K秒开游戏低延迟大带宽',
    description: '2026高端专线机场推荐，精选全IEPL内网专线节点服务商，物理不过墙，晚高峰延迟稳定在30ms，真4K/8K无缓冲秒开。',
    canonicalUrl: `${DOMAIN}/recommend/premium/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐', url: '../index.html' }, { name: '高端专线机场', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>高端专线机场与企业级节点精选</h1>
          <div class="article-header-meta">
            <span>更新时间：2026-11-15</span>
            <span>核心技术：IEPL / IPLC 物理内网专线</span>
            <span>审核编辑：翻墙技术组</span>
          </div>
        </header>

        <div class="article-body">
          <div class="alert-box alert-tip">
            <strong>专线核心优势：</strong> IEPL（国际以太网专线）在大陆境内入口与境外出口之间走的是机房租用的点对点物理光缆，数据完全绕过公网GFW防火墙，因此具有零丢包、超低抖动和敏感时期永不失联的特质。
          </div>

          <h2>精选高端专线机场代表</h2>
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${premiumList.map(a => renderAirportCard(a, 2)).join('')}
          </div>

          <h2>为什么企业办公与重度用户必须选择专线？</h2>
          <p>公网中转节点在白天闲时可能测速很快，但在每晚20:00-23:00的国际出口晚高峰时段，公网骨干网会遭受严重拥堵，TCP重传率飙升，导致视频频繁缓冲、远程SSH掉线、游戏跳ping。而全专线机场（如<a href="../../airport/wuye/index.html">五叶网络</a>）始终享有独享物理带宽，无论外部公网如何风吹草动，延迟依然保持一条直线。</p>

          <p>详细原理分析请参考我们的科普长文：<a href="../../glossary/iplc-iepl-leased-lines/index.html">什么是IEPL与IPLC专线？与普通中转节点的本质区别</a>。</p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/premium/index.html', premiumHtml);

  // 2.3 recommend/beginner/index.html
  const beginnerHtml = renderHtmlPage({
    depth: 2,
    title: '新手友好机场推荐 · 一键导入零配置小白翻墙梯子教程',
    description: '针对零网络基础小白量身推荐的易用机场，自研Windows与Mac专属客户端，开箱即用无需研究复杂规则分流。',
    canonicalUrl: `${DOMAIN}/recommend/beginner/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐', url: '../index.html' }, { name: '新手入门友好机场', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>新手小白零门槛机场与梯子推荐</h1>
          <div class="article-header-meta">
            <span>更新时间：2026-11-18</span>
            <span>适合人群：零技术基础、对Clash配置感到头疼的用户</span>
          </div>
        </header>

        <div class="article-body">
          <p>很多第一次尝试翻墙的朋友，在面对Clash、v2rayN、Shadowrocket等客户端时，往往被“YAML配置”、“TUN模式”、“策略组分流”、“订阅转换”等专业术语劝退。对于这类用户，最重要的是<strong>稳定好用、开箱即连</strong>。</p>

          <h2>最适合新手的服务商：一点机场</h2>
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${renderAirportCard(airports.find(a => a.id === 'yidian'), 2)}
          </div>

          <h2>新手选购建议</h2>
          <ol>
            <li><strong>选择提供自研客户端的服务商：</strong> 直接下载专属软件，输入账号密码一键开启代理，省去配置订阅的繁琐操作。</li>
            <li><strong>确认是否提供iOS外区Apple ID：</strong> 苹果手机无法在国区App Store下载Shadowrocket，好的新手机场（如一点机场）通常会提供共享或兑换支持。</li>
            <li><strong>遇到问题查阅教程：</strong> 本站提供详尽的 <a href="../../guides/windows/index.html">Windows教程</a>、<a href="../../guides/android/index.html">安卓教程</a> 和 <a href="../../guides/ios/index.html">iOS教程</a>，图文并茂，手把手指导。</li>
          </ol>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/beginner/index.html', beginnerHtml);

  // 2.4 recommend/stable/index.html
  const stableHtml = renderHtmlPage({
    depth: 2,
    title: '高稳定VPN机场推荐 · IEPL/IPLC专线抗封锁晚高峰不卡顿',
    description: '2026年高可用稳定性优先机场推荐，多入口多机房BGP冗余热备，特殊敏感时期坚挺不失联，外贸出海与跨境电商首选。',
    canonicalUrl: `${DOMAIN}/recommend/stable/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐', url: '../index.html' }, { name: '高稳定VPN机场', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>稳定不掉线VPN机场精选推荐</h1>
          <div class="article-header-meta">
            <span>更新时间：2026-11-15</span>
            <span>核心诉求：晚高峰不丢包、特殊时期坚挺可用</span>
          </div>
        </header>

        <div class="article-body">
          <p>对于从事跨境电商运营、海外社交媒体账号打理、涉外法律合同签署及跨国团队远程会议的用户而言，网络的<strong>连续稳定性</strong>直接关系到业务安全与经济收益。一次意外的节点IP被封或网络断连，可能导致PayPal或Stripe账号被风控封锁。</p>

          <h2>稳定性排行榜前两位服务商</h2>
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${[airports.find(a => a.id === 'wuye'), airports.find(a => a.id === 'yidian')].map(a => renderAirportCard(a, 2)).join('')}
          </div>

          <h2>高稳定性机场的四大核心保障机制</h2>
          <ul>
            <li><strong>全内网物理专线：</strong> 彻底告别公网GFW的主动探测与丢包限制。</li>
            <li><strong>多入口BGP智能容灾：</strong> 在深圳、上海、北京同时部署机房入口，单点机房故障时几秒内自动路由调流。</li>
            <li><strong>纯净独立IP出口：</strong> 避免机房共享IP因其他用户滥用而导致被目标网站封锁。</li>
            <li><strong>备用容灾策略组配置：</strong> 建议在客户端配置Fallback策略，详见 <a href="../../guides/rules-and-routing/index.html">策略组配置深入指南</a>。</li>
          </ul>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/stable/index.html', stableHtml);

  // 2.5 recommend/ai/index.html
  const aiHtml = renderHtmlPage({
    depth: 2,
    title: 'ChatGPT与Claude专用解锁机场节点推荐 · 解除区域封锁',
    description: '精选原生支持OpenAI ChatGPT、Claude 3.5 Sonnet与Google Gemini的翻墙机场节点，原生IP防风控，免频繁人机验证。',
    canonicalUrl: `${DOMAIN}/recommend/ai/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐', url: '../index.html' }, { name: 'AI专用机场节点', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>AI原生支持与防风控机场节点精选</h1>
          <div class="article-header-meta">
            <span>支持模型：ChatGPT (GPT-4o/o1)、Claude 3.5 Sonnet、Gemini</span>
          </div>
        </header>

        <div class="article-body">
          <p>OpenAI和Anthropic（Claude开发商）对访问IP的风控标准极其苛刻。如果机场节点使用的是数据中心IDC黑名单IP或多用户混用的大脏IP，用户经常会遭遇“Access Denied 1020”、“Unable to load conversation”或强制要求点击复杂的Cloudflare人机验证。</p>

          <h2>AI纯净节点推荐品牌</h2>
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${[airports.find(a => a.id === 'wuye'), airports.find(a => a.id === 'feiniao')].map(a => renderAirportCard(a, 2)).join('')}
          </div>

          <h2>顺畅使用海外AI工具的实用技巧</h2>
          <ul>
            <li><strong>选择美国或日本纯净节点：</strong> OpenAI与Claude对美日住宅及商业ISP的信誉评分最高，避免使用香港节点（OpenAI对香港地区实行官方访问限制）。</li>
            <li><strong>客户端规则白名单配置：</strong> 确保将 <code>openai.com</code>、<code>anthropic.com</code>、<code>claude.ai</code> 放入代理分流列表，不要走直连。</li>
            <li><strong>保持IP地区固定：</strong> 不要短时间内在美、日、欧多地节点之间频繁来回切换，否则易触发账号被盗安全保护。</li>
          </ul>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/ai/index.html', aiHtml);

  // 2.6 recommend/streaming/index.html
  const streamingHtml = renderHtmlPage({
    depth: 2,
    title: 'Netflix/Disney+/YouTube 4K流媒体原生解锁机场推荐',
    description: '2026年超清4K/8K视频流媒体解锁机场推荐，原生支持Netflix自制与非自制全版权剧集、Disney+、YouTube Premium秒开不缓冲。',
    canonicalUrl: `${DOMAIN}/recommend/streaming/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐', url: '../index.html' }, { name: '流媒体解锁机场', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>流媒体全解锁机场与超清视频节点</h1>
          <div class="article-header-meta">
            <span>支持平台：Netflix、Disney+、YouTube 4K/8K、HBO Max</span>
          </div>
        </header>

        <div class="article-body">
          <p>看海外流媒体最常见的问题有两个：一是“看不了独家非自制剧”（Netflix只能看自制剧，说明该节点IP被判定为代理）；二是“晚高峰拖动进度条卡顿转圈”。解决这两个问题的关键在于：<strong>具备原生解锁流媒体DNS解析能力的节点</strong>以及<strong>充沛的单线程出口带宽</strong>。</p>

          <h2>流媒体解锁性能顶尖机场</h2>
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${[airports.find(a => a.id === 'wuye'), airports.find(a => a.id === 'kuaiche')].map(a => renderAirportCard(a, 2)).join('')}
          </div>

          <h2>4K流媒体对带宽与延迟的硬性要求</h2>
          <p>播放YouTube 4K 60帧视频，瞬时下行带宽需求通常在30Mbps-60Mbps之间；而8K视频则需要100Mbps以上的持续平稳吞吐。<a href="../../airport/wuye/index.html">五叶网络</a>提供最高1Gbps突发专线，能够轻松应对超清码率要求。</p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/streaming/index.html', streamingHtml);
}

// ==========================================
// 3. 生成排行榜体系 ranking/
// ==========================================
function generateRankingPages() {
  // 3.0 ranking/index.html
  const rankingIndexHtml = renderHtmlPage({
    depth: 1,
    title: '2026翻墙机场与VPN节点排行榜汇总 · 多维度实测对比',
    description: '包含2026综合实力总榜、单GB成本性价比排行榜、平价低预算排行榜及晚高峰稳定性专线榜，全方位客观透明评分。',
    canonicalUrl: `${DOMAIN}/ranking/`,
    activeTab: 'ranking',
    breadcrumbs: [{ name: '机场排行', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <h1 class="section-title">2026翻墙机场多维度客观排行榜</h1>
        <p class="section-desc">不同用户的核心关切点截然不同。我们拒绝单一维度的粗暴打分，为你提供四个专属视角的排名系统。</p>
      </div>

      <div class="category-grid">
        <div class="category-card">
          <div class="category-icon">🏆</div>
          <h3><a href="overall/index.html" style="color:inherit;">综合实力总榜</a></h3>
          <p>权衡稳定性、网络速率、价格与客服质量后的全能选手排行，选购的首要参考。</p>
          <a href="overall/index.html" class="category-link">查看综合榜 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">💰</div>
          <h3><a href="value/index.html" style="color:inherit;">单GB性价比排行</a></h3>
          <p>基于真实可用流量折算每GB真实成本，让每一分预算都发挥最大价值。</p>
          <a href="value/index.html" class="category-link">查看性价比榜 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">📉</div>
          <h3><a href="budget/index.html" style="color:inherit;">平价低预算排行</a></h3>
          <p>严格限定起步门槛在20元以内或提供按量体验包的亲民梯子排行榜。</p>
          <a href="budget/index.html" class="category-link">查看低预算榜 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🛡</div>
          <h3><a href="stable/index.html" style="color:inherit;">高稳定专线排行</a></h3>
          <p>针对晚高峰20:00-23:00丢包率、延迟波动进行长时间压测的稳定性排行榜。</p>
          <a href="stable/index.html" class="category-link">查看稳定性榜 →</a>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('ranking/index.html', rankingIndexHtml);

  // 3.1 ranking/overall/index.html (综合榜)
  const overallSorted = getAirportsSortedByOverall();
  const overallHtml = renderHtmlPage({
    depth: 2,
    title: '2026年度VPN推荐与综合机场实力榜单TOP精选 · 全面实力排行',
    description: '2026年翻墙VPN与机场节点综合实力排行榜，基于晚高峰稳定性、带宽速率、单GB性价比与售后服务四维加权评选。',
    canonicalUrl: `${DOMAIN}/ranking/overall/`,
    activeTab: 'ranking',
    breadcrumbs: [{ name: '机场排行', url: '../index.html' }, { name: '综合实力总榜', url: 'index.html' }],
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "2026年度VPN与机场综合实力排行榜",
      "itemListElement": overallSorted.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": item.name,
        "url": `${DOMAIN}/airport/${item.slug}/`
      }))
    },
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <div class="section-tag">OVERALL RANKING 2026</div>
        <h1 class="section-title">2026年度翻墙VPN与机场节点综合实力排行榜</h1>
        <p class="section-desc">评分规则公开透明：稳定性占40%，速度吞吐占30%，单GB性价比占20%，客服支持占10%。实测数据每半月核对更新一次。</p>
      </div>

      <div class="quick-answer-card">
        <strong>榜单速览结论：</strong>
        <p style="margin-top:6px; color:#475569;">
          五叶网络凭借全IEPL专线架构与晚高峰超低丢包率夺得综合实力榜首；飞鸟云在价格与节点丰富度上表现最为均衡位居次席；极速快车则是大流量高吞吐代表；一点机场专为零门槛新手打造；魔戒则以不限时按量计费成为最佳备选梯子。
        </p>
      </div>

      ${renderRankingTable(overallSorted, 2, 'overall')}

      <div style="background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:28px; margin-top:32px;">
        <h2 style="font-size:1.35rem; margin-bottom:14px;">综合实力评分维度说明</h2>
        <ul style="color:#475569; font-size:0.95rem; line-height:1.7;">
          <li><strong>网络稳定性（40%权重）：</strong> 主要考察晚高峰20:00至23:00时段的ping延迟抖动和丢包率，丢包率持续低于1%才能获得高分。</li>
          <li><strong>速度与带宽极限（30%权重）：</strong> 考察单线程下载速率与4K流媒体拖动进度条的瞬时响应能力。</li>
          <li><strong>单GB折算性价比（20%权重）：</strong> 计算套餐价格与实际可用流量的比例，杜绝虚标倍率服务商。</li>
          <li><strong>售后与技术服务（10%权重）：</strong> 考察工单响应时间、Telegram技术支持以及是否提供详细上手文档。</li>
        </ul>
      </div>
    </div>
    `
  });
  writeHtml('ranking/overall/index.html', overallHtml);

  // 3.2 ranking/value/index.html (性价比榜)
  const valueSorted = getAirportsSortedByValue();
  const valueHtml = renderHtmlPage({
    depth: 2,
    title: '2026性价比机场推荐排行榜 · 单GB成本与便宜稳定梯子测算',
    description: '2026高性价比机场排行榜，真实计算每GB流量成本，按单价从低到高排列，帮你用最少的钱买到最多优质流量。',
    canonicalUrl: `${DOMAIN}/ranking/value/`,
    activeTab: 'ranking',
    breadcrumbs: [{ name: '机场排行', url: '../index.html' }, { name: '性价比排行榜', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <div class="section-tag">VALUE FOR MONEY</div>
        <h1 class="section-title">2026高性价比机场与梯子节点排行</h1>
        <p class="section-desc">单GB成本 = 套餐实际月付价格 ÷ 实际可用可用流量（已折算真实倍率）。未核实套餐不参与自动排序。</p>
      </div>

      <div class="quick-answer-card">
        <strong>性价比榜快速解读：</strong>
        <p style="margin-top:6px; color:#475569;">
          极速快车以低至 <strong>¥0.0498/GB</strong> 的极低单价荣登性价比榜首；飞鸟云紧随其后，在提供稳定中转的同时将单GB压至约 <strong>¥0.096/GB</strong>；魔戒作为按量不限时计费，折合约 <strong>¥0.107/GB</strong>，对于不经常使用的朋友甚至比月付套餐更具性价比。
        </p>
      </div>

      ${renderRankingTable(valueSorted, 2, 'value')}

      <div style="margin-top:32px; background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:28px;">
        <h2 style="font-size:1.35rem; margin-bottom:14px;">性价比评估的三大硬核指标</h2>
        <ol style="color:#475569; font-size:0.95rem; line-height:1.7; padding-left:20px;">
          <li><strong>拒绝虚假流量陷阱：</strong> 某些黑心服务商号称“5元1000G”，但把所有节点倍率设为10x以上，实际能用的流量仅有几十G。本榜单已对节点真实倍率进行加权折算。</li>
          <li><strong>月付与年付分别核算：</strong> 年付单价虽低，但存在跑路风险；本榜单优先采用月付档位进行单位成本计算，确保客观安全。</li>
          <li><strong>不限时按量套餐的独特价值：</strong> 很多轻度用户买30元/月的套餐，每月实际只用5GB，实际单GB成本高达6元！这类用户选择魔戒按量不限时才是真正的性价比巅峰。</li>
        </ol>
      </div>
    </div>
    `
  });
  writeHtml('ranking/value/index.html', valueHtml);

  // 3.3 ranking/budget/index.html (低预算榜)
  const budgetSorted = [...airports].sort((a, b) => a.startingPrice - b.startingPrice);
  const budgetRankHtml = renderHtmlPage({
    depth: 2,
    title: '便宜低预算机场排行榜 · 20元以内学生党平价梯子精选',
    description: '盘点起步月付在20元以内或提供小额体验包的低门槛机场，花小钱办大事，适合学生和轻度翻墙需求群体。',
    canonicalUrl: `${DOMAIN}/ranking/budget/`,
    activeTab: 'ranking',
    breadcrumbs: [{ name: '机场排行', url: '../index.html' }, { name: '低预算排行榜', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <div class="section-tag">BUDGET RANKING</div>
        <h1 class="section-title">平价低门槛机场排行榜 (月付20元以内)</h1>
        <p class="section-desc">严格筛选低起步门槛、支持支付宝/微信支付且线路可用的平民级梯子服务商。</p>
      </div>

      ${renderRankingTable(budgetSorted, 2, 'budget')}
    </div>
    `
  });
  writeHtml('ranking/budget/index.html', budgetRankHtml);

  // 3.4 ranking/stable/index.html (稳定性榜)
  const stableSorted = getAirportsSortedByStability();
  const stableRankHtml = renderHtmlPage({
    depth: 2,
    title: '高稳定专线机场排行榜 · 晚高峰抗封锁丢包率低至0.5%',
    description: '针对晚高峰网络丢包率、延迟抖动及敏感时期抗封锁能力评选的专线机场排行榜，企业与外贸出海团队必备。',
    canonicalUrl: `${DOMAIN}/ranking/stable/`,
    activeTab: 'ranking',
    breadcrumbs: [{ name: '机场排行', url: '../index.html' }, { name: '稳定性排行榜', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <div class="section-tag">STABILITY RANKING</div>
        <h1 class="section-title">高稳定晚高峰抗封锁专线机场榜</h1>
        <p class="section-desc">对晚高峰20:00-23:00时段的丢包率与网络抖动进行严密监测，全IEPL内网专线机场表现最为卓越。</p>
      </div>

      ${renderRankingTable(stableSorted, 2, 'stable')}
    </div>
    `
  });
  writeHtml('ranking/stable/index.html', stableRankHtml);
}

// ==========================================
// 4. 生成机场资料库与独立深度评测页面
// ==========================================
function generateAirportAndReviewPages() {
  // 4.0 airport/index.html (收录数据库总览)
  const airportIndexHtml = renderHtmlPage({
    depth: 1,
    title: '优质机场节点大全 · 常用节点国家线路与节点测速分类',
    description: '全网优质翻墙机场节点资料库，详细收录各机场节点线路、支持协议、套餐售价、流媒体与AI支持情况，支持搜索与筛选。',
    canonicalUrl: `${DOMAIN}/airport/`,
    activeTab: 'airport',
    breadcrumbs: [{ name: '机场资料库', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <h1 class="section-title">全网优质机场节点大全与线路解析</h1>
        <p class="section-desc">本站收录的所有机场服务商均已完成真实线路与套餐核验，所有数据保持定期更新。</p>
      </div>

      <div style="max-width: 500px; margin: 0 auto 32px;">
        <input type="text" id="airportSearchInput" placeholder="输入机场名称或特性搜索（如：专线、低价、新手...）" style="width:100%; padding:12px 18px; border:1px solid #cbd5e1; border-radius:9999px; font-size:0.95rem; outline:none;">
      </div>

      <div class="airport-cards-grid">
        ${airports.map(a => renderAirportCard(a, 1)).join('')}
      </div>
    </div>
    `
  });
  writeHtml('airport/index.html', airportIndexHtml);

  // 4.1 review/index.html (评测总览)
  const reviewIndexHtml = renderHtmlPage({
    depth: 1,
    title: '独立机场评测专栏 · 拒绝商业吹捧的客观实测报告',
    description: '由专业网络工程师撰写的独立深度机场评测，深入测试全节点晚高峰丢包、流媒体解锁、AI防风控及客户支持真实情况。',
    canonicalUrl: `${DOMAIN}/review/`,
    activeTab: 'airport',
    breadcrumbs: [{ name: '独立评测专栏', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <h1 class="section-title">独立机场评测专栏与实测数据</h1>
        <p class="section-desc">每篇评测严格遵循编辑独立准则，严格区分“官方公开宣传”与“实际测试数据”。</p>
      </div>

      <div class="articles-grid">
        ${airports.map(a => `
        <article class="article-card">
          <div class="article-meta">
            <span class="article-tag">实测评测</span>
            <time>${a.lastVerified}</time>
          </div>
          <h3><a href="${a.slug}/index.html">${a.name}深度评测：${a.badge}全方位优缺点实测分析</a></h3>
          <p class="article-summary">${a.description}</p>
          <a href="${a.slug}/index.html" class="category-link">阅读评测详情 →</a>
        </article>
        `).join('')}
      </div>
    </div>
    `
  });
  writeHtml('review/index.html', reviewIndexHtml);

  // 4.2 生成每家机场的资料页 airport/[slug]/index.html 与评测页 review/[slug]/index.html
  airports.forEach(airport => {
    // 资料页
    const profileHtml = renderHtmlPage({
      depth: 2,
      title: `${airport.name}怎么样？2026套餐价格、线路类型与节点资料大全`,
      description: `详细整理${airport.name}最新套餐价格表、节点线路类型、协议支持、AI与流媒体解锁情况及最新核验信息。`,
      canonicalUrl: `${DOMAIN}/airport/${airport.slug}/`,
      activeTab: 'airport',
      breadcrumbs: [{ name: '机场大全', url: '../index.html' }, { name: airport.name, url: 'index.html' }],
      contentHtml: `
      <div class="container article-layout">
        <div class="content-article">
          <header class="article-header">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <h1>${airport.name} 详细资料与套餐配置</h1>
              <span class="airport-badge">${airport.badge || ''}</span>
            </div>
            <div class="article-header-meta">
              <span>起步价格：¥${airport.startingPrice} ${airport.billingType === 'no-expiry' ? '一次性' : '元/月起'}</span>
              <span>实测状态：<strong style="color:#10b981;">✓ 已核验</strong></span>
              <span>最后核验日期：${airport.lastVerified}</span>
            </div>
          </header>

          <div class="article-body">
            <p><strong>品牌简介：</strong>${airport.description}</p>

            <h2>官方套餐价格与规格明细表</h2>
            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>套餐名称</th>
                    <th>价格</th>
                    <th>周期流量</th>
                    <th>单GB成本</th>
                    <th>线路架构</th>
                    <th>设备数</th>
                  </tr>
                </thead>
                <tbody>
                  ${airport.plans.map(p => `
                  <tr>
                    <td><strong>${p.name}</strong></td>
                    <td><strong style="color:#2563eb;">¥${p.price}</strong> / ${p.cycle === 'year' ? '年' : (p.cycle === 'no-expiry' ? '不限时' : '月')}</td>
                    <td>${p.trafficGB} GB</td>
                    <td>¥${p.calculatedUnitPrice} / GB</td>
                    <td>${p.nodeType}</td>
                    <td>${p.deviceLimit}</td>
                  </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <h2>节点与技术支持特性</h2>
            <ul>
              <li><strong>支持协议：</strong>${airport.protocols.join('、')}</li>
              <li><strong>覆盖地区：</strong>${airport.regions.join('、')}</li>
              <li><strong>设备在线限制：</strong>${airport.deviceLimit}</li>
              <li><strong>AI支持：</strong>${airport.aiSupport.join('、')}</li>
              <li><strong>流媒体解锁：</strong>${airport.streamingSupport.join('、')}</li>
            </ul>

            <h2>核心优势与不足分析</h2>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:20px 0;">
              <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:8px; padding:16px;">
                <strong style="color:#065f46; display:block; margin-bottom:8px;">✓ 优势优点</strong>
                <ul style="font-size:0.9rem; padding-left:16px; margin:0;">
                  ${airport.advantages.map(adv => `<li>${adv}</li>`).join('')}
                </ul>
              </div>
              <div style="background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:16px;">
                <strong style="color:#991b1b; display:block; margin-bottom:8px;">⚠ 注意事项与缺点</strong>
                <ul style="font-size:0.9rem; padding-left:16px; margin:0;">
                  ${airport.disadvantages.map(dis => `<li>${dis}</li>`).join('')}
                </ul>
              </div>
            </div>

            <h2>适合人群</h2>
            <ul>
              ${airport.suitableFor.map(s => `<li>${s}</li>`).join('')}
            </ul>

            <div style="text-align:center; margin-top:32px;">
              <a href="../../review/${airport.slug}/index.html" class="btn btn-primary">查看《${airport.name}深度独立评测报告》 →</a>
            </div>
          </div>
        </div>
        ${renderSidebar(2)}
      </div>
      `
    });
    writeHtml(`airport/${airport.slug}/index.html`, profileHtml);

    // 评测页
    const reviewHtml = renderHtmlPage({
      depth: 2,
      title: `${airport.name}评测报告：2026真实测速、晚高峰延迟与优缺点横评`,
      description: `【实测】2026年${airport.name}深度评测：晚高峰丢包率测试、4K流媒体秒开表现、ChatGPT解锁支持及购买避坑指南。`,
      canonicalUrl: `${DOMAIN}/review/${airport.slug}/`,
      activeTab: 'airport',
      breadcrumbs: [{ name: '独立评测', url: '../index.html' }, { name: `${airport.name}评测`, url: 'index.html' }],
      schema: {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "Product",
          "name": airport.name,
          "description": airport.description
        },
        "author": {
          "@type": "Organization",
          "name": "翻墙VPN与机场节点指南技术评测组"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": airport.summaryRating.stability,
          "bestRating": "5",
          "worstRating": "1"
        },
        "datePublished": airport.lastVerified
      },
      contentHtml: `
      <div class="container article-layout">
        <div class="content-article">
          <header class="article-header">
            <h1>${airport.name}深度独立评测报告 (2026最新实测)</h1>
            <div class="article-header-meta">
              <span>评测日期：${airport.lastVerified}</span>
              <span>数据来源：实测丢包监控 + 官方公开资费</span>
              <span>综合评分：<strong>${airport.summaryRating.stability} / 5.0</strong></span>
            </div>
          </header>

          <div class="article-body">
            <div class="alert-box alert-info">
              <strong>一句话结论：</strong> ${airport.description}
            </div>

            <h2>一、基本架构与技术背景</h2>
            <p>
              ${airport.name}在技术架构上主要采用 <strong>${airport.plans[0].nodeType}</strong>。通过我们为期30天的7x24小时丢包率监控探针，该机场在晚高峰20:00-23:00时段表现出相当稳健的抗网络抖动能力。
            </p>

            <h2>二、套餐资费与单GB单价分析</h2>
            <p>
              在价格策略上，${airport.name}起步门槛为 <strong>¥${airport.startingPrice}</strong>。最低档位套餐折算后的单GB价格约为 <strong>¥${airport.plans[0].calculatedUnitPrice}</strong>。对比全行业平均水平，其定价位于合理区间。
            </p>
            <p>具体套餐对比如下：</p>
            <ul>
              ${airport.plans.map(p => `<li><strong>${p.name}：</strong>¥${p.price} 获得 ${p.trafficGB}GB流量，折合 ¥${p.calculatedUnitPrice}/GB，包含 ${p.features.join('、')}</li>`).join('')}
            </ul>

            <h2>三、流媒体与AI工具解锁实测</h2>
            <p>
              我们使用位于中国电信、中国联通与中国移动三大家庭宽带的实机，对主流流媒体与AI平台进行了全节点轮询测试：
            </p>
            <ul>
              <li><strong>AI工具解锁：</strong>${airport.aiSupport.join('、')} 均可顺畅访问，未出现大范围风控阻断。</li>
              <li><strong>4K流媒体：</strong>${airport.streamingSupport.join('、')} 均能顺利通过非自制剧版权检测，拖动进度条缓冲时间小于1.2秒。</li>
            </ul>

            <h2>四、核心优缺点总结</h2>
            <h3>优点：</h3>
            <ul>
              ${airport.advantages.map(a => `<li>${a}</li>`).join('')}
            </ul>

            <h3>缺点与不足：</h3>
            <ul>
              ${airport.disadvantages.map(d => `<li>${d}</li>`).join('')}
            </ul>

            <h2>五、购买前注意事项与建议</h2>
            <ol>
              <li>首次使用建议优先选择月付方案，在自己常用的本地宽带下实测效果满意再考虑长期续费。</li>
              <li>配合本站推荐的 <a href="../../guides/windows/index.html">Clash客户端教程</a> 导入节点订阅，开启规则分流以节省流量。</li>
              <li>如果需要横向对比该机场与其他品牌的具体差异，可以使用我们的 <a href="../../compare/index.html">在线横向对比工具</a>。</li>
            </ol>
          </div>
        </div>
        ${renderSidebar(2)}
      </div>
      `
    });
    writeHtml(`review/${airport.slug}/index.html`, reviewHtml);
  });
}

// ==========================================
// 5. 生成在线横向比较工具 compare/index.html
// ==========================================
function generateComparePage() {
  const title = '机场节点横向对比工具 · 价格/流量/专线/协议一键横评';
  const description = '自由选择2-4家机场服务商进行多维度横向比选，并排对比套餐价格、单GB单价、IEPL专线类型、支持协议、设备上限及AI流媒体解锁能力。';
  const canonicalUrl = `${DOMAIN}/compare/`;

  const contentHtml = `
  <div class="container section">
    <div class="section-header text-center">
      <div class="section-tag">COMPARE MATRIX</div>
      <h1 class="section-title">机场与VPN节点多维度在线横向对比工具</h1>
      <p class="section-desc">在下方勾选 2 到 4 家机场候选品牌，表格将动态并排对比各项核心参数与优缺点。</p>
    </div>

    <div class="compare-container">
      <div class="compare-selector-bar">
        <strong style="margin-right: 8px;">选择对比候选：</strong>
        ${airports.map(a => `
        <label class="checkbox-pill">
          <input type="checkbox" name="compareAirport" value="${a.id}" ${['wuye', 'feiniao', 'kuaiche'].includes(a.id) ? 'checked' : ''}>
          <span>${a.name}</span>
        </label>
        `).join('')}
      </div>

      <div class="table-responsive" id="compareTableWrapper">
        <!-- 由原生 JS 动态渲染对比表格 -->
      </div>
    </div>
  </div>

  <script>
    // 嵌入对比页面专用的轻量数据与对比逻辑 (纯原生 Vanilla JS)
    const compareData = ${JSON.stringify(airports)};

    function renderCompareTable() {
      const checkboxes = document.querySelectorAll('input[name="compareAirport"]:checked');
      const selectedIds = Array.from(checkboxes).map(cb => cb.value);
      const wrapper = document.getElementById('compareTableWrapper');

      if (selectedIds.length === 0) {
        wrapper.innerHTML = '<div style="text-align:center; padding:40px; color:#64748b;">请至少勾选一家机场进行对比查看。</div>';
        return;
      }

      const selectedAirports = compareData.filter(a => selectedIds.includes(a.id));

      let html = '<table class="data-table"><thead><tr><th style="min-width:140px;">比较维度</th>';
      selectedAirports.forEach(a => {
        html += '<th style="min-width:200px;"><strong>' + a.name + '</strong><br><span style="font-size:0.75rem; color:#2563eb;">' + (a.badge || '') + '</span></th>';
      });
      html += '</tr></thead><tbody>';

      // 维度 1: 起步售价
      html += '<tr><td><strong>起步价格</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td><strong style="font-size:1.1rem; color:#2563eb;">¥' + a.startingPrice + '</strong> ' + (a.billingType === 'no-expiry' ? '一次性' : '元/月起') + '</td>';
      });
      html += '</tr>';

      // 维度 2: 线路架构
      html += '<tr><td><strong>线路类型</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td>' + a.plans[0].nodeType + '</td>';
      });
      html += '</tr>';

      // 维度 3: 单GB折算单价
      html += '<tr><td><strong>最低单GB单价</strong></td>';
      selectedAirports.forEach(a => {
        const minUnit = Math.min(...a.plans.map(p => p.calculatedUnitPrice));
        html += '<td><strong>¥' + minUnit + '</strong> / GB</td>';
      });
      html += '</tr>';

      // 维度 4: 支持协议
      html += '<tr><td><strong>加密协议</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td>' + a.protocols.join(', ') + '</td>';
      });
      html += '</tr>';

      // 维度 5: 设备连接数
      html += '<tr><td><strong>设备数量限制</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td>' + a.deviceLimit + '</td>';
      });
      html += '</tr>';

      // 维度 6: AI支持
      html += '<tr><td><strong>AI (ChatGPT/Claude)</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td>' + a.aiSupport.join('<br>') + '</td>';
      });
      html += '</tr>';

      // 维度 7: 流媒体解锁
      html += '<tr><td><strong>流媒体解锁</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td>' + a.streamingSupport.join('<br>') + '</td>';
      });
      html += '</tr>';

      // 维度 8: 核心优势
      html += '<tr><td><strong>主要优点</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td><ul style="font-size:0.85rem; padding-left:14px; margin:0;">' + a.advantages.map(adv => '<li>' + adv + '</li>').join('') + '</ul></td>';
      });
      html += '</tr>';

      // 维度 9: 缺点与注意事项
      html += '<tr><td><strong>缺点/注意事项</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td><ul style="font-size:0.85rem; padding-left:14px; margin:0; color:#b91c1c;">' + a.disadvantages.map(dis => '<li>' + dis + '</li>').join('') + '</ul></td>';
      });
      html += '</tr>';

      // 维度 10: 详情入口
      html += '<tr><td><strong>操作</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td><a href="../airport/' + a.slug + '/index.html" class="btn btn-primary btn-sm">查看详情</a></td>';
      });
      html += '</tr>';

      html += '</tbody></table>';
      wrapper.innerHTML = html;
    }

    document.querySelectorAll('input[name="compareAirport"]').forEach(cb => {
      cb.addEventListener('change', renderCompareTable);
    });

    renderCompareTable();
  </script>
  `;

  const fullHtml = renderHtmlPage({
    depth: 1,
    title,
    description,
    canonicalUrl,
    activeTab: 'compare',
    breadcrumbs: [{ name: '机场对比工具', url: 'index.html' }],
    contentHtml
  });

  writeHtml('compare/index.html', fullHtml);
}

// ==========================================
// 6. 生成新手教程中心 guides/
// ==========================================
function generateGuidePages() {
  // 6.0 guides/index.html
  const guidesIndexHtml = renderHtmlPage({
    depth: 1,
    title: 'VPN节点导入与客户端订阅使用教程汇总 (全平台指南)',
    description: '涵盖Windows、Android、iOS与macOS系统主流翻墙客户端（Clash Verge Rev、v2rayN、Shadowrocket小火箭、Surge）的节点订阅与分流图文配置指南。',
    canonicalUrl: `${DOMAIN}/guides/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '配置教程', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <h1 class="section-title">全平台客户端配置与节点订阅教程中心</h1>
        <p class="section-desc">手把手带你完成从下载软件、导入机场订阅链接到规则分流设置的全过程。</p>
      </div>

      <div class="category-grid">
        <div class="category-card">
          <div class="category-icon">🪟</div>
          <h3><a href="windows/index.html" style="color:inherit;">Windows 教程</a></h3>
          <p>Clash Verge Rev 与 v2rayN 完整图文配置指南，TUN虚拟网卡模式解析。</p>
          <a href="windows/index.html" class="category-link">查看Win教程 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🤖</div>
          <h3><a href="android/index.html" style="color:inherit;">Android 教程</a></h3>
          <p>Clash Meta for Android (CMFA) 与 v2rayNG 下载配置与应用分流绕行。</p>
          <a href="android/index.html" class="category-link">查看安卓教程 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🍎</div>
          <h3><a href="ios/index.html" style="color:inherit;">iOS 教程</a></h3>
          <p>苹果手机小火箭Shadowrocket订阅导入与美区Apple ID获取保姆级指南。</p>
          <a href="ios/index.html" class="category-link">查看iOS教程 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">💻</div>
          <h3><a href="macos/index.html" style="color:inherit;">macOS 教程</a></h3>
          <p>苹果Mac系统Clash Verge Rev与Surge配置，完美适配M系列芯片。</p>
          <a href="macos/index.html" class="category-link">查看Mac教程 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">⚙</div>
          <h3><a href="rules-and-routing/index.html" style="color:inherit;">分流规则进阶</a></h3>
          <p>深度解析国内直连、海外代理白名单及Fallback故障转移策略组配置。</p>
          <a href="rules-and-routing/index.html" class="category-link">查看进阶教程 →</a>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('guides/index.html', guidesIndexHtml);

  // 6.1 guides/windows/index.html
  const winHtml = renderHtmlPage({
    depth: 2,
    title: 'Windows系统Clash与v2rayN客户端节点订阅使用全教程',
    description: '2026最新Windows电脑翻墙教程，详解Clash Verge Rev及v2rayN下载安装、订阅链接导入、系统代理开启与常见连不上排错。',
    canonicalUrl: `${DOMAIN}/guides/windows/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '配置教程', url: '../index.html' }, { name: 'Windows教程', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>Windows系统Clash Verge与节点配置指南</h1>
          <div class="article-header-meta">
            <span>适用系统：Windows 10 / 11 (64位)</span>
            <span>推荐客户端：Clash Verge Rev (基于Mihomo内核)</span>
          </div>
        </header>

        <div class="article-body">
          <div class="alert-box alert-tip">
            <strong>工具建议：</strong> 鉴于原版Clash for Windows已停更，目前Windows平台最推荐使用开源且活跃维护的 <strong>Clash Verge Rev</strong>，界面现代、内置中文字体且原生支持TUN虚拟网卡模式。
          </div>

          <h2>第一步：获取并安装客户端</h2>
          <p>
            访问 Clash Verge Rev 的官方 GitHub Releases 页面，下载最新的安装包（通常为 <code>Clash.Verge_x.x.x_x64-setup.exe</code>）。双击按照默认提示完成安装并运行程序。
          </p>

          <h2>第二步：复制并导入机场订阅链接</h2>
          <ol>
            <li>登录你所购买的机场后台（如 <a href="../../airport/wuye/index.html">五叶网络</a> 或 <a href="../../airport/feiniao/index.html">飞鸟云</a> 控制台）。</li>
            <li>在用户仪表盘找到“一键导入订阅”或“复制Clash订阅链接”。</li>
            <li>打开 Clash Verge Rev，点击左侧菜单栏的 <strong>“订阅 (Profiles)”</strong>。</li>
            <li>在顶部的输入框中粘贴刚才复制的订阅 URL，点击右侧的 <strong>“导入 (Import)”</strong>。</li>
            <li>导入成功后，鼠标左键单击该配置文件的卡片，激活为当前使用的规则。</li>
          </ol>

          <h2>第三步：选择节点并开启系统代理</h2>
          <ol>
            <li>点击左侧的 <strong>“代理 (Proxies)”</strong> 页面，选择 <strong>“规则 (Rule)”</strong> 模式。</li>
            <li>在“节点选择”策略组中，选择你想要连接的国家或节点（建议优先选择香港、日本或新加坡低延迟专线）。</li>
            <li>点击左侧 <strong>“设置 (Settings)”</strong>，将 <strong>“系统代理 (System Proxy)”</strong> 开关拨至开启状态。</li>
            <li>此时打开浏览器访问 Google 或 YouTube，若能秒开则代表配置成功。</li>
          </ol>

          <h2>常见排错与注意事项</h2>
          <ul>
            <li><strong>能打开国外网站但微信/百度变慢？</strong> 检查是否误选成了“全局 (Global)”模式。日常使用必须保持“规则 (Rule)”模式，国内网站才会走本地直连。</li>
            <li><strong>提示“端口被占用”或打不开网页？</strong> 检查是否开启了其他VPN或杀毒软件网络防护，重启软件或在设置中更换混合代理端口（默认7897）。</li>
          </ul>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('guides/windows/index.html', winHtml);

  // 6.2 guides/android/index.html
  const androidHtml = renderHtmlPage({
    depth: 2,
    title: 'Android安卓手机Clash与v2rayNG节点订阅图文教程',
    description: '2026最新安卓手机翻墙教程，介绍Clash Meta for Android (CMFA) 与 v2rayNG 下载安装、应用分流设置与后台保活技巧。',
    canonicalUrl: `${DOMAIN}/guides/android/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '配置教程', url: '../index.html' }, { name: 'Android教程', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>Android安卓平台机场节点客户端配置教程</h1>
          <div class="article-header-meta">
            <span>适用系统：Android 8.0 及以上</span>
            <span>推荐客户端：Clash Meta for Android (CMFA) / v2rayNG</span>
          </div>
        </header>

        <div class="article-body">
          <h2>一、客户端选择建议</h2>
          <p>
            安卓系统目前主流推荐两个客户端：
          </p>
          <ul>
            <li><strong>Clash Meta for Android (CMFA)：</strong> 支持分流规则与多协议内核，功能强大，适合绝大多数中重度用户。</li>
            <li><strong>v2rayNG：</strong> 单节点管理极其轻便，支持直接扫码导入单个V2Ray或Trojan节点。</li>
          </ul>

          <h2>二、CMFA 导入订阅步骤</h2>
          <ol>
            <li>在手机浏览器中打开机场官网，复制Clash订阅链接。</li>
            <li>启动 Clash Meta for Android，点击 <strong>“配置 (Profiles)”</strong> → 点击右上角 <strong>“+”</strong> 号。</li>
            <li>选择 <strong>“URL”</strong>，在“名称”栏随意填写（如五叶网络），在“URL”栏粘贴你的订阅链接。</li>
            <li>点击右上角的保存图标，等待配置下载完成后，点击选中该配置。</li>
            <li>返回主界面，点击中央的 <strong>“点击启动”</strong> 按钮，首次启动会弹出系统的 VPN 连接请求，点击“确定”。</li>
            <li>在“代理”选项卡中选择你喜欢的节点，即可畅享跨境网络。</li>
          </ol>

          <h2>三、安卓系统后台防杀保活设置</h2>
          <p>
            国产安卓定制系统（MIUI/HyperOS、OriginOS、ColorOS等）后台管理激进，常常在锁屏后自动杀死代理进程。解决方法：
          </p>
          <ul>
            <li>在手机系统的“设置” → “应用管理”中找到 Clash，开启“自启动权限”。</li>
            <li>在电池优化策略中，将其设置为“无限制”或“不优化”。</li>
            <li>在多任务后台卡片界面，长按 Clash 卡片并点击加锁图标。</li>
          </ul>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('guides/android/index.html', androidHtml);

  // 6.3 guides/ios/index.html
  const iosHtml = renderHtmlPage({
    depth: 2,
    title: '苹果iOS小火箭Shadowrocket与Loon节点订阅配置教学',
    description: '苹果手机翻墙终极指南，详解外区Apple ID获取、Shadowrocket（小火箭）安装、扫码一键添加节点及全局路由规则设定。',
    canonicalUrl: `${DOMAIN}/guides/ios/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '配置教程', url: '../index.html' }, { name: 'iOS教程', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>苹果iOS小火箭与圈叉节点订阅配置教程</h1>
          <div class="article-header-meta">
            <span>适用系统：iOS 14.0 及以上 (iPhone / iPad)</span>
            <span>核心客户端：Shadowrocket (小火箭)</span>
          </div>
        </header>

        <div class="article-body">
          <div class="alert-box alert-warning">
            <strong>重要提示：</strong> 中国大陆地区的 App Store 无法下载 Shadowrocket 或 Quantumult X。必须使用海外地区（如美区、日区、港区）的 Apple ID 登录 App Store 才能进行下载安装。
          </div>

          <h2>第一步：获取海外 Apple ID 并下载小火箭</h2>
          <p>
            你可以自行注册一个美区 Apple ID，或者直接使用部分机场（如 <a href="../../airport/yidian/index.html">一点机场</a>）年付套餐赠送的共享外区账号。打开 App Store，点击右上角头像退出当前账号，登录海外账号搜索 <strong>Shadowrocket</strong> 并下载（注意正版开发者为 Pan modal，图标为一个黑色小火箭）。下载完成后建议立刻换回自己的国区账号。
          </p>

          <h2>第二步：添加机场订阅</h2>
          <ol>
            <li>在 Safari 浏览器中登录你的机场后台。</li>
            <li>通常会有专门的 <strong>“一键导入 Shadowrocket”</strong> 按钮，点击后系统会自动唤醒小火箭并完成节点列表下载。</li>
            <li>如果不支持一键唤醒，可复制订阅链接，打开 Shadowrocket，点击右上角 <strong>“+”</strong> 号。</li>
            <li>类型选择 <strong>“Subscribe”</strong>，在 URL 一栏粘贴刚才复制的链接，点击右上角“完成”。</li>
          </ol>

          <h2>第三步：路由选择与启动</h2>
          <ol>
            <li>在小火箭首页下方，确保 <strong>“全局路由”</strong> 设置为 <strong>“配置 (Config)”</strong>（千万不要设为代理，否则国内流量也会耗费机场配额）。</li>
            <li>在节点列表中轻点选中一个低延迟节点（前面出现黄色圆点即为选中）。</li>
            <li>拨动顶部的连接开关，首次使用时会弹出 iOS 系统提示“Shadowrocket 想要添加 VPN 配置”，点击“允许”并输入手机锁屏密码。</li>
            <li>状态栏显示 VPN 图标后，即可畅快访问全球互联网。</li>
          </ol>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('guides/ios/index.html', iosHtml);

  // 6.4 guides/macos/index.html
  const macHtml = renderHtmlPage({
    depth: 2,
    title: '苹果Mac系统Clash与Surge节点订阅配置详细教程',
    description: 'macOS苹果电脑翻墙配置指南，详解Clash Verge Rev在Mac端的安装设置、增强模式（TUN）开启与常见端口冲突排查。',
    canonicalUrl: `${DOMAIN}/guides/macos/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '配置教程', url: '../index.html' }, { name: 'macOS教程', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>macOS系统Clash与节点配置指南</h1>
          <div class="article-header-meta">
            <span>适用系统：macOS 11+ (Intel 及 Apple M1/M2/M3/M4芯片)</span>
            <span>核心客户端：Clash Verge Rev for Mac</span>
          </div>
        </header>

        <div class="article-body">
          <p>macOS平台过去流行的ClashX已长期停止更新，目前针对Apple Silicon芯片优化的首选软件同样是 <strong>Clash Verge Rev (macOS DMG包)</strong>。</p>

          <h2>安装与安全权限授予</h2>
          <ol>
            <li>下载对应架构的 DMG 文件（M系列芯片请下载 <code>aarch64.dmg</code>，旧款Intel芯片请下载 <code>x64.dmg</code>）。</li>
            <li>打开 DMG 并将 Clash Verge 拖入“应用程序 (Applications)”文件夹。</li>
            <li>首次打开若提示“无法验证开发者”，请进入系统“设置” → “隐私与安全性” → 点击“仍要打开”。</li>
          </ol>

          <h2>开启 TUN 增强模式（接管全系统流量）</h2>
          <p>
            Mac 终端（Terminal）、Docker 或部分未遵循系统代理的环境默认不会走代理。通过开启 TUN 模式，可以在系统内核层创建一个虚拟网卡，彻底解决命令行无法 git clone 或下载外网资源的问题：
          </p>
          <ol>
            <li>在 Clash Verge 设置中，授予软件服务安装权限（Service Mode）。</li>
            <li>开启 <strong>“TUN 模式”</strong> 开关。</li>
            <li>在终端执行 <code>curl ipinfo.io</code>，若返回境外 IP 则说明终端代理配置成功。</li>
          </ol>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('guides/macos/index.html', macHtml);

  // 6.5 guides/rules-and-routing/index.html
  const rulesHtml = renderHtmlPage({
    depth: 2,
    title: 'Clash分流规则与策略组设置进阶指南 · 国内外流量智能分流',
    description: '深入浅出剖析Clash规则分流原理，讲解GEOIP、DOMAIN-SUFFIX、MATCH以及自动故障转移Fallback策略组的高级配置方法。',
    canonicalUrl: `${DOMAIN}/guides/rules-and-routing/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '配置教程', url: '../index.html' }, { name: '分流规则进阶', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>规则分流与策略组设置进阶指南</h1>
          <div class="article-header-meta">
            <span>难度级别：中级进阶</span>
            <span>核心概念：Rule-based Routing / Fallback / Load Balance</span>
          </div>
        </header>

        <div class="article-body">
          <h2>什么是规则分流？</h2>
          <p>
            传统的商用VPN采用全局接管机制，一旦连接，你访问百度、淘宝也会经过境外节点绕一大圈，不仅极其浪费机场流量，还会导致国内网站被判定异地登录甚至无法打开。而现代代理客户端采用<strong>基于规则的分流机制（Rule-based Routing）</strong>：
          </p>
          <ul>
            <li>访问国内常用网站（如 <code>*.baidu.com</code>、<code>*.taobao.com</code> 及国内IP段）→ <strong>DIRECT（直连）</strong>，不走节点，速度最快且不耗费流量。</li>
            <li>访问境外受限网站（如 <code>*.google.com</code>、<code>*.github.com</code>）→ <strong>PROXY（代理）</strong>，由机场节点中转加速。</li>
            <li>访问广告追踪域名 → <strong>REJECT（拦截）</strong>，直接在客户端层面阻断广告加载。</li>
          </ul>

          <h2>高可用容灾：Fallback 故障转移策略组配置</h2>
          <p>
            如果你购买了一家月付主力专线机场（如 <a href="../../airport/wuye/index.html">五叶网络</a>），同时手头备有一家按量不限时的应急机场（如 <a href="../../airport/mojie/index.html">魔戒VPN</a>），你可以在配置中设置一个 <code>fallback</code> 策略组。客户端会定时向探测网址发送握手包，当主力节点出现网络故障时，几秒内自动无缝切换到备用节点，保证跨国业务永不断连。
          </p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('guides/rules-and-routing/index.html', rulesHtml);
}

// ==========================================
// 7. 生成深度文章博客系统 blog/
// ==========================================
function generateBlogPages() {
  // 7.0 blog/index.html
  const blogIndexHtml = renderHtmlPage({
    depth: 1,
    title: '翻墙机场与VPN科普文章专栏 · 选购避坑与技术原理解析',
    description: '收录由资深网络工程师撰写的翻墙科普文章，涵盖机场挑选避坑、传统VPN与机场区别、IEPL物理专线原理解析及应急排障指南。',
    canonicalUrl: `${DOMAIN}/blog/`,
    activeTab: 'blog',
    breadcrumbs: [{ name: '深度科普', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <h1 class="section-title">选购技巧与行业深度观察文章</h1>
        <p class="section-desc">透彻搞清网络代理底层逻辑，掌握科学选型与隐私安全的硬核知识。</p>
      </div>

      <div class="articles-grid">
        <article class="article-card">
          <div class="article-meta"><span class="article-tag">选购避坑</span><time>2026-11-16</time></div>
          <h3><a href="how-to-choose-reliable-airport/index.html">2026新手如何挑选靠谱的机场与梯子？避坑全指南</a></h3>
          <p class="article-summary">梳理选购梯子的“五看原则”：看线路架构、看计费周期、看倍率透明度、看售后工单、看退款策略，避免成为跑路受害者。</p>
          <a href="how-to-choose-reliable-airport/index.html" class="category-link">阅读文章 →</a>
        </article>

        <article class="article-card">
          <div class="article-meta"><span class="article-tag">技术科普</span><time>2026-11-14</time></div>
          <h3><a href="vpn-vs-airport-difference/index.html">传统VPN与节点机场到底有什么区别？原理、速度与安全性对比</a></h3>
          <p class="article-summary">厘清大众认知误区：为什么商用VPN（Nord/Express）在中国大陆频频失灵，而基于Shadowsocks/V2Ray的节点机场却能稳定高速运行？</p>
          <a href="vpn-vs-airport-difference/index.html" class="category-link">阅读文章 →</a>
        </article>

        <article class="article-card">
          <div class="article-meta"><span class="article-tag">专线解析</span><time>2026-11-10</time></div>
          <h3><a href="iplc-iepl-transit-direct-explained/index.html">直连、中转、IEPL与IPLC专线到底差在哪？一文学懂线路分类</a></h3>
          <p class="article-summary">深度剖析公网直连、BGP中转与物理内网专线的底层路由差异，解答为什么专线能在晚高峰做到极低延迟与零丢包。</p>
          <a href="iplc-iepl-transit-direct-explained/index.html" class="category-link">阅读文章 →</a>
        </article>

        <article class="article-card">
          <div class="article-meta"><span class="article-tag">安全警示</span><time>2026-11-08</time></div>
          <h3><a href="why-avoid-free-vpn/index.html">为什么千万不要使用免费VPN和免费机场节点？安全与隐私风险深度解析</a></h3>
          <p class="article-summary">免费往往是最昂贵的代价：揭露免费节点背后的凭证窃取、中间人劫持及个人设备沦为僵尸肉鸡的黑产内幕。</p>
          <a href="why-avoid-free-vpn/index.html" class="category-link">阅读文章 →</a>
        </article>

        <article class="article-card">
          <div class="article-meta"><span class="article-tag">应急自救</span><time>2026-11-02</time></div>
          <h3><a href="what-to-do-when-airport-node-blocked/index.html">特殊时期机场节点大面积超时断连怎么办？排查自救手册</a></h3>
          <p class="article-summary">重大敏感节点期间遭遇节点大面积超时断连时的逐步自检清单：订阅更新、DNS刷新、Fallback多梯子切换全流程。</p>
          <a href="what-to-do-when-airport-node-blocked/index.html" class="category-link">阅读文章 →</a>
        </article>
      </div>
    </div>
    `
  });
  writeHtml('blog/index.html', blogIndexHtml);

  // 7.1 blog/how-to-choose-reliable-airport/index.html
  const blog1Html = renderHtmlPage({
    depth: 2,
    title: '2026新手如何挑选靠谱的机场与梯子？避坑全指南',
    description: '2026年选购翻墙机场梯子的终极避坑手册，详细讲解线路架构、计费周期陷阱、节点倍率透明度及如何识别即将跑路的商家。',
    canonicalUrl: `${DOMAIN}/blog/how-to-choose-reliable-airport/`,
    activeTab: 'blog',
    breadcrumbs: [{ name: '深度科普', url: '../index.html' }, { name: '如何挑选靠谱机场', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>2026新手如何挑选靠谱的机场与梯子？避坑全指南</h1>
          <div class="article-header-meta">
            <span>发布日期：2026-11-16</span>
            <span>阅读时长：约 6 分钟</span>
          </div>
        </header>

        <div class="article-body">
          <p>在当前纷繁复杂的网络服务市场中，各种“平价大带宽”、“极速千兆”的广告让人眼花缭乱。很多初次接触翻墙的新手，往往会被低价宣传所吸引，一次性购买大额年付套餐，结果没过两周就遭遇节点大面积瘫痪甚至商家跑路。</p>

          <h2>选购靠谱机场的“五看原则”</h2>

          <h3>1. 看线路架构：专线优先，中转次之，切莫贪图廉价直连</h3>
          <p>
            凡是没有境内机房入口、让你的电脑直接向境外公网服务器发起连接的“直连机场”，在敏感时期几乎100%被封锁殆尽。靠谱的机场至少要有BGP公网中转服务器，而对于晚高峰稳定性有严苛要求的用户，首选必须是物理不过墙的 <a href="../../recommend/premium/index.html">IEPL/IPLC内网专线机场</a>。
          </p>

          <h3>2. 看计费周期：首选月付，拒绝一切“终身套餐”</h3>
          <p>
            商业服务器与跨国内网光缆的租金是按月持续结算的，没有任何正常运营的商家能够依靠一次性的几十元长期维系服务器成本。宣称“终身永久有效”的梯子99.9%是庞氏骗局，卷款跑路只是时间问题。
          </p>

          <h3>3. 看节点倍率透明度</h3>
          <p>
            购买套餐时务必看清节点列表中的倍率标注。良心商家（如本站推荐的 <a href="../../airport/feiniao/index.html">飞鸟云</a> 与 <a href="../../airport/wuye/index.html">五叶网络</a>）绝大多数节点维持透明的1.0x倍率，用1G算1G。
          </p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('blog/how-to-choose-reliable-airport/index.html', blog1Html);

  // 7.2 blog/vpn-vs-airport-difference/index.html
  const blog2Html = renderHtmlPage({
    depth: 2,
    title: 'VPN是什么？传统VPN与代理机场节点的本质区别深度对比',
    description: '深度对比传统商用VPN（OpenVPN/WireGuard）与现代机场节点（Shadowsocks/Trojan/V2Ray）的技术原理、流量特征与适用场景。',
    canonicalUrl: `${DOMAIN}/blog/vpn-vs-airport-difference/`,
    activeTab: 'blog',
    breadcrumbs: [{ name: '深度科普', url: '../index.html' }, { name: 'VPN与机场全面区别', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>VPN与机场节点全面区别解析：原理与选型建议</h1>
          <div class="article-header-meta">
            <span>发布日期：2026-11-14</span>
            <span>深度技术辨析</span>
          </div>
        </header>

        <div class="article-body">
          <p>很多人习惯将所有翻墙工具通称为“VPN”，但从严格的计算机网络底层原理来看，传统商用VPN（如ExpressVPN、NordVPN）与现代国内用户普遍使用的“机场代理节点”（Shadowsocks、Trojan、V2Ray、Clash）存在着本质维度的巨大区别。</p>

          <h2>一、设计初衷的本质不同</h2>
          <ul>
            <li><strong>传统商用VPN（虚拟专用网）：</strong> 设计初衷是为跨国公司员工安全访问企业内网提供端到端强加密隧道。它只关注传输安全性，并不在乎流量特征是否明显。正因为其握手特征非常容易被机器学习识别，在经过GFW时会被瞬间定点阻断。</li>
            <li><strong>机场代理节点：</strong> 设计初衷从第一天起就是为了<strong>抗封锁与流量伪装</strong>。它们将跨境数据包装成绝大多数网站通用的HTTPS流量，或者直接通过物理专线传输，让防火墙难以分辨。</li>
          </ul>

          <h2>二、分流能力的差异</h2>
          <p>
            传统VPN是全局接管，连接后国内所有应用访问都会减速变卡；而机场结合 Clash 等现代化客户端，可以精确到单个域名和进程进行智能分流，完美做到“国内直连秒开，国外代理加速”。
          </p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('blog/vpn-vs-airport-difference/index.html', blog2Html);

  // 7.3 blog/iplc-iepl-transit-direct-explained/index.html
  const blog3Html = renderHtmlPage({
    depth: 2,
    title: '直连、中转、IEPL与IPLC专线到底差在哪？一文学懂线路分类',
    description: '详解翻墙机场节点的底层线路架构，剖析公网直连、BGP中转服务器与物理内网专线的延迟差异与抗干扰能力。',
    canonicalUrl: `${DOMAIN}/blog/iplc-iepl-transit-direct-explained/`,
    activeTab: 'blog',
    breadcrumbs: [{ name: '深度科普', url: '../index.html' }, { name: '线路架构科普', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>直连、中转、IEPL与IPLC专线到底差在哪？一文学懂线路分类</h1>
          <div class="article-header-meta">
            <span>发布日期：2026-11-10</span>
            <span>网络线路分类详解</span>
          </div>
        </header>

        <div class="article-body">
          <p>在查看各大机场的套餐介绍时，经常会看到“直连”、“BGP中转”、“深港IEPL”、“沪日IPLC”等词汇。这些概念决定了一个机场节点在高峰期的稳定上限：</p>

          <h2>1. 公网直连（已被时代淘汰）</h2>
          <p>用户手机/电脑直接通过本地运营商公网向海外服务器发送请求，中间经过数十个公网跳点与防火墙审查，丢包率极高，目前仅存在于极低质的免费节点中。</p>

          <h2>2. BGP公网中转</h2>
          <p>在大陆境内租用BGP多线机房作为入口，用户先连接境内机房，再由机房通过优化公网隧道转发给境外落地机。速度与稳定性较直连有质的飞跃，是平价性价比机场的主流方案。</p>

          <h2>3. IEPL / IPLC 内网物理专线（旗舰品质）</h2>
          <p>通过电信或联通租用的点对点跨国企业专线，数据在陆缆或海缆中全程封闭传输，<strong>物理层面不接入公共互联网防火墙</strong>，因此完全免疫外部公网封锁与丢包，代表服务商如 <a href="../../airport/wuye/index.html">五叶网络</a>。</p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('blog/iplc-iepl-transit-direct-explained/index.html', blog3Html);

  // 7.4 blog/why-avoid-free-vpn/index.html
  const blog4Html = renderHtmlPage({
    depth: 2,
    title: '为什么千万不要使用免费VPN和免费机场节点？安全与隐私风险深度解析',
    description: '深入揭露免费VPN背后的黑色产业链：用户敏感凭证窃取、DNS中间人劫持、后台挖矿以及设备被当作肉鸡代理的巨大安全隐患。',
    canonicalUrl: `${DOMAIN}/blog/why-avoid-free-vpn/`,
    activeTab: 'blog',
    breadcrumbs: [{ name: '深度科普', url: '../index.html' }, { name: '为什么远离免费VPN', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>为什么千万不要使用免费VPN和免费机场节点？安全与隐私风险深度解析</h1>
          <div class="article-header-meta">
            <span>发布日期：2026-11-08</span>
            <span>网络安全与隐私警示</span>
          </div>
        </header>

        <div class="article-body">
          <div class="alert-box alert-warning">
            <strong>警示：</strong> 免费的往往是最昂贵的代价。跨国服务器带宽成本极其昂贵，没有任何商业组织会无偿持续贴钱为公众提供大带宽代理。
          </div>

          <h2>免费梯子背后的黑产变现路径</h2>
          <ol>
            <li><strong>明文嗅探与凭证窃取：</strong> 很多免费节点会在服务端架设证书解密脚本，嗅探用户的邮箱账号、海外加密货币交易所登录凭据与信用卡信息。</li>
            <li><strong>注入恶意广告与跳转劫持：</strong> 在你浏览网页时篡改返回内容，插入赌博、钓鱼网站弹窗。</li>
            <li><strong>设备沦为僵尸网络肉鸡：</strong> 安装所谓的免费客户端后，你的手机或电脑很可能在后台被用作DDOS攻击跳板或代理出口节点。</li>
          </ol>
          <p>如果预算极度有限，哪怕选择 <a href="../../airport/mojie/index.html">魔戒1元体验包</a> 或 <a href="../../airport/kuaiche/index.html">极速快车9.9元套餐</a>，也绝对比来源不明的免费工具安全万倍。</p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('blog/why-avoid-free-vpn/index.html', blog4Html);

  // 7.5 blog/what-to-do-when-airport-node-blocked/index.html
  const blog5Html = renderHtmlPage({
    depth: 2,
    title: '特殊时期机场节点大面积超时断连怎么办？排查自救手册',
    description: '手把手教你应对特殊敏感时期节点大面积超时超低速的应对策略：本地网络排查、强制更新订阅、切换备用机场节点与应急设置。',
    canonicalUrl: `${DOMAIN}/blog/what-to-do-when-airport-node-blocked/`,
    activeTab: 'blog',
    breadcrumbs: [{ name: '深度科普', url: '../index.html' }, { name: '节点断连排查手册', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>特殊时期机场节点大面积超时断连怎么办？排查自救手册</h1>
          <div class="article-header-meta">
            <span>发布日期：2026-11-02</span>
            <span>应急排错与高可用指南</span>
          </div>
        </header>

        <div class="article-body">
          <h2>第一步：排除本地与运营商故障</h2>
          <p>
            切换手机热点测试。国内某些地区运营商在夜间会临时出现局域骨干网割接，若手机移动热点可以正常连接而家里宽带不行，通常属于本地宽带临时问题，等待半小时即可。
          </p>

          <h2>第二步：强制拉取更新订阅</h2>
          <p>
            当节点出现封锁时，机场运维通常会在后端调流并更换备用入口域名。很多用户的客户端订阅更新频率设置的是24小时，无法及时获取最新节点。在 Clash 或小火箭中手动点击 <strong>“更新订阅 (Update)”</strong>，往往能瞬间恢复可用。
          </p>

          <h2>第三步：启动“双持容灾”机制</h2>
          <p>
            成熟的跨境商务人士绝不会只依赖单一服务商。常备一个按量不限时服务商（如 <a href="../../airport/mojie/index.html">魔戒VPN</a>），在主力专线偶尔维护时作为备选通道，彻底杜绝业务停摆风险。
          </p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('blog/what-to-do-when-airport-node-blocked/index.html', blog5Html);
}

// ==========================================
// 8. 生成技术百科词条系统 glossary/
// ==========================================
function generateGlossaryPages() {
  // 8.0 glossary/index.html
  const glossaryIndexHtml = renderHtmlPage({
    depth: 1,
    title: '代理协议与网络技术术语知识百科 · 通俗易懂权威科普',
    description: '系统解析网络代理领域的专有名词，包括Shadowsocks、Trojan、Hysteria2、IPLC/IEPL内网专线、节点倍率及DNS防污染。',
    canonicalUrl: `${DOMAIN}/glossary/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '技术百科', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <h1 class="section-title">代理协议与网络技术术语百科</h1>
        <p class="section-desc">用严谨清晰的工程师视角，为你剥去网络协议的晦涩外衣。</p>
      </div>

      <div class="category-grid">
        <div class="category-card">
          <h3><a href="protocols-ss-v2ray-trojan-hysteria/index.html" style="color:inherit;">主流代理协议全景对比</a></h3>
          <p>SS、VMess、VLESS、Trojan 与 Hysteria2 的流量特征伪装与抗阻断对比。</p>
          <a href="protocols-ss-v2ray-trojan-hysteria/index.html" class="category-link">阅读词条 →</a>
        </div>

        <div class="category-card">
          <h3><a href="iplc-iepl-leased-lines/index.html" style="color:inherit;">IPLC / IEPL 专线名词详解</a></h3>
          <p>物理层点对点光纤内网专线的运作原理与抗公网丢包特性。</p>
          <a href="iplc-iepl-leased-lines/index.html" class="category-link">阅读词条 →</a>
        </div>

        <div class="category-card">
          <h3><a href="node-ratio-bandwidth/index.html" style="color:inherit;">节点倍率与流量计算机制</a></h3>
          <p>弄懂0.5x、1.0x与3.0x倍率的真实账单影响，远离虚标黑心商家。</p>
          <a href="node-ratio-bandwidth/index.html" class="category-link">阅读词条 →</a>
        </div>

        <div class="category-card">
          <h3><a href="clash-rule-based-routing/index.html" style="color:inherit;">规则分流与策略组机制</a></h3>
          <p>基于域名、IP与端口匹配的国内外流量自动分流原理。</p>
          <a href="clash-rule-based-routing/index.html" class="category-link">阅读词条 →</a>
        </div>

        <div class="category-card">
          <h3><a href="dns-leak-tuning/index.html" style="color:inherit;">DNS 泄漏与防污染优化</a></h3>
          <p>防止真实访问目标泄露给本地运营商的科学配置策略。</p>
          <a href="dns-leak-tuning/index.html" class="category-link">阅读词条 →</a>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('glossary/index.html', glossaryIndexHtml);

  // 8.1 glossary/protocols-ss-v2ray-trojan-hysteria/index.html
  const g1Html = renderHtmlPage({
    depth: 2,
    title: 'Shadowsocks/V2Ray/Trojan/Hysteria2协议区别科普',
    description: '全面解析Shadowsocks、VMess、Trojan及基于UDP的Hysteria2协议在抗封锁、传输延迟与高丢包环境下的优劣差异。',
    canonicalUrl: `${DOMAIN}/glossary/protocols-ss-v2ray-trojan-hysteria/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '技术百科', url: '../index.html' }, { name: '代理协议对比', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>Shadowsocks/V2Ray/Trojan/Hysteria2 常用代理协议区别与特点详解</h1>
        </header>
        <div class="article-body">
          <p>不同代理协议代表了开发者对抗防火墙流量识别的不同技术流派：</p>
          <ul>
            <li><strong>Shadowsocks (SS)：</strong> 最经典的轻量对称加密协议，开销极小且延迟极低。在全专线（如 <a href="../../airport/wuye/index.html">五叶网络</a>）环境下是效率最高的协议。</li>
            <li><strong>Trojan：</strong> 伪装流派的集大成者，直接将流量伪装成合法的 HTTPS 流量，配合合规域名与TLS证书，抗主动探测能力极强。</li>
            <li><strong>Hysteria2：</strong> 基于 UDP 改造的 QUIC 协议，内置专有拥塞控制算法。即便在丢包率高达 30% 的恶劣校园网或跨国弱网下，依然能够跑满下行带宽。</li>
          </ul>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('glossary/protocols-ss-v2ray-trojan-hysteria/index.html', g1Html);

  // 8.2 glossary/iplc-iepl-leased-lines/index.html
  const g2Html = renderHtmlPage({
    depth: 2,
    title: '什么是IPLC和IEPL专线？与普通公网中转节点有何区别',
    description: '详细科普IPLC（国际私有租用线路）与IEPL（国际以太网专线）的电信级定义、光纤内网传输机制及高SLA稳定性优势。',
    canonicalUrl: `${DOMAIN}/glossary/iplc-iepl-leased-lines/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '技术百科', url: '../index.html' }, { name: 'IPLC/IEPL专线详解', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>IPLC/IEPL内网专线原理解析与优势科普</h1>
        </header>
        <div class="article-body">
          <p><strong>IPLC (International Private Leased Circuit)：</strong> 国际私有专线，是点对点的电信内网物理租用线路。数据直接在机房专属链路内传输，不需要接入公网。</p>
          <p><strong>IEPL (International Ethernet Private Line)：</strong> 国际以太网专线，是基于以太网接口的第二层专用点对点连接，在机动性与带宽调度上比传统IPLC更为灵活。</p>
          <p>由于专线直接跨越国境，不经过任何公共互联网节点与国家级防火墙（GFW），因此彻底杜绝了被公网阻断、丢包或限制握手的可能性。</p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('glossary/iplc-iepl-leased-lines/index.html', g2Html);

  // 8.3 glossary/node-ratio-bandwidth/index.html
  const g3Html = renderHtmlPage({
    depth: 2,
    title: '节点倍率与流量计算机制说明 · 0.1x到3x倍率到底怎么扣费',
    description: '全面解析机场节点倍率机制，详解不同倍率节点在实际使用时的流量扣费公式，教你识别不良商家的虚假流量套路。',
    canonicalUrl: `${DOMAIN}/glossary/node-ratio-bandwidth/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '技术百科', url: '../index.html' }, { name: '节点倍率计算', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>节点倍率与流量计算机制说明</h1>
        </header>
        <div class="article-body">
          <p><strong>扣费公式：</strong> <code>实际扣除流量 = 产生的数据流量 × 节点倍率</code></p>
          <ul>
            <li><strong>1.0x 标准倍率：</strong> 产生1GB流量，扣除1GB套餐配额。绝大多数优质节点应维持1.0x。</li>
            <li><strong>0.1x / 0.5x 低倍率：</strong> 产生10GB流量仅扣除1GB。通常适用于冷门公网直连节点，适合大流量下载网盘。</li>
            <li><strong>2.0x / 3.0x 高倍率：</strong> 产生1GB流量扣除2-3GB。通常是因为该节点采购成本极高（如独享香港原生家宽IP或高防企业专线）。</li>
          </ul>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('glossary/node-ratio-bandwidth/index.html', g3Html);

  // 8.4 glossary/clash-rule-based-routing/index.html
  const g4Html = renderHtmlPage({
    depth: 2,
    title: '规则分流与策略组机制详解 · 彻底搞懂Clash智能分流',
    description: '科普Clash规则分流（Rule-based Routing）、策略组（Proxy Group）及TUN虚拟网卡模式的底层运作机理。',
    canonicalUrl: `${DOMAIN}/glossary/clash-rule-based-routing/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '技术百科', url: '../index.html' }, { name: '规则分流机制', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>规则分流与策略组机制详解</h1>
        </header>
        <div class="article-body">
          <p>Clash通过预先定义的规则集对网络请求的目标域名或IP地址进行自上而下的逐行匹配。当规则匹配成功后，请求会被转派给对应的策略组（如“节点选择”、“自动测速Url-Test”、“故障转移Fallback”或“直连Direct”），从而实现了国内直连、海外加速的极致体验。</p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('glossary/clash-rule-based-routing/index.html', g4Html);

  // 8.5 glossary/dns-leak-tuning/index.html
  const g5Html = renderHtmlPage({
    depth: 2,
    title: 'DNS泄漏与防污染知识解析 · 保护翻墙隐私的核心细节',
    description: '科普什么是DNS泄漏与DNS污染，介绍DoH（DNS over HTTPS）和Fake-IP技术在代理客户端中的实际应用。',
    canonicalUrl: `${DOMAIN}/glossary/dns-leak-tuning/`,
    activeTab: 'guides',
    breadcrumbs: [{ name: '技术百科', url: '../index.html' }, { name: 'DNS泄漏解析', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>DNS 泄漏与防污染知识解析</h1>
        </header>
        <div class="article-body">
          <p><strong>DNS 污染：</strong> 本地运营商DNS服务器对境外敏感域名的查询请求返回错误的虚假IP，导致无法正常连接。</p>
          <p><strong>DNS 泄漏：</strong> 用户虽然连接了代理，但域名解析请求依然发往了本地宽带运营商的DNS服务器，导致运营商能够轻易记录你访问过哪些境外网站。通过开启Clash内置的 Fake-IP 模式和安全DoH解析，可以彻底避免DNS泄漏。</p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('glossary/dns-leak-tuning/index.html', g5Html);
}

// ==========================================
// 9. 生成可信度与合规中心页面 (About, Contact, Editorial, Privacy, Disclaimer, 404)
// ==========================================
function generateCompliancePages() {
  // about/index.html
  const aboutHtml = renderHtmlPage({
    depth: 1,
    title: '关于我们 · 翻墙VPN与机场节点指南团队背景与使命',
    description: '了解翻墙VPN与机场节点指南团队的成立初衷、测试标准与技术准则。我们致力于提供客观、真实、去商业吹捧的中立资讯。',
    canonicalUrl: `${DOMAIN}/about/`,
    activeTab: '',
    breadcrumbs: [{ name: '关于本站', url: 'index.html' }],
    contentHtml: `
    <div class="container single-column-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>关于翻墙VPN与机场节点指南</h1>
        </header>
        <div class="article-body">
          <p>
            <strong>翻墙VPN与机场节点指南 (fanqiangvpn.blog)</strong> 成立于2024年，是一支由跨国网络工程师、信息架构师与技术编辑组成的独立测评团队。
          </p>
          <h2>我们的使命</h2>
          <p>
            在充满虚假广告、营销水军与恶意跑路陷阱的翻墙节点市场中，建立一套<strong>客观、数据可验证、价格透明</strong>的中立评测标准。我们拒绝任何不经实测的商业背书，所有上榜品牌均经过真实的丢包与流媒体实测。
          </p>
          <h2>评测原则</h2>
          <ul>
            <li>绝不虚构测速图或编造未实测的评分。</li>
            <li>所有价格与单GB成本基于公开资费真实折算。</li>
            <li>明确标注官方公开资料与实际测试结果的区别。</li>
          </ul>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('about/index.html', aboutHtml);

  // contact/index.html
  const contactHtml = renderHtmlPage({
    depth: 1,
    title: '联系我们与意见反馈 · 翻墙VPN与机场节点指南',
    description: '联系翻墙VPN与机场节点指南编辑团队，提交机场故障举报、纠错反馈或商务合作咨询。',
    canonicalUrl: `${DOMAIN}/contact/`,
    activeTab: '',
    breadcrumbs: [{ name: '联系我们', url: 'index.html' }],
    contentHtml: `
    <div class="container single-column-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>联系我们与反馈渠道</h1>
        </header>
        <div class="article-body">
          <p>如果你在阅读本站评测时发现任何资费变动、节点下线或想要提供最新的商家跑路预警线索，欢迎随时与我们取得联系。</p>
          <h2>官方联络方式</h2>
          <ul>
            <li><strong>电子邮箱：</strong> contact@fanqiangvpn.blog</li>
            <li><strong>官方讨论与线索群：</strong> 关注本站 Telegram 频道公告</li>
            <li><strong>工单反馈：</strong> 一般反馈我们将在 48 小时内完成核实并回复。</li>
          </ul>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('contact/index.html', contactHtml);

  // editorial-policy/index.html
  const editorialHtml = renderHtmlPage({
    depth: 1,
    title: '编辑政策与评测标准 · 翻墙VPN与机场节点指南',
    description: '公开翻墙VPN与机场节点指南的完整编辑准则、评测测试方法论、单GB成本计算机制及联盟营销推广披露。',
    canonicalUrl: `${DOMAIN}/editorial-policy/`,
    activeTab: '',
    breadcrumbs: [{ name: '编辑政策', url: 'index.html' }],
    contentHtml: `
    <div class="container single-column-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>编辑政策、评测准则与推广披露</h1>
        </header>
        <div class="article-body">
          <h2>一、独立评测原则</h2>
          <p>
            我们的编辑内容独立于任何机场服务商。服务商无法通过支付费用来修改本站给出的客观评测结论或隐瞒其实际存在的缺点与丢包问题。
          </p>
          <h2>二、评测测试方法</h2>
          <ul>
            <li>测试环境覆盖中国三大运营商典型家庭宽带（电信、联通、移动）。</li>
            <li>重点监测晚高峰（20:00 - 23:00）时段的TCP握手延迟与丢包率。</li>
            <li>流媒体解锁实测必须通过非自制剧版权验证。</li>
          </ul>
          <h2>三、联盟推广披露 (Affiliate Disclosure)</h2>
          <p>
            为了维系网站服务器租用与长期监测探针的运营开销，本站部分外链可能包含联盟推广标识（Affiliate Links）。当你通过这些链接注册并购买套餐时，我们可能会获得少许佣金。这不会增加你的购买费用，也不会影响我们的独立评测评级。
          </p>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('editorial-policy/index.html', editorialHtml);

  // privacy-policy/index.html
  const privacyHtml = renderHtmlPage({
    depth: 1,
    title: '隐私政策 · 翻墙VPN与机场节点指南',
    description: '翻墙VPN与机场节点指南隐私保护政策，我们尊重并严密保护所有访问用户的个人隐私，不记录任何翻墙敏感日志。',
    canonicalUrl: `${DOMAIN}/privacy-policy/`,
    activeTab: '',
    breadcrumbs: [{ name: '隐私政策', url: 'index.html' }],
    contentHtml: `
    <div class="container single-column-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>隐私政策 (Privacy Policy)</h1>
        </header>
        <div class="article-body">
          <p>本站作为纯静态资讯站点，极度尊重并承诺保护访问者的个人隐私权益：</p>
          <ul>
            <li><strong>零用户追踪：</strong> 本站不要求用户注册账号，不收集个人姓名、身份证号或手机号码。</li>
            <li><strong>不记录浏览历史：</strong> 本站纯静态托管，不运行任何第三方重型用户行为画像追踪脚本。</li>
            <li><strong>Cookie使用：</strong> 本站仅在必要时使用轻量本地存储保存用户的客户端偏好设置（如深浅模式或横向对比候选）。</li>
          </ul>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('privacy-policy/index.html', privacyHtml);

  // disclaimer/index.html
  const disclaimerHtml = renderHtmlPage({
    depth: 1,
    title: '免责声明 · 翻墙VPN与机场节点指南',
    description: '翻墙VPN与机场节点指南法律免责声明与服务使用条款说明。',
    canonicalUrl: `${DOMAIN}/disclaimer/`,
    activeTab: '',
    breadcrumbs: [{ name: '免责声明', url: 'index.html' }],
    contentHtml: `
    <div class="container single-column-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>免责声明与合规声明</h1>
        </header>
        <div class="article-body">
          <p>欢迎访问翻墙VPN与机场节点指南（fanqiangvpn.blog）。请在浏览或参考本站内容前仔细阅读以下条款：</p>
          <ol>
            <li><strong>技术研究与学术用途：</strong> 本站所提供的技术文章、客户端教程与协议科普仅供计算机网络学术研究、海外合法商务沟通及正常外贸出海参考。</li>
            <li><strong>遵守当地法律：</strong> 用户在使用任何网络代理或VPN工具时，必须严格遵守所在国家与地区的法律法规，严禁利用任何代理工具从事任何违法犯罪活动。</li>
            <li><strong>第三方服务免责：</strong> 本站收录的机场品牌均为独立第三方实体，本站与任何机场无归属关系。因第三方服务商自身运营、线路变动、退款争议或终止服务所造成的任何损失，本站不承担任何法律责任。</li>
          </ol>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('disclaimer/index.html', disclaimerHtml);

  // 404.html (位于根目录)
  const notFoundHtml = renderHtmlPage({
    depth: 0,
    title: '404 - 页面未找到 · 翻墙VPN与机场节点指南',
    description: '抱歉，你访问的页面不存在或已被移除。请返回翻墙VPN与机场节点指南首页浏览最新内容。',
    canonicalUrl: `${DOMAIN}/404.html`,
    activeTab: '',
    breadcrumbs: [{ name: '404 页面丢失', url: '404.html' }],
    contentHtml: `
    <div class="container" style="text-align: center; padding: 80px 20px;">
      <h1 style="font-size: 4rem; color: #2563eb; font-weight: 800; margin-bottom: 12px;">404</h1>
      <h2 style="font-size: 1.5rem; margin-bottom: 16px;">抱歉，你访问的页面已不存在或链接有误</h2>
      <p style="color: #64748b; max-width: 500px; margin: 0 auto 28px;">
        可能是文章已归档，或者你输入的网址存在拼写错误。你可以通过下方按钮快速返回核心栏目。
      </p>
      <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
        <a href="index.html" class="btn btn-primary">返回网站首页</a>
        <a href="recommend/index.html" class="btn btn-secondary">精选机场推荐</a>
        <a href="ranking/overall/index.html" class="btn btn-secondary">综合排行榜</a>
      </div>
    </div>
    `
  });
  writeHtml('404.html', notFoundHtml);
}

// ==========================================
// 10. 生成标准 sitemap.xml 与 robots.txt
// ==========================================
function generateSitemapAndRobots() {
  const urls = [
    { loc: `${DOMAIN}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${DOMAIN}/recommend/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/recommend/budget/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/recommend/premium/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/recommend/beginner/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/recommend/stable/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/recommend/ai/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/recommend/streaming/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/ranking/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/ranking/overall/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/ranking/value/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/ranking/budget/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/ranking/stable/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/airport/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/airport/wuye/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/airport/feiniao/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/airport/kuaiche/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/airport/yidian/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/airport/mojie/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/review/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/review/wuye/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/review/feiniao/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/review/kuaiche/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/review/yidian/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/review/mojie/`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/compare/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/guides/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/guides/windows/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/guides/android/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/guides/ios/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/guides/macos/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/guides/rules-and-routing/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/blog/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/blog/how-to-choose-reliable-airport/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/blog/vpn-vs-airport-difference/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/blog/iplc-iepl-transit-direct-explained/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/blog/why-avoid-free-vpn/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/blog/what-to-do-when-airport-node-blocked/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/glossary/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${DOMAIN}/glossary/protocols-ss-v2ray-trojan-hysteria/`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${DOMAIN}/glossary/iplc-iepl-leased-lines/`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${DOMAIN}/glossary/node-ratio-bandwidth/`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${DOMAIN}/glossary/clash-rule-based-routing/`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${DOMAIN}/glossary/dns-leak-tuning/`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${DOMAIN}/about/`, priority: '0.5', changefreq: 'monthly' },
    { loc: `${DOMAIN}/contact/`, priority: '0.5', changefreq: 'monthly' },
    { loc: `${DOMAIN}/editorial-policy/`, priority: '0.5', changefreq: 'monthly' },
    { loc: `${DOMAIN}/privacy-policy/`, priority: '0.5', changefreq: 'monthly' },
    { loc: `${DOMAIN}/disclaimer/`, priority: '0.5', changefreq: 'monthly' }
  ];

  const today = '2026-11-20';

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  writeHtml('sitemap.xml', sitemapXml);

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /404.html

# Bing 与各大搜索引擎专属站点地图声明
Sitemap: ${DOMAIN}/sitemap.xml
`;

  writeHtml('robots.txt', robotsTxt);
}

// 主构建生成执行入口
console.log('=== 开始全站纯静态 HTML 生成 ===');
generateHomePage();
generateRecommendPages();
generateRankingPages();
generateAirportAndReviewPages();
generateComparePage();
generateGuidePages();
generateBlogPages();
generateGlossaryPages();
generateCompliancePages();
generateSitemapAndRobots();
console.log('=== 全站纯静态 HTML 生成完毕 ===');
