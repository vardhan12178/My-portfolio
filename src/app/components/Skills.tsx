"use client";

import { useMemo, ReactNode } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiPython,
  SiMysql,
  SiGit,
  SiExpress,
} from "react-icons/si";

/* ============================================================================
   Types
============================================================================ */
type Skill = {
  name: string;
  icon: ReactNode;
  level: "Advanced" | "Intermediate";
};

/* ============================================================================
   Data (source of truth)
============================================================================ */
const groupedSkills = {
  frontend: [
    { name: "React", icon: <FaReact />, level: "Advanced" },
    { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" },
    { name: "JavaScript", icon: <SiJavascript />, level: "Advanced" },
    { name: "TypeScript", icon: <SiTypescript />, level: "Intermediate" },
    { name: "HTML5", icon: <FaHtml5 />, level: "Advanced" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "Advanced" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Advanced" },
    { name: "Bootstrap", icon: <SiBootstrap />, level: "Intermediate" },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: "Advanced" },
    { name: "Express.js", icon: <SiExpress />, level: "Advanced" },
    { name: "MongoDB", icon: <SiMongodb />, level: "Advanced" },
    { name: "SQL", icon: <SiMysql />, level: "Intermediate" },
    { name: "Python", icon: <SiPython />, level: "Intermediate" },
  ],
  tools: [
    { name: "Git", icon: <SiGit />, level: "Advanced" },
    { name: "GitHub", icon: <FaGithub />, level: "Advanced" },
  ],
};

// Master list
const ALL_SKILLS: Skill[] = [
  ...groupedSkills.frontend,
  ...groupedSkills.backend,
  ...groupedSkills.tools,
];

/* ============================================================================
   Motion
============================================================================ */
const container = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } } };
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

/* ============================================================================
   Helpers
============================================================================ */
const levelStyle: Record<Skill["level"], string> = {
  Advanced: "border-emerald-400/60 text-emerald-300 bg-emerald-500/10",
  Intermediate: "border-sky-400/60 text-sky-300 bg-sky-500/10",
};

/* ============================================================================
   Component
============================================================================ */
export default function Skills() {
  const skills = useMemo(() => ALL_SKILLS, []);

  return (
    <section id="skills" className="scroll-mt-20 bg-gray-950 px-6 py-24 text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-4xl font-bold text-purple-300 md:text-5xl"
      >
        Skills
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ y: -3 }}
            whileFocus={{ y: -3 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            tabIndex={0}
            className="group relative rounded-xl border border-white/10 bg-gray-900/50 p-4 outline-none ring-purple-500/40 transition hover:border-purple-400/60 hover:bg-white/5 focus:ring-2"
            title={skill.name}
            aria-label={skill.name}
          >
            <div className="flex items-center gap-3">
              <div className="text-3xl text-gray-200 transition group-hover:text-purple-300">
                {skill.icon}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">{skill.name}</p>
                <span
                  className={[
                    "mt-1 inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                    levelStyle[skill.level],
                  ].join(" ")}
                >
                  {skill.level}
                </span>
              </div>
            </div>

            {/* Glow */}
            <span
              className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-tr from-purple-600/0 via-purple-600/0 to-indigo-600/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"
              aria-hidden
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-12 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      {/* Note */}
      <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-gray-400">
        Tip: Explore the listed tools and technologies. Currently deepening{" "}
        <span className="text-purple-300 font-medium">TypeScript</span> and expanding into{" "}
        <span className="text-purple-300 font-medium">AI / Python data integration</span>.
      </p>
    </section>
  );
}
