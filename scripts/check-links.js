/**
 * 全站相对链接有效性检查脚本
 * 解析每个 HTML 文件中的所有相对链接与资源路径，并在本地文件系统中核验其真实存在性
 * 确保直接双击 (file:// 协议) 与线上服务器环境无任何 404 死链
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
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
console.log(`[链接检查] 开始检查 ${htmlFiles.length} 个 HTML 文件中的所有相对链接...`);

let totalCheckedLinks = 0;
let brokenLinksCount = 0;

for (const filePath of htmlFiles) {
  const relSourceFile = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
  const fileDir = path.dirname(filePath);
  const content = fs.readFileSync(filePath, 'utf-8');

  // 正则提取所有 href 和 src
  const linkRegex = /(?:href|src)=["']([^"']+)["']/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const rawLink = match[1].trim();

    // 忽略外部绝对链接、javascript、mailto、tel及锚点
    if (rawLink.startsWith('http://') || rawLink.startsWith('https://') || rawLink.startsWith('mailto:') || rawLink.startsWith('tel:') || rawLink.startsWith('javascript:') || rawLink.startsWith('#')) {
      continue;
    }

    // 忽略以 / 开头的路径（由 audit-seo 专门告警，这里重点核查相对路径存在性）
    if (rawLink.startsWith('/')) {
      continue;
    }

    totalCheckedLinks++;

    // 剔除 URL 中的锚点部分，如 index.html#section-2
    const cleanPath = rawLink.split('#')[0].split('?')[0];
    if (!cleanPath) continue; // 纯锚点

    // 针对相对路径，基于当前文件所在目录计算绝对路径
    const targetAbsPath = path.resolve(fileDir, cleanPath);

    if (!fs.existsSync(targetAbsPath)) {
      brokenLinksCount++;
      console.error(`❌ [404 死链] 文件: ${relSourceFile} -> 链接目标不存在: "${rawLink}" (解析为: ${path.relative(ROOT_DIR, targetAbsPath)})`);
    }
  }
}

console.log('----------------------------------------------------');
console.log(`[链接检查总结] 共检测到有效站内相对链接: ${totalCheckedLinks} 处`);
console.log(`发现失效死链 (Broken links): ${brokenLinksCount} 处`);

if (brokenLinksCount === 0) {
  console.log('✅ 所有站内相对链接全部有效，本地双击 file:// 与线上跳转 100% 畅通 (PASS)');
  process.exit(0);
} else {
  console.error('❌ 存在死链，请检查修正');
  process.exit(1);
}
