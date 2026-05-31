'use client';

import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as const;

function FloatingCard({
  children,
  className,
  float,
  delay = 0,
  reduce,
}: {
  children: React.ReactNode;
  className: string;
  float: number;
  delay?: number;
  reduce: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14, scale: 0.94 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, float, 0] }}
        transition={
          reduce
            ? undefined
            : { duration: 5 + delay * 2, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function WebsitePreview() {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="relative w-full max-w-[520px]">
      {/* Glow / gradient backdrop */}
      <div className="absolute -inset-8 -z-10">
        <div className="absolute right-0 top-4 h-64 w-64 rounded-full bg-[#6FA8DC]/30 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-[#A8C3A0]/30 blur-3xl" />
      </div>

      {/* Desktop browser frame */}
      <div className="rounded-2xl bg-white shadow-premium border border-[#E8DED0] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#F4EFE6] border-b border-[#E8DED0]">
          <span className="w-3 h-3 rounded-full bg-[#E5867E]" />
          <span className="w-3 h-3 rounded-full bg-[#E8C56B]" />
          <span className="w-3 h-3 rounded-full bg-[#9CC592]" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-white/70 border border-[#E8DED0]" />
        </div>

        {/* Mini site */}
        <div className="bg-gradient-to-b from-white to-[#FAF7F0]">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#EFE7DA]">
            <div className="text-[13px] font-bold text-[#1E2A38]">Your Business</div>
            <div className="flex gap-3">
              <span className="h-1.5 w-8 rounded-full bg-[#D8C9B4]" />
              <span className="h-1.5 w-8 rounded-full bg-[#D8C9B4]" />
              <span className="h-1.5 w-8 rounded-full bg-[#6FA8DC]" />
            </div>
          </div>

          <div className="px-5 py-5">
            <div className="h-3 w-3/5 rounded-full bg-[#1E2A38]/80 mb-2" />
            <div className="h-2.5 w-2/5 rounded-full bg-[#C9BBA4] mb-4" />

            <div className="grid grid-cols-3 gap-2 mb-4">
              {['#6FA8DC', '#A8C3A0', '#D8BFA3'].map((c, i) => (
                <div key={i} className="rounded-lg border border-[#EFE7DA] bg-white p-2.5">
                  <div className="w-6 h-6 rounded-md mb-2" style={{ backgroundColor: c }} />
                  <div className="h-1.5 w-full rounded-full bg-[#E8DED0] mb-1" />
                  <div className="h-1.5 w-3/4 rounded-full bg-[#E8DED0]" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-1.5 mb-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-md bg-gradient-to-br from-[#E8DED0] to-[#D8C9B4]" />
              ))}
            </div>

            <div className="flex items-center justify-between rounded-xl bg-[#1E2A38] px-4 py-2.5">
              <div className="h-2 w-20 rounded-full bg-white/70" />
              <div className="h-5 w-16 rounded-lg bg-[#6FA8DC]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile phone preview in front */}
      <motion.div
        className="absolute -bottom-10 -left-6 sm:-left-10 w-28 sm:w-36"
        initial={reduce ? false : { opacity: 0, y: 20, rotate: -6 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
      >
        <div className="rounded-[1.4rem] bg-[#1E2A38] p-1.5 shadow-premium">
          <div className="rounded-[1rem] bg-white overflow-hidden">
            <div className="h-5 bg-[#1E2A38] flex items-center justify-center">
              <span className="h-1 w-8 rounded-full bg-white/40" />
            </div>
            <div className="p-2.5 space-y-2 bg-gradient-to-b from-white to-[#FAF7F0]">
              <div className="h-2 w-3/4 rounded-full bg-[#1E2A38]/70" />
              <div className="h-1.5 w-1/2 rounded-full bg-[#C9BBA4]" />
              <div className="grid grid-cols-2 gap-1.5">
                <div className="aspect-square rounded-md bg-[#6FA8DC]/30" />
                <div className="aspect-square rounded-md bg-[#A8C3A0]/40" />
              </div>
              <div className="h-5 rounded-lg bg-[#6FA8DC]" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating labeled chips */}
      <FloatingCard
        reduce={reduce}
        float={-8}
        delay={0.3}
        className="absolute -top-4 -right-3 sm:-right-6"
      >
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-premium border border-[#E8DED0]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6FA8DC]/15 text-[#4E86BC]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-xs font-semibold text-[#1E2A38]">Services</span>
        </div>
      </FloatingCard>

      <FloatingCard
        reduce={reduce}
        float={9}
        delay={0.5}
        className="absolute top-1/3 -right-4 sm:-right-10"
      >
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-premium border border-[#E8DED0]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A8C3A0]/20 text-[#6B8E6B]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 6h16v12H4z" />
            </svg>
          </span>
          <span className="text-xs font-semibold text-[#1E2A38]">Gallery</span>
        </div>
      </FloatingCard>

      <FloatingCard
        reduce={reduce}
        float={-7}
        delay={0.7}
        className="absolute bottom-6 -right-2 sm:-right-6"
      >
        <div className="rounded-xl bg-white px-3 py-2 shadow-premium border border-[#E8DED0]">
          <div className="flex gap-0.5 mb-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} className="w-3 h-3 text-[#E0B84B]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 00.95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 00-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1 1 0 00-1.18 0l-2.8 2.03c-.78.57-1.83-.2-1.54-1.12l1.07-3.29a1 1 0 00-.36-1.12L2.93 8.7c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 00.95-.69l1.07-3.29z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] font-semibold text-[#1E2A38]">Reviews</span>
        </div>
      </FloatingCard>

      <FloatingCard
        reduce={reduce}
        float={8}
        delay={0.4}
        className="absolute -bottom-6 right-10 sm:right-16"
      >
        <div className="flex items-center gap-2 rounded-full bg-[#1E2A38] px-3 py-2 shadow-premium">
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-semibold text-white">Contact</span>
        </div>
      </FloatingCard>
    </div>
  );
}
