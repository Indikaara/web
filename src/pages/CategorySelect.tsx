import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import background images
import categoryRugsBg from '../assets/category-rugs.png';
import categoryWallHangingBg from '../assets/category_wall_hanging.png';
import categoryHomeDecorBg from '../assets/cateogory-home-decor.png';

interface CategoryCard {
  title: string;
  path: string;
  bgImage: string;
}

const CategorySelect: React.FC = () => {
  const categories: CategoryCard[] = [
    {
      title: 'Rugs',
      path: '/shop?category=Rugs',
      bgImage: categoryRugsBg
    },
    {
      title: 'Wall Hanging',
      path: '/shop?category=Wall_Hanging',
      bgImage: categoryWallHangingBg
    },
    {
      title: 'Home Décor',
      path: '/shop?category=Home_Decor',
      bgImage: categoryHomeDecorBg
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">
              Select a Category
            </h1>
            <p className="mt-4 text-xl md:text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our curated collections by category
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  className="category-card block px-8 py-[49.92px] rounded-2xl shadow-lg text-center 
                           bg-[#4A2220] text-black text-2xl font-semibold transition-transform 
                           hover:scale-105 hover:bg-[#AC1F23] w-4/5 mx-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.bgImage})` }}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CategorySelect;
