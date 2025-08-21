import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Product } from '../types/product';
import { fetchProductById } from '../data/data';
import { addToEnquiryList } from '../utils/enquiryCart';

interface EnquiryFormData {
  name: string;
  email: string;
  message: string;
  quantity: number;
  size: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    message: '',
    quantity: 1,
    size: ''
  });

  useEffect(() => {
    const loadProduct = async () => {
      if (id) {
        try {
          const productData = await fetchProductById(parseInt(id, 10));
          if (productData) {
            setProduct(productData);
            setSelectedImage(productData.image[0]);
            setSelectedSize(productData.dimensionsAvailable[0]);
            setFormData(prev => ({ ...prev, size: productData.dimensionsAvailable[0] }));
          }
        } catch (error) {
          console.error('Error loading product:', error);
        } finally {
          setLoading(false);
        }
      }
    };
    loadProduct();
  }, [id]);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (product) {
      addToEnquiryList({
        ...product,
        enquiryDetails: {
          ...formData,
          size: selectedSize
        }
      });
      setShowEnquiryForm(false);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 pt-24">
          <div className="flex h-96 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#331211] border-t-transparent"></div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 pt-24">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold text-[#331211]">Product not found</h1>
            <Link 
              to="/shop"
              className="mt-4 inline-block rounded-full bg-[#331211] px-6 py-2 text-white hover:bg-[#AC1F23]"
            >
              Return to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-h-1 aspect-w-1 relative overflow-hidden rounded-lg bg-white">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.image.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-h-1 aspect-w-1 overflow-hidden rounded-lg ${
                      selectedImage === img ? 'ring-2 ring-[#331211]' : ''
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-[#331211]">{product.name}</h1>
              <p className="text-xl font-semibold text-[#331211]">
                {product.price ? `₹${product.price.toLocaleString()}` : 'Price on Request'}
              </p>

              <div className="prose max-w-none text-gray-600">
                <p>{product.description}</p>
              </div>

              {/* Product Story */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#331211]">Story</h2>
                <p className="text-gray-600">{product.story}</p>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#331211]">Details</h2>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              {/* Available Sizes */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#331211]">Available Sizes</h2>
                <div className="flex flex-wrap gap-2">
                  {product.dimensionsAvailable.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-full px-4 py-2 text-sm transition-colors ${
                        selectedSize === size
                          ? 'bg-[#331211] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">Material</h3>
                    <p className="text-gray-800">{product.material}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">Technique</h3>
                    <p className="text-gray-800">{product.weavingTechnique}</p>
                  </div>
                </div>
              </div>

              {/* Enquiry Button */}
              <button
                onClick={() => setShowEnquiryForm(true)}
                className="w-full rounded-full bg-[#331211] px-8 py-3 text-white shadow-lg transition-all hover:bg-[#AC1F23]"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        {/* Enquiry Form Modal */}
        {showEnquiryForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
              <h2 className="mb-4 text-2xl font-semibold text-[#331211]">Product Enquiry</h2>
              <form onSubmit={handleEnquiry} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowEnquiryForm(false)}
                    className="rounded-full px-6 py-2 text-gray-600 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-full bg-[#331211] px-6 py-2 text-white shadow-lg transition-all hover:bg-[#AC1F23]"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
