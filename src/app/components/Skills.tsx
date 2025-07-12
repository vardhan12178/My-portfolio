"use client";

import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs, SiJavascript, SiMongodb, SiTailwindcss,
  SiTypescript, SiAmazon, SiBootstrap, SiPython,
  SiSelenium, SiMysql, SiGit, SiDocker
} from "react-icons/si";

// Grouped skills
const groupedSkills = {
  "Frontend": [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
  ],
  "Backend & Database": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <SiMysql /> },
  ],
  "Tools & Others": [
    { name: "AWS", icon: <SiAmazon /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Selenium", icon: <SiSelenium /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Docker", icon: <SiDocker /> },
  ]
};

// Framer animation config
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950 text-white px-6 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-14"
      >
        💼 Skills
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-16"
      >
        {Object.entries(groupedSkills).map(([category, skillList], index) => (
          <motion.div key={category} variants={item}>
            <h3 className="text-xl sm:text-2xl font-semibold text-left text-purple-300 mb-6 pl-2">
              {category}
            </h3>

            <div role="list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillList.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="group flex flex-col items-center gap-2 text-gray-300 hover:text-white transition duration-300 bg-gray-900/30 hover:bg-gradient-to-r from-purple-600/20 to-purple-900/20 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] p-5 rounded-xl focus-within:ring-2 focus-within:ring-purple-500"
                  tabIndex={0}
                >
                  <motion.div
                    whileHover={{ scale: 1.25, y: -2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-3xl sm:text-4xl transition duration-300 group-hover:text-purple-400"
                  >
                    {skill.icon}
                  </motion.div>
                  <span
                    className="text-sm sm:text-base font-medium text-center"
                    title={skill.name}
                    aria-label={skill.name}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Divider (skip for last category) */}
            {index < Object.keys(groupedSkills).length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="border-b border-gray-800 mt-12"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}