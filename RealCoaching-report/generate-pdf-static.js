const { chromium } = require('playwright');
const fs = require('fs').promises;
// StaticServer 제거 - API 서버에서 직접 정적 파일 서빙
const { buildAllPages } = require('./build-all-pages');

class StaticPDFGenerator {
  constructor() {
    this.browser = null;
    this.serverPort = 3000; // API 서버와 동일한 포트
  }

  async ensureBuilt() {
    console.log('🔍 Checking build status...');
    
    // 모든 dist 폴더 확인
    let needsBuild = false;
    for (let i = 1; i <= 12; i++) {
      const distPath = `./page-${i}/dist`;
      try {
        await fs.access(distPath);
      } catch {
        console.log(`  page-${i}/dist not found`);
        needsBuild = true;
      }
    }

    if (needsBuild) {
      console.log('📦 Building pages first...');
      const success = await buildAllPages();
      if (!success) {
        throw new Error('Failed to build all pages');
      }
    } else {
      console.log('✅ All pages already built');
    }
  }

  async generatePDF(options = {}) {
    const {
      outputPath = 'report.pdf',
      data = {},
      format = 'A4',
      margin = { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
      printBackground = true,
      displayHeaderFooter = false,
      headerTemplate = '',
      footerTemplate = '',
      waitTime = 3000,  // 렌더링 대기 시간 증가 (기본값: 3초)
      scale = 1,  // PDF 스케일 추가
      concurrency = 12  // 동시 처리 페이지 수 (기본값: 12)
    } = options;

    try {
      // 1. 빌드 확인
      await this.ensureBuilt();
      
      // 서버는 이미 실행 중 (pdf-api-server.js)
      const port = this.serverPort;
      
      // 2. Playwright 시작
      console.log('🌐 Launching browser...');
      this.browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      // 3. 각 페이지 병렬 처리
      console.log('🚀 Processing pages in parallel...');
      console.log(`⚡ Concurrency: ${concurrency} pages at once`);
      
      // 페이지별 브라우저 탭 생성 함수
      const processPage = async (pageNum) => {
        const pageTab = await this.browser.newPage();
        await pageTab.setViewportSize({ width: 594, height: 841 });
        
        const url = `http://localhost:${port}/page-${pageNum}`;
        
        try {
          console.log(`📄 Processing page ${pageNum}...`);
          
          // 페이지 로드 (정적 빌드된 페이지)
          await pageTab.goto(url, {
            waitUntil: 'networkidle',  // 가장 안전한 옵션: 네트워크 활동이 없을 때까지 대기
            timeout: 100000
          });

          // 정적 페이지가 완전히 로드되었는지 확인
          await pageTab.waitForFunction(
            () => {
              // DOM이 완전히 로드됨
              if (document.readyState !== 'complete') return false;

              // body에 내용이 있는지 확인
              if (!document.body || document.body.children.length === 0) return false;

              // 모든 스타일시트가 로드됨
              const stylesheets = Array.from(document.styleSheets);
              for (let sheet of stylesheets) {
                try {
                  // 스타일시트 접근 가능한지 확인
                  if (sheet.cssRules === null) return false;
                } catch (e) {
                  // CORS 에러는 무시 (외부 스타일시트)
                }
              }

              // 모든 폰트가 로드됨
              if (document.fonts && document.fonts.ready) {
                return document.fonts.check('1em SUIT-ExtraBold') ||
                       document.fonts.check('1em SUIT-Medium') ||
                       document.fonts.size > 0;
              }

              return true;
            },
            { timeout: 10000 }
          ).catch(() => {
            console.log(`  ⚠️ Page load verification timeout for page ${pageNum}, continuing...`);
          });

          // 데이터 주입
          if (data[`page${pageNum}`]) {
            console.log(`  💉 Injecting data for page ${pageNum}`);
            await pageTab.evaluate((pageData) => {
              // 전역 변수 설정
              window.reportData = pageData;

              // 페이지 렌더링 완료 플래그
              window.dataInjectionComplete = false;

              // React 컴포넌트 업데이트 시도
              if (window.updateWithData && typeof window.updateWithData === 'function') {
                window.updateWithData(pageData);
              }

              // data-field 속성 업데이트
              document.querySelectorAll('[data-field]').forEach(element => {
                const field = element.getAttribute('data-field');
                if (pageData[field] !== undefined) {
                  if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = pageData[field];
                  } else {
                    element.textContent = pageData[field];
                  }
                }
              });

              // 템플릿 변수 치환 {{variable}}
              const walkTextNodes = (node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                  node.textContent = node.textContent.replace(/\{\{(\w+)\}\}/g, (match, key) => {
                    return pageData[key] || match;
                  });
                } else {
                  for (let child of node.childNodes) {
                    walkTextNodes(child);
                  }
                }
              };
              walkTextNodes(document.body);

              // 커스텀 이벤트 발생
              document.dispatchEvent(new CustomEvent('dataInjected', { detail: pageData }));

              // 데이터 주입 완료 표시
              window.dataInjectionComplete = true;
            }, data[`page${pageNum}`]);

            // 데이터 주입 완료 대기
            await pageTab.waitForFunction(
              () => window.dataInjectionComplete === true,
              { timeout: 10000 }
            ).catch(() => {
              console.log(`  ⚠️ Data injection timeout for page ${pageNum}, continuing...`);
            });

            // 추가 렌더링 대기 (React 재렌더링을 위해)
            await new Promise(resolve => setTimeout(resolve, waitTime));

            // 모든 이미지 로딩 대기
            await pageTab.evaluate(() => {
              return Promise.all(
                Array.from(document.images)
                  .filter(img => !img.complete)
                  .map(img => new Promise(resolve => {
                    img.addEventListener('load', resolve);
                    img.addEventListener('error', resolve);
                  }))
              );
            });
          }

          // PDF 생성
          console.log(`  📸 Generating PDF for page ${pageNum}`);
          const pdfBuffer = await pageTab.pdf({
            width: '594px',  // 피그마와 동일한 크기 지정
            height: '841px', // A4 크기 (72dpi 기준)
            printBackground,
            displayHeaderFooter,
            headerTemplate,
            footerTemplate,
            margin,
            scale: scale,  // 스케일 옵션 추가
            preferCSSPageSize: false  // CSS 페이지 크기 무시
          });

          await pageTab.close();
          console.log(`  ✅ Page ${pageNum} completed`);
          return { pageNum, pdfBuffer };
          
        } catch (error) {
          console.error(`  ❌ Error processing page ${pageNum}:`, error.message);
          await pageTab.close();
          
          // 에러 시 빈 페이지 생성
          const errorTab = await this.browser.newPage();
          const errorPdf = await errorTab.pdf({
            width: '594px',
            height: '841px',
            printBackground: false,
            margin
          });
          await errorTab.close();
          return { pageNum, pdfBuffer: errorPdf };
        }
      };

      // 배치 단위로 병렬 처리
      const allPages = Array.from({ length: 12 }, (_, i) => i + 1);
      const pdfResults = [];
      
      for (let i = 0; i < allPages.length; i += concurrency) {
        const batch = allPages.slice(i, i + concurrency);
        console.log(`\n🔄 Processing batch: pages ${batch.join(', ')}`);
        
        const batchPromises = batch.map(pageNum => processPage(pageNum));
        const batchResults = await Promise.all(batchPromises);
        pdfResults.push(...batchResults);
      }
      
      // 페이지 순서대로 정렬
      pdfResults.sort((a, b) => a.pageNum - b.pageNum);
      const pdfPages = pdfResults.map(r => r.pdfBuffer);

      // 4. PDF 병합
      console.log('\n📚 Merging PDF pages...');
      const { PDFDocument } = await import('pdf-lib');
      const mergedPdf = await PDFDocument.create();

      for (let i = 0; i < pdfPages.length; i++) {
        try {
          const pdf = await PDFDocument.load(pdfPages[i]);
          const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
          copiedPages.forEach((page) => mergedPdf.addPage(page));
        } catch (error) {
          console.error(`Error merging page ${i + 1}:`, error.message);
        }
      }

      // 5. 파일 저장
      const mergedPdfBytes = await mergedPdf.save();
      await fs.writeFile(outputPath, mergedPdfBytes);

      console.log(`\n✅ PDF generated successfully: ${outputPath}`);
      console.log(`📊 File size: ${(mergedPdfBytes.length / 1024 / 1024).toFixed(2)} MB`);
      
      return outputPath;

    } catch (error) {
      console.error('❌ Error generating PDF:', error);
      throw error;
    } finally {
      // 브라우저만 정리 (서버는 계속 실행)
      if (this.browser) {
        await this.browser.close();
      }
    }
  }
}

module.exports = StaticPDFGenerator;