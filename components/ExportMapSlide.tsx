
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Train, Plane, MapPin, Globe, Star, ChevronRight, TrendingUp } from 'lucide-react';

const ExportMapSlide: React.FC<{ active: boolean }> = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const stats = [
    { year: '2026', value: '$5M', label: 'Eksport hajmi' },
    { year: '2027', value: '$12M', label: 'Eksport hajmi' },
    { year: '2028', value: '$25M', label: 'Eksport hajmi' },
    { year: '2030', value: '$50M', label: 'Maqsad' },
  ];

  const products = [
    { name: 'Mevalar', items: 'Olma, Uzum, Anor', icon: '🍎' },
    { name: 'Sabzavotlar', items: 'Sabzi, Piyoz', icon: '🥕' },
    { name: 'Quruq mevalar', items: 'Yongʻoq, Mayiz', icon: '🍯' },
  ];

  const countries = [
    { id: 'uz', name: 'Oʻzbekiston', status: 'Markaz', color: '#2E7D32', detail: 'Asosiy HQ va Logistika markazi' },
    { id: 'kz', name: 'Qozogʻiston', status: '2026', color: '#4CAF50', detail: '$5M yillik aylanma rejasi' },
    { id: 'kg', name: 'Qirgʻiziston', status: '2027', color: '#FFC107', detail: 'Togʻli agro logistika aloqasi' },
    { id: 'tj', name: 'Tojikiston', status: '2027', color: '#FFC107', detail: 'Mevachilik boʻyicha hamkorlik' },
    { id: 'cn', name: 'Xitoy', status: '2030', color: '#1976D2', detail: 'One Belt One Road loyihasi' },
  ];

  return (
    <div className="w-full h-full flex flex-col p-10 md:p-16 bg-white overflow-hidden">
      <div className="flex justify-between items-start mb-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-4xl font-black text-green-900 tracking-tighter uppercase">Xalqaro Kengayish Strategiyasi</h2>
          <p className="text-gray-500 font-medium">2026-2030 yillarga moʻljallangan eksport rejalarimiz</p>
          <div className="w-24 h-1.5 bg-orange-500 rounded-full mt-4" />
        </motion.div>
        
        <div className="flex gap-4">
          <TransportIcon icon={<Truck size={18} />} label="Road" />
          <TransportIcon icon={<Train size={18} />} label="Rail" />
          <TransportIcon icon={<Plane size={18} />} label="Air" />
        </div>
      </div>

      <div className="flex-1 flex gap-10">
        {/* MAP SECTION */}
        <div className="flex-[2] relative bg-gray-50 rounded-[40px] border border-gray-100 overflow-hidden shadow-inner p-10 flex items-center justify-center">
          <svg viewBox="0 0 800 500" className="w-full h-full drop-shadow-2xl">
            {/* Simple Map Polygons - Abstracted for UI */}
            
            {/* Kazakhstan */}
            <motion.path 
              d="M100,100 L450,50 L700,80 L720,250 L450,220 L100,200 Z" 
              fill="#4CAF50" fillOpacity="0.1" stroke="#4CAF50" strokeWidth="2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              whileHover={{ fillOpacity: 0.2 }}
              onClick={() => setSelectedCountry('kz')}
              className="cursor-pointer"
            />
            
            {/* Uzbekistan */}
            <motion.path 
              d="M150,220 L400,230 L450,300 L380,380 L180,320 L120,280 Z" 
              fill="#2E7D32" stroke="#2E7D32" strokeWidth="3"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              onClick={() => setSelectedCountry('uz')}
              className="cursor-pointer"
            />

            {/* Kyrgyzstan */}
            <motion.path 
              d="M455,235 L580,210 L620,280 L480,300 Z" 
              fill="#FFC107" fillOpacity="0.2" stroke="#FFC107" strokeWidth="2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              onClick={() => setSelectedCountry('kg')}
              className="cursor-pointer"
            />

            {/* Tajikistan */}
            <motion.path 
              d="M460,310 L550,315 L530,380 L440,390 Z" 
              fill="#FFC107" fillOpacity="0.2" stroke="#FFC107" strokeWidth="2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              onClick={() => setSelectedCountry('tj')}
              className="cursor-pointer"
            />

            {/* Routes */}
            <AnimatedRoute d="M300,280 L350,150" delay={1} /> {/* to KZ */}
            <AnimatedRoute d="M320,280 L480,260" delay={1.2} /> {/* to KG */}
            <AnimatedRoute d="M320,300 L470,340" delay={1.4} /> {/* to TJ */}
            <AnimatedRoute d="M350,280 L750,250" dashed delay={1.6} /> {/* to China */}

            {/* HQ Marker */}
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.3 }}>
              <circle cx="300" cy="280" r="10" fill="#2E7D32" />
              <circle cx="300" cy="280" r="20" fill="#2E7D32" fillOpacity="0.2" className="animate-ping" />
              <Star className="text-white absolute" style={{ transform: 'translate(295px, 275px)' }} size={10} fill="white" />
              <text x="240" y="260" className="text-[10px] font-black fill-green-900 uppercase">Dallachi.uz HQ</text>
            </motion.g>

            {/* Moving Icons */}
            <MovingIcon d="M300,280 L350,150" icon="🚛" delay={2} />
            <MovingIcon d="M350,280 L750,250" icon="🚂" delay={4} />

            {/* China Label */}
            <text x="700" y="300" className="text-[12px] font-black fill-blue-600 uppercase">One Belt One Road</text>
          </svg>

          {/* Info Tooltip */}
          <AnimatePresence>
            {selectedCountry && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 p-6 bg-white shadow-2xl rounded-3xl border-2 border-green-100 flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{countries.find(c => c.id === selectedCountry)?.name}</h4>
                  <p className="text-sm text-gray-500">{countries.find(c => c.id === selectedCountry)?.detail}</p>
                </div>
                <button onClick={() => setSelectedCountry(null)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SIDE PANEL */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-green-900 rounded-[32px] p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-orange-400" />
              <h3 className="font-bold uppercase tracking-widest text-xs">Prognozlar</h3>
            </div>
            <div className="space-y-4">
              {stats.map((s, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-xs text-green-300 font-bold">{s.year}</span>
                  <div className="text-right">
                    <div className="text-xl font-black leading-none">{s.value}</div>
                    <div className="text-[8px] text-green-400 font-bold uppercase">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-gray-50 rounded-[32px] p-6 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Globe size={16} className="text-green-600" /> Eksport Mahsulotlari
            </h3>
            <div className="space-y-4">
              {products.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="text-2xl">{p.icon}</div>
                  <div>
                    <div className="font-bold text-sm text-gray-900">{p.name}</div>
                    <div className="text-[10px] text-gray-500">{p.items}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TransportIcon = ({ icon, label }: any) => (
  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
    <span className="text-gray-600">{icon}</span>
    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</span>
  </div>
);

const AnimatedRoute = ({ d, delay, dashed = false }: any) => (
  <motion.path 
    d={d} fill="none" stroke="#2E7D32" strokeWidth="2" strokeOpacity="0.3"
    strokeDasharray={dashed ? "5,5" : ""}
    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
    transition={{ duration: 1.5, delay, ease: "easeInOut" }}
  />
);

const MovingIcon = ({ d, icon, delay }: any) => (
  <motion.text
    initial={{ opacity: 0 }}
    animate={{ 
      offsetDistance: ["0%", "100%"],
      opacity: [0, 1, 1, 0]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay, 
      ease: "linear" 
    }}
    style={{ offsetPath: `path("${d}")` }}
    className="text-xl"
  >
    {icon}
  </motion.text>
);

const X = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default ExportMapSlide;
