import { Reveal, Stagger, StaggerItem } from '../motion-primitives';
import { TESTIMONIALS } from '../site/siteData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#1E2A38] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9CC3E6]">In their words</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
            What local owners say
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-6" stagger={0.12}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.business} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl bg-white/5 border border-white/10 p-7 backdrop-blur-sm">
                <div className="mb-3 text-[#9CC3E6]" aria-hidden="true">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 017.17 9.5V6zm9 0a5.17 5.17 0 00-5.17 5.17V18h6.84v-6.83H14.5a1.67 1.67 0 011.67-1.67V6z" />
                  </svg>
                </div>
                <blockquote className="flex-1 text-lg text-white/90 leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#6FA8DC] to-[#4E86BC] font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{t.name}</span>
                    <span className="block text-sm text-white/60">{t.business}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
