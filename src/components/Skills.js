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
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
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
            Technical
          </motion.span>{' '}
          <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.p
          className="text-lg text-muted text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          As a <span className="text-primary font-semibold">Senior Frontend Architect</span>, I bring a comprehensive skill set that spans from deep technical expertise in modern frameworks to architectural leadership and performance optimization. My experience is structured across five core specializations that enable me to build, optimize, and deploy scalable applications.
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
              className="bg-gray-900/40 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{group.emoji}</span>
                <h3 className="text-xl md:text-2xl font-bold text-primary">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 rounded-full border border-primary/50 text-primary bg-transparent hover:bg-primary hover:text-secondary transition-all duration-200 text-sm font-semibold cursor-default"
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