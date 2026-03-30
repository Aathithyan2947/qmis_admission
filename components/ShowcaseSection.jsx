import Image from 'next/image';
import { ArrowRight, Award, Globe, Rocket } from 'lucide-react';

const showcaseItems = [
  {
    id: 1,
    tag: 'Lead Beyond',
    title: 'Student Leadership Council',
    description:
      'Empowering student voices through democratically elected councils, giving every student the opportunity to shape school policy and develop real leadership skills.',
    image: 'https://picsum.photos/600/500?random=40',
    highlight: '500+ student leaders annually',
    icon: Rocket,
  },
  {
    id: 2,
    tag: 'Global Stage',
    title: 'International Competitions',
    description:
      'QMIS students regularly compete in MUN, STEM fairs, coding competitions, debates, and arts festivals on international platforms representing India.',
    image: 'https://picsum.photos/600/500?random=41',
    highlight: '50+ countries represented',
    icon: Globe,
  },
  {
    id: 3,
    tag: 'Awards',
    title: 'Excellence Recognition',
    description:
      'Our students earn recognition at every level — from local district competitions to prestigious national and international awards across academics, arts, and sports.',
    image: 'https://picsum.photos/600/500?random=42',
    highlight: '150+ awards in 2024 alone',
    icon: Award,
  },
];

export default function ShowcaseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Student Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A3E] mb-4">
            Lead Beyond the
            <span className="text-[#CC0000]"> Classroom</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences, real achievements, real impact. Our students don&apos;t just study —
            they lead, compete, create, and inspire.
          </p>
        </div>

        {/* Showcase grid */}
        <div className="space-y-16">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  isEven ? '' : 'lg:[&>*:first-child]:order-2'
                }`}
              >
                {/* Image */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl h-72 lg:h-80">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 bg-[#CC0000] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        <Icon size={12} />
                        {item.tag}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <Icon size={20} className="text-[#CC0000]" />
                    </div>
                    <span className="text-[#CC0000] font-bold text-sm uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A3E] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-8 bg-[#CC0000] rounded-full" />
                    <span className="text-[#CC0000] font-bold text-sm">{item.highlight}</span>
                  </div>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-[#0A0A3E] font-semibold border-b-2 border-[#0A0A3E] pb-0.5 hover:text-[#CC0000] hover:border-[#CC0000] transition-colors"
                  >
                    Discover More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
