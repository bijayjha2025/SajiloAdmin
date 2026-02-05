import { useState, useEffect, useRef } from "react";
import Statscard from "../Components/Statscard";
import { Users, ShoppingCart, DollarSign, TrendingUp, ListPlus, Clock } from "lucide-react";

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
  <div className="space-y-6 py-10 bg-[#f0f5bf] min-h-screen">
    <div className="px-6">
    <h1 className="text-3xl font-bold text-slate-500">Dashboard</h1>
    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Overview of your business</p>
   </div>

   <div className="relative">
    <div ref={containerRef} className="flex gap-8 items-end overflow-x-hidden py-12">
     {stats.map((stat, index) => (
      <div key={index} onClick={() => setActiveIndex(index)} className="cursor-pointer">
       <Statscard {...stat} isActive={index === activeIndex} />
      </div>
     ))}
    </div>

    {activeIndex > 0 && (
      <button onClick={handlePrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full text-white backdrop-blur-sm transition-all shadow-lg z-10">
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
    )}

    {activeIndex < stats.length - 1 && (
     <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full text-white backdrop-blur-sm transition-all shadow-lg z-10" onClick={handleNext} >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
     </button>
    )}
    </div>

    <div className="flex justify-center gap-2">
     {stats.map((_, idx) => (
      <button key={idx} onClick={() => setActiveIndex(idx)} className={`h-2 rounded-full transition-all ${ idx === activeIndex ? 'w-8 bg-blue-500' : 'w-2 bg-slate-600 hover:bg-slate-500' }`} />
     ))}
    </div>
   </div>

);
}

export default Dashboard;