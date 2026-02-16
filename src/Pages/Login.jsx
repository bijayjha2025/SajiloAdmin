
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowRight, Loader } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("admin@sajilo.com");
  const [password, setPassword] = useState("admin123");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await login(email, password);

    if(success){
      navigate("/");
    }
    setIsSubmitting(false);
  };

  return(
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#faf4e1] via-[#fcedbb] to-[#fce28b] dark:from-[#020617] dark:via-[#020617] dark:to-[#0f172a] p-4 transition-colors duration-300">

    <div className="w-full max-w-md bg-white/40 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-3xl overflow-hidden animate-fade-in-up">

     <div className="p-8 space-y-8">
      <div className="text-center space-y-2">
       <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">Welcome Back</h1>
       <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access the dashboard</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
       <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email Address</label>

        <div className="relative">
         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-amber-500 transition-colors"/>
         </div>

         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-11 pr-4 py-3 bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all dark:text-white" placeholder="name@company.com" required />
        </div>
       </div>

       <div className="space-y-2">
        <div className="flex justify-between items-center ml-1">
         <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>

         <a href="#" className="text-xs font-medium text-amber-600 dark:text-amber-400 hover:text-amber-500">Forgot Password?</a>
        </div>

        <div className="relative">
         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-amber-500 transition-colors"/>
         </div>

         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-11 pr-4 py-3 bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all dark:text-white" placeholder="••••••••" required />
        </div>
       </div>

       <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/30 transform transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
        {isSubmitting ? 
        ( <Loader className="animate-spin h-5 w-5" />) : 
        ( <span className="flex items-center gap-2">Sign In <ArrowRight className="h-4 w-4" /></span>
        )}
       </button>
      </form>
     </div>

     <div className="px-8 py-4 bg-gray-50/50 dark:bg-slate-800/50 border-t border-gray-100 dark:border-gray-800 center">
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Don't have an account? <a href="#" className="text-amber-600 dark:text-amber-400 hover:underline">Contact Admin</a></p>
     </div>

     </div>
     </div>

  );
};
export default Login;


