'use client';
import { motion } from 'framer-motion';

// Text gradient animation for smooth color flow
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  },
};

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
  return (
    <section id="education" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block"
            style={{
              backgroundImage: "linear-gradient(90deg, #FE7743, #ffffff, #FE7743)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
            animate={gradientAnimation}
          >
            Academic
          </motion.span>{' '}
          <span className="text-primary">Journey</span>
        </motion.h2>

        <motion.p
          className="text-lg text-muted text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My educational background reflects a diverse and progressive learning journey, combining <span className="text-primary font-semibold">business leadership expertise</span> with <span className="text-primary font-semibold">humanities education</span>. From higher secondary education to pursuing an MBA in Delivery & Operations, my academic foundation has shaped my analytical thinking and <span className="text-primary font-semibold">operational excellence</span> in software development and team management.
        </motion.p>

        {/* Ladder Timeline */}
        <div className="relative">
          {/* Vertical ladder line connecting all education entries */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-blue-500 to-green-500 opacity-30 hidden lg:block"
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
                  className={`relative z-20 flex-shrink-0 w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-2xl border-4 border-primary mb-6`}
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
                      opacity: [0.5, 0.8, 0.5],
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
                  className={`w-full max-w-md bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border ${edu.borderColor} hover:border-opacity-100 transition-all duration-300 text-center`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center text-3xl shadow-lg mb-4`}>
                      {edu.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${edu.borderColor} text-primary mb-3`}>
                      {edu.type}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                    {edu.degree}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted">{edu.period}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 