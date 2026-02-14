
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Crown, Truck, Handshake, Globe, TrendingUp, Info, ChevronRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Slide6: React.FC<{ active: boolean }> = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const models = [
    { 
      title: "Komissiya", 
      val: "5-10%", 
      desc: "Har bir sotuvdan", 
      detail: "Platformamiz orqali amalga oshirilgan har bir muvaffaqiyatli savdodan olinadigan xizmat haqi. Bu mablag' tizimni rivojlantirish va sifat nazoratini ta'minlashga sarflanadi.",
      icon: <DollarSign />, 
      color: "#2E7D32" 
    },
    { 
      title: "Obuna", 
      val: "Oylik Toʻlov", 
      desc: "Doimiy mijozlar uchun", 
      detail: "Muntazam xaridorlar uchun maxsus tariflar. Obunachilar mahsulotlarni birinchi navbatda band qilish, doimiy chegirmalar va bepul yetkazib berish imkoniyatiga ega bo'ladilar.",
      icon: <Crown />, 
      color: "#F57C00" 
    },
    { 
      title: "Dostavka", 
      val: "Xizmat Haqi", 
      desc: "Masofaga qarab", 
      detail: "Mahsulotlarni bizning taqsimlash markazimizdan (hub) bevosita mijoz eshigigacha yetkazib berish xizmati. Kelajakda shaxsiy kuryerlar tarmog'i orqali amalga oshiriladi.",
      icon: <Truck />, 
      color: "#1976D2" 
    },
    { 
      title: "B2B", 
      val: "Shartnomaviy", 
      desc: "Restoran va doʻkonlar", 
      detail: "Yirik korporativ mijozlar bilan uzoq muddatli hamkorlik. Restoranlar va savdo tarmoqlarini yangi agro mahsulotlar bilan uzluksiz va kafolatlangan holda ta'minlash.",
      icon: <Handshake />, 
      color: "#9C27B0" 
    },
    { 
      title: "Eksport", 
      val: "15-20%", 
      desc: "Xalqaro bozor", 
      detail: "Mahsulotlarimizni qo'shni davlatlar va jahon bozoriga eksport qilish. Mahalliy dehqonlar mahsulotini xalqaro standartlarga moslab sotish orqali yuqori marja olish tizimi.",
      icon: <Globe />, 
      color: "#607D8B" 
    },
  ];

  const data = [
    { month: '3 oy', rev: 20 },
    { month: '6 oy', rev: 50 },
    { month: '12 oy', rev: 120 },
    { month: '18 oy', rev: 280 },
    { month: '24 oy', rev: 500 },
  ];

  return (
    <div className="w-full h-full flex flex-col p-10 md:p-20 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-2">Daromad Manbalari</h2>
        <div className="w-20 h-1.5 bg-orange-500 rounded-full" />
        <p className="mt-4 text-gray-500 font-medium italic">Batafsil ma'lumot olish uchun bo'limlar ustiga bosing:</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
        {models.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedIdx(selectedIdx === idx ? null : idx)}
            className={`p-6 rounded-3xl border transition-all flex flex-col items-center text-center cursor-pointer group relative ${
              selectedIdx === idx 
                ? 'bg-white border-green-500 shadow-2xl ring-2 ring-green-100 scale-105 z-10' 
                : 'bg-gray-50 border-gray-100 hover:border-green-200 hover:shadow-xl'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white transition-transform group-hover:rotate-12`} style={{ backgroundColor: item.color }}>
              {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
            </div>
            <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
            <div className="text-xl font-black text-gray-900 mb-1 leading-tight">{item.val}</div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{item.desc}</p>
            
            <div className={`absolute top-3 right-3 transition-colors ${selectedIdx === idx ? 'text-green-500' : 'text-gray-300 group-hover:text-green-400'}`}>
              <Info size={16} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="h-32 mb-6">
        <AnimatePresence mode="wait">
          {selectedIdx !== null ? (
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-green-50 p-6 rounded-3xl border-2 border-green-100 flex items-start gap-5 shadow-sm h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-green-600 shadow-sm shrink-0">
                {React.cloneElement(models[selectedIdx].icon as React.ReactElement, { size: 28 })}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h5 className="font-bold text-green-900 text-lg uppercase tracking-tight">{models[selectedIdx].title}</h5>
                  <ChevronRight size={16} className="text-green-300" />
                  <span className="text-green-700 font-bold">{models[selectedIdx].val}</span>
                </div>
                <p className="text-sm text-green-800 leading-relaxed font-medium">
                  {models[selectedIdx].detail}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex items-center justify-center border-2 border-dashed border-gray-200 rounded-3xl text-gray-400 italic text-sm bg-gray-50/50"
            >
              Ma'lumot ko'rish uchun yuqoridagi kartalardan birini tanlang
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1 bg-gray-50 p-6 rounded-3xl border border-gray-200 min-h-0 flex flex-col shadow-inner">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">Daromad Oʻsishi (Prognoz)</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-700 rounded-full" />
              <span className="text-[10px] font-bold text-gray-500 uppercase">Yillik maqsad</span>
            </div>
            <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase">MLN SOʻM</span>
          </div>
        </div>
        
        <div className="flex-1 w-full min-h-[140px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: 'rgba(0,0,0,0.05)' }} 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [`${value} mln soʻm`, 'Daromad']}
              />
              <Bar dataKey="rev" radius={[10, 10, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#2E7D32' : '#86efac'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
