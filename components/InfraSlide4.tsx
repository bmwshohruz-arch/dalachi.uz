
import React from 'react';
import { motion } from 'framer-motion';
import { Train, Globe, Package } from 'lucide-react';
import { useMedia } from './MediaContext';

const InfraSlide4: React.FC<{ active: boolean }> = () => {
  const { media } = useMedia();
  
  return (
    <div className="w-full h-full flex bg-gray-50">
      <div className="flex-1 relative overflow-hidden">
        <motion.div 
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${media.infraRailway})` }}
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[40%] right-[30%] w-40 h-40 border-4 border-red-500 rounded-full"
        />
      </div>

      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-[25%] bg-white p-10 flex flex-col justify-center border-l border-gray-200 z-10"
      >
        <div className="p-4 bg-orange-100 rounded-2xl w-fit mb-6 text-orange-600">
          <Train size={32} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">Temir Yo'l Terminali</h2>
        
        <div className="space-y-6">
          <Item icon={<Package size={18} />} title="Platforma" text="Yuk vagonlari platformasi" />
          <Item icon={<Globe size={18} />} title="Logistika" text="Mamlakat va eksport aloqasi" />
        </div>
      </motion.div>
    </div>
  );
};

const Item = ({ icon, title, text }: any) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-2 text-green-700 font-black text-[10px] uppercase tracking-widest mb-1">
      {icon} {title}
    </div>
    <p className="font-bold text-gray-800">{text}</p>
  </div>
);

export default InfraSlide4;
