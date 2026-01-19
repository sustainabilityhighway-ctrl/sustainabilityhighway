
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ICONS } from '../constants';

const data = [
  { name: 'Water Reuse', value: 85, target: 100 },
  { name: 'Solar Yield', value: 92, target: 100 },
  { name: 'Native Flora', value: 78, target: 90 },
  { name: 'Waste Mgmt', value: 95, target: 100 },
];

const SustainabilityStats: React.FC = () => {
  return (
    <section id="stats" className="py-24 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl font-black mb-4 text-[#041612] tracking-tighter">IMPACT <br /><span className="text-[#4CAF50]">ANALYSIS</span></h2>
            <p className="text-[#041612]/60 max-w-md font-medium">Real-time tracking of sustainability KPIs across all active construction zones in the Kingdom.</p>
          </div>
          <div className="flex gap-4">
             <div className="px-6 py-4 bg-[#F7FAF7] rounded-2xl border border-black/5 flex items-center gap-4">
               <div className="p-3 bg-black text-white rounded-xl">{ICONS.Building}</div>
               <div>
                 <p className="text-xs font-bold text-black/40 uppercase">Total Sites</p>
                 <p className="text-2xl font-black">1,402+</p>
               </div>
             </div>
             <div className="px-6 py-4 bg-[#F7FAF7] rounded-2xl border border-black/5 flex items-center gap-4">
               <div className="p-3 bg-[#4CAF50] text-black rounded-xl">{ICONS.Droplets}</div>
               <div>
                 <p className="text-xs font-bold text-black/40 uppercase">Energy Saved</p>
                 <p className="text-2xl font-black">2.4GW</p>
               </div>
             </div>
          </div>
        </div>

        <div className="glass bg-white shadow-2xl rounded-[3rem] p-12 border border-black/5 h-[450px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#041612', fontWeight: 700, fontSize: 12 }} 
                dy={10}
              />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: '#f7faf7' }}
                contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontWeight: 700 }}
              />
              <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={60}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4CAF50' : '#0B2B24'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
           {data.map((item, i) => (
             <div key={i} className="p-6 border-l-4 border-[#C5A059] bg-[#F7FAF7] rounded-r-2xl">
               <p className="text-sm font-black text-black/30 uppercase tracking-tighter">{item.name}</p>
               <p className="text-4xl font-black text-[#041612] mt-1">{item.value}%</p>
               <div className="w-full bg-black/10 h-1 mt-4 rounded-full overflow-hidden">
                 <div className="bg-[#C5A059] h-full" style={{ width: `${item.value}%` }}></div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityStats;
