
import { createContext, useContext, useState, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
 const [toasts, setToasts] = useState([]);

 const addToast = useCallback((message, type = 'info') => {
   const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
     removeToast(id);
    }, 3000);
 }, []);

 const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
 }, []);

 return (
 <ToastContext.Provider value={{ addToast, removeToast }}>
  {children}
  <div className="fixed bottom-4 right-4 z-50 space-y-2">
   {toasts.map((toast) => (
    <div key={toast.id} className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg transform transition-all duration-300 animate-slide-in
    ${toast.type === 'success' ? 'bg-emerald-500 text-white' : toast.type === 'error' ? 'bg-rose-500 text-white' :
        toast.type === 'warning' ? 'bg-amber-500 text-white' : 'bg-blue-500 text-white'
     }`} > 

     {toast.type === 'success' && <CheckCircle size={18} />}
     {toast.type === 'error' && <AlertCircle size={18} />}
     {toast.type === 'warning' && <AlertTriangle size={18} />}
     {toast.type === 'info' && <Info size={18} />}

     <p className="text-sm font-medium">{toast.message}</p>

     <button onClick={() => removeToast(toast.id)} className="opacity-70 hover:opacity-100 transition-opacity">
      <X size={16} />
     </button>
    </div>
    ))}
   </div>
 </ToastContext.Provider>
);
};
