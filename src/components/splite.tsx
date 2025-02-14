import { lazy, Suspense } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="absolute inset-0 flex h-full w-full items-center justify-center">
          <span className="loader"></span>
        </div>
      }>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
