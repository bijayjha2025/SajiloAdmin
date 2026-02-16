
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

         
        </div>

       </div>
      </form>


     </div>
     </div>
     </div>


  );
};
export default Login;


