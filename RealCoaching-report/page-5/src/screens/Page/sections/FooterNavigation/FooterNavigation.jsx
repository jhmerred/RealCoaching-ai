import React from "react";

export const FooterNavigation = () => {
  return (
    <div className="flex w-[555px] items-center justify-between absolute top-[805px] left-5">
      <div className="flex items-center gap-1 relative flex-1 grow">
        <div className="flex flex-col w-[17px] h-[17px] items-center justify-center gap-[2.83px] relative bg-[#f4f7fa] rounded-[28.33px] aspect-[1]">
          <div className="relative self-stretch [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-[10.8px] text-center tracking-[0.16px] leading-[16.1px]">
            3
          </div>
        </div>

        <div className="relative w-fit [font-family:'SUIT-Medium',Helvetica] font-medium text-[#253c7f] text-[8px] tracking-[-0.08px] leading-[13.6px] whitespace-nowrap">
          종합 진단 결과 대시보드
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
        <div className="relative w-10 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-right tracking-[-0.10px] leading-[17.0px]">
          5
        </div>
      </div>
    </div>
  );
};
