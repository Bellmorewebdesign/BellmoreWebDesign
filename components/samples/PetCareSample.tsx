'use client';

import HarborPawsLogo from '../sample-logos/HarborPawsLogo';
import SampleHero from '../SampleHero';
import SampleCTA from '../SampleCTA';
import SampleGallery from '../SampleGallery';
import { SampleHeader, SampleFooter, TrustBar } from './SampleChrome';
import { SectionHeading, SectionShell, ServiceGrid, TrustCards, ChipRow } from './SampleSections';
import ScrollReveal from '../ScrollReveal';
import type { SampleTheme } from './types';

const IMG = '/images/samples/pet-care';

const theme: SampleTheme = {
  accent: '#6B8A5A',
  accentDark: '#45603A',
  accentSoft: '#EBF1E2',
  accentChipText: '#45603A',
  ink: '#2E3A28',
  muted: '#5E6B56',
  pageBg: '#F8FBF3',
  heroFrom: '#34452C',
  heroTo: '#7C9A6E',
};

const services = [
  { title: 'Dog Boarding', desc: 'Cozy overnight stays in a calm, one-family home setting.', image: { src: `${IMG}/dog-resting-home.jpg`, alt: 'A dog resting comfortably at home' } },
  { title: 'Dog Walking', desc: 'Regular neighborhood walks tailored to your dog\u2019s pace.', image: { src: `${IMG}/dog-walking-park.jpg`, alt: 'A dog being walked on a leash outside' } },
  { title: 'Drop-in Visits', desc: 'Feeding, fresh water, playtime, and a potty break while you are out.', image: { src: `${IMG}/puppy-on-leash.jpg`, alt: 'A puppy on a leash outdoors' } },
  { title: 'Daycare', desc: 'Supervised daytime care with plenty of room to play.', image: { src: `${IMG}/dog-running-field.jpg`, alt: 'A dog running happily in a field' } },
  { title: 'Puppy Visits', desc: 'Extra check-ins and gentle attention for younger pups.', image: { src: `${IMG}/puppy-napping.jpg`, alt: 'A puppy napping on a blanket' } },
  { title: 'Senior Dog Care', desc: 'Patient, low-key care for older dogs with special routines.', image: { src: `${IMG}/hero-golden-retriever.jpg`, alt: 'A calm golden retriever on a sunny path' } },
];

const safety = [
  { title: 'Calm home setting', desc: 'A quiet, comfortable space instead of a crowded kennel.' },
  { title: 'Personalized care', desc: 'Routines built around your dog\u2019s needs and habits.' },
  { title: 'Secure routines', desc: 'Consistent schedules and safe, supervised time outdoors.' },
  { title: 'Photo updates', desc: 'Regular photos so you always know your dog is happy.' },
];

const trust = [
  { title: 'Calm environment', desc: 'A relaxed setting that keeps dogs comfortable and at ease.' },
  { title: 'Clear updates', desc: 'Friendly check-ins and photos throughout the stay.' },
  { title: 'Reliable schedule', desc: 'Dependable timing for walks, meals, and visits.' },
  { title: 'Personal attention', desc: 'One-on-one care, not a busy drop-off facility.' },
];

const towns = ['Port Jefferson', 'Setauket', 'Stony Brook', 'Mount Sinai', 'Miller Place', 'Selden'];

const gallery = [
  { src: `${IMG}/hero-golden-retriever.jpg`, alt: 'Golden retriever standing on a sunny path' },
  { src: `${IMG}/puppy-napping.jpg`, alt: 'A sleeping puppy resting on a blanket' },
  { src: `${IMG}/dog-running-field.jpg`, alt: 'A dog running in a grassy field' },
  { src: `${IMG}/dog-resting-home.jpg`, alt: 'A dog relaxing indoors at home' },
  { src: `${IMG}/dog-walking-park.jpg`, alt: 'A dog walking on a leash in the park' },
  { src: `${IMG}/puppy-on-leash.jpg`, alt: 'A puppy walking on a leash outdoors' },
];

