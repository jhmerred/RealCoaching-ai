import React, { useEffect, useState } from "react";
import { Body } from "./sections/Body";
import { FooterNavigation } from "./sections/FooterNavigation";
import { Header } from "./sections/Header";

export const Page = () => {
  const [data, setData] = useState({
    scoreData: [
      { title: "도움 요청 용이함", personalScore: 4.1, orgAverage: 2.0 },
      { title: "문제 자유롭게 말할 수 있음", personalScore: 4.9, orgAverage: 4.9 },
      { title: "위험 감수 발언 안전함", personalScore: 3.5, orgAverage: 5.0 },
      { title: "구성원들 간 상호 존중", personalScore: 3.5, orgAverage: 4.0 }
    ],
    insights: {
      overall: "전반적으로 조직 평균보다 약간 낮은 정서문화 인식을 보이고 있으며, 특히 감정 대화 존중 영역에서 개선의 여지가 있습니다. 이는 조직 내 의견 표현 과정에서 감정적 측면이 충분히 고려되지 않는다고 느낄 수 있음을 시사합니다.",
      personalImprovements: [
        "업무 상황에서 자신의 감정을 억누르지 말고 솔직하게 표현하는 연습을 해보세요.",
        "동료의 의견을 들을 때 내용뿐만 아니라 그 속에 담긴 감정을 함께 인정하며 반영해보세요.",
        "필요할 때 도움을 요청하는 것이 팀에 기여하는 방법임을 인식하고 적극적으로 소통해보세요."
      ],
      teamImprovements: [
        "주간 미팅에서 5분 정도의 정기적인 감정 체크인 시간을 제안해보세요.",
        "갈등 상황에서의 감정 표현 규칙들을 팀원들과 함께 만들어보세요.",
        "팀 내 심리적 안전감 향상을 위한 워크샵이나 교육 프로그램을 제안해보세요."
      ]
    }
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
      data-model-id="211:1517"
    >
      <Header />
      <Body data={data} />
      <FooterNavigation />
    </div>
  );
};
