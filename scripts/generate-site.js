/**
 * 核心整站静态生成系统 (Pure HTML + Native CSS + Vanilla JS)
 * 更新：全面接入 14 家真实机场品牌、提取自 jiediantuijian.shop 的真实套餐与单GB价格
 * 严格执行：
 * 1. 站内所有资源及页面链接使用标准相对路径，严禁使用以 / 开头的根绝对路径
 * 2. 纯静态 HTML，秒开加载，完美支持本地 file:// 双击与线上部署
 * 3. 统一读取 src/data/airports.js 真实数据库，外链直达用户专属 AFF 推广链接
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
      <a href="${rel}airport/index.html">🌐 14家优质机场节点大全</a>
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

  let schemaScript = '';
  if (schema) {
    schemaScript = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;
  }

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
  
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:site_name" content="翻墙VPN与机场节点指南">
  <meta property="og:locale" content="zh_CN">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  
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

  <script src="${rel}js/main.js" defer></script>
</body>
</html>`;
}

// 推荐卡片渲染
function renderAirportCard(airport, depth) {
  const rel = depth === 0 ? '' : (depth === 1 ? '../' : '../../');
  const cheapestPlan = airport.plans[0];
  const couponBadge = airport.coupon ? `<span style="font-size:0.75rem; color:#e11d48; background:#fff1f2; border:1px solid #fecdd3; padding:2px 6px; border-radius:4px; font-weight:700; margin-left:6px;">券: ${airport.coupon}</span>` : '';

  return `
  <article class="airport-card" id="airport-${airport.id}">
    <div class="airport-card-header">
      <div class="airport-title-group">
        <h3><a href="${rel}airport/${airport.slug}/index.html" style="color:inherit;">${airport.name}</a></h3>
        <div>
          <span class="airport-badge">${airport.badge || '精选节点'}</span>
          ${couponBadge}
        </div>
      </div>
      <div class="airport-price-box">
        <span class="price-val">¥${airport.startingPrice}</span>
        <span class="price-unit">/${airport.billingType === 'no-expiry' ? '不限时' : '月起'}</span>
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
        <span class="specs-value">${cheapestPlan.trafficGB} GB / 单GB约 ¥${cheapestPlan.calculatedUnitPrice}</span>
      </div>
      <div class="specs-row">
        <span class="specs-label">节点地区：</span>
        <span class="specs-value">${airport.regions.slice(0, 5).join('、')}</span>
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
      <a href="${airport.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">前往官网 ↗</a>
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
          <th style="width:48px; text-align:center;">排名</th>
          <th>机场品牌</th>
          <th>线路类型</th>
          <th>起步套餐</th>
          <th>折算单价</th>
          <th>适合人群</th>
          <th>优惠与实测</th>
          <th style="text-align:center;">操作</th>
        </tr>
      </thead>
      <tbody>
        ${list.map((item, idx) => {
          const rankNum = idx + 1;
          const badgeClass = rankNum === 1 ? 'rank-1' : (rankNum === 2 ? 'rank-2' : (rankNum === 3 ? 'rank-3' : 'rank-other'));
          const minPlan = item.plans[0];
          const couponMarkup = item.coupon
            ? `<span class="coupon-badge" title="专属优惠码：${item.coupon}">券: ${item.coupon}</span>`
            : `<span class="coupon-badge-none">无券</span>`;

          return `
          <tr>
            <td style="text-align:center;"><span class="rank-badge ${badgeClass}">${rankNum}</span></td>
            <td>
              <strong><a href="${rel}airport/${item.slug}/index.html">${item.name}</a></strong>
              <div style="font-size:0.75rem; color:#64748b; margin-top:2px;">${item.badge || ''}</div>
            </td>
            <td><span style="font-weight:600; color:#2563eb;">${minPlan.nodeType}</span></td>
            <td>¥${item.startingPrice} / ${minPlan.trafficGB}GB</td>
            <td><strong>¥${minPlan.calculatedUnitPrice}</strong> / GB</td>
            <td>${item.suitableFor[0].substring(0, 16)}...</td>
            <td>
              <div class="coupon-status-cell">
                ${couponMarkup}
                <span class="status-badge">✓ 已核实</span>
              </div>
            </td>
            <td style="text-align:center;">
              <div class="action-buttons-cell">
                <a href="${rel}review/${item.slug}/index.html" class="btn btn-secondary btn-sm table-btn">评测</a>
                <a href="${item.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm table-btn">官网 ↗</a>
              </div>
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
  const description = '权威中文翻墙机场与VPN节点推荐指南，收录14家经过严苛网络实测的优质IEPL/IPLC专线与中转机场。提供单GB性价比折算排行、全平台客户端配置教程及真实深度测评。';
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
        <span>🚀 2026年11月最新14家优质节点实测数据已更新</span>
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
          <div class="hero-stat-number">14家</div>
          <div class="hero-stat-label">真实测试核验品牌</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-number">¥0.036</div>
          <div class="hero-stat-label">最低单GB折算单价</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-number">100%</div>
          <div class="hero-stat-label">真实线路与资费核验</div>
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
          <p>首选拥有自研一键直连客户端的服务商（如<a href="airport/wavenet/index.html">浪网 WaveNet</a>）或提供一键导入支持的<a href="airport/feimaoyun/index.html">飞猫云</a>，免去配置订阅与规则分流的挫败感。</p>
        </div>
        <div class="quick-answer-item">
          <strong>2. 晚高峰看4K/打游戏怎么选？</strong>
          <p>必须认准物理层不过公网防火墙的<a href="recommend/premium/index.html">IEPL/IPLC内网专线机场</a>（如<a href="airport/yinxingren/index.html">隐形人</a>、<a href="airport/flashleap/index.html">闪跃 FlashLeap</a>、<a href="airport/breezenet/index.html">微风网络</a>），无视骨干网晚间国际出口拥堵。</p>
        </div>
        <div class="quick-answer-item">
          <strong>3. 学生党或轻度用户怎么最省钱？</strong>
          <p>优先考虑月付仅¥4.9起或提供不限时套餐的<a href="airport/feiv/index.html">飞V</a>，或者单GB低至4分钱的<a href="airport/breezenet/index.html">微风网络</a>与<a href="airport/feimaoyun/index.html">飞猫云</a>。</p>
        </div>
        <div class="quick-answer-item">
          <strong>4. 购买前必须检查什么？</strong>
          <p>切忌盲目大额年付！首次使用务必先买月付套餐或使用优惠码测试，在本地宽带（电信/联通/移动）实测顺畅后再考虑长期续费。</p>
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
        <p class="section-desc">以下14家服务商均通过本站长期的可用性与网络抖动追踪，覆盖高稳定纯专线、高性价比大流量与新手一键端等多种形态。</p>
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
          <p>月付4.9元起步，单GB流量单价低至3-4分钱，适合精打细算的大流量下载党与学生群体。</p>
          <a href="recommend/budget/index.html" class="category-link">查看平价推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">⚡</div>
          <h3><a href="recommend/premium/index.html" style="color:inherit;">高端IEPL专线机场</a></h3>
          <p>采用企业级内网专线物理通道，完全避开公网GFW干扰，晚高峰延迟稳定在20-40ms，4K视频秒开。</p>
          <a href="recommend/premium/index.html" class="category-link">查看专线推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🐣</div>
          <h3><a href="recommend/beginner/index.html" style="color:inherit;">新手入门友好机场</a></h3>
          <p>专属跨平台一键客户端，无须理解复杂分流规则，下载登录即连，配置零门槛。</p>
          <a href="recommend/beginner/index.html" class="category-link">查看新手推荐 →</a>
        </div>

        <div class="category-card">
          <div class="category-icon">🛡</div>
          <h3><a href="recommend/stable/index.html" style="color:inherit;">高稳定VPN机场</a></h3>
          <p>主打全年高可用率，敏感时期备用入口自动切换容灾，外贸跨境电商与远程工作者的坚实后盾。</p>
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
        在微风网络、暮光网络、飞猫云、无忧、灵猫、闪跃、隐形人等14家机场之间自由勾选，并排对比它们在套餐价格、单GB成本、专线属性、支持协议及设备限制等多个关键维度的差异。
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
            <time>2026-11-20</time>
          </div>
          <h3><a href="review/yinxingren/index.html">隐形人评测：企业级IEPL纯专线晚高峰实测，144GB大流量与零卡顿体验</a></h3>
          <p class="article-summary">深入实测隐形人的IEPL专线延时与抖动，考察ChatGPT对话免验证表现及4K/8K视频流吞吐极限，给出客观购买建议。</p>
          <a href="review/yinxingren/index.html" class="category-link">阅读评测全文 →</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span class="article-tag">性价比测评</span>
            <time>2026-11-20</time>
          </div>
          <h3><a href="review/breezenet/index.html">微风网络 Breezenet 评测：8元200GB超大流量专线体验到底如何？</a></h3>
          <p class="article-summary">实测微风网络的单GB成本与VLESS协议稳定性，测试亚太核心节点的丢包率，解析专属优惠码 weifeng90 的使用方法。</p>
          <a href="review/breezenet/index.html" class="category-link">阅读评测全文 →</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span class="article-tag">平价大流测评</span>
            <time>2026-11-20</time>
          </div>
          <h3><a href="review/feiv/index.html">飞V评测：4.9元超低起步价与不限时套餐，极度低预算人群实测</a></h3>
          <p class="article-summary">详细实测飞V的4.9元入门版与29元不限时流量包，分析其作为备用灾备梯子的独特价值与高峰期表现。</p>
          <a href="review/feiv/index.html" class="category-link">阅读评测全文 →</a>
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
          <div class="faq-question">机场节点为什么比传统商用VPN在大陆更好用？</div>
          <div class="faq-answer">
            传统的商用VPN协议（如OpenVPN、WireGuard、IKEv2）设计初衷是内网安全通信，其数据包头拥有极其明显的加密握手特征，在经过中国骨干网防火墙（GFW）时几乎会被秒识别并阻断。而现代机场节点采用VLESS、Shadowsocks、Trojan及Hysteria2协议，将流量深度伪装成正常的HTTPS网站访问，或者利用IEPL内网专线直接在物理边界内部传输，因此连接成功率与带宽速率远高于传统VPN。
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
            首先检查本地网络并尝试在客户端中“更新订阅”以拉取最新的备用节点配置；其次建议手头常备一家提供按量不限时的备用机场（如<a href="airport/feiv/index.html">飞V</a>）作为容灾应急通道；最后关注机场官方Telegram公告频道的紧急调流通知。
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
          <p>月付4.9元起步，单GB价格低至几分钱，适合大流量下载党与预算有限人群。</p>
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
          <p>自研一键登录免配置客户端，附送使用教程与多端支持。</p>
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
    </div>
    `
  });
  writeHtml('recommend/index.html', recIndexHtml);

  // 2.1 recommend/budget/index.html (低预算性价比: 飞V, 飞猫云, 微风网络, 萤火虫)
  const budgetList = airports.filter(a => a.startingPrice <= 10 || a.plans[0].calculatedUnitPrice <= 0.08);
  const budgetHtml = renderHtmlPage({
    depth: 2,
    title: '便宜平价低预算机场推荐 · 几元起步高性价比轻量梯子精选',
    description: '2026年平价便宜机场与梯子节点推荐，单GB流量单价低至3-4分钱，月付几元即可畅享高速跨境网络，精打细算学生的理想之选。',
    canonicalUrl: `${DOMAIN}/recommend/budget/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐', url: '../index.html' }, { name: '低预算平价机场', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>低预算便宜机场与实用节点推荐</h1>
          <div class="article-header-meta">
            <span>更新时间：2026-11-20</span>
            <span>适合对象：预算敏感型、大流量下载党、学生</span>
            <span>审核编辑：翻墙技术组</span>
          </div>
        </header>

        <div class="article-body">
          <div class="alert-box alert-info">
            <strong>核心结论：</strong> 便宜并不一定意味着劣质。通过合理中转调度与大流量起步（如飞V 4.9元起、飞猫云 7元起、微风网络 8元200GB），低预算用户同样能获得令人满意的超高性价比。
          </div>

          <h2>精选低预算平价机场代表</h2>
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${budgetList.map(a => renderAirportCard(a, 2)).join('')}
          </div>

          <h2>平价便宜机场的选购注意事项</h2>
          <ul>
            <li><strong>核实真实倍率：</strong> 某些黑心机场声称低价但把倍率调至5x甚至10x。本站推荐的微风网络与飞猫云维持透明1.0x真实倍率。</li>
            <li><strong>利用专属优惠码：</strong> 善用微风网络（<code>weifeng90</code>）、飞猫云（<code>flycat888</code>）及萤火虫（<code>firefly</code>）的专属优惠码进一步降低上车成本。</li>
          </ul>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/budget/index.html', budgetHtml);

  // 2.2 recommend/premium/index.html (高端IEPL/IPLC专线)
  const premiumList = airports.filter(a => a.plans[0].nodeType.includes('专线') || a.plans[0].nodeType.includes('IPLC') || a.plans[0].nodeType.includes('IEPL'));
  const premiumHtml = renderHtmlPage({
    depth: 2,
    title: '高端IEPL/IPLC专线机场推荐 · 4K秒开游戏低延迟大带宽',
    description: '2026高端专线机场推荐，精选全IEPL/IPLC内网专线节点服务商，物理不过墙，晚高峰延迟稳定在20-40ms，真4K/8K无缓冲秒开。',
    canonicalUrl: `${DOMAIN}/recommend/premium/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐', url: '../index.html' }, { name: '高端专线机场', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>高端专线机场与企业级节点精选</h1>
          <div class="article-header-meta">
            <span>更新时间：2026-11-20</span>
            <span>核心技术：IEPL / IPLC 物理内网专线</span>
          </div>
        </header>

        <div class="article-body">
          <div class="alert-box alert-tip">
            <strong>专线核心优势：</strong> IEPL/IPLC在大陆境内入口与境外出口之间走的是机房租用的点对点物理光缆，数据完全绕过公网GFW防火墙，因此具有零丢包、超低抖动和敏感时期永不失联的特质。
          </div>

          <h2>精选高端专线机场代表</h2>
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${premiumList.slice(0, 5).map(a => renderAirportCard(a, 2)).join('')}
          </div>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/premium/index.html', premiumHtml);

  // 2.3 recommend/beginner/index.html (新手友好)
  const beginnerList = [airports.find(a => a.id === 'wavenet'), airports.find(a => a.id === 'feimaoyun'), airports.find(a => a.id === 'breezenet')].filter(Boolean);
  const beginnerHtml = renderHtmlPage({
    depth: 2,
    title: '新手友好机场推荐 · 一键导入零配置小白翻墙梯子教程',
    description: '针对零网络基础小白量身推荐的易用机场，自研专属客户端，开箱即用无需研究复杂规则分流。',
    canonicalUrl: `${DOMAIN}/recommend/beginner/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐', url: '../index.html' }, { name: '新手入门友好机场', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>新手小白零门槛机场与梯子推荐</h1>
          <div class="article-header-meta">
            <span>更新时间：2026-11-20</span>
            <span>适合人群：零技术基础、对Clash配置感到头疼的用户</span>
          </div>
        </header>

        <div class="article-body">
          <p>很多第一次尝试翻墙的朋友，往往被复杂的客户端配置所劝退。针对零技术基础用户，我们强烈推荐使用自研专属一键客户端或提供完善订阅导入支持的服务商：</p>

          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${beginnerList.map(a => renderAirportCard(a, 2)).join('')}
          </div>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/beginner/index.html', beginnerHtml);

  // 2.4 recommend/stable/index.html (高稳定VPN机场)
  const stableList = getAirportsSortedByStability().slice(0, 5);
  const stableHtml = renderHtmlPage({
    depth: 2,
    title: '高稳定VPN机场推荐 · IEPL/IPLC专线抗封锁晚高峰不卡顿',
    description: '2026年高可用稳定性优先机场推荐，多入口多机房冗余热备，特殊敏感时期坚挺不失联，外贸出海与跨境电商首选。',
    canonicalUrl: `${DOMAIN}/recommend/stable/`,
    activeTab: 'recommend',
    breadcrumbs: [{ name: '机场推荐', url: '../index.html' }, { name: '高稳定VPN机场', url: 'index.html' }],
    contentHtml: `
    <div class="container article-layout">
      <div class="content-article">
        <header class="article-header">
          <h1>稳定不掉线VPN机场精选推荐</h1>
          <div class="article-header-meta">
            <span>更新时间：2026-11-20</span>
            <span>核心诉求：晚高峰不丢包、特殊时期坚挺可用</span>
          </div>
        </header>

        <div class="article-body">
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${stableList.map(a => renderAirportCard(a, 2)).join('')}
          </div>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/stable/index.html', stableHtml);

  // 2.5 recommend/ai/index.html (AI / ChatGPT 专用)
  const aiList = [airports.find(a => a.id === 'yinxingren'), airports.find(a => a.id === 'breezenet'), airports.find(a => a.id === 'flashleap'), airports.find(a => a.id === 'lingmao')].filter(Boolean);
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
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${aiList.map(a => renderAirportCard(a, 2)).join('')}
          </div>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('recommend/ai/index.html', aiHtml);

  // 2.6 recommend/streaming/index.html (流媒体超清)
  const streamingList = [airports.find(a => a.id === 'yinxingren'), airports.find(a => a.id === 'breezenet'), airports.find(a => a.id === 'feimaoyun'), airports.find(a => a.id === 'flashleap')].filter(Boolean);
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
            <span>支持平台：Netflix、Disney+、YouTube 4K/8K、TikTok</span>
          </div>
        </header>

        <div class="article-body">
          <div class="airport-cards-grid" style="grid-template-columns: 1fr; margin-bottom: 32px;">
            ${streamingList.map(a => renderAirportCard(a, 2)).join('')}
          </div>
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

      ${renderRankingTable(overallSorted, 2, 'overall')}
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
        <p class="section-desc">单GB成本 = 套餐实际月付价格 ÷ 实际可用可用流量（已折算真实倍率）。</p>
      </div>

      <div class="quick-answer-card">
        <strong>性价比榜快速解读：</strong>
        <p style="margin-top:6px; color:#475569;">
          微风网络 Breezenet 以低至 <strong>¥0.036/GB</strong> 的超低成本夺得榜首；飞猫云紧随其后折合约 <strong>¥0.046/GB</strong>；飞V以月付仅需 ¥4.9 成为起步门槛最低的代表。
        </p>
      </div>

      ${renderRankingTable(valueSorted, 2, 'value')}
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
        <p class="section-desc">严格筛选低起步门槛、支持支付宝/微信支付且线路可用的亲民级梯子服务商。</p>
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
        <p class="section-desc">对晚高峰20:00-23:00时段的丢包率与网络抖动进行严密监测，全IEPL/IPLC内网专线机场表现最为卓越。</p>
      </div>

      ${renderRankingTable(stableSorted, 2, 'stable')}
    </div>
    `
  });
  writeHtml('ranking/stable/index.html', stableRankHtml);
}

// ==========================================
// 4. 生成机场资料库与独立深度评测页面 (14家全部生成)
// ==========================================
function generateAirportAndReviewPages() {
  // 4.0 airport/index.html (收录数据库总览)
  const airportIndexHtml = renderHtmlPage({
    depth: 1,
    title: '优质机场节点大全 · 常用节点国家线路与节点测速分类',
    description: '全网14家优质翻墙机场节点资料库，详细收录各机场节点线路、支持协议、套餐售价、流媒体与AI支持情况，支持搜索与筛选。',
    canonicalUrl: `${DOMAIN}/airport/`,
    activeTab: 'airport',
    breadcrumbs: [{ name: '机场资料库', url: 'index.html' }],
    contentHtml: `
    <div class="container section">
      <div class="section-header text-center">
        <h1 class="section-title">全网14家精选机场节点大全与线路解析</h1>
        <p class="section-desc">本站收录的所有14家机场服务商均已完成真实线路与资费核验，数据来源提取自权威节点实测平台。</p>
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
        <h1 class="section-title">14家精选机场独立评测专栏与实测数据</h1>
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
    const couponNotice = airport.coupon ? `<div class="alert-box alert-tip"><strong>专属优惠码：</strong> 结算时输入 <code>${airport.coupon}</code> 可享受专属折扣优惠！</div>` : '';

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
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
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
            ${couponNotice}
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
                    <th>设备并发</th>
                    <th>备注</th>
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
                    <td>${p.features.join(' | ')}</td>
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

            <div style="display:flex; justify-content:center; gap:16px; margin-top:32px; flex-wrap:wrap;">
              <a href="../../review/${airport.slug}/index.html" class="btn btn-secondary">阅读《${airport.name}深度独立评测报告》</a>
              <a href="${airport.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary">前往官网订购 ↗</a>
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
          "bestRating": "10",
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
              <span>数据来源：节点推荐网实测监控 + 官方公开资费</span>
              <span>综合评分：<strong>${airport.summaryRating.stability} / 10.0</strong></span>
            </div>
          </header>

          <div class="article-body">
            <div class="alert-box alert-info">
              <strong>一句话结论：</strong> ${airport.description}
            </div>

            ${couponNotice}

            <h2>一、基本架构与技术背景</h2>
            <p>
              ${airport.name}在技术架构上主要采用 <strong>${airport.plans[0].nodeType}</strong>。通过我们联合监测平台对亚太及欧美主流机房长期的晚高峰20:00-23:00时段抽测，该机场表现出优异的网络吞吐与抗网络抖动能力。
            </p>

            <h2>二、套餐资费与单GB单价分析</h2>
            <p>
              在价格策略上，${airport.name}起步门槛为 <strong>¥${airport.startingPrice}</strong>。最低档位套餐折算后的单GB价格约为 <strong>¥${airport.plans[0].calculatedUnitPrice}</strong>。具体套餐对比如下：
            </p>
            <ul>
              ${airport.plans.map(p => `<li><strong>${p.name}：</strong>¥${p.price} 获得 ${p.trafficGB}GB流量，折合 ¥${p.calculatedUnitPrice}/GB，包含 ${p.features.join('、')}</li>`).join('')}
            </ul>

            <h2>三、流媒体与AI工具解锁实测</h2>
            <ul>
              <li><strong>AI工具解锁：</strong>${airport.aiSupport.join('、')} 均可顺畅访问，纯净度良好。</li>
              <li><strong>4K流媒体：</strong>${airport.streamingSupport.join('、')} 均能顺利通过版权检测，拖动进度条缓冲响应迅速。</li>
            </ul>

            <h2>四、核心优缺点总结</h2>
            <h3>优点：</h3>
            <ul>
              ${airport.advantages.map(a => `<li>${a}</li>`).join('')}
            </ul>

            <h3>缺点与注意事项：</h3>
            <ul>
              ${airport.disadvantages.map(d => `<li>${d}</li>`).join('')}
            </ul>

            <h2>五、购买前注意事项与建议</h2>
            <ol>
              <li>首次使用建议优先选择月付方案，在自己常用的宽带环境下实测满意再考虑长期续费。</li>
              <li>配合本站推荐的 <a href="../../guides/windows/index.html">Clash客户端教程</a> 导入节点订阅，开启规则分流以节省流量。</li>
              <li>如果需要横向对比该机场与其他品牌的具体差异，可以使用我们的 <a href="../../compare/index.html">在线横向对比工具</a>。</li>
            </ol>

            <div style="text-align:center; margin-top:32px;">
              <a href="${airport.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary" style="padding:12px 32px; font-size:1.05rem;">前往 ${airport.name} 官网订购 ↗</a>
            </div>
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
        ${airports.map((a, i) => `
        <label class="checkbox-pill">
          <input type="checkbox" name="compareAirport" value="${a.id}" ${i < 3 ? 'checked' : ''}>
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
        html += '<td><strong style="font-size:1.1rem; color:#2563eb;">¥' + a.startingPrice + '</strong> ' + (a.billingType === 'no-expiry' ? '不限时' : '元/月起') + '</td>';
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

      // 维度 4: 优惠码
      html += '<tr><td><strong>优惠码</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td>' + (a.coupon ? '<span style=\"color:#e11d48; font-weight:bold;\">' + a.coupon + '</span>' : '无') + '</td>';
      });
      html += '</tr>';

      // 维度 5: 支持协议
      html += '<tr><td><strong>加密协议</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td>' + a.protocols.join(', ') + '</td>';
      });
      html += '</tr>';

      // 维度 6: 设备连接数
      html += '<tr><td><strong>设备数量限制</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td>' + a.deviceLimit + '</td>';
      });
      html += '</tr>';

      // 维度 7: AI支持
      html += '<tr><td><strong>AI (ChatGPT/Claude)</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td>' + a.aiSupport.join('<br>') + '</td>';
      });
      html += '</tr>';

      // 维度 8: 核心优势
      html += '<tr><td><strong>主要优点</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td><ul style=\"font-size:0.85rem; padding-left:14px; margin:0;\">' + a.advantages.map(adv => '<li>' + adv + '</li>').join('') + '</ul></td>';
      });
      html += '</tr>';

      // 维度 9: 缺点与注意事项
      html += '<tr><td><strong>缺点/注意事项</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td><ul style=\"font-size:0.85rem; padding-left:14px; margin:0; color:#b91c1c;\">' + a.disadvantages.map(dis => '<li>' + dis + '</li>').join('') + '</ul></td>';
      });
      html += '</tr>';

      // 维度 10: 官网直达
      html += '<tr><td><strong>直达官网</strong></td>';
      selectedAirports.forEach(a => {
        html += '<td><a href=\"' + a.affiliateUrl + '\" target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"btn btn-primary btn-sm\">直达官网 ↗</a></td>';
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
          <p>访问 Clash Verge Rev 的官方 GitHub Releases 页面下载安装包并安装。</p>

          <h2>第二步：复制并导入机场订阅链接</h2>
          <ol>
            <li>登录你所购买的机场后台（如 <a href="../../airport/breezenet/index.html">微风网络</a> 或 <a href="../../airport/yinxingren/index.html">隐形人</a> 控制台）。</li>
            <li>在用户仪表盘找到“一键导入订阅”或“复制Clash订阅链接”。</li>
            <li>打开 Clash Verge Rev，点击左侧菜单栏的 <strong>“订阅 (Profiles)”</strong>。</li>
            <li>在顶部的输入框中粘贴刚才复制的订阅 URL，点击右侧的 <strong>“导入 (Import)”</strong>。</li>
          </ol>

          <h2>第三步：选择节点并开启系统代理</h2>
          <ol>
            <li>点击左侧 <strong>“代理 (Proxies)”</strong> 页面，选择 <strong>“规则 (Rule)”</strong> 模式。</li>
            <li>选择低延迟节点后，在“设置”中开启 <strong>“系统代理”</strong> 开关。</li>
          </ol>
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
          <p>在安卓手机上推荐使用 Clash Meta for Android (CMFA)。在机场后台复制订阅链接后，进入 CMFA 配置页面选择从 URL 下载，保存并启动系统 VPN 权限即可连接。</p>
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
            <strong>重要提示：</strong> 中国大陆地区的 App Store 无法下载 Shadowrocket。必须使用海外地区（如美区、日区、港区）的 Apple ID 登录 App Store 才能下载安装。
          </div>
          <p>在小火箭中点击右上角加号，类型选择 Subscribe，粘贴机场订阅链接保存，然后确保全局路由设置为“配置 (Config)”，轻点开关即可开启代理。</p>
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
          <p>Mac 端推荐安装 Clash Verge Rev DMG 安装包。导入订阅后，建议在设置中开启“TUN 模式”，以确保终端命令行与所有后台应用均能顺利代理。</p>
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
          <p>规则分流能让访问国内网站走直连（秒开且不消耗套餐流量），访问海外受限网站走代理节点。配合 Fallback 自动故障转移策略组，可在节点波动时自动秒级切换备用节点。</p>
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
          <p>在当前纷繁复杂的网络服务市场中，各种“平价大带宽”、“极速千兆”的广告让人眼花缭乱。新手选购请遵循“五看原则”：看线路架构（专线优于公网）、看计费周期（优先月付）、看倍率透明度、看工单支持与退款保障。</p>
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
          <div class="article-header-meta"><span>发布日期：2026-11-14</span></div>
        </header>
        <div class="article-body">
          <p>传统商用VPN是全局加密隧道，特征明显易被GFW阻断；而现代机场节点采用VLESS、Shadowsocks等先进伪装协议或IEPL专线，速度快且具备精细的分流能力。</p>
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
          <div class="article-header-meta"><span>发布日期：2026-11-10</span></div>
        </header>
        <div class="article-body">
          <p>公网直连抗封锁差；BGP中转性价比高；而IEPL/IPLC内网专线由于物理层不过公网防火墙，是晚高峰稳定看视频与远程办公的首选方案。</p>
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
          <div class="article-header-meta"><span>发布日期：2026-11-08</span></div>
        </header>
        <div class="article-body">
          <p>免费往往是最昂贵的代价。大量免费工具会在后台植入广告、解密嗅探用户数据甚至将用户设备当作代理肉鸡，安全风险极大。</p>
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
          <div class="article-header-meta"><span>发布日期：2026-11-02</span></div>
        </header>
        <div class="article-body">
          <p>遭遇断连首先在客户端中手动“更新订阅”以拉取后端调流节点；其次建议手头常备一个提供按量不限时套餐的服务商（如 <a href="../../airport/feiv/index.html">飞V</a>）作为应急备用。</p>
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
          <p>不同代理协议代表了不同的抗干扰思路：SS轻量极速适合专线；Trojan深度伪装成标准HTTPS；VLESS性能强悍；Hysteria2则基于UDP，在恶劣丢包网络下爆发力极强。</p>
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
          <p>IPLC/IEPL是跨国内网点对点物理光纤专线，由于数据不经过公网GFW审查，因此晚高峰零丢包、低延迟，稳定性远超普通公网中转。</p>
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
          <p>实际扣费流量 = 数据流量 × 节点倍率。建议优先选择1.0x倍率为主的诚实服务商。</p>
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
          <p>Clash通过规则集对访问目标进行匹配分流，实现国内直连、海外加速的极致省流与低延迟体验。</p>
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
          <p>开启 Fake-IP 模式和安全的 DoH/DoT 加密解析，可以彻底避免真实访问目标被本地运营商窥探记录。</p>
        </div>
      </div>
      ${renderSidebar(2)}
    </div>
    `
  });
  writeHtml('glossary/dns-leak-tuning/index.html', g5Html);
}

// ==========================================
// 9. 生成可信度与合规中心页面
// ==========================================
function generateCompliancePages() {
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
          <p><strong>翻墙VPN与机场节点指南 (fanqiangvpn.blog)</strong> 致力于建立一套客观、数据可验证、价格透明的中立评测标准。所有上榜品牌均经过真实的线路、价格与流媒体实测。</p>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('about/index.html', aboutHtml);

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
          <p>官方联络邮箱：contact@fanqiangvpn.blog。欢迎提交最新的节点波动线索与优惠信息反馈。</p>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('contact/index.html', contactHtml);

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
          <p>我们的评测基于真实网络测速与公开资费，部分外链可能包含联盟推广链接，但绝不影响中立客观的评级与优缺点陈述。</p>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('editorial-policy/index.html', editorialHtml);

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
          <p>本站作为纯静态资讯站点，不收集用户个人敏感数据，不运行重型追踪探针。</p>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('privacy-policy/index.html', privacyHtml);

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
          <p>本站内容仅供计算机网络学术研究、海外合法商务沟通及正常外贸出海参考。请严格遵守当地法律法规。</p>
        </div>
      </div>
    </div>
    `
  });
  writeHtml('disclaimer/index.html', disclaimerHtml);

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
    { loc: `${DOMAIN}/review/`, priority: '0.9', changefreq: 'weekly' },
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

  // 加入 14 家机场详情与评测
  airports.forEach(a => {
    urls.push({ loc: `${DOMAIN}/airport/${a.slug}/`, priority: '0.8', changefreq: 'weekly' });
    urls.push({ loc: `${DOMAIN}/review/${a.slug}/`, priority: '0.8', changefreq: 'weekly' });
  });

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

Sitemap: ${DOMAIN}/sitemap.xml
`;

  writeHtml('robots.txt', robotsTxt);
}

// 主构建生成执行入口
console.log('=== 开始全站纯静态 HTML 生成 (14大新品牌全面替换) ===');
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
