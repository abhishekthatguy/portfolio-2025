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
          className="w-[120vw] h-[120vh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[0deg] opacity-40"
          style={{
            backgroundImage: "url('/hero-3.png')",
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
          <motion.h1
            variants={item}
            className="text-[54px] md:text-6xl font-bold text-primary mb-6"
          >
            Abhishek Singh
          </motion.h1>
          <motion.h2
            variants={item}
            className="text-2xl md:text-3xl text-muted mb-8"
          >
            Senior Software Developer
          </motion.h2>
        </motion.div>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
          Vue | React | Javascript | Angularjs | DevOps | ERP | CMS
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="border-2 border-primary hover:border-secondary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border-2 border-primary hover:border-secondary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/abhishek_resume.pdf"
            download
            className="border-2 border-primary hover:border-secondary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-secondary transition-all duration-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
} 