'use client';

import Link from 'next/link';
import { DesktopMock, PhoneMock } from './samples/SampleMockups';
import type { HomeSample } from './samples/sampleData';

export default function SamplePreviewCard({ sample }: { sample: HomeSample }) {
  return (
    <article className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8DED0] bg-white shadow-soft">
      {/* preview area: desktop with mobile overlapping */}
      <div
        className="relative px-5 pt-7 pb-3"
        style={{ background: `linear-gradient(135deg, ${sample.accentDark}, ${sample.accent})` }}
      >
        <div className="relative">
          <DesktopMock sample={sample} className="mr-10" />
          <PhoneMock sample={sample} className="absolute -bottom-2 right-0 w-[58px] sm:w-[64px]" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-1 text-[11px] font-bold"
            style={{ backgroundColor: `${sample.accent}1a`, color: sample.accentDark }}
          >
            {sample.industry}
          </span>
          <span className="rounded-full bg-[#1E2A38]/5 px-2.5 py-1 text-[11px] font-semibold text-[#5F6B73]">
            Sample Concept
          </span>
          {sample.badge && (
            <span className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-2.5 py-1 text-[11px] font-bold text-white">
              {sample.badge}
            </span>
          )}
        </div>
        <h3 className="font-display text-xl font-bold text-[#1E2A38]">{sample.name}</h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-[#5F6B73]">{sample.tagline}</p>
        <Link
          href={sample.href}
          className="btn-press mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white"
          style={{ backgroundColor: sample.accent }}
        >
          View Full Sample
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
