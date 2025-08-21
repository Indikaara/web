import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface BlogPost {
  date: string;
  category: {
    name: string;
    color: string;
  };
  title: string;
  excerpt: string;
  slug: string;
}

const Blogspot: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      date: 'June 15, 2025',
      category: {
        name: 'Craftsmanship',
        color: 'text-blue-600'
      },
      title: 'The Art of Dhurrie Weaving: A 500-Year Legacy',
      excerpt: 'In the dusty lanes of Rajasthan, master weaver Ramesh Singh continues a tradition passed down through fifteen generations. Each dhurrie tells a story of cultural heritage spanning centuries.',
      slug: 'dhurrie-weaving-legacy'
    },
    {
      date: 'July 10, 2025',
      category: {
        name: 'Techniques',
        color: 'text-green-600'
      },
      title: 'Sacred Geometry in Indian Metalwork',
      excerpt: "The intricate patterns etched into brass and copper vessels aren't merely decorative. They represent ancient mathematical principles and spiritual beliefs that have guided Indian artisans for millennia.",
      slug: 'sacred-geometry-metalwork'
    },
    {
      date: 'July 17, 2025',
      category: {
        name: 'Sustainability',
        color: 'text-purple-600'
      },
      title: 'From Marigold to Masterpiece: The Magic of Natural Dyes',
      excerpt: "Long before synthetic colors existed, Indian artisans created vibrant hues from flowers, roots, and minerals. This eco-friendly tradition continues to color our textiles with nature's palette.",
      slug: 'natural-dyes-magic'
    },
    {
      date: 'July 25, 2025',
      category: {
        name: 'Artisans',
        color: 'text-orange-600'
      },
      title: 'Carving Stories in Sandalwood: Meet Master Craftsman Ravi',
      excerpt: "In Karnataka's workshops, 65-year-old Ravi transforms simple blocks of sandalwood into intricate sculptures. His hands carry the wisdom of three generations of master carvers.",
      slug: 'sandalwood-carving-ravi'
    },
    {
      date: 'July 30, 2025',
      category: {
        name: 'Global Impact',
        color: 'text-red-600'
      },
      title: 'How Your Purchase Preserves Ancient Traditions',
      excerpt: 'Every handcrafted piece you bring home supports not just an artisan, but an entire ecosystem of traditional knowledge, sustainable practices, and cultural preservation across rural India.',
      slug: 'preserving-traditions-impact'
    },
    {
      date: 'August 1, 2025',
      category: {
        name: 'Culture',
        color: 'text-indigo-600'
      },
      title: 'Festival Preparations: When Villages Come Alive with Craft',
      excerpt: "During Diwali and other festivals, entire villages transform into bustling workshops. Witness how celebrations drive the creation of India's most beautiful decorative pieces.",
      slug: 'festival-preparations'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-black">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Artisan Stories & Heritage
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the traditions, techniques, and tales behind India's finest handicrafts
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white/95 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className={`text-sm ${post.category.color}`}>{post.category.name}</span>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-[#331211] mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="btn-primary inline-block py-2 px-4 rounded-full text-sm font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blogspot;
