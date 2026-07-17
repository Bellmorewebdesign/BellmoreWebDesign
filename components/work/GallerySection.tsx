'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Reveal } from '../motion-primitives';
import { GALLERY_IMAGES, type GalleryImage } from './galleryData';

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const hasImages = GALLERY_IMAGES.length > 0;

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
    <section id="gallery" className="scroll-mt-24 bg-[#FFFDF7] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-[#EFE7DA]">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Content gallery</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E2A38] leading-tight">
            Photos and video from the businesses I work with
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            A running mix of the on-site photos and short videos I shoot for social media and websites,
            pulled from across all my clients.
          </p>
        </Reveal>

        {hasImages ? (
          <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {GALLERY_IMAGES.map((img) => (
              <button
                key={img.src}
                onClick={() => setLightbox(img)}
                className="group relative block overflow-hidden rounded-xl bg-[#FAF7F0]"
                aria-label={`Enlarge: ${img.alt}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {(img.caption || img.business) && (
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {img.caption || img.business}
                  </span>
                )}
              </button>
            ))}
          </Reveal>
        ) : (
          <Reveal>
            {/* Intentional placeholder grid so the section reads as "coming soon" without stock photos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-[#E0D6C6] bg-[#FBF8F2]"
                >
                  <svg className="h-7 w-7 text-[#CDBCA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M3 9a2 2 0 012-2h1.5l1-1.5A2 2 0 019.2 4.5h5.6a2 2 0 011.7.99L17.5 7H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <circle cx="12" cy="13" r="3.2" strokeWidth={1.4} />
                  </svg>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-sm text-[#8A939B]">
              This fills up as I shoot new content. Fresh photos and clips are on the way.
            </p>
          </Reveal>
        )}
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
