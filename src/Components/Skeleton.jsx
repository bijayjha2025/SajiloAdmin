const Skeleton = ({ className = "" }) => {
 return (
    <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`}></div>
 );
};

export const CardSkeleton = () => (
 <div className="border border-white/20 dark:border-white/10 shadow-xl rounded-2xl p-6 bg-white/40 dark:bg-slate-900/50 backdrop-blur-md">
    <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
    <div className="space-y-3">
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
    </div>
   </div>
);

export const TableSkeleton = () => (
  <div className="border border-white/20 dark:border-white/10 shadow-xl rounded-2xl overflow-hidden bg-white/40 dark:bg-slate-900/50 backdrop-blur-md">
    <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex gap-4">
     <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
     <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
    </div>
    
    <div className="p-4 space-y-4">
     {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="flex gap-4">
       <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
      </div>
     ))}
    </div>
  </div>
);

export default Skeleton;
