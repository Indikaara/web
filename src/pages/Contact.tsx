import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error' | null;
    text: string;
  }>({ type: null, text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your form submission logic here
      // For now, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your message. We will get back to you soon!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4">
          {/* Contact Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-display text-4xl font-bold text-[#331211] md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-gray-600">
              Have questions about our products or interested in business opportunities?
              We'd love to hear from you. Get in touch with us using the form below.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Email",
                info: "info@indikaara.com",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Phone",
                info: "+91 1234567890",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              {
                title: "Address",
                info: "Indikaara Exports, New Delhi, India",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((contact, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg"
              >
                <div className="mb-4 rounded-full bg-[#331211] p-3 text-white">
                  {contact.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#331211]">
                  {contact.title}
                </h3>
                <p className="text-gray-600">{contact.info}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#331211] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#331211] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#331211] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#331211] focus:outline-none"
                ></textarea>
              </div>
              
              {submitMessage.type && (
                <div
                  className={`rounded-md p-4 ${
                    submitMessage.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-full bg-[#331211] px-8 py-3 text-white shadow-lg transition-all hover:bg-[#AC1F23] ${
                  isSubmitting ? 'cursor-not-allowed opacity-75' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <h2 className="mb-6 text-2xl font-semibold text-[#331211]">
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-6">
              {[
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/indikaara',
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )
                },
                {
                  name: 'Facebook',
                  href: 'https://www.facebook.com/indikaara',
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  )
                },
                {
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/indikaara',
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-[#331211]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
