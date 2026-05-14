'use client';

import WebsitePreview from './WebsitePreview';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F0] via-[#FFFDF7] to-[#FAF7F0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E2A38] mb-6 leading-tight">
              Simple Websites for Local Businesses That Need More Than a Facebook Page
            </h1>
            <p className="text-xl text-[#5F6B73] mb-8 leading-relaxed">
              Bellmore Web Design helps small businesses turn their services, photos, reviews, and contact info into a clean website customers can actually use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#6FA8DC] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#5a8ec4] transition-all shadow-md hover:shadow-lg"
              >
                Get a Free Homepage Mockup
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="bg-white text-[#6FA8DC] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#FFFDF7] transition-all border-2 border-[#6FA8DC]"
              >
                See Sample Sites
              </button>
            </div>
            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#A8C3A0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#5F6B73]">Built for local businesses</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#A8C3A0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#5F6B73]">Mobile-friendly design</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#A8C3A0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#5F6B73]">Free homepage mockups</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#A8C3A0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#5F6B73]">Based in Bellmore, NY</span>
              </div>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="flex justify-center lg:justify-end">
            <WebsitePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
