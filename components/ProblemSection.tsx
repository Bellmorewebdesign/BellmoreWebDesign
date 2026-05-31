'use client';

import { Reveal, Stagger, StaggerItem } from './motion-primitives';

const PROBLEMS = [
  {
    title: 'Services are hard to find',
    description: 'Customers scroll past dozens of posts trying to figure out what you actually offer.',
    accent: '#6FA8DC',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
    ),
  },
  {
    title: 'Photos get buried',
    description: 'Your best work disappears down the timeline a week after you post it.',
    accent: '#A8C3A0',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Reviews are scattered',
    description: 'Happy customers leave kind words, but they are spread across different posts and apps.',
    accent: '#D8BFA3',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.06 9.10c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    ),
  },
  {
    title: 'Contact info gets missed',
    description: 'If your phone, hours, or service area are hard to spot, people give up and move on.',
    accent: '#C9A86A',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">The problem</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Customers should not have to scroll through Facebook to understand your business
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((problem) => (
            <StaggerItem
              key={problem.title}
              className="card-hover group rounded-2xl bg-white p-7 border border-[#E8DED0] shadow-soft h-full"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl mb-5"
                style={{ backgroundColor: `${problem.accent}22` }}
              >
                <svg className="w-6 h-6" fill="none" stroke={problem.accent} viewBox="0 0 24 24">
                  {problem.icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2">{problem.title}</h3>
              <p className="text-[#5F6B73] text-sm leading-relaxed">{problem.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
