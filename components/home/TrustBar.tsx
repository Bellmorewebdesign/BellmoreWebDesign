import Link from 'next/link';
import { Reveal } from '../motion-primitives';
import { REAL_PROJECTS, TESTIMONIALS } from '../site/siteData';

export default function TrustBar() {
  const featured = TESTIMONIALS[0];

  return (
    <section className="bg-[#FAF7F0] px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-y border-[#EFE7DA]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6FA8DC]">
            Real websites for real local businesses
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <Reveal>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {REAL_PROJECTS.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover flex h-full flex-col items-center gap-2 rounded-2xl border border-[#E8DED0] bg-white p-4 text-center shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E86BC]"
                    aria-label={`Visit ${p.name} website`}
                  >
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-white font-bold shadow-soft"
                      style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                    >
                      {p.initials}
                    </span>
                    <span className="text-sm font-semibold text-[#1E2A38] leading-tight">{p.name}</span>
                    <span className="text-[11px] text-[#8A939B]">{p.industry}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="rounded-2xl bg-white border border-[#E8DED0] shadow-soft p-6">
              <div className="mb-2 text-[#C9A86A]" aria-hidden="true">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 017.17 9.5V6zm9 0a5.17 5.17 0 00-5.17 5.17V18h6.84v-6.83H14.5a1.67 1.67 0 011.67-1.67V6z" />
                </svg>
              </div>
              <blockquote className="text-[#1E2A38] leading-relaxed">“{featured.quote}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-[#5F6B73]">
                {featured.name}, {featured.business}
              </figcaption>
              <Link
                href="/work"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4E86BC] hover:text-[#1E2A38]"
              >
                See the work
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
