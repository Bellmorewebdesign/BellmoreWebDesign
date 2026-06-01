'use client';

import MainStreetChickenLogo from '../sample-logos/MainStreetChickenLogo';
import SampleHero from '../SampleHero';
import SampleCTA from '../SampleCTA';
import SampleGallery from '../SampleGallery';
import { SampleHeader, SampleFooter, TrustBar } from './SampleChrome';
import { SectionHeading, SectionShell, ServiceGrid, TrustCards } from './SampleSections';
import ScrollReveal from '../ScrollReveal';
import type { SampleTheme } from './types';

const IMG = '/images/samples/restaurant';

const theme: SampleTheme = {
  accent: '#C8401F',
  accentDark: '#7A2E12',
  accentSoft: '#FBEAD4',
  accentChipText: '#7A2E12',
  ink: '#3B2415',
  muted: '#7A6253',
  pageBg: '#FFF8EE',
  heroFrom: '#511C0C',
  heroTo: '#C8401F',
};

const favorites = [
  { title: 'Nashville Hot Sandwich', desc: 'Hand-breaded fillet, spicy glaze, pickles, and slaw on a toasted bun.', image: { src: `${IMG}/nashville-hot-sandwich.jpg`, alt: 'Nashville hot fried chicken sandwich' } },
  { title: 'Crispy Tenders', desc: 'Golden, juicy tenders fried to order with your choice of sauce.', image: { src: `${IMG}/crispy-tenders-fries.jpg`, alt: 'Crispy chicken tenders with fries' } },
  { title: 'The Classic', desc: 'Our signature crispy chicken sandwich with coleslaw and fries.', image: { src: `${IMG}/hero-chicken-sandwich.jpg`, alt: 'Classic fried chicken sandwich with fries' } },
  { title: 'Chicken & Fries Combo', desc: 'A crowd favorite, piled high and ready for pickup.', image: { src: `${IMG}/chicken-sandwich-closeup.jpg`, alt: 'Fried chicken sandwich close up' } },
];

const menu = [
  { name: 'Nashville Hot Sandwich', price: 11 },
  { name: 'Crispy Tenders (4 pc)', price: 10 },
  { name: 'Loaded Fries', price: 8 },
  { name: 'Chicken Bowl', price: 12 },
  { name: 'Family Box', price: 34 },
  { name: 'House Slaw', price: 4 },
];

const trust = [
  { title: 'Fresh cooked', desc: 'Everything is fried to order so it lands hot and crispy.' },
  { title: 'Big portions', desc: 'Generous plates that are worth showing up hungry for.' },
  { title: 'Local favorite', desc: 'A go-to spot for game nights, lunches, and family dinners.' },
  { title: 'Fast pickup', desc: 'Order ahead and grab it without the wait.' },
];

const gallery = [
  { src: `${IMG}/hero-chicken-sandwich.jpg`, alt: 'Fried chicken sandwich with coleslaw and fries' },
  { src: `${IMG}/crispy-tenders-fries.jpg`, alt: 'Chicken tenders served with golden fries' },
  { src: `${IMG}/nashville-hot-sandwich.jpg`, alt: 'Hands holding a Nashville hot chicken sandwich' },
  { src: `${IMG}/chicken-sandwich-closeup.jpg`, alt: 'Close up of a crispy chicken sandwich' },
];

