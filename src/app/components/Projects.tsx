"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracker that allows users to log daily workouts, meals, sleep, and track progress towards their fitness goals with personalized insights.",
    imgUrl: "https://i.imgur.com/AMgOg3D.jpeg",
    liveUrl: "https://vardhan-fittrack.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/Fitness-Tracker",
    technologies: ["React", "Context API", "CSS"]
  },
  {
    title: "Ecommerce Site",
    description: "An ecommerce website built using React, featuring product listings, search functionality, and a shopping cart.",
    imgUrl: "https://i.imgur.com/26tKsxV.jpeg",
    liveUrl: "https://vkartshop.netlify.app/",
    githubUrl: "https://github.com/vardhan12178/vkart",
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB, AWS"]
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard application providing real-time weather updates and forecasts using a clean, responsive design.",
    imgUrl: "https://i.imgur.com/Dtf2Ko0.jpeg",
    liveUrl: "https://vardhan-weather.netlify.app/",
    githubUrl: "https://github.com/vardhan12178/weather",
    technologies: ["React", "Tailwindcss"]
  },
  {
    title: "News App",
    description: "A dynamic and responsive news application that aggregates the latest news articles from various sources.",
    imgUrl: "https://i.imgur.com/tpoio39.jpeg",
    liveUrl: "https://vardhan-news.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/news-app",
    technologies: ["React", "CSS"]
  },
  {
    title: "Weather App",
    description: "A weather dashboard application providing real-time weather updates and forecasts using a clean, responsive design.",
    imgUrl: "https://i.imgur.com/4HhyLwW.png",
    liveUrl: "https://vardhan-weather.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/weather-app",
    technologies: ["React", "CSS"]
  },
  {
    title: "MovieSpot",
    description: "MovieSpot is a sleek and interactive movie search application designed to help users explore and discover detailed information about movies.",
    imgUrl: "https://i.imgur.com/M05Lig8.jpeg",
    liveUrl: "https://vardhan-moviespot.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/moviespot",
    technologies: ["React", "Tailwind CSS"]
  },
  {
    title: "Portfolio",
    description: "A personal portfolio showcasing my projects, skills, and professional background with a modern design.",
    imgUrl: "https://i.imgur.com/kpoOc6l.jpeg",
    liveUrl: "https://balavardhan.vercel.app/",
    githubUrl: "https://github.com/vardhan12178/personal-portfolio",
    technologies: ["React", "SCSS"]
  },
  {
    title: "Food App",
    description: "A comprehensive food ordering application featuring an intuitive UI and seamless order tracking.",
    imgUrl: "https://i.imgur.com/s6nDRM2.jpeg",
    liveUrl: "https://vardhan-food.netlify.app/",
    githubUrl: "https://github.com/vardhan12178/Food-App",
    technologies: ["React", "Firebase"]
  },
  {
    title: "Expenses App",
    description: "An application to track monthly expenses with detailed analytics.",
    imgUrl: "https://i.imgur.com/QbmI0Y7.jpeg",
    liveUrl: "https://vardhan-expense.netlify.app/",
    githubUrl: "https://github.com/vardhan12178/Expenses",
    technologies: ["React", "CSS"]
  },
  {
    title: "Taskmate",
    description: "A task management application for adding and tracking daily tasks.",
    imgUrl: "https://i.imgur.com/Nuv1CNN.jpeg",
    liveUrl: "https://vardhan-taskmate.netlify.app/",
    githubUrl: "https://github.com/vardhan12178/Taskmate",
    technologies: ["React", "Tailwindcss"]
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
