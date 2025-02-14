import { Card } from '../components/Card.tsx';
import { Header } from '../components/Header.tsx';
import { Footer } from '../components/Footer.tsx';
import { CanvasRevealEffect } from '../components/canvas-reveal-effect.tsx';
import { useLocation } from 'react-router-dom';

export default ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto flex w-full max-w-[100vw] flex-col items-center justify-center gap-4 overflow-hidden bg-black">
      <Card>
        {pathname !== '/' && (
          <CanvasRevealEffect
            showGradient
            animationSpeed={7}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        )}

        <Header />
        {children}
        <Footer />
      </Card>
    </div>
  );
};
