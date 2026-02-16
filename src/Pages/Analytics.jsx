
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar  } from "recharts";
import { Users, TrendingUp, PieChart as PieChartIcon, X } from "lucide-react";
import { userGrowthData, categoryData, conversionData } from "../Data/mockData.jsx";
import GlassCard from "../Components/GlassCard.jsx";
import { CardSkeleton } from "../Components/Skeleton.jsx";
import { useState, useEffect } from "react";

const Analytics =() =>{
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

    return(
    <div className="space-y-6">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {loading ? <CardSkeleton /> : (
      <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-6">
       <div>
        <h2 className='text-lg font-semibold text-gray-800 dark:text-white'>User Growth</h2>
        <p className='text-sm text-gray-500 dark:text-gray-400'>Total vs Active Users</p>
        </div>

        <div className='p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400'><Users size={20} /></div>
      </div>

      <div className="h-[300px] w-full">
       <ResponsiveContainer width="100%" height="100%">
        <LineChart data={userGrowthData}>
         <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
         <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
         <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
         <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} itemStyle={{ color: '#1f2937' }} />
         <Line type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
         <Line type="monotone" dataKey="active" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
       </ResponsiveContainer>
      </div>
      </GlassCard>
      )}

      {loading ? <CardSkeleton /> : (
      <GlassCard className="p-6">
       <div className="flex items-center justify-between mb-6">
        <div>
         <h2 className='text-lg font-semibold text-gray-800 dark:text-white'>Category Distribution</h2>
         <p className='text-sm text-gray-500 dark:text-gray-400'>Sales By Category</p>
        </div>

        <div className='p-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg text-emerald-600 dark:text-emerald-400'>
         <PieChartIcon size={20} />
        </div>
       </div>
       
       <div className='h-[300px] w-full flex items-center justify-center'>
        <ResponsiveContainer width="100%" height="100%">
         <PieChart>
          <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value" >
           {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
           ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', border: 'none' }} itemStyle={{ color: '#1f2937' }}/>
          </PieChart>
         </ResponsiveContainer>
        </div>

        <div className='flex justify-center gap-4 mt-4 flex-wrap'>
         {categoryData.map((item, index) => (
          <div key={index} className='flex items-center gap-2'>
           <div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.color }}></div>
            <span className='text-sm text-gray-600 dark:text-gray-400'>{item.name}</span>
          </div>
         ))}
        </div>
      </GlassCard>
      )}
     </div>

    {loading ? <CardSkeleton /> : (
     <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-6">
       <div>
        <h2 className='text-lg font-semibold text-gray-800 dark:text-white'>Traffic Sources</h2>
        <p className='text-sm text-gray-500 dark:text-gray-400'>Where your users are coming from</p>
       </div>

       <div className='p-2 bg-amber-100 dark:bg-amber-500/20 rounded-lg text-amber-600 dark:text-amber-400'>
        <TrendingUp size={20} />
       </div>
      </div>
     
      <div className='h-[300px] w-full'>
       <ResponsiveContainer width="100%" height="100%">
        <BarChart data={conversionData}>
         <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
          <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />

          <Tooltip cursor={{ fill: 'rgba(255,255,255,0.1)' }} contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} itemStyle={{ color: '#1f2937' }} />
           <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]}>
            {conversionData.map((entry, index) => (
             <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
           </Bar>
        </BarChart>
       </ResponsiveContainer>
      </div>
     </GlassCard>
    )}
    </div>
    );
}

export default Analytics;