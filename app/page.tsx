import type { Metadata } from 'next';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import MobileActionBar from '@/components/MobileActionBar';
import Footer from '@/components/Footer';
import HomeHero from '@/components/home/HomeHero';
import TrustBar from '@/components/home/TrustBar';
import ServicesHome from '@/components/home/ServicesHome';
import WhoWeHelp from '@/components/home/WhoWeHelp';
import RealWorkPreview from '@/components/home/RealWorkPreview';
import Testimonials from '@/components/home/Testimonials';
import PricingHome from '@/components/home/PricingHome';
import ProcessHome from '@/components/home/ProcessHome';
import ServiceAreaSection from '@/components/site/ServiceAreaSection';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Bellmore Web Design | Websites, Social Media & Photography',
  description:
    'Bellmore Web Design builds custom websites and manages social media and on-site photography for local small businesses. Free homepage mockup, no commitment.',
  alternates: { canonical: 'https://bellmorewebdesign.com' },
  openGraph: {
    title: 'Bellmore Web Design | Websites, Social Media & Photography',
    description:
      'Custom websites, social media management, and on-site photography for local small businesses. Free homepage mockup, no commitment.',
    url: 'https://bellmorewebdesign.com',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HomeHero />
        <TrustBar />
        <ServicesHome />
        <WhoWeHelp />
        <RealWorkPreview />
        <Testimonials />
        <PricingHome />
        <ProcessHome />
        <ServiceAreaSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
