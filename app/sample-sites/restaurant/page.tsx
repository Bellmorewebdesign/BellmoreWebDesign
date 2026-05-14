import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Main Street Chicken Co. - Restaurant Sample | Bellmore Web Design',
  description: 'A sample concept for restaurants and food businesses.',
};

export default function RestaurantDemo() {
  const popularItems = [
    { 
      name: 'Nashville Hot Sandwich', 
      price: '$12.99', 
      description: 'Crispy fried chicken, hot sauce, pickles, comeback sauce',
      badge: 'Spicy'
    },
    { 
      name: 'Chicken & Waffles', 
      price: '$14.99', 
      description: 'Golden fried chicken on buttermilk waffles with maple butter',
      badge: 'Fan Favorite'
    },
    { 
      name: 'Classic Bucket', 
      price: '$34.99', 
      description: '10 pieces with 3 large sides and biscuits',
      badge: 'Family Size'
    },
  ];

  const menuCategories = [
    {
      name: 'Hot Chicken',
      items: [
        { name: 'Nashville Hot Sandwich', price: '$12.99', description: 'Spicy fried chicken, pickles, comeback sauce' },
        { name: 'Mild Fried Sandwich', price: '$11.99', description: 'Classic fried chicken, lettuce, pickles' },
        { name: 'Grilled Chicken Sandwich', price: '$10.99', description: 'Marinated and grilled, lettuce, tomato' },
      ]
    },
    {
      name: 'Plates & Combos',
      items: [
        { name: '3 Piece Combo', price: '$13.99', description: 'With 2 sides and biscuit' },
        { name: '5 Piece Combo', price: '$18.99', description: 'With 3 sides and biscuits' },
        { name: 'Chicken & Waffles', price: '$14.99', description: 'With maple butter and hot sauce' },
        { name: 'Tenders Basket', price: '$11.99', description: '4 tenders with fries and sauce' },
      ]
    },
    {
      name: 'Fresh Sides',
      items: [
        { name: 'Mac & Cheese', price: '$4.99', description: 'Creamy cheddar' },
        { name: 'Collard Greens', price: '$4.99', description: 'Southern style' },
        { name: 'Coleslaw', price: '$3.99', description: 'Tangy and fresh' },
        { name: 'Waffle Fries', price: '$4.49', description: 'Crispy and seasoned' },
        { name: 'Buttermilk Biscuits', price: '$2.99', description: 'Warm with honey butter' },
      ]
    }
  ];

  const reviews = [
    { name: 'Mike R.', text: 'Best chicken sandwich I have ever had. The Nashville hot is no joke. So good.', rating: 5 },
    { name: 'Sarah T.', text: 'Came here with my family. Everyone loved it. Mac and cheese is unreal.', rating: 5 },
    { name: 'James K.', text: 'This place is the real deal. Fresh chicken, great sides, friendly service. Highly recommend.', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#8B0000] to-[#DC143C] text-white py-4 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">Main Street Chicken Co.</h1>
          <Link href="/" className="text-sm hover:text-yellow-200 transition-colors underline">
            ← Back to Bellmore Web Design
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#FFF8F0] via-[#FFE4B5] to-[#FFD700]/20 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC143C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#DC143C] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                🔥 Nashville Style Hot Chicken
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#3E2723] mb-6 leading-tight">
                Hot Chicken,<br />Fresh Sides,<br />Local Flavor
              </h2>
              <p className="text-2xl text-[#5D4037] mb-8 leading-relaxed">
                Made fresh every day. Dine in, takeout, or delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:5551234567" className="bg-gradient-to-r from-[#DC143C] to-[#8B0000] text-white px-10 py-5 rounded-2xl text-xl font-black hover:shadow-2xl hover:scale-105 transition-all text-center">
                  Order Now: (555) 123-4567
                </a>
                <button className="bg-[#FFD700] text-[#3E2723] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#FFC700] transition-all shadow-lg">
                  View Full Menu
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <span className="bg-white/70 px-4 py-2 rounded-full font-semibold text-[#3E2723]">📍 123 Main St, Bellmore</span>
                <span className="bg-white/70 px-4 py-2 rounded-full font-semibold text-[#3E2723]">⏰ Open 11 AM - 9 PM</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Sandwich', 'Waffles', 'Tenders', 'Sides'].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-[#D2691E] to-[#8B4513] rounded-2xl h-52 flex items-center justify-center shadow-xl relative overflow-hidden group hover:scale-105 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="text-white text-2xl font-black relative z-10">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-black text-[#3E2723] mb-4 text-center">Popular Items</h3>
          <p className="text-xl text-[#5D4037] mb-12 text-center">What people come back for</p>
          <div className="grid md:grid-cols-3 gap-8">
            {popularItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-[#FFF8F0] rounded-3xl shadow-2xl overflow-hidden border-4 border-[#FFD700] hover:scale-105 transition-all">
                <div className="relative h-56 bg-gradient-to-br from-[#D2691E] via-[#8B4513] to-[#5D4037] flex items-center justify-center">
                  <div className="absolute top-4 right-4 bg-[#DC143C] text-white px-4 py-2 rounded-full text-sm font-bold">
                    {item.badge}
                  </div>
                  <span className="text-white text-6xl">🍗</span>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-black text-[#3E2723] mb-2">{item.name}</h4>
                  <p className="text-[#5D4037] mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#DC143C]">{item.price}</span>
                    <button className="bg-[#FFD700] text-[#3E2723] px-6 py-3 rounded-xl font-bold hover:bg-[#FFC700] transition-colors">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8F0] to-[#FFE4B5]/30">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-black text-[#3E2723] mb-4 text-center">Full Menu</h3>
          <p className="text-xl text-[#5D4037] mb-12 text-center">Made fresh to order</p>
          <div className="space-y-12">
            {menuCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#E8D5C4]">
                <h4 className="text-4xl font-black text-[#DC143C] mb-8 pb-4 border-b-4 border-[#FFD700]">
                  {category.name}
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start group hover:bg-[#FFF8F0] p-4 rounded-xl transition-all">
                      <div className="flex-1">
                        <h5 className="text-xl font-bold text-[#3E2723] mb-1">{item.name}</h5>
                        {item.description && (
                          <p className="text-[#5D4037] text-sm leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      <span className="text-[#DC143C] font-black text-2xl ml-6">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-black text-[#3E2723] mb-12 text-center">Hours & Location</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-3xl p-10 shadow-2xl">
              <h4 className="text-3xl font-black text-[#3E2723] mb-6">Open Daily</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/30 p-4 rounded-xl">
                  <span className="text-[#3E2723] font-bold text-lg">Monday - Friday</span>
                  <span className="text-[#3E2723] font-black text-lg">11 AM - 9 PM</span>
                </div>
                <div className="flex justify-between items-center bg-white/30 p-4 rounded-xl">
                  <span className="text-[#3E2723] font-bold text-lg">Saturday</span>
                  <span className="text-[#3E2723] font-black text-lg">12 PM - 10 PM</span>
                </div>
                <div className="flex justify-between items-center bg-white/30 p-4 rounded-xl">
                  <span className="text-[#3E2723] font-bold text-lg">Sunday</span>
                  <span className="text-[#3E2723] font-black text-lg">12 PM - 8 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#DC143C] to-[#8B0000] text-white rounded-3xl p-10 shadow-2xl">
              <h4 className="text-3xl font-black mb-6">Visit Us</h4>
              <div className="space-y-4 text-lg">
                <p className="flex items-center">
                  <span className="text-3xl mr-4">📍</span>
                  <span className="font-semibold">123 Main Street<br />Bellmore, NY 11710</span>
                </p>
                <p className="flex items-center pt-4">
                  <span className="text-3xl mr-4">📞</span>
                  <a href="tel:5551234567" className="font-black text-2xl hover:text-[#FFD700] transition-colors">
                    (555) 123-4567
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="text-3xl mr-4">✉️</span>
                  <a href="mailto:info@mainstreetchicken.com" className="hover:text-[#FFD700] transition-colors font-semibold">
                    info@mainstreetchicken.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FFF8F0] via-[#FFE4B5] to-[#FFF8F0]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-[#FFD700]">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-5xl font-black text-[#3E2723] mb-6">Catering & Events</h3>
            <p className="text-2xl text-[#5D4037] mb-8 max-w-2xl mx-auto leading-relaxed">
              Feeding a crowd? We cater parties, events, and gatherings of all sizes. Fresh chicken, sides, and everything you need delivered hot and ready.
            </p>
            <a href="tel:5551234567" className="inline-block bg-gradient-to-r from-[#DC143C] to-[#8B0000] text-white px-12 py-6 rounded-2xl text-2xl font-black hover:shadow-2xl hover:scale-105 transition-all">
              Call for Catering Quote
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-black text-[#3E2723] mb-4 text-center">What People Say</h3>
          <p className="text-xl text-[#5D4037] mb-12 text-center">Real reviews from happy customers</p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-[#FFF8F0] rounded-3xl p-8 shadow-xl border-2 border-[#E8D5C4]">
                <div className="flex space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#3E2723] mb-6 text-lg leading-relaxed font-medium">"{review.text}"</p>
                <p className="text-[#DC143C] font-black text-xl">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#DC143C] via-[#8B0000] to-[#DC143C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-5xl md:text-6xl font-black mb-6">Hungry Yet?</h3>
          <p className="text-3xl mb-10 opacity-90">Call in your order or stop by</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:5551234567" className="bg-[#FFD700] text-[#3E2723] px-14 py-7 rounded-2xl text-3xl font-black hover:bg-[#FFC700] transition-all shadow-2xl hover:scale-105">
              (555) 123-4567
            </a>
            <button className="bg-white/20 backdrop-blur-sm text-white px-14 py-7 rounded-2xl text-3xl font-bold hover:bg-white/30 transition-all border-4 border-white shadow-2xl">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E2723] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-4xl font-black mb-2 text-[#FFD700]">Main Street Chicken Co.</h4>
            <p className="text-[#E8D5C4] text-lg">Nashville Style Hot Chicken</p>
          </div>
          <div className="border-t border-[#5D4037] pt-6 text-center">
            <p className="text-[#E8D5C4] text-sm mb-3">
              This is a <strong className="text-white">sample concept</strong> created by Bellmore Web Design to show what a professional restaurant website could look like.
            </p>
            <Link href="/" className="inline-block bg-[#DC143C] text-white px-6 py-3 rounded-xl hover:bg-[#8B0000] transition-colors font-bold">
              ← Back to Bellmore Web Design
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
