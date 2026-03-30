import Image from 'next/image';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';

const blogs = [
  {
    id: 1,
    category: 'Education',
    categoryColor: 'bg-blue-100 text-blue-700',
    date: 'March 12, 2025',
    readTime: '5 min read',
    author: 'Dr. Meera Krishnan',
    title: '10 Ways the IB Diploma Prepares Students Better Than Traditional Boards',
    excerpt:
      'The International Baccalaureate Diploma Programme is more than a qualification — it\'s a holistic educational experience that develops critical thinkers, effective communicators, and compassionate global citizens. Here\'s how.',
    image: 'https://picsum.photos/600/400?random=120',
    tags: ['IB Diploma', 'Curriculum', 'University Prep'],
  },
  {
    id: 2,
    category: 'Parenting',
    categoryColor: 'bg-green-100 text-green-700',
    date: 'March 8, 2025',
    readTime: '4 min read',
    author: 'Mrs. Anjali Patel',
    title: 'How to Choose the Right School for Your Child: A Parent\'s Complete Guide',
    excerpt:
      'Choosing the right school is one of the most important decisions you\'ll make for your child\'s future. From curriculum to culture, facilities to faculty — here\'s everything you need to evaluate before making the decision.',
    image: 'https://picsum.photos/600/400?random=121',
    tags: ['Parenting', 'School Choice', 'Admissions'],
  },
  {
    id: 3,
    category: 'Student Life',
    categoryColor: 'bg-purple-100 text-purple-700',
    date: 'March 3, 2025',
    readTime: '3 min read',
    author: 'Rohan Desai',
    title: 'From Classroom to Campus: A Day in the Life of a QMIS Student',
    excerpt:
      'What does a typical day look like at Queen Mira International School? From early morning yoga sessions to late-night robotics club meetings — our students live, learn, and grow every single day.',
    image: 'https://picsum.photos/600/400?random=122',
    tags: ['Student Life', 'Campus', 'Day in Life'],
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              QMIS Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A3E]">
              Insights & <span className="text-[#CC0000]">Stories</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-[#CC0000] font-semibold hover:gap-3 transition-all group"
          >
            View All Posts
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 card-hover group ${
                index === 0 ? 'md:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${blog.categoryColor}`}>
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-gray-400 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {blog.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={11} />
                    {blog.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-[#0A0A3E] text-base leading-snug mb-3 group-hover:text-[#CC0000] transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-[#CC0000] text-sm font-semibold group/link"
                >
                  Read Full Article
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-[#0A0A3E] rounded-3xl p-8 lg:p-10 text-center overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CC0000]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-white mb-2">
              Stay Updated with QMIS
            </h3>
            <p className="text-white/70 mb-6 text-sm">
              Subscribe to our newsletter for the latest news, events, and admission updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-sm outline-none bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-[#CC0000] focus:bg-white/15 transition-all"
              />
              <button className="bg-[#CC0000] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#FF1A1A] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-white/40 text-xs mt-3">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
