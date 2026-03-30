'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Clock, TrendingUp, Trophy, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 8000,
    suffix: '+',
    label: 'Students Enrolled',
    description: 'Active learners across all grades',
    color: 'text-[#CC0000]',
    bg: 'bg-red-50',
  },
  {
    icon: Clock,
    value: 25,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'Decades of academic leadership',
    color: 'text-[#0A0A3E]',
    bg: 'bg-blue-50',
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: '%',
    label: 'Success Rate',
    description: 'University placement record',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Trophy,
    value: 150,
    suffix: '+',
    label: 'Awards & Honours',
    description: 'National & international accolades',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '',
    label: 'Parent Rating',
    description: 'Based on 3000+ reviews',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

function AnimatedNumber({ target, suffix, duration = 2000 }) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const isDecimal = !Number.isInteger(target);
    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = isDecimal
        ? parseFloat((eased * target).toFixed(1))
        : Math.floor(eased * target);
      setCurrent(value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {current}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className={stat.color} />
                </div>
                <div className={`text-3xl lg:text-4xl font-black ${stat.color} mb-1`}>
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-bold text-gray-800 text-sm mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs leading-tight">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
