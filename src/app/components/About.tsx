"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaLaptopCode,
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function About() {
  // --- Dynamic Experience Calculation ---
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
  const expText = `${years} yrs${months > 0 ? " " + months + " mos" : ""}`;

  // --- Tech Stack ---
  const techStack: Record<string, string[]> = {
    Frontend: ["React", "Next.js", "Tailwind", "PHP","Bootstrap"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MongoDB"],
    Others: ["AWS", "Selenium", "GitHub Actions"],
  };

  // --- Work Experience ---
  const experienceTimeline = [
    {
      company: "HR Geckos",
      role: "Full Stack Developer",
      period: "Oct 2024 – Present",
      achievements: [
       "Architected and led the full-stack development of a complex, business-critical internal SAAS platform (PHP/JS/HTML) from initial wireframe to production.",
      "Engineered a dynamic, multi-step policy approval workflow (Approve, Reject, Request Edits) that sequentially routes policies to multiple approvers.",
      "Integrated a dynamic PDF generation module (using DOMPDF) with a complete digital signature and compliance-tracking system for all users.",
      "Re-architected and modularized 120+ static pages into a dynamic JSON/JS template system, dramatically reducing code redundancy by 95% and improving site-wide performance."
      ],
    },
    {
      company: "TCS",
      role: "Frontend Developer",
      period: "Dec 2021 – Jun 2024",
      achievements: [
        "Built and optimized reusable UI components and REST integrations, improving metrics by ~15%.",
        "Collaborated in agile squads to deliver enterprise-grade modules and automation tools.",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-gray-950 px-6 py-20 text-white sm:px-8 lg:px-12"
      aria-labelledby="about-title"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        {/* Title */}
        <header className="mb-10 text-center">
          <h2
            id="about-title"
            className="flex items-center justify-center gap-2 text-3xl font-bold text-purple-300 md:text-4xl"
          >
            <FaBriefcase aria-hidden className="text-purple-400" />
            About Me
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-400 md:text-base">
            Full-stack developer focused on clean UI, robust APIs, and real-world outcomes.
          </p>
        </header>

        {/* Intro block */}
        <div className="grid items-center gap-8 md:grid-cols-[auto,1fr]">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-purple-600/60 md:h-48 md:w-48"
          >
            <Image
              src="/img/myimg.webp"
              alt="Bala Vardhan Pula"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-cover object-center"
              priority={false}
            />
          </motion.div>

          {/* Bio */}
          <div className="space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              I’m{" "}
              <span className="font-semibold text-white">
                Bala Vardhan Pula
              </span>
              , a full-stack developer from
              <span className="text-purple-300"> India</span>. I design and
              ship scalable web apps with a strong focus on performance, DX, and
              maintainability.
            </p>
            <p>
              With over{" "}
              <span className="font-semibold text-white">
                {expText} of professional experience
              </span>
              , I’ve contributed to both enterprise and startup environments,
              specializing in building fast, modern web apps using{" "}
              <span className="text-purple-300">
                React, Next.js, and Node.js
              </span>
              .
            </p>
            <p>
              Outside of work: cricket, exploring new tools, and polishing side
              projects.
            </p>

            {/* Quick facts */}
            <dl className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <dt className="flex items-center gap-2 text-gray-300">
                  <FaMapMarkerAlt aria-hidden />
                  Location
                </dt>
                <dd className="mt-1 font-medium text-white/90">India (IST)</dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <dt className="flex items-center gap-2 text-gray-300">
                  <FaClock aria-hidden />
                  Availability
                </dt>
                <dd className="mt-1 font-medium text-green-300">
                  Open to full-time roles & collaborations
                </dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <dt className="flex items-center gap-2 text-gray-300">
                  <FaCalendarAlt aria-hidden />
                  Experience
                </dt>
                <dd className="mt-1 font-medium text-white/90">{expText}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Cards: Experience + Tech Stack */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Experience timeline */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-gray-900/70 p-6 shadow-lg"
            aria-labelledby="experience-heading"
          >
            <h3
              id="experience-heading"
              className="mb-4 flex items-center gap-2 text-xl font-semibold text-purple-300"
            >
              <FaCalendarAlt aria-hidden className="text-purple-400" />
              Work Experience
            </h3>

            <ol className="relative ml-4 space-y-6">
              <span
                className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-500/60 via-purple-400/30 to-transparent"
                aria-hidden
              />
              {experienceTimeline.map((exp) => (
                <li key={exp.company} className="relative pl-6">
                  <span
                    className="absolute -left-2 top-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-purple-500 ring-4 ring-purple-500/20"
                    aria-hidden
                  />
                  <div className="flex flex-col gap-1">
                    <h4 className="font-semibold text-white">
                      {exp.company} · {exp.role}
                    </h4>
                    <p className="text-xs text-gray-400">{exp.period}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-gray-300">
                      {exp.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </motion.article>

          {/* Tech stack */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-gray-900/70 p-6 shadow-lg"
            aria-labelledby="techstack-heading"
          >
            <h3
              id="techstack-heading"
              className="mb-4 flex items-center gap-2 text-xl font-semibold text-purple-300"
            >
              <FaLaptopCode aria-hidden className="text-purple-400" />
              Tech Stack
            </h3>

            <div className="space-y-5">
              {Object.entries(techStack).map(([category, techs]) => (
                <div key={category}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {category}
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {techs.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ y: -2 }}
                        whileFocus={{ y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 22,
                        }}
                        tabIndex={0}
                        className="cursor-default rounded-full border border-purple-500/30 bg-purple-700/20 px-3 py-1 text-sm text-purple-200 outline-none ring-purple-500/40 transition hover:border-purple-400 focus:ring-2"
                        aria-label={t}
                        title={t}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </div>

        {/* Highlights */}
        <ul className="mx-auto mt-12 max-w-3xl list-disc space-y-3 text-left text-base text-gray-300 sm:text-lg">
          <li>🚀 Built and deployed multiple full-stack apps end-to-end (MERN & PHP)</li>
          <li>💼 Experience in agile environments and design system implementation</li>
          <li>🧠 Skilled in REST APIs, CI/CD automation, and scalable UI engineering</li>
          <li>🌍 Open to hybrid or remote full-time roles (Hyderabad preferred)</li>
          <li>🔗 Integrated third-party APIs like Razorpay, Google OAuth, and AWS S3</li>
        </ul>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-purple-500/60 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 px-6 py-3 text-sm font-medium text-white transition hover:border-purple-400 hover:from-purple-600/30 hover:to-indigo-600/30"
          >
            <FaFileAlt className="text-base" />
            Download Resume (PDF)
          </a>
          <a
            href="#contact"
            aria-label="Go to Contact section"
            className="inline-flex items-center gap-2 rounded-md bg-purple-600 px-7 py-3 text-sm font-medium text-white shadow-md transition hover:bg-purple-700 hover:shadow-purple-500/30"
          >
            Let’s Connect <FaArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
