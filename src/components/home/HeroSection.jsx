import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../lib/images';

const stats = [
  { value: '500+', label: 'Projects' },
  { value: '10+', label: 'Years Experience' },
  { value: '1000+', label: 'Doors Installed' },
  { value: '24/7', label: 'Support' },
];

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
              <Link to="/services/emergency" className="btn-primary !py-3">
                Emergency Service
              </Link>
              <Link to="/contact" className="btn-secondary !py-3">
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip — separate from hero so content isn't cut off */}
      <div className="relative z-10 bg-navy-800 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              className="text-center px-2"
            >
              <p className="text-xl sm:text-2xl font-bold text-gold-400">{stat.value}</p>
              <p className="text-white/60 text-xs sm:text-sm mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
