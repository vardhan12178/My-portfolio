"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
  SiPostman,
  SiFramer,
  SiRedux,
  SiSocketdotio,
  // SiAmazonaws removed causing error
} from "react-icons/si";
import { FaAws } from "react-icons/fa"; // <--- Added Safe Import
import { Code2, Cpu, Database, Globe, Layers, Server, Sparkles } from "lucide-react";

/* ============================================================================
   Data: High-Value MERN Stack Only
============================================================================ */
const SKILL_CATEGORIES = [
  {
    title: "Frontend Ecosystem",
    icon: <Globe className="text-indigo-400" size={20} />,
    skills: [
      { name: "Next.js 14", icon: <SiNextdotjs size={20} />, color: "text-white" },
      { name: "React", icon: <SiReact size={20} />, color: "text-cyan-400" },
      { name: "TypeScript", icon: <SiTypescript size={20} />, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} />, color: "text-teal-400" },
      { name: "Redux Toolkit", icon: <SiRedux size={20} />, color: "text-purple-500" },
      { name: "Framer Motion", icon: <SiFramer size={20} />, color: "text-pink-500" },
    ],
  },
  {
    title: "Backend Architecture",
    icon: <Server className="text-purple-400" size={20} />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={20} />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress size={20} />, color: "text-white" },
      { name: "Redis", icon: <SiRedis size={20} />, color: "text-red-500" },
      { name: "JWT Auth", icon: <Code2 size={20} />, color: "text-yellow-400" },
      { name: "REST APIs", icon: <Layers size={20} />, color: "text-orange-400" },
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: <Database className="text-pink-400" size={20} />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={20} />, color: "text-green-400" },
      { name: "AI Search", icon: <Sparkles size={20} />, color: "text-yellow-400" },
      { name: "Docker", icon: <SiDocker size={20} />, color: "text-blue-500" },
      { name: "Git / GitHub", icon: <SiGit size={20} />, color: "text-orange-500" },
      { name: "AWS (S3)", icon: <FaAws size={20} />, color: "text-yellow-500" },
    ],
  },
];

/* ============================================================================
   Animations
============================================================================ */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/* ============================================================================
   Component
============================================================================ */
export default function Skills() {
  return (
    <section id="skills" className="relative bg-zinc-950 py-24">

      {/* Background Decor */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-indigo-500/5 blur-[100px]" />
      <div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-[80px]" />

      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-space text-4xl font-bold text-white sm:text-5xl">
            Technical <span className="text-indigo-400">Expertise</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            A specialized stack focused on performance, scalability, and type-safety.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-zinc-800 p-2.5 ring-1 ring-white/5 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-space text-xl font-bold text-zinc-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-lg bg-zinc-950/50 px-3 py-2 text-sm font-medium text-zinc-300 border border-zinc-800 transition-all hover:border-indigo-500/30 hover:bg-indigo-950/30 hover:text-white cursor-default"
                  >
                    <span className={skill.color}>{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>



      </div>
    </section>
  );
}