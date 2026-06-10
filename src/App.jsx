import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PortalLayout from './layouts/PortalLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CommercialServices from './pages/CommercialServices';
import LoadingDockServices from './pages/LoadingDockServices';
import ResidentialServices from './pages/ResidentialServices';
import EmergencyRepair from './pages/EmergencyRepair';
import MaintenancePrograms from './pages/MaintenancePrograms';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import ServiceArea from './pages/ServiceArea';
import Contact from './pages/Contact';

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
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/commercial" element={<CommercialServices />} />
        <Route path="services/loading-dock" element={<LoadingDockServices />} />
        <Route path="services/residential" element={<ResidentialServices />} />
        <Route path="services/emergency" element={<EmergencyRepair />} />
        <Route path="services/maintenance" element={<MaintenancePrograms />} />
        <Route path="products" element={<Products />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="service-area" element={<ServiceArea />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="portal/login" element={<Login />} />

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
  );
}
