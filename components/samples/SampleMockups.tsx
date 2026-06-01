'use client';

import type { ReactNode } from 'react';
import SouthShoreShineLogo from '../sample-logos/SouthShoreShineLogo';
import MainStreetChickenLogo from '../sample-logos/MainStreetChickenLogo';
import HarborPawsLogo from '../sample-logos/HarborPawsLogo';
import EverAfterEventsLogo from '../sample-logos/EverAfterEventsLogo';
import NovaStackLogo from '../sample-logos/NovaStackLogo';
import type { HomeSample, SampleId } from './sampleData';

export function sampleLogo(id: SampleId, className: string, inverted = true): ReactNode {
  switch (id) {
    case 'pressure-washing':
      return <SouthShoreShineLogo className={className} inverted={inverted} />;
    case 'restaurant':
      return <MainStreetChickenLogo className={className} inverted={inverted} />;
    case 'pet-care':
      return <HarborPawsLogo className={className} inverted={inverted} />;
    case 'events':
      return <EverAfterEventsLogo className={className} inverted={inverted} />;
    case 'high-end-tech':
      return <NovaStackLogo className={className} inverted={inverted} />;
  }
}

function HeroLayer({ sample }: { sample: HomeSample }) {
  if (sample.dark) {
    return (
      <>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #070B16, #111c34 55%, #1e1b4b)' }}
        />
        <div className="absolute inset-0 bg-techgrid opacity-60" />
        <div className="absolute -right-6 top-1/4 h-24 w-24 rounded-full bg-cyan-500/30 blur-2xl" />
        <div className="absolute bottom-2 left-1/4 h-20 w-20 rounded-full bg-violet-500/30 blur-2xl" />
      </>
    );
  }
  return (
    <>
      <img src={sample.hero} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(120deg, ${sample.accentDark}e6, ${sample.accentDark}73 60%, transparent)` }}
      />
    </>
  );
}

/** A small browser-framed mock homepage for a sample site. */
export function DesktopMock({ sample, className = '' }: { sample: HomeSample; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#F4EFE6] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="ml-2 h-3 flex-1 rounded-full bg-black/10" />
      </div>
      {/* hero */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <HeroLayer sample={sample} />
        <div className="absolute left-3 top-3">{sampleLogo(sample.id, 'scale-[0.72] origin-top-left', true)}</div>
        <div className="absolute inset-x-3 bottom-3">
          <p className="max-w-[80%] font-display text-sm font-extrabold leading-tight text-white drop-shadow sm:text-base">
            {sample.tagline}
          </p>
          <span
            className="mt-2 inline-flex rounded-full px-3 py-1 text-[10px] font-bold text-white shadow"
            style={{ backgroundColor: sample.accent }}
          >
            {sample.cta}
          </span>
        </div>
      </div>
      {/* feature row */}
      <div className="grid grid-cols-3 gap-1.5 bg-white p-2.5">
        {sample.features.map((f) => (
          <div
            key={f}
            className="rounded-md px-1.5 py-2 text-center text-[9px] font-semibold leading-tight"
            style={{
              backgroundColor: sample.dark ? '#0e1426' : `${sample.accent}14`,
              color: sample.dark ? '#9bd2ff' : sample.accentDark,
            }}
          >
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

/** A small phone-framed mock used beside the desktop preview. */
export function PhoneMock({ sample, className = '' }: { sample: HomeSample; className?: string }) {
  return (
    <div
      className={`rounded-[1.4rem] bg-[#11161C] p-1.5 shadow-2xl ring-1 ring-black/30 ${className}`}
    >
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.05rem] bg-white">
        <div className="relative h-[58%] overflow-hidden">
          <HeroLayer sample={sample} />
          <div className="absolute left-2 top-2">{sampleLogo(sample.id, 'scale-[0.55] origin-top-left', true)}</div>
          <div className="absolute inset-x-2 bottom-2">
            <p className="font-display text-[10px] font-extrabold leading-tight text-white drop-shadow">
              {sample.tagline}
            </p>
          </div>
        </div>
        <div className="space-y-1.5 p-2">
          <span
            className="block rounded-full px-2 py-1 text-center text-[8px] font-bold text-white"
            style={{ backgroundColor: sample.accent }}
          >
            {sample.cta}
          </span>
          {sample.features.slice(0, 2).map((f) => (
            <div
              key={f}
              className="rounded-md px-1.5 py-1.5 text-[8px] font-semibold"
              style={{
                backgroundColor: sample.dark ? '#0e1426' : `${sample.accent}14`,
                color: sample.dark ? '#9bd2ff' : sample.accentDark,
              }}
            >
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
