'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';

// Text gradient animation for smooth color flow
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  show: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    x: -50,
    scale: 0.9,
    transition: { duration: 0.4 }
  },
};

const itemRight = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  show: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    x: 50,
    scale: 0.9,
    transition: { duration: 0.4 }
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-900/5 to-black pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
            Selected
          </motion.span>{' '}
          <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          className="text-lg text-muted text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Throughout my <span className="text-primary font-semibold">7+ years</span> of experience, I've led development teams and architected scalable solutions across <span className="text-primary font-semibold">insurance, healthcare, and enterprise domains</span>. These selected projects showcase my expertise in <span className="text-primary font-semibold">performance optimization</span>, <span className="text-primary font-semibold">modern frontend architecture</span>, and delivering high-impact results through innovative technical solutions.
        </motion.p>

        {/* Snake Ladder Timeline */}
        <div className="relative">
          {/* Vertical line connecting all projects */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 via-green-500 to-orange-500 opacity-30 hidden lg:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ originY: 0 }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-12 lg:space-y-16"
          >
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const variants = isEven ? item : itemRight;
              
              return (
                <motion.div
                  key={project.id}
                  variants={variants}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Year Badge - Center */}
                  <motion.div
                    className={`relative z-20 flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-2xl border-4 border-primary`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-center">
                      <div className="text-4xl lg:text-5xl mb-1">{project.icon}</div>
                      <div className="text-xs lg:text-sm font-bold text-white">{project.year}</div>
                    </div>
                    
                    {/* Glowing ring animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-full border-4 ${project.borderColor}`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Project Card */}
                  <motion.div
                    className={`flex-1 w-full lg:max-w-lg bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border ${project.borderColor} hover:border-opacity-100 transition-all duration-300`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted mb-4">{project.year}</p>
                      </div>
                    </div>

                    <p className="text-white/90 mb-4 text-sm md:text-base leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 6).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className={`px-3 py-1 rounded-full border ${project.borderColor} text-primary bg-transparent hover:bg-primary hover:text-secondary transition-all duration-200 text-xs font-semibold`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 6 && (
                        <span className={`px-3 py-1 rounded-full border ${project.borderColor} text-primary/70 text-xs font-semibold`}>
                          +{project.tech.length - 6} more
                        </span>
                      )}
                    </div>

                    <Link href={`/projects/${project.id}`}>
                      <motion.button
                        className={`w-full group relative border-2 border-primary text-primary px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300`}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
                        }}
                      >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary font-semibold">
                          Learn More →
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 