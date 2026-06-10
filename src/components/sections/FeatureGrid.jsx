import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const features = [
  { icon: '✦', title: 'Quality Assurance', desc: 'Every installation meets rigorous industry standards and manufacturer specifications.' },
  { icon: '◈', title: 'Custom Designs', desc: 'Tailored door and dock solutions designed for your facility\'s unique requirements.' },
  { icon: '⚡', title: 'Fast Installation', desc: 'Efficient project execution to minimize downtime and get you operational quickly.' },
  { icon: '☎', title: 'Expert Support', desc: 'Dedicated technicians available 24/7 for emergency repairs and ongoing support.' },
  { icon: '⬡', title: 'Durable Materials', desc: 'Premium-grade components built to withstand heavy industrial use and weather.' },
  { icon: '◉', title: 'Competitive Pricing', desc: 'Transparent quotes with no hidden fees — exceptional value for enterprise quality.' },
];

export default function FeatureGrid() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Why Prime Door"
          title="Why Choose Us"
          description="Commercial and residential expertise under one roof."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center text-xl mb-4 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
