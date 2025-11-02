'use client';
import { motion } from 'framer-motion';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInDown, fadeInUp } from '@/styles/animations';

const education = [
  {
    degree: "MBA in Delivery & Operations",
    institution: "Amity Online",
    period: "2023 - 2025",
    year: "2023",
    icon: "🎓",
    color: "from-indigo-500 to-purple-500",
    borderColor: "border-indigo-500/50",
    type: "Master's Degree"
  },
  {
    degree: "Bachelor of Arts in Political Science & English",
    institution: "MGKVP Varanasi",
    period: "2013 - 2016",
    year: "2013",
    icon: "📚",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/50",
    type: "Bachelor's Degree"
  },
  {
    degree: "Intermediate",
    institution: "GGP Ballia",
    period: "2011 - 2013",
    year: "2011",
    icon: "📖",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/50",
    type: "Higher Secondary"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
    transition: { duration: 0.4 }
  },
};

export default function Education() {
  const { themeStyles, effectiveTheme } = useThemeStyles();

  return (
    <section id="education" className={`py-20 ${themeStyles.sectionBg} relative overflow-hidden transition-all duration-500 ease-in-out`}>
      {/* Background gradient effect - Theme-aware */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-b from-black via-blue-900/5 to-black' 
          : 'bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50'
      }`}></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-6 ${themeStyles.headingText} transition-colors duration-500`}
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.span
            className="inline-block"
            style={{
              backgroundImage: themeStyles.subtitleGradient,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              transition: 'background-image 0.5s ease-in-out'
            }}
            animate={gradientAnimation}
          >
            Academic
          </motion.span>{' '}
          <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Journey</span>
        </motion.h2>

        <motion.p
          className={`text-lg ${themeStyles.descriptionText} text-center max-w-3xl mx-auto mb-16 transition-colors duration-500`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          My educational background reflects a diverse and progressive learning journey, combining <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>business leadership expertise</span> with <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>humanities education</span>. From higher secondary education to pursuing an MBA in Delivery & Operations, my academic foundation has shaped my analytical thinking and <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>operational excellence</span> in software development and team management.
        </motion.p>

        {/* Ladder Timeline */}
        <div className="relative">
          {/* Vertical ladder line connecting all education entries - Theme-aware */}
          <motion.div
            className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-blue-500 to-green-500 hidden lg:block transition-opacity duration-500 ${
              effectiveTheme === 'dark' ? 'opacity-30' : 'opacity-40'
            }`}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ originY: 0 }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-12 lg:space-y-16 relative"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative flex flex-col items-center"
              >
                {/* Year Badge - Center */}
                <motion.div
                  className={`relative z-20 flex-shrink-0 w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-2xl border-4 mb-6 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'border-[#FE7743]' : 'border-[#E65100]'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl mb-1">{edu.icon}</div>
                    <div className="text-xs lg:text-sm font-bold text-white">{edu.year}</div>
                  </div>
                  
                  {/* Glowing ring animation */}
                  <motion.div
                    className={`absolute inset-0 rounded-full border-4 ${edu.borderColor}`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: effectiveTheme === 'dark' ? [0.5, 0.8, 0.5] : [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Education Card */}
                <motion.div
                  className={`w-full max-w-md backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border text-center transition-all duration-500 ${
                    effectiveTheme === 'dark'
                      ? `bg-gray-900/60 ${edu.borderColor} hover:border-opacity-100`
                      : `bg-white/80 border-gray-300 hover:border-opacity-80`
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center text-3xl shadow-lg mb-4`}>
                      {edu.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border transition-colors duration-500 mb-3 ${
                      effectiveTheme === 'dark'
                        ? `${edu.borderColor} text-[#FE7743]`
                        : `${edu.borderColor} text-[#E65100]`
                    }`}>
                      {edu.type}
                    </span>
                  </div>

                  <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>
                    {edu.degree}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                    {edu.institution}
                  </p>
                  <p className={`text-sm transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{edu.period}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 