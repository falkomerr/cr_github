'use client';

import { useRef } from 'react';
import TextCursorProximity from '../components/text-cursor-proximity.tsx';
import { MagneticButton } from '../components/magnetic-button.tsx';
import { Console } from '../components/Console.tsx';
import { CardBody, CardContainer, CardItem } from '../components/3d-card.tsx';

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
        className="relative flex w-fit cursor-pointer flex-col items-start justify-center px-6 text-white"
        style={{
          backgroundColor: 'transparent',
          minHeight: '250px',
        }}>
        <div className="ml-4 flex flex-col justify-center pl-6 pt-4 leading-none">
          <TextCursorProximity
            label="x.hunterai"
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

          <p className="max-w-[32.8125rem] font-homespun text-[1.5rem] leading-[2rem]">
            XHUNTER tracks high-risk participants in Solana’s meme coin space.
          </p>
        </div>

        <MagneticButton>
          <button className="mb-[5.25rem] mt-[3.375rem] rounded-xl bg-[#0D99FF] px-10 py-4 font-homespun text-xl text-white transition-colors duration-300 hover:opacity-90">
            Go enter
          </button>
        </MagneticButton>

        <div className="ml-8 flex gap-x-[2.625rem]">
          {cardTexts.map((item, i) => (
            <CardContainer className="inter-var" key={i}>
              <CardBody className="group/card relative h-[16.5rem] w-[32.75rem] rounded-xl border border-[#686E72] bg-gradient-to-b from-[#051420] to-[#03111C] px-[3.375rem] py-[1.875rem] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                <CardItem
                  translateZ="50"
                  className="relative z-[999] font-homespun text-[1.4375rem]">
                  {item}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
