'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: "InsureXtech Pvt ltd (Policy Advisor)",
      role: "Sr. Software Developer",
      period: "Nov 2021 - PRESENT",
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
      tech: ["Vuejs", "Vuex", "React", "Redux", "Graphql", "Metronics", "Git", "Jenkins", "Gulp", "NodeJs", "Styled Components", "Bootstrap-4 & 5", "SCSS", "RWD", "Vue-mask", "Vee-validate", "React", "ES6", "Axios", "WordPress", "Strapi"]
    },
    {
      company: "Asap (Accenture Contractor)",
      role: "Front-End Developer",
      period: "Feb 2021 - OCT 2021",
      responsibilities: [
        "Experience in UI refactoring and creating custom hooks",
        "Utilized Asynchronous calls to consume restful web API",
        "Utilized the company's in-built UI component library with Reactjs and Context API",
        "Developed Unit test cases with Jest",
        "Utilized Gulp for ESLint validation",
        "Delivering modules and enhancements as per business requirements using Agile methodology"
      ],
      tech: ["React js", "Hooks", "Context", "WEB Restful APIs", "Launch Darkly", "Git", "Github", "Jenkins", "Gulp", "Node Js", "Styled Component", "Less/SASS", "RWD", "React Router", "Confluence", "ES6", "Axios"]
    },
    {
      company: "NKC Projects Pvt. LTD, Gurgaon",
      role: "Web Developer",
      period: "Dec 2017 - Jan 2021",
      responsibilities: [
        "Understanding functional and business requirements of clients",
        "Collaborating with the tech lead, CTO, and COO on project planning and implementation",
        "Designing, building, and configuring applications to meet business requirements",
        "Integration of JWT Auth for roles and permission-based modules",
        "Handling the manual deployment of front-end projects on the AWS Server",
        "Worked on multiple sub-projects for all CRUD operations, and executed activation orders in microservices",
        "Implemented new technologies such as React, Redux, and Axios in a separate sub-module from scratch"
      ],
      tech: ["React js", "Redux", "Redux-Thunk", "Axios", "Hooks", "WEB Restful APIs", "JWT", "Swagger", "Postman", "RWD", "Material UI", "Bootstrap", "AWS", "npm", "JQuery", "HTML Print", "Lazy loading", "CLI", "SSH"]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="py-20 bg-black"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-orange-400 text-center mb-10">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 transition hover:scale-[1.02] hover:shadow-2xl duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                  <p className="text-lg text-orange-400 font-semibold">{exp.role}</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0 text-sm md:text-base">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-white/90">{resp}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
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