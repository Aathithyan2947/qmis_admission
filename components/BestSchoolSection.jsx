'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    label: 'University Acceptance',
    value: 98,
    color: '#CC0000',
    description: 'Top university placements',
  },
  {
    label: 'Student Satisfaction',
    value: 96,
    color: '#0A0A3E',
    description: 'Happy students & families',
  },
  {
    label: 'Faculty Excellence',
    value: 94,
    color: '#F59E0B',
    description: 'Certified expert educators',
  },
  {
    label: 'Sports Achievement',
    value: 92,
    color: '#10B981',
    description: 'Inter-school championships',
  },
];

function CircularProgress({ value, color, label, description, animated }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animated ? value / 100 : 0) * circumference;

  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative w-24 h-24 mb-4">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          {/* Track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#f0f0f0"
            strokeWidth="8"
          />
          {/* Progress */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.5s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-black text-lg" style={{ color }}>
            {animated ? value : 0}%
          </span>
        </div>
      </div>
      <div className="font-bold text-[#0A0A3E] text-sm mb-1">{label}</div>
      <div className="text-gray-500 text-xs">{description}</div>
    </div>
  );
}

export default function BestSchoolSection() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Our Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A3E] mb-6 leading-tight">
              Best Schools Don&apos;t Tell —
              <span className="text-[#CC0000] block">They Show.</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At QMIS, our results speak louder than any advertisement. From academic
              excellence to holistic development, our numbers reflect the dedication of
              our students, faculty, and the entire QMIS community.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every metric you see here is backed by verified data from years of consistent
              performance across academics, sports, arts, and character development.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm">
                <span className="font-bold text-[#CC0000]">ISO 9001</span>
                <span className="text-gray-500 ml-2">Certified</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm">
                <span className="font-bold text-[#0A0A3E]">CBSE</span>
                <span className="text-gray-500 ml-2">Affiliated</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm">
                <span className="font-bold text-[#F59E0B]">Top 10</span>
                <span className="text-gray-500 ml-2">National Ranking</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm">
                <span className="font-bold text-green-600">IB World</span>
                <span className="text-gray-500 ml-2">School</span>
              </div>
            </div>
          </div>

          {/* Right: Circular progress charts */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#0A0A3E] text-center mb-8 text-lg">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <CircularProgress
                  key={stat.label}
                  value={stat.value}
                  color={stat.color}
                  label={stat.label}
                  description={stat.description}
                  animated={animated}
                />
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-gray-500 text-sm">
                Based on 2024 academic year data across all campuses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
