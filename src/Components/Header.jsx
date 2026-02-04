
import { Bell, Search, User, Menu } from 'lucide-react';
import ThemeToggle from '../ThemeToggle.jsx';

const Header = ( { theme, setTheme }) => {

 return(
 <header className='flex justify-between items-center bg-white border-b border-gray-200 p-4 h-16 transition-all duration-300 rounded-lg '>
  <div className='flex items-center gap-4'>
   <button className='md:hidden text-gray-500 hover:text-gray-700'><Menu size={24} /></button>
   <div className='flex items-center gap-4 border rounded-lg px-4 py-2 w-full max-w-md bg-ray-50 md:flex'>
    <Search size={20} className='text-gray-400' />
    <input type="text" placeholder="Search..." className='bg-transparent outline-none flex-1 text-sm text-gray-700' />
   </div>
  </div>

  <div className='flex items-center gap-6'>
   <button className='relative text-gray-400 hover:text-gray-600'><Bell size={20} /></button>
    <div className='flex items-center gap-3'>
     <div className='text-yellow-400'>
      <ThemeToggle theme={theme} setTheme={setTheme} />
     </div>
     
     <div className='h-8 w-8 rounded-full flex items-center justify-center' ><User size={20} /></div>
     <div>
      <p>Admin</p>
      <p>admin@sajilo.com</p>
     </div>
    </div>
  </div>
 </header>
 );
}

export default Header;