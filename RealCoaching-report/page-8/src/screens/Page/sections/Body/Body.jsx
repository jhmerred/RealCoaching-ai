import React from "react";
import tableChart from "@/assets/table_chart.png"

export const Body = ({ data = {} }) => {
  // 기본값 설정
  const scoreData = data.scoreData || [
    { title: "감정 표현 자유", personalScore: 4.1, orgAverage: 2.0 },
    { title: "조직 내 정서상태", personalScore: 4.9, orgAverage: 4.9 },
    { title: "기대 감정 일치도", personalScore: 3.5, orgAverage: 5.0 },
    { title: "정서문화 건강성", personalScore: 3.5, orgAverage: 4.0 }
  ];

  // y좌표 계산 함수
  const calculateY = (personalScore, average) => {
    
    if (personalScore <= average) {
      // 평균 이하: 0 ~ 66.5
      return 133 - (personalScore / average * 66.5);
    } else {
      // 평균 이상: 66.5 ~ 0  
      return 133 - (66.5 + (personalScore - average) / (5 - average) * 66.5);
    }
  };

  // 측정 항목별 설명 데이터
  const interpretationData = [
    {
      title: "감정 표현 자유",
      description: "감정을 자유롭게 표현하는 권리"
    },
    {
      title: "조직 내 정서상태",
      description: "구성원들이 느끼는 감정과 분위기의 집합적 상태"
    },
    {
      title: "기대 감정 일치도",
      description: "개인이 조직이나 상황에서 기대한 감정과 실제 경험한 감정의 일치도"
    },
    {
      title: "정서문화 건강성",
      description: "조직 내 감정 표현과 관리 방식이 구성원에게 긍정적 영향을 주는 정도"
    }
  ];

  // 종합 인사이트 데이터
  const insights = data.insights || {
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
  };

  return (
    <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col w-[556px] items-start gap-1 relative flex-[0_0_auto] mr-[-1.00px]">
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            조직 평균과 개인 점수 비교
          </p>
        </div>

        <div className="flex-col items-start bg-white rounded-lg overflow-hidden flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="items-center justify-center px-0 py-2 bg-[#f4f7fa] flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center relative flex-1 grow">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                측정 항목
              </div>
            </div>

            <div className="flex w-[60px] items-start justify-center relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs text-center tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                개인점수
              </div>
            </div>

            <div className="flex w-[60px] items-start justify-center relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs text-center tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                조직평균
              </div>
            </div>

            <div className="flex w-[60px] items-start justify-center relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs text-center tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                차이
              </div>
            </div>

            <div className="justify-center flex-1 grow flex items-center relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                설명
              </div>
            </div>
          </div>

          {scoreData.map((item, index) => {
            const difference = (item.personalScore - item.orgAverage).toFixed(1);
            const interpretation = interpretationData.find(data => data.title === item.title);
            
            return (
              <div key={index} className="flex items-center px-0 py-1.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e1dfdf]">
                <div className="flex items-center pl-2.5 pr-0 py-0 relative flex-1 grow">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] tracking-[-0.15px] leading-[15px]">
                    {item.title}
                  </div>
                </div>

                <div className="w-[60px] justify-center flex items-center relative">
                  <button className="all-[unset] box-border inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap">
                      {item.personalScore.toFixed(1)}
                    </div>
                  </button>
                </div>

                <div className="w-[60px] justify-center flex items-center relative">
                  <button className="all-[unset] box-border inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap">
                      {item.orgAverage.toFixed(1)}
                    </div>
                  </button>
                </div>

                <div className="w-[60px] justify-center flex items-center relative">
                  <button className="all-[unset] box-border inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className={`relative w-fit mt-[-1.00px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap ${
                      difference > 0 ? 'text-[#1fca3e]' : difference < 0 ? 'text-[#f46d64]' : 'text-black'
                    }`}>
                      {difference > 0 ? '+' : ''}{difference}
                    </div>
                  </button>
                </div>

                <div className="flex-1 grow flex items-center relative">
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-center tracking-[-0.15px] leading-[15px]">
                    {interpretation?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            결과 점수 표
          </div>
        </div>

        <div className="flex w-[555px] h-[200px] items-center justify-between relative">
          <div className="relative w-[367px] h-[200px]">
            <div className="absolute w-[357px] h-[155px] -top-px left-[9px]">
              <div className="absolute w-[328px] h-[66px] top-[3px] left-[27px] bg-[#a4f18a33] bg-blend-multiply" />

              <div className="absolute w-[328px] h-[66px] top-[69px] left-[27px] bg-[#ffa09933] bg-blend-multiply" />

              <div className="absolute w-[333px] h-5 top-[134px] left-6">
                <div className="relative h-[21px] -top-px">
                  <div className="absolute w-[333px] h-5 top-0 left-0">
                    <div className="absolute w-[45px] h-5 top-0 left-0">

                      <div className="absolute w-[43px] top-[9px] left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        감정 표현
                      </div>
                    </div>

                    <div className="absolute w-[55px] h-5 top-0 left-[85px]">

                      <div className="absolute w-[53px] top-[9px] left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        정서상태
                      </div>
                    </div>

                    <div className="absolute w-[67px] h-5 top-0 left-[188px]">

                      <div className="absolute w-[65px] top-[9px] left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        기대 감정
                      </div>
                    </div>

                    <div className="absolute w-[45px] h-5 top-0 left-[290px]">

                      <div className="absolute w-[43px] top-[9px] left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        정서문화
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-[26px] h-[139px] top-0 left-0">
                <div className="relative w-[27px] h-[139px]">

                  <div className="absolute w-[26px] h-[139px] top-0 left-0">
                    <div className="absolute w-4 h-[11px] top-32 left-3">

                      <div className="absolute w-2 top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        0
                      </div>
                    </div>

                    <div className="absolute w-[23px] h-[11px] top-[95px] left-1.5">

                      <div className="absolute w-3.5 top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        25
                      </div>
                    </div>

                    <div className="absolute w-[23px] h-[11px] top-[62px] left-[5px]">

                      <div className="absolute w-[15px] top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        50
                      </div>
                    </div>

                    <div className="absolute w-[22px] h-[11px] top-[29px] left-1.5">

                      <div className="absolute w-3.5 top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        75
                      </div>
                    </div>

                    <div className="absolute w-7 h-[11px] top-0 left-0">

                      <div className="absolute w-[19px] top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        100
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="absolute w-[330px] h-[133px] top-0.5 left-[26px]"
                alt="Group"
                src={tableChart}
              />

              <svg 
                className="absolute w-[330px] h-[133px] top-[2.5px] left-[26px]"
                viewBox="0 0 330 133" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d={`M1 ${calculateY(scoreData[0].personalScore, scoreData[0].orgAverage)}L110 ${calculateY(scoreData[1].personalScore, scoreData[1].orgAverage)}L220 ${calculateY(scoreData[2].personalScore, scoreData[2].orgAverage)}L329 ${calculateY(scoreData[3].personalScore, scoreData[3].orgAverage)}`}
                  stroke="url(#paint0_linear_211_1667)" 
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient 
                    id="paint0_linear_211_1667" 
                    x1="0" 
                    y1="0" 
                    x2="0" 
                    y2="133" 
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#6CD764"/>
                    <stop offset="0.3" stopColor="#9FD96A"/>
                    <stop offset="0.7" stopColor="#FF9B8A"/>
                    <stop offset="1" stopColor="#F77F76"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col w-[365px] items-start absolute top-[154px] left-0 bg-white">
              <div className="flex items-center px-0 py-1 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e1dfdf]">
                <div className="w-[31px] flex items-center relative">
                  <button className="all-[unset] box-border inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap">
                      평균
                    </div>
                  </button>
                </div>

                {scoreData.map((item, index) => (
                  <div key={index} className={index === 0 ? "w-[52px] flex items-center relative" : index === scoreData.length - 1 ? "w-[52px] justify-end flex items-center relative" : "justify-center flex-1 grow flex items-center relative"}>
                    <button className="all-[unset] box-border inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap">
                        {item.orgAverage.toFixed(1)}
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center px-0 py-1 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e1dfdf]">
                <div className="w-[31px] flex items-center relative">
                  <button className="all-[unset] box-border inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap">
                      개인
                    </div>
                  </button>
                </div>

                {scoreData.map((item, index) => {
                  const difference = item.personalScore - item.orgAverage;
                  const textColor = difference > 0 ? 'text-[#1fca3e]' : difference < 0 ? 'text-[#f46d64]' : 'text-black';
                  
                  return (
                    <div key={index} className={index === 0 ? "w-[52px] flex items-center relative" : index === scoreData.length - 1 ? "w-[52px] justify-end flex items-center relative" : "justify-center flex-1 grow flex items-center relative"}>
                      <button className="all-[unset] box-border inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                        <div className={`relative w-fit mt-[-1.00px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold ${textColor} text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap`}>
                          {item.personalScore.toFixed(1)}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[178px] h-[200px] items-center gap-3 p-2.5 relative bg-[#f3f6fa] rounded-lg overflow-hidden">
            <div className="self-stretch w-full flex-[0_0_auto] flex items-center relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                종합 인사이트
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                {insights.overall}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[556px] items-start gap-1 relative flex-[0_0_auto] mr-[-1.00px]">
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            정서문화 개선 방안
          </div>
        </div>

        <div className="inline-flex items-start gap-2.5 relative self-stretch flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-2 p-2.5 relative flex-1 grow bg-[#f3f6fa] rounded-lg overflow-hidden">
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                개인 차원 개선 방안
              </div>
            </div>

            {insights.personalImprovements.map((improvement, index) => (
              <div key={index} className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                <svg
                  className="relative w-4 h-4 text-[#263C7F]"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M13.8806 6.79978C14.1547 8.14456 13.9594 9.54263 13.3274 10.7609C12.6953 11.9791 11.6648 12.9438 10.4076 13.4942C9.15033 14.0445 7.74243 14.1472 6.41863 13.7852C5.09484 13.4231 3.93517 12.6182 3.13302 11.5046C2.33088 10.391 1.93473 9.03612 2.01066 7.66581C2.08658 6.2955 2.62999 4.99264 3.55025 3.97449C4.47051 2.95634 5.712 2.28444 7.06769 2.07086C8.42338 1.85727 9.81132 2.1149 11 2.80079"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.2002 7.39976L8.00019 9.19976L14.0002 3.19977"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="flex items-center gap-1 relative flex-1 grow">
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                    {improvement}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 p-2.5 relative flex-1 grow bg-[#f3f6fa] rounded-lg overflow-hidden">
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                팀 차원 개선 방안
              </div>
            </div>

            {insights.teamImprovements.map((improvement, index) => (
              <div key={index} className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                <svg
                  className="relative w-4 h-4 text-[#263C7F]"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M13.8806 6.79978C14.1547 8.14456 13.9594 9.54263 13.3274 10.7609C12.6953 11.9791 11.6648 12.9438 10.4076 13.4942C9.15033 14.0445 7.74243 14.1472 6.41863 13.7852C5.09484 13.4231 3.93517 12.6182 3.13302 11.5046C2.33088 10.391 1.93473 9.03612 2.01066 7.66581C2.08658 6.2955 2.62999 4.99264 3.55025 3.97449C4.47051 2.95634 5.712 2.28444 7.06769 2.07086C8.42338 1.85727 9.81132 2.1149 11 2.80079"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.2002 7.39976L8.00019 9.19976L14.0002 3.19977"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="flex items-center gap-1 relative flex-1 grow">
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                    {improvement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
