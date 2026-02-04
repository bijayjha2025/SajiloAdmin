
import { Bell, Search, User, Menu } from 'lucide-react';
import ThemeToggle from '../ThemeToggle.jsx';

const Header = ( { theme, setTheme, ToggleSidebar }) => {

 return(
 <header className='
 flex justify-between items-center p-4 h-16 rounded-lg
 bg-white dark:bg-slate-900
 border-b border-slate-200 dark:border-slate-800
 transition-colors duration-300 '>
  <div className='flex items-center gap-4 flex-1'>
   <button className='md:hidden text-slate-500 hover:text-slate-700' onClick={ToggleSidebar}><Menu size={24} /></button>
   <div className='flex items-center gap-3 border rounded-lg px-4 py-2 w-full max-w-md bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'>
    <Search size={20} className='text-slate-400 dark:text-slate-400' />
    <input type="text" placeholder="Search..." className="flex-1 bg-transparent outline-none text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500" />
   </div>
  </div>

  <div className='flex items-center gap-6'>
   <button className='relative text-slate-400 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-300'><Bell size={20} />
   <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span></button>
    <div className='flex items-center gap-3'>
     <div className='text-yellow-400 dark:text-yellow-400'>
      <ThemeToggle theme={theme} setTheme={setTheme} />
     </div>
     
     <div className='flex items-center gap-3'>
      <div className='h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold'><User size={20} /></div>
     </div>

     <div className='leading-tight'>
      <p className='text-sm font-medium text-gray-700'>Admin</p>
      <p className='text-xs text-gray-500'>admin@sajilo.com</p>
     </div>
    </div>
  </div>
 </header>
 );
}

export default Header;