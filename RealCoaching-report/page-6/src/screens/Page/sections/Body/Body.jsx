import React from "react";
import { Badge } from "../../../../components/Badge";

export const Body = ({ data = {} }) => {
  // 기본값 설정
  const scoreData = data.scoreData || [
    { title: "도움 요청 용이함", score: 4.2 },
    { title: "문제 자유롭게 말할 수 있음", score: 2.8 },
    { title: "위험 감수 발언 안전함", score: 2.5 },
    { title: "구성원들 간 상호 존중", score: 2.5 },
    { title: "노력에 대한 방해 없음", score: 5.0 },
    { title: "실수에 대한 불이익 없음", score: 5.0 },
    { title: "역량이 인정되고 활용됨", score: 5.0 }
  ];

  const sortedScoreData = [...scoreData].sort((a, b) => b.score - a.score);
  
  const totalAverage = (scoreData.reduce((sum, item) => sum + item.score, 0) / scoreData.length).toFixed(1);
  
  const balanceBarWidth = Math.round((parseFloat(totalAverage) / 5) * 555);
  const indicatorPosition = balanceBarWidth - 5;
  
  const getStatus = (score) => {
    return score >= 3.5 ? "green" : "red";
  };

  const interpretationData = [
    {
      title: "도움 요청 용이함",
      strength: "팀원 간 협력과 도움 요청이 자유로운 분위기",
      improvement: "도움 요청에 대한 심리적 장벽이 존재함"
    },
    {
      title: "문제 자유롭게 말할 수 있음",
      strength: "어려운 문제도 자유롭게 논의할 수 있는 문화",
      improvement: "문제 제기 시 부정적 반응에 대한 우려"
    },
    {
      title: "위험 감수 발언 안전함",
      strength: "새로운 아이디어와 의견 제시가 환영받는 환경",
      improvement: "도전적 발언에 대한 부담감과 위축"
    },
    {
      title: "구성원들 간 상호 존중",
      strength: "서로의 의견을 경청하고 존중하는 문화",
      improvement: "상호 존중과 배려가 부족한 커뮤니케이션"
    },
    {
      title: "노력에 대한 방해 없음",
      strength: "개인의 업무 집중과 노력을 지원하는 환경",
      improvement: "업무 수행 시 불필요한 간섭과 방해 요소 존재"
    },
    {
      title: "실수에 대한 불이익 없음",
      strength: "실수를 학습 기회로 인식하는 성장 문화",
      improvement: "실수에 따른 부정적 결과 우려"
    },
    {
      title: "역량이 인정되고 활용됨",
      strength: "구성원의 강점과 전문성이 적극 활용됨",
      improvement: "구성원의 역량 인정 및 활용 기회 부족"
    }
  ];

  const getTopStrengths = () => {
    return sortedScoreData
      .filter(item => item.score >= 3.5)
      .slice(0, 3)
      .map(item => {
        const interpretation = interpretationData.find(i => i.title === item.title);
        return {
          title: item.title,
          description: interpretation?.strength || ""
        };
      });
  };

  const getTopImprovements = () => {
    return sortedScoreData
      .filter(item => item.score < 3.5)
      .slice(-3)
      .map(item => {
        const interpretation = interpretationData.find(i => i.title === item.title);
        return {
          title: item.title,
          description: interpretation?.improvement || ""
        };
      });
  };

  return (
    <div className="inline-flex flex-col h-[669px] items-start gap-5 relative mr-[-1.00px]">
      <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
        <div className="items-center gap-2.5 self-stretch w-full flex relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            심리적 안전감 균형
          </div>
        </div>

        <div className="relative w-[555px] h-[47px]">
          <div className="absolute w-[555px] h-5 top-[9px] left-0">
          <svg
            className="absolute w-px h-5 top-0 left-[278px]"
            viewBox="0 0 1 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.5" x2="0.5" y2="20" stroke="#D1D1D6" />
          </svg>

          <div className="flex flex-col w-[555px] h-3 items-start absolute top-1 left-0 bg-[#ffa099] rounded-[100px] border border-[#f67e76]">
            <div className="h-full bg-[#a3f08a] rounded-[100px] ring-1 ring-[#6bd763]" style={{ width: `${balanceBarWidth}px` }} />
          </div>

          </div>

          <div className="flex w-[555px] items-center justify-between absolute top-8 left-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Bold',Helvetica] font-bold text-[#8e8e93] text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
              양호
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Bold',Helvetica] font-bold text-[#8e8e93] text-[10px] text-right tracking-[0] leading-[15px] whitespace-nowrap">
              개선 필요
            </div>
          </div>

          <span
            className="absolute w-2.5 h-[12px] top-0 text-black"
            aria-hidden
            style={{
              left: `${indicatorPosition}px`
            }}
          >
            <svg viewBox="0 0 12 9" className="w-full h-full">
              <path d="M6 9L11.1962 0H0.803848L6 9Z" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex-col w-[556px] items-start gap-1 flex relative flex-[0_0_auto]">
        <div className="items-center gap-2.5 self-stretch w-full flex relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            결과 점수 표
          </div>
        </div>

        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col w-[367px] items-start bg-white rounded-lg overflow-hidden flex relative">
            <div className="flex items-center justify-center px-0 py-2 relative self-stretch w-full flex-[0_0_auto] bg-[#f4f7fa]">
              <div className="flex items-center justify-center relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                  설명
                </div>
              </div>

              <div className="w-[60px] items-start flex justify-center relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs text-center tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                  평균점수
                </div>
              </div>

              <div className="w-[60px] items-start flex justify-center relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs text-center tracking-[-0.18px] leading-[18px] whitespace-nowrap">
                  상태
                </div>
              </div>
            </div>

            {sortedScoreData.map((item, index) => (
              <div key={index} className="items-center px-0 py-1.5 self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e1dfdf] flex relative">
                <div className="flex items-center pl-2.5 pr-0 py-0 relative flex-1 grow">
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

                <div className="w-[60px] justify-center flex items-center relative">
                  <Badge className="!relative" colot={getStatus(item.score)} />
                </div>
              </div>
            ))}

            <div className="flex items-center justify-center px-0 py-2 relative self-stretch w-full flex-[0_0_auto] bg-[#f4f7fa]">
              <div className="items-center flex-1 grow flex justify-center relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  종합평균
                </div>
              </div>

              <div className="w-[60px] items-start flex justify-center relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-xs text-center tracking-[0.12px] leading-[18px] whitespace-nowrap">
                  {totalAverage}
                </div>
              </div>

              <div className="flex w-[60px] items-center justify-center relative">
                <Badge className="!relative" colot={getStatus(parseFloat(totalAverage))} />
              </div>
            </div>
          </div>

          <div className="flex-col w-[179px] gap-3 p-2.5 bg-[#f3f6fa] rounded-lg overflow-hidden flex items-center relative self-stretch">
            <div className="w-full flex-[0_0_auto] flex items-center relative self-stretch">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                점수 레벨 해석
              </div>
            </div>

            <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <Badge className="!relative" colot="green" />
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                    양호 (3.5-5.0)
                  </div>
                </div>

                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                    안전감 수준이 양호함
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <Badge className="!relative" colot="red" />
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                    개선필요 (1.0-3.4)
                  </div>
                </div>

                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                    안전감 수준이 양호함
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col w-[556px] items-start gap-1 flex relative flex-[0_0_auto]">
        <div className="items-center gap-2.5 self-stretch w-full flex relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            결과 해석 가이드
          </div>
        </div>

        <div className="justify-between flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[273px] items-center gap-2 p-2.5 relative bg-[#f3f6fa] rounded-lg overflow-hidden">
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                강점
              </div>
            </div>

            {getTopStrengths().map((item, index) => (
              <div key={index} className="flex-col justify-center flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="gap-1 inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.15px] leading-[17.0px] whitespace-nowrap">
                    {item.title}
                  </div>
                </div>

                <div className="gap-2.5 inline-flex items-center relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px] whitespace-nowrap">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[273px] items-center gap-2 p-2.5 relative bg-[#f3f6fa] rounded-lg overflow-hidden">
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                개선 필요
              </div>
            </div>

            {getTopImprovements().map((item, index) => (
              <div key={index} className="flex-col justify-center flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="gap-1 inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.15px] leading-[17.0px] whitespace-nowrap">
                    {item.title}
                  </div>
                </div>

                <div className="gap-2.5 inline-flex items-center relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px] whitespace-nowrap">
                    {item.description}
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
