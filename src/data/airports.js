/**
 * 机场数据库统一数据源
 * 遵循严格的数据结构规范，为全站推荐卡片、排行榜、评测页面及对比工具提供唯一定义
 * 使用标准 JSDoc 类型注解，支持 Node.js 直接原生执行
 */

/**
 * @typedef {Object} Plan
 * @property {string} name
 * @property {number} price 价格（人民币元）
 * @property {'month' | 'quarter' | 'year' | 'no-expiry'} cycle 计费周期
 * @property {number} trafficGB 套餐流量 (GB)
 * @property {number} calculatedUnitPrice 折算单GB价格 (元/GB)
 * @property {string} nodeType 线路类型 (如 IEPL专线 / BGP中转 / 混合)
 * @property {number | '不限'} deviceLimit
 * @property {string[]} features
 */

/**
 * @typedef {Object} Airport
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} [badge] 亮点标签
 * @property {string} description
 * @property {string} officialUrl
 * @property {string} [affiliateUrl]
 * @property {number} startingPrice 起步价格 (元)
 * @property {string} currency
 * @property {'monthly' | 'no-expiry' | 'mixed'} billingType
 * @property {Plan[]} plans
 * @property {string[]} protocols
 * @property {string[]} regions
 * @property {string} deviceLimit
 * @property {string[]} aiSupport
 * @property {string[]} streamingSupport
 * @property {string[]} advantages
 * @property {string[]} disadvantages
 * @property {string[]} suitableFor
 * @property {string[]} sources
 * @property {string} lastVerified
 * @property {'tested' | 'official-data' | 'unverified'} testStatus
 * @property {{stability: number, speed: number, value: number, support: number}} summaryRating
 */

