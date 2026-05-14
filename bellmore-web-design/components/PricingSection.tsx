import PricingCard from './PricingCard';

export default function PricingSection() {
  const plans = [
    {
      title: 'Starter Website',
      price: 'Starting at $350',
      features: [
        'One-page mobile-friendly website',
        'Services section',
        'Photos or gallery',
        'Contact form',
        'Call or quote button',
        'Basic SEO setup'
      ]
    },
    {
      title: 'Website Refresh',
      price: 'Starting at $300',
      features: [
        'Cleaner modern design',
        'Better mobile layout',
        'Updated sections and copy',
        'Improved contact buttons',
        'Better organization'
      ]
    },
    {
      title: 'Optional Updates',
      price: '$25/month',
      features: [
        'Small text updates',
        'Photo changes',
        'Service updates',
        'Basic maintenance help'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple starting prices
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Final pricing depends on what your business needs. The homepage mockup is free.
          </p>
        </div>
      </div>
    </section>
  );
}
