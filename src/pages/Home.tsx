import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Printing Solutions',
      description: 'State-of-the-art printing technology for all your needs',
      icon: '🖨️',
    },
    {
      title: 'Manufacturing',
      description: 'Custom manufacturing solutions with precision',
      icon: '⚙️',
    },
    {
      title: 'Import Services',
      description: 'Global sourcing and importing capabilities',
      icon: '🌐',
    },
    {
      title: 'Local Production',
      description: 'Efficient in-country production facilities',
      icon: '🏭',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-primary to-secondary text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              Your Premier Printing & Manufacturing Partner
            </h1>
            <p className="text-xl mb-8">
              Multi Offset Printers delivers excellence in printing, manufacturing,
              and import services with cutting-edge technology and expertise.
            </p>
            <div className="flex space-x-4">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/services" className="btn btn-outline text-white border-white">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine innovation with expertise to deliver exceptional results
              across all our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-lg">
              Contact us today for a free consultation and quote.
            </p>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
