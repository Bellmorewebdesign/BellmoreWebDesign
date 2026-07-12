'use client';

import { useRef, useState, FormEvent } from 'react';

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
  const phoneRef = useRef<HTMLInputElement>(null);
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
    // Email is optional. Only check the format if they typed something.
    if (formData.email.trim() && !isValidEmail(formData.email)) {
      nextErrors.email = 'That email does not look right. Fix it or leave it blank.';
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please add a phone number so I can reach you.';
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
        ['phone', phoneRef],
        ['message', messageRef],
      ];
      const firstInvalid = focusOrder.find(([field]) => nextErrors[field]);
      firstInvalid?.[1].current?.focus();
      return;
    }

    setIsLoading(true);
    setStatusMessage(null);

    try {
      // The backend requires a valid email, but the form treats email as optional.
      // When it's left blank, substitute a placeholder so the submission still goes
      // through and the alert still fires (I reply using the required phone number).
      // Only the email VALUE is substituted here; the payload keys are unchanged.
      const submission = {
        ...formData,
        email: formData.email.trim() ? formData.email : 'noemail@bellmorewebdesign.com',
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
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
    <div id="mockup-form" className="scroll-mt-24 rounded-2xl bg-white border border-[#E8DED0] shadow-soft p-7 sm:p-9">
      <h2 className="text-2xl font-bold text-[#1E2A38]">Request your free mockup</h2>
      <p className="mt-1.5 text-sm text-[#5F6B73]">
        Tell me a bit about your business. Let me know if you want a website, social media,
        photography, or some mix of them.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
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
              Email <span className="font-normal text-[#8A939B]">(optional)</span>
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={describedBy('email', 'email-hint')}
              className={inputClass('email')}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                {errors.email}
              </p>
            )}
            <p id="email-hint" className={HINT_CLASS}>
              Optional. Add it if you would rather I email you back.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className={LABEL_CLASS}>
              Phone <span className="text-[#B91C1C]" aria-hidden="true">*</span>
            </label>
            <input
              ref={phoneRef}
              type="tel"
              id="phone"
              name="phone"
              required
              aria-required="true"
              autoComplete="tel"
              inputMode="tel"
              placeholder="(516) 555-0123"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={describedBy('phone', 'phone-hint')}
              className={inputClass('phone')}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                {errors.phone}
              </p>
            )}
            <p id="phone-hint" className={HINT_CLASS}>
              Best way to reach you. I can call or text.
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
            placeholder="What does your business do, and are you interested in a website, social media, photography, or a mix?"
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
    </div>
  );
}
