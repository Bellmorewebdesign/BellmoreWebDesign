import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Main Street Chicken Co. - Restaurant Sample | Bellmore Web Design',
  description: 'A sample concept for local restaurant and food businesses.',
};

export default function RestaurantDemo() {
  const popularItems = [
    { name: 'Southern Fried Chicken', price: '$12.99', description: 'Crispy, juicy, and perfectly seasoned' },
    { name: 'Buffalo Wings', price: '$9.99', description: 'Your choice of mild, hot, or BBQ' },
    { name: 'Chicken Tenders', price: '$8.99', description: 'Hand-breaded and fried golden brown' },
    { name: 'Loaded Chicken Sandwich', price: '$11.99', description: 'Crispy chicken, pickles, and special sauce' },
  ];

  const menuCategories = [
    { name: 'Fried Chicken', description: 'Pieces, buckets, and family meals' },
    { name: 'Wings & Tenders', description: 'Sauced or dry-rubbed' },
    { name: 'Sandwiches', description: 'Classic and specialty chicken sandwiches' },
    { name: 'Sides', description: 'Mac & cheese, coleslaw, fries, and more' },
    { name: 'Catering', description: 'Feed a crowd with party platters' },
  ];

  const reviews = [
    { name: 'Sarah L.', text: 'Best fried chicken on Long Island. The crust is so crispy and the meat is always juicy. We order every week!', rating: 5 },
    { name: 'Mike D.', text: 'Got them to cater our office party. Everyone loved it. The chicken was hot, fresh, and delicious.', rating: 5 },
    { name: 'Jessica P.', text: 'Their buffalo wings are addictive. Great portion sizes and always consistent. Highly recommend!', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <header className="bg-[#8B1E1E] text-[#FFF8E7] py-4 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold">Main Street Chicken Co.</h1>
          <Link href="/" className="text-sm hover:text-[#F4D03F] transition-colors underline">
            ← Back to Bellmore Web Design
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#FFF8E7] via-[#FFE8CC] to-[#F4D03F]/30 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#8B1E1E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#F4D03F] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-[#2C1810] mb-6 leading-tight">
            Fried Chicken<br />Done Right
          </h2>
          <p className="text-2xl md:text-3xl text-[#5A3E2B] mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
            Crispy outside. Juicy inside. Made fresh daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
            <a href="tel:5551234567" className="bg-[#8B1E1E] text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-[#6D1616] transition-all shadow-xl hover:scale-105">
              Call to Order
            </a>
            <button className="bg-[#F4D03F] text-[#2C1810] px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-[#E6C035] transition-all shadow-xl hover:scale-105">
              View Menu
            </button>
          </div>
          <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-5 rounded-2xl shadow-xl border-2 border-[#8B1E1E]">
            <p className="text-[#2C1810] text-lg">
              <span className="font-bold text-[#8B1E1E]">Open Daily:</span> 11 AM - 9 PM • <span className="font-bold text-[#8B1E1E]">Location:</span> 123 Main Street, Bellmore, NY
            </p>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-4 text-center">Popular Items</h3>
          <p className="text-2xl text-[#5A3E2B] mb-12 text-center max-w-2xl mx-auto">
            What people keep coming back for
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-[#F4D03F] hover:scale-105">
                <h4 className="text-2xl font-bold text-[#2C1810] mb-3">{item.name}</h4>
                <p className="text-3xl font-bold text-[#8B1E1E] mb-4">{item.price}</p>
                <p className="text-[#5A3E2B] text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8E7] to-[#FFE8CC]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-4 text-center">Full Menu</h3>
          <p className="text-2xl text-[#5A3E2B] mb-14 text-center">
            Something for everyone
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {menuCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#8B1E1E] hover:shadow-2xl transition-all">
                <h4 className="text-3xl font-bold text-[#8B1E1E] mb-4">{category.name}</h4>
                <p className="text-[#5A3E2B] text-xl leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="tel:5551234567" className="inline-block bg-[#8B1E1E] text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-[#6D1616] transition-all shadow-xl">
              Call for Full Menu & Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#8B1E1E] to-[#6D1616] rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-4xl font-bold mb-8">Hours</h3>
              <div className="space-y-4 text-xl">
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="font-semibold">Monday - Thursday</span>
                  <span>11 AM - 9 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="font-semibold">Friday - Saturday</span>
                  <span>11 AM - 10 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday</span>
                  <span>12 PM - 8 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#F4D03F] to-[#E6C035] rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold text-[#2C1810] mb-8">Find Us</h3>
              <div className="space-y-6 text-xl text-[#2C1810]">
                <div>
                  <p className="font-bold mb-2">Address</p>
                  <p>123 Main Street<br />Bellmore, NY 11710</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Phone</p>
                  <a href="tel:5551234567" className="hover:underline">(555) 123-4567</a>
                </div>
                <div>
                  <p className="font-bold mb-2">Parking</p>
                  <p>Free parking in rear lot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8E7] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-6">Catering Available</h3>
          <p className="text-2xl text-[#5A3E2B] mb-10 leading-relaxed">
            Feeding a crowd? We've got you covered. Office parties, family gatherings, game day spreads. Call us for catering packages.
          </p>
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-[#8B1E1E]">
            <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
              <div>
                <p className="text-5xl font-bold text-[#8B1E1E] mb-3">🍗</p>
                <p className="text-xl font-semibold text-[#2C1810]">Chicken Platters</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[#8B1E1E] mb-3">🥗</p>
                <p className="text-xl font-semibold text-[#2C1810]">Family-Sized Sides</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[#8B1E1E] mb-3">📦</p>
                <p className="text-xl font-semibold text-[#2C1810]">Easy Pickup</p>
              </div>
            </div>
            <a href="tel:5551234567" className="inline-block bg-[#8B1E1E] text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-[#6D1616] transition-all shadow-xl">
              Request Catering Quote
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-4 text-center">What People Say</h3>
          <p className="text-2xl text-[#5A3E2B] mb-12 text-center">Real reviews from local customers</p>
          <div className="grid md:grid-cols-3 gap-10">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#FFF8E7] rounded-3xl p-10 shadow-xl border-2 border-[#F4D03F]">
                <div className="flex space-x-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 text-[#F4D03F]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#2C1810] mb-5 text-xl leading-relaxed">"{review.text}"</p>
                <p className="text-[#8B1E1E] font-bold text-xl">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#8B1E1E] via-[#6D1616] to-[#8B1E1E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4D03F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4D03F] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-5xl md:text-6xl font-bold mb-8">Hungry? Order Now</h3>
          <p className="text-3xl mb-12 opacity-95">Call ahead for faster pickup</p>
          <a href="tel:5551234567" className="inline-block bg-[#F4D03F] text-[#2C1810] px-16 py-7 rounded-2xl text-3xl font-bold hover:bg-[#E6C035] transition-all shadow-2xl hover:scale-105">
            (555) 123-4567
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-[#FFF8E7] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-3xl font-bold mb-2">Main Street Chicken Co.</h4>
            <p className="text-[#D8BFA3]">Fried Chicken & More</p>
          </div>
          <div className="border-t border-[#5A3E2B] pt-6 text-center">
            <p className="text-[#D8BFA3] text-sm mb-3">
              This is a <strong className="text-white">sample concept</strong> created by Bellmore Web Design to show what a professional restaurant website could look like.
            </p>
            <Link href="/" className="inline-block bg-[#8B1E1E] text-white px-6 py-3 rounded-xl hover:bg-[#6D1616] transition-colors font-semibold">
              ← Back to Bellmore Web Design
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
