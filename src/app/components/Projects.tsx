"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Weatherly",
    description: "A real-time weather app with animated weather effects, hourly & 5-day forecast, and air quality tracking.",
    imgUrl: "/img/weatherly.webp",
    liveUrl: "https://vardhan-weather.netlify.app/",
    githubUrl: "https://github.com/vardhan12178/weather",
    technologies: ["React", "Tailwind CSS", "OpenWeatherMap API"]
  },
  {
    title: "Fitness Tracker Pro",
    description: "A full-featured fitness tracker to log workouts, meals, sleep and view progress insights.",
    imgUrl: "/img/fit-tracker-pro.webp",
    liveUrl: "https://vardhan-fittrack.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/Fitness-Tracker",
    technologies: ["React", "Context API", "CSS"]
  },
  {
    title: "Vkart",
    description: "A stylish ecommerce website with category-wise product listings, cart, wishlist, and user authentication.",
    imgUrl: "/img/vkart.webp",
    liveUrl: "https://vkartshop.netlify.app/",
    githubUrl: "https://github.com/vardhan12178/vkart",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "Movie Spot",
    description: "A sleek movie search and discovery app that fetches now playing, top-rated, and upcoming films from TMDB.",
    imgUrl: "/img/Movie-spot.webp",
    liveUrl: "https://vardhan-moviespot.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/moviespot",
    technologies: ["React", "Tailwind CSS", "TMDB API"]
  },
  {
    title: "Image Magic Pro",
    description: "A fast image conversion tool that supports JPG, PNG, and WebP with a clean UI.",
    imgUrl: "/img/image-magic-pro.webp",
    liveUrl: "https://image-magic-pro.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/image-magic-pro",
    technologies: ["Next.js", "Tailwind CSS"]
  },
  {
    title: "Food App",
    description: "A modern food delivery UI with menu, cart, and authentication powered by Firebase.",
    imgUrl: "/img/food-app.webp",
    liveUrl: "https://vardhan-food.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/FoodApp",
    technologies: ["Next.js", "Firebase", "CSS"]
  }
];

const getTechColor = (tech: string) => {
  const key = tech.toLowerCase();
  if (key.includes("react")) return "bg-purple-700";
  if (key.includes("node")) return "bg-green-700";
  if (key.includes("mongo")) return "bg-emerald-700";
  if (key.includes("css")) return "bg-blue-700";
  if (key.includes("next")) return "bg-gray-700";
  if (key.includes("firebase")) return "bg-yellow-600";
  return "bg-gray-600";
};

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
        className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-4"
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
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-900 p-5 rounded-xl border border-gray-700 hover:shadow-lg hover:border-purple-700 transition duration-300 flex flex-col"
          >
            <div className="relative w-full h-44 mb-4 overflow-hidden rounded-md">
              <Image
                src={project.imgUrl}
                alt={project.title}
                fill
                className="object-cover rounded-md hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-3 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`capitalize px-2 py-1 rounded-full text-white ${getTechColor(
                    tech
                  )}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-2 flex justify-between items-center gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-purple-700 hover:bg-purple-600 rounded-md text-sm font-medium text-white transition"
              >
                Live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 border border-purple-500 text-purple-300 hover:bg-purple-700 hover:text-white rounded-md text-sm font-medium transition"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
