import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Statscard = ({ title, value, change, icon: Icon, positive }) => {
  return (
   <div className='rounded-xl p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transtition-all hover:shadow-md'>
    <div className='flex items-center justify-between'>
     <p className='text-sm dark:text-slate-400 text-slate-500'>{title}</p>

     <div className='h-9 w-9 rounded-lg flex items-center justify-center bg-amber-100 dar:bg-amber-400/10 text-amber-600 dark:text-amber-400'>
      <Icon size={18}></Icon>
     </div>
    </div>

    <div className='mt-4'>
     <h3 className='text-2xl font-semibold text-slate-800 dark:text-slate-100'>{value}</h3>

     <div className={`mt-1 flex items-center gap-1 text-sm
     ${positive ? "text-emerald-600" : "text-red-500"}`}>{positive ? <ArrowUpRight size={16} className="text-green-500" /> : <ArrowDownRight size={16} className="text-red-500" />}<span>{change}</span>
     </div>
    </div>
   </div>
  )
}

export default Statscard