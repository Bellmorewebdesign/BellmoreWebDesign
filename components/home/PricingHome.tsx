import PricingCard from '../PricingCard';
import { Reveal, Stagger, StaggerItem } from '../motion-primitives';
import { WEBSITE_PLANS, MONTHLY_PLANS, PRICING_NOTE } from '../site/offerings';

export default function PricingHome() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-gradient-to-b from-[#FAF7F0] to-[#FFFDF7] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Pricing</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Clear starting prices
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            One-time website work and ongoing monthly services, kept separate so it&apos;s easy to compare.
          </p>
        </Reveal>

        {/* One-time website projects */}
        <Reveal className="mb-5 flex items-center gap-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#1E2A38]">Website projects</h3>
          <span className="text-xs text-[#8A939B]">one-time</span>
          <span className="h-px flex-1 bg-[#E8DED0]" />
        </Reveal>
        <Stagger className="grid sm:grid-cols-2 gap-6 mb-14 max-w-3xl" stagger={0.12}>
          {WEBSITE_PLANS.map((plan) => (
            <StaggerItem key={plan.title} className="h-full">
              <PricingCard {...plan} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Monthly services */}
        <Reveal className="mb-5 flex items-center gap-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#1E2A38]">Monthly services</h3>
          <span className="text-xs text-[#8A939B]">ongoing</span>
          <span className="h-px flex-1 bg-[#E8DED0]" />
        </Reveal>
        <Stagger className="grid md:grid-cols-3 gap-6 items-stretch" stagger={0.12}>
          {MONTHLY_PLANS.map((plan) => (
            <StaggerItem key={plan.title} className="h-full">
              <PricingCard {...plan} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 mx-auto max-w-2xl rounded-2xl border border-[#E8DED0] bg-white px-6 py-5 text-center shadow-soft">
          <p className="text-sm text-[#5F6B73] leading-relaxed">{PRICING_NOTE}</p>
        </Reveal>
      </div>
    </section>
  );
}
