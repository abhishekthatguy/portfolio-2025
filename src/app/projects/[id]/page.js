'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getProjectById } from '@/data/projects';

// Text gradient animation for smooth color flow
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  },
};

export default function ProjectDetailPage({ params }) {
  // In Next.js 14, params is synchronous for client components
  const { id } = params || {};
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
          <Link href="/#projects">
            <motion.button
              className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Back to Projects
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black via-black/95 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/#projects" 
              className="text-muted hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
            >
              <span>←</span> Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${project.color} mb-6 shadow-2xl`}>
              <span className="text-5xl">{project.icon}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              {project.description}
            </p>
            <p className="text-lg text-primary mt-4 font-semibold">{project.year}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {/* STAR Method Sections */}
            {project.star && project.star.length > 0 && (
              <>
                {project.star.map((starItem, starIdx) => (
                  <motion.div
                    key={starIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: starIdx * 0.1 }}
                    className={`bg-gray-900/40 rounded-2xl p-8 md:p-12 border ${project.borderColor}`}
                  >
                    <h2 className="text-3xl font-bold text-primary mb-6">
                      {starIdx === 0 ? 'Project Overview' : `Implementation ${starIdx + 1}`}
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Situation */}
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                          <span className="text-primary">📋</span>
                          <span>Situation</span>
                        </h3>
                        <p className="text-muted text-base md:text-lg leading-relaxed">
                          {starItem.situation}
                        </p>
                      </div>

                      {/* Task */}
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                          <span className="text-primary">🎯</span>
                          <span>Task</span>
                        </h3>
                        <p className="text-muted text-base md:text-lg leading-relaxed">
                          {starItem.task}
                        </p>
                      </div>

                      {/* Action */}
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                          <span className="text-primary">⚡</span>
                          <span>Action</span>
                        </h3>
                        <p className="text-muted text-base md:text-lg leading-relaxed">
                          {starItem.action}
                        </p>
                      </div>

                      {/* Result */}
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                          <span className="text-primary">🏆</span>
                          <span>Result</span>
                        </h3>
                        <p className="text-muted text-base md:text-lg leading-relaxed">
                          {starItem.result}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </>
            )}

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`bg-gray-900/40 rounded-2xl p-8 md:p-12 border ${project.borderColor}`}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className={`px-4 py-2 rounded-full border ${project.borderColor} text-primary bg-transparent hover:bg-primary hover:text-secondary transition-all duration-200 text-sm font-semibold`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            {(project.links.live || project.links.github) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {project.links.live && (
                  <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="group relative border-2 border-primary text-primary px-8 py-3 rounded-full overflow-hidden transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary font-semibold">
                        View Live Site
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.button>
                  </Link>
                )}
                {project.links.github && (
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="group relative border-2 border-primary text-primary px-8 py-3 rounded-full overflow-hidden transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary font-semibold">
                        View Code
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.button>
                  </Link>
                )}
              </motion.div>
            )}

            {/* Back to Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-center"
            >
              <Link href="/#projects">
                <motion.button
                  className="group relative border-2 border-primary text-primary px-8 py-3 rounded-full overflow-hidden transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary font-semibold">
                    Back to Projects
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

