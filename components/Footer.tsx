'use client';

import Link from 'next/link';
import { Reveal } from './motion-primitives';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Brand + final CTA band */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] to-[#FFFDF7] px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <Reveal className="relative max-w-3xl mx-auto text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/straight_logo_transparent.png"
            alt="Bellmore Web Design"
            className="mx-auto mb-6 w-[180px] sm:w-[210px] h-auto"
            width={210}
            height={68}
            loading="lazy"
          />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">
            Professional Websites
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E2A38] leading-tight">
            Ready to see what your business could look like?
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73]">
            Clean, mobile-friendly websites for local businesses in Nassau County, NY.
          </p>
          <a
            href="#contact"
            className="btn-press mt-8 inline-flex items-center justify-center rounded-full bg-[#1E2A38] px-8 py-4 text-base font-semibold text-white shadow-premium hover:bg-[#16212C]"
          >
            Get a Free Mockup
          </a>
        </Reveal>
      </section>

      {/* Dark footer */}
      <div className="bg-[#16212C] text-white px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            <div>
              <h3 className="text-lg font-bold mb-2">Bellmore Web Design</h3>
              <p className="text-sm text-white/60">Clean websites for local businesses</p>
              <p className="mt-3 text-sm text-white/60">Nassau County, NY</p>
              <p className="mt-1 text-sm">
                <a href="tel:+15167252774" className="text-white/70 hover:text-white transition-colors">
                  516 725 2774
                </a>
              </p>
              <p className="mt-1 text-sm">
                <a href="mailto:bellmorewebdesign@gmail.com" className="text-white/70 hover:text-white transition-colors break-all">
                  bellmorewebdesign@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Services</a></li>
                <li><a href="#process" className="text-white/60 hover:text-white transition-colors">Process</a></li>
                <li><a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-white/60 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Sample Sites</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/sample-sites/exterior-cleaning" className="text-white/60 hover:text-white transition-colors">Pressure Washing</Link></li>
                <li><Link href="/sample-sites/restaurant" className="text-white/60 hover:text-white transition-colors">Restaurant</Link></li>
                <li><Link href="/sample-sites/pet-care" className="text-white/60 hover:text-white transition-colors">Pet Care</Link></li>
                <li><Link href="/sample-sites/events" className="text-white/60 hover:text-white transition-colors">Event Setup</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Real Projects</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="https://katiescanines.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    Katie&apos;s Canines
                  </a>
                </li>
                <li>
                  <a href="https://anonymous7624.github.io/GrandmasGarden/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    Grandma&apos;s Garden
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>&copy; {year} Bellmore Web Design. Built by Bellmore Web Design.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
