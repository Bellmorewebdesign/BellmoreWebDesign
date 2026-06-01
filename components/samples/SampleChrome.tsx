'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import type { CtaLink, SampleTheme } from './types';

export function SampleHeader({
  logo,
  theme,
  cta,
}: {
  logo: ReactNode;
  theme: SampleTheme;
  cta?: CtaLink;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          {logo}
          <span
            className="hidden rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider sm:inline-block"
            style={{ backgroundColor: theme.accentSoft, color: theme.accentChipText }}
          >
            Sample concept
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="hidden text-sm font-medium text-[#5F6B73] transition-colors hover:text-[#1E2A38] sm:inline"
          >
            Back to Bellmore Web Design
          </Link>
          {cta && (
            <a
              href={cta.href}
              className="btn-press inline-flex items-center rounded-full px-4 py-2 text-sm font-bold text-white shadow-sm"
              style={{ backgroundColor: theme.accent }}
            >
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export function SampleFooter({
  logo,
  note,
  theme,
}: {
  logo: ReactNode;
  note: string;
  theme: SampleTheme;
}) {
  return (
    <footer className="bg-[#11161C] px-4 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {logo}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme.accent }}
          >
            Back to Bellmore Web Design
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="max-w-2xl text-sm leading-relaxed text-white/55">{note}</p>
        </div>
      </div>
    </footer>
  );
}

export function TrustBar({ items, theme }: { items: string[]; theme: SampleTheme }) {
  return (
    <div className="border-y border-black/5" style={{ backgroundColor: theme.accentSoft }}>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-4 py-3.5 sm:px-6">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1.5 text-xs font-semibold sm:text-sm"
            style={{ color: theme.accentChipText }}
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z"
                clipRule="evenodd"
              />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
