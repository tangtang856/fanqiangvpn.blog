import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const airportDeepData = {
  breezenet: {
    id: "breezenet",
    name: "微风网络 Breezenet",
    subtitle: "2026综合实力榜首标杆 · ¥8/月享200GB充沛流量与IEPL/IPLC主干高速专线",
    overview: [
      "微风网络 Breezenet 是 2026 年度在网络稳定性、套餐价格与单 GB 使用成本之间取得极致平衡的旗舰级专线机场服务商。平台自上线以来，始终坚持以高标准物理光缆专线作为底层架构核心，完全规避了低价机场常见的公网隧道晚高峰跨国拥堵与高丢包痛点。",
      "在基础设施层面，微风网络在华南（广州/深圳）、华东（上海/杭州）及华北（北京）部署了多组高质量 BGP Anycast 入口，通过毫秒级动态路由识别用户本地运营商（电信/联通/移动/广电），实现全国范围内的就近极速接入。中继骨干网采用高带宽深港 IEPL 与沪日 IPLC 物理光纤内网专线，国际数据直接在封闭内网中高速穿梭，不经过公网 GFW 出口，从而保障全天候 24 小时丢包率严格趋近于 0.0%。",
      "在资费策略方面，微风网络打破了“专线即高价”的行业固有门槛，入门版套餐月付仅需 ¥8 元，即可获得高达 200GB 的可用流量，折算每 GB 成本仅为惊人的 ¥0.04（进阶版单 GB 成本更是低至 ¥0.036）。配合本站专属优惠码 weifeng90，用户可享受立减折扣，无论是高校科研文献检索、跨国电商出海运营，还是 4K/8K 超清流媒体观影与大模型 AI 对话，都能提供如同本地光纤般顺畅的丝滑体验。"
    ],
    networkTopology: {
      entryBgp: "全国多线分布式 BGP Anycast 智能就近接入（覆盖广深、沪浙、京津冀），平均接入延迟 < 15ms",
      backbone: "双路热备深港 IEPL 专线与沪日 IPLC 物理内网光纤互联，承诺二层点对点封闭式内网传输",
      egressPops: "香港 HKT/HKBN/WTT、日本 NTT/SoftBank/KDDI、新加坡 Singtel/StarHub、美西 Coresite/Equinix 原生商用机房",
      redundancy: "主备双专线链路 N+1 动态心跳监测，主光缆遇运营商割接可在 3 秒内实现毫秒级自动重路由倒换"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港 IEPL 专线 (HK-01)", ping: "21 ms", jitter: "1.1 ms", download: "895.4 Mbps", upload: "220.5 Mbps", loss: "0.0%", ytBuffer: "4K/8K秒开 (缓冲>80s)" },
      { region: "🇯🇵 日本 IPLC 专线 (JP-01)", ping: "45 ms", jitter: "1.8 ms", download: "782.1 Mbps", upload: "185.3 Mbps", loss: "0.0%", ytBuffer: "4K极速秒开" },
      { region: "🇸🇬 新加坡优化专线 (SG-01)", ping: "52 ms", jitter: "2.0 ms", download: "715.6 Mbps", upload: "168.0 Mbps", loss: "0.0%", ytBuffer: "4K秒开无缓冲" },
      { region: "🇺🇸 美国洛杉矶专线 (US-01)", ping: "135 ms", jitter: "3.2 ms", download: "542.8 Mbps", upload: "130.4 Mbps", loss: "0.1%", ytBuffer: "4K畅享拖拽秒加载" },
      { region: "🇩🇪 德国法兰克福专线 (DE-01)", ping: "148 ms", jitter: "3.9 ms", download: "475.2 Mbps", upload: "115.8 Mbps", loss: "0.2%", ytBuffer: "4K稳定流畅" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "原生纯净住宅/商用 IP 库，完美支持 ChatGPT Plus 会员充值、GPT-4o 语音模式、Sora 视频生成及 OpenAI 官方 API 零封控访问",
      claude: "高纯度原生 IP 完美避开 Anthropic 严苛的风控策略，流畅支持 Claude 3.7 Sonnet / Opus 交互与 Pro 会员订阅",
      gemini: "全节点原生解锁 Google Gemini Advanced、Google Workspace AI 与海外 Google 搜索",
      netflix: "深度解锁美区、港区、日区、台区、新加坡区及英区 Netflix 完整版权片库，支持 4K HDR 与杜比视界",
      disney: "全区畅通解锁 Disney+ 原生 4K IMAX Enhanced 高码率片源",
      youtube: "免广告会员支持，YouTube 4K/8K 码率自适应拉满，缓冲健康度长期维持在 120,000 Kbps 以上",
      tiktok: "支持海外 TikTok 短视频无水印刷推、个人创作者主页管理及跨境电商运营直播推流"
    },
    protocolTech: "微风网络全面支持 VLESS-XTLS-Reality、Shadowsocks 与 Trojan 现代抗嗅探协议栈。通过在 TLS 握手阶段模拟合规主流网站（uTLS 浏览器指纹伪装），实现流量特征深度消融。此外全节点支持原生 UDP Full-Cone NAT（全锥形 NAT），在外服联机对战（Steam、APEX 英雄、CS2、堡垒之夜）中能够实现 NAT 类型 Type A / Open，杜绝联机掉线与语音中继卡顿。",
    plansDeepDive: "微风网络目前主推两档高性价比月付计划：入门版每月仅需 ¥8 元即可获得 200GB 可用高速专线流量（折合单 GB ¥0.04），支持 4 台设备并发在线；进阶版每月 ¥18 元提供 500GB 充沛流量（折合单 GB ¥0.036），支持 6 台设备同时在线并开放千兆极速端口。所有流量均为 1.0 倍率标准结算，无任何暗倍率扣量陷阱，是目前主流专线市场中最具诚意的套餐方案。",
    extendedPros: [
      "¥8/月门槛极低，200GB 充沛专线流量完全满足 90% 用户的日常 4K 影音与工作学习需求",
      "深港与沪日物理光缆专线互联，晚高峰 20:00-23:00 丢包率恒定 0%，网络延迟波幅极低",
      "全节点纯净原生 IP 落地，主流大模型（ChatGPT/Claude）与流媒体（Netflix/Disney+）解锁率 100%",
      "提供专属优惠码 weifeng90，结算立享折扣，且支持支付宝等便捷合规支付方式",
      "全平台客户端通用订阅（Clash Verge、v2rayN、Sing-box、Shadowrocket）一键导入"
    ],
    extendedCons: [
      "由于专线高成本运营，平台暂未提供无限制的永久免费试用通道（建议直接选择 ¥8 月付体验）",
      "欧洲及南美部分冷门小众节点数量相对主流亚太地区较少，更适合核心亚太及美西出海用户",
      "高峰期若遇海缆地质级突发事件，偶尔需在客户端手动点击“更新订阅”以拉取备用应急节点"
    ],
    audienceScenarios: [
      { role: "精打细算的高频科学上网者", reason: "每月仅需 8 元即拥有一线专线品质，彻底告别公网中转晚高峰卡顿和频繁断流的烦恼。" },
      { role: "AI 生产力与提示词工程师", reason: "ChatGPT 4o 与 Claude 3.7 反应极其迅速，原生纯净 IP 有效杜绝因 IP 脏乱导致的封号与 Access Denied。" },
      { role: "4K/8K 极致影音追剧党", reason: "全区 Netflix 与 Disney+ 自动识别秒开，大带宽专线拖动进度条缓冲零等待。" },
      { role: "跨境电商外贸与多设备家庭", reason: "支持 4-6 台设备并发在线，满足一人购入全家手机、电脑、平板与智能电视全覆盖。" }
    ],
    faqList: [
      { q: "微风网络 Breezenet 的优惠码在哪里输入？", a: "登录微风网络用户后台，选择心仪套餐进入结算收银台页面，在“折扣码/优惠码”输入框中填写专属优惠码 weifeng90 并点击验证，即可立即扣减对应的折扣金额。" },
      { q: "微风网络是否会发生晚高峰限速或断流？", a: "微风网络采用物理内网专线传输，不经过公共国际互联出口，因此完全不受公网晚高峰跨国拥堵的影响。实测在晚高峰 20:30-22:30 时段，香港与日本节点延迟稳定在 20-50ms，丢包率为 0.0%。" },
      { q: "微风网络的订阅链接如何导入手机和电脑客户端？", a: "微风网络提供通用订阅格式。在用户后台复制订阅链接后，Windows 用户推荐使用 Clash Verge Rev 点击“订阅”一键粘贴导入；iOS 用户复制链接到 Shadowrocket（小火箭）右上角加号选择 Type: URL 即可秒速拉取完整节点列表。" },
      { q: "购买微风网络后支持退款或更换套餐吗？", a: "平台支持月付弹性购买，建议新用户首次优先选择 ¥8 入门版月付套餐验证本地网络效果。如需更高流量，可以在用户中心随时补差价升档至 ¥18 进阶版套餐。" }
    ]
  },

  muguang: {
    id: "muguang",
    name: "暮光网络",
    subtitle: "纯物理内网专线标杆 · 晚高峰丢包率0%的金融级出海体验",
    overview: [
      "暮光网络是专注于高端企业级与专业极客用户的标杆专线服务商，在业内以“绝对零丢包”与“晚高峰极端网络抗压能力”享负盛名。平台不采用任何廉价公网中转混淆方案，全节点均架构在合规二层纯物理光纤内网之上。",
      "针对跨国视频会议、海外服务器远程 SSH 维护、外贸海量大文件实时传输等对网络抖动零容忍的严苛场景，暮光网络构建了深圳直达香港、上海直达东京的二层点对点专线，物理规避了公网路由的所有排队节点与防火墙深度包检测（DPI）。实测数据显示，暮光网络全天候网络平均抖动（Jitter）小于 1.0ms，综合体验与专网无异。",
      "暮光网络起步套餐为 ¥20/月，提供 120GB 纯正专线流量（折合单 GB 成本约 ¥0.167）。虽然价格略高于普通大众机场，但凭借其出众的线路纯净度与极高 SLA 服务水准，赢得了广大资深外贸从业者与技术工程师的长期青睐。"
    ],
    networkTopology: {
      entryBgp: "北京、上海、广州三地多线高端核心机房专线接入，直连中国电信 ChinaNet、联通 169 与移动 CMNET 骨干网",
      backbone: "纯正端到端点对点物理 IEPL 专线打通，全程内网二层封装传输，彻底隔绝公网丢包与探测风险",
      egressPops: "香港 Mega-i、日本 Equinix TY3、新加坡 Equinix SG1、美国硅谷 SV1 核心机房原生商业静态 IP 阵列",
      redundancy: "双物理海缆多路由互为备份，光纤衰减毫秒级自愈，保障企业级 99.99% 在线率 SLA 承诺"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港纯物理专线 (HK-Direct)", ping: "19 ms", jitter: "0.8 ms", download: "870.2 Mbps", upload: "240.1 Mbps", loss: "0.0%", ytBuffer: "4K/8K瞬间响应" },
      { region: "🇯🇵 日本东京专线 (JP-Direct)", ping: "43 ms", jitter: "1.2 ms", download: "790.5 Mbps", upload: "210.0 Mbps", loss: "0.0%", ytBuffer: "4K秒开" },
      { region: "🇸🇬 新加坡专线 (SG-Direct)", ping: "51 ms", jitter: "1.5 ms", download: "720.0 Mbps", upload: "180.3 Mbps", loss: "0.0%", ytBuffer: "4K秒开" },
      { region: "🇺🇸 美国西海岸专线 (US-Direct)", ping: "128 ms", jitter: "2.4 ms", download: "580.4 Mbps", upload: "145.2 Mbps", loss: "0.0%", ytBuffer: "4K稳定畅联" },
      { region: "🇬🇧 英国伦敦专线 (UK-Direct)", ping: "142 ms", jitter: "2.9 ms", download: "510.6 Mbps", upload: "125.0 Mbps", loss: "0.1%", ytBuffer: "4K流畅" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "企业级干净静态商用 IP，支持 ChatGPT 网页版与 API 长期稳定会话，无任何频繁验证码弹窗骚扰",
      claude: "全节点通过 Anthropic 商业白名单风控检测，Claude 3.7 Sonnet 极速响应，长文本生成零中断",
      gemini: "完美支持 Google 全家桶与 Gemini Advanced 深度学习研发测试",
      netflix: "香港、日本、美国、英国原生住宅 IP 解锁对应片库，支持 4K 超清最高比特率串流",
      disney: "Disney+ 全区无阻解锁，杜比全景声与 4K 片源顺畅加载",
      youtube: "高缓冲保障，YouTube 4K 播放无丢帧，平均连接速度稳定在 150,000 Kbps 以上",
      tiktok: "支持外贸跨境直播与多账号矩阵精细化防关联运营"
    },
    protocolTech: "暮光网络主干采用 Shadowsocks 2022 高吞吐标准与 Trojan 现代协议，配合高强度椭圆曲线加密。全节点开启优化版 BBRv3 拥塞控制算法，显著降低了跨国长肥网络中的握手时延。同时全面支持原生 Full-Cone NAT，为企业远程桌面（RDP/VNC）与跨国 SSH 交互提供坚若磐石的稳定信道。",
    plansDeepDive: "暮光网络定位于品质专线，标准月付套餐为 ¥20 元包含 120GB 纯物理专线流量（折合 ¥0.167/GB）；高流量进阶套餐 ¥38 元包含 260GB 流量，折合单 GB 单价为 ¥0.146。虽然起步门槛略高，但其套餐均为 100% 专线，承诺无任何中转混编偷工减料。",
    extendedPros: [
      "真正的端到端物理内网专线，晚高峰 20:00-23:00 丢包率坚挺维持在 0.0%",
      "网络抖动（Jitter）小于 1.0ms，极适合跨国实时语音、Zoom 高清会议及海外远程桌面操作",
      "落地 IP 纯净度极高，各大 AI 平台与海外金融、电商防风控能力出众",
      "客服工单响应极其迅速，具备专业网络技术工程师在线值守",
      "提供标准 Clash、Surge、Shadowrocket 订阅链接，支持智能规则自动分流"
    ],
    extendedCons: [
      "起步资费 ¥20/月，对于纯轻度只用来查查文献或偶尔翻墙的用户而言成本略偏高",
      "为保障专线服务质量，对单账号并发在线连接数有相对严格的规范限制",
      "不支持按量不限时付费方式，所有套餐按自然月周期重置流量"
    ],
    audienceScenarios: [
      { role: "跨国远程开发者与系统运维", reason: "海外服务器 SSH 命令行敲击零黏滞感，大代码仓库 Git Clone 秒级完成不中断。" },
      { role: "外贸外企高频在线会议人员", reason: "Zoom 与 Teams 跨国视频会议音画同步不卡顿，彻底杜绝开会时突然断流的尴尬。" },
      { role: "跨境电商海外店铺操盘手", reason: "原生机房静态干净 IP，有效防止亚马逊、Shopee 账号因登录 IP 频繁跳跃而被风控关联。" },
      { role: "对丢包极度敏感的强迫症用户", reason: "全天候 24 小时监控无红点，网络延迟曲线如同一条平整的直线。" }
    ],
    faqList: [
      { q: "暮光网络的纯专线与普通中转机场有什么核心区别？", a: "普通中转机场是在国内公网服务器接收流量后，通过公网隧道跨国传输，容易受到国际公网晚高峰拥堵和 GFW 封锁影响；而暮光网络租用的是物理光缆内网，数据全程在海底封闭光纤中传输，不接触公网出口，因此丢包率稳定为 0%。" },
      { q: "暮光网络节点适合外服游戏加速吗？", a: "非常适合。暮光网络全节点开启 Full-Cone NAT 并且拥有超低延迟与 0 丢包特性，在 Steam、APEX 英雄等外服联机测试中延迟极低且没有丢包卡顿现象。" },
      { q: "多台设备可以同时使用暮光网络吗？", a: "标准套餐支持 2-3 台常用设备同时在线。若需要更多团队成员共享，建议选购进阶版或团队定制套餐。" }
    ]
  },

  feimaoyun: {
    id: "feimaoyun",
    name: "飞猫云",
    subtitle: "¥7超低门槛性价比专线 · 学生党与学术科研入门首选",
    overview: [
      "飞猫云是全网知名的高性价比老牌代表，以极具诚意的亲民价格与扎实的中转/专线混合技术在广大高校师生和技术新手群体中建立了极高的人气。平台以 ¥7/月的超低试错起步门槛，直接提供高达 150GB 的月度大流量，折算单 GB 成本仅为 ¥0.047。",
      "在技术实现上，飞猫云采用多线国内 BGP 中转配合核心亚太直通专线的网络架构，智能优化中国移动、中国联通和中国电信三网直达路径。平台对香港、台湾、日本、新加坡等亚太主力节点进行了针对性的大带宽冗余扩容，确保在日常学习查阅国外文献与流媒体追剧时拥有流畅的网速。",
      "飞猫云不仅定价亲民，还常年提供专属优惠码 flycat888，让本就划算的套餐价格进一步降低。对于预算有限、不想在科学上网工具上承担高额月费的学生党或入门级小白用户，飞猫云是极具竞争力的性价比优选。"
    ],
    networkTopology: {
      entryBgp: "华南及华东三网 BGP 聚合优化入口，自动根据用户本地网络识别分配最低延迟节点",
      backbone: "IEPL 专线主干与优质多线 BGP 中转混合调度架构，兼顾极端性价比与高带宽吞吐",
      egressPops: "香港、台湾 HiNet、日本 Sakura/CatVM、新加坡及美西核心云厂商原生 IP 节点",
      redundancy: "多节点自动容灾负载均衡，当主线路承载过高时智能分流至备用集群"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港中转优化 (HK-01)", ping: "28 ms", jitter: "2.3 ms", download: "720.5 Mbps", upload: "190.2 Mbps", loss: "0.2%", ytBuffer: "4K极速秒开" },
      { region: "🇯🇵 日本东京节点 (JP-01)", ping: "55 ms", jitter: "2.8 ms", download: "650.0 Mbps", upload: "165.4 Mbps", loss: "0.2%", ytBuffer: "4K秒开" },
      { region: "🇸🇬 新加坡优化 (SG-01)", ping: "62 ms", jitter: "3.1 ms", download: "610.8 Mbps", upload: "150.0 Mbps", loss: "0.3%", ytBuffer: "4K流畅" },
      { region: "🇹🇼 台湾原生节点 (TW-01)", ping: "38 ms", jitter: "2.4 ms", download: "580.2 Mbps", upload: "140.5 Mbps", loss: "0.2%", ytBuffer: "4K秒开" },
      { region: "🇺🇸 美国西海岸 (US-01)", ping: "145 ms", jitter: "4.5 ms", download: "480.3 Mbps", upload: "110.2 Mbps", loss: "0.5%", ytBuffer: "4K稳定" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "全面支持网页版 ChatGPT 3.5 / 4o 智能问答与移动端应用流畅交互",
      claude: "核心亚太专线节点支持 Claude 网页版即时访问与对话推理",
      gemini: "全节点畅通支持 Google 搜索与 Google Gemini 生态",
      netflix: "深度解锁美区、港区、台区、日区主流 Netflix 剧集，支持 4K 超清播放",
      disney: "Disney+ 常用剧集顺畅加载，支持高清无缓冲串流",
      youtube: "4K 视频缓冲响应迅速，日常观看 1080P/4K 视频毫无卡顿压力",
      tiktok: "支持海外短视频顺畅浏览与外服社媒刷推"
    },
    protocolTech: "飞猫云全面支持主流 Shadowsocks 与 Trojan 协议，拥有极佳的跨平台客户端兼容性。对于刚接触翻墙的新手用户，无论是 Windows 的 Clash Verge、v2rayN，还是安卓手机的 Clash Meta、v2rayNG，甚至是苹果手机的 Shadowrocket，都能实现秒级扫码订阅即用。",
    plansDeepDive: "飞猫云的核心优势在于极低门槛：体验版套餐仅 ¥7/月拥有 150GB 流量（单 GB 仅 ¥0.047），进阶大流量套餐 ¥15/月提供 350GB 流量（折合单 GB ¥0.043）。在同等售价的机场中，飞猫云给出的可用流量几乎是同类竞品的 1.5 至 2 倍，诚意十足。",
    extendedPros: [
      "¥7/月门槛极低，初次尝试科学上网的小白用户没有任何资金压力",
      "150GB 充沛月度流量，折算单 GB 单价低至 ¥0.047，性价比极其出众",
      "使用专属优惠码 flycat888 可享受进一步实付折扣",
      "全平台客户端教程详尽，订阅节点支持自动测速与最优延迟排序",
      "台湾 HiNet 节点支持动画疯等本土小众流媒体一键解锁"
    ],
    extendedCons: [
      "由于学生党用户基数较大，在晚高峰 21:00-22:30 的极端峰值期间个别主力节点速度偶有波动",
      "冷门欧美专线节点配置相对紧凑，更推荐使用其香港、日本和台湾核心节点",
      "工单响应通常在几小时内处理，非全天候秒回级客服团队"
    ],
    audienceScenarios: [
      { role: "在校大学生与研究生论文党", reason: "低至 7 元每月，查阅 Google Scholar、下载 IEEE/ArXiv 英文文献轻松搞定。" },
      { role: "科学上网新手小白", reason: "超低试错成本，搭配本站详尽的 Clash 图文教程，五分钟即可轻松上手。" },
      { role: "日常轻度油管与社媒追随者", reason: "刷 Twitter/X、看 YouTube 4K 视频、聊 Telegram，流量充沛不心疼。" }
    ],
    faqList: [
      { q: "飞猫云优惠码 flycat888 如何使用？", a: "在飞猫云官网选购套餐并进入支付前，在页面优惠券输入框内填入 flycat888 并确认，系统将自动按优惠后的折扣价格结算。" },
      { q: "飞猫云 7 元套餐可以在手机和电脑同时使用吗？", a: "可以的，飞猫云基础套餐支持多台设备并发连接，可以在个人手机与笔记本电脑上同时导入订阅并正常使用。" },
      { q: "如果某些节点连不上怎么快速恢复？", a: "建议在客户端内右键或下拉执行“更新订阅”，拉取最新的动态备用节点列表，通常即可瞬间恢复畅联。" }
    ]
  },

  wuyou: {
    id: "wuyou",
    name: "无忧",
    subtitle: "金融级高响应内网专线 · 跨国会议与海外远程协作无忧之选",
    overview: [
      "无忧机场是一家以“网络响应低抖动”与“企业级高可靠性”为核心立足点的高品质专线服务商。平台核心技术团队深耕跨境网络传输多年，致力于为外贸商户、远程办公团队与跨国协同办公群体提供真正省心无忧的代理服务。",
      "在底层硬件与线路搭建上，无忧全线采用正规商用 IPLC 专线，骨干链路直接穿透大陆与海外核心金融交换中心。线路在设计之初便将单向网络抖动（Jitter）控制在 1.5ms 以内，完美契合 Zoom 视频会议、微软 Teams、Google Meet 以及 Slack 团队即时通讯的高要求场景，彻底解决了语音通话断续、视频画面马赛克等网络不稳定痛点。",
      "无忧提供 ¥19/月的经典起步套餐，包含 100GB 纯正 IPLC 专线流量（单 GB 约 ¥0.19）。通过本站专属优惠码 wuyou666 结算可获得专享优惠。无论是处理涉外业务邮件、跨国大文件多线程传输，还是关键时刻的远程商务洽谈，无忧都能提供全方位的可靠护航。"
    ],
    networkTopology: {
      entryBgp: "上海与广州金融级双活机房 BGP 接入，与国内三大运营商骨干网建立高优先级互联",
      backbone: "端到端 IPLC 专用物理信道传输，点对点纯内网承载，完全脱离公网环境",
      egressPops: "香港、日本、新加坡及美西 Equinix/Digital Realty 核心节点商用高纯净 IP 池",
      redundancy: "双冗余动态主备路由实时侦测，网络拥塞自动切换，SLA 可用率保证 99.9%"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港 IPLC 专线 (HK-01)", ping: "23 ms", jitter: "0.9 ms", download: "840.1 Mbps", upload: "210.5 Mbps", loss: "0.0%", ytBuffer: "4K极速秒开" },
      { region: "🇯🇵 日本东京专线 (JP-01)", ping: "47 ms", jitter: "1.3 ms", download: "760.3 Mbps", upload: "190.0 Mbps", loss: "0.0%", ytBuffer: "4K极速" },
      { region: "🇸🇬 新加坡专线 (SG-01)", ping: "53 ms", jitter: "1.6 ms", download: "700.2 Mbps", upload: "175.4 Mbps", loss: "0.0%", ytBuffer: "4K流畅" },
      { region: "🇺🇸 美国西海岸 (US-01)", ping: "132 ms", jitter: "2.6 ms", download: "550.0 Mbps", upload: "135.0 Mbps", loss: "0.1%", ytBuffer: "4K顺畅" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "干净商业住宅 IP，稳定支持 ChatGPT Plus 与 Team 团队版日常多账户协作交互",
      claude: "支持 Claude 3.7 全模型无阻访问，交互顺畅无频繁安全验证",
      gemini: "完美支持 Google Gemini 及全套 Google Workspace 办公套件",
      netflix: "解锁美区、港区、日区主流 Netflix 4K 片库",
      disney: "Disney+ 全区流畅播放，支持多音轨切换与 HDR 超高清串流",
      youtube: "极速加载无丢帧，播放稳定性评测表现优异",
      tiktok: "支持海外短视频社交平台高速刷推与内容发布"
    },
    protocolTech: "无忧全面支持现代 Shadowsocks 2022 与 Trojan 协议，针对长连接保活与数据包序列进行了深度优化。配合自研客户端分流策略组，能够精确识别国内外流量，实现内网直连与外网专线代理的智能无感分流。",
    plansDeepDive: "无忧主推 ¥19/月 (100GB IPLC 专线流量，单 GB ¥0.19) 与 ¥36/月 (220GB IPLC 流量，单 GB ¥0.163) 两档核心套餐，配合优惠码 wuyou666 结算体验更佳。套餐流量完全按 1.0 倍率扣除，透明计费无暗扣。",
    extendedPros: [
      "极低网络抖动（Jitter < 1.5ms），跨国视频通话与远程办公协同顺畅不卡顿",
      "全端到端 IPLC 专线支撑，晚高峰 0 丢包，网络可靠性位居第一梯队",
      "专属优惠码 wuyou666 结算可享专属立减",
      "全平台 Clash / Shadowrocket 规则配置完善，智能国内白名单分流省流量",
      "客服服务响应专业，支持快速工单答疑与远程排障指导"
    ],
    extendedCons: [
      "¥19 起步资费略高于低价大众中转机场，更适合注重网络品质的工作人群",
      "不支持多并发超出套餐限制的设备数，需合理规划在线终端",
      "节点主要集中在香港、日本、新加坡及美西核心热点，冷门小国节点覆盖较少"
    ],
    audienceScenarios: [
      { role: "跨国商务谈判与远程办公人员", reason: "Zoom、Teams 与海外客户实时视频交流，画面清晰语音稳定零掉线。" },
      { role: "外贸外企日常工作者", reason: "处理海外业务邮件、同步 OneDrive/Google Drive 共享文件极速完成。" },
      { role: "追求长期稳定不折腾的办公族", reason: "一次配置常年省心在线，彻底告别频繁换节点的繁琐维护。" }
    ],
    faqList: [
      { q: "无忧机场使用优惠码 wuyou666 享受什么权益？", a: "新用户在收银台结账时输入 wuyou666，系统会自动计算并减免对应的专属优惠折扣金额。" },
      { q: "无忧机场在 Zoom 视频会议时的体验如何？", a: "由于无忧全线采用 IPLC 物理专线传输且 Jitter 小于 1.5ms，实测在 Zoom 跨国千人高清会议中，音画延迟低于 60ms 且全过程 0 丢包，体验极其出色。" }
    ]
  },

  lingmao: {
    id: "lingmao",
    name: "灵猫",
    subtitle: "高纯净度IPLC专线 · 科研文献检索与AI大模型训练专属通道",
    overview: [
      "灵猫机场是一家在高校学术圈、科研实验室及 AI 算法工程师群体中享有极高声誉的高端专线服务商。平台最大的核心护城河在于其“高纯净度原生 IP 资源池”，所有落地机房均经过严格的黑名单过滤与反欺诈打分审查，完全摒弃了鱼龙混杂的公用数据中心二手 IP。",
      "很多从事大模型开发、前沿技术追踪与科研论文编写的学者，常常遭遇 ChatGPT 频繁跳出 1020 报错、Claude 账号无故封禁或学术数据库（如 IEEE Xplore、Nature、ScienceDirect）拦截数据抓取。灵猫通过定期轮换纯净原生住宅 IP，配合端到端物理 IPLC 专线，彻底根治了这一顽疾。",
      "灵猫起步套餐为 ¥25/月包含 150GB 纯净专线流量（折合单 GB 成本约 ¥0.167）。节点覆盖香港、日本、新加坡、美国核心科技城市机房，是学术界与科技出海精英群体的一致公认推荐。"
    ],
    networkTopology: {
      entryBgp: "广州、上海电信与联通骨干机房高防 BGP 接入，抗干扰能力极强",
      backbone: "端到端专属物理 IPLC 海底专线，内网延迟极低且传输完全加密保密",
      egressPops: "严格筛选的港、日、美原生纯净 IP，欺诈打分（Scamalytics Fraud Score）低于 5 分",
      redundancy: "多机房多 IP 池自动轮换容灾，单 IP 遇风控自动无感漂移至备用纯净地址"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港纯净专线 (HK-Clean)", ping: "20 ms", jitter: "1.0 ms", download: "860.0 Mbps", upload: "220.0 Mbps", loss: "0.0%", ytBuffer: "4K秒开" },
      { region: "🇯🇵 日本纯净专线 (JP-Clean)", ping: "44 ms", jitter: "1.4 ms", download: "780.2 Mbps", upload: "195.4 Mbps", loss: "0.0%", ytBuffer: "4K秒开" },
      { region: "🇸🇬 新加坡学术通道 (SG-Clean)", ping: "50 ms", jitter: "1.7 ms", download: "730.5 Mbps", upload: "180.0 Mbps", loss: "0.0%", ytBuffer: "4K秒开" },
      { region: "🇺🇸 美国硅谷科技专线 (US-SV)", ping: "130 ms", jitter: "2.8 ms", download: "560.8 Mbps", upload: "140.2 Mbps", loss: "0.1%", ytBuffer: "4K极速" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "行业顶尖纯净度，支持 GPT-4o 深度推理、API 高频调用及 Plus 自动续费，零封号风险",
      claude: "全节点高评分原生 IP 完美解锁 Claude 3.7 Sonnet，多轮长上下文推理稳定不报错",
      gemini: "全面解锁 Google Gemini Advanced 智能助手与海外学术检索生态",
      netflix: "原生支持 Netflix 全区 4K HDR 最高画质解锁",
      disney: "Disney+ 全区完整解锁支持",
      youtube: "超大码率畅享 YouTube 4K/8K 视频，无丢帧延迟极低",
      tiktok: "支持跨境短视频精细化防关联多账号运营"
    },
    protocolTech: "灵猫采用 Shadowsocks 2022 与 VLESS-Reality 现代架构，具备极强抗指纹识别能力。支持客户端规则级域名防污染与 DNS 本地安全解析，彻底杜绝 DNS 劫持导致的海外资源访问失败。",
    plansDeepDive: "灵猫标准版起步 ¥25/月享 150GB 高纯净 IPLC 流量（单 GB ¥0.167），专业科研版 ¥45/月享 320GB 流量（单 GB ¥0.14）。虽然单价定位中高端，但由于 IP 纯净度高且不限速，在专业科技圈复购率极高。",
    extendedPros: [
      "独家高纯净度原生 IP 资源池，彻底告别 ChatGPT 访问拒绝与 Claude 封号风险",
      "端到端物理 IPLC 专线支撑，全天候 0 丢包，跨国访问延迟极其稳定",
      "海外学术论文数据库（IEEE、Springer、Nature）访问顺畅不弹验证码",
      "支持全平台客户端一键规则订阅，国内流量智能直连，国外学术流量走专线",
      "技术社区氛围浓厚，客服深度熟悉学术研发与 AI 常见网络风控场景"
    ],
    extendedCons: [
      "起步资费 ¥25/月，相较于低价娱乐机场有一定门槛",
      "严禁滥用 BT 下载或网络爬虫滥刷，对违规破坏 IP 纯净度的行为有封禁机制",
      "不支持按天或小时短期租用，均为月度标准订阅制"
    ],
    audienceScenarios: [
      { role: "大模型工程师与 AI 提示词专家", reason: "ChatGPT 4o 与 Claude 3.7 交互如丝般顺滑，不用担心频繁遭遇 Access Denied。" },
      { role: "硕博研究生与高校科研人员", reason: "Google Scholar 文献秒级下载，海外前沿学术会议论文集快速抓取。" },
      { role: "涉外知识产权律师与合规顾问", reason: "查阅海外专利局数据库与跨国司法公开判决文书，网络安全合规不掉线。" }
    ],
    faqList: [
      { q: "灵猫的节点为什么访问 ChatGPT 很少弹验证码？", a: "因为灵猫严格监控落地机房的 IP 纯净度与欺诈打分，所有节点均采用住宅或商业原生纯净 IP，未被 Cloudflare 或 OpenAI 标记为脏 IP，因此访问极度顺畅。" },
      { q: "灵猫适合下载大型学术数据集吗？", a: "非常适合。灵猫节点带宽充足，千兆端口直连国际互联中心，下载 GitHub 开源数据集或 Hugging Face 预训练权重速度极快。" }
    ]
  },

  flashleap: {
    id: "flashleap",
    name: "闪跃 FlashLeap",
    subtitle: "原生Full-Cone NAT游戏专线 · 外服Steam/APEX低延迟电竞加速",
    overview: [
      "闪跃 FlashLeap 是一家在硬核游戏玩家圈中口碑炸裂的专业电竞专线机场。不同于普通机场仅针对网页浏览进行优化，闪跃从底层架构上就针对外服多人联机网游的 UDP 传输协议进行了全链路深度重构。",
      "全节点开启原生 Full-Cone NAT（全锥形 NAT，即 NAT Type A / Open），配合沪日、深港低延迟物理 IPLC 专线，能够彻底解决 Steam、EA App、Battle.net、Epic 等外服平台连接困难、APEX 英雄频繁丢包跳 ping、CS2 枪击判定延迟高以及 Nintendo Switch / PS5 主机联机 NAT 受限的行业老大难问题。",
      "闪跃起步套餐为 ¥24/月，提供 150GB 纯 IPLC 专线电竞流量（折合单 GB ¥0.16）。通过专属优惠码 shanyue 结算可享专属优惠。如果你既需要日常看 4K 视频查资料，又是一名狂热的外服联机游戏玩家，闪跃是不可多得的电竞级利器。"
    ],
    networkTopology: {
      entryBgp: "北京、上海、广州多线电竞级优质 BGP 入口，全国各省份游戏数据包毫秒直达",
      backbone: "超低延迟物理 IPLC 专线直达东京、首尔、香港核心游戏服务器集聚区",
      egressPops: "日本东京/大阪、香港、新加坡及美西 Equinix 电竞直通原生机房，开启 Full-Cone NAT",
      redundancy: "主干线路 UDP 专享优先级调度保障，高峰期游戏包绝对不与视频下载混跑抢占带宽"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港游戏专线 (HK-Gaming)", ping: "18 ms", jitter: "0.6 ms", download: "850.2 Mbps", upload: "230.1 Mbps", loss: "0.0%", ytBuffer: "4K秒开 / 游戏延迟18ms" },
      { region: "🇯🇵 日本东京电竞 (JP-Gaming)", ping: "38 ms", jitter: "0.9 ms", download: "810.0 Mbps", upload: "205.4 Mbps", loss: "0.0%", ytBuffer: "4K秒开 / APEX延迟38ms" },
      { region: "🇸🇬 新加坡直通专线 (SG-Gaming)", ping: "49 ms", jitter: "1.4 ms", download: "710.2 Mbps", upload: "180.0 Mbps", loss: "0.0%", ytBuffer: "4K极速 / 亚服延迟50ms" },
      { region: "🇺🇸 美服游戏直通 (US-Gaming)", ping: "125 ms", jitter: "2.1 ms", download: "580.4 Mbps", upload: "140.0 Mbps", loss: "0.1%", ytBuffer: "4K稳定 / 美服开黑稳定" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "原生解锁 ChatGPT Plus 及手机客户端即时对话",
      claude: "畅通访问 Claude 3.7 Sonnet 各类版本",
      gemini: "全面解锁 Google Gemini 智能服务",
      netflix: "美日港区 Netflix 4K 全屏流畅播放",
      disney: "Disney+ 畅通播放支持",
      youtube: "超清 4K/8K 游戏直播与录播视频无缓冲秒开",
      tiktok: "海外短视频高速顺畅浏览"
    },
    protocolTech: "闪跃基于 Shadowsocks 2022 电竞强化版协议与 Trojan 协议，支持高速 UDP 转发与全锥形 NAT 穿透。在配合 Clash TUN 模式或游戏规则分流时，无需再额外购买昂贵的传统游戏加速器，即可直接畅玩 Steam/APEX/PUBG。",
    plansDeepDive: "电竞版标准月付套餐为 ¥24 元包含 150GB 纯 IPLC 专线流量（折合 ¥0.16/GB）；使用优惠码 shanyue 结算更优惠。由于游戏联机实际消耗流量相对较小，150GB 足够一个月高强度打游戏与看视频两不误。",
    extendedPros: [
      "全节点原生支持 Full-Cone NAT（NAT Type A），外服游戏联机不掉线、组队开黑无阻碍",
      "沪日专线日服延迟低至 38ms，深港专线港服延迟低至 18ms，达到专业电竞级水准",
      "专属优惠码 shanyue 可享受结算优惠减免",
      "游戏 UDP 数据流享受最高优先级内网转发，高峰期彻底告别跳 ping 恶梦",
      "完美兼容 Nintendo Switch、PS5、Xbox 游戏主机全局代理加速"
    ],
    extendedCons: [
      "起步资费 ¥24/月，对于纯轻度不玩游戏的文字浏览用户来说性能略有富余",
      "主机加速需在路由器端开启 OpenWrt PassWall 或在电脑端开启 Clash TUN 局域网共享",
      "严禁在游戏专线上使用迅雷或 BT 大量挂机下载盗版资源"
    ],
    audienceScenarios: [
      { role: "Steam / APEX / CS2 / 瓦罗兰特外服硬核玩家", reason: "游戏延迟极低且全天 0 丢包，开枪判定精准，不用再每月花三四十元额外买加速器。" },
      { role: "PS5 / Switch 主机联机玩家", reason: "NAT 类型直接显示 Open，任天堂喷射战士、怪物猎人联机开房秒匹配。" },
      { role: "既爱打游戏又爱追剧的双栖用户", reason: "白天打游戏低延迟，晚上看 4K Netflix/YouTube 拖动秒缓冲，一专多能。" }
    ],
    faqList: [
      { q: "闪跃 FlashLeap 优惠码 shanyue 怎么用？", a: "在闪跃用户后台选定套餐后，进入付款界面在优惠码处输入 shanyue 并点击应用，系统将直接减除优惠金额。" },
      { q: "用闪跃玩外服游戏需要开 Clash 的 TUN 模式吗？", a: "是的，推荐在 Windows 上使用 Clash Verge Rev 并开启“TUN 模式”，即可接管整台电脑的所有游戏进程 UDP 流量，实现真正的电竞加速。" }
    ]
  },

  firefly: {
    id: "firefly",
    name: "萤火虫（Firefly）",
    subtitle: "轻量特惠优质线路 · 随开随用的轻度科研与社交网络指南",
    overview: [
      "萤火虫 Firefly 是一家专注于为“轻度科学上网用户”量身打造的高口碑特惠机场。很多日常用户并不需要每月几百吉字节的庞大流量，他们只是偶尔查查 Google、浏览学术论文、在社交媒体（Twitter/X、Instagram）上关注行业动态，或者收发海外工作邮件。",
      "萤火虫敏锐捕捉到了这一庞大用户群体的真实痛点，推出了低至 ¥8/月包含 60GB 优质线路流量的轻量入门套餐（单 GB 约 ¥0.133）。通过本站专属优惠码 firefly 结算还可以进一步减免，极大降低了用户的日常保有成本。",
      "虽然价格平易近人，但萤火虫在网络稳定性上毫不妥协。全线采用优化直连与 BGP 多线中转架构，核心覆盖香港、日本、新加坡及美西主力机房，满足日常 1080P/4K 视频播放与即时通讯的需求，小巧灵活无负担。"
    ],
    networkTopology: {
      entryBgp: "国内华南多线中转优质入口，主流运营商网络自适应低延迟分发",
      backbone: "优质海外直通大带宽隧道传输，核心节点经过 BBR 拥塞算法深度调优",
      egressPops: "香港、日本、新加坡、美国核心云厂商高带宽机房，兼具灵活性与网络质量",
      redundancy: "主备节点集群自动探活，异常节点自动在订阅中隐藏并由备用通道接管"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港特惠线路 (HK-01)", ping: "32 ms", jitter: "2.5 ms", download: "680.4 Mbps", upload: "170.2 Mbps", loss: "0.3%", ytBuffer: "4K秒开" },
      { region: "🇯🇵 日本东京优化 (JP-01)", ping: "58 ms", jitter: "3.0 ms", download: "620.0 Mbps", upload: "155.0 Mbps", loss: "0.3%", ytBuffer: "4K秒开" },
      { region: "🇸🇬 新加坡优化 (SG-01)", ping: "65 ms", jitter: "3.4 ms", download: "580.6 Mbps", upload: "140.2 Mbps", loss: "0.4%", ytBuffer: "4K流畅" },
      { region: "🇺🇸 美国西海岸 (US-01)", ping: "150 ms", jitter: "4.8 ms", download: "450.0 Mbps", upload: "100.5 Mbps", loss: "0.6%", ytBuffer: "4K稳定" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "支持常规网页版 ChatGPT 问答与移动端日常沟通交互",
      claude: "核心亚太节点支持 Claude 网页版基本对话交互",
      gemini: "全面解锁 Google 搜索与海外 Google 账户体系",
      netflix: "支持美区与港区主流 Netflix 剧集流畅播放",
      disney: "Disney+ 常见剧集支持 1080P/4K 高清串流",
      youtube: "日常观看 1080P/4K 视频毫无缓冲卡顿压力",
      tiktok: "支持海外短视频社交平台高速刷推与互动"
    },
    protocolTech: "萤火虫全面支持通用 Shadowsocks 与 Trojan 协议，拥有极低系统资源占用与优秀的续航表现。无论是轻薄笔记本还是智能手机，后台开启代理时几乎不产生额外发热与耗电。",
    plansDeepDive: "萤火虫轻量版 ¥8/月享 60GB 流量（单 GB ¥0.133）；进阶版 ¥15/月享 160GB 流量（单 GB ¥0.093）。配合优惠码 firefly 结算更划算，是每月几十吉字节用量轻度用户的极佳归宿。",
    extendedPros: [
      "¥8/月超低门槛，配有专属优惠码 firefly 结算更享折扣，性价比极高",
      "60GB 轻量流量完全契合查资料、刷推特、收邮件的轻度使用人群，不浪费每一分钱",
      "全平台通用订阅一键导入，客户端体积小开销低，手机后台不发烫",
      "香港与日本主力节点经过精细调优，日常网页秒开体验极其出色",
      "付款方式便捷，支持支付宝合规付款与快速开通"
    ],
    extendedCons: [
      "月度 60GB 流量不适合全天 8K 挂机追剧或大容量 BT 下载的重度狂热玩家",
      "晚高峰极限负载下相较于几十元的纯物理专线有轻微的延迟波动",
      "冷门国家小众节点相对有限，主攻亚太核心国家"
    ],
    audienceScenarios: [
      { role: "日常只用来查文献刷资讯的轻度用户", reason: "每月花几块钱解决核心科学上网刚需，经济实惠不浪费。" },
      { role: "偶尔需要查看国外学术资料的学生", reason: "查文献、下论文、看英文技术博客，随开随用省心轻便。" },
      { role: "需要备用轻量梯子的出差人士", reason: "作为备用方案随时待命，低成本解决临时出行网络不便。" }
    ],
    faqList: [
      { q: "萤火虫优惠码 firefly 怎么领取使用？", a: "在萤火虫购买套餐结账时，在优惠券栏目直接输入 firefly 即可享受专属立减优惠。" },
      { q: "60GB 流量一个人够用一个月吗？", a: "如果主要用于 Google 搜索、查看维基百科、阅读学术论文以及微信/Telegram 聊天，每月通常只消耗 15-30GB，60GB 完全绰绰有余。" }
    ]
  },

  kuajiecloud: {
    id: "kuajiecloud",
    name: "跨界",
    subtitle: "全专线多端低功耗架构 · 移动端iOS与Android随开秒连",
    overview: [
      "跨界（KuajieCloud）是一家专注于移动端与多设备协同出海的专业全专线机场品牌。随着手机成为最核心的随身计算终端，很多用户发现传统梯子在手机后台常驻时会导致严重的机身发热与电量飞速狂掉。",
      "跨界研发团队从协议头部压缩、心跳保活机制与移动蜂窝网络（4G/5G）切换重连算法三个维度进行了系统级深度调优。全站采用物理专线架构，极大缩短了手机向外发包的握手往返次数，让移动设备在熄屏待机时拥有极低功耗，而在点亮屏幕解锁瞬间又能毫秒级秒开海外应用。",
      "跨界起步套餐为 ¥20/月，提供 120GB 全专线高速流量（折合单 GB ¥0.167）。无论是 iPhone 搭配 Shadowrocket/Stash，还是安卓手机搭配 Clash Meta，都能体验到随开秒连、无感漫游的优质出海网络。"
    ],
    networkTopology: {
      entryBgp: "北京、上海、广州优质多线 Anycast 移动优化入口，智能针对移动 5G 网络做路径优化",
      backbone: "纯内网专线全链路封闭直连，移动端数据包不经过繁冗的公网路由跳跃",
      egressPops: "香港、台湾、日本、新加坡、美国核心云原生商用机房，配备纯净机房 IP 资源",
      redundancy: "移动网络断线自愈重连机制，地铁/电梯信号恢复后 1 秒内无感重连恢复代理"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港全专线 (HK-Mobile)", ping: "22 ms", jitter: "1.2 ms", download: "820.5 Mbps", upload: "215.0 Mbps", loss: "0.0%", ytBuffer: "4K极速秒开" },
      { region: "🇯🇵 日本东京专线 (JP-Mobile)", ping: "46 ms", jitter: "1.6 ms", download: "750.0 Mbps", upload: "185.2 Mbps", loss: "0.0%", ytBuffer: "4K极速" },
      { region: "🇸🇬 新加坡专线 (SG-Mobile)", ping: "53 ms", jitter: "1.9 ms", download: "690.4 Mbps", upload: "170.0 Mbps", loss: "0.0%", ytBuffer: "4K秒开" },
      { region: "🇺🇸 美国洛杉矶 (US-Mobile)", ping: "134 ms", jitter: "3.0 ms", download: "530.2 Mbps", upload: "130.5 Mbps", loss: "0.1%", ytBuffer: "4K畅享" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "原生支持 ChatGPT 官方 iOS 与 Android 移动应用语音模式与文本对话",
      claude: "流畅访问 Claude 移动网页端与桌面端，零报错",
      gemini: "全面解锁 Google 搜索与移动端智能生态",
      netflix: "深度解锁全区 Netflix，支持手机与平板 HDR 移动端超清片源",
      disney: "Disney+ 移动端完整解锁支持",
      youtube: "支持 YouTube 画中画与后台播放，4K 码率稳定不卡顿",
      tiktok: "支持海外 TikTok 原生视频秒播与点赞互动"
    },
    protocolTech: "跨界采用优化版 VLESS 与 Shadowsocks 协议，大幅减少了移动网络环境下的握手重传开销。配合精准的 GeoIP 规则分流，国内应用直连完全不耗费代理流量，国外应用自动走低延迟专线加速。",
    plansDeepDive: "跨界基础专线版 ¥20/月享 120GB 流量（折合单 GB ¥0.167）；高级版 ¥38/月享 260GB 流量（折合单 GB ¥0.146）。支持多台移动设备与电脑同时在线，套餐性价比均衡。",
    extendedPros: [
      "专为移动端调优，手机后台长驻不发烫、不异常耗电，续航表现极佳",
      "全专线网络架构，地铁/高铁网络切换后重连速度惊人，无断网卡顿感",
      "全节点纯净原生 IP 解锁，各类移动端 AI 应用与海外社媒即开即用",
      "多平台客户端一键规则配置完备，国内微信支付宝直连，海外秒级加速",
      "支持多终端并发，手机与笔记本无缝切换"
    ],
    extendedCons: [
      "起步资费 ¥20/月，略高于纯大众中转机场",
      "严禁私自将订阅分享给非直系亲属的多人公共使用",
      "不支持传统的单线程过时旧协议，需使用现代主流客户端"
    ],
    audienceScenarios: [
      { role: "重度 iPhone / iPad / 移动端出海用户", reason: "随身携带手机随时处理海外邮件与信息，熄屏省电亮屏秒连。" },
      { role: "商务通勤出差族", reason: "高铁、机场移动蜂窝信号频繁切换下，代理不断连不重登。" },
      { role: "追求多设备无缝漫游体验的数码发烧友", reason: "手机、平板、轻薄本三端常驻后台，体验顺畅如本地网络。" }
    ],
    faqList: [
      { q: "跨界机场在手机上后台常驻会费电吗？", a: "经过专门的移动端协议优化与心跳压缩，跨界在 iPhone 和安卓手机后台常驻运行一天，耗电量通常仅占电池总消耗的 1%~2%，机身完全不发热。" },
      { q: "跨界支持在软路由上配置吗？", a: "支持的，跨界提供标准的 Clash / OpenWrt 兼容订阅，可以轻松导入家用软路由实现全屋智能家电与 Apple TV 全局翻墙。" }
    ]
  },

  yinxingren: {
    id: "yinxingren",
    name: "隐形人",
    subtitle: "极客级IEPL纯专线 · 零丢包与高强度端到端抗干扰隐私保障",
    overview: [
      "隐形人是一家以“深度隐私脱敏保护”与“零丢包极端物理专线”为设计理念的极客型高端机场品牌。在这个公网深度包检测（DPI）日益普遍的时代，隐形人从成立之初便确立了“不留任何公网穿透痕迹”的架构准则。",
      "在骨干网上，隐形人重金租用深港物理 IEPL 纯专线，实现点对点物理级封闭传输。数据从国内 BGP 入口发出后，直接灌入封闭内网光缆，物理隔绝了公网防火墙的所有探针与流量分析。全平台恪守零日志记录（Zero-Log）规范，不对用户的访问目的域名与数据包做任何留存审计，真正做到了如同其名字一般的“隐形出海”。",
      "隐形人起步套餐为 ¥24/月，包含 144GB 纯 IEPL 专线流量（折合单 GB 成本约 ¥0.167）。使用本站专属优惠码 yxr888 可享受专属立减优惠。对于对网络连接安全、隐私隐蔽性及晚高峰零丢包有极致要求的软件开发者、涉外金融从业者与高级工程师，隐形人是毫无争议的可靠壁垒。"
    ],
    networkTopology: {
      entryBgp: "国内核心金融交换节点多线 BGP 双活接入，提供防 DDoS 与高纯净度连接通道",
      backbone: "深圳-香港物理 IEPL 独立光缆专线，二层封闭式传输，彻底绝缘公网审查与干扰",
      egressPops: "香港、日本、新加坡、美国核心高机密数据中心落地，定期清理并更换纯净商用 IP",
      redundancy: "主备多光缆热备冗余，断纤秒级无缝漂移，保障 99.95% 的极高可用性 SLA 承诺"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港 IEPL 纯专线 (HK-Invisible)", ping: "20 ms", jitter: "0.8 ms", download: "880.4 Mbps", upload: "235.0 Mbps", loss: "0.0%", ytBuffer: "4K/8K极速秒开" },
      { region: "🇯🇵 日本东京专线 (JP-Invisible)", ping: "44 ms", jitter: "1.1 ms", download: "790.2 Mbps", upload: "190.5 Mbps", loss: "0.0%", ytBuffer: "4K极速" },
      { region: "🇸🇬 新加坡专线 (SG-Invisible)", ping: "51 ms", jitter: "1.4 ms", download: "720.6 Mbps", upload: "175.0 Mbps", loss: "0.0%", ytBuffer: "4K秒开" },
      { region: "🇺🇸 美国硅谷专线 (US-Invisible)", ping: "130 ms", jitter: "2.5 ms", download: "560.0 Mbps", upload: "135.2 Mbps", loss: "0.1%", ytBuffer: "4K流畅" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "极客级干净原生 IP，ChatGPT Plus、GPT-4o、OpenAI API 零风控稳定调用",
      claude: "全面避开 Anthropic 严苛风控检测，Claude 3.7 Sonnet 稳定输出零中断",
      gemini: "畅通无阻访问 Google 官方全套 AI 开发与搜索生态",
      netflix: "美日港区 Netflix 4K HDR 超高比特率原生片源流畅解锁",
      disney: "Disney+ 全区流畅播放支持",
      youtube: "极速加载零丢帧，8K 超清视频播放平稳自如",
      tiktok: "支持海外短视频平台矩阵安全运营与内容投放"
    },
    protocolTech: "隐形人采用先进的 VLESS-Reality 与 Shadowsocks 2022 协议，全链路采用强力加密。结合严格的无日志政策（No-Logs Policy），本地客户端自动配合安全 DNS 防泄漏解析，确保无论在任何网络环境下，用户的上网隐私均得到严密守护。",
    plansDeepDive: "隐形人起步套餐为 ¥24/月享 144GB 纯 IEPL 专线流量（折合单 GB ¥0.167）；高级套餐 ¥45/月享 300GB 流量（折合单 GB ¥0.15）。输入专属优惠码 yxr888 结算可立享专属折扣，是高端纯专线中的诚意之选。",
    extendedPros: [
      "深港物理 IEPL 独立光缆内网专线，晚高峰丢包率坚挺维持 0.0%，网络稳定性登峰造极",
      "全站贯彻零日志隐私保护原则，数据包高强度加密隔离，安全可靠性无可挑剔",
      "专属优惠码 yxr888 结算立减，性价比在高端纯专线品类中十分亮眼",
      "全节点干净原生商用 IP，各类 AI 大模型开发与敏感海外平台零风控报错",
      "技术支持团队专业度极高，提供详尽的故障排查与安全上网建议"
    ],
    extendedCons: [
      "起步 ¥24/月，对于纯轻度娱乐看图用户来说定位偏高阶",
      "不提供免费公开试用通道以维护专线用户整体纯净度与服务质量",
      "节点主要布局在主流高带宽枢纽国家，极端小众国家覆盖相对较少"
    ],
    audienceScenarios: [
      { role: "对网络稳定性和隐私有极致要求的资深工程师", reason: "海外服务器运维不掉线，Git 代码推送与拉取如本地内网般极速安全。" },
      { role: "跨境金融与量化交易从业者", reason: "网络抖动低于 1ms，API 高频下单与行情刷新毫秒级同步，绝不掉链子。" },
      { role: "追求无日志、零干扰的数字游民", reason: "端到端专线高强度抗干扰，无论身处何地都能获得安全可靠的数字护盾。" }
    ],
    faqList: [
      { q: "隐形人优惠码 yxr888 如何兑换？", a: "在隐形人官网订购页面，将优惠码 yxr888 输入到兑换框中并点击应用，即可看到折扣后的优惠价格。" },
      { q: "隐形人的“零日志政策”是如何落实的？", a: "隐形人的中继与落地服务器内核均移除了访问目标 URL 的日志写入模块，不存储用户的访问历史与真实 IP 映射关系，最大程度捍卫用户数字隐私。" }
    ]
  },

  feiv: {
    id: "feiv",
    name: "飞V",
    subtitle: "¥4.9亲民不限时按量付费 · 绝佳长期应急备用容灾梯子",
    overview: [
      "飞V机场是全网极具特色的“按量付费、不限时间、用多少扣多少”的亲民代表。绝大多数传统机场都采用月付制，无论当月是否使用，月底流量都会被强制清零，对于翻墙频率极低、或手头已有主机场只想备个应急通道的用户来说极不划算。",
      "飞V彻底革新了这一计费模式，推出了低至 ¥4.9 购入 100GB 永久不过期流量的震撼套餐，折算单 GB 成本仅为令人难以置信的 ¥0.049。只要账户内还有流量余额，这个订阅就可以常年放在你的手机和电脑里备用，一年甚至两年不使用也不会过期。",
      "虽然价格只有区区几元钱，但飞V的线路依然采用了多线优化中转，香港、日本、新加坡及美西主力节点齐全，日常打开网页与看 1080P/4K 视频毫无压力。是几乎所有科学上网玩家人手必备的“终极容灾备用梯子”。"
    ],
    networkTopology: {
      entryBgp: "华南多线高质量 BGP 聚合接入，主流宽带网络就近路由接入",
      backbone: "大带宽国际中转隧道，经过自适应流量调度优化",
      egressPops: "香港、日本、新加坡、美国核心云原生节点，覆盖常用亚太及美西区域",
      redundancy: "节点动态轮询探活，长期待机备用可用率高"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港按量优化 (HK-01)", ping: "30 ms", jitter: "2.8 ms", download: "650.0 Mbps", upload: "160.0 Mbps", loss: "0.2%", ytBuffer: "4K秒开" },
      { region: "🇯🇵 日本按量优化 (JP-01)", ping: "56 ms", jitter: "3.2 ms", download: "580.4 Mbps", upload: "145.2 Mbps", loss: "0.3%", ytBuffer: "4K秒开" },
      { region: "🇸🇬 新加坡优化 (SG-01)", ping: "64 ms", jitter: "3.5 ms", download: "540.2 Mbps", upload: "130.0 Mbps", loss: "0.3%", ytBuffer: "4K流畅" },
      { region: "🇺🇸 美国西海岸 (US-01)", ping: "148 ms", jitter: "4.9 ms", download: "430.5 Mbps", upload: "100.0 Mbps", loss: "0.5%", ytBuffer: "4K稳定" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "支持常规 ChatGPT 网页版与客户端日常对话问答",
      claude: "核心亚太节点支持 Claude 基础访问与日常问答",
      gemini: "全面支持 Google 搜索与海外 Google 账号生态",
      netflix: "支持美港日区主流 Netflix 剧集顺畅观看",
      disney: "Disney+ 高清流畅播放支持",
      youtube: "日常 1080P/4K 视频顺畅播放无缓冲卡顿",
      tiktok: "支持海外短视频顺畅浏览"
    },
    protocolTech: "飞V支持 Shadowsocks 与 Trojan 协议，拥有极佳的客户端普适性。在 Clash 或 Shadowrocket 客户端中，可以将其配置为“故障转移（Fallback）”组的备用节点，当你的主机场偶遇维护或网络断流时，系统会自动无缝秒切至飞V。",
    plansDeepDive: "飞V主打不限时套餐：¥4.9 包含 100GB 永久有效流量（单 GB ¥0.049）；进阶备用版 ¥12 包含 260GB 永久有效流量（单 GB ¥0.046）。一次购买，长期有效，是所有科学上网者最省心且成本最低的备用方案。",
    extendedPros: [
      "¥4.9 超低门槛，100GB 流量永久不过期，不使用绝对不清零，真正良心",
      "单 GB 成本低至 ¥0.049，折合一分钱就能用好几百兆流量",
      "绝佳的第二备用机场，主机场偶遇海缆故障或维护时能够秒级救急",
      "支持全平台主流客户端一键导入，常年放在备用配置列表里毫无开销压力",
      "支付极为方便，随买随用"
    ],
    extendedCons: [
      "由于是不限时按量付费，在极端晚高峰时期网络延迟略高于几十元的高端纯专线",
      "节点主要以亚太和美西为主，冷门小众区域节点较少",
      "客服团队为标准工单响应，适合具备一定基础常识的科学上网用户"
    ],
    audienceScenarios: [
      { role: "手头已有主机场的防失联备用党", reason: "几块钱买 100GB 放着，哪怕一年只用几次救急，也远比临时四处找梯子安心百倍。" },
      { role: "极低频使用科学上网的轻度人群", reason: "几个月才查一次资料，月付机场每月扣费太浪费，飞V按量扣费完美解决痛点。" },
      { role: "学生党或省钱达人", reason: "花一瓶饮料的钱就能拥有 100GB 科学上网大流量，性价比天花板。" }
    ],
    faqList: [
      { q: "飞V的流量真的永久不过期吗？", a: "是的，飞V的不限时套餐只要账户正常存在，流量用多少扣多少，月底不会清零，直到 100GB 全部用完为止。" },
      { q: "如何把飞V设置为主机场的“故障自动备用”？", a: "在 Clash 客户端中，可以创建一个 Fallback 策略组，将主机场节点排在第一位，飞V节点排在第二位。当主节点检测到超时断连时，Clash 会在 3 秒内自动切换到飞V，实现真正的断网无感自愈。" }
    ]
  },

  laddercloud: {
    id: "laddercloud",
    name: "梯子云 LadderCloud",
    subtitle: "宽裕多设备并发连接 · 适合合租室友与家庭全设备共享",
    overview: [
      "梯子云 LadderCloud 是一家以“高设备并发限制容忍度”与“家庭合租全屋共享友好”著称的高速专线/中转机场品牌。现代很多用户家中拥有手机、平板、主力笔记本、台式机、客厅电视盒子乃至软路由等众多设备，很多机场严格限制 2 台设备在线，多开一台就会频繁踢下线或封停账号。",
      "梯子云针对多设备协同场景进行了专门扩容，标准套餐即可支持 5 台以上设备并发同时在线，高阶套餐更是支持高达 8-10 台设备同时跑满带宽。结合其大带宽中转与优化专线架构，全家成员或合租室友共同使用一个订阅也互不影响网速。",
      "梯子云起步套餐为 ¥25/月，提供 125GB 高速流量（折合单 GB 成本约 ¥0.2）。一人购入全家受惠，无论是客厅电视放 4K YouTube、书房电脑写代码查文献，还是卧室手机刷推特，都能全天候享受稳定极速的出海网络。"
    ],
    networkTopology: {
      entryBgp: "华南及华东双中心大带宽优质 BGP 入口，大容量连接数承载优化",
      backbone: "优化中转专线与大带宽海外直通隧道混合调度，保障多设备并发不挤占拥堵",
      egressPops: "香港、日本、新加坡、美国核心云原生商用机房，配备充裕 IP 池",
      redundancy: "集群级负载均衡调度，单节点高负载时自动无感分散并发流量"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港多设备优化 (HK-Family)", ping: "26 ms", jitter: "1.8 ms", download: "780.0 Mbps", upload: "200.0 Mbps", loss: "0.1%", ytBuffer: "4K秒开" },
      { region: "🇯🇵 日本东京节点 (JP-Family)", ping: "50 ms", jitter: "2.1 ms", download: "710.4 Mbps", upload: "175.0 Mbps", loss: "0.1%", ytBuffer: "4K秒开" },
      { region: "🇸🇬 新加坡优化 (SG-Family)", ping: "58 ms", jitter: "2.5 ms", download: "650.0 Mbps", upload: "160.2 Mbps", loss: "0.2%", ytBuffer: "4K流畅" },
      { region: "🇺🇸 美国西海岸 (US-Family)", ping: "140 ms", jitter: "3.8 ms", download: "510.0 Mbps", upload: "120.0 Mbps", loss: "0.3%", ytBuffer: "4K稳定" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "支持常规 ChatGPT 网页版及手机客户端多设备同时交互",
      claude: "核心亚太节点支持 Claude 3.7 全模型稳定访问",
      gemini: "全面支持 Google 搜索与海外协同生态",
      netflix: "深度解锁美港日区主流 Netflix 剧集，客厅电视与手机同时看 4K 不冲突",
      disney: "Disney+ 全区流畅播放支持",
      youtube: "电视端 SmartTube / YouTube 4K 播放秒开无缓冲",
      tiktok: "支持海外短视频社交平台高速刷推与直播"
    },
    protocolTech: "梯子云全面兼容 Shadowsocks 与 Trojan 协议，支持各大智能电视（Android TV、Apple TV）以及路由器端一键规则导入，轻松实现全屋 Wi-Fi 智能翻墙分流。",
    plansDeepDive: "梯子云基础版 ¥25/月享 125GB 流量，支持 5 台设备并发（单 GB ¥0.2）；家庭共享版 ¥42/月享 260GB 流量，支持 8 台设备并发（单 GB ¥0.161）。按设备人均成本折算极其划算。",
    extendedPros: [
      "支持 5 台以上设备并发同时在线，一人购买全家共享，人均成本极低",
      "客厅智能电视、手机、电脑同时看 4K 视频互不挤占带宽",
      "全平台客户端通用订阅，完美兼容软路由与电视盒子客户端",
      "亚太核心香港、日本节点大带宽冗余，高峰期多设备同时使用不掉速",
      "客服响应亲切，提供详细的路由器与电视端翻墙配置指导"
    ],
    extendedCons: [
      "单人单设备轻度使用起步价 ¥25/月相对偏高，更推荐多设备用户选购",
      "严禁在公网论坛公开分享订阅节点，违规大规模滥用可能触发风控",
      "冷门国家小众节点相对精炼，主打高频实用亚太美西路线"
    ],
    audienceScenarios: [
      { role: "合租室友与多设备家庭", reason: "几个人平摊一份订阅费用，全屋手机、平板、电脑和智能电视全部搞定科学上网。" },
      { role: "数码全家桶拥有者", reason: "拥有 iPhone、Mac、iPad、Windows 台式机多台设备，再也不用担心频繁被踢下线。" },
      { role: "客厅大屏 4K 电视重度影音迷", reason: "Apple TV 或索尼电视安装客户端，下班回家沙发上一键秒开 YouTube/Netflix 4K 大片。" }
    ],
    faqList: [
      { q: "梯子云可以在 Apple TV 或电视盒子上使用吗？", a: "完全可以。Apple TV 推荐安装 Sing-box 或 Loon，导入梯子云订阅后开启规则分流，电视端即可直接享受 YouTube 4K 和 Netflix 4K 的畅快大屏体验。" },
      { q: "如果超过 5 台设备同时连接会怎样？", a: "超过设备并发数时，最新连接的设备可能会短暂报错或排队，建议根据实际设备数量选购对应的家庭多设备套餐。" }
    ]
  },

  wavenet: {
    id: "wavenet",
    name: "浪网 WaveNet",
    subtitle: "自研一键跨平台客户端 · 告别复杂Clash规则的新手福音",
    overview: [
      "浪网 WaveNet 是一家以“极致零门槛易用性”与“自研全平台一键客户端”为王牌优势的现代化机场服务商。虽然 Clash、v2rayN 和 Sing-box 功能强大，但复杂的 YAML 配置文件、分流规则编写、订阅转换报错等技术门槛，常常让很多刚接触科学上网的小白、女生或长辈望而却步。",
      "浪网投入大量精力自主研发了深度定制的 Windows、macOS 与 Android 一键专属客户端。用户在官网注册购买后，只需下载对应系统的客户端软件，输入账号密码一键登录，软件便会自动拉取最新节点并智能测速，点击大大的“一键连接”按钮即可直接出国，完全无需理解任何复杂的代理技术名词。",
      "浪网起步套餐为 ¥30/月，提供 150GB 优化线路流量（折合单 GB ¥0.2）。如果你不想在配置软件、排查节点错误上浪费一分一秒的时间，只想要一个像开灯一样简单的翻墙工具，浪网是体验最为丝滑的人性化选择。"
    ],
    networkTopology: {
      entryBgp: "国内多地核心优质 BGP 节点聚合接入，智能加速自研客户端握手流程",
      backbone: "优化中转专线大带宽隧道互联，客户端与服务端深度协议握手定制优化",
      egressPops: "香港、日本、新加坡、美国核心数据中心，节点可用性自动化毫秒探活",
      redundancy: "自研客户端内置智能节点自动切换算法，单节点异常时 1 秒内无感换线"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港一键直连 (HK-Auto)", ping: "25 ms", jitter: "1.7 ms", download: "750.0 Mbps", upload: "190.0 Mbps", loss: "0.1%", ytBuffer: "4K极速秒开" },
      { region: "🇯🇵 日本智能节点 (JP-Auto)", ping: "49 ms", jitter: "2.0 ms", download: "690.2 Mbps", upload: "170.5 Mbps", loss: "0.1%", ytBuffer: "4K极速" },
      { region: "🇸🇬 新加坡优化 (SG-Auto)", ping: "56 ms", jitter: "2.4 ms", download: "630.0 Mbps", upload: "155.0 Mbps", loss: "0.2%", ytBuffer: "4K秒开" },
      { region: "🇺🇸 美国西海岸 (US-Auto)", ping: "138 ms", jitter: "3.6 ms", download: "490.5 Mbps", upload: "115.0 Mbps", loss: "0.3%", ytBuffer: "4K稳定" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "自研客户端内置 AI 智能分流，ChatGPT 网页版与官方客户端一键畅联",
      claude: "稳定支持 Claude 3.7 模型无阻交互与日常问答",
      gemini: "全面解锁 Google 搜索与海外 Google 账户体系",
      netflix: "智能解锁美港日区 Netflix 4K 片库，小白零设置一键看大片",
      disney: "Disney+ 全区流畅播放支持",
      youtube: "客户端一键加速，YouTube 4K 视频秒开无缓冲",
      tiktok: "海外短视频即开即刷，顺畅无阻"
    },
    protocolTech: "浪网在底层采用深度封装定制协议，结合客户端一键智能网络分流引擎。智能识别国内主流应用（微信、淘宝、抖音、网易云）自动走本地直连，海外网站（Google、YouTube、ChatGPT）自动走专线加速，完全无需用户手动切换代理模式。",
    plansDeepDive: "浪网标准月付版 ¥30/月享 150GB 优化流量（单 GB ¥0.2）；尊享年付版享有额外折扣优惠。虽然价格略高于纯节点订阅机场，但其包含的自研客户端维护成本与极简体验，对于不愿折腾技术的用户来说物有所值。",
    extendedPros: [
      "独家自研 Windows、Mac 与 Android 一键客户端，像开关电灯一样简单，彻底告别 Clash 报错",
      "自动智能测速与最优节点选择，客户端在后台自动换线，完全不需手动干预",
      "内置国内常用应用白名单分流，看国内视频打国服游戏不消耗代理流量",
      "全中文简洁界面，排版大方美观，长辈与科技新手都能在 1 分钟内学会使用",
      "专业贴心的客户支持团队，支持一对一远程指导安装与答疑"
    ],
    extendedCons: [
      "¥30/月起步资费中包含了自研客户端研发维护溢价，略高于纯配置型机场",
      "iOS 苹果手机因苹果应用商店生态限制，仍需搭配 Shadowrocket 等通用工具使用",
      "对于喜欢自己手动改写分流规则的高级极客玩家来说，可玩性不如原生 Clash 开源软件"
    ],
    audienceScenarios: [
      { role: "讨厌技术折腾、想要极简体验的用户", reason: "下载安装点登录，点击连接直接上外网，一气呵成不费脑。" },
      { role: "需要给父母或不熟悉电脑的家人配置翻墙者", reason: "一次安装教会家人点击连接，再也不用隔三差五帮忙修规则。" },
      { role: "注重时间效率、不想为断流报错烦恼的办公族", reason: "客户端全自动化管理节点可用性，稳定可靠省心省力。" }
    ],
    faqList: [
      { q: "浪网自研客户端真的不需要复制订阅链接吗？", a: "是的，浪网自研客户端安装后直接输入在官网注册的账号密码登录，节点列表和分流规则会自动下载并实时静默更新，全程不需要手动复制粘贴任何订阅链接。" },
      { q: "浪网自研客户端安全吗？会不会收集个人隐私？", a: "浪网客户端经过多家杀毒软件合规签名认证，仅负责本地网络流量分流转发，不保存用户任何浏览痕迹与敏感隐私，安全透明。" }
    ]
  },

  lingdongcloud: {
    id: "lingdongcloud",
    name: "灵动云",
    subtitle: "动态抗封锁混淆专线 · 敏感特殊时期出色网络自愈能力",
    overview: [
      "灵动云是一家在“网络对抗生存力”与“敏感时期高可用容灾”领域享有极高声誉的防封锁专家型机场。随着国家级防火墙对跨国异常流量识别算法的不断进化，每逢特定大型国际会议、敏感纪念日或网络大维护期间，普通机场经常出现大面积全红超时、断流甚至全线瘫痪的灾难场景。",
      "灵动云针对这一核心痛点，自研了“动态链路探测与毫秒级重路由”自愈系统。全站采用多层动态混淆协议与隐形隧道技术，一旦检测到某组入口或跨境端口出现丢包率异常攀升，系统会在 500 毫秒内将流量自动切换至处于休眠状态的备用专用通道，从而保证用户端始终在线不掉线。",
      "灵动云起步套餐为 ¥20/月包含 100GB 动态抗封专线流量（折合单 GB ¥0.2）。对于身处严格管控宽带环境、对断网有极高焦虑感、必须确保关键时刻网络 100% 畅通的外贸与技术用户，灵动云是令人安心的坚实后盾。"
    ],
    networkTopology: {
      entryBgp: "全国多点分布式动态切换 BGP 入口，多组国内备用接入点随时待命",
      backbone: "动态混淆加密隧道与物理内网专线复合架构，具备极强的深度包检测（DPI）穿透能力",
      egressPops: "香港、日本、新加坡、美国核心高机密数据中心落地，定期自动清洗 IP 地址池",
      redundancy: "智能实时自动探测与毫秒级链路热备切换系统，专为对抗极端网络封锁设计"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港抗封专线 (HK-Shield)", ping: "24 ms", jitter: "1.5 ms", download: "760.2 Mbps", upload: "195.0 Mbps", loss: "0.1%", ytBuffer: "4K极速秒开" },
      { region: "🇯🇵 日本东京防封 (JP-Shield)", ping: "48 ms", jitter: "1.9 ms", download: "700.0 Mbps", upload: "170.2 Mbps", loss: "0.1%", ytBuffer: "4K极速" },
      { region: "🇸🇬 新加坡专线 (SG-Shield)", ping: "55 ms", jitter: "2.2 ms", download: "640.5 Mbps", upload: "160.0 Mbps", loss: "0.2%", ytBuffer: "4K秒开" },
      { region: "🇺🇸 美国西海岸 (US-Shield)", ping: "136 ms", jitter: "3.4 ms", download: "500.2 Mbps", upload: "125.0 Mbps", loss: "0.2%", ytBuffer: "4K稳定" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "干净原生 IP 全面支持 ChatGPT 网页版与官方客户端深度对话",
      claude: "稳定支持 Claude 3.7 Sonnet 各类版本日常交互",
      gemini: "全面解锁 Google Gemini 智能搜索与办公生态",
      netflix: "深度解锁美港日区主流 Netflix 剧集，支持 4K HDR 串流",
      disney: "Disney+ 全区流畅播放支持",
      youtube: "极速加载零丢帧，4K 高清视频播放平稳自如",
      tiktok: "海外短视频即开即刷，体验流畅"
    },
    protocolTech: "灵动云部署了融合版 VLESS-Reality、Trojan 与深度伪装协议栈，结合独创的动态端口跳变（Port Hopping）技术，让审查防火墙无法提取出固定规律的流量特征，实现真正的流量隐形。",
    plansDeepDive: "灵动云标准防封套餐 ¥20/月享 100GB 动态抗封流量（单 GB ¥0.2）；长效保障套餐 ¥38/月享 220GB 流量（折合单 GB ¥0.172）。所有节点均纳入高可用抗封调度池，特殊时期安全感满满。",
    extendedPros: [
      "出色的反审查与网络自愈技术，敏感时期全网大面积断连时依然能坚挺稳定在线",
      "多层动态混淆协议深度隐藏流量特征，有效避免本地宽带运营商 QoS 限速",
      "全节点干净原生 IP 落地，主流 AI 平台与海外流媒体解锁率出众",
      "全平台 Clash、v2rayN、Shadowrocket 客户端通用订阅一键导入",
      "技术应急响应极其迅速，全天候算法自动化监控节点可用性"
    ],
    extendedCons: [
      "¥20/月起步资费针对抗封锁研发有一定成本沉淀，单 GB 成本略高于低价走量型机场",
      "由于采用高强度混淆算法，极个别低配老旧路由器的 CPU 占用可能略有上升",
      "节点主要聚焦在核心亚太及美西安全机房，极端冷门边缘国家布局相对有限"
    ],
    audienceScenarios: [
      { role: "对网络断线有极高焦虑感的企业主与外贸商户", reason: "关键谈判时刻节点全红断网的损失不可估量，灵动云保障 365 天无缝在线。" },
      { role: "身处严格审计校园网或特定严管网络环境的用户", reason: "深度混淆技术轻松穿透本地网络多层防火墙，顺利连接外部世界。" },
      { role: "资深科学上网用户的主力防封锁后备保障", reason: "即便主机场在特殊时期偶有波动，灵动云也是最可靠的紧急生命线。" }
    ],
    faqList: [
      { q: "在特殊敏感时期，灵动云是如何保证不掉线的？", a: "灵动云部署了自动化链路探针与多组热备通道。当检测到某个端口或 IP 受到干扰时，服务端会在 500 毫秒内自动重定向到备用隐蔽隧道，用户端无需任何手动操作即可恢复网络通信。" },
      { q: "灵动云节点需要手动开启特殊的混淆开关吗？", a: "不需要，灵动云的订阅节点已经在配置中内置了完整的混淆参数，直接在 Clash 或 Shadowrocket 正常连接即可自动生效。" }
    ]
  },

  quanqiuyun: {
    id: "quanqiuyun",
    name: "全球云",
    subtitle: "全球冷门小众节点覆盖 · 跨国流媒体解锁与外贸多国IP矩阵",
    overview: [
      "全球云（GCVIP）是一家以“全球超广泛国家节点覆盖”与“跨国流媒体全量解锁”为独特核心优势的综合型中转优化机场。绝大部分传统机场的节点列表千篇一律，基本只有香港、日本、美国、新加坡老四样，对于有特殊冷门国家网络访问需求的用户十分捉襟见肘。",
      "全球云深耕全球机房资源多年，除了主流亚太和美加节点外，还深度覆盖了英国、德国、法国、荷兰、俄罗斯、土耳其、阿根廷、巴西、澳大利亚、泰国、越南、菲律宾等全球数十个国家与地区。全线采用大带宽优质中转节点，极大满足了跨国电商本土店铺运营、流媒体跨区购买特惠订阅及跨国市场调研的专业需求。",
      "全球云起步套餐为 ¥20/月，提供 120GB 充足流量（折合单 GB 成本约 ¥0.167）。输入本站专属优惠码 tt88 可享受专属优惠折扣。如果你需要一个拥有全球各国 IP 随心切换的“世界网络通行证”，全球云是不二之选。"
    ],
    networkTopology: {
      entryBgp: "国内华南、华东核心大带宽优质 BGP 入口，提供高速国内汇聚分流",
      backbone: "优质大带宽跨国中转专线网络，覆盖全球五大洲骨干网络节点",
      egressPops: "全球数十个国家原生商用与住宅 IP 资源池，节点多样性位列行业前列",
      redundancy: "多地域异地多活节点阵列，单区域机房异常时自动调度临近国家节点"
    },
    speedBenchmarks: [
      { region: "🇭🇰 香港经典中转 (HK-Global)", ping: "27 ms", jitter: "1.9 ms", download: "740.0 Mbps", upload: "190.0 Mbps", loss: "0.1%", ytBuffer: "4K极速秒开" },
      { region: "🇯🇵 日本东京节点 (JP-Global)", ping: "52 ms", jitter: "2.3 ms", download: "680.5 Mbps", upload: "170.0 Mbps", loss: "0.2%", ytBuffer: "4K极速" },
      { region: "🇸🇬 新加坡优化 (SG-Global)", ping: "59 ms", jitter: "2.6 ms", download: "620.0 Mbps", upload: "150.4 Mbps", loss: "0.2%", ytBuffer: "4K秒开" },
      { region: "🇬🇧 英国伦敦专线 (UK-Global)", ping: "145 ms", jitter: "3.5 ms", download: "510.2 Mbps", upload: "120.0 Mbps", loss: "0.3%", ytBuffer: "4K流畅" },
      { region: "🇩🇪 德国法兰克福 (DE-Global)", ping: "150 ms", jitter: "3.8 ms", download: "480.0 Mbps", upload: "110.5 Mbps", loss: "0.3%", ytBuffer: "4K稳定" }
    ],
    aiAndStreamingMatrix: {
      chatgpt: "支持常规 ChatGPT 网页版与官方客户端深度交互",
      claude: "核心亚太与英美节点支持 Claude 3.7 全模型稳定访问",
      gemini: "全面解锁 Google Gemini 与全球多语言搜索生态",
      netflix: "深度解锁美、英、日、港、台、德、法、阿根廷、土耳其等全球多国完整 Netflix 片库",
      disney: "Disney+ 全球多区畅通播放支持",
      youtube: "支持 YouTube Premium 跨区低价购买与 4K 超清秒开播放",
      tiktok: "支持全球多国不同区域版本 TikTok 短视频无水印刷推与跨国直播"
    },
    protocolTech: "全球云全面兼容 Shadowsocks 与 Trojan 协议，拥有极高的通用性与连接响应速度。支持各大客户端一键订阅导入，节点按大洲分类清晰，查找与切换目标国家极其便捷。",
    plansDeepDive: "全球云标准月付版 ¥20/月享 120GB 流量（折合单 GB ¥0.167）；大流量年付版享有更多单价优惠。配合专属优惠码 tt88 结算更划算，是多国 IP 需求者的极佳选择。",
    extendedPros: [
      "全球节点覆盖极为广泛，除主流港日美外，深度覆盖英德法俄、土阿、东南亚等全球数十国",
      "跨国流媒体解锁能力无出其右，全量解锁全球多国专属版权库（如 BBC iPlayer、AbemaTV）",
      "专属优惠码 tt88 结算立享专属折扣",
      "全平台客户端通用订阅，节点命名规范，按国旗与大洲清晰排布",
      "适合跨境电商跨国矩阵多店铺本土化运营与跨国营销调研"
    ],
    extendedCons: [
      "部分极其偏远的冷门国家节点（如阿根廷、土耳其）物理距离极远，延迟在 200ms 以上属正常物理规律",
      "晚高峰极限负载下，冷门区域的带宽储备相较于核心亚太节点略有差异",
      "多设备同时在线超过限制时需在后台管理设备授权"
    ],
    audienceScenarios: [
      { role: "跨国跨境电商多平台卖家", reason: "需要频繁登录欧洲、南美或东南亚本土店铺后台，拥有真实对应国家原生 IP。" },
      { role: "全球冷门流媒体追剧达人", reason: "看英国 BBC、日本 Abema、中东特惠订阅，一个机场满足所有跨国片库需求。" },
      { role: "涉外国际关系与多语言研究学者", reason: "真实模拟当地网络环境抓取第一手全球本土新闻与学术资讯。" }
    ],
    faqList: [
      { q: "全球云优惠码 tt88 怎么用？", a: "在选购全球云套餐进入结算页面时，将优惠码 tt88 复制到折扣框内并确认，即可享受到专属折扣扣减。" },
      { q: "全球云的阿根廷、土耳其等节点适合用来干嘛？", a: "阿根廷、土耳其等节点拥有特殊的低价区汇率优势，常用于以极低成本订阅 YouTube Premium、Steam 游戏购买或解锁当地专属流媒体节目。" }
    ]
  }
};

const outputContent = `/**
 * 14大机场品牌深度评测与全维度技术资料库 (专业详细版)
 * 涵盖：品牌背景、物理专线拓扑、晚高峰测速天梯、AI与流媒体解锁矩阵、套餐深度拆解、优缺点红黑榜与专属FAQ
 */

export const airportDeepData = ${JSON.stringify(airportDeepData, null, 2)};
`;

fs.writeFileSync(path.join(ROOT_DIR, 'src/data/airportDeepData.js'), outputContent, 'utf8');
console.log('✅ 成功生成 14 大机场深度专业数据源：src/data/airportDeepData.js');
