'use client';
import { motion } from 'framer-motion';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInDown, fadeInUp } from '@/styles/animations';

const skills = [
  {
    category: 'Core Full-Stack & SSR',
    emoji: '💻',
    items: ['React.js', 'MERN Stack', 'Next.js (SSR)', 'Python Stack', 'Django', 'Flask', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Node.js', 'Express.js'],
  },
  {
    category: 'Modern Frontend & UI',
    emoji: '🎨',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vue.js', 'Alpine.js', 'Material UI', 'Tailwind CSS', 'SASS/SCSS', 'Redux', 'Vuex', 'Context API'],
  },
  {
    category: 'Architecture & Performance',
    emoji: '🏛️',
    items: ['UI Architecture', 'System Design', 'Performance Optimization', 'Core Web Vitals', 'Profiling & Debugging', 'Jest', 'React Testing Library'],
  },
  {
    category: 'DevOps & Cloud Infrastructure',
    emoji: '🔧',
    items: ['AWS', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Nginx'],
  },
  {
    category: 'Platforms & Developer Tools',
    emoji: '🛠️',
    items: ['Strapi', 'WordPress', 'Drupal', 'Webflow', 'Cursor', 'OpenAI (ChatGPT)', 'Perplexity', 'Git', 'VS Code', 'Jira', 'Figma'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: 30,
    transition: { duration: 0.4 }
  },
};

export default function Skills() {
  const { themeStyles, effectiveTheme } = useThemeStyles();

  return (
    <section id="skills" className={`py-20 ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}>
      <div className="max-w-7xl mx-auto px-4">
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
            Technical
          </motion.span>{' '}
          <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Skills</span>
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
          As a <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>Senior Frontend Architect</span>, I bring a comprehensive skill set that spans from deep technical expertise in modern frameworks to architectural leadership and performance optimization. My experience is structured across five core specializations that enable me to build, optimize, and deploy scalable applications.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              variants={item}
              className={`rounded-2xl shadow-lg p-6 md:p-8 border transition-all duration-500 hover:shadow-2xl group ${
                effectiveTheme === 'dark' 
                  ? 'bg-gray-900/40 border-gray-800 hover:border-[#FE7743]/50 hover:shadow-[#FE7743]/10' 
                  : 'bg-white/80 border-gray-300 hover:border-[#E65100]/50 hover:shadow-[#E65100]/10'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{group.emoji}</span>
                <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${
                  effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                }`}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full border transition-all duration-500 text-sm font-semibold cursor-default ${
                      effectiveTheme === 'dark'
                        ? 'border-[#FE7743]/50 text-[#FE7743] bg-transparent hover:bg-[#FE7743] hover:text-white'
                        : 'border-[#E65100]/50 text-[#E65100] bg-transparent hover:bg-[#E65100] hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 