/**
 * 中文机场与VPN专业资讯门户 - 交互脚本 (Vanilla JS)
 * 零外部依赖，极速秒开，支持本地 file:// 协议与线上部署
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. 移动端菜单切换
  var menuBtn = document.getElementById('mobileMenuBtn');
  var mobileNav = document.getElementById('mobileNavPanel');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('open');
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', function (event) {
      if (!menuBtn.contains(event.target) && !mobileNav.contains(event.target) && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. 简易客户端内容搜索筛选（如果页面中存在 search-input）
  var searchInput = document.getElementById('airportSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      var term = e.target.value.toLowerCase().trim();
      var cards = document.querySelectorAll('.airport-card');
      cards.forEach(function (card) {
        var text = card.textContent.toLowerCase();
        if (text.indexOf(term) > -1) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
