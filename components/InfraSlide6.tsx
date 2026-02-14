
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useMedia } from './MediaContext';

const InfraSlide6: React.FC<{ active: boolean }> = () => {
  const { media, brand } = useMedia();
  
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center p-24 overflow-hidden relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 transition-all" 
        style={{ backgroundImage: `url(${media.infraBrand})` }}
      />
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="z-10 text-center"
      >
        <span className="text-green-600 font-black uppercase tracking-[0.4em] mb-4 block">Brend Identifikatsiyasi</span>
        
        <div className="relative mb-12">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mx-auto flex justify-center rotate-12"
          >
            <Logo size="lg" className="-rotate-12" />
          </motion.div>
        </div>

        <h2 className="text-6xl font-black text-gray-900 mb-6 tracking-tighter uppercase">{brand.name}</h2>
        <p className="text-2xl text-gray-500 font-medium mb-16 max-w-2xl mx-auto">
          O'zbekistonning ishonchli agrar hamkori va yangi avlod logistika markazi
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <div className="px-10 py-4 bg-green-100 rounded-full border-2 border-green-600">
             <span className="text-green-900 font-black text-xl tracking-widest uppercase">2025 YILDA ISHGA TUSHISH</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InfraSlide6;
