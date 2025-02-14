

import {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

// Типы для хука useEventListener
type EventListener = (event: Event) => void;

function useEventListener(eventName: string, handler: EventListener) {
  const savedHandler = useRef<EventListener | null>(null);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = document && document.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event) => savedHandler.current?.(event);

    document.addEventListener(eventName, eventListener);

    return () => {
      document.removeEventListener(eventName, eventListener);
    };
  }, [eventName]);
}

// Пропсы для компонента Cursor
interface CursorProps {
  color?: string;
  outerAlpha?: number;
  innerSize?: number;
  outerSize?: number;
  outerScale?: number;
  innerScale?: number;
}

function Cursor({
  color = '16, 160, 255',
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}: CursorProps) {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(-1);
  const previousTimeRef = useRef<number>(-1);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback((event: Event) => {
    const { clientY, clientX } = event as MouseEvent;
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = `${clientY}px`;
      cursorInnerRef.current.style.left = `${clientX}px`;
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [coords.x, coords.y],
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnter = useCallback(() => setIsVisible(true), []);
  const onMouseLeave = useCallback(() => setIsVisible(false), []);

  useEventListener('mousemove', onMouseMove);
  useEventListener('mousedown', onMouseDown);
  useEventListener('mouseup', onMouseUp);
  useEventListener('mouseenter', onMouseEnter);
  useEventListener('mouseleave', onMouseLeave);

  useEffect(() => {
    if (isActive) {
      cursorInnerRef.current!.style.transform = `scale(${innerScale})`;
      cursorOuterRef.current!.style.transform = `scale(${outerScale})`;
    } else {
      cursorInnerRef.current!.style.transform = 'scale(1)';
      cursorOuterRef.current!.style.transform = 'scale(1)';
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (isActiveClickable) {
      cursorInnerRef.current!.style.transform = `scale(${innerScale * 1.3})`;
      cursorOuterRef.current!.style.transform = `scale(${outerScale * 1.4})`;
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current!.style.opacity = '1';
      cursorOuterRef.current!.style.opacity = '1';
    } else {
      cursorInnerRef.current!.style.opacity = '0';
      cursorOuterRef.current!.style.opacity = '0';
    }
  }, [isVisible]);

  useEffect(() => {
    const clickables = Array.from(
      document.querySelectorAll<HTMLElement>(
        'a, input[type="submit"], input[type="image"], label[for], select, button, .link',
      ),
    );

    const handleMouseOver = () => setIsActive(true);
    const handleClick = () => {
      setIsActive(true);
      setIsActiveClickable(false);
    };
    const handleMouseDown = () => setIsActiveClickable(true);
    const handleMouseUp = () => setIsActive(true);
    const handleMouseOut = () => {
      setIsActive(false);
      setIsActiveClickable(false);
    };

    clickables.forEach((el) => {
      el.style.cursor = 'none';
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('click', handleClick);
      el.addEventListener('mousedown', handleMouseDown);
      el.addEventListener('mouseup', handleMouseUp);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('click', handleClick);
        el.removeEventListener('mousedown', handleMouseDown);
        el.removeEventListener('mouseup', handleMouseUp);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [isActive]);

  const styles: {
    cursor: CSSProperties;
    cursorInner: CSSProperties;
    cursorOuter: CSSProperties;
  } = {
    cursor: {
      zIndex: 999,
      position: 'fixed',
      opacity: 1,
      pointerEvents: 'none',
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
    },
    cursorInner: {
      position: 'fixed',
      borderRadius: '50%',
      width: innerSize,
      height: innerSize,
      zIndex: 99999,
      pointerEvents: 'none',
      backgroundColor: `rgba(${color}, 1)`,
      transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
    },
    cursorOuter: {
      position: 'fixed',
      borderRadius: '50%',
      pointerEvents: 'none',
      width: outerSize,
      height: outerSize,
      zIndex: 99999,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
    },
  };

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </>
  );
}

export default Cursor;