import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { images } from '../../lib/images';

const services = [
  { title: 'Loading Dock Services', desc: 'Levelers, seals, restraints, bumpers', to: '/services/loading-dock', image: images.loadingDock },
  { title: 'Commercial Doors', desc: 'Overhead, roll-up, fire-rated, storefront', to: '/services/commercial', image: images.overhead },
  { title: 'Emergency Repair', desc: '24/7 priority response for warehouses', to: '/services/emergency', image: images.industrial },
  { title: 'Maintenance Programs', desc: 'Scheduled service agreements', to: '/services/maintenance', image: images.factory },
  { title: 'Residential Garage', desc: 'Installation, repair, openers', to: '/services/residential', image: images.garage },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="What We Do"
          title="Our Services"
          description="Full-service door and dock solutions for commercial facilities and residential properties across New Jersey."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <Link
                to={s.to}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-navy-900 text-lg mb-2 group-hover:text-gold-500 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center mt-4 text-gold-500 font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
