'use client';
import { motion } from 'framer-motion';
import { useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import {
  container,
  item,
  floatingAnimation,
  titleContainerAnimation,
  letterContainer,
  letterAnimation,
  letterLoopAnimation,
  singhAnimation,
  subtitleLoopAnimation,
  techStackContainer,
  techStackItem
} from '@/styles/animations';
import { techStacks } from '@/constants/techStack';

// ============================================================================
// CANVAS COMPONENTS - Water Droplet & Particle Effects
// ============================================================================

const WaterDropletEffect = ({ sectionRef }) => {
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]);
  const isReadyRef = useRef(false);
  const { getEffectiveTheme } = useTheme();

  const getThemeColors = () => {
    const theme = getEffectiveTheme();
    return theme === 'dark'
      ? { primaryColor: { r: 254, g: 119, b: 67 }, secondaryColor: { r: 0, g: 217, b: 255 } }
      : { primaryColor: { r: 238, g: 100, b: 50 }, secondaryColor: { r: 0, g: 180, b: 220 } };
  };

  const vibgyorColors = [
    { r: 148, g: 0, b: 211 }, { r: 75, g: 0, b: 130 }, { r: 0, g: 0, b: 255 },
    { r: 0, g: 255, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 255, g: 165, b: 0 }, { r: 255, g: 0, b: 0 }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef?.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let cleanupFn = null;
    const currentColors = getThemeColors();

    function setupCanvas() {
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

      class TechParticle {
        constructor(x, y, color, angle) {
          this.x = x;
          this.y = y;
          this.vx = Math.cos(angle) * (2 + Math.random() * 3);
          this.vy = Math.sin(angle) * (2 + Math.random() * 3);
          this.life = 1;
          this.decay = 0.015 + Math.random() * 0.01;
          this.size = 2 + Math.random() * 3;
          this.color = color || (Math.random() > 0.5 ? currentColors.primaryColor : currentColors.secondaryColor);
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.life -= this.decay;
          this.vx *= 0.98;
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

      class TechRipple {
        constructor(x, y, useVibgyor = false) {
          this.x = x;
          this.y = y;
          this.radius = 0;
          this.maxRadius = Math.max(canvas.width, canvas.height) * 1.2;
          this.speed = 3 + Math.random() * 2;
          this.opacity = 0.8;
          this.useVibgyor = useVibgyor;
          this.color = useVibgyor ? vibgyorColors[Math.floor(Math.random() * vibgyorColors.length)] : (Math.random() > 0.5 ? currentColors.primaryColor : currentColors.secondaryColor);
          this.life = 1;
          this.segments = 6 + Math.floor(Math.random() * 6);
          this.rotation = Math.random() * Math.PI * 2;
          this.colorOffset = Math.random() * vibgyorColors.length;
          this.particles = [];
          
          for (let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2 / 8) * i;
            const particleColor = useVibgyor 
              ? vibgyorColors[Math.floor((i + this.colorOffset) % vibgyorColors.length)]
              : this.color;
            this.particles.push(new TechParticle(x, y, particleColor, angle));
          }
        }

        getRainbowColor(angle) {
          if (!this.useVibgyor) return this.color;
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
          
          if (this.useVibgyor) {
            this.colorOffset += 0.05;
            if (this.colorOffset >= vibgyorColors.length) this.colorOffset = 0;
          }
          
          this.particles = this.particles.filter(p => p.update());
          return this.life > 0;
        }

        drawHexagon(x, y, radius, rotation) {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i + rotation;
            const px = x + Math.cos(angle) * radius;
            const py = y + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
        }

        draw() {
          if (this.opacity <= 0) return;

          const segments = this.segments;
          const segmentAngle = (Math.PI * 2) / segments;
          const innerRadius = this.radius * 0.85;
          
          for (let i = 0; i < segments; i++) {
            const angle = segmentAngle * i + this.rotation;
            const startAngle = angle - segmentAngle / 3;
            const endAngle = angle + segmentAngle / 3;
            const segmentColor = this.useVibgyor ? this.getRainbowColor(angle) : this.color;
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, startAngle, endAngle);
            ctx.strokeStyle = `rgba(${segmentColor.r}, ${segmentColor.g}, ${segmentColor.b}, ${this.opacity})`;
            ctx.lineWidth = 3;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${segmentColor.r}, ${segmentColor.g}, ${segmentColor.b}, ${this.opacity * 0.6})`;
            ctx.stroke();
            
            if (this.radius > 30) {
              const innerColor = this.useVibgyor ? this.getRainbowColor(angle + Math.PI) : this.color;
              ctx.beginPath();
              ctx.arc(this.x, this.y, innerRadius, startAngle, endAngle);
              ctx.strokeStyle = `rgba(${innerColor.r}, ${innerColor.g}, ${innerColor.b}, ${this.opacity * 0.4})`;
              ctx.lineWidth = 2;
              ctx.stroke();
            }
          }
          
          if (this.radius < 80) {
            const centerColor = this.useVibgyor ? this.getRainbowColor(this.rotation) : this.color;
            this.drawHexagon(this.x, this.y, Math.min(this.radius * 0.3, 25), this.rotation);
            ctx.fillStyle = `rgba(${centerColor.r}, ${centerColor.g}, ${centerColor.b}, ${this.opacity * 1.2})`;
            ctx.shadowBlur = 15;
            ctx.fill();
          }
          
          this.particles.forEach(p => p.draw());
          ctx.shadowBlur = 0;
        }
      }

      const handleClick = (e) => {
        const target = e.target;
        const isButton = target.tagName === 'BUTTON' || target.tagName === 'A' ||
                        target.closest('a') !== null || target.closest('button') !== null ||
                        target.classList.contains('cursor-pointer');
        
        const useVibgyor = !isButton;
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const rippleCount = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < rippleCount; i++) {
          const offset = (Math.random() - 0.5) * 25;
          const ripple = new TechRipple(x + offset, y + offset, useVibgyor);
          if (!useVibgyor) {
            ripple.color = Math.random() > 0.5 ? currentColors.primaryColor : currentColors.secondaryColor;
          }
          ripplesRef.current.push(ripple);
        }
      };

      const animate = () => {
        if (!isReadyRef.current) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ripplesRef.current = ripplesRef.current.filter(ripple => {
          const isAlive = ripple.update();
          if (isAlive) ripple.draw();
          return isAlive;
        });
        animationId = requestAnimationFrame(animate);
      };

      animate();
      section.addEventListener('click', handleClick, { passive: true });

      cleanupFn = () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
        section.removeEventListener('click', handleClick);
        if (animationId) cancelAnimationFrame(animationId);
        ripplesRef.current = [];
      };
    }

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

    const observer = new MutationObserver(() => {
      ripplesRef.current = [];
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });

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

// Minimal broken star particle effect
const ParticleAnimation = () => {
  const canvasRef = useRef(null);
  const { getEffectiveTheme } = useTheme();

  const getThemeColors = () => {
    const theme = getEffectiveTheme();
    return theme === 'dark'
      ? { primaryColor: { r: 254, g: 119, b: 67 }, secondaryColor: { r: 0, g: 217, b: 255 } }
      : { primaryColor: { r: 238, g: 100, b: 50 }, secondaryColor: { r: 0, g: 180, b: 220 } };
  };

  const config = useMemo(() => ({
    starCount: 8, // Reduced from 30 to minimal effect
    twinkleSpeed: 0.003,
    minSize: 1.5,
    maxSize: 3,
  }), []);

  const isLoadedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reinitialize stars on resize
      stars = [];
    };
    
    resizeCanvas();
    
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 250);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    class BrokenStar {
      constructor() {
        this.reset();
        const colors = getThemeColors();
        this.color = Math.random() > 0.5 ? colors.primaryColor : colors.secondaryColor;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = config.minSize + Math.random() * (config.maxSize - config.minSize);
        this.twinkle = Math.random();
        this.twinkleSpeed = config.twinkleSpeed * (0.5 + Math.random());
        // Random rotation for broken appearance
        this.rotation = Math.random() * Math.PI * 2;
        this.points = 4 + Math.floor(Math.random() * 3); // 4-6 points for broken star
      }

      update() {
        this.twinkle += this.twinkleSpeed;
        if (this.twinkle > 1) this.twinkle -= 2;
      }

      draw() {
        const twinkleIntensity = Math.abs(Math.sin(this.twinkle * Math.PI));
        const alpha = 0.3 + twinkleIntensity * 0.4; // Subtle visibility
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Draw broken star shape
        ctx.beginPath();
        const outerRadius = this.size;
        const innerRadius = this.size * 0.4;
        
        for (let i = 0; i < this.points * 2; i++) {
          const angle = (Math.PI * i) / this.points;
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        
        ctx.shadowBlur = 4 * twinkleIntensity;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.6})`;
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
        ctx.fill();
        
        // Add subtle glow points
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.5})`;
        ctx.fill();
        
        ctx.restore();
        ctx.shadowBlur = 0;
      }
    }

    const animate = () => {
      if (!isLoadedRef.current) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (stars.length === 0) {
        stars = Array.from({ length: config.starCount }, () => new BrokenStar());
      }

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (isLoadedRef.current) return;
      isLoadedRef.current = true;
      stars = Array.from({ length: config.starCount }, () => new BrokenStar());
      const start = (window.requestIdleCallback || ((cb) => setTimeout(cb, 50)));
      start(() => animate());
    };

    if (document.readyState === 'complete') {
      startAnimation();
    } else {
      window.addEventListener('load', startAnimation, { once: true });
      setTimeout(startAnimation, 300);
    }

    const observer = new MutationObserver(() => {
      if (stars.length > 0) {
        stars = Array.from({ length: config.starCount }, () => new BrokenStar());
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      observer.disconnect();
      isLoadedRef.current = false;
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [config, getEffectiveTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[5] opacity-60"
      style={{ background: 'transparent' }}
    />
  );
};

// ============================================================================
// MAIN HERO COMPONENT
// ============================================================================

export default function Hero() {
  const sectionRef = useRef(null);
  const { getEffectiveTheme } = useTheme();
  const { themeStyles, effectiveTheme } = useThemeStyles();

  return (
    <section 
      ref={sectionRef}
      className={`h-screen min-h-[600px] sm:min-h-[700px] md:min-h-screen flex items-center justify-center ${themeStyles.sectionBg} relative overflow-hidden transition-all duration-500 ease-in-out`}
    >
      {/* Background Layers - Clear z-index separation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[1]" aria-hidden="true">
        {/* Background Image - Right aligned */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ opacity: effectiveTheme === 'dark' ? [0.25, 0.35, 0.25] : [0.4, 0.5, 0.4], scale: [1, 1.01, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ contain: 'layout style paint', position: 'relative' }}
        >
          <Image
            src="/hero-1.webp"
            alt="Hero background"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-contain"
            style={{ 
              opacity: effectiveTheme === 'dark' ? 0.3 : 0.45,
              objectPosition: 'right top',
              filter: effectiveTheme === 'dark' ? 'brightness(0.6) contrast(1.2)' : 'brightness(1.1) contrast(0.9)'
            }}
          />
          
          {/* Theme-aware gradient overlays - Enhanced visibility */}
          <div 
            className="absolute inset-0 transition-all duration-500 ease-in-out" 
            style={{ 
              background: themeStyles.radialGradient,
              opacity: effectiveTheme === 'dark' ? 0.85 : 0.75
            }}
          />
          <div 
            className="absolute inset-0 transition-all duration-500 ease-in-out" 
            style={{ 
              background: themeStyles.leftGradient,
              opacity: effectiveTheme === 'dark' ? 0.9 : 0.8
            }}
          />
          <div 
            className="absolute inset-0 transition-all duration-500 ease-in-out" 
            style={{ 
              background: themeStyles.bottomGradient,
              opacity: effectiveTheme === 'dark' ? 0.8 : 0.7
            }}
          />
        </motion.div>
        
        {/* Gradient Overlay - Theme adapted with better visibility */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${themeStyles.overlayGradient}`}
          style={{ opacity: effectiveTheme === 'dark' ? 0.7 : 0.6 }}
        />
        
        {/* Center Radial Gradient */}
        <div 
          className="absolute inset-0 transition-all duration-500 ease-in-out" 
          style={{ 
            background: themeStyles.centerRadial,
            opacity: effectiveTheme === 'dark' ? 0.75 : 0.65
          }}
        />
      </div>
      
      {/* Animated Effects - Clear layer separation */}
      <ParticleAnimation />
      <WaterDropletEffect sectionRef={sectionRef} />
      
      {/* Content - Highest z-index for clear visibility */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 text-center relative z-[10]" style={{ contain: 'layout style' }}>
        {/* Subtle backdrop for text readability */}
        <div 
          className={`absolute inset-0 -z-10 transition-all duration-500 ${
            effectiveTheme === 'dark' 
              ? 'bg-gradient-to-b from-black/20 via-transparent to-black/30' 
              : 'bg-gradient-to-b from-white/30 via-transparent to-white/20'
          }`}
          style={{ 
            backdropFilter: 'blur(1px)',
            WebkitBackdropFilter: 'blur(1px)'
          }}
        />
        
        {/* Title Section */}
        <motion.div variants={container} initial="hidden" animate="show" className="mb-3 sm:mb-4 md:mb-6 relative z-10">
          <motion.div
            variants={item}
            className="mb-2 sm:mb-3 md:mb-4"
            animate={floatingAnimation}
            initial={false}
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-0 leading-tight"
              style={{ lineHeight: "1", overflow: "visible", paddingBottom: "0.05em", contain: 'layout style' }}
              {...titleContainerAnimation}
              initial={false}
            >
              {/* Abhishek */}
              <motion.span
                className="inline-block relative"
                variants={letterContainer}
                initial="visible"
                animate="visible"
              >
                {["A", "b", "h", "i", "s", "h", "e", "k"].map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={letterAnimation}
                    style={{
                      backgroundImage: themeStyles.abhishekGradient,
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block",
                      transition: 'background-image 0.5s ease-in-out'
                    }}
                    animate={{
                      ...letterLoopAnimation,
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      transition: {
                        ...letterLoopAnimation.transition,
                        backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
                        delay: index * 0.08
                      }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
              {' '}
              {/* Singh */}
              <motion.span
                className="inline-block"
                style={{
                  backgroundImage: themeStyles.singhGradient,
                  backgroundSize: "300% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                  lineHeight: "1",
                  paddingBottom: "0.1em",
                  paddingTop: "0.02em",
                  verticalAlign: "baseline",
                  overflow: "visible",
                  transition: 'background-image 0.5s ease-in-out'
                }}
                animate={singhAnimation}
              >
                Singh
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.h2
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 sm:mb-4 md:mb-6 relative inline-block px-2 sm:px-4 ${
              effectiveTheme === 'dark' ? 'drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]' : 'drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'
            }`}
            style={{
              backgroundImage: themeStyles.subtitleGradient,
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transition: 'background-image 0.5s ease-in-out',
              filter: effectiveTheme === 'dark' ? 'drop-shadow(0 0 8px rgba(0,0,0,0.9))' : 'drop-shadow(0 0 6px rgba(255,255,255,0.9))'
            }}
            initial={false}
            animate={subtitleLoopAnimation}
          >
            Senior Frontend Architect & Full-Stack Developer
          </motion.h2>
        </motion.div>
        
        {/* Tech Stack */}
        <motion.div
          className="max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.p
            className={`text-xs sm:text-sm md:text-base ${themeStyles.descriptionText} mb-3 sm:mb-4 md:mb-6 transition-colors duration-500`}
            style={{
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility',
              textShadow: effectiveTheme === 'dark' 
                ? '0 1px 2px rgba(0, 0, 0, 0.5)' 
                : 'none'
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Building high-performance applications with
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 items-center px-2"
            variants={techStackContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {techStacks.map((tech) => {
              // Extract RGB values for premium gradient calculations
              const colorMatch = tech.color.match(/#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})/);
              const r = colorMatch ? parseInt(colorMatch[1], 16) : 79;
              const g = colorMatch ? parseInt(colorMatch[2], 16) : 195;
              const b = colorMatch ? parseInt(colorMatch[3], 16) : 247;
              
              // Create darker/lighter variants for gradients
              const darkerR = Math.max(0, r - 20);
              const darkerG = Math.max(0, g - 20);
              const darkerB = Math.max(0, b - 20);
              const lighterR = Math.min(255, r + 30);
              const lighterG = Math.min(255, g + 30);
              const lighterB = Math.min(255, b + 30);
              
              // Determine text color - white for most colors, dark for very light colors
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              const textColor = brightness > 180 ? '#1a1a1a' : '#ffffff';
              
              return (
                <motion.div
                  key={tech.name}
                  variants={techStackItem}
                  className="group relative"
                  whileHover={{ scale: 1.1, y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                >
                  <div
                    className="relative px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full backdrop-blur-md border-2 transition-all duration-500"
                    style={{
                      background: effectiveTheme === 'dark'
                        ? `linear-gradient(135deg, rgba(${r}, ${g}, ${b}, 0.85), rgba(${darkerR}, ${darkerG}, ${darkerB}, 0.95))`
                        : `linear-gradient(135deg, rgba(${r}, ${g}, ${b}, 0.9), rgba(${lighterR}, ${lighterG}, ${lighterB}, 0.95))`,
                      borderColor: effectiveTheme === 'dark'
                        ? `rgba(${r}, ${g}, ${b}, 0.4)`
                        : `rgba(${r}, ${g}, ${b}, 0.6)`,
                      boxShadow: effectiveTheme === 'dark'
                        ? `0 4px 20px rgba(0, 0, 0, 0.7), 0 0 30px rgba(${r}, ${g}, ${b}, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)`
                        : `0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 12px rgba(${r}, ${g}, ${b}, 0.4), 0 0 35px rgba(${r}, ${g}, ${b}, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                      transition: 'all 0.5s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = effectiveTheme === 'dark'
                        ? `0 8px 35px rgba(0, 0, 0, 0.9), 0 0 50px rgba(${r}, ${g}, ${b}, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                        : `0 8px 40px rgba(0, 0, 0, 0.2), 0 4px 20px rgba(${r}, ${g}, ${b}, 0.6), 0 0 50px rgba(${r}, ${g}, ${b}, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.4)`;
                      e.currentTarget.style.borderColor = `rgba(${r}, ${g}, ${b}, ${effectiveTheme === 'dark' ? '0.7' : '0.9'})`;
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.background = effectiveTheme === 'dark'
                        ? `linear-gradient(135deg, rgba(${r}, ${g}, ${b}, 0.95), rgba(${lighterR}, ${lighterG}, ${lighterB}, 1))`
                        : `linear-gradient(135deg, rgba(${r}, ${g}, ${b}, 1), rgba(${lighterR}, ${lighterG}, ${lighterB}, 1))`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = effectiveTheme === 'dark'
                        ? `0 4px 20px rgba(0, 0, 0, 0.7), 0 0 30px rgba(${r}, ${g}, ${b}, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)`
                        : `0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 12px rgba(${r}, ${g}, ${b}, 0.4), 0 0 35px rgba(${r}, ${g}, ${b}, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)`;
                      e.currentTarget.style.borderColor = effectiveTheme === 'dark'
                        ? `rgba(${r}, ${g}, ${b}, 0.4)`
                        : `rgba(${r}, ${g}, ${b}, 0.6)`;
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.background = effectiveTheme === 'dark'
                        ? `linear-gradient(135deg, rgba(${r}, ${g}, ${b}, 0.85), rgba(${darkerR}, ${darkerG}, ${darkerB}, 0.95))`
                        : `linear-gradient(135deg, rgba(${r}, ${g}, ${b}, 0.9), rgba(${lighterR}, ${lighterG}, ${lighterB}, 0.95))`;
                    }}
                  >
                    <span
                      className="text-[10px] sm:text-xs md:text-sm font-extrabold flex items-center gap-1.5 sm:gap-2 relative z-10 tracking-wide"
                      style={{ 
                        color: textColor,
                        textShadow: effectiveTheme === 'dark'
                          ? textColor === '#ffffff'
                            ? `0 1px 2px rgba(0, 0, 0, 0.8), 0 0 8px rgba(${r}, ${g}, ${b}, 0.4)`
                            : `0 1px 2px rgba(0, 0, 0, 0.6), 0 0 4px rgba(${r}, ${g}, ${b}, 0.3)`
                          : textColor === '#ffffff'
                            ? `0 1px 2px rgba(0, 0, 0, 0.5), 0 0 6px rgba(${r}, ${g}, ${b}, 0.4)`
                            : `0 1px 1px rgba(255, 255, 255, 0.6), 0 0 4px rgba(${r}, ${g}, ${b}, 0.2)`,
                        transition: 'text-shadow 0.5s ease, color 0.5s ease',
                        fontWeight: '800',
                        letterSpacing: '0.025em',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        textRendering: 'optimizeLegibility'
                      }}
                    >
                      <span className="relative">{tech.name}</span>
                      {tech.subtitle && (
                        <span 
                          className="text-[8px] sm:text-[10px] md:text-xs opacity-95 font-bold"
                          style={{ 
                            color: textColor,
                            textShadow: effectiveTheme === 'dark'
                              ? textColor === '#ffffff'
                                ? `0 1px 1px rgba(0, 0, 0, 0.7), 0 0 6px rgba(${r}, ${g}, ${b}, 0.3)`
                                : `0 1px 1px rgba(0, 0, 0, 0.5), 0 0 3px rgba(${r}, ${g}, ${b}, 0.2)`
                              : textColor === '#ffffff'
                                ? `0 1px 1px rgba(0, 0, 0, 0.4), 0 0 5px rgba(${r}, ${g}, ${b}, 0.3)`
                                : `0 1px 1px rgba(255, 255, 255, 0.5), 0 0 3px rgba(${r}, ${g}, ${b}, 0.15)`,
                            transition: 'text-shadow 0.5s ease',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                            textRendering: 'optimizeLegibility'
                          }}
                        >
                          ({tech.subtitle})
                        </span>
                      )}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div 
          className="flex gap-2 sm:gap-3 md:gap-4 justify-center flex-wrap px-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {[
            { href: "#contact", label: "Contact Me" },
            { href: "#projects", label: "View Projects" },
            { href: "/Abhishek-resume.pdf", label: "Download Resume", download: true }
          ].map((button) => (
            <motion.a
              key={button.label}
              href={button.href}
              download={button.download}
              className={`group relative border-2 ${themeStyles.buttonBorder} ${themeStyles.buttonText} px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full overflow-hidden transition-all duration-500 text-xs sm:text-sm md:text-base cursor-pointer flex items-center gap-2 ${
                effectiveTheme === 'light' 
                  ? 'bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl' 
                  : ''
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: effectiveTheme === 'dark' 
                  ? themeStyles.buttonHoverShadow
                  : '0 0 35px rgba(230, 81, 0, 0.7), 0 0 70px rgba(230, 81, 0, 0.4), 0 8px 25px rgba(0, 0, 0, 0.25), inset 0 0 20px rgba(230, 81, 0, 0.25)'
              }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                boxShadow: effectiveTheme === 'dark'
                  ? themeStyles.buttonShadow
                  : '0 4px 20px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(230, 81, 0, 0.4), 0 0 25px rgba(230, 81, 0, 0.3)',
                transition: 'box-shadow 0.5s ease, border-color 0.5s ease, color 0.5s ease, background-color 0.5s ease',
                borderWidth: effectiveTheme === 'light' ? '3px' : '2px',
                fontWeight: effectiveTheme === 'light' ? '700' : '600'
              }}
            >
              {button.label === "Download Resume" && (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 relative z-10 transition-transform duration-300 group-hover:scale-110 ${themeStyles.buttonText}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
              <span className={`relative z-10 transition-colors duration-500 group-hover:text-white`}>
                {button.label}
              </span>
              <motion.div
                className={`absolute inset-0 ${themeStyles.buttonHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={false}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
