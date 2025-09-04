import React, { useEffect, useState } from "react";
import { Body } from "./sections/Body";
import { FooterNavigation } from "./sections/FooterNavigation";
import { Header } from "./sections/Header";

export const Page = () => {
  const [data, setData] = useState({
    scoreData: [
      { title: "도움 요청 용이함", score: 4.2 },
      { title: "문제 자유롭게 말할 수 있음", score: 2.8 },
      { title: "위험 감수 발언 안전함", score: 2.5 },
      { title: "구성원들 간 상호 존중", score: 2.5 },
      { title: "노력에 대한 방해 없음", score: 5.0 },
      { title: "실수에 대한 불이익 없음", score: 5.0 },
      { title: "역량이 인정되고 활용됨", score: 5.0 }
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
      data-model-id="211:2328"
    >
      <Header />
      <Body data={data} />
      <FooterNavigation />
    </div>
  );
};
