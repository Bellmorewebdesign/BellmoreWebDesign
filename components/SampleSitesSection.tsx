'use client';

import { Reveal, Stagger, StaggerItem } from './motion-primitives';
import SamplePreviewCard from './SamplePreviewCard';
import { HOME_SAMPLES } from './samples/sampleData';

export default function SampleSitesSection() {
  return (
    <section id="sample-sites" className="bg-[#FFFDF7] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Sample sites</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[#1E2A38] md:text-4xl lg:text-[2.75rem]">
            Explore full sample concepts
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5F6B73]">
            Each sample is a complete website concept with its own brand, photos, and contact flow, built to show what
            your business could look like online.
          </p>
        </Reveal>

        <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
          {HOME_SAMPLES.map((sample) => (
            <StaggerItem key={sample.id} className="h-full">
              <SamplePreviewCard sample={sample} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
