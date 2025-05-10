'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Policy Advisor",
      description: "Lead front-end development for an insurance domain tool built with Vue.js and ROR. Implemented performance optimizations that improved page speed by 30-90%.",
      tech: ["Vue.js", "Vuex", "GraphQL", "Strapi", "SCSS", "ESLint"]
    },
    {
      title: "Broker Flow",
      description: "Developed a themed broker flow system with Vue.js and Vuetify, implementing custom UI components and SCSS preprocessing.",
      tech: ["Vue.js", "Vuetify", "SCSS", "ESLint", "Vue-mask", "Vee-validate"]
    },
    {
      title: "Accredo & Express Scripts",
      description: "Worked on UI refactoring and custom hooks implementation for healthcare applications. Developed unit tests and implemented ESLint validation.",
      tech: ["React", "Hooks", "Context API", "Jest", "ESLint", "Styled Components"]
    },
    {
      title: "NYGGS & Automation Suite",
      description: "Implemented JWT authentication and role-based access control. Developed microservices architecture and handled AWS deployments.",
      tech: ["React", "Redux", "JWT", "AWS", "Microservices", "Material UI"]
    }
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-black"
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-orange-400 text-center mb-10">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 transition hover:scale-[1.02] hover:shadow-2xl duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/90 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full border border-orange-400 text-orange-400 bg-transparent hover:bg-orange-400 hover:text-black transition-all duration-200 text-xs font-semibold"
                  >
                    {tech}
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