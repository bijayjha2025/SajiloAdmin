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
   <div className="
   min-h-screen
   bg-gradient-to-tr
   from-[#faf4e1] via-[#fcedbb] to-[#fce28b]
   dark:from-[#020617] dark:via-[#020617] dark:to-[#020617]
   transition-all duration-300" >

    <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} /> 

    <div className="ml-0 md:ml-64 flex flex-col min-h-screen">
     <Header theme={theme} setTheme={setTheme} ToggleSidebar = {() => setIsSidebarOpen(!isSidebarOpen)} />
     
     <main className="pt-16 p-6">
      <Outlet />
     </main>
    </div>
   </div>
); 
}

export default Layout;