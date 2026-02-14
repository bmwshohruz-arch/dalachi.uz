
import React from 'react';
import { motion } from 'framer-motion';
import { useMedia } from './MediaContext';

const InfraSlide1: React.FC<{ active: boolean }> = () => {
  const { media } = useMedia();
  
  return (
    <div className="w-full h-full bg-black relative overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${media.infraFront})` }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent p-10">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-8 bg-green-500 rounded-full" />
          <h2 className="text-3xl font-black text-white tracking-tight uppercase">Asosiy Bino Ko'rinishi</h2>
        </div>
      </div>

      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-16 left-12 w-96 p-8 bg-black/40 backdrop-blur-xl border-l-4 border-green-500 text-white rounded-r-2xl"
      >
        <h3 className="text-2xl font-bold mb-4">DALLACHI.UZ AGRO HUB</h3>
        <ul className="space-y-3 opacity-90">
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <span className="font-medium text-sm">Umumiy maydon: 15,000 m²</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <span className="font-medium text-sm">3 ta zona: Sovutish, Qadoqlash, Saqlash</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <span className="font-medium text-sm">16 ta zamonaviy yuklash dokki</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default InfraSlide1;
