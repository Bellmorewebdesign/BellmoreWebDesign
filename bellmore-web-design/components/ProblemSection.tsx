export default function ProblemSection() {
  const problems = [
    {
      title: 'Customers cannot find your services quickly',
      description: 'Scrolling through posts to find what you offer is frustrating for customers.'
    },
    {
      title: 'Photos and reviews are spread across posts',
      description: 'Your best work and happy customer feedback gets buried in the timeline.'
    },
    {
      title: 'People may leave before calling or messaging',
      description: 'If contact info is hard to find, potential customers give up and move on.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Is Facebook your only website?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Facebook and Instagram are great for updates, but customers should not have to scroll through old posts to find your services, prices, photos, reviews, and contact info. A simple website gives your business one clean link to share everywhere.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
