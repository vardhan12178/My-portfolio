"use client";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-4"
        >
          Hi, I&apos;m <span className="text-white">Bala&nbsp;Vardhan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-6"
        >
          A Full Stack Developer passionate about crafting frontend & backend experiences using
          <span className="text-purple-300 font-semibold"> React, Next.js, Node, PHP</span>, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#about"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="border border-purple-500 hover:bg-purple-800 text-white px-6 py-3 rounded-md font-medium transition"
          >
            View Projects
          </a>
        </motion.div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
