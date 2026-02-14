
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { UserCheck, Users, Leaf, Home, Quote, Heart } from 'lucide-react';
import Logo from './Logo';

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const SocialImpactSlide: React.FC<{ active: boolean }> = ({ active }) => {
  const quadrants = [
    {
      title: "Dehqonlar uchun",
      value: "5,000+",
      label: "Daromad oshdi",
      detail: "O'rtacha 40% ko'proq foyda",
      subDetail: "O'rta osiyo bo'ylab",
      icon: <UserCheck size={40} />,
      color: "#2E7D32",
      bgColor: "bg-green-50",
      textColor: "text-green-900"
    },
    {
      title: "Ish o'rinlari",
      value: "500+",
      label: "Yangi ish o'rni",
      detail: "80% yoshlar (18-35 yosh)",
      subDetail: "50% ayollar",
      icon: <Users size={40} />,
      color: "#1976D2",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900"
    },
    {
      title: "Isrof kamayishi",
      value: "30%",
      label: "Oziq-ovqat isrofi",
      detail: "Sovutish tizimi orqali",
      subDetail: "Yillik 10,000 tonna tejalmoqda",
      icon: <Leaf size={40} />,
      color: "#F57C00",
      bgColor: "bg-orange-50",
      textColor: "text-orange-900"
    },
    {
      title: "Oilalar uchun",
      value: "50,000+",
      label: "Sifatli oziq-ovqat",
      detail: "Arzon va yangi mahsulotlar",
      subDetail: "O'zbekiston bo'ylab",
      icon: <Home size={40} />,
      color: "#7B1FA2",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900"
    }
  ];

  const sdgs = [
    { id: 2, name: "Zero Hunger", color: "#E5243B" },
    { id: 8, name: "Decent Work", color: "#A21942" },
    { id: 12, name: "Responsible Consumption", color: "#BF8B2E" }
  ];

  return (
    <div className="w-full h-full flex flex-col p-10 md:p-16 bg-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2E7D32 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="mb-10 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-green-900 uppercase tracking-tighter"
        >
          Ijtimoiy Ta'sir va Maqsadlarimiz
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 font-medium text-lg"
        >
          Biz nafaqat biznes, balki jamiyat uchun ishlaymiz
        </motion.p>
        <div className="w-24 h-1.5 bg-green-600 rounded-full mt-4" />
      </div>

      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 relative">
        {/* CENTER ELEMENT */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.5 }}
            className="w-40 h-40 bg-white rounded-full shadow-2xl border-8 border-green-50 flex items-center justify-center relative"
          >
            <Logo size="md" />
            
            {/* Pulsing Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <motion.circle 
                cx="80" cy="80" r="76" 
                fill="none" stroke="#2E7D32" strokeWidth="4" 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                transition={{ duration: 2, delay: 1 }}
              />
            </svg>

            {/* Orbiting SDG Icons */}
            {sdgs.map((sdg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 1 + i * 0.2 }}
                className="absolute w-full h-full"
              >
                <div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-lg flex items-center justify-center text-white text-[10px] font-black shadow-lg"
                  style={{ backgroundColor: sdg.color, transform: `rotate(${-360 * (i/sdgs.length)}deg)` }}
                >
                  #{sdg.id}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-4 px-4 py-1.5 bg-green-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg"
          >
            SDG Maqsadlariga hissa
          </motion.div>
        </div>

        {/* QUADRANTS */}
        {quadrants.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.02, zIndex: 20 }}
            className={`${q.bgColor} rounded-[40px] p-8 flex flex-col border border-gray-100 shadow-sm transition-all hover:shadow-2xl hover:border-transparent cursor-default`}
          >
            <div className="flex items-start justify-between mb-6">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="p-4 rounded-2xl bg-white shadow-sm" style={{ color: q.color }}
              >
                {q.icon}
              </motion.div>
              <div className="text-right">
                <div className={`text-5xl font-black ${q.textColor} tracking-tighter`}>
                  {active && <Counter value={q.value} />}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">{q.label}</div>
              </div>
            </div>

            <div className="mt-auto">
              <h4 className={`text-2xl font-bold ${q.textColor} mb-1`}>{q.title}</h4>
              <p className="text-gray-600 font-medium mb-1">{q.detail}</p>
              <div className="flex items-center gap-2">
                <Heart size={12} className="text-red-400 fill-red-400" />
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{q.subDetail}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM QUOTE BANNER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-10 bg-green-50/50 p-6 rounded-[32px] border border-green-100 flex items-center gap-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Quote size={80} className="text-green-900" />
        </div>
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-green-200 shrink-0 shadow-lg">
           <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="CEO" />
        </div>
        <div className="flex-1">
          <p className="text-xl text-green-900 font-medium italic leading-relaxed">
            "Biznesni jamiyat foydasiga yoʻnaltirish - bizning asosiy qadriyatimiz va har bir qadamimiz zamiridagi bosh maqsadimizdir."
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="font-black text-green-600 text-xs uppercase tracking-widest">Azizov Dilmurod</span>
            <span className="w-8 h-[1px] bg-green-300" />
            <span className="text-gray-400 text-[10px] font-bold uppercase">Asoschi & CEO</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialImpactSlide;
