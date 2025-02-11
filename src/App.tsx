'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from './components/canvas-reveal-effect';

export default function App() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 bg-white dark:bg-black lg:flex-row">
        <Card>
          <CanvasRevealEffect
            animationSpeed={7}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
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
