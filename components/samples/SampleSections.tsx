'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import ScrollReveal from '../ScrollReveal';
import type { SampleTheme } from './types';

const EASE = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  theme,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  theme: SampleTheme;
  center?: boolean;
}) {
  return (
    <ScrollReveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <span
        className="text-xs font-bold uppercase tracking-[0.22em]"
        style={{ color: theme.accent }}
      >
        {eyebrow}
      </span>
      <h2
        className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl"
        style={{ color: theme.ink }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed" style={{ color: theme.muted }}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}

export interface ServiceItem {
  title: string;
  desc: string;
  image: { src: string; alt: string };
}

export function ServiceGrid({ items, theme }: { items: ServiceItem[]; theme: SampleTheme }) {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.article
          key={item.title}
          className="card-hover group overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5"
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
        >
          <div className="relative h-44 overflow-hidden">
            <img
              src={item.image.src}
              alt={item.image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="font-display text-lg font-bold" style={{ color: theme.ink }}>
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: theme.muted }}>
              {item.desc}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function ProcessSteps({
  steps,
  theme,
}: {
  steps: { title: string; desc: string }[];
  theme: SampleTheme;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <ScrollReveal key={step.title} delay={i * 0.08}>
          <div className="relative h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full font-display text-lg font-extrabold text-white"
              style={{ backgroundColor: theme.accent }}
            >
              {i + 1}
            </span>
            <h3 className="mt-4 font-display text-base font-bold" style={{ color: theme.ink }}>
              {step.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed" style={{ color: theme.muted }}>
              {step.desc}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export function TrustCards({
  items,
  theme,
}: {
  items: { title: string; desc: string }[];
  theme: SampleTheme;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <ScrollReveal key={item.title} delay={i * 0.07}>
          <div
            className="h-full rounded-2xl p-6"
            style={{ backgroundColor: theme.accentSoft }}
          >
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: theme.accent }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-base font-bold" style={{ color: theme.ink }}>
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed" style={{ color: theme.muted }}>
              {item.desc}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export function ChipRow({ items, theme }: { items: string[]; theme: SampleTheme }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item, i) => (
        <ScrollReveal key={item} delay={i * 0.04}>
          <span
            className="inline-flex rounded-full border px-5 py-2.5 text-sm font-semibold"
            style={{
              backgroundColor: theme.accentSoft,
              color: theme.accentChipText,
              borderColor: `${theme.accent}33`,
            }}
          >
            {item}
          </span>
        </ScrollReveal>
      ))}
    </div>
  );
}

export interface BeforeAfterItem {
  image: { src: string; alt: string };
  label: string;
  location: string;
  result: string;
}

/**
 * Premium before/after card. A single sample photo is shown twice: the left
 * "before" half is darkened and desaturated with a grime tint, the right
 * "after" half is full color, separated by a divider handle.
 */
export function BeforeAfterGrid({
  items,
  theme,
}: {
  items: BeforeAfterItem[];
  theme: SampleTheme;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item, i) => (
        <motion.figure
          key={item.label}
          className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5"
          initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -36 : 36 }}
          whileInView={reduce ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="relative h-60 overflow-hidden">
            {/* after (full color base) */}
            <img src={item.image.src} alt={item.image.alt} loading="lazy" className="h-full w-full object-cover" />
            {/* before (clipped left half) */}
            <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
              <img
                src={item.image.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-full w-[200%] max-w-none object-cover"
                style={{ filter: 'grayscale(1) brightness(0.62) contrast(0.92) sepia(0.25)' }}
              />
              <span className="absolute inset-0 bg-[#3b352b]/30" />
            </div>
            {/* divider */}
            <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/85" />
            <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1E2A38] shadow-md">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
              </svg>
            </span>
            <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              Before
            </span>
            <span
              className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: theme.accent }}
            >
              After
            </span>
          </div>
          <figcaption className="flex items-center justify-between p-5">
            <div>
              <h3 className="font-display text-base font-bold" style={{ color: theme.ink }}>
                {item.label}
              </h3>
              <p className="text-sm" style={{ color: theme.muted }}>
                {item.location}
              </p>
            </div>
            <span className="text-sm font-semibold" style={{ color: theme.accent }}>
              {item.result}
            </span>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

export function SectionShell({
  children,
  className = '',
  style,
  id,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 sm:py-24 ${className}`} style={style}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
