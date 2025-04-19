"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-20 bg-gray-950 text-white px-6 sm:px-8 lg:px-12 py-20 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
          👋 About Me
        </h2>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          I'm <strong>Bala Vardhan Pula</strong>, a passionate and versatile Full Stack Developer based in India,
          specializing in creating clean, scalable, and user-centric digital solutions.
          With <strong>3+ years of experience</strong>, I’ve worked at <strong>TCS</strong> (Dec 2021 – June 2024)
          and currently contribute at <strong>HR Geckos</strong> (Oct 2024 – Present).
        </p>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          My stack includes <strong>React, Next.js, Node.js, PHP, SQL, MongoDB, AWS, Tailwind CSS, Bootstrap, and Selenium</strong>.
          I also use Python for automation and backend scripting.
        </p>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          I love building intuitive user interfaces, developing robust APIs, and automating workflows.
        </p>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          Currently, I'm open to opportunities in <strong>Hyderabad</strong> and other locations. Let’s build something amazing together! 💻✨
        </p>
      </motion.div>
    </section>
  );
}
