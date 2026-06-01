'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import type { CtaLink, SampleTheme } from './samples/types';

const EASE = [0.22, 1, 0.36, 1] as const;

interface SampleHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  primary: CtaLink;
  secondary: CtaLink;
  image: { src: string; alt: string };
  theme: SampleTheme;
  /** optional floating element rendered over the hero (e.g. an info card) */
  aside?: ReactNode;
  /** optional decorative layer rendered above the scrim, below the content */
  decoration?: ReactNode;
  /** lighten the scrim for bright, airy heroes */
  light?: boolean;
}

export default function SampleHero({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  image,
  theme,
  aside,
  decoration,
  light = false,
}: SampleHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* photo */}
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* scrim */}
      <div
        className="absolute inset-0"
        style={{
          background: light
            ? `linear-gradient(100deg, ${theme.heroFrom}f2 0%, ${theme.heroFrom}c0 38%, ${theme.heroTo}40 100%)`
            : `linear-gradient(100deg, ${theme.heroFrom}f7 0%, ${theme.heroFrom}d9 42%, ${theme.heroTo}66 100%)`,
        }}
      />

      {decoration && <div className="pointer-events-none absolute inset-0 overflow-hidden">{decoration}</div>}

      <div className="relative mx-auto grid min-h-[78vh] max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 26 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="inline-flex items-center rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm ring-1 ring-white/25">
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[1.05] text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={primary.href}
              className="cta-shimmer btn-press inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold text-white shadow-lg"
              style={{ backgroundColor: theme.accent }}
            >
              {primary.label}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={secondary.href}
              className="btn-press inline-flex items-center justify-center rounded-full bg-white/95 px-7 py-3.5 text-base font-bold shadow-lg backdrop-blur-sm hover:bg-white"
              style={{ color: theme.accentDark }}
            >
              {secondary.label}
            </a>
          </div>
        </motion.div>

        {aside && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 34, scale: 0.97 }}
            animate={reduce ? {} : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="hidden lg:block"
          >
            {aside}
          </motion.div>
        )}
      </div>
    </section>
  );
}
