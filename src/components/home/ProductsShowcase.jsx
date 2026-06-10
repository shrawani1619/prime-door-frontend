import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { productImages } from '../../lib/images';

const products = [
  { name: 'Commercial Overhead Doors', category: 'Commercial', desc: 'Insulated and fire-rated roll-up doors for commercial facilities.' },
  { name: 'Rolling Steel Doors', category: 'Commercial', desc: 'Heavy-duty steel doors for high-traffic industrial applications.' },
  { name: 'Dock Levelers', category: 'Dock Equipment', desc: 'High-efficiency dock equipment for fast-paced environments.' },
  { name: 'Dock Seals & Shelters', category: 'Dock Equipment', desc: 'Energy-efficient seals and shelters for loading docks.' },
  { name: 'Residential Garage Doors', category: 'Residential', desc: 'Premium garage doors for homes across New Jersey.' },
  { name: 'Garage Door Openers', category: 'Residential', desc: 'Smart openers with reliable performance and security.' },
];

const categories = ['All', 'Commercial', 'Dock Equipment', 'Residential'];

export default function ProductsShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Products"
          title="Docks, Doors and Everything In-Between"
          description="Quality door products and commercial equipment for every application."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-navy-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={productImages[p.name]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-navy-900 text-lg mb-2">{p.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <Link to="/products" className="text-gold-500 font-semibold text-sm hover:text-gold-400 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
