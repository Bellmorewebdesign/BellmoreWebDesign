import Link from 'next/link';

export default function SampleSitesSection() {
  const sampleSites = [
    {
      title: 'Exterior Cleaning Demo',
      description: 'A sample concept for pressure washing, window cleaning, and exterior cleaning companies.',
      link: '/sample-sites/exterior-cleaning',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Restaurant Demo',
      description: 'A sample concept for restaurants, food trucks, and small food businesses.',
      link: '/sample-sites/restaurant',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Pet Care Demo',
      description: 'A sample concept for dog walkers, dog boarding, daycare, and pet care businesses.',
      link: '/sample-sites/pet-care',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="sample-sites" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sample sites you can actually click
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I also made a few sample concept sites so business owners can see what their own site could look like. These are not real clients unless labeled as real projects.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {sampleSites.map((site, index) => (
            <Link key={index} href={site.link} className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className={`h-40 bg-gradient-to-br ${site.color} flex items-center justify-center`}>
                  <svg className="w-16 h-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {site.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{site.description}</p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    View Demo →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
