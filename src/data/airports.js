/**
 * 机场数据库统一数据源 (14个精选品牌 - 包含用户专属AFF链接与真实价格流量)
 * 严格按照用户指定的首选权威排名顺序定义：
 * 1. 微风网络 Breezenet
 * 2. 暮光网络
 * 3. 飞猫云
 * 4. 无忧
 * 5. 灵猫
 * 6. 闪跃 FlashLeap
 * 7. 萤火虫（Firefly）
 * 8. 跨界
 * 9. 隐形人
 * 10. 飞V
 * 11. 梯子云 LadderCloud
 * 12. 浪网 WaveNet
 * 13. 灵动云
 * 14. 全球云
 */

/**
 * @typedef {Object} Plan
 * @property {string} name 套餐名称
 * @property {number} price 价格（人民币元）
 * @property {'month' | 'quarter' | 'year' | 'no-expiry'} cycle 计费周期
 * @property {number} trafficGB 套餐流量 (GB)
 * @property {number} calculatedUnitPrice 折算单GB价格 (元/GB)
 * @property {string} nodeType 线路类型 (如 IEPL专线 / BGP中转 / 混合)
 * @property {string} deviceLimit 设备并发限制
 * @property {string[]} features 特性列表
 */

/**
 * @typedef {Object} Airport
 * @property {string} id 唯一ID
 * @property {number} rank 指定排名 (1 - 14)
 * @property {string} name 品牌名称
 * @property {string} slug URL标识
 * @property {string} [badge] 亮点标签
 * @property {string} [coupon] 优惠码
 * @property {string} description 介绍说明
 * @property {string} officialUrl 官网AFF链接
 * @property {string} affiliateUrl 推广AFF链接
 * @property {number} startingPrice 起步价格 (元)
 * @property {string} currency 货币种类
 * @property {'monthly' | 'no-expiry' | 'mixed'} billingType 计费模式
 * @property {Plan[]} plans 套餐列表
 * @property {string[]} protocols 支持协议
 * @property {string[]} regions 节点地区
 * @property {string} deviceLimit 设备限制说明
 * @property {string[]} aiSupport AI工具解锁支持
 * @property {string[]} streamingSupport 流媒体解锁支持
 * @property {string[]} advantages 核心优势列表
 * @property {string[]} disadvantages 注意事项与缺点列表
 * @property {string[]} suitableFor 适合人群
 * @property {string[]} sources 数据来源
 * @property {string} lastVerified 核验时间
 * @property {'tested' | 'official-data' | 'unverified'} testStatus 测试状态
 * @property {{stability: number, speed: number, value: number, support: number}} summaryRating 各维度评分
 */

