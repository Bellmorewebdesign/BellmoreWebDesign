import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Harbor Paws Pet Care - Dog Care Sample | Bellmore Web Design',
  description: 'A sample concept for dog walkers and pet care businesses.',
};

export default function PetCareDemo() {
  const services = [
    {
      name: 'Dog Boarding',
      price: 'Starting at $65/night',
      description: 'Overnight care in a calm, home environment with personal attention',
      icon: '🏠'
    },
    {
      name: 'Dog Walks',
      price: 'Starting at $30/walk',
      description: '30 or 60-minute walks in your neighborhood',
      icon: '🐕'
    },
    {
      name: 'Drop-In Visits',
      price: 'Starting at $25/visit',
      description: 'Perfect for dogs who prefer their own space',
      icon: '🚪'
    },
    {
      name: 'Doggy Daycare',
      price: 'Starting at $50/day',
      description: 'Supervised play and socialization with friendly dogs',
      icon: '🎾'
    },
  ];

  const whyTrust = [
    {
      title: 'Fully Insured',
      description: 'Complete liability and care coverage for your peace of mind'
    },
    {
      title: 'Pet First Aid Certified',
      description: 'Trained to handle emergencies calmly and carefully'
    },
    {
      title: 'Daily Photo Updates',
      description: 'See how your dog is doing throughout the day'
    },
    {
      title: 'Calm, Home Environment',
      description: 'Your dog stays comfortable in a quiet, safe space'
    },
  ];

  const reviews = [
    { name: 'Lisa M.', text: 'My dog has separation anxiety and she is so calm with them. They send photos every day and really care about her comfort. Highly recommend.', rating: 5 },
    { name: 'Tom R.', text: 'We tried three other places and our dog never settled. Harbor Paws is different. Personal, trustworthy, and my dog actually wants to go there now.', rating: 5 },
    { name: 'Sarah P.', text: 'They treat my dog like she is part of their family. Always calm, always professional. I trust them completely.', rating: 5 },
  ];

  const towns = ['Bellmore', 'Merrick', 'Wantagh', 'Seaford', 'Levittown', 'Massapequa', 'North Bellmore', 'East Meadow', 'Freeport'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5DC] to-[#FAFAF0]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#8FBC8F] to-[#6B8E6B] text-white py-4 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold">Harbor Paws Pet Care</h1>
          <Link href="/" className="text-sm hover:text-[#F5F5DC] transition-colors underline">
            ← Back to Bellmore Web Design
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#F5F5DC] via-[#E8F5E9] to-[#B2DFDB] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-80 h-80 bg-[#8FBC8F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#87CEEB] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-[#8FBC8F]">
            <span className="text-[#4A6B4A] font-semibold">🐾 Personal, Calm, & Trustworthy</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-[#3E5C3E] mb-6 leading-tight">
            Calm, Personal Care<br />for Dogs Who Feel<br />Like Family
          </h2>
          <p className="text-2xl text-[#5D6B5D] mb-10 max-w-3xl mx-auto leading-relaxed">
            Dog boarding, walks, and drop-ins in a quiet, home environment where your pet feels safe and comfortable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:5551234567" className="bg-gradient-to-r from-[#8FBC8F] to-[#6B8E6B] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              Call or Text: (555) 123-4567
            </a>
            <button className="bg-white text-[#6B8E6B] px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-[#F5F5DC] transition-all border-2 border-[#8FBC8F] shadow-md">
              Schedule Meet & Greet
            </button>
          </div>
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-[#8FBC8F]">
            <svg className="w-6 h-6 text-[#8FBC8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[#3E5C3E] font-semibold">Licensed, Insured & Pet First Aid Certified</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#3E5C3E] mb-4 text-center">Services</h3>
          <p className="text-xl text-[#5D6B5D] mb-12 text-center max-w-2xl mx-auto">
            Personal care for dogs in a calm home environment
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-[#F5F5DC] rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-[#E0E5DE]">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl">{service.icon}</span>
                    <div>
                      <h4 className="text-3xl font-bold text-[#3E5C3E]">{service.name}</h4>
                      <span className="text-[#8FBC8F] font-bold text-lg">{service.price}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#5D6B5D] text-lg leading-relaxed mb-6">{service.description}</p>
                <button className="bg-gradient-to-r from-[#8FBC8F] to-[#6B8E6B] text-white px-8 py-4 rounded-2xl hover:shadow-lg transition-all font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pet Owners Trust Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F5DC] to-[#E8F5E9]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#3E5C3E] mb-4 text-center">Why Pet Owners Trust Us</h3>
          <p className="text-xl text-[#5D6B5D] mb-12 text-center max-w-2xl mx-auto">
            We treat every dog like they are part of our family
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyTrust.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl text-center border-2 border-[#E0E5DE]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8FBC8F] to-[#6B8E6B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#3E5C3E] mb-3">{item.title}</h4>
                <p className="text-[#5D6B5D] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet & Greet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-bold text-[#3E5C3E] mb-6">Free Meet & Greet</h3>
              <p className="text-xl text-[#5D6B5D] mb-8 leading-relaxed">
                Before your first booking, we offer a free meet and greet so your dog can get comfortable with us and our home. No pressure, no obligation.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-[#8FBC8F] mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#5D6B5D] text-lg">Meet us and see where your dog will stay</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-[#8FBC8F] mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#5D6B5D] text-lg">Let your dog explore and get comfortable</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-[#8FBC8F] mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#5D6B5D] text-lg">Talk about your dog's routine and needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-[#8FBC8F] mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#5D6B5D] text-lg">Ask any questions you have</span>
                </li>
              </ul>
              <button className="mt-8 bg-gradient-to-r from-[#8FBC8F] to-[#6B8E6B] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all">
                Schedule Meet & Greet
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#B2DFDB] via-[#87CEEB] to-[#8FBC8F] rounded-3xl h-96 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-2xl"></div>
              </div>
              <span className="text-9xl relative z-10">🐕</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F5F5DC]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#3E5C3E] mb-4 text-center">What Pet Owners Say</h3>
          <p className="text-xl text-[#5D6B5D] mb-12 text-center">Real reviews from local families</p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#E0E5DE]">
                <div className="flex space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#3E5C3E] mb-6 text-lg leading-relaxed">"{review.text}"</p>
                <p className="text-[#8FBC8F] font-bold text-xl">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability & Towns */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#E8F5E9] to-[#B2DFDB] rounded-3xl p-12 mb-12 text-center shadow-2xl border-2 border-[#8FBC8F]">
            <h3 className="text-4xl font-bold text-[#3E5C3E] mb-4">Current Availability</h3>
            <p className="text-xl text-[#5D6B5D] mb-6">
              We have openings for boarding, walks, and daycare. Book early for holidays and summer months.
            </p>
            <a href="tel:5551234567" className="inline-block bg-gradient-to-r from-[#8FBC8F] to-[#6B8E6B] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              Call to Check Availability
            </a>
          </div>
          
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#3E5C3E] mb-6">Towns We Serve</h3>
            <p className="text-lg text-[#5D6B5D] mb-8">
              Providing personal dog care throughout Nassau County
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {towns.map((town, index) => (
                <span key={index} className="bg-gradient-to-r from-[#E8F5E9] to-[#B2DFDB] px-8 py-4 rounded-2xl text-[#3E5C3E] font-semibold text-lg border-2 border-[#8FBC8F] shadow-md">
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#8FBC8F] via-[#6B8E6B] to-[#8FBC8F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5F5DC] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-5xl md:text-6xl font-bold mb-6">Ready to Meet Us?</h3>
          <p className="text-2xl mb-10 opacity-90">Schedule a free meet and greet today</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:5551234567" className="bg-white text-[#6B8E6B] px-12 py-6 rounded-2xl text-2xl font-black hover:bg-[#F5F5DC] transition-all shadow-2xl hover:scale-105">
              (555) 123-4567
            </a>
            <a href="mailto:info@harborpaws.com" className="bg-white/20 backdrop-blur-sm text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-white/30 transition-all border-4 border-white shadow-2xl">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E5C3E] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-4xl font-bold mb-2">Harbor Paws Pet Care</h4>
            <p className="text-[#B2DFDB] text-lg">Personal Care for Dogs Who Feel Like Family</p>
          </div>
          <div className="border-t border-[#6B8E6B] pt-6 text-center">
            <p className="text-[#E8F5E9] text-sm mb-3">
              This is a <strong className="text-white">sample concept</strong> created by Bellmore Web Design to show what a professional pet care website could look like.
            </p>
            <Link href="/" className="inline-block bg-[#8FBC8F] text-white px-6 py-3 rounded-xl hover:bg-[#6B8E6B] transition-colors font-bold">
              ← Back to Bellmore Web Design
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
