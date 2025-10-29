'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialWidget = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('socialWidgetExpanded');
      return saved === null ? false : saved === 'true';
    }
    return false;
  });

  // Defer mounting to not block initial render
  useEffect(() => {
    const init = () => {
      if (typeof window !== 'undefined') {
        const start = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
        start(() => {
          setIsMounted(true);
        });
      }
    };

    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init, { once: true });
      setTimeout(init, 500);
    }
  }, []);

  // Social links configuration with enhanced styling
  const socialLinks = {
    whatsapp: {
      url: 'https://wa.me/917359298800',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      label: 'WhatsApp',
      color: '#25D366',
      bgGradient: 'from-green-500 to-emerald-600'
    },
    instagram: {
      url: 'https://instagram.com/abhishekthatguy',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      label: 'Instagram',
      color: '#E4405F',
      bgGradient: 'from-pink-500 via-red-500 to-orange-500'
    },
    linkedin: {
      url: 'https://linkedin.com/in/abhishekthatguy',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      color: '#0077B5',
      bgGradient: 'from-blue-600 to-blue-700'
    },
    twitter: {
      url: 'https://twitter.com/abhishekthatguy',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      label: 'Twitter/X',
      color: '#000000',
      bgGradient: 'from-gray-900 to-black'
    },
    github: {
      url: 'https://github.com/abhishekthatguy',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      color: '#181717',
      bgGradient: 'from-gray-800 to-gray-900'
    },
    slack: {
      url: 'https://join.slack.com',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
        </svg>
      ),
      label: 'Slack',
      color: '#4A154B',
      bgGradient: 'from-purple-700 to-purple-900'
    },
    telegram: {
      url: 'https://t.me/abhishekthatguy',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.06 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      label: 'Telegram',
      color: '#26A5E4',
      bgGradient: 'from-blue-400 to-blue-500'
    },
    mail: {
      url: 'mailto:your-email@example.com',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      ),
      label: 'Email',
      color: '#EA4335',
      bgGradient: 'from-red-500 to-red-600'
    },
    call: {
      url: 'tel:+917359298800',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      ),
      label: 'Call',
      color: '#34A853',
      bgGradient: 'from-green-500 to-green-600'
    },
    discord: {
      url: 'https://discord.gg/your-server',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      label: 'Discord',
      color: '#5865F2',
      bgGradient: 'from-indigo-500 to-indigo-600'
    },
    snapchat: {
      url: 'https://snapchat.com/add/your-username',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C23.987 5.367 18.621.001 12.017.001z"/>
        </svg>
      ),
      label: 'Snapchat',
      color: '#FFFC00',
      bgGradient: 'from-yellow-400 to-yellow-500'
    },
    medium: {
      url: 'https://medium.com/@abhishekthatguy',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-.87 6.42-1.95 6.42-1.08 0-1.95-2.88-1.95-6.42s.87-6.42 1.95-6.42 1.95 2.88 1.95 6.42zM24 12c0 3.17-.43 5.75-.96 5.75-.53 0-.96-2.58-.96-5.75s.43-5.75.96-5.75C23.57 6.25 24 8.83 24 12z"/>
        </svg>
      ),
      label: 'Medium',
      color: '#000000',
      bgGradient: 'from-gray-700 to-gray-800'
    }
  };

  // Chatbot placeholder
  const chatbotIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
      <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
    </svg>
  );

  const handleCollapse = () => {
    setIsExpanded(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('socialWidgetExpanded', 'false');
    }
  };

  const handleExpand = () => {
    setIsExpanded(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('socialWidgetExpanded', 'true');
    }
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Collapsed state - show 4 icons: mail, whatsapp, chatbot, call */}
      {!isExpanded && (
        <motion.div
          className="fixed bottom-[100px] right-5 z-50 select-none"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-3 flex flex-col gap-2 relative overflow-visible">
            {/* Expand button */}
            <motion.button
              onClick={handleExpand}
              className="absolute -top-3 -right-3 w-7 h-7 bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all shadow-lg border-2 border-white/20 z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Expand widget"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.button>

            {/* Mail Icon */}
            <motion.a
              href={socialLinks.mail.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${socialLinks.mail.bgGradient} hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm overflow-visible`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.15, y: -4, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={socialLinks.mail.label}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              <div className="relative z-10 text-white">
                {socialLinks.mail.icon}
              </div>
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none transition-all duration-200 shadow-xl z-[60] border border-white/10">
                {socialLinks.mail.label}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900/95"></div>
              </span>
            </motion.a>

            {/* WhatsApp Icon */}
            <motion.a
              href={socialLinks.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${socialLinks.whatsapp.bgGradient} hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm overflow-visible`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.15, y: -4, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={socialLinks.whatsapp.label}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              <div className="relative z-10 text-white">
                {socialLinks.whatsapp.icon}
              </div>
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none transition-all duration-200 shadow-xl z-[60] border border-white/10">
                {socialLinks.whatsapp.label}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900/95"></div>
              </span>
            </motion.a>

            {/* Chatbot Icon */}
            <motion.div
              className="group relative w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-2xl overflow-visible"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              whileHover={{ scale: 1.15, y: -4, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Chat Bot (Coming Soon)"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              <div className="relative z-10 text-white">
                {chatbotIcon}
              </div>
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none transition-all duration-200 shadow-xl z-[60] border border-white/10">
                Chat Bot
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900/95"></div>
              </span>
            </motion.div>

            {/* Call Icon */}
            <motion.a
              href={socialLinks.call.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${socialLinks.call.bgGradient} hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm overflow-visible`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              whileHover={{ scale: 1.15, y: -4, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={socialLinks.call.label}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              <div className="relative z-10 text-white">
                {socialLinks.call.icon}
              </div>
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none transition-all duration-200 shadow-xl z-[60] border border-white/10">
                {socialLinks.call.label}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900/95"></div>
              </span>
            </motion.a>
          </div>
        </motion.div>
      )}

      {/* Expanded state - full widget */}
      {isExpanded && (
        <AnimatePresence>
          <motion.div
            className="fixed bottom-[100px] right-5 z-50 select-none"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-4 flex flex-col gap-2.5 relative overflow-visible">
              {/* Collapse button */}
              <motion.button
                onClick={handleCollapse}
                className="absolute -top-3 -right-3 w-7 h-7 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all shadow-lg border-2 border-white/20 z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Collapse widget"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Social Icons */}
              {Object.entries(socialLinks).map(([key, link], index) => (
                <motion.a
                  key={key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${link.bgGradient} hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm overflow-visible`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.15, y: -4, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 text-white">
                    {link.icon}
                  </div>

                  {/* Tooltip - positioned to left of icon (towards center) */}
                  <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none transition-all duration-200 shadow-xl z-[60] border border-white/10">
                    {link.label}
                    {/* Arrow pointing to icon */}
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900/95"></div>
                  </span>
                </motion.a>
              ))}

              {/* Chatbot Icon Placeholder */}
              <motion.div
                className="group relative w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-2xl overflow-visible"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Object.keys(socialLinks).length * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.15, y: -4, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Chat Bot (Coming Soon)"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                
                <div className="relative z-10 text-white">
                  {chatbotIcon}
                </div>
                {/* Tooltip - positioned to left of icon (towards center) */}
                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none transition-all duration-200 shadow-xl z-[60] border border-white/10">
                  Chat Bot
                  {/* Arrow pointing to icon */}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900/95"></div>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default SocialWidget;
