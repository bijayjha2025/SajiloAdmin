import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, LineChart, Line, BarChart, Bar, Cell } from "recharts";
import GlassCard from "../Components/GlassCard";
import { salesData, userGrowthData, conversionData } from "../Data/mockData";

const Charts = () => {
  return(
  <div className="space-y-6">
   <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-">Charts Gallery</h1>

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <GlassCard className="p-6">
     <h2 className='text-lg font-semibold text-gray-800 dark:text-white mb-4'>Revenue Trend (Area)</h2>
     <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
       <AreaChart data={salesData}>

        <defs>
         <linearGradient id="colorRevenue2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
         </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" opacity={0.1} />
         <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
         <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
          <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', border: 'none' }} itemStyle={{ color: '#1f2937' }}/>
          <Area type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue2)" />
       </AreaChart>
      </ResponsiveContainer>
     </div>
    </GlassCard>
                    
    <GlassCard className='p-6'>
     <h2 className='text-lg font-semibold text-gray-800 dark:text-white mb-4'>User Growth (Line)</h2>
     <div className='h-[300px] w-full'>
      <ResponsiveContainer width="100%" height="100%">
       <LineChart data={userGrowthData}>
       <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
        <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', border: 'none' }} itemStyle={{ color: '#1f2937' }} />
        
        <Line type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="active" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
       </LineChart>
      </ResponsiveContainer>
     </div>
    </GlassCard>

    <GlassCard className='p-6'>
     <h2 className='text-lg font-semibold text-gray-800 dark:text-white mb-4'>Traffic Sources (Bar)</h2>
     <div className='h-[300px] w-full'>
      <ResponsiveContainer width="100%" height="100%">

       <BarChart data={conversionData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
        <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', border: 'none' }} itemStyle={{ color: '#1f2937' }} />
        <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]}>
          {conversionData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
       </BarChart>
      </ResponsiveContainer>
     </div>
    </GlassCard>





   </div>

  </div>

 ); 
}

export default Charts;