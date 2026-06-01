'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { SampleTheme } from '../samples/types';

const EASE = [0.22, 1, 0.36, 1] as const;

export interface BeforeAfterCardProps {
  title: string;
  tag: string;
  imageSrc: string;
  alt: string;
  description: string;
  theme: SampleTheme;
  index?: number;
}

/**
 * Premium before/after card for real comparison photos.
 * These images already have the before/after split built-in,
 * so we display them as-is with subtle enhancements.
 */
export default function BeforeAfterCard({
  title,
  tag,
  imageSrc,
  alt,
  description,
  theme,
  index = 0,
}: BeforeAfterCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="card-hover group overflow-hidden rounded-2xl bg-white shadow-premium ring-1 ring-black/5"
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASE, delay: (index % 2) * 0.12 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        
        {/* Overlay label */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            Before / After
          </span>
        </div>

        {/* Service tag badge */}
        <div className="absolute right-4 top-4">
          <span
            className="inline-flex rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white"
            style={{ backgroundColor: theme.accent }}
          >
            {tag}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3
          className="font-display text-lg font-bold leading-snug"
          style={{ color: theme.ink }}
        >
          {title}
        </h3>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: theme.muted }}
        >
          {description}
        </p>
      </div>
    </motion.article>
  );
}
