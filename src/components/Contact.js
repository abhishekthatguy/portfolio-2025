'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Text gradient animation for smooth color flow
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  },
};

const Contact = () => {
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
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-900/5 to-black pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block"
            style={{
              backgroundImage: "linear-gradient(90deg, #FE7743, #ffffff, #FE7743)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
            animate={gradientAnimation}
          >
            Get in
          </motion.span>{' '}
          <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-muted max-w-3xl mx-auto mb-4">
            Ready to collaborate on your next project? Whether you prefer to <span className="text-primary font-semibold">call directly</span> or <span className="text-primary font-semibold">reach out via the form below</span>, I'm here to discuss how we can bring your vision to life. <span className="text-primary font-semibold">I'll respond ASAP!</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
            <motion.a
              href="tel:+919621482434"
              className="flex items-center gap-3 text-primary hover:text-secondary transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">📞</span>
              <span className="text-lg font-semibold group-hover:underline">Call Me Directly</span>
            </motion.a>
            <span className="text-muted hidden sm:block">or</span>
            <motion.a
              href="mailto:abhishekthatguy@gmail.com"
              className="flex items-center gap-3 text-primary hover:text-secondary transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">📧</span>
              <span className="text-lg font-semibold group-hover:underline">Email Me</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gray-900/40 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-primary/30"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
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
                  className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300 focus:bg-gray-900/70"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
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
                  className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300 focus:bg-gray-900/70"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
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
                className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300 focus:bg-gray-900/70"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
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
                className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300 focus:bg-gray-900/70 resize-none"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full group relative border-2 border-primary text-primary px-8 py-3 rounded-full overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                style={{
                  boxShadow: status.type !== 'loading' ? "0 4px 15px rgba(0, 0, 0, 0.2)" : "none"
                }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary">
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </span>
                {status.type !== 'loading' && (
                  <motion.div
                    className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                )}
              </button>
            </motion.div>
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg text-center font-semibold ${
                  status.type === 'success'
                    ? 'bg-green-900/30 border-2 border-green-500/50 text-green-400'
                    : status.type === 'error'
                    ? 'bg-red-900/30 border-2 border-red-500/50 text-red-400'
                    : 'bg-gray-900/50 border-2 border-gray-700 text-gray-400'
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