import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

const Statscard = ({ title, value, change, icon: Icon, positive, isActive, isDark }) => {
  return (
   <div className={`flex-shrink-0 w-64 rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transtition-all hover:shadow-md 
    ${
   isActive ?
     isDark ? 
     'h-80 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 border-orange-400 shadow-2xl shadow-orange-500/40 -translate-y-4'
     :'h-80 bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-300 border-orange-500 shadow-2xl shadow-orange-400/40 -translate-y-4' 
      : isDark ? 'h-60 bg-slate-800/70 border-slate-700 translate-y-0 backdrop-blur-sm' 
   :
      'h-60 bg-white/70 border-slate-300 translate-y-0 backdrop-blur-sm' }
    
    ${!isActive && 'opacity-60 hover:opacity-80'} transform-gpu `} >
    
    <div className={`flex items-center justify-between mb-6 transition-all duration-500 
       ${ isActive ? 'scale-110' : 'scale-100' }`}>

     <span className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-600'}`}>{title}</span>

     <div className={`p-2 rounded-lg transition-all duration-500 ${isActive ? 'bg-white/20 rotate-12' : isDark ? 'bg-slate-700/50 rotate-0' : 'bg-slate-200/50 rotate-0'}` }>
     <Icon className={`w-5 h-5 transition-all duration-500 ${isActive ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-500'}`} />
    </div>
    </div>

    <div className={`text-4xl font-bold mb-3 transition-all duration-500 ${isActive ? 'text-white scale-105' : isDark ? 'text-slate-200 scale-100' : 'text-slate-800 scale-100'}`}>{value}</div>

     <div className={`flex items-center gap-2 transition-all duration-300 ${isActive ? 'scale-105' : 'scale-100' }` }>

      <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${positive ? (isDark ? 'bg-green-500/20' : 'bg-green-100') : (isDark ? 'bg-red-500/20' : 'bg-red-100')}` }>

      {positive ? ( 
      < ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
              isActive ? 'translate-y-[-2px]' : ''
            } ${isDark ? 'text-green-400' : 'text-green-600'}`} />
      ) : (
            <ArrowDownRight className={`w-4 h-4 transition-transform duration-300 ${
              isActive ? 'translate-y-[2px]' : ''
            } ${isDark ? 'text-red-400' : 'text-red-600'}`} />
          )}

      <span className={`text-sm font-semibold ${positive 
              ? isDark ? 'text-green-400' : 'text-green-600'
              : isDark ? 'text-red-400' : 'text-red-600'
          }`}>{change}</span>
      </div>
     </div>

     <div className={`mt-6 pt-6 border-t overflow-hidden transition-all duration-700 ${
        isActive 
          ? 'opacity-100 max-h-40 border-white/30' 
          : 'opacity-0 max-h-0 border-transparent'
      }`}>
        <div className={`transition-all duration-700 delay-100 ${
          isActive ? 'translate-y-0' : 'translate-y-4'
        }`}>
          <p className="text-xs text-white/90 mb-3 flex items-center gap-2">
            <TrendingUp className="w-3 h-3" />
            Last updated: 2 hours ago
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-white/80">
              <span>Performance</span>
              <span>75%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-white rounded-full transition-all duration-1000 delay-300 ${
                  isActive ? 'w-[75%]' : 'w-0'
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statscard