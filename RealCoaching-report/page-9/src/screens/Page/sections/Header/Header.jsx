import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent border-t-[1.5px] [border-top-style:solid] [border-right-style:none] border-b-[1.5px] [border-bottom-style:solid] [border-left-style:none] border-[#679af7]">
      <div className="relative w-[84px] mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#b3cdfb] text-[64px] text-center tracking-[0.96px] leading-[96px]">
        07
      </div>

      <div className="flex flex-col items-start relative flex-1 grow">
        <div className="self-stretch mt-[-1.00px] text-2xl tracking-[0.36px] leading-9 relative [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f]">
          감성지능
        </div>

        <p className="text-[#253c7f] tracking-[0.12px] leading-3 relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-[8px]">
          조직의 정서 문화는 구성원들이 어떤 감정을 표현하고 공유할 수 있는지에
          대한 집단적 규범을 의미합니다. 이는 팀 분위기와 소통 방식에 영향을
          주어 협력과 몰입 수준을 결정짓는 중요한 요인입니다.
        </p>
      </div>
    </header>
  );
};
