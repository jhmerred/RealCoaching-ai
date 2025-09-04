import React from "react";


// 점수를 바 너비로 변환하는 함수 (5점 만점 기준, 최대 너비 140px)
const calculateBarWidth = (score) => {
  const maxWidth = 140;
  return (score / 5) * maxWidth;
};

// 레이더 차트를 위한 좌표 계산 함수
const calculateRadarPoints = (scoreData) => {
  const centerX = 50.5;
  const centerY = 50;
  const maxRadius = 50; // 최대 반지름
  
  // 각 점수에 대한 각도 (다이아몬드 형태: 상, 우, 하, 좌)
  const angles = [270, 0, 90, 180]; // 상단부터 시계방향
  
  // 점수 순서: 자기 감정 인식(상), 감정 조절(우), 타인 감정 인식(하), 감정 활용(좌)
  const scores = [scoreData[0].score, scoreData[1].score, scoreData[2].score, scoreData[3].score];
  
  const points = scores.map((score, i) => {
    const radius = (score / 5) * maxRadius;
    const angleRad = (angles[i] * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);
    return `${x},${y}`;
  });
  
  return points.join(' ');
};

const interpretationData = [
  {
    title: "자기 감정 인식",
    mainDescription: "자신의 감정 상태를 정확히 파악하는 능력",
    subDescription: "의사결정 향상, 자기주도적 업무 수행, 스트레스 조기 인식",
  },
  {
    title: "감정 조절",
    mainDescription: "부정적 감정을 관리하고 긍정적 감정을 유지하는 능력",
    subDescription: "갈등 상황 대처, 압박감 하에서도 안정적 성과, 팀 분위기 조성",
  },
  {
    title: "타인 감정 인식",
    mainDescription: "다른 사람의 감정과 니즈를 파악하는 공감 능력",
    subDescription: "효과적 소통, 고객 서비스 향상, 팀워크 강화, 리더십 발휘",
  },
  {
    title: "감정 활용",
    mainDescription: "감정을 동기부여와 목표달성에 활용하는 능력",
    subDescription: "창의적 문제 해결, 변화 적응력, 조직 몰입도 향상, 성과 극대화",
  },
];


