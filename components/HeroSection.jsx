'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Play, Star, Trophy, Users } from 'lucide-react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #05052A 0%, #0A0A3E 40%, #12124F 70%, #0A0A3E 100%)',
      }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && (
          <>
            {/* Static star dots */}
            {[
              { top: '8%', left: '12%', size: 2, opacity: 0.9 },
              { top: '15%', left: '28%', size: 1, opacity: 0.7 },
              { top: '6%', left: '45%', size: 1.5, opacity: 0.8 },
              { top: '20%', left: '62%', size: 2, opacity: 0.6 },
              { top: '10%', left: '75%', size: 1, opacity: 0.9 },
              { top: '25%', left: '88%', size: 1.5, opacity: 0.7 },
              { top: '35%', left: '5%', size: 1, opacity: 0.8 },
              { top: '45%', left: '92%', size: 2, opacity: 0.5 },
              { top: '55%', left: '18%', size: 1, opacity: 0.7 },
              { top: '65%', left: '82%', size: 1.5, opacity: 0.8 },
              { top: '72%', left: '35%', size: 1, opacity: 0.6 },
              { top: '80%', left: '58%', size: 2, opacity: 0.9 },
              { top: '88%', left: '72%', size: 1, opacity: 0.7 },
              { top: '92%', left: '22%', size: 1.5, opacity: 0.8 },
              { top: '3%', left: '90%', size: 1, opacity: 0.6 },
              { top: '48%', left: '48%', size: 1, opacity: 0.4 },
              { top: '30%', left: '70%', size: 2, opacity: 0.7 },
              { top: '60%', left: '8%', size: 1, opacity: 0.9 },
              { top: '75%', left: '95%', size: 1.5, opacity: 0.5 },
              { top: '18%', left: '50%', size: 1, opacity: 0.8 },
            ].map((star, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  top: star.top,
                  left: star.left,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                }}
              />
            ))}
          </>
        )}
        {/* Nebula/glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-800 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900 rounded-full filter blur-3xl opacity-5" />
      </div>

      {/* Red accent globe/planet on right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] rounded-full hidden xl:block"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #FF3333 0%, #CC0000 40%, #660000 100%)',
          boxShadow: '0 0 80px rgba(204, 0, 0, 0.4), inset -20px -20px 40px rgba(0,0,0,0.3)',
          opacity: 0.85,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white/90 text-sm font-medium">
                Ranked #1 International School
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
              The future{' '}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(90deg, #FF6B6B, #CC0000)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                loves creators
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-4 font-medium">
              Find Out If Queen Mira Is Your Kind Of School
            </p>
            <p className="text-white/60 text-base mb-10 max-w-xl leading-relaxed">
              Join 8000+ students who have transformed their potential into excellence.
              Experience education that goes beyond the classroom.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => router.push('/apply')}
                className="group flex items-center gap-2 bg-[#CC0000] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#FF1A1A] transition-all duration-300 shadow-lg shadow-red-900/40 hover:scale-105"
              >
                Apply Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#about"
                className="group flex items-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
              >
                <Play size={18} className="text-white/80" />
                Learn More
              </a>
            </div>

            {/* Quick stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '8000+', label: 'Students' },
                { value: '25+', label: 'Years' },
                { value: '95%', label: 'Success' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — floating cards */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Floating badge: Students */}
              <div
                className="absolute -top-8 -left-8 z-20 bg-white rounded-2xl p-4 shadow-2xl"
                style={{ animation: 'float 3s ease-in-out infinite' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#CC0000] rounded-xl flex items-center justify-center">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-black text-[#0A0A3E] text-lg">8000+</div>
                    <div className="text-gray-500 text-xs font-medium">Active Students</div>
                  </div>
                </div>
              </div>

              {/* Central image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <div
                  className="w-full h-80 bg-gradient-to-br from-[#1a1a5e] to-[#CC0000]"
                  style={{
                    backgroundImage: 'url(https://picsum.photos/500/400?random=1)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A3E]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold text-lg">World-Class Campus</div>
                  <div className="text-white/70 text-sm">State-of-the-art facilities</div>
                </div>
              </div>

              {/* Floating badge: Award */}
              <div
                className="absolute -bottom-6 -right-6 z-20 bg-[#CC0000] rounded-2xl p-4 shadow-2xl"
                style={{ animation: 'float 3s ease-in-out infinite 1.5s' }}
              >
                <div className="flex items-center gap-3">
                  <Trophy size={24} className="text-yellow-300" />
                  <div>
                    <div className="font-black text-white text-lg">150+</div>
                    <div className="text-red-200 text-xs font-medium">Awards Won</div>
                  </div>
                </div>
              </div>

              {/* Rating badge */}
              <div
                className="absolute top-1/2 -right-10 z-20 bg-[#0A0A3E] border border-white/20 rounded-2xl p-3 shadow-2xl"
                style={{ animation: 'float 4s ease-in-out infinite 0.5s' }}
              >
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-white font-black text-center mt-1 text-lg">4.9</div>
                <div className="text-white/60 text-xs text-center">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L60 68C120 56 240 32 360 26.7C480 21.3 600 34.7 720 40C840 45.3 960 42.7 1080 37.3C1200 32 1320 24 1380 20L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
