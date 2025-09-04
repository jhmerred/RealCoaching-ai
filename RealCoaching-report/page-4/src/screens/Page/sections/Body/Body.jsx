import React from "react";

export const Body = () => {
  return (
    <div className="inline-flex flex-col h-[669px] items-start gap-5 relative">
      <div className="flex w-[555px] items-start gap-2.5 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-1 relative flex-1 grow">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
              검사 목적
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <svg
                className="relative w-5 h-5 aspect-[1]"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#B3CDFB" />
                <path
                  d="M9.49999 9.13487L7.5 5.66989"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.49999 10.8649L7.5 14.3298"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14.9999V13.9999"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.00003V6.00002"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.0001 10H15"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4999 14.3299L11.9999 13.4649"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4999 5.66989L11.9999 6.53489"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.00006 10H6.00005"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.33 12.5001L13.465 12.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.33 7.5L13.465 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.67004 12.5001L6.53504 12.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.67004 7.5L6.53504 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.99993 10.9999C10.5522 10.9999 10.9999 10.5522 10.9999 9.99993C10.9999 9.44765 10.5522 8.99994 9.99993 8.99994C9.44765 8.99994 8.99994 9.44765 8.99994 9.99993C8.99994 10.5522 9.44765 10.9999 9.99993 10.9999Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0001 14C12.2092 14 14.0001 12.2092 14.0001 10C14.0001 7.79091 12.2092 6.00006 10.0001 6.00006C7.79097 6.00006 6.00012 7.79091 6.00012 10C6.00012 12.2092 7.79097 14 10.0001 14Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
                  조직 구성원 심리 진단
                </div>

                <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  개인 및 팀 수준의 심리적 상태 객관적 평가
                </p>
              </div>
            </div>

            <div className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <svg
                className="relative w-5 h-5 aspect-[1]"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#B3CDFB" />
                <path
                  d="M14.5 11.6001C14.5 11.8123 14.4157 12.0157 14.2657 12.1658C14.1157 12.3158 13.9122 12.4001 13.7 12.4001H8.4312C8.21904 12.4001 8.01559 12.4845 7.8656 12.6345L6.9848 13.5153C6.94508 13.555 6.89448 13.582 6.8394 13.593C6.78431 13.604 6.72721 13.5983 6.67532 13.5768C6.62343 13.5553 6.57908 13.519 6.54787 13.4723C6.51667 13.4256 6.50001 13.3707 6.5 13.3145V6.80009C6.5 6.58792 6.58429 6.38444 6.73431 6.23441C6.88434 6.08438 7.08783 6.00009 7.3 6.00009H13.7C13.9122 6.00009 14.1157 6.08438 14.2657 6.23441C14.4157 6.38444 14.5 6.58792 14.5 6.80009V11.6001Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
                  조직 문화 잠재 이슈 발견
                </p>

                <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  심리적 안전감과 정서 상태를 통한 조직 문제점 조기 식별
                </p>
              </div>
            </div>

            <div className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <svg
                className="relative w-5 h-5 aspect-[1]"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#B3CDFB" />
                <path
                  d="M10.5 10C11.8807 10 13 8.88071 13 7.5C13 6.11929 11.8807 5 10.5 5C9.11929 5 8 6.11929 8 7.5C8 8.88071 9.11929 10 10.5 10Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 14C14.5 12.9391 14.0786 11.9217 13.3284 11.1716C12.5783 10.4214 11.5609 10 10.5 10C9.43913 10 8.42172 10.4214 7.67157 11.1716C6.92143 11.9217 6.5 12.9391 6.5 14"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
                  조직 효율성 향상 기반 마련
                </p>

                <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  팀 심리역학 이해를 통한 생산성 및 혁신 잠재력 증대
                </p>
              </div>
            </div>

            <div className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <svg
                className="relative w-5 h-5 aspect-[1]"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#B3CDFB" />
                <path
                  d="M9.49999 9.13487L7.5 5.66989"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.49999 10.8649L7.5 14.3298"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14.9999V13.9999"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.00003V6.00002"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.0001 10H15"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4999 14.3299L11.9999 13.4649"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4999 5.66989L11.9999 6.53489"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.00006 10H6.00005"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.33 12.5001L13.465 12.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.33 7.5L13.465 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.67004 12.5001L6.53504 12.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.67004 7.5L6.53504 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.99993 10.9999C10.5522 10.9999 10.9999 10.5522 10.9999 9.99993C10.9999 9.44765 10.5522 8.99994 9.99993 8.99994C9.44765 8.99994 8.99994 9.44765 8.99994 9.99993C8.99994 10.5522 9.44765 10.9999 9.99993 10.9999Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0001 14C12.2092 14 14.0001 12.2092 14.0001 10C14.0001 7.79091 12.2092 6.00006 10.0001 6.00006C7.79097 6.00006 6.00012 7.79091 6.00012 10C6.00012 12.2092 7.79097 14 10.0001 14Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
                  리더십 진단 및 개발
                </div>

                <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  팀장의 감정 리더십 역량 측정 및 개발 방향 제시
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 relative flex-1 grow">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
              활용 방안
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <svg
                className="relative w-5 h-5 aspect-[1]"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="20" height="20" rx="10" fill="#B3CDFB" />
                <path
                  d="M10 9.13487L8.00003 5.66989"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.8649L8.00003 14.3298"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 14.9999V13.9999"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 5.00003V6.00002"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5001 10H15.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 14.3299L12.5 13.4649"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 5.66989L12.5 6.53489"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.50003 10H6.50002"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.83 12.5001L13.965 12.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.83 7.5L13.965 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.17004 12.5001L7.03504 12.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.17004 7.5L7.03504 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 10.9999C11.0522 10.9999 11.5 10.5522 11.5 9.99993C11.5 9.44765 11.0522 8.99994 10.5 8.99994C9.94768 8.99994 9.49997 9.44765 9.49997 9.99993C9.49997 10.5522 9.94768 10.9999 10.5 10.9999Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5001 14C12.7092 14 14.5 12.2092 14.5 10C14.5 7.79091 12.7092 6.00006 10.5001 6.00006C8.29094 6.00006 6.50009 7.79091 6.50009 10C6.50009 12.2092 8.29094 14 10.5001 14Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
                  조직 개발 프로그램 설계
                </div>

                <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  심리적 안전감 향상 워크숍, 감성지능 강화 교육 등 맞춤형 <br />
                  프로그램 개발
                </p>
              </div>
            </div>

            <div className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <svg
                className="relative w-5 h-5 aspect-[1]"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="20" height="20" rx="10" fill="#B3CDFB" />
                <path
                  d="M15 11.6001C15 11.8123 14.9157 12.0157 14.7657 12.1658C14.6157 12.3158 14.4122 12.4001 14.2 12.4001H8.9312C8.71904 12.4001 8.51559 12.4845 8.3656 12.6345L7.4848 13.5153C7.44508 13.555 7.39448 13.582 7.3394 13.593C7.28431 13.604 7.22721 13.5983 7.17532 13.5768C7.12343 13.5553 7.07908 13.519 7.04787 13.4723C7.01667 13.4256 7.00001 13.3707 7 13.3145V6.80009C7 6.58792 7.08429 6.38444 7.23431 6.23441C7.38434 6.08438 7.58783 6.00009 7.8 6.00009H14.2C14.4122 6.00009 14.6157 6.08438 14.7657 6.23441C14.9157 6.38444 15 6.58792 15 6.80009V11.6001Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
                  커뮤니케이션 개선
                </div>

                <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  조직 내 소통패턴 진단 및 효과적인 피드백 문화 구축
                </p>
              </div>
            </div>

            <div className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <svg
                className="relative w-5 h-5 aspect-[1]"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="20" height="20" rx="10" fill="#B3CDFB" />
                <path
                  d="M11 10C12.3807 10 13.5 8.88071 13.5 7.5C13.5 6.11929 12.3807 5 11 5C9.61929 5 8.5 6.11929 8.5 7.5C8.5 8.88071 9.61929 10 11 10Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 14C15 12.9391 14.5786 11.9217 13.8284 11.1716C13.0783 10.4214 12.0609 10 11 10C9.93913 10 8.92172 10.4214 8.17157 11.1716C7.42143 11.9217 7 12.9391 7 14"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
                  리더십 코칭 기반 자료
                </div>

                <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  팀장 및 관리자 대상 맞춤형 코칭 개발 계획 수립
                </p>
              </div>
            </div>

            <div className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <svg
                className="relative w-5 h-5 aspect-[1]"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="20" height="20" rx="10" fill="#B3CDFB" />
                <path
                  d="M10 9.13487L8.00003 5.66989"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.8649L8.00003 14.3298"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 14.9999V13.9999"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 5.00003V6.00002"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5001 10H15.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 14.3299L12.5 13.4649"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 5.66989L12.5 6.53489"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.50003 10H6.50002"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.83 12.5001L13.965 12.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.83 7.5L13.965 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.17004 12.5001L7.03504 12.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.17004 7.5L7.03504 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 10.9999C11.0522 10.9999 11.5 10.5522 11.5 9.99993C11.5 9.44765 11.0522 8.99994 10.5 8.99994C9.94768 8.99994 9.49997 9.44765 9.49997 9.99993C9.49997 10.5522 9.94768 10.9999 10.5 10.9999Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5001 14C12.7092 14 14.5 12.2092 14.5 10C14.5 7.79091 12.7092 6.00006 10.5001 6.00006C8.29094 6.00006 6.50009 7.79091 6.50009 10C6.50009 12.2092 8.29094 14 10.5001 14Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col items-start justify-center relative flex-1 grow">
                <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
                  팀 구성 및 프로젝트 설계
                </p>

                <p className="relative self-stretch [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px]">
                  심리적 특성을 고려한 효과적인 팀 구성 및 업무 배분
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#f3f6fa] rounded-lg overflow-hidden">
        <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
            활용 단계별 프로세스
          </div>
        </div>

        <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-4 h-4 items-center justify-center gap-2.5 relative bg-[#b3cdfb] rounded-[100px] overflow-hidden aspect-[1]">
            <div className="relative self-stretch mt-[-0.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-white text-[10px] text-center tracking-[-0.10px] leading-[15px]">
              1
            </div>
          </div>

          <div className="flex items-center gap-1 relative flex-1 grow">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
              진단:
            </div>

            <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
              검사 실시 및 결과 분석
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-4 h-4 items-center justify-center gap-2.5 relative bg-[#b3cdfb] rounded-[100px] overflow-hidden aspect-[1]">
            <div className="relative self-stretch mt-[-0.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-white text-[10px] text-center tracking-[-0.10px] leading-[15px]">
              2
            </div>
          </div>

          <div className="flex items-center gap-1 relative flex-1 grow">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
              설계:
            </div>

            <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
              조직 맞춤형 개입 전략 수립
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-4 h-4 items-center justify-center gap-2.5 relative bg-[#b3cdfb] rounded-[100px] overflow-hidden aspect-[1]">
            <div className="relative self-stretch mt-[-0.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-white text-[10px] text-center tracking-[-0.10px] leading-[15px]">
              3
            </div>
          </div>

          <div className="flex items-center gap-1 relative flex-1 grow">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
              실행:
            </div>

            <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
              워크숍, 교육, 코칭 등 프로그램 진행
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-4 h-4 items-center justify-center gap-2.5 relative bg-[#b3cdfb] rounded-[100px] overflow-hidden aspect-[1]">
            <div className="relative self-stretch mt-[-0.50px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-white text-[10px] text-center tracking-[-0.10px] leading-[15px]">
              4
            </div>
          </div>

          <div className="flex items-center gap-1 relative flex-1 grow">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-black text-[10px] tracking-[-0.10px] leading-[15px] whitespace-nowrap">
              모니터링:
            </div>

            <p className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
              추적 검사 및 효과성 평가
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#f3f6fa] rounded-lg overflow-hidden">
        <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
            기대 효과
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
            팀 내 심리적 안전감 향상으로 창의성과 혁신 증대
            <br />
            조직원 감정 인식과 관리 역량 강화로 갈등 감소
            <br />
            긍정적 정서 경험 확대로 직무 만족도 및 생산성 향상
            <br />
            리더 감성 역량 강화로 효과적인 팀 관리 실현
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[555px] items-center gap-1.5 p-2.5 relative flex-[0_0_auto] bg-[#edf6ff] rounded-xl overflow-hidden border border-solid border-[#bfdfff]">
        <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
            검사의 차별점
          </div>
        </div>

        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[10px] tracking-[-0.15px] leading-[17.0px]">
                개인감정-집단역학-리더십 간 상호작용 통합 분석
                <br />
                조직 맥락에 특화된 심리적 안전감 측정
                <br />
                현재/예상/이상적 상태 간 차이 분석으로 개선 방향 제시
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
