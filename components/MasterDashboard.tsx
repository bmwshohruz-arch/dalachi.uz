
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Users, Globe, Building2, Package, ShieldCheck, 
  ArrowRight, PieChart, Zap, MapPin, CheckCircle2, Phone, Mail
} from 'lucide-react';
import { useMedia } from './MediaContext';
import Logo from './Logo';
import FinancialOverviewSlide from './FinancialOverviewSlide';
import ExportMapSlide from './ExportMapSlide';
import SocialImpactSlide from './SocialImpactSlide';
import Slide3 from './Slide3'; // Yechim bosqichlari
import { ADVANTAGES } from '../constants';

const MasterDashboard: React.FC = () => {
  const { brand, media } = useMedia();
  const [activeTab, setActiveTab] = useState<'infra' | 'finance' | 'map'>('infra');

  // Avtomatik infratuzilma galereyasi
  const infraImages = [media.infraFront, media.infraSolar, media.infraLogistics, media.infraRailway, media.infraScale];
  const [infraIdx, setInfraIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setInfraIdx((prev) => (prev + 1) % infraImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full p-4 grid grid-cols-12 grid-rows-12 gap-4 overflow-hidden bg-gray-100 font-sans">
      
      {/* 1. BRAND & HEADER (Col: 1-4, Row: 1-2) */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="col-span-4 row-span-2 bg-green-900 rounded-[32px] p-6 flex items-center gap-6 shadow-xl text-white border-4 border-green-800"
      >
        <Logo size="md" className="shrink-0 shadow-2xl" />
        <div>
          <h1 className="text-3xl font-black tracking-tighter uppercase leading-none mb-1">{brand.name}</h1>
          <p className="text-green-300 text-[10px] font-bold uppercase tracking-widest opacity-80">Kelajak Agro-Hub Platformasi</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[9px] font-black text-green-400">FAOL BOSQICH 2025</span>
          </div>
        </div>
      </motion.div>

      {/* 2. PROBLEM & IMPACT (Col: 1-4, Row: 3-8) */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        className="col-span-4 row-span-6 bg-white rounded-[32px] p-6 shadow-lg border border-gray-200 overflow-hidden flex flex-col"
      >
        <div className="flex items-center gap-2 mb-4 border-b pb-4 border-gray-100">
          <Users className="text-orange-500" size={18} />
          <h2 className="font-black text-gray-900 text-xs uppercase tracking-widest">Muammo va Ijtimoiy Ta'sir</h2>
        </div>
        
        <div className="space-y-3 mb-6">
           <div className="p-3 bg-red-50 rounded-2xl border border-red-100">
             <div className="text-[9px] font-black text-red-500 uppercase mb-1">Eng katta og'riq</div>
             <p className="text-xs font-bold text-red-900 leading-tight">40% agro-hosil oʻrtachilar va notoʻgʻri logistika tufayli isrof boʻlmoqda.</p>
           </div>
           <div className="p-3 bg-green-50 rounded-2xl border border-green-100">
             <div className="text-[9px] font-black text-green-600 uppercase mb-1">Bizning natija</div>
             <p className="text-xs font-bold text-green-900 leading-tight">Dehqonlar daromadi +40% ga oshadi, isrof esa 0% ga tushadi.</p>
           </div>
        </div>

        <div className="flex-1 min-h-0 overflow-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-2 gap-3">
             <ImpactCard icon={<TrendingUp size={14}/>} val="5,000+" label="Dehqonlar" color="green" />
             <ImpactCard icon={<Globe size={14}/>} val="30%" label="Isrof kamaydi" color="orange" />
             <ImpactCard icon={<Package size={14}/>} val="50k+" label="Oilalar" color="blue" />
             <ImpactCard icon={<ShieldCheck size={14}/>} val="100%" label="Sifat" color="purple" />
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-200">
            <h4 className="text-[10px] font-black uppercase text-gray-400 mb-2">Afzalliklarimiz</h4>
            <div className="space-y-2">
              {ADVANTAGES.slice(0, 3).map((adv, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-700">
                   <CheckCircle2 size={12} className="text-green-500" />
                   {adv.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. PROCESS - HOW IT WORKS (Col: 5-8, Row: 1-8) */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="col-span-4 row-span-8 bg-white rounded-[32px] p-6 shadow-lg border border-gray-200 flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between mb-4 border-b pb-4 border-gray-100">
          <div className="flex items-center gap-2">
             <Zap className="text-orange-500" size={18} />
             <h2 className="font-black text-gray-900 text-xs uppercase tracking-widest">Jarayon: Dehqondan Xaridorga</h2>
          </div>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">0% Isrof Tizimi</span>
        </div>
        
        <div className="flex-1 flex flex-col justify-center gap-2 relative">
           <Slide3 active={true} /> 
           {/* Slide3 ichidagi mantiqni kichraytirib ishlatamiz */}
        </div>
      </motion.div>

      {/* 4. INFRASTRUCTURE & REVENUE (Col: 9-12, Row: 1-8) */}
      <motion.div 
        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        className="col-span-4 row-span-8 bg-gray-900 rounded-[32px] overflow-hidden shadow-xl border-4 border-white relative group"
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={infraIdx}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${infraImages[infraIdx]})` }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
           <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500 text-white rounded-lg">
                <Building2 size={20} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Modern Infratuzilma</h3>
           </div>
           
           <div className="grid grid-cols-2 gap-3">
              <InfraStat label="Maydon" val="15,000 m²" />
              <InfraStat label="Energiya" val="500 kW Solar" />
              <InfraStat label="Sig'im" val="5000+ Tonna" />
              <InfraStat label="Transport" val="16+ Doklar" />
           </div>
           
           <div className="mt-6 flex gap-2">
              {infraImages.map((_, i) => (
                <div key={i} className={`h-1 flex-1 rounded-full transition-all ${i === infraIdx ? 'bg-green-500 w-8' : 'bg-white/30'}`} />
              ))}
           </div>
        </div>
      </motion.div>

      {/* 5. EXPORT & MAP (Col: 1-6, Row: 9-12) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="col-span-6 row-span-4 bg-white rounded-[32px] p-6 shadow-lg border border-gray-200 overflow-hidden relative"
      >
        <div className="flex justify-between items-center mb-4">
           <div className="flex items-center gap-2">
              <Globe className="text-blue-500" size={18} />
              <h2 className="font-black text-gray-900 text-xs uppercase tracking-widest">Eksport va Xalqaro Aloqalar</h2>
           </div>
           <div className="text-[10px] font-bold text-gray-400">2026-2030 Strategiyasi</div>
        </div>
        <div className="h-full scale-[0.8] -mt-10 origin-top">
           <ExportMapSlide active={true} />
        </div>
      </motion.div>

      {/* 6. FINANCIALS (Col: 7-12, Row: 9-12) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="col-span-6 row-span-4 bg-white rounded-[32px] p-6 shadow-lg border border-gray-200 overflow-hidden"
      >
        <div className="flex justify-between items-center mb-4">
           <div className="flex items-center gap-2">
              <PieChart className="text-green-600" size={18} />
              <h2 className="font-black text-gray-900 text-xs uppercase tracking-widest">Moliyaviy Ko'rsatkichlar</h2>
           </div>
           <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-lg text-[8px] font-black uppercase">ROI: 5-6 YIL</div>
        </div>
        <div className="h-full scale-[0.85] -mt-12 origin-top">
           <FinancialOverviewSlide active={true} />
        </div>
      </motion.div>

      {/* FLOATING ACTION: CONTACT & ROADMAP */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-xl px-8 py-4 rounded-full shadow-2xl border border-gray-200">
        <div className="flex items-center gap-2 border-r pr-4 border-gray-200">
           <Phone size={14} className="text-green-600" />
           <span className="text-[10px] font-black text-gray-900">+998 95 331 44 49</span>
        </div>
        <div className="flex items-center gap-2 border-r pr-4 border-gray-200">
           <Mail size={14} className="text-green-600" />
           <span className="text-[10px] font-black text-gray-900">info@dallachi.uz</span>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-orange-500 rounded-full" />
           <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Roadmap: Faza 1 (Hozir)</span>
        </div>
        <button className="ml-4 bg-green-900 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-green-800 transition-all flex items-center gap-2 shadow-lg">
           Investitsiya Imkoniyati <ArrowRight size={12} />
        </button>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>

    </div>
  );
};

const ImpactCard = ({ icon, val, label, color }: any) => {
  const colors: any = {
    green: "bg-green-50 text-green-700 border-green-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100"
  };
  return (
    <div className={`p-4 rounded-2xl border ${colors[color]} flex flex-col items-center text-center`}>
      <div className="mb-2 opacity-70">{icon}</div>
      <div className="text-xl font-black leading-none mb-1">{val}</div>
      <div className="text-[8px] font-bold uppercase tracking-widest opacity-60">{label}</div>
    </div>
  );
};

const InfraStat = ({ label, val }: any) => (
  <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
    <div className="text-[8px] font-black text-green-400 uppercase tracking-widest mb-1">{label}</div>
    <div className="text-sm font-bold text-white leading-none">{val}</div>
  </div>
);

export default MasterDashboard;
