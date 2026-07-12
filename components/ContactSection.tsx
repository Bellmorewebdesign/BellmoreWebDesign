'use client';

import { useRef, useState, FormEvent } from 'react';
import { Reveal } from './motion-primitives';

type FieldName = 'name' | 'email' | 'phone' | 'business' | 'website' | 'message';

const BASE_INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl border bg-[#FAF7F0] text-[#1E2A38] placeholder-[#9AA4AB] transition-all duration-200 focus:bg-white focus:outline-none';
const OK_INPUT_CLASS =
  'border-[#E8DED0] focus:border-[#6FA8DC] focus:ring-4 focus:ring-[#6FA8DC]/15';
const ERROR_INPUT_CLASS =
  'border-[#B91C1C] focus:border-[#B91C1C] focus:ring-4 focus:ring-[#B91C1C]/15';
const LABEL_CLASS = 'block text-sm font-semibold text-[#1E2A38] mb-2';
const HINT_CLASS = 'mt-1.5 text-xs text-[#8A939B]';

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
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const GENERIC_ERROR = 'Something went wrong. Please try again or contact me directly.';

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  // Update a single field and clear its inline error as the user types.
  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as FieldName];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors: Partial<Record<FieldName, string>> = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please add your name.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please add your email so I can reply.';
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Please add a short message.';
    }
    return nextErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side validation with inline, per-field feedback.
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage(null);
      const focusOrder: Array<[FieldName, React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>]> = [
        ['name', nameRef],
        ['email', emailRef],
        ['message', messageRef],
      ];
      const firstInvalid = focusOrder.find(([field]) => nextErrors[field]);
      firstInvalid?.[1].current?.focus();
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
        setErrors({});
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

  const inputClass = (field: FieldName) =>
    `${BASE_INPUT_CLASS} ${errors[field] ? ERROR_INPUT_CLASS : OK_INPUT_CLASS}`;

  const describedBy = (field: FieldName, hintId?: string) =>
    [errors[field] ? `${field}-error` : null, hintId].filter(Boolean).join(' ') || undefined;

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0]"
    >
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto">
        <Reveal className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">Get in touch</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Want a free homepage mockup?
          </h2>
          <p className="mt-4 text-lg text-[#5F6B73] leading-relaxed">
            Tell me a little about your business and I&apos;ll send back a free idea for what your
            site could look like&mdash;no pressure, no obligation.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-7">
          <Reveal className="rounded-2xl bg-white border border-[#E8DED0] shadow-soft p-7 sm:p-9">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <p className="text-sm text-[#5F6B73]">
                Fields marked <span className="text-[#B91C1C] font-semibold">*</span> are required.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={LABEL_CLASS}>
                    Name <span className="text-[#B91C1C]" aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={describedBy('name')}
                    className={inputClass('name')}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className={LABEL_CLASS}>
                    Email <span className="text-[#B91C1C]" aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={describedBy('email')}
                    className={inputClass('email')}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className={LABEL_CLASS}>
                    Phone <span className="font-normal text-[#8A939B]">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(516) 555-0123"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    aria-describedby={describedBy('phone', 'phone-hint')}
                    className={inputClass('phone')}
                  />
                  <p id="phone-hint" className={HINT_CLASS}>
                    Prefer a call or text back? Add your number.
                  </p>
                </div>
                <div>
                  <label htmlFor="business" className={LABEL_CLASS}>
                    Business name <span className="font-normal text-[#8A939B]">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    autoComplete="organization"
                    placeholder="South Shore Shine"
                    value={formData.business}
                    onChange={(e) => updateField('business', e.target.value)}
                    aria-describedby={describedBy('business')}
                    className={inputClass('business')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className={LABEL_CLASS}>
                  Facebook, Instagram, or website link{' '}
                  <span className="font-normal text-[#8A939B]">(optional)</span>
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  autoComplete="url"
                  placeholder="facebook.com/yourbusiness"
                  value={formData.website}
                  onChange={(e) => updateField('website', e.target.value)}
                  aria-describedby={describedBy('website', 'website-hint')}
                  className={inputClass('website')}
                />
                <p id="website-hint" className={HINT_CLASS}>
                  Anywhere I can see your business now helps me tailor the mockup.
                </p>
              </div>

              <div>
                <label htmlFor="message" className={LABEL_CLASS}>
                  Message <span className="text-[#B91C1C]" aria-hidden="true">*</span>
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  rows={4}
                  placeholder="What does your business do, and what would you love a website to help with?"
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={describedBy('message')}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Honeypot field, kept hidden from real users. Preserves the exact
                  "company" key the backend uses for spam filtering. */}
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
                  className={`flex items-start gap-3 rounded-xl p-4 text-sm font-medium ${
                    statusMessage.type === 'success'
                      ? 'bg-[#A8C3A0]/20 text-[#4a6b47]'
                      : 'bg-[#B91C1C]/10 text-[#B91C1C]'
                  }`}
                >
                  <span aria-hidden="true" className="mt-0.5">
                    {statusMessage.type === 'success' ? (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      </svg>
                    )}
                  </span>
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="cta-shimmer btn-press w-full bg-[#1E2A38] text-white px-8 py-4 rounded-full text-base font-semibold shadow-premium hover:bg-[#16212C] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading && (
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                )}
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-center text-sm text-[#5F6B73]">
                I usually reply within one business day. Your details are only used to get back to you.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className="rounded-2xl bg-[#1E2A38] text-white p-7 shadow-soft">
              <h3 className="text-xl font-bold mb-5">Bellmore Web Design</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#9CC3E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                  <svg className="h-5 w-5 flex-shrink-0 text-[#9CC3E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+15167252774" className="text-white/80 hover:text-white transition-colors">
                    516 725 2774
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-[#9CC3E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:bellmorewebdesign@gmail.com" className="text-white/80 hover:text-white transition-colors break-all">
                    bellmorewebdesign@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-[#E8DED0] shadow-soft p-7">
              <h4 className="font-bold text-[#1E2A38] mb-4">What happens next</h4>
              <ol className="space-y-3 text-sm text-[#5F6B73]">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#6FA8DC]/15 text-xs font-bold text-[#4E86BC]">
                    1
                  </span>
                  <span>You send a few details about your business.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#6FA8DC]/15 text-xs font-bold text-[#4E86BC]">
                    2
                  </span>
                  <span>I reply with a free homepage mockup idea.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#6FA8DC]/15 text-xs font-bold text-[#4E86BC]">
                    3
                  </span>
                  <span>If you like it, we talk about building the real thing.</span>
                </li>
              </ol>
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
