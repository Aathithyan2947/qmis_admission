import { FileText, FileCheck, ClipboardList, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Apply Online',
    description:
      'Fill out our comprehensive online application form with student and parent details, academic history, and program preference.',
    duration: '10–15 mins',
    color: 'bg-red-50 text-[#CC0000] border-red-200',
    iconBg: 'bg-[#CC0000]',
  },
  {
    number: '02',
    icon: FileCheck,
    title: 'Document Verification',
    description:
      'Submit required documents including previous school records, birth certificate, address proof, and photographs for verification.',
    duration: '1–2 Days',
    color: 'bg-blue-50 text-[#0A0A3E] border-blue-200',
    iconBg: 'bg-[#0A0A3E]',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Assessment Test',
    description:
      'Students appear for a grade-appropriate assessment covering English, Mathematics, and General Aptitude to gauge readiness.',
    duration: '2 Hours',
    color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    iconBg: 'bg-[#F59E0B]',
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'Interview',
    description:
      'A friendly interaction session with students and parents conducted by our academic team to understand goals and expectations.',
    duration: '30 mins',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    iconBg: 'bg-purple-600',
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Admission Confirmed',
    description:
      'Receive your offer letter, complete fee payment, collect welcome kit, and officially join the QMIS family for 2025–26!',
    duration: 'Same Day',
    color: 'bg-green-50 text-green-700 border-green-200',
    iconBg: 'bg-green-600',
  },
];

const documents = [
  'Last 2 years school report cards',
  'Transfer/Leaving Certificate',
  'Birth Certificate (original)',
  'Address proof (Aadhaar/Passport)',
  '4 Passport-size photos',
  'Parent ID proofs',
  'Medical fitness certificate',
  'Any sports/achievement certificates',
];

export default function AdmissionProcessSection() {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Admissions 2025
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A3E] mb-4">
            Simple Steps to Join
            <span className="text-[#CC0000]"> QMIS</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our streamlined admission process is designed to be straightforward,
            transparent, and stress-free for both students and parents.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-16">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0">
            <div className="h-full bg-gradient-to-r from-[#CC0000] to-[#0A0A3E] w-3/4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div
                    className={`w-16 h-16 ${step.iconBg} rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={26} className="text-white" />
                  </div>
                  {/* Step number */}
                  <div className="text-xs font-black text-gray-400 mb-1 tracking-wider">
                    STEP {step.number}
                  </div>
                  {/* Title */}
                  <h3 className="font-black text-[#0A0A3E] text-sm mb-2">{step.title}</h3>
                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{step.description}</p>
                  {/* Duration badge */}
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${step.color}`}
                  >
                    {step.duration}
                  </span>
                  {/* Arrow for non-last steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-8 -mr-3 z-20">
                      <ArrowRight size={16} className="text-gray-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom: Documents + CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Documents Required */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6">
            <h3 className="font-black text-[#0A0A3E] text-lg mb-4 flex items-center gap-2">
              <FileCheck size={20} className="text-[#CC0000]" />
              Documents Required
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CC0000] mt-1.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-[#0A0A3E] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#CC0000] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                Limited Seats Available
              </div>
              <h3 className="font-black text-white text-xl mb-3">
                Ready to Apply for 2025–26?
              </h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Applications are open now. Secure your child&apos;s future at Queen Mira
                International School. Early applicants receive priority consideration.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: 'Application Fee', value: '₹1,500' },
                  { label: 'Closes On', value: 'May 31, 2025' },
                  { label: 'Results By', value: 'June 15, 2025' },
                  { label: 'Intake Start', value: 'July 1, 2025' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-lg p-2.5">
                    <div className="text-white/60 text-xs">{item.label}</div>
                    <div className="text-white font-bold text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-[#CC0000] text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#FF1A1A] transition-all duration-200 hover:scale-105"
            >
              Start Application Now
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
