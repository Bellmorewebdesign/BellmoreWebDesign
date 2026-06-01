'use client';

import SouthShoreShineLogo from '../sample-logos/SouthShoreShineLogo';
import SampleHero from '../SampleHero';
import SampleCTA from '../SampleCTA';
import { SampleHeader, SampleFooter, TrustBar } from './SampleChrome';
import {
  SectionHeading,
  SectionShell,
  ServiceGrid,
  ProcessSteps,
  TrustCards,
  ChipRow,
  BeforeAfterGrid,
} from './SampleSections';
import { WaterDroplets } from './Decorations';
import type { SampleTheme } from './types';

const IMG = '/images/samples/pressure-washing';

const theme: SampleTheme = {
  accent: '#0E8FB0',
  accentDark: '#0B5E78',
  accentSoft: '#E2F6FB',
  accentChipText: '#0B5E78',
  ink: '#0F2B36',
  muted: '#4F6670',
  pageBg: '#F3FBFD',
  heroFrom: '#0C4A60',
  heroTo: '#1AA3C4',
};

const services = [
  { title: 'House Washing', desc: 'Soft, safe washing that lifts dirt, mildew, and grime from siding.', image: { src: `${IMG}/clean-home-exterior.jpg`, alt: 'Clean home exterior after washing' } },
  { title: 'Driveway Cleaning', desc: 'Remove years of oil, dirt, and stains from concrete and pavers.', image: { src: `${IMG}/hero-driveway-wash.jpg`, alt: 'Worker pressure washing a driveway' } },
  { title: 'Patio & Paver Cleaning', desc: 'Bring patios and walkways back to life before the season starts.', image: { src: `${IMG}/patio-cleaning.jpg`, alt: 'Pressure washing a patio surface' } },
  { title: 'Window Cleaning', desc: 'Streak-free windows that brighten the whole exterior.', image: { src: `${IMG}/window-cleaning.jpg`, alt: 'Worker cleaning a glass window' } },
  { title: 'Storefront Cleaning', desc: 'Keep walkways and entrances looking sharp for customers.', image: { src: `${IMG}/surface-cleaning.jpg`, alt: 'Worker cleaning a paved surface' } },
  { title: 'Seasonal Maintenance', desc: 'Recurring cleaning plans to keep your property looking its best.', image: { src: `${IMG}/neighborhood-homes.jpg`, alt: 'Tidy neighborhood homes' } },
];

const beforeAfter = [
  { image: { src: `${IMG}/clean-home-exterior.jpg`, alt: 'Home exterior cleaning result' }, label: 'House Siding', location: 'Bellmore, NY', result: 'Like new' },
  { image: { src: `${IMG}/patio-cleaning.jpg`, alt: 'Patio cleaning result' }, label: 'Patio & Pavers', location: 'Merrick, NY', result: 'Ready for summer' },
  { image: { src: `${IMG}/surface-cleaning.jpg`, alt: 'Driveway cleaning result' }, label: 'Driveway', location: 'Wantagh, NY', result: 'Buildup gone' },
  { image: { src: `${IMG}/neighborhood-homes.jpg`, alt: 'Storefront cleaning result' }, label: 'Storefront', location: 'Freeport, NY', result: 'Fresh curb appeal' },
];

const steps = [
  { title: 'Request estimate', desc: 'Tell us about your property and what needs cleaning.' },
  { title: 'Choose service', desc: 'We recommend the right plan and a clear, simple quote.' },
  { title: 'We clean', desc: 'Careful, professional cleaning with safe equipment.' },
  { title: 'Enjoy the result', desc: 'A fresh, bright exterior you will be proud of.' },
];

const trust = [
  { title: 'Fast replies', desc: 'Questions answered quickly so you are never left waiting.' },
  { title: 'Clean work', desc: 'Thorough results and a tidy site when the job is done.' },
  { title: 'Careful around property', desc: 'Plants, fixtures, and finishes are treated with care.' },
  { title: 'Reliable scheduling', desc: 'We show up when we say we will and keep you updated.' },
];

const areas = ['Bellmore', 'Merrick', 'Wantagh', 'Massapequa', 'Seaford', 'Freeport'];

export default function PressureWashingSample() {
  return (
    <div style={{ backgroundColor: theme.pageBg }}>
      <SampleHeader logo={<SouthShoreShineLogo />} theme={theme} cta={{ label: 'Free Estimate', href: '#estimate' }} />

      <SampleHero
        eyebrow="Exterior cleaning - Nassau County, NY"
        title={<>Make your home<br />look fresh again</>}
        subtitle="Pressure washing, house washing, and exterior care for Long Island homes and businesses."
        primary={{ label: 'Get a Free Estimate', href: '#estimate' }}
        secondary={{ label: 'View Services', href: '#services' }}
        image={{ src: `${IMG}/hero-driveway-wash.jpg`, alt: 'A worker pressure washing a residential driveway' }}
        theme={theme}
        decoration={<WaterDroplets />}
        aside={
          <div className="rounded-3xl bg-white/95 p-6 shadow-premium ring-1 ring-white/60 backdrop-blur">
            <p className="font-display text-lg font-bold" style={{ color: theme.ink }}>
              Free, no-pressure estimate
            </p>
            <ul className="mt-4 space-y-3">
              {['On-site or photo estimates', 'Flexible weekday and weekend slots', 'Careful around your property'].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm" style={{ color: theme.muted }}>
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="none" stroke={theme.accent} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <TrustBar items={['House washing', 'Driveways', 'Patios', 'Storefronts', 'Nassau County']} theme={theme} />

      <SectionShell id="services">
        <SectionHeading
          eyebrow="Services"
          title="We clean everything outside your home or business"
          subtitle="From siding and driveways to patios and storefronts, we restore your exterior surfaces."
          theme={theme}
        />
        <div className="mt-12">
          <ServiceGrid items={services} theme={theme} />
        </div>
      </SectionShell>

      <SectionShell style={{ backgroundColor: theme.accentSoft }}>
        <SectionHeading
          eyebrow="Before & after"
          title="See the difference a cleaning makes"
          subtitle="Sample visuals showing the kind of transformation exterior cleaning can deliver."
          theme={theme}
        />
        <div className="mt-12">
          <BeforeAfterGrid items={beforeAfter} theme={theme} />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading eyebrow="How it works" title="A simple, four-step process" theme={theme} />
        <div className="mt-12">
          <ProcessSteps steps={steps} theme={theme} />
        </div>
      </SectionShell>

      <SectionShell style={{ backgroundColor: theme.accentSoft }}>
        <SectionHeading eyebrow="Service areas" title="Proudly serving the South Shore" theme={theme} />
        <div className="mt-10">
          <ChipRow items={areas} theme={theme} />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="What customers care about"
          title="The things that matter on every job"
          theme={theme}
        />
        <div className="mt-12">
          <TrustCards items={trust} theme={theme} />
        </div>
      </SectionShell>

      <div id="estimate">
        <SampleCTA
          title="Ready for a free estimate?"
          subtitle="Send a few details about your property and we will follow up with a clear, simple quote."
          primary={{ label: 'Get a Free Estimate', href: '/#contact' }}
          secondary={{ label: 'Back to Bellmore Web Design', href: '/' }}
          theme={theme}
        />
      </div>

      <SampleFooter
        logo={<SouthShoreShineLogo inverted />}
        note="Sample concept by Bellmore Web Design. This is not a real business."
        theme={theme}
      />
    </div>
  );
}
