/**
 * 30篇全平台客户端使用与进阶教程数据源
 * 覆盖 Windows, Android, iOS, macOS, 软路由/Linux, 进阶调优
 */

export const guidesData = [
  // --- 1. Windows 客户端教程 (1-6) ---
  {
    id: 'clash-verge-rev-windows',
    slug: 'clash-verge-rev-windows-tutorial',
    platform: 'windows',
    platformName: 'Windows 教程',
    icon: '🪟',
    title: 'Clash Verge Rev Windows 图文配置全教程 (Mihomo内核与TUN模式)',
    seoTitle: 'Clash Verge Rev Windows使用教程2026最新版 · 订阅导入与TUN模式配置',
    description: '2026最新 Windows 平台主力翻墙客户端 Clash Verge Rev 完整使用指南，涵盖客户端下载、机场节点订阅导入、系统代理与全局TUN模式设置。',
    readTime: '8 分钟',
    date: '2026-03-20',
    tags: ['Clash Verge Rev', 'Windows翻墙', 'TUN模式', 'Mihomo'],
    summary: 'Clash Verge Rev 是当前 Windows 平台最受欢迎的开源代理客户端。本教程手把手教你如何下载安装、导入机场订阅、开启系统代理并配置 TUN 虚拟网卡接管全系统流量。',
    sections: [
      {
        h2: '一、Clash Verge Rev 客户端简介与下载',
        content: '<p>由于原版 Clash for Windows 已停止维护，基于开源 <strong>Mihomo (Clash.Meta)</strong> 内核开发的 <strong>Clash Verge Rev</strong> 已成为目前 Windows 上最稳定、界面最现代化且功能最强大的代理工具。它完全支持最新的 Hysteria 2、TUIC、Vless Reality 等前沿翻墙协议。</p><p>建议始终从官方 GitHub Release 页面下载以 <code>.msi</code> 或 <code>.exe</code> 结尾的最新 64 位安装包。首次安装完成后建议在“设置”中将语言切换为简体中文。</p>'
      },
      {
        h2: '二、获取并导入机场订阅链接',
        content: '<p>登录你所购买的优质机场后台（如本站实测推荐的微风网络、暮光网络或隐形人专线），找到“一键导入”或“复制订阅链接”。</p><ol><li>打开 Clash Verge Rev，点击左侧菜单栏的 <strong>“订阅” (Profiles)</strong>。</li><li>在顶部输入框中粘贴你的机场专属订阅链接。</li><li>点击 <strong>“导入” (Import)</strong>，客户端会自动下载远程节点列表并在本地保存配置。</li><li>右键该订阅卡片，可设置定时自动更新周期（建议设置为 24 小时自动更新）。</li></ol>',
        callout: {
          type: 'tip',
          title: '新手提示',
          text: '若一键导入失败，可复制订阅链接后选择手动添加，或使用订阅转换工具转换为 Clash 格式。'
        }
      },
      {
        h2: '三、选择分流策略组与节点选择',
        content: '<p>点击左侧的 <strong>“代理” (Proxy)</strong> 标签页，你会看到机场提供的节点分类：</p><ul><li><strong>节点选择 (PROXY / Auto)：</strong>通常建议手动选择稳定性最高、延迟最低的专线节点（如香港 IEPL 01、日本 IPLC 01），或者选择“自动选择/负载均衡”。</li><li><strong>规则模式 (Rule)：</strong>请务必将出站模式设置为 <strong>“规则 (Rule)”</strong> 模式，国内网站（如百度、淘宝）将直连不消耗流量，外网网站（如 Google、YouTube、GitHub）则自动走代理。</li></ul>'
      },
      {
        h2: '四、开启系统代理与 TUN 虚拟网卡模式',
        content: '<p>在左侧 <strong>“设置” (Settings)</strong> 中，开启 <strong>“系统代理” (System Proxy)</strong> 开关，此时浏览器即可正常访问海外网络。</p><p>如果你需要给无法设置代理的软件翻墙（如部分外服网游、Epic Games、Steam 下载、WSL2 或命令行 Git），请在设置中开启 <strong>“TUN 模式”</strong>。TUN 模式会创建虚拟网卡接管系统底层所有 TCP/UDP 流量，实现真正的全局翻墙。</p>',
        callout: {
          type: 'warning',
          title: '权限要求',
          text: '开启 TUN 模式需要 Windows 管理员权限，首次开启请允许安装虚拟网卡服务。'
        }
      }
    ],
    faq: [
      { q: '为什么导入订阅后网页依然打不开？', a: '请检查是否开启了系统代理开关，并在“代理”界面点击节点进行连通性延迟测试，确保选中的节点有有效毫秒数值。' },
      { q: 'Clash Verge Rev 提示 Service Mode 未安装？', a: 'TUN 模式依赖核心服务，点击设置界面中“服务模式 (Service Mode)”旁边的“安装”，重启软件后即可正常开启。' }
    ]
  },
  {
    id: 'v2rayn-windows-tutorial',
    slug: 'v2rayn-windows-tutorial',
    platform: 'windows',
    platformName: 'Windows 教程',
    icon: '🪟',
    title: 'v2rayN 7.x Windows 客户端最新配置教程 (Xray/Sing-box双核心)',
    seoTitle: 'v2rayN Windows使用教程2026 · Xray与Sing-box内核配置指南',
    description: '详细讲解经典 Windows 代理工具 v2rayN 7.x 版本的安装、订阅导入、内核切换、路由分流规则与系统代理设置，适合追求低资源占用的用户。',
    readTime: '7 分钟',
    date: '2026-03-18',
    tags: ['v2rayN', 'Windows梯子', 'Xray', 'V2Ray'],
    summary: 'v2rayN 是 Windows 平台上资历最深、稳定性最高的网络代理工具之一。支持 V2Ray、Xray、Sing-box 等多种内核，内存占用极小。本指南带你掌握从零配置 v2rayN 7.x 的完整步骤。',
    sections: [
      {
        h2: '一、v2rayN 客户端下载与环境准备',
        content: '<p>访问 v2rayN 官方 GitHub Release 页面，建议下载带内核的完整压缩包（例如 <code>v2rayN-with-Core.zip</code>）。下载后解压到非系统盘的纯英文路径文件夹中（如 <code>D:\\Tools\\v2rayN</code>）。</p><p>运行前请确保已安装微软官方 <strong>.NET 8.0 Desktop Runtime</strong> 运行库，否则启动时可能会提示缺少组件或直接闪退。</p>'
      },
      {
        h2: '二、添加订阅与更新节点',
        content: '<p>打开软件后，在顶部导航栏依次点击：</p><ol><li><strong>“订阅分组” -> “订阅分组设置”</strong>。</li><li>点击“添加”，输入备注名称（如“我的专线机场”），在“可选地址 (url)”一栏中粘贴机场提供的 v2ray 订阅地址。</li><li>点击确定保存。</li><li>回到主界面，点击顶部菜单 <strong>“订阅分组” -> “更新全部订阅 (不通过代理)”</strong>，稍等数秒即可看到所有节点列表载入完毕。</li></ol>'
      },
      {
        h2: '三、选择活动节点与路由规则',
        content: '<p>在节点列表中，按 <code>Ctrl + A</code> 全选节点，按 <code>Ctrl + R</code> 运行真实连接延迟测试（测延迟）。测试完毕后，双击选择一个延迟低且状态正常的节点，该节点名前面会出现蓝色的活动标记。</p><p>在底部工具栏中，将 <strong>“路由”</strong> 选项设置为 <strong>“绕过大陆 (Whitelist)”</strong> 或 <strong>“绕过局域网及大陆地址”</strong>，保证日常访问微信、知乎、网银不走代理。</p>'
      },
      {
        h2: '四、开启系统代理与自启动',
        content: '<p>在底部状态栏将“系统代理”下拉框切换为 <strong>“自动配置系统代理”</strong>，此时电脑托盘图标会由蓝色变为红色，代表系统代理已正式生效。你可以在“设置”中勾选“开机自动启动”，实现日常无感翻墙。</p>'
      }
    ],
    faq: [
      { q: '测速显示 -1 毫秒或连接超时？', a: '请检查电脑系统时间是否准确。V2Ray/VMess 协议对系统时间非常敏感，时间误差超过 90 秒会导致认证失败。' },
      { q: '如何开启全局代理？', a: '在底部的路由规则中选择“全局 (Global)”，并将系统代理设为自动配置即可。' }
    ]
  },
  {
    id: 'sing-box-windows-tutorial',
    slug: 'sing-box-windows-tutorial',
    platform: 'windows',
    platformName: 'Windows 教程',
    icon: '🪟',
    title: 'Sing-box Windows 官方客户端使用指南 (极速多协议支持)',
    seoTitle: 'Sing-box Windows教程2026 · 新一代通用代理平台配置教学',
    description: '新一代通用代理通用平台 Sing-box 客户端在 Windows 上的图文配置指南，涵盖独立配置导入、内置规则集分流与 TUN 全局模式详解。',
    readTime: '8 分钟',
    date: '2026-03-15',
    tags: ['Sing-box', 'Windows代理', '新一代协议'],
    summary: 'Sing-box 是目前性能最强悍的新一代代理内核，具备内存占用低、路由性能强、对 Hysteria 2 / TUIC / ShadowTLS 协议原生支持优秀的特点。',
    sections: [
      {
        h2: '一、认识 Sing-box 及其图形客户端',
        content: '<p>Sing-box 是由 SagerNet 团队打造的通用代理平台，其性能远超旧式代理架构。在 Windows 平台上，官方提供了现代化的图形界面客户端。它能直接解析原生 Sing-box 格式的订阅，带来秒级节点测速与极速连接体验。</p>'
      },
      {
        h2: '二、配置订阅导入与模式切换',
        content: '<p>打开 Sing-box 客户端，进入 Profiles 页面，点击右上角的“+”号选择“New Profile”，粘贴机场后台的 Sing-box 专用订阅链接。保存后点击 Update 刷新节点。进入 Dashboard 页面选择优选专线节点，一键开启系统代理即可畅享高速体验。</p>'
      }
    ],
    faq: [
      { q: '为什么很多机场不提供 Sing-box 订阅？', a: '较老的机场面板可能未升级。可以使用 SubConverter 订阅转换工具将 Clash/V2Ray 链接转换为 Sing-box 格式。' }
    ]
  },
  {
    id: 'clash-nyanpasu-tutorial',
    slug: 'clash-nyanpasu-tutorial',
    platform: 'windows',
    platformName: 'Windows 教程',
    icon: '🪟',
    title: 'Clash Nyanpasu 极简高颜值 Windows 翻墙客户端使用手册',
    seoTitle: 'Clash Nyanpasu教程 · 基于Tauri的轻量高颜值Clash客户端',
    description: '基于 Rust Tauri 框架打造的轻量级 Clash 客户端 Clash Nyanpasu 深度测评与使用教程，内存仅占用几十兆。',
    readTime: '6 分钟',
    date: '2026-03-12',
    tags: ['Clash Nyanpasu', 'Tauri', '轻量代理'],
    summary: '如果你觉得传统 Electron 开发的客户端体积庞大、内存占用高，那么基于 Tauri 的 Clash Nyanpasu 绝对是你的首选，启动飞快且界面精致。',
    sections: [
      {
        h2: '一、极简主义的设计美学与优势',
        content: '<p>Clash Nyanpasu 采用 Rust 驱动的前端架构，彻底摆脱了 Chromium 的臃肿体积。安装包仅几十兆，后台常驻内存占用通常不到 50MB，对轻薄本和老旧电脑极其友好。</p>'
      },
      {
        h2: '二、导入订阅与快速配置',
        content: '<p>在“配置”面板点击“+ 添加”，输入机场订阅链接即可完成同步。支持一键测试所有节点延迟，并内置了直观的节点分组视图。</p>'
      }
    ],
    faq: [
      { q: 'Clash Nyanpasu 支持 TUN 模式吗？', a: '支持。在内核设置中开启 Mihomo 内核并安装服务模式，即可开启 TUN 虚拟网卡模式。' }
    ]
  },
  {
    id: 'hiddify-windows-tutorial',
    slug: 'hiddify-windows-tutorial',
    platform: 'windows',
    platformName: 'Windows 教程',
    icon: '🪟',
    title: 'Hiddify Next 全协议 Windows 客户端配置教程 (小白友好全自动分流)',
    seoTitle: 'Hiddify Windows客户端使用教程 · 自动分流与多协议全支持',
    description: '多平台通用翻墙客户端 Hiddify Next 在 Windows 下的快速配置教程，界面现代化，内置一键测速与智能路由。',
    readTime: '6 分钟',
    date: '2026-03-10',
    tags: ['Hiddify', 'Windows', '全协议翻墙'],
    summary: 'Hiddify Next 拥有目前所有翻墙软件中最友好的 UI 交互。支持全协议导入，新手用户无需理解复杂的规则配置文件即可实现开箱即用。',
    sections: [
      {
        h2: '一、Hiddify Next 的特色功能',
        content: '<p>Hiddify 采用 Flutter 构建，全平台 UI 完全一致。自动支持 Clash、V2Ray、Sing-box、Shadowsocks 等各种格式的订阅链接，完全不需要手动使用订阅转换。</p>'
      },
      {
        h2: '二、快速连接与节点测速',
        content: '<p>直接在首页点击大圆圈“连接”，点击右上角“+”号选择“从剪贴板添加链接”。软件会自动识别机场订阅并下载全部节点。点击测试全部延迟，挑选绿色低延迟节点即可流畅翻墙。</p>'
      }
    ],
    faq: [
      { q: '开启后无法访问局域网打印机？', a: '在设置中勾选“允许局域网连接”和“绕过局域网地址”即可解决。' }
    ]
  },
  {
    id: 'windows-tun-mode-setup',
    slug: 'windows-tun-mode-setup',
    platform: 'windows',
    platformName: 'Windows 教程',
    icon: '🪟',
    title: 'Windows 全局 TUN 模式虚拟网卡深度配置指南 (游戏/Git/全系统代理)',
    seoTitle: 'Windows TUN模式配置教程 · 彻底接管全局流量解决外服游戏与命令行代理',
    description: '深度讲解 Windows 系统下 TUN 虚拟网卡模式的工作原理与配置方案，解决普通系统代理无法覆盖游戏、CMD、PowerShell 与 WSL 的痛点。',
    readTime: '9 分钟',
    date: '2026-03-08',
    tags: ['TUN模式', '虚拟网卡', '游戏加速', '终端代理'],
    summary: '普通系统代理（System Proxy）仅对标准 HTTP/HTTPS 应用程序生效，而很多外服游戏客户端、Git 命令行工具都不走系统代理。开启 TUN 模式是终极解决方案。',
    sections: [
      {
        h2: '一、为什么需要 TUN 虚拟网卡模式？',
        content: '<p>传统的系统代理只是在 Windows 注册表中设置了一个本地端口（如 127.0.0.1:7890），许多基于 UDP 协议的游戏进程、或者不遵守系统代理设置的命令行程序（如 git clone、ssh、docker pull）会直接绕过代理。TUN 模式通过在操作系统网络层创建虚拟网卡，强制截获所有 IP 数据包，实现真正的全流量接管。</p>'
      },
      {
        h2: '二、Clash Verge Rev 中的 TUN 配置要点',
        content: '<p>首先确保已安装“Service Mode”。进入设置，找到“TUN 模式”，推荐开启 <strong>Stack: gVisor / Mixed</strong>，并开启 <strong>DNS 劫持 (DNS Hijack)</strong>。这样可以彻底防止 DNS 污染与 DNS 泄露，外服游戏也能获得专线级别的网络稳定性。</p>'
      }
    ],
    faq: [
      { q: '开启 TUN 模式后电脑无法联网？', a: '多半是由于核心崩溃或未正确获取网关。尝试在适配器设置中重置虚拟网卡，或关闭 TUN 后重启网络。' }
    ]
  },

  // --- 2. Android 安卓端教程 (7-12) ---
  {
    id: 'clash-meta-android-tutorial',
    slug: 'clash-meta-android-tutorial',
    platform: 'android',
    platformName: 'Android 教程',
    icon: '🤖',
    title: 'Clash Meta for Android (CMFA) 安卓手机配置完整教程',
    seoTitle: 'Clash Meta for Android安卓使用教程2026 · 手机端配置与分流',
    description: '安卓手机端主力翻墙工具 Clash Meta for Android (CMFA) 图文指南，支持分应用代理、Hysteria2协议与电量优化调校。',
    readTime: '8 分钟',
    date: '2026-03-18',
    tags: ['Clash Meta', '安卓翻墙', 'CMFA'],
    summary: '安卓平台上最成熟稳健的代理客户端。本文详细演示如何导入机场订阅配置、选择分流节点，并设置分应用代理以避免国内 APP 误走代理。',
    sections: [
      {
        h2: '一、CMFA 客户端获取与安装',
        content: '<p>原版 Clash for Android 已下架，目前主流维护版本为 <strong>Clash Meta for Android (简称 CMFA)</strong>。支持最新的 Xray 与 Mihomo 协议。建议从 GitHub Release 下载适合你手机 CPU 架构的 APK（现代安卓机一般选择 <code>arm64-v8a</code>）。</p>'
      },
      {
        h2: '二、配置导入与分应用代理 (核心技巧)',
        content: '<p>点击“配置” -> “新配置” -> “URL”，粘贴机场提供的订阅链接，点击右上角保存并下载。回到主页点击“配置”激活刚刚导入的卡片。</p><p>进入“设置” -> “网络” -> 勾选 <strong>“自动绕过局域网”</strong>；点击 <strong>“分应用代理”</strong>，勾选“仅允许已勾选的应用使用代理”，然后只勾选海外软件（如 Chrome、YouTube、Twitter、Telegram、ChatGPT），国内软件完全直连，既省流量又省电！</p>'
      }
    ],
    faq: [
      { q: '后台经常被系统杀掉断连？', a: '请在手机的“电池管理”中，将 Clash Meta 的省电策略设为“无限制”，并在多任务后台给它上锁。' }
    ]
  },
  {
    id: 'v2rayng-android-tutorial',
    slug: 'v2rayng-android-tutorial',
    platform: 'android',
    platformName: 'Android 教程',
    icon: '🤖',
    title: 'v2rayNG 安卓手机客户端快速入门与使用教程',
    seoTitle: 'v2rayNG使用教程 · 安卓手机V2Ray与Xray极简配置',
    description: '安卓老牌神器 v2rayNG 使用教学，轻量快速，支持扫码导入与订阅自动更新，适合轻度翻墙与查阅资料用户。',
    readTime: '6 分钟',
    date: '2026-03-15',
    tags: ['v2rayNG', '安卓翻墙', 'V2Ray'],
    summary: '界面简单明了、几乎零学习成本的经典安卓工具。支持节点剪贴板导入、二维码扫描与订阅自动同步。',
    sections: [
      {
        h2: '一、订阅添加与批量测试',
        content: '<p>点击左上角侧边栏 -> “订阅分组设置” -> “+”，粘贴订阅地址。返回主界面点击右上角三点 -> “更新订阅”。按右上角“V”图标进行真实连接延迟测试，选中延迟最低的节点即可。</p>'
      }
    ],
    faq: [
      { q: '如何开启智能分流？', a: '在设置中找到“路由设置” -> “预定义规则”，选择“绕过局域网及大陆地址”。' }
    ]
  },
  {
    id: 'sing-box-android-tutorial',
    slug: 'sing-box-android-tutorial',
    platform: 'android',
    platformName: 'Android 教程',
    icon: '🤖',
    title: 'Sing-box Android 官方移动端配置与省电优化教程',
    seoTitle: 'Sing-box安卓教程 · 高性能低功耗移动端翻墙指南',
    description: '针对安卓平台优化极佳的 Sing-box 客户端使用教程，超低后台功耗，高速支持最新加密协议。',
    readTime: '7 分钟',
    date: '2026-03-14',
    tags: ['Sing-box', 'Android', '省电翻墙'],
    summary: '很多用户抱怨手机翻墙后台发热耗电严重，Sing-box 基于 Go 与原生 Rust 内核开发，内存占用比传统客户端低 50% 以上。',
    sections: [
      {
        h2: '一、配置导入与开启 TUN',
        content: '<p>从 Google Play 或 GitHub 下载 Sing-box 官方客户端。通过 Profile 导入机场提供的 Sing-box 链接，开启全局 TUN 虚拟网卡，体验秒开 YouTube 4K 的畅快感。</p>'
      }
    ],
    faq: [
      { q: 'Sing-box 为什么耗电这么低？', a: '其内核精简高效，没有使用沉重的 Webview 框架，网络协议栈高度优化。' }
    ]
  },
  {
    id: 'nekobox-android-tutorial',
    slug: 'nekobox-android-tutorial',
    platform: 'android',
    platformName: 'Android 教程',
    icon: '🤖',
    title: 'NekoBox for Android 极致多协议客户端使用全攻略',
    seoTitle: 'NekoBox安卓使用教程 · 兼容全协议的开源翻墙神器',
    description: 'NekoBox 是安卓端功能最全面的代理工具之一，基于 Sing-box 内核，支持全协议与高度定制化分流规则。',
    readTime: '7 分钟',
    date: '2026-03-11',
    tags: ['NekoBox', '安卓代理', '开源工具'],
    summary: '支持所有主流协议（VMess、VLESS、Trojan、Shadowsocks、Hysteria 2、TUIC、WireGuard），是进阶玩家的不二之选。',
    sections: [
      {
        h2: '一、订阅设置与内核选型',
        content: '<p>进入配置分组导入订阅，支持设置节点重命名规则，支持测速过滤，适合拥有多个机场订阅的重度翻墙用户统一管理。</p>'
      }
    ],
    faq: [
      { q: '提示内核权限不足？', a: '在应用详情中授予其所有网络及后台自启动权限即可。' }
    ]
  },
  {
    id: 'hiddify-android-tutorial',
    slug: 'hiddify-android-tutorial',
    platform: 'android',
    platformName: 'Android 教程',
    icon: '🤖',
    title: 'Hiddify Android 手机端一键连接与节点自动测速指南',
    seoTitle: 'Hiddify安卓教程 · 界面优雅的新手一键翻墙神器',
    description: '针对新手用户量身打造的 Hiddify Android 客户端图文指南，无需任何繁琐设置，粘贴链接一键开启。',
    readTime: '5 分钟',
    date: '2026-03-09',
    tags: ['Hiddify', '安卓新手', '一键翻墙'],
    summary: '界面友好，内置动态测速机制，自动为你选择当前延迟最低、速度最快的节点线路。',
    sections: [
      {
        h2: '一、一键导入与连接',
        content: '<p>在应用内点击“添加配置”，软件会自动读取剪贴板中的订阅链接。点击主界面的“连接”开关即可建立加密通道。</p>'
      }
    ],
    faq: [
      { q: '连接后无法测速？', a: '在应用设置中切换测速服务器为 Google 或 Cloudflare 即可。' }
    ]
  },
  {
    id: 'android-battery-optimization',
    slug: 'android-battery-optimization',
    platform: 'android',
    platformName: 'Android 教程',
    icon: '🤖',
    title: '安卓手机翻墙后台常驻保活与防掉线电池优化设置教学',
    seoTitle: '安卓翻墙后台保活教程 · 解决锁屏断连、掉线与杀后台问题',
    description: '解决小米 MIUI/HyperOS、华为鸿蒙、OPPO ColorOS、vivo OriginOS 翻墙客户端锁屏断连、收不到 Telegram/Gmail 推送的终极解决办法。',
    readTime: '8 分钟',
    date: '2026-03-06',
    tags: ['后台保活', '安卓防断连', '电池优化'],
    summary: '国内各大手机厂商的系统为了省电，默认会在锁屏后强行杀死 VPN 进程。本文针对各主流系统提供保活配置清单。',
    sections: [
      {
        h2: '一、三大关键保活设置',
        content: '<ol><li><strong>自启动权限：</strong>允许代理软件开机自启和关联启动。</li><li><strong>电池策略无限制：</strong>关闭“智能省电”或“省电推荐”，改为“无限制”。</li><li><strong>多任务卡片加锁：</strong>在多任务界面下拉应用卡片点击小锁图标。</li></ol>'
      }
    ],
    faq: [
      { q: '为什么还是收不到海外推送？', a: '海外软件依赖 Google GMS 服务，请确保系统已安装完整的 Google Play 框架并在国外节点下保持连接。' }
    ]
  },

  // --- 3. iOS 苹果端教程 (13-18) ---
  {
    id: 'shadowrocket-ios-tutorial',
    slug: 'shadowrocket-ios-tutorial',
    platform: 'ios',
    platformName: 'iOS 教程',
    icon: '🍎',
    title: 'Shadowrocket (小火箭) iOS 完整配置图文教程 (从入门到精通)',
    seoTitle: 'Shadowrocket小火箭教程2026最新 · iOS翻墙配置与分流',
    description: '苹果 iPhone / iPad 最常用的翻墙神器 Shadowrocket (小火箭) 完整使用手册，涵盖订阅导入、全局路由、分流规则更新与场景模式配置。',
    readTime: '9 分钟',
    date: '2026-03-19',
    tags: ['Shadowrocket', '小火箭', 'iOS翻墙', 'iPhone梯子'],
    summary: 'Shadowrocket 性价比极高（美区 2.99 美元），功能极为全面，支持扫码导入、定时自动更新订阅与精细化域名分流。',
    sections: [
      {
        h2: '一、小火箭客户端获取方式',
        content: '<p>由于国内政策原因，Shadowrocket 在中国大陆 App Store 已下架。需要使用非国区（推荐美区、港区或日区）的 Apple ID 登录 App Store 进行购买下载。注意：请在 App Store 内登录，切勿在手机系统设置的 iCloud 中登录他人的外区账号！</p>'
      },
      {
        h2: '二、导入节点订阅与全局路由设置',
        content: '<p>打开小火箭，点击右上角“+”号。类型选择 <strong>“Subscribe” (订阅)</strong>，在 URL 中粘贴机场后台复制的专属小火箭订阅链接。点击保存，小火箭会自动下载并展开所有节点。</p><p>在主界面，将 <strong>“全局路由”</strong> 选项设置为 <strong>“配置 (Config)”</strong>。这是小火箭的智能分流模式，国内应用直连，国外应用走代理。</p>'
      },
      {
        h2: '三、开启连接与安装 VPN 描述文件',
        content: '<p>首次点击主界面顶部的连接开关时，iOS 系统会弹窗提示“Shadowrocket 想添加 VPN 配置”，点击 <strong>“允许 (Allow)”</strong> 并输入手机锁屏密码确认即可生效。</p>'
      }
    ],
    faq: [
      { q: '小火箭为什么节点测试全部超时？', a: '长按底部的延迟测试按钮，将测试方式切换为“CONNECT”或“HTTP”测试真实连通性。' },
      { q: '小火箭如何开启自动更新订阅？', a: '进入“设置” -> “订阅”，勾选“打开时更新”和“自动后台更新”。' }
    ]
  },
  {
    id: 'quantumult-x-tutorial',
    slug: 'quantumult-x-tutorial',
    platform: 'ios',
    platformName: 'iOS 教程',
    icon: '🍎',
    title: 'Quantumult X (圈X) 进阶配置教程 · 策略组与分流重写指南',
    seoTitle: 'Quantumult X教程 · 圈X配置策略组与分流教学',
    description: '苹果 iOS 平台高阶神器 Quantumult X (圈X) 详细配置指南，手把手教你编写策略组、导入远程分流规则与去广告重写。',
    readTime: '10 分钟',
    date: '2026-03-16',
    tags: ['Quantumult X', '圈X', 'iOS进阶', '分流策略'],
    summary: 'Quantumult X 界面炫酷、功能极其强大，适合有一定技术基础、追求极致分流控制与去广告功能的进阶用户。',
    sections: [
      {
        h2: '一、圈X节点订阅导入',
        content: '<p>点击右下角风车图标，在“节点”模块点击“引用 (订阅)”，输入标签名称并粘贴订阅链接。保存后在分流模块配置不同规则走不同的节点策略组。</p>'
      }
    ],
    faq: [
      { q: '圈X支持 Hysteria 2 吗？', a: '目前 Quantumult X 原生不支持 Hysteria 2，建议此类协议优先使用 Stash 或 Sing-box。' }
    ]
  },
  {
    id: 'stash-ios-tutorial',
    slug: 'stash-ios-tutorial',
    platform: 'ios',
    platformName: 'iOS 教程',
    icon: '🍎',
    title: 'Stash (Clash for iOS) 苹果手机使用教程 (完美兼容Clash规则)',
    seoTitle: 'Stash iOS教程 · 苹果手机端完美兼容Clash配置的翻墙软件',
    description: 'Stash 是 iOS 平台上与 Clash 规则最兼容的客户端，直接导入 Clash 订阅，支持 Web 仪表盘与增强分流。',
    readTime: '7 分钟',
    date: '2026-03-14',
    tags: ['Stash', 'Clash iOS', '苹果翻墙'],
    summary: '如果你在电脑上习惯了 Clash，那么 Stash 会让你无缝适应，界面与分流逻辑和桌面端 Clash 几乎完全一致。',
    sections: [
      {
        h2: '一、订阅导入与分流面板',
        content: '<p>点击配置 -> 从 URL 下载，直接粘贴机场的 Clash 订阅地址。Stash 会完整还原机场配置的所有策略组（如流媒体、ChatGPT、电报独立分流）。</p>'
      }
    ],
    faq: [
      { q: 'Stash 耗电量相比小火箭如何？', a: '两者在轻度日常使用下相差无几，Stash 处理复杂规则集时的性能调优非常出色。' }
    ]
  },
  {
    id: 'loon-ios-tutorial',
    slug: 'loon-ios-tutorial',
    platform: 'ios',
    platformName: 'iOS 教程',
    icon: '🍎',
    title: 'Loon iOS 客户端节点导入与插件生态新手教学',
    seoTitle: 'Loon使用教程 · 苹果端兼顾易用与强大插件的代理软件',
    description: 'Loon 以出色的 UI、简单易懂的配置和庞大的社区插件生态赢得了大量苹果用户的青睐，本文详解订阅与插件配置。',
    readTime: '7 分钟',
    date: '2026-03-12',
    tags: ['Loon', 'iOS代理', '插件配置'],
    summary: '兼具小火箭的上手简单与圈X的高级可玩性，其独创的 Plugin (插件) 机制让解锁流媒体与去广告变得轻而易举。',
    sections: [
      {
        h2: '一、快速添加节点与订阅更新',
        content: '<p>进入“配置” -> “节点订阅” -> 点击“+”号添加机场 URL，返回仪表盘即可快速切换节点开启代理。</p>'
      }
    ],
    faq: [
      { q: 'Loon 可以多设备共享购买吗？', a: '支持通过苹果家庭共享 (Family Sharing) 与家庭成员共享已购项目。' }
    ]
  },
  {
    id: 'sing-box-ios-tutorial',
    slug: 'sing-box-ios-tutorial',
    platform: 'ios',
    platformName: 'iOS 教程',
    icon: '🍎',
    title: 'Sing-box iOS 客户端安装与零门槛翻墙配置指南',
    seoTitle: 'Sing-box iOS教程 · 苹果手机免费开源翻墙客户端',
    description: 'Sing-box 在美区 App Store 免费提供下载，不花一分钱即可在 iPhone 上畅享新一代现代翻墙协议。',
    readTime: '6 分钟',
    date: '2026-03-09',
    tags: ['Sing-box iOS', '免费翻墙软件', 'iPhone'],
    summary: '相比小火箭（2.99刀）和圈X（4.99刀），Sing-box 在非国区 App Store 完全免费！是预算有限用户的最佳救星。',
    sections: [
      {
        h2: '一、免费获取与基础配置',
        content: '<p>登录美区 Apple ID 直接免费下载 Sing-box。导入机场提供的 Sing-box 原生订阅即可开始高速上网。'
      }
    ],
    faq: [
      { q: '免费的 Sing-box 稳定吗？', a: '非常稳定。Sing-box 是纯开源项目，由全球核心网络开发者共同维护。' }
    ]
  },
  {
    id: 'ios-us-apple-id-guide',
    slug: 'ios-us-apple-id-guide',
    platform: 'ios',
    platformName: 'iOS 教程',
    icon: '🍎',
    title: '免信用卡注册美区 Apple ID 购买小火箭完整图文教学 (2026保姆级)',
    seoTitle: '美区Apple ID注册教程2026 · 无需国外信用卡直接下载小火箭',
    description: '手把手教你用国内邮箱直接注册全新美区苹果账号，免填海外信用卡，使用苹果礼品卡轻松充值并购买 Shadowrocket 小火箭。',
    readTime: '10 分钟',
    date: '2026-03-05',
    tags: ['美区Apple ID', '小火箭购买', '苹果账号注册'],
    summary: '很多苹果用户被“无法下载小火箭”难住，其实只需 10 分钟即可自行注册一个永久属于自己的美区 Apple ID，安全且免受账号被封连累。',
    sections: [
      {
        h2: '一、注册准备与关键步骤',
        content: '<ol><li>准备一个从未注册过 Apple ID 的全新邮箱（如 163、Outlook、Gmail）。</li><li>在电脑浏览器访问苹果官网（appleid.apple.com）创建新账号，国家选择“美国”。</li><li>通过邮箱与手机短信验证码完成初步注册。</li></ol>'
      },
      {
        h2: '二、免信用卡填写免税州地址与礼品卡充值',
        content: '<p>在付款方式中选择 <strong>“None (无)”</strong>，地址生成一个美国免税州（如俄勒冈 Oregon 或特拉华 Delaware）的真实地址。购买小火箭可以在支付宝购买美区 App Store 礼品卡（兑换码）进行充值。'
      }
    ],
    faq: [
      { q: '付款方式没有“None”选项怎么办？', a: '请在手机 App Store 中直接下载一个免费软件，此时提示登录再选择新注册的账号，即可直接跳出 None 选项。' }
    ]
  },

  // --- 4. macOS 苹果电脑教程 (19-22) ---
  {
    id: 'clash-verge-rev-macos',
    slug: 'clash-verge-rev-macos-tutorial',
    platform: 'macos',
    platformName: 'macOS 教程',
    icon: '💻',
    title: 'macOS 苹果电脑 Clash Verge Rev 配置教程 (Apple Silicon原生支持)',
    seoTitle: 'macOS Clash Verge Rev教程 · M系列芯片与增强模式详解',
    description: '苹果 Mac 电脑（M1/M2/M3/M4及Intel机型）配置 Clash Verge Rev 翻墙工具图文教学，支持原生快捷键与系统代理无缝接管。',
    readTime: '7 分钟',
    date: '2026-03-17',
    tags: ['Clash Verge Rev Mac', 'macOS翻墙', 'Apple Silicon'],
    summary: '完美适配 Apple Silicon M 系列芯片，原生运行极其省电，菜单栏常驻轻巧美观。',
    sections: [
      {
        h2: '一、DMG 安装与安全性设置',
        content: '<p>从 GitHub 下载对应架构的 DMG 文件（M 系列芯片下载 <code>aarch64.dmg</code>，Intel 芯片下载 <code>x64.dmg</code>）。拖拽到 Applications 完成安装。若提示“无法打开未知名开发者应用”，前往“系统设置 -> 隐私与安全性”点击“仍要打开”。</p>'
      }
    ],
    faq: [
      { q: '如何设置开机自启？', a: '在软件设置中勾选“开机启动”和“静默启动（仅常驻状态栏）”。' }
    ]
  },
  {
    id: 'surge-mac-tutorial',
    slug: 'surge-mac-tutorial',
    platform: 'macos',
    platformName: 'macOS 教程',
    icon: '💻',
    title: 'Surge Mac 终极网络工具入门指南 · 代理接管与抓包分流',
    seoTitle: 'Surge Mac教程 · 苹果电脑顶级代理与网络调试神器',
    description: '针对高要求开发者与专业技术人员的 Surge Mac 上手教程，详细解析全功能接管、Dashboard 仪表盘分析与企业级分流。',
    readTime: '9 分钟',
    date: '2026-03-13',
    tags: ['Surge Mac', 'macOS高阶', '网络调试'],
    summary: 'Mac 平台上无出其右的顶级网络代理与分析神器，稳定性堪称工业级。',
    sections: [
      {
        h2: '一、托管配置 (Managed Profile) 导入',
        content: '<p>复制机场提供的 Surge 托管订阅，在 File -> New Profile from URL 粘贴导入。开启“Set as System Proxy”和“Enhanced Mode (增强模式)”即可全方位接管 Mac 流量。</p>'
      }
    ],
    faq: [
      { q: 'Surge 增强模式的作用？', a: '通过虚拟网卡拦截所有底层流量，彻底解决 Mac 终端命令行、虚拟机与系统后门绕过代理的问题。' }
    ]
  },
  {
    id: 'stash-macos-tutorial',
    slug: 'stash-macos-tutorial',
    platform: 'macos',
    platformName: 'macOS 教程',
    icon: '💻',
    title: 'Stash for Mac 客户端安装与机场订阅配置教学',
    seoTitle: 'Stash Mac教程 · 兼容Clash配置的优雅苹果桌面客户端',
    description: '在 Mac 上享受与 iOS 端 Stash 完全同步的配置与体验，界面现代优雅，规则管理清晰明了。',
    readTime: '6 分钟',
    date: '2026-03-10',
    tags: ['Stash Mac', '苹果电脑翻墙'],
    summary: '买一份 iOS 授权即可通过通用购买在 Mac 上直接使用，对于双端苹果生态用户来说性价比极高。',
    sections: [
      {
        h2: '一、订阅同步与状态栏操作',
        content: '<p>支持 iCloud 自动同步 iOS 端的订阅与自定义规则配置。点击顶部状态栏小图标可快速测速并选择节点。</p>'
      }
    ],
    faq: [
      { q: '如何购买 Stash Mac 版？', a: '只要在美区 App Store 购买过 iOS 版 Stash，Mac App Store 中即可直接免费下载。' }
    ]
  },
  {
    id: 'macos-system-proxy-terminal',
    slug: 'macos-system-proxy-terminal',
    platform: 'macos',
    platformName: 'macOS 教程',
    icon: '💻',
    title: 'macOS 终端 Terminal / iTerm2 命令行代理环境变量配置教学',
    seoTitle: 'Mac终端代理配置教程 · 让Terminal/Git/Brew命令畅享代理加速',
    description: '解决 Mac 终端下 git clone 龟速、brew install 频繁卡住、curl 超时的痛点，配置一行命令即可让终端瞬间加速。',
    readTime: '7 分钟',
    date: '2026-03-07',
    tags: ['Mac终端代理', 'Git加速', 'Homebrew代理'],
    summary: '即使开启了系统代理，Mac 自带的 Terminal 和 iTerm2 默认也是不走代理的。本教程教你设置简单别名实现一键开启关闭终端代理。',
    sections: [
      {
        h2: '一、在 ~/.zshrc 中添加代理别名函数',
        content: '<p>打开终端，输入 <code>nano ~/.zshrc</code>，在末尾粘贴如下配置：</p><pre><code># 开启代理 (假设本地端口为 7890)\nalias proxy=\'export http_proxy=http://127.0.0.1:7890; export https_proxy=http://127.0.0.1:7890; export all_proxy=socks5://127.0.0.1:7890; echo "Proxy on"\'\n\n# 关闭代理\nalias unproxy=\'unset http_proxy https_proxy all_proxy; echo "Proxy off"\'</code></pre><p>保存后执行 <code>source ~/.zshrc</code>，今后在终端中只需输入 <code>proxy</code> 回车，终端即可瞬间跑满专线带宽！</p>'
      }
    ],
    faq: [
      { q: '如何测试终端代理是否成功？', a: '输入 <code>curl -i https://ip.sb</code>，若返回的 IP 地址为你的境外节点 IP，则证明终端代理已生效。' }
    ]
  },

  // --- 5. 路由器与软路由 Linux 教程 (23-26) ---
  {
    id: 'openwrt-passwall-tutorial',
    slug: 'openwrt-passwall-tutorial',
    platform: 'router',
    platformName: '软路由/Linux',
    icon: '🌐',
    title: 'OpenWrt 软路由 PassWall 插件节点订阅与分流图文教程',
    seoTitle: 'PassWall软路由教程2026 · OpenWrt透明网关全屋设备翻墙',
    description: '手把手教你在软路由 OpenWrt 系统中配置 PassWall 插件，实现全屋手机、电视、PS5/Switch 游戏机及智能家居全自动无感翻墙。',
    readTime: '10 分钟',
    date: '2026-03-16',
    tags: ['PassWall', 'OpenWrt', '软路由翻墙', '全屋翻墙'],
    summary: '全屋无感翻墙的终极解决方案。所有接入家里 Wi-Fi 的设备无需安装任何客户端，自动实现国内直连、海外加速与 Apple/Netflix 流媒体分流。',
    sections: [
      {
        h2: '一、PassWall 节点列表与自动更新配置',
        content: '<p>进入 OpenWrt 后台 -> 服务 -> PassWall。在“节点列表”中添加节点或在“自动更新”中粘贴机场提供的订阅链接。开启“定时更新”确保节点列表保持最新。</p>'
      },
      {
        h2: '二、基本设置与分流模式选择',
        content: '<p>在“基本设置”中开启主开关。主节点选择低延迟的 IEPL 专线，DNS 转发建议设置为 Xray/Sing-box 本地解析并开启防泄露。分流规则选择 <strong>“中国列表外” (China-List-Out)</strong>，实现真正的全局智能分流。</p>'
      }
    ],
    faq: [
      { q: '软路由翻墙后电视看 Netflix 无法加载？', a: '在 PassWall 的流媒体分流中，将 Netflix 单独指定到解锁当地原生 IP 的优质节点上。' }
    ]
  },
  {
    id: 'openwrt-ssr-plus-tutorial',
    slug: 'openwrt-ssr-plus-tutorial',
    platform: 'router',
    platformName: '软路由/Linux',
    icon: '🌐',
    title: 'OpenWrt SSR-Plus (ShadowSocksR Plus+) 插件配置指南',
    seoTitle: 'SSR-Plus配置教程 · 经典软路由代理插件图文教学',
    description: '老牌经典 OpenWrt 插件 SSR-Plus 的订阅添加、节点切换与 GFWList 智能分流设置教程。',
    readTime: '7 分钟',
    date: '2026-03-12',
    tags: ['SSR-Plus', 'OpenWrt', '软路由'],
    summary: '如果你的路由器硬件配置较低（如硬路由刷机），SSR-Plus 是占用系统资源极低、运行非常稳定的选择。',
    sections: [
      {
        h2: '一、SSR-Plus 订阅与规则更新',
        content: '<p>在服务器节点页面下方添加订阅 URL，点击更新订阅并测试所有节点。运行模式建议选择“绕过中国大陆 IP”。</p>'
      }
    ],
    faq: [
      { q: '出现 DNS 污染无法访问 Google？', a: '在高级设置中切换 DNS 解析方式为 PDNSD 或内置 Core DNS 解析。' }
    ]
  },
  {
    id: 'clash-linux-docker-tutorial',
    slug: 'clash-linux-docker-tutorial',
    platform: 'router',
    platformName: '软路由/Linux',
    icon: '🐧',
    title: 'Linux 服务器使用 Docker 部署 Mihomo / Clash 核心教程',
    seoTitle: 'Docker部署Clash教程 · Linux服务器代理与环境配置',
    description: '针对 Linux 云服务器 (Ubuntu/Debian/CentOS) 使用 Docker 容器快速搭建 Mihomo 内核代理服务，供脚本和爬虫加速。',
    readTime: '8 分钟',
    date: '2026-03-11',
    tags: ['Docker Clash', 'Linux代理', 'Mihomo'],
    summary: '海外服务器拉取镜像慢、国内 VPS 部署海外服务时，通过一行 Docker 命令搭建轻量级代理隧道。',
    sections: [
      {
        h2: '一、Docker Compose 编写与快速运行',
        content: '<p>创建 <code>docker-compose.yml</code> 挂载本地 config.yaml 配置文件并暴露 7890 与 9090 管理端口，随时通过 Web 界面远程控制节点切换。</p>'
      }
    ],
    faq: [
      { q: '如何查看日志输出？', a: '使用 <code>docker logs -f mihomo</code> 实时查看节点连接与分流日志。' }
    ]
  },
  {
    id: 'shellcrash-router-tutorial',
    slug: 'shellcrash-router-tutorial',
    platform: 'router',
    platformName: '软路由/Linux',
    icon: '🌐',
    title: 'ShellCrash 路由器一键脚本安装与透明网关设置 (小米/华硕硬路由)',
    seoTitle: 'ShellCrash安装教程 · 免刷机硬路由SSH一键配置Clash翻墙',
    description: '针对小米红米路由器（AX3000/AX6000/AX9000）、华硕等原生固件，通过 SSH 开启 ShellCrash 实现全屋设备透明代理。',
    readTime: '9 分钟',
    date: '2026-03-08',
    tags: ['ShellCrash', '小米路由器翻墙', '硬路由'],
    summary: '无需刷成第三方 OpenWrt 固件，利用原厂固件开启 SSH 运行轻量 Shell 脚本，同样可以实现强大的分流网关。',
    sections: [
      {
        h2: '一、SSH 登录与安装脚本执行',
        content: '<p>开启路由器开发版 SSH 功能，在终端连接路由器后，运行官方一键安装命令 <code>sh -c "$(curl -kfsSl https://..."</code>，根据中文引导即可轻松完成订阅导入。</p>'
      }
    ],
    faq: [
      { q: '路由器重启后配置会丢失吗？', a: 'ShellCrash 会自动安装守护进程并设置开机自启，重启后无需重复操作。' }
    ]
  },

  // --- 6. 高级优化与排障技巧 (27-30) ---
  {
    id: 'rules-and-routing-tutorial',
    slug: 'rules-and-routing-tutorial',
    platform: 'advanced',
    platformName: '进阶调优',
    icon: '⚡',
    title: 'Clash / Sing-box 规则分流与策略组深度调优指南',
    seoTitle: '代理分流规则深度教程 · 掌握GEOIP与策略组精细化控制',
    description: '深度讲解域名匹配规则 (DOMAIN-SUFFIX、DOMAIN-KEYWORD)、IP-CIDR、GEOIP 与策略组语法，打造完美分流体验。',
    readTime: '10 分钟',
    date: '2026-03-18',
    tags: ['规则分流', '策略组', 'Clash配置', 'Sing-box规则'],
    summary: '科学的规则分流是高品质翻墙体验的核心：让 ChatGPT 走美国纯净 IP、Netflix 走新加坡解锁节点、微信知乎彻底直连。',
    sections: [
      {
        h2: '一、规则匹配优先级逻辑',
        content: '<p>代理核心在处理每个网络请求时，自上而下逐条匹配规则。一旦命中立即执行相应策略并停止后续匹配。常见顺序为：白名单直连 -> 特殊域名分流 -> 广告拦截 -> 常见海外服务 -> GEOIP CN 直连 -> MATCH 最终默认走代理。</p>'
      }
    ],
    faq: [
      { q: '如何让特定网站强制走直连？', a: '在规则最顶部添加一条 <code>DOMAIN-SUFFIX,example.com,DIRECT</code> 即可。' }
    ]
  },
  {
    id: 'subconverter-subscription-conversion',
    slug: 'subconverter-subscription-conversion',
    platform: 'advanced',
    platformName: '进阶调优',
    icon: '⚡',
    title: '节点订阅在线转换与私有 SubConverter 服务本地搭建教程',
    seoTitle: '订阅转换教程 · 解决订阅不兼容与隐私防泄露指南',
    description: '讲解如何将单一格式的节点订阅转换为 Clash、Sing-box、小火箭等多种客户端通用格式，并警惕公共转换后端偷盗节点的安全风险。',
    readTime: '8 分钟',
    date: '2026-03-15',
    tags: ['SubConverter', '订阅转换', '节点安全'],
    summary: '公共订阅转换存在严重的泄露和劫持风险。本教程教你使用官方 Docker 在自己电脑或 NAS 上搭建绝对安全的私有转换后端。',
    sections: [
      {
        h2: '一、为什么不推荐随意使用公共订阅转换？',
        content: '<p>许多公开的订阅转换网站在后台记录了用户的订阅链接并恶意抓取节点流量。强烈建议自建 Docker 或优先使用提供原生多客户端订阅的优质机场。'
      }
    ],
    faq: [
      { q: '私有搭建困难吗？', a: '极其简单，只需运行一条 <code>docker run -d -p 25500:25500 tindy2013/subconverter:latest</code> 即可。' }
    ]
  },
  {
    id: 'dns-leak-prevention-tutorial',
    slug: 'dns-leak-prevention-tutorial',
    platform: 'advanced',
    platformName: '进阶调优',
    icon: '⚡',
    title: '翻墙如何防止 DNS 泄露？Fake-IP 与 DoH 终极防护教学',
    seoTitle: 'DNS防泄露终极指南 · 避免真实IP被查与Fake-IP原理解析',
    description: '深度揭秘 DNS 泄露的本质危害，手把手教你在 Clash 和小火箭中开启 Fake-IP 与加密 DNS (DoH/DoT)，彻底消除隐私痕迹。',
    readTime: '9 分钟',
    date: '2026-03-10',
    tags: ['DNS泄露', 'Fake-IP', '隐私安全', 'DoH'],
    summary: '如果你的 DNS 请求被本地运营商拦截，即使流量本身加密，运营商也能清楚知道你访问了哪个网站。防 DNS 泄露是资深翻墙用户的必修课。',
    sections: [
      {
        h2: '一、如何自测是否存在 DNS 泄露？',
        content: '<p>在连上代理后，访问 <code>browserleaks.com/ip</code> 或 <code>dnsleaktest.com</code> 进行标准测试。如果测试结果中出现了你所在省份的中国电信/联通/移动 DNS 服务器，则证明存在严重的 DNS 泄露！</p>'
      }
    ],
    faq: [
      { q: '开启 Fake-IP 有什么副作用？', a: '部分依赖真实解析 IP 的局域网联机游戏可能会受影响，可在 fake-ip-filter 中将对应域名排除。' }
    ]
  },
  {
    id: 'airport-speedtest-latency-guide',
    slug: 'airport-speedtest-latency-guide',
    platform: 'advanced',
    platformName: '进阶调优',
    icon: '⚡',
    title: '机场节点测速全方位指南：Ping、TCP延迟、Jitter与真实下载速率分析',
    seoTitle: '机场节点科学测速教程 · 别被假延迟蒙蔽，看清真实晚高峰带宽',
    description: '拒绝商家虚假宣传！教你正确使用 Speedtest、Fast.com、YouTube 详细统计信息与脚本全面测试机场节点的真实吞吐量与抗丢包能力。',
    readTime: '8 分钟',
    date: '2026-03-05',
    tags: ['节点测速', '延迟测试', '晚高峰稳定性'],
    summary: '软件里显示的几十毫秒绿色数值往往只是 ICMP 假握手！掌握真正的测速方法才能准确评估机场性价比。',
    sections: [
      {
        h2: '一、为什么客户端测速数字不可全信？',
        content: '<p>许多机场设置了国内中转入口，客户端测试的延迟往往只是你到国内入口机器的延迟（Ping 只要 15ms），而入口到境外落地机的越洋传输延迟甚至可能高达 300ms 且严重丢包。必须用真实 TCP/HTTP 下载流量来测定性能。'
      }
    ],
    faq: [
      { q: '最客观的测速时间段是何时？', a: '每天晚上的 20:00 - 23:00（黄金晚高峰）。在这一时段不卡顿、不降速的机场才是真正的顶级专线。' }
    ]
  }
];
