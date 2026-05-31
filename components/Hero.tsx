'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'motion/react';
import WebsitePreview from './WebsitePreview';

const EASE = [0.22, 1, 0.36, 1] as const;

const TRUST_POINTS = [
  'Local to Nassau County',
  'Free homepage mockups',
  'Mobile-friendly websites',
  'Simple starting prices',
];

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 88;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: EASE } },
      };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#FFFDF7] to-[#FAF7F0] pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-[#E8DED0] bg-white/70 px-4 py-1.5 mb-6 shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#A8C3A0] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6B8E6B]" />
              </span>
              <span className="text-sm font-medium text-[#5F6B73]">Local Web Design in Nassau County</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#1E2A38] mb-6 leading-[1.08]"
            >
              Simple Websites for Local Businesses That Need{' '}
              <span className="gradient-text">More Than a Facebook Page</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg sm:text-xl text-[#5F6B73] mb-8 leading-relaxed max-w-xl">
              Bellmore Web Design helps small businesses turn their services, photos, reviews, and
              contact info into a clean website customers can actually use.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-press bg-[#1E2A38] text-white px-7 py-4 rounded-full text-base font-semibold shadow-premium hover:bg-[#16212C]"
              >
                Get a Free Homepage Mockup
              </button>
              <button
                onClick={() => scrollToSection('sample-sites')}
                className="btn-press bg-white text-[#1E2A38] px-7 py-4 rounded-full text-base font-semibold border border-[#E8DED0] shadow-soft hover:border-[#6FA8DC]"
              >
                See Sample Sites
              </button>
            </motion.div>

            <motion.ul variants={item} className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-lg">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#A8C3A0]/25">
                    <svg className="w-3 h-3 text-[#6B8E6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#5F6B73] font-medium">{point}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            style={{ y: parallaxY }}
            className="flex justify-center lg:justify-end will-change-transform"
          >
            <WebsitePreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
