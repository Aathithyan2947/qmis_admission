'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const alumniReviews = [
  {
    id: 1,
    name: 'Arjun Mehta',
    batch: 'Batch 2021',
    role: 'Software Engineer at Google',
    image: 'https://picsum.photos/100/100?random=100',
    rating: 5,
    review:
      'QMIS gave me the foundation to crack IIT and eventually land at Google. The teachers here don\'t just teach — they inspire. The problem-solving skills I learned in the Math and CS labs are something I use every single day.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    batch: 'Batch 2022',
    role: 'Medical Student at Harvard',
    image: 'https://picsum.photos/100/100?random=101',
    rating: 5,
    review:
      'I was selected for Harvard\'s Medical program, and I owe it to QMIS\'s rigorous science curriculum and the incredible mentorship I received. The school taught me not just biology, but how to think like a scientist.',
  },
  {
    id: 3,
    name: 'Dev Patel',
    batch: 'Batch 2023',
    role: 'Forbes 30 Under 30 | Startup Founder',
    image: 'https://picsum.photos/100/100?random=102',
    rating: 5,
    review:
      'The entrepreneurship cells, the leadership programs, and the sheer culture of innovation at QMIS is what set me on my path. When Forbes listed me, I knew it started here at Queen Mira.',
  },
];

const parentTestimonials = [
  {
    id: 1,
    name: 'Mr. Ramesh Iyer',
    relation: 'Parent of Kavya Iyer, Grade 9',
    image: 'https://picsum.photos/100/100?random=110',
    rating: 5,
    review:
      'Moving to QMIS was the best decision for our daughter. The holistic approach — academics, sports, arts — has transformed her into a confident, well-rounded individual. The parent app keeps us informed every day.',
  },
  {
    id: 2,
    name: 'Mrs. Sunita Kapoor',
    relation: 'Parent of Raj Kapoor, Grade 7',
    image: 'https://picsum.photos/100/100?random=111',
    rating: 5,
    review:
      'The teachers at QMIS genuinely care about every child. My son was struggling with Math, and within two months, the personalized attention he received turned it into his favorite subject. Remarkable dedication!',
  },
  {
    id: 3,
    name: 'Mr. Vikram Nair',
    relation: 'Parent of Ishaan Nair, Grade 11',
    image: 'https://picsum.photos/100/100?random=112',
    rating: 5,
    review:
      'QMIS has a culture of excellence that is unlike any school I\'ve seen. My son won a national mathematics olympiad gold medal — something I never imagined possible. The faculty truly nurtures talent.',
  },
  {
    id: 4,
    name: 'Mrs. Deepa Reddy',
    relation: 'Parent of Ananya Reddy, Grade 5',
    image: 'https://picsum.photos/100/100?random=113',
    rating: 5,
    review:
      'From the moment we visited the campus, we knew this was the right school. The infrastructure, the teaching quality, and most importantly the values instilled in children are exceptional.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={s <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeParent, setActiveParent] = useState(0);

  const prevTestimonial = () => {
    setActiveParent((prev) => (prev === 0 ? parentTestimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveParent((prev) => (prev === parentTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Alumni Reviews */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Alumni Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A3E] mb-4">
              What Our Alumni
              <span className="text-[#CC0000]"> Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {alumniReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 card-hover relative"
              >
                <Quote size={32} className="text-red-100 absolute top-4 right-4" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#CC0000]">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-[#0A0A3E] text-sm">{review.name}</div>
                    <div className="text-[#CC0000] text-xs font-semibold">{review.batch}</div>
                    <div className="text-gray-500 text-xs">{review.role}</div>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-gray-600 text-sm leading-relaxed mt-3 relative z-10">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Testimonials */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block bg-[#0A0A3E]/10 text-[#0A0A3E] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Parent Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A3E] mb-4">
              Trusted by
              <span className="text-[#CC0000]"> 8000+ Families</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main testimonial */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 relative overflow-hidden">
              {/* Background quote mark */}
              <div className="absolute top-0 right-0 opacity-5">
                <Quote size={180} className="text-[#CC0000]" />
              </div>

              <div className="relative z-10">
                <StarRating rating={parentTestimonials[activeParent].rating} />
                <p className="text-gray-700 text-lg leading-relaxed my-6 font-medium">
                  &ldquo;{parentTestimonials[activeParent].review}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#CC0000]">
                    <Image
                      src={parentTestimonials[activeParent].image}
                      alt={parentTestimonials[activeParent].name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-black text-[#0A0A3E] text-base">
                      {parentTestimonials[activeParent].name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {parentTestimonials[activeParent].relation}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="flex items-center gap-2 text-gray-600 hover:text-[#CC0000] font-semibold transition-colors"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {parentTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveParent(i)}
                    className={`transition-all duration-200 rounded-full ${
                      i === activeParent
                        ? 'w-6 h-2.5 bg-[#CC0000]'
                        : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center gap-2 text-gray-600 hover:text-[#CC0000] font-semibold transition-colors"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
