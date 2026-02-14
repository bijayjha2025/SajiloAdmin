import { useState, useEffect, useRef } from "react";
import Statscard from "../Components/Statscard";
import { Users, ShoppingCart, DollarSign, TrendingUp, ListPlus, Clock, Sun, Moon, ArrowRight } from "lucide-react";
import GlassCard from "../Components/GlassCard";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { salesData, recentOrders } from "../Data/mockData";

const Dashboard =() => {
  const stats = [
    { title: "Total Users", value: "2,200", change: "+15.4%", icon: Users, positive: true },
    { title: "Orders", value: "2,245", change: "+2.2%", icon: ShoppingCart, positive: true },
    { title: "Revenue", value: "$28,000", change: "-1.0%", icon: DollarSign, positive: false },
    { title: "Growth", value: "12.3%", change: "+1.1%", icon: TrendingUp, positive: true },
    { title: "New Sign Ups", value: "77", change: "+4.0%", icon: ListPlus, positive: true },
    { title: "Active Orders", value: "106", change: "-0.5%", icon: Clock, positive: false },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if(containerRef.current) {
      const container = containerRef.current;
      const activeCard = container.children[activeIndex];

      if(activeCard) {
        const cardLeft = activeCard.offsetLeft;
        const cardWidth = activeCard.offsetWidth;
        const containerWidth = container.offsetWidth;

        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);
        
        container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      }
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? stats.length - 1 : prevIndex - 1));
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === stats.length - 1 ? 0 : prevIndex + 1));
  }

 return(
  <div className={`min-h-screen transition-colors duration-500 ${ isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-orange-50 to-yellow-50' }`}>
   <div className="space-y-8 py-10">
    <div className="px-6 flex items-center justify-between animate-fade-in">

   <div>
    <h1 className="text-3xl font-bold text-slate-500">Dashboard</h1>
    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Overview of your business</p>
   </div>

   <button onClick={() => setIsDark(!isDark)} className={`p-4 rounded-xl transition-all duration-500 transform hover:scale-110 active:scale-95 ${ isDark 
      ? 'bg-gradient-to-br from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-yellow-400 shadow-lg shadow-slate-900/50' 
      : 'bg-gradient-to-br from-white to-orange-50 hover:from-orange-50 hover:to-yellow-50 text-orange-600 border border-orange-200 shadow-lg shadow-orange-200/50'
    }`} >
    <div className="transition-transform duration-500 transform hover:rotate-180">
     {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </div>
   </button>
  </div>

  <div className="relative">
   <div ref={containerRef} className="flex gap-8 items-end overflow-x-hidden py-16" style={{ perspective: '1000px' }}>
    {stats.map((stat, index) => (
    <div key={index} onClick={() => setActiveIndex(index)} className="cursor-pointer transition-transform duration-500 hover:scale-105">
     <Statscard {...stat} isActive={index === activeIndex} />
    </div>
   ))}
   </div>

   {activeIndex > 0 && (
    <button onClick={handlePrev} className={`absolute top-1/2 left-4 -translate-y-1/2 p-4 rounded-full transition-all duration-300 shadow-xl z-10 group 
      
      ${ isDark
    ? 'bg-gradient-to-br from-slate-800 to-slate-700 hover:from-orange-600 hover:to-orange-500 text-white'
    : 'bg-gradient-to-br from-white to-orange-50 hover:from-orange-500 hover:to-orange-600 text-slate-700 hover:text-white border border-slate-300 hover:border-orange-500' }`} >

       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
    </button>
    )}

    {activeIndex < stats.length - 1 && (
     <button className={`absolute top-1/2 right-4 -translate-y-1/2 p-4 rounded-full transition-all duration-300 shadow-xl z-10 group 
      ${ isDark
      ? 'bg-gradient-to-br from-slate-800 to-slate-700 hover:from-orange-600 hover:to-orange-500 text-white'
      : 'bg-gradient-to-br from-white to-orange-50 hover:from-orange-500 hover:to-orange-600 text-slate-700 hover:text-white border border-slate-300 hover:border-orange-500' }`} onClick={handleNext} >
      
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
     </button>
    )}
    </div>

    <div className="flex justify-center gap-2">
     {stats.map((_, idx) => (
      <button key={idx} onClick={() => setActiveIndex(idx)} className={`rounded-full transition-all duration-500 transform 
        ${ idx === activeIndex 
         ? 'w-10 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 scale-110' 
         : isDark ? 'w-3 h-3 bg-slate-600 hover:bg-slate-500 hover:scale-125' : 'w-3 h-3 bg-slate-300 hover:bg-orange-300 hover:scale-125' }`} />
     ))}
    </div>

    <div className="px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
     <GlassCard className="lg:col-span-2 p-6">
      <div className="flex items-center justify-between mb-6">
       <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200">Sales Overview</h2>
       <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">View Report</button>
      </div>

      <div className="h-[300px] w-full">
       <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={salesData}>
         <defs>
          <linearGradient id="colorRevenueDashboard" x1="0" y1="0" x2="0" y2="1">
           <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
           <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
          </linearGradient>
         </defs>

         <CartesianGrid strokeDasharray="3 3" stroke="#ccc" opacity={0.1} />
          <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
          <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} itemStyle={{ color: '#1f2937' }} />
          <Area type="monotone" dataKey="revenue" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenueDashboard)" />
        </AreaChart>
       </ResponsiveContainer>
       </div>
      </GlassCard>

      <GlassCard className="p-6">
       <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200">Recent Orders</h2>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500">
         <ArrowRight size={20} />
        </button>
       </div>

       <div className="space-y-4">
       {recentOrders.map((order) => (
        <div key={order.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer">
         <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold
          ${order.status === 'Completed' ? 'bg-emerald-500' :
            order.status === 'Processing' ? 'bg-blue-500' :
            order.status === 'Shipped' ? 'bg-purple-500' : 'bg-rose-500'}`}>
            {order.customer.charAt(0)}
          </div>
         
         <div>
          <h4 className="font-semibold text-slate-700 dark:text-slate-200">{order.customer}</h4>
          <p className="text-xs text-slate-500">{order.product}</p>
         </div>
        </div>
                  
        <div className="text-right">
         <p className="font-bold text-slate-700 dark:text-slate-300">${order.amount.toFixed(0)}</p>
         <p className={`text-xs font-medium 
          ${order.status === 'Completed' ? 'text-emerald-500' :
            order.status === 'Processing' ? 'text-blue-500' :
            order.status === 'Shipped' ? 'text-purple-500' : 'text-rose-500'}`}>
            {order.status}
          </p>
         </div>
        </div>
        ))}
       </div>
      <button className="w-full mt-6 py-2 rounded-xl bg-orange-50 text-orange-600 hover:bg-orange-100 dark:bg-orange-500/10 dark:hover:bg-orange-500/20 transition-colors text-sm font-semibold">View All Orders</button>
      </GlassCard>
     </div>
    </div>
   </div>
);
}

export default Dashboard;