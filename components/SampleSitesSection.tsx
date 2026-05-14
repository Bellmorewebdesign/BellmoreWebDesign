import Link from 'next/link';

export default function SampleSitesSection() {
  const sampleSites = [
    {
      title: 'South Shore Shine',
      description: 'Pressure washing sample. Fresh, water-inspired design with clean colors and energetic layout.',
      link: '/sample-sites/exterior-cleaning',
      color: 'from-cyan-600 to-blue-600',
      icon: '💧'
    },
    {
      title: 'Main Street Chicken Co.',
      description: 'Restaurant sample. Bold, food-focused design with warm colors and menu showcase.',
      link: '/sample-sites/restaurant',
      color: 'from-[#DC143C] to-[#8B0000]',
      icon: '🍗'
    },
    {
      title: 'Harbor Paws Pet Care',
      description: 'Pet care sample. Calm, trustworthy design with soft colors and personal care focus.',
      link: '/sample-sites/pet-care',
      color: 'from-[#8FBC8F] to-[#6B8E6B]',
      icon: '🐕'
    }
  ];

  return (
    <section id="sample-sites" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-6">
            Sample Sites You Can Explore
          </h2>
          <p className="text-xl text-[#5F6B73] max-w-3xl mx-auto leading-relaxed">
            I created sample concepts for different industries so you can see what a professional website could look like for your business. Each one has a different design style and personality.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {sampleSites.map((site, index) => (
            <Link key={index} href={site.link} className="group">
              <div className="bg-[#FFFDF7] rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-[#E8DED0] hover:scale-105">
                <div className={`h-48 bg-gradient-to-br ${site.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
                  </div>
                  <span className="text-8xl relative z-10">{site.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1E2A38] mb-3 group-hover:text-[#6FA8DC] transition-colors">
                    {site.title}
                  </h3>
                  <p className="text-[#5F6B73] mb-6 leading-relaxed">{site.description}</p>
                  <span className="text-[#6FA8DC] font-bold text-lg group-hover:underline inline-flex items-center">
                    View Sample Site →
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
