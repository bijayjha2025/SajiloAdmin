
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

  <aside className={` fixed left-0 top-0 z-50 h-screen w-64 p-4 flex flex-col bg-slate-900 text-slate-200 transition-transform duration-300 
  ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `} >

   <div className="flex justify-between items-center mb-8">
    <h1 className="text-2xl font-bold text-amber-400">SajiloAdmin</h1>
    <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}><X size={22} /></button>
   </div>

   <nav className="flex-1">
    <ul className="space-y-2">
    {links.map((link) => (
     <li key={link.path}>

      <NavLink to={link.path} className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? "bg-amber-400 text-slate-900" : "text-slate-400 hover:bg-amber-400/10 hover:text-amber-300" }`} >
         <link.icon size={18} />
      <span className="text-sm font-medium">{link.name}</span>
      </NavLink>
     </li>
     ))}
    </ul>
   </nav>
   
   <div className="border-t border-slate-800 pt-4">
    <p className="text-xs text-slate-500 text-center">&copy; 2026 SajiloAdmin</p>
   </div>
   </aside>
  </>
    
 );
}

export default Sidebar;