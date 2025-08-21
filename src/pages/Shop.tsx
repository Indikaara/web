
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EnquiryCart from '../components/EnquiryCart';
import { Product } from '../types/product';
import { fetchProducts } from '../data/data';

interface FilterState {
  category: string;
  searchQuery: string;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'newest';
}

const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    category: searchParams.get('category') || 'all',
    searchQuery: '',
    sortBy: 'featured'
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = products
    .filter(product => {
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }
      if (filters.searchQuery) {
        const searchLower = filters.searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      }
      return true;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        case 'newest':
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        default:
          return 0;
      }
    });

  return (
    <>
      <Header />
      <EnquiryCart />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-950 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display text-4xl font-bold text-white md:text-7xl">
              Our Collections
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-300 md:text-2xl">
              A curated selection of India's finest rugs, handcrafted articles,
              and home decor, ready for the global stage.
            </p>
          </div>
        </section>

        {/* Main Catalog Section */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-6">
            {/* Filters */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <select
                  value={filters.category}
                  onChange={(e) =>
                    setFilters(prev => ({ ...prev, category: e.target.value }))
                  }
                  className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-[#AC1F23] focus:outline-none"
                >
                  <option value="all">All Categories</option>
                  <option value="Rugs">Rugs</option>
                  <option value="Wall_Hanging">Wall Hanging</option>
                  <option value="Home_Decor">Home Decor</option>
                </select>

                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    setFilters(prev => ({
                      ...prev,
                      sortBy: e.target.value as FilterState['sortBy']
                    }))
                  }
                  className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-[#AC1F23] focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>

                <input
                  type="text"
                  placeholder="Search products..."
                  value={filters.searchQuery}
                  onChange={(e) =>
                    setFilters(prev => ({ ...prev, searchQuery: e.target.value }))
                  }
                  className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-[#AC1F23] focus:outline-none"
                />
              </div>

              <p className="text-gray-300">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {/* Product Grid */}
            {loading ? (
              <div className="flex h-64 items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#AC1F23] border-t-transparent"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform hover:scale-105"
                  >
                    <div className="aspect-w-1 aspect-h-1 relative w-full overflow-hidden">
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        {product.name}
                      </h3>
                      <p className="text-gray-300">
                        {product.price
                          ? `₹${product.price.toLocaleString()}`
                          : 'Price on Request'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
