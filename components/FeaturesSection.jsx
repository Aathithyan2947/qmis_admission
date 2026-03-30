import { GraduationCap, FlaskConical, Dumbbell, Palette, Laptop, Globe } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'World-Class Faculty',
    description:
      'Our educators hold advanced degrees from globally recognized universities and bring rich real-world experience into every classroom.',
    color: 'bg-red-100 text-[#CC0000]',
    border: 'border-red-100',
    hover: 'hover:border-[#CC0000]',
  },
  {
    icon: FlaskConical,
    title: 'State-of-Art Labs',
    description:
      'Cutting-edge science, technology, and innovation labs equipped with the latest instruments to drive curiosity and hands-on learning.',
    color: 'bg-blue-100 text-[#0A0A3E]',
    border: 'border-blue-100',
    hover: 'hover:border-[#0A0A3E]',
  },
  {
    icon: Dumbbell,
    title: 'Sports Excellence',
    description:
      'Olympic-standard sports facilities with professional coaching in cricket, football, swimming, athletics, basketball, and more.',
    color: 'bg-green-100 text-green-600',
    border: 'border-green-100',
    hover: 'hover:border-green-500',
  },
  {
    icon: Palette,
    title: 'Arts & Culture',
    description:
      'Vibrant performing arts, visual arts, music, and dance programs that nurture creativity and cultural expression in every student.',
    color: 'bg-yellow-100 text-yellow-600',
    border: 'border-yellow-100',
    hover: 'hover:border-yellow-500',
  },
  {
    icon: Laptop,
    title: 'Digital Learning',
    description:
      'AI-powered smart classrooms, 1:1 device programs, and digital literacy courses that prepare students for the future economy.',
    color: 'bg-purple-100 text-purple-600',
    border: 'border-purple-100',
    hover: 'hover:border-purple-500',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description:
      'International exchange programs, MUN, global competitions, and partnerships with 50+ schools worldwide for a world-ready education.',
    color: 'bg-orange-100 text-orange-600',
    border: 'border-orange-100',
    hover: 'hover:border-orange-500',
  },
];

export default function FeaturesSection() {
  return (
    <section id="programs" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Why Choose QMIS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A3E] mb-4">
            Everything Your Child
            <span className="text-[#CC0000]"> Deserves</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide a comprehensive learning environment where every student can discover
            their passion and pursue excellence in multiple domains.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`bg-white rounded-2xl p-6 border-2 ${feature.border} ${feature.hover} transition-all duration-300 card-hover group`}
              >
                <div
                  className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={26} />
                </div>
                <h3 className="font-bold text-[#0A0A3E] text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                <div className="mt-4 flex items-center gap-1 text-[#CC0000] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
