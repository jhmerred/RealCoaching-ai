import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent border-t-[1.5px] [border-top-style:solid] [border-right-style:none] border-b-[1.5px] [border-bottom-style:solid] [border-left-style:none] border-[#679af7]">
      <div className="relative w-[84px] mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#b3cdfb] text-[64px] text-center tracking-[0.96px] leading-[96px]">
        05
      </div>

      <div className="flex flex-col items-start relative flex-1 grow">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-2xl tracking-[0.36px] leading-9">
          정서상태
        </div>

        <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-[#253c7f] text-[8px] tracking-[0.12px] leading-3">
          구성원이 경험하는 긍정적·부정적 정서는 업무 몰입과 성과에 직접적인
          영향을 미칩니다. 긍정정서는 협력과 창의성을 촉진하고, 부정정서는{" "}
          <br />
          스트레스와 소진으로 이어질 수 있어 균형 있는 관리가 중요합니다.
        </p>
      </div>
    </header>
  );
};
