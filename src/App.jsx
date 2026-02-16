
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';
import Analytics from './Pages/Analytics';
import Charts from './Pages/Charts';
import Settings from './Pages/Settings';
import Login from './Pages/Login';
import { useAuth, AuthProvider } from './Context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if(loading){
    return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
    </div>);
  }

  if(!user){
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  
  return (
   <Router>
    <AuthProvider>
      <Routes>
       <Route path="/login" element={<Login />} />
       
       <Route path="/" element= {
       <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
     }>

      <Route index element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="charts" element={<Charts />} />
      <Route path="settings" element={<Settings />} />
     </Route>
    </Routes>
    </AuthProvider> 
   </Router>
  )
}

export default App
