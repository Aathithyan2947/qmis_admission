import Image from 'next/image';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const news = [
  {
    id: 1,
    category: 'Achievement',
    categoryColor: 'bg-red-100 text-[#CC0000]',
    date: 'March 10, 2025',
    title: 'QMIS Students Win Gold at National Science Olympiad 2025',
    excerpt:
      'Our brilliant students swept the top three positions at the National Science Olympiad, bringing pride to Queen Mira with exceptional performances in Physics and Chemistry.',
    image: 'https://picsum.photos/600/400?random=10',
    readTime: '3 min read',
  },
  {
    id: 2,
    category: 'Campus News',
    categoryColor: 'bg-blue-100 text-[#0A0A3E]',
    date: 'March 5, 2025',
    title: 'New Innovation Lab Inaugurated with AI & Robotics Wing',
    excerpt:
      'QMIS proudly launches its brand-new AI & Robotics Innovation Lab, equipped with state-of-the-art tools to prepare students for careers in technology and engineering.',
    image: 'https://picsum.photos/600/400?random=11',
    readTime: '4 min read',
  },
  {
    id: 3,
    category: 'Sports',
    categoryColor: 'bg-green-100 text-green-700',
    date: 'February 28, 2025',
    title: 'QMIS U-17 Football Team Wins State Championship',
    excerpt:
      'The Under-17 football team delivered a stunning performance in the State School Championship, winning 3-1 in the finals and securing the title for the third consecutive year.',
    image: 'https://picsum.photos/600/400?random=12',
    readTime: '2 min read',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Latest Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A3E]">
              News & <span className="text-[#CC0000]">Highlights</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-[#CC0000] font-semibold hover:gap-3 transition-all group"
          >
            View All News
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 card-hover group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${item.categoryColor}`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {item.date}
                  </span>
                  <span>·</span>
                  <span>{item.readTime}</span>
                </div>
                <h3 className="font-bold text-[#0A0A3E] text-base leading-snug mb-3 group-hover:text-[#CC0000] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#CC0000] text-sm font-semibold group/link"
                >
                  Read More
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
