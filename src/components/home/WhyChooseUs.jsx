import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuoteForm from '../QuoteForm';

const highlights = [
  '8+ years serving NJ businesses and homeowners',
  'Commercial & residential expertise under one roof',
  'Emergency response for warehouses and facilities',
  'Preventive maintenance programs for recurring reliability',
];

const counties = ['Bergen', 'Hudson', 'Essex', 'Passaic', 'Union', 'Middlesex'];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-500 mb-3">Why Prime Door</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">Why Choose Us</h2>
          <ul className="space-y-4 text-gray-700">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-gold-500 font-bold text-lg leading-none mt-0.5">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {counties.map((c) => (
              <span key={c} className="bg-navy-900 text-white text-xs px-4 py-2 rounded-full font-medium">
                {c} County
              </span>
            ))}
          </div>
          <Link to="/about" className="inline-block mt-6 text-gold-500 font-semibold hover:text-gold-400 transition-colors">
            Learn more about us →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <QuoteForm />
        </motion.div>
      </div>
    </section>
  );
}
