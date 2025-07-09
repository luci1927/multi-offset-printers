import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: 'Apex Marketing Group',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200',
      description: 'Full-service digital marketing agency',
    },
    {
      id: 2,
      name: 'BlueSky Restaurants',
      logo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=200',
      description: 'Premium dining restaurant chain',
    },
    {
      id: 3,
      name: 'Urban Fashion Co.',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=200',
      description: 'Contemporary clothing and accessories',
    },
    {
      id: 4,
      name: 'EcoGreen Solutions',
      logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=200',
      description: 'Sustainable business consulting',
    },
    {
      id: 5,
      name: 'Summit Financial',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200',
      description: 'Investment and wealth management',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, Tech Solutions Inc.',
      content: 'Multi Offset Printers has been our trusted printing partner for over 5 years. Their quality and service are unmatched.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Director, Global Retail Co.',
      content: 'Their attention to detail and quick turnaround times have made them our go-to printer for all our marketing materials.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
    },
    {
      id: 3,
      name: 'David Chen',
      position: 'Operations Manager, Green Energy Ltd.',
      content: 'Exceptional quality and professional service. They always deliver beyond our expectations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We're proud to work with businesses of all sizes across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-center mb-2">{client.name}</h3>
                <p className="text-gray-600 text-center text-sm">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Client List</h2>
            <p className="mb-8 text-lg opacity-90">
              Experience the quality and service that our clients trust.
            </p>
            <button className="px-8 py-3 bg-white text-secondary font-semibold rounded-md hover:bg-gray-100 transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
