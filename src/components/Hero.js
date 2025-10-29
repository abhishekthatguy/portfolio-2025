'use client';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

// Floating animation for continuous loop
const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Text gradient animation for smooth color flow
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "linear"
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Diagonal background image */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Background image */}
        <div
          className="w-[120vw] h-[120vh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[0deg] opacity-30"
          style={{
            backgroundImage: "url('/hero-1.webp')",
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <motion.div
            variants={item}
            className="mb-6"
            animate={floatingAnimation}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2 leading-tight">
              <motion.span
                className="inline-block"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FE7743, #ffffff, #FE7743)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block"
                }}
                animate={gradientAnimation}
              >
                Abhishek
              </motion.span>
              {' '}
              <span className="text-primary inline-block">Singh</span>
            </h1>
          </motion.div>
          <motion.h2
            variants={item}
            className="text-2xl md:text-4xl text-muted mb-8"
            animate={floatingAnimation}
          >
            Senior Frontend Architect & Full-Stack Developer
          </motion.h2>
        </motion.div>
        <motion.p 
          className="text-xl text-muted max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
        Building high-performance applications with <br/> Vue | React | Next.js (SSR) | MERN | DevOps | ERP | CMS
        </motion.p>
        <motion.div 
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <motion.a
            href="#contact"
            className="group relative border-2 border-primary text-primary px-8 py-3 rounded-full overflow-hidden transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary">
              Contact Me
            </span>
            <motion.div
              className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>
          <motion.a
            href="#projects"
            className="group relative border-2 border-primary text-primary px-8 py-3 rounded-full overflow-hidden transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary">
              View Projects
            </span>
            <motion.div
              className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>
          <motion.a
            href="/abhishek_resume.pdf"
            download
            className="group relative border-2 border-primary text-primary px-8 py-3 rounded-full overflow-hidden transition-all duration-300 flex items-center gap-2"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary">
              Download Resume
            </span>
            <motion.div
              className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 