import { Navigation } from './Navigation.tsx';

export const Header = () => {
  return (
    <div className="absolute top-0 z-50 flex w-full justify-between px-20 py-[2rem]">
      <div></div>
      <Navigation />
      <div className="flex cursor-pointer items-center">
        <img src="/logo.svg" alt="logo" width={60} height={60} />
        <p className="font-symtext text-[1.625rem] text-white">XHUNTER</p>
      </div>
    </div>
  );
};
