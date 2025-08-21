import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import images
import craftsmanshipBg from '../assets/craftmanship-bg.png';
import craftsmanshipHands from '../assets/craftsmanship-hands.jpg';

interface CraftSection {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const craftSections: CraftSection[] = [
  {
    title: "Traditional Handloom Weaving",
    description: "Our artisans employ centuries-old handloom techniques, creating intricate patterns and textures that tell stories of cultural heritage. Each thread is carefully selected and woven with precision and care.",
    image: "/assets/products/rugs/traditional-handloom.jpg",
    alt: "Traditional handloom weaving process"
  },
  {
    title: "Natural Dyeing Process",
    description: "We use natural dyes derived from plants, minerals, and other organic sources. This eco-friendly approach not only preserves traditional methods but also ensures each piece carries unique, lasting colors.",
    image: "/assets/products/rugs/natural-dyes.jpg",
    alt: "Natural dyeing process"
  },
  {
    title: "Hand-Knotted Excellence",
    description: "The art of hand-knotting requires immense patience and skill. Our master craftsmen tie thousands of knots by hand, creating durable rugs with intricate designs that stand the test of time.",
    image: "/assets/products/rugs/hand-knotted.jpg",
    alt: "Hand-knotting technique demonstration"
  }
];

const Craftsmanship: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-[#331211]">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: `url(${craftsmanshipBg})` }}
          ></div>
          <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-4 text-center text-white">
            <div className="max-w-3xl">
              <h1 className="mb-6 font-display text-5xl font-bold leading-tight md:text-6xl">
                The Art of Indian Craftsmanship
              </h1>
              <p className="text-lg md:text-xl">
                Centuries of tradition, masterful techniques, and dedication to excellence
                come together in every piece we create.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <img
                  src={craftsmanshipHands}
                  alt="Artisan hands at work"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold text-[#331211] md:text-4xl">
                  Where Tradition Meets Excellence
                </h2>
                <p className="text-gray-600">
                  At Indikaara, we celebrate the rich heritage of Indian craftsmanship. Our
                  artisans are masters of their craft, preserving techniques passed down
                  through generations while embracing innovation to create pieces that honor
                  tradition and meet contemporary tastes.
                </p>
                <Link
                  to="/category-select"
                  className="inline-block rounded-full bg-[#331211] px-8 py-3 text-white shadow-lg transition-all hover:bg-[#AC1F23]"
                >
                  Explore Our Collections
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Craft Sections */}
        {craftSections.map((section, index) => (
          <section
            key={index}
            className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div
                className={`grid gap-12 md:grid-cols-2 md:items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                <div className={index % 2 === 0 ? 'md:order-2' : ''}>
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="font-display text-3xl font-bold text-[#331211]">
                    {section.title}
                  </h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Quality Commitment */}
        <section className="bg-[#331211] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 font-display text-3xl font-bold">
                Our Commitment to Quality
              </h2>
              <p className="text-lg">
                Every piece that leaves our workshop undergoes rigorous quality checks.
                We take pride in delivering products that not only meet but exceed
                expectations, ensuring that each item is a testament to the skill and
                dedication of our artisans.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-display text-3xl font-bold text-[#331211]">
              Experience the Artistry
            </h2>
            <p className="mb-8 text-gray-600">
              Discover our collection of handcrafted pieces, each telling a unique story
              of tradition and excellence.
            </p>
            <Link
              to="/category-select"
              className="inline-block rounded-full bg-[#331211] px-8 py-3 text-white shadow-lg transition-all hover:bg-[#AC1F23]"
            >
              View Collections
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Craftsmanship;
