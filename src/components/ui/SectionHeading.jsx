import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${center ? 'text-center max-w-3xl mx-auto' : ''}`}
    >
      {label && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-gold-400' : 'text-gold-500'}`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
