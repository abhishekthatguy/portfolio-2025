'use client';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // Reduced from 0.18 for faster appearance
      delayChildren: 0.1 // Start sooner
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 }, // Reduced from 30
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } // Faster, smoother easing
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

// Advanced title animation with multiple effects
const titleContainerAnimation = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Advanced animation for "Abhishek" text - Option 2 gradient compatible
const abhishekAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  scale: [1, 1.03, 1],
  filter: [
    "brightness(1) drop-shadow(0 0 12px rgba(254, 119, 67, 0.4))",
    "brightness(1.15) drop-shadow(0 0 20px rgba(254, 119, 67, 0.7))",
    "brightness(1) drop-shadow(0 0 12px rgba(254, 119, 67, 0.4))"
  ],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Advanced animation for "Singh" text - light blue variant with theme support
const singhAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  scale: [1, 1.05, 1],
  filter: [
    "brightness(1.15) drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))",
    "brightness(1.25) drop-shadow(0 0 20px rgba(135, 206, 235, 0.7))",
    "brightness(1.15) drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))"
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.3
  }
};

// Letter animation for character-by-character effect - optimized for LCP
const letterContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // Faster stagger
      delayChildren: 0.05 // Reduced initial delay for faster LCP
    }
  }
};

// Advanced loop animation for individual letters - fixed for smooth animation
const letterLoopAnimation = {
  opacity: [0.95, 1, 0.95],
  y: [0, -5, 0],
  scale: [1, 1.04, 1],
  filter: [
    "brightness(1) drop-shadow(0 0 10px rgba(254, 119, 67, 0.4))",
    "brightness(1.1) drop-shadow(0 0 15px rgba(254, 119, 67, 0.6))",
    "brightness(1) drop-shadow(0 0 10px rgba(254, 119, 67, 0.4))"
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0
  }
};

const letterAnimation = {
  hidden: { 
    opacity: 0, 
    y: 15, // Reduced movement
    scale: 0.9 // Less dramatic scale for smoother transition
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4, // Faster transition
      ease: [0.16, 1, 0.3, 1] // Smoother easing
    }
  }
};

// Subtitle animation with color variations and smooth effects - combined loop
const subtitleLoopAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  scale: [1, 1.02, 1],
  opacity: [0.92, 1, 0.92],
  filter: [
    "brightness(1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))",
    "brightness(1.15) drop-shadow(0 0 15px rgba(0, 217, 255, 0.6)) drop-shadow(0 0 10px rgba(254, 119, 67, 0.4))",
    "brightness(1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
  ],
  transition: {
    backgroundPosition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear"
    },
    scale: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    },
    opacity: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    },
    filter: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Subtitle viewport entry and exit - optimized for performance
const subtitleViewportAnimation = {
  initial: {
    opacity: 0,
    y: 25, // Reduced movement
    scale: 0.96 // Less dramatic for smoother transition
    // Removed blur for better performance
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6, // Faster for better UX
      ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier easing
      delay: 0.1 // Reduced delay
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.5, // Faster exit
      ease: [0.16, 1, 0.3, 1]
    }
  },
  viewport: {
    once: true, // Only animate once for better performance
    amount: 0.3,
    margin: "-50px"
  }
};

// Tech Stack Animation Variants - simplified for reliability
const techStackContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1
    }
  }
};

