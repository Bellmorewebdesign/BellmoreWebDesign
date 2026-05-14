import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ever After Events Demo - Sample Site | Bellmore Web Design',
  description: 'A sample concept for event planners and party setup businesses.',
};

export default function EventsDemo() {
  const eventTypes = [
    {
      name: 'Baby Showers',
      description: 'Beautiful setups with custom backdrops, balloon arches, and elegant table decor',
      icon: '👶'
    },
    {
      name: 'Birthday Parties',
      description: 'Themed decorations for kids and adults, from simple to over-the-top',
      icon: '🎂'
    },
    {
      name: 'Bridal Showers',
      description: 'Romantic, feminine designs with florals, candles, and soft color palettes',
      icon: '💐'
    },
    {
      name: 'Balloon Installations',
      description: 'Organic balloon arches, columns, and custom designs for any event',
      icon: '🎈'
    },
  ];

  const packages = [
    {
      name: 'Essentials',
      price: 'Starting at $350',
      includes: ['Balloon arch or garland', 'Simple backdrop', 'Table centerpieces', 'Setup & breakdown'],
    },
    {
      name: 'Signature',
      price: 'Starting at $650',
      includes: ['Large balloon installation', 'Custom backdrop with florals', 'Styled dessert table', 'Table settings', 'Signage & decor', 'Setup & breakdown'],
    },
    {
      name: 'Luxury',
      price: 'Starting at $1,200',
      includes: ['Multiple balloon installations', 'Custom backdrops & florals', 'Full dessert & gift table styling', 'Lounge furniture', 'Custom signage', 'Photo props', 'Full-day setup & breakdown'],
    },
  ];

  const process = [
    { step: '1', title: 'Inquiry', description: 'Tell us about your event date, location, and vision' },
    { step: '2', title: 'Consultation', description: 'We create a custom proposal with mood boards and pricing' },
    { step: '3', title: 'Planning', description: 'Finalize colors, decor, and all the details together' },
    { step: '4', title: 'Setup', description: 'We arrive early to set up everything beautifully' },
    { step: '5', title: 'Enjoy', description: 'You enjoy your event while we handle the breakdown' },
  ];

  const reviews = [
    { name: 'Amanda R.', text: 'They transformed my backyard into a dream baby shower setup. The balloon arch was stunning and everything looked like it came out of a magazine. Worth every penny!', rating: 5 },
    { name: 'Nicole M.', text: 'Professional, creative, and so easy to work with. They listened to my vision and brought it to life better than I imagined. All my guests asked who did the decor!', rating: 5 },
    { name: 'Jessica T.', text: "I booked them for my daughter's first birthday and they exceeded my expectations. The attention to detail was incredible. I will use them for every event!", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] via-[#FFFBFC] to-[#FFF5F7]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#E6B8D0] via-[#D4A5C3] to-[#C89BB8] text-white py-4 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold">Ever After Events</h1>
          <Link href="/" className="text-sm hover:text-[#FFF5F7] transition-colors underline">
            ← Back to Bellmore Web Design
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#FFF5F7] via-[#FFE9F0] to-[#F5E6FF] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#E6B8D0] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#DEB8E8] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border-2 border-[#E6B8D0]">
            <span className="text-[#A0577E] font-semibold">✨ Baby Showers • Birthdays • Bridal Events ✨</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-[#6B3A51] mb-6 leading-tight">
            Beautiful Event Setups<br />That Feel Like Magic
          </h2>
          <p className="text-2xl md:text-3xl text-[#8B5A6F] mb-10 max-w-4xl mx-auto leading-relaxed">
            From balloon arches to styled dessert tables, we create unforgettable celebrations across Long Island.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
            <button className="bg-gradient-to-r from-[#E6B8D0] to-[#D4A5C3] text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              Get a Custom Quote
            </button>
            <button className="bg-white text-[#A0577E] px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-[#FFF5F7] transition-all border-2 border-[#E6B8D0] shadow-md hover:scale-105">
              View Gallery
            </button>
          </div>
          <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-8 py-5 rounded-2xl shadow-xl border-2 border-[#E6B8D0]">
            <svg className="w-6 h-6 text-[#E6B8D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[#6B3A51] font-semibold text-lg">Full Setup & Breakdown Included</span>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#6B3A51] mb-4 text-center">Event Types</h3>
          <p className="text-2xl text-[#8B5A6F] mb-12 text-center max-w-2xl mx-auto">
            We specialize in celebrations that deserve something special
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-[#FFF5F7] to-[#FFE9F0] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-[#E6B8D0] hover:scale-105">
                <div className="text-6xl mb-5 text-center">{type.icon}</div>
                <h4 className="text-2xl font-bold text-[#6B3A51] mb-3 text-center">{type.name}</h4>
                <p className="text-[#8B5A6F] text-lg leading-relaxed text-center">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5F7] to-[#FFE9F0]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#6B3A51] mb-4 text-center">Packages</h3>
          <p className="text-2xl text-[#8B5A6F] mb-14 text-center max-w-3xl mx-auto">
            Choose a package or work with us to create a custom design
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-3xl p-10 shadow-2xl border-2 ${index === 1 ? 'bg-gradient-to-br from-[#E6B8D0] to-[#D4A5C3] text-white border-[#C89BB8] scale-105' : 'bg-white border-[#E6B8D0]'}`}>
                <h4 className={`text-3xl font-bold mb-3 ${index === 1 ? 'text-white' : 'text-[#6B3A51]'}`}>{pkg.name}</h4>
                <p className={`text-4xl font-bold mb-8 ${index === 1 ? 'text-white' : 'text-[#A0577E]'}`}>{pkg.price}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className={`w-6 h-6 mr-3 flex-shrink-0 mt-0.5 ${index === 1 ? 'text-white' : 'text-[#E6B8D0]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-lg ${index === 1 ? 'text-white' : 'text-[#8B5A6F]'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 rounded-2xl text-xl font-bold transition-all ${index === 1 ? 'bg-white text-[#A0577E] hover:bg-[#FFF5F7]' : 'bg-gradient-to-r from-[#E6B8D0] to-[#D4A5C3] text-white hover:shadow-lg'}`}>
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#6B3A51] mb-4 text-center">Gallery</h3>
          <p className="text-2xl text-[#8B5A6F] mb-14 text-center">
            See what we've created for past events
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-[#FFE9F0] via-[#F5E6FF] to-[#E6B8D0] flex items-center justify-center border-2 border-[#E6B8D0] hover:scale-105 transition-all">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
                </div>
                <span className="text-8xl relative z-10">🎈</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-[#E6B8D0] to-[#D4A5C3] text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5F7] to-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#6B3A51] mb-4 text-center">How It Works</h3>
          <p className="text-2xl text-[#8B5A6F] mb-14 text-center max-w-2xl mx-auto">
            From inquiry to the final celebration
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E6B8D0] to-[#D4A5C3] rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl text-white text-3xl font-bold">
                  {item.step}
                </div>
                <h4 className="text-2xl font-bold text-[#6B3A51] mb-3">{item.title}</h4>
                <p className="text-[#8B5A6F] text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#6B3A51] mb-4 text-center">What Clients Say</h3>
          <p className="text-2xl text-[#8B5A6F] mb-12 text-center">Real reviews from real celebrations</p>
          <div className="grid md:grid-cols-3 gap-10">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#FFF5F7] rounded-3xl p-10 shadow-xl border-2 border-[#E6B8D0]">
                <div className="flex space-x-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#6B3A51] mb-5 text-xl leading-relaxed">"{review.text}"</p>
                <p className="text-[#A0577E] font-bold text-xl">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#E6B8D0] via-[#D4A5C3] to-[#E6B8D0] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DEB8E8] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-5xl md:text-6xl font-bold mb-8">Ready to Plan Your Event?</h3>
          <p className="text-3xl mb-12 opacity-95">Tell us about your celebration and we'll create a custom proposal</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:5551234567" className="bg-white text-[#A0577E] px-16 py-7 rounded-2xl text-3xl font-bold hover:bg-[#FFF5F7] transition-all shadow-2xl hover:scale-105">
              (555) 123-4567
            </a>
            <a href="mailto:info@everafterevents.com" className="bg-white/20 backdrop-blur-sm text-white px-16 py-7 rounded-2xl text-3xl font-bold hover:bg-white/30 transition-all border-4 border-white shadow-2xl hover:scale-105">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B3A51] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-4xl font-bold mb-2">Ever After Events</h4>
            <p className="text-[#E6B8D0] text-lg">Beautiful Event Setups for Life's Special Moments</p>
          </div>
          <div className="border-t border-[#8B5A6F] pt-6 text-center">
            <p className="text-[#FFE9F0] text-sm mb-3">
              This is a <strong className="text-white">sample concept</strong> created by Bellmore Web Design to show what a professional event planning website could look like.
            </p>
            <Link href="/" className="inline-block bg-[#E6B8D0] text-white px-6 py-3 rounded-xl hover:bg-[#D4A5C3] transition-colors font-bold">
              ← Back to Bellmore Web Design
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
