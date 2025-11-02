"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInUp, fadeInDown } from '@/styles/animations';

export default function About() {
  const { themeStyles, effectiveTheme } = useThemeStyles();

  return (
    <section 
      id="about" 
      className={`py-20 ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-16 ${themeStyles.headingText} transition-colors duration-500`}
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
            About
          </motion.span>{" "}
          <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h3
              className={`text-3xl md:text-4xl font-bold mb-6 ${themeStyles.headingText} transition-colors duration-500`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            >
              <motion.span
                className="inline-block"
                style={{
                  backgroundImage: themeStyles.abhishekGradient,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                  transition: 'background-image 0.5s ease-in-out'
                }}
                animate={gradientAnimation}
              >
                Senior Frontend
              </motion.span>{" "}
              <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Architect</span>
            </motion.h3>

            <motion.div
              className={`space-y-4 text-lg ${themeStyles.descriptionText} leading-relaxed transition-colors duration-500`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <p>
                As a{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>
                  Senior Frontend Architect
                </span>
                , my specialty is twofold: leading high-performing front-end
                teams and designing high-performance, scalable UI architecture.
                I have a deep, technical focus on performance optimization,
                mastering{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>
                  Core Web Vitals
                </span>{" "}
                and profiling techniques to achieve top-tier PageSpeed scores.
              </p>
              <p>
                My core expertise spans the{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>MERN stack</span>{" "}
                (MongoDB, Express, React, Node.js),{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>TypeScript</span>
                , and modern SSR frameworks like{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Next.js</span>. I
                am toolkit-agnostic, selecting the best technology—from{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Vue.js</span> to
                lightweight tools like{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Alpine.js</span>{" "}
                and{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>
                  Tailwind CSS
                </span>
                —and guide my team in managing the end-to-end application
                lifecycle via robust{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>DevOps</span> (
                <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>CI/CD</span>)
                pipelines.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link href="/about">
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
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    Learn More
                  </span>
                  <motion.div
                    className={`absolute inset-0 ${themeStyles.buttonHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={false}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated circular border glow effect - Theme-aware */}
              <motion.div
                className={`absolute inset-0 rounded-full border-4 ${effectiveTheme === 'dark' ? 'border-[#FE7743]' : 'border-[#E65100]'} transition-colors duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className={`relative w-full h-full rounded-full overflow-hidden border-4 ${effectiveTheme === 'dark' ? 'border-[#FE7743]' : 'border-[#E65100]'} shadow-2xl z-10 transition-colors duration-500`}
                style={{
                  boxShadow: effectiveTheme === 'dark' 
                    ? '0 25px 50px -12px rgba(254, 119, 67, 0.25), 0 0 0 1px rgba(254, 119, 67, 0.1)'
                    : '0 25px 50px -12px rgba(230, 81, 0, 0.25), 0 0 0 1px rgba(230, 81, 0, 0.1)'
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src="/about_profile.png"
                  alt="Abhishek Singh - Senior Frontend Architect"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
