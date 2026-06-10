import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { galleryImages } from '../../lib/images';

const categories = ['All', 'Commercial', 'Residential', 'Industrial'];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Work"
          title="Project Gallery"
          description="A selection of completed projects across our New Jersey service area."
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
                  : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="masonry-grid">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="masonry-item group cursor-pointer"
              onClick={() => setLightbox(project)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                <img
                  src={project.src}
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    i % 3 === 0 ? 'h-72' : i % 3 === 1 ? 'h-56' : 'h-64'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/50 transition-colors duration-300 flex items-end">
                  <div className="p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs text-gold-400 font-semibold uppercase">{project.category}</span>
                    <h3 className="text-white font-bold mt-1">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn-outline">
            View Full Portfolio
          </Link>
        </div>
      </div>

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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
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
                className="w-full rounded-2xl shadow-2xl max-h-[80vh] object-cover"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold">{lightbox.title}</h3>
                <p className="text-white/70">{lightbox.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
