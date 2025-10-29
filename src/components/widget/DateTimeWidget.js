'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DateTimeWidget = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [dateTime, setDateTime] = useState({
    date: '',
    day: '',
    time: '',
    amPm: ''
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Format date: DD MMM YYYY
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      const dateStr = now.toLocaleDateString('en-US', options);
      
      // Format day: Day Name
      const dayStr = now.toLocaleDateString('en-US', { weekday: 'long' });
      
      // Format time: HH:MM:SS AM/PM
      const timeStr = now.toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit' 
      });
      
      // Split time to get AM/PM separately
      const timeParts = timeStr.split(' ');
      const timeValue = timeParts[0];
      const amPm = timeParts[1] || '';
      
      setDateTime({
        date: dateStr,
        day: dayStr,
        time: timeValue,
        amPm: amPm
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
            className="bg-white/10 dark:bg-black/40 backdrop-blur-xl rounded-l-2xl shadow-2xl border border-white/20 border-r-0 p-3 pr-4 hover:bg-white/15 transition-colors"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Expand time widget"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.button>
        ) : (
          // Expanded state - full widget
          <motion.div
            key="expanded"
            className="bg-white/10 dark:bg-black/40 backdrop-blur-xl rounded-l-2xl shadow-2xl border border-white/20 border-r-0 p-4 pr-6 min-w-[200px] relative overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Collapse button */}
            <motion.button
              onClick={() => setIsCollapsed(true)}
              className="absolute top-2 left-2 w-6 h-6 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Collapse time widget"
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Creative Label */}
            <div className="text-right mb-3 pb-2 border-b border-white/10">
              <div className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent flex items-center justify-end gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-3xl font-bold tabular-nums tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                    {dateTime.time}
                  </span>
                </div>
                {dateTime.amPm && (
                  <span className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                    {dateTime.amPm}
                  </span>
                )}
              </motion.div>
            </div>

            {/* Day with gradient and icon */}
            <div className="text-right mb-1.5">
              <div className="flex items-center justify-end gap-2">
                <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="text-sm font-semibold uppercase tracking-wide bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  {dateTime.day}
                </div>
              </div>
            </div>

            {/* Date with gradient and icon */}
            <div className="text-right">
              <div className="flex items-center justify-end gap-2">
                <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="text-xs font-medium tracking-wide bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                  {dateTime.date}
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

