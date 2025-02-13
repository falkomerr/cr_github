import { useRef } from 'react';
import TextCursorProximity from '../../components/text-cursor-proximity';

export default () => {
  return (
    <>
    <Text/>
    </>
  );
};

const Text = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute bottom-1/2 left-[52%] right-[60%] top-1/2 flex h-fit w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24"
      ref={containerRef}>
      <div
        className="relative flex w-full cursor-pointer items-center justify-center overflow-hidden text-white"
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