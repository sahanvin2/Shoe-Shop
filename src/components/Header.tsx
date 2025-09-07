import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Products', 'Services', 'Portfolio', 'About', 'Contact'];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            NEXUS<span className="text-green-400">KICKS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white hover:text-cyan-400 transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="p-2 text-white hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={20} />
            </motion.button>
            <motion.button
              className="p-2 text-white hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={20} />
            </motion.button>
            <motion.button
              className="relative p-2 text-white hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={20} />
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center text-xs text-black"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
              >
                3
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-cyan-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white hover:text-cyan-400 transition-colors"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;