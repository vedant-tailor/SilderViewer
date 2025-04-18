import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutFooter = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/vedant-tailor' },
    { name: 'Twitter', url: 'https://twitter.com/vedanttailor8' },
    // { name: 'LinkedIn', url: 'https://linkedin.com/in/vedant-tailor' },
    { name: 'Instagram', url: 'https://instagram.com/_vedanttailor' }
  ];

  const footerLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    // { name: 'Services', url: '/services' },
    { name: 'Contact', url: '/contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
        >
          {/* About Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              Slider Viewer is a cutting-edge web application built with modern technologies to create beautiful, interactive experiences.
            </p>
            <motion.div 
              className="w-12 h-1 bg-blue-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: vedanttailor@outlook.com</li>
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest features and releases.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 flex-grow"
              />
              <motion.a
                 href="mailto:vedanttailor@outlook.com" 
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center text-gray-500 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p>© {new Date().getFullYear()} Slider Viewer. All rights reserved.</p>
          <p className="mt-2">Designed & Developed with ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default AboutFooter; 