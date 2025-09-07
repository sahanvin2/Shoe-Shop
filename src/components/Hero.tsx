import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Shoe Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96 relative"
          animate={{
            rotateY: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Holographic Shoe Representation */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <motion.div
            className="absolute inset-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl opacity-80"
            animate={{
              scale: [1, 1.1, 1],
              rotateX: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'linear-gradient(45deg, #00d4ff 0%, #8b5cf6 50%, #ec4899 100%)',
              filter: 'drop-shadow(0 20px 40px rgba(0, 212, 255, 0.3))',
            }}
          />
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{
              background: 'linear-gradient(45deg, #00d4ff, #39ff14, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            FUTURE
            <br />
            <motion.span
              animate={{
                textShadow: [
                  '0 0 20px #00d4ff',
                  '0 0 40px #39ff14',
                  '0 0 20px #00d4ff',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              KICKS
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Step into tomorrow with revolutionary footwear that adapts to your world.
            Experience the future of shoes with our cutting-edge 3D customization platform.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              Explore Collection
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="group flex items-center px-8 py-4 border-2 border-cyan-500 rounded-full text-cyan-500 font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {[
            { number: '10M+', label: 'Shoes Designed' },
            { number: '50K+', label: 'Happy Customers' },
            { number: '99%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl blur group-hover:blur-md transition-all duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                <motion.div
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 + index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-cyan-400 uppercase tracking-wide text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-cyan-500 rounded-full mt-2"
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;