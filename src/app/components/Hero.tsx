"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // npm i lucide-react

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-4 py-24 pt-32 md:px-6">

      {/* Background Decor (Spotlights) */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px]" />

      <div className="mx-auto max-w-5xl text-center">

        {/* 1. Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span>Actively looking for MERN Stack roles</span>
          </div>
        </motion.div>

        {/* 2. Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-space text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
        >
          Engineering Solid <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Web Applications.
          </span>
        </motion.h1>

        {/* 3. Sub-headline (The Pitch) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          I am a Full Stack Engineer focused on the <span className="text-zinc-200 font-medium">MERN stack</span>.
          I enjoy building fast, secure, and user-friendly web applications that solve real problems.
        </motion.p>

        {/* 4. Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-zinc-950 transition-all hover:bg-zinc-200 hover:scale-105"
          >
            <span className="mr-2">View Featured Work</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 px-8 font-medium text-white transition-all hover:bg-zinc-900 hover:border-zinc-700"
          >
            Contact Me
          </a>
        </motion.div>

        {/* 5. Tech Stack Icons (Social Proof) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-4 opacity-60"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-8 grayscale transition-all hover:grayscale-0">
            {/* Text-based icons for clean look, or use SVGs */}
            <span className="text-xl font-bold text-zinc-400 hover:text-[#61DAFB]">React</span>
            <span className="text-xl font-bold text-zinc-400 hover:text-white">Next.js</span>
            <span className="text-xl font-bold text-zinc-400 hover:text-[#339933]">Node.js</span>
            <span className="text-xl font-bold text-zinc-400 hover:text-[#47A248]">MongoDB</span>
            <span className="text-xl font-bold text-zinc-400 hover:text-[#3178C6]">TypeScript</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
