import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Modal from '../../components/admin/Modal';
import StatusBadge from '../../components/admin/StatusBadge';
import PageHeader from '../../components/admin/PageHeader';
import { api } from '../../lib/api';
import { formatCurrency } from '../../lib/invoiceFormat';

const emptyForm = {
  customerId: '',
  invoiceNumber: '',
  date: new Date().toISOString().slice(0, 10),
  dueDate: '',
  description: '',
  quantity: 1,
  unitPrice: '',
  tax: 0,
  paid: false,
};

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [updating, setUpdating] = useState(null);
  const [downloading, setDownloading] = useState(null);

  const load = () => {
    Promise.all([api.getAdminInvoices(), api.getCustomers()])
      .then(([invoicesData, customersData]) => {
        setInvoices(invoicesData);
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
    const qty = Number(form.quantity) || 1;
    const price = Number(form.unitPrice) || 0;
    const tax = Number(form.tax) || 0;
    const subtotal = qty * price;
    const total = subtotal + tax;

    try {
      await api.createInvoice({
        customerId: form.customerId,
        invoiceNumber: form.invoiceNumber,
        date: new Date(form.date).toISOString(),
        dueDate: form.dueDate ? new Date(form.dueDate).toISOString() : undefined,
        items: [{ description: form.description, quantity: qty, unitPrice: price }],
        subtotal,
        tax,
        total,
        paid: form.paid,
      });
      setModalOpen(false);
      setForm(emptyForm);
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDownload = async (inv) => {
    setDownloading(inv._id);
    setError('');
    try {
      await api.downloadAdminInvoice(inv._id, inv.invoiceNumber);
    } catch (err) {
      setError(err.message);
    } finally {
      setDownloading(null);
    }
  };

  const togglePaid = async (id, paid) => {
    setUpdating(id);
    try {
      await api.updateInvoice(id, { paid });
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdating(null);
    }
  };

  return (
    <>
      <SEO title="Invoices — Admin" />
      <PageHeader
        title="Invoices"
        description="Create invoices and track payment status."
        action={
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="bg-navy-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-navy-700"
          >
            + New Invoice
          </button>
        }
      />

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Invoice #</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {invoices.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                    No invoices yet. Create an invoice to get started.
                  </td>
                </tr>
              )}
              {invoices.map((inv) => (
                <tr key={inv._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-navy-900">#{inv.invoiceNumber}</td>
                  <td className="px-4 py-3">
                    <p className="text-navy-900">{inv.customerId?.name || '—'}</p>
                    {inv.customerId?.company && (
                      <p className="text-gray-500">{inv.customerId.company}</p>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {new Date(inv.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 font-semibold text-navy-900">
                    {formatCurrency(inv.total)}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      disabled={updating === inv._id}
                      onClick={() => togglePaid(inv._id, !inv.paid)}
                      className="text-left"
                    >
                      <StatusBadge status={inv.paid ? 'paid' : 'unpaid'} />
                      <p className="text-xs text-gold-500 mt-1 hover:underline">
                        Mark as {inv.paid ? 'unpaid' : 'paid'}
                      </p>
                    </button>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/admin/invoices/${inv._id}/view`}
                        className="text-navy-900 hover:text-navy-700 font-medium text-sm border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50"
                      >
                        View
                      </Link>
                      <button
                        type="button"
                        disabled={downloading === inv._id}
                        onClick={() => handleDownload(inv)}
                        className="text-navy-900 hover:text-navy-700 font-medium text-sm border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                      >
                        {downloading === inv._id ? 'Downloading...' : 'Download PDF'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <Modal title="Create Invoice" onClose={() => setModalOpen(false)}>
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label htmlFor="invoice-customer" className="block text-sm font-medium text-gray-700 mb-1">
                Customer *
              </label>
              <select
                id="invoice-customer"
                required
                value={form.customerId}
                onChange={(e) => setForm({ ...form, customerId: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              >
                <option value="">Select customer</option>
                {customers.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}{c.company ? ` — ${c.company}` : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="invoice-number" className="block text-sm font-medium text-gray-700 mb-1">
                Invoice Number *
              </label>
              <input
                id="invoice-number"
                required
                placeholder="e.g. PDD-2026-001"
                value={form.invoiceNumber}
                onChange={(e) => setForm({ ...form, invoiceNumber: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="invoice-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Invoice Date *
                </label>
                <input
                  id="invoice-date"
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="invoice-due-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Due Date
                </label>
                <input
                  id="invoice-due-date"
                  type="date"
                  value={form.dueDate}
                  onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="invoice-description" className="block text-sm font-medium text-gray-700 mb-1">
                Line Item Description *
              </label>
              <input
                id="invoice-description"
                required
                placeholder="Service or product description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="invoice-qty" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  id="invoice-qty"
                  type="number"
                  min="1"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="invoice-unit-price" className="block text-sm font-medium text-gray-700 mb-1">
                  Unit Price (Rs.) *
                </label>
                <input
                  id="invoice-unit-price"
                  type="number"
                  min="0"
                  step="0.01"
                  required
                  placeholder="0.00"
                  value={form.unitPrice}
                  onChange={(e) => setForm({ ...form, unitPrice: e.target.value })}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="invoice-tax" className="block text-sm font-medium text-gray-700 mb-1">
                  Tax (Rs.)
                </label>
                <input
                  id="invoice-tax"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  value={form.tax}
                  onChange={(e) => setForm({ ...form, tax: e.target.value })}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={form.paid}
                onChange={(e) => setForm({ ...form, paid: e.target.checked })}
              />
              Mark as paid
            </label>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={saving || customers.length === 0}
                className="flex-1 bg-navy-900 text-white py-2 rounded-lg font-semibold hover:bg-navy-700 disabled:opacity-50"
              >
                {saving ? 'Creating...' : 'Create Invoice'}
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
