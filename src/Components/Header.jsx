
import { Bell, Search, User, Menu, LogOut } from 'lucide-react';
import ThemeToggle from '../ThemeToggle.jsx';
import { useAuth } from '../Context/AuthContext.jsx';

const Header = ( { theme, setTheme, ToggleSidebar }) => {
  const { logout } = useAuth();

 return(
 <header className='
 flex justify-between items-center p-4 h-16 rounded-lg
 bg-white dark:bg-slate-900
 border-b border-slate-200 dark:border-slate-800
 transition-colors duration-300 '>

  <div className='flex items-center gap-4 flex-1'>
   <button className='md:hidden text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors' onClick={ToggleSidebar}><Menu size={24} /></button>
   
   <div className='flex items-center gap-3 border rounded-lg px-4 py-2 w-full max-w-md bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 group focus-within:ring-2 focus-within:ring-amber-500/50 transition-all' >

    <Search size={18} className='text-slate-400 dark:text-slate-400 group-hover:text-amber-500 transition-colors' />
    <input type="text" placeholder="Search..." className="flex-1 bg-transparent outline-none text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500" />
   </div>
  </div>

  <div className='flex items-center gap-4'>
   <button className='h-9 w-9 flex items-center relative justify-center text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors'><Bell size={18} />
   <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span></button>
    
     <div className='text-yellow-400 dark:text-yellow-400 h-9 w-9 flex items-center justify-center'>
      <ThemeToggle theme={theme} setTheme={setTheme} />
     </div>
     
     <div className='flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700'>
      <div className='h-9 w-9 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400'><User size={18} />
      </div>
    
     <div className='leading-tight hidden sm:block'>
      <p className='text-sm font-medium text-gray-500'>Admin</p>
      <p className='text-xs text-gray-500'>admin@sajilo.com</p>
     </div>

     <button onClick={logout} className='h-9 w-9 flex items-center justify-center text-slate-400 hover:text-slate-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors ml-2'><LogOut size={18} /></button>
    </div>
  </div>
 </header>
 );
}

export default Header;