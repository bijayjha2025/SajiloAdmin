import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Statscard = ({ title, value, change, icon: Icon, positive, isActive }) => {
  return (
   <div className={`flex-shrink-0 w-64 rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transtition-all hover:shadow-md ${
    isActive ? 'h-72 bg-gradient-to-br from-orange-600 to-yellow-600 border-orange-400 shadow-2xl shadow-orange-500/30' : 'h-72 bg-gradient-to-br from-orange-400 to-yellow-400 border-orange-500 shadow-2xl shadow-orange-400/30' }`} >
    
    <div className='flex items-center justify-between mb-4'>
     <span className={`text-sm font-medium ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>{title}</span>
     <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
    </div>

    <div className={`text-3xl font-bold mb-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>{value}</div>

     <div className="flex items-center gap-1">
     {positive ? ( <ArrowUpRight className='w-4 h-4 text-green-400' />
      )
      :
      ( <ArrowDownRight className="w-4 h-4 text-red-400" /> )}
      <span className={`text-sm font-medium ${positive ? 'text-green-400' : 'text-red-400'}`}>{change}</span>
     </div>

     {isActive && (
      <div className="mt-6 pt-6 border-t border-blue-400/30">
       <p className="text-xs text-blue-100/80">Last updated: 2 hours ago</p>
      </div>
     )}
    </div>
  )
}

export default Statscard