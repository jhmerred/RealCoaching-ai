const axios = require('axios');
const fs = require('fs');

async function testPDFGeneration() {
  // 테스트 데이터
  const requestData = {
    data: {
      page1: {
        companyName: "TEST",
        position: "TEST",
        name: "TEST",
        department: "TEST",
        testDate: "0000-00-00",
        reportId: "TEST"
      },
      page3: {
        coverage1: 77,  // Part 1 심리적 안전감 커버리지
        coverage2: 77,  // Part 2 정서상태 커버리지
        coverage3: 77,  // Part 3 정서문화 커버리지
        coverage4: 77,  // Part 4 감성지능 커버리지
        coverage5: 77,  // Part 5 리더십 감성역량 커버리지
        conversationCount: 77  // 대화 횟수
      },
      page5: {
        radarValues: [5.0, 2.5, 0.0, 1.2, 3.7],  // 5개 영역 점수 (0~5)
        keyInsights: [
          {
            title: "TEST",
            content: [
              { text: "TEST", color: "gray" },
              { text: "TEST", color: "green" },
              { text: "TEST", color: "gray" },
              { text: "TEST", color: "green" },
              { text: "TEST", color: "gray" }
            ]
          },
          {
            title: "TEST",
            content: [
              { text: "TEST", color: "gray" },
              { text: "TEST", color: "red" },
              { text: "TEST", color: "gray" },
              { text: "TEST", color: "red" },
              { text: "TEST", color: "gray" }
            ]
          }
        ]
      },
      page6: {
        scoreData: [
          { title: "도움 요청 용이함", score: 5.0 },
          { title: "문제 자유롭게 말할 수 있음", score: 2.5 },
          { title: "위험 감수 발언 안전함", score: 0.0 },
          { title: "구성원들 간 상호 존중", score: 1.2 },
          { title: "노력에 대한 방해 없음", score: 3.7 },
          { title: "실수에 대한 불이익 없음", score: 2.0 },
          { title: "역량이 인정되고 활용됨", score: 4.0 }
        ]
      },
      page7: {
        positiveEmotions: [
          { label: "열정적", value: 5.0 },
          { label: "활기찬", value: 5.0 },
          { label: "집중된", value: 5.0 },
          { label: "감사한", value: 5.0 }
        ],
        negativeEmotions: [
          { label: "불안한", value: 2.5 },
          { label: "우울한", value: 0.0 },
          { label: "화난", value: 1.2 },
          { label: "외로운", value: 3.7 }
        ],
        recommendations: [
          {
            title: "TEST",
            content: "TEST"
          },
          {
            title: "TEST",
            content: "TEST"
          }
        ]
      },
      page8: {
        scoreData: [
          { title: "도움 요청 용이함", personalScore: 5.0, orgAverage: 2.5 },
          { title: "문제 자유롭게 말할 수 있음", personalScore: 0.0, orgAverage: 2.5 },
          { title: "위험 감수 발언 안전함", personalScore: 1.2, orgAverage: 2.5 },
          { title: "구성원들 간 상호 존중", personalScore: 3.7, orgAverage: 2.5 }
        ],
        insights: {
          overall: "TEST",
          personalImprovements: [
            "TEST",
            "TEST",
            "TEST"
          ],
          teamImprovements: [
            "TEST",
            "TEST",
            "TEST"
          ]
        }
      },
      page9: {
        scoreData: [
          { title: "자기 감정 인식", score: 5.0 },
          { title: "감정 조절", score: 0.0 },
          { title: "타인 감정 인식", score: 2.5 },
          { title: "감정 활용", score: 1.2 }
        ],
        keySummaryData: [
          {
            title: "TEST",
            description: "TEST"
          },
          {
            title: "TEST",
            description: "TEST"
          },
          {
            title: "TEST",
            description: "TEST"
          }
        ]
      },
      page10: {
        scoreData: [
          {
            title: "도움 요청 용이함",
            score: 5.0,
            evaluation: "TEST"
          },
          {
            title: "문제 자유롭게 말할 수 있음",
            score: 2.5,
            evaluation: "TEST"
          },
          {
            title: "위험 감수 발언 안전함",
            score: 0.0,
            evaluation: "TEST"
          },
          {
            title: "구성원들 간 상호 존중",
            score: 1.2,
            evaluation: "TEST"
          }
        ],
        goalData: {
          shortTerm: [
            "TEST",
            "TEST",
            "TEST"
          ],
          mediumTerm: [
            "TEST",
            "TEST",
            "TEST"
          ],
          longTerm: [
            "TEST",
            "TEST",
            "TEST"
          ]
        },
        evaluationData: {
          comprehensive: "TEST",
          teamImprovement: [
            "TEST",
            "TEST",
            "TEST"
          ]
        },
        coachingPoint: "TEST"
      },
      page11: {
        scoreData: {
          감성지능: 5.0,
          감정조절: 0.0,
          긍정정서: 2.5,
          리더십감성역량: 1.2,
          감정활용: 3.7
        },
        comprehensiveInsight: "TEST",
        emotionTemperatureData: {
          temperature: 6,
          color: "#1bb8c0",
          rLevel: "L",
          gLevel: "M",
          bLevel: "H"
        },
        improvementAreas: [
          {
            area: "정서문화 인식",
            currentState: "3.4/5.0 (조직 평균 대비 낮음)",
            recommendation: "TEST"
          },
          {
            area: "감정적 소통",
            currentState: "팀 차원의 체계적 소통 부족",
            recommendation: "TEST"
          },
          {
            area: "스트레스 관리",
            currentState: "감정조절 기술 향상 필요",
            recommendation: "TEST"
          }
        ]
      },
      page12: {
        shortTermGoals: [
          "TEST",
          "TEST",
          "TEST"
        ],
        mediumTermGoals: [
          "TEST",
          "TEST",
          "TEST"
        ],
        longTermGoals: [
          "TEST",
          "TEST",
          "TEST"
        ],
        coachingPoint: "TEST",
        monitoringSchedule: {
          currentDate: "0000년 0월 00일",
          recommendedDate: "0000년 0월 00일"
        }
      }
    },
    config: {
      scale: 1,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      }
    }
  };

  try {
    console.log('🚀 Sending PDF generation request...');
    
    const response = await axios.post(
      'http://localhost:3000/api/generate-pdf',
      requestData,
      {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // PDF 파일로 저장
    const outputPath = `test_output_${Date.now()}.pdf`;
    fs.writeFileSync(outputPath, response.data);
    
    console.log(`✅ PDF saved as: ${outputPath}`);
    console.log(`📊 File size: ${(response.data.length / 1024 / 1024).toFixed(2)} MB`);
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }
}

// 헬스 체크
async function checkHealth() {
  try {
    const response = await axios.get('http://localhost:3000/api/health');
    console.log('Health check:', response.data);
  } catch (error) {
    console.error('Server is not running');
  }
}

// 실행
async function main() {
  await checkHealth();
  await testPDFGeneration();
}

if (require.main === module) {
  main();
}

module.exports = { testPDFGeneration };