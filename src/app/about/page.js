'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInUp, fadeInDown } from '@/styles/animations';

export default function AboutPage() {
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
                About
              </motion.span>{' '}
              <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Me</span>
            </motion.h1>
            <p className={`text-xl ${themeStyles.descriptionText} max-w-2xl mx-auto transition-colors duration-500`}>
              Learn more about my journey, expertise, and passion for building exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Animated circular border glow effect - Theme-aware */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-4 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'border-[#FE7743]' : 'border-[#E65100]'
                  }`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: effectiveTheme === 'dark' ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className={`relative w-full h-full rounded-full overflow-hidden border-4 shadow-2xl z-10 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'border-[#FE7743]' : 'border-[#E65100]'
                  }`}
                  style={{
                    boxShadow: effectiveTheme === 'dark' 
                      ? '0 25px 50px -12px rgba(254, 119, 67, 0.25), 0 0 0 1px rgba(254, 119, 67, 0.1)'
                      : '0 25px 50px -12px rgba(230, 81, 0, 0.25), 0 0 0 1px rgba(230, 81, 0, 0.1)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/about_profile.png"
                    alt="Abhishek Singh - Senior Frontend Architect"
                    fill
                    className="object-contain object-center"
                    priority
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Intro */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              <motion.h2 
                className={`text-3xl md:text-4xl font-bold transition-colors duration-500 ${themeStyles.headingText}`}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                <motion.span
                  className="inline-block"
                  style={{
                    backgroundImage: themeStyles.abhishekGradient,
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block",
                    transition: 'background-image 0.5s ease-in-out'
                  }}
                  animate={gradientAnimation}
                >
                  Senior Frontend
                </motion.span>{' '}
                <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Architect</span>
              </motion.h2>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed transition-colors duration-500`}>
                As a <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>Senior Frontend Architect</span>, my specialty is twofold: leading high-performing front-end teams and designing high-performance, scalable UI architecture. I have a deep, technical focus on performance optimization, mastering <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Core Web Vitals</span> and profiling techniques to achieve top-tier PageSpeed scores.
              </p>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed transition-colors duration-500`}>
                My core expertise spans the <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>MERN stack</span> (MongoDB, Express, React, Node.js), <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>TypeScript</span>, and modern SSR frameworks like <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Next.js</span>. I am toolkit-agnostic, selecting the best technology—from Vue.js to lightweight tools like Alpine.js and Tailwind CSS—and guide my team in managing the end-to-end application lifecycle via robust DevOps (CI/CD) pipelines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Sections */}
      <section className={`py-20 ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>Core Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>Frontend Technologies</h4>
                  <ul className={`space-y-2 ${themeStyles.descriptionText} transition-colors duration-500`}>
                    <li>• React & Next.js (SSR)</li>
                    <li>• Vue.js & Nuxt.js</li>
                    <li>• TypeScript & JavaScript</li>
                    <li>• HTML5, CSS3, Sass</li>
                    <li>• Tailwind CSS & Alpine.js</li>
                    <li>• AngularJS</li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>Backend & Full Stack</h4>
                  <ul className={`space-y-2 ${themeStyles.descriptionText} transition-colors duration-500`}>
                    <li>• Node.js & Express.js</li>
                    <li>• MongoDB</li>
                    <li>• RESTful APIs</li>
                    <li>• GraphQL</li>
                    <li>• MERN Stack Architecture</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Performance Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>Performance Optimization</h3>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed mb-4 transition-colors duration-500`}>
                I specialize in performance optimization with a focus on <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Core Web Vitals</span> and PageSpeed optimization. My approach includes:
              </p>
              <ul className={`space-y-3 ${themeStyles.descriptionText} transition-colors duration-500`}>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Profiling and identifying performance bottlenecks using Chrome DevTools, Lighthouse, and WebPageTest</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Optimizing bundle sizes, code splitting, and lazy loading strategies</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Implementing server-side rendering (SSR) and static site generation (SSG) for optimal performance</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Enhancing Core Web Vitals: LCP, FID, CLS scores to achieve top-tier PageSpeed ratings</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Optimizing images, fonts, and assets for faster load times</span>
                </li>
              </ul>
            </motion.div>

            {/* Leadership & Team Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>Leadership & Team Management</h3>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed mb-4 transition-colors duration-500`}>
                As a team leader, I focus on:
              </p>
              <ul className={`space-y-3 ${themeStyles.descriptionText} transition-colors duration-500`}>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Leading high-performing front-end development teams</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Mentoring developers on best practices and modern development workflows</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Architecting scalable UI solutions that align with business objectives</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Establishing coding standards and review processes</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Collaborating with cross-functional teams including designers, backend developers, and product managers</span>
                </li>
              </ul>
            </motion.div>

            {/* DevOps & CI/CD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>DevOps & CI/CD</h3>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed mb-4 transition-colors duration-500`}>
                I guide teams in managing the end-to-end application lifecycle through:
              </p>
              <ul className={`space-y-3 ${themeStyles.descriptionText} transition-colors duration-500`}>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Setting up robust CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Deployment strategies using AWS, Docker, and containerization</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Automated testing and quality assurance workflows</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Monitoring and logging solutions for production applications</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Infrastructure as Code (IaC) practices</span>
                </li>
              </ul>
            </motion.div>

            {/* Toolkit Agnostic Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>Toolkit Agnostic Philosophy</h3>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed transition-colors duration-500`}>
                I believe in selecting the best technology for each project's unique requirements. Whether it's a heavy-weight framework like <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Vue.js</span> or <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>React</span>, or lightweight solutions like <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Alpine.js</span> and <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Tailwind CSS</span>, I make technology decisions based on project needs, team expertise, and long-term maintainability rather than personal preference.
              </p>
            </motion.div>
          </div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link href="/">
              <motion.button
                className={`group relative border-2 ${themeStyles.buttonBorder} ${themeStyles.buttonText} px-8 py-3 rounded-full overflow-hidden transition-all duration-500`}
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

