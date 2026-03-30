'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'Admissions',
    question: 'What is the admission process at QMIS for the 2025–26 academic year?',
    answer:
      'The QMIS admission process involves five simple steps: (1) Online Application submission, (2) Document Verification, (3) Assessment Test appropriate for the grade applied, (4) Student and Parent Interview with our academic team, and (5) Confirmation of Admission with fee payment. The entire process typically takes 7–10 working days from application to confirmation.',
  },
  {
    id: 2,
    category: 'Fees',
    question: 'What are the school fees and what does it include?',
    answer:
      'QMIS fees vary by grade level and program. The annual fee structure includes tuition, laboratory usage, library access, sports facilities, digital learning tools, and co-curricular activities. Detailed fee information is provided during the application process. We also offer merit scholarships, need-based financial aid, and sibling discounts. Contact our admissions office at +91 98765 43210 for a personalized fee breakdown.',
  },
  {
    id: 3,
    category: 'Curriculum',
    question: 'What curriculum does QMIS follow — CBSE, ICSE, or IB?',
    answer:
      'QMIS offers multiple curriculum pathways to cater to diverse student goals. For Grades 1–10, we follow the CBSE curriculum enhanced with our own enrichment programs. For Grades 11–12, students may choose between CBSE Science/Commerce streams and the prestigious International Baccalaureate Diploma Programme (IBDP). We are also an authorised IB World School.',
  },
  {
    id: 4,
    category: 'Facilities',
    question: 'What facilities and infrastructure does QMIS offer?',
    answer:
      'Our 50-acre campus features state-of-the-art infrastructure including: AI-powered smart classrooms, fully-equipped science and technology labs, a 2000-seat auditorium, Olympic-standard swimming pool and sports complex, dedicated Kids Gym, innovation and robotics lab, a library with 50,000+ books and digital resources, cafeteria with healthy meal plans, and 24/7 CCTV security systems.',
  },
  {
    id: 5,
    category: 'Transport',
    question: 'Does QMIS provide school transport? What areas are covered?',
    answer:
      'Yes, QMIS provides a comprehensive GPS-tracked school bus service covering major residential areas in and around the city. All buses are air-conditioned, fitted with CCTV cameras, and operated by trained staff. Parents receive real-time notifications about bus location and estimated arrival times through the QMIS Parent App. Transport fees are charged separately based on route distance.',
  },
  {
    id: 6,
    category: 'Admissions',
    question: 'Is there a scholarship program for meritorious students?',
    answer:
      'Absolutely. QMIS offers several scholarship categories: Academic Merit Scholarships for students with 90%+ marks, Sports Scholarships for district/state-level achievers, Arts Scholarships for exceptional talent in music, dance, or visual arts, and Need-Based Financial Aid for deserving families. Scholarship applications are reviewed by a dedicated committee during the admission process.',
  },
  {
    id: 7,
    category: 'General',
    question: 'What extracurricular activities does QMIS offer beyond academics?',
    answer:
      'QMIS has 60+ clubs and activities including coding club, robotics, debate, Model United Nations (MUN), environmental club, photography, chess, music bands, dance troupes, drama society, student journalism, entrepreneurship cell, social service initiatives, and competitive sports teams across 15+ disciplines.',
  },
  {
    id: 8,
    category: 'General',
    question: 'How does QMIS support students with learning difficulties or special needs?',
    answer:
      'QMIS has a dedicated Special Educational Needs (SEN) team that provides personalised support plans, one-on-one mentoring sessions, and assistive learning technologies. We believe every child can thrive with the right support, and our trained counselors work closely with families to create inclusive learning environments for all students.',
  },
];

const categories = ['All', 'Admissions', 'Fees', 'Curriculum', 'Facilities', 'Transport', 'General'];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A3E] mb-4">
            Frequently Asked
            <span className="text-[#CC0000]"> Questions</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need to know about QMIS admissions, curriculum,
            fees, and campus life. Can&apos;t find your answer? Contact us directly.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#CC0000] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filtered.map((faq) => (
            <div
              key={faq.id}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openId === faq.id
                  ? 'border-[#CC0000] shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left group"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle
                    size={18}
                    className={`flex-shrink-0 mt-0.5 transition-colors ${
                      openId === faq.id ? 'text-[#CC0000]' : 'text-gray-400 group-hover:text-[#CC0000]'
                    }`}
                  />
                  <div>
                    <span className="text-xs text-[#CC0000] font-bold uppercase tracking-wider block mb-0.5">
                      {faq.category}
                    </span>
                    <span
                      className={`font-bold text-sm sm:text-base leading-snug transition-colors ${
                        openId === faq.id ? 'text-[#CC0000]' : 'text-[#0A0A3E] group-hover:text-[#CC0000]'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                </div>
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openId === faq.id
                      ? 'bg-[#CC0000] text-white'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-red-50 group-hover:text-[#CC0000]'
                  }`}
                >
                  {openId === faq.id ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-5 pl-14">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 bg-[#F5F5F5] rounded-2xl p-6 text-center">
          <h3 className="font-bold text-[#0A0A3E] text-base mb-2">Still have questions?</h3>
          <p className="text-gray-500 text-sm mb-4">
            Our admissions team is available Mon–Sat, 9 AM – 5 PM to help you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-[#CC0000] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#990000] transition-colors"
            >
              📞 Call +91 98765 43210
            </a>
            <a
              href="mailto:admissions@qmis.edu.in"
              className="flex items-center gap-2 border-2 border-[#0A0A3E] text-[#0A0A3E] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#0A0A3E] hover:text-white transition-all"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
