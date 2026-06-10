import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { images } from '../../lib/images';

const industries = [
  { title: 'Residential', image: images.residential },
  { title: 'Commercial', image: images.commercial },
  { title: 'Industrial', image: images.industrial },
  { title: 'Warehouses', image: images.warehouse },
  { title: 'Factories', image: images.factory },
  { title: 'Retail Stores', image: images.retail },
];

export default function IndustriesSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Who We Serve"
          title="Industries We Serve"
          description="Specialized door and dock solutions tailored to the unique demands of every sector."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden h-64 cursor-default"
            >
              <img
                src={ind.image}
                alt={ind.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent group-hover:from-navy-900/95 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl">{ind.title}</h3>
                <div className="w-0 group-hover:w-12 h-0.5 bg-gold-500 mt-2 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
