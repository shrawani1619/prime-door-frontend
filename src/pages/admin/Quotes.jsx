import { useEffect, useState } from 'react';
import SEO from '../../components/SEO';
import StatusBadge from '../../components/admin/StatusBadge';
import PageHeader from '../../components/admin/PageHeader';
import { api } from '../../lib/api';

const statuses = ['pending', 'approved', 'scheduled', 'declined'];

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(null);

  const load = () => {
    api.getQuotes().then(setQuotes).catch((e) => setError(e.message));
  };

  useEffect(() => {
    load();
  }, []);

  const handleStatusChange = async (id, status) => {
    setUpdating(id);
    try {
      await api.updateQuote(id, { status });
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdating(null);
    }
  };

  return (
    <>
      <SEO title="Quote Requests — Admin" />
      <PageHeader
        title="Quote Requests"
        description="Review and respond to website quote submissions."
      />

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Submitted</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {quotes.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                    No quote requests yet.
                  </td>
                </tr>
              )}
              {quotes.map((q) => (
                <tr key={q._id} className="hover:bg-gray-50 align-top">
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                    {q.submittedAt ? new Date(q.submittedAt).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-navy-900">{q.name}</p>
                    <p className="text-gray-500">{q.email}</p>
                    {q.phone && <p className="text-gray-500">{q.phone}</p>}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{q.serviceType}</td>
                  <td className="px-4 py-3 text-gray-600 max-w-xs">{q.description}</td>
                  <td className="px-4 py-3">
                    <select
                      value={q.status}
                      disabled={updating === q._id}
                      onChange={(e) => handleStatusChange(q._id, e.target.value)}
                      className="border border-gray-300 rounded-lg px-2 py-1.5 text-sm bg-white"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {s.replace('_', ' ')}
                        </option>
                      ))}
                    </select>
                    <div className="mt-2">
                      <StatusBadge status={q.status} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
