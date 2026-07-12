import { Reveal } from '../motion-primitives';
import { SERVICE_AREA } from './siteData';

export default function ServiceAreaSection({ tone = 'cream' }: { tone?: 'cream' | 'white' }) {
  const bg = tone === 'white' ? 'bg-[#FFFDF7]' : 'bg-[#FAF7F0]';

  return (
    <section id="service-area" className={`scroll-mt-24 ${bg} px-4 sm:px-6 lg:px-8 py-20 sm:py-24`}>
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-10 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Service area</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E2A38] leading-tight">
            Where I work
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          <Reveal className="rounded-2xl border border-[#E8DED0] bg-white p-7 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4E86BC]/10 text-[#4E86BC]">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" strokeWidth={1.7} />
                <path strokeLinecap="round" strokeWidth={1.7} d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-bold text-[#1E2A38]">Website design</h3>
            <p className="mt-2 text-[#5F6B73] leading-relaxed">{SERVICE_AREA.websites}</p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-[#E8DED0] bg-white p-7 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6B8E6B]/12 text-[#6B8E6B]">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-bold text-[#1E2A38]">On-site photography &amp; social content</h3>
            <p className="mt-2 text-[#5F6B73] leading-relaxed">{SERVICE_AREA.onSite}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SERVICE_AREA.towns.map((town) => (
                <li
                  key={town}
                  className="inline-flex items-center rounded-full bg-[#FAF7F0] border border-[#EFE7DA] px-3 py-1 text-xs font-medium text-[#5F6B73]"
                >
                  {town}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
