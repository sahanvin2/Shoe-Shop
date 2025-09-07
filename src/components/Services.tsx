import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Smartphone, Truck, Wrench, Crown, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: '3D Customization',
      description: 'Design your perfect shoe with our revolutionary 3D configurator. Choose colors, materials, and patterns in real-time.',
      features: ['Real-time Preview', 'Material Swapping', 'Color Matching', 'Pattern Library'],
      color: 'from-purple-500 to-pink-600',
      delay: 0
    },
    {
      icon: Smartphone,
      title: 'AR Fitting Room',
      description: 'Try before you buy with our augmented reality fitting technology. See how shoes look on your feet instantly.',
      features: ['Virtual Try-On', 'Size Prediction', 'Style Matching', 'Share & Compare'],
      color: 'from-cyan-500 to-blue-600',
      delay: 0.2
    },
    {
      icon: Truck,
      title: 'Quantum Delivery',
      description: 'Lightning-fast delivery with real-time tracking and predictive logistics powered by AI.',
      features: ['Same-day Delivery', 'Live Tracking', 'Secure Packaging', 'Carbon Neutral'],
      color: 'from-green-500 to-teal-600',
      delay: 0.4
    },
    {
      icon: Wrench,
      title: 'Maintenance Pro',
      description: 'Keep your shoes in perfect condition with our professional maintenance and repair services.',
      features: ['Deep Cleaning', 'Material Repair', 'Sole Replacement', 'Waterproofing'],
      color: 'from-orange-500 to-red-600',
      delay: 0.6
    },
    {
      icon: Crown,
      title: 'VIP Experience',
      description: 'Exclusive access to limited editions, early releases, and personalized styling consultations.',
      features: ['Early Access', 'Personal Stylist', 'Exclusive Designs', 'Priority Support'],
      color: 'from-yellow-500 to-orange-600',
      delay: 0.8
    },
    {
      icon: Zap,
      title: 'Smart Integration',
      description: 'Connect your shoes to your digital life with IoT sensors and health monitoring capabilities.',
      features: ['Activity Tracking', 'Health Metrics', 'App Integration', 'Data Analytics'],
      color: 'from-indigo-500 to-purple-600',
      delay: 1
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            Future Services
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience next-generation services that redefine how you shop, customize, and maintain your footwear.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl group-hover:border-cyan-500/50 transition-all duration-300" />
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />

              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: service.delay + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full mt-8 py-3 bg-gradient-to-r ${service.color} rounded-xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;