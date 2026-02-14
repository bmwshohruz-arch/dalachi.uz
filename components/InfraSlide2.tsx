
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Leaf } from 'lucide-react';
import { useMedia } from './MediaContext';

const InfraSlide2: React.FC<{ active: boolean }> = () => {
  const { media } = useMedia();
  
  return (
    <div className="w-full h-full flex bg-white">
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-[30%] h-full bg-green-900 p-12 flex flex-col justify-center text-white z-10"
      >
        <div className="mb-8 p-4 bg-green-800 rounded-2xl w-fit shadow-xl">
          <Sun size={40} className="text-orange-400" />
        </div>
        <h2 className="text-4xl font-black mb-6 leading-tight">Quyosh Energiya Tizimi</h2>
        
        <div className="space-y-8">
          <FeatureItem icon={<Battery size={20} />} text="800+ quyosh paneli o'rnatilgan" />
          <FeatureItem icon={<Leaf size={20} />} text="500 kW quvvat ishlab chiqarish" />
          <FeatureItem icon={<Sun size={20} />} text="Yillik 30% energiya tejash" />
        </div>
      </motion.div>

      <div className="flex-1 relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${media.infraSolar})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent" />
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, text }: { icon: any, text: string }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 text-orange-400">{icon}</div>
    <p className="text-lg font-bold leading-tight">{text}</p>
  </div>
);

export default InfraSlide2;
