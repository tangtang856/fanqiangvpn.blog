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

  // 3. 顶部全局阅读进度条与返回顶部浮标
  var progressBar = document.getElementById('readingProgressBar');
  var floatingTools = document.getElementById('floatingTools');
  var backToTopBtn = document.getElementById('backToTopBtn');

  function handleScroll() {
    var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (progressBar && height > 0) {
      var scrolled = (winScroll / height) * 100;
      progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
    }

    if (floatingTools) {
      if (winScroll > 320) {
        floatingTools.classList.add('visible');
      } else {
        floatingTools.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. 平滑锚点跳转（针对文章内 TOC 目录）
  document.querySelectorAll('.article-toc-list a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        var targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          var offset = 80; // 避开粘性导航栏高度
          var targetPosition = targetElem.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
