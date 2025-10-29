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

const experiences = [
  {
    year: "2021 - Present",
    company: "Policy Advisor",
    role: "Sr. Software Developer",
    period: "Nov 2021 - PRESENT",
    icon: "💼",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/50",
    responsibilities: [
      "Lead front-end team to develop projects from scratch based on vue and ROR environment for insurance domain tools",
      "Performance Optimization: Boosting website speed and performance (30–90%)",
      "SEO & Analytics: SEO strategies, Google PageSpeed Insights, Core Web Vitals",
      "UI refactoring and creating UI components",
      "Integrating Graphql API using Strapi",
      "Implement UI libraries with Vuejs, Vuex, and Vuetify to develop an admin panel from scratch",
      "Developing themed broker flow and utilizing SCSS preprocessor and ESLint validation",
      "Delivering modules and enhancements using Agile methodology"
    ],
    tech: ["Vuejs", "Vuex", "React", "Redux", "Graphql", "Strapi", "Git", "Jenkins", "Gulp", "NodeJs", "Styled Components", "Bootstrap", "SCSS", "RWD"]
  },
  {
    year: "2021",
    company: "Accenture",
    role: "Front-End Developer",
    period: "Feb 2021 - OCT 2021",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/50",
    responsibilities: [
      "Experience in UI refactoring and creating custom hooks",
      "Utilized Asynchronous calls to consume restful web API",
      "Utilized the company's in-built UI component library with Reactjs and Context API",
      "Developed Unit test cases with Jest",
      "Utilized Gulp for ESLint validation",
      "Delivering modules and enhancements as per business requirements using Agile methodology"
    ],
    tech: ["React js", "Hooks", "Context", "REST APIs", "Launch Darkly", "Git", "Github", "Jenkins", "Gulp", "Node Js", "Styled Component", "Less/SASS", "RWD", "Jest"]
  },
  {
    year: "2017 - 2021",
    company: "NKC Projects",
    role: "Web Developer",
    period: "Dec 2017 - Jan 2021",
    icon: "🌱",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/50",
    responsibilities: [
      "Understanding functional and business requirements of clients",
      "Collaborating with the tech lead, CTO, and COO on project planning and implementation",
      "Designing, building, and configuring applications to meet business requirements",
      "Integration of JWT Auth for roles and permission-based modules",
      "Handling the manual deployment of front-end projects on the AWS Server",
      "Worked on multiple sub-projects for all CRUD operations, and executed activation orders in microservices",
      "Implemented new technologies such as React, Redux, and Axios in a separate sub-module from scratch"
    ],
    tech: ["React js", "Redux", "Redux-Thunk", "Axios", "Hooks", "REST APIs", "JWT", "AWS", "Material UI", "Bootstrap", "JQuery"]
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
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  show: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    x: -50,
    scale: 0.9,
    transition: { duration: 0.4 }
  },
};

const itemRight = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  show: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    x: 50,
    scale: 0.9,
    transition: { duration: 0.4 }
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
            Professional
          </motion.span>{' '}
          <span className="text-primary">Experience</span>
        </motion.h2>

        <motion.p
          className="text-lg text-muted text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          With over <span className="text-primary font-semibold">7+ years</span> of progressive experience in full-stack development, I have evolved from building foundational web applications to leading high-performing frontend teams and architecting scalable UI solutions. My journey spans from web development to senior software development, specializing in modern JavaScript frameworks, performance optimization, and team leadership in agile environments.
        </motion.p>

        {/* Snake Ladder Timeline */}
        <div className="relative">
          {/* Vertical line connecting all experiences */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 opacity-30 hidden lg:block"
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
            className="space-y-12 lg:space-y-16"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const variants = isEven ? item : itemRight;
              
              return (
                <motion.div
                  key={index}
                  variants={variants}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Year Badge - Center */}
                  <motion.div
                    className={`relative z-20 flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-2xl border-4 border-primary`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-center">
                      <div className="text-4xl lg:text-5xl mb-1">{exp.icon}</div>
                      <div className="text-xs lg:text-sm font-bold text-white">{exp.year}</div>
                    </div>
                    
                    {/* Glowing ring animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-full border-4 ${exp.borderColor}`}
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

                  {/* Experience Card */}
                  <motion.div
                    className={`flex-1 w-full lg:max-w-lg bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border ${exp.borderColor} hover:border-opacity-100 transition-all duration-300`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
                              {exp.company}
                            </h3>
                            <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                              {exp.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-muted mb-4">{exp.period}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.slice(0, 4).map((resp, idx) => (
                        <motion.li
                          key={idx}
                          className="text-white/90 text-sm md:text-base flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          <span className={`text-primary mt-1.5`}>▸</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.slice(0, 8).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className={`px-3 py-1 rounded-full border ${exp.borderColor} text-primary bg-transparent hover:bg-primary hover:text-secondary transition-all duration-200 text-xs font-semibold`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {exp.tech.length > 8 && (
                        <span className="px-3 py-1 rounded-full border border-primary/30 text-primary/70 text-xs font-semibold">
                          +{exp.tech.length - 8} more
                        </span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 