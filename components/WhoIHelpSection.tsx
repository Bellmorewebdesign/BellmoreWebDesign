'use client';

import { Reveal, Stagger, StaggerItem } from './motion-primitives';

const INDUSTRIES = [
  { name: 'Pressure washing', color: '#6FA8DC', icon: 'M12 3v4m0 0a4 4 0 00-4 4c0 2 1.5 3 4 6 2.5-3 4-4 4-6a4 4 0 00-4-4z' },
  { name: 'Landscaping', color: '#A8C3A0', icon: 'M12 22V12m0 0c0-3 2-5 5-5 0 3-2 5-5 5zm0 0C9 9 7 7 4 7c0 3 2 5 8 5z' },
  { name: 'Pet care', color: '#D8BFA3', icon: 'M4.5 9.5a1.5 1.5 0 11.001-3.001A1.5 1.5 0 014.5 9.5zm5-3a1.5 1.5 0 11.001-3.001A1.5 1.5 0 019.5 6.5zm5 0a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0114.5 6.5zm5 3a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0119.5 9.5zM12 11c2.5 0 5 2.5 5 5a3 3 0 01-3 3c-.8 0-1.4-.3-2-.6-.6.3-1.2.6-2 .6a3 3 0 01-3-3c0-2.5 2.5-5 5-5z' },
  { name: 'Event planners', color: '#C9A86A', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { name: 'Restaurants and food trucks', color: '#6FA8DC', icon: 'M3 3h18v4H3zM5 7v13a1 1 0 001 1h12a1 1 0 001-1V7M9 11h6' },
  { name: 'Contractors', color: '#A8C3A0', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
  { name: 'Cleaning companies', color: '#D8BFA3', icon: 'M5 13l4 4L19 7M5 13v6a1 1 0 001 1h2' },
  { name: 'Mobile detailing', color: '#C9A86A', icon: 'M5 13l1-4a2 2 0 012-1.5h8A2 2 0 0116 9l1 4m-12 0h14m-14 0v3m14-3v3M7 16h.01M17 16h.01' },
  { name: 'Salons and barbers', color: '#6FA8DC', icon: 'M14.121 14.121L19 19m-7-7l1.879-1.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM6 6l8 8m-8 0a3 3 0 104.243 4.243A3 3 0 006 14z' },
  { name: 'Party rentals', color: '#A8C3A0', icon: 'M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6' },
];

export default function WhoIHelpSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Who I help</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Built for local service businesses
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            Good fit for local businesses that get customers from Facebook, Instagram, referrals, or
            Google searches.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" stagger={0.06}>
          {INDUSTRIES.map((item) => (
            <StaggerItem key={item.name}>
              <div className="card-hover group flex h-full flex-col items-center gap-3 rounded-2xl bg-white px-4 py-6 text-center border border-[#E8DED0] shadow-soft">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}1f` }}
                >
                  <svg className="w-6 h-6" fill="none" stroke={item.color} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={item.icon} />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#1E2A38] leading-snug">{item.name}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
