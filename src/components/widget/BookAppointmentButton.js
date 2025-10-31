'use client';
import { motion } from 'framer-motion';

const BookAppointmentButton = ({ 
  variant = 'default', // 'default' | 'floating' | 'compact'
  className = ''
}) => {
  const handleBookAppointment = () => {
    // Get Google Calendar URL from environment variable
    // Format: https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting%20with%20Abhishek&dates=...
    // Or use a public booking page like Calendly or Google Calendar booking page
    const calendarUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL || 
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation%20with%20Abhishek%20Singh&details=Let%27s%20discuss%20your%20project%20requirements%20and%20how%20I%20can%20help%20you%20build%20something%20amazing!';
    
    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
  };

  // Variant-specific styling
  const getVariantClasses = () => {
    switch (variant) {
      case 'floating':
        return 'px-4 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-semibold rounded-l-2xl shadow-2xl hover:shadow-3xl text-sm transition-all duration-300';
      case 'compact':
        return 'px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-white/95 hover:bg-white text-blue-600 dark:text-blue-600 font-semibold rounded-lg text-[10px] sm:text-[11px] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap';
      default:
        return 'px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300';
    }
  };

  const iconSize = variant === 'floating' ? 'w-5 h-5' : variant === 'compact' ? 'w-3.5 h-3.5 sm:w-4 sm:h-4' : 'w-5 h-5';
  const textSize = variant === 'floating' ? 'text-sm' : variant === 'compact' ? 'text-[10px] sm:text-[11px]' : 'text-sm';

  return (
    <motion.button
      onClick={handleBookAppointment}
      className={`flex items-center gap-2 ${getVariantClasses()} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {variant === 'compact' ? (
        <>
          <span className="hidden sm:inline">Book Appointment</span>
          <span className="sm:hidden">Book</span>
        </>
      ) : (
        <span className={textSize}>Book Appointment</span>
      )}
    </motion.button>
  );
};

export default BookAppointmentButton;




