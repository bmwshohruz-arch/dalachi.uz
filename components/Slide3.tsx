
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ClipboardList, Database, CheckCircle2, Truck, ShoppingBag, ArrowRight, Info, ChevronRight } from 'lucide-react';

const Slide3: React.FC<{ active: boolean }> = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const steps = [
    { 
      icon: <Users />, 
      label: "Xaridor", 
      desc: "Mahsulot qidiradi",
      detail: "Mijoz platformaga kiradi va o'zi yashaydigan hududda yoki yaqin atrofda mavjud bo'lgan agro mahsulotlarni qidirib topadi."
    },
    { 
      icon: <ClipboardList />, 
      label: "Zakaz qoʻyadi", 
      desc: "Hajmini belgilaydi",
      detail: "Xaridor o'ziga kerakli mahsulot turini va aniq miqdorini (masalan, 5kg yoki 10kg) tizimga kiritadi."
    },
    { 
      icon: <Database />, 
      label: "Platforma yigʻadi", 
      desc: "Umumiy talab",
      detail: "Tizim barcha kichik va individual buyurtmalarni bir joyga to'plab, dehqon uchun bitta yirik ommaviy buyurtma shakllantiradi."
    },
    { 
      icon: <CheckCircle2 />, 
      label: "Tasdiqlaydi", 
      desc: "Dehqon tasdigʻi",
      detail: "Dehqon shakllangan umumiy hajmni ko'radi va o'z hosilidan kelib chiqib, uni yetkazib berishga tayyorligini tasdiqlaydi."
    },
    { 
      icon: <Truck />, 
      label: "Yetkazadi", 
      desc: "Market markaziga",
      detail: "Tasdiqlangan mahsulotlar daladan yangi uzilgan holda bevosita 'Dallachi Market' taqsimlash markaziga (hub) olib kelinadi."
    },
    { 
      icon: <ShoppingBag />, 
      label: "Sotiladi", 
      desc: "Xaridorga topshiriladi",
      detail: "Xaridorlar o'z buyurtmalarini markazdan olib ketishadi yoki tizim orqali uylarigacha yetkazib berishni tanlashadi."
    },
  ];

  return (
    <div className="w-full h-full flex flex-col p-12 md:p-24 bg-green-50 overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-4">Dallachi Market - Yechim</h2>
        <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mb-4" />
        <p className="text-xl text-green-700 max-w-3xl mx-auto italic">
          Batafsil ma'lumot olish uchun bosqichlarni tanlang
        </p>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative mb-12">
          {/* Animated path line (Desktop) */}
          <div className="hidden lg:block absolute top-[40%] left-0 right-0 h-1 bg-green-200 -translate-y-1/2 -z-10" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * idx }}
              onClick={() => setSelectedIdx(selectedIdx === idx ? null : idx)}
              className={`p-6 rounded-3xl shadow-xl border-2 transition-all flex flex-col items-center text-center group cursor-pointer ${
                selectedIdx === idx 
                  ? 'bg-white border-green-500 scale-105 z-10 shadow-2xl ring-2 ring-green-100' 
                  : 'bg-white border-green-100 hover:border-green-300 hover:y-[-5px]'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                selectedIdx === idx ? 'bg-orange-500 text-white' : 'bg-green-600 text-white group-hover:bg-orange-500'
              }`}>
                {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
              </div>
              <h4 className="font-bold text-green-900 mb-1">{step.label}</h4>
              <p className="text-[10px] text-green-600 font-black uppercase tracking-widest">{step.desc}</p>
              
              <div className={`mt-2 transition-opacity ${selectedIdx === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>
                <Info size={14} className="text-green-400" />
              </div>

              {idx < steps.length - 1 && (
                <div className="lg:hidden mt-4 text-green-200">
                  <ArrowRight size={16} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Detailed Info Box */}
        <div className="h-32">
          <AnimatePresence mode="wait">
            {selectedIdx !== null ? (
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white p-8 rounded-3xl border-2 border-green-100 shadow-xl flex items-start gap-6 max-w-4xl mx-auto"
              >
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                  {React.cloneElement(steps[selectedIdx].icon as React.ReactElement, { size: 28 })}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h5 className="font-bold text-green-900 text-xl tracking-tight uppercase">{steps[selectedIdx].label}</h5>
                    <ChevronRight size={20} className="text-green-300" />
                    <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">{steps[selectedIdx].desc}</span>
                  </div>
                  <p className="text-green-800 leading-relaxed font-medium">
                    {steps[selectedIdx].detail}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-100/30 p-8 rounded-3xl border-2 border-dashed border-green-200 flex flex-col items-center justify-center text-green-600/60 italic max-w-2xl mx-auto h-full"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Info size={16} />
                  </div>
                  <span className="font-bold uppercase tracking-widest text-xs">Jarayonni ko'rish</span>
                </div>
                <p>Bosqichlar haqida bilish uchun yuqoridagi kartalardan birini tanlang</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 p-6 bg-green-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative z-20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center animate-bounce">
            <span className="font-bold text-xl">!</span>
          </div>
          <div>
            <h5 className="font-bold text-lg leading-none mb-1">Yangi yondashuv</h5>
            <p className="text-green-200 text-xs">Biz talabni oldindan toʻplab, keyin mahsulotni olib kelamiz.</p>
          </div>
        </div>
        <div className="text-2xl md:text-3xl font-black text-orange-400 tracking-tighter">
          0% ISROF. 100% SIFAT.
        </div>
      </div>
    </div>
  );
};

export default Slide3;
