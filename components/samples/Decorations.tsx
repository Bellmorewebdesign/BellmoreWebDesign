'use client';

import { motion, useReducedMotion } from 'motion/react';

/** Subtle drifting water droplets for the pressure washing hero. */
export function WaterDroplets() {
  const reduce = useReducedMotion();
  const dots = [
    { left: '12%', top: '22%', size: 10, delay: 0 },
    { left: '28%', top: '64%', size: 7, delay: 0.6 },
    { left: '46%', top: '34%', size: 13, delay: 1.1 },
    { left: '63%', top: '70%', size: 8, delay: 0.3 },
    { left: '78%', top: '28%', size: 11, delay: 0.9 },
    { left: '88%', top: '58%', size: 6, delay: 1.4 },
  ];
  return (
    <>
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/40 ring-1 ring-white/40 backdrop-blur-[1px]"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
          animate={reduce ? {} : { y: [0, -14, 0], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
        />
      ))}
    </>
  );
}

/** Soft floating sparkles for the events hero. */
export function Sparkles() {
  const reduce = useReducedMotion();
  const stars = [
    { left: '14%', top: '30%', size: 16, delay: 0 },
    { left: '34%', top: '68%', size: 11, delay: 0.5 },
    { left: '58%', top: '24%', size: 18, delay: 1 },
    { left: '74%', top: '62%', size: 12, delay: 0.4 },
    { left: '86%', top: '38%', size: 14, delay: 0.8 },
  ];
  return (
    <>
      {stars.map((s, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          className="absolute text-white/70"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          animate={reduce ? {} : { scale: [0.7, 1, 0.7], opacity: [0.3, 0.85, 0.3], rotate: [0, 25, 0] }}
          transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          aria-hidden="true"
        >
          <path
            d="M12 2c.5 4.5 2 6 6.5 6.5C14 9 12.5 10.5 12 15c-.5-4.5-2-6-6.5-6.5C10 9 11.5 7.5 12 2z"
            fill="currentColor"
          />
        </motion.svg>
      ))}
    </>
  );
}
