/**
 * Comprehensive Theme Styles Utility
 * Provides theme-aware styling functions and constants
 * Reusable across all components (Hero, About, Contact, etc.)
 */

/**
 * Get theme-aware styles based on current theme
 * @param {string} effectiveTheme - 'dark' or 'light'
 * @returns {Object} Theme-specific style configurations
 */
export const getThemeStyles = (effectiveTheme) => {
  const isDark = effectiveTheme === 'dark';
  
  return {
    // Background gradients - Enhanced contrast
    radialGradient: isDark
      ? 'radial-gradient(ellipse 80% 100% at center right, transparent 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,1) 100%)'
      : 'radial-gradient(ellipse 80% 100% at center right, transparent 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.9) 70%, rgba(255,255,255,1) 100%)',
    
    leftGradient: isDark
      ? 'linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,1) 100%)'
      : 'linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.95) 60%, rgba(255,255,255,1) 100%)',
    
    bottomGradient: isDark
      ? 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%)'
      : 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.8) 100%)',
    
    centerRadial: isDark
      ? 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.98) 100%)'
      : 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.85) 70%, rgba(255,255,255,0.98) 100%)',
    
    overlayGradient: isDark
      ? 'bg-gradient-to-r from-black via-black/90 to-black/70'
      : 'bg-gradient-to-r from-white via-white/90 to-white/70',
    
    // Text gradients - Theme adapted
    abhishekGradient: isDark
      ? 'linear-gradient(90deg, #FE7743, #FFA366, #FF8C4D, #FE7743, #FF6B35, #FE7743)'
      : 'linear-gradient(90deg, #E65100, #FF6B35, #FF8C4D, #E65100, #FE7743, #E65100)',
    
    singhGradient: isDark
      ? 'linear-gradient(90deg, #87CEEB, #00D9FF, #4DD0E1, #00D9FF, #00B8E6, #87CEEB)'
      : 'linear-gradient(90deg, #01579B, #0288D1, #00B8E6, #0288D1, #00D9FF, #01579B)',
    
    subtitleGradient: isDark
      ? 'linear-gradient(90deg, #FF6B35, #FE7743, #00D9FF, #4DD0E1, #FE7743, #00B8E6, #00D9FF, #FF8C61)'
      : 'linear-gradient(90deg, #E65100, #FF6B35, #0288D1, #00B8E6, #FF6B35, #01579B, #0288D1, #FF7043)',
    
    // Tech stack styling functions - Enhanced for visibility
    techBadgeBg: (color) => {
      const isDark = effectiveTheme === 'dark';
      // Dark theme: More vibrant, light theme: Stronger opacity for visibility
      return isDark
        ? `linear-gradient(135deg, ${color.replace('0.25', '0.45')}, ${color.replace('0.25', '0.65')})`
        : `linear-gradient(135deg, ${color.replace('0.25', '0.30')}, ${color.replace('0.25', '0.40')})`;
    },
    
    techBadgeBorder: isDark
      ? 'border-white/40'
      : 'border-gray-500/80',
    
    techBadgeHoverBorder: isDark
      ? 'border-white/70'
      : 'border-gray-700/90',
    
    techBadgeShadow: (glow) => {
      return isDark
        ? `0 4px 16px rgba(0, 0, 0, 0.5), 0 0 20px ${glow}70, inset 0 1px 0 rgba(255, 255, 255, 0.15)`
        : `0 4px 16px rgba(0, 0, 0, 0.2), 0 0 20px ${glow}60, inset 0 1px 0 rgba(255, 255, 255, 0.5)`;
    },
    
    techBadgeHoverShadow: (glow) => {
      return isDark
        ? `0 6px 24px rgba(0, 0, 0, 0.6), 0 0 30px ${glow}90, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
        : `0 6px 24px rgba(0, 0, 0, 0.25), 0 0 30px ${glow}80, inset 0 1px 0 rgba(255, 255, 255, 0.6)`;
    },
    
    techTextShadow: (shadow, color) => {
      const isDark = effectiveTheme === 'dark';
      // Enhanced text shadows for better readability
      if (isDark) {
        // Dark theme: Stronger original shadow
        return shadow.replace('0.6)', '0.9)').replace('0.5)', '0.8)').replace('0.8)', '1.0)');
      } else {
        // Light theme: Use dark shadow for contrast + glow effect from color
        const colorMatch = color.match(/#([0-9A-Fa-f]{6})/);
        if (colorMatch) {
          const hex = colorMatch[1];
          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16);
          return `0 0 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(${r}, ${g}, ${b}, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)`;
        }
        return `0 0 4px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)`;
      }
    },
    
    // Button styling
    buttonBorder: isDark
      ? 'border-[#FE7743]'
      : 'border-[#E65100]',
    
    buttonText: isDark
      ? 'text-[#FE7743]'
      : 'text-[#E65100]',
    
    buttonHoverBg: isDark
      ? 'bg-[#FE7743]'
      : 'bg-[#E65100]',
    
    buttonHoverText: 'text-white',
    
    buttonHoverShadow: isDark
      ? '0 0 30px rgba(254, 119, 67, 0.7), 0 0 60px rgba(254, 119, 67, 0.4), inset 0 0 20px rgba(254, 119, 67, 0.3)'
      : '0 0 30px rgba(230, 81, 0, 0.6), 0 0 60px rgba(230, 81, 0, 0.3), inset 0 0 20px rgba(230, 81, 0, 0.2)',
    
    buttonShadow: isDark
      ? '0 4px 20px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(254, 119, 67, 0.2)'
      : '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(230, 81, 0, 0.3)',
    
    // Background colors
    sectionBg: isDark
      ? 'bg-black'
      : 'bg-gray-50',
    
    // Text colors
    descriptionText: isDark
      ? 'text-gray-300'
      : 'text-gray-700',
    
    // Section backgrounds
    sectionBackground: isDark
      ? 'bg-black dark:bg-black'
      : 'bg-gray-50 dark:bg-black',
    
    // Heading colors
    headingText: isDark
      ? 'text-white'
      : 'text-gray-900',
    
    // Muted text
    mutedText: isDark
      ? 'text-gray-400'
      : 'text-gray-600',
    
    // Border colors
    borderColor: isDark
      ? 'border-gray-800'
      : 'border-gray-200',
    
    // Card backgrounds
    cardBg: isDark
      ? 'bg-gray-900/50'
      : 'bg-white/80',
    
    // Input backgrounds
    inputBg: isDark
      ? 'bg-gray-800/50'
      : 'bg-white',
  };
};

/**
 * Theme transition duration constants
 */
export const themeTransitions = {
  fast: 'duration-300',
  medium: 'duration-500',
  slow: 'duration-700',
  easeInOut: 'ease-in-out',
};

/**
 * Common theme-aware class combinations
 */
export const themeClasses = {
  section: (effectiveTheme) => {
    const styles = getThemeStyles(effectiveTheme);
    return `${styles.sectionBg} transition-all ${themeTransitions.medium} ${themeTransitions.easeInOut}`;
  },
  
  heading: (effectiveTheme) => {
    const styles = getThemeStyles(effectiveTheme);
    return `${styles.headingText} transition-colors ${themeTransitions.medium}`;
  },
  
  card: (effectiveTheme) => {
    const styles = getThemeStyles(effectiveTheme);
    return `${styles.cardBg} ${styles.borderColor} border backdrop-blur-sm transition-all ${themeTransitions.medium}`;
  },
  
  button: (effectiveTheme, variant = 'primary') => {
    const styles = getThemeStyles(effectiveTheme);
    if (variant === 'primary') {
      return `${styles.buttonBorder} ${styles.buttonText} border-2 transition-all ${themeTransitions.medium}`;
    }
    return '';
  },
};

