export default function SolutionSection() {
  const features = [
    'Services and pricing sections',
    'Photo galleries',
    'Reviews and trust badges',
    'Service areas',
    'Contact forms',
    'Call, text, or quote buttons',
    'Mobile-friendly layout',
    'Basic SEO setup'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A simple website makes your business easier to trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I build clean one-page websites that organize your business information into one clear place. Customers can see what you do, where you work, what your services look like, and how to contact you without digging through social media.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-800 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
