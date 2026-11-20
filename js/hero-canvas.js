/**
 * 翻墙VPN.blog - 首页 Hero 动态宇宙地球与全球专线光子流光引擎
 * 纯原生 Canvas 2D 实现，零外部依赖，极高性能（视口不可见时自动休眠）
 */
(function () {
  'use strict';

  var canvas = document.getElementById('hero-cosmos-canvas');
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var heroSection = document.getElementById('hero-section');
  var isVisible = true;
  var animationFrameId = null;

  // 无障碍偏好检查
  var prefersReducedMotion = false;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    prefersReducedMotion = true;
  }

  // 画布逻辑像素尺寸与设备像素比
  var width = 0;
  var height = 0;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);

  // 鼠标交互状态
  var mouse = { x: -1000, y: -1000, active: false };

  // 内部时间戳计数
  var time = 0;

  // 实体数据容器
  var stars = [];
  var orbitalPhotons = [];
  var cityNodes = [];

  // 获取地球与轨道在当前视口下的自适应几何坐标
  function getGeometry() {
    var isMobile = width < 768;
    // 地球在右侧视角的中心点与半径
    var globeCenterX = isMobile ? width * 0.85 : width * 0.90;
    var globeCenterY = isMobile ? height * 0.78 : height * 0.72;
    var globeRadius = isMobile ? height * 0.65 : height * 0.82;

    // 日出金芒位置（位于地球上方边缘交汇处）
    var sunriseX = globeCenterX - globeRadius * 0.14;
    var sunriseY = globeCenterY - globeRadius * 0.86;

    // 三条主流动流光轨道配置（贝塞尔控制点）
    var paths = [
      {
        id: 'gold-stream',
        color: 'gold',
        p0: { x: 0, y: height * 0.94 },
        p1: { x: width * 0.32, y: height * 0.90 },
        p2: { x: width * 0.64, y: height * 0.78 },
        p3: { x: width * 0.96, y: height * 0.60 }
      },
      {
        id: 'cyan-arc-1',
        color: 'cyan',
        p0: { x: 0, y: height * 0.82 },
        p1: { x: width * 0.28, y: height * 0.64 },
        p2: { x: width * 0.58, y: height * 0.40 },
        p3: { x: width * 0.88, y: height * 0.24 }
      },
      {
        id: 'cyan-arc-2',
        color: 'cyan-bright',
        p0: { x: width * 0.04, y: height * 0.68 },
        p1: { x: width * 0.35, y: height * 0.50 },
        p2: { x: width * 0.66, y: height * 0.28 },
        p3: { x: width * 0.94, y: height * 0.16 }
      }
    ];

    return {
      globeCenterX: globeCenterX,
      globeCenterY: globeCenterY,
      globeRadius: globeRadius,
      sunriseX: sunriseX,
      sunriseY: sunriseY,
      paths: paths
    };
  }

  // 计算三次贝塞尔曲线任意插值点
  function getCubicPoint(p0, p1, p2, p3, t) {
    var mt = 1 - t;
    var mt2 = mt * mt;
    var mt3 = mt2 * mt;
    var t2 = t * t;
    var t3 = t2 * t;

    return {
      x: mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x,
      y: mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y
    };
  }

  // 初始化深空微粒与拓扑节点
  function initStars() {
    stars = [];
    var count = width < 768 ? 32 : 65;
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * (width * 0.85),
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.015,
        phase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        isGold: Math.random() < 0.2
      });
    }
  }

  // 初始化沿轨道飞行的光子束
  function initPhotons() {
    orbitalPhotons = [];
    var count = width < 768 ? 20 : 38;
    for (var i = 0; i < count; i++) {
      var pathIdx = Math.floor(Math.random() * 3);
      orbitalPhotons.push({
        pathIdx: pathIdx,
        t: Math.random(),
        speed: (Math.random() * 0.0028 + 0.0018) * (pathIdx === 0 ? 1.35 : 1.0),
        size: Math.random() * 2.2 + 1.2,
        tailLength: Math.floor(Math.random() * 12) + 14,
        alpha: Math.random() * 0.5 + 0.5
      });
    }
  }

  // 初始化地球表面关键网络节点脉冲（模拟全球专线核心机房）
  function initCityNodes() {
    cityNodes = [];
    var geom = getGeometry();
    var cx = geom.globeCenterX;
    var cy = geom.globeCenterY;
    var r = geom.globeRadius;

    var nodeOffsets = [
      { dx: -0.42, dy: -0.32, color: '#fbbf24' },
      { dx: -0.32, dy: -0.46, color: '#38bdf8' },
      { dx: -0.22, dy: -0.28, color: '#fbbf24' },
      { dx: -0.15, dy: -0.54, color: '#38bdf8' },
      { dx: -0.35, dy: -0.16, color: '#38bdf8' },
      { dx: -0.06, dy: -0.38, color: '#60a5fa' },
      { dx: -0.26, dy: -0.64, color: '#fbbf24' }
    ];

    nodeOffsets.forEach(function (off, idx) {
      cityNodes.push({
        x: cx + r * off.dx,
        y: cy + r * off.dy,
        phase: idx * 0.9,
        size: 2.2 + Math.random() * 1.4,
        color: off.color
      });
    });
  }

  // 尺寸调整
  function resize() {
    var rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    initStars();
    initPhotons();
    initCityNodes();
  }

  // 绘制星空微粒与微弱网络连线
  function drawStars() {
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];

      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = width * 0.85;
      if (s.x > width * 0.85) s.x = 0;
      if (s.y < 0) s.y = height;
      if (s.y > height) s.y = 0;

      // 鼠标微引力
      if (mouse.active) {
        var dx = mouse.x - s.x;
        var dy = mouse.y - s.y;
        var dist = Math.hypot(dx, dy);
        if (dist < 130 && dist > 1) {
          s.x += (dx / dist) * 0.3;
          s.y += (dy / dist) * 0.3;
        }
      }

      var currentAlpha = s.alpha * (0.6 + 0.4 * Math.sin(time * s.twinkleSpeed * 60 + s.phase));

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.isGold
        ? 'rgba(251, 191, 36, ' + currentAlpha + ')'
        : 'rgba(147, 197, 253, ' + currentAlpha + ')';
      ctx.fill();

      // 近邻连线（网络拓扑感）
      for (var j = i + 1; j < stars.length; j++) {
        var s2 = stars[j];
        var dist2 = Math.hypot(s.x - s2.x, s.y - s2.y);
        if (dist2 < 70) {
          var lineAlpha = (1 - dist2 / 70) * 0.1 * currentAlpha;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s2.x, s2.y);
          ctx.strokeStyle = 'rgba(56, 189, 248, ' + lineAlpha + ')';
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
  }

  // 绘制日冕与大气光晕呼吸
  function drawFlare(geom) {
    var fx = geom.sunriseX;
    var fy = geom.sunriseY;

    var pulse = Math.sin(time * 1.6) * 0.5 + 0.5; // 0 ~ 1
    var flareRadius = 75 + pulse * 28;

    // 日出核心强光晕
    var grad = ctx.createRadialGradient(fx, fy, 0, fx, fy, flareRadius);
    grad.addColorStop(0, 'rgba(255, 255, 255, ' + (0.85 + pulse * 0.15) + ')');
    grad.addColorStop(0.2, 'rgba(254, 240, 138, ' + (0.6 + pulse * 0.2) + ')');
    grad.addColorStop(0.5, 'rgba(245, 158, 11, ' + (0.3 + pulse * 0.15) + ')');
    grad.addColorStop(0.85, 'rgba(59, 130, 246, 0.1)');
    grad.addColorStop(1, 'rgba(3, 7, 24, 0)');

    ctx.save();
    ctx.beginPath();
    ctx.arc(fx, fy, flareRadius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // 日冕横向星芒射线
    var rayLen = 110 + pulse * 45;
    var rayGrad = ctx.createLinearGradient(fx - rayLen, fy, fx + rayLen, fy);
    rayGrad.addColorStop(0, 'rgba(251, 191, 36, 0)');
    rayGrad.addColorStop(0.5, 'rgba(255, 255, 255, ' + (0.45 + pulse * 0.3) + ')');
    rayGrad.addColorStop(1, 'rgba(251, 191, 36, 0)');

    ctx.beginPath();
    ctx.strokeStyle = rayGrad;
    ctx.lineWidth = 1.8;
    ctx.moveTo(fx - rayLen, fy);
    ctx.lineTo(fx + rayLen, fy);
    ctx.stroke();

    ctx.restore();
  }

  // 绘制轨道与穿梭流动光子
  function drawOrbitsAndPhotons(geom) {
    var paths = geom.paths;

    // 1. 轨道轻微光弧
    paths.forEach(function (p, idx) {
      ctx.beginPath();
      ctx.moveTo(p.p0.x, p.p0.y);
      ctx.bezierCurveTo(p.p1.x, p.p1.y, p.p2.x, p.p2.y, p.p3.x, p.p3.y);

      if (idx === 0) {
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.24)';
        ctx.lineWidth = 2.2;
      } else if (idx === 1) {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.18)';
        ctx.lineWidth = 1.5;
      } else {
        ctx.strokeStyle = 'rgba(96, 165, 250, 0.14)';
        ctx.lineWidth = 1.2;
      }
      ctx.stroke();
    });

    // 2. 飞行光子及渐隐拖尾
    orbitalPhotons.forEach(function (ph) {
      var p = paths[ph.pathIdx];
      ph.t += ph.speed;
      if (ph.t > 1) {
        ph.t = 0;
        ph.pathIdx = Math.floor(Math.random() * paths.length);
      }

      var head = getCubicPoint(p.p0, p.p1, p.p2, p.p3, ph.t);

      // 计算拖尾轨迹
      var tailPoints = [];
      var steps = 8;
      var stepDelta = ph.tailLength / 1000;
      for (var s = 1; s <= steps; s++) {
        var prevT = ph.t - (s / steps) * stepDelta;
        if (prevT > 0) {
          tailPoints.push(getCubicPoint(p.p0, p.p1, p.p2, p.p3, prevT));
        }
      }

      var isGold = p.color === 'gold';
      var glowColor = isGold ? '#f59e0b' : '#38bdf8';

      // 绘制流光尾迹
      if (tailPoints.length > 1) {
        ctx.beginPath();
        ctx.moveTo(head.x, head.y);
        for (var k = 0; k < tailPoints.length; k++) {
          ctx.lineTo(tailPoints[k].x, tailPoints[k].y);
        }
        var grad = ctx.createLinearGradient(
          head.x, head.y,
          tailPoints[tailPoints.length - 1].x, tailPoints[tailPoints.length - 1].y
        );
        grad.addColorStop(0, isGold ? 'rgba(255, 255, 255, 0.85)' : 'rgba(56, 189, 248, 0.85)');
        grad.addColorStop(0.35, isGold ? 'rgba(251, 191, 36, 0.55)' : 'rgba(0, 240, 255, 0.55)');
        grad.addColorStop(1, 'rgba(3, 7, 24, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = ph.size * 1.4;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // 绘制光子亮核
      ctx.save();
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(head.x, head.y, ph.size, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.restore();
    });
  }

  // 绘制全球节点脉冲
  function drawCityNodes() {
    cityNodes.forEach(function (n) {
      var pulse = (Math.sin(time * 2.8 + n.phase) + 1) / 2;
      var r = n.size + pulse * 1.8;
      var ringR = n.size + pulse * 9;

      // 脉冲波纹环
      ctx.beginPath();
      ctx.arc(n.x, n.y, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = n.color === '#fbbf24'
        ? 'rgba(251, 191, 36, ' + (1 - pulse) * 0.45 + ')'
        : 'rgba(56, 189, 248, ' + (1 - pulse) * 0.45 + ')';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 亮核
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.fill();
    });
  }

  // 动画主循环
  function animate() {
    if (!isVisible) return;

    time += 0.016;
    ctx.clearRect(0, 0, width, height);

    var geom = getGeometry();

    drawStars();
    drawFlare(geom);
    drawOrbitsAndPhotons(geom);
    drawCityNodes();

    animationFrameId = requestAnimationFrame(animate);
  }

  // 视口观察器（离开可视区域时自动暂停省电）
  if ('IntersectionObserver' in window && heroSection) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            cancelAnimationFrame(animationFrameId);
            animate();
          }
        } else {
          isVisible = false;
          cancelAnimationFrame(animationFrameId);
        }
      });
    }, { threshold: 0.05 });

    observer.observe(heroSection);
  }

  // 鼠标交互监听
  if (heroSection) {
    heroSection.addEventListener('mousemove', function (e) {
      var rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });

    heroSection.addEventListener('mouseleave', function () {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    });
  }

  // 窗口重绘防抖
  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
    }, 150);
  });

  // 首次启动
  resize();
  if (!prefersReducedMotion) {
    animate();
  }
})();
