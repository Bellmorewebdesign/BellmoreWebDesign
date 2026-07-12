import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '../motion-primitives';
import { HOME_SAMPLES } from '../samples/sampleData';

export default function SampleConceptsSection() {
  return (
    <section id="sample-concepts" className="scroll-mt-24 bg-[#FAF7F0] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-[#EFE7DA]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">Sample website concepts</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E2A38] leading-tight">
            Design directions for different industries
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            These concepts demonstrate different design directions and are not presented as completed
            client projects.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {HOME_SAMPLES.map((sample) => (
            <StaggerItem key={sample.id} className="h-full">
              <Link
                href={sample.href}
                className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8DED0] bg-white shadow-soft"
              >
                <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${sample.accent}, ${sample.accentDark})` }} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white"
                      style={{ background: sample.accent }}
                    >
                      Sample Concept
                    </span>
                    <span className="text-xs font-medium text-[#8A939B]">{sample.industry}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#1E2A38]">{sample.name}</h3>
                  <p className="mt-1 text-sm text-[#5F6B73] leading-relaxed flex-1">{sample.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4E86BC]">
                    View concept
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
