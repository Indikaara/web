import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CategorySelect from './pages/CategorySelect';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Craftsmanship from './pages/Craftsmanship';
import GlobalReach from './pages/GlobalReach';
import Blogspot from './pages/Blogspot';
import OurStory from './pages/OurStory';
import TermsOfService from './pages/TermsOfService';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/category-select" element={<CategorySelect />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/craftsmanship" element={<Craftsmanship />} />
      <Route path="/global-reach" element={<GlobalReach />} />
      <Route path="/blogspot" element={<Blogspot />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
  </Router>
);

export default App;
