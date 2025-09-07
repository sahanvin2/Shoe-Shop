import React from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Heart, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Quantum Runner Pro',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      color: 'from-cyan-500 to-blue-600',
      features: ['Anti-Gravity Sole', 'Neural Sync', '4D Comfort']
    },
    {
      id: 2,
      name: 'Holographic Street',
      price: 249,
      originalPrice: 329,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
      color: 'from-purple-500 to-pink-600',
      features: ['Color Shift Tech', 'Smart Lacing', 'Weather Adaptive']
    },
    {
      id: 3,
      name: 'Neo Sport Elite',
      price: 349,
      originalPrice: 449,
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg',
      color: 'from-green-500 to-teal-600',
      features: ['Bio-Feedback', 'Energy Return', 'Climate Control']
    },
    {
      id: 4,
      name: 'Cyber Casual X',
      price: 199,
      originalPrice: 279,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg',
      color: 'from-orange-500 to-red-600',
      features: ['Mesh Tech', 'Urban Grip', 'Style Flex']
    }
  ];

  return (
    <section id="products" className="py-24 relative">
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
            Featured Collection
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest innovations in footwear technology. Each shoe is crafted with precision and designed for the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-300" />
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />
              
              {/* Card Content */}
              <div className="relative p-6">
                {/* Product Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Hover Actions */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex space-x-4">
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-cyan-500/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye size={20} />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-pink-500/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart size={20} />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 bg-green-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({product.rating})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">${product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    className={`w-full py-3 bg-gradient-to-r ${product.color} rounded-xl text-white font-semibold flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
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
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;