
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, LayoutDashboard, Truck, PackageCheck, MousePointer2 } from 'lucide-react';

const Slide4: React.FC<{ active: boolean }> = () => {
  const steps = [
    {
      id: "01",
      title: "Buyurtma Qoʻyish",
      desc: "Xaridor yaqin mahsulotlarni tanlaydi va oʻziga kerakli hajmni (kg) koʻrsatadi.",
      icon: <Smartphone className="text-blue-600" />,
      color: "blue",
      detail: "Sunʼiy intellekt yaqin atrofdagi shunga oʻxshash zakazlarni koʻrsatib, toʻplanishni tezlashtiradi."
    },
    {
      id: "02",
      title: "Tasdiqlash Jarayoni",
      desc: "Platforma hamma zakazlarni yigʻib, dehqonga umumiy soʻrov yuboradi.",
      icon: <LayoutDashboard className="text-orange-600" />,
      color: "orange",
      detail: "Admin dashboard orqali hamma hajmlar va muddatlar nazorat qilinadi."
    },
    {
      id: "03",
      title: "Yetkazib Berish",
      desc: "Dehqon tasdiqlangan hajmni tayyorlab, Market hubiga yetkazib beradi.",
      icon: <Truck className="text-green-600" />,
      color: "green",
      detail: "Faqat buyurtma qilingan mahsulotgina keladi, ortiqcha yuk va isrof boʻlmaydi."
    },
    {
      id: "04",
      title: "Sotib Olish",
      desc: "Tayyor mahsulot xaridorga qulay va tezkor usulda yetkaziladi.",
      icon: <PackageCheck className="text-purple-600" />,
      color: "purple",
      detail: "Buyurtma qilingan mahsulotlar qisqa muddatda xaridorga yetkazib beriladi."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col p-12 md:p-24 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-2">Qanday Ishlaydi?</h2>
        <div className="w-20 h-1.5 bg-blue-500 rounded-full" />
      </motion.div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="group relative flex flex-col"
          >
            <div className={`mb-6 flex items-center justify-between`}>
              <div className={`w-16 h-16 rounded-2xl bg-${step.color === 'blue' ? 'blue-50' : step.color === 'orange' ? 'orange-50' : step.color === 'green' ? 'green-50' : 'purple-50'} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
              </div>
              <span className={`text-4xl font-black text-${step.color === 'blue' ? 'blue-100' : step.color === 'orange' ? 'orange-100' : step.color === 'green' ? 'green-100' : 'purple-100'}`}>{step.id}</span>
            </div>

            <div className="flex-1 bg-gray-50 p-6 rounded-3xl border border-gray-100 group-hover:bg-white group-hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.desc}</p>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <MousePointer2 size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Batafsil</span>
                </div>
                <p className="text-xs text-gray-500 italic">{step.detail}</p>
              </div>
            </div>

            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-[2px] bg-gray-200 z-10" />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Visual Indicator of Process */}
      <div className="mt-12 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-1/3 h-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default Slide4;
