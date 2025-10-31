/**
 * Theme Configuration
 * 
 * This file contains all theme-related settings
 */

export const themeConfig = {
  // Default theme behavior
  defaultTheme: 'system', // 'light' | 'dark' | 'system'
  
  // Storage key for persisting theme preference
  storageKey: 'theme-preference',
  
  // Whether to persist theme preference in localStorage
  persistPreference: true,
  
  // Theme toggle button configuration
  toggleButton: {
    // Position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'
    position: 'bottom-left',
    
    // Show on mobile (responsive)
    showOnMobile: true,
    
    // Button size
    size: 'md', // 'sm' | 'md' | 'lg'
    
    // Button style
    style: 'rounded-full', // 'rounded-full' | 'rounded-lg' | 'rounded-xl'
    
    // Animation
    animated: true,
  },
};

export default themeConfig;

