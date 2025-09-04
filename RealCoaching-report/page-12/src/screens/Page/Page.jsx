import React, { useEffect, useState } from "react";
import { Body } from "./sections/Body";
import { FooterNavigation } from "./sections/FooterNavigation";

export const Page = () => {
  const [data, setData] = useState({
    shortTermGoals: [
      "감정을 존중하는 대화 실천",
      "정서·리더십 행동 자기 점검",
      "동료에게 긍정적 피드백 제공"
    ],
    mediumTermGoals: [
      "팀 내 감정 체크인 주도",
      "갈등 관리 교육 참여",
      "1:1 미팅으로 신뢰 강화"
    ],
    longTermGoals: [
      "정서문화 개선 활동 리드",
      "심리적 안전감 정착",
      "감성 역량을 조직 리더십으로 확장"
    ],
    coachingPoint: `우수한 감성 역량을 팀과 조직 차원으로 확장하는 방법에 초점을 맞추어 코칭을 받아보시길 제안드립니다. 특히 심리적 안전감 조성과 감정 소통 문화를 주도하는 리더십 주제를 다룬다면 더욱 효과적일 것입니다.`,
    monitoringSchedule: {
      currentDate: "2025년 6월 15일",
      recommendedDate: "2025년 7월 15일"
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
      data-model-id="211:2216"
    >
      <Body data={data} />
      <FooterNavigation />
    </div>
  );
};
