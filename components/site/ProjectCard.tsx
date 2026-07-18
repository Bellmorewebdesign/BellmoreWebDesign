import type { RealProject } from './siteData';

export default function ProjectCard({ project }: { project: RealProject }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover flex h-full flex-col rounded-2xl border border-[#E8DED0] bg-white p-6 shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E86BC]"
      aria-label={`Visit ${project.name} website`}
    >
      <div className="flex items-start gap-4">
        <span
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-white font-bold shadow-soft"
          style={{ background: `linear-gradient(135deg, ${project.from}, ${project.to})` }}
        >
          {project.initials}
        </span>
        <div className="min-w-0">
          <span className="inline-flex items-center rounded-full bg-[#A8C3A0]/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#4a6b47]">
            {project.label}
          </span>
          <h3 className="mt-1.5 text-lg font-bold text-[#1E2A38] leading-tight">{project.name}</h3>
          <p className="text-sm font-medium text-[#4E86BC]">{project.industry}</p>
        </div>
      </div>

      {project.location && (
        <p className="mt-4 flex items-start gap-1.5 text-sm text-[#5F6B73]">
          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#9AA4AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </p>
      )}

      <p className="mt-3 text-sm text-[#5F6B73] leading-relaxed flex-1">{project.description}</p>

      <span
        className="btn-press mt-5 inline-flex items-center justify-center gap-1.5 self-start rounded-full bg-[#1E2A38] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16212C]"
      >
        View Project
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </a>
  );
}
