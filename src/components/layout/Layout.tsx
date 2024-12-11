import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollButtons from '../common/ScrollButtons';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="flex-grow pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <ScrollButtons />
      <Footer />
    </div>
  );
};

export default Layout;
