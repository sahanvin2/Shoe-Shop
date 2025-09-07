import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Zap, Globe, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '2025', label: 'Founded', icon: Award },
    { number: '50K+', label: 'Customers', icon: Users },
    { number: '15+', label: 'Countries', icon: Globe },
    { number: '99%', label: 'Satisfaction', icon: Target }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in footwear technology, constantly exploring new materials and manufacturing processes.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every shoe undergoes rigorous testing to ensure durability, comfort, and performance that exceeds expectations.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'Customer Centric',
      description: 'Our customers drive everything we do. We listen, learn, and adapt to create shoes that truly serve your needs.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Globe,
      title: 'Sustainable Future',
      description: 'We\'re committed to reducing our environmental impact through eco-friendly materials and carbon-neutral operations.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize footwear through technology and design innovation.'
    },
    {
      year: '2025',
      title: '3D Printing Launch',
      description: 'Introduced the first consumer 3D-printed shoes with custom fitting technology.'
    },
    {
      year: '2025',
      title: 'AR Integration',
      description: 'Launched augmented reality fitting rooms, changing how people shop for shoes online.'
    },
    {
      year: '2025',
      title: 'Smart Shoe Era',
      description: 'Released first generation of IoT-enabled shoes with health monitoring capabilities.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
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
            About NexusKicks
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just making shoes – we're crafting the future of footwear. Every step you take is enhanced by cutting-edge technology and innovative design.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl flex items-center justify-center group-hover:border-cyan-500/50 transition-all duration-300">
                  <stat.icon size={32} className="text-cyan-400" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-cyan-400 uppercase tracking-wide text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white mb-8"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 212, 255, 0.5)',
                  '0 0 40px rgba(57, 255, 20, 0.3)',
                  '0 0 20px rgba(0, 212, 255, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "Technology is only as good as the lives it improves"
            </motion.h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              At NexusKicks, we believe that shoes should adapt to you, not the other way around. 
              Our mission is to create intelligent footwear that enhances every aspect of your journey, 
              from morning runs to midnight adventures.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl group-hover:border-cyan-500/50 transition-all duration-300" />
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative p-8">
                <motion.div
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon size={32} className="text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-16">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-cyan-500 to-purple-600" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year + item.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } mb-12`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}</div>
                    <h4 className="text-white font-semibold text-xl mb-3">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                </div>
                
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-black"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.5 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Innovation Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;