import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Satisfied Clients', value: '1000+' },
    { label: 'Projects Completed', value: '5000+' },
    { label: 'Team Members', value: '100+' },
  ];

  const values = [
    {
      title: 'Quality',
      description: 'We maintain the highest standards in all our services.',
      icon: '⭐',
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving with the latest technology and techniques.',
      icon: '💡',
    },
    {
      title: 'Reliability',
      description: 'Delivering on our promises with consistency and dedication.',
      icon: '🤝',
    },
    {
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices.',
      icon: '🌱',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-300">
              Since our establishment, Multi Offset Printers has been at the forefront
              of the printing and manufacturing industry, delivering excellence through
              innovation and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To provide innovative and sustainable printing and manufacturing
                solutions that exceed our clients' expectations while maintaining
                the highest standards of quality and service.
              </p>
              <p className="text-gray-600">
                We strive to be the industry leader in printing technology and
                manufacturing excellence, contributing to our clients' success
                through our commitment to quality, innovation, and customer
                satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                To be recognized globally as the premier provider of comprehensive
                printing and manufacturing solutions, setting industry standards
                for quality, innovation, and customer service.
              </p>
              <p className="text-gray-600">
                We aim to expand our reach while maintaining our commitment to
                excellence, sustainability, and the success of our clients,
                employees, and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Multi Offset Printers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
