'use client';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
    items: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'AngularJS', 'Webflow', 'Wordpress', 'Drupal'],
  },
  {
    category: 'Backend',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    items: ['Node.js', 'Express', 'Python', 'Flask', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Django'],
  },
  {
    category: 'DevOps',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'AWS', 'Nginx'],
  },
  {
    category: 'Tools',
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9 17v-2a4 4 0 014-4h2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    items: ['Git', 'VS Code', 'Jira', 'Figma'],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-black"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-orange-400 text-center mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900/60 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="mb-3">{group.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 rounded-full border border-orange-400 text-orange-400 bg-transparent hover:bg-orange-400 hover:text-black transition-all duration-200 text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 