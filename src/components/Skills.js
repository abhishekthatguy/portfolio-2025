'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInDown, fadeInUp } from '@/styles/animations';
import { skillsCategories } from '@/data/skills';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  },
};

// Category color gradients for visual variety
const categoryColors = [
  { gradient: 'from-purple-500 via-pink-500 to-orange-500', bg: 'from-purple-500/10 via-pink-500/10 to-orange-500/10' },
  { gradient: 'from-blue-500 via-cyan-500 to-teal-500', bg: 'from-blue-500/10 via-cyan-500/10 to-teal-500/10' },
  { gradient: 'from-green-500 via-emerald-500 to-teal-500', bg: 'from-green-500/10 via-emerald-500/10 to-teal-500/10' },
  { gradient: 'from-orange-500 via-red-500 to-pink-500', bg: 'from-orange-500/10 via-red-500/10 to-pink-500/10' },
  { gradient: 'from-indigo-500 via-purple-500 to-pink-500', bg: 'from-indigo-500/10 via-purple-500/10 to-pink-500/10' },
  { gradient: 'from-yellow-500 via-amber-500 to-orange-500', bg: 'from-yellow-500/10 via-amber-500/10 to-orange-500/10' },
];

const SkillCard = ({ category, themeStyles, effectiveTheme, item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialVisibleSubcategories = 2;
  const visibleSubcategories = isExpanded 
    ? category.subcategories 
    : category.subcategories.slice(0, initialVisibleSubcategories);
  const hasMore = category.subcategories.length > initialVisibleSubcategories;
  const colorScheme = categoryColors[index % categoryColors.length];

  return (
    <motion.div
      key={category.id}
      variants={item}
      className={`rounded-3xl shadow-xl p-8 md:p-10 border transition-all duration-500 hover:shadow-2xl group w-full relative overflow-hidden ${
        effectiveTheme === 'dark' 
          ? 'bg-gray-900/60 border-gray-800/50 hover:border-[#FE7743]/50' 
          : 'bg-white/90 border-gray-200/50 hover:border-[#E65100]/50'
      }`}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Decorative accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        {/* Category Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4 flex-1">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorScheme.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
              {category.emoji}
            </div>
            <div>
              <h3 className={`text-2xl md:text-3xl font-extrabold mb-2 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className={`bg-gradient-to-r ${colorScheme.gradient} bg-clip-text text-transparent`}>
                  {category.category}
                </span>
              </h3>
              <p className={`text-sm md:text-base ${themeStyles.descriptionText} max-w-2xl transition-colors duration-500 leading-relaxed`}>
                {category.description}
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6 relative">
          <AnimatePresence>
            {visibleSubcategories.map((subcategory, subIdx) => (
              <motion.div 
                key={`${category.id}-${subIdx}`}
                className={`rounded-xl p-5 border transition-all duration-500 ${
                  effectiveTheme === 'dark'
                    ? 'bg-gray-800/40 border-gray-700/50'
                    : 'bg-gray-50/80 border-gray-200/50'
                }`}
                style={{
                  borderColor: effectiveTheme === 'dark' 
                    ? `rgba(147, 51, 234, ${0.3 + (subIdx * 0.1)})`
                    : `rgba(249, 115, 22, ${0.3 + (subIdx * 0.1)})`
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: subIdx * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${colorScheme.gradient}`} />
                  <h4 className={`text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {subcategory.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {subcategory.items.map((skill, skillIdx) => {
                    // Determine color based on category index
                    const getSkillColors = (idx) => {
                      const colors = [
                        { border: 'border-purple-500/30', text: 'text-purple-300', bg: 'bg-purple-500/10', hover: 'hover:bg-purple-500/30', hoverBorder: 'hover:border-purple-400' },
                        { border: 'border-blue-500/30', text: 'text-blue-300', bg: 'bg-blue-500/10', hover: 'hover:bg-blue-500/30', hoverBorder: 'hover:border-blue-400' },
                        { border: 'border-green-500/30', text: 'text-green-300', bg: 'bg-green-500/10', hover: 'hover:bg-green-500/30', hoverBorder: 'hover:border-green-400' },
                        { border: 'border-orange-500/30', text: 'text-orange-300', bg: 'bg-orange-500/10', hover: 'hover:bg-orange-500/30', hoverBorder: 'hover:border-orange-400' },
                        { border: 'border-indigo-500/30', text: 'text-indigo-300', bg: 'bg-indigo-500/10', hover: 'hover:bg-indigo-500/30', hoverBorder: 'hover:border-indigo-400' },
                        { border: 'border-yellow-500/30', text: 'text-yellow-300', bg: 'bg-yellow-500/10', hover: 'hover:bg-yellow-500/30', hoverBorder: 'hover:border-yellow-400' },
                      ];
                      const lightColors = [
                        { border: 'border-purple-500/30', text: 'text-purple-700', bg: 'bg-purple-500/10', hover: 'hover:bg-purple-500/30', hoverBorder: 'hover:border-purple-400' },
                        { border: 'border-blue-500/30', text: 'text-blue-700', bg: 'bg-blue-500/10', hover: 'hover:bg-blue-500/30', hoverBorder: 'hover:border-blue-400' },
                        { border: 'border-green-500/30', text: 'text-green-700', bg: 'bg-green-500/10', hover: 'hover:bg-green-500/30', hoverBorder: 'hover:border-green-400' },
                        { border: 'border-orange-500/30', text: 'text-orange-700', bg: 'bg-orange-500/10', hover: 'hover:bg-orange-500/30', hoverBorder: 'hover:border-orange-400' },
                        { border: 'border-indigo-500/30', text: 'text-indigo-700', bg: 'bg-indigo-500/10', hover: 'hover:bg-indigo-500/30', hoverBorder: 'hover:border-indigo-400' },
                        { border: 'border-yellow-500/30', text: 'text-yellow-700', bg: 'bg-yellow-500/10', hover: 'hover:bg-yellow-500/30', hoverBorder: 'hover:border-yellow-400' },
                      ];
                      const scheme = effectiveTheme === 'dark' ? colors[idx % colors.length] : lightColors[idx % lightColors.length];
                      return `${scheme.border} ${scheme.text} ${scheme.bg} ${scheme.hover} ${scheme.hoverBorder} hover:text-white`;
                    };
                    
                    return (
                      <Link key={skill.id} href={`/skills/${skill.id}`}>
                        <motion.span
                          className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 text-sm font-semibold cursor-pointer whitespace-nowrap backdrop-blur-sm ${getSkillColors(index)}`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: skillIdx * 0.02 }}
                        >
                          {skill.name}
                        </motion.span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Show More Button */}
          {hasMore && (
            <div className="pt-4">
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full py-3 rounded-xl border-2 transition-all duration-500 font-semibold text-sm flex items-center justify-center gap-2 backdrop-blur-sm ${
                  effectiveTheme === 'dark'
                    ? 'border-gray-700/50 text-gray-300 bg-gray-800/40 hover:bg-gray-700/60 hover:border-gray-600 hover:text-white'
                    : 'border-gray-300/50 text-gray-700 bg-gray-100/80 hover:bg-gray-200/80 hover:border-gray-400 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isExpanded ? 'Show Less' : `Show ${category.subcategories.length - initialVisibleSubcategories} More Subcategories`}</span>
                <motion.svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const { themeStyles, effectiveTheme } = useThemeStyles();

  return (
    <section id="skills" className={`py-20 ${themeStyles.sectionBg} relative overflow-hidden transition-all duration-500 ease-in-out`}>
      {/* Background gradient effect - Theme-aware */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-b from-black via-purple-900/5 to-black' 
          : 'bg-gradient-to-b from-gray-50 via-purple-50/20 to-gray-50'
      }`}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-6 ${themeStyles.headingText} transition-colors duration-500`}
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
            My Capabilities
          </motion.span>{' '}
          <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>From Architecture to Execution</span>
        </motion.h2>

        <motion.p
          className={`text-lg ${themeStyles.descriptionText} text-center max-w-3xl mx-auto mb-16 transition-colors duration-500`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          My expertise is a blend of deep technical skill and strategic business acumen, honed over <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>7+ years</span> of building complex, high-performance applications. I architect and deliver end-to-end solutions, from initial system design to final deployment, ensuring every technical decision aligns with business objectives. Below is a comprehensive overview of my capabilities.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 md:space-y-16"
        >
          {skillsCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              themeStyles={themeStyles}
              effectiveTheme={effectiveTheme}
              item={item}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 