import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Products',
      links: ['Running Shoes', 'Casual Wear', 'Sports Collection', 'Limited Edition', 'Custom Design', 'Accessories']
    },
    {
      title: 'Services',
      links: ['3D Customization', 'AR Fitting', 'Delivery', 'Maintenance', 'VIP Support', 'Returns']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Innovation Lab', 'Press', 'Sustainability', 'Investors']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Size Guide', 'Shipping Info', 'Track Order', 'Contact Us', 'FAQ']
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Youtube, label: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  NEXUS<span className="text-green-400">KICKS</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Revolutionizing footwear through cutting-edge technology and innovative design. 
                  Step into the future with shoes that adapt to your world.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-3 text-cyan-400" />
                  support@nexuskicks.com
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-3 text-cyan-400" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-3 text-cyan-400" />
                  San Francisco, CA
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="lg:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 block"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="border-t border-gray-800 pt-12 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Future Tech
              </h3>
              <p className="text-gray-400 mb-6">
                Be the first to know about new releases, exclusive designs, and cutting-edge innovations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe Now
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Social Links */}
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 1.2 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <div className="flex items-center text-gray-400 text-sm">
                <span>© 2025 NexusKicks. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mx-1"
                >
                  <Heart size={14} className="text-red-500 fill-current" />
                </motion.div>
                <span>for the future of footwear.</span>
              </div>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 mt-4 md:mt-0"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 text-sm">Back to Top</span>
                <ArrowUp size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;