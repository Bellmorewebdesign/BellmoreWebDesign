'use client';

import { useState, FormEvent } from 'react';
import { Reveal } from './motion-primitives';

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl border border-[#E8DED0] bg-[#FAF7F0] text-[#1E2A38] placeholder-[#9AA4AB] transition-all duration-200 focus:bg-white focus:border-[#6FA8DC] focus:ring-4 focus:ring-[#6FA8DC]/15 focus:outline-none';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    message: '',
    company: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const GENERIC_ERROR = 'Something went wrong. Please try again or contact me directly.';

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim()) {
      setStatusMessage({ type: 'error', text: 'Please add your name.' });
      return;
    }
    if (!isValidEmail(formData.email)) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatusMessage({ type: 'error', text: 'Please add a short message.' });
      return;
    }

    setIsLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let data: { ok?: boolean; message?: string; error?: string } | null = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (response.ok && data) {
        setStatusMessage({ type: 'success', text: data.message || 'Thanks. Your message was sent.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          website: '',
          message: '',
          company: '',
        });
      } else {
        setStatusMessage({ type: 'error', text: (data && data.error) || GENERIC_ERROR });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMessage({ type: 'error', text: GENERIC_ERROR });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0]">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Get in touch</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Want a free homepage mockup?
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            Send your business info and we&apos;ll DM you back with what kind of site could make sense.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-7">
          <Reveal className="rounded-2xl bg-white border border-[#E8DED0] shadow-soft p-7 sm:p-9">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                    Name <span className="text-[#B91C1C]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                    Email <span className="text-[#B91C1C]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                  Current Facebook, Instagram, or Website Link
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className={INPUT_CLASS}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                  Message <span className="text-[#B91C1C]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${INPUT_CLASS} resize-none`}
                />
              </div>

              {/* Honeypot field, kept hidden from real users */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {statusMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl p-4 text-sm font-medium ${
                    statusMessage.type === 'success'
                      ? 'bg-[#A8C3A0]/20 text-[#4a6b47]'
                      : 'bg-[#B91C1C]/10 text-[#B91C1C]'
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-press w-full bg-[#1E2A38] text-white px-8 py-4 rounded-full text-base font-semibold shadow-premium hover:bg-[#16212C] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading && (
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                )}
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-center text-sm text-[#5F6B73]">We&apos;ll get back to you soon.</p>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className="rounded-2xl bg-[#1E2A38] text-white p-7 shadow-soft">
              <h3 className="text-xl font-bold mb-5">Bellmore Web Design</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#9CC3E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/80">
                    Located in Nassau County, NY
                    <br />
                    Serving all of NY
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-[#9CC3E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+15167252774" className="text-white/80 hover:text-white transition-colors">
                    516 725 2774
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-[#9CC3E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:bellmorewebdesign@gmail.com" className="text-white/80 hover:text-white transition-colors break-all">
                    bellmorewebdesign@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-[#E8DED0] shadow-soft p-7">
              <h4 className="font-bold text-[#1E2A38] mb-2">Not sure if you need a website?</h4>
              <p className="text-sm text-[#5F6B73] leading-relaxed">
                If customers have to search through posts to find your prices, services, photos, or
                contact info, a simple website can help.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
