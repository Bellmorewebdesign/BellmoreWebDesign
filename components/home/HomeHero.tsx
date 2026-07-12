'use client';

import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { CONTACT } from '../site/siteData';
import { WebsiteIcon, SocialIcon, CameraIcon } from '../site/ServiceIcons';

const EASE = [0.22, 1, 0.36, 1] as const;

const CLARIFIERS = [
  'The homepage mockup is free',
  'The completed website is a paid project',
  'Websites available throughout New York',
  'On-site content near Bellmore',
  'Built to work on phones',
  'You work directly with me',
];

const TILES = [
  { Icon: WebsiteIcon, label: 'Websites', sub: 'Custom & mobile-friendly', accent: '#4E86BC' },
  { Icon: SocialIcon, label: 'Social Media', sub: 'Instagram & Facebook', accent: '#6B8E6B' },
  { Icon: CameraIcon, label: 'Photo & Video', sub: 'On-site content', accent: '#C9A86A' },
];

export default function HomeHero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
      };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#FFFDF7] to-[#FAF7F0] pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-[#E8DED0] bg-white/70 px-4 py-1.5 mb-6 shadow-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#A8C3A0] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6B8E6B]" />
              </span>
              <span className="text-sm font-medium text-[#5F6B73]">Local to Bellmore &amp; Nassau County, NY</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-[#1E2A38] mb-6 leading-[1.08]"
            >
              Websites, Content, and{' '}
              <span className="gradient-text">Social Media</span> for Local Businesses
            </motion.h1>

            <motion.p variants={item} className="text-lg text-[#5F6B73] mb-8 leading-relaxed max-w-xl">
              I build websites for local businesses and keep their social media active with real photos
              and short videos of the work they do.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
              <Link
                href="/contact"
                className="btn-press cta-shimmer bg-[#1E2A38] text-white px-7 py-4 rounded-full text-base font-semibold shadow-premium hover:bg-[#16212C]"
              >
                Get a Free Homepage Mockup
              </Link>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="btn-press bg-white text-[#1E2A38] px-7 py-4 rounded-full text-base font-semibold border border-[#E8DED0] shadow-soft hover:border-[#6FA8DC]"
              >
                Call or Text
              </a>
              <Link
                href="/work"
                className="btn-press inline-flex items-center justify-center gap-1.5 px-4 py-4 rounded-full text-base font-semibold text-[#4E86BC] hover:text-[#1E2A38]"
              >
                View Recent Work
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.ul variants={item} className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-xl">
              {CLARIFIERS.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#A8C3A0]/25">
                    <svg className="w-3 h-3 text-[#6B8E6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#5F6B73] font-medium">{point}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Three-service visual */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[#6FA8DC]/15 via-transparent to-[#A8C3A0]/15 blur-2xl" />
            <div className="relative rounded-3xl border border-[#E8DED0] bg-white/80 backdrop-blur-sm p-5 sm:p-6 shadow-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6FA8DC] mb-4">
                What I set up for you
              </p>
              <div className="space-y-3">
                {TILES.map(({ Icon, label, sub, accent }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-[#EFE7DA] bg-[#FFFDF7] p-4"
                  >
                    <span
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-soft"
                      style={{ background: accent }}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-bold text-[#1E2A38]">{label}</p>
                      <p className="text-sm text-[#5F6B73]">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#1E2A38] px-5 py-4 text-white">
                <span className="text-sm font-medium text-white/85">It&apos;s just me, doing all three</span>
                <Link href="/#services" className="text-sm font-semibold text-[#9CC3E6] hover:text-white transition-colors">
                  See services →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
