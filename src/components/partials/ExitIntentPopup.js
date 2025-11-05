'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const pageLoadTimeRef = useRef(Date.now());
  const mouseYRef = useRef(0);

  useEffect(() => {
    // Check if popup has been shown before (using sessionStorage)
    const shownBefore = sessionStorage.getItem('exitIntentShown');
    if (shownBefore === 'true') {
      setHasShown(true);
      return;
    }
  }, []);

  useEffect(() => {
    if (hasShown) return;

    // Minimum time before popup can trigger (user should have spent some time on page)
    const minTimeOnPage = 3000; // 3 seconds

    // Track mouse movement for smoother exit intent detection
    const handleMouseMove = (e) => {
      mouseYRef.current = e.clientY;
    };

    // Track mouse movement to detect exit intent
    const handleMouseLeave = (e) => {
      const timeOnPage = Date.now() - pageLoadTimeRef.current;
      // Only trigger if mouse is moving towards the top of the viewport
      // and user has spent minimum time on page
      if (
        e.clientY <= 0 && 
        e.relatedTarget === null && 
        mouseYRef.current <= 20 && // Mouse was near top when leaving
        !hasShown && 
        !isOpen && 
        timeOnPage >= minTimeOnPage
      ) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleContact = () => {
    setIsOpen(false);
    // Small delay to allow popup to close before navigation
    setTimeout(() => {
      window.location.href = 'mailto:abhishekthatguy@gmail.com?subject=Custom Work Inquiry&body=Hi,%20I%20am%20interested%20in%20discussing%20custom%20work%20opportunities.';
    }, 100);
  };

  // Allow Escape key to close popup
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Block body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - clickable to close */}
          <motion.div
            className="fixed inset-0 bg-black/70 dark:bg-black/85 backdrop-blur-md z-[100] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleClose}
            aria-label="Close popup"
          />

          {/* Popup Modal */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-6 sm:p-8 max-w-md w-full relative overflow-hidden pointer-events-auto"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-cyan-400/20 pointer-events-none"></div>

              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close popup"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Decorative glows */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"></div>
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Pill label */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/40 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md whitespace-nowrap">
                    <svg className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h5a2 2 0 012 2v2h5a2 2 0 012 2v1.528a2 2 0 01-.586 1.414l-5.472 5.472a2 2 0 01-1.414.586H8a2 2 0 01-2-2V13H4a2 2 0 01-2-2V5z"/></svg>
                    <span className="text-[11px] font-semibold tracking-wide text-cyan-600 dark:text-cyan-200">Need a hand?</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-[2px] shadow-lg shadow-purple-500/10">
                    <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent tracking-tight leading-tight">
                  Wait! Before You Go...
                </h2>

                {/* Subtitle */}
                <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-6 leading-relaxed px-2">
                  Let's turn your idea into a polished, high‑performance experience. I offer fast iterations, clean architecture, and measurable results.
                </p>

                {/* Trust badges */}
                <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/40 dark:bg-white/5 px-2.5 py-1.5 text-[10px] sm:text-[11px] text-gray-800 dark:text-gray-200 whitespace-nowrap flex-shrink-0">
                    <svg className="h-3 w-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span>Free consultation</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/40 dark:bg-white/5 px-2.5 py-1.5 text-[10px] sm:text-[11px] text-gray-800 dark:text-gray-200 whitespace-nowrap flex-shrink-0">
                    <svg className="h-3 w-3 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M12 6a9 9 0 100 18 9 9 0 000-18z"/></svg>
                    <span>Reply 24h</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/40 dark:bg-white/5 px-2.5 py-1.5 text-[10px] sm:text-[11px] text-gray-800 dark:text-gray-200 whitespace-nowrap flex-shrink-0">
                    <svg className="h-3 w-3 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    <span>Fast delivery</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/40 dark:bg-white/5 px-2.5 py-1.5 text-[10px] sm:text-[11px] text-gray-800 dark:text-gray-200 whitespace-nowrap flex-shrink-0">
                    <svg className="h-3 w-3 text-fuchsia-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18"/></svg>
                    <span>Clear results</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <motion.button
                    onClick={handleContact}
                    className="flex-1 min-w-0 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Contact Me</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/15 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>

                  <motion.button
                    onClick={handleClose}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                    <span>Cancel</span>
                  </motion.button>
                </div>

                {/* Footer Text */}
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 text-center mt-4 whitespace-nowrap">
                  Looking forward to collaborating with you! 🚀
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;

