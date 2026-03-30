import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react';

const footerLinks = {
  about: [
    { label: 'About QMIS', href: '#about' },
    { label: 'Our Mission & Vision', href: '#' },
    { label: 'Leadership Team', href: '#' },
    { label: 'Campus Tour', href: '#' },
    { label: 'Awards & Recognition', href: '#' },
    { label: 'QMIS History', href: '#' },
  ],
  quickLinks: [
    { label: 'Home', href: '#' },
    { label: 'Admissions 2025', href: '#admissions' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Events Calendar', href: '#' },
    { label: 'News & Updates', href: '#news' },
    { label: 'Parent Login', href: '#' },
  ],
  programs: [
    { label: 'Pre-Primary (Nursery–KG)', href: '#academics' },
    { label: 'Primary School (1–5)', href: '#academics' },
    { label: 'Middle School (6–8)', href: '#academics' },
    { label: 'Senior School (9–12)', href: '#academics' },
    { label: 'IB Diploma Programme', href: '#academics' },
    { label: 'Sports Academy', href: '#academics' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
];

const certifications = [
  { name: 'IB World School', color: 'bg-blue-600' },
  { name: 'ISO 9001:2015', color: 'bg-green-600' },
  { name: 'CBSE Affiliated', color: 'bg-[#CC0000]' },
  { name: 'IGCSE Centre', color: 'bg-purple-600' },
  { name: 'Green School', color: 'bg-teal-600' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0A0A3E] text-white">
      {/* Certifications strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-white/50 text-xs font-semibold uppercase tracking-wider mr-2">Accredited By:</span>
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`${cert.color} px-4 py-1.5 rounded-full text-white text-xs font-bold`}
              >
                {cert.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-[#CC0000] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-lg">QM</span>
              </div>
              <div>
                <div className="font-black text-white text-base leading-tight">Queen Mira</div>
                <div className="text-[#CC0000] text-xs font-semibold tracking-widest">International School</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Shaping future leaders with world-class education, innovative programs, and
              holistic development for over 25 years.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-8 h-8 bg-white/10 rounded-full flex items-center justify-center ${color} transition-colors duration-200`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#CC0000]" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 text-sm hover:text-white hover:gap-3 transition-all duration-200 group"
                  >
                    <ArrowRight size={12} className="text-[#CC0000] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#CC0000]" />
              Programs
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 text-sm hover:text-white hover:gap-3 transition-all duration-200 group"
                  >
                    <ArrowRight size={12} className="text-[#CC0000] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#CC0000]" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#CC0000] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Queen Mira Campus, Sector 12, Education City, Bangalore – 560001, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#CC0000] flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-white/60 text-sm hover:text-white transition-colors block">
                    +91 98765 43210
                  </a>
                  <a href="tel:+918012345678" className="text-white/60 text-sm hover:text-white transition-colors block">
                    +91 80 1234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#CC0000] flex-shrink-0" />
                <div>
                  <a href="mailto:admissions@qmis.edu.in" className="text-white/60 text-sm hover:text-white transition-colors block">
                    admissions@qmis.edu.in
                  </a>
                  <a href="mailto:info@qmis.edu.in" className="text-white/60 text-sm hover:text-white transition-colors block">
                    info@qmis.edu.in
                  </a>
                </div>
              </li>
            </ul>

            {/* Office hours */}
            <div className="mt-5 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-white/80 text-xs font-bold mb-2">Office Hours</div>
              <div className="text-white/50 text-xs">Mon – Sat: 9:00 AM – 5:00 PM</div>
              <div className="text-white/50 text-xs">Sunday: Closed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-white/50 text-xs text-center sm:text-left">
              © {currentYear} Queen Mira International School. All rights reserved.
            </p>
            <div className="flex items-center flex-wrap justify-center gap-4 text-white/50 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
