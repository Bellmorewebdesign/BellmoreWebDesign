'use client';

import Link from 'next/link';
import { Reveal } from './motion-primitives';
import { DesktopMock } from './samples/SampleMockups';
import { HOME_SAMPLES } from './samples/sampleData';

const tech = HOME_SAMPLES.find((s) => s.id === 'high-end-tech')!;

export default function FeaturedSample() {
  return (
    <section className="relative overflow-hidden bg-[#070B16] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-techgrid opacity-50" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet-500/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            High-End Concept
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            A more advanced sample,{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              fully animated
            </span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
            A more advanced sample showing premium animation, 3D visuals, and an interactive product-style landing page.
          </p>
          <Link
            href={tech.href}
            className="cta-shimmer btn-press mt-8 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold text-white shadow-lg"
            style={{ background: 'linear-gradient(120deg, #22d3ee, #3b82f6, #8b5cf6)' }}
          >
            View High-End Sample
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="animate-float-slow">
          <DesktopMock sample={tech} />
        </Reveal>
      </div>
    </section>
  );
}
