import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Care Website Demo | Bellmore Web Design',
  description: 'A sample concept for dog walkers and pet care businesses.',
};

export default function PetCareDemo() {
  const services = [
    {
      name: 'Dog Boarding',
      price: 'Starting at $65/night',
      description: 'Overnight care in our home with plenty of attention and outdoor time'
    },
    {
      name: 'Dog Walking',
      price: 'Starting at $30/walk',
      description: '30-minute or 60-minute walks around your neighborhood'
    },
    {
      name: 'Drop-In Visits',
      price: 'Starting at $25/visit',
      description: 'Perfect for pets who prefer to stay home while you are away'
    },
    {
      name: 'Doggy Daycare',
      price: 'Starting at $45/day',
      description: 'Socialization and play time with other friendly dogs'
    },
  ];

  const reviews = [
    { name: 'Amanda T.', text: 'My dog loves it here. She gets so excited every time we pull up. Great care and communication.', rating: 5 },
    { name: 'Robert M.', text: 'Trustworthy and reliable. We feel confident leaving our dog with them while we are at work.', rating: 5 },
    { name: 'Jessica H.', text: 'They send photos and updates throughout the day. Our pup is always happy and tired when we pick her up.', rating: 5 },
  ];

  const towns = ['Bellmore', 'Merrick', 'Wantagh', 'Seaford', 'Levittown', 'Massapequa', 'North Bellmore', 'East Meadow'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-purple-600 text-white py-4 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Harbor Paws Pet Care</h1>
          <Link href="/" className="text-sm hover:underline">
            ← Back to Bellmore Web Design
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted Pet Care When You Cannot Be There
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional dog boarding, walking, and daycare services in Nassau County. Your pet will be treated like family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              Book Now
            </button>
            <a href="tel:5551234567" className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-purple-600">
              Call (555) 123-4567
            </a>
          </div>
          <div className="mt-8 inline-flex items-center space-x-2 bg-purple-100 px-6 py-3 rounded-lg">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-purple-900 font-medium">Licensed, Insured & Pet First Aid Certified</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-semibold text-gray-900">{service.name}</h4>
                  <span className="text-purple-600 font-bold">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Availability</h3>
            <p className="text-lg text-gray-700 mb-6">
              We have openings for boarding and daycare. Book early for holidays and peak summer months.
            </p>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {/* Meet & Greet */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Free Meet and Greet</h3>
              <p className="text-lg text-gray-600 mb-6">
                Before your first booking, we offer a free meet and greet so your dog can get comfortable with us and our space. This also gives you a chance to ask questions and see where your pet will stay.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Meet our team and see our facility</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Let your dog explore and get comfortable</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Discuss your pet's routine and needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">No obligation to book</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg h-80 flex items-center justify-center shadow-lg">
              <svg className="w-32 h-32 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Towns Served */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Towns We Serve</h3>
          <p className="text-lg text-gray-600 mb-8">
            We provide pet care services throughout Nassau County:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {towns.map((town, index) => (
              <span key={index} className="bg-purple-50 px-6 py-3 rounded-lg text-gray-800 font-medium border border-purple-200">
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Happy Pet Parents</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
                <p className="text-gray-900 font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Pet's Safety Comes First</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Fully Insured</h4>
              <p className="text-gray-600">Complete liability and care insurance for your peace of mind</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Pet First Aid Certified</h4>
              <p className="text-gray-600">Trained to handle any emergency with calm and care</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Daily Photo Updates</h4>
              <p className="text-gray-600">See how your pet is doing throughout the day</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Book?</h3>
          <p className="text-xl mb-8">Schedule a free meet and greet or book your pet's next stay today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Meet & Greet
            </button>
            <a href="tel:5551234567" className="bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-800 transition-colors">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm mb-2">
            This is a <strong>sample concept</strong> created by Bellmore Web Design
          </p>
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            Back to Bellmore Web Design
          </Link>
        </div>
      </footer>
    </div>
  );
}
