import { Reveal, Stagger, StaggerItem } from '../motion-primitives';
import ProjectCard from '../site/ProjectCard';
import { REAL_PROJECTS } from '../site/siteData';

export default function RealProjectsSection() {
  return (
    <section id="client-projects" className="scroll-mt-24 bg-[#FFFDF7] px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Real client projects</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Live websites built for local businesses
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            Every project below is a real local business — visit any one to see the finished site.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 gap-5" stagger={0.1}>
          {REAL_PROJECTS.map((project) => (
            <StaggerItem key={project.name} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
