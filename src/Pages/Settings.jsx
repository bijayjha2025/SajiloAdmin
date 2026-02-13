
import { useState } from "react";
import { User, Mail, Bell, Shield, Save } from 'lucide-react';
import GlassCard from "../Components/GlassCard";
import { useToast } from "../Context/ToastContext";


const Setting = () => {
 const { addToast } = useToast();
 const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    promotions: false,
 });

 const handleSaveProfile = () => {
  addToast('Profile updated successfully', 'success');
 }

 const handleSaveSecurity = () => {
  addToast('Security settings updated', 'success');
 }

 return(
  <div className='max-w-4xl mx-auto space-y-6'>
   <h1 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>Settings</h1>

   <GlassCard className="p-6">
   <div className='flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4'>
    <div className='p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400'>
     <User size={24} />
    </div>
    <div>
     <h2 className='text-lg font-semibold text-gray-800 dark:text-white'>Profile</h2>
     <p className='text-sm text-gray-500 dark:text-gray-400'>Manage your personal information</p>
    </div>
   </div>

   <div className='flex flex-col md:flex-row gap-8 items-start'>
    <div className='flex flex-col items-center gap-4'>
     <div className='h-24 w-24 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg'>A
     </div>
     <button className='text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline'>Change Avatar</button>
    </div>

    <div className='flex-1 w-full space-y-4'>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='space-y-2'>
       <label className='text-xs font-medium text-gray-500 dark:text-gray-400 uppercase'>First Name</label>
       <input type="text" defaultValue="Admin" className='w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-400/50 outline-none transition-all' />
      </div>
                            
      <div className='space-y-2'>
       <label className='text-xs font-medium text-gray-500 dark:text-gray-400 uppercase'>Last Name</label>
       <input type="text" defaultValue="User" className='w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-400/50 outline-none transition-all' />
      </div>  
     </div>

     <div className='space-y-2'>
      <label className='text-xs font-medium text-gray-500 dark:text-gray-400 uppercase'>Email Address</label>
      <div className='relative'>
       <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={18} />
       <input type="email" defaultValue="admin@sajilo.com" className='w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-400/50 outline-none transition-all' />
      </div>
     </div> 
                        
     <div className='pt-2'>
      <button className='px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium shadow-md shadow-amber-500/20 transition-all'>Save Changes</button>
     </div>
    </div>
   </div>
   </GlassCard>
   
   <GlassCard className="p-6">
   <div className='flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4'>
    <div className='p-2 bg-amber-100 dark:bg-amber-500/20 rounded-lg text-amber-600 dark:text-amber-400'>
     <Bell size={24} />
    </div>
    <div>
     <h2 className='text-lg font-semibold text-gray-800 dark:text-white'>Notifications</h2>
     <p className='text-sm text-gray-500 dark:text-gray-400'>Choose what you want to be notified about</p>
    </div>
   </div>

   <div className='space-y-4'>
    {[
     { id: 'email', label: 'Email Notifications', desc: 'Receive daily summaries and critical alerts' },
     { id: 'push', label: 'Push Notifications', desc: 'Get real-time updates on your phone' },
     { id: 'promotions', label: 'Promotional Emails', desc: 'Receive offers and newsletters' }
     ].map((item) => (
      <div key={item.id} className='flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors'>
       <div>
        <p className='font-medium text-gray-800 dark:text-white'>{item.label}</p>
        <p className='text-sm text-gray-500 dark:text-gray-400'>{item.desc}</p>
       </div>
                            
       <label className='relative inline-flex items-center cursor-pointer'>
        <input type="checkbox" checked={notifications[item.id]} onChange={() => {
         setNotifications(prev => { 
            const newState = ({...prev, [item.id] : !prev[item.id] });
            addToast(`${item.label} ${newState[item.id] ? 'enabled' : 'disabled'}`, 'info');
            return newState;
         });
      }} className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-500"></div>
      </label> 
     </div>
    ))}
   </div>
   </GlassCard>

   <GlassCard className="p-6">
    <div className='flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4'>
     <div className='p-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg text-emerald-600 dark:text-emerald-400'>
      <Shield size={24} />
     </div>

     <div>
      <h2 className='text-lg font-semibold text-gray-800 dark:text-white'>Security</h2>
      <p className='text-sm text-gray-500 dark:text-gray-400'>Ensure your account is secure</p>
     </div>
    </div>

    <div className='flex items-center justify-between'>
     <div>
      <p className='font-medium text-gray-800 dark:text-white'>Two-Factor Authentication</p>
      <p className='text-sm text-gray-500 dark:text-gray-400'>Add an extra layer of security to your account</p>
     </div>
     
     <button className='px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors'>Enable 2FA</button>
    </div>
                
    <div className='flex items-center justify-between mt-4'>
     <div>
      <p className='font-medium text-gray-800 dark:text-white'>Change Password</p>
      <p className='text-sm text-gray-500 dark:text-gray-400'>Update your password regularly</p>
     </div>
                    
     <button className='px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors'>Change</button>
    </div>
   </GlassCard>
  </div>
 );
}

export default Setting;