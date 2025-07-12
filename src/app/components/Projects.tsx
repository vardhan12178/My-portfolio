"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEye, FaCode } from "react-icons/fa";

// Correct named import from lib/projects.ts
import { projects, getTechColor } from "../../../lib/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-950 text-white px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text text-center mb-4"
      >
        🚀 Projects
      </motion.h2>
      <p className="text-center text-gray-400 mb-10 text-sm sm:text-base">
        Real-world full-stack apps built with modern frameworks and APIs
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <Link href={`/projects/${project.slug}`} key={index}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-900 p-5 rounded-2xl border border-gray-700 hover:shadow-2xl hover:border-purple-700 transition duration-300 flex flex-col relative cursor-pointer group"
            >
              {project.isFeatured && (
                <span className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  Featured
                </span>
              )}

              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={project.imgUrl}
                  alt={project.title}
                  fill
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`capitalize px-3 py-1.5 rounded-full text-white transition duration-300 hover:scale-105 ${getTechColor(
                      tech
                    )}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-2 flex justify-between items-center gap-2">
                <span className="text-xs text-gray-400 italic">
                  Click for full details
                </span>
                <div className="flex gap-3">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaEye /> Live
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaCode /> Code
                  </Link>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}