'use client';

import type { CtaLink, SampleTheme } from './samples/types';
import ScrollReveal from './ScrollReveal';

interface SampleCTAProps {
  title: string;
  subtitle: string;
  primary: CtaLink;
  secondary?: CtaLink;
  theme: SampleTheme;
}

export default function SampleCTA({ title, subtitle, primary, secondary, theme }: SampleCTAProps) {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24"
      style={{ background: `linear-gradient(120deg, ${theme.accentDark}, ${theme.accent})` }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <ScrollReveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/85">{subtitle}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={primary.href}
            className="cta-shimmer btn-press inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold shadow-lg"
            style={{ color: theme.accentDark }}
          >
            {primary.label}
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="btn-press inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-white ring-2 ring-white/60 hover:bg-white/10"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
