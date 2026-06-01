'use client';

import EverAfterEventsLogo from '../sample-logos/EverAfterEventsLogo';
import SampleHero from '../SampleHero';
import SampleCTA from '../SampleCTA';
import SampleGallery from '../SampleGallery';
import { SampleHeader, SampleFooter, TrustBar } from './SampleChrome';
import { SectionHeading, SectionShell, ProcessSteps, TrustCards } from './SampleSections';
import { Sparkles } from './Decorations';
import ScrollReveal from '../ScrollReveal';
import type { SampleTheme } from './types';

const IMG = '/images/samples/events';

const theme: SampleTheme = {
  accent: '#C0699A',
  accentDark: '#8A4A72',
  accentSoft: '#F8E9F1',
  accentChipText: '#8A4A72',
  ink: '#3D2A37',
  muted: '#7A6470',
  pageBg: '#FFF6FB',
  heroFrom: '#5E3450',
  heroTo: '#C0699A',
};

const eventTypes = ['Baby showers', 'Birthdays', 'Bridal showers', 'Brunches', 'Corporate events', 'Backyard parties'];

const packages = [
  { name: 'Simple Setup', price: 'from $250', popular: false, features: ['Balloon garland', 'Single backdrop', 'Delivery & setup'] },
  { name: 'Signature Setup', price: 'from $550', popular: true, features: ['Organic balloon arch', 'Styled backdrop', 'Tablescape accents', 'Delivery, setup & breakdown'] },
  { name: 'Full Event Styling', price: 'custom', popular: false, features: ['Full theme design', 'Arches & backdrops', 'Treat & dessert displays', 'Personalized details', 'On-site styling'] },
];

const included = ['Balloon arches', 'Backdrops', 'Tablescapes', 'Treat displays', 'Personalized details'];

const steps = [
  { title: 'Inquiry', desc: 'Share your date, theme, and vision.' },
  { title: 'Theme planning', desc: 'We design a palette and layout to match.' },
  { title: 'Setup day', desc: 'We deliver, build, and style everything for you.' },
  { title: 'Celebrate', desc: 'You enjoy a photo-ready space, stress free.' },
];

const trust = [
  { title: 'Styled details', desc: 'Thoughtful touches that tie the whole look together.' },
  { title: 'Clean setup', desc: 'Polished installs with tidy delivery and breakdown.' },
  { title: 'Theme matching', desc: 'Colors and design built around your celebration.' },
  { title: 'Photo-ready designs', desc: 'Setups that look stunning in every picture.' },
];

const gallery = [
  { src: `${IMG}/hero-balloon-setup.jpg`, alt: 'Pink and white balloon party setup' },
  { src: `${IMG}/balloon-arch.jpg`, alt: 'An elegant balloon arch backdrop' },
  { src: `${IMG}/dessert-table.jpg`, alt: 'A dessert table with cake and treats' },
  { src: `${IMG}/party-celebration.jpg`, alt: 'A celebration with balloons and decor' },
  { src: `${IMG}/cupcake-display.jpg`, alt: 'Cupcakes arranged on a tiered display' },
  { src: `${IMG}/kids-balloon-arch.jpg`, alt: 'Children standing by a balloon arch' },
  { src: `${IMG}/marquee-letters.jpg`, alt: 'Illuminated marquee letters with balloons' },
];

