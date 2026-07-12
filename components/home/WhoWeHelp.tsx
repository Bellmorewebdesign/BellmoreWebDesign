import { Reveal, Stagger, StaggerItem } from '../motion-primitives';
import { INDUSTRIES } from '../site/siteData';

export default function WhoWeHelp() {
  return (
    <section className="bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0] px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Who I help</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E2A38] leading-tight">
            Built for local service businesses
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            Most of my clients get found by word of mouth or social media. A website makes it easier for
            those customers to pick you. A few examples:
          </p>
        </Reveal>

        <Stagger className="mt-8 flex flex-wrap justify-center gap-2.5" stagger={0.04}>
          {INDUSTRIES.map((industry) => (
            <StaggerItem key={industry}>
              <span className="inline-flex items-center rounded-full border border-[#E8DED0] bg-white px-4 py-2 text-sm font-medium text-[#1E2A38] shadow-soft">
                {industry}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-6">
          <p className="text-sm text-[#8A939B]">Plus plenty of other local businesses. Not on the list? It probably still works.</p>
        </Reveal>
      </div>
    </section>
  );
}
