
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, Rocket, Repeat, Store, Globe, CheckCircle2 } from 'lucide-react';

const Slide5: React.FC<{ active: boolean }> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const phases = [
    { 
      phase: "Faza 1", 
      title: "Platforma Ishga Tushishi", 
      time: "Hozir", 
      icon: <Flag size={24} />, 
      items: ["Asosiy platforma", "Buyurtmalar tizimi", "Individual mijozlar"] 
    },
    { 
      phase: "Faza 2", 
      title: "Kengaytirilgan Dostavka", 
      time: "+3 oy", 
      icon: <Rocket size={24} />, 
      items: ["Kuryerlik tarmogʻi", "Eshikkacha yetkazish", "Mobil ilova"] 
    },
    { 
      phase: "Faza 3", 
      title: "Obuna Tizimi", 
      time: "+6 oy", 
      icon: <Repeat size={24} />, 
      items: ["Oylik savatchalar", "Doimiy mijozlar", "Eksklyuziv chegirmalar"] 
    },
    { 
      phase: "Faza 4", 
      title: "B2B Kelishuv", 
      time: "+12 oy", 
      icon: <Store size={24} />, 
      items: ["Restoranlar bilan ish", "Doʻkonlar taʼminoti", "Ulgurji savdo"] 
    },
    { 
      phase: "Faza 5", 
      title: "Eksport", 
      time: "+24 oy", 
      icon: <Globe size={24} />, 
      items: ["Xalqaro bozor", "Markaziy Osiyo", "Sertifikatsiyalash"] 
    },
  ];

  const progressPercentage = (activeIndex / (phases.length - 1)) * 100;

  return (
    <div className="w-full h-full flex flex-col p-12 md:p-24 bg-gray-950 text-white overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-2 text-green-400">Rivojlanish Bosqichlari</h2>
        <p className="text-gray-400 text-lg">Kelajakdagi Agro strategiyamiz (Tanlash uchun bosing)</p>
        <div className="w-20 h-1.5 bg-orange-500 rounded-full mt-4" />
      </motion.div>

      <div className="flex-1 relative flex flex-col justify-center">
        {/* Progress Line Background */}
        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-800 -translate-y-1/2 z-0 rounded-full mx-10" />
        
        {/* Animated Active Progress Line */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `calc(${progressPercentage}% - 80px)` }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="absolute top-1/2 left-10 h-1.5 bg-green-500 -translate-y-1/2 z-0 shadow-[0_0_20px_rgba(34,197,94,0.6)] rounded-full origin-left ml-10"
        />

        <div className="w-full flex justify-between relative z-10 px-10">
          {phases.map((item, idx) => {
            const isCompleted = idx <= activeIndex;
            const isCurrent = idx === activeIndex;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveIndex(idx)}
                className={`flex flex-col items-center group cursor-pointer transition-all duration-300 ${isCurrent ? 'scale-110' : 'hover:scale-105'}`}
              >
                {/* Milestone Node */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 relative ${
                  isCompleted 
                    ? 'bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.4)] border-4 border-green-300/20' 
                    : 'bg-gray-800 border-4 border-gray-700'
                }`}>
                  {isCompleted ? <CheckCircle2 size={28} className="text-white" /> : React.cloneElement(item.icon as React.ReactElement, { size: 24, className: "text-gray-500" })}
                  
                  {isCurrent && (
                    <motion.div 
                      layoutId="outline"
                      className="absolute -inset-2 rounded-full border-2 border-green-400 animate-pulse"
                    />
                  )}
                </div>
                
                <div className="text-center w-32 md:w-48">
                  <span className={`text-[10px] font-bold tracking-widest uppercase mb-1 block transition-colors duration-300 ${isCompleted ? 'text-green-400' : 'text-gray-500'}`}>
                    {item.phase} • {item.time}
                  </span>
                  <h4 className={`text-sm md:text-lg font-bold mb-4 transition-colors duration-300 ${isCompleted ? 'text-white' : 'text-gray-400'}`}>
                    {item.title}
                  </h4>
                  
                  {/* Detailed Items Animation */}
                  <div className="h-24 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {isCurrent && (
                        <motion.ul 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-[11px] text-gray-300 space-y-2 flex flex-col items-center"
                        >
                          {item.items.map((li, i) => (
                            <motion.li 
                              key={i} 
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 whitespace-nowrap"
                            >
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                              {li}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-12 left-12 opacity-10 pointer-events-none">
        <div className="text-8xl font-black text-gray-800 tracking-tighter uppercase select-none">
          Roadmap
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 flex items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
        <span>Bosqichlarni ko'rish uchun bosing</span>
        <div className="w-12 h-1 bg-gray-800 rounded-full overflow-hidden">
           <motion.div 
             animate={{ x: [-50, 50] }} 
             transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
             className="w-1/2 h-full bg-green-500"
           />
        </div>
      </div>
    </div>
  );
};

export default Slide5;
