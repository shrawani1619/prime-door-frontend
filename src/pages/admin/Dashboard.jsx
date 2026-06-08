import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StatusBadge from '../../components/admin/StatusBadge';
import PageHeader from '../../components/admin/PageHeader';
import { formatCurrency } from '../../lib/invoiceFormat';
import { api } from '../../lib/api';

function StatCard({ label, value, to }) {
  const content = (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-3xl font-bold text-navy-900 mt-1">{value ?? '—'}</p>
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="block hover:border-gold-500 border border-transparent rounded-xl transition-colors">
        {content}
      </Link>
    );
  }

  return content;
}

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.getAdminDashboard().then(setData).catch((e) => setError(e.message));
  }, []);

  return (
    <>
      <SEO title="Admin Dashboard" />
      <PageHeader
        title="Dashboard"
        description="Overview of quotes, jobs, customers, and invoices."
      />

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <StatCard label="Open Quotes" value={data?.openQuotes} to="/admin/quotes" />
        <StatCard label="Pending Jobs" value={data?.pendingJobs} to="/admin/jobs" />
        <StatCard label="Total Customers" value={data?.totalCustomers} to="/admin/customers" />
        <StatCard label="Unpaid Invoices" value={data?.unpaidInvoices} to="/admin/invoices" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-navy-900">Recent Quote Requests</h2>
            <Link to="/admin/quotes" className="text-sm text-gold-500 hover:underline">
              View all
            </Link>
          </div>
          {data?.recentQuotes?.length === 0 && (
            <p className="text-gray-500 text-sm">No quote requests yet.</p>
          )}
          <ul className="space-y-3">
            {data?.recentQuotes?.map((quote) => (
              <li key={quote._id} className="flex items-start justify-between gap-3 text-sm">
                <div>
                  <p className="font-medium text-navy-900">{quote.name}</p>
                  <p className="text-gray-500">{quote.serviceType}</p>
                </div>
                <StatusBadge status={quote.status} />
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-navy-900">Recent Invoices</h2>
            <Link to="/admin/invoices" className="text-sm text-gold-500 hover:underline">
              View all
            </Link>
          </div>
          {data?.recentInvoices?.length === 0 && (
            <p className="text-gray-500 text-sm">No invoices yet.</p>
          )}
          <ul className="space-y-3">
            {data?.recentInvoices?.map((inv) => (
              <li key={inv._id} className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium text-navy-900">#{inv.invoiceNumber}</p>
                  <p className="text-gray-500">{inv.customerId?.name || 'Unknown customer'}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-navy-900">{formatCurrency(inv.total)}</p>
                  <StatusBadge status={inv.paid ? 'paid' : 'unpaid'} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
