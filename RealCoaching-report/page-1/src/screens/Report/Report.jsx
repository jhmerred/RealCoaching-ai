import React, { useEffect, useState } from "react";
import logoFull from "@/assets/RealCoaching_logo_full.png"
import logoIcon from "@/assets/RealCoaching_logo_icon.png"

export const Report = () => {
  const [data, setData] = useState({
    companyName: "기업명",
    position: "직위",
    name: "이름",
    department: "부서",
    testDate: "YYYY-MM-DD",
    reportId: "PS-2025-0115"
  });

  useEffect(() => {
    // window.reportData가 있으면 사용
    if (window.reportData) {
      setData(prev => ({
        ...prev,
        ...window.reportData
      }));
    }

    // 데이터 주입 이벤트 리스너
    const handleDataInjected = (event) => {
      if (event.detail) {
        setData(prev => ({
          ...prev,
          ...event.detail
        }));
      }
    };

    document.addEventListener('dataInjected', handleDataInjected);
    return () => document.removeEventListener('dataInjected', handleDataInjected);
  }, []);
  return (
    <div
      className="flex h-[842px] items-center gap-2.5 relative bg-[#01a2e5] w-full min-w-[595px]"
      data-model-id="223:28147"
    >
      <div className="flex flex-col w-[595px] h-[842px] items-start justify-center gap-[120px] p-5 relative bg-white rounded-[0px_240px_0px_240px] overflow-hidden">
        <header className="flex flex-col w-[555px] items-start gap-[9px] px-0 py-5 relative flex-[0_0_auto] bg-transparent">
          <div className="relative self-stretch mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-4xl tracking-[0.54px] leading-[54px]">
            조직 심리 검사 보고서
          </div>

          <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-[#253c7f] text-xs tracking-[-0.12px] leading-[20.4px]">
            조직 내 심리적 안정감, 정서상태, 감성지능, 팀 안전감 종합 평가 보고
          </p>
        </header>

        <div className="flex flex-col w-[555px] h-[78px] items-start relative bg-[#edf6ff]">
          <div className="flex items-center px-0 py-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#bfdfff]">
            <div className="flex flex-col items-center justify-center px-5 py-0 relative flex-1 grow">
              <div className="relative w-fit mt-[-0.55px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
                기업명: [{data.companyName}]
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5 py-0 relative flex-1 grow">
              <div className="relative w-fit mt-[-0.55px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
                직위: [{data.position}]
              </div>
            </div>
          </div>

          <div className="flex items-center px-0 py-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#bfdfff]">
            <div className="flex flex-col items-center justify-center px-5 py-0 relative flex-1 grow">
              <div className="relative w-fit mt-[-0.55px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
                검사자: [{data.name}/{data.department}]
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5 py-0 relative flex-1 grow">
              <div className="relative w-fit mt-[-0.55px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
                검사일: [{data.testDate}]
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute w-[120px] h-[15px] top-5 left-5 aspect-[7.77] object-cover"
          alt="Realcoaching logo"
          src={logoFull}
        />

        <img
          className="absolute w-16 h-16 top-[733px] left-[511px] aspect-[0.99] object-cover"
          alt="Realcoaching logo"
          src={logoIcon}
        />
      </div>

      <div className="flex w-[555px] items-center justify-between absolute top-[805px] left-5">
        <div className="flex items-center gap-1 relative flex-1 grow">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] tracking-[-0.08px] leading-[13.6px] whitespace-nowrap">
            보고서 ID: {data.reportId}
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-10 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[10px] text-right tracking-[-0.10px] leading-[17.0px]">
            1
          </div>
        </div>
      </div>
    </div>
  );
};
