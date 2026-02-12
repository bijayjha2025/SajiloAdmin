import GlassCard from "../Components/GlassCard";
import { useState } from "react";
import { productsData } from "../Data/mockData";
import { Search, Filter, Plus, Edit, Trash2 } from "lucide-react";

const Products =() =>{
 const [searchTerm, setSearchTerm] = useState("");

 const filteredProducts = productsData.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
 <div className="space-y-6">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
   <div className="relative w-full md:w-96">
    <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
    
    <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-amber-400/50 transition-all text-gray-700 dark:text-gray-200" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
   </div>

   <div className="flex gap-3 w-full md:w-auto">
    <button className='flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-slate-700 transition-colors'>
     <Filter size={18} />
     <span>Filters</span>
    </button>

    <button className='flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-medium shadow-lg shadow-amber-500/20 transition-all'>
     <Plus size={18} />
     <span>Add Product</span>
    </button>
   </div>
  </div>

  <GlassCard className="overflow-hidden">
   <div className="overflow-x-auto">
    <table className="w-full">
     <thead className='bg-gray-50/50 dark:bg-slate-800/50 border-b border-gray-200 dark:border-gray-700'>
      <tr>
       <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider'>Product</th>
       <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider'>Category</th>
       <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider'>Price</th>
       <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider'>Stock</th>
       <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider'>Status</th>
       <th className='px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider'>Actions</th>
      </tr>
     </thead>

     <tbody className="'divide-y divide-gray-200 dark:divide-gray-700">
      {filteredProducts.map((product) => (
       <tr key={product.id} className="'hover:bg-amber-50/50 dark:hover:bg-white/5 transition-colors">
        <td className='px-6 py-4 whitespace-nowrap'>
         <div className='flex items-center gap-3'>
          <div className='h-10 w-10 rounded-lg bg-gray-200 dark:bg-slate-700 flex items-center justify-center text-xl'>🛍️
          </div>
          <span className='font-medium text-gray-900 dark:text-white'>{product.name}</span>
         </div>
        </td>

        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400'>{product.category}</td>
        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white'>${product.price.toFixed(2)}</td>
        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400'>{product.stock} units</td>
        <td className='px-6 py-4 whitespace-nowrap'>
         <span className={`px-2 py-1 text-xs font-semibold rounded-full
          ${product.status === "In Stock" ?
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
            : product.status === "Low Stock" ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
            : "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400"
           }`}>
          {product.status}
         </span>
        </td>

        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
         <div className='flex items-center justify-end gap-2'>
          <button className='p-1.5 rounded-lg text-gray-500 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors'>
           <Edit size={16} />
          </button>
          <button className='p-1.5 rounded-lg text-gray-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors'>
           <Trash2 size={16} />
          </button>
         </div>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </GlassCard>
  
 </div>


 );    
}

export default Products;