
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Settings, 
  Sun, 
  Layout, 
  TrendingUp, 
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie,
  LineChart, Line, Legend
} from 'recharts';

const FinancialOverviewSlide: React.FC<{ active: boolean }> = ({ active }) => {
  const [currency, setCurrency] = useState<'USD' | 'UZS'>('USD');
  const rate = 12500;

  const formatValue = (val: number) => {
    if (currency === 'UZS') {
      const uzsVal = val * rate;
      if (uzsVal >= 1000000) return `${(uzsVal / 1000000).toFixed(1)} mlrd`;
      return `${(uzsVal / 1000).toFixed(1)} mln`;
    }
    return `$${val}M`;
  };

  const capExData = [
    { name: 'Bino', val: 12, fill: '#2E7D32' },
    { name: 'Sovutish', val: 6, fill: '#1976D2' },
    { name: 'Quyosh', val: 2, fill: '#FBC02D' },
    { name: 'Uskunalar', val: 4.5, fill: '#F57C00' },
    { name: 'Boshqa', val: 4.6, fill: '#9E9E9E' },
  ];

  const opExData = [
    { name: 'Elektr', value: 24, color: '#FBC02D' },
    { name: 'Maosh', value: 30, color: '#2E7D32' },
    { name: 'Servis', value: 15, color: '#1976D2' },
    { name: 'Boshqa', value: 31, color: '#9E9E9E' },
  ];

  const growthData = [
    { year: '26', rev: 8, profit: -0.8 },
    { year: '27', rev: 15, profit: 1 },
    { year: '28', rev: 25, profit: 3 },
    { year: '29', rev: 40, profit: 6 },
    { year: '30', rev: 60, profit: 12 },
  ];

  return (
    <div className="w-full h-full flex flex-col p-4 bg-transparent overflow-hidden">
      <div className="flex-1 grid grid-cols-12 gap-4">
        
        {/* SECTION 1: CAPEX */}
        <div className="col-span-4 flex flex-col gap-2">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex-1 flex flex-col">
            <h3 className="text-[10px] font-black text-gray-900 uppercase mb-4 flex items-center gap-2">
              <BarChart3 size={14} /> CAPEX ($32M)
            </h3>
            <div className="flex-1 min-h-[100px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={capExData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 8, fontWeight: 800 }} />
                  <Tooltip />
                  <Bar dataKey="val" radius={[0, 4, 4, 0]} barSize={12}>
                    {capExData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* SECTION 2: OPEX */}
        <div className="col-span-4 flex flex-col gap-2">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex-1 flex flex-col relative">
             <h3 className="text-[10px] font-black text-gray-900 uppercase mb-4 flex items-center gap-2">
                <PieChartIcon size={14} /> OPEX ($2M/y)
              </h3>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={opExData} innerRadius={30} outerRadius={45} paddingAngle={5} dataKey="value">
                      {opExData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
          </div>
        </div>

        {/* SECTION 3: REVENUE */}
        <div className="col-span-4 flex flex-col gap-2">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex-1 flex flex-col">
            <h3 className="text-[10px] font-black text-gray-900 uppercase mb-4 flex items-center gap-2">
              <TrendingUp size={14} /> O'SISH
            </h3>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <XAxis dataKey="year" hide />
                  <YAxis hide />
                  <Line type="monotone" dataKey="rev" stroke="#1976D2" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="profit" stroke="#2E7D32" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-2">
               <div className="text-[8px] font-bold text-blue-600">Revu: $60M</div>
               <div className="text-[8px] font-bold text-green-600">Profit: $12M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverviewSlide;
