import { useState } from 'react';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { api } from '../lib/api';

const PHONE = import.meta.env.VITE_PHONE || '+15514263018';

export default function Contact() {
  const [contact, setContact] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      await api.submitContact(contact);
      setStatus('Message sent! We will get back to you shortly.');
      setContact({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <>
      <SEO title="Contact" description="Contact Prime Door & Dock Solutions for quotes, inquiries, and emergency service in NJ." />

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">Contact & Quote</h1>
        <p className="text-gray-600 mb-10">
          Reach us by phone for emergencies or submit a form for quotes and general inquiries.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-navy-900 text-white p-6 rounded-lg mb-6">
              <h2 className="font-bold text-lg mb-2">Call Us</h2>
              <a href={`tel:${PHONE}`} className="text-gold-400 text-2xl font-bold hover:underline">
                (551) 426-3018
              </a>
              <p className="text-white/70 text-sm mt-2">Available for emergency service 24/7</p>
            </div>

            <form onSubmit={handleContact} className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-navy-900">Send a Message</h3>
              <input
                placeholder="Name *"
                required
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <input
                placeholder="Phone"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <textarea
                placeholder="Message *"
                required
                rows={4}
                value={contact.message}
                onChange={(e) => setContact({ ...contact, message: e.target.value })}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              {status && <p className="text-sm text-gray-600">{status}</p>}
              <button type="submit" className="w-full bg-navy-900 text-white py-3 rounded font-semibold">
                Send Message
              </button>
            </form>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
