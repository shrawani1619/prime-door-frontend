import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import PortalLayout from './layouts/PortalLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';
// import ServiceArea from './pages/ServiceArea';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

import Login from './pages/portal/Login';
import PortalDashboard from './pages/portal/Dashboard';
import Jobs from './pages/portal/Jobs';
import Invoices from './pages/portal/Invoices';
import AdminDashboard from './pages/admin/Dashboard';
import AdminCustomers from './pages/admin/Customers';
import AdminQuotes from './pages/admin/Quotes';
import AdminJobs from './pages/admin/Jobs';
import AdminInvoices from './pages/admin/Invoices';
import AdminInvoiceView from './pages/admin/InvoiceView';
import PortalInvoiceView from './pages/portal/InvoiceView';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="portfolio" element={<Portfolio />} />
        {/* <Route path="service-area" element={<ServiceArea />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="blog">
          <Route index element={<Blog />} />
          <Route path=":slug" element={<BlogPost />} />
        </Route>
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="portal/login" element={<Navigate to="/login" replace />} />

      <Route
        path="portal"
        element={
          <ProtectedRoute roles={['customer', 'admin']}>
            <PortalLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<PortalDashboard />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="invoices/:id/view" element={<PortalInvoiceView />} />
      </Route>

      <Route
        path="admin"
        element={
          <ProtectedRoute roles={['admin']}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="quotes" element={<AdminQuotes />} />
        <Route path="jobs" element={<AdminJobs />} />
        <Route path="invoices" element={<AdminInvoices />} />
        <Route path="invoices/:id/view" element={<AdminInvoiceView />} />
      </Route>
    </Routes>
    </>
  );
}
