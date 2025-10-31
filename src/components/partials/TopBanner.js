'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookAppointmentButton from '@/components/widget/BookAppointmentButton';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed or already shown in this visit/session
    const dismissed = sessionStorage.getItem('topBannerDismissed');
    const alreadyShown = sessionStorage.getItem('topBannerShown');
    
    if (dismissed === 'true' || alreadyShown === 'true') {
      setIsDismissed(true);
      return;
    }

    // Wait for page to fully load, then show after 5 seconds
    const showBanner = () => {
      setTimeout(() => {
        // Double-check sessionStorage in case user navigated away quickly
        const stillDismissed = sessionStorage.getItem('topBannerDismissed');
        const stillShown = sessionStorage.getItem('topBannerShown');
        
        if (!stillDismissed && !stillShown) {
          setIsVisible(true);
          // Mark as shown in this session so it won't appear on other pages
          sessionStorage.setItem('topBannerShown', 'true');
        }
      }, 5000); // 5 seconds after page load
    };

    if (document.readyState === 'complete') {
      showBanner();
    } else {
      window.addEventListener('load', showBanner, { once: true });
    }

    return () => {
      window.removeEventListener('load', showBanner);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('topBannerDismissed', 'true');
  };

  const handleContact = () => {
    window.location.href = 'mailto:abhishekthatguy@gmail.com?subject=Project Inquiry&body=Hi,%20I%20am%20interested%20in%20discussing%20a%20project%20opportunity.';
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[90] px-2 sm:px-4 pt-2 pb-2 sm:pt-3 sm:pb-3 max-h-[80px]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-cyan-500/90 dark:from-blue-600/95 dark:via-purple-600/95 dark:to-cyan-600/95 backdrop-blur-xl rounded-none sm:rounded-b-2xl shadow-2xl border-b border-white/20 dark:border-gray-700/50 p-2 sm:p-3 relative overflow-hidden h-full flex items-center">
            {/* Decorative gradient overlays */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-row items-center justify-between gap-2 sm:gap-4 w-full">
              {/* Left Section - Icon and Content */}
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm p-1.5 sm:p-2 flex items-center justify-center border border-white/30">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
                      <span className="hidden sm:inline">🚀 Ready to Build Something Amazing?</span>
                      <span className="sm:hidden">🚀 Build Something Amazing?</span>
                    </h3>
                    <p className="text-[10px] sm:text-xs text-white/90 hidden md:block whitespace-nowrap">
                      Let's discuss your next project!
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section - Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <BookAppointmentButton variant="compact" />

                <motion.button
                  onClick={handleContact}
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-white/95 hover:bg-white text-blue-600 dark:text-blue-600 font-semibold rounded-lg text-[10px] sm:text-[11px] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">Get in Touch</span>
                  <span className="sm:hidden">Contact</span>
                </motion.button>

                <motion.button
                  onClick={handleDismiss}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Dismiss banner"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopBanner;

