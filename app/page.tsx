import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ServicesSection from '@/components/ServicesSection';
import WhoIHelpSection from '@/components/WhoIHelpSection';
import InteractiveSamples from '@/components/InteractiveSamples';
import FeaturedSample from '@/components/FeaturedSample';
import SampleSitesSection from '@/components/SampleSitesSection';
import WorkSection from '@/components/WorkSection';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <InteractiveSamples />
        <FeaturedSample />
        <SampleSitesSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <WhoIHelpSection />
        <WorkSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
