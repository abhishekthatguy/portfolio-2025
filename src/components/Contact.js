'use client';

import React, { useState } from 'react';

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
      const response = await fetch('http://localhost:5001/api/submit-form', {
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
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-orange-400 mb-2">Get in Touch</h2>
          <p className="text-lg text-white">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-orange-400 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition rounded-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-orange-400 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition rounded-none"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-orange-400 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition rounded-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-orange-400 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition rounded-none"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full py-3 rounded-full border-2 border-orange-400 text-orange-400 font-bold bg-transparent hover:bg-orange-400 hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status.message && (
            <div
              className={`mt-2 text-center text-sm ${
                status.type === 'success'
                  ? 'text-green-600'
                  : status.type === 'error'
                  ? 'text-red-600'
                  : 'text-gray-600'
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact; 