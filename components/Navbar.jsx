'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Academics', href: '#academics', hasDropdown: true },
  { label: 'Programs', href: '#programs', hasDropdown: true },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white border-b border-gray-100 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-[#CC0000] rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-black text-lg leading-none">QM</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-black text-[#0A0A3E] text-lg leading-tight">
                Queen Mira
              </div>
              <div className="text-[#CC0000] text-xs font-semibold tracking-widest uppercase">
                International School
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#CC0000] transition-colors rounded-md hover:bg-red-50"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </a>
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      {link.label === 'Academics' && (
                        <>
                          <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#CC0000] rounded-md">Pre-Primary</a>
                          <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#CC0000] rounded-md">Primary School</a>
                          <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#CC0000] rounded-md">Middle School</a>
                          <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#CC0000] rounded-md">Senior School</a>
                        </>
                      )}
                      {link.label === 'Programs' && (
                        <>
                          <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#CC0000] rounded-md">IBDP</a>
                          <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#CC0000] rounded-md">IGCSE</a>
                          <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#CC0000] rounded-md">Sports Academy</a>
                          <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-[#CC0000] rounded-md">Arts Program</a>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#CC0000] transition-colors font-medium"
            >
              <Phone size={15} className="text-[#CC0000]" />
              +91 98765 43210
            </a>
            <button
              onClick={() => router.push('/apply')}
              className="bg-[#CC0000] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#990000] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            >
              Admissions 2025
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.label}>
              <div className="flex items-center justify-between">
                <a
                  href={link.href}
                  className="flex-1 block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#CC0000] hover:bg-red-50 rounded-lg transition-colors"
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                >
                  {link.label}
                </a>
                {link.hasDropdown && (
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="p-2 text-gray-500 hover:text-[#CC0000]"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
              {link.hasDropdown && activeDropdown === link.label && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-red-100 pl-3">
                  {link.label === 'Academics' && (
                    <>
                      {['Pre-Primary', 'Primary School', 'Middle School', 'Senior School'].map((item) => (
                        <a key={item} href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#CC0000]">{item}</a>
                      ))}
                    </>
                  )}
                  {link.label === 'Programs' && (
                    <>
                      {['IBDP', 'IGCSE', 'Sports Academy', 'Arts Program'].map((item) => (
                        <a key={item} href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#CC0000]">{item}</a>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-gray-100 space-y-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700"
            >
              <Phone size={15} className="text-[#CC0000]" />
              +91 98765 43210
            </a>
            <button
              onClick={() => { setIsOpen(false); router.push('/apply'); }}
              className="block w-full text-center bg-[#CC0000] text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-[#990000] transition-colors"
            >
              Admissions 2025
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
