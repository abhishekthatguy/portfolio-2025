'use client';
import { useState, useEffect } from 'react';
import themeConfig from '@/config/theme';

/**
 * Custom hook for theme management
 * Handles system theme detection, localStorage persistence, and theme switching
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(themeConfig.defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Get system theme preference
  const getSystemTheme = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };

  // Apply theme to document
  const applyTheme = (newTheme) => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    root.classList.remove('light', 'dark');

    let effectiveTheme = newTheme;

    // If theme is 'system', use system preference
    if (newTheme === 'system') {
      effectiveTheme = getSystemTheme();
    }

    root.classList.add(effectiveTheme);
    root.setAttribute('data-theme', effectiveTheme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', effectiveTheme === 'dark' ? '#000000' : '#ffffff');
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);

    // Get saved theme preference or use default
    let savedTheme = themeConfig.defaultTheme;
    if (themeConfig.persistPreference && typeof window !== 'undefined') {
      const stored = localStorage.getItem(themeConfig.storageKey);
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        savedTheme = stored;
      }
    }

    setTheme(savedTheme);
    applyTheme(savedTheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      if (savedTheme === 'system' || theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  // Update theme when it changes
  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
  }, [theme, mounted]);

  // Toggle theme
  const toggleTheme = () => {
    const currentEffectiveTheme = theme === 'system' ? getSystemTheme() : theme;
    const newTheme = currentEffectiveTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    // Persist preference
    if (themeConfig.persistPreference && typeof window !== 'undefined') {
      localStorage.setItem(themeConfig.storageKey, newTheme);
    }
  };

  // Set specific theme
  const setThemePreference = (newTheme) => {
    if (!['light', 'dark', 'system'].includes(newTheme)) {
      console.warn(`Invalid theme: ${newTheme}. Use 'light', 'dark', or 'system'.`);
      return;
    }

    setTheme(newTheme);

    // Persist preference
    if (themeConfig.persistPreference && typeof window !== 'undefined') {
      localStorage.setItem(themeConfig.storageKey, newTheme);
    }
  };

  // Get current effective theme (resolves 'system' to actual theme)
  const getEffectiveTheme = () => {
    if (theme === 'system') {
      return getSystemTheme();
    }
    return theme;
  };

  return {
    theme,
    setTheme: setThemePreference,
    toggleTheme,
    getEffectiveTheme,
    mounted,
  };
};




