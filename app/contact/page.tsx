import type { Metadata } from 'next';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import MobileActionBar from '@/components/MobileActionBar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import ContactCards from '@/components/contact/ContactCards';
import ContactFAQ from '@/components/contact/ContactFAQ';
import ServiceAreaSection from '@/components/site/ServiceAreaSection';
import { Reveal } from '@/components/motion-primitives';

export const metadata: Metadata = {
  title: 'Contact Bellmore Web Design | Free Homepage Mockup',
  description:
    'Request a free homepage mockup from Bellmore Web Design. Website, social media, and photography plans for local businesses — call, text, email, or send a message.',
  alternates: { canonical: 'https://bellmorewebdesign.com/contact' },
  openGraph: {
    title: 'Contact Bellmore Web Design | Free Homepage Mockup',
    description:
      'Request a free homepage mockup. Website, social media, and photography plans for local businesses.',
    url: 'https://bellmorewebdesign.com/contact',
    type: 'website',
  },
};

const OFFER_POINTS = [
  'The homepage mockup is free',
  'The completed website is paid',
  'No commitment to request the mockup',
  'Website-only services available',
  'Social-media-only services available',
  'Combined plans available',
];

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero / offer */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] to-[#FFFDF7] px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-12">
          <div className="absolute inset-0 bg-dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Get in touch</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#1E2A38] leading-[1.1]">
              Get a Free Homepage Mockup
            </h1>
            <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed max-w-2xl mx-auto">
              Tell me a little about your business and I&apos;ll send back a free idea for what your
              site could look like — no pressure, no obligation.
            </p>
            <ul className="mt-7 flex flex-wrap justify-center gap-2">
              {OFFER_POINTS.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E8DED0] bg-white px-3.5 py-1.5 text-sm font-medium text-[#5F6B73] shadow-soft"
                >
                  <svg className="h-3.5 w-3.5 text-[#6B8E6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Form + direct contact */}
        <section className="bg-[#FFFDF7] px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-7">
            <Reveal>
              <ContactSection />
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-5">
              <div>
                <h2 className="text-lg font-bold text-[#1E2A38] mb-4">Prefer to reach out directly?</h2>
                <ContactCards />
              </div>

              <div className="rounded-2xl bg-[#1E2A38] text-white p-6 shadow-soft">
                <h3 className="font-bold mb-3">What happens next</h3>
                <ol className="space-y-2.5 text-sm text-white/80">
                  <li className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-[11px] font-bold text-white">1</span>
                    You send a few details about your business.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-[11px] font-bold text-white">2</span>
                    I reply with a free homepage mockup or content plan.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-[11px] font-bold text-white">3</span>
                    If you like it, we talk about building the real thing.
                  </li>
                </ol>
              </div>
            </Reveal>
          </div>
        </section>

        <ServiceAreaSection tone="cream" />
        <ContactFAQ />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
