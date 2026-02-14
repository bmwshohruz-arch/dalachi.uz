
import React from 'react';
import { motion } from 'framer-motion';
import { Link2Off, UserX, ShoppingCart, TrendingDown, ShieldAlert, BadgeAlert } from 'lucide-react';

const Slide2: React.FC<{ active: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col p-12 md:p-24 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-2">Muammo</h2>
        <div className="w-20 h-1.5 bg-orange-500 rounded-full" />
      </motion.div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* Center element */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center z-10">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-6 bg-red-50 rounded-full border-4 border-red-200"
          >
            <Link2Off size={48} className="text-red-600" />
          </motion.div>
        </div>

        {/* Left: Farmers */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-red-50/50 p-8 rounded-3xl border border-red-100 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-100 rounded-xl text-red-600">
              <UserX size={32} />
            </div>
            <h3 className="text-2xl font-bold text-red-900">Dehqonning Muammosi</h3>
          </div>
          
          <div className="space-y-6">
            <ProblemItem text="40% hosil isrof boʻladi" stat="Isrof" />
            <ProblemItem text="Oʻrtachi 3-4 ta aralashuvchi" stat="Arzon narx" />
            <ProblemItem text="Sotish kafolati yoʻq" stat="Xavf" />
          </div>
        </motion.div>

        {/* Right: Customers */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
              <ShoppingCart size={32} />
            </div>
            <h3 className="text-2xl font-bold text-orange-900">Xaridorning Muammosi</h3>
          </div>

          <div className="space-y-6">
            <ProblemItem text="Narxlar kundan-kunga oʻzgaradi" stat="Qimmat" color="orange" />
            <ProblemItem text="Sifat kafolati yoʻq" stat="Nomaʼlumlik" color="orange" />
            <ProblemItem text="Bozorda vaqt yoʻqotish" stat="Noqulaylik" color="orange" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ProblemItem = ({ text, stat, color = 'red' }: { text: string; stat: string; color?: 'red' | 'orange' }) => (
  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
    <div className={`mt-1 text-${color}-500`}>
      <BadgeAlert size={20} />
    </div>
    <div>
      <p className="text-gray-800 font-medium leading-tight mb-1">{text}</p>
      <span className={`text-xs font-bold uppercase tracking-wider text-${color}-600`}>{stat}</span>
    </div>
  </div>
);

export default Slide2;
