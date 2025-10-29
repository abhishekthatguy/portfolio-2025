"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Text gradient animation for smooth color flow
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FE7743, #ffffff, #FE7743)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
            animate={gradientAnimation}
          >
            About
          </motion.span>{" "}
          <span className="text-primary">Me</span>
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
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.span
                className="inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FE7743, #ffffff, #FE7743)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}
                animate={gradientAnimation}
              >
                Senior Frontend
              </motion.span>{" "}
              <span className="text-primary">Architect</span>
            </motion.h3>

            <motion.div
              className="space-y-4 text-lg text-muted leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                As a{" "}
                <span className="text-primary font-semibold">
                  Senior Frontend Architect
                </span>
                , my specialty is twofold: leading high-performing front-end
                teams and designing high-performance, scalable UI architecture.
                I have a deep, technical focus on performance optimization,
                mastering{" "}
                <span className="text-[#00D9FF] font-semibold">
                  Core Web Vitals
                </span>{" "}
                and profiling techniques to achieve top-tier PageSpeed scores.
              </p>
              <p>
                My core expertise spans the{" "}
                <span className="text-[#00D9FF] font-semibold">MERN stack</span>{" "}
                (MongoDB, Express, React, Node.js),{" "}
                <span className="text-[#00D9FF] font-semibold">TypeScript</span>
                , and modern SSR frameworks like{" "}
                <span className="text-[#00D9FF] font-semibold">Next.js</span>. I
                am toolkit-agnostic, selecting the best technology—from{" "}
                <span className="text-[#00D9FF] font-semibold">Vue.js</span> to
                lightweight tools like{" "}
                <span className="text-[#00D9FF] font-semibold">Alpine.js</span>{" "}
                and{" "}
                <span className="text-[#00D9FF] font-semibold">
                  Tailwind CSS
                </span>
                —and guide my team in managing the end-to-end application
                lifecycle via robust{" "}
                <span className="text-[#00D9FF] font-semibold">DevOps</span> (
                <span className="text-[#00D9FF] font-semibold">CI/CD</span>)
                pipelines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Link href="/about">
                <motion.button
                  className="group relative border-2 border-primary text-primary px-8 py-3 rounded-full overflow-hidden transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary">
                    Learn More
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              {/* Animated circular border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary"
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
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl z-10"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src="/about_profilev2.png"
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
