/**
 * IndexNow 搜索引擎快速推送模块
 * 支持 Bing 与其他支持 IndexNow 协议的搜索引擎
 * 严禁全量无差别高频推送，遵循速率与真实更新原则
 */

import fs from 'fs';
import path from 'path';
import https from 'https';

const HOST = 'fanqiangvpn.blog';
const KEY = 'e89f53c82d414a93864a78cb69420b91';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'api.indexnow.org';

// 从 arguments 读取模式
const args = process.argv.slice(2);
const isSubmitAll = args.includes('--all');
const singleUrlIdx = args.indexOf('--single');
const singleUrl = singleUrlIdx > -1 ? args[singleUrlIdx + 1] : null;

// 读取全站 URL 列表
function getSiteUrls() {
  const urls = [
    `https://${HOST}/`,
    `https://${HOST}/recommend/`,
    `https://${HOST}/recommend/budget/`,
    `https://${HOST}/recommend/premium/`,
    `https://${HOST}/recommend/beginner/`,
    `https://${HOST}/recommend/stable/`,
    `https://${HOST}/recommend/ai/`,
    `https://${HOST}/recommend/streaming/`,
    `https://${HOST}/ranking/`,
    `https://${HOST}/ranking/overall/`,
    `https://${HOST}/ranking/value/`,
    `https://${HOST}/ranking/budget/`,
    `https://${HOST}/ranking/stable/`,
    `https://${HOST}/airport/`,
    `https://${HOST}/airport/wuye/`,
    `https://${HOST}/airport/feiniao/`,
    `https://${HOST}/airport/kuaiche/`,
    `https://${HOST}/airport/yidian/`,
    `https://${HOST}/airport/mojie/`,
    `https://${HOST}/review/`,
    `https://${HOST}/review/wuye/`,
    `https://${HOST}/review/feiniao/`,
    `https://${HOST}/review/kuaiche/`,
    `https://${HOST}/review/yidian/`,
    `https://${HOST}/review/mojie/`,
    `https://${HOST}/compare/`,
    `https://${HOST}/guides/`,
    `https://${HOST}/guides/windows/`,
    `https://${HOST}/guides/android/`,
    `https://${HOST}/guides/ios/`,
    `https://${HOST}/guides/macos/`,
    `https://${HOST}/guides/rules-and-routing/`,
    `https://${HOST}/blog/`,
    `https://${HOST}/blog/how-to-choose-reliable-airport/`,
    `https://${HOST}/blog/vpn-vs-airport-difference/`,
    `https://${HOST}/blog/iplc-iepl-transit-direct-explained/`,
    `https://${HOST}/blog/why-avoid-free-vpn/`,
    `https://${HOST}/blog/what-to-do-when-airport-node-blocked/`,
    `https://${HOST}/glossary/`,
    `https://${HOST}/glossary/protocols-ss-v2ray-trojan-hysteria/`,
    `https://${HOST}/glossary/iplc-iepl-leased-lines/`,
    `https://${HOST}/glossary/node-ratio-bandwidth/`,
    `https://${HOST}/glossary/clash-rule-based-routing/`,
    `https://${HOST}/glossary/dns-leak-tuning/`,
    `https://${HOST}/about/`,
    `https://${HOST}/contact/`,
    `https://${HOST}/editorial-policy/`,
    `https://${HOST}/privacy-policy/`,
    `https://${HOST}/disclaimer/`
  ];
  return urls;
}

function submitToIndexNow(urlList, retryCount = 1) {
  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList
  });

  const options = {
    hostname: ENDPOINT,
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  console.log(`[IndexNow] 正在准备推送 ${urlList.length} 个 URL 到 ${ENDPOINT}...`);
  console.log(`[IndexNow] 域名: ${HOST}`);
  console.log(`[IndexNow] Key Location: ${KEY_LOCATION}`);

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`[IndexNow] 响应状态码: ${res.statusCode} ${res.statusMessage}`);
      if (res.statusCode === 200) {
        console.log('[IndexNow] ✅ 推送成功 (HTTP 200 OK)');
      } else if (res.statusCode === 202) {
        console.log('[IndexNow] ✅ URL 已成功接收，等待 Bing 处理队列 (HTTP 202 Accepted)');
      } else if (res.statusCode === 400) {
        console.error('[IndexNow] ❌ 请求格式无效 (HTTP 400 Bad Request)');
      } else if (res.statusCode === 403) {
        console.error('[IndexNow] ❌ 密钥无效或未通过验证 (HTTP 403 Forbidden)');
      } else if (res.statusCode === 422) {
        console.error('[IndexNow] ❌ URL 包含不属于本域名的网址 (HTTP 422 Unprocessable Entity)');
      } else if (res.statusCode === 429) {
        console.warn('[IndexNow] ⚠ 频率过高被限速 (HTTP 429 Too Many Requests)');
        if (retryCount > 0) {
          console.log('[IndexNow] 等待 5 秒后尝试重试...');
          setTimeout(() => submitToIndexNow(urlList, retryCount - 1), 5000);
        }
      } else {
        console.log(`[IndexNow] 响应内容: ${data || '(无响应体)'}`);
      }

      console.log('----------------------------------------------------');
      console.log('重要提示：IndexNow 推送成功代表搜索引擎已接收更新信号，');
      console.log('不代表 Bing 已立即完成索引并在前台展示，抓取收录视 Bing 质量评估而定。');
      console.log('----------------------------------------------------');
    });
  });

  req.on('error', (err) => {
    console.error(`[IndexNow] 网络请求失败: ${err.message}`);
    if (retryCount > 0) {
      console.log('[IndexNow] 3 秒后重试...');
      setTimeout(() => submitToIndexNow(urlList, retryCount - 1), 3000);
    }
  });

  req.write(payload);
  req.end();
}

// 主逻辑
const allUrls = getSiteUrls();
let targetUrls = [];

if (singleUrl) {
  targetUrls = [singleUrl];
} else if (isSubmitAll) {
  targetUrls = allUrls;
} else {
  // 默认仅推送主入口与最新更新核心页面（避免滥用）
  targetUrls = [
    `https://${HOST}/`,
    `https://${HOST}/ranking/overall/`,
    `https://${HOST}/recommend/budget/`,
    `https://${HOST}/recommend/stable/`
  ];
  console.log('[IndexNow] 默认模式：仅提交核心更新页面。若要提交全站，请使用: npm run indexnow -- --all');
}

submitToIndexNow(targetUrls);
