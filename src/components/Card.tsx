import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { cn } from '../lib/utils.ts';

export const Card = ({ children }: { children?: React.ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={cn(
        'group/canvas-card relative mx-auto flex h-fit min-h-[100vh] w-screen items-center justify-center bg-black p-4 dark:border-white/[0.2]',
        pathname === '/' && 'min-h-[107vh]',
      )}>
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
