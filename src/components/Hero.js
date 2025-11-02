'use client';
import { motion } from 'framer-motion';
import { useMemo, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';

// ============================================================================
// ANIMATION VARIANTS - Optimized for LCP and Performance
// ============================================================================

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0
    }
  }
};

const item = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0, ease: [0.16, 1, 0.3, 1] } }
};

const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

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

const letterContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0
    }
  }
};

const letterAnimation = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0, ease: [0.16, 1, 0.3, 1] }
  }
};

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
    backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
    scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
    opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
    filter: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
  }
};

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
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// ============================================================================
// DATA & CONFIGURATION
// ============================================================================

const techStacks = [
  { name: 'Vue', color: '#4FC3F7', bgColor: 'rgba(79, 195, 247, 0.25)', glowColor: 'rgba(79, 195, 247, 0.5)', textShadow: '0 0 8px rgba(79, 195, 247, 0.6)' },
  { name: 'React', color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.25)', glowColor: 'rgba(97, 218, 251, 0.5)', textShadow: '0 0 8px rgba(97, 218, 251, 0.6)' },
  { name: 'Next.js', color: '#ffffff', bgColor: 'rgba(255, 255, 255, 0.25)', glowColor: 'rgba(255, 255, 255, 0.6)', subtitle: 'SSR', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' },
  { name: 'MERN', color: '#00D9FF', bgColor: 'rgba(0, 217, 255, 0.25)', glowColor: 'rgba(0, 217, 255, 0.5)', textShadow: '0 0 8px rgba(0, 217, 255, 0.6)' },
  { name: 'DevOps', color: '#FF6B6B', bgColor: 'rgba(255, 107, 107, 0.25)', glowColor: 'rgba(255, 107, 107, 0.5)', textShadow: '0 0 8px rgba(255, 107, 107, 0.6)' },
  { name: 'ERP', color: '#FE7743', bgColor: 'rgba(254, 119, 67, 0.25)', glowColor: 'rgba(254, 119, 67, 0.5)', textShadow: '0 0 8px rgba(254, 119, 67, 0.6)' },
  { name: 'CMS', color: '#4ECDC4', bgColor: 'rgba(78, 205, 196, 0.25)', glowColor: 'rgba(78, 205, 196, 0.5)', textShadow: '0 0 8px rgba(78, 205, 196, 0.6)' },
];

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
    particleCount: 30,
    connectionDistance: 200,
    particleSpeed: 0.5,
    particleRadius: 2.5,
    lineWidth: 2,
    minConnections: 1,
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
    const FRAME_SKIP = 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      edgesCache = null;
    };
    
    resizeCanvas();
    
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 250);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    class Particle {
      constructor() {
        this.reset();
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

        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -1;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -1;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        if (Math.random() < 0.02) {
          this.vx += (Math.random() - 0.5) * 0.2;
          this.vy += (Math.random() - 0.5) * 0.2;
          
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
        const glowIntensity = 0.7 + Math.sin(this.life * Math.PI * 2) * 0.3;
        const alpha = 0.85 * glowIntensity;
        
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.8})`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, config.particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, config.particleRadius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 1.2})`;
        ctx.fill();
        
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
      }
    }

    const animate = () => {
      if (!isLoadedRef.current) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length === 0) {
        particles = Array.from({ length: config.particleCount }, () => new Particle());
      }

      particles.forEach(particle => particle.update());

      const connections = new Set();
      const getConnectionKey = (i, j) => i < j ? `${i}-${j}` : `${j}-${i}`;
      const maxDistanceSquared = config.connectionDistance * config.connectionDistance;
      
      frameSkip++;
      const shouldRecalculateMST = !edgesCache || frameSkip > FRAME_SKIP;

      if (shouldRecalculateMST) {
        frameSkip = 0;
        
        const edges = [];
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSquared = dx * dx + dy * dy;
            edges.push({ i, j, dist: Math.sqrt(distSquared), distSquared });
          }
        }

        edges.sort((a, b) => a.distSquared - b.distSquared);

        const uf = new UnionFind(particles.length);
        const mstConnections = new Set();
        let mstEdges = 0;

        for (const edge of edges) {
          if (uf.union(edge.i, edge.j)) {
            const key = getConnectionKey(edge.i, edge.j);
            mstConnections.add(key);
            
            if (!edgesCache) edgesCache = { mst: [], additional: [] };
            if (mstEdges === 0) edgesCache.mst = [];
            edgesCache.mst.push({ i: edge.i, j: edge.j, dist: edge.dist });
            
            mstEdges++;
            if (mstEdges === particles.length - 1) break;
          }
        }

        edgesCache.additional = [];
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const key = getConnectionKey(i, j);
            if (mstConnections.has(key)) continue;

            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSquared = dx * dx + dy * dy;

            if (distSquared < maxDistanceSquared) {
              edgesCache.additional.push({ i, j, dist: Math.sqrt(distSquared) });
            }
          }
        }
      }

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

      particles.forEach(particle => particle.draw());
      animationId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (isLoadedRef.current) return;
      isLoadedRef.current = true;
      particles = Array.from({ length: config.particleCount }, () => new Particle());
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
      if (particles.length > 0) {
        particles = Array.from({ length: config.particleCount }, () => new Particle());
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });

    const drawConnection = (p1, p2, dist) => {
      const opacity = 1 - (dist / config.connectionDistance);
      const lineAlpha = opacity * 0.7;
      
      const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      const midColor = {
        r: (p1.color.r + p2.color.r) / 2,
        g: (p1.color.g + p2.color.g) / 2,
        b: (p1.color.b + p2.color.b) / 2
      };
      
      gradient.addColorStop(0, `rgba(${p1.color.r}, ${p1.color.g}, ${p1.color.b}, ${lineAlpha})`);
      gradient.addColorStop(0.5, `rgba(${midColor.r}, ${midColor.g}, ${midColor.b}, ${lineAlpha * 1.3})`);
      gradient.addColorStop(1, `rgba(${p2.color.r}, ${p2.color.g}, ${p2.color.b}, ${lineAlpha})`);
      
      ctx.shadowBlur = 15 * opacity;
      ctx.shadowColor = `rgba(${midColor.r}, ${midColor.g}, ${midColor.b}, ${lineAlpha * 0.8})`;
      
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = config.lineWidth * opacity * 1.5;
      ctx.stroke();
      
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
    };

    class UnionFind {
      constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = new Array(size).fill(0);
      }

      find(x) {
        if (this.parent[x] !== x) {
          this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
      }

      union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) return false;

        if (this.rank[rootX] < this.rank[rootY]) {
          this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
          this.parent[rootY] = rootX;
        } else {
          this.parent[rootY] = rootX;
          this.rank[rootX]++;
        }
        return true;
      }
    }

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
      className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
      style={{ background: 'transparent' }}
    />
  );
};

