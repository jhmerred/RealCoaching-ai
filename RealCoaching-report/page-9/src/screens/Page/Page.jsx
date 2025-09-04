import React, { useEffect, useState } from "react";
import { Body } from "./sections/Body";
import { FooterNavigation } from "./sections/FooterNavigation";
import { Header } from "./sections/Header";

export const Page = () => {
  const [data, setData] = useState({
    scoreData: [
      { title: "자기 감정 인식", score: 5.0 },
      { title: "감정 조절", score: 2.5 },
      { title: "타인 감정 인식", score: 1.0 },
      { title: "감정 활용", score: 0.1 }
    ],
    keySummaryData: [
      {
        title: "강점",
        description: "자기 감정 인식 능력이 뛰어나며, 대인관계에서 감정을 잘 활용합니다. 감정을 정확히 인식하고 표현할 수 있어 의사소통이 원활하며, 타인과의 상호작용에서 감성지능을 효과적으로 활용합니다."
      },
      {
        title: "밸런스",
        description: "전반적으로 감성지능이 균형 있게 발달되어 있으며, 특별한 약점이 없습니다. 네가지 영역 모두 평균 이상의 점수를 보여 감성지능이 고르게 발달된 상태입니다."
      },
      {
        title: "발전 영역",
        description: "감정 조절 능력을 더욱 향상시키면 스트레스 관리가 더 효과적일 것입니다. 특히 예상치 못한 상황이나 부정적 피드백을 받았을 때 감정을 보다 효과적으로 조절하는 기술을 개발하면 좋겠습니다."
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
      data-model-id="211:1756"
    >
      <Header />
      <Body data={data} />
      <FooterNavigation />
    </div>
  );
};
