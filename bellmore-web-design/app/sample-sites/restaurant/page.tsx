import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Website Demo | Bellmore Web Design',
  description: 'A sample concept for restaurants and food businesses.',
};

export default function RestaurantDemo() {
  const menuCategories = [
    {
      name: 'Fried Chicken',
      items: [
        { name: '2 Piece Combo', price: '$12.99', description: 'With 1 side and biscuit' },
        { name: '3 Piece Combo', price: '$15.99', description: 'With 2 sides and biscuit' },
        { name: 'Family Bucket', price: '$39.99', description: '12 pieces with 3 large sides' },
      ]
    },
    {
      name: 'Sandwiches',
      items: [
        { name: 'Classic Chicken Sandwich', price: '$9.99', description: 'Crispy or grilled with lettuce and pickles' },
        { name: 'Spicy Chicken Sandwich', price: '$10.99', description: 'Hot and crispy with spicy mayo' },
        { name: 'Chicken Club', price: '$11.99', description: 'Bacon, lettuce, tomato, cheese' },
      ]
    },
    {
      name: 'Sides',
      items: [
        { name: 'Mac & Cheese', price: '$4.99', description: 'Creamy and delicious' },
        { name: 'Coleslaw', price: '$3.99', description: 'Fresh and tangy' },
        { name: 'Biscuits', price: '$2.99', description: 'Warm and buttery' },
        { name: 'Fries', price: '$3.99', description: 'Crispy golden fries' },
      ]
    }
  ];

  const reviews = [
    { name: 'Tom L.', text: 'Best fried chicken on Long Island. Always fresh and crispy.', rating: 5 },
    { name: 'Lisa P.', text: 'Great food and friendly service. The mac and cheese is amazing.', rating: 5 },
    { name: 'David K.', text: 'Quick service and delicious food. Highly recommend the spicy sandwich.', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-orange-600 text-white py-4 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Main Street Chicken Co.</h1>
          <Link href="/" className="text-sm hover:underline">
            ← Back to Bellmore Web Design
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Crispy, Fresh, Delicious Fried Chicken
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Family recipes made fresh daily. Order online for pickup or delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
                  Order Online
                </button>
                <a href="tel:5551234567" className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-orange-600">
                  Call (555) 123-4567
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg h-40 flex items-center justify-center shadow-md">
                  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Menu</h3>
          <div className="space-y-12">
            {menuCategories.map((category, index) => (
              <div key={index}>
                <h4 className="text-2xl font-bold text-orange-600 mb-6 pb-2 border-b-2 border-orange-600">
                  {category.name}
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start">
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900">{item.name}</h5>
                        {item.description && (
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        )}
                      </div>
                      <span className="text-orange-600 font-bold text-lg ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customer Favorites</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Spicy Chicken Sandwich', 'Family Bucket', 'Mac & Cheese'].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                  <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{item}</h4>
                  <p className="text-gray-600 mb-4">One of our most popular menu items</p>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Monday - Friday</span>
                  <span className="text-gray-900">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="text-gray-900">12:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Sunday</span>
                  <span className="text-gray-900">12:00 PM - 8:00 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location</h3>
              <div className="space-y-3 text-gray-700">
                <p>123 Main Street</p>
                <p>Bellmore, NY 11710</p>
                <p className="pt-4">
                  <a href="tel:5551234567" className="text-orange-600 font-semibold hover:text-orange-700">
                    (555) 123-4567
                  </a>
                </p>
                <p>
                  <a href="mailto:info@mainstreetchicken.com" className="text-orange-600 hover:text-orange-700">
                    info@mainstreetchicken.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Catering Available</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Planning a party or event? We offer catering packages for groups of all sizes. Fresh chicken, sides, and desserts delivered to your location.
          </p>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
            Request Catering Quote
          </button>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What People Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
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

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Order?</h3>
          <p className="text-xl mb-8">Order online or call us for pickup and delivery.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Order Online
            </button>
            <a href="tel:5551234567" className="bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-800 transition-colors">
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
