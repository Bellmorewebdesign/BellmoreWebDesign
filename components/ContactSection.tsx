'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    message: '',
    company: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const GENERIC_ERROR = 'Something went wrong. Please try again or contact me directly.';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // The endpoint should always return JSON, but if Nginx/the server
      // returns an HTML error page (e.g. a 404), parsing will throw.
      // Handle that gracefully instead of crashing with "Unexpected token '<'".
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
          company: ''
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
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4">
            Want a free homepage mockup?
          </h2>
          <p className="text-xl text-[#5F6B73] max-w-2xl mx-auto leading-relaxed">
            Send your business name and current Facebook, Instagram, or website link. I'll take a look and let you know what kind of simple site could make sense.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border border-[#E8DED0] shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E8DED0] rounded-xl focus:ring-2 focus:ring-[#6FA8DC] focus:border-transparent bg-[#FAF7F0]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E8DED0] rounded-xl focus:ring-2 focus:ring-[#6FA8DC] focus:border-transparent bg-[#FAF7F0]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E8DED0] rounded-xl focus:ring-2 focus:ring-[#6FA8DC] focus:border-transparent bg-[#FAF7F0]"
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E8DED0] rounded-xl focus:ring-2 focus:ring-[#6FA8DC] focus:border-transparent bg-[#FAF7F0]"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                  Current Facebook, Instagram, or Website Link
                </label>
                <input
                  type="text"
                  id="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E8DED0] rounded-xl focus:ring-2 focus:ring-[#6FA8DC] focus:border-transparent bg-[#FAF7F0]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E8DED0] rounded-xl focus:ring-2 focus:ring-[#6FA8DC] focus:border-transparent resize-none bg-[#FAF7F0]"
                />
              </div>

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
                <div className={`p-4 rounded-xl ${statusMessage.type === 'success' ? 'bg-[#A8C3A0]/20 text-[#4a6b47]' : 'bg-red-100 text-red-700'}`}>
                  {statusMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#6FA8DC] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#5a8ec4] transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-sm text-[#5F6B73] text-center">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-[#6FA8DC]/10 to-[#A8C3A0]/10 rounded-xl p-8 mb-6 border border-[#E8DED0]">
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">Bellmore Web Design</h3>
              <div className="space-y-3 text-[#5F6B73]">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#6FA8DC] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Located in Nassau County, NY — serving all of NY</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#6FA8DC] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+15167252774" className="hover:text-[#6FA8DC] transition-colors">
                    516 725 2774
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E8DED0] shadow-sm">
              <h4 className="font-semibold text-[#1E2A38] mb-3">Not sure if you need a website?</h4>
              <p className="text-[#5F6B73] text-sm leading-relaxed">
                If your customers have to search through posts to find your prices, services, photos, or contact info, a simple website can help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
