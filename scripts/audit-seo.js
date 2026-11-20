/**
 * 全站自动化 SEO 审计脚本
 * 严格检查：缺失 Title、重复 Title、缺失 Description、多重 H1、错误 Canonical、
 * 错误 Robots、相对路径合规性（严禁以 / 开头的站内链接）、未替换模板变量等
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const DOMAIN = 'https://fanqiangvpn.blog';

// 递归查找所有 HTML 文件
function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'temp_cache' || file.startsWith('scratch')) continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(ROOT_DIR);
console.log(`[SEO 审计] 共扫描到 ${htmlFiles.length} 个 HTML 页面。`);

const titles = new Map();
let errorCount = 0;
let warningCount = 0;
const results = [];

for (const filePath of htmlFiles) {
  const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf-8');

  const pageErrors = [];
  const pageWarnings = [];

  // 1. Title 检查
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  if (!title) {
    pageErrors.push('缺失 <title> 标签或内容为空');
  } else {
    if (titles.has(title)) {
      pageWarnings.push(`发现重复 Title: "${title}" (与 ${titles.get(title)} 重复)`);
    } else {
      titles.set(title, relPath);
    }
  }

  // 2. Meta Description 检查
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1].trim() : '';
  if (!desc) {
    pageErrors.push('缺失 meta description');
  } else if (desc.length < 20) {
    pageWarnings.push(`meta description 过短 (${desc.length} 字符)`);
  }

  // 3. H1 检查
  const h1Matches = content.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length === 0) {
    pageErrors.push('页面缺失 <h1> 标签');
  } else if (h1Matches.length > 1) {
    pageErrors.push(`页面存在多个 <h1> 标签 (${h1Matches.length} 个)`);
  }

  // 4. Canonical 检查
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';
  if (!canonical) {
    pageErrors.push('缺失 canonical URL 声明');
  } else if (!canonical.startsWith(DOMAIN)) {
    pageErrors.push(`Canonical URL 未使用指定正式域名: ${canonical}`);
  }

  // 5. Robots Meta 检查
  const robotsMatch = content.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
  if (!robotsMatch) {
    pageWarnings.push('未声明 meta robots');
  }

  // 6. 严禁根绝对路径检查 (href="/..." 或 src="/...")
  const rootSlashHref = content.match(/href=["']\/[a-zA-Z0-9_\-]/g);
  const rootSlashSrc = content.match(/src=["']\/[a-zA-Z0-9_\-]/g);
  if (rootSlashHref) {
    pageErrors.push(`发现以 / 开头的根绝对链接 (违反应使用纯相对路径要求): ${rootSlashHref.slice(0, 3).join(', ')}`);
  }
  if (rootSlashSrc) {
    pageErrors.push(`发现以 / 开头的资源路径 (违反应使用纯相对路径要求): ${rootSlashSrc.slice(0, 3).join(', ')}`);
  }

  // 7. 未替换变量检查 (如 {{...}} 或 undefined / NaN)
  const templateVarMatch = content.match(/\{\{[^}]+\}\}/g);
  if (templateVarMatch) {
    pageErrors.push(`页面包含未替换的模板变量: ${templateVarMatch.join(', ')}`);
  }
  if (content.includes('undefined') && !content.includes('typeof undefined')) {
    pageWarnings.push('页面内容可能包含拼接遗留的 undefined 字符串');
  }
  if (content.includes('NaN')) {
    pageErrors.push('页面包含 NaN 计算错误');
  }

  // 记录结果
  if (pageErrors.length > 0) {
    errorCount += pageErrors.length;
    console.error(`❌ [FAIL] ${relPath}:`);
    pageErrors.forEach(e => console.error(`   - ${e}`));
  } else if (pageWarnings.length > 0) {
    warningCount += pageWarnings.length;
    console.warn(`⚠ [WARN] ${relPath}:`);
    pageWarnings.forEach(w => console.warn(`   - ${w}`));
  } else {
    // console.log(`✓ [PASS] ${relPath}`);
  }

  results.push({
    file: relPath,
    title,
    h1Count: h1Matches.length,
    canonical,
    errors: pageErrors,
    warnings: pageWarnings
  });
}

console.log('----------------------------------------------------');
console.log(`[SEO 审计总结] 检查页面数: ${htmlFiles.length}`);
console.log(`错误总数 (Errors): ${errorCount}`);
console.log(`警告总数 (Warnings): ${warningCount}`);

if (errorCount === 0) {
  console.log('✅ 所有页面 SEO 基础技术规范全部通过 (PASS)');
  process.exit(0);
} else {
  console.error('❌ SEO 审计未通过，存在致命错误');
  process.exit(1);
}
