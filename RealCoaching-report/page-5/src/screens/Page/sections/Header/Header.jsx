import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent border-t-[1.5px] [border-top-style:solid] [border-right-style:none] border-b-[1.5px] [border-bottom-style:solid] [border-left-style:none] border-[#679af7]">
      <div className="relative w-[84px] mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#b3cdfb] text-[64px] text-center tracking-[0.96px] leading-[96px]">
        03
      </div>

      <div className="flex flex-col items-start relative flex-1 grow">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-2xl tracking-[0.36px] leading-9">
          종합 진단 결과 대시보드
        </div>

        <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-[#253c7f] text-[8px] tracking-[0.12px] leading-3">
          종합 진단 결과 대시보드는 개인의 검사 결과를 영역별로 분석하여 핵심
          강점과 개선 포인트를 한눈에 보여줍니다. 주요 역량을 종합적으로 확인할
          수 있어 자신의 현재 위치를 객관적으로 이해하고 앞으로의 발전 방향을
          설정하는 데 도움을 줍니다.
        </p>
      </div>
    </header>
  );
};