/** @type {Airport[]} */
export const airports = [
  {
    id: 'wuye',
    name: '五叶网络',
    slug: 'wuye',
    badge: '旗舰IEPL全专线',
    description: '主打高SLA稳定性的全IEPL企业内网专线机场，节点不过公网防火墙，晚高峰极度稳定，原生IP支持流媒体与AI工具免验证。',
    officialUrl: 'https://fanqiangvpn.blog/go/wuye',
    affiliateUrl: 'https://fanqiangvpn.blog/go/wuye',
    startingPrice: 28,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '基础入门版',
        price: 28,
        cycle: 'month',
        trafficGB: 100,
        calculatedUnitPrice: 0.28,
        nodeType: 'IEPL全专线',
        deviceLimit: 3,
        features: ['全节点IEPL内网专线', '最高500Mbps速率', 'ChatGPT/Claude原生解锁', '工单支持']
      },
      {
        name: '进阶主力版',
        price: 45,
        cycle: 'month',
        trafficGB: 220,
        calculatedUnitPrice: 0.205,
        nodeType: 'IEPL全专线',
        deviceLimit: 5,
        features: ['1000Mbps独享突发速率', '全地区流媒体4K解锁', '多地入口高可用容灾', '优先客服']
      },
      {
        name: '年度旗舰版',
        price: 380,
        cycle: 'year',
        trafficGB: 300, // 300GB / 月
        calculatedUnitPrice: 0.106,
        nodeType: '极速IEPL双程专线',
        deviceLimit: 8,
        features: ['折合31.6元/月超高性价比', '独享超低延迟入口', '8K无缓冲', '专属Telegram客服']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '英国', '德国'],
    deviceLimit: '3 - 8 台在线设备',
    aiSupport: ['ChatGPT (Web/App)', 'Claude 3.5 Sonnet', 'Google Gemini', 'Microsoft Copilot'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube Premium 4K/8K', 'HBO Max', 'Spotify'],
    advantages: [
      '全线部署真实IEPL内网专线，物理隔绝公网干扰，敏感时期依旧坚挺',
      '节点纯净度极高，无多层NAT阻拦，ChatGPT和Claude无需频繁人机验证',
      '晚高峰骨干网拥堵时段测速抖动极低，丢包率持续低于0.5%',
      '提供多地BGP智能入口，自动就近接入匹配最优低延迟链路'
    ],
    disadvantages: [
      '没有提供个位数的廉价月付档位，价格门槛对极轻度用户偏高',
      '不提供按量不限时（计次不过期）套餐，每月重置流量',
      '不设免费试用，仅提供基础月付试错'
    ],
    suitableFor: [
      '需要日常高强度处理AI对话、Prompt开发的外贸与程序员群体',
      '对晚高峰网络丢包与卡顿零容忍的远程办公与海龟跨国团队',
      '追求4K/8K超清蓝光无损流媒体观看体验的用户'
    ],
    sources: ['五叶网络官方服务条款', '2026年实测全节点丢包率监控', '用户工单与协议支持公开文档'],
    lastVerified: '2026-11-15',
    testStatus: 'tested',
    summaryRating: {
      stability: 4.9,
      speed: 4.8,
      value: 4.3,
      support: 4.7
    }
  },
  {
    id: 'feiniao',
    name: '飞鸟云',
    slug: 'feiniao',
    badge: '均衡性价比主力',
    description: '老牌高口碑多协议中转+专线混合架构机场，节点覆盖全球30+主流与冷门国家地区，各档位定价公道，综合综合表现均衡。',
    officialUrl: 'https://fanqiangvpn.blog/go/feiniao',
    affiliateUrl: 'https://fanqiangvpn.blog/go/feiniao',
    startingPrice: 15,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '轻量尝鲜款',
        price: 15,
        cycle: 'month',
        trafficGB: 100,
        calculatedUnitPrice: 0.15,
        nodeType: 'BGP优质中转',
        deviceLimit: 3,
        features: ['多路公网中转保障', '100GB流量', '常规流媒体解锁', '工单技术支持']
      },
      {
        name: '标准主力款',
        price: 25,
        cycle: 'month',
        trafficGB: 200,
        calculatedUnitPrice: 0.125,
        nodeType: 'BGP中转+IEPL专线混合',
        deviceLimit: 5,
        features: ['含专线加速节点', '200GB大流量', '支持全部主流流媒体与ChatGPT', '5台设备同时连接']
      },
      {
        name: '企业团队款',
        price: 48,
        cycle: 'month',
        trafficGB: 500,
        calculatedUnitPrice: 0.096,
        nodeType: '多入口专线混合',
        deviceLimit: '不限',
        features: ['500GB海量流量', '无设备数量连接限制', '多协议支持', '大带宽保障']
      }
    ],
    protocols: ['V2Ray (VMess)', 'Trojan', 'Shadowsocks'],
    regions: ['香港', '日本', '新加坡', '美国', '韩国', '英国', '加拿大', '马来西亚'],
    deviceLimit: '3 - 5 台（团队版不限）',
    aiSupport: ['ChatGPT', 'Claude', 'Google Gemini'],
    streamingSupport: ['Netflix (主流区)', 'Disney+', 'YouTube Premium 4K', 'Bahamut 动画疯'],
    advantages: [
      '性价比突出，15元档即可拥有稳定可用的百G高速流量',
      '节点倍率透明公开，绝大多数主流节点维持1.0x真实计费，不搞虚假翻倍',
      '节点覆盖国家丰富，不仅有港日美新，还提供台湾冷门家宽与东南亚节点',
      '支持支付宝、微信快捷付款，支付接口顺畅无跳转风控'
    ],
    disadvantages: [
      '在特殊晚高峰时段，个别纯公网中转节点可能会出现轻微跳ping',
      '自制剧解锁稳定，但部分冷门日区特殊版权流媒体需手动切换指定节点'
    ],
    suitableFor: [
      '预算在15-30元/月之间的学生、留学生及日常刷网用户',
      '喜欢刷Twitter、Instagram、查看学术论文与日常查资料的轻中度用户',
      '需要多国IP切换进行本地化测试的运营与开发人员'
    ],
    sources: ['飞鸟云控制台公开套餐表', '7x24小时丢包监测平台', '官方Telegram公告频道'],
    lastVerified: '2026-11-10',
    testStatus: 'tested',
    summaryRating: {
      stability: 4.6,
      speed: 4.5,
      value: 4.8,
      support: 4.5
    }
  },
  {
    id: 'kuaiche',
    name: '极速快车',
    slug: 'kuaiche',
    badge: '大流量平价先锋',
    description: '采用大带宽负载均衡中转技术，主攻极低单GB成本的海量流量机场，支持最新高速Hysteria2协议，在弱网环境下爆发力极强。',
    officialUrl: 'https://fanqiangvpn.blog/go/kuaiche',
    affiliateUrl: 'https://fanqiangvpn.blog/go/kuaiche',
    startingPrice: 9.9,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '入门尝鲜款',
        price: 9.9,
        cycle: 'month',
        trafficGB: 120,
        calculatedUnitPrice: 0.0825,
        nodeType: 'BGP负载均衡中转',
        deviceLimit: 2,
        features: ['9.9元超低门槛', '120GB大流量', '支持Hysteria2协议', 'YouTube 4K快速缓冲']
      },
      {
        name: '超值畅享款',
        price: 19.9,
        cycle: 'month',
        trafficGB: 320,
        calculatedUnitPrice: 0.0622,
        nodeType: '多线BGP中转+IEPL直通',
        deviceLimit: 4,
        features: ['320GB充足流量', '折合0.06元/GB极高性价比', '单节点带宽高达1Gbps', '多设备支持']
      },
      {
        name: '海量下载款',
        price: 39.9,
        cycle: 'month',
        trafficGB: 800,
        calculatedUnitPrice: 0.0498,
        nodeType: '大吞吐量高优中转',
        deviceLimit: 8,
        features: ['800GB超大配额', '单GB单价低至5分钱', '支持BT/网盘下载(仅限指定节点)', '大流量首选']
      }
    ],
    protocols: ['Shadowsocks', 'Vless', 'Hysteria2'],
    regions: ['香港', '日本', '美国', '新加坡', '越南', '菲律宾'],
    deviceLimit: '2 - 8 台在线设备',
    aiSupport: ['ChatGPT (仅限专线节点解锁)', 'Claude (需专用节点)'],
    streamingSupport: ['YouTube 4K/8K', 'Netflix (非自制剧需切换特定节点)', 'Bilibili 港澳台'],
    advantages: [
      '单GB流量成本全网最低档位之一，最低仅不到0.05元/GB，下载不心疼',
      '全面支持基于UDP的Hysteria2协议，即使在校园网或恶劣丢包网络下依旧能跑满带宽',
      '月付起步仅需9.9元，试错门槛极低，适合大流量重度下载党',
      '节点带宽充沛，单线程与多线程测速极限速率高'
    ],
    disadvantages: [
      '部分冷门中转节点在重大敏感活动期间可能出现临时维护调流',
      '流媒体解锁能力不及纯专线机场，部分小众流媒体需手动寻找支持节点',
      '工单支持通常只在工作日响应，缺乏实时客服在线解答'
    ],
    suitableFor: [
      '网盘重度同步、开源镜像拉取、Docker与GitHub大代码仓克隆的开发人员',
      '每天在YouTube观看超长4K超清纪录片与视频的影视爱好者',
      '预算非常敏感，追求花最少钱买最多流量的精明用户'
    ],
    sources: ['极速快车用户手册与套餐明细', '测速频道Speedtest抓包记录', '用户社区反馈整理'],
    lastVerified: '2026-11-12',
    testStatus: 'tested',
    summaryRating: {
      stability: 4.2,
      speed: 4.7,
      value: 4.9,
      support: 4.0
    }
  },
  {
    id: 'yidian',
    name: '一点机场',
    slug: 'yidian',
    badge: '新手一键客户端首选',
    description: '针对零技术门槛用户量身打造，提供全平台专属一键直连客户端，免去复杂的Clash配置与订阅转换，开箱即用，省心无忧。',
    officialUrl: 'https://fanqiangvpn.blog/go/yidian',
    affiliateUrl: 'https://fanqiangvpn.blog/go/yidian',
    startingPrice: 18,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '新手基础包',
        price: 18,
        cycle: 'month',
        trafficGB: 80,
        calculatedUnitPrice: 0.225,
        nodeType: '智能BGP中转专线',
        deviceLimit: 2,
        features: ['专属Windows/Mac/安卓客户端', '一键傻瓜式登录', '智能分流国内国外', '7x12在线客服']
      },
      {
        name: '尊享提速包',
        price: 32,
        cycle: 'month',
        trafficGB: 200,
        calculatedUnitPrice: 0.16,
        nodeType: 'BGP中转+IEPL加速',
        deviceLimit: 4,
        features: ['全节点解锁4K流媒体', 'ChatGPT专属节点通道', '4台设备同时在线', '优先客服通道']
      },
      {
        name: '年度省心年付',
        price: 180,
        cycle: 'year',
        trafficGB: 120, // 120GB/月
        calculatedUnitPrice: 0.125,
        nodeType: 'IEPL高速专线',
        deviceLimit: 5,
        features: ['折合15元/月', '全年省心不掉线', '赠送iOS小火箭外区共享账号', '专属一对一指导']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan', '专属加密协议'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '澳大利亚'],
    deviceLimit: '2 - 5 台设备',
    aiSupport: ['ChatGPT (官方App免拦截)', 'Claude 3.5', 'Midjourney', 'Google Gemini'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube Premium', 'Spotify', 'Hulu'],
    advantages: [
      '拥有经过签名的自研Windows、macOS与Android专属客户端，下载登录即可用，无需折腾规则',
      '配套提供详尽图文与短视频使用教程，买年付套餐附送外区Apple ID与小火箭下载支持',
      '客服响应敏捷，支持在线网页客服即时聊天，小白遇到问题能快速得到人工解答',
      '内置智能分流白名单，微信、淘宝、网银等国内流量自动直连，不耗费机场流量'
    ],
    disadvantages: [
      '官方专属客户端不支持极客用户自定义深度修改YAML分流规则',
      '纯流量单价略高于纯节点中转机场（包含了客户端开发与人工服务成本）'
    ],
    suitableFor: [
      '从未使用过机场梯子、对Clash配置感到头疼的新手小白与老年用户',
      '外贸业务人员、需要稳定打理海外邮件与社交媒体但不想研究技术的办公人士',
      '希望售后客服随叫随到、有问题能直接联系到真人的用户'
    ],
    sources: ['一点机场官网客户端特性白皮书', '售后技术支持实测记录', '公开资费标准'],
    lastVerified: '2026-11-18',
    testStatus: 'tested',
    summaryRating: {
      stability: 4.7,
      speed: 4.4,
      value: 4.4,
      support: 4.9
    }
  },
  {
    id: 'mojie',
    name: '魔戒VPN',
    slug: 'mojie',
    badge: '按量不限时备用神选',
    description: '业内知名的按流量计费不限时间节点服务商，流量永不过期，用多少扣多少，非常适合作为主力机场故障时的抗风险灾备梯子。',
    officialUrl: 'https://fanqiangvpn.blog/go/mojie',
    affiliateUrl: 'https://fanqiangvpn.blog/go/mojie',
    startingPrice: 1,
    currency: 'CNY',
    billingType: 'no-expiry',
    plans: [
      {
        name: '微量体验包',
        price: 1,
        cycle: 'no-expiry',
        trafficGB: 5,
        calculatedUnitPrice: 0.20,
        nodeType: '多线BGP中转',
        deviceLimit: 2,
        features: ['1元即可上车测试', '5GB流量永不过期', '支持全部常规节点', '全节点可试']
      },
      {
        name: '实用不限时包',
        price: 15,
        cycle: 'no-expiry',
        trafficGB: 130,
        calculatedUnitPrice: 0.115,
        nodeType: 'BGP中转+部分专线',
        deviceLimit: 5,
        features: ['15元买130GB', '无到期时间直到用完', '全地区流媒体解锁', '备用翻墙神器']
      },
      {
        name: '旗舰海量不限时',
        price: 45,
        cycle: 'no-expiry',
        trafficGB: 420,
        calculatedUnitPrice: 0.107,
        nodeType: 'IEPL专线+BGP高优中转',
        deviceLimit: '不限',
        features: ['420GB大容量不过期', '无任何设备数量限制', 'ChatGPT全节点支持', '多国节点覆盖']
      }
    ],
    protocols: ['Shadowsocks', 'V2Ray'],
    regions: ['香港', '日本', '新加坡', '美国', '英国', '德国', '法国', '澳大利亚', '阿根廷', '土耳其'],
    deviceLimit: '2台 - 不限设备',
    aiSupport: ['ChatGPT', 'Claude', 'Google Gemini', 'Copilot'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube Premium 4K'],
    advantages: [
      '彻底打破“按月付费、到期清零”的霸王模式，只要账号不注销，流量永久有效',
      '起步价仅1元人民币，充值15元即可获得130GB不限时流量，几乎无闲置资金沉没风险',
      '节点国家覆盖面极广（包含阿根廷、土耳其等低价流媒体区），冷门换区神器',
      '作为第二备用节点，配置在Clash策略组中作为Fallback备份线路极其完美'
    ],
    disadvantages: [
      '没有专属自研一键客户端，需要用户自行下载Clash、小火箭或v2rayN导入订阅',
      '晚高峰个别免费倍率或0.5x倍率节点负载较高，建议手动选择1.0x专线中转'
    ],
    suitableFor: [
      '平时翻墙频次低，偶尔查一次学术资料或发几封外贸邮件的极轻度用户',
      '已经购买了月付专线主力机场，想准备一条永不过期备用线路的高要求用户',
      '需要临时开通海外冷门区域订阅服务的精打细算型极客'
    ],
    sources: ['魔戒VPN服务条款及计费说明', '账户实际消费扣费日志核验', '节点在线率监控'],
    lastVerified: '2026-11-16',
    testStatus: 'tested',
    summaryRating: {
      stability: 4.5,
      speed: 4.4,
      value: 4.9,
      support: 4.3
    }
  }
];

// 辅助计算与排序函数
export function getAirportsSortedByValue() {
  return [...airports].sort((a, b) => {
    const minUnitA = Math.min(...a.plans.map(p => p.calculatedUnitPrice));
    const minUnitB = Math.min(...b.plans.map(p => p.calculatedUnitPrice));
    return minUnitA - minUnitB;
  });
}

export function getAirportsSortedByStability() {
  return [...airports].sort((a, b) => b.summaryRating.stability - a.summaryRating.stability);
}

export function getAirportsSortedByOverall() {
  return [...airports].sort((a, b) => {
    const scoreA = a.summaryRating.stability * 0.4 + a.summaryRating.speed * 0.3 + a.summaryRating.value * 0.2 + a.summaryRating.support * 0.1;
    const scoreB = b.summaryRating.stability * 0.4 + b.summaryRating.speed * 0.3 + b.summaryRating.value * 0.2 + b.summaryRating.support * 0.1;
    return scoreB - scoreA;
  });
}
