'use client';

import { Reveal, Stagger, StaggerItem } from './motion-primitives';

const PROJECTS = [
  {
    title: "Katie's Canines",
    description: 'A pet care and dog walking website for a local Long Island business.',
    link: 'https://katiescanines.com',
    theme: { from: '#A8C3A0', to: '#6B8E6B' },
    initials: 'KC',
  },
  {
    title: "Grandma's Garden",
    description: 'A warm small-business website for a local garden and homemade goods brand.',
    link: 'https://anonymous7624.github.io/GrandmasGarden/',
    theme: { from: '#D8BFA3', to: '#C9A86A' },
    initials: 'GG',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0]">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-10 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Real projects</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#1E2A38] leading-tight">
            Real projects
          </h2>
          <p className="mt-3 text-base text-[#5F6B73] leading-relaxed">
            A few real sites connected to local projects. The sample concepts above show the direction
            we can take for different industries.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <StaggerItem key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group flex items-center gap-4 rounded-2xl bg-white p-5 border border-[#E8DED0] shadow-soft h-full"
              >
                <span
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-white font-bold shadow-soft"
                  style={{ background: `linear-gradient(135deg, ${project.theme.from}, ${project.theme.to})` }}
                >
                  {project.initials}
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-[#1E2A38]">{project.title}</span>
                  <span className="block text-sm text-[#5F6B73] leading-snug">{project.description}</span>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#4E86BC]">
                    Visit site
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
