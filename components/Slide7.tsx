
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck, Search, Zap, ShieldCheck, Check, Info, ChevronRight } from 'lucide-react';
import { ADVANTAGES } from '../constants';

const Slide7: React.FC<{ active: boolean }> = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className="w-full h-full flex flex-col p-12 md:p-24 bg-green-50 overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] flex flex-wrap gap-12 rotate-12 -z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <Check key={i} size={64} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-2">Raqobat Afzalliklari</h2>
        <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-4" />
        <p className="text-green-700 font-medium italic">Har bir ustunlik haqida batafsil ma'lumot olish uchun bosing:</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-8">
        {ADVANTAGES.map((adv, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedIdx(isSelected ? null : idx)}
              className={`p-8 rounded-3xl shadow-xl border-2 transition-all flex flex-col group cursor-pointer relative ${
                isSelected 
                  ? 'bg-white border-green-500 scale-105 z-20' 
                  : 'bg-white border-green-100 hover:border-green-300'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                isSelected ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white'
              }`}>
                {adv.icon}
              </div>
              <h4 className="text-lg font-bold text-green-900 mb-2 leading-tight">{adv.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{adv.desc}</p>
              
              <div className={`absolute top-4 right-4 transition-colors ${isSelected ? 'text-green-500' : 'text-gray-300 group-hover:text-green-400'}`}>
                <Info size={18} />
              </div>

              <div className={`mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 text-green-600 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <Check size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Afsal</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="h-32 relative z-10 mb-8">
        <AnimatePresence mode="wait">
          {selectedIdx !== null ? (
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-6 rounded-3xl border-2 border-green-200 shadow-lg flex items-start gap-5 h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shadow-inner shrink-0">
                {React.cloneElement(ADVANTAGES[selectedIdx].icon as React.ReactElement, { size: 32 })}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="font-bold text-green-900 text-xl tracking-tight">{ADVANTAGES[selectedIdx].title}</h5>
                  <ChevronRight size={20} className="text-green-300" />
                </div>
                <p className="text-green-800 leading-relaxed font-medium">
                  {(ADVANTAGES[selectedIdx] as any).longDesc}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex items-center justify-center border-2 border-dashed border-green-200 rounded-3xl text-green-600/50 italic font-medium bg-white/50 backdrop-blur-sm"
            >
              Ma'lumot ko'rish uchun yuqoridagi afzalliklardan birini tanlang
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-8 bg-green-900 rounded-3xl text-white relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-5xl font-black text-orange-400">90%</div>
            <div className="text-[10px] font-bold text-green-300 uppercase tracking-widest">Samaradorlik</div>
          </div>
          <div className="w-[1px] h-12 bg-white/20 hidden md:block" />
          <div className="max-w-md">
            <p className="text-lg text-green-50 italic font-medium leading-tight">
              "Biz anʼanaviy bozor modelini oʻzgartirib, talab va taklifni raqamli algoritmlar orqali birlashtiramiz."
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
           <div className="text-[10px] font-black text-green-400 uppercase tracking-[0.2em] mb-1">Status</div>
           <div className="flex items-center gap-2 bg-green-800 px-4 py-2 rounded-full border border-green-700">
             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
             <span className="text-xs font-bold">FAOL BOSQICH</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
