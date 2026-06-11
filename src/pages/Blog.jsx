import { useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import { images } from '../lib/images';
import { blogPosts, blogCategories, getCategoryCount } from '../lib/blogData';

const POSTS_PER_PAGE = 3;

function CategoryBadge({ category }) {
  return (
    <span className="inline-block bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full">
      {category}
    </span>
  );
}

function PostMeta({ post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
      <span className="text-gold-500 font-semibold">{post.date}</span>
      <span className="text-gray-300">·</span>
      <span>{post.readTime}</span>
      <span className="text-gray-300">·</span>
      <span>{post.author}</span>
    </div>
  );
}

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const activeCategory = searchParams.get('category') || 'All';

  const filtered = useMemo(() => {
    let posts =
      activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.category.toLowerCase().includes(q)
      );
    }

    return posts;
  }, [activeCategory, searchQuery]);

  const showFeatured = activeCategory === 'All' && !searchQuery.trim();
  const featuredPost = showFeatured ? blogPosts[0] : null;
  const listPosts = showFeatured ? filtered.filter((p) => p.slug !== featuredPost?.slug) : filtered;
  const visiblePosts = listPosts.slice(0, visibleCount);
  const hasMore = visibleCount < listPosts.length;

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

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src={images.commercial}
          alt="Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/88" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-400 text-sm font-semibold tracking-widest mb-4">
              Our Blog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Blog</h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              Expert tips, trends, and insights on windows, doors, and home improvement in Bali.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <section className="section-padding bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-gold-500 text-sm font-semibold tracking-widest mb-6">Featured Article</p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <Link to={`/blog/${featuredPost.slug}`} className="block aspect-[16/10] lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </Link>
              <div className="p-6 sm:p-10 lg:py-12">
                <CategoryBadge category={featuredPost.category} />
                <div className="mt-4 mb-3">
                  <PostMeta post={featuredPost} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4 leading-snug">
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="hover:text-gold-500 transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                <Link to={`/blog/${featuredPost.slug}`} className="btn-primary">
                  Read More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Content + sidebar */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Articles"
            title="Latest Blog & Articles"
            description="Stay informed with practical advice from our window and door specialists."
          />

          {/* Search + category filters */}
          <div className="mb-10 space-y-4">
            <div className="relative max-w-xl">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                placeholder="Search articles..."
                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent shadow-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', ...blogCategories].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-gold-500 hover:text-gold-500'
                  }`}
                >
                  {cat}
                  <span className="ml-1.5 opacity-70">({getCategoryCount(cat)})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main posts */}
            <div className="lg:col-span-8">
              {visiblePosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {visiblePosts.map((post, i) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
                    >
                      <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <CategoryBadge category={post.category} />
                        </div>
                      </Link>
                      <div className="p-6 flex flex-col flex-1">
                        <PostMeta post={post} />
                        <h2 className="text-lg font-bold text-navy-900 mt-3 mb-3 leading-snug group-hover:text-gold-500 transition-colors">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="btn-outline !px-5 !py-2 !text-sm w-fit"
                        >
                          Read More
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                  <p className="text-gray-500 mb-4">No articles match your search.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setCategory('All');
                    }}
                    className="text-gold-500 font-semibold text-sm hover:text-gold-400 transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {hasMore && (
                <div className="text-center mt-10">
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
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-navy-900 text-lg mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.map((post) => (
                    <li key={post.slug} className="flex gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="shrink-0 w-16 h-16 rounded-lg overflow-hidden"
                      >
                        <img
                          src={post.image}
                          alt=""
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <div className="min-w-0">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="font-semibold text-navy-900 text-sm leading-snug hover:text-gold-500 transition-colors line-clamp-2 block mb-1"
                        >
                          {post.title}
                        </Link>
                        <p className="text-xs text-gray-400">{post.date}</p>
                      </div>
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
                  {['All', ...blogCategories].map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`w-full flex items-center justify-between text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                          activeCategory === cat
                            ? 'bg-navy-900 text-white'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gold-500'
                        }`}
                      >
                        <span>{cat === 'All' ? 'All Posts' : cat}</span>
                        <span className={activeCategory === cat ? 'text-white/70' : 'text-gray-400'}>
                          {getCategoryCount(cat)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.cta})` }}
        />
        <div className="absolute inset-0 bg-navy-900/88" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to upgrade your windows?
          </h2>
          <p className="text-white/75 mb-6">
            Book a free consultation and get expert advice tailored to your home or business.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
