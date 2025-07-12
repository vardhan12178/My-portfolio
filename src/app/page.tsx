"use client";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { FaArrowRight, FaProjectDiagram, FaGithub, FaLinkedin, FaWhatsapp, FaChevronDown } from "react-icons/fa";

export default function Home() {
  // Define animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Fixed Navigation Bar for better UX and section jumping */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-20 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-purple-400 font-bold text-xl hover:text-purple-300 transition">
            Bala&nbsp;Vardhan
          </a>
          <ul className="flex gap-6 text-gray-300">
            <li>
              <a href="#about" className="hover:text-purple-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-300 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-300 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main
        id="home"
        role="main"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#0a0a23] to-black overflow-hidden pt-20" // Added pt-20 to offset fixed header
      >
        {/* Enhanced Blurred Animated Background with multiple orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 0.3, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-10 left-10 w-[300px] h-[300px] bg-purple-600 rounded-full blur-[120px] -z-10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 0.2, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-900 rounded-full blur-[100px] -z-10"
        />

        {/* Content Wrapper with Staggered Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          {/* Tagline */}
          <motion.p
            variants={childVariants}
            className="text-sm text-purple-300 uppercase tracking-widest mb-2"
          >
            Full Stack Developer | Problem Solver | UI Enthusiast
          </motion.p>

          {/* Heading with &nbsp; between Bala and Vardhan to prevent line break */}
          <motion.h1
            variants={childVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
          >
            <span className="text-purple-400">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-purple-400 to-white text-transparent bg-clip-text animate-gradient-x">
           Bala&nbsp;Vardhan
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={childVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-6"
          >
            A Full Stack Developer passionate about crafting frontend & backend experiences using
            <span className="text-purple-300 font-semibold"> React, Next.js, Node, PHP</span>, and more.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={childVariants}
            className="flex gap-4 flex-wrap justify-center"
          >
            <a
              href="#about"
              aria-label="Learn more about me"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-purple-500/40 transition duration-200 flex items-center gap-2 hover:scale-105"
            >
              About Me <FaArrowRight />
            </a>
            <a
              href="#projects"
              aria-label="View my projects"
              className="bg-gray-900 border border-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-purple-500/40 transition duration-200 flex items-center gap-2 hover:scale-105"
            >
              View Projects <FaProjectDiagram />
            </a>
          </motion.div>

          {/* Social Links with Hover Effects */}
          <motion.div
            variants={childVariants}
            className="flex gap-6 mt-8 text-xl text-gray-400 justify-center"
          >
            <motion.a
              href="https://github.com/vardhan12178?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://wa.me/918688412181"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll down to About section"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 text-purple-300 text-2xl animate-bounce"
        >
          <FaChevronDown />
        </motion.a>
      </main>

      {/* Other sections - assume they have matching IDs like id="skills" in Skills component, etc. */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}