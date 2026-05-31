'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Reveal } from './motion-primitives';

const EASE = [0.22, 1, 0.36, 1] as const;

type Sample = {
  id: string;
  tab: string;
  business: string;
  category: string;
  tagline: string;
  cta: string;
  link: string;
  theme: {
    heroFrom: string;
    heroTo: string;
    accent: string;
    chip: string;
    heroText: string;
    page: string;
  };
  services: string[];
  feature: { kind: 'beforeafter' | 'menu' | 'availability' | 'packages'; items: string[] };
};

const SAMPLES: Sample[] = [
  {
    id: 'pressure-washing',
    tab: 'Pressure Washing',
    business: 'South Shore Shine',
    category: 'Pressure Washing',
    tagline: 'Make your home look fresh again',
    cta: 'Get a Free Estimate',
    link: '/sample-sites/exterior-cleaning',
    theme: {
      heroFrom: '#0E7490',
      heroTo: '#2563EB',
      accent: '#0891B2',
      chip: '#CFFAFE',
      heroText: '#ffffff',
      page: '#F0FBFF',
    },
    services: ['House Washing', 'Driveways', 'Patios'],
    feature: { kind: 'beforeafter', items: ['Driveway', 'Siding', 'Patio'] },
  },
  {
    id: 'restaurant',
    tab: 'Restaurant',
    business: 'Main Street Chicken Co.',
    category: 'Restaurant',
    tagline: 'Fresh, local, made to order',
    cta: 'View Menu',
    link: '/sample-sites/restaurant',
    theme: {
      heroFrom: '#9A2A1E',
      heroTo: '#D97706',
      accent: '#B91C1C',
      chip: '#FEE2C7',
      heroText: '#ffffff',
      page: '#FFF8F0',
    },
    services: ['Crispy Tenders', 'Loaded Fries', 'Fresh Salads'],
    feature: { kind: 'menu', items: ['Classic Combo', 'Family Bucket', 'Daily Special'] },
  },
  {
    id: 'pet-care',
    tab: 'Pet Care',
    business: 'Harbor Paws Pet Care',
    category: 'Pet Care',
    tagline: 'Trusted care for your best friend',
    cta: 'Request Care',
    link: '/sample-sites/pet-care',
    theme: {
      heroFrom: '#6B8E6B',
      heroTo: '#A8C3A0',
      accent: '#5E7E5E',
      chip: '#E6EFE2',
      heroText: '#ffffff',
      page: '#F7FAF4',
    },
    services: ['Dog Walking', 'Drop-in Visits', 'Overnight Care'],
    feature: { kind: 'availability', items: ['Meet & Greet', 'This Week', 'Weekends'] },
  },
  {
    id: 'events',
    tab: 'Event Setup',
    business: 'Ever After Events',
    category: 'Event Planning',
    tagline: 'Beautiful setups for every occasion',
    cta: 'Plan Your Event',
    link: '/sample-sites/events',
    theme: {
      heroFrom: '#BE7BA0',
      heroTo: '#C9A86A',
      accent: '#B0658F',
      chip: '#F7E6EF',
      heroText: '#ffffff',
      page: '#FFF7FB',
    },
    services: ['Birthdays', 'Showers', 'Weddings'],
    feature: { kind: 'packages', items: ['Starter', 'Signature', 'Luxe'] },
  },
];

