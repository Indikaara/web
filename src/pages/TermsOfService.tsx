import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import background image
import collectionsBg from '../assets/collections-bg.png';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      id: '1',
      title: 'Introduction',
      content: `Welcome to Indikaara ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website and services, including the purchase of handcrafted Indian products, rugs, wall hangings, and home décor items. By accessing or using our services, you agree to be bound by these Terms.`,
    },
    {
      id: '2',
      title: 'About Indikaara',
      content: `Indikaara is an Indian export company specializing in premium handcrafted products sourced directly from skilled artisans across India. We serve international markets with a focus on the UK, Europe, and the Gulf region, delivering authentic Indian craftsmanship to global customers.`,
    },
    {
      id: '3',
      title: 'Product Information & Enquiry Process',
      subsections: [
        {
          title: 'Product Descriptions',
          content: 'We strive to provide accurate descriptions, images, and specifications for all products. However, as our items are handcrafted, slight variations in color, texture, and dimensions may occur.',
        },
        {
          title: 'Enquiry System',
          content: 'Our website operates on an enquiry-based system. Adding items to your "Enquiry Cart" does not constitute a purchase but initiates a consultation process for pricing, customization, and order details.',
        },
        {
          title: 'Custom Orders',
          content: 'We offer custom sizing, colors, and designs for most products. Custom orders require advance payment and have different return policies as outlined below.',
        },
      ],
    },
    {
      id: '4',
      title: 'Pricing & Payment',
      subsections: [
        {
          title: 'Pricing',
          content: 'Prices are displayed in Indian Rupees (INR) and are subject to change without notice. Final pricing will be confirmed during the enquiry process and may vary based on customization requirements.',
        },
        {
          title: 'Payment Methods',
          content: 'We accept major credit/debit cards, bank transfers, and select international payment gateways. For bulk or B2B orders, alternative payment arrangements may be discussed.',
        },
        {
          title: 'Currency',
          content: 'International customers will be quoted in their local currency at the time of order confirmation, based on current exchange rates.',
        },
      ],
    },
    {
      id: '5',
      title: 'Shipping & Delivery',
      subsections: [
        {
          title: 'International Shipping',
          content: 'We ship worldwide with primary focus on the UK, Europe, and Gulf regions. Shipping costs, delivery times, and customs procedures will be communicated during order confirmation.',
        },
        {
          title: 'Delivery Times',
          content: 'Standard products typically ship within 7-14 business days. Custom orders may require 3-6 weeks depending on complexity.',
        },
        {
          title: 'Customs & Duties',
          content: 'International customers are responsible for any customs duties, taxes, or import fees imposed by their country. We will assist with proper documentation.',
        },
      ],
    },
    {
      id: '6',
      title: 'Returns & Exchanges',
      subsections: [
        {
          title: 'Standard Products',
          content: 'Returns are accepted within 30 days of delivery for unused, undamaged items in original packaging. Customer is responsible for return shipping costs.',
        },
        {
          title: 'Custom Products',
          content: 'Custom orders are final sale and cannot be returned unless the item received significantly differs from specifications or arrives damaged.',
        },
        {
          title: 'Damage Claims',
          content: 'Any damage must be reported within 48 hours of delivery with photographic evidence. We will arrange replacement or refund for verified damage claims.',
        },
      ],
    },
    {
      id: '7',
      title: 'Intellectual Property',
      content: `All website content, including images, text, logos, and design elements, are the property of Indikaara or our licensors. Traditional craft patterns and techniques remain part of cultural heritage and are not claimed as proprietary.`,
    },
    {
      id: '8',
      title: 'Quality & Authenticity',
      subsections: [
        {
          title: 'Handcrafted Nature',
          content: 'All products are handmade by skilled artisans. Slight variations in pattern, color, and texture are inherent characteristics that add to the uniqueness of each piece.',
        },
        {
          title: 'Material Authenticity',
          content: 'We guarantee the authenticity of materials used (cotton, wool, silk, etc.) and provide certificates of origin when requested.',
        },
      ],
    },
    {
      id: '9',
      title: 'Limitation of Liability',
      content: `Indikaara's liability is limited to the purchase price of the product. We are not liable for indirect, consequential, or special damages. Our total liability shall not exceed the amount paid for the specific product in question.`,
    },
    {
      id: '10',
      title: 'Privacy & Data Protection',
      content: `We collect and process personal information in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.`,
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-black bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${collectionsBg})` }}>
        <div className="container mx-auto px-6 py-12">
          <section className="max-w-4xl mx-auto bg-white/95 rounded-2xl shadow-2xl p-8 md:p-12 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-[#331211] mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <div className="text-center text-sm text-gray-500 mb-8">
                <p><strong>Last Updated:</strong> August 20, 2025</p>
              </div>

              {sections.map((section) => (
                <section key={section.id}>
                  <h2 className="text-2xl font-display font-bold text-[#331211] mb-4">
                    {section.id}. {section.title}
                  </h2>
                  {section.content && (
                    <p className="leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, index) => (
                        <p key={index} className="leading-relaxed">
                          <strong>{section.id}.{index + 1} {subsection.title}:</strong>{' '}
                          {subsection.content}
                        </p>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
