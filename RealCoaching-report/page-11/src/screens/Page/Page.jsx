import React, { useEffect, useState } from "react";
import { Body } from "./sections/Body";
import { FooterNavigation } from "./sections/FooterNavigation";
import { Header } from "./sections/Header";

export const Page = () => {
  const [data, setData] = useState({
    scoreData: {
      감성지능: 4.4,
      감정조절: 3.8,
      긍정정서: 4.1,
      리더십감성역량: 4.0,
      감정활용: 3.6
    },
    comprehensiveInsight: `김OO 과장은 개인적 차원의 감성 역량이 우수하나, 이를 조직
문화와 리더십 차원으로 확장시키는 데 더 집중할 필요가 있습니다.
자기 인식 능력과 도전적 태도를 바탕으로 팀 내 심리적 안전감과
감정 소통 문화를 주도적으로 이끌어 나간다면, 개인과 조직의
성장에 더욱 긍정적인 영향을 미칠 수 있을 것입니다.`,
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
        recommendation: `감정에 대한 대화를 선택적으로 시작하고,
동료의 감정상태에 관심 가지기`
      },
      {
        area: "감정적 소통",
        currentState: "팀 차원의 체계적 소통 부족",
        recommendation: `주간 1:1 미팅에서 감정 상태 확인, 정기적 감정
체크인 시스템 구축`
      },
      {
        area: "스트레스 관리",
        currentState: "감정조절 기술 향상 필요",
        recommendation: `스트레스 상황에서의 감정조절 및 자기개발
기술 훈련`
      }
    ]
  });

  useEffect(() => {
    // window.reportData가 있으면 사용
    if (window.reportData) {
      setData(prev => ({
        ...prev,
        ...window.reportData
      }));
    }

    // 데이터 주입 이벤트 리스너
    const handleDataInjected = (event) => {
      if (event.detail) {
        setData(prev => ({
          ...prev,
          ...event.detail
        }));
      }
    };

    document.addEventListener('dataInjected', handleDataInjected);
    return () => document.removeEventListener('dataInjected', handleDataInjected);
  }, []);

  return (
    <div
      className="flex flex-col h-[842px] items-start gap-5 p-5 relative bg-white"
      data-model-id="211:2039"
    >
      <Header />
      <Body data={data} />
      <FooterNavigation />
    </div>
  );
};
