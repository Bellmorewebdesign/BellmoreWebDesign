import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '../motion-primitives';
import { SERVICES } from '../site/offerings';
import { SERVICE_ICON } from '../site/ServiceIcons';

export default function ServicesHome() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#FFFDF7] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">What I do</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            What I can help with
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            Websites, social media, and photography. You can get one of them or all three.
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6 items-stretch" stagger={0.12}>
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICON[service.id as keyof typeof SERVICE_ICON];
            return (
              <StaggerItem key={service.id} className="h-full">
                <div className="card-hover flex h-full flex-col rounded-2xl border border-[#E8DED0] bg-white p-7 shadow-soft">
                  <span
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-white shadow-soft"
                    style={{ background: service.accent }}
                  >
                    {Icon ? <Icon className="h-7 w-7" /> : null}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-[#1E2A38]">{service.name}</h3>
                  <p className="mt-2 text-sm text-[#5F6B73] leading-relaxed">{service.tagline}</p>
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#5F6B73]">
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0"
                          style={{ color: service.accent }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-8 mx-auto max-w-2xl rounded-2xl border border-[#E8DED0] bg-[#FAF7F0] px-6 py-4 text-center">
          <p className="text-sm text-[#5F6B73]">
            Social media and content (the photos and short videos) usually go together in one monthly plan.
          </p>
        </Reveal>

        <Reveal className="mt-6 text-center">
          <p className="text-[#5F6B73]">
            Not sure what you need?{' '}
            <Link href="/contact" className="font-semibold text-[#4E86BC] hover:text-[#1E2A38]">
              Get a free homepage mockup or content plan
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
