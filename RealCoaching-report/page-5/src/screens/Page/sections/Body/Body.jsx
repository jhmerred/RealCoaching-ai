import React from "react";
import tableChart from "@/assets/table_chart.png"

export const Body = ({ data = {} }) => {
  // 기본값 설정
  const {
    radarValues = [4.0, 4.1, 4.4, 3.8, 1.6],
    keyInsights = []
  } = data;

  const C = { x: 54.4566, y: 54.3478 };
  const AXIS_ENDS = [
    { x: 54.4566, y: 0       },   // 위
    { x: 106.144, y: 37.5533 },   // 우상
    { x: 86.4014, y: 98.3162 },   // 우하
    { x: 22.5118, y: 98.3162 },   // 좌하
    { x: 2.76881, y: 37.5533 }    // 좌상
  ];

  function genRadar(values) {
    const clamp01 = (x) => Math.max(0, Math.min(1, x));
    const M = 5;
  
    const verts = values.map((v, i) => {
      const t = clamp01(v / M);
      const e = AXIS_ENDS[i];
      return {
        x: C.x + (e.x - C.x) * t,
        y: C.y + (e.y - C.y) * t,
        angle: Math.atan2(e.y - C.y, e.x - C.x) * 180 / Math.PI,
        value: v
      };
    });
  
    const clipD =
      `M${verts[0].x} ${verts[0].y}` +
      verts.slice(1).map(p => `L${p.x} ${p.y}`).join("") +
      "Z";

    const barValue = values.map((v, i) => {
      const t = clamp01(v / M);
      const h = Math.round(t * 119)
      return {
        h: h,
        top: 119 - h,
        value: v
      }
    });

    return { verts, clipD, barValue };
  }
  
  const { verts, clipD, barValue } = genRadar(radarValues);
  

  return (
    <div className="inline-flex flex-col h-[669px] items-start gap-5 relative mr-[-1.00px]">
      <div className="flex w-[555px] gap-2.5 items-center relative flex-[0_0_auto]">
        <div className="flex flex-col h-[183px] items-center gap-2 p-2.5 relative flex-1 grow bg-[#f4f7fa] rounded-xl overflow-hidden">
          <div className="flex items-center justify-center px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
              영역별 종합 프로필
            </div>
          </div>

          <div className="flex flex-col gap-0.5 self-stretch w-full items-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[8px] tracking-[-0.12px] leading-[13.6px] whitespace-nowrap">
              심리적 안전감
            </div>

            <svg width="110" height="100" viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                {/* 배경 격자 */}
                <path d="M106.144 37.5534L54.4565 0L2.7686 37.5534L22.5116 98.3161H86.4013L106.144 37.5534Z" fill="white" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M95.8069 40.9123L54.4566 10.8696L13.1064 40.9123L28.9008 89.5225H80.0125L95.8069 40.9123Z" fill="#F6F8FC" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M85.469 44.2712L54.4563 21.7391L23.4436 44.2712L35.2894 80.7288H73.6232L85.469 44.2712Z" fill="white" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M75.1316 47.6301L54.4565 32.6087L33.7814 47.6301L41.6786 71.9352H67.2344L75.1316 47.6301Z" fill="#F6F8FC" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M64.7937 50.989L54.4562 43.4783L44.1186 50.989L48.0672 63.1415H60.8451L64.7937 50.989Z" fill="white" stroke="#CCCCCC" strokeWidth="0.5"/>

                {/* 축선 */}
                <path d="M54.4566 54.3478L54.4566 0" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M54.4566 54.3477L106.144 37.5533" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M54.4566 54.3478L86.4014 98.3162" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M54.4567 54.3478L22.5118 98.3162" stroke="#CCCCCC" strokeWidth="0.5"/>
                <path d="M54.4567 54.3477L2.76881 37.5533" stroke="#CCCCCC" strokeWidth="0.5"/>

                {/* 정점 오버레이 */}
                <g clipPath="url(#clip-data)" style={{ mixBlendMode:'multiply' }} opacity="0.9" filter="url(#soften)">
                  {verts.map((p, i) => (
                    <ellipse
                      key={i}
                      cx={p.x} cy={p.y} rx={46} ry={26}
                      fill={`url(#${p.value < 3.5 ? 'vtx-red' : 'vtx-green'})`}
                      transform={`rotate(${p.angle} ${p.x} ${p.y})`}
                    />
                  ))}
                </g>
              </g>

              <defs>
                {/* 색상별 정점 라디얼 */}
                <radialGradient id="vtx-red" cx="0.5" cy="0.5" r="1.0">
                  <stop offset="0" stopColor="#FFA099" stopOpacity="0.8"/>
                  <stop offset="1" stopColor="#FFA099" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="vtx-green" cx="0.5" cy="0.5" r="1.0">
                  <stop offset="0" stopColor="#A4F18A" stopOpacity="0.8"/>
                  <stop offset="1" stopColor="#A4F18A" stopOpacity="0"/>
                </radialGradient>

                {/* blur 필터 */}
                <filter id="soften" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6"/>
                </filter>

                {/* 데이터 다각형 클리핑 */}
                <clipPath id="clip-data">
                  <path d={clipD}/>
                </clipPath>

                {/* 전체 클리핑 */}
                <clipPath id="clip0">
                  <rect width="108.696" height="100" fill="white" transform="translate(0.652176)"/>
                </clipPath>
              </defs>
            </svg>

            <div className="inline-flex gap-[30px] items-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[8px] tracking-[-0.12px] leading-[13.6px] whitespace-nowrap">
                감성지능
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[8px] tracking-[-0.12px] leading-[13.6px] whitespace-nowrap">
                정서 문화 인식
              </div>
            </div>

            <div className="absolute top-11 left-8 [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[8px] tracking-[-0.12px] leading-[13.6px] whitespace-nowrap">
              리더십 역량
            </div>

            <div className="absolute top-11 left-[183px] [font-family:'SUIT-Medium',Helvetica] font-medium text-gray-500 text-[8px] tracking-[-0.12px] leading-[13.6px] whitespace-nowrap">
              정서 상태
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[273px] items-center gap-2 p-2.5 relative bg-[#f3f6fa] rounded-lg overflow-hidden">
          <div className="relative w-fit mt-[-2.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
            영역별 상세 분석
          </div>

          <div className="relative w-[253px] h-[137px]">
            <div className="relative w-[244px] h-[136px] -top-0.5 left-1">
              <div className="absolute w-[236px] h-[15px] top-[121px] left-[7px]">
                <div className="relative h-4">

                  <div className="absolute w-[236px] h-[15px] top-0 left-0">

                    <div className="absolute w-[45px] h-[15px] top-0 left-[5px]">

                      <div className="absolute top-[5px] left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-center tracking-[0] leading-[normal]">
                        심리 안정감
                      </div>
                    </div>

                    <div className="absolute w-10 h-[15px] top-0 left-[57px]">

                      <div className="absolute top-[5px] left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-center tracking-[0] leading-[normal]">
                        정서 상태
                      </div>
                    </div>

                    <div className="absolute w-[41px] h-[15px] top-0 left-[103px]">

                      <div className="absolute top-[5px] left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-center tracking-[0] leading-[normal]">
                        정서 문화
                      </div>
                    </div>

                    <div className="absolute w-[41px] h-[15px] top-0 left-[150px]">

                      <div className="absolute top-[5px] left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-center tracking-[0] leading-[normal]">
                        감성 지능
                      </div>
                    </div>

                    <div className="absolute w-11 h-[15px] top-0 left-[194px]">

                      <div className="absolute top-[5px] left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-center tracking-[0] leading-[normal]">
                        리더십 역량
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-[7px] h-[126px] top-0 left-0">
                <div className="relative w-2 h-[126px]">

                  <div className="absolute w-[7px] h-[126px] top-0 left-0">
                    <div className="absolute w-[9px] h-[9px] top-[117px] left-0">

                      <div className="absolute w-[3px] top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        0
                      </div>
                    </div>

                    <div className="absolute w-[9px] h-[9px] top-[93px] left-px">

                      <div className="absolute w-0.5 top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        1
                      </div>
                    </div>

                    <div className="absolute w-[9px] h-[9px] top-[69px] left-0">

                      <div className="absolute w-[3px] top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        2
                      </div>
                    </div>

                    <div className="absolute w-[9px] h-[9px] top-[45px] left-0">

                      <div className="absolute w-[3px] top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        3
                      </div>
                    </div>

                    <div className="absolute w-[9px] h-[9px] top-6 left-0">

                      <div className="absolute w-[3px] top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        4
                      </div>
                    </div>

                    <div className="absolute w-[9px] h-[9px] top-0 left-0">

                      <div className="absolute w-[3px] top-0 left-0 [font-family:'SUIT-Medium',Helvetica] font-medium text-black text-[8px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="absolute w-[237px] h-[120px] top-0.5 left-[7px]"
                alt="Group"
                src={tableChart}
              />

              <div className="absolute w-[230px] h-[120px] top-0.5 left-4 overflow-hidden">
                {barValue.map((b, i) => (
                  <div
                    className="absolute w-8 left-[0px]"
                    style={{
                      left: `${Math.round(47.3 * i)}px`,
                      height: b.h,
                      top: b.top,
                      backgroundColor: b.value < 3.5 ? '#ffa099' : '#a4f18a'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[556px] items-start gap-1 flex flex-col relative flex-[0_0_auto]">
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-sm tracking-[0.14px] leading-[21px] whitespace-nowrap">
            핵심 요약
          </div>
        </div>

        <div className="items-start gap-2.5 self-stretch w-full flex flex-col relative flex-[0_0_auto]">
          {keyInsights.length > 0 ? (
            keyInsights.map((insight, index) => (
              <div key={index} className="items-center gap-1 p-2.5 self-stretch w-full bg-[#f3f6fa] rounded-lg overflow-hidden flex flex-col relative flex-[0_0_auto]">
                <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                    {insight.title}
                  </div>
                </div>

                <div className="flex-col items-start flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-normal text-transparent text-[10px] tracking-[-0.15px] leading-[15px]">
                      {insight.content.map((segment, segIndex) => {
                        const colorClass = 
                          segment.color === 'green' ? 'text-[#1fca3e]' :
                          segment.color === 'red' ? 'text-[#f46d64]' :
                          'text-gray-500';
                        
                        const fontClass = segment.color === 'gray' 
                          ? 'font-medium' 
                          : '[font-family:\'SUIT-ExtraBold\',Helvetica] font-extrabold';
                        
                        return (
                          <span key={segIndex} className={`${fontClass} ${colorClass} tracking-[-0.01px]`}>
                            {segment.text}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // 기본 핵심 요약 (데이터가 없을 때)
            <div className="items-center gap-1 p-2.5 self-stretch w-full bg-[#f3f6fa] rounded-lg overflow-hidden flex flex-col relative flex-[0_0_auto]">
              <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#253c7f] text-xs tracking-[-0.12px] leading-[18px] whitespace-nowrap">
                  탁월한 감성지능과 심리적 안전감
                </div>
              </div>

              <div className="flex-col items-start flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'SUIT-Medium',Helvetica] font-normal text-transparent text-[10px] tracking-[-0.15px] leading-[15px]">
                    <span className="font-medium text-gray-500 tracking-[-0.01px]">
                      귀하는 특히{" "}
                    </span>

                    <span className="[font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#1fca3e] tracking-[-0.01px]">
                      감성지능 영역에서 탁월한 능력
                    </span>

                    <span className="font-medium text-gray-500 tracking-[-0.01px]">
                      을 보이고 있으며 , 타인의 감정을 깊이 이해하고 공감하는
                      뛰어난 역량을 갖추고 있습니다 . 또한{" "}
                    </span>

                    <span className="[font-family:'SUIT-ExtraBold',Helvetica] font-extrabold text-[#1fca3e] tracking-[-0.01px]">
                      심리적 안전감 측면에서도 우수한 수준
                    </span>

                    <span className="font-medium text-gray-500 tracking-[-0.01px]">
                      을 유지하고 있어 , 조직내에서 자신의 의견을 자유롭게
                      표현하고 실수에 대한 두려움 없이 업무에 임할 수 있는 건강한
                      환경을 조성하는데 크게 기여하고 있습니다 .
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
