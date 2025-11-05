'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInUp, fadeInDown } from '@/styles/animations';

export default function PortfolioPage() {
  const { themeStyles, effectiveTheme } = useThemeStyles();

  return (
    <div className={`min-h-screen ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}>
      {/* Hero Section */}
      <section className={`py-20 transition-all duration-500 ease-in-out ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-b from-black via-black/95 to-black' 
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.h1
              className={`text-5xl md:text-6xl font-bold mb-4 transition-colors duration-500 ${themeStyles.headingText}`}
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
                Portfolio
              </motion.span>{' '}
              <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Showcase</span>
            </motion.h1>
            <p className={`text-xl ${themeStyles.descriptionText} max-w-2xl mx-auto transition-colors duration-500`}>
              Explore my work, projects, and expertise through this interactive presentation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Presentation Section */}
      <section className={`py-10 ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className={`rounded-3xl p-4 md:p-8 border shadow-2xl overflow-hidden transition-all duration-500 ${
              effectiveTheme === 'dark'
                ? 'bg-gray-900/40 border-gray-800/50'
                : 'bg-white/80 border-gray-300/50'
            }`}
          >
            {/* Presentation Container */}
            <div className={`relative w-full aspect-video rounded-2xl overflow-hidden transition-colors duration-500 ${
              effectiveTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
            }`}>
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQXsADYrs0IZk7xUQdwM71ByMS2MyJT9HM-wmtKYcIBdkiK54W_zNT06oTWWrJOKubR-lHt8dGKKAx5/pubembed?start=true&loop=true&delayms=3000"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen={true}
                mozAllowFullScreen={true}
                webkitAllowFullScreen={true}
                title="Abhishek Singh Portfolio Presentation"
                loading="lazy"
                style={{
                  border: `2px solid ${effectiveTheme === 'dark' ? 'rgba(254, 119, 67, 0.2)' : 'rgba(230, 81, 0, 0.3)'}`,
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
              <p className={`${themeStyles.descriptionText} text-sm md:text-base transition-colors duration-500`}>
                This presentation automatically loops. Use the controls below to navigate, or click to view in fullscreen.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className={`py-20 ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}>
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
              className={`rounded-2xl p-6 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>View More</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/#projects" 
                    className={`${themeStyles.descriptionText} hover:transition-colors duration-300 flex items-center gap-2 ${
                      effectiveTheme === 'dark' ? 'hover:text-[#FE7743]' : 'hover:text-[#E65100]'
                    }`}
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
                    className={`${themeStyles.descriptionText} hover:transition-colors duration-300 flex items-center gap-2 ${
                      effectiveTheme === 'dark' ? 'hover:text-[#FE7743]' : 'hover:text-[#E65100]'
                    }`}
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
                    className={`${themeStyles.descriptionText} hover:transition-colors duration-300 flex items-center gap-2 ${
                      effectiveTheme === 'dark' ? 'hover:text-[#FE7743]' : 'hover:text-[#E65100]'
                    }`}
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
              className={`rounded-2xl p-6 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>Get In Touch</h3>
              <p className={`${themeStyles.descriptionText} text-sm mb-4 transition-colors duration-500`}>
                Interested in working together or have questions about my work?
              </p>
              <Link href="/#contact">
                <motion.button
                  className={`group relative border-2 ${themeStyles.buttonBorder} ${themeStyles.buttonText} px-6 py-2 rounded-full overflow-hidden transition-all duration-500 font-semibold`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: themeStyles.buttonHoverShadow
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: themeStyles.buttonShadow,
                    transition: 'box-shadow 0.5s ease, border-color 0.5s ease, color 0.5s ease'
                  }}
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    Contact Me
                  </span>
                  <motion.div
                    className={`absolute inset-0 ${themeStyles.buttonHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={false}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Portfolio Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`rounded-2xl p-6 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>Highlights</h3>
              <ul className={`space-y-3 ${themeStyles.descriptionText} text-sm transition-colors duration-500`}>
                <li className="flex items-start gap-2">
                  <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Senior Frontend Architect</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Performance Optimization Expert</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Full-Stack Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`} fill="currentColor" viewBox="0 0 20 20">
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
      <section className={`py-10 ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <motion.button
                className={`group relative border-2 ${themeStyles.buttonBorder} ${themeStyles.buttonText} px-8 py-3 rounded-full overflow-hidden transition-all duration-500 font-semibold inline-flex items-center gap-2`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: themeStyles.buttonHoverShadow
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: themeStyles.buttonShadow,
                  transition: 'box-shadow 0.5s ease, border-color 0.5s ease, color 0.5s ease'
                }}
              >
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Back to Home
                </span>
                <motion.div
                  className={`absolute inset-0 ${themeStyles.buttonHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

