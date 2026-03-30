'use client';

import { useEffect, useRef, useState } from 'react';
import { TrendingUp, ArrowUp } from 'lucide-react';

const milestones = [
  { year: '2000', event: 'QMIS Founded', students: 200, detail: 'Started with a vision of excellence' },
  { year: '2005', event: 'First IBDP Batch', students: 600, detail: 'Introduced international curriculum' },
  { year: '2010', event: 'Campus Expansion', students: 1500, detail: 'New sports complex & labs' },
  { year: '2015', event: 'ISO Certification', students: 3500, detail: 'Recognized for quality standards' },
  { year: '2020', event: 'Digital Transformation', students: 6000, detail: 'AI-powered smart classrooms' },
  { year: '2025', event: 'Global Recognition', students: 8000, detail: 'Top-ranked school nationally' },
];

const growthStats = [
  { label: 'Campus Area', value: '50', unit: 'Acres', change: '+20% in 5 years' },
  { label: 'Faculty Members', value: '400', unit: 'Experts', change: '+35% in 3 years' },
  { label: 'Clubs & Activities', value: '60', unit: 'Programs', change: '+50% in 2 years' },
  { label: 'University Accepts', value: '200', unit: 'Partners', change: '+45% in 4 years' },
];

export default function GrowthSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-navy-100 bg-[#0A0A3E]/10 text-[#0A0A3E] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            25 Years of Growth
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A3E] mb-4">
            We Are Going{' '}
            <span className="text-[#CC0000]">Stronger</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From a humble beginning to a globally recognized institution — our journey of
            growth reflects our commitment to excellence.
          </p>
        </div>

        {/* Growth bar chart */}
        <div className="bg-[#F5F5F5] rounded-3xl p-8 mb-12">
          <div className="flex items-end justify-between gap-3 h-48 mb-4">
            {milestones.map((m, i) => {
              const maxStudents = 8000;
              const height = (m.students / maxStudents) * 100;
              return (
                <div key={m.year} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="text-xs font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {m.students.toLocaleString()}
                  </div>
                  <div
                    className="w-full rounded-t-lg transition-all duration-1000 relative overflow-hidden cursor-pointer"
                    style={{
                      height: visible ? `${height}%` : '0%',
                      background: i === milestones.length - 1
                        ? 'linear-gradient(to top, #CC0000, #FF4444)'
                        : 'linear-gradient(to top, #0A0A3E, #1a1a5e)',
                      transitionDelay: `${i * 150}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between gap-3">
            {milestones.map((m) => (
              <div key={m.year} className="flex-1 text-center">
                <div className="font-bold text-[#0A0A3E] text-xs sm:text-sm">{m.year}</div>
                <div className="text-gray-500 text-xs hidden sm:block">{m.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {growthStats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-100 rounded-2xl p-5 text-center hover:shadow-lg transition-shadow group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${i * 100}ms`,
              }}
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                <ArrowUp size={14} className="text-green-500" />
                <span className="text-green-600 text-xs font-semibold">{stat.change}</span>
              </div>
              <div className="text-3xl font-black text-[#0A0A3E]">
                {stat.value}<span className="text-[#CC0000]">+</span>
              </div>
              <div className="text-[#CC0000] font-bold text-sm">{stat.unit}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
