'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** background color or gradient applied to the section */
  style?: React.CSSProperties;
}

/**
 * Section wrapper that softly reveals its contents on scroll.
 * Falls back to a static section under prefers-reduced-motion.
 */
export default function MotionSection({ children, className, id, style }: MotionSectionProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section id={id} className={className} style={style}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.75, ease: EASE }}
    >
      {children}
    </motion.section>
  );
}
