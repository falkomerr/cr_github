import { Navigation } from './Navigation.tsx';

export const Footer = () => {
  return (
    <div className="absolute bottom-0 z-50 flex w-full justify-between px-20 py-[1rem]">
      <div className="flex cursor-pointer items-center gap-x-2">
        <img src="/logo.svg" alt="logo" width={48} height={48} />
        <p className="font-symtext text-[1.25rem] text-white">XHUNTERAi</p>
      </div>
      <Navigation />
    </div>
  );
};
