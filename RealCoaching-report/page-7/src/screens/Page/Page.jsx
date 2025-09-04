import React, { useEffect, useState } from "react";
import { Body } from "./sections/Body";
import { FooterNavigation } from "./sections/FooterNavigation";
import { Header } from "./sections/Header";

export const Page = () => {
  const [data, setData] = useState({
    positiveEmotions: [
      { label: "열정적", value: 5.0 },
      { label: "활기찬", value: 5.0 },
      { label: "집중된", value: 5.0 },
      { label: "감사한", value: 5.0 }
    ],
    negativeEmotions: [
      { label: "불안한", value: 5.0 },
      { label: "우울한", value: 4.9 },
      { label: "화난", value: 5.0 },
      { label: "외로운", value: 1.6 }
    ],
    recommendations: [
      {
        title: "긍정정서 유지 및 강화",
        content: "귀하는 업무나 일상 상황에서 열정적이고 활기찬 감정을 잘 유지하고 있으며, 특히 도전적인 과제를 마주할 때 의욕적으로 접근하는 경향이 강합니다. 현재의 우수한 정서적 균형을 지속하기 위해 규칙적인 운동이나 취미 활동을 통해 에너지를 충전하는 시간을 꾸준히 가져보시기 바랍니다. 또한 일상에서 작은 성취나 동료들의 도움에 대해 의식적으로 감사를 표현하는 습관을 기르면 전반적인 정서적 만족도가 더욱 향상될 것입니다."
      },
      {
        title: "스트레스 관리 및 조직 기여",
        content: "검사 결과 부정정서 수준이 낮게 나타나 스트레스 상황에서도 비교적 안정적인 정서를 유지하고 있습니다. 이러한 강점을 바탕으로 팀 내에서 긍정적 분위기 조성자 역할을 더욱 적극적으로 수행해보시기 바랍니다. 업무 압박이나 갈등 상황에서 느끼는 불안감은 깊은 호흡이나 짧은 명상과 같은 즉석 이완 기법으로 관리하시고, 동료들과 성공 경험을 공유하거나 어려운 상황에서 격려의 말을 건네는 것이 조직 전체의 정서적 안전감 향상에 기여할 것입니다."
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
      data-model-id="211:1427"
    >
      <Header />
      <Body data={data} />
      <FooterNavigation />
    </div>
  );
};
