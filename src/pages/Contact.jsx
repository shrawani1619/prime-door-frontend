import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { api } from '../lib/api';
import { images } from '../lib/images';

const PHONE = import.meta.env.VITE_PHONE || '+15514263018';
const PHONE_DISPLAY = '(551) 426-3018';

const inputClass =
  'border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-gray-50 transition-all duration-300';

const counties = ['Bergen', 'Hudson', 'Essex', 'Passaic', 'Union', 'Middlesex'];

export default function Contact() {
  const [activeTab, setActiveTab] = useState('quote');
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">Contact</span>
        </div>
      </div>

      {/* Split layout: info panel + forms */}
      <section className="min-h-[600px] grid grid-cols-1 lg:grid-cols-5">

        {/* Left — contact info panel */}
        <div className="lg:col-span-2 bg-navy-900 text-white relative overflow-hidden">
          <img
            src={images.commercial}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 to-navy-900/95" />

          <div className="relative z-10 p-8 sm:p-10 lg:p-12 flex flex-col h-full">
            <div>
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 block">
                Get In Touch
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Contact & Quote
              </h1>
              <p className="text-white/70 leading-relaxed mb-8">
                Reach us by phone for emergencies or submit a form for quotes and general inquiries.
              </p>
            </div>

            {/* Emergency callout */}
            <div className="bg-red-900/40 border border-red-500/30 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-300 text-xs font-bold uppercase tracking-wider">24/7 Emergency</span>
              </div>
              <a
                href={`tel:${PHONE}`}
                className="text-gold-400 text-2xl font-bold hover:text-gold-500 transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-white/50 text-sm mt-1">Warehouse down? Door stuck? Call now.</p>
            </div>

            {/* Info blocks */}
            <div className="space-y-5 mb-8">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Business Hours</p>
                <p className="text-white font-medium">Mon–Fri: 7 AM – 6 PM</p>
                <p className="text-white/70 text-sm">Emergency service available 24/7</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Service Area</p>
                <div className="flex flex-wrap gap-1.5">
                  {counties.map((c) => (
                    <span key={c} className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Response Time</p>
                <p className="text-white/70 text-sm">Quote requests answered within 1 business day. Emergency calls dispatched immediately.</p>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <Link
                to="/portal/login"
                className="text-gold-400 text-sm font-semibold hover:text-gold-500 transition-colors"
              >
                Customer Portal Login →
              </Link>
            </div>
          </div>
        </div>

        {/* Right — tabbed forms */}
        <div className="lg:col-span-3 bg-gray-50 p-6 sm:p-8 lg:p-12">
          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-white rounded-xl border border-gray-200 mb-8 max-w-md">
            {[
              { id: 'quote', label: 'Request a Quote' },
              { id: 'message', label: 'Send a Message' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-gray-500 hover:text-navy-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'quote' ? (
              <motion.div
                key="quote"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <QuoteForm />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <form
                  onSubmit={handleContact}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 sm:p-8 space-y-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Send a Message</h3>
                    <p className="text-gray-500 text-sm mt-1">General inquiries and questions welcome.</p>
                  </div>
                  <input
                    placeholder="Name *"
                    required
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    placeholder="Phone"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    className={inputClass}
                  />
                  <textarea
                    placeholder="Message *"
                    required
                    rows={5}
                    value={contact.message}
                    onChange={(e) => setContact({ ...contact, message: e.target.value })}
                    className={inputClass}
                  />
                  {status && (
                    <p className={`text-sm font-medium ${status.includes('sent') ? 'text-green-600' : 'text-red-600'}`}>
                      {status}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-navy-900 text-white py-3.5 rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="text-sm text-gray-500 hover:text-gold-500 transition-colors">
              View Services →
            </Link>
            <Link to="/service-area" className="text-sm text-gray-500 hover:text-gold-500 transition-colors">
              Service Area →
            </Link>
            <Link to="/services/emergency" className="text-sm text-gray-500 hover:text-gold-500 transition-colors">
              Emergency Repair →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
