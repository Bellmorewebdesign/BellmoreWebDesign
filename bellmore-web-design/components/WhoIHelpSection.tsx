export default function WhoIHelpSection() {
  const businesses = [
    'Cleaning companies',
    'Pressure washing businesses',
    'Dog walkers and pet care',
    'Event planners',
    'Food trucks and restaurants',
    'Contractors and home services',
    'Mobile detailing',
    'Hair, beauty, and barber services',
    'Preschools and tutoring',
    'Party rentals and entertainment',
    'Coffee trucks',
    'Pest control companies',
    'Local bands and performers'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for local service businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            If your business gets customers from Facebook, Instagram, referrals, or Google searches, a simple website can help people understand what you offer faster.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {businesses.map((business, index) => (
            <div key={index} className="bg-blue-50 rounded-lg px-4 py-3 text-center">
              <span className="text-gray-800 font-medium text-sm">{business}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
