import React from "react";

export const FooterNavigation = () => {
  return (
    <div className="flex w-[555px] items-center justify-between absolute top-[805px] left-5">
      <div className="flex items-center gap-1 relative flex-1 grow">
        <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-[#253c7f] text-[8px] tracking-[-0.08px] leading-[13.6px] whitespace-nowrap">
          목차
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
        <div className="relative w-10 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-right tracking-[-0.10px] leading-[17.0px]">
          2
        </div>
      </div>
    </div>
  );
};
