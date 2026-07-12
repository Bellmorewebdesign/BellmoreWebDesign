import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import MobileActionBar from '@/components/MobileActionBar';
import Footer from '@/components/Footer';
import RealProjectsSection from '@/components/work/RealProjectsSection';
import CaseStudiesSection from '@/components/work/CaseStudiesSection';
import SampleConceptsSection from '@/components/work/SampleConceptsSection';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Web Design & Content Portfolio | Bellmore Web Design',
  description:
    'Real local client websites, featured case studies, and sample website concepts by Bellmore Web Design — web design, social media, and photography for small businesses.',
  alternates: { canonical: 'https://bellmorewebdesign.com/work' },
  openGraph: {
    title: 'Web Design & Content Portfolio | Bellmore Web Design',
    description:
      'Real local client websites, featured case studies, and sample website concepts by Bellmore Web Design.',
    url: 'https://bellmorewebdesign.com/work',
    type: 'website',
  },
};

export default function WorkPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] to-[#FFFDF7] px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-12 sm:pb-16">
          <div className="absolute inset-0 bg-dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Our work</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#1E2A38] leading-[1.1]">
              Real client websites &amp; design work
            </h1>
            <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed max-w-2xl mx-auto">
              Live local projects come first, followed by featured case studies and sample concepts that
              show the design directions we can take.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="btn-press cta-shimmer rounded-full bg-[#1E2A38] px-7 py-3.5 text-base font-semibold text-white shadow-premium hover:bg-[#16212C]"
              >
                Get a Free Homepage Mockup
              </Link>
              <a href="#client-projects" className="btn-press rounded-full border border-[#E8DED0] bg-white px-7 py-3.5 text-base font-semibold text-[#1E2A38] shadow-soft hover:border-[#6FA8DC]">
                See client projects
              </a>
            </div>
          </div>
        </section>

        <RealProjectsSection />
        <CaseStudiesSection />
        <SampleConceptsSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
