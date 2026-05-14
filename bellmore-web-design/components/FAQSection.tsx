import FAQItem from './FAQItem';

export default function FAQSection() {
  const faqs = [
    {
      question: 'Do I need a website if I already use Facebook?',
      answer: 'Facebook is useful for updates, but a website gives customers one clean place to find your services, photos, reviews, contact info, and quote button.'
    },
    {
      question: 'Is the homepage mockup really free?',
      answer: 'Yes. I make a rough homepage concept first so you can see the idea before deciding anything.'
    },
    {
      question: 'How long does a simple website take?',
      answer: 'Most simple one-page websites can be finished pretty quickly once the business info, photos, and contact details are ready.'
    },
    {
      question: 'Can you update the site later?',
      answer: 'Yes. I can help with small updates like changing photos, services, prices, or service areas.'
    },
    {
      question: 'What do I need to provide?',
      answer: 'Usually your business name, services, photos, contact info, service area, and any reviews or examples you want included.'
    },
    {
      question: 'Can you help if I already have a website?',
      answer: 'Yes. If your current site is outdated, broken, slow, or hard to use on mobile, I can help redesign it into something cleaner.'
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions business owners usually ask
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
