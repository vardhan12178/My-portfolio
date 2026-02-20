"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layers,
  ShieldCheck,
  ShoppingCart,
  BarChart3,
  ArrowRight,
  Zap,
  Sparkles,
  CloudSun,
  Dumbbell,
  ImageIcon,
  Database,
  Server
} from "lucide-react";

// --- PROJECT DATA ---
const VKART_DATA = {
  id: "vkart",
  title: "VKart Enterprise Engine",
  tagline: "A scalable MERN-based eCommerce system with RBAC, secure payments, and cloud media management.",
  liveUrl: "https://vkart.balavardhan.dev/",
  githubUrl: "https://github.com/vardhan12178/vkart",
  technologies: [
    "React",
    "Redux",
    "Redis",
    "AI Search",
    "Node.js",
    "Express",
    "MongoDB",
    "AWS S3",
    "Razorpay",
    "Google OAuth",
    "JWT + 2FA"
  ],
  gallery: [
    {
      id: 0,
      title: "AI Smart Search",
      desc: "AI-powered product discovery using MongoDB AI Search to find relevant items based on semantic meaning.",
      img: "/img/Vkart1.webp",
      icon: <Sparkles size={18} />
    },
    {
      id: 1,
      title: "Admin Analytics",
      desc: "Role-protected admin panel with real-time metrics for revenue, user registrations, and order status distribution.",
      img: "/img/Vkart3.webp",
      icon: <BarChart3 size={18} />
    },
    {
      id: 2,
      title: "Secure Auth & 2FA",
      desc: "Email-password login, Google OAuth, JWT authentication, session security, and optional two-factor authentication.",
      img: "/img/Vkart2.webp",
      icon: <ShieldCheck size={18} />
    },
    {
      id: 3,
      title: "Inventory CMS",
      desc: "Product and category management with secure image uploads to AWS S3, activation toggles, and detail editing.",
      img: "/img/Vkart5.webp",
      icon: <Layers size={18} />
    },
    {
      id: 4,
      title: "Order Workflow",
      desc: "End-to-end order lifecycle: Pending → Placed → Shipped → Out for Delivery → Delivered, managed through a state-driven admin dashboard.",
      img: "/img/Vkart4.webp",
      icon: <ShoppingCart size={18} />
    }
  ]
};


type SupportingProject = {
  title: string;
  badge: string;
  desc: string;
  impact: string;
  tags: string[];
  links: {
    live: string;
    github: string;
  };
  img: string;
  icon: ReactNode;
  status?: string;
};

