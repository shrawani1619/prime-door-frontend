import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { images } from '../lib/images';
import { blogPosts, blogCategories, getPostBySlug } from '../lib/blogData';

function BlogImage({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = images.residential;
      }}
    />
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const recent = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />

      {/* Hero */}
      <section className="relative min-h-[320px] sm:min-h-[400px] flex items-end overflow-hidden">
        <BlogImage
          src={post.image}
          alt={post.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/30" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-gold-400 transition-colors mb-6"
            >
              ← Back to Blog
            </Link>
            <span className="inline-block bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-5 text-sm text-white/70">
              <span className="text-gold-400 font-semibold">{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article + sidebar */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                <BlogImage
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-10 lg:p-12">
                <p className="text-lg sm:text-xl text-navy-900 font-medium leading-relaxed border-l-4 border-gold-500 pl-5 mb-10">
                  {post.excerpt}
                </p>

                <div className="space-y-6">
                  {post.content.map((paragraph, index) => (
                    <p
                      key={`${post.slug}-p-${index}`}
                      className="text-gray-600 text-base sm:text-lg leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
                  <Link to="/blog" className="btn-outline">
                    ← All Articles
                  </Link>
                  <Link to="/contact" className="btn-primary">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-navy-900 text-lg mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {recent.map((item) => (
                  <li key={item.slug} className="flex gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <Link to={`/blog/${item.slug}`} className="shrink-0 w-14 h-14 rounded-lg overflow-hidden">
                      <BlogImage
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="min-w-0">
                      <Link
                        to={`/blog/${item.slug}`}
                        className="font-semibold text-navy-900 text-sm leading-snug hover:text-gold-500 transition-colors line-clamp-2"
                      >
                        {item.title}
                      </Link>
                      <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-900 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Need expert advice?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Book a free consultation and we&apos;ll help you choose the right windows and doors for your property.
              </p>
              <Link to="/contact" className="btn-primary w-full text-center block">
                Contact Us
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-navy-900 text-lg mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/blog?category=${cat}`}
                    className={`text-sm font-medium px-3 py-1.5 rounded-full transition-colors ${
                      post.category === cat
                        ? 'bg-navy-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gold-500 hover:text-navy-900'
                    }`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((item) => (
                <article
                  key={item.slug}
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group hover:shadow-lg transition-shadow"
                >
                  <Link to={`/blog/${item.slug}`} className="block aspect-[16/10] overflow-hidden">
                    <BlogImage
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-6">
                    <p className="text-gold-500 text-xs font-semibold mb-2">{item.date}</p>
                    <h3 className="font-bold text-navy-900 mb-2 group-hover:text-gold-500 transition-colors">
                      <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <Link
                      to={`/blog/${item.slug}`}
                      className="btn-outline !px-5 !py-2 !text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
