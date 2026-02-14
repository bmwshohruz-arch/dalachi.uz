
import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SLIDES_COUNT } from '../constants';

interface NavigationProps {
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onJump: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSlide, onNext, onPrev, onJump }) => {
  return (
    <>
      {/* Navigation Arrows - Fixed to Top/Bottom for vertical feel */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        <button 
          onClick={onPrev}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white transition-all transform hover:scale-110 disabled:opacity-0 disabled:pointer-events-none border border-gray-100`}
        >
          <ChevronUp size={24} className="text-green-800" />
        </button>

        <button 
          onClick={onNext}
          disabled={currentSlide === SLIDES_COUNT - 1}
          className={`p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white transition-all transform hover:scale-110 disabled:opacity-0 disabled:pointer-events-none border border-gray-100`}
        >
          <ChevronDown size={24} className="text-green-800" />
        </button>
      </div>

      {/* Progress Dots - Vertical line on the left */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 bg-black/5 backdrop-blur-md p-2 rounded-full border border-white/20">
        {Array.from({ length: SLIDES_COUNT }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onJump(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx 
                ? 'bg-green-600 scale-125 ring-2 ring-green-200 ring-offset-1' 
                : 'bg-gray-400/50 hover:bg-green-400'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Navigation;
