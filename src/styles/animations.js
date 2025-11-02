/**
 * Framer Motion Animation Variants
 * Reusable animation configurations for all components
 */

export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0
    }
  }
};

export const item = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0, ease: [0.16, 1, 0.3, 1] } }
};

export const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const titleContainerAnimation = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const letterContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0
    }
  }
};

export const letterAnimation = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0, ease: [0.16, 1, 0.3, 1] }
  }
};

export const letterLoopAnimation = {
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

export const singhAnimation = {
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

export const subtitleLoopAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  scale: [1, 1.02, 1],
  opacity: [0.92, 1, 0.92],
  filter: [
    "brightness(1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))",
    "brightness(1.15) drop-shadow(0 0 15px rgba(0, 217, 255, 0.6)) drop-shadow(0 0 10px rgba(254, 119, 67, 0.4))",
    "brightness(1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
  ],
  transition: {
    backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
    scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
    opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
    filter: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
  }
};

export const techStackContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1
    }
  }
};

export const techStackItem = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Text gradient animation for smooth color flow
export const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "linear"
  }
};

// Fade in animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

// Scale animations
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

// Stagger container for lists
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

