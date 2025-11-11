"use client";

import React, { MouseEvent, useCallback } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaProjectDiagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  // --- Experience Calculation ---
  const startTCS = new Date("2021-12-29");
  const endTCS = new Date("2024-06-10");
  const startCurrent = new Date("2024-10-01");

  function getExperience() {
    const now = new Date();
    const tcsMonths =
      (endTCS.getFullYear() - startTCS.getFullYear()) * 12 +
      (endTCS.getMonth() - startTCS.getMonth());
    const currentMonths =
      (now.getFullYear() - startCurrent.getFullYear()) * 12 +
      (now.getMonth() - startCurrent.getMonth());
    const totalMonths = tcsMonths + currentMonths;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return { years, months };
  }

  const { years, months } = getExperience();
  const expText = `${years} yrs${months > 0 ? " " + months + " mos" : ""} Exp.`;

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  };

  const smoothScroll = useCallback((e: MouseEvent, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = target;
  }, []);

  return (
    <>
      <main
        id="home"
        role="main"
        className="relative flex min-h-[92svh] sm:min-h-[88vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a23] to-black px-4 sm:px-6 text-center pt-[env(safe-area-inset-top)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.10),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.07]" />

        {!prefersReducedMotion && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -80 }}
              whileInView={{ opacity: 0.35, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="pointer-events-none absolute -top-16 -left-16 hidden h-[300px] w-[300px] -z-10 rounded-full bg-purple-700 blur-[120px] md:block"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 80 }}
              whileInView={{ opacity: 0.25, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="pointer-events-none absolute -bottom-24 -right-24 hidden h-[360px] w-[360px] -z-10 rounded-full bg-indigo-900 blur-[110px] md:block"
            />
          </>
        )}

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto w-full max-w-[680px] sm:max-w-3xl"
        >
          {/* Added mt-6 on mobile to avoid header overlap */}
          <motion.div
            variants={item}
            className="mt-6 sm:mt-0 mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-purple-200"
          >
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Open to full-time roles & collaborations
          </motion.div>

          <motion.p
            variants={item}
            className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-purple-300/90"
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-balance font-extrabold leading-tight text-[clamp(2rem,7vw,4rem)] sm:text-[clamp(2.5rem,5vw,4.5rem)]"
          >
            <span className="text-purple-300">Hi, I’m </span>
            <span className="bg-gradient-to-r from-purple-300 via-pink-200 to-white bg-clip-text text-transparent">
              Bala&nbsp;Vardhan
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-[44rem] text-[15px] text-gray-400 sm:text-lg"
          >
            I build fast, modern web apps with
            <span className="font-semibold text-purple-200">
              {" "}
              React, Next.js, and Node.js
            </span>
            . I focus on clean UI, strong DX, and measurable impact.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 grid w-full gap-3 sm:inline-flex sm:w-auto sm:justify-center"
          >
            <a
              href="#projects"
              onClick={(e) => smoothScroll(e, "#projects")}
              aria-label="View projects"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-md transition will-change-transform hover:-translate-y-0.5 hover:from-purple-700 hover:to-indigo-700 hover:shadow-purple-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a23] active:translate-y-0"
            >
              View Projects <FaProjectDiagram />
            </a>
            <a
              href="#about"
              onClick={(e) => smoothScroll(e, "#about")}
              aria-label="Learn more about me"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-purple-500/60 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a23] active:translate-y-0"
            >
              About Me <FaArrowRight />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-7 flex justify-center gap-5 text-xl text-gray-400"
          >
            <a
              href="https://github.com/vardhan12178?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="rounded-md p-2 transition hover:bg-white/5 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="rounded-md p-2 transition hover:bg-white/5 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:balavardhanpula@gmail.com"
              aria-label="Email"
              title="Email"
              className="rounded-md p-2 transition hover:bg-white/5 hover:text-white"
            >
              <FaEnvelope />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-gray-300 sm:text-sm"
          >
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-center">
              <p className="text-2xl font-bold text-white">{expText}</p>
              <p className="opacity-80">Experience</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-center">
              <p className="font-bold text-white tracking-tight whitespace-nowrap text-[clamp(0.95rem,1.6vw,1.1rem)]">
                Full-Stack E-Commerce
              </p>
              <p className="opacity-80">VKart Project</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-center">
              <p className="font-bold text-white tracking-tight whitespace-nowrap text-[clamp(0.95rem,1.6vw,1.1rem)]">
                MERN Stack Developer
              </p>
              <p className="opacity-80">Core Expertise</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ↓ Smooth scroll to About section */}
        <a
          href="#about"
          onClick={(e) => smoothScroll(e, "#about")}
          aria-label="Scroll to About"
          className="absolute bottom-8 text-2xl text-purple-300 cursor-pointer"
        >
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            transition={{
              delay: 1.1,
              duration: 0.8,
              repeat: prefersReducedMotion ? 0 : Infinity,
              repeatType: "reverse",
            }}
            className="inline-block"
          >
            <FaChevronDown />
          </motion.span>
        </a>
      </main>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
