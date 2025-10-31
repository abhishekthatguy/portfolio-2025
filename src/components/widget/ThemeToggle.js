'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import themeConfig from '@/config/theme';

const ThemeToggle = () => {
  const { theme, toggleTheme, getEffectiveTheme, mounted } = useTheme();
  const effectiveTheme = getEffectiveTheme();

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Get position classes based on config
  const getPositionClasses = () => {
    const pos = themeConfig.toggleButton.position;
    
    const positions = {
      'top-left': 'top-5 left-5',
      'top-right': 'top-5 right-5',
      'bottom-left': 'bottom-5 left-5',
      'bottom-right': 'bottom-5 right-5',
      'top-center': 'top-5 left-1/2 -translate-x-1/2',
      'bottom-center': 'bottom-5 left-1/2 -translate-x-1/2',
    };

    return positions[pos] || positions['bottom-left'];
  };

  // Get size classes
  const getSizeClasses = () => {
    const size = themeConfig.toggleButton.size;
    const sizes = {
      sm: 'w-10 h-10',
      md: 'w-12 h-12',
      lg: 'w-14 h-14',
    };
    return sizes[size] || sizes.md;
  };

  const responsiveClasses = themeConfig.toggleButton.showOnMobile 
    ? '' 
    : 'hidden md:flex';

  const roundedClass = themeConfig.toggleButton.style || 'rounded-full';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed ${getPositionClasses()} ${getSizeClasses()} ${roundedClass} bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl z-50 flex items-center justify-center transition-all duration-300 group ${responsiveClasses}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${effectiveTheme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${effectiveTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon (Light Mode) */}
      <motion.svg
        className="w-6 h-6 text-yellow-500 absolute"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        initial={false}
        animate={{
          opacity: effectiveTheme === 'dark' ? 0 : 1,
          rotate: effectiveTheme === 'dark' ? 90 : 0,
          scale: effectiveTheme === 'dark' ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </motion.svg>

      {/* Moon Icon (Dark Mode) */}
      <motion.svg
        className="w-6 h-6 text-blue-400 absolute"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        initial={false}
        animate={{
          opacity: effectiveTheme === 'dark' ? 1 : 0,
          rotate: effectiveTheme === 'dark' ? 0 : -90,
          scale: effectiveTheme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </motion.svg>

      {/* Gradient Ring Effect */}
      <div className={`absolute inset-0 ${roundedClass} bg-gradient-to-br from-yellow-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </motion.button>
  );
};

export default ThemeToggle;

