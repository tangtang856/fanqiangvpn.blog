/**
 * IndexNow 搜索引擎快速推送模块
 * 支持 Bing 与其他支持 IndexNow 协议的搜索引擎
 * 包含14大核心机场品牌页面
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { airports } from '../src/data/airports.js';

const HOST = 'fanqiangvpn.blog';
const KEY = 'e89f53c82d414a93864a78cb69420b91';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'api.indexnow.org';

const args = process.argv.slice(2);
const isSubmitAll = args.includes('--all');
const singleUrlIdx = args.indexOf('--single');
const singleUrl = singleUrlIdx > -1 ? args[singleUrlIdx + 1] : null;

function getSiteUrls() {
  const baseUrls = [
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
    `https://${HOST}/review/`,
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

  airports.forEach(a => {
    baseUrls.push(`https://${HOST}/airport/${a.slug}/`);
    baseUrls.push(`https://${HOST}/review/${a.slug}/`);
  });

  return baseUrls;
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

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`[IndexNow] 响应状态码: ${res.statusCode} ${res.statusMessage}`);
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log('[IndexNow] ✅ 推送成功');
      } else {
        console.log(`[IndexNow] 响应内容: ${data || '(无响应体)'}`);
      }
    });
  });

  req.on('error', (err) => {
    console.error(`[IndexNow] 网络请求失败: ${err.message}`);
  });

  req.write(payload);
  req.end();
}

const allUrls = getSiteUrls();
let targetUrls = [];

if (singleUrl) {
  targetUrls = [singleUrl];
} else if (isSubmitAll) {
  targetUrls = allUrls;
} else {
  targetUrls = [
    `https://${HOST}/`,
    `https://${HOST}/ranking/overall/`,
    `https://${HOST}/ranking/value/`,
    `https://${HOST}/recommend/budget/`,
    `https://${HOST}/recommend/premium/`
  ];
  console.log('[IndexNow] 默认模式：仅提交核心更新页面。若要提交全站，请使用: npm run indexnow -- --all');
}

submitToIndexNow(targetUrls);
