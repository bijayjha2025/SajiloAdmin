import GlassCard from "../Components/GlassCard";
import { useState, useEffect } from "react";
import { productsData as initialProducts } from "../Data/mockData";
import { Search, Filter, Plus, Edit, Trash2, Save, ChevronLeft, ChevronRight, ArrowUpDown, CheckSquare, Square } from "lucide-react";
import { useToast } from "../Context/ToastContext";
import Modal from "../Components/Modal";
import { TableSkeleton } from "../Components/Skeleton";

const Products =() =>{
 const [products, setProducts] = useState(initialProducts);
 const [searchTerm, setSearchTerm] = useState("");
 const { addToast } = useToast();

 const [isModalOpen, setIsModalOpen] = useState(false);
 const [editingProduct, setEditingProduct] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1500);
  return () => clearTimeout(timer);
 }, []);

 const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
 const [selectedItems, setSelectedItems] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 6;

 const [formData, setFormData] = useState({
  name: "",
  category: "",
  price: "",
  stock: "",
  status: "In Stock",
 });

 const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase())
 );

 const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortConfig.key) return 0;

    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];

    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === paginatedProducts.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(paginatedProducts.map(p => p.id));
    }
  };

  const toggleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedItems.length} items?`)) {
      setProducts(products.filter(p => !selectedItems.includes(p.id)));
      setSelectedItems([]);
      addToast(`${selectedItems.length} products deleted successfully`, "success");
    }
  };

 const handleOpenModal = (product = null) => {
  if (product) {
    setEditingProduct(product);
    setFormData({ ...product });
  } else {
    setEditingProduct(null);
    setFormData({ name: "", category: "", price: "", stock: "", status: "In Stock" });
  }
  setIsModalOpen(true);
 };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
      addToast("Product deleted successfully", "error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...formData, id: p.id, price: Number(formData.price), stock: Number(formData.stock) } : p));
      addToast("Product updated successfully", "success");
    } else {
      const newProduct = {
        ...formData,
        id: Date.now(),
        price: Number(formData.price),
        stock: Number(formData.stock)
      };
      setProducts([newProduct, ...products]);
      addToast("New product added successfully", "success");
    }
    setIsModalOpen(false);
  };

 return (
 <div className="space-y-6">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
   <div className="relative w-full md:w-96">
    <div className="flex items-center gap-2">
    {selectedItems.length > 0 && (
     <button onClick={handleBulkDelete} className="p-2 rounded-lg text-gray-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors flex items-center gap-2">
      <Trash2 size={18} />
      <span>Delete({selectedItems.length})</span>
     </button>
     )}

    <div className="relative w-full">
    <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
    
    <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-amber-400/50 transition-all text-gray-700 dark:text-gray-200" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
   </div>
   </div>
   </div>

   <div className="flex gap-3 w-full md:w-auto">
    <button className='flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-slate-700 transition-colors'>
     <Filter size={18} />
     <span>Filters</span>
    </button>


    <button onClick={() => handleOpenModal()} className='flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-medium shadow-lg shadow-amber-500/20 transition-all'>
     <Plus size={18} />
     <span>Add Product</span>
    </button>
   </div>
  </div>

  {loading ? <TableSkeleton /> : (
  <GlassCard className="overflow-hidden">
   <div className="overflow-x-auto">
    <table className="w-full">
     <thead className='bg-gray-50/50 dark:bg-slate-800/50 border-b border-gray-200 dark:border-gray-700'>

     <tr>
     <th className="px-6 py-4">
      <button onClick={toggleSelectAll} className="text-gray-400 hover:text-amber-500 transition-colors">
       {selectedItems.length === paginatedProducts.length && paginatedProducts.length > 0 ? <CheckSquare size={20} className="text-amber-500" /> : <Square size={20} />}
      </button>
     </th>

     {[
      { key: 'name', label: 'Product' },
      { key: 'category', label: 'Category' },
      { key: 'price', label: 'Price' },
      { key: 'stock', label: 'Stock' },
      { key: 'status', label: 'Status' }
      ].map((col) => (

       <th key={col.key} className='px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 transition-colors' onClick={() => handleSort(col.key)}>
       <div className="flex items-center gap-1">
        {col.label}
        <ArrowUpDown size={14} className={`transition-opacity ${sortConfig.key === col.key ? 'opacity-100 text-amber-500' : 'opacity-40'}`} />
       </div>
      </th>
      ))}
     <th className='px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider'>Actions</th>
     </tr>
     </thead>

     <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      {filteredProducts.map((product) => (
       <tr key={product.id} className={`hover:bg-amber-50/50 dark:hover:bg-white/5 transition-colors ${selectedItems.includes(product.id) ? 'bg-amber-50/30 dark:bg-amber-500/5' : ''}`}>

        <td className="px-6 py-4">
         <button onClick={() => toggleSelect(product.id)} className="text-gray-400 hover:text-amber-500 transition-colors">
          {selectedItems.includes(product.id) ? <CheckSquare size={20} className="text-amber-500" /> : <Square size={20} />}
         </button>
        </td>

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
          <button onClick={() => handleOpenModal(product)} className='p-1.5 rounded-lg text-gray-500 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors'>
           <Edit size={16} />
          </button>
          <button onClick={() => handleDelete(product.id)} className='p-1.5 rounded-lg text-gray-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors'>
           <Trash2 size={16} />
          </button>
         </div>
        </td>
       </tr>
      ))}
     </tbody>
     </table>
    </div>

    <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
     <p className="text-sm text-gray-500 dark:text-gray-400">
      Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, sortedProducts.length)}</span> of <span className="font-medium">{sortedProducts.length}</span> results
     </p>

    <div className="flex items-center gap-2">
     <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
      <ChevronLeft size={18} />
     </button>

     <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
      <ChevronRight size={18} />
     </button>
     </div>
    </div>
   </GlassCard>
  )}
    
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingProduct ? "Edit Product" : "Add New Product"}>
     <form onSubmit={handleSubmit} className="space-y-4">
      <div>
       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Name</label>
        <input required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
       </div>

       <div className="grid grid-cols-2 gap-4">
        <div>
         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
          <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
           <option value="">Select...</option>
           <option value="Electronics">Electronics</option>
           <option value="Furniture">Furniture</option>
           <option value="Wearables">Wearables</option>
           <option value="Accessories">Accessories</option>
          </select>
         </div>
        <div>

        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
         <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
         </select>
        </div>
       </div>

       <div className="grid grid-cols-2 gap-4">
        <div>
         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price ($)</label>
          <input required type="number" step="0.01" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
        </div>
       <div>
       
       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Stock</label>
        <input required type="number" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })}/>
      </div>
    </div>

    <div className="pt-4 flex justify-end gap-3">
     <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">Cancel</button>
     
     <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 rounded-lg shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2" >
      <Save size={16} />Save Product</button>
    </div>
   </form>
  </Modal>
 </div>
 );    
}
export default Products;