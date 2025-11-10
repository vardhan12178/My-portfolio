"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects as ALL_PROJECTS, getTechColor } from "../../../lib/projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const projects = [...ALL_PROJECTS].sort(
    (a, b) => Number(b.isFeatured) - Number(a.isFeatured)
  );
  const vkart = projects[0];
  const rest = projects.slice(1);

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-gray-950 px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-2 text-center text-4xl font-bold md:text-5xl"
      >
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>
      <p className="mb-8 text-center text-sm text-gray-400 sm:text-base">
        Real-world full-stack apps built with modern frameworks and APIs.
      </p>

      {/* --- Featured Project (Vkart) --- */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto mb-10 max-w-6xl"
      >
        <Link href={`/projects/${vkart.slug}`} key={vkart.slug} className="block">
          <motion.article
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 p-6 shadow-sm hover:border-purple-400/60 hover:bg-gray-900/80"
          >
            {vkart.isFeatured && (
              <span className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1.5 text-xs font-bold text-black shadow">
                Featured
              </span>
            )}

            <div className="relative mb-5 w-full overflow-hidden rounded-xl">
              <Image
                src={vkart.imgUrl}
                alt={vkart.title}
                width={1100}
                height={0}
                className="w-full h-auto rounded-xl transition duration-300 group-hover:scale-[1.03]"
                priority
              />
            </div>

            <h3 className="mb-1 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-xl font-semibold text-transparent">
              {vkart.title}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-gray-300">
              {vkart.description}
            </p>

            <div className="mb-2 flex flex-wrap gap-2">
              {vkart.technologies.map((tech) => (
                <span
                  key={`${vkart.slug}-${tech}`}
                  className={`rounded-full px-2.5 py-1 text-[11px] capitalize text-white ${getTechColor(
                    tech
                  )}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        </Link>
      </motion.div>

      {/* --- Remaining Projects --- */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2"
      >
        {rest.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <motion.article
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 p-5 shadow-sm hover:border-purple-400/60 hover:bg-gray-900/80"
            >
              <div className="relative mb-4 w-full overflow-hidden rounded-xl">
                <Image
                  src={project.imgUrl}
                  alt={project.title}
                  width={700}
                  height={0}
                  className="w-full h-auto rounded-xl transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <h3 className="mb-1 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-lg font-semibold text-transparent">
                {project.title}
              </h3>
              <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={`${project.slug}-${tech}`}
                    className={`rounded-full px-2.5 py-1 text-[11px] capitalize text-white ${getTechColor(
                      tech
                    )}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