export default function RestaurantSample() {
  return (
    <div style={{ backgroundColor: theme.pageBg }}>
      <SampleHeader logo={<MainStreetChickenLogo />} theme={theme} cta={{ label: 'Order or Call', href: '#order' }} />

      <SampleHero
        eyebrow="Fried chicken - food truck & pickup"
        title={<>Crispy, crave<br />worthy chicken</>}
        subtitle="Hand-breaded chicken, loaded fries, and fresh sides, all made to order on Main Street."
        primary={{ label: 'View Menu', href: '#menu' }}
        secondary={{ label: 'Order or Call', href: '#order' }}
        image={{ src: `${IMG}/hero-chicken-sandwich.jpg`, alt: 'A fried chicken sandwich with coleslaw and fries' }}
        theme={theme}
        aside={
          <div className="rounded-3xl bg-white/95 p-6 shadow-premium ring-1 ring-white/60 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.accent }}>
              Today
            </p>
            <p className="mt-1 font-display text-lg font-bold" style={{ color: theme.ink }}>
              Open for pickup
            </p>
            <dl className="mt-4 space-y-2 text-sm" style={{ color: theme.muted }}>
              <div className="flex justify-between"><dt>Mon - Thu</dt><dd className="font-semibold">11a - 8p</dd></div>
              <div className="flex justify-between"><dt>Fri - Sat</dt><dd className="font-semibold">11a - 10p</dd></div>
              <div className="flex justify-between"><dt>Sunday</dt><dd className="font-semibold">12p - 7p</dd></div>
            </dl>
          </div>
        }
      />

      <TrustBar items={['Hand-breaded', 'Made to order', 'Loaded fries', 'Family boxes', 'Local pickup']} theme={theme} />

      <SectionShell>
        <SectionHeading
          eyebrow="Fan favorites"
          title="The orders everyone comes back for"
          subtitle="Big, bold flavors fried fresh to order. Here is a taste of what is on the menu."
          theme={theme}
        />
        <div className="mt-12">
          <ServiceGrid items={favorites} theme={theme} />
        </div>
      </SectionShell>

      <SectionShell id="menu" style={{ backgroundColor: theme.accentSoft }}>
        <SectionHeading eyebrow="Menu preview" title="A few menu highlights" theme={theme} />
        <ScrollReveal className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-black/5">
          <ul className="divide-y divide-black/5">
            {menu.map((item) => (
              <li key={item.name} className="flex items-center justify-between px-6 py-4">
                <span className="font-display font-semibold" style={{ color: theme.ink }}>
                  {item.name}
                </span>
                <span className="font-display font-extrabold" style={{ color: theme.accent }}>
                  ${item.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="border-t border-black/5 px-6 py-3 text-center text-xs font-medium" style={{ color: theme.muted }}>
            Sample prices shown for concept purposes only.
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell>
        <SectionHeading eyebrow="Gallery" title="Straight off the fryer" theme={theme} />
        <div className="mt-12">
          <SampleGallery images={gallery} theme={theme} />
        </div>
      </SectionShell>

      {/* Hours & location */}
      <SectionShell style={{ backgroundColor: theme.accentSoft }}>
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <ScrollReveal className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-black/5">
            <h3 className="font-display text-2xl font-extrabold" style={{ color: theme.ink }}>
              Hours & location
            </h3>
            <p className="mt-2 text-sm" style={{ color: theme.muted }}>
              Find the truck on Main Street or order ahead for quick pickup.
            </p>
            <dl className="mt-6 space-y-3 text-sm" style={{ color: theme.muted }}>
              <div className="flex justify-between border-b border-black/5 pb-3"><dt className="font-semibold">Mon - Thu</dt><dd>11:00a - 8:00p</dd></div>
              <div className="flex justify-between border-b border-black/5 pb-3"><dt className="font-semibold">Fri - Sat</dt><dd>11:00a - 10:00p</dd></div>
              <div className="flex justify-between"><dt className="font-semibold">Sunday</dt><dd>12:00p - 7:00p</dd></div>
            </dl>
          </ScrollReveal>
          <ScrollReveal
            delay={0.1}
            className="relative flex min-h-[260px] items-end overflow-hidden rounded-3xl p-8 text-white"
          >
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${theme.accentDark}, ${theme.accent})` }}
            />
            <div className="absolute inset-0 bg-dotgrid opacity-20" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Find us</p>
              <p className="mt-2 font-display text-2xl font-extrabold">Main Street</p>
              <p className="text-white/85">Nassau County, NY</p>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      {/* Catering / events */}
      <SectionShell>
        <ScrollReveal className="overflow-hidden rounded-3xl bg-white p-8 shadow-soft ring-1 ring-black/5 sm:p-12">
          <div className="grid items-center gap-6 sm:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: theme.accent }}>
                Catering & events
              </span>
              <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl" style={{ color: theme.ink }}>
                Feeding a crowd?
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed" style={{ color: theme.muted }}>
                Book the truck for parties, office lunches, and events with family boxes and crowd-sized trays.
              </p>
            </div>
            <a
              href="#order"
              className="cta-shimmer btn-press inline-flex items-center justify-center gap-2 justify-self-start rounded-full px-7 py-3.5 text-base font-bold text-white shadow-lg sm:justify-self-end"
              style={{ backgroundColor: theme.accent }}
            >
              Ask about catering
            </a>
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionShell style={{ backgroundColor: theme.accentSoft }}>
        <SectionHeading eyebrow="Why people love it" title="What keeps the line coming back" theme={theme} />
        <div className="mt-12">
          <TrustCards items={trust} theme={theme} />
        </div>
      </SectionShell>

      <div id="order">
        <SampleCTA
          title="Hungry yet?"
          subtitle="Order ahead for pickup or ask about catering for your next event."
          primary={{ label: 'Order or Call', href: '/#contact' }}
          secondary={{ label: 'Back to Bellmore Web Design', href: '/' }}
          theme={theme}
        />
      </div>

      <SampleFooter
        logo={<MainStreetChickenLogo inverted />}
        note="Sample concept by Bellmore Web Design. This is not a real business."
        theme={theme}
      />
    </div>
  );
}
