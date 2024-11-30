
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import Dashboard from './pages/dashboard'
import ProductsPage from './pages/products'
import SalesPage from './pages/sales'
import SignupPage from './auth/signup'
import LoginPage from './auth/login'
import '../global.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App