export const Body = ({ data = {} }) => {
  // 기본값 설정
  const scoreData = data.scoreData || [
    { title: "자기 감정 인식", score: 5.0 },
    { title: "감정 조절", score: 2.5 },
    { title: "타인 감정 인식", score: 1.0 },
    { title: "감정 활용", score: 0.1 }
  ];

  const keySummaryData = data.keySummaryData || [
    {
      title: "강점",
      description: `자기 감정 인식 능력이 뛰어나며, 대인관계에서 감정을 잘 활용합니다. 감정을 정확히 인식하고 표현할 수 있어 의사소통이 원활하며, 타인과의 상호작용에서 감성지능을 효과적으로 활용합니다.`
    },
    {
      title: "밸런스",
      description: `전반적으로 감성지능이 균형 있게 발달되어 있으며, 특별한 약점이 없습니다. 네가지 영역 모두 평균 이상의 점수를 보여 감성지능이 고르게 발달된 상태입니다.`
    },
    {
      title: "발전 영역",
      description: `감정 조절 능력을 더욱 향상시키면 스트레스 관리가 더 효과적일 것입니다. 특히 예상치 못한 상황이나 부정적 피드백을 받았을 때 감정을 보다 효과적으로 조절하는 기술을 개발하면 좋겠습니다.`
    }
  ];

  return (
    <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex w-[555px] items-center gap-2.5 relative flex-[0_0_auto]">
        <div className="w-[273px] gap-2 bg-[#f4f7fa] rounded-xl flex flex-col items-center p-2.5 relative overflow-hidden">
          <div className="flex items-center justify-center px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="w-fit [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[0] leading-[18px] whitespace-nowrap relative mt-[-1.00px]">
              감성 지능 프로필
            </div>
          </div>

          <div className="flex flex-col items-center gap-0.5 self-stretch w-full relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[8px] tracking-[-0.12px] leading-[13.6px] whitespace-nowrap">
              자기 감정 인식
            </div>

            <svg
              className="relative w-[100px] h-[100px]"
              viewBox="0 0 101 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g clipPath="url(#clip0_211_1776)">
                {/* 배경 그리드 - 5단계 */}
                <path d="M100.5 50L50.5 0L0.5 50L50.5 100L100.5 50Z" fill="white" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M90.5 50L50.5 10L10.5 50L50.5 90L90.5 50Z" fill="#F6F8FC" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M80.5 50L50.5 20L20.5 50L50.5 80L80.5 50Z" fill="white" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M70.5 50L50.5 30L30.5 50L50.5 70L70.5 50Z" fill="#F6F8FC" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M60.5 50L50.5 40L40.5 50L50.5 60L60.5 50Z" fill="white" stroke="#CCCCCC" strokeWidth="0.5"/>
              
                {/* 축선 */}
                <path d="M50.5 50L50.5 0" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M50.5 50H100.5" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M50.5 50V100" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M50.5 50L0.5 50" stroke="#CCCCCC" strokeWidth="0.5"/>
              
                {/* 동적 데이터 폴리곤 */}
                <polygon 
                  points={calculateRadarPoints(scoreData)} 
                  fill="#679AF7" 
                  fillOpacity="0.5" 
                  stroke="#679AF7" 
                  strokeWidth="0.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_211_1776">
                  <rect width="100" height="100" fill="white" transform="translate(0.5)"/>
                </clipPath>
              </defs>
            </svg>


            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[8px] tracking-[-0.12px] leading-[13.6px] whitespace-nowrap">
                타인 감정 인식
              </p>
            </div>

            <div className="absolute top-[60px] left-8 [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[8px] tracking-[-0.12px] leading-[13.6px] whitespace-nowrap">
              감정 활용
            </div>

            <div className="absolute top-[60px] left-48 [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[8px] tracking-[-0.12px] leading-[13.6px] whitespace-nowrap">
              감정 조절
            </div>
          </div>
        </div>

        <div className="flex-col w-[273px] h-[178px] gap-8 p-2.5 mr-[-1.00px] bg-[#f3f6fa] rounded-lg overflow-hidden flex items-center relative">
          <div className="relative w-fit mt-[-2.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
            영역별 상세 분석
          </div>

          <div className="flex flex-col w-[253px] items-start gap-2.5 relative flex-[0_0_auto]">
            {scoreData.map((item, index) => (
              <div key={index} className="gap-2.5 self-stretch w-full flex-[0_0_auto] flex items-center relative">
                <div className="relative flex-1 h-3 mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  {item.title}
                </div>

                <div className="flex-col w-[140px] h-3 items-start bg-[#e5e7ea] rounded-[0px_10px_10px_0px] flex gap-2.5 relative">
                  <div 
                    className="relative h-3 bg-[#679af7] rounded-[0px_10px_10px_0px]" 
                    style={{ width: `${calculateBarWidth(item.score)}px` }} 
                  />
                </div>

                <div className="w-6 h-2.5 text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap relative [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f]">
                  {item.score.toFixed(1)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[556px] gap-1.5 flex-[0_0_auto] mr-[-1.00px] bg-[#edf6ff] rounded-lg flex flex-col items-center p-2.5 relative overflow-hidden">
        <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
            감성지능 4개 영역 설명
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 self-stretch w-full">
          {interpretationData.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-2.5 bg-white rounded-md overflow-hidden">
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
                  {item.title}
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[13.6px]">
                  {item.mainDescription}
                </p>

                <p className="text-gray-500 tracking-[0] leading-[13.6px] relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-[8px]">
                  {item.subDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-col w-[556px] items-start gap-1 mr-[-1.00px] flex relative flex-[0_0_auto]">
        <div className="items-center gap-2.5 self-stretch w-full flex relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            핵심 요약
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5 self-stretch w-full relative flex-[0_0_auto]">
          {keySummaryData.map((item, index) => (
            <div key={index} className="items-start gap-2.5 self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="w-[84px] items-center px-0 py-2.5 flex relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                  {item.title}
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 relative flex-1 grow bg-[#f4f7fa] rounded-lg">
                <p className="flex-1 [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px] relative mt-[-1.00px] whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
