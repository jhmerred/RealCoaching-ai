import React from "react";

export const Body = ({ data = {} }) => {
  // 기본값 설정
  const {
    coverage1 = 92,
    coverage2 = 88,
    coverage3 = 95,
    coverage4 = 90,
    coverage5 = 87,
    conversationCount = 15
  } = data;
  return (
    <div className="inline-flex flex-col h-[669px] items-start gap-5 relative">
      <div className="flex w-[555px] items-start gap-[19px] relative flex-[0_0_auto]">
        <div className="flex flex-col w-[243px] items-start gap-1 relative">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
              검사 구성
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#b3cdfb] text-xs text-center tracking-[0.18px] leading-[18px]">
                Part 1
              </div>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px]">
                  심리적 안전감
                </div>

                <div className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  Edmondson 이론 기반
                </div>

                <div className="relative self-stretch [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#679af7] text-[8px] tracking-[-0.12px] leading-3">
                  커버리지: {coverage1}%
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#b3cdfb] text-xs text-center tracking-[0.18px] leading-[18px]">
                Part 2
              </div>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px]">
                  정서상태
                </div>

                <div className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  PANAS 기반 (긍정/부정 정서)
                </div>

                <div className="relative self-stretch [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#679af7] text-[8px] tracking-[-0.12px] leading-3">
                  커버리지: {coverage2}%
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#b3cdfb] text-xs text-center tracking-[0.18px] leading-[18px]">
                Part 3
              </div>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px]">
                  정서문화
                </div>

                <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  Mayer &amp; Salovey 이론 기반
                </p>

                <div className="relative self-stretch [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#679af7] text-[8px] tracking-[-0.12px] leading-3">
                  커버리지: {coverage3}%
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#b3cdfb] text-xs text-center tracking-[0.18px] leading-[18px]">
                Part 4
              </div>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px]">
                  감성지능
                </div>

                <div className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  감정상태별 평가 및 리더십
                </div>

                <div className="relative self-stretch [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#679af7] text-[8px] tracking-[-0.12px] leading-3">
                  커버리지: {coverage4}%
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#b3cdfb] text-xs text-center tracking-[0.18px] leading-[18px]">
                Part 5
              </div>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px]">
                  리더십 감성역량
                </div>

                <div className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  변혁적 리더십 및 조직문화
                </div>

                <div className="relative self-stretch [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#679af7] text-[8px] tracking-[-0.12px] leading-3">
                  커버리지: {coverage5}%
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="relative w-[1.5px] h-[349px]"
          viewBox="0 0 2 349"
          preserveAspectRatio="none"
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.75" y1="0" x2="0.75" y2="349"
            stroke="#679AF7"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="flex flex-col items-start gap-1 relative flex-1 grow">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
              검사 척도 및 진행
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <svg
              className="relative w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2001 10.1999C14.3492 10.3485 14.4676 10.5251 14.5483 10.7196C14.6291 10.9141 14.6706 11.1226 14.6706 11.3332C14.6706 11.5438 14.6291 11.7523 14.5483 11.9468C14.4676 12.1413 14.3492 12.3179 14.2001 12.4665L12.4667 14.1999C12.3181 14.349 12.1414 14.4674 11.947 14.5481C11.7525 14.6289 11.544 14.6705 11.3334 14.6705C11.1228 14.6705 10.9143 14.6289 10.7198 14.5481C10.5253 14.4674 10.3487 14.349 10.2001 14.1999L1.80005 5.79987C1.50042 5.49879 1.33221 5.0913 1.33221 4.66653C1.33221 4.24177 1.50042 3.83428 1.80005 3.5332L3.53338 1.79987C3.83447 1.50024 4.24195 1.33203 4.66672 1.33203C5.09149 1.33203 5.49897 1.50024 5.80005 1.79987L14.2001 10.1999Z"
                stroke="#B3CDFB"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M9.66669 8.33333L11 7" stroke="#B3CDFB" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.66669 6.33333L9.00002 5" stroke="#B3CDFB" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.66669 4.33333L7.00002 3" stroke="#B3CDFB" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.6667 10.3333L13 9" stroke="#B3CDFB" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

              <div className="flex items-center gap-1 relative flex-1 grow">
                <div className="w-fit text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap relative mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold">
                  측정 척도:
                </div>

                <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  AI 기반 빈도 및 강도 측정
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <svg
              className="relative w-4 h-4 text-[#B3CDFB]"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 1.33334H4.00002C3.6464 1.33334 3.30726 1.47382 3.05721 1.72387C2.80716 1.97392 2.66669 2.31305 2.66669 2.66668V13.3333C2.66669 13.687 2.80716 14.0261 3.05721 14.2762C3.30726 14.5262 3.6464 14.6667 4.00002 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3334 13.687 13.3334 13.3333V4.66668L10 1.33334Z"
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.33331 1.33334V4.00001C9.33331 4.35363 9.47379 4.69277 9.72384 4.94282C9.97389 5.19287 10.313 5.33334 10.6666 5.33334H13.3333"
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.66665 6H5.33331"
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.6666 8.66666H5.33331"
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.6666 11.3333H5.33331"
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

              <div className="flex items-center gap-1 relative flex-1 grow">
                <div className="w-fit text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap relative mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold">
                  진행 방식:
                </div>

                <p className="[font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] relative w-fit mt-[-1.00px] whitespace-nowrap">
                  AI 챗봇과의 자연스러운 대화를 통한 심층 평가
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <svg
              className="relative w-4 h-4 text-[#B3CDFB]"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4V8L10.6667 9.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8C1.33334 11.6819 4.31811 14.6667 8 14.6667Z"
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

              <div className="flex items-center gap-1 relative flex-1 grow">
                <div className="w-fit text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap relative mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold">
                  대화 횟수:
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  {conversationCount}회
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[273px] items-center gap-2 p-2.5 relative flex-[0_0_auto] bg-[#f3f6fa] rounded-lg overflow-hidden">
            <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                측정 영역별 세부 요인
              </div>
            </div>

            <div className="flex-col items-start justify-center flex relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.15px] leading-[17.0px] whitespace-nowrap">
                  심리적 안전감:
                </div>
              </div>

              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px] whitespace-nowrap">
                  실수에 대한 개방성, 위험 감수, 상호 존중, 도움 요청
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  정서상태
                </div>
              </div>

              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  긍정 정서, 부정 정서. 감정 균형, 정서적 안정성
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  정서문화
                </div>
              </div>

              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  도움 요청, 문제공유, 역량 인정, 문제 공유
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  감성지능
                </div>
              </div>

              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  자기감정인식, 타인감정인식, 감정활용능력, 감정조절능력
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  리더십 역량
                </div>
              </div>

              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  변화적 리더십, 조직문화 적응, 팀 동기부여, 의사결정 능력
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[555px] items-center gap-1.5 p-2.5 relative flex-[0_0_auto] bg-[#edf6ff] rounded-xl overflow-hidden border border-solid border-[#bfdfff]">
        <div className="items-center gap-1 flex relative self-stretch w-full flex-[0_0_auto]">
        <svg
          className="relative w-4 h-4 text-[#263C7F]"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.00004 5.33335V2.66669H5.33337" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 5.33331H3.99996C3.26358 5.33331 2.66663 5.93027 2.66663 6.66665V12C2.66663 12.7364 3.26358 13.3333 3.99996 13.3333H12C12.7363 13.3333 13.3333 12.7364 13.3333 12V6.66665C13.3333 5.93027 12.7363 5.33331 12 5.33331Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.33337 9.33331H2.66671" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.3334 9.33331H14.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 8.66669V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.66669V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


          <p className="[font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] relative w-fit mt-[-1.00px] whitespace-nowrap">
            AI 챗봇을 통한 대화형 검사:
          </p>

          <p className="relative w-fit mt-[-0.50px] [font-family:'SUIT-Medium',Helvetica] font-medium text-[#253c7f] text-[10px] tracking-[-0.15px] leading-[17.0px] whitespace-nowrap">
            자연스러운 대화를 통해 심리 상태를 측정
          </p>
        </div>

        <div className="flex-col items-start flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                개인 맞춤형 질문 제시
                <br />
                실시간 응답 분석 및 피드백
                <br />
                편안한 대화 환경에서 진행
                <br />
                객관적이고 일관된 평가 기준 적용
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
