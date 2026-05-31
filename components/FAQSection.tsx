'use client';

import FAQItem from './FAQItem';
import { Reveal } from './motion-primitives';

const FAQS = [
  {
    question: 'Do I need a website if I already use Facebook?',
    answer:
      'Facebook is great for updates, but a website gives customers one clean place to find your services, photos, reviews, contact info, and a quote button without scrolling through old posts.',
  },
  {
    question: 'Is the homepage mockup really free?',
    answer:
      'Yes. I build a homepage concept first so you can see the idea before deciding anything. There is no cost and no obligation to continue.',
  },
  {
    question: 'How long does a simple website take?',
    answer:
      'Most simple one-page websites come together quickly once your business info, photos, and contact details are ready to go.',
  },
  {
    question: 'Can you update the site later?',
    answer:
      'Yes. I can help with small updates like changing photos, services, prices, or the areas you serve.',
  },
  {
    question: 'What do I need to provide?',
    answer:
      'Usually your business name, services, photos, contact info, service area, and any reviews or examples you would like included.',
  },
  {
    question: 'Can you help if I already have a website?',
    answer:
      'Yes. If your current site is outdated, slow, or hard to use on mobile, I can redesign it into something cleaner and easier to use.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7]">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2A38] leading-tight">
            Questions business owners ask
          </h2>
        </Reveal>

        <Reveal className="rounded-2xl bg-white border border-[#E8DED0] shadow-soft px-6 sm:px-9 py-2 sm:py-4">
          {FAQS.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
