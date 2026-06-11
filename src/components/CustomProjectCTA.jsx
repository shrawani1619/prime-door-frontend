import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../lib/images';

export default function CustomProjectCTA({
  description = 'Have a unique vision in mind? We specialize in custom window and door solutions tailored to your exact specifications. Let us help bring your idea to life.',
}) {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.cta})` }}
      />
      <div className="absolute inset-0 bg-navy-900/90" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold-400 text-sm font-semibold tracking-widest mb-4">
            Custom Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Do You Want a Custom Project?
          </h2>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {description}
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
