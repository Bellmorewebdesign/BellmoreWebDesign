'use client';

import { Reveal } from './motion-primitives';
import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as const;

const PARTS = [
  {
    label: 'Services',
    desc: 'What you offer, front and center',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    label: 'Photos',
    desc: 'A gallery of your real work',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    label: 'Reviews',
    desc: 'Trust from happy customers',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.46 9.10c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
  {
    label: 'Service area',
    desc: 'The towns you cover',
    icon: 'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    label: 'Call button',
    desc: 'One tap to reach you',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    label: 'Contact form',
    desc: 'Quote requests in your inbox',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
];

function AnatomyItem({ part, align }: { part: (typeof PARTS)[number]; align: 'left' | 'right' }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl bg-white border border-[#E8DED0] shadow-soft px-4 py-3 ${
        align === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''
      }`}
    >
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#6FA8DC]/15 text-[#4E86BC]">
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={part.icon} />
        </svg>
      </span>
      <div>
        <div className="font-semibold text-[#1E2A38] text-sm">{part.label}</div>
        <div className="text-xs text-[#5F6B73]">{part.desc}</div>
      </div>
    </div>
  );
}

function AnatomyMockup() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="mx-auto w-full max-w-[380px] rounded-2xl bg-white shadow-premium border border-[#E8DED0] overflow-hidden"
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#F4EFE6] border-b border-[#E8DED0]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#E5867E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#E8C56B]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#9CC592]" />
      </div>
      <div className="p-5 space-y-3 bg-gradient-to-b from-white to-[#FAF7F0]">
        <div className="rounded-lg bg-[#1E2A38] px-3 py-3 text-white">
          <div className="h-2 w-2/3 rounded-full bg-white/80 mb-1.5" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/40" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['#6FA8DC', '#A8C3A0', '#D8BFA3'].map((c, i) => (
            <div key={i} className="rounded-lg border border-[#EFE7DA] bg-white p-2">
              <div className="w-5 h-5 rounded-md mb-1.5" style={{ backgroundColor: c }} />
              <div className="h-1.5 w-full rounded-full bg-[#E8DED0]" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="aspect-square rounded-md bg-gradient-to-br from-[#E8DED0] to-[#D8C9B4]" />
          ))}
        </div>
        <div className="flex items-center justify-between rounded-xl border border-[#EFE7DA] bg-white px-3 py-2">
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-[2px] bg-[#E0B84B]" />
            ))}
          </div>
          <div className="h-1.5 w-12 rounded-full bg-[#E8DED0]" />
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-xl bg-[#6FA8DC] h-9" />
          <div className="flex-1 rounded-xl border border-[#E8DED0] bg-white h-9" />
        </div>
      </div>
    </motion.div>
  );
}

export default function SolutionSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F0] to-[#FFFDF7]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">The fix</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            One clean page with everything customers look for
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            A simple website organizes the parts of your business into one place, so people can find
            what they need without digging through social media.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_minmax(0,400px)_1fr] gap-8 items-center">
          <div className="hidden lg:flex flex-col gap-5">
            {PARTS.slice(0, 3).map((p) => (
              <Reveal key={p.label}>
                <AnatomyItem part={p} align="right" />
              </Reveal>
            ))}
          </div>

          <AnatomyMockup />

          <div className="hidden lg:flex flex-col gap-5">
            {PARTS.slice(3).map((p) => (
              <Reveal key={p.label}>
                <AnatomyItem part={p} align="left" />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {PARTS.map((p) => (
            <AnatomyItem key={p.label} part={p} align="left" />
          ))}
        </div>
      </div>
    </section>
  );
}
