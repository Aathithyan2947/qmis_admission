'use client';

export default function AnnouncementBar() {
  const messages = [
    '🎉 ADMISSIONS OPEN 2025!',
    '⭐ Apply Now for the Academic Year 2025–2026',
    '🏆 QMIS Ranked #1 International School',
    '📚 Limited Seats Available — Register Today',
    '🌟 95% University Placement Rate',
    '🎓 25+ Years of Academic Excellence',
    '🚀 Early Bird Discount on Application Fee',
    '📞 Call Us: +91 98765 43210',
  ];

  const doubledMessages = [...messages, ...messages];

  return (
    <div className="bg-[#CC0000] text-white py-2 overflow-hidden relative z-50">
      <div className="flex items-center">
        <div className="animate-scroll flex items-center gap-0">
          {doubledMessages.map((msg, index) => (
            <span key={index} className="flex items-center whitespace-nowrap">
              <span className="text-sm font-semibold tracking-wide px-2">{msg}</span>
              <span className="text-yellow-300 mx-3 text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
