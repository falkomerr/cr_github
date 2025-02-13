import { Fragment, useEffect, useState } from 'react';
import { TypingAnimation } from './typing-animation.tsx';
import { cn } from '../lib/utils.ts';

export const Console = ({
  text,
  infText,
  initialTop = 8,
  className,
}: {
  text: string;
  infText?: string;
  initialTop?: number;
  className?: string;
}) => {
  const [textState, setText] = useState(text);
  const [visibleColumns, setVisibleColumns] = useState(1);
  const lines = textState.split('\n').map((line, i) => ({
    text: line,
    i: i + 1,
  }));

  useEffect(() => {
    const handleKey = () => {
      if (visibleColumns >= lines.length && visibleColumns < 35 && infText) {
        setText((text) => text + infText);
      }
      setVisibleColumns((prev) => prev + 1);
    };

    document.addEventListener('keydown', handleKey);
    document.addEventListener('mouseup', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mouseup', handleKey);
    };
  }, [visibleColumns]);

  return (
    <div
      className={cn(
        'absolute left-10 top-16 h-fit w-full max-w-[24.5rem] p-4',
        className,
      )}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {visibleColumns >= line.i && (
            <TypingAnimation
              showCaret={
                line.i === lines.length
                  ? visibleColumns >= line.i
                  : visibleColumns === line.i
              }
              duration={50}
              className="whitespace-pre-line text-start font-monospace text-[0.875rem] font-bold text-white"
              text={line.text}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};
