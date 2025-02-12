'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from './components/canvas-reveal-effect';
import TextCursorProximity from './components/text-cursor-proximity.tsx';
import { TypingAnimation } from './components/typing-animation.tsx';
import { MagneticButton } from './components/magnetic-button.tsx';
import { CardSpotlight } from './components/card-spotlight.tsx';

const text = `* AXAI Framework Ver 1.0ㅤㅤㅤ
* Advanced Analysis Systemㅤ
* Response Protocol Active              
* AXAI Research Division                
*****************************

Usage: xhunter [options]
-s: social links (shows all social platforms)
    ⤷ displays all available community links
-x: x/twitter profile
    ⤷ follow announcements

[SYSTEM] Analyzing input pattern...
[STATUS] Command indexed.
root@axai: ~#`;

const infText = `
root@axai: ~#`;

export default function App() {
  const [textState, setText] = useState(text);
  const [visibleColumns, setVisibleColumns] = useState(1);
  const lines = textState.split('\n').map((line, i) => ({
    text: line,
    i: i + 1,
  }));

  useEffect(() => {
    const handleKey = () => {
      if (visibleColumns >= lines.length && visibleColumns < 35) {
        setText((text) => text + infText);
      }
      setVisibleColumns((prev) => prev + 1);
    };

    document.addEventListener('keydown', handleKey);
    document.addEventListener('mouseup', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mouseup', handleKey);
    };
  }, [visibleColumns]);
  return (
    <>
      <div className="mx-auto flex w-full max-w-[100vw] flex-col items-center justify-center gap-4 overflow-hidden bg-white dark:bg-black lg:flex-row">
        <Card>
          <Header />
          <CanvasRevealEffect
            showGradient
            animationSpeed={7}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />

          <Text />

          <div className="max-w-[24.5rem]">
            {lines.map((line, i) => (
              <>
                {visibleColumns >= line.i && (
                  <TypingAnimation
                    key={i}
                    showCaret={
                      line.i === lines.length
                        ? visibleColumns >= line.i
                        : visibleColumns === line.i
                    }
                    duration={50}
                    style={{
                      top: 2 + i + 'rem',
                    }}
                    className="absolute left-4 whitespace-pre-line text-start font-monospace text-[0.875rem] font-bold text-white"
                    text={line.text}
                  />
                )}
              </>
            ))}
          </div>

          <Footer />
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
      className="absolute bottom-1/2 left-[52%] right-[60%] top-1/2 flex h-fit w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24"
      ref={containerRef}>
      <div
        className="relative flex w-full cursor-pointer items-center justify-center px-6 py-20 text-white"
        style={{
          backgroundColor: 'transparent',
          minHeight: '250px',
        }}>
        <div className="flex flex-col justify-center pl-6 pt-4 leading-none">
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

          <MagneticButton>
            <button className="mb-[6.25rem] mt-[3.375rem] rounded-xl bg-[#0D99FF] px-10 py-4 font-homespun text-xl text-white transition-colors duration-300 hover:opacity-90">
              Go enter
            </button>
          </MagneticButton>

          <CardSpotlight className="h-fit w-[36.8125rem]">
            <p className="font-homespun text-[1.75rem]">
              It analyzes patterns of aggressive trading, detects moments of
              excess confidence or panic, and signals when volatility is driven
              by human behavior rather than fundamentals.
            </p>
          </CardSpotlight>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const linkClassname =
    'font-symtext cursor-pointer underline transition-all duration-300 hover:mb-2 ';
  return (
    <div className="absolute top-0 z-50 flex w-full justify-between px-20 py-[2rem]">
      <div></div>
      <div className="flex items-center gap-x-4 text-[1.2rem] uppercase text-white">
        <EnterIcon />
        <p className={linkClassname}>about us</p>
        <EnterIcon />
        <p className={linkClassname}>logs</p>
        <EnterIcon />
        <p className={linkClassname}>contacts</p>
      </div>
      <div className="flex cursor-pointer items-center">
        <img src="/logo.svg" alt="logo" width={60} height={60} />
        <p className="font-symtext text-[1.625rem] text-white">XHUNTER</p>
      </div>
    </div>
  );
};

const Footer = () => {
  const linkClassname =
    'font-symtext cursor-pointer underline transition-all duration-300 hover:mb-2 ';
  return (
    <div className="absolute bottom-0 z-50 flex w-full justify-between px-20 py-[1rem]">
      <div className="flex cursor-pointer items-center gap-x-2">
        <img src="/logo.svg" alt="logo" width={48} height={48} />
        <p className="font-symtext text-[1.25rem] text-white">XHUNTER</p>
      </div>
      <div className="flex items-center gap-x-4 text-[1rem] uppercase text-white">
        <EnterIcon />
        <p className={linkClassname}>about us</p>
        <EnterIcon />
        <p className={linkClassname}>logs</p>
        <EnterIcon />
        <p className={linkClassname}>contacts</p>
      </div>
    </div>
  );
};

const EnterIcon = () => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 11H0.5V11.5H1V11ZM15.8536 11.3536C16.0488 11.1583 16.0488 10.8417 15.8536 10.6464L12.6716 7.46447C12.4763 7.2692 12.1597 7.2692 11.9645 7.46447C11.7692 7.65973 11.7692 7.97631 11.9645 8.17157L14.7929 11L11.9645 13.8284C11.7692 14.0237 11.7692 14.3403 11.9645 14.5355C12.1597 14.7308 12.4763 14.7308 12.6716 14.5355L15.8536 11.3536ZM0.5 0V11H1.5V0H0.5ZM1 11.5H15.5V10.5H1V11.5Z"
        fill="white"
      />
    </svg>
  );
};
