import { useState } from 'react';
import { api } from '../lib/api';

const serviceTypes = [
  'Loading Dock Services',
  'Commercial Overhead Doors',
  'Emergency Repair',
  'Preventive Maintenance',
  'Residential Garage Doors',
  'Other',
];

export default function QuoteForm({ defaultServiceType = '' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: defaultServiceType,
    description: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await api.submitQuote(form);
      setStatus({ type: 'success', message: 'Quote request submitted! We will contact you shortly.' });
      setForm({ name: '', email: '', phone: '', serviceType: defaultServiceType, description: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h3 className="text-xl font-bold text-navy-900">Request a Quote</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name *"
          required
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email *"
          required
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          <option value="">Select Service *</option>
          {serviceTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Describe your project or issue *"
        required
        rows={4}
        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold-500"
      />

      {status.message && (
        <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-navy-900 text-white py-3 rounded font-semibold hover:bg-navy-700 transition-colors disabled:opacity-50"
      >
        {submitting ? 'Submitting...' : 'Submit Quote Request'}
      </button>
    </form>
  );
}
