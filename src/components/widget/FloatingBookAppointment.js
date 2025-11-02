'use client';
import { motion } from 'framer-motion';
import BookAppointmentButton from './BookAppointmentButton';

const FloatingBookAppointment = () => {
  return (
    <motion.div
      className="fixed top-[140px] right-0 z-40 hidden md:block"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
    >
      <div className="relative">
        {/* Decorative gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-l-2xl blur-xl"></div>
        
        <BookAppointmentButton 
          variant="floating"
          className="relative z-10"
        />
      </div>
    </motion.div>
  );
};

export default FloatingBookAppointment;






