import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Printing Solutions',
      description: 'State-of-the-art printing services for all your needs',
      features: [
        'Digital Printing',
        'Offset Printing',
        'Large Format Printing',
        'Custom Packaging',
        'Promotional Materials',
      ],
      icon: '🖨️',
    },
    {
      title: 'Manufacturing',
      description: 'Custom manufacturing solutions with precision and quality',
      features: [
        'Product Development',
        'Custom Fabrication',
        'Assembly Services',
        'Quality Control',
      ],
      icon: '⚙️',
    },
    {
      title: 'Import Services',
      description: 'Global sourcing and importing capabilities',
      features: [
        'International Sourcing',
        'Supply Chain Management',
        'Quality Inspection',
        'Logistics Coordination',
        'Custom Clearance',
      ],
      icon: '🌐',
    },
    {
      title: 'Local Production',
      description: 'Efficient in-country production facilities',
      features: [
        'Local Manufacturing',
        'Quick Turnaround',
        'Cost-Effective Solutions',
        'Quality Assurance',
        'Flexible Production',
      ],
      icon: '🏭',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive printing and manufacturing solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-primary mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg">
              Contact us today to discuss your project requirements
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
