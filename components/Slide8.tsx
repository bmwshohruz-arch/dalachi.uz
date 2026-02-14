
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Instagram, ArrowRight } from 'lucide-react';

const Slide8: React.FC<{ active: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-600 to-green-900 p-12 md:p-24 text-white relative overflow-hidden">
      {/* Hopeful Background: Sunrise Simulation */}
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[150%] aspect-square bg-orange-400/20 rounded-full blur-[150px] pointer-events-none" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Kelajakni Birgalikda Quramiz!</h1>
        <p className="text-xl md:text-2xl text-green-50 mb-12 font-medium opacity-90">
          Dallachi Market - har bir dehqon va har bir xaridor uchun yangi imkoniyatlar eshigi.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center gap-3 group">
            Investitsiya Imkoniyati
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-green-900 hover:bg-green-50 font-bold rounded-2xl shadow-xl transition-all transform hover:scale-105">
            Hamkorlik Qilish
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-2xl transition-all">
            Bogʻlanish
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/20">
          <ContactItem icon={<Phone />} label="Aloqa" value="+998 95 331 44 49" />
          <ContactItem icon={<Mail />} label="Email" value="info@dallachi.uz" />
          <ContactItem icon={<Globe />} label="Veb-sayt" value="www.dallachi.uz" />
        </div>
      </motion.div>

      <div className="mt-16 text-center z-10">
        <div className="text-green-200 text-sm font-bold uppercase tracking-[0.3em] mb-4">Dehqondan xaridorga - kelajak sari!</div>
        <div className="flex justify-center gap-6">
          <Instagram className="text-white/50 hover:text-white cursor-pointer transition-colors" />
          <div className="w-5 h-5 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer" />
          <div className="w-5 h-5 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex flex-col items-center">
    <div className="text-orange-400 mb-2">{icon}</div>
    <span className="text-[10px] uppercase tracking-widest text-green-200 mb-1 font-bold">{label}</span>
    <span className="font-bold">{value}</span>
  </div>
);

export default Slide8;
