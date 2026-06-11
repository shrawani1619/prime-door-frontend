import { useState } from 'react';
import { api } from '../lib/api';

const defaultServiceTypes = [
  'Loading Dock Services',
  'Commercial Overhead Doors',
  'Emergency Repair',
  'Preventive Maintenance',
  'Residential Garage Doors',
  'Other',
];

export default function QuoteForm({
  defaultServiceType = '',
  title = 'Request a Quote',
  subtitle = "Fill out the form and we'll get back to you shortly.",
  submitLabel = 'Submit Quote Request',
  serviceTypes = defaultServiceTypes,
  messagePlaceholder = 'Describe your project or issue *',
}) {
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

  const inputClass = 'border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-gray-50 transition-all duration-300';

  return (
    <form onSubmit={handleSubmit} className="glass-card-light rounded-2xl shadow-xl p-7 sm:p-8 space-y-5">
      {(title || subtitle) && (
        <div>
          {title && <h3 className="text-2xl font-bold text-navy-900">{title}</h3>}
          {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name *"
          required
          className={inputClass}
        />
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email *"
          required
          className={`${inputClass} sm:col-span-2`}
        />
        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          required
          className={inputClass}
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
        placeholder={messagePlaceholder}
        required
        rows={4}
        className={inputClass}
      />

      {status.message && (
        <p className={`text-sm font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-navy-900 text-white py-3.5 rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300 disabled:opacity-50 hover:shadow-lg"
      >
        {submitting ? 'Submitting...' : submitLabel}
      </button>
    </form>
  );
}
