'use client';
import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: "MBA in Delivery & Operations",
      institution: "Amity Online",
      period: "2023 - in progress"
    },
    {
      degree: "Bachelor of Arts in Political Science & English",
      institution: "MGKVP Varanasi",
      period: "2013 - 2016"
    },
    {
      degree: "Intermediate",
      institution: "GGP Ballia",
      period: "2011 - 2013"
    }
  ]

  return (
    <motion.section
      id="education"
      className="py-20 bg-black"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-orange-400 text-center mb-10">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900/60 rounded-2xl shadow-lg p-8 flex flex-col items-center transition hover:scale-[1.02] hover:shadow-2xl duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2 text-center">{edu.degree}</h3>
              <p className="text-lg text-orange-400 font-semibold mb-1 text-center">{edu.institution}</p>
              <p className="text-gray-400 text-center">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
} 