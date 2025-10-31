'use client';
import { motion } from 'framer-motion';
import { useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // Faster for LCP
      delayChildren: 0 // Start immediately
    }
  }
};

const item = {
  hidden: { opacity: 1, y: 0 }, // Start visible for LCP - no initial fade
  show: { opacity: 1, y: 0, transition: { duration: 0, ease: [0.16, 1, 0.3, 1] } } // Instant - already visible
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
  hidden: { opacity: 1 }, // Visible for LCP
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0 // Start immediately for LCP
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
    opacity: 1, // Start visible for LCP - no fade in
    y: 0, // No movement for initial render
    scale: 1 // No scale for initial render
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0, // Instant - already visible
      ease: [0.16, 1, 0.3, 1]
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

// Subtitle viewport entry and exit - optimized for LCP
const subtitleViewportAnimation = {
  initial: {
    opacity: 1, // Visible for LCP
    y: 0, // No movement for initial render
    scale: 1 // No scale for initial render
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0, // Instant - already visible
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 1, // Keep visible
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  viewport: {
    once: true,
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

// Tech-Themed Water Droplet Ripple Effect Component
const WaterDropletEffect = ({ sectionRef }) => {
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]);
  const particlesRef = useRef([]);
  const isReadyRef = useRef(false);
  const { getEffectiveTheme } = useTheme();

  // Tech-themed colors - theme-aware
  const getThemeColors = () => {
    const theme = getEffectiveTheme();
    if (theme === 'dark') {
      return {
        primaryColor: { r: 254, g: 119, b: 67 }, // #FE7743 Orange
        secondaryColor: { r: 0, g: 217, b: 255 }, // #00D9FF Cyan
      };
    } else {
      // Light theme - slightly darker/more vibrant for visibility
      return {
        primaryColor: { r: 238, g: 100, b: 50 }, // Slightly darker orange
        secondaryColor: { r: 0, g: 180, b: 220 }, // Slightly darker cyan
      };
    }
  };
  
  const themeColors = getThemeColors();
  const primaryColor = themeColors.primaryColor;
  const secondaryColor = themeColors.secondaryColor;

  // VIBGYOR (Rainbow) colors - Violet, Indigo, Blue, Green, Yellow, Orange, Red
  const vibgyorColors = [
    { r: 148, g: 0, b: 211 },   // Violet
    { r: 75, g: 0, b: 130 },    // Indigo
    { r: 0, g: 0, b: 255 },     // Blue
    { r: 0, g: 255, b: 0 },     // Green
    { r: 255, g: 255, b: 0 },   // Yellow
    { r: 255, g: 165, b: 0 },   // Orange
    { r: 255, g: 0, b: 0 },     // Red
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef?.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let cleanupFn = null;
    
    // Get current theme colors - will be re-evaluated on theme change
    const currentTheme = getEffectiveTheme();
    const currentColors = getThemeColors();

    function setupCanvas() {
      // Initialize canvas size
      const resizeCanvas = () => {
        const rect = section.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      };

      resizeCanvas();
      
      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 250);
      };
      window.addEventListener('resize', handleResize, { passive: true });

    // Tech Particle class for ripple effects - updated to use theme colors
    class TechParticle {
      constructor(x, y, color, angle) {
        this.x = x;
        this.y = y;
        this.vx = Math.cos(angle) * (2 + Math.random() * 3);
        this.vy = Math.sin(angle) * (2 + Math.random() * 3);
        this.life = 1;
        this.decay = 0.015 + Math.random() * 0.01;
        this.size = 2 + Math.random() * 3;
        // Use provided color or fall back to theme colors
        this.color = color || (Math.random() > 0.5 ? currentColors.primaryColor : currentColors.secondaryColor);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.vx *= 0.98; // Friction
        this.vy *= 0.98;
        return this.life > 0;
      }

      draw() {
        const alpha = this.life * 0.8;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.8})`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
        ctx.fill();
        
        ctx.shadowBlur = 0;
      }
    }

    // Enhanced Tech Ripple class with VIBGYOR support - uses theme colors
    class TechRipple {
      constructor(x, y, useVibgyor = false) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = Math.max(canvas.width, canvas.height) * 1.2;
        this.speed = 3 + Math.random() * 2;
        this.opacity = 0.8;
        this.useVibgyor = useVibgyor;
        // Use current theme colors
        this.color = useVibgyor ? vibgyorColors[Math.floor(Math.random() * vibgyorColors.length)] : (Math.random() > 0.5 ? currentColors.primaryColor : currentColors.secondaryColor);
        this.life = 1;
        this.segments = 6 + Math.floor(Math.random() * 6); // Hexagonal segments
        this.rotation = Math.random() * Math.PI * 2;
        this.colorOffset = Math.random() * vibgyorColors.length; // For rainbow rotation
        this.particles = [];
        
        // Create tech particles on spawn with VIBGYOR colors if enabled
        for (let i = 0; i < 8; i++) {
          const angle = (Math.PI * 2 / 8) * i;
          const particleColor = useVibgyor 
            ? vibgyorColors[Math.floor((i + this.colorOffset) % vibgyorColors.length)]
            : this.color;
          this.particles.push(new TechParticle(x, y, particleColor, angle));
        }
      }

      // Get color at specific angle for rainbow gradient
      getRainbowColor(angle) {
        if (!this.useVibgyor) return this.color;
        
        // Normalize angle to 0-2π and map to VIBGYOR spectrum
        const normalizedAngle = (angle % (Math.PI * 2)) / (Math.PI * 2);
        const colorIndex = (normalizedAngle * vibgyorColors.length + this.colorOffset) % vibgyorColors.length;
        const index1 = Math.floor(colorIndex);
        const index2 = (index1 + 1) % vibgyorColors.length;
        const t = colorIndex - index1;
        
        const c1 = vibgyorColors[index1];
        const c2 = vibgyorColors[index2];
        
        return {
          r: Math.round(c1.r + (c2.r - c1.r) * t),
          g: Math.round(c1.g + (c2.g - c1.g) * t),
          b: Math.round(c1.b + (c2.b - c1.b) * t)
        };
      }

      update() {
        this.radius += this.speed;
        this.life = 1 - (this.radius / this.maxRadius);
        this.opacity = this.life * 0.7;
        this.rotation += 0.02;
        
        // Rotate VIBGYOR color offset for animated rainbow effect
        if (this.useVibgyor) {
          this.colorOffset += 0.05;
          if (this.colorOffset >= vibgyorColors.length) {
            this.colorOffset = 0;
          }
        }
        
        // Update particles
        this.particles = this.particles.filter(p => p.update());
        
        return this.life > 0;
      }

      drawHexagon(x, y, radius, rotation) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i + rotation;
          const px = x + Math.cos(angle) * radius;
          const py = y + Math.sin(angle) * radius;
          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.closePath();
      }

      draw() {
        if (this.opacity <= 0) return;

        const segments = this.segments;
        const segmentAngle = (Math.PI * 2) / segments;
        const innerRadius = this.radius * 0.85;
        
        // Draw hexagonal/circuit-like ripple pattern
        for (let i = 0; i < segments; i++) {
          const angle = segmentAngle * i + this.rotation;
          const startAngle = angle - segmentAngle / 3;
          const endAngle = angle + segmentAngle / 3;
          
          // Get color for this segment (VIBGYOR or solid)
          const segmentColor = this.useVibgyor ? this.getRainbowColor(angle) : this.color;
          
          // Outer arc segment with glow
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, startAngle, endAngle);
          ctx.strokeStyle = `rgba(${segmentColor.r}, ${segmentColor.g}, ${segmentColor.b}, ${this.opacity})`;
          ctx.lineWidth = 3;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(${segmentColor.r}, ${segmentColor.g}, ${segmentColor.b}, ${this.opacity * 0.6})`;
          ctx.stroke();
          
          // Inner arc segment with VIBGYOR gradient
          if (this.radius > 30) {
            const innerColor = this.useVibgyor ? this.getRainbowColor(angle + Math.PI) : this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, innerRadius, startAngle, endAngle);
            ctx.strokeStyle = `rgba(${innerColor.r}, ${innerColor.g}, ${innerColor.b}, ${this.opacity * 0.4})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
        
        // Circuit line connections between segments with VIBGYOR gradient
        if (this.radius > 40 && segments >= 6) {
          for (let i = 0; i < segments; i++) {
            const angle1 = segmentAngle * i + this.rotation;
            const angle2 = segmentAngle * ((i + 1) % segments) + this.rotation;
            const midRadius = this.radius * 0.92;
            
            if (this.useVibgyor) {
              // Create gradient line for VIBGYOR
              const gradient = ctx.createLinearGradient(
                this.x + Math.cos(angle1) * midRadius,
                this.y + Math.sin(angle1) * midRadius,
                this.x + Math.cos(angle2) * midRadius,
                this.y + Math.sin(angle2) * midRadius
              );
              const c1 = this.getRainbowColor(angle1);
              const c2 = this.getRainbowColor(angle2);
              gradient.addColorStop(0, `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${this.opacity * 0.3})`);
              gradient.addColorStop(1, `rgba(${c2.r}, ${c2.g}, ${c2.b}, ${this.opacity * 0.3})`);
              
              ctx.beginPath();
              ctx.moveTo(
                this.x + Math.cos(angle1) * midRadius,
                this.y + Math.sin(angle1) * midRadius
              );
              ctx.lineTo(
                this.x + Math.cos(angle2) * midRadius,
                this.y + Math.sin(angle2) * midRadius
              );
              ctx.strokeStyle = gradient;
            } else {
              ctx.beginPath();
              ctx.moveTo(
                this.x + Math.cos(angle1) * midRadius,
                this.y + Math.sin(angle1) * midRadius
              );
              ctx.lineTo(
                this.x + Math.cos(angle2) * midRadius,
                this.y + Math.sin(angle2) * midRadius
              );
              ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.3})`;
            }
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        
        // Digital glitch effect - random lines with VIBGYOR
        if (Math.random() < 0.1 && this.radius > 50) {
          const glitchAngle = Math.random() * Math.PI * 2;
          const glitchLength = 20 + Math.random() * 30;
          const glitchColor = this.useVibgyor ? this.getRainbowColor(glitchAngle) : this.color;
          
          ctx.beginPath();
          ctx.moveTo(
            this.x + Math.cos(glitchAngle) * this.radius,
            this.y + Math.sin(glitchAngle) * this.radius
          );
          ctx.lineTo(
            this.x + Math.cos(glitchAngle) * (this.radius + glitchLength),
            this.y + Math.sin(glitchAngle) * (this.radius + glitchLength)
          );
          ctx.strokeStyle = `rgba(${glitchColor.r}, ${glitchColor.g}, ${glitchColor.b}, ${this.opacity * 0.5})`;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 5;
          ctx.stroke();
        }
        
        // Hexagonal center core with VIBGYOR
        if (this.radius < 80) {
          const centerColor = this.useVibgyor ? this.getRainbowColor(this.rotation) : this.color;
          this.drawHexagon(this.x, this.y, Math.min(this.radius * 0.3, 25), this.rotation);
          ctx.fillStyle = `rgba(${centerColor.r}, ${centerColor.g}, ${centerColor.b}, ${this.opacity * 1.2})`;
          ctx.shadowBlur = 15;
          ctx.fill();
        }
        
        // Circuit nodes at segment points with VIBGYOR
        for (let i = 0; i < segments; i++) {
          const angle = segmentAngle * i + this.rotation;
          const nodeRadius = this.radius * 0.88;
          const nodeX = this.x + Math.cos(angle) * nodeRadius;
          const nodeY = this.y + Math.sin(angle) * nodeRadius;
          const nodeColor = this.useVibgyor ? this.getRainbowColor(angle) : this.color;
          
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${nodeColor.r}, ${nodeColor.g}, ${nodeColor.b}, ${this.opacity * 0.9})`;
          ctx.shadowBlur = 8;
          ctx.fill();
        }
        
        ctx.shadowBlur = 0;
        
        // Draw particles
        this.particles.forEach(p => p.draw());
      }
    }

      // Create tech ripple on click - use current theme colors
      const handleClick = (e) => {
        // Check if clicked element is a button or link
        const target = e.target;
        const isButton = target.tagName === 'BUTTON' || 
                        target.tagName === 'A' ||
                        target.closest('a') !== null ||
                        target.closest('button') !== null ||
                        target.classList.contains('cursor-pointer');
        
        // Use VIBGYOR colors if not clicking on a button/link
        const useVibgyor = !isButton;
        
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create 1-2 tech ripples with VIBGYOR or tech colors
        const rippleCount = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < rippleCount; i++) {
          const offset = (Math.random() - 0.5) * 25;
          // Update ripple constructor to use current theme colors
          const ripple = new TechRipple(x + offset, y + offset, useVibgyor);
          // Override colors if needed
          if (!useVibgyor) {
            ripple.color = Math.random() > 0.5 ? currentColors.primaryColor : currentColors.secondaryColor;
          }
          ripplesRef.current.push(ripple);
        }
      };

      // Animation loop
      const animate = () => {
        if (!isReadyRef.current) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw ripples
        ripplesRef.current = ripplesRef.current.filter(ripple => {
          const isAlive = ripple.update();
          if (isAlive) ripple.draw();
          return isAlive;
        });

        animationId = requestAnimationFrame(animate);
      };

      // Start animation
      animate();

      // Add click event listener
      section.addEventListener('click', handleClick, { passive: true });

      // Store cleanup function
      cleanupFn = () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
        section.removeEventListener('click', handleClick);
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        ripplesRef.current = [];
        particlesRef.current = [];
      };
    }

    // Defer initialization until after initial render
    const init = () => {
      if (isReadyRef.current) return;
      
      const start = window.requestIdleCallback || ((cb) => setTimeout(cb, 100));
      start(() => {
        isReadyRef.current = true;
        setupCanvas();
      });
    };

    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init, { once: true });
      setTimeout(init, 200);
    }

    // Watch for theme changes - update colors dynamically
    const observer = new MutationObserver(() => {
      // When theme changes, clear existing ripples to regenerate with new colors
      ripplesRef.current = [];
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });

    // Cleanup on unmount
    return () => {
      isReadyRef.current = false;
      observer.disconnect();
      if (cleanupFn) cleanupFn();
    };
  }, [sectionRef, getEffectiveTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[6]"
      style={{ background: 'transparent' }}
    />
  );
};

// Plexus Network Animation Component - Canvas-based, performant
const ParticleAnimation = () => {
  const canvasRef = useRef(null);
  const { getEffectiveTheme } = useTheme();

  // Tech-themed colors - theme-aware
  const getThemeColors = () => {
    const theme = getEffectiveTheme();
    if (theme === 'dark') {
      return {
        primaryColor: { r: 254, g: 119, b: 67 }, // #FE7743 Orange
        secondaryColor: { r: 0, g: 217, b: 255 }, // #00D9FF Cyan
      };
    } else {
      // Light theme - slightly darker/more vibrant for visibility
      return {
        primaryColor: { r: 238, g: 100, b: 50 }, // Slightly darker orange
        secondaryColor: { r: 0, g: 180, b: 220 }, // Slightly darker cyan
      };
    }
  };
  
  const themeColors = getThemeColors();
  const primaryColor = themeColors.primaryColor;
  const secondaryColor = themeColors.secondaryColor;
  
  // Plexus network configuration - optimized for initial load
  const config = useMemo(() => ({
    particleCount: 30, // Reduced initial count for faster LCP
    connectionDistance: 200, // Increased distance threshold for better connectivity
    particleSpeed: 0.5, // Movement speed
    particleRadius: 2.5, // Slightly larger particles
    lineWidth: 2, // Thicker connection lines for better visibility
    minConnections: 1, // Minimum connections per particle to ensure connectivity
  }), []);

  const isLoadedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let edgesCache = null;
    let frameSkip = 0;
    const FRAME_SKIP = 1; // Update MST every 2 frames for performance

    // Initialize canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      edgesCache = null; // Invalidate cache on resize
    };
    
    resizeCanvas();
    
    // Optimized resize handler with debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 250);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Particle class - uses current theme colors
    class Particle {
      constructor() {
        this.reset();
        // Get fresh theme colors for each particle
        const theme = getEffectiveTheme();
        const colors = theme === 'dark' 
          ? { primaryColor: { r: 254, g: 119, b: 67 }, secondaryColor: { r: 0, g: 217, b: 255 } }
          : { primaryColor: { r: 238, g: 100, b: 50 }, secondaryColor: { r: 0, g: 180, b: 220 } };
        this.color = Math.random() > 0.5 ? colors.primaryColor : colors.secondaryColor;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * config.particleSpeed;
        this.vy = (Math.random() - 0.5) * config.particleSpeed;
        this.life = Math.random();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -1;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -1;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        // Smooth random direction changes
        if (Math.random() < 0.02) {
          this.vx += (Math.random() - 0.5) * 0.2;
          this.vy += (Math.random() - 0.5) * 0.2;
          
          // Limit speed
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > config.particleSpeed * 2) {
            this.vx = (this.vx / speed) * config.particleSpeed * 2;
            this.vy = (this.vy / speed) * config.particleSpeed * 2;
          }
        }

        this.life += 0.005;
        if (this.life > 1) this.life -= 1;
      }

      draw() {
        // Pulsing glow effect
        const glowIntensity = 0.7 + Math.sin(this.life * Math.PI * 2) * 0.3;
        const alpha = 0.85 * glowIntensity;
        
        // Enhanced outer glow
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.8})`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, config.particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
        ctx.fill();
        
        // Inner bright core
        ctx.beginPath();
        ctx.arc(this.x, this.y, config.particleRadius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 1.2})`;
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
      }
    }

    // Optimized animation loop with cached MST
    const animate = () => {
      if (!isLoadedRef.current) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Initialize particles on first frame if not already done
      if (particles.length === 0) {
        particles = Array.from({ length: config.particleCount }, () => new Particle());
      }

      // Update particles
      particles.forEach(particle => {
        particle.update();
      });

      const connections = new Set();
      const getConnectionKey = (i, j) => {
        return i < j ? `${i}-${j}` : `${j}-${i}`;
      };

      const maxDistanceSquared = config.connectionDistance * config.connectionDistance;
      
      // Optimize: Calculate MST only every N frames or when cache is invalid
      frameSkip++;
      const shouldRecalculateMST = !edgesCache || frameSkip > FRAME_SKIP;

      if (shouldRecalculateMST) {
        frameSkip = 0;
        
        // Step 1: Build Minimum Spanning Tree (MST) - cache the edges
        const edges = [];

        // Collect ALL possible edges (no distance limit for MST to guarantee connectivity)
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSquared = dx * dx + dy * dy;

            edges.push({
              i,
              j,
              dist: Math.sqrt(distSquared),
              distSquared
            });
          }
        }

        // Sort edges by distance (Kruskal's algorithm - shortest first)
        edges.sort((a, b) => a.distSquared - b.distSquared);

        // Build MST using Union-Find
        const uf = new UnionFind(particles.length);
        const mstConnections = new Set();
        let mstEdges = 0;

        for (const edge of edges) {
          if (uf.union(edge.i, edge.j)) {
            const key = getConnectionKey(edge.i, edge.j);
            mstConnections.add(key);
            
            // Store MST edge for drawing
            if (!edgesCache) edgesCache = { mst: [], additional: [] };
            if (mstEdges === 0) edgesCache.mst = [];
            edgesCache.mst.push({ i: edge.i, j: edge.j, dist: edge.dist });
            
            mstEdges++;
            if (mstEdges === particles.length - 1) break;
          }
        }

        // Step 2: Cache additional connections within threshold
        edgesCache.additional = [];
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const key = getConnectionKey(i, j);
            if (mstConnections.has(key)) continue;

            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSquared = dx * dx + dy * dy;

            if (distSquared < maxDistanceSquared) {
              edgesCache.additional.push({
                i, j, dist: Math.sqrt(distSquared)
              });
            }
          }
        }
      }

      // Draw connections from cache (much faster)
      if (edgesCache) {
        edgesCache.mst.forEach(edge => {
          drawConnection(particles[edge.i], particles[edge.j], edge.dist);
          connections.add(getConnectionKey(edge.i, edge.j));
        });

        edgesCache.additional.forEach(edge => {
          const key = getConnectionKey(edge.i, edge.j);
          if (!connections.has(key)) {
            drawConnection(particles[edge.i], particles[edge.j], edge.dist);
          }
        });
      }

      // Draw particles on top of connections
      particles.forEach(particle => {
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    // Defer animation start until after initial paint
    const startAnimation = () => {
      if (isLoadedRef.current) return;
      isLoadedRef.current = true;
      
      // Initialize particles now
      particles = Array.from({ length: config.particleCount }, () => new Particle());
      
      // Use requestIdleCallback if available, else setTimeout
      const start = (window.requestIdleCallback || ((cb) => setTimeout(cb, 50)));
      start(() => {
        animate();
      });
    };

    // Start after page load
    if (document.readyState === 'complete') {
      startAnimation();
    } else {
      window.addEventListener('load', startAnimation, { once: true });
      // Fallback timeout
      setTimeout(startAnimation, 300);
    }

    // Watch for theme changes - regenerate particles with new colors
    const observer = new MutationObserver(() => {
      // Regenerate particles when theme changes
      if (particles.length > 0) {
        particles = Array.from({ length: config.particleCount }, () => new Particle());
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });

    // Draw connection line between particles with enhanced glow
    const drawConnection = (p1, p2, dist) => {
      const opacity = 1 - (dist / config.connectionDistance);
      const lineAlpha = opacity * 0.7; // Increased opacity for better visibility
      
      // Use gradient for colorful connections - blends particle colors
      const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      const midColor = {
        r: (p1.color.r + p2.color.r) / 2,
        g: (p1.color.g + p2.color.g) / 2,
        b: (p1.color.b + p2.color.b) / 2
      };
      
      gradient.addColorStop(0, `rgba(${p1.color.r}, ${p1.color.g}, ${p1.color.b}, ${lineAlpha})`);
      gradient.addColorStop(0.5, `rgba(${midColor.r}, ${midColor.g}, ${midColor.b}, ${lineAlpha * 1.3})`);
      gradient.addColorStop(1, `rgba(${p2.color.r}, ${p2.color.g}, ${p2.color.b}, ${lineAlpha})`);
      
      // Draw glowing line with shadow effect
      ctx.shadowBlur = 15 * opacity;
      ctx.shadowColor = `rgba(${midColor.r}, ${midColor.g}, ${midColor.b}, ${lineAlpha * 0.8})`;
      
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = config.lineWidth * opacity * 1.5;
      ctx.stroke();
      
      // Reset shadow for next operations
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
    };

    // Union-Find data structure for MST algorithm
    class UnionFind {
      constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = new Array(size).fill(0);
      }

      find(x) {
        if (this.parent[x] !== x) {
          this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
      }

      union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) return false; // Already connected

        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
          this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
          this.parent[rootY] = rootX;
        } else {
          this.parent[rootY] = rootX;
          this.rank[rootX]++;
        }
        return true; // Successfully connected
      }
    }

      // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      observer.disconnect();
      isLoadedRef.current = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [config, getEffectiveTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
      style={{ background: 'transparent' }}
    />
  );
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { getEffectiveTheme } = useTheme();
  const effectiveTheme = getEffectiveTheme();

  return (
    <section 
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-300"
    >
      {/* Background image container */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Background image with gradient border dissolve - Optimized with Next.js Image */}
        <motion.div
          className="absolute inset-0 w-full h-full relative"
          animate={{
            opacity: [1, 0.5, 1],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ contain: 'layout style paint' }}
        >
          <Image
            src="/hero-1.webp"
            alt="Hero background"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-contain object-top object-right"
            style={{
              opacity: 1,
            }}
          />
          {/* Gradient borders to dissolve edges - theme-aware */}
          <div 
            className="absolute inset-0 transition-opacity duration-300" 
            style={{
              background: effectiveTheme === 'dark'
                ? 'radial-gradient(ellipse 80% 100% at center right, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)'
                : 'radial-gradient(ellipse 80% 100% at center right, transparent 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,1) 100%)'
            }}
          />
          <div 
            className="absolute inset-0 transition-opacity duration-300" 
            style={{
              background: effectiveTheme === 'dark'
                ? 'linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 100%)'
                : 'linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 100%)'
            }}
          />
          <div 
            className="absolute inset-0 transition-opacity duration-300" 
            style={{
              background: effectiveTheme === 'dark'
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.6) 100%)'
                : 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.6) 100%)'
            }}
          />
        </motion.div>
        {/* Gradient overlay - theme-aware */}
        <div className={`absolute inset-0 transition-colors duration-300 ${
          effectiveTheme === 'dark' 
            ? 'bg-gradient-to-r from-black via-black/70 to-black/50' 
            : 'bg-gradient-to-r from-white via-white/70 to-white/50'
        }`} />
        {/* Additional subtle radial gradient for depth - theme-aware */}
        <div 
          className="absolute inset-0 transition-opacity duration-300" 
          style={{
            background: effectiveTheme === 'dark'
              ? 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)'
              : 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.9) 100%)'
          }}
        />
      </div>
      
      {/* Particle Animation Overlay */}
      <ParticleAnimation />
      {/* Water Droplet Ripple Effect */}
      <WaterDropletEffect sectionRef={sectionRef} />
      {/* Content - optimized for LCP */}
      <div className="container mx-auto px-4 py-8 text-center relative z-10" style={{ contain: 'layout style' }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-4 md:mb-6"
        >
          <motion.div
            variants={item}
            className="mb-4 md:mb-2"
            animate={floatingAnimation}
            initial={false} // Prevent blocking initial render
          >
            <motion.h1 
              className="text-5xl md:text-8xl lg:text-9xl font-bold mb-0 leading-tight"
              style={{
                lineHeight: "1",
                overflow: "visible",
                paddingBottom: "0.05em",
                contain: 'layout style'
              }}
              {...titleContainerAnimation}
              initial={false} // Prevent blocking initial render for LCP
            >
              {/* Abhishek with letter-by-letter animation - optimized for LCP */}
              <motion.span
                className="inline-block relative"
                variants={letterContainer}
                initial="visible" // Start visible for LCP, animate later
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
                  lineHeight: "1", // Slightly increased for descenders
                  paddingBottom: "0.1em", // Increased space for descenders like "g"
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
            initial={false}
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
            className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6 transition-colors duration-300"
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
            href="/abhishek-resume.pdf"
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