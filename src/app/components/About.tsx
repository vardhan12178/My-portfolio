"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaArrowRight } from "react-icons/fa";

export default function About() {
  const techStack = [
    "React", "Next.js", "Node.js", "PHP", "MongoDB", "SQL", "Tailwind",
    "Bootstrap", "AWS", "Python", "Selenium"
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
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
          👋 About Me
        </h2>

        {/* Bio */}
        <div className="text-lg sm:text-xl text-gray-300 leading-relaxed space-y-6 text-left">
          <p>
            I’m <span className="font-semibold text-white">Bala Vardhan Pula</span>, a full stack developer from <span className="text-purple-300">India</span> with a passion for building clean, scalable, and engaging web applications.
          </p>
          <p>
            I have <span className="font-semibold text-white">3+ years of experience</span> working at 
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

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-lg p-6 shadow-lg space-y-4"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-purple-400">
              <FaBriefcase /> Work Experience
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li><strong>TCS</strong> – Frontend Developer (Dec 2021 – June 2024)</li>
              <li><strong>HR Geckos</strong> – Full Stack Developer (Oct 2024 – Present)</li>
              <li>Worked on full-cycle development: UI, APIs, automation, deployment</li>
            </ul>
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
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              {techStack.map((tech) => (
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
        <div className="mt-10">
          <a
            href="#contact"
            aria-label="Go to Contact section"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-md shadow-md transition"
          >
            Let&apos;s Connect <FaArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
