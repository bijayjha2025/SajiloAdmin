import { useEffect } from "react";
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, setTheme }) => {
 useEffect(()=>{
  if(theme === "dark"){
    document.documentElement.classList.add("dark");
  } else{
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme)
  },[theme]);
    
  return (
   <button>
    {theme === "dark" ? ( <Sun className="size-8.5 p-1.5 border border-gray-500 rounded-full" onClick={()=>setTheme("light")} />)
    : (
    <Moon className="size-8.5 p-1.5 border border-gray-500 rounded-full" onClick={()=>setTheme("dark")} /> )}
   </button>
  );
};

export default ThemeToggle;