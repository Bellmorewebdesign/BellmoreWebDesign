'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import Logo from './site/Logo';
import { NAV_LINKS, CONTACT } from './site/siteData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'glass-header shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] sm:h-[76px]">
          <Logo />

          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-[#1E2A38] bg-[#1E2A38]/5'
                    : 'text-[#5F6B73] hover:text-[#1E2A38] hover:bg-[#1E2A38]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="ml-1 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#1E2A38] rounded-lg hover:bg-[#1E2A38]/5 transition-colors"
              aria-label={`Call ${CONTACT.phoneDisplay}`}
            >
              <svg className="h-4 w-4 text-[#4E86BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden lg:inline">Call</span>
            </a>
            <Link
              href="/contact"
              className="btn-press cta-shimmer ml-1 bg-[#1E2A38] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:bg-[#16212C]"
            >
              Free Mockup
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-1 text-[#1E2A38] rounded-lg hover:bg-[#1E2A38]/5"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#FFFDF7]/98 backdrop-blur-xl border-t border-[#E8DED0] shadow-soft"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`block w-full py-3 px-3 rounded-lg font-medium ${
                    isActive(link.href) ? 'bg-[#1E2A38]/5 text-[#1E2A38]' : 'text-[#1E2A38] hover:bg-[#1E2A38]/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-[#E8DED0] bg-white px-4 py-3 text-sm font-semibold text-[#1E2A38]"
                >
                  <svg className="h-4 w-4 text-[#4E86BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call
                </a>
                <a
                  href={CONTACT.smsHref}
                  className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-[#E8DED0] bg-white px-4 py-3 text-sm font-semibold text-[#1E2A38]"
                >
                  <svg className="h-4 w-4 text-[#4E86BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z" />
                  </svg>
                  Text
                </a>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-press block w-full bg-[#1E2A38] text-white px-5 py-3.5 rounded-full font-semibold text-center mt-1"
              >
                Get a Free Mockup
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
