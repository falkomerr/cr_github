import { EnterIcon } from './Icons/EnterIcon.tsx';
import { cn } from '../lib/utils.ts';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const linkClassname =
    'font-symtext cursor-pointer underline transition-all duration-300 hover:mb-2 ';

  const { pathname } = useLocation();

  return (
    <div className="flex items-center gap-x-4 text-[1rem] uppercase text-white">
      <EnterIcon />
      <Link
        to="/"
        className={cn(linkClassname, pathname === '/' && 'opacity-45')}>
        about us
      </Link>
      <EnterIcon />
      <Link
        to="/logs"
        className={cn(
          linkClassname,
          pathname.startsWith('/logs') && 'opacity-45',
        )}>
        logs
      </Link>
      <EnterIcon />
      <Link
        to="/contacts"
        className={cn(
          linkClassname,
          pathname.startsWith('/contacts') && 'opacity-45',
        )}>
        contacts
      </Link>
      <EnterIcon />
      <Link
        to="/terminal"
        className={cn(
          linkClassname,
          pathname.startsWith('/terminal') && 'opacity-45',
        )}>
        terminal
      </Link>
    </div>
  );
};
