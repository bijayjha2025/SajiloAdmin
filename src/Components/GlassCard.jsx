const GlassCard = ({ children, className = "" }) => {
    return (
     <div className={` relative overflow-hidden bg-white/40 dark:bg-slate-900/50 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl rounded-2xl ${className} `}>
        {children}
     </div>
    );
};

export default GlassCard;
