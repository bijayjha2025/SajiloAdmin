
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';
import Analytics from './Pages/Analytics';
import Charts from './Pages/Charts';
import Settings from './Pages/Settings';

function App() {
  
  return (
   <Router>
    <Routes>
     <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="charts" element={<Charts />} />
      <Route path="settings" element={<Settings />} />
     </Route>
    </Routes>
   </Router>
  )
}

export default App
