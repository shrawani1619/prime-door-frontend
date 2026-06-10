import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

const stats = [
  { value: '500', suffix: '+', label: 'Projects Completed' },
  { value: '350', suffix: '+', label: 'Happy Clients' },
  { value: '1000', suffix: '+', label: 'Installations' },
  { value: '6', suffix: '', label: 'Service Locations' },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 25% 50%, #c9a227 0%, transparent 50%), radial-gradient(circle at 75% 50%, #c9a227 0%, transparent 50%)',
      }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-400 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/70 font-medium text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
