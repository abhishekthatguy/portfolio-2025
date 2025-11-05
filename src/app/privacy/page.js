'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInUp, fadeInDown } from '@/styles/animations';

export default function Privacy() {
  const { themeStyles, effectiveTheme } = useThemeStyles();

  const sections = [
    {
      id: 1,
      title: 'Information Collection',
      content: 'This website collects information that you provide directly through the contact form, including your name and email address. This information is used solely for the purpose of responding to your inquiries.',
      listItems: null
    },
    {
      id: 2,
      title: 'Use of Information',
      content: 'The information collected is used to:',
      listItems: [
        'Respond to your inquiries and messages',
        'Send you information about my services',
        'Improve the website\'s content and functionality'
      ]
    },
    {
      id: 3,
      title: 'Information Sharing',
      content: 'Your personal information is not shared with third parties unless required by law or with your explicit consent.',
      listItems: null
    },
    {
      id: 4,
      title: 'Data Security',
      content: 'I implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
      listItems: null
    },
    {
      id: 5,
      title: 'Cookies',
      content: 'This website uses cookies to improve user experience. You can control cookie settings through your browser preferences.',
      listItems: null
    },
    {
      id: 6,
      title: 'Contact',
      content: 'If you have any questions about this Privacy Policy, please contact me through the contact form on this website.',
      listItems: null
    }
  ];

  return (
    <div className={`min-h-screen ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}>
      {/* Hero Section */}
      <section className={`py-20 transition-all duration-500 ease-in-out ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-b from-black via-black/95 to-black' 
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <motion.h1
              className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${themeStyles.headingText}`}
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
                Privacy
              </motion.span>{' '}
              <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Policy</span>
            </motion.h1>
            <p className={`text-lg ${themeStyles.descriptionText} max-w-2xl mx-auto transition-colors duration-500`}>
              Your privacy is important to me. This policy explains how I collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className={`py-20 ${themeStyles.sectionBg} relative overflow-hidden transition-all duration-500 ease-in-out`}>
        {/* Background gradient effect - Theme-aware */}
        <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
          effectiveTheme === 'dark' 
            ? 'bg-gradient-to-b from-black via-blue-900/5 to-black' 
            : 'bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50'
        }`}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className={`max-w-4xl mx-auto rounded-2xl p-8 md:p-12 border backdrop-blur-sm shadow-xl transition-all duration-500 ${
              effectiveTheme === 'dark'
                ? 'bg-gray-900/40 border-gray-800'
                : 'bg-white/80 border-gray-300'
            }`}
          >
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                className={index < sections.length - 1 ? "mb-8 md:mb-12" : ""}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className={`text-2xl md:text-3xl font-semibold mb-4 transition-colors duration-500 ${
                  effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                }`}>
                  {section.id}. {section.title}
                </h2>
                <p className={`mb-4 leading-relaxed transition-colors duration-500 ${themeStyles.descriptionText}`}>
                  {section.content}
                </p>
                {section.listItems && (
                  <ul className={`list-disc list-inside space-y-2 mb-4 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {section.listItems.map((item, idx) => (
                      <li key={idx} className="ml-4">{item}</li>
                    ))}
                  </ul>
                )}
              </motion.section>
            ))}
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12"
          >
            <Link href="/">
              <motion.button
                className={`group relative border-2 ${themeStyles.buttonBorder} ${themeStyles.buttonText} px-8 py-3 rounded-full overflow-hidden transition-all duration-500 font-semibold inline-flex items-center gap-2`}
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
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Back to Home
                </span>
                <motion.div
                  className={`absolute inset-0 ${themeStyles.buttonHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 