import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../lib/images';

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${images.cta})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-800/80" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Upgrade Your Doors & Docks?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free consultation and quote from New Jersey&apos;s trusted door and dock experts.
            We respond fast and deliver premium results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <a href={`tel:${import.meta.env.VITE_PHONE || '+15514263018'}`} className="btn-secondary">
              Contact Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
