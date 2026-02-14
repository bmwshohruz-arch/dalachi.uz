
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useMedia } from './MediaContext';

const Slide1: React.FC<{ active: boolean }> = () => {
  const { media, brand } = useMedia();
  
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-[2s]"
        style={{ backgroundImage: `url(${media.slide1Bg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/80 to-green-600/70" />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="z-10 text-center px-6"
      >
        <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-3xl mb-8 shadow-2xl">
          <Logo size="lg" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter drop-shadow-lg">
          {brand.name}
        </h1>
        <p className="text-xl md:text-3xl text-green-50 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
          Kelajak Dehqonchilik Platformasi - Oʻzbekistonning Yangi Agro Bozori
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="h-1 w-24 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(245,124,0,0.5)]" />
          <p className="text-lg md:text-xl text-white/90 italic">
            "Dehqondan xaridorga - toʻgʻridan-toʻgʻri, oson va ishonchli"
          </p>
        </div>
      </motion.div>

      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full"
      />
    </div>
  );
};

export default Slide1;
