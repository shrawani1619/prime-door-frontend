import { useEffect, useState } from 'react';
import SEO from '../../components/SEO';
import Modal from '../../components/admin/Modal';
import StatusBadge from '../../components/admin/StatusBadge';
import PageHeader from '../../components/admin/PageHeader';
import { api } from '../../lib/api';

const statuses = ['scheduled', 'in_progress', 'completed', 'cancelled'];

const emptyForm = {
  customerId: '',
  date: new Date().toISOString().slice(0, 10),
  type: '',
  technicianName: '',
  status: 'scheduled',
  notes: '',
};

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [updating, setUpdating] = useState(null);

  const load = () => {
    Promise.all([api.getAdminJobs(), api.getCustomers()])
      .then(([jobsData, customersData]) => {
        setJobs(jobsData);
        setCustomers(customersData);
      })
      .catch((e) => setError(e.message));
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.createJob({ ...form, date: new Date(form.date).toISOString() });
      setModalOpen(false);
      setForm(emptyForm);
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    setUpdating(id);
    try {
      await api.updateJob(id, { status });
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdating(null);
    }
  };

  return (
    <>
      <SEO title="Jobs — Admin" />
      <PageHeader
        title="Jobs & Service Records"
        description="Create and track service jobs for customers."
        action={
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="bg-navy-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-navy-700"
          >
            + New Job
          </button>
        }
      />

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Technician</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {jobs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                    No jobs yet. Create a job to get started.
                  </td>
                </tr>
              )}
              {jobs.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    {new Date(job.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-navy-900">{job.customerId?.name || '—'}</p>
                    {job.customerId?.company && (
                      <p className="text-gray-500">{job.customerId.company}</p>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{job.type}</td>
                  <td className="px-4 py-3 text-gray-600">{job.technicianName || '—'}</td>
                  <td className="px-4 py-3">
                    <select
                      value={job.status}
                      disabled={updating === job._id}
                      onChange={(e) => handleStatusChange(job._id, e.target.value)}
                      className="border border-gray-300 rounded-lg px-2 py-1.5 text-sm bg-white"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {s.replace('_', ' ')}
                        </option>
                      ))}
                    </select>
                    <div className="mt-2">
                      <StatusBadge status={job.status} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <Modal title="Create Job" onClose={() => setModalOpen(false)}>
          <form onSubmit={handleCreate} className="space-y-4">
            <select
              required
              value={form.customerId}
              onChange={(e) => setForm({ ...form, customerId: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            >
              <option value="">Select customer *</option>
              {customers.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}{c.company ? ` — ${c.company}` : ''}
                </option>
              ))}
            </select>
            {customers.length === 0 && (
              <p className="text-amber-600 text-sm">Add a customer first before creating a job.</p>
            )}
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
            <input
              required
              placeholder="Service type *"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
            <input
              placeholder="Technician name"
              value={form.technicianName}
              onChange={(e) => setForm({ ...form, technicianName: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s.replace('_', ' ')}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Notes"
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={saving || customers.length === 0}
                className="flex-1 bg-navy-900 text-white py-2 rounded-lg font-semibold hover:bg-navy-700 disabled:opacity-50"
              >
                {saving ? 'Creating...' : 'Create Job'}
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}
