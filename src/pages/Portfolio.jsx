import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import { images } from '../lib/images';

const latestProject = {
  title: 'Villa Window Renovation',
  description:
    'A full-scale window upgrade for a luxury villa in Ubud — custom aluminum frames, double glazing, and seamless installation across 24 openings.',
  image: images.residential,
};

const projects = [
  {
    title: 'Window Installation',
    description:
      'Precision installation for new builds and renovations — custom sizing, modern glazing, and a clean finish on every opening.',
    image: images.residential,
  },
  {
    title: 'Window Repair',
    description:
      'Expert repair and restoration for damaged frames, fogged glass, and worn seals — extending the life of your existing windows.',
    image: images.commercial,
  },
  {
    title: 'Door Service',
    description:
      'Reliable door repair, adjustment, and maintenance for residential and commercial properties across Bali.',
    image: images.overhead,
  },
  {
    title: 'Commercial Building Windows',
    description:
      'Large-scale window solutions for offices, hotels, and retail spaces — built for durability, energy efficiency, and style.',
    image: images.factory,
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Make Appointment',
    desc: 'Book a free on-site visit. We discuss your needs, review options, and take precise measurements for a perfect fit.',
  },
  {
    num: '02',
    title: 'Windows Production',
    desc: 'Your windows are custom-built to specification using quality materials and modern designs tailored to your home.',
  },
  {
    num: '03',
    title: 'Delivery To Your Home',
    desc: 'Finished windows are carefully transported and delivered to your property on schedule, ready for installation.',
  },
  {
    num: '04',
    title: 'Installing & Enjoy',
    desc: 'Our certified team installs and inspects every window so you can enjoy better comfort, security, and style.',
  },
];

const testimonials = [
  {
    name: 'Made Putri Sari',
    role: 'Villa Owner, Ubud',
    text: 'Windco transformed our villa with beautiful aluminum windows. The team was professional, tidy, and finished ahead of schedule.',
    rating: 5,
    initials: 'MP',
  },
  {
    name: 'Ketut Wijaya',
    role: 'Restaurant Manager, Seminyak',
    text: 'We needed durable commercial windows for our seaside restaurant. Windco delivered excellent quality and responsive after-sales support.',
    rating: 5,
    initials: 'KW',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, Canggu',
    text: 'From measurement to installation, everything was smooth. The new windows look stunning and have made a real difference keeping the heat out.',
    rating: 5,
    initials: 'SM',
  },
];

function Stars({ count }) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold-500 text-lg">★</span>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <SEO
        title="Our Projects"
        description="Explore Windco window and door projects across Bali — installations, repairs, and commercial builds."
      />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src={images.commercial}
          alt="Our Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/85" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Our Projects
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Projects</h1>
          </motion.div>
        </div>
      </section>

      {/* Latest Project */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={latestProject.image}
              alt={latestProject.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Latest Project
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
              {latestProject.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {latestProject.description}
            </p>
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project cards */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy-900 text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                <Link
                  to="/contact"
                  className="text-gold-500 font-semibold text-sm hover:text-gold-400 transition-colors"
                >
                  Get a Quote →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title="What Customer Says About Us"
          />

          <div className="relative max-w-4xl mx-auto">
            <p className="sr-only" aria-live="polite">
              Testimonial {testimonialIndex + 1} of {testimonials.length}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="glass-card-light rounded-2xl p-8 sm:p-12 text-center"
              >
                <Stars count={testimonials[testimonialIndex].rating} />
                <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed my-6 italic">
                  &ldquo;{testimonials[testimonialIndex].text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-lg">
                    {testimonials[testimonialIndex].initials}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-navy-900">{testimonials[testimonialIndex].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[testimonialIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={prevTestimonial}
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
                    onClick={() => setTestimonialIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === testimonialIndex ? 'bg-gold-500 w-8' : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Process"
            title="Four Steps to Order Window for Your Home"
            description="From first call to final fitting, our four-step process keeps ordering windows simple and stress-free for your home."
          />
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative text-center group"
                >
                  <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300 shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
