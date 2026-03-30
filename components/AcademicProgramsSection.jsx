import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 1,
    name: 'Pre-Primary',
    grades: 'Nursery – KG 2',
    ageGroup: 'Ages 3–5',
    description:
      'A nurturing environment built on play-based learning that fosters curiosity, creativity, and foundational skills in language, math, and social development.',
    image: 'https://picsum.photos/500/400?random=60',
    highlights: ['Play-based learning', 'Montessori methods', 'Social skills', 'Creative arts'],
    color: 'bg-yellow-500',
    badge: 'Foundation',
  },
  {
    id: 2,
    name: 'Primary School',
    grades: 'Grade 1 – 5',
    ageGroup: 'Ages 6–10',
    description:
      'Building strong academic foundations with an inquiry-based curriculum that develops reading, writing, numeracy, and critical thinking across all subjects.',
    image: 'https://picsum.photos/500/400?random=61',
    highlights: ['CBSE / ICSE curriculum', 'Language immersion', 'STEM projects', 'Character education'],
    color: 'bg-blue-500',
    badge: 'Foundation',
  },
  {
    id: 3,
    name: 'Middle School',
    grades: 'Grade 6 – 8',
    ageGroup: 'Ages 11–13',
    description:
      'A transformative phase where students explore diverse subjects, develop independent thinking, and begin shaping their academic interests and career aspirations.',
    image: 'https://picsum.photos/500/400?random=62',
    highlights: ['Subject specialization', 'Research projects', 'Debate & MUN', 'Leadership clubs'],
    color: 'bg-green-500',
    badge: 'Exploratory',
  },
  {
    id: 4,
    name: 'Senior School',
    grades: 'Grade 9 – 12',
    ageGroup: 'Ages 14–18',
    description:
      'A rigorous and comprehensive program preparing students for top universities worldwide through CBSE, IGCSE, and IB Diploma pathways with expert guidance.',
    image: 'https://picsum.photos/500/400?random=63',
    highlights: ['IB Diploma / CBSE', 'University counseling', 'Career pathways', 'Competitive exams'],
    color: 'bg-[#CC0000]',
    badge: 'Excellence',
  },
  {
    id: 5,
    name: 'Sports Academy',
    grades: 'Grade 1 – 12',
    ageGroup: 'All Ages',
    description:
      'A specialized sports academy offering professional training in cricket, football, badminton, swimming, and athletics with certified Olympic-level coaches.',
    image: 'https://picsum.photos/500/400?random=64',
    highlights: ['Olympic coaches', 'Fitness training', 'Competitions', 'Sports science'],
    color: 'bg-orange-500',
    badge: 'Sports',
  },
  {
    id: 6,
    name: 'Arts Program',
    grades: 'Grade 1 – 12',
    ageGroup: 'All Ages',
    description:
      'Comprehensive arts education covering visual arts, performing arts, music, dance, and drama, culminating in regular public showcases and competitions.',
    image: 'https://picsum.photos/500/400?random=65',
    highlights: ['Visual arts', 'Music & dance', 'Drama & theatre', 'Annual arts fest'],
    color: 'bg-purple-500',
    badge: 'Arts',
  },
];

export default function AcademicProgramsSection() {
  return (
    <section id="academics" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Academic Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A3E] mb-4">
            Programs for Every
            <span className="text-[#CC0000]"> Stage of Growth</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From nursery to grade 12, we offer carefully structured academic programs
            tailored to each stage of your child&apos;s development.
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 card-hover group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`${program.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {program.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-black text-lg">{program.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-white/80 text-xs">{program.grades}</span>
                    <span className="text-white/50">·</span>
                    <span className="text-white/80 text-xs">{program.ageGroup}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="group/link flex items-center gap-1.5 text-[#CC0000] text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  <BookOpen size={14} />
                  Learn About This Program
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Parent's Clarity section */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                Parent&apos;s Clarity
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A3E] mb-4">
                We Keep Parents Fully
                <span className="text-[#CC0000]"> Informed</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At QMIS, we believe parents are equal partners in their child&apos;s education.
                Our parent engagement systems ensure complete transparency, regular updates,
                and easy access to your child&apos;s academic journey at all times.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Real-Time Progress Tracker', desc: 'Live academic performance dashboard' },
                  { title: 'Monthly Parent Reports', desc: 'Detailed progress and behavior reports' },
                  { title: 'Parent-Teacher Meetings', desc: 'Scheduled monthly PTMs' },
                  { title: 'QMIS Parent App', desc: 'Mobile app for instant updates' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 p-3 bg-[#F5F5F5] rounded-xl"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#CC0000] mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-[#0A0A3E] text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-[#CC0000] rounded-2xl p-6 text-center text-white">
                <div className="text-4xl font-black mb-1">98%</div>
                <div className="font-bold text-sm">Parent Satisfaction Rate</div>
                <div className="text-red-200 text-xs mt-1">2024 Annual Survey</div>
              </div>
              <div className="bg-[#0A0A3E] rounded-2xl p-6 text-center text-white">
                <div className="text-4xl font-black mb-1">4.9<span className="text-2xl">/5</span></div>
                <div className="font-bold text-sm">Parent App Rating</div>
                <div className="text-blue-300 text-xs mt-1">Based on 2000+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
