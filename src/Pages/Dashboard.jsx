import { useState, useEffect, useRef } from "react";
import Statscard from "../Components/Statscard";
import { Users, ShoppingCart, DollarSign, TrendingUp, ListPlus, Clock, Sun, Moon } from "lucide-react";

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
   </div>
   </div>
);
}

export default Dashboard;