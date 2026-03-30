import Image from 'next/image';
import { Dumbbell, Heart, Activity, Users, CheckCircle } from 'lucide-react';

const gymFeatures = [
  'Age-appropriate fitness equipment for all grades',
  'Certified physical education trainers',
  'Yoga & mindfulness sessions for mental clarity',
  'Nutritional guidance & healthy diet programs',
  'Weekly fitness assessments and progress tracking',
  'Sports injury prevention & physiotherapy access',
];

const programs = [
  { icon: Dumbbell, name: 'Strength Training', age: 'Grades 6–12', color: 'bg-red-100 text-[#CC0000]' },
  { icon: Activity, name: 'Cardio & Endurance', age: 'All Grades', color: 'bg-blue-100 text-blue-600' },
  { icon: Heart, name: 'Yoga & Wellness', age: 'All Grades', color: 'bg-green-100 text-green-600' },
  { icon: Users, name: 'Team Sports', age: 'All Grades', color: 'bg-yellow-100 text-yellow-600' },
];

export default function KidsGymSection() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Physical Fitness
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A3E] mb-4 leading-tight">
              Kids Gym &
              <span className="text-[#CC0000]"> Fitness Program</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A healthy mind lives in a healthy body. Our world-class Kids Gym and Physical
              Fitness Program ensures every QMIS student develops strength, stamina, and
              a lifelong habit of wellness from an early age.
            </p>

            {/* Programs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {programs.map(({ icon: Icon, name, age, color }) => (
                <div key={name} className="bg-white rounded-xl p-3 border border-gray-100 flex items-center gap-3">
                  <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-[#0A0A3E] text-xs">{name}</div>
                    <div className="text-gray-400 text-xs">{age}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features list */}
            <ul className="space-y-2 mb-8">
              {gymFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#CC0000] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#admissions"
              className="inline-flex items-center gap-2 bg-[#CC0000] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#990000] transition-all hover:scale-105 shadow-md"
            >
              Enroll Your Child
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: Image + floating stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-96">
                <Image
                  src="https://picsum.photos/700/500?random=30"
                  alt="Kids Gym at QMIS"
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A3E]/60 to-transparent" />
              </div>
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <div className="font-black text-2xl">100%</div>
                      <div className="text-white/80 text-sm">Students participate</div>
                    </div>
                    <div className="w-px h-10 bg-white/30" />
                    <div className="text-white">
                      <div className="font-black text-2xl">5 days</div>
                      <div className="text-white/80 text-sm">Per week program</div>
                    </div>
                    <div className="w-px h-10 bg-white/30" />
                    <div className="text-white">
                      <div className="font-black text-2xl">30+</div>
                      <div className="text-white/80 text-sm">Sports coaches</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating achievement */}
            <div
              className="absolute -top-5 -right-5 bg-[#CC0000] rounded-2xl p-4 shadow-2xl"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              <Dumbbell size={28} className="text-white mb-1" />
              <div className="text-white font-black text-lg">Olympic</div>
              <div className="text-red-200 text-xs">Standard Gym</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
