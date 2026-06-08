import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { api } from '../../lib/api';
import { formatCurrency } from '../../lib/invoiceFormat';

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(null);

  useEffect(() => {
    api.getInvoices().then(setInvoices).catch((e) => setError(e.message));
  }, []);

  const handleDownload = async (inv) => {
    setDownloading(inv._id);
    setError('');
    try {
      await api.downloadPortalInvoice(inv._id, inv.invoiceNumber);
    } catch (err) {
      setError(err.message);
    } finally {
      setDownloading(null);
    }
  };

  return (
    <>
      <SEO title="Invoices" />
      <Link to="/portal" className="text-gold-500 text-sm hover:underline">← Dashboard</Link>
      <h1 className="text-3xl font-bold text-navy-900 mt-2 mb-6">Invoices</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {invoices.length === 0 && !error && (
        <p className="text-gray-500">No invoices found.</p>
      )}

      <div className="space-y-4">
        {invoices.map((inv) => (
          <div
            key={inv._id}
            className="bg-white p-5 rounded-lg shadow border border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
          >
            <div>
              <h3 className="font-bold text-navy-900">#{inv.invoiceNumber}</h3>
              <p className="text-sm text-gray-500">{new Date(inv.date).toLocaleDateString()}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-bold text-navy-900">{formatCurrency(inv.total)}</p>
                <span className={`text-xs font-semibold ${inv.paid ? 'text-green-600' : 'text-orange-500'}`}>
                  {inv.paid ? 'Paid' : 'Unpaid'}
                </span>
              </div>
              <Link
                to={`/portal/invoices/${inv._id}/view`}
                className="border border-navy-900 text-navy-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 whitespace-nowrap"
              >
                View
              </Link>
              <button
                type="button"
                disabled={downloading === inv._id}
                onClick={() => handleDownload(inv)}
                className="bg-navy-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-navy-700 disabled:opacity-50 whitespace-nowrap"
              >
                {downloading === inv._id ? 'Downloading...' : 'Download PDF'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
