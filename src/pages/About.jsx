import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { images } from '../lib/images';
import { blogPosts } from '../lib/blogData';

const uspCards = [
  {
    title: '10 Years Warranty',
    desc: 'Every product we install comes backed by a 10-year warranty, giving you complete peace of mind long after the job is done.',
    icon: '✦',
  },
  {
    title: 'Quick Installation',
    desc: 'Our trained technicians work efficiently to complete installations with minimal disruption to your home or business routine.',
    icon: '⚡',
  },
  {
    title: 'Free Measurement',
    desc: 'We offer complimentary on-site measurement to ensure a perfect fit — no guesswork, no extra charges, just precision from day one.',
    icon: '◈',
  },
  {
    title: 'Committed To Work',
    desc: 'We take pride in our work ethic. From the first consultation to the final fitting, your satisfaction is our top priority.',
    icon: '◉',
  },
];

const stats = [
  { value: '25', suffix: '+', label: 'Years of Experience' },
  { value: '500', suffix: '+', label: 'Satisfied Customers' },
  { value: '1200', suffix: '+', label: 'Projects Completed' },
  { value: '50', suffix: '+', label: 'Professional Team' },
];

const teamMembers = [
  { name: 'Jayson Randall', role: 'Senior Technician', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Arley Workman', role: 'Installation Specialist', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'David Dorsey', role: 'Lead Technician', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
];

function FeatureCard({ title, desc, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center text-xl mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-navy-900 text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Windco — 25+ years of premium window and door installation. Trusted craftsmanship for homeowners and businesses since 1996."
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">About Us</span>
        </div>
      </div>

      {/* Section 1 — Hero / Intro Banner */}
      <section className="relative min-h-[520px] overflow-hidden flex items-center">
        <img
          src={images.commercial}
          alt="About Windco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold uppercase tracking-widest text-gold-400 mb-4"
            >
              Welcome To Windco
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              We Have 25 Years of Experience in Window &amp; Door Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg leading-relaxed"
            >
              With over two decades of expertise, we&apos;ve helped thousands of homeowners and businesses
              transform their spaces with premium-quality windows and doors. Our skilled team delivers
              craftsmanship you can trust — on time, every time.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 2 — Key Features / USPs */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {uspCards.map((card, i) => (
            <FeatureCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </section>

      {/* Section 3 — About / Who We Are */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-500 mb-3">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              We Are Experts In Window &amp; Door Service Company Since 1996
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Since 1996, Windco has been a trusted name in the window and door industry. We combine advanced
              materials, modern techniques, and a customer-first approach to deliver solutions that enhance beauty,
              security, and energy efficiency. Whether it&apos;s a single window replacement or a full commercial
              fit-out, we bring the same level of dedication to every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={images.factory}
              alt="Windco window and door experts"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-500 rounded-2xl -z-10 hidden sm:block" />
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Stats / Numbers */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 50%, #c9a227 0%, transparent 50%), radial-gradient(circle at 75% 50%, #c9a227 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-400 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/70 font-medium text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Team */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Team"
            title="Meet With Our Professional Team"
            description="Our certified technicians bring skill, precision, and professionalism to every installation. Get to know the people behind our exceptional work."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-navy-900 text-lg">{member.name}</h3>
                  <p className="text-gold-500 text-sm font-medium mt-1">{member.role}</p>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — CTA Banner */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${images.cta})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-800/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Do You Want a Custom Project? Contact Us Now
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Have a unique vision in mind? We specialize in custom window and door solutions tailored to your
              exact specifications. Let&apos;s bring your idea to life — reach out to our team today.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 7 — Blog / Articles */}
      <section className="section-padding">
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
