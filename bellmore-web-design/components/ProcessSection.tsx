export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'I look at your current page',
      description: 'I check your Facebook, Instagram, website, or Google listing to see what customers currently see.'
    },
    {
      number: '2',
      title: 'I make a free homepage mockup',
      description: 'I create a rough homepage idea so you can see what your business could look like online.'
    },
    {
      number: '3',
      title: 'You review the design',
      description: 'You can tell me what you like, what you want changed, or whether you are all set.'
    },
    {
      number: '4',
      title: 'I build the full site',
      description: 'If you like the mockup, I turn it into a clean mobile-friendly website you can share with customers.'
    }
  ];

  return (
    <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
