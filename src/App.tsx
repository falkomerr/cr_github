'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from './components/canvas-reveal-effect';
import TextCursorProximity from './components/text-cursor-proximity.tsx';
import { TypingAnimation } from './components/typing-animation.tsx';

export default function App() {
  const [visibleColumns, setVisibleColumns] = useState(1);


  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setVisibleColumns((prev) => prev + 1);
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => document.removeEventListener('keydown', handleKey);
  }, []);
  return (
    <>
      <div className="mx-auto flex w-full max-w-[100vw] flex-col items-center justify-center gap-4 overflow-hidden bg-white dark:bg-black lg:flex-row">
        <Card>
          <CanvasRevealEffect
            showGradient
            animationSpeed={7}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />

          <Text />

          {visibleColumns >= 1 && (
            <TypingAnimation
              duration={50}
              className=
              text="$ agent_status
                  "
            />
          )}

          {visibleColumns >= 2 && (
            <TypingAnimation
              duration={50}
              className="absolute left-4 font-monospace top-8 max-w-[22.5rem] whitespace-pre-line text-start text-[0.875rem] font-bold text-white"
              text="        name: AXAI

                  "
            />
          )}

          {visibleColumns >= 3 && (
            <TypingAnimation
              duration={50}
              className="absolute left-4 font-monospace top-12 max-w-[22.5rem] whitespace-pre-line text-start text-[0.875rem] font-bold text-white"
              text="        eliza_runtime: v0.1.9

                  "
            />
          )}

          {visibleColumns >= 4 && (
            <TypingAnimation
              duration={50}
              className="absolute left-4 font-monospace top-16 max-w-[22.5rem] whitespace-pre-line text-start text-[0.875rem] font-bold text-white"
              text="        source: github.com/elizaOS/eliza

                  "
            />
          )}
          {visibleColumns >= 5 && (
            <TypingAnimation
              duration={50}
              className="absolute left-4 font-monospace top-[5.1rem] max-w-[22.5rem] whitespace-pre-line text-start text-[0.875rem] font-bold leading-[0.9rem] text-white"
              text="
        contract_address: 6VtLk3Q7d9cDQ9RxJaMU7aa7GW6NZQpnBiUbve4Ypump

                  "
            />
          )}
        </Card>
      </div>
    </>
  );
}

const Card = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="group/canvas-card relative mx-auto flex h-screen w-screen items-center justify-center bg-black p-4 dark:border-white/[0.2]">
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 h-full w-full">
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const Text = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute bottom-1/2 top-1/2 flex h-fit w-full -translate-y-1/2 flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24"
      ref={containerRef}>
      <div
        className="relative flex w-full cursor-pointer items-center justify-center overflow-hidden text-white"
        style={{
          backgroundColor: 'transparent',
          minHeight: '250px',
        }}>
        <div className="flex flex-col justify-center pl-6 pt-4 leading-none">
          <div className="flex items-center gap-x-4">
            <p className="font-homespun max-w-[32.8125rem] text-[1.5rem] leading-[2rem]">
              Subscribe to our
            </p>

            <a
              href="https://x.com/xhunterai_?s=21"
              target="_blank"
              className="z-50 cursor-pointer transition-all duration-200 hover:scale-[1.1]">
              <img src="/twitter.svg" alt="twitter" width={48} height={48} />
            </a>
            <p className="font-homespun max-w-[32.8125rem] text-[1.5rem] leading-[2rem]">
              account.
            </p>
          </div>
          <p className="font-homespun -mt-6 max-w-[32.8125rem] text-[1.5rem]">
            <br /> Keep up to date with the latest news!
          </p>

          <TextCursorProximity
            label="COMING"
            className="font-symtext text-[10rem] uppercase will-change-transform"
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
            label="SOON"
            className="font-symtext text-[10rem] uppercase leading-none will-change-transform"
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
      </div>
    </div>
  );
};
