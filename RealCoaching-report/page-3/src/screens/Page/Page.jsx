import React, { useEffect, useState } from "react";
import { Body } from "./sections/Body";
import { FooterNavigation } from "./sections/FooterNavigation";
import { Header } from "./sections/Header";

export const Page = () => {
  const [data, setData] = useState({
    coverage1: 92,  // Part 1 커버리지
    coverage2: 88,  // Part 2 커버리지
    coverage3: 95,  // Part 3 커버리지
    coverage4: 90,  // Part 4 커버리지
    coverage5: 87,  // Part 5 커버리지
    conversationCount: 15  // 대화 횟수
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
      data-model-id="220:66"
    >
      <Header />
      <Body data={data} />
      <FooterNavigation />
    </div>
  );
};
