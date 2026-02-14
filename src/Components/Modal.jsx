
import { X } from "lucide-react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
   if (isOpen) {
    document.body.style.overflow = "hidden";
   } else {
    document.body.style.overflow = "unset";
   }
    return () => {
    document.body.style.overflow = "unset";
    };
}, [isOpen]);

if (!isOpen) return null;

return ReactDOM.createPortal(
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-scale-up border border-gray-100 dark:border-gray-800">

  <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-slate-800/50">
   <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
   <button onClick={onClose} className="p-1 rounded-lg text-gray-500 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
     <X size={20} />
   </button>
  </div>

  <div className="p-6">
   {children}
  </div>

 </div>
</div>,
 document.body
);
};

export default Modal;
