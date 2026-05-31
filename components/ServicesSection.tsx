'use client';

import { Reveal, Stagger, StaggerItem } from './motion-primitives';

const SERVICES = [
  {
    title: 'One-page business websites',
    description:
      'Clean, fast websites that put your services, photos, reviews, and contact info in one easy place customers can actually use.',
    accent: '#6FA8DC',
    featured: true,
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Website redesigns',
    description: 'Refresh an outdated or clunky site into something modern and mobile-friendly.',
    accent: '#A8C3A0',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    title: 'Contact and quote forms',
    description: 'Simple forms that send quote requests straight to you.',
    accent: '#D8BFA3',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Photo galleries',
    description: 'Show off your real work in galleries that load fast on phones.',
    accent: '#6FA8DC',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Mobile-friendly layouts',
    description: 'Sites that look right on phones, tablets, and computers without horizontal scrolling.',
    accent: '#C9A86A',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    title: 'Basic SEO setup',
    description: 'Proper page titles and descriptions so you can be found on Google.',
    accent: '#A8C3A0',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Ongoing small updates',
    description: 'Need a new photo, price, or service added later? I can help with that.',
    accent: '#6FA8DC',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">What I build</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Everything a small business website needs
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {SERVICES.map((service) => (
            <StaggerItem
              key={service.title}
              className={service.featured ? 'sm:col-span-2 lg:col-span-2' : ''}
            >
              <div
                className="card-hover group relative h-full overflow-hidden rounded-2xl bg-white p-7 border border-[#E8DED0] shadow-soft"
              >
                <span
                  className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: service.accent }}
                />
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-5 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${service.accent}1f` }}
                >
                  <svg className="w-6 h-6" fill="none" stroke={service.accent} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={service.icon} />
                  </svg>
                </div>
                <h3 className={`font-bold text-[#1E2A38] mb-2 ${service.featured ? 'text-2xl' : 'text-lg'}`}>
                  {service.title}
                </h3>
                <p className={`text-[#5F6B73] leading-relaxed ${service.featured ? 'text-base max-w-md' : 'text-sm'}`}>
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
