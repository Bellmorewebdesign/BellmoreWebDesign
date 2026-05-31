'use client';

import PricingCard from './PricingCard';
import { Reveal, Stagger, StaggerItem } from './motion-primitives';

const PLANS = [
  {
    title: 'Website Refresh',
    price: 'Starting at $300',
    features: [
      'Cleaner, modern design',
      'Better mobile layout',
      'Updated sections and copy',
      'Improved contact buttons',
      'Better organization',
    ],
  },
  {
    title: 'Starter Website',
    price: 'Starting at $350',
    featured: true,
    badge: 'Most popular',
    features: [
      'One-page mobile-friendly website',
      'Services section',
      'Photos or gallery',
      'Contact form',
      'Call or quote button',
      'Basic SEO setup',
    ],
  },
  {
    title: 'Optional Updates',
    price: '$25/month',
    features: [
      'Small text updates',
      'Photo changes',
      'Service updates',
      'Basic maintenance help',
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F0] to-[#FFFDF7]">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Pricing</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Simple starting prices
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6 lg:gap-7 items-stretch mb-8" stagger={0.12}>
          {PLANS.map((plan) => (
            <StaggerItem key={plan.title} className="h-full">
              <PricingCard
                title={plan.title}
                price={plan.price}
                features={plan.features}
                featured={plan.featured}
                badge={plan.badge}
              />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="text-center">
          <p className="text-sm text-[#5F6B73]">
            Final pricing depends on what your business needs. The homepage mockup is free.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
