'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { SampleTheme } from './samples/types';

const EASE = [0.22, 1, 0.36, 1] as const;

export interface GalleryImage {
  src: string;
  alt: string;
}

export default function SampleGallery({
  images,
  theme,
}: {
  images: GalleryImage[];
  theme: SampleTheme;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="columns-2 gap-3 sm:gap-4 md:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4">
      {images.map((img, i) => (
        <motion.figure
          key={img.src}
          className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: `linear-gradient(to top, ${theme.accentDark}55, transparent 55%)` }}
          />
        </motion.figure>
      ))}
    </div>
  );
}
