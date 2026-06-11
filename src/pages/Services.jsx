import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import CustomProjectCTA from '../components/CustomProjectCTA';
import SectionHeading from '../components/ui/SectionHeading';
import QuoteForm from '../components/QuoteForm';
import { images } from '../lib/images';
import { servicesList } from '../lib/servicesData';

const PHONE = '(+62)81587 6218';
const PHONE_HREF = 'tel:+62815876218';

const consultationHighlights = [
  'Quick installation',
  'Free measurement',
  '10 Years Warranty',
  'Modern Design',
];

const locations = [
  {
    city: 'Kuta, Bali',
    address: 'Jl. Sunset Road No.815, Kuta - Bali 80361',
    email: 'support@domain.com',
    phone: '(+62)81587 6218',
    phoneHref: 'tel:+62815876218',
    hours: 'Mon-Fri 08:00 - 17:00',
  },
  {
    city: 'Denpasar, Bali',
    address: 'Jl. Raya Puputan No 142, Denpasar, Bali - 80234',
    email: 'support@domain.com',
    phone: '(+62)81587 6217',
    phoneHref: 'tel:+62815876217',
    hours: 'Mon-Fri 08:00 - 17:00',
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

const windcoServiceTypes = servicesList.map((s) => s.title);

function Stars({ count }) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold-500 text-lg">★</span>
      ))}
    </div>
  );
}

export default function Services() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore Windco window and door services — installation, consultation, and custom projects in Bali."
      />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src={images.commercial}
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/85" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Explore Our Service
            </p>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              Professional window and door services across Bali — installation, repair, custom manufacturing,
              and free on-site consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="font-bold text-navy-900 text-lg mb-2">{service.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation + form */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              Start Consultation If You Have Any Question About Our Service
            </h2>
            <ul className="space-y-4 mb-8">
              {consultationHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="text-gold-500 font-bold text-lg leading-none mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href={PHONE_HREF} className="btn-outline">
                {PHONE}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuoteForm
              title=""
              subtitle=""
              submitLabel="Make Appointment"
              serviceTypes={windcoServiceTypes}
              messagePlaceholder="Your Message *"
            />
          </motion.div>
        </div>
      </section>

      <CustomProjectCTA description="Tell us about your vision. Whether it is a single replacement or a full home upgrade, our team will design and deliver a solution tailored to your space, style, and budget." />

      {/* Office locations */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-4">{loc.city}</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="leading-relaxed">{loc.address}</li>
                <li>
                  <a href={`mailto:${loc.email}`} className="text-gold-500 hover:text-gold-400 transition-colors">
                    {loc.email}
                  </a>
                </li>
                <li>
                  <a href={loc.phoneHref} className="text-gold-500 font-semibold hover:text-gold-400 transition-colors">
                    {loc.phone}
                  </a>
                </li>
                <li>{loc.hours}</li>
              </ul>
            </motion.div>
          ))}
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
    </>
  );
}
