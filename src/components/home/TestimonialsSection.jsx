import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    name: 'Michael Rodriguez',
    role: 'Warehouse Manager, Edison NJ',
    text: 'Prime Door responded within hours when our loading dock leveler failed. Professional team, fair pricing, and they had us back operational the same day.',
    rating: 5,
    initials: 'MR',
  },
  {
    name: 'Sarah Chen',
    role: 'Facility Director, Newark NJ',
    text: 'We\'ve used Prime Door for three commercial overhead door installations. Consistent quality, on-time delivery, and excellent preventive maintenance programs.',
    rating: 5,
    initials: 'SC',
  },
  {
    name: 'James Patterson',
    role: 'Homeowner, Wayne NJ',
    text: 'Outstanding residential garage door installation. The team was courteous, cleaned up after themselves, and the door operates flawlessly. Highly recommend.',
    rating: 5,
    initials: 'JP',
  },
  {
    name: 'David Kim',
    role: 'Operations Lead, Jersey City NJ',
    text: 'Their 24/7 emergency service is a lifesaver for our distribution center. Fast response, skilled technicians, and transparent communication every time.',
    rating: 5,
    initials: 'DK',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold-500 text-lg">★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Client Reviews"
          title="What Our Clients Say"
          description="Trusted by businesses and homeowners across New Jersey."
        />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-card-light rounded-2xl p-8 sm:p-12 text-center"
            >
              <Stars count={testimonials[current].rating} />
              <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed my-6 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-lg">
                  {testimonials[current].initials}
                </div>
                <div className="text-left">
                  <p className="font-bold text-navy-900">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