const SUPPORTING_PROJECTS: SupportingProject[] = [
  {
    title: "Image Magic Pro",
    badge: "Utility App",
    desc: "A Next.js server component web app for batch image conversion and browser-based canvas editing.",
    impact: "Built an internal API with 'sharp' for high-performance format conversion and JSZip for multi-file downloads.",
    tags: ["Next.js", "sharp", "JSZip", "Canvas API"],
    links: {
      live: "https://img.balavardhan.dev/",
      github: "https://github.com/vardhan12178/image-magic-pro"
    },
    img: "/img/image-magic-pro.webp",
    icon: <ImageIcon size={16} />
  },
  {
    title: "FitTrack",
    badge: "Full-Stack MVP",
    desc: "A modern fitness and wellness tracking dashboard for logging meals, workflows, and viewing data insights.",
    impact: "Integrated Firebase Auth & Firestore for secure persistence and used Recharts for visual progress analytics.",
    tags: ["Next.js 15", "Firebase Auth", "Firestore", "Recharts"],
    links: {
      live: "https://fitness-tracker-olive.vercel.app/",
      github: "https://github.com/vardhan12178/Fitness-Tracker"
    },
    img: "/img/fit-tracker-pro.webp",
    icon: <Dumbbell size={16} />
  },
  {
    title: "Weather Dashboard",
    badge: "API Build",
    desc: "A real-time weather dashboard that fetches city-based forecasts and presents conditions in a simple, readable UI.",
    impact: "Focus areas: external API integration, response handling, and fast visual feedback for weather metrics.",
    tags: ["React", "REST APIs", "Tailwind CSS"],
    links: {
      live: "https://vardhan-weather.vercel.app/",
      github: "https://github.com/vardhan12178/Node-Weather"
    },
    img: "/img/weatherly.webp",
    icon: <CloudSun size={16} />
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="relative bg-zinc-950 py-24 text-zinc-100 overflow-hidden">

      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300 mb-6"
          >
            <Zap size={16} /> Flagship Engineering Project
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-space text-4xl font-bold text-white sm:text-5xl"
          >
            VKart <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Platform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-zinc-400 text-lg"
          >
            A production-grade, full-stack eCommerce engine built to handle complex state, real-time data, and secure payment processing.
          </motion.p>
        </div>

        {/* Main Project Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-xl overflow-hidden"
        >
          {/* Top Banner / Mockup Area */}
          <div className="relative border-b border-zinc-800 bg-zinc-950 p-4 sm:p-8 flex items-center justify-center min-h-[300px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent z-0" />

            <div className="relative z-10 w-full max-w-4xl transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl overflow-hidden">
                <div className="flex h-8 items-center gap-2 border-b border-zinc-700 bg-zinc-800 px-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="ml-4 text-xs font-mono text-zinc-400">vkart.balavardhan.dev</div>
                </div>
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/img/Vkart1.webp"
                    alt="VKart Dashboard"
                    fill
                    className="object-cover object-top opacity-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-zinc-950/10" />
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-12 gap-0">

            {/* Left Column: Tech & Architecture (8 cols) */}
            <div className="lg:col-span-8 p-8 sm:p-10 lg:border-r border-zinc-800">

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                <div className="rounded-xl bg-zinc-950/50 border border-zinc-800 p-4 text-center">
                  <div className="text-xl font-bold text-white font-space mt-1">MERN</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-2">Full-Stack SPA</div>
                </div>
                <div className="rounded-xl bg-zinc-950/50 border border-zinc-800 p-4 text-center">
                  <div className="text-xl font-bold text-white font-space mt-1">Razorpay</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-2">Secure Payments</div>
                </div>
                <div className="rounded-xl bg-zinc-950/50 border border-zinc-800 p-4 text-center">
                  <div className="text-xl font-bold text-white font-space mt-1">JWT + 2FA</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-2">Authentication</div>
                </div>
                <div className="rounded-xl bg-zinc-950/50 border border-zinc-800 p-4 text-center">
                  <div className="text-xl font-bold text-emerald-400 font-space mt-1">Gemini AI</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-2">Smart Search</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 font-space">Core Enterprise Features</h3>

              <div className="grid sm:grid-cols-2 gap-6">

                {/* Feature 1 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <Sparkles className="h-5 w-5" />
                    <h4 className="font-bold text-zinc-100">AI Semantic Search (RAG)</h4>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Integrated MongoDB Atlas Vector Search with Google Gemini 2.5 Flash embeddings to allow users to search via natural language instead of exact keyword matches.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <Database className="h-5 w-5" />
                    <h4 className="font-bold text-zinc-100">Optimized Data Caching</h4>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Designed a Redis caching architecture to drastically reduce database load. Configured intelligent TTLs (Time-To-Live) to keep data fresh while serving products to users instantly.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                    <h4 className="font-bold text-zinc-100">Robust Security & Auth</h4>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Built a highly secure authentication system using JWTs stored in HTTP-only cookies, combined with Google OAuth 2.0 integration and an optional Two-Factor Authentication (2FA) workflow.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <ShoppingCart className="h-5 w-5" />
                    <h4 className="font-bold text-zinc-100">End-to-End Order Pipeline</h4>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Engineered a complete order workflow from checkout to delivery. Includes Razorpay integration, automated PDF invoice generation, and a daily scheduled job to process automatic refunds.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Links & Tags (4 cols) */}
            <div className="lg:col-span-4 p-8 sm:p-10 bg-zinc-950/30 flex flex-col justify-between">

              <div>
                <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-10">
                  {VKART_DATA.technologies.map((tech) => (
                    <span key={tech} className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-emerald-400 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={VKART_DATA.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-between rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/20 group"
                >
                  View Live Application
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="https://github.com/vardhan12178/vkart"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-800/50 px-6 py-4 font-medium text-white transition-all hover:bg-zinc-800 hover:border-zinc-600"
                >
                  <Github size={20} className="text-zinc-400" />
                  Frontend Repository
                </a>

                <a
                  href="https://github.com/vardhan12178/backend"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-800/50 px-6 py-4 font-medium text-white transition-all hover:bg-zinc-800 hover:border-zinc-600"
                >
                  <Server size={20} className="text-zinc-400" />
                  Backend API Repository
                </a>
              </div>

            </div>
          </div>
        </motion.div>

        {/* --- SUPPORTING PROJECTS --- */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <h3 className="font-space text-2xl font-bold text-white mb-2">More Selected Builds</h3>
              <p className="max-w-2xl text-sm text-zinc-400">
                A collection of full-stack and frontend applications built to solve specific problems and explore new technologies.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SUPPORTING_PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-all hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/60"
              >
                <div className="relative aspect-video overflow-hidden border-b border-zinc-800 bg-zinc-950">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-950/80 px-3 py-1.5 text-[11px] font-medium text-zinc-200 backdrop-blur shadow-sm">
                    {project.icon}
                    {project.badge}
                  </div>
                  {project.status ? (
                    <span className="absolute right-3 top-3 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-[11px] font-semibold text-amber-300 shadow-sm">
                      {project.status}
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h4 className="font-space text-xl font-bold text-white">{project.title}</h4>
                    <div className="flex gap-2">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code`}
                        className="rounded-full bg-zinc-800 p-2 text-zinc-400 transition-colors hover:text-white hover:bg-zinc-700"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="rounded-full bg-zinc-800 p-2 text-zinc-400 transition-colors hover:text-white hover:bg-zinc-700"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-400 mb-3">{project.desc}</p>
                  <p className="mt-auto text-xs leading-relaxed text-zinc-500 pt-4 border-t border-zinc-800/50">{project.impact}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
