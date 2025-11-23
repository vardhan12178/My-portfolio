"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Calendar,
  MapPin,
  Clock,
  Download,
  ExternalLink,
  Server,
  Layout,
  Database,
  Terminal
} from "lucide-react";
import Image from "next/image";

export default function About() {
  // --- Dynamic Experience Calculation ---
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
  const expText = `${years}.${months} Years`;

  // --- Work Experience Data ---
  const experienceTimeline = [
    {
      company: "HR Geckos",
      role: "Full Stack Engineer", // Changed from "Developer" to "Engineer" for prestige
      period: "Oct 2024 – Present",
      type: "Product Engineering",
      achievements: [
        "Architected an internal SaaS platform, handling end-to-end development from database design to UI implementation.",
        "Engineered a sequential policy approval workflow engine, reducing manual administrative overhead by 40%.",
        "Implemented a dynamic PDF generation system using DOMPDF with integrated digital signature compliance.",
        "Refactored a legacy static codebase into a dynamic template system, reducing code redundancy by 95%."
      ],
    },
    {
      company: "TCS",
      role: "Frontend Developer",
      period: "Dec 2021 – Jun 2024",
      type: "Enterprise Solutions",
      achievements: [
        "Developed reusable React UI components used across multiple agile squads, improving development speed by 15%.",
        "Collaborated with cross-functional teams to deliver enterprise-grade modules and REST API integrations.",
      ],
    },
  ];

  // --- Tech Stack (Grouped for Visual Impact) ---
  const skills = [
    { label: "Frontend", icon: Layout, items: ["React", "Next.js", "Tailwind CSS", "Redux"] },
    { label: "Backend", icon: Server, items: ["Node.js", "Express", "PHP (Legacy)", "REST APIs"] },
    { label: "Database", icon: Database, items: ["MongoDB", "MySQL", "PostgreSQL"] },
    { label: "DevOps/Tools", icon: Terminal, items: ["Git", "AWS (Basic)", "Postman", "Docker"] },
  ];

  return (
    <section id="about" className="relative bg-zinc-950 py-24 text-zinc-100">
      
      {/* Background Glow */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="font-space text-4xl font-bold text-white sm:text-5xl">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
           A results-driven engineer modernizing legacy systems into scalable, high-performance MERN applications
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          
          {/* LEFT COLUMN: Profile & Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Glass Card: Profile */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 text-center backdrop-blur-sm">
              <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-zinc-800 shadow-2xl">
                <Image
                  src="/img/myimg.webp"
                  alt="Bala Vardhan"
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="font-space text-2xl font-bold text-white">Bala Vardhan</h3>
              <p className="text-indigo-400 font-medium">Full Stack Engineer</p>

              {/* Quick Stats Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                <div className="rounded-xl bg-zinc-950/50 p-3 border border-zinc-800/50">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider mb-1">
                    <MapPin size={12} /> Location
                  </div>
                  <div className="text-zinc-200 text-sm font-semibold">Hyderabad, IN</div>
                </div>
                <div className="rounded-xl bg-zinc-950/50 p-3 border border-zinc-800/50">
                   <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider mb-1">
                    <Briefcase size={12} /> Experience
                  </div>
                  <div className="text-zinc-200 text-sm font-semibold">{expText}</div>
                </div>
                <div className="rounded-xl bg-zinc-950/50 p-3 border border-zinc-800/50 col-span-2">
                   <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider mb-1">
                    <Clock size={12} /> Status
                  </div>
                  <div className="text-green-400 text-sm font-semibold flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Open for MERN Roles
                  </div>
                </div>
              </div>

              {/* Resume Button */}
              <a
                href="/Bala_Vardhan_Resume.pdf"
                target="_blank"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Timeline & Tech */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            
            {/* Experience Section */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 font-space text-2xl font-bold text-white">
                <Code2 className="text-indigo-400" /> Work History
              </h3>
              
              <div className="space-y-6">
                {experienceTimeline.map((job, index) => (
                  <div 
                    key={index} 
                    className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-indigo-500/30 hover:bg-zinc-900/60"
                  >
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div>
                        <h4 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-300 transition-colors">
                          {job.company}
                        </h4>
                        <p className="text-sm font-medium text-zinc-400">{job.role} • <span className="text-zinc-500">{job.type}</span></p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
                        <Calendar size={12} /> {job.period}
                      </span>
                    </div>
                    
                    <ul className="mt-4 space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-indigo-500/50" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 font-space text-2xl font-bold text-white">
                <Server className="text-indigo-400" />Technical Expertise
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill.label} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 transition-colors hover:border-zinc-700">
                    <div className="mb-3 flex items-center gap-2 text-zinc-100 font-semibold">
                      <skill.icon size={18} className="text-indigo-400" /> {skill.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span 
                          key={item} 
                          className="rounded-md bg-zinc-800/50 px-2 py-1 text-xs text-zinc-400 border border-zinc-700/50 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}