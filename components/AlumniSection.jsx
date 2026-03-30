import Image from 'next/image';
import { GraduationCap, Building2, MapPin, Award } from 'lucide-react';

const batches = [
  {
    year: 2021,
    graduates: 320,
    topUniversity: 'Oxford, Cambridge, IITs',
    placed: 98,
    highlight: 'Best Academic Batch',
    image: 'https://picsum.photos/400/300?random=70',
    notableAlumni: [
      { name: 'Arjun Mehta', role: 'Google Engineer', university: 'IIT Bombay' },
      { name: 'Priya Sharma', role: 'Harvard Med Student', university: 'Harvard' },
    ],
  },
  {
    year: 2022,
    graduates: 345,
    topUniversity: 'MIT, Stanford, NITs',
    placed: 97,
    highlight: 'Most Sports Achievers',
    image: 'https://picsum.photos/400/300?random=71',
    notableAlumni: [
      { name: 'Rohan Gupta', role: 'National Cricket Player', university: 'NCA' },
      { name: 'Ananya Joshi', role: 'Goldman Sachs Analyst', university: 'LSE' },
    ],
  },
  {
    year: 2023,
    graduates: 380,
    topUniversity: 'UCL, King\'s, ISB',
    placed: 99,
    highlight: 'Highest Placement Rate',
    image: 'https://picsum.photos/400/300?random=72',
    notableAlumni: [
      { name: 'Sneha Kapoor', role: 'NASA Intern', university: 'Caltech' },
      { name: 'Dev Patel', role: 'Forbes 30 Under 30', university: 'NUS' },
    ],
  },
  {
    year: 2024,
    graduates: 410,
    topUniversity: 'Yale, Columbia, BITS',
    placed: 98,
    highlight: 'Most International Admits',
    image: 'https://picsum.photos/400/300?random=73',
    notableAlumni: [
      { name: 'Kavya Reddy', role: 'UN Youth Ambassador', university: 'Yale' },
      { name: 'Aditya Roy', role: 'Tech Startup Founder', university: 'Columbia' },
    ],
  },
  {
    year: 2025,
    graduates: 435,
    topUniversity: 'Applications in Progress',
    placed: null,
    highlight: 'Largest Batch Ever',
    image: 'https://picsum.photos/400/300?random=74',
    notableAlumni: [
      { name: 'Ishaan Nair', role: 'Olympiad Gold Medalist', university: 'Applying' },
      { name: 'Riya Singh', role: 'State Topper CBSE', university: 'Applying' },
    ],
  },
];

const overallStats = [
  { icon: GraduationCap, value: '1,890+', label: 'Total Alumni', color: 'text-[#CC0000]' },
  { icon: Building2, value: '200+', label: 'Partner Universities', color: 'text-[#0A0A3E]' },
  { icon: MapPin, value: '40+', label: 'Countries', color: 'text-green-600' },
  { icon: Award, value: '98%', label: 'Avg. Placement Rate', color: 'text-yellow-600' },
];

export default function AlumniSection() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Our Alumni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A3E] mb-4">
            Where QMIS Graduates
            <span className="text-[#CC0000]"> Go</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our alumni are making waves across the globe — in top universities, leading corporations,
            government, sports, arts, and entrepreneurship.
          </p>
        </div>

        {/* Overall stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {overallStats.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
              <Icon size={24} className={`${color} mx-auto mb-2`} />
              <div className={`text-2xl font-black ${color}`}>{value}</div>
              <div className="text-gray-500 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Batch cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {batches.map((batch) => (
            <div
              key={batch.year}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 card-hover group"
            >
              {/* Batch image */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={batch.image}
                  alt={`Batch ${batch.year}`}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A3E]/80 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <span className="text-white font-black text-xl">Batch {batch.year}</span>
                </div>
                {batch.year === 2025 && (
                  <div className="absolute top-2 right-2 bg-[#CC0000] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Current
                  </div>
                )}
              </div>

              {/* Batch info */}
              <div className="p-4">
                <div className="bg-red-50 text-[#CC0000] text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
                  {batch.highlight}
                </div>

                <div className="space-y-1.5 mb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs">Graduates</span>
                    <span className="font-bold text-[#0A0A3E] text-xs">{batch.graduates}</span>
                  </div>
                  {batch.placed && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-xs">Placement</span>
                      <span className="font-bold text-green-600 text-xs">{batch.placed}%</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-3">
                  <div className="text-gray-400 text-xs mb-1.5">Top Destinations</div>
                  <div className="text-[#0A0A3E] text-xs font-medium leading-snug">{batch.topUniversity}</div>
                </div>

                {/* Notable alumni */}
                <div className="mt-3 space-y-1.5">
                  {batch.notableAlumni.map((alumni) => (
                    <div key={alumni.name} className="bg-gray-50 rounded-lg p-2">
                      <div className="font-semibold text-[#0A0A3E] text-xs">{alumni.name}</div>
                      <div className="text-gray-400 text-xs">{alumni.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-[#0A0A3E] text-[#0A0A3E] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#0A0A3E] hover:text-white transition-all duration-200"
          >
            View Full Alumni Directory
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
