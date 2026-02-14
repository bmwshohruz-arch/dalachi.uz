
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import SettingsOverlay from './components/SettingsOverlay';
import { MediaProvider, useMedia } from './components/MediaContext';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/InfraSlide1';
import Slide6 from './components/InfraSlide2';
import Slide7 from './components/InfraSlide3';
import Slide9 from './components/InfraSlide5';
import Slide10 from './components/InfraSlide6';
import Slide11 from './components/Slide5';
import Slide12 from './components/Slide6';
import Slide13 from './components/Slide7';
import ExportMapSlide from './components/ExportMapSlide';
import SocialImpactSlide from './components/SocialImpactSlide';
import FinancialOverviewSlide from './components/FinancialOverviewSlide';
import Slide14 from './components/Slide8';

const SlideRenderer: React.FC<{ currentSlide: number }> = ({ currentSlide }) => {
  switch (currentSlide) {
    case 0: return <Slide1 active />;
    case 1: return <Slide2 active />;
    case 2: return <Slide3 active />;
    case 3: return <Slide4 active />;
    case 4: return <Slide5 active />;
    case 5: return <Slide6 active />;
    case 6: return <Slide7 active />;
    case 7: return <Slide9 active />;
    case 8: return <Slide10 active />;
    case 9: return <Slide11 active />;
    case 10: return <Slide12 active />;
    case 11: return <Slide13 active />;
    case 12: return <SocialImpactSlide active={true} />;
    case 13: return <ExportMapSlide active />;
    case 14: return <FinancialOverviewSlide active={true} />;
    case 15: return <Slide14 active />;
    default: return null;
  }
};

const MainApp: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 16; 
  const { brand } = useMedia();
  const lastScrollTime = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    const now = Date.now();
    // Prevent multiple jumps within 1 second
    if (now - lastScrollTime.current < 1000) return;

    if (e.deltaY > 50) {
      nextSlide();
      lastScrollTime.current = now;
    } else if (e.deltaY < -50) {
      prevSlide();
      lastScrollTime.current = now;
    }
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: true });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [nextSlide, prevSlide, handleWheel]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#F5F5F5]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <SlideRenderer currentSlide={currentSlide} />
          
          <div className="absolute bottom-6 right-10 text-[10px] font-bold text-gray-400 uppercase tracking-widest z-50 pointer-events-none">
            {brand.name} - Taqdimot • {currentSlide + 1} / {totalSlides}
          </div>
        </motion.div>
      </AnimatePresence>

      <Navigation 
        currentSlide={currentSlide} 
        onNext={nextSlide} 
        onPrev={prevSlide}
        onJump={(idx) => setCurrentSlide(idx)}
      />

      <div className="fixed top-6 right-6 z-50 flex items-center gap-3 pointer-events-none">
        <Logo size="sm" />
        <span className="font-bold text-lg text-green-900 tracking-tight">{brand.name}</span>
      </div>

      <SettingsOverlay />
    </div>
  );
};

const App: React.FC = () => (
  <MediaProvider>
    <MainApp />
  </MediaProvider>
);

export default App;
