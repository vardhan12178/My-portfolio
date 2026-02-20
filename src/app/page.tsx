"use client";

import React, { useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code2,
  Layers,
  Cpu
} from "lucide-react";

// Components
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // --- Experience Calculation Logic (Preserved) ---
  const startTCS = new Date("2021-12-29");
  const endTCS = new Date("2024-06-10");
  const startCurrent = new Date("2024-10-01");

  function getExperience() {
    const now = new Date();
    const tcsMonths = (endTCS.getFullYear() - startTCS.getFullYear()) * 12 + (endTCS.getMonth() - startTCS.getMonth());
    const currentMonths = (now.getFullYear() - startCurrent.getFullYear()) * 12 + (now.getMonth() - startCurrent.getMonth());
    const totalMonths = tcsMonths + currentMonths;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return { years, months };
  }

  const { years, months } = getExperience();
  const expText = `${years}.${months} Years`; // Cleaned up format for "Tech" look

  const smoothScroll = useCallback((e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-36 md:pt-40"
      >

        {/* Parallax Background Elements */}
        <motion.div style={{ y: y1, x: -50 }} className="absolute top-20 left-[10%] -z-10 h-[300px] w-[300px] rounded-full bg-emerald-600/20 blur-[100px]" />
        <motion.div style={{ y: y2, x: 50 }} className="absolute bottom-20 right-[10%] -z-10 h-[250px] w-[250px] rounded-full bg-teal-600/20 blur-[100px]" />

        <div className="container relative z-10 mx-auto px-6 text-center">

          {/* 1. Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Actively looking for MERN Stack roles</span>
            </div>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            Engineering Solid <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Web Applications.
            </span>
          </motion.h1>

          {/* 3. Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl leading-relaxed"
          >
            Hi, I'm <span className="text-white font-semibold">Bala Vardhan</span> -
            a Full-Stack Engineer who loves building clean and maintainable web applications.
            My core tools are React, Next.js, and Node.js.

          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              onClick={(e) => smoothScroll(e, "#projects")}
              className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-zinc-950 transition-all hover:bg-zinc-200 hover:scale-105"
            >
              <span className="mr-2">View Featured Work</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, "#contact")}
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/50 px-8 font-medium text-white backdrop-blur-sm transition-all hover:bg-zinc-900 hover:border-zinc-600"
            >
              Contact Me
            </a>
          </motion.div>

          {/* 5. Social Links (Minimalist) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/vardhan12178", label: "Github" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:balavardhanpula@gmail.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-zinc-500 hover:text-emerald-400 hover:scale-110 transition-all duration-300"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </motion.div>

          {/* 6. Glass Bento Grid Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {/* Stat 1: Experience */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/10">
              <div className="flex flex-col items-center">
                <div className="mb-3 rounded-full bg-emerald-500/20 p-3 text-emerald-400">
                  <Code2 size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white font-space">{expText}</h3>
                <p className="text-sm text-zinc-400">Professional Experience</p>
              </div>
            </div>

            {/* Stat 2: VKart Project */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/10">
              <div className="flex flex-col items-center">
                <div className="mb-3 rounded-full bg-teal-500/20 p-3 text-teal-400">
                  <Layers size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white font-space">VKart</h3>
                <p className="text-sm text-zinc-400">Full Stack E-commerce</p>
              </div>
            </div>

            {/* Stat 3: Tech Focus */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/10">
              <div className="flex flex-col items-center">
                <div className="mb-3 rounded-full bg-cyan-500/20 p-3 text-cyan-400">
                  <Cpu size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white font-space">MERN</h3>
                <p className="text-sm text-zinc-400">Core Expertise</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* --- Rest of the Page --- */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}