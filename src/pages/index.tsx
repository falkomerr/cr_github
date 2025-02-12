'use client';

import { useRef } from 'react';
import TextCursorProximity from '../components/text-cursor-proximity.tsx';
import { MagneticButton } from '../components/magnetic-button.tsx';
import { CardSpotlight } from '../components/card-spotlight.tsx';
import { Console } from '../components/Console.tsx';

const text = `$ agent_status
name: XHUNTER
eliza_runtime: v0.1.9
source: https://xhunterai.com/
Loading...`;

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
      className="absolute bottom-1/2 left-[52%] right-[60%] top-1/2 flex h-fit w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24"
      ref={containerRef}>
      <div
        className="relative flex w-fit cursor-pointer flex-col items-start justify-center px-6 py-20 text-white"
        style={{
          backgroundColor: 'transparent',
          minHeight: '250px',
        }}>
        <div className="ml-4 flex flex-col justify-center pl-6 pt-4 leading-none">
          <div className="flex items-center gap-x-4">
            <p className="max-w-[32.8125rem] font-homespun text-[1.5rem] leading-[2rem]">
              Subscribe to our
            </p>

            <a
              href="https://x.com/xhunterai_?s=21"
              target="_blank"
              className="z-50 cursor-pointer transition-all duration-200 hover:scale-[1.1]">
              <img src="/twitter.svg" alt="twitter" width={48} height={48} />
            </a>
            <p className="max-w-[32.8125rem] font-homespun text-[1.5rem] leading-[2rem]">
              account.
            </p>
          </div>
          <p className="-mt-6 max-w-[32.8125rem] font-homespun text-[1.5rem]">
            <br /> Keep up to date with the latest news!
          </p>

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
          <button className="mb-[6.25rem] mt-[3.375rem] rounded-xl bg-[#0D99FF] px-10 py-4 font-homespun text-xl text-white transition-colors duration-300 hover:opacity-90">
            Go enter
          </button>
        </MagneticButton>

        <CardSpotlight className="ml-8 h-fit w-[36.8125rem]">
          <p className="relative z-[999] font-homespun text-[1.75rem]">
            It analyzes patterns of aggressive trading, detects moments of
            excess confidence or panic, and signals when volatility is driven by
            human behavior rather than fundamentals.
          </p>
        </CardSpotlight>
      </div>
    </div>
  );
};
