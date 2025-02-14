import { Navigation } from './Navigation.tsx';

export const Header = () => {
  return (
    <div className="absolute top-0 z-50 flex w-full items-center justify-between px-20 py-[2rem]">
      <div></div>
      <div></div>
      <div></div>
      <Navigation />
      <div className="flex gap-x-5">
        <div className="flex items-center gap-x-3">
          <LeftArrow />
          <a
            href="https://x.com/xhunterai"
            target="_blank"
            className="z-50 cursor-pointer transition-all duration-200 hover:scale-[1.1]">
            <img src="/twitter.svg" alt="twitter" width={35} height={35} />
          </a>
          <RightArrow />
        </div>
        <div className="flex items-center gap-x-3">
          <LeftArrow />
          <a
            href="https://t.me/xhunteragent"
            target="_blank"
            className="z-50 cursor-pointer transition-all duration-200 hover:scale-[1.1]">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="17.364"
                cy="17.355"
                r="17.3319"
                transform="rotate(-0.0764679 17.364 17.355)"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.2495 7.98357C25.4733 7.46824 26.7854 8.50316 26.5693 9.81344L24.0168 25.2897C23.7707 26.7819 22.1318 27.6382 20.7627 26.8945C19.6172 26.2723 17.9175 25.3146 16.3857 24.3137C15.6208 23.8139 13.2787 22.2112 13.5666 21.0703C13.8127 20.0948 17.7501 16.4297 20.0001 14.25C20.8839 13.3938 20.4814 12.8992 19.4376 13.6875C16.8483 15.6431 12.6912 18.6164 11.3165 19.4531C10.1036 20.1914 9.47034 20.3174 8.71496 20.1914C7.33557 19.9615 6.0567 19.6056 5.01261 19.1728C3.60144 18.5878 3.67018 16.6485 5.01165 16.0838L24.2495 7.98357Z"
                fill="#0F81BE"
              />
            </svg>
          </a>
          <RightArrow />
        </div>
      </div>

      <div className="flex cursor-pointer items-center">
        <img src="/logo.svg" alt="logo" width={60} height={60} />
        <p className="font-symtext text-[1.625rem] text-white">XHUNTERAi</p>
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
