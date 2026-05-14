'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'bg-[#FFFDF7] shadow-md' : 'bg-[#FFFDF7]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-[#1E2A38]">
            Bellmore Web Design
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-[#5F6B73] hover:text-[#6FA8DC] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('work')} className="text-[#5F6B73] hover:text-[#6FA8DC] transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection('sample-sites')} className="text-[#5F6B73] hover:text-[#6FA8DC] transition-colors">
              Sample Sites
            </button>
            <button onClick={() => scrollToSection('process')} className="text-[#5F6B73] hover:text-[#6FA8DC] transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-[#5F6B73] hover:text-[#6FA8DC] transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-[#5F6B73] hover:text-[#6FA8DC] transition-colors">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#6FA8DC] text-white px-5 py-2 rounded-xl hover:bg-[#5a8ec4] transition-colors"
            >
              Free Mockup
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#5F6B73] hover:text-[#6FA8DC]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFFDF7] border-t border-[#E8DED0] shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-[#5F6B73] hover:text-[#6FA8DC]">
              Services
            </button>
            <button onClick={() => scrollToSection('work')} className="block w-full text-left py-2 text-[#5F6B73] hover:text-[#6FA8DC]">
              Work
            </button>
            <button onClick={() => scrollToSection('sample-sites')} className="block w-full text-left py-2 text-[#5F6B73] hover:text-[#6FA8DC]">
              Sample Sites
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left py-2 text-[#5F6B73] hover:text-[#6FA8DC]">
              Process
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 text-[#5F6B73] hover:text-[#6FA8DC]">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-[#5F6B73] hover:text-[#6FA8DC]">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-[#6FA8DC] text-white px-5 py-3 rounded-xl hover:bg-[#5a8ec4] transition-colors text-center"
            >
              Free Mockup
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
