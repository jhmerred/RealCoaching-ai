import React from "react";
import { Body } from "./sections/Body";
import { FooterNavigation } from "./sections/FooterNavigation";

export const Page = () => {
  return (
    <div
      className="flex flex-col h-[842px] items-start gap-5 p-5 relative bg-white"
      data-model-id="220:2"
    >
      <header className="flex h-24 items-center gap-3 relative self-stretch w-full bg-transparent">
        <div className="flex flex-col items-start relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-[32px] tracking-[0.48px] leading-[48px]">
            CONTENTS
          </div>
        </div>
      </header>

      <Body />
      <FooterNavigation />
    </div>
  );
};
