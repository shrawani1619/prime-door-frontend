import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import { images } from '../lib/images';
import { blogPosts } from '../lib/blogData';

const PHONE = '(+62)81587 6218';
const PHONE_HREF = 'tel:+62815876218';

const consultationHighlights = [
  'Quick installation',
  'Free measurement',
  '10 Years Warranty',
  'Modern Design',
];

const faqItems = [
  {
    question: 'Where Can I Find More Information?',
    answer:
      'Visit our Services and Projects pages for detailed information about what we offer. You can also call us, email support@domain.com, or submit a contact form — our team responds within one business day.',
  },
  {
    question: 'What Kinds of Payment Do You Accept?',
    answer:
      'We accept bank transfer, credit and debit cards, and cash on delivery for eligible projects. For larger commercial jobs, we offer milestone-based payment schedules — 50% deposit to begin production and the balance upon installation completion.',
  },
  {
    question: 'What Are Your Terms and Conditions?',
    answer:
      'All projects include a written agreement covering scope, timeline, warranty, and payment terms before work begins. Our standard 10-year warranty covers workmanship and materials. Cancellation and rescheduling policies are outlined in your project contract.',
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <SEO
        title="FAQ"
        description="Frequently asked questions about Windco window and door services, payments, and terms in Bali."
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">FAQ</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src={images.commercial}
          alt="FAQ"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/85" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">FAQ</h1>
          </motion.div>
        </div>
      </section>

      {/* General Questions */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="FAQ"
            title="General Question"
            description="Find answers to common questions about our services, payments, and policies. Can't find what you need? Contact our team anytime."
          />

          <div className="space-y-3">
            {faqItems.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-navy-900">{item.question}</span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-colors ${
                        isOpen ? 'bg-gold-500 text-navy-900' : 'bg-white text-navy-900 border border-gray-200'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              Start Consultation If You Have Any Question About Our Service
            </h2>
            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
              {consultationHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="text-gold-500 font-bold text-lg leading-none mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href={PHONE_HREF} className="btn-outline">
                {PHONE}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom project CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.cta})` }}
        />
        <div className="absolute inset-0 bg-navy-900/88" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Do You Want Custom Project? Contact Us Now
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Have a unique vision in mind? We specialize in custom window and door solutions tailored to your
              exact specifications. Reach out and let&apos;s bring your idea to life.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Blog"
            title="Latest Blog & Articles"
            description="Stay informed with tips, trends, and expert insights from the world of windows and doors."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <Link to={`/blog/${article.slug}`} className="block aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6">
                  <p className="text-gold-500 text-xs font-semibold uppercase tracking-wider mb-2">
                    {article.date}
                  </p>
                  <h3 className="font-bold text-navy-900 text-lg mb-3 leading-snug group-hover:text-gold-500 transition-colors">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="btn-outline !px-5 !py-2 !text-sm relative z-10"
                  >
                    Read More
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
