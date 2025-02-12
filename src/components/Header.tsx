import { Navigation } from './Navigation.tsx';

export const Header = () => {
  return (
    <div className="absolute top-0 z-50 flex w-full items-center justify-between px-20 py-[2rem]">
      <div></div>
      <div></div>
      <div></div>
      <Navigation />
      <div className="flex items-center gap-x-3">
        <LeftArrow />
        <a
          href="https://x.com/xhunterai_?s=21"
          target="_blank"
          className="z-50 cursor-pointer transition-all duration-200 hover:scale-[1.1]">
          <img src="/twitter.svg" alt="twitter" width={35} height={35} />
        </a>
        <RightArrow />
      </div>
      <div className="flex cursor-pointer items-center">
        <img src="/logo.svg" alt="logo" width={60} height={60} />
        <p className="font-symtext text-[1.625rem] text-white">XHUNTER</p>
      </div>
    </div>
  );
};

const LeftArrow = () => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.60156 6.16135V0.958221H7.80469V3.55978H5.20313V11.3645H7.80469V13.966H2.60156V8.76291H0V6.16135H2.60156Z"
      fill="white"
    />
  </svg>
);
const RightArrow = () => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.39844 6.16135V0.958221H0.195312V3.55978H2.79687V11.3645H0.195312V13.966H5.39844V8.76291H8V6.16135H5.39844Z"
      fill="white"
    />
  </svg>
);
