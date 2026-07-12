'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Reveal } from '../motion-primitives';
import { CASE_STUDIES, type CaseStudyImage } from './caseStudyData';

export default function CaseStudiesSection() {
  const [lightbox, setLightbox] = useState<CaseStudyImage | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    if (lightbox) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section id="case-studies" className="scroll-mt-24 bg-[#FAF7F0] px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Case studies</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E2A38] leading-tight">
            A closer look at the work
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            Featured projects with the website, the services performed, and — as shoots happen — real
            photos of the finished work.
          </p>
        </Reveal>

        <div className="space-y-8">
          {CASE_STUDIES.map((study) => (
            <Reveal key={study.slug}>
              <article className="overflow-hidden rounded-2xl border border-[#E8DED0] bg-white shadow-soft">
                <div className="p-7 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center rounded-full bg-[#A8C3A0]/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#4a6b47]">
                        Featured Client Project
                      </span>
                      <h3 className="mt-2 text-2xl font-bold text-[#1E2A38]">{study.name}</h3>
                      <p className="text-sm font-medium text-[#4E86BC]">{study.industry}</p>
                      {study.location && (
                        <p className="mt-1 text-sm text-[#8A939B]">{study.location}</p>
                      )}
                    </div>
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-press inline-flex items-center gap-1.5 rounded-full bg-[#1E2A38] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16212C]"
                    >
                      View Live Site
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>

                  <p className="mt-5 text-[#5F6B73] leading-relaxed max-w-2xl">{study.summary}</p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8A939B] mb-2">
                      What I did
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {study.services.map((s) => (
                        <li
                          key={s}
                          className="inline-flex items-center rounded-full border border-[#EFE7DA] bg-[#FAF7F0] px-3 py-1 text-xs font-medium text-[#5F6B73]"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Gallery — real images only. Empty studies show a coming-soon state. */}
                {study.images.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 border-t border-[#EFE7DA] p-1">
                    {study.images.map((img) => (
                      <button
                        key={img.src}
                        onClick={() => setLightbox(img)}
                        className="group relative block overflow-hidden bg-[#FAF7F0]"
                        aria-label={`Enlarge: ${img.alt}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {img.caption && (
                          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                            {img.caption}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="border-t border-[#EFE7DA] bg-[#FBF8F2] px-7 py-8 text-center">
                    <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#E8DED0] text-[#8A939B]">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 9a2 2 0 012-2h1.5l1-1.5A2 2 0 019.2 4.5h5.6a2 2 0 011.7.99L17.5 7H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <circle cx="12" cy="13" r="3.2" strokeWidth={1.6} />
                      </svg>
                    </span>
                    <p className="mt-3 text-sm font-medium text-[#5F6B73]">Project photos coming soon</p>
                    <p className="mt-1 text-xs text-[#8A939B]">
                      On-site photos and before/after shots will be added here after the next content visit.
                    </p>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
