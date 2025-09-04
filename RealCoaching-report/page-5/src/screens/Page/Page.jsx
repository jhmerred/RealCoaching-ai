import React, { useEffect, useState } from "react";
import { Body } from "./sections/Body";
import { FooterNavigation } from "./sections/FooterNavigation";
import { Header } from "./sections/Header";

export const Page = () => {
  const [data, setData] = useState({
    radarValues: [4.0, 4.1, 4.4, 3.8, 1.6],  // 5개 영역별 0~5점 값
    keyInsights: [
      {
        title: "탁월한 감성지능과 심리적 안전감",
        content: [
          { text: "귀하는 특히 ", color: "gray" },
          { text: "감성지능 영역에서 탁월한 능력", color: "green" },
          { text: "을 보이고 있으며, 타인의 감정을 깊이 이해하고 공감하는 뛰어난 역량을 갖추고 있습니다. 또한 ", color: "gray" },
          { text: "심리적 안전감 측면에서도 우수한 수준", color: "green" },
          { text: "을 보이고 있어, 팀 내에서 신뢰받는 구성원으로 자리매김하고 있습니다.", color: "gray" }
        ]
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
      data-model-id="216:4"
    >
      <Header />
      <Body data={data} />
      <FooterNavigation />
    </div>
  );
};
