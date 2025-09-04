import React from "react";

export const Body = ({ data = {} }) => {
  // 기본값 설정
  const positiveEmotions = data.positiveEmotions || [
    { label: "열정적", value: 5.0 },
    { label: "활기찬", value: 5.0 },
    { label: "집중된", value: 5.0 },
    { label: "감사한", value: 5.0 }
  ];

  const negativeEmotions = data.negativeEmotions || [
    { label: "불안한", value: 5.0 },
    { label: "우울한", value: 4.9 },
    { label: "화난", value: 5.0 },
    { label: "외로운", value: 1.6 }
  ];

  const recommendations = data.recommendations || [
    {
      title: "긍정정서 유지 및 강화",
      content: "귀하는 업무나 일상 상황에서 열정적이고 활기찬 감정을 잘 유지하고 있으며, 특히 도전적인 과제를 마주할 때 의욕적으로 접근하는 경향이 강합니다. 현재의 우수한 정서적 균형을 지속하기 위해 규칙적인 운동이나 취미 활동을 통해 에너지를 충전하는 시간을 꾸준히 가져보시기 바랍니다. 또한 일상에서 작은 성취나 동료들의 도움에 대해 의식적으로 감사를 표현하는 습관을 기르면 전반적인 정서적 만족도가 더욱 향상될 것입니다."
    },
    {
      title: "스트레스 관리 및 조직 기여",
      content: "검사 결과 부정정서 수준이 낮게 나타나 스트레스 상황에서도 비교적 안정적인 정서를 유지하고 있습니다. 이러한 강점을 바탕으로 팀 내에서 긍정적 분위기 조성자 역할을 더욱 적극적으로 수행해보시기 바랍니다. 업무 압박이나 갈등 상황에서 느끼는 불안감은 깊은 호흡이나 짧은 명상과 같은 즉석 이완 기법으로 관리하시고, 동료들과 성공 경험을 공유하거나 어려운 상황에서 격려의 말을 건네는 것이 조직 전체의 정서적 안전감 향상에 기여할 것입니다."
    }
  ];

  // 평균 점수 계산
  const positiveAverage = (positiveEmotions.reduce((sum, item) => sum + item.value, 0) / positiveEmotions.length).toFixed(1);
  const negativeAverage = (negativeEmotions.reduce((sum, item) => sum + item.value, 0) / negativeEmotions.length).toFixed(1);

  // 바 너비 계산 함수 (0~5 점수를 0~190px로 변환)
  const getBarWidth = (value) => (value / 5) * 190;

  // 파이 차트 각도 계산
  const total = parseFloat(positiveAverage) + parseFloat(negativeAverage);
  const negativePercentage = (parseFloat(negativeAverage) / total) * 100;
  
  // SVG path 계산을 위한 함수 (stroke를 고려하여 radius 축소)
  const calculatePieSlice = (startAngle, endAngle, radius = 98) => {
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = 100 + radius * Math.cos(startAngleRad);
    const y1 = 100 + radius * Math.sin(startAngleRad);
    const x2 = 100 + radius * Math.cos(endAngleRad);
    const y2 = 100 + radius * Math.sin(endAngleRad);
    
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M 100 100 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };
  
  // 각 섹션의 각도 계산 (9시 방향 = -90도에서 시작)
  const negativeAngle = (negativePercentage / 100) * 360;
  const positivePath = calculatePieSlice(-90, -90 + negativeAngle);
  const negativePath = calculatePieSlice(-90 + negativeAngle, 270);

  return (
    <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col w-[100px] items-center rounded-xl overflow-hidden flex relative">
          <div className="relative w-fit mt-[-2.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#1fca3e] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
            긍정정서
          </div>

          <div className="relative w-fit [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#1fca3e] text-4xl text-center tracking-[0] leading-[54px] whitespace-nowrap">
            {positiveAverage}
          </div>

          <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-[15px]">
            활기차고 의미있는 <br />
            감정을 자주 느끼는 편
          </p>
        </div>

        <svg
          className="relative w-[43.33px] h-[8.66px]"
          viewBox="0 0 44 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.169872 5L4.5 9.33013L8.83013 5L4.5 0.669873L0.169872 5ZM43.5 5L43.5 4.25C31.8233 4.25 27.9117 4.25 24 4.25C20.0883 4.25 16.1767 4.25 4.5 4.25L4.5 5L4.5 5.75C16.1767 5.75 20.0883 5.75 24 5.75C27.9117 5.75 31.8233 5.75 43.5 5.75L43.5 5Z"
            fill="#6CD764"
          />
        </svg>


        <div className="relative w-[200px] h-[200px]">
          <svg viewBox="0 0 200 200" className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
            {/* 부정정서 (분홍색) 부분 */}
            <path
              d={positivePath}
              fill="#FFA099"
              stroke="#F77F76"
              strokeWidth="2"
            />
            
            {/* 긍정정서 (초록색) 부분 */}
            <path
              d={negativePath}
              fill="#A4F18A"
              stroke="#6CD764"
              strokeWidth="2"
            />
          </svg>
        </div>


        <svg
          className="relative w-[43.33px] h-[8.66px] text-[#F77F76]"
          viewBox="0 0 44 10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M43.8301 5L39.5 0.669873L35.1699 5L39.5 9.33013L43.8301 5ZM39.5 5L39.5 4.25C27.8233 4.25 23.9117 4.25 20 4.25C16.0883 4.25 12.1767 4.25 0.5 4.25L0.5 5L0.5 5.75C12.1767 5.75 16.0883 5.75 20 5.75C23.9117 5.75 27.8233 5.75 39.5 5.75L39.5 5Z"
            fill="currentColor"
          />
        </svg>


        <div className="flex-col w-[100px] items-center rounded-xl overflow-hidden flex relative">
          <div className="relative w-fit mt-[-2.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#f46d64] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
            부정정서
          </div>

          <div className="relative w-fit [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#f46d64] text-4xl text-center tracking-[0] leading-[54px] whitespace-nowrap">
            {negativeAverage}
          </div>

          <div className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-[15px]">
            짜증이나 불안을
            <br />
            적게 경험하는 편
          </div>
        </div>
      </div>

      <div className="items-start gap-2.5 self-stretch w-full flex-[0_0_auto] flex relative">
        <div className="items-start gap-1 flex-1 grow flex flex-col relative">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
              주요 긍정정서 요소
            </div>
          </div>

          <div className="w-[273px] items-center gap-2.5 p-2.5 flex-[0_0_auto] mr-[-0.50px] bg-[#f3f6fa] rounded-lg overflow-hidden flex flex-col relative">
            {positiveEmotions.map((emotion, index) => (
              <div key={index} className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[27px] h-3 mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  {emotion.label}
                </div>

                <div className="h-3 items-start gap-2.5 flex-1 grow bg-[#e5e7ea] rounded-[0px_10px_10px_0px] flex flex-col relative">
                  <div 
                    className="relative h-3 bg-[#a3f08a] rounded-[0px_10px_10px_0px]" 
                    style={{ width: `${getBarWidth(emotion.value)}px` }}
                  />
                </div>

                <div className="relative w-4 h-2.5 [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap">
                  {emotion.value.toFixed(1)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="items-start gap-1 flex-1 grow flex flex-col relative">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
              주요 부정정서 요소
            </div>
          </div>

          <div className="w-[273px] items-center gap-2.5 p-2.5 flex-[0_0_auto] mr-[-0.50px] bg-[#f3f6fa] rounded-lg overflow-hidden flex flex-col relative">
            {negativeEmotions.map((emotion, index) => (
              <div key={index} className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[27px] h-3 mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  {emotion.label}
                </div>

                <div className="h-3 items-start gap-2.5 flex-1 grow bg-[#e5e7ea] rounded-[0px_10px_10px_0px] flex flex-col relative">
                  <div 
                    className="relative h-3 bg-[#ffa099] rounded-[0px_10px_10px_0px]" 
                    style={{ width: `${getBarWidth(emotion.value)}px` }}
                  />
                </div>

                <div className="relative w-4 h-2.5 [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-[10px] tracking-[0.10px] leading-[15px] whitespace-nowrap">
                  {emotion.value.toFixed(1)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-col items-center gap-2 p-2.5 bg-[#f3f6fa] rounded-lg overflow-hidden flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
            정서관리 권장사항
          </div>
        </div>

        {recommendations.map((rec, index) => (
          <div key={index} className="flex-col items-start justify-center flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.15px] leading-[17.0px] whitespace-nowrap">
                {rec.title}
              </div>
            </div>

            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                {rec.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
