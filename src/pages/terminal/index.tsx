import { Fragment, useEffect, useState } from 'react';
import { TypingAnimation } from '../../components/typing-animation.tsx';

const text = `* AXAI Framework Ver 1.0ㅤㅤㅤ
* Advanced Analysis Systemㅤ
* Response Protocol Active              
* AXAI Research Division                
*****************************

Usage: xhunter [options]
-s: social links (shows all social platforms)
    ⤷ displays all available community links
-x: x/twitter profile
    ⤷ follow announcements

[SYSTEM] Analyzing input pattern...
[STATUS] Command indexed.
root@axai: ~#`;

const infText = `
root@axai: ~#`;

export default () => {
  const [textState, setText] = useState(text);
  const [visibleColumns, setVisibleColumns] = useState(1);
  const lines = textState.split('\n').map((line, i) => ({
    text: line,
    i: i + 1,
  }));

  useEffect(() => {
    const handleKey = () => {
      if (visibleColumns >= lines.length && visibleColumns < 35) {
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
    <div className="max-w-[24.5rem]">
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
              style={{
                top: 8 + i + 'rem',
              }}
              className="absolute left-10 whitespace-pre-line text-start font-monospace text-[0.875rem] font-bold text-white"
              text={line.text}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};
