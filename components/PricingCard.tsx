interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

export default function PricingCard({ title, price, features, featured, badge }: PricingCardProps) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl p-8 transition-shadow ${
        featured
          ? 'bg-[#1E2A38] text-white shadow-premium lg:scale-[1.04] lg:-my-2 border border-[#1E2A38]'
          : 'bg-white text-[#1E2A38] shadow-soft border border-[#E8DED0]'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4E86BC] to-[#6FA8DC] px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-soft">
          {badge}
        </span>
      )}

      <h3 className={`text-xl font-bold ${featured ? 'text-white' : 'text-[#1E2A38]'}`}>{title}</h3>
      <div className={`mt-2 mb-6 text-3xl font-extrabold ${featured ? 'text-white' : 'text-[#1E2A38]'}`}>
        {price}
      </div>

      <ul className="space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <svg
              className={`mt-0.5 h-5 w-5 flex-shrink-0 ${featured ? 'text-[#9CC592]' : 'text-[#6B8E6B]'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-sm ${featured ? 'text-white/85' : 'text-[#5F6B73]'}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`btn-press mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${
          featured
            ? 'bg-white text-[#1E2A38] hover:bg-[#F4EFE6]'
            : 'bg-[#1E2A38] text-white hover:bg-[#16212C]'
        }`}
      >
        Get a Free Mockup
      </a>
    </div>
  );
}
