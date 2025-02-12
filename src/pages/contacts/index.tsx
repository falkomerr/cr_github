import { useRef, useState } from 'react';
import TextCursorProximity from '../../components/text-cursor-proximity.tsx';
import { Checkbox } from '../../components/checkbox.tsx';
import { Magnetic } from '../../components/magnetic.tsx';
import { toast } from '../../hooks/use-toast.ts';

const SOCIAL_LINKS = [
  {
    label: 'Twitter',
    link: 'https://x.com/xhunterai_?s=21',
  },
  {
    label: 'Telegram',
    link: 'https://x.com/xhunterai_?s=21',
  },
];

export default () => {
  return (
    <>
      <Text />
    </>
  );
};

const Text = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');

  const handleGoClick = () => {
    if (email.length >= 5) {
      toast({
        title: 'Sent!',
      });
    }
  };

  return (
    <div
      className="absolute bottom-1/2 left-[52%] right-[60%] top-[45%] flex h-fit w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24"
      ref={containerRef}>
      <div
        className="relative flex w-fit flex-col items-start justify-center px-6 text-white"
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

          <p className="mt-5 max-w-[32.8125rem] font-homespun text-[1.5rem] leading-[2rem]">
            Subscribe and keep up to <br /> date with the latest news!
          </p>
          <div className="mt-5 flex items-center">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="rounded-bl-xl rounded-tl-xl border-2 border-r-0 border-[#0D99FF] bg-[#0D99FF]/25 px-6 py-4 font-homespun text-[1.75rem] text-white outline-0 placeholder:opacity-25"
            />
            <button
              onClick={handleGoClick}
              className="h-[4rem] rounded-br-xl rounded-tr-xl bg-[#0D99FF] px-6 py-4 font-homespun text-[1.75rem] text-white">
              GO
            </button>
          </div>

          <div className="mt-5 flex items-start gap-x-4">
            <Checkbox
              id="terms"
              className="size-[1.375rem] rounded-md border-2 border-[#0D99FF] bg-[#0D99FF]/25"
            />
            <label
              htmlFor="terms"
              className="max-w-[20.375rem] font-homespun text-[1.1rem]">
              By clicking the "Go" button, you accept the terms of the User
              Agreement.
            </label>
          </div>
          <div className="mt-12 flex items-center justify-start space-x-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-3 py-1.5 text-base text-sm text-black transition-colors duration-300 hover:bg-[#0D99FF] hover:text-zinc-50">
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3">
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"></path>
        </svg>
      </a>
    </Magnetic>
  );
}