function FeatureBlock({ sample }: { sample: Sample }) {
  const { feature, theme } = sample;
  if (feature.kind === 'beforeafter') {
    return (
      <div className="grid grid-cols-3 gap-2">
        {feature.items.map((label) => (
          <div key={label} className="overflow-hidden rounded-lg border border-black/5">
            <div className="flex h-12">
              <div className="w-1/2 bg-gradient-to-br from-gray-500 to-gray-400" />
              <div className="w-1/2 bg-gradient-to-br from-cyan-100 to-white" />
            </div>
            <div className="bg-white px-2 py-1 text-[10px] font-semibold text-[#1E2A38]">{label}</div>
          </div>
        ))}
      </div>
    );
  }
  if (feature.kind === 'menu') {
    return (
      <div className="space-y-1.5">
        {feature.items.map((label, i) => (
          <div key={label} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 border border-black/5">
            <span className="text-[11px] font-semibold text-[#1E2A38]">{label}</span>
            <span className="text-[11px] font-bold" style={{ color: theme.accent }}>
              ${9 + i * 4}
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (feature.kind === 'availability') {
    return (
      <div className="grid grid-cols-3 gap-2">
        {feature.items.map((label) => (
          <div key={label} className="rounded-lg bg-white px-2 py-2.5 text-center border border-black/5">
            <div className="mx-auto mb-1 h-5 w-5 rounded-full" style={{ backgroundColor: theme.chip }} />
            <span className="text-[10px] font-semibold text-[#1E2A38]">{label}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      {feature.items.map((label, i) => (
        <div
          key={label}
          className="rounded-lg px-2 py-3 text-center"
          style={{ backgroundColor: i === 1 ? theme.accent : '#ffffff', border: '1px solid rgba(0,0,0,0.05)' }}
        >
          <span className={`text-[10px] font-bold ${i === 1 ? 'text-white' : 'text-[#1E2A38]'}`}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function SitePreview({ sample }: { sample: Sample }) {
  const { theme } = sample;
  return (
    <div className="overflow-hidden rounded-xl" style={{ backgroundColor: theme.page }}>
      {/* nav */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/80 border-b border-black/5">
        <span className="text-[11px] font-extrabold tracking-tight" style={{ color: theme.accent }}>
          {sample.business}
        </span>
        <div className="hidden sm:flex gap-2">
          <span className="h-1.5 w-6 rounded-full bg-black/10" />
          <span className="h-1.5 w-6 rounded-full bg-black/10" />
          <span className="h-1.5 w-6 rounded-full" style={{ backgroundColor: theme.accent }} />
        </div>
      </div>

      {/* hero */}
      <div
        className="px-4 py-5 sm:py-7"
        style={{ background: `linear-gradient(135deg, ${theme.heroFrom}, ${theme.heroTo})` }}
      >
        <div className="text-base sm:text-lg font-extrabold leading-tight" style={{ color: theme.heroText }}>
          {sample.tagline}
        </div>
        <div className="mt-1 text-[11px] opacity-90" style={{ color: theme.heroText }}>
          {sample.category} in Nassau County, NY
        </div>
        <span className="mt-3 inline-flex items-center rounded-full bg-white px-3 py-1.5 text-[11px] font-bold shadow-sm" style={{ color: theme.accent }}>
          {sample.cta}
        </span>
      </div>

      {/* services + feature */}
      <div className="px-4 py-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {sample.services.map((s) => (
            <div
              key={s}
              className="rounded-lg px-2 py-2.5 text-center"
              style={{ backgroundColor: theme.chip }}
            >
              <div className="mx-auto mb-1.5 h-4 w-4 rounded-md" style={{ backgroundColor: theme.accent }} />
              <span className="text-[10px] font-semibold text-[#1E2A38] leading-tight">{s}</span>
            </div>
          ))}
        </div>
        <FeatureBlock sample={sample} />
      </div>
    </div>
  );
}

export default function InteractiveSamples() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(SAMPLES[0].id);
  const active = SAMPLES.find((s) => s.id === activeId)!;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1E2A38] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] bg-dotgrid" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9CC3E6]">Interactive demo</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
            See what your business could look like
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Explore sample homepage concepts built for different types of local businesses.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[300px_1fr] gap-6 lg:gap-10 items-start">
          {/* Tabs */}
          <div
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-label="Sample industries"
          >
            {SAMPLES.map((sample) => {
              const isActive = sample.id === activeId;
              return (
                <button
                  key={sample.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(sample.id)}
                  className={`relative flex-shrink-0 lg:flex-shrink rounded-2xl px-5 py-4 text-left transition-colors duration-300 border ${
                    isActive
                      ? 'bg-white text-[#1E2A38] border-white shadow-premium'
                      : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <span className="block text-base font-bold whitespace-nowrap">{sample.tab}</span>
                  <span className={`mt-0.5 block text-xs ${isActive ? 'text-[#5F6B73]' : 'text-white/50'}`}>
                    {sample.business}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Live preview */}
          <div>
            <div className="rounded-2xl bg-white p-2.5 shadow-premium">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5867E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8C56B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#9CC592]" />
                <div className="ml-2 flex-1 h-5 rounded-md bg-[#F4EFE6]" />
              </div>
              <div className="relative min-h-[330px] sm:min-h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)', opacity: 0.4 }}
                    animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <SitePreview sample={active} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-white/60">
                A sample concept for {active.category.toLowerCase()} businesses.
              </p>
              <Link
                href={active.link}
                className="btn-press inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E2A38] shadow-soft hover:bg-[#F4EFE6]"
              >
                View Full Sample Site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
