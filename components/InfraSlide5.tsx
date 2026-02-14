
import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, Building2, TrendingUp, Users } from 'lucide-react';
import { useMedia } from './MediaContext';

const InfraSlide5: React.FC<{ active: boolean }> = () => {
  const { media } = useMedia();
  
  return (
    <div className="w-full h-full bg-black relative flex flex-col">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/70 to-transparent p-10 z-20">
        <h2 className="text-3xl font-black text-white text-center uppercase tracking-widest">Kengaytirilgan Infratuzilma Masshtabi</h2>
      </div>

      <motion.div 
        initial={{ scale: 1.05 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${media.infraScale})` }}
      />

      <div className="h-32 bg-green-900 flex items-center justify-around px-20">
        <Stat icon={<Building2 />} val="20+" label="Yuk Mashinasi" />
        <Stat icon={<Boxes />} val="5000+" label="Tonna Sig'im" />
        <Stat icon={<TrendingUp />} val="3" label="Ta'lim Zonasi" />
        <Stat icon={<Users />} val="50+" label="Xodimlar" />
      </div>
    </div>
  );
};

const Stat = ({ icon, val, label }: any) => (
  <div className="flex flex-col items-center text-white">
    <div className="text-orange-400 mb-1">{icon}</div>
    <div className="text-3xl font-black leading-none">{val}</div>
    <div className="text-[10px] font-bold text-green-300 uppercase tracking-widest mt-1">{label}</div>
  </div>
);

export default InfraSlide5;
