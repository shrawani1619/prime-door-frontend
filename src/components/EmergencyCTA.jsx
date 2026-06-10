import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PHONE = import.meta.env.VITE_PHONE || '+15514263018';

export default function EmergencyCTA() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-navy-800" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(201,162,39,0.1) 20px, rgba(201,162,39,0.1) 40px)',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <span className="inline-block w-3 h-3 bg-red-500 rounded-full animate-pulse mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need Emergency Service?</h2>
        <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
          Warehouse down? Door stuck? We respond fast across all 6 NJ counties.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${PHONE}`} className="btn-primary">
            Call Now: (551) 426-3018
          </a>
          <Link to="/services/emergency" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
