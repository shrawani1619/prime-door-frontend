import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../lib/images';

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/70" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gold-400 font-semibold mb-3 tracking-widest uppercase text-sm"
            >
              10+ Years Experience
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              New Jersey&apos;s Trusted Door & Dock Experts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed"
            >
              Commercial loading docks, overhead doors, emergency repair, and residential garage doors —
              serving 6 core NJ counties with premium industrial solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link to="/services" className="btn-primary !py-3">
                Our Services
              </Link>
              <Link to="/contact" className="btn-secondary !py-3">
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
