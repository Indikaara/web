import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import collectionsBg from '../assets/collections-bg.png';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What products does Indikaara offer?",
    answer: "Indikaara specializes in authentic Indian handicrafts, including rugs, wall hangings, home decor, and more—sourced directly from skilled artisans across India."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we deliver worldwide, with a focus on the UK, Europe, and the Gulf region. We handle all logistics and customs for a seamless experience."
  },
  {
    question: "How can I place a custom order?",
    answer: <>You can request a custom order by contacting us through our <Link to="/contact" className="text-blue-700 hover:underline">Contact Us</Link> page. Our team will assist you with your requirements.</>
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit/debit cards, bank transfers, and select international payment gateways. For bulk or B2B orders, please contact us for details."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is shipped, you will receive a tracking number via email. You can also contact our support team for updates."
  },
  {
    question: "Can I become a retail or distribution partner?",
    answer: <>Absolutely! We welcome partnerships. Please visit our <Link to="/contact" className="text-blue-700 hover:underline">Contact Us</Link> page to get in touch for B2B or wholesale enquiries.</>
  },
  {
    question: "Are your products handmade?",
    answer: "Yes, all our products are handmade by skilled artisans using traditional techniques passed down through generations."
  },
  {
    question: "Can I request a sample before placing a bulk order?",
    answer: "Yes, we offer samples for most products. Please contact us with your requirements and we will assist you with the process."
  },
  {
    question: "How do I care for my handmade products?",
    answer: "Care instructions are provided with each product. For most items, gentle cleaning and avoiding harsh chemicals is recommended to preserve their beauty and longevity."
  },
  {
    question: "Do you offer gift wrapping or personalized notes?",
    answer: "Yes, we offer gift wrapping and can include personalized notes upon request. Please mention your preferences during checkout or contact us after placing your order."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns for damaged or incorrect items. Please contact us within 7 days of delivery with your order details and photos of the issue."
  },
  {
    question: "Still have questions?",
    answer: <>If your question isn't listed here, please <Link to="/contact" className="text-blue-700 hover:underline">contact us</Link> and our team will be happy to help.</>
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-black" 
            style={{
              backgroundImage: `url(${collectionsBg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}>
        <section 
          className="w-full max-w-3xl bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 mx-auto animate-on-scroll"
          aria-labelledby="faq-title"
        >
          <h1 id="faq-title" className="text-4xl md:text-5xl font-display font-bold text-center text-[#331211] mb-8">
            Frequently Asked Questions
          </h1>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className={`border-b border-gray-300 pb-4 group ${index === faqItems.length - 1 ? '' : 'border-b'}`}
                open={openItems[index]}
                onClick={(e) => {
                  e.preventDefault();
                  toggleItem(index);
                }}
              >
                <summary className="text-xl font-semibold text-[#331211] mb-2 cursor-pointer group-open:text-blue-800">
                  {item.question}
                </summary>
                <p className="text-gray-700 mt-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