export default function PetCareSample() {
  return (
    <div style={{ backgroundColor: theme.pageBg }}>
      <SampleHeader logo={<HarborPawsLogo />} theme={theme} cta={{ label: 'Request Care', href: '#request' }} />

      <SampleHero
        eyebrow="Dog boarding, walking & care"
        title={<>Trusted care for<br />your best friend</>}
        subtitle="Calm, attentive pet care in a cozy home setting, with daily updates so you never have to wonder."
        primary={{ label: 'Request Care', href: '#request' }}
        secondary={{ label: 'See Services', href: '#services' }}
        image={{ src: `${IMG}/hero-golden-retriever.jpg`, alt: 'A happy golden retriever on a sunny path' }}
        theme={theme}
        light
        aside={
          <div className="rounded-3xl bg-white/95 p-6 shadow-premium ring-1 ring-white/60 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.accent }}>
              Availability
            </p>
            <p className="mt-1 font-display text-lg font-bold" style={{ color: theme.ink }}>
              Limited summer openings
            </p>
            <ul className="mt-4 space-y-3">
              {['Meet and greets required', 'Daily photo updates', 'One family at a time'].map((t) => (
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

      <TrustBar items={['One-family care', 'Meet and greets', 'Daily updates', 'Insured', 'Long Island']} theme={theme} />

      <SectionShell id="services">
        <SectionHeading
          eyebrow="Services"
          title="Care that fits your dog and your schedule"
          subtitle="From overnight boarding to quick drop-in visits, every option is built around your pet."
          theme={theme}
        />
        <div className="mt-12">
          <ServiceGrid items={services} theme={theme} />
        </div>
      </SectionShell>

      {/* Availability band */}
      <SectionShell style={{ backgroundColor: theme.accentSoft }}>
        <ScrollReveal className="grid items-center gap-6 rounded-3xl bg-white p-8 shadow-soft ring-1 ring-black/5 sm:grid-cols-3 sm:p-10">
          {[
            { title: 'Limited summer availability', desc: 'Spots fill early in busy months.' },
            { title: 'Meet and greets required', desc: 'We make sure it is a good fit first.' },
            { title: 'Contact for openings', desc: 'Reach out and we will share current availability.' },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-base font-bold" style={{ color: theme.ink }}>
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed" style={{ color: theme.muted }}>
                {item.desc}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </SectionShell>

      <SectionShell>
        <SectionHeading eyebrow="Safety first" title="How we keep dogs calm and secure" theme={theme} />
        <div className="mt-12">
          <TrustCards items={safety} theme={theme} />
        </div>
      </SectionShell>

      <SectionShell style={{ backgroundColor: theme.accentSoft }}>
        <SectionHeading eyebrow="Gallery" title="Happy dogs in good hands" theme={theme} />
        <div className="mt-12">
          <SampleGallery images={gallery} theme={theme} />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading eyebrow="Towns served" title="Caring for dogs across the North Shore" theme={theme} />
        <div className="mt-10">
          <ChipRow items={towns} theme={theme} />
        </div>
      </SectionShell>

      <SectionShell style={{ backgroundColor: theme.accentSoft }}>
        <SectionHeading eyebrow="What owners care about" title="The things that build trust" theme={theme} />
        <div className="mt-12">
          <TrustCards items={trust} theme={theme} />
        </div>
      </SectionShell>

      <div id="request">
        <SampleCTA
          title="Ready to set up care?"
          subtitle="Tell us about your dog and we will arrange a meet and greet and share current availability."
          primary={{ label: 'Request Care', href: '/#contact' }}
          secondary={{ label: 'Back to Bellmore Web Design', href: '/' }}
          theme={theme}
        />
      </div>

      <SampleFooter
        logo={<HarborPawsLogo inverted />}
        note="Sample concept by Bellmore Web Design. This is not a real business."
        theme={theme}
      />
    </div>
  );
}
