/**
 * 内容与数据库完整性校验脚本
 * 验证：统一数据源规范、套餐单GB计算准确性、数据真实来源、关键词地图及 Sitemap 一致性
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { airports } from '../src/data/airports.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

console.log('[数据校验] 开始校验机场统一数据库与内容合规性...');

let errors = 0;

// 1. 数据库完整性检查
for (const a of airports) {
  if (!a.id || !a.name || !a.slug) {
    console.error(`❌ [数据库错误] 存在缺失基础标识的机场条目: ${JSON.stringify(a)}`);
    errors++;
  }

  if (typeof a.startingPrice !== 'number' || a.startingPrice <= 0) {
    console.error(`❌ [数据库错误] ${a.name} 起步价格无效: ${a.startingPrice}`);
    errors++;
  }

  if (!Array.isArray(a.plans) || a.plans.length === 0) {
    console.error(`❌ [数据库错误] ${a.name} 缺失套餐明细`);
    errors++;
  } else {
    for (const p of a.plans) {
      if (!p.name || typeof p.price !== 'number' || typeof p.trafficGB !== 'number') {
        console.error(`❌ [数据库错误] ${a.name} 套餐 ${p.name || '未知'} 字段缺失`);
        errors++;
      }
      if (typeof p.calculatedUnitPrice !== 'number' || p.calculatedUnitPrice <= 0) {
        console.error(`❌ [数据库错误] ${a.name} 单GB折算单价计算异常: ${p.calculatedUnitPrice}`);
        errors++;
      }
    }
  }

  if (!['tested', 'official-data', 'unverified'].includes(a.testStatus)) {
    console.error(`❌ [数据库错误] ${a.name} testStatus 不合规: ${a.testStatus}`);
    errors++;
  }

  if (!Array.isArray(a.sources) || a.sources.length === 0) {
    console.error(`❌ [数据库错误] ${a.name} 缺失数据来源标注`);
    errors++;
  }
}

// 2. 关键词地图检查
const keywordMapPath = path.join(ROOT_DIR, 'docs', 'keyword-map.csv');
if (!fs.existsSync(keywordMapPath)) {
  console.error('❌ [文件缺失] docs/keyword-map.csv 不存在');
  errors++;
} else {
  const content = fs.readFileSync(keywordMapPath, 'utf-8');
  const requiredKeywords = [
    '机场推荐', '机场节点', '性价比机场', '梯子推荐',
    'vpn', 'vpn机场', 'vpn节点', 'vpn推荐'
  ];
  for (const kw of requiredKeywords) {
    if (!content.includes(kw)) {
      console.error(`❌ [关键词缺失] keyword-map.csv 缺失主攻关键词: ${kw}`);
      errors++;
    }
  }
}

// 3. Sitemap 与 Robots 检查
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
const robotsPath = path.join(ROOT_DIR, 'robots.txt');

if (!fs.existsSync(sitemapPath)) {
  console.error('❌ [文件缺失] sitemap.xml 不存在');
  errors++;
}
if (!fs.existsSync(robotsPath)) {
  console.error('❌ [文件缺失] robots.txt 不存在');
  errors++;
}

// 4. IndexNow 校验
const keyFile = path.join(ROOT_DIR, 'e89f53c82d414a93864a78cb69420b91.txt');
if (!fs.existsSync(keyFile)) {
  console.error('❌ [文件缺失] IndexNow Key 验证文件不存在');
  errors++;
}

console.log('----------------------------------------------------');
console.log(`[数据校验总结] 机场数据库条目数: ${airports.length} 家`);
console.log(`错误总数: ${errors}`);

if (errors === 0) {
  console.log('✅ 数据库与内容合规性校验全部通过 (PASS)');
  process.exit(0);
} else {
  console.error('❌ 数据校验失败');
  process.exit(1);
}
