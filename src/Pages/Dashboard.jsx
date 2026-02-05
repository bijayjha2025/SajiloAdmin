
import Statscard from "../Components/Statscard";
import { Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";

const Dashboard =() => {
 return(
  <div className="space-y-6">

   <div>
    <h1 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">Dashboard</h1>
    <p className="text-sm text-slate-500 dark:text-slate-400">Overview of your business</p>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Statscard title="Total Users" value="1,200" change="+5.4%" icon={Users} positive />
    <Statscard title="Orders" value="3,245" change="+3.2%" icon={ShoppingCart} positive />
    <Statscard title="Revenue" value="$48,000" change="-1.8%" icon={DollarSign} positive={false} />
    <Statscard title="Growth" value="12.5%" change="+2.1%" icon={TrendingUp} positive />
   </div>
  </div>

);
}

export default Dashboard;