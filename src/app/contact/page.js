'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInDown, fadeInUp } from '@/styles/animations';

export default function ContactPage() {
  const { themeStyles, effectiveTheme } = useThemeStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/submit-form';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you ASAP.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or call directly.' });
    }
  };

  return (
    <div className={`min-h-screen ${themeStyles.sectionBg} py-20 transition-all duration-500 ease-in-out`}>
      {/* Background gradient effect - Theme-aware */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-b from-black via-orange-900/5 to-black' 
          : 'bg-gradient-to-b from-gray-50 via-orange-50/20 to-gray-50'
      }`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          className={`text-4xl md:text-5xl font-extrabold text-center mb-12 transition-colors duration-500 ${themeStyles.headingText}`}
          variants={fadeInDown}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="inline-block"
            style={{
              backgroundImage: themeStyles.subtitleGradient,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              transition: 'background-image 0.5s ease-in-out'
            }}
            animate={gradientAnimation}
          >
            Contact
          </motion.span>{' '}
          <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Me</span>
        </motion.h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className={`p-8 rounded-2xl shadow-xl border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h2 className={`text-2xl font-semibold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>Get in Touch</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-500 ${
                      effectiveTheme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#FE7743] focus:bg-gray-800/70'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#E65100] focus:bg-white'
                    }`}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-500 ${
                      effectiveTheme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#FE7743] focus:bg-gray-800/70'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#E65100] focus:bg-white'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-500 ${
                      effectiveTheme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#FE7743] focus:bg-gray-800/70'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#E65100] focus:bg-white'
                    }`}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-500 resize-none ${
                      effectiveTheme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#FE7743] focus:bg-gray-800/70'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#E65100] focus:bg-white'
                    }`}
                    placeholder="Tell me about your project, questions, or how we can collaborate..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className={`w-full group relative border-2 px-8 py-3 rounded-full overflow-hidden transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed font-semibold ${
                    effectiveTheme === 'dark'
                      ? 'border-[#FE7743] text-[#FE7743]'
                      : 'border-[#E65100] text-[#E65100]'
                  }`}
                  whileHover={{ scale: status.type !== 'loading' ? 1.02 : 1 }}
                  whileTap={{ scale: status.type !== 'loading' ? 0.98 : 1 }}
                  style={{
                    boxShadow: status.type !== 'loading' 
                      ? (effectiveTheme === 'dark'
                          ? '0 4px 15px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(254, 119, 67, 0.2)'
                          : '0 4px 15px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(230, 81, 0, 0.3)')
                      : 'none'
                  }}
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                  {status.type !== 'loading' && (
                    <motion.div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        effectiveTheme === 'dark' ? 'bg-[#FE7743]' : 'bg-[#E65100]'
                      }`}
                      initial={false}
                    />
                  )}
                </motion.button>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-lg text-center font-semibold transition-all duration-500 ${
                      status.type === 'success'
                        ? effectiveTheme === 'dark'
                          ? 'bg-green-900/30 border-2 border-green-500/50 text-green-400'
                          : 'bg-green-50 border-2 border-green-500 text-green-700'
                        : status.type === 'error'
                        ? effectiveTheme === 'dark'
                          ? 'bg-red-900/30 border-2 border-red-500/50 text-red-400'
                          : 'bg-red-50 border-2 border-red-500 text-red-700'
                        : effectiveTheme === 'dark'
                          ? 'bg-gray-900/50 border-2 border-gray-700 text-gray-400'
                          : 'bg-gray-100 border-2 border-gray-300 text-gray-600'
                    }`}
                  >
                    {status.type === 'success' && <span className="text-xl mr-2">✓</span>}
                    {status.type === 'error' && <span className="text-xl mr-2">✗</span>}
                    {status.message}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className={`p-8 rounded-2xl shadow-xl border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h2 className={`text-2xl font-semibold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className={`text-lg font-medium mb-2 transition-colors duration-500 ${themeStyles.headingText}`}>Location</h3>
                  <p className={`${themeStyles.descriptionText} transition-colors duration-500`}>Gurgaon, Haryana, India</p>
                </div>
                <div>
                  <h3 className={`text-lg font-medium mb-2 transition-colors duration-500 ${themeStyles.headingText}`}>Email</h3>
                  <a 
                    href="mailto:abhishekthatguy@gmail.com" 
                    className={`transition-colors duration-500 hover:underline ${
                      effectiveTheme === 'dark' ? 'text-[#FE7743] hover:text-[#00D9FF]' : 'text-[#E65100] hover:text-[#0288D1]'
                    }`}
                  >
                    abhishekthatguy@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className={`text-lg font-medium mb-2 transition-colors duration-500 ${themeStyles.headingText}`}>Phone</h3>
                  <a 
                    href="tel:+919621482434" 
                    className={`transition-colors duration-500 hover:underline ${
                      effectiveTheme === 'dark' ? 'text-[#FE7743] hover:text-[#00D9FF]' : 'text-[#E65100] hover:text-[#0288D1]'
                    }`}
                  >
                    +91 96214 82434
                  </a>
                </div>
                <div>
                  <h3 className={`text-lg font-medium mb-2 transition-colors duration-500 ${themeStyles.headingText}`}>Connect</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://github.com/abhishekthatguy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-500 hover:underline ${
                        effectiveTheme === 'dark' ? 'text-gray-400 hover:text-[#FE7743]' : 'text-gray-600 hover:text-[#E65100]'
                      }`}
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/abhishekthatguy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-500 hover:underline ${
                        effectiveTheme === 'dark' ? 'text-gray-400 hover:text-[#FE7743]' : 'text-gray-600 hover:text-[#E65100]'
                      }`}
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://twitter.com/abhishekthatguy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-500 hover:underline ${
                        effectiveTheme === 'dark' ? 'text-gray-400 hover:text-[#FE7743]' : 'text-gray-600 hover:text-[#E65100]'
                      }`}
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Back to Home Button */}
              <div className={`mt-8 pt-6 border-t transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'border-gray-700' : 'border-gray-300'
              }`}>
                <Link href="/">
                  <motion.button
                    className={`w-full group relative border-2 ${themeStyles.buttonBorder} ${themeStyles.buttonText} px-6 py-2.5 rounded-full overflow-hidden transition-all duration-500`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: themeStyles.buttonHoverShadow
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      boxShadow: themeStyles.buttonShadow,
                      transition: 'box-shadow 0.5s ease, border-color 0.5s ease, color 0.5s ease'
                    }}
                  >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      Back to Home
                    </span>
                    <motion.div
                      className={`absolute inset-0 ${themeStyles.buttonHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={false}
                    />
                  </motion.button>
                </Link>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 