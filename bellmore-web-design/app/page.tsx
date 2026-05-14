import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ServicesSection from '@/components/ServicesSection';
import WhoIHelpSection from '@/components/WhoIHelpSection';
import WorkSection from '@/components/WorkSection';
import SampleSitesSection from '@/components/SampleSitesSection';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <WhoIHelpSection />
        <WorkSection />
        <SampleSitesSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
