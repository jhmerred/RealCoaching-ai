const { exec } = require('child_process');
const path = require('path');
const fs = require('fs').promises;
const util = require('util');
const execPromise = util.promisify(exec);

async function buildPage(pageNum) {
  const pageDir = path.join(__dirname, `page-${pageNum}`);
  console.log(`📦 Building page-${pageNum}...`);
  
  try {
    // 빌드 실행
    const { stdout, stderr } = await execPromise('npm run build', {
      cwd: pageDir
    });
    
    if (stderr && !stderr.includes('warning')) {
      console.error(`⚠️  page-${pageNum} warning:`, stderr);
    }
    
    // dist 폴더 확인
    const distPath = path.join(pageDir, 'dist');
    const distExists = await fs.access(distPath).then(() => true).catch(() => false);
    
    if (distExists) {
      console.log(`✅ page-${pageNum} built successfully`);
      return true;
    } else {
      console.error(`❌ page-${pageNum} build failed: dist folder not found`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Failed to build page-${pageNum}:`, error.message);
    return false;
  }
}

async function buildAllPages() {
  console.log('🚀 Starting build process for all pages...\n');
  const startTime = Date.now();
  
  const results = [];
  
  // 순차적으로 빌드 (병렬 빌드는 메모리 문제 발생 가능)
  for (let i = 1; i <= 12; i++) {
    const success = await buildPage(i);
    results.push({ page: i, success });
  }
  
  // 결과 요약
  console.log('\n📊 Build Results:');
  console.log('================');
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`✅ Successful: ${successful.length}/12`);
  if (failed.length > 0) {
    console.log(`❌ Failed: ${failed.map(r => `page-${r.page}`).join(', ')}`);
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\n⏱️  Total build time: ${duration} seconds`);
  
  // 모든 빌드가 성공했는지 반환
  return failed.length === 0;
}

// 빌드 정리 함수 (옵션)
async function cleanBuilds() {
  console.log('🧹 Cleaning previous builds...');
  
  for (let i = 1; i <= 12; i++) {
    const distPath = path.join(__dirname, `page-${i}`, 'dist');
    try {
      await fs.rm(distPath, { recursive: true, force: true });
      console.log(`  Cleaned page-${i}/dist`);
    } catch (error) {
      // 폴더가 없어도 무시
    }
  }
  console.log('✅ Clean complete\n');
}

module.exports = { buildAllPages, buildPage, cleanBuilds };