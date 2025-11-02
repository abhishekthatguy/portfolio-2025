'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStyles } from '@/hooks/useThemeStyles';

const DateTimeWidget = () => {
  const { effectiveTheme } = useThemeStyles();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [dateTime, setDateTime] = useState({
    date: '',
    day: '',
    time: '',
    amPm: '',
    utcDate: '',
    utcDay: '',
    utcTime: '',
    utcAmPm: ''
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Local time formatting
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      const dateStr = now.toLocaleDateString('en-US', options);
      const dayStr = now.toLocaleDateString('en-US', { weekday: 'long' });
      const timeStr = now.toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit' 
      });
      const timeParts = timeStr.split(' ');
      const timeValue = timeParts[0];
      const amPm = timeParts[1] || '';
      
      // UTC time formatting
      const utcOptions = { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' };
      const utcDateStr = now.toLocaleDateString('en-US', utcOptions);
      const utcDayStr = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
      const utcTimeStr = now.toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
      });
      const utcTimeParts = utcTimeStr.split(' ');
      const utcTimeValue = utcTimeParts[0];
      const utcAmPm = utcTimeParts[1] || '';
      
      setDateTime({
        date: dateStr,
        day: dayStr,
        time: timeValue,
        amPm: amPm,
        utcDate: utcDateStr,
        utcDay: utcDayStr,
        utcTime: utcTimeValue,
        utcAmPm: utcAmPm
      });
    };

    // Update immediately
    updateDateTime();

    // Update every second
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-[200px] right-0 z-40 hidden md:block"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <AnimatePresence mode="wait">
        {isCollapsed ? (
          // Collapsed state - just a button
          <motion.button
            key="collapsed"
            onClick={() => setIsCollapsed(false)}
            className={`backdrop-blur-xl rounded-l-2xl shadow-2xl border border-r-0 p-3 pr-4 transition-all duration-500 ${
              effectiveTheme === 'dark'
                ? 'bg-black/40 border-white/20 hover:bg-white/15'
                : 'bg-white/80 border-gray-300/50 hover:bg-white/90'
            }`}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Expand time widget"
          >
            <svg className={`w-5 h-5 transition-colors duration-500 ${
              effectiveTheme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.button>
        ) : (
          // Expanded state - full widget
          <motion.div
            key="expanded"
            className={`backdrop-blur-xl rounded-l-2xl shadow-2xl border border-r-0 p-4 pr-6 min-w-[200px] relative overflow-hidden transition-all duration-500 ${
              effectiveTheme === 'dark'
                ? 'bg-black/40 border-white/20'
                : 'bg-white/80 border-gray-300/50'
            }`}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Collapse button */}
            <motion.button
              onClick={() => setIsCollapsed(true)}
              className={`absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 z-10 ${
                effectiveTheme === 'dark'
                  ? 'bg-white/10 hover:bg-white/20'
                  : 'bg-gray-200/80 hover:bg-gray-300/80'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Collapse time widget"
            >
              <svg className={`w-3.5 h-3.5 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-white' : 'text-gray-900'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Creative Label */}
            <div className={`text-right mb-3 pb-2 border-b transition-colors duration-500 ${
              effectiveTheme === 'dark' ? 'border-white/10' : 'border-gray-300/50'
            }`}>
              <div className={`text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent flex items-center justify-end gap-1.5 transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500'
                  : 'bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600'
              }`}>
                <svg className={`w-3.5 h-3.5 transition-colors duration-500 ${
                  effectiveTheme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Live Time
              </div>
            </div>

            {/* Time - Most prominent with gradient and icon */}
            <div className="text-right mb-2">
              <motion.div
                key={dateTime.time}
                className="flex items-baseline justify-end gap-2"
                initial={{ scale: 1.05, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <svg className={`w-5 h-5 flex-shrink-0 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className={`text-3xl font-bold tabular-nums tracking-tight bg-clip-text text-transparent transition-all duration-500 ${
                    effectiveTheme === 'dark'
                      ? 'bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400'
                      : 'bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600'
                  }`}>
                    {dateTime.time}
                  </span>
                </div>
                {dateTime.amPm && (
                  <span className={`text-sm font-bold bg-clip-text text-transparent transition-all duration-500 ${
                    effectiveTheme === 'dark'
                      ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400'
                      : 'bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600'
                  }`}>
                    {dateTime.amPm}
                  </span>
                )}
              </motion.div>
            </div>

            {/* Day with gradient and icon */}
            <div className="text-right mb-1.5">
              <div className="flex items-center justify-end gap-2">
                <svg className={`w-4 h-4 flex-shrink-0 transition-colors duration-500 ${
                  effectiveTheme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className={`text-sm font-semibold uppercase tracking-wide bg-clip-text text-transparent transition-all duration-500 ${
                  effectiveTheme === 'dark'
                    ? 'bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400'
                    : 'bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600'
                }`}>
                  {dateTime.day}
                </div>
              </div>
            </div>

            {/* Date with gradient and icon */}
            <div className="text-right mb-3">
              <div className="flex items-center justify-end gap-2">
                <svg className={`w-3.5 h-3.5 flex-shrink-0 transition-colors duration-500 ${
                  effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className={`text-xs font-medium tracking-wide bg-clip-text text-transparent transition-all duration-500 ${
                  effectiveTheme === 'dark'
                    ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300'
                    : 'bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600'
                }`}>
                  {dateTime.date}
                </div>
              </div>
            </div>

            {/* UTC Section */}
            <div className={`mt-3 pt-3 border-t transition-colors duration-500 ${
              effectiveTheme === 'dark' ? 'border-white/10' : 'border-gray-300/50'
            }`}>
              <div className={`text-[10px] font-bold uppercase tracking-wider mb-2 text-center transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                UTC
              </div>
              
              {/* UTC Time */}
              <div className="text-right mb-1.5">
                <motion.div
                  key={dateTime.utcTime}
                  className="flex items-baseline justify-end gap-1.5"
                  initial={{ scale: 1.02, opacity: 0.9 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className={`text-lg font-bold tabular-nums tracking-tight bg-clip-text text-transparent transition-all duration-500 ${
                    effectiveTheme === 'dark'
                      ? 'bg-gradient-to-r from-blue-300 via-cyan-200 to-teal-300'
                      : 'bg-gradient-to-r from-blue-700 via-cyan-700 to-teal-700'
                  }`}>
                    {dateTime.utcTime}
                  </span>
                  {dateTime.utcAmPm && (
                    <span className={`text-[10px] font-bold bg-clip-text text-transparent transition-all duration-500 ${
                      effectiveTheme === 'dark'
                        ? 'bg-gradient-to-r from-purple-300 via-pink-300 to-rose-300'
                        : 'bg-gradient-to-r from-purple-700 via-pink-700 to-rose-700'
                    }`}>
                      {dateTime.utcAmPm}
                    </span>
                  )}
                </motion.div>
              </div>

              {/* UTC Day */}
              <div className="text-right mb-1">
                <div className={`text-[10px] font-semibold uppercase tracking-wide bg-clip-text text-transparent transition-all duration-500 ${
                  effectiveTheme === 'dark'
                    ? 'bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300'
                    : 'bg-gradient-to-r from-orange-700 via-amber-700 to-yellow-700'
                }`}>
                  {dateTime.utcDay}
                </div>
              </div>

              {/* UTC Date */}
              <div className="text-right">
                <div className={`text-[10px] font-medium tracking-wide bg-clip-text text-transparent transition-all duration-500 ${
                  effectiveTheme === 'dark'
                    ? 'bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400'
                    : 'bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700'
                }`}>
                  {dateTime.utcDate}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DateTimeWidget;

