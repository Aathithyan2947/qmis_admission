import { Trophy, Medal, Star, Zap } from 'lucide-react';

const olympiadAchievements = [
  { subject: 'Mathematics', gold: 12, silver: 18, bronze: 24, year: '2024' },
  { subject: 'Science', gold: 8, silver: 15, bronze: 20, year: '2024' },
  { subject: 'Astronomy', gold: 5, silver: 9, bronze: 12, year: '2024' },
  { subject: 'Computers', gold: 10, silver: 14, bronze: 18, year: '2024' },
  { subject: 'English', gold: 7, silver: 11, bronze: 16, year: '2024' },
  { subject: 'GK & Reasoning', gold: 9, silver: 13, bronze: 19, year: '2024' },
];

const competitions = [
  { name: 'National Mathematics Olympiad', rank: '1st', icon: '🥇', level: 'National' },
  { name: 'International Science Challenge', rank: 'Top 3', icon: '🏅', level: 'International' },
  { name: 'CBSE Quiz Championship', rank: 'Winner', icon: '🏆', level: 'National' },
  { name: 'IMO World Contest', rank: 'Top 10', icon: '⭐', level: 'World' },
];

export default function OlympicsSection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #CC0000 0%, #880000 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
        {/* Trophy watermark */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5">
          <Trophy size={300} className="text-white" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Trophy size={16} className="text-yellow-300" />
            <span className="text-white text-sm font-bold">Olympic Dreams & Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Champions Are Made Here
          </h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            QMIS students dominate national and international Olympiads, competitions, and
            academic challenges year after year.
          </p>
        </div>

        {/* Medal tally table */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden mb-10 border border-white/20">
          <div className="p-6">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Medal size={20} className="text-yellow-300" />
              2024 Olympiad Medal Tally
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/10">
                  <th className="text-left px-6 py-3 text-red-100 text-sm font-semibold">Subject</th>
                  <th className="text-center px-4 py-3 text-yellow-300 text-sm font-semibold">
                    🥇 Gold
                  </th>
                  <th className="text-center px-4 py-3 text-gray-300 text-sm font-semibold">
                    🥈 Silver
                  </th>
                  <th className="text-center px-4 py-3 text-orange-300 text-sm font-semibold">
                    🥉 Bronze
                  </th>
                  <th className="text-center px-4 py-3 text-white text-sm font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {olympiadAchievements.map((row, i) => (
                  <tr
                    key={row.subject}
                    className={`border-t border-white/10 hover:bg-white/10 transition-colors ${
                      i % 2 === 0 ? 'bg-white/5' : ''
                    }`}
                  >
                    <td className="px-6 py-3 text-white font-medium">{row.subject}</td>
                    <td className="text-center px-4 py-3 text-yellow-300 font-bold">{row.gold}</td>
                    <td className="text-center px-4 py-3 text-gray-300 font-bold">{row.silver}</td>
                    <td className="text-center px-4 py-3 text-orange-300 font-bold">{row.bronze}</td>
                    <td className="text-center px-4 py-3 text-white font-black">
                      {row.gold + row.silver + row.bronze}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-white/30 bg-white/10">
                  <td className="px-6 py-3 text-white font-black">TOTAL</td>
                  <td className="text-center px-4 py-3 text-yellow-300 font-black">
                    {olympiadAchievements.reduce((s, r) => s + r.gold, 0)}
                  </td>
                  <td className="text-center px-4 py-3 text-gray-300 font-black">
                    {olympiadAchievements.reduce((s, r) => s + r.silver, 0)}
                  </td>
                  <td className="text-center px-4 py-3 text-orange-300 font-black">
                    {olympiadAchievements.reduce((s, r) => s + r.bronze, 0)}
                  </td>
                  <td className="text-center px-4 py-3 text-white font-black text-lg">
                    {olympiadAchievements.reduce((s, r) => s + r.gold + r.silver + r.bronze, 0)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Competition cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {competitions.map((comp) => (
            <div
              key={comp.name}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 transition-colors"
            >
              <div className="text-4xl mb-3">{comp.icon}</div>
              <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">
                {comp.level}
              </div>
              <div className="text-white font-bold text-sm mb-2">{comp.name}</div>
              <div className="inline-block bg-yellow-400/20 text-yellow-300 font-black text-base px-3 py-1 rounded-full">
                {comp.rank}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
