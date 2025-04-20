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
    imgUrl: "/img/movie-spot.webp",
    liveUrl: "https://vardhan-moviespot.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/moviespot",
    technologies: ["React", "Tailwind CSS", "TMDB API"]
  },
  {
    title: "Image Magic Pro",
    description: "A simple and fast image conversion tool that supports transforming image formats like JPG, PNG, and WebP with a clean user interface.",
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
        className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-12"
      >
        🚀 Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bg-gray-800 p-6 rounded-xl border border-purple-700 hover:shadow-lg transition duration-300 flex flex-col"
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={project.imgUrl}
                alt={project.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-3 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-gray-700 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-2 flex justify-between items-center">
              <a
                href={project.liveUrl}
                target="_blank"
                className="text-sm text-purple-400 hover:text-purple-200 underline"
              >
                Live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                className="text-sm text-purple-400 hover:text-purple-200 underline"
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
