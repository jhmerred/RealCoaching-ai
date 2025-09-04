import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent border-t-[1.5px] [border-top-style:solid] [border-right-style:none] border-b-[1.5px] [border-bottom-style:solid] [border-left-style:none] border-[#679af7]">
      <div className="relative w-[84px] mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#b3cdfb] text-[64px] text-center tracking-[0.96px] leading-[96px]">
        04
      </div>

      <div className="flex flex-col items-start relative flex-1 grow">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-2xl tracking-[0.36px] leading-9">
          심리적 안전감
        </div>

        <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-[#253c7f] text-[8px] tracking-[0.12px] leading-3">
          심리적 안전감은 조직 내에서 자유롭게 의견을 말하고 실수를 드러내더라도
          비난이나 불이익을 두려워하지 않는 상태를 의미합니다. 심리적 <br />
          안전감이 확보될 때 구성원들은 더 창의적으로 사고하고 협력하며, 변화와
          도전에 유연하게 대응할 수 있습니다.
        </p>
      </div>
    </header>
  );
};
