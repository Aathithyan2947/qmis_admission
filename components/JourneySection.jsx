import Image from 'next/image';
import { CheckCircle, Heart, Shield, Lightbulb, Users } from 'lucide-react';

const supports = [
  { icon: Heart, label: 'Emotional Wellbeing', desc: 'Dedicated counselors for every student' },
  { icon: Shield, label: 'Safe Environment', desc: '24/7 security & CCTV campus' },
  { icon: Lightbulb, label: 'Guided Mentorship', desc: 'Personal academic mentors' },
  { icon: Users, label: 'Community Support', desc: 'Strong parent-school partnership' },
];

const checkpoints = [
  'Personalized learning paths for every student',
  'Regular parent-teacher interaction sessions',
  'Emotional intelligence & mental health programs',
  'Career guidance from grade 6 onwards',
  'After-school enrichment clubs & activities',
];

export default function JourneySection() {
  return (
    <section id="about" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large image */}
              <div className="col-span-2 relative h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/800/400?random=20"
                  alt="Students learning"
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A3E]/40 to-transparent" />
              </div>
              {/* Two smaller images */}
              <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/400/300?random=21"
                  alt="Campus life"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/400/300?random=22"
                  alt="Sports"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-4 shadow-xl z-10 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#CC0000] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart size={20} className="text-white fill-white" />
                </div>
                <div>
                  <div className="font-black text-[#0A0A3E] text-base">Every child matters</div>
                  <div className="text-gray-500 text-xs">Holistic development guaranteed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              The QMIS Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A3E] mb-4 leading-tight">
              We Support Every Child&apos;s
              <span className="text-[#CC0000]"> Unique Journey</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At QMIS, we understand that every child is different. Our educators don&apos;t just teach —
              they mentor, guide, and walk alongside each student through their educational journey,
              ensuring no one is left behind.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {checkpoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#CC0000] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{point}</span>
                </li>
              ))}
            </ul>

            {/* Support cards */}
            <div className="grid grid-cols-2 gap-3">
              {supports.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-[#CC0000] transition-colors">
                  <Icon size={20} className="text-[#CC0000] mb-2" />
                  <div className="font-bold text-[#0A0A3E] text-sm">{label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
