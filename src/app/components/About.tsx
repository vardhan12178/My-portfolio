"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const techStack = {
    Frontend: ["React", "Next.js", "Tailwind", "Bootstrap"],
    Backend: ["Node.js", "PHP", "Python"],
    Database: ["MongoDB", "SQL"],
    Others: ["AWS", "Selenium"],
  };

  const experienceTimeline = [
    {
      company: "HR Geckos",
      role: "Full Stack Developer",
      period: "Oct 2024 – Present",
      achievements: [
        "Led full-cycle development including UI, APIs, automation, and deployment.",
        "Optimized scalable systems, reducing deployment time by 25%.",
      ],
    },
    {
      company: "TCS",
      role: "Frontend Developer",
      period: "Dec 2021 – June 2024",
      achievements: [
        "Developed responsive UIs for enterprise apps, improving user engagement by 15%.",
        "Collaborated in agile teams on API integrations and cloud deployments.",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-20 bg-gray-950 text-white px-6 sm:px-8 lg:px-12 py-20 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full text-center space-y-12"
      >
   
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 flex items-center justify-center gap-2">
          <FaBriefcase /> About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-48 h-48 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-purple-500"
          >
    <div className="relative w-46 h-47 rounded-full overflow-hidden "> 
  <Image
    src="/img/myimg.webp"
    alt="Bala Vardhan Pula"
    fill
    className="object-cover object-center"
    loading="lazy"
  />
</div>
          </motion.div>
          <div className="text-lg sm:text-xl text-gray-300 leading-relaxed space-y-6 flex-1">
            <p>
              I’m <span className="font-semibold text-white">Bala Vardhan Pula</span>, a full stack developer from <span className="text-purple-300">India</span> with a passion for building clean, scalable, and engaging web applications.
            </p>
            <p>
              With over <span className="font-semibold text-white">3.5 years of experience</span> (as of July 2025), I've worked at 
              <span className="text-purple-300"> TCS</span> (2021–2024) and currently at 
              <span className="text-purple-300"> HR Geckos</span> (Oct 2024–Present).
            </p>
            <p>
              My journey includes frontend and backend development, API architecture, automation scripting, and cloud deployment. I enjoy creating seamless user experiences and solving real-world problems with code.
            </p>
            <p>
              Outside of coding, you’ll find me playing cricket, exploring new tech tools, or enhancing my personal projects.
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-lg p-6 shadow-lg space-y-4"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-purple-400">
              <FaCalendarAlt /> Work Experience
            </h3>
            <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-500">
              {experienceTimeline.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-white">{exp.company} – {exp.role}</h4>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    {exp.achievements.map((ach) => (
                      <li key={ach}>{ach}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-900 rounded-lg p-6 shadow-lg space-y-4"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-purple-400">
              <FaLaptopCode /> Tech Stack
            </h3>
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category} className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 uppercase">{category}</h4>
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                  {techs.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-purple-700/20 text-purple-300 px-3 py-1 rounded-full cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Highlights */}
        <ul className="list-disc list-inside text-left text-gray-300 text-lg sm:text-xl space-y-3 mt-10 max-w-3xl mx-auto">
          <li>🚀 Built and deployed full-stack applications from scratch</li>
          <li>💼 Experienced in enterprise environments and agile teams</li>
          <li>🧠 Skilled in REST APIs, automation, and scalable UI systems</li>
          <li>🌍 Open to remote, hybrid, or onsite roles (Hyderabad preferred)</li>
        </ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="#contact"
            aria-label="Go to Contact section"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-md shadow-md transition hover:scale-105"
          >
            Let's Connect <FaArrowRight />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}