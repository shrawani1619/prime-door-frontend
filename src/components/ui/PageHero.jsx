import { motion } from 'framer-motion';

export default function PageHero({ title, description }) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #c9a227 0%, transparent 60%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
