'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Reveal, Stagger, StaggerItem } from './motion-primitives';

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    number: '1',
    title: 'I look at your current page',
    description: 'I check your Facebook, Instagram, website, or Google listing to see what customers see now.',
  },
  {
    number: '2',
    title: 'I make a free homepage mockup',
    description: 'I build a homepage concept so you can see what your business could look like online.',
  },
  {
    number: '3',
    title: 'You review the design',
    description: 'Tell me what you like, what you want changed, or whether you are all set.',
  },
  {
    number: '4',
    title: 'I build the full site',
    description: 'If you like the mockup, I turn it into a clean mobile-friendly website you can share.',
  },
];

export default function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">How it works</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            A simple, no-pressure process
          </h2>
        </Reveal>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-[#E8DED0]">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-[#4E86BC] via-[#6FA8DC] to-[#A8C3A0]"
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.1, ease: EASE }}
            />
          </div>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6" stagger={0.14}>
            {STEPS.map((step) => (
              <StaggerItem key={step.number} className="relative">
                <div className="flex flex-col items-center text-center lg:px-2">
                  <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E2A38] text-white text-xl font-bold shadow-premium ring-4 ring-[#FFFDF7]">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#1E2A38] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#5F6B73] leading-relaxed max-w-[16rem]">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
