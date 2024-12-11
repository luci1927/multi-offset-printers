import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Business Cards',
      description: 'Professional business cards with premium finishes',
      image: 'https://images.unsplash.com/photo-1589041127168-9b1915731f71?q=80&w=500',
    },
    {
      id: 2,
      name: 'Brochures',
      description: 'High-quality brochures for marketing and promotion',
      image: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=500',
    },
    {
      id: 3,
      name: 'Packaging',
      description: 'Custom packaging solutions for various industries',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=500',
    },
    {
      id: 4,
      name: 'Labels & Stickers',
      description: 'Durable labels and stickers for product packaging',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=500',
    },
    {
      id: 5,
      name: 'Banners',
      description: 'Large format printing for events and advertising',
      image: 'https://images.unsplash.com/photo-1588412079929-790b9f593d8e?q=80&w=500',
    },
    {
      id: 6,
      name: 'Catalogs',
      description: 'Professional product catalogs and magazines',
      image: 'https://images.unsplash.com/photo-1553531889-56cc480ac5cb?q=80&w=500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover our wide range of high-quality printing products tailored to meet your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <button className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="mb-8 text-lg opacity-90">
              Contact us today to discuss your printing needs and get a custom quote.
            </p>
            <button className="px-8 py-3 bg-white text-secondary font-semibold rounded-md hover:bg-gray-100 transition-colors duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
