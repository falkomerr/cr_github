'use client';

import { useRef } from 'react';
import TextCursorProximity from '../components/text-cursor-proximity.tsx';
import { MagneticButton } from '../components/magnetic-button.tsx';
import { Console } from '../components/Console.tsx';
import { CardBody, CardContainer, CardItem } from '../components/3d-card.tsx';
import { SplineScene } from '../components/splite.tsx';

const text = `$ agent_status
name: XHUNTER
eliza_runtime: v0.1.9
source: https://xhunterai.com/
Loading...`;

const cardTexts = [
  'It analyzes patterns of aggressive trading, detects moments of excess confidence or panic, and signals when volatility is driven by human behavior rather than fundamentals.',
  'By observing those who push the market to extremes, XHUNTER provides a deeper layer of insight—one based not on price action alone, but on the psychology of those moving it',
];

export default function Index() {
  return (
    <>
      <Text />
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="absolute right-[23rem] top-[4.7rem] z-[9999] !h-[35rem] !w-[35rem]"
      />
      <svg
        className="absolute right-[23rem] top-[4.7rem] !h-[35rem] !w-[35rem]"
        width="563"
        height="897"
        viewBox="0 0 563 897"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.36" filter="url(#filter0_f_97_102)">
          <ellipse cx="281.5" cy="448.5" rx="107.5" ry="274.5" fill="black" />
        </g>
        <defs>
          <filter
            id="filter0_f_97_102"
            x="0.600006"
            y="0.600006"
            width="561.8"
            height="895.8"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="86.7"
              result="effect1_foregroundBlur_97_102"
            />
          </filter>
        </defs>
      </svg>

      <Console initialTop={2} text={text} />
    </>
  );
}

const Text = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute bottom-1/2 left-[52%] right-[60%] top-[55%] flex h-fit w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24"
      ref={containerRef}>
      <div
        className="relative flex w-fit flex-col items-start justify-center px-6 text-white"
        style={{
          backgroundColor: 'transparent',
          minHeight: '250px',
        }}>
        <div className="ml-4 flex flex-col justify-center pl-6 pt-4 leading-none">
          <div className="flex gap-x-20">
            <TextCursorProximity
              label="x.hunter"
              className="font-symtext text-[7rem] uppercase will-change-transform"
              styles={{
                transform: {
                  from: 'scale(1)',
                  to: 'scale(1.2)',
                },
                color: {
                  from: '#FFFFFF',
                  to: '#0F81BE',
                },
              }}
              falloff="gaussian"
              radius={100}
              containerRef={containerRef}
            />
            <TextCursorProximity
              label="ai"
              className="font-symtext text-[7rem] uppercase will-change-transform"
              styles={{
                transform: {
                  from: 'scale(1)',
                  to: 'scale(1.2)',
                },
                color: {
                  from: '#FFFFFF',
                  to: '#0F81BE',
                },
              }}
              falloff="gaussian"
              radius={100}
              containerRef={containerRef}
            />
          </div>

          <p className="mt-5 max-w-[32.8125rem] font-homespun text-[1.5rem] leading-[2rem]">
            XHUNTER tracks high-risk participants in Solana’s meme coin space.
          </p>
        </div>

        <MagneticButton>
          <button className="mb-[4rem] mt-[3.375rem] rounded-xl bg-[#0D99FF] px-10 py-4 font-homespun text-xl text-white transition-colors duration-300 hover:opacity-90">
            Go enter
          </button>
        </MagneticButton>

        <div className="flex flex-col gap-y-5">
          <div className="ml-8 flex w-[calc(full-2rem)] items-end justify-between">
            <p className="font-symtext text-[1.75rem] leading-8">
              about
              <br /> project
            </p>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.5 1L1 19.5M1 19.5V3.5M1 19.5H17.5"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
          <hr className="ml-8 w-[calc(full-2rem)] bg-white" />
          <div className="mb-20 ml-8 mt-4 flex gap-x-[2.625rem]">
            {cardTexts.map((item, i) => (
              <CardContainer className="inter-var" key={i}>
                <CardBody className="group/card relative flex h-[13.5rem] w-[29.75rem] items-center justify-center rounded-xl border border-[#686E72] bg-gradient-to-b from-[#051420] to-[#03111C] px-[3.375rem] py-[1.875rem] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                  <CardItem
                    translateZ="50"
                    className="relative z-[999] whitespace-break-spaces font-homespun text-[1.2rem]">
                    {item}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
