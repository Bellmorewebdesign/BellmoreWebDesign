'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** vertical offset in px (positive = rises up) */
  y?: number;
  /** horizontal offset in px */
  x?: number;
  scale?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
}

/**
 * Lightweight scroll-triggered reveal built on transform + opacity only.
 * Renders static markup when the user prefers reduced motion.
 */
export default function ScrollReveal({
  children,
  className,
  y = 28,
  x = 0,
  scale = 1,
  delay = 0,
  duration = 0.7,
  once = true,
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: '-70px' }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
