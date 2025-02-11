'use client';

import { useEffect, useState } from 'react';

import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  showCaret: boolean;
}

export function TypingAnimation({
  text,
  duration = 200,
  className,
  showCaret,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <h1
      className={cn(
        'font-display flex flex-wrap items-center gap-x-0.5 text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm',
        className,
      )}>
      {displayedText}
      {showCaret && (
        <motion.div
          className="h-4 w-[4px] bg-[#3187C0]"
          animate={{
            opacity: [1, 1, 0, 0],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.5, 0.5, 1],
          }}
        />
      )}
    </h1>
  );
}