export default function EventsSample() {
  return (
    <div style={{ backgroundColor: theme.pageBg }}>
      <SampleHeader logo={<EverAfterEventsLogo />} theme={theme} cta={{ label: 'Plan Your Event', href: '#plan' }} />

      <SampleHero
        eyebrow="Event styling & balloon design"
        title={<>Beautiful setups for<br />every celebration</>}
        subtitle="Balloon arches, backdrops, and styled details that turn any space into a photo-ready celebration."
        primary={{ label: 'Plan Your Event', href: '#plan' }}
        secondary={{ label: 'View Packages', href: '#packages' }}
        image={{ src: `${IMG}/hero-balloon-setup.jpg`, alt: 'A pink and white balloon party setup' }}
        theme={theme}
        decoration={<Sparkles />}
      />

      <TrustBar items={['Balloon arches', 'Backdrops', 'Tablescapes', 'Treat displays', 'Setup & breakdown']} theme={theme} />

      {/* Event types */}
      <SectionShell>
        <SectionHeading
          eyebrow="Occasions"
          title="Styled for every kind of celebration"
          subtitle="From intimate showers to corporate events, we design setups that fit the moment."
          theme={theme}
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {eventTypes.map((type, i) => (
            <ScrollReveal key={type} delay={i * 0.05}>
              <div
                className="flex h-full items-center gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/5"
              >
                <span
                  className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: theme.accentSoft }}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill={theme.accent} aria-hidden="true">
                    <path d="M12 2c.5 4.5 2 6 6.5 6.5C14 9 12.5 10.5 12 15c-.5-4.5-2-6-6.5-6.5C10 9 11.5 7.5 12 2z" />
                  </svg>
                </span>
                <span className="font-display font-bold" style={{ color: theme.ink }}>
                  {type}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      {/* Packages */}
      <SectionShell id="packages" style={{ backgroundColor: theme.accentSoft }}>
        <SectionHeading eyebrow="Packages" title="Choose your level of styling" theme={theme} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.08}>
              <div
                className="relative flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft ring-1 ring-black/5"
                style={pkg.popular ? { boxShadow: `0 24px 60px -24px ${theme.accent}88`, outline: `2px solid ${theme.accent}` } : undefined}
              >
                {pkg.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
                    style={{ backgroundColor: theme.accent }}
                  >
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-extrabold" style={{ color: theme.ink }}>
                  {pkg.name}
                </h3>
                <p className="mt-1 font-display text-2xl font-extrabold" style={{ color: theme.accent }}>
                  {pkg.price}
                </p>
                <ul className="mt-5 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: theme.muted }}>
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="none" stroke={theme.accent} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#plan"
                  className="btn-press mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white"
                  style={{ backgroundColor: pkg.popular ? theme.accent : theme.accentDark }}
                >
                  Plan this setup
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs font-medium" style={{ color: theme.muted }}>
          Sample pricing shown for concept purposes only.
        </p>
      </SectionShell>

      {/* Gallery */}
      <SectionShell>
        <SectionHeading eyebrow="Gallery" title="A look at the details" theme={theme} />
        <div className="mt-12">
          <SampleGallery images={gallery} theme={theme} />
        </div>
      </SectionShell>

      {/* Process */}
      <SectionShell style={{ backgroundColor: theme.accentSoft }}>
        <SectionHeading eyebrow="How it works" title="From idea to celebration" theme={theme} />
        <div className="mt-12">
          <ProcessSteps steps={steps} theme={theme} />
        </div>
      </SectionShell>

      {/* What's included */}
      <SectionShell>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="What's included"
            title="Every setup, beautifully handled"
            subtitle="Mix and match the elements that make your celebration feel complete."
            theme={theme}
            center={false}
          />
          <ScrollReveal className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl p-4"
                style={{ backgroundColor: theme.accentSoft }}
              >
                <span
                  className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: theme.accent }}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-semibold" style={{ color: theme.ink }}>
                  {item}
                </span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </SectionShell>

      {/* Trust */}
      <SectionShell style={{ backgroundColor: theme.accentSoft }}>
        <SectionHeading eyebrow="What clients care about" title="Why hosts trust the setup" theme={theme} />
        <div className="mt-12">
          <TrustCards items={trust} theme={theme} />
        </div>
      </SectionShell>

      <div id="plan">
        <SampleCTA
          title="Let's plan something beautiful"
          subtitle="Share your date and theme, and we will design a setup that fits your celebration."
          primary={{ label: 'Plan Your Event', href: '/#contact' }}
          secondary={{ label: 'Back to Bellmore Web Design', href: '/' }}
          theme={theme}
        />
      </div>

      <SampleFooter
        logo={<EverAfterEventsLogo inverted />}
        note="Sample concept by Bellmore Web Design. This is not a real business."
        theme={theme}
      />
    </div>
  );
}
