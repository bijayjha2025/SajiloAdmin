
import { LayoutDashboard, ShoppingBag, PieChart, BarChart2, Settings, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {

   const links = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Products", icon: ShoppingBag, path: "/products" },
    { name: "Analytics", icon: PieChart, path: "/analytics" },
    { name: "Charts", icon: BarChart2, path: "/charts" },
    { name: "Settings", icon: Settings, path: "/settings" },
   ];

 return(
  <>
  {isOpen && (
   <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setIsOpen(false)} />
  )}

  <aside className={` fixed left-0 top-0 z-40 h-screen w-64 flex flex-col bg-gradient-to-b from-[#f7ab1e] to-[#f2d13d] dark:from-[#111] dark:to-[#1a1a1a] text-gray-900 dark:text-gray-200 transition-transform duration-300 
  ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `} >

   <div className="flex justify-between items-center px-6 py-4">
    <h1 className="text-xl font-bold tracking-wide">Sajilo<span className="text-white dark:text-amber-400">Admin</span></h1>

    <button className="md:hidden text-gray-700 dark:text-gray-400" onClick={() => setIsOpen(false)}><X size={22} /></button>
   </div>

   <nav className="flex-1 px-3">
    <ul className="space-y-1">
    {links.map((link) => (
     <li key={link.path}>

      <NavLink to={link.path} className={({ isActive }) => `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
        ${isActive ? "bg-white/80 text-gray-900" : "text-gray-800 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-white/10" }`} >
         <link.icon size={18} />
      <span className="text-sm font-medium">{link.name}</span>
      </NavLink>
     </li>
     ))}
    </ul>
   </nav>
   
   <div className="px-6 py-4 border-t border-white/30 dark:border-gray-800">
    <p className="text-xs text-gray-700 dark:text-gray-500 text-center">&copy; 2026 SajiloAdmin</p>
   </div>
   </aside>
  </>
    
 );
}

export default Sidebar;