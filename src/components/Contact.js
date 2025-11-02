'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInDown, fadeInUp } from '@/styles/animations';

const Contact = () => {
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
    <section id="contact" className={`py-20 ${themeStyles.sectionBg} relative overflow-hidden transition-all duration-500 ease-in-out`}>
      {/* Background gradient effect - Theme-aware */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-b from-black via-orange-900/5 to-black' 
          : 'bg-gradient-to-b from-gray-50 via-orange-50/20 to-gray-50'
      }`}></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-6 ${themeStyles.headingText} transition-colors duration-500`}
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
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
            Get in
          </motion.span>{' '}
          <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Touch</span>
        </motion.h2>

        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          <p className={`text-lg ${themeStyles.descriptionText} max-w-3xl mx-auto mb-4 transition-colors duration-500`}>
            Ready to collaborate on your next project? Whether you prefer to <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>call directly</span> or <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>reach out via the form below</span>, I'm here to discuss how we can bring your vision to life. <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>I'll respond ASAP!</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
            <motion.a
              href="tel:+919621482434"
              className={`flex items-center gap-3 transition-colors duration-500 group ${
                effectiveTheme === 'dark' ? 'text-[#FE7743] hover:text-white' : 'text-[#E65100] hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">📞</span>
              <span className="text-lg font-semibold group-hover:underline">Call Me Directly</span>
            </motion.a>
            <span className={`${themeStyles.mutedText} hidden sm:block transition-colors duration-500`}>or</span>
            <motion.a
              href="mailto:abhishekthatguy@gmail.com"
              className={`flex items-center gap-3 transition-colors duration-500 group ${
                effectiveTheme === 'dark' ? 'text-[#FE7743] hover:text-white' : 'text-[#E65100] hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">📧</span>
              <span className="text-lg font-semibold group-hover:underline">Email Me</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.3 }}
          className={`backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border transition-all duration-500 ${
            effectiveTheme === 'dark'
              ? 'bg-gray-900/40 border-[#FE7743]/30'
              : 'bg-white/80 border-gray-300'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                  effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                }`}>
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-500 resize-none ${
                    effectiveTheme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#FE7743] focus:bg-gray-800/70'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#E65100] focus:bg-white'
                  }`}
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
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-500 resize-none ${
                    effectiveTheme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#FE7743] focus:bg-gray-800/70'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#E65100] focus:bg-white'
                  }`}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-500 resize-none ${
                  effectiveTheme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#FE7743] focus:bg-gray-800/70'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#E65100] focus:bg-white'
                }`}
              />
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, questions, or how we can collaborate..."
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-500 resize-none ${
                  effectiveTheme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#FE7743] focus:bg-gray-800/70'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#E65100] focus:bg-white'
                }`}
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className={`w-full group relative border-2 px-8 py-3 rounded-full overflow-hidden transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed font-semibold ${
                  effectiveTheme === 'dark'
                    ? 'border-[#FE7743] text-[#FE7743]'
                    : 'border-[#E65100] text-[#E65100]'
                }`}
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
              </button>
            </motion.div>
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
      </div>
    </section>
  );
};

export default Contact; 