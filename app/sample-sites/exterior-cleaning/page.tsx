import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'South Shore Shine - Pressure Washing Sample | Bellmore Web Design',
  description: 'A sample concept for pressure washing and exterior cleaning businesses.',
};

export default function ExteriorCleaningDemo() {
  const services = [
    { 
      name: 'House Washing', 
      description: 'Make your home exterior look fresh again',
      icon: '🏠'
    },
    { 
      name: 'Driveway Cleaning', 
      description: 'Remove years of built-up dirt and oil stains',
      icon: '🚗'
    },
    { 
      name: 'Patio & Paver Cleaning', 
      description: 'Restore your outdoor living space',
      icon: '🌿'
    },
    { 
      name: 'Window Cleaning', 
      description: 'Crystal clear windows inside and out',
      icon: '✨'
    },
    { 
      name: 'Storefront Cleaning', 
      description: 'Keep your business looking professional',
      icon: '🏪'
    },
    { 
      name: 'Seasonal Maintenance', 
      description: 'Regular cleaning packages available',
      icon: '📅'
    },
  ];

  const beforeAfter = [
    { type: 'Driveway', location: 'Merrick, NY', result: 'Removed 5 years of buildup' },
    { type: 'House Siding', location: 'Bellmore, NY', result: 'Like new again' },
    { type: 'Deck & Patio', location: 'Seaford, NY', result: 'Ready for summer' },
    { type: 'Commercial Building', location: 'Wantagh, NY', result: 'Professional curb appeal' },
  ];

  const reviews = [
    { name: 'Tom R.', text: 'My driveway looked horrible. They made it look brand new. Worth every penny.', rating: 5 },
    { name: 'Lisa M.', text: 'They showed up on time, did great work, and cleaned up after. Will definitely call them again.', rating: 5 },
    { name: 'John K.', text: 'Used them for our office building. Professional and thorough. Highly recommend.', rating: 5 },
  ];

  const serviceAreas = ['Bellmore', 'Merrick', 'Wantagh', 'Seaford', 'Levittown', 'Massapequa', 'East Meadow', 'Freeport'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50/30 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold">South Shore Shine</h1>
          <Link href="/" className="text-sm hover:text-cyan-100 transition-colors underline">
            ← Back to Bellmore Web Design
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-cyan-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Make Your Home<br />Look Fresh Again
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pressure washing, house cleaning, and exterior care for Long Island homes and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:5551234567" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              Call or Text Now
            </a>
            <button className="bg-white text-cyan-700 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-cyan-50 transition-all border-2 border-cyan-600 shadow-md">
              Free Estimate
            </button>
          </div>
          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-cyan-200">
            <p className="text-gray-700">
              <span className="font-bold text-cyan-700">Serving:</span> {serviceAreas.join(' • ')}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Services</h3>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            We clean everything outside your home or business
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-cyan-100 hover:scale-105">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Before & After Results</h3>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            See the difference pressure washing makes
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfter.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="relative h-64 bg-gradient-to-br from-gray-400 via-gray-300 to-cyan-200 flex items-center justify-center">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center">
                      <span className="text-white text-xl font-bold bg-black/30 px-4 py-2 rounded">BEFORE</span>
                    </div>
                    <div className="w-1/2 bg-gradient-to-br from-white to-cyan-100 flex items-center justify-center">
                      <span className="text-gray-900 text-xl font-bold bg-white/70 px-4 py-2 rounded">AFTER</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{project.type}</h4>
                  <p className="text-cyan-700 font-semibold mb-1">{project.location}</p>
                  <p className="text-gray-600">{project.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Residential & Commercial Cleaning</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">For Homeowners</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Driveways, patios, decks, and walkways</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">House siding and exterior walls</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Gutters, windows, and trim</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Seasonal maintenance plans available</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">For Businesses</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Storefront and building exteriors</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Parking lots and walkways</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Dumpster areas and loading docks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">Flexible scheduling after hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">What People Say</h3>
          <p className="text-xl text-gray-600 mb-12 text-center">Real reviews from local customers</p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-cyan-100">
                <div className="flex space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">"{review.text}"</p>
                <p className="text-gray-900 font-bold text-lg">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Towns We Serve</h3>
          <p className="text-xl text-gray-600 mb-10">
            Proudly serving Nassau County and surrounding areas
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <span key={index} className="bg-gradient-to-r from-cyan-100 to-blue-100 px-8 py-4 rounded-2xl shadow-md text-gray-900 font-semibold text-lg border border-cyan-200">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Free Estimate?</h3>
          <p className="text-2xl mb-10 opacity-90">Call or text us today. We respond fast.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:5551234567" className="bg-white text-cyan-700 px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-cyan-50 transition-all shadow-2xl hover:scale-105">
              (555) 123-4567
            </a>
            <a href="mailto:info@southshoreshine.com" className="bg-cyan-700 text-white px-12 py-6 rounded-2xl text-2xl font-semibold hover:bg-cyan-800 transition-all border-2 border-white shadow-2xl hover:scale-105">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-3xl font-bold mb-2">South Shore Shine</h4>
            <p className="text-gray-400">Pressure Washing & Exterior Cleaning</p>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400 text-sm mb-3">
              This is a <strong className="text-white">sample concept</strong> created by Bellmore Web Design to show what a professional pressure washing website could look like.
            </p>
            <Link href="/" className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-xl hover:bg-cyan-700 transition-colors font-semibold">
              ← Back to Bellmore Web Design
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
