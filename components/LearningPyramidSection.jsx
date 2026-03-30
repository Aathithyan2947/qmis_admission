const pyramidLevels = [
  {
    level: 5,
    title: 'Excellence',
    subtitle: 'Leadership',
    description: 'Students become leaders, innovators, and change-makers who inspire others.',
    color: 'from-[#CC0000] to-[#990000]',
    width: 'w-1/5',
    textColor: 'text-white',
    tag: 'Level 5',
  },
  {
    level: 4,
    title: 'Synthesis',
    subtitle: 'Creating',
    description: 'Combining ideas to create new solutions, projects, and original work.',
    color: 'from-[#e81212] to-[#CC0000]',
    width: 'w-2/5',
    textColor: 'text-white',
    tag: 'Level 4',
  },
  {
    level: 3,
    title: 'Analysis',
    subtitle: 'Thinking',
    description: 'Breaking down complex problems and evaluating information critically.',
    color: 'from-[#f43333] to-[#e81212]',
    width: 'w-3/5',
    textColor: 'text-white',
    tag: 'Level 3',
  },
  {
    level: 2,
    title: 'Application',
    subtitle: 'Skills',
    description: 'Applying knowledge in real-world scenarios and practical problem solving.',
    color: 'from-[#ff5555] to-[#f43333]',
    width: 'w-4/5',
    textColor: 'text-white',
    tag: 'Level 2',
  },
  {
    level: 1,
    title: 'Foundation',
    subtitle: 'Knowledge',
    description: 'Building strong conceptual foundations through structured curriculum.',
    color: 'from-[#ff7777] to-[#ff5555]',
    width: 'w-full',
    textColor: 'text-white',
    tag: 'Level 1',
  },
];

export default function LearningPyramidSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-[#CC0000] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Our Pedagogy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A3E] mb-4">
            The QMIS
            <span className="text-[#CC0000]"> Learning Pyramid</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our unique pedagogical framework ensures students progress from foundational
            knowledge to true leadership excellence through five transformative stages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Pyramid Graphic */}
          <div className="flex flex-col items-center gap-1">
            {pyramidLevels.map((lvl) => (
              <div
                key={lvl.level}
                className={`${lvl.width} flex items-center justify-center transition-all duration-300 hover:brightness-110 cursor-pointer group`}
                style={{
                  clipPath:
                    lvl.level === pyramidLevels.length
                      ? 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)'
                      : lvl.level === 1
                      ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                      : 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
                }}
              >
                <div
                  className={`w-full py-5 bg-gradient-to-r ${lvl.color} flex flex-col items-center justify-center`}
                >
                  <span className={`font-black text-base lg:text-lg ${lvl.textColor}`}>
                    {lvl.title}
                  </span>
                  <span className={`text-xs ${lvl.textColor} opacity-80 font-medium`}>
                    {lvl.subtitle}
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-3 text-center">
              <div className="text-gray-400 text-sm font-medium">
                — The Path to Excellence —
              </div>
            </div>
          </div>

          {/* Level descriptions */}
          <div className="space-y-4">
            {pyramidLevels.map((lvl) => (
              <div
                key={lvl.level}
                className="group flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#CC0000] hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#CC0000] rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-sm">{lvl.level}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[#0A0A3E] text-base">{lvl.title}</h3>
                    <span className="text-xs bg-red-50 text-[#CC0000] font-semibold px-2 py-0.5 rounded-full">
                      {lvl.subtitle}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{lvl.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diploma / Smart Thinkers section */}
        <div className="mt-20 bg-[#0A0A3E] rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 lg:p-12">
              <span className="inline-block bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                Diploma Program
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Smart, Confident
                <span className="text-[#CC0000] block">Thinkers & Doers</span>
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Our Diploma program is designed to produce graduates who are not just
                academically proficient but are confident communicators, critical thinkers,
                and compassionate leaders ready for any global challenge.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Critical Thinking', icon: '🧠' },
                  { label: 'Global Citizenship', icon: '🌍' },
                  { label: 'Research Skills', icon: '🔬' },
                  { label: 'Communication', icon: '💬' },
                  { label: 'Creativity', icon: '🎨' },
                  { label: 'Leadership', icon: '🚀' },
                ].map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-white/90 text-sm font-medium">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="hidden md:block relative min-h-64"
              style={{
                backgroundImage: 'url(https://picsum.photos/600/400?random=50)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#CC0000]/30" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-white font-black text-xl">IB Diploma</div>
                  <div className="text-white/70 text-sm">Internationally recognized qualification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
