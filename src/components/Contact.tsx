import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      info: 'support@nexuskicks.com',
      description: '24/7 email support with response within 2 hours',
      color: 'from-blue-500 to-cyan-600',
      delay: 0
    },
    {
      icon: Phone,
      title: 'Phone Support',
      info: '+1 (555) 123-4567',
      description: 'Direct line to our expert support team',
      color: 'from-green-500 to-teal-600',
      delay: 0.2
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      info: 'Available 24/7',
      description: 'Instant support through our AI-powered chat',
      color: 'from-purple-500 to-pink-600',
      delay: 0.4
    },
    {
      icon: Headphones,
      title: 'VIP Support',
      info: 'Premium Members',
      description: 'Dedicated support line for VIP customers',
      color: 'from-orange-500 to-red-600',
      delay: 0.6
    }
  ];

  const locations = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive, SF, CA 94105',
      hours: 'Mon-Fri: 9AM-6PM PST',
      type: 'Headquarters'
    },
    {
      city: 'New York',
      address: '456 Design Avenue, NY, NY 10001',
      hours: 'Mon-Fri: 9AM-6PM EST',
      type: 'Design Studio'
    },
    {
      city: 'London',
      address: '789 Tech Street, London, UK SW1A 1AA',
      hours: 'Mon-Fri: 9AM-6PM GMT',
      type: 'European Hub'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
            Get In Touch
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to step into the future? We're here to help you find your perfect pair or answer any questions about our revolutionary footwear.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Form Background */}
              <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8">
                <h3 className="text-3xl font-bold text-white mb-8">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="How can we help you?"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold text-lg flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: method.delay }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl group-hover:border-cyan-500/50 transition-all duration-300" />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                  />
                  
                  <div className="relative p-6 flex items-center">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mr-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <method.icon size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                      <p className="text-cyan-400 font-medium mb-1">{method.info}</p>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Locations */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl" />
              
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <Globe size={24} className="text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Locations</h3>
                </div>
                
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.city}
                      className="border-l-2 border-cyan-500/30 pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-2">
                        <MapPin size={16} className="text-cyan-400 mr-2" />
                        <span className="font-semibold text-white">{location.city}</span>
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full ml-2">
                          {location.type}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-1">{location.address}</p>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock size={12} className="mr-1" />
                        {location.hours}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;