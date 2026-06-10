import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { productImages, images } from '../lib/images';

const products = [
  { name: 'Commercial Overhead Doors', category: 'Commercial', desc: 'Insulated and fire-rated roll-up doors for commercial facilities.' },
  { name: 'Rolling Steel Doors', category: 'Commercial', desc: 'Heavy-duty steel doors for high-traffic industrial applications.' },
  { name: 'Dock Levelers', category: 'Dock Equipment', desc: 'High-efficiency dock equipment for fast-paced environments.' },
  { name: 'Dock Seals & Shelters', category: 'Dock Equipment', desc: 'Energy-efficient seals and shelters for loading docks.' },
  { name: 'Residential Garage Doors', category: 'Residential', desc: 'Premium garage doors for homes across New Jersey.' },
  { name: 'Garage Door Openers', category: 'Residential', desc: 'Smart openers with reliable performance and security.' },
  { name: 'Lock Systems & Hardware', category: 'Parts', desc: 'Commercial-grade locks, hardware, and replacement parts.' },
];

const categories = ['All', 'Commercial', 'Dock Equipment', 'Residential', 'Parts'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const categoryCount = (cat) =>
    cat === 'All' ? products.length : products.filter((p) => p.category === cat).length;

  return (
    <>
      <SEO title="Products" description="Commercial and residential door products, dock equipment, and parts." />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">Products</span>
        </div>
      </div>

      {/* Split header */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-100">
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16 bg-white">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3 block">
              Product Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Products Showcase
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Quality door products and commercial equipment for every application — from
              warehouse docks to residential garage doors.
            </p>
          </motion.div>
        </div>
        <div className="relative min-h-[260px] lg:min-h-0 overflow-hidden">
          <img
            src={images.overhead}
            alt="Products"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/20" />
        </div>
      </section>

      {/* Sidebar + product grid */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Category sidebar */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Categories
                </h2>
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between gap-4 px-4 py-3 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                        activeCategory === cat
                          ? 'bg-navy-900 text-white shadow-md'
                          : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-navy-900 border border-gray-100'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === cat ? 'bg-white/20' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {categoryCount(cat)}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="hidden lg:block mt-8 p-5 bg-navy-900 rounded-xl text-white">
                  <p className="font-semibold text-sm mb-2">Need a Custom Quote?</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Tell us about your project and we&apos;ll recommend the right products.
                  </p>
                  <Link to="/contact" className="btn-primary !px-5 !py-2.5 !text-sm w-full text-center block">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Product cards */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                  <motion.article
                    key={p.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={productImages[p.name]}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-navy-900 text-base mb-2 group-hover:text-gold-500 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                      <Link
                        to="/contact"
                        className="text-gold-500 font-semibold text-sm hover:text-gold-400 transition-colors"
                      >
                        Request Quote →
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="text-center text-gray-500 py-16">No products in this category.</p>
              )}

              <div className="mt-10 lg:hidden text-center">
                <Link to="/contact" className="btn-primary">Request a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Not sure which product you need?</h2>
            <p className="text-gray-500 text-sm mt-1">Our experts will help you choose the right solution.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="btn-primary !px-6 !py-2.5 !text-sm">Get a Quote</Link>
            <Link to="/services" className="btn-outline !px-6 !py-2.5 !text-sm">View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
