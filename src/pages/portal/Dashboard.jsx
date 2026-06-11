import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function PortalDashboard() {
  return (
    <>
      <SEO title="Dashboard" />

      <h1 className="text-3xl font-bold text-navy-900 mb-6">Welcome</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          to="/portal/jobs"
          className="bg-white p-6 rounded-lg shadow border border-gray-200 hover:border-gold-500 transition-colors"
        >
          <h2 className="font-bold text-navy-900 text-lg">Service History</h2>
          <p className="text-gray-600 text-sm mt-1">View all past and current jobs</p>
        </Link>
        <Link
          to="/portal/invoices"
          className="bg-white p-6 rounded-lg shadow border border-gray-200 hover:border-gold-500 transition-colors"
        >
          <h2 className="font-bold text-navy-900 text-lg">Invoices</h2>
          <p className="text-gray-600 text-sm mt-1">View and download your invoices</p>
        </Link>
      </div>
    </>
  );
}
