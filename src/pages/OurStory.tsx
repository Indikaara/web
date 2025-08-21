import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Founded with a vision to bring India's rich handicraft heritage to the global stage."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Expanded our reach through e-commerce and virtual showrooms, adapting to changing times."
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Established partnerships in the UK and Europe, bringing Indian craftsmanship to new markets."
  },
  {
    year: "2022",
    title: "Artisan Network",
    description: "Built a network of over 100 skilled artisans across India's craft clusters."
  },
  {
    year: "2023",
    title: "Sustainable Practices",
    description: "Implemented eco-friendly practices and sustainable sourcing initiatives."
  },
  {
    year: "2024",
    title: "Innovation & Heritage",
    description: "Launched innovative designs while preserving traditional crafting techniques."
  }
];

const OurStory: React.FC = () => {
  const animatedElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
      animatedElements.current.push(el as HTMLElement);
    });

    return () => {
      animatedElements.current.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] items-center justify-center bg-[#331211]">
          <div className="absolute inset-0 bg-[url('../assets/hero-background.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
          <div className="relative z-10 px-4 text-center text-white">
            <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
              Our Story
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl">
              From ancient craft traditions to modern luxury homes - discover the
              journey of Indikaara.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="animate-on-scroll">
                <h2 className="mb-6 font-display text-3xl font-bold text-[#331211] md:text-4xl">
                  Our Vision
                </h2>
                <p className="mb-4 text-gray-600">
                  At Indikaara, we envision a world where traditional Indian
                  craftsmanship is celebrated and cherished in homes across the
                  globe. Our mission is to create a bridge between skilled artisans
                  and discerning customers who appreciate the beauty of handcrafted
                  excellence.
                </p>
                <p className="text-gray-600">
                  We're committed to preserving age-old techniques while embracing
                  innovation, ensuring that every piece tells a story of heritage
                  and craftsmanship.
                </p>
              </div>
              <div className="animate-on-scroll">
                <img
                  src="/assets/craftsmanship-hands.jpg"
                  alt="Artisan at work"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-display text-3xl font-bold text-[#331211] md:text-4xl">
              Our Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-[#331211]"></div>

              {/* Timeline events */}
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative mb-8 animate-on-scroll ${
                    index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                  } md:w-1/2`}
                >
                  <div className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="mb-2 text-sm font-bold text-[#AC1F23]">
                      {event.year}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#331211]">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 transform rounded-full bg-[#AC1F23]"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-[#331211] py-20 text-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-4xl">
              Our Values
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Authenticity",
                  description:
                    "Preserving and promoting genuine Indian craftsmanship and cultural heritage."
                },
                {
                  title: "Excellence",
                  description:
                    "Maintaining the highest standards of quality in every piece we create."
                },
                {
                  title: "Sustainability",
                  description:
                    "Committing to eco-friendly practices and supporting artisan communities."
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="animate-on-scroll rounded-lg bg-white/10 p-6 text-center"
                >
                  <h3 className="mb-4 text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-display text-3xl font-bold text-[#331211]">
              Be Part of Our Story
            </h2>
            <p className="mb-8 text-gray-600">
              Discover our collection of handcrafted pieces and help us write the
              next chapter of Indian craftsmanship.
            </p>
            <Link
              to="/category-select"
              className="inline-block rounded-full bg-[#331211] px-8 py-3 text-white shadow-lg transition-all hover:bg-[#AC1F23]"
            >
              Explore Collections
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OurStory;
