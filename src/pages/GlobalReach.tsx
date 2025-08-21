import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import background image
import globalReachBg from '../assets/glocal-reach-bg.jpg';

interface Region {
  name: string;
  description: string;
  keyMarkets: string[];
}

const regions: Region[] = [
  {
    name: "United Kingdom",
    description: "Strong presence in the UK market with a focus on premium home décor and traditional Indian craftsmanship.",
    keyMarkets: ["London", "Manchester", "Birmingham", "Edinburgh"]
  },
  {
    name: "European Union",
    description: "Established networks across major European markets, catering to both retail and wholesale customers.",
    keyMarkets: ["France", "Germany", "Italy", "Netherlands", "Spain"]
  },
  {
    name: "Gulf Region",
    description: "Expanding presence in the Middle East with luxury handcrafted pieces and bespoke designs.",
    keyMarkets: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"]
  }
];

interface ServiceFeature {
  title: string;
  description: string;
  icon: React.JSX.Element;
}

const services: ServiceFeature[] = [
  {
    title: "Custom Export Solutions",
    description: "Tailored shipping and logistics solutions to meet your specific requirements, whether you're a boutique retailer or large distributor.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control measures ensuring every piece meets international standards before shipping.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Documentation Support",
    description: "Complete assistance with export documentation, customs clearance, and regulatory compliance.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

const GlobalReach: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-[#331211]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: `url(${globalReachBg})` }}
          ></div>
          <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-4 text-center text-white">
            <div className="max-w-3xl">
              <h1 className="mb-6 font-display text-5xl font-bold leading-tight md:text-6xl">
                Global Reach & Export Services
              </h1>
              <p className="text-lg md:text-xl">
                Delivering Indian craftsmanship to doorsteps worldwide with
                excellence and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Market Presence */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-display text-3xl font-bold text-[#331211] md:text-4xl">
              Our Global Presence
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-50 p-6 shadow-lg transition-transform hover:scale-105"
                >
                  <h3 className="mb-4 text-xl font-bold text-[#331211]">
                    {region.name}
                  </h3>
                  <p className="mb-4 text-gray-600">{region.description}</p>
                  <div>
                    <h4 className="mb-2 font-semibold text-[#331211]">Key Markets:</h4>
                    <ul className="list-inside list-disc text-gray-600">
                      {region.keyMarkets.map((market, idx) => (
                        <li key={idx}>{market}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#331211] py-16 text-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-4xl">
              Export Services
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-display text-3xl font-bold text-[#331211] md:text-4xl">
              Why Choose Indikaara
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Global Network",
                  description: "Established presence in key international markets"
                },
                {
                  title: "Expert Logistics",
                  description: "Seamless shipping and delivery worldwide"
                },
                {
                  title: "Quality Standards",
                  description: "Strict quality control for every export shipment"
                },
                {
                  title: "Customer Support",
                  description: "24/7 assistance for all export-related queries"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 text-center shadow-lg"
                >
                  <h3 className="mb-4 text-xl font-bold text-[#331211]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#331211] py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-display text-3xl font-bold">
              Ready to Export with Us?
            </h2>
            <p className="mb-8 text-lg">
              Contact us today to discuss your export requirements and discover how
              we can help expand your business globally.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-white px-8 py-3 text-[#331211] shadow-lg transition-all hover:bg-[#DDB386] hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GlobalReach;
