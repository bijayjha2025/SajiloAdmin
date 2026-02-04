import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

 return(
   <div className="min-h-screen dark:bg-black bg-white">
    <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} /> 
    <div className="flex flex-col mx-auto p-4 min-h-screen">
     <Header theme={theme} setTheme={setTheme} />
     <main className="flex-1 p-6 md:ml-64 overflow-y-auto transition-all duration-300">
      <Outlet />
     </main>
    </div>
   </div>
); 
}

export default Layout;