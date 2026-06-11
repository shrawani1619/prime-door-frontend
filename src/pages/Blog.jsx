import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { blogPosts, blogCategories } from '../lib/blogData';

const POSTS_PER_PAGE = 2;

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const activeCategory = searchParams.get('category') || 'All';

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const visiblePosts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const setCategory = (category) => {
    setSearchParams(category === 'All' ? {} : { category });
    setVisibleCount(POSTS_PER_PAGE);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <>
      <SEO
        title="Blog"
        description="Windco blog — expert tips on windows, doors, materials, and home value in Bali."
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">Blog</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-navy-900">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Blog
          </motion.h1>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main posts */}
          <div className="lg:col-span-8 space-y-10">
            {visiblePosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <Link to={`/blog/${post.slug}`} className="block aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6 sm:p-8">
                  <p className="text-gold-500 text-xs font-semibold uppercase tracking-wider mb-2">
                    {post.date}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-4 leading-snug">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-gold-500 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="btn-outline !px-5 !py-2 !text-sm relative z-10"
                  >
                    Read More
                  </Link>
                </div>
              </motion.article>
            ))}

            {filtered.length === 0 && (
              <p className="text-center text-gray-500 py-12">No posts in this category yet.</p>
            )}

            {hasMore && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                  className="btn-outline"
                >
                  Load More
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-navy-900 text-lg mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {blogPosts.map((post) => (
                  <li key={post.slug} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="font-semibold text-navy-900 text-sm leading-snug hover:text-gold-500 transition-colors block mb-1"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-900 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Subscribe Our Newsletter</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Get the latest tips, project updates, and exclusive offers straight to your inbox.
              </p>
              <form onSubmit={handleNewsletter} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gold-500 text-navy-900 py-3 rounded-lg font-semibold text-sm hover:bg-gold-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-navy-900 text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    type="button"
                    onClick={() => setCategory('All')}
                    className={`text-sm font-medium transition-colors ${
                      activeCategory === 'All' ? 'text-gold-500' : 'text-gray-600 hover:text-gold-500'
                    }`}
                  >
                    All Posts
                  </button>
                </li>
                {blogCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`text-sm font-medium transition-colors ${
                        activeCategory === cat ? 'text-gold-500' : 'text-gray-600 hover:text-gold-500'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
