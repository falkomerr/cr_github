import { SplineScene } from './splite.tsx';
import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import { cn } from '../lib/utils.ts';

export const Loader = () => {
  return (
    <>
      <div
        className={cn(
          'absolute inset-0 z-[999] flex items-start justify-start bg-black p-20',
        )}>
        <SplineScene
          scene="https://prod.spline.design/s9Q5foF5UUkNQnNv/scene.splinecode"
          className="absolute inset-0 h-full w-full"
        />
        <Counter from={0} to={100} />
      </div>
    </>
  );
};

function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 3,
      onUpdate(value) {
        if (!node) return;
        node.textContent = value.toFixed(0) + '%';
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <p
      ref={nodeRef}
      className="z-[999] w-fit font-symtext text-7xl text-white"
    />
  );
}
