'use client';
import { useState, useEffect } from 'react';
import { useTheme } from './useTheme';
import { getThemeStyles } from '@/styles/theme';

/**
 * Custom hook to get theme-aware styles
 * Automatically updates when theme changes
 * @returns {Object} Theme styles object
 */
export const useThemeStyles = () => {
  const { getEffectiveTheme, theme } = useTheme();
  const [effectiveTheme, setEffectiveTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  // Update effective theme when theme changes
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
          }, 0);
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

  return {
    themeStyles: getThemeStyles(effectiveTheme),
    effectiveTheme
  };
};

