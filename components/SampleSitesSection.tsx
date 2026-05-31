'use client';

import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from './motion-primitives';

const SAMPLE_SITES = [
  {
    title: 'South Shore Shine',
    category: 'Pressure Washing',
    description: 'Fresh, water-inspired design with before and after results and a free estimate button.',
    link: '/sample-sites/exterior-cleaning',
    tags: ['Sample Concept', 'Mobile Friendly', 'Quote Focused'],
    theme: { from: '#0E7490', to: '#2563EB', accent: '#0891B2', chip: '#CFFAFE' },
  },
  {
    title: 'Main Street Chicken Co.',
    category: 'Restaurant',
    description: 'Warm, food-focused design with a menu preview, hours, and location front and center.',
    link: '/sample-sites/restaurant',
    tags: ['Sample Concept', 'Mobile Friendly', 'Menu Focused'],
    theme: { from: '#9A2A1E', to: '#D97706', accent: '#B91C1C', chip: '#FEE2C7' },
  },
  {
    title: 'Harbor Paws Pet Care',
    category: 'Pet Care',
    description: 'Calm sage and cream design with services, a meet and greet, and clear availability.',
    link: '/sample-sites/pet-care',
    tags: ['Sample Concept', 'Mobile Friendly', 'Booking Focused'],
    theme: { from: '#6B8E6B', to: '#A8C3A0', accent: '#5E7E5E', chip: '#E6EFE2' },
  },
  {
    title: 'Ever After Events',
    category: 'Event Planning',
    description: 'Soft pink, cream, and gold design with packages, a gallery, and an inquiry form.',
    link: '/sample-sites/events',
    tags: ['Sample Concept', 'Mobile Friendly', 'Gallery Focused'],
    theme: { from: '#BE7BA0', to: '#C9A86A', accent: '#B0658F', chip: '#F7E6EF' },
  },
];

function MiniMockup({ theme, title }: { theme: (typeof SAMPLE_SITES)[number]['theme']; title: string }) {
  return (
    <div className="relative h-44 overflow-hidden" style={{ background: `linear-gradient(135deg, ${theme.from}, ${theme.to})` }}>
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/15 blur-2xl" />
      <div className="absolute inset-x-5 bottom-0 top-6 rounded-t-xl bg-white shadow-xl overflow-hidden">
        <div className="flex items-center gap-1 px-3 py-1.5 border-b border-black/5">
          <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
          <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
          <span className="ml-1 text-[8px] font-bold" style={{ color: theme.accent }}>{title}</span>
        </div>
        <div className="p-3 space-y-2">
          <div className="h-2 w-2/3 rounded-full bg-[#1E2A38]/70" />
          <div className="h-1.5 w-1/2 rounded-full" style={{ backgroundColor: theme.accent, opacity: 0.5 }} />
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-8 rounded-md" style={{ backgroundColor: theme.chip }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SampleSitesSection() {
  return (
    <section id="sample-sites" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Sample sites</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Explore full sample concepts
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            Each sample is a complete homepage concept with its own design style, built to show what
            your business could look like online.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 gap-7" stagger={0.1}>
          {SAMPLE_SITES.map((site) => (
            <StaggerItem key={site.title}>
              <Link href={site.link} className="group block h-full">
                <article className="card-hover h-full overflow-hidden rounded-2xl bg-white border border-[#E8DED0] shadow-soft">
                  <MiniMockup theme={site.theme} title={site.title} />
                  <div className="p-7">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {site.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                          style={{ backgroundColor: site.theme.chip, color: site.theme.accent }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-[#1E2A38] mb-1 transition-colors group-hover:text-[#4E86BC]">
                      {site.title}
                    </h3>
                    <p className="text-[#5F6B73] text-sm leading-relaxed mb-5">{site.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4E86BC]">
                      View Sample Site
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
