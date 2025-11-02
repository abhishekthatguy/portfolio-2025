'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Text gradient animation for smooth color flow
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                Portfolio
              </motion.span>{' '}
              <span className="text-primary">Showcase</span>
            </motion.h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Explore my work, projects, and expertise through this interactive presentation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Presentation Section */}
      <section className="py-10 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/40 rounded-3xl p-4 md:p-8 border border-gray-800/50 shadow-2xl overflow-hidden"
          >
            {/* Presentation Container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-800">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQXsADYrs0IZk7xUQdwM71ByMS2MyJT9HM-wmtKYcIBdkiK54W_zNT06oTWWrJOKubR-lHt8dGKKAx5/pubembed?start=true&loop=true&delayms=3000"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen={true}
                mozAllowFullScreen={true}
                webkitAllowFullScreen={true}
                title="Abhishek Singh Portfolio Presentation"
                loading="lazy"
                style={{
                  border: '2px solid rgba(254, 119, 67, 0.2)',
                }}
              />
            </div>

            {/* Presentation Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-center"
            >
              <p className="text-muted text-sm md:text-base">
                This presentation automatically loops. Use the controls below to navigate, or click to view in fullscreen.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800"
            >
              <h3 className="text-xl font-bold text-primary mb-4">View More</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/#projects" 
                    className="text-muted hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Featured Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#experience" 
                    className="text-muted hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Work Experience
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#skills" 
                    className="text-muted hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Technical Skills
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Get In Touch</h3>
              <p className="text-muted text-sm mb-4">
                Interested in working together or have questions about my work?
              </p>
              <Link
                href="/#contact"
                className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Portfolio Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Highlights</h3>
              <ul className="space-y-3 text-muted text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Senior Frontend Architect</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Performance Optimization Expert</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Full-Stack Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Team Leadership</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-black rounded-full transition-all duration-300 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

