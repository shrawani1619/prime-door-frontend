import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { galleryImages, images } from '../lib/images';

const categories = ['All', 'Commercial', 'Residential', 'Industrial'];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '6', label: 'NJ Counties' },
  { value: '10+', label: 'Years Experience' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((p) => p.category === activeCategory);

  const categoryCount = (cat) =>
    cat === 'All' ? galleryImages.length : galleryImages.filter((p) => p.category === cat).length;

  return (
    <>
      <SEO title="Portfolio" description="Completed commercial and residential door and dock projects across New Jersey." />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">Portfolio</span>
        </div>
      </div>

      {/* Full-bleed image hero */}
      <section className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <img
          src={images.warehouse}
          alt="Portfolio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-navy-900/20" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Portfolio & Gallery
            </h1>
            <p className="text-white/75 text-lg max-w-xl">
              Completed door and dock projects across our New Jersey service area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4">
              <p className="text-2xl sm:text-3xl font-bold text-gold-400">{s.value}</p>
              <p className="text-white/60 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar filters + bento gallery */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Vertical filter sidebar */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Filter by Type
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
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-navy-900'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === cat ? 'bg-white/20' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {categoryCount(cat)}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="hidden lg:block mt-8 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-navy-900 font-semibold text-sm mb-2">Start Your Project</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Ready to add your facility to our portfolio? Get a free quote today.
                  </p>
                  <Link to="/contact" className="btn-primary !px-5 !py-2.5 !text-sm w-full text-center">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Bento grid gallery */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] sm:auto-rows-[220px]"
                >
                  {filtered.map((project, i) => {
                    const isFeatured = i === 0 && filtered.length > 1;
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        className={`group cursor-pointer relative rounded-xl overflow-hidden ${
                          isFeatured ? 'sm:col-span-2 sm:row-span-2' : ''
                        }`}
                        onClick={() => setLightbox(project)}
                      >
                        <img
                          src={project.src}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Always-visible label at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
                            {project.category}
                          </span>
                          <h3 className={`font-bold text-white leading-snug ${isFeatured ? 'text-xl sm:text-2xl' : 'text-base'}`}>
                            {project.title}
                          </h3>
                          <p className="text-white/60 text-sm mt-1">{project.location}</p>
                          <span className="inline-flex items-center mt-3 text-white/80 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View Project →
                          </span>
                        </div>

                        {/* Corner expand icon */}
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          ⊕
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {filtered.length === 0 && (
                <p className="text-center text-gray-500 py-16">No projects in this category yet.</p>
              )}

              <div className="mt-10 lg:hidden text-center">
                <Link to="/contact" className="btn-outline">
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact CTA bar */}
      <section className="bg-gray-50 border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Have a project in mind?</h2>
            <p className="text-gray-500 text-sm mt-1">We serve 6 counties across New Jersey.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="btn-primary !px-6 !py-2.5 !text-sm">
              Request a Quote
            </Link>
            <Link to="/services" className="btn-outline !px-6 !py-2.5 !text-sm">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-900/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-gold-400 transition-colors"
                aria-label="Close lightbox"
              >
                ✕
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full rounded-2xl shadow-2xl max-h-[75vh] object-cover"
              />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">
                    {lightbox.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-1">{lightbox.title}</h3>
                  <p className="text-white/60 text-sm">{lightbox.location}</p>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setLightbox(null)}
                  className="btn-primary !px-5 !py-2.5 !text-sm shrink-0"
                >
                  Similar Project?
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
