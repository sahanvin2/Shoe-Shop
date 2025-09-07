import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Grid3X3, List } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', label: 'All Designs' },
    { id: 'running', label: 'Running' },
    { id: 'casual', label: 'Casual' },
    { id: 'sport', label: 'Sport' },
    { id: 'limited', label: 'Limited Edition' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Quantum Runner Elite',
      category: 'running',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      description: 'Revolutionary running shoe with quantum energy return technology.',
      tech: ['Quantum Foam', 'Neural Sync', 'Adaptive Grip'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      title: 'Holo Street Walker',
      category: 'casual',
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
      description: 'Holographic casual shoe that adapts to urban environments.',
      tech: ['Color Shift', 'Smart Lacing', 'Urban Grip'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Neo Sport Pro',
      category: 'sport',
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg',
      description: 'Professional sports shoe with biometric feedback system.',
      tech: ['Bio-Feedback', 'Performance Analytics', 'Energy Return'],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 4,
      title: 'Cyber Limited X1',
      category: 'limited',
      image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg',
      description: 'Limited edition cyberpunk-inspired design with AI integration.',
      tech: ['AI Assistant', 'Mood Lighting', 'Gesture Control'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'Speed Demon V2',
      category: 'running',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      description: 'Ultra-lightweight running shoe designed for maximum speed.',
      tech: ['Carbon Fiber', 'Aerodynamic Design', 'Energy Boost'],
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 6,
      title: 'Urban Explorer',
      category: 'casual',
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg',
      description: 'All-terrain casual shoe perfect for city adventures.',
      tech: ['Weather Shield', 'Comfort Foam', 'Grip Technology'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Design Portfolio
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of revolutionary designs that push the boundaries of footwear innovation.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-4 sm:mb-0">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full p-1">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-cyan-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Grid3X3 size={20} />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-cyan-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <List size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + viewMode}
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl group-hover:border-cyan-500/50 transition-all duration-300" />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                <div className={`relative ${viewMode === 'list' ? 'flex items-center' : ''}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' 
                      ? 'w-48 h-32 flex-shrink-0' 
                      : 'h-64 mb-6'
                  } rounded-xl`}>
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* 3D Indicator */}
                    <motion.div
                      className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-3 py-1 text-xs text-cyan-400 font-medium"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      3D VIEW
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`${viewMode === 'list' ? 'ml-6 flex-1' : ''} p-6`}>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">
                        Technology
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.button
                        className={`flex-1 py-3 bg-gradient-to-r ${item.color} rounded-xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View 3D Model
                      </motion.button>
                      <motion.button
                        className="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Customize
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {filteredItems.length > 6 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-500 rounded-full font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Designs
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;