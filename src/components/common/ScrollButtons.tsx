import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoArrowUpOutline, IoArrowDownOutline } from 'react-icons/io5';

const ScrollButtons: React.FC = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Show buttons when scrolled down 100px
      setShowButtons(scrollTop > 100);
      
      // Check if we're at the bottom
      setIsAtBottom(Math.ceil(scrollTop + clientHeight) >= scrollHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const buttonClasses = "flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300";

  return (
    <AnimatePresence>
      {showButtons && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className={buttonClasses}
            aria-label="Scroll to top"
          >
            <IoArrowUpOutline className="w-6 h-6" />
          </motion.button>
          
          {!isAtBottom && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToBottom}
              className={buttonClasses}
              aria-label="Scroll to bottom"
            >
              <IoArrowDownOutline className="w-6 h-6" />
            </motion.button>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollButtons;
