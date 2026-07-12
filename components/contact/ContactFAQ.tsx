import FAQItem from '../FAQItem';
import { Reveal } from '../motion-primitives';
import { CONTACT_FAQS } from '../site/offerings';

export default function ContactFAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[#FFFDF7] px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6FA8DC]">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E2A38] leading-tight">
            Common questions
          </h2>
        </Reveal>

        <Reveal className="rounded-2xl bg-white border border-[#E8DED0] shadow-soft px-6 sm:px-9 py-2 sm:py-4">
          {CONTACT_FAQS.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
