import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <>
    <Header />
    {/* Main hero and content sections go here */}
    <main className="pt-20">
      {/* ...existing code... */}
      <section className="animate-on-scroll">
        <h1 className="font-display text-4xl md:text-7xl text-white">Luxury Handcrafted Rugs & Home Décor</h1>
        <p className="text-gray-300 mt-4">From Kala to Karya – Experience the finest Indian craftsmanship.</p>
        <a href="/category-select" className="btn-primary mt-8 inline-block">Shop</a>
      </section>
      {/* ...other sections... */}
    </main>
    <Footer />
  </>
);

export default Home;
