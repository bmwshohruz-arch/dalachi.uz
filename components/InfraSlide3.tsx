
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Zap } from 'lucide-react';
import { useMedia } from './MediaContext';

const InfraSlide3: React.FC<{ active: boolean }> = () => {
  const { media } = useMedia();
  
  return (
    <div className="w-full h-full relative overflow-hidden bg-gray-900">
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${media.infraLogistics})` }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent p-10 z-20">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-8 bg-orange-500 rounded-full" />
          <h2 className="text-3xl font-black text-white tracking-tight uppercase">Logistika Operatsiyalari</h2>
        </div>
      </div>

      <InfoCard pos="top-[25%] left-[10%]" icon={<Truck className="text-green-600" />} title="Kunlik 50+ yuk" delay={0.5} />
      <InfoCard pos="top-[45%] left-[40%]" icon={<Zap className="text-orange-600" />} title="Avtomatik yuklash" delay={0.7} />
      <InfoCard pos="bottom-[25%] right-[10%]" icon={<Clock className="text-blue-600" />} title="24/7 Faoliyat" delay={0.9} />
    </div>
  );
};

const InfoCard = ({ pos, icon, title, delay }: any) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.6 }}
    className={`absolute ${pos} p-6 bg-white rounded-3xl shadow-2xl flex items-center gap-4 border-2 border-green-100 z-10 hover:scale-110 transition-transform cursor-default`}
  >
    <div className="p-3 bg-gray-50 rounded-xl">{icon}</div>
    <span className="font-black text-gray-900 text-lg whitespace-nowrap">{title}</span>
  </motion.div>
);

export default InfraSlide3;
