import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '../motion-primitives';
import ProjectCard from '../site/ProjectCard';
import { REAL_PROJECTS } from '../site/siteData';

export default function RealWorkPreview() {
  return (
    <section id="work-preview" className="scroll-mt-24 bg-[#FAF7F0] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Recent work</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Real projects for real local clients
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            These are live websites built for local businesses — not sample concepts.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 gap-5" stagger={0.1}>
          {REAL_PROJECTS.map((project) => (
            <StaggerItem key={project.name} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 text-center">
          <Link
            href="/work"
            className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-[#E8DED0] bg-white px-7 py-3.5 text-base font-semibold text-[#1E2A38] shadow-soft hover:border-[#6FA8DC]"
          >
            See the full Work page
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
