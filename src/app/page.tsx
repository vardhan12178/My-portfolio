"use client";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { FaArrowRight, FaProjectDiagram, FaGithub, FaLinkedin ,FaWhatsapp} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main
        id="home"
        role="main"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#0a0a23] to-black overflow-hidden"
      >
        {/* Blurred Animated Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[120px] -z-10"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-purple-300 uppercase tracking-widest mb-2"
        >
          Full Stack Developer | Problem Solver | UI Enthusiast
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
        >
          <span className="text-purple-400">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-purple-400 to-white text-transparent bg-clip-text">
            Bala Vardhan
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-6"
        >
          A Full Stack Developer passionate about crafting frontend & backend experiences using
          <span className="text-purple-300 font-semibold"> React, Next.js, Node, PHP</span>, and more.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#about"
            aria-label="Learn more about me"
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-purple-500/40 transition duration-200 flex items-center gap-2"
          >
            About Me <FaArrowRight />
          </a>
          <a
            href="#projects"
            aria-label="View my projects"
            className="bg-gray-900 border border-purple-500 hover:bg-purple-900 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-purple-500/30 transition duration-200 flex items-center gap-2"
          >
            View Projects <FaProjectDiagram />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-6 mt-8 text-xl text-gray-400"
        >
          <a
            href="https://github.com/vardhan12178?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
           <a
            href="https://wa.me/918688412181"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </motion.div>
      </main>

      {/* Other sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
