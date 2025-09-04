import React from "react";

export const Header = () => {
  return (
    <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] border-t-[1.5px] [border-top-style:solid] border-b-[1.5px] [border-bottom-style:solid] border-[#679af7] flex relative">
      <div className="relative w-[84px] mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#b3cdfb] text-[64px] text-center tracking-[0.96px] leading-[96px]">
        06
      </div>

      <div className="flex-col items-start flex-1 grow flex relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-2xl tracking-[0.36px] leading-9">
          정서문화
        </div>

        <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-[#253c7f] text-[8px] tracking-[0.12px] leading-3">
          조직의 정서 문화는 구성원들이 어떤 감정을 표현하고 공유할 수 있는지에
          대한 집단적 규범을 의미합니다. 이는 팀 분위기와 소통 방식에 영향을
          주어 협력과 몰입 수준을 결정짓는 중요한 요인입니다.
        </p>
      </div>
    </div>
  );
};
