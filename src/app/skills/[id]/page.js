'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getSkillById, getCategoryById } from '@/data/skills';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInUp, fadeInDown } from '@/styles/animations';

export default function SkillDetailPage({ params }) {
  const { themeStyles, effectiveTheme } = useThemeStyles();
  // In Next.js 14, params is synchronous for client components
  const { id } = params || {};
  const skill = id ? getSkillById(id) : null;
  const category = skill ? getCategoryById(skill.categoryId) : null;

  if (!skill || !category) {
    return (
      <div className={`min-h-screen ${themeStyles.sectionBg} flex items-center justify-center transition-all duration-500 ease-in-out`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${themeStyles.headingText}`}>Skill Not Found</h1>
          <Link href="/#skills">
            <motion.button
              className={`group relative border-2 ${themeStyles.buttonBorder} ${themeStyles.buttonText} px-8 py-3 rounded-full overflow-hidden transition-all duration-500`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: themeStyles.buttonHoverShadow
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: themeStyles.buttonShadow,
                transition: 'box-shadow 0.5s ease, border-color 0.5s ease, color 0.5s ease'
              }}
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Back to Skills
              </span>
              <motion.div
                className={`absolute inset-0 ${themeStyles.buttonHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={false}
              />
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}>
      {/* Hero Section */}
      <section className={`py-20 relative overflow-hidden transition-all duration-500 ease-in-out ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-b from-black via-black/95 to-black' 
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/#skills" 
              className={`${themeStyles.mutedText} transition-colors duration-300 inline-flex items-center gap-2 hover:transition-colors ${
                effectiveTheme === 'dark' ? 'hover:text-[#FE7743]' : 'hover:text-[#E65100]'
              }`}
            >
              <span>←</span> Back to Skills
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.div
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br mb-6 shadow-2xl transition-all duration-500 ${
                effectiveTheme === 'dark' ? 'from-[#FE7743] to-[#FF6B35]' : 'from-[#E65100] to-[#FF6B35]'
              }`}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-5xl">{category.emoji}</span>
            </motion.div>
            <motion.h1
              className={`text-5xl md:text-6xl font-bold mb-4 transition-colors duration-500 ${themeStyles.headingText}`}
              variants={fadeInDown}
              initial="hidden"
              animate="visible"
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
                {skill.name}
              </motion.span>
            </motion.h1>
            <p className={`text-xl ${themeStyles.descriptionText} max-w-2xl mx-auto transition-colors duration-500`}>
              {category.description}
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <span className={`text-sm font-semibold px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-500 ${
                effectiveTheme === 'dark' 
                  ? 'border-[#FE7743]/50 text-[#FE7743] bg-[#FE7743]/10' 
                  : 'border-[#E65100]/50 text-[#E65100] bg-[#E65100]/10'
              }`}>
                {category.category}
              </span>
              <span className={`text-sm font-semibold px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-500 ${
                effectiveTheme === 'dark' 
                  ? 'border-gray-700 text-gray-300 bg-gray-800/40' 
                  : 'border-gray-300 text-gray-700 bg-gray-100/80'
              }`}>
                {skill.subcategoryName}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skill Details */}
      <section className={`py-20 ${themeStyles.sectionBg} relative overflow-hidden transition-all duration-500 ease-in-out`}>
        {/* Background gradient effect - Theme-aware */}
        <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
          effectiveTheme === 'dark' 
            ? 'bg-gradient-to-b from-black via-purple-900/5 to-black' 
            : 'bg-gradient-to-b from-gray-50 via-purple-50/20 to-gray-50'
        }`}></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="space-y-16">
            {/* Category Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className={`rounded-2xl p-8 md:p-12 border backdrop-blur-sm transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h2 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>
                About {category.category}
              </h2>
              <p className={`text-base md:text-lg leading-relaxed ${themeStyles.descriptionText} transition-colors duration-500`}>
                {category.description}
              </p>
            </motion.div>

            {/* Related Skills in Category */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`rounded-2xl p-8 md:p-12 border backdrop-blur-sm transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h2 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>
                Related Skills
              </h2>
              <div className="space-y-6">
                {category.subcategories.map((subcategory, subIdx) => (
                  <div key={subIdx}>
                    <h3 className={`text-xl font-semibold mb-4 transition-colors duration-500 ${
                      effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                    }`}>
                      {subcategory.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {subcategory.items.map((item) => (
                        <Link key={item.id} href={`/skills/${item.id}`}>
                          <motion.span
                            className={`px-4 py-2 rounded-full border-2 backdrop-blur-sm transition-all duration-500 text-sm font-semibold cursor-pointer whitespace-nowrap ${
                              item.id === skill.id
                                ? effectiveTheme === 'dark'
                                  ? 'border-[#FE7743] bg-[#FE7743] text-white shadow-lg'
                                  : 'border-[#E65100] bg-[#E65100] text-white shadow-lg'
                                : effectiveTheme === 'dark'
                                  ? 'border-[#FE7743]/50 text-[#FE7743] bg-[#FE7743]/10 hover:bg-[#FE7743] hover:text-white hover:border-[#FE7743]'
                                  : 'border-[#E65100]/50 text-[#E65100] bg-[#E65100]/10 hover:bg-[#E65100] hover:text-white hover:border-[#E65100]'
                            }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Back to Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center"
            >
              <Link href="/#skills">
                <motion.button
                  className={`group relative border-2 ${themeStyles.buttonBorder} ${themeStyles.buttonText} px-8 py-3 rounded-full overflow-hidden transition-all duration-500`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: themeStyles.buttonHoverShadow,
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: themeStyles.buttonShadow,
                    transition: 'box-shadow 0.5s ease, border-color 0.5s ease, color 0.5s ease'
                  }}
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white font-semibold">
                    Back to Skills
                  </span>
                  <motion.div
                    className={`absolute inset-0 ${themeStyles.buttonHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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

