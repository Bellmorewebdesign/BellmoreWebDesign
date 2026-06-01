'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Reveal } from './motion-primitives';
import { DesktopMock, PhoneMock } from './samples/SampleMockups';
import { HOME_SAMPLES } from './samples/sampleData';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function InteractiveSamples() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(HOME_SAMPLES[0].id);
  const active = HOME_SAMPLES.find((s) => s.id === activeId)!;

  return (
    <section id="samples" className="relative overflow-hidden bg-[#1E2A38] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 bg-dotgrid opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9CC3E6]">Sample concepts</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]">
            See what your business could look like
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            These sample concepts show how different local businesses can look with a polished website, strong photos,
            and a clear contact flow.
          </p>
        </Reveal>

        {/* tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Sample industries">
          {HOME_SAMPLES.map((sample) => {
            const isActive = sample.id === activeId;
            return (
              <button
                key={sample.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(sample.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  isActive ? 'bg-white text-[#1E2A38] shadow-premium' : 'bg-white/5 text-white/75 hover:bg-white/10'
                }`}
              >
                {sample.tab}
              </button>
            );
          })}
        </div>

        {/* preview area: desktop + mobile */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid items-center gap-8 lg:grid-cols-[1.55fr_0.45fr]"
            >
              <div className="flex items-end justify-center gap-4 sm:gap-6">
                <DesktopMock sample={active} className="w-full max-w-2xl" />
                <PhoneMock sample={active} className="hidden w-[92px] flex-shrink-0 sm:block sm:w-[120px]" />
              </div>

              <div className="text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/80">
                    {active.industry}
                  </span>
                  {active.badge && (
                    <span className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-2.5 py-1 text-[11px] font-bold text-[#0B1020]">
                      {active.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold">{active.name}</h3>
                <p className="mt-2 text-white/65">{active.tagline}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                  {active.features.map((f) => (
                    <span key={f} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70">
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  href={active.href}
                  className="btn-press mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E2A38] shadow-soft hover:bg-[#F4EFE6]"
                >
                  View Full Sample
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
