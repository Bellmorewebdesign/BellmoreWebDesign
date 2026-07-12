import Link from 'next/link';
import Logo from './site/Logo';
import { CONTACT, REAL_PROJECTS } from './site/siteData';

const EXPLORE = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
];

const WORK_LINKS = [
  { label: 'Client Projects', href: '/work#client-projects' },
  { label: 'Case Studies', href: '/work#case-studies' },
  { label: 'Sample Concepts', href: '/work#sample-concepts' },
];

const SERVICE_LINKS = [
  { label: 'Website Design', href: '/#services' },
  { label: 'Social Media Management', href: '/#services' },
  { label: 'Photography & Content', href: '/#services' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#16212C] text-white">
      {/* Compact final CTA strip, present on every page */}
      <div className="border-b border-white/10 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-lg sm:text-xl font-bold">
            Ready to improve how your business looks online?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="btn-press inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E2A38] hover:bg-[#F4EFE6]"
            >
              Get a Free Mockup
            </Link>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="btn-press inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Call or Text
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            <div>
              <Logo tone="light" />
              <p className="mt-4 text-sm text-white/60 leading-relaxed">
                Websites, social media, and on-site photography for local small businesses.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                <li>
                  <a href={`tel:${CONTACT.phoneTel}`} className="text-white/70 hover:text-white transition-colors">
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="text-white/70 hover:text-white transition-colors break-all">
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.9.07s-3.63 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2zm0 1.98c-3.15 0-3.52.01-4.76.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.6-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.6.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.6.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.38-.32-1.7a2.86 2.86 0 00-.68-1.06 2.86 2.86 0 00-1.06-.68c-.32-.13-.8-.28-1.7-.32-1.24-.06-1.6-.07-4.76-.07zm0 3.37a4.45 4.45 0 110 8.9 4.45 4.45 0 010-8.9zm0 7.34a2.89 2.89 0 100-5.78 2.89 2.89 0 000 5.78zm5.66-7.56a1.04 1.04 0 11-2.08 0 1.04 1.04 0 012.08 0z" />
                    </svg>
                    {CONTACT.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Explore</h4>
              <ul className="space-y-2.5 text-sm">
                {EXPLORE.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/60 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Work</h4>
              <ul className="space-y-2.5 text-sm">
                {WORK_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/60 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold mb-4 mt-6 text-white/90">Services</h4>
              <ul className="space-y-2.5 text-sm">
                {SERVICE_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/60 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Client Projects</h4>
              <ul className="space-y-2.5 text-sm">
                {REAL_PROJECTS.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-white/5 p-4">
                <p className="text-xs text-white/60 leading-relaxed">
                  Websites throughout New York. On-site photography &amp; social content near Bellmore,
                  generally within about a 30-minute drive.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>&copy; {year} Bellmore Web Design. All rights reserved.</p>
          </div>

          {/* Clearance so the mobile sticky action bar never covers the footer */}
          <div className="h-16 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
