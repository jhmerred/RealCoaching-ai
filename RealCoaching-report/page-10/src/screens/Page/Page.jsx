import React, { useEffect, useState } from "react";
import { Body } from "./sections/Body";
import { FooterNavigation } from "./sections/FooterNavigation";
import { Header } from "./sections/Header";

export const Page = () => {
  const [data, setData] = useState({
    scoreData: [
      {
        title: "도움 요청 용이함",
        score: 5.0,
        evaluation: "타인의 감정 상태를 정확히 파악하는\n능력이 뛰어나다"
      },
      {
        title: "문제 자유롭게 말할 수 있음",
        score: 3.5,
        evaluation: "공감을 통한 효과적 대화 능력이 양호함"
      },
      {
        title: "위험 감수 발언 안전함",
        score: 3.0,
        evaluation: "갈등 상황 중재 및 해소 능력에 개선의\n여지가 있음"
      },
      {
        title: "구성원들 간 상호 존중",
        score: 2.5,
        evaluation: "팀원 정서적 안정 지원 역량이 우수함"
      }
    ],
    goalData: {
      shortTerm: [
        "주간 1:1 미팅에서 감정상태 확인하기",
        "팀원의 비언어적 신호에 더 주의 기울이기",
        "감정적 지지 표현 늘리기"
      ],
      mediumTerm: [
        "팀 단위 감정 체크인 시스템 구축",
        "갈등 상황에서의 중재 기술 향상",
        "팀원 개별 성향 파악 및"
      ],
      longTerm: [
        "조직 차원의 심리적 안전감 재고",
        "감성 지능 기반 팀 문화 구축",
        "후배 리더 멘토링 시 감성 역량 전수"
      ]
    },
    evaluationData: {
      comprehensive: "전반적으로 리더십 감성역량이 양호한 수준이며, 특히 정서적 지원과 감정 인식 능력이 뛰어납니다. 갈등 관리 역량을 강화하면 더욱 효과적인 리더십을 발휘할 수 있을 것입니다.",
      teamImprovement: [
        "주간 팀원 감정 체크인 시스템화",
        "갈등 관리 역량 향상을 위한 교육 참여",
        "팀 차원의 심리적 안전감 문화 조성"
      ]
    },
    coachingPoint: "갈등 상황을 효과적으로 다루는 방법과 건설적인 피드백 기술을 중심으로 코칭을 받아보시길 제안드립니다. 이를 통해 이미 강점으로 보유한 정서적 지원 역량과 결합된 더욱 영향력 있는 리더십을 발휘하실 수 있습니다."
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
      data-model-id="211:1866"
    >
      <Header />
      <Body data={data} />
      <FooterNavigation />
    </div>
  );
};
