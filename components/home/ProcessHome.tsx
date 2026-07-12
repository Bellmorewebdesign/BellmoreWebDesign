import { Reveal, Stagger, StaggerItem } from '../motion-primitives';
import { PROCESS_STEPS } from '../site/offerings';

export default function ProcessHome() {
  return (
    <section id="process" className="scroll-mt-24 bg-[#FFFDF7] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">How it works</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            A simple, no-pressure process
          </h2>
        </Reveal>

        <Stagger className="grid gap-4 sm:gap-5" stagger={0.1}>
          {PROCESS_STEPS.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="flex items-start gap-4 rounded-2xl border border-[#E8DED0] bg-white p-5 sm:p-6 shadow-soft">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1E2A38] text-base font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-[#1E2A38]">{step.title}</h3>
                  <p className="mt-1 text-sm text-[#5F6B73] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
