const express = require('express');
const StaticPDFGenerator = require('./generate-pdf-static');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// JSON 파싱 미들웨어
app.use(express.json({ limit: '50mb' }));

// CORS 설정
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// 정적 파일 서빙 (각 페이지의 빌드된 파일)
async function setupStaticRoutes() {
  for (let i = 1; i <= 12; i++) {
    const distPath = path.join(__dirname, `page-${i}`, 'dist');
    
    try {
      await fs.access(distPath);
      app.use(`/page-${i}`, express.static(distPath));
      console.log(`📁 Serving page-${i} at /page-${i}`);
    } catch {
      console.warn(`⚠️  page-${i}/dist not found`);
    }
  }
}

// PDF 생성 엔드포인트
app.post('/api/generate-pdf', async (req, res) => {
  const { data, config = {} } = req.body;
  
  if (!data) {
    return res.status(400).json({
      success: false,
      error: 'Data is required'
    });
  }

  // 임시 파일명 생성
  const tempFileName = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.pdf`;
  const tempFilePath = path.join(__dirname, tempFileName);

  try {
    console.log('[API] PDF generation request received');
    
    // PDF 생성
    const generator = new StaticPDFGenerator();
    await generator.generatePDF({
      outputPath: tempFilePath,
      data: data,
      printBackground: true,
      margin: config.margin || {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      },
      scale: config.scale || 1,
      waitTime: config.waitTime || 2000
    });

    // PDF 파일 읽기
    const pdfBuffer = await fs.readFile(tempFilePath);
    
    // 임시 파일 삭제
    await fs.unlink(tempFilePath);
    
    console.log('[API] PDF generated successfully');
    
    // PDF 반환
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="report_${Date.now()}.pdf"`,
      'Content-Length': pdfBuffer.length
    });
    
    res.send(pdfBuffer);
    
  } catch (error) {
    console.error('[API] PDF generation failed:', error);
    
    // 에러 발생 시 임시 파일 정리
    try {
      await fs.unlink(tempFilePath);
    } catch {}
    
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 헬스 체크
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    message: 'PDF API Server is running',
    timestamp: new Date().toISOString()
  });
});

// 서버 시작
async function startServer() {
  await setupStaticRoutes();
  
  app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║     PDF API Server Started             ║
╠════════════════════════════════════════╣
║  Port: ${PORT}                            ║
║  Static Pages: /page-1 ~ /page-12      ║
║  API Endpoint: POST /api/generate-pdf  ║
║  Health: GET /api/health               ║
╚════════════════════════════════════════╝
    `);
  });
}

startServer();

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down PDF API Server...');
  process.exit(0);
});