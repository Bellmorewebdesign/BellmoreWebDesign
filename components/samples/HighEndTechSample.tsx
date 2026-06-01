'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useSpring } from 'motion/react';
import NovaStackLogo from '../sample-logos/NovaStackLogo';

const EASE = [0.22, 1, 0.36, 1] as const;

const SceneFallback = () => (
  <div className="relative flex h-full w-full items-center justify-center" aria-hidden="true">
    <div className="absolute h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
    <div className="relative flex flex-col gap-3">
      {['#22d3ee', '#3b82f6', '#8b5cf6'].map((c, i) => (
        <div
          key={i}
          className="animate-float-slow h-16 w-44 rounded-2xl border border-white/15 backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, ${c}55, ${c}11)`,
            boxShadow: `0 0 40px -8px ${c}`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  </div>
);

const HighEndTechScene = dynamic(() => import('../HighEndTechScene'), {
  ssr: false,
  loading: () => <SceneFallback />,
});

const ACCENT = '#3B82F6';

const features = [
  { title: 'Real-time dashboards', desc: 'Live metrics and views that update the moment your data does.', icon: 'M4 13h6V4H4v9zm0 7h6v-5H4v5zM14 20h6V11h-6v9zm0-16v5h6V4h-6z' },
  { title: 'AI workflow engine', desc: 'Describe an outcome and let intelligent automations route the work.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Secure team spaces', desc: 'Granular roles and encrypted workspaces for every team.', icon: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z' },
  { title: 'Cloud deployment', desc: 'Ship to global regions with one click and zero downtime.', icon: 'M3 15a4 4 0 014-4 5 5 0 019.6-1.5A4.5 4.5 0 1118 19H7a4 4 0 01-4-4z' },
  { title: 'Automations', desc: 'Trigger actions across tools without writing glue code.', icon: 'M12 6V3m0 18v-3m6-6h3M3 12h3m11.3-5.3l2.1-2.1M4.6 19.4l2.1-2.1m0-10.6L4.6 4.6m14.8 14.8l-2.1-2.1' },
  { title: 'Analytics', desc: 'Understand trends with cohorts, funnels, and forecasts.', icon: 'M3 3v18h18M7 14l3-3 3 3 5-5' },
];

const story = [
  { tag: 'Connect', title: 'Connect every source', desc: 'Bring data, tools, and teams into one shared, real-time layer.' },
  { tag: 'Automate', title: 'Automate the busywork', desc: 'Let the AI engine handle repetitive steps and hand-offs.' },
  { tag: 'Analyze', title: 'Analyze in real time', desc: 'See what is working with dashboards that never go stale.' },
  { tag: 'Scale', title: 'Scale with confidence', desc: 'Deploy globally with security and reliability built in.' },
];

const plans = [
  { name: 'Starter', price: '$0', cadence: '/mo', features: ['Up to 3 projects', 'Core dashboards', 'Community support'], highlight: false },
  { name: 'Growth', price: '$49', cadence: '/mo', features: ['Unlimited projects', 'AI workflow engine', 'Automations', 'Priority support'], highlight: true },
  { name: 'Enterprise', price: 'Custom', cadence: '', features: ['SSO & advanced security', 'Dedicated regions', 'Onboarding & SLA', 'Solutions team'], highlight: false },
];

const cares = [
  { title: 'Speed', desc: 'Built for teams that move fast and ship often.' },
  { title: 'Security', desc: 'Encryption, roles, and audit trails by default.' },
  { title: 'Reliability', desc: 'Resilient infrastructure you can depend on.' },
  { title: 'Better workflows', desc: 'Less context switching, more meaningful work.' },
];

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

function GlassButton({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  if (primary) {
    return (
      <a
        href={href}
        className="cta-shimmer btn-press inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold text-white shadow-lg"
        style={{ background: 'linear-gradient(120deg, #22d3ee, #3b82f6, #8b5cf6)' }}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className="gradient-border-btn btn-press inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-bold text-white"
    >
      {children}
    </a>
  );
}

export default function HighEndTechSample() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070B16] text-white">
      {/* scroll progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left"
        style={{ scaleX, background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)' }}
        aria-hidden="true"
      />

      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-techgrid" />
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070B16]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <NovaStackLogo />
            <span className="hidden rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300 sm:inline-block">
              High-End Concept
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="hidden text-sm font-medium text-white/60 transition-colors hover:text-white sm:inline">
              Back to Bellmore Web Design
            </Link>
            <GlassButton href="#demo">Request Demo</GlassButton>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            High-End Concept
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.04] sm:text-5xl lg:text-6xl">
            Build faster with{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              intelligent infrastructure
            </span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
            A fictional AI platform for teams that need speed, security, and scale.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GlassButton href="#platform" primary>
              View Platform
            </GlassButton>
            <GlassButton href="#demo">Request Demo</GlassButton>
          </div>
          <div className="mt-10 flex gap-8">
            <div>
              <p className="font-display text-2xl font-extrabold text-white">
                <Counter to={99} suffix=".9%" />
              </p>
              <p className="text-xs uppercase tracking-wider text-white/50">Uptime target</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-white">
                <Counter to={40} suffix="ms" />
              </p>
              <p className="text-xs uppercase tracking-wider text-white/50">Edge latency</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-white">
                <Counter to={12} suffix="+" />
              </p>
              <p className="text-xs uppercase tracking-wider text-white/50">Regions</p>
            </div>
          </div>
        </motion.div>

        {/* 3D scene / fallback */}
        <div className="relative h-[360px] sm:h-[440px] lg:h-[520px]" aria-hidden="true">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.02]" />
          {reduce ? <SceneFallback /> : <HighEndTechScene reduced={false} />}
        </div>
      </section>

      {/* feature cards */}
      <section id="platform" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">The platform</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Everything your team needs in one place
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/30 hover:bg-white/[0.06]"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: EASE, delay: (i % 3) * 0.08 }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300 ring-1 ring-white/10">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={f.icon} />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* sticky scroll storytelling */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">How it flows</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              {story[activeStep].title}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">{story[activeStep].desc}</p>
            <div className="mt-8 flex gap-2">
              {story.map((s, i) => (
                <span
                  key={s.tag}
                  className="h-1.5 flex-1 rounded-full transition-colors duration-300"
                  style={{ backgroundColor: i === activeStep ? ACCENT : 'rgba(255,255,255,0.12)' }}
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {story.map((s, i) => (
              <motion.div
                key={s.tag}
                onViewportEnter={() => setActiveStep(i)}
                viewport={{ margin: '-45% 0px -45% 0px' }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
              >
                <span
                  className="font-display text-5xl font-extrabold"
                  style={{ color: i === activeStep ? ACCENT : 'rgba(255,255,255,0.18)' }}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold">{s.tag}</h3>
                <p className="mt-2 text-white/60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* animated dashboard preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_0_80px_-30px_rgba(59,130,246,0.6)] sm:p-10">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-white/20" />
            <span className="h-3 w-3 rounded-full bg-white/20" />
            <span className="h-3 w-3 rounded-full bg-white/20" />
            <span className="ml-3 text-sm font-semibold text-white/50">NovaStack - Overview</span>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              { label: 'Active users', to: 18432, suffix: '' },
              { label: 'Workflows run', to: 9217, suffix: '' },
              { label: 'Avg response', to: 38, suffix: 'ms' },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-white/50">{m.label}</p>
                <p className="mt-2 font-display text-3xl font-extrabold text-cyan-300">
                  <Counter to={m.to} suffix={m.suffix} />
                </p>
              </div>
            ))}
          </div>
          {/* chart */}
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-end gap-2 sm:gap-3" style={{ height: 160 }}>
              {[42, 58, 47, 70, 63, 88, 76, 95, 84, 100, 91, 78].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md"
                  style={{ background: 'linear-gradient(180deg, #22d3ee, #3b82f6)' }}
                  initial={reduce ? false : { height: 0 }}
                  whileInView={reduce ? {} : { height: `${h}%` }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.04 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Plans</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Simple plans that scale with you
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur-sm ${
                p.highlight ? 'border-transparent bg-white/[0.06]' : 'border-white/10 bg-white/[0.03]'
              }`}
              initial={reduce ? false : { opacity: 0, y: 26 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
            >
              {p.highlight && (
                <>
                  <span className="gradient-border-btn pointer-events-none absolute inset-0 rounded-3xl" aria-hidden="true" />
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#070B16]">
                    Most popular
                  </span>
                </>
              )}
              <h3 className="font-display text-xl font-extrabold">{p.name}</h3>
              <p className="mt-2">
                <span className="font-display text-4xl font-extrabold">{p.price}</span>
                <span className="text-white/50">{p.cadence}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`btn-press mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold ${
                  p.highlight ? 'text-white' : 'text-white/90 ring-1 ring-white/20 hover:bg-white/5'
                }`}
                style={p.highlight ? { background: 'linear-gradient(120deg, #22d3ee, #3b82f6, #8b5cf6)' } : undefined}
              >
                {p.name === 'Enterprise' ? 'Contact sales' : 'Get started'}
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-white/40">Sample pricing shown for concept purposes only.</p>
      </section>

      {/* designed for teams */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Built for teams</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Designed for teams that care about
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cares.map((c, i) => (
            <motion.div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
            >
              <h3 className="font-display text-lg font-bold text-cyan-300">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* final CTA */}
      <section id="demo" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-violet-500/15 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <h2 className="relative font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            See what an advanced site can do
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/70">
            This is a high-end concept. Bellmore Web Design can build animated, interactive sites like this for your brand.
          </p>
          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <GlassButton href="/#contact" primary>
              Request Demo
            </GlassButton>
            <GlassButton href="/">Back to Bellmore Web Design</GlassButton>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-white/10 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <NovaStackLogo />
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(120deg, #22d3ee, #3b82f6, #8b5cf6)' }}
            >
              Back to Bellmore Web Design
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <p className="mt-8 max-w-2xl border-t border-white/10 pt-6 text-sm leading-relaxed text-white/45">
            High-end sample concept by Bellmore Web Design. This is not a real company.
          </p>
        </div>
      </footer>
    </div>
  );
}
