import { Fragment, useEffect, useRef, useState } from 'react';
import { TypingAnimation } from './typing-animation.tsx';
import { cn } from '../lib/utils.ts';

export const Console = ({
  text,
  canInput,
  infText,
  className,
  bigTopGap,
}: {
  text: string;
  bigTopGap?: boolean;
  infText?: string;
  canInput?: boolean;
  initialTop?: number;
  className?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  const [textState, setText] = useState(text);
  const [visibleColumns, setVisibleColumns] = useState(1);
  const lines = textState.split('\n').map((line, i) => ({
    text: line,
    i: i + 1,
  }));

  useEffect(() => {
    const focusInterval = setInterval(() => {
      if (visibleColumns >= lines.length) {
        inputRef.current?.focus();
      }
    }, 250);

    const handleKey = () => {
      console.log('dwkdkw');
      setVisibleColumns((prev) => prev + 1);
    };

    const handleInputKeydown = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        setInput('');
        setVisibleColumns((prev) => prev + 1);
        setText((prev) => prev + infText);
      }
    };

    document.addEventListener('keydown', handleKey);
    document.addEventListener('mouseup', handleKey);
    inputRef.current?.addEventListener('keydown', handleInputKeydown);

    return () => {
      clearInterval(focusInterval);
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mouseup', handleKey);
      inputRef.current?.removeEventListener('keydown', handleInputKeydown);
    };
  }, [visibleColumns]);

  return (
    <div
      className={cn(
        'absolute left-10 top-8 h-fit w-full max-w-[24.5rem] p-4',
        bigTopGap && 'top-28',
        className,
      )}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {visibleColumns >= line.i && (
            <>
              <TypingAnimation
                showCaret={visibleColumns === line.i}
                duration={visibleColumns >= lines.length ? 0 : 50}
                className="whitespace-pre-line text-start font-monospace text-[0.875rem] font-bold text-white"
                text={line.text}
              />

              {canInput &&
                visibleColumns >= lines.length &&
                line.i === lines.length && (
                  <input
                    ref={inputRef}
                    value={input}
                    className="absolute bottom-[17px] left-[10rem] bg-transparent font-monospace font-bold text-white outline-0"
                    onChange={(e) => setInput(e.target.value)}
                  />
                )}
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
};
