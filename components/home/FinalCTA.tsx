import Link from 'next/link';
import { Reveal } from '../motion-primitives';
import { CONTACT } from '../site/siteData';

export default function FinalCTA() {
  return (
    <section className="bg-[#FFFDF7] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E2A38] to-[#16212C] px-6 sm:px-12 py-14 text-center shadow-premium">
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.08]" aria-hidden="true" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Ready to improve how your business looks online?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Start with a free homepage mockup — no cost, no commitment. See the idea first, then decide.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="btn-press cta-shimmer rounded-full bg-white px-7 py-4 text-base font-semibold text-[#1E2A38] hover:bg-[#F4EFE6]"
            >
              Get a Free Homepage Mockup
            </Link>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="btn-press rounded-full border border-white/25 px-7 py-4 text-base font-semibold text-white hover:bg-white/10"
            >
              Call {CONTACT.phoneDisplay}
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <a href={CONTACT.smsHref} className="hover:text-white transition-colors">
              Text me
            </a>
            <span className="hidden sm:inline text-white/25">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Use the contact form
            </Link>
            <span className="hidden sm:inline text-white/25">•</span>
            <Link href="/work" className="hover:text-white transition-colors">
              View recent work
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