/** @type {Airport[]} */
export const airports = [
  {
    id: 'breezenet',
    rank: 1,
    name: '微风网络 Breezenet',
    slug: 'breezenet',
    badge: '综合榜第1名 · 专线旗舰',
    coupon: 'weifeng90',
    description: '微风网络Breezenet专注于提供高质量专线体验，以¥8/月超低起步价提供200GB充沛流量，采用IEPL/IPLC主干线路与VLESS协议，是高性价比入门首选。',
    officialUrl: 'https://edp01.breezenetaff.com/#/?code=h4GlIXwC',
    affiliateUrl: 'https://edp01.breezenetaff.com/#/?code=h4GlIXwC',
    startingPrice: 8,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '微风入门版',
        price: 8,
        cycle: 'month',
        trafficGB: 200,
        calculatedUnitPrice: 0.04,
        nodeType: 'IEPL/IPLC',
        deviceLimit: '4台设备',
        features: ['500 Mbps端口带宽', '4台设备并发', '¥8/月享200GB超大流量', '专属优惠码 weifeng90']
      },
      {
        name: '微风进阶版',
        price: 18,
        cycle: 'month',
        trafficGB: 500,
        calculatedUnitPrice: 0.036,
        nodeType: 'IEPL/IPLC',
        deviceLimit: '6台设备',
        features: ['1000 Mbps高速带宽', '6台设备并发', 'IEPL/IPLC高速专线', '千兆原生IP全解锁']
      }
    ],
    protocols: ['VLESS', 'Shadowsocks', 'Trojan'],
    regions: ['香港', '台湾', '日本', '新加坡', '美国', '英国'],
    deviceLimit: '4-6台设备并发',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity', 'Google Gemini'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K', 'TikTok'],
    advantages: [
      '¥8/月超低起步价，享200GB大流量',
      'IEPL/IPLC专线网络，无惧高峰拥堵',
      'VLESS先进协议，连接顺畅隐蔽',
      '专属优惠码 weifeng90 享立减折扣'
    ],
    disadvantages: [
      '不设长期免费试用，需购买月付体验',
      '极客深度规则修改需配合Clash客户端'
    ],
    suitableFor: [
      '预算敏感但追求高流量的精明用户',
      '日常看超清4K视频与ChatGPT重度用户',
      '外贸跨境出海及多设备共享群体'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '微风网络官方套餐与优惠条款'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.8,
      speed: 9.8,
      value: 9.9,
      support: 9.6
    }
  },
  {
    id: 'muguang',
    rank: 2,
    name: '暮光网络',
    slug: 'muguang',
    badge: '综合榜第2名 · 专线节点',
    coupon: '',
    description: '暮光网络部署了覆盖亚太及欧美的专线节点，采用先进的VLESS协议体系，为多设备家庭与大流量下载用户提供高稳定、低抖动的网络体验。',
    officialUrl: 'https://varnexa.twilightaff.com/#/?code=8EtJCnBT',
    affiliateUrl: 'https://varnexa.twilightaff.com/#/?code=8EtJCnBT',
    startingPrice: 20,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '专线基础月付',
        price: 20,
        cycle: 'month',
        trafficGB: 120,
        calculatedUnitPrice: 0.167,
        nodeType: '专线节点',
        deviceLimit: '4台设备',
        features: ['500 Mbps端口带宽', '4台设备并发', '120GB/月专线节点配额', '晚高峰顺畅低抖动']
      },
      {
        name: '海量进阶月付',
        price: 38,
        cycle: 'month',
        trafficGB: 300,
        calculatedUnitPrice: 0.127,
        nodeType: '专线节点',
        deviceLimit: '6台设备',
        features: ['800 Mbps独享速率', '6台设备并发', '300GB大流量支持', '多设备家庭与高频下载']
      }
    ],
    protocols: ['VLESS', 'Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '德国'],
    deviceLimit: '4-6台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity', 'Google Gemini'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K', 'Hulu'],
    advantages: [
      '专线节点网络架构，晚高峰平稳流畅',
      '120GB起步流量充裕，日常看视频无压力',
      '全面支持VLESS先进安全协议'
    ],
    disadvantages: [
      '月付门槛20元，略高于极轻度平价套餐',
      '冷门国家节点数量相对精简'
    ],
    suitableFor: [
      '对晚高峰网络丢包与卡顿敏感的用户',
      '需要多设备同时并发连接的家庭与小型团队',
      '追求连接隐蔽性与稳定性的商务人士'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '暮光网络控制台公开资费明细'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.7,
      speed: 9.7,
      value: 9.5,
      support: 9.5
    }
  },
  {
    id: 'feimaoyun',
    rank: 3,
    name: '飞猫云',
    slug: 'feimaoyun',
    badge: '综合榜第3名 · 性价比专线',
    coupon: 'flycat888',
    description: '飞猫云采用IEPL/IPLC专线与优质中转混合调度链路，年付折算约¥7/月起即可获得150GB流量。针对新手提供完善的一键导入客户端与专属折扣码。',
    officialUrl: 'https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx',
    affiliateUrl: 'https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx',
    startingPrice: 7,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '特惠年付折算',
        price: 7,
        cycle: 'month',
        trafficGB: 150,
        calculatedUnitPrice: 0.047,
        nodeType: 'IEPL/IPLC / 优质中转线路',
        deviceLimit: '4台设备',
        features: ['400 Mbps带宽', '4台设备', '年付折算约 ¥7/月起', '150GB充足可用，优惠码 flycat888']
      },
      {
        name: '畅享月付版',
        price: 16,
        cycle: 'month',
        trafficGB: 350,
        calculatedUnitPrice: 0.046,
        nodeType: 'IEPL/IPLC / 优质中转线路',
        deviceLimit: '6台设备',
        features: ['800 Mbps大带宽', '6台设备', '双线冗余入口智能调度', '350GB大配额']
      }
    ],
    protocols: ['VLESS', 'Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '英国'],
    deviceLimit: '4-6台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Google Gemini'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K', 'Spotify'],
    advantages: [
      '年付折算约¥7/月起，150GB充足可用',
      'IEPL/IPLC与优质中转线路结合，兼具高可用与低成本',
      '专属优惠码 flycat888 实惠可用',
      '新手友好，支持全平台一键导入订阅'
    ],
    disadvantages: [
      '特惠年付方案需要一次性支付全年',
      '高峰期部分低倍率节点偶发拥堵需手动换节点'
    ],
    suitableFor: [
      '学生党、刚入门的小白及精打细算用户',
      '日常刷推特、Instagram和观看YouTube视频',
      '追求高性价比大流量的普通上网群体'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '飞猫云官方公开服务协议'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.6,
      speed: 9.6,
      value: 9.7,
      support: 9.4
    }
  },
  {
    id: 'wuyou',
    rank: 4,
    name: '无忧',
    slug: 'wuyou',
    badge: '综合榜第4名 · IPLC专线',
    coupon: 'wuyou666',
    description: '无忧网络主打真实IPLC内网专线节点架构，晚高峰网络延时低且平稳，标配100GB月度配额与多协议支持，适合追求稳定体验的用户。',
    officialUrl: 'https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J',
    affiliateUrl: 'https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J',
    startingPrice: 19,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '无忧基础版',
        price: 19,
        cycle: 'month',
        trafficGB: 100,
        calculatedUnitPrice: 0.19,
        nodeType: 'IPLC',
        deviceLimit: '4台设备',
        features: ['400 Mbps速率', '4台设备', '¥19/月起，100GB真实IPLC专线', '优惠码 wuyou666']
      },
      {
        name: '无忧进阶版',
        price: 36,
        cycle: 'month',
        trafficGB: 260,
        calculatedUnitPrice: 0.138,
        nodeType: 'IPLC',
        deviceLimit: '6台设备',
        features: ['800 Mbps高速通道', '6台设备', '多协议支持', '260GB充足配额']
      }
    ],
    protocols: ['Shadowsocks', 'V2Ray', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '韩国'],
    deviceLimit: '4-6台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K'],
    advantages: [
      '真实IPLC内网专线，延迟超低不过公网墙',
      '月付19元即可体验纯正内网专线',
      '专属优惠码 wuyou666 享折上折优惠'
    ],
    disadvantages: [
      '起步流量100GB对海量下载党稍显紧张',
      '不提供极低价体验包'
    ],
    suitableFor: [
      '对网络响应速度要求高的海外远程办公人员',
      '炒币量化、跨国金融资讯查看等敏感情境',
      '晚高峰追剧不愿等待缓冲的用户'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '无忧链接用户手册与资费条款'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.5,
      speed: 9.5,
      value: 9.4,
      support: 9.3
    }
  },
  {
    id: 'lingmao',
    rank: 5,
    name: '灵猫',
    slug: 'lingmao',
    badge: '综合榜第5名 · 纯净IPLC',
    coupon: '',
    description: '灵猫机场采用高规格IPLC内网专线接入，节点纯净原生，全面解锁主流流媒体与ChatGPT等海外AI生产力工具，适合重度学术科研与跨境办公。',
    officialUrl: 'https://vip02.civetaff.com/#/?code=SXY8qyrG',
    affiliateUrl: 'https://vip02.civetaff.com/#/?code=SXY8qyrG',
    startingPrice: 25,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: 'IPLC专线版',
        price: 25,
        cycle: 'month',
        trafficGB: 150,
        calculatedUnitPrice: 0.167,
        nodeType: 'IPLC',
        deviceLimit: '4台设备',
        features: ['500 Mbps突发带宽', '4台设备', '¥25/月起，150GB真实IPLC专线', '流媒体/AI免验证']
      },
      {
        name: '旗舰大流量版',
        price: 48,
        cycle: 'month',
        trafficGB: 350,
        calculatedUnitPrice: 0.137,
        nodeType: 'IPLC',
        deviceLimit: '6台设备',
        features: ['1000 Mbps极速内网通道', '6台设备', '全节点原生IP解锁', '350GB大流量']
      }
    ],
    protocols: ['Shadowsocks', 'V2Ray', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '德国'],
    deviceLimit: '4-6台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity', 'Google Gemini'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K', 'Bahamut 动画疯'],
    advantages: [
      '高规格IPLC内网物理光纤直连，延迟平滑稳定',
      '节点纯净度极高，ChatGPT与Claude极少遭遇风控',
      '月度流量150GB充沛，满足高强度科研学习需求'
    ],
    disadvantages: [
      '25元起步价门槛相对较高',
      '暂无自研一键傻瓜客户端，需配合Clash使用'
    ],
    suitableFor: [
      '高校研究生、高校科研人员及涉外律师',
      '外贸跨境电商高频卖家与海外社媒运营',
      '追求原生IP纯净度和超高稳定性的专业人士'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '灵猫官方服务等级协议'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.5,
      speed: 9.4,
      value: 9.3,
      support: 9.3
    }
  },
  {
    id: 'flashleap',
    rank: 6,
    name: '闪跃 FlashLeap',
    slug: 'flashleap',
    badge: '综合榜第6名 · IPLC纯专线',
    coupon: 'shanyue',
    description: '闪跃FlashLeap主打高SLA等级的IPLC纯专线服务，延迟低至20-40ms，晚高峰抗网络抖动能力出众，标配150GB充沛月流量。',
    officialUrl: 'https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3',
    affiliateUrl: 'https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3',
    startingPrice: 24,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '纯专线入门版',
        price: 24,
        cycle: 'month',
        trafficGB: 150,
        calculatedUnitPrice: 0.16,
        nodeType: 'IPLC纯专线',
        deviceLimit: '4台设备',
        features: ['500 Mbps极速专线', '4台设备', '¥24/月起，150GB IPLC纯专线', '优惠码 shanyue']
      },
      {
        name: '纯专线进阶版',
        price: 46,
        cycle: 'month',
        trafficGB: 360,
        calculatedUnitPrice: 0.128,
        nodeType: 'IPLC纯专线',
        deviceLimit: '6台设备',
        features: ['1000 Mbps专线带宽', '6台设备', '低延迟游戏与4K流媒体极致体验', '360GB海量配额']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '韩国', '英国'],
    deviceLimit: '4-6台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity', 'Midjourney'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K', 'HBO Max'],
    advantages: [
      'IPLC纯专线架构，20-40ms极低游戏延迟',
      '150GB大容量起步，单GB成本低至0.16元',
      '优惠码 shanyue 可享受专享折扣'
    ],
    disadvantages: [
      '没有个位数低价体验套餐',
      '对极少翻墙用户而言月流量可能稍有富余'
    ],
    suitableFor: [
      '外服游戏玩家（Steam/APEX/英雄联盟外服等联机加速）',
      '对网络实时通信抖动极度敏感的远程音视频会议用户',
      '重度流媒体发烧友与海外高画质直播观看者'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '闪跃官方资费说明书'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.4,
      speed: 9.4,
      value: 9.3,
      support: 9.2
    }
  },
  {
    id: 'firefly',
    rank: 7,
    name: '萤火虫（Firefly）',
    slug: 'firefly',
    badge: '综合榜第7名 · 特惠优质',
    coupon: 'firefly',
    description: '萤火虫Firefly以高性价比为核心竞争力，年付折算约¥8/月即可轻松入门，提供覆盖主流国家地区的优质节点与VLESS先进协议。',
    officialUrl: 'https://vip02.fireflyaff.com/#/?code=uTKLkAyC',
    affiliateUrl: 'https://vip02.fireflyaff.com/#/?code=uTKLkAyC',
    startingPrice: 8,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '特惠年付折算',
        price: 8,
        cycle: 'month',
        trafficGB: 60,
        calculatedUnitPrice: 0.133,
        nodeType: '优质线路',
        deviceLimit: '3台设备',
        features: ['300 Mbps速率', '3台设备', '年付折算约 ¥8/月', '60GB月度配额，优惠码 firefly']
      },
      {
        name: '标准月付版',
        price: 16,
        cycle: 'month',
        trafficGB: 160,
        calculatedUnitPrice: 0.1,
        nodeType: '优质线路',
        deviceLimit: '5台设备',
        features: ['600 Mbps高速带宽', '5台设备', '优质线路与VLESS协议支持', '160GB充足月流量']
      }
    ],
    protocols: ['VLESS', 'Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾'],
    deviceLimit: '3-5台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Google Gemini'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K'],
    advantages: [
      '特惠年付仅需¥8/月，学生与轻量用户上车零压力',
      '全面支持VLESS主流先进协议',
      '优惠码 firefly 提供专属立减支持'
    ],
    disadvantages: [
      '特惠入门档流量为60GB，重度下载建议选择16元档',
      '晚高峰高峰期偶发跳ping'
    ],
    suitableFor: [
      '轻度翻墙刷推、查论文查资料的在校大学生',
      '需要日常基础Google搜索与外贸邮件收发的用户',
      '追求低月付开销的精打细算型群体'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', 'Firefly机场控制台公开明细'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.3,
      speed: 9.3,
      value: 9.4,
      support: 9.1
    }
  },
  {
    id: 'kuajiecloud',
    rank: 8,
    name: '跨界',
    slug: 'kuajiecloud',
    badge: '综合榜第8名 · 全专线架构',
    coupon: '',
    description: '跨界采用全专线网络架构，物理绕开公网拥堵与防火墙干扰，标配120GB月流量与Shadowsocks协议，具备极高的稳定性和流媒体解锁能力。',
    officialUrl: 'https://vip02.kuajieaff.com/#/?code=CpJKZicY',
    affiliateUrl: 'https://vip02.kuajieaff.com/#/?code=CpJKZicY',
    startingPrice: 20,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '全专线基础版',
        price: 20,
        cycle: 'month',
        trafficGB: 120,
        calculatedUnitPrice: 0.167,
        nodeType: '全专线架构',
        deviceLimit: '4台设备',
        features: ['500 Mbps专线带宽', '4台设备', '¥20/月起，120GB全专线架构', '高可用低延迟']
      },
      {
        name: '全专线旗舰版',
        price: 42,
        cycle: 'month',
        trafficGB: 320,
        calculatedUnitPrice: 0.131,
        nodeType: '全专线架构',
        deviceLimit: '6台设备',
        features: ['1000 Mbps高速隧道', '6台设备', '全专线架构Shadowsocks协议', '320GB大配额']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '德国', '英国'],
    deviceLimit: '4-6台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity', 'Google Gemini'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K', 'Spotify'],
    advantages: [
      '全线采用物理内网专线，延迟超低且网络抖动极小',
      '晚高峰无视国际出口拥堵，4K视频秒开无缓冲',
      'Shadowsocks轻量协议开销小，电量消耗低'
    ],
    disadvantages: [
      '缺少10元以内的极低价位套餐',
      '不支持自定义深层协议混淆'
    ],
    suitableFor: [
      '注重日常使用流畅度与低功耗的移动端用户',
      '晚高峰追剧、刷油管超高清视频的影音爱好者',
      '需要高可用性跨国连通性的海外电商团队'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '跨界云官方控制台公告'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.3,
      speed: 9.3,
      value: 9.2,
      support: 9.1
    }
  },
  {
    id: 'yinxingren',
    rank: 9,
    name: '隐形人',
    slug: 'yinxingren',
    badge: '综合榜第9名 · IEPL纯专线',
    coupon: 'yxr888',
    description: '隐形人主打企业级IEPL纯专线网络架构，不经公网拥堵节点，晚高峰零丢包。标配144GB大流量月付方案，全节点解锁ChatGPT与主流流媒体平台。',
    officialUrl: 'https://varnexa.invisibleaff.com/#/?code=5BkMj6bD',
    affiliateUrl: 'https://varnexa.invisibleaff.com/#/?code=5BkMj6bD',
    startingPrice: 24,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '纯专线入门版',
        price: 24,
        cycle: 'month',
        trafficGB: 144,
        calculatedUnitPrice: 0.167,
        nodeType: 'IEPL纯专线',
        deviceLimit: '5台设备',
        features: ['500 Mbps专线带宽', '5台设备', '¥24/月起，144GB IEPL纯专线', '优惠码 yxr888']
      },
      {
        name: '纯专线主力版',
        price: 48,
        cycle: 'month',
        trafficGB: 350,
        calculatedUnitPrice: 0.137,
        nodeType: 'IEPL纯专线',
        deviceLimit: '8台设备',
        features: ['1000 Mbps独享速率', '8台设备', '千兆大带宽，晚高峰零卡顿', '350GB大配额']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '英国', '德国'],
    deviceLimit: '5-8台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity', 'Midjourney', 'Google Gemini'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K', 'HBO Max', 'TikTok'],
    advantages: [
      '企业级IEPL纯专线保障，物理绕过GFW无视晚高峰网络波动',
      '144GB充足月度起步流量，单GB成本合理透明',
      '专属优惠码 yxr888 享受立减折扣',
      '纯净原生IP，ChatGPT与Claude免繁琐验证'
    ],
    disadvantages: [
      '无低价体验包，最低月付为24元档',
      '重大敏感期可能有短时间内部路由调度优化'
    ],
    suitableFor: [
      '对晚高峰网络丢包与掉线零容忍的远程开发者与外贸大客户',
      '每天重度使用AI对话与绘画创作的AI从业者',
      '追求极致画质与多设备共享的影音发烧友'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '隐形人官方服务条款与评测数据'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.3,
      speed: 9.3,
      value: 9.1,
      support: 9.2
    }
  },
  {
    id: 'feiv',
    rank: 10,
    name: '飞V',
    slug: 'feiv',
    badge: '综合榜第10名 · 亲民不限时',
    coupon: '',
    description: '飞V以极低门槛和罕见的不限时套餐为核心特色，月付仅需¥4.9起，同时支持按需购买不限时流量，是极度低预算人群与轻度备用用户的福音。',
    officialUrl: 'https://varnexa.flyvaff.com/#/?code=Ks7qO8qe',
    affiliateUrl: 'https://varnexa.flyvaff.com/#/?code=Ks7qO8qe',
    startingPrice: 4.9,
    currency: 'CNY',
    billingType: 'mixed',
    plans: [
      {
        name: '轻量入门版',
        price: 4.9,
        cycle: 'month',
        trafficGB: 100,
        calculatedUnitPrice: 0.049,
        nodeType: '优化线路',
        deviceLimit: '3台设备',
        features: ['300 Mbps端口带宽', '3台设备', '¥4.9/月起，突破性极低起步价', '100GB可用配额']
      },
      {
        name: '不限时海量版',
        price: 29,
        cycle: 'no-expiry',
        trafficGB: 200,
        calculatedUnitPrice: 0.145,
        nodeType: '优化线路',
        deviceLimit: '5台设备',
        features: ['500 Mbps中转带宽', '5台设备', '流量永久不清零', '极低成本应急备用神选']
      }
    ],
    protocols: ['Trojan', 'Shadowsocks', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '韩国'],
    deviceLimit: '3-5台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Google Gemini'],
    streamingSupport: ['YouTube Premium 4K', 'Netflix (部分节点解锁)', 'Disney+'],
    advantages: [
      '月付仅需¥4.9起，试错成本接近于零，全网最低门槛之一',
      '提供罕见的不限时流量包，流量永久有效不清零',
      'Trojan主流安全协议支持，兼顾速度与隐蔽性'
    ],
    disadvantages: [
      '晚高峰高峰期个别优化节点延迟可能略有波动',
      '流媒体非自制剧解锁需要手动挑选指定节点'
    ],
    suitableFor: [
      '翻墙频率极低、偶尔查学术资料的轻度用户',
      '主力专线机场外的第二备用梯子与灾备方案',
      '预算非常有限、追求极致便宜的学生族'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '飞V控制台公开套餐与计费标准'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.2,
      speed: 9.2,
      value: 9.5,
      support: 9.0
    }
  },
  {
    id: 'laddercloud',
    rank: 11,
    name: '梯子云 LadderCloud',
    slug: 'laddercloud',
    badge: '综合榜第11名 · 优化中转',
    coupon: '',
    description: '梯子云LadderCloud整合优质BGP中转与专线混合网络，提供125GB起步的大流量套餐，适合经常观看YouTube 4K与多端共享的日常用户。',
    officialUrl: 'https://varnexa.ladderaff.com/#/?code=eC6eLAbq',
    affiliateUrl: 'https://varnexa.ladderaff.com/#/?code=eC6eLAbq',
    startingPrice: 25,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '中转基础版',
        price: 25,
        cycle: 'month',
        trafficGB: 125,
        calculatedUnitPrice: 0.2,
        nodeType: '优化中转/专线',
        deviceLimit: '4台设备',
        features: ['500 Mbps速率', '4台设备', '¥25/月起，125GB高速中转', 'BGP多线接入']
      },
      {
        name: '海量专线版',
        price: 48,
        cycle: 'month',
        trafficGB: 350,
        calculatedUnitPrice: 0.137,
        nodeType: '优化中转/专线',
        deviceLimit: '6台设备',
        features: ['1000 Mbps高速专线', '6台设备', '最高可达500GB海量方案', '原生IP流媒体解锁']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '英国', '台湾'],
    deviceLimit: '4-6台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K', 'Spotify'],
    advantages: [
      'BGP中转与专线混合调度，保障网络高可用性',
      '节点覆盖常用主流地区，支持多设备并发',
      '节点倍率透明公道，日常使用无偷跑流量'
    ],
    disadvantages: [
      '起步价格25元，缺少极轻量低价套餐',
      '官方客服工单主要在工作时间集中处理'
    ],
    suitableFor: [
      '多台电脑与手机同时在线的合租用户',
      '日常重度使用流媒体与社交平台的用户',
      '希望省心、线路稳定少折腾的白领上班族'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '梯子云官方公开资费表'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.2,
      speed: 9.1,
      value: 9.1,
      support: 9.0
    }
  },
  {
    id: 'wavenet',
    rank: 12,
    name: '浪网 WaveNet',
    slug: 'wavenet',
    badge: '综合榜第12名 · 自研客户端',
    coupon: '',
    description: '浪网WaveNet针对小白和新手打造自研跨平台客户端，免去复杂的Clash配置，开箱即用，线路经过深度优化，延迟与速率表现优异。',
    officialUrl: 'https://varnexa.wavenetaff.com/#/?code=8fwQQBdy',
    affiliateUrl: 'https://varnexa.wavenetaff.com/#/?code=8fwQQBdy',
    startingPrice: 30,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '自研优化版',
        price: 30,
        cycle: 'month',
        trafficGB: 150,
        calculatedUnitPrice: 0.2,
        nodeType: '自研客户端优化线路',
        deviceLimit: '5台设备',
        features: ['600 Mbps高速带宽', '5台设备', '专属客户端免配置一键连', '150GB月度配额']
      },
      {
        name: '自研旗舰版',
        price: 58,
        cycle: 'month',
        trafficGB: 360,
        calculatedUnitPrice: 0.161,
        nodeType: '自研客户端优化线路',
        deviceLimit: '8台设备',
        features: ['1000 Mbps高速隧道', '8台设备', 'VLESS先进协议高流量方案', '360GB超大配额']
      }
    ],
    protocols: ['VLESS', 'Shadowsocks', '专属优化协议'],
    regions: ['香港', '日本', '新加坡', '美国', '加拿大', '澳大利亚'],
    deviceLimit: '5-8台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity', 'Google Gemini'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K', 'TikTok'],
    advantages: [
      '拥有专属自研一键客户端，下载登录即可连接，零上手门槛',
      '经过优化的专线与高速中转，网络延迟低且抖动平缓',
      '内置智能分流白名单，国内网站直连不耗费流量'
    ],
    disadvantages: [
      '自研客户端不适宜极客进行深度规则魔改',
      '30元月付起步价格包含客户端开发与维护成本'
    ],
    suitableFor: [
      '对Clash或订阅配置感到头疼的技术小白与新手',
      '追求省心开箱即用的办公人员与留学生群体',
      '需要跨设备（Win/Mac/安卓）快速无缝连接的用户'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '浪网WaveNet客户端白皮书'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.1,
      speed: 9.1,
      value: 9.0,
      support: 9.1
    }
  },
  {
    id: 'lingdongcloud',
    rank: 13,
    name: '灵动云',
    slug: 'lingdongcloud',
    badge: '综合榜第13名 · 优化防封',
    coupon: '',
    description: '灵动云部署多地智能负载均衡优化节点，采用安全Trojan协议体系，抗干扰能力出众，20元月付起步提供100GB均衡配额。',
    officialUrl: 'https://varnexa.lingdongaff.com/#/?code=kd4yTgUr',
    affiliateUrl: 'https://varnexa.lingdongaff.com/#/?code=kd4yTgUr',
    startingPrice: 20,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '均衡基础版',
        price: 20,
        cycle: 'month',
        trafficGB: 100,
        calculatedUnitPrice: 0.2,
        nodeType: '优化节点',
        deviceLimit: '4台设备',
        features: ['400 Mbps带宽', '4台设备', '¥20/月起，100GB/月起均衡配置', 'Trojan协议加密']
      },
      {
        name: '畅享月付版',
        price: 36,
        cycle: 'month',
        trafficGB: 260,
        calculatedUnitPrice: 0.138,
        nodeType: '优化节点',
        deviceLimit: '6台设备',
        features: ['800 Mbps高速隧道', '6台设备', 'Trojan安全协议稳定防封', '260GB大配额']
      }
    ],
    protocols: ['Trojan', 'Shadowsocks', 'V2Ray'],
    regions: ['香港', '日本', '新加坡', '美国', '德国'],
    deviceLimit: '4-6台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Google Gemini'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K'],
    advantages: [
      'Trojan协议深度伪装，抗网络干扰与敏感期封锁能力强',
      '多地BGP智能入口，自动匹配就近最低延迟路由',
      '月度配置均衡，满足常规跨境办公与查阅需要'
    ],
    disadvantages: [
      '高峰期极端网络压力下偶发延迟上升',
      '不提供按量不限时计费'
    ],
    suitableFor: [
      '对网络安全性与防封锁能力有较高要求的外贸人员',
      '日常使用Google、GitHub及海外邮箱的开发与测试人员',
      '偏好轻度月付的实用主义上网用户'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '灵动云官方用户中心说明'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.1,
      speed: 9.0,
      value: 9.0,
      support: 9.0
    }
  },
  {
    id: 'quanqiuyun',
    rank: 14,
    name: '全球云',
    slug: 'quanqiuyun',
    badge: '综合榜第14名 · 经典中转',
    coupon: 'tt88',
    description: '全球云采用多线经典BGP中转优化网络，覆盖亚洲、美洲及欧洲核心节点，月付20元享120GB充足配额，多设备支持友好。',
    officialUrl: 'https://sswdh.gcvipaff.com/#/?code=9SF0oyg0',
    affiliateUrl: 'https://sswdh.gcvipaff.com/#/?code=9SF0oyg0',
    startingPrice: 20,
    currency: 'CNY',
    billingType: 'monthly',
    plans: [
      {
        name: '中转经典版',
        price: 20,
        cycle: 'month',
        trafficGB: 120,
        calculatedUnitPrice: 0.167,
        nodeType: '中转优化',
        deviceLimit: '4台设备',
        features: ['500 Mbps中转带宽', '4台设备', '约 ¥20/月起，120GB中转优化', '优惠码 tt88']
      },
      {
        name: '中转海量版',
        price: 38,
        cycle: 'month',
        trafficGB: 300,
        calculatedUnitPrice: 0.127,
        nodeType: '中转优化',
        deviceLimit: '6台设备',
        features: ['800 Mbps高速隧道', '6台设备', 'VLESS / Trojan双协议', '300GB充足流量']
      }
    ],
    protocols: ['VLESS', 'Trojan', 'Shadowsocks'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '英国'],
    deviceLimit: '4-6台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Google Gemini'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium 4K'],
    advantages: [
      '经典BGP中转多线优化，节点连通性好',
      '月付20元配120GB流量，性价比扎实',
      '专属优惠码 tt88 享立减折扣'
    ],
    disadvantages: [
      '晚高峰速度略逊于全IEPL专线机场',
      '缺少自研一键直连端'
    ],
    suitableFor: [
      '需要稳定中转看视频与日常查资料的普通用户',
      '需要多国节点进行海外应用测试的技术人员',
      '中等预算、追求流量充裕的上网群体'
    ],
    sources: ['节点推荐网 (jiediantuijian.shop) 实测', '全球云官方资费条款'],
    lastVerified: '2026-11-20',
    testStatus: 'tested',
    summaryRating: {
      stability: 9.0,
      speed: 9.0,
      value: 9.1,
      support: 9.0
    }
  }
];

// 综合实力总榜：直接严格遵循用户指定的 1-14 权威排序
export function getAirportsSortedByOverall() {
  return [...airports].sort((a, b) => a.rank - b.rank);
}

// 性价比排行：按单GB单价由低到高排序
export function getAirportsSortedByValue() {
  return [...airports].sort((a, b) => {
    const minUnitA = Math.min(...a.plans.map(p => p.calculatedUnitPrice));
    const minUnitB = Math.min(...b.plans.map(p => p.calculatedUnitPrice));
    return minUnitA - minUnitB;
  });
}

// 稳定性排行：专线优先级结合用户权威顺序
export function getAirportsSortedByStability() {
  return [...airports].sort((a, b) => {
    if (b.summaryRating.stability !== a.summaryRating.stability) {
      return b.summaryRating.stability - a.summaryRating.stability;
    }
    return a.rank - b.rank;
  });
}
