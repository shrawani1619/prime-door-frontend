import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { blogPosts, getPostBySlug } from '../lib/blogData';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-gold-500 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium line-clamp-1">{post.title}</span>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
                {post.date}
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-900 bg-gray-100 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-8">
              {post.title}
            </h1>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-gray max-w-none space-y-5">
              {post.content.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
              <Link to="/blog" className="btn-outline">
                ← Back to Blog
              </Link>
              <Link to="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-padding bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((item) => (
                <article
                  key={item.slug}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group"
                >
                  <Link to={`/blog/${item.slug}`} className="block aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-6">
                    <p className="text-gold-500 text-xs font-semibold uppercase tracking-wider mb-2">
                      {item.date}
                    </p>
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