// ============================================================================
// MAIN HERO COMPONENT
// ============================================================================

export default function Hero() {
  const sectionRef = useRef(null);
  const { getEffectiveTheme, theme } = useTheme();
  const [effectiveTheme, setEffectiveTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  // Aggressive theme tracking for instant UI updates
  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setEffectiveTheme(isDark ? 'dark' : 'light');
    };

    updateTheme();

    let timeoutId;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            (mutation.attributeName === 'class' || mutation.attributeName === 'data-theme')) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            updateTheme();
          }, 0); // Immediate update for aggressive theme switching
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });

    const handleStorageChange = (e) => {
      if (e.key === 'theme-preference') {
        setTimeout(updateTheme, 50);
      }
    };
    window.addEventListener('storage', handleStorageChange);

    const handleThemeChange = () => {
      setTimeout(updateTheme, 0);
    };
    window.addEventListener('themechange', handleThemeChange);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, [theme]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setEffectiveTheme(isDark ? 'dark' : 'light');
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [theme]);

  // Theme-aware gradient styles - More aggressive contrast
  const getGradientOverlays = () => {
    const isDark = effectiveTheme === 'dark';
    return {
      radialGradient: isDark
        ? 'radial-gradient(ellipse 80% 100% at center right, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)'
        : 'radial-gradient(ellipse 80% 100% at center right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.85) 70%, rgba(255,255,255,1) 100%)',
      leftGradient: isDark
        ? 'linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%)'
        : 'linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,1) 100%)',
      bottomGradient: isDark
        ? 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%)'
        : 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.7) 100%)',
      centerRadial: isDark
        ? 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0.95) 100%)'
        : 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.75) 70%, rgba(255,255,255,0.95) 100%)',
      overlayGradient: isDark
        ? 'bg-gradient-to-r from-black via-black/80 to-black/60'
        : 'bg-gradient-to-r from-white via-white/80 to-white/60'
    };
  };

  const gradients = getGradientOverlays();

  return (
    <section 
      ref={sectionRef}
      className="h-screen min-h-[600px] sm:min-h-[700px] md:min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black relative overflow-hidden transition-all duration-500 ease-in-out"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ opacity: [1, 0.5, 1], scale: [1, 1.01, 1] }}
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
            style={{ opacity: 1, objectPosition: 'right top' }}
          />
          
          {/* Theme-aware gradient overlays - Aggressive transitions */}
          <div 
            className="absolute inset-0 transition-all duration-500 ease-in-out" 
            style={{ background: gradients.radialGradient }}
          />
          <div 
            className="absolute inset-0 transition-all duration-500 ease-in-out" 
            style={{ background: gradients.leftGradient }}
          />
          <div 
            className="absolute inset-0 transition-all duration-500 ease-in-out" 
            style={{ background: gradients.bottomGradient }}
          />
        </motion.div>
        
        {/* Gradient Overlay - More prominent */}
        <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${gradients.overlayGradient}`} />
        
        {/* Center Radial Gradient */}
        <div 
          className="absolute inset-0 transition-all duration-500 ease-in-out" 
          style={{ background: gradients.centerRadial }}
        />
      </div>
      
      {/* Animated Effects */}
      <ParticleAnimation />
      <WaterDropletEffect sectionRef={sectionRef} />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 text-center relative z-10" style={{ contain: 'layout style' }}>
        {/* Title Section */}
        <motion.div variants={container} initial="hidden" animate="show" className="mb-3 sm:mb-4 md:mb-6">
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
                      backgroundImage: "linear-gradient(90deg, #FE7743, #FFA366, #FE7743, #FF8C4D, #FE7743)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block"
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
                  backgroundImage: "linear-gradient(90deg, #87CEEB, #00D9FF, #B0E0E6, #4DD0E1, #00D9FF, #ADD8E6, #87CEEB)",
                  backgroundSize: "300% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                  lineHeight: "1",
                  paddingBottom: "0.1em",
                  paddingTop: "0.02em",
                  verticalAlign: "baseline",
                  overflow: "visible"
                }}
                animate={singhAnimation}
              >
                Singh
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 sm:mb-4 md:mb-6 relative inline-block px-2 sm:px-4"
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
        
        {/* Tech Stack */}
        <motion.div
          className="max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.p
            className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 md:mb-6 transition-colors duration-500"
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
            {techStacks.map((tech) => (
              <motion.div
                key={tech.name}
                variants={techStackItem}
                className="group relative"
                whileHover={{ scale: 1.08, y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <div
                  className="relative px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${tech.bgColor}, ${tech.bgColor.replace('0.25', '0.35')})`,
                    boxShadow: `0 2px 8px rgba(0, 0, 0, 0.3), 0 0 12px ${tech.glowColor}40`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span
                    className="text-[10px] sm:text-xs md:text-sm font-semibold flex items-center gap-1 sm:gap-1.5 relative z-10"
                    style={{ 
                      color: tech.color,
                      textShadow: tech.textShadow || '0 0 8px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <span>{tech.name}</span>
                    {tech.subtitle && (
                      <span 
                        className="text-[8px] sm:text-[10px] md:text-xs opacity-80 font-normal"
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
            { href: "/abhishek-resume.pdf", label: "Download Resume", download: true }
          ].map((button) => (
            <motion.a
              key={button.label}
              href={button.href}
              download={button.download}
              className="group relative border-2 border-primary text-primary px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full overflow-hidden transition-all duration-300 text-xs sm:text-sm md:text-base cursor-pointer flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              {button.label === "Download Resume" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary">
                {button.label}
              </span>
              <motion.div
                className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
