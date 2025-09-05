import React from "react";






export const Body = ({ data = {} }) => {
  // 기본값 설정
  const shortTermGoals = data.shortTermGoals || [
    "감정을 존중하는 대화 실천",
    "정서·리더십 행동 자기 점검",
    "동료에게 긍정적 피드백 제공"
  ];

  const mediumTermGoals = data.mediumTermGoals || [
    "팀 내 감정 체크인 주도",
    "갈등 관리 교육 참여",
    "1:1 미팅으로 신뢰 강화"
  ];

  const longTermGoals = data.longTermGoals || [
    "정서문화 개선 활동 리드",
    "심리적 안전감 정착",
    "감성 역량을 조직 리더십으로 확장"
  ];

  const coachingPoint = data.coachingPoint || `우수한 감성 역량을 팀과 조직 차원으로 확장하는 방법에 초점을 맞추어 코칭을 받아보시길 제안드립니다. 특히 심리적 안전감 조성과 감정 소통 문화를 주도하는 리더십 주제를 다룬다면 더욱 효과적일 것입니다.`;

  const monitoringSchedule = data.monitoringSchedule || {
    currentDate: "2025년 6월 15일",
    recommendedDate: "2025년 7월 15일"
  };
  return (
    <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col w-[556px] items-start gap-1 relative flex-[0_0_auto] mr-[-1.00px]">
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            종합 역량 측정 결과
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
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                  단기 목표
                </div>
              </div>

              <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
                {shortTermGoals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                      {goal}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 p-2.5 relative flex-1 grow bg-[#f3f6fa] rounded-lg overflow-hidden">
              <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                  중기 목표
                </div>
              </div>

              <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
                {mediumTermGoals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 p-2.5 relative flex-1 grow bg-[#f3f6fa] rounded-lg overflow-hidden">
              <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                  장기 목표
                </div>
              </div>

              <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
                {longTermGoals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                      {goal}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col w-[555px] items-center gap-1.5 flex-[0_0_auto] bg-[#edf6ff] rounded-xl border border-solid border-[#bfdfff] flex p-2.5 relative overflow-hidden">
        <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
            개인 코칭 Point
          </div>
        </div>

        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start justify-center flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px] whitespace-pre-line">
                {coachingPoint}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[556px] items-start gap-1 relative flex-[0_0_auto] mr-[-1.00px]">
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            핵심 요약 및 강점
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="items-start justify-center gap-2.5 flex-1 grow bg-[#f3f6fa] rounded-lg flex p-2.5 relative overflow-hidden">
              <div className="relative w-fit mt-[-2.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-2xl tracking-[-0.24px] leading-9 whitespace-nowrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>

              <div className="flex flex-col items-start relative flex-1 grow">
                <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                    정기 모니터링 권장
                  </div>
                </div>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex-col items-start justify-center flex relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                        현재 진단: {monitoringSchedule.currentDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-fit [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-2xl tracking-[-0.24px] leading-9 whitespace-nowrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="flex flex-col items-start justify-center gap-2.5 relative flex-1 grow">
              <div className="flex-col items-center self-stretch w-full flex-[0_0_auto] bg-[#f3f6fa] rounded-lg flex p-2.5 relative overflow-hidden">
                <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                    재진단 권장일
                  </div>
                </div>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex-col items-start justify-center flex relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                        {monitoringSchedule.recommendedDate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="items-start justify-center gap-2.5 self-stretch w-full flex-[0_0_auto] bg-[#f3f6fa] rounded-lg flex p-2.5 relative overflow-hidden">
            <div className="relative w-fit mt-[-2.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-2xl tracking-[-0.24px] leading-9 whitespace-nowrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="flex flex-col items-start relative flex-1 grow">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex-col items-start justify-center flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                      문의사항이 있으시면 언제든지 연락주세요.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex-col items-start justify-center flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                      E-mail: hr@company.com | Tel: 02-1234-5678
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};