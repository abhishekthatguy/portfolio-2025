'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-black"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-orange-400 text-center mb-10">About Me</h2>
        <div className="bg-gray-900/60 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col items-center">
          <div className="mb-6">
            <img
              src="/profile.jpg"
              alt="Abhishek Singh"
              className="w-32 h-32 rounded-full border-4 border-orange-400 shadow-lg object-cover mx-auto"
            />
          </div>
          <p className="text-lg text-white leading-relaxed mb-6 text-center">
            Experienced <span className="text-orange-400 font-semibold">Senior Software Developer</span> with over <span className="text-orange-400 font-semibold">7+ years</span> of expertise in frontend development, performance optimization, and delivering high-quality software solutions. Skilled in leading development teams, streamlining deployment processes, and ensuring projects meet business objectives.
          </p>
          <p className="text-lg text-white leading-relaxed text-center">
            I am a front-end development and DevOps expert with proficiency in <span className="text-orange-400 font-semibold">Vue.js, React, AngularJS, HTML, CSS, JavaScript, AWS, Jenkins, WordPress, Bootstrap, and Material UI</span>. My specialization in page speed optimization has consistently improved audit scores from Page Insights. I have functional expertise across various industries, including insurance and healthcare, e-commerce and logistics, construction, and information technology.
          </p>
        </div>
      </div>
    </motion.section>
  );
} 