const techStackItem = {
  hidden: { 
    opacity: 0, 
    y: 10,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Tech Stack Data with color variations - enhanced for visibility
const techStacks = [
  { name: 'Vue', color: '#4FC3F7', bgColor: 'rgba(79, 195, 247, 0.25)', glowColor: 'rgba(79, 195, 247, 0.5)', textShadow: '0 0 8px rgba(79, 195, 247, 0.6)' },
  { name: 'React', color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.25)', glowColor: 'rgba(97, 218, 251, 0.5)', textShadow: '0 0 8px rgba(97, 218, 251, 0.6)' },
  { name: 'Next.js', color: '#ffffff', bgColor: 'rgba(255, 255, 255, 0.25)', glowColor: 'rgba(255, 255, 255, 0.6)', subtitle: 'SSR', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' },
  { name: 'MERN', color: '#00D9FF', bgColor: 'rgba(0, 217, 255, 0.25)', glowColor: 'rgba(0, 217, 255, 0.5)', textShadow: '0 0 8px rgba(0, 217, 255, 0.6)' },
  { name: 'DevOps', color: '#FF6B6B', bgColor: 'rgba(255, 107, 107, 0.25)', glowColor: 'rgba(255, 107, 107, 0.5)', textShadow: '0 0 8px rgba(255, 107, 107, 0.6)' },
  { name: 'ERP', color: '#FE7743', bgColor: 'rgba(254, 119, 67, 0.25)', glowColor: 'rgba(254, 119, 67, 0.5)', textShadow: '0 0 8px rgba(254, 119, 67, 0.6)' },
  { name: 'CMS', color: '#4ECDC4', bgColor: 'rgba(78, 205, 196, 0.25)', glowColor: 'rgba(78, 205, 196, 0.5)', textShadow: '0 0 8px rgba(78, 205, 196, 0.6)' },
];

// Particle Animation Component - optimized for performance
const ParticleAnimation = () => {
  // Generate random particles with fixed target positions - reduced count for performance
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => { // Reduced from 50 to 30
      const startX = Math.random() * 100;
      const startY = 100 + Math.random() * 20; // Start from bottom with some variation
      const driftX = (Math.random() - 0.5) * 40; // Horizontal drift
      const endY = startY - 400; // Move upward
      
      return {
        id: i,
        x: startX,
        y: startY,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        driftX: driftX,
        endY: endY,
      };
    });
  }, []);

  // Generate sparkles with fixed positions - reduced for performance
  const sparkles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({ // Reduced from 30 to 20
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[5] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, rgba(254, 119, 67, 0.6), rgba(254, 119, 67, 0.2), transparent)',
            boxShadow: '0 0 10px rgba(254, 119, 67, 0.4)',
          }}
          animate={{
            y: [0, particle.endY],
            x: [0, particle.driftX],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
      {/* Additional smaller sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: '3px',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background image container */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Background image with gradient border dissolve */}
        <motion.div
          className="absolute inset-0 w-full h-full relative"
          style={{
            backgroundImage: "url('/hero-1.webp')",
            backgroundSize: 'contain',
            backgroundPosition: 'top right',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
          }}
          animate={{
            opacity: [1, 0.5, 1],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Gradient borders to dissolve edges */}
          <div 
            className="absolute inset-0" 
            style={{
              background: 'radial-gradient(ellipse 80% 100% at center right, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)'
            }}
          />
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 100%)'
            }}
          />
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.6) 100%)'
            }}
          />
        </motion.div>
        {/* Gradient overlay - lighter for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        {/* Additional subtle radial gradient for depth */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)'
          }}
        />
      </div>
      
      {/* Particle Animation Overlay */}
      <ParticleAnimation />
      {/* Content - optimized for LCP */}
      <div className="container mx-auto px-4 py-8 text-center relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-4 md:mb-6"
          style={{ willChange: 'contents' }} // Performance hint
        >
          <motion.div
            variants={item}
            className="mb-4 md:mb-6"
            animate={floatingAnimation}
            initial={false} // Prevent blocking initial render
          >
            <motion.h1 
              className="text-5xl md:text-8xl lg:text-9xl font-bold mb-2 leading-tight"
              style={{
                lineHeight: "1.1", // Slightly relaxed from tight to allow descenders
                overflow: "visible", // Ensure descenders aren't clipped
                paddingBottom: "0.05em" // Small padding for descender space
              }}
              {...titleContainerAnimation}
              initial={false} // Prevent blocking initial render for LCP
            >
              {/* Abhishek with letter-by-letter animation */}
              <motion.span
                className="inline-block relative"
                variants={letterContainer}
                initial="hidden"
                animate="visible"
              >
                {["A", "b", "h", "i", "s", "h", "e", "k"].map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={letterAnimation}
                    style={{
                      backgroundImage: "linear-gradient(90deg, #FE7743, #FFA366, #FE7743, #FF8C4D, #FE7743)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block"
                    }}
                    animate={{
                      opacity: letterLoopAnimation.opacity,
                      y: letterLoopAnimation.y,
                      scale: letterLoopAnimation.scale,
                      filter: letterLoopAnimation.filter,
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      transition: {
                        ...letterLoopAnimation.transition,
                        backgroundPosition: {
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        delay: index * 0.08 // Adjusted delay for smoother staggered animation
                      }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
              {' '}
              {/* Singh with light blue gradient - theme adaptive */}
              <motion.span
                className="inline-block"
                style={{
                  backgroundImage: "linear-gradient(90deg, #87CEEB, #00D9FF, #B0E0E6, #4DD0E1, #00D9FF, #ADD8E6, #87CEEB)",
                  backgroundSize: "300% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                  lineHeight: "1.15", // Slightly increased for descenders
                  paddingBottom: "0.15em", // Increased space for descenders like "g"
                  paddingTop: "0.02em", // Small top padding for balance
                  verticalAlign: "baseline", // Align properly with baseline
                  overflow: "visible" // Ensure no clipping
                }}
                animate={singhAnimation}
              >
                Singh
              </motion.span>
          </motion.h1>
          </motion.div>
          <motion.h2
            className="text-xl md:text-3xl lg:text-4xl mb-4 md:mb-6 relative inline-block"
            style={{
              backgroundImage: "linear-gradient(90deg, #FF6B35, #FE7743, #00B8E6, #00D9FF, #FE7743, #0099CC, #00D9FF, #FF8C61)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={subtitleViewportAnimation.initial}
            whileInView={subtitleViewportAnimation.whileInView}
            exit={subtitleViewportAnimation.exit}
            viewport={subtitleViewportAnimation.viewport}
            animate={subtitleLoopAnimation}
          >
            Senior Frontend Architect & Full-Stack Developer
          </motion.h2>
        </motion.div>
        {/* Advanced Tech Stack Display - optimized delays */}
        <motion.div
          className="max-w-4xl mx-auto mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }} // Faster for better UX
        >
          <motion.p
            className="text-sm md:text-base text-muted/80 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }} // Reduced delay and duration
          >
            Building high-performance applications with
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-3 items-center"
            variants={techStackContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {techStacks.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={techStackItem}
                className="group relative"
                whileHover={{
                  scale: 1.08,
                  y: -3,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                {/* Simple tech badge */}
                <div
                  className="relative px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${tech.bgColor}, ${tech.bgColor.replace('0.25', '0.35')})`,
                    boxShadow: `0 2px 8px rgba(0, 0, 0, 0.3), 0 0 12px ${tech.glowColor}40`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span
                    className="text-xs md:text-sm font-semibold flex items-center gap-1.5 relative z-10"
                    style={{ 
                      color: tech.color,
                      textShadow: tech.textShadow || '0 0 8px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <span>{tech.name}</span>
                    {tech.subtitle && (
                      <span 
                        className="text-[10px] md:text-xs opacity-80 font-normal"
                        style={{ textShadow: tech.textShadow || '0 0 6px rgba(0, 0, 0, 0.5)' }}
                      >
                        ({tech.subtitle})
                      </span>
                    )}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex gap-3 md:gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }} // Faster, reduced delay
        >
          <motion.a
            href="#contact"
            className="group relative border-2 border-primary text-primary px-6 md:px-8 py-2.5 md:py-3 rounded-full overflow-hidden transition-all duration-300 text-sm md:text-base cursor-pointer"
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
            className="group relative border-2 border-primary text-primary px-6 md:px-8 py-2.5 md:py-3 rounded-full overflow-hidden transition-all duration-300 text-sm md:text-base cursor-pointer"
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
            className="group relative border-2 border-primary text-primary px-6 md:px-8 py-2.5 md:py-3 rounded-full overflow-hidden transition-all duration-300 flex items-center gap-2 text-sm md:text-base cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
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