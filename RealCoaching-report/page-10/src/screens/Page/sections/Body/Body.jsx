import React from "react";


// 점수에 따른 수준 결정 함수 (5점 만점 기준)
const getLevel = (score) => {
  if (score >= 4.0) return "우수";
  if (score >= 3.5) return "양호";
  if (score >= 3.0) return "보통";
  if (score >= 2.5) return "미흡";
  return "부족";
};

// 점수를 바 너비로 변환 (5점 만점 기준, 최대 100px)
const calculateBarWidth = (score) => {
  const maxWidth = 100;
  return (score / 5) * maxWidth;
};




export const Body = ({ data = {} }) => {
  // 기본값 설정
  const scoreData = data.scoreData || [
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
  ];

  const goalData = data.goalData || {
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
  };

  const evaluationData = data.evaluationData || {
    comprehensive: "전반적으로 리더십 감성역량이 양호한 수준이며, 특히 정서적 지원과 감정 인식 능력이 뛰어납니다. 갈등 관리 역량을 강화하면 더욱 효과적인 리더십을 발휘할 수 있을 것입니다.",
    teamImprovement: [
      "주간 팀원 감정 체크인 시스템화",
      "갈등 관리 역량 향상을 위한 교육 참여",
      "팀 차원의 심리적 안전감 문화 조성"
    ]
  };

  const coachingPoint = data.coachingPoint || "갈등 상황을 효과적으로 다루는 방법과 건설적인 피드백 기술을 중심으로 코칭을 받아보시길 제안드립니다. 이를 통해 이미 강점으로 보유한 정서적 지원 역량과 결합된 더욱 영향력 있는 리더십을 발휘하실 수 있습니다.";
  return (
    <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col w-[556px] items-start gap-1 relative flex-[0_0_auto] mr-[-1.00px]">
        <div className="gap-2.5 flex items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            리더십 역량 측정 결과
          </div>
        </div>

        <div className="flex items-start justify-around gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start flex-1 grow bg-white rounded-lg overflow-hidden flex relative">
            <div className="items-center justify-center px-0 py-2 self-stretch w-full flex-[0_0_auto] bg-[#f4f7fa] flex relative">
              <div className="flex w-[120px] items-center justify-center relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                  리더십 영역
                </div>
              </div>

              <div className="flex w-[60px] items-start justify-center relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs text-center tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                  개인점수
                </div>
              </div>

              <div className="w-[140px] items-start justify-center flex relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs text-center tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                  시각화
                </div>
              </div>

              <div className="flex w-[60px] items-start justify-center relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs text-center tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                  수준
                </div>
              </div>

              <div className="items-center justify-center flex-1 grow flex relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                  평가
                </div>
              </div>
            </div>

            {scoreData.map((item, index) => (
              <div key={index} className="px-0 py-1.5 border-b [border-bottom-style:solid] border-[#e1dfdf] flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="w-[120px] pl-2.5 pr-0 py-0 flex items-center relative">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] tracking-[-0.15px] leading-[15px]">
                    {item.title}
                  </div>
                </div>

                <div className="w-[60px] justify-center flex items-center relative">
                  <button className="all-[unset] box-border inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap">
                      {item.score.toFixed(1)}
                    </div>
                  </button>
                </div>

                <div className="flex flex-col w-[140px] items-center justify-center gap-2.5 relative">
                  <div className="flex flex-col w-[100px] h-3 items-start gap-2.5 relative bg-[#e5e7ea] rounded-[0px_10px_10px_0px]">
                    <div 
                      className="relative h-3 bg-[#679af7] rounded-[0px_10px_10px_0px]" 
                      style={{ width: `${calculateBarWidth(item.score)}px` }}
                    />
                  </div>
                </div>

                <div className="w-[60px] justify-center flex items-center relative">
                  <button className="all-[unset] box-border inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap">
                      {getLevel(item.score)}
                    </div>
                  </button>
                </div>

                <div className="flex-1 grow flex items-center relative">
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-center tracking-[-0.15px] leading-[15px] whitespace-pre-line">
                    {item.evaluation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[556px] items-start gap-1 relative flex-[0_0_auto] mr-[-1.00px]">
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            공감적 리더십 발전 계획
          </div>
        </div>

        <div className="flex flex-col w-[555px] items-start gap-1.5 relative flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Bold',Helvetica] font-bold text-[#8e8e93] text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
              1-3개월
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Bold',Helvetica] font-bold text-[#8e8e93] text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
              3-6개월
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Bold',Helvetica] font-bold text-[#8e8e93] text-[10px] text-right tracking-[-0.15px] leading-[15px] whitespace-nowrap">
              6개월 이상
            </div>
          </div>

          <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 grow h-1 bg-[#bfdfff] rounded-[100px]" />

            <div className="relative flex-1 grow h-1 bg-[#7fbbfb] rounded-[100px]" />

            <div className="relative flex-1 grow h-1 bg-[#679af7] rounded-[100px]" />
          </div>

          <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-1 p-2.5 relative flex-1 grow bg-[#f3f6fa] rounded-lg overflow-hidden">
              <div className="items-center self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                  단기 목표
                </div>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                {goalData.shortTerm.map((goal, idx) => (
                  <div key={idx} className="items-center gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="flex flex-col items-start relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                          {goal}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 p-2.5 relative flex-1 grow bg-[#f3f6fa] rounded-lg overflow-hidden">
              <div className="items-center self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                  중기 목표
                </div>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                {goalData.mediumTerm.map((goal, idx) => (
                  <div key={idx} className="items-center gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="flex flex-col items-start relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                          {goal}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 p-2.5 relative flex-1 grow bg-[#f3f6fa] rounded-lg overflow-hidden">
              <div className="items-center self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                  장기 목표
                </div>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                {goalData.longTerm.map((goal, idx) => (
                  <div key={idx} className="items-center gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="flex flex-col items-start relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                          {goal}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[556px] items-start gap-1 relative flex-[0_0_auto] mr-[-1.00px]">
        <div className="items-center flex gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            리더십 감성역량
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="items-start flex gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="w-[84px] items-center px-0 py-2.5 flex relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                종합평가
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 relative flex-1 grow bg-[#f4f7fa] rounded-lg">
              <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                {evaluationData.comprehensive}
              </p>
            </div>
          </div>

          <div className="items-start gap-2.5 self-stretch w-full flex-[0_0_auto] flex relative">
            <div className="w-[84px] items-center px-0 py-2.5 flex relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                팀 차원 개선 방안
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 relative flex-1 grow bg-[#f4f7fa] rounded-lg">
              <div className="flex flex-col gap-1">
                {evaluationData.teamImprovement.map((item, idx) => (
                  <p key={idx} className="relative [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[555px] items-center gap-1.5 p-2.5 relative flex-[0_0_auto] bg-[#edf6ff] rounded-xl overflow-hidden border border-solid border-[#bfdfff]">
        <div className="items-center self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
            리더십 코칭 Point
          </div>
        </div>

        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start justify-center self-stretch w-full flex-[0_0_auto] flex relative">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                {coachingPoint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
