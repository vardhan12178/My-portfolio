"use client";

import { useState } from "react";
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
  Zap
} from "lucide-react";

// --- PROJECT DATA (Updated for AWS S3) ---
const VKART_DATA = {
  id: "vkart",
  title: "VKart Enterprise Engine",
  tagline: "A scalable MERN-based eCommerce system with RBAC, secure payments, and cloud media management.",
  liveUrl: "https://vkart.balavardhan.dev/",
  githubUrl: "https://github.com/vardhan12178/vkart",
  technologies: [
    "React",
    "Redux",
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
      title: "Admin Analytics",
      desc: "Role-protected admin panel with real-time metrics for revenue, user registrations, and order status distribution.",
      img: "/img/vkart3.webp",
      icon: <BarChart3 size={18} />
    },
    {
      id: 1,
      title: "Secure Auth & 2FA",
      desc: "Email-password login, Google OAuth, JWT authentication, session security, and optional two-factor authentication.",
      img: "/img/vkart2.webp",
      icon: <ShieldCheck size={18} />
    },
    {
      id: 2,
      title: "Inventory CMS",
      desc: "Product and category management with secure image uploads to AWS S3, activation toggles, and detail editing.",
      img: "/img/vkart5.webp",
      icon: <Layers size={18} />
    },
    {
      id: 3,
      title: "Order Workflow",
      desc: "End-to-end order lifecycle: Pending → Placed → Shipped → Out for Delivery → Delivered, managed through a state-driven admin dashboard.",
      img: "/img/vkart4.webp",
      icon: <ShoppingCart size={18} />
    }
  ]
};


const SECONDARY_PROJECT = {
  title: "Image Magic Pro",
  desc: "A fast, browser-based image converter and screenshot editor built for daily developer workflows. Supports drag-and-drop uploads, clipboard paste, format conversion (PNG, JPG, WebP), lossless compression, and client-side editing using Canvas API.",
  tags: ["Next.js", "Canvas API", "Tailwind CSS"],
  links: {
    live: "https://img.balavardhan.dev/",
    github: "https://github.com/vardhan12178/image-magic-pro"
  },
  img: "/img/image-magic-pro.webp"
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="relative bg-zinc-950 py-5 text-zinc-100">
      
      {/* Background Glows */}
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-space text-4xl font-bold text-white sm:text-5xl"
          >
            Featured <span className="text-indigo-400">Projects</span>
          </motion.h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Showcasing complex systems built for scalability, security, and real-world performance.
          </p>
        </div>

        {/* --- FLAGSHIP PROJECT: VKART --- */}
        <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/30 p-4 sm:p-8 backdrop-blur-sm lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            
            {/* LEFT: Interactive Browser Window */}
            <div className="relative">
              {/* Browser Header */}
              <div className="mb-[-1px] flex h-8 w-full items-center gap-2 rounded-t-xl border border-b-0 border-zinc-700 bg-zinc-800 px-4">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <div className="mx-auto flex h-5 w-1/2 items-center justify-center rounded bg-zinc-900/50 text-[10px] text-zinc-500 font-mono">
                  vkart.balavardhan.dev
                </div>
              </div>

              {/* Dynamic Screen */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-xl border border-zinc-700 bg-zinc-950 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={VKART_DATA.gallery[activeTab].img}
                      alt={VKART_DATA.gallery[activeTab].title}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                   
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Description under image */}
            <div className="mt-4 p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl h-32 overflow-y-auto">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-sm font-bold text-white mb-1">
                  {VKART_DATA.gallery[activeTab].title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {VKART_DATA.gallery[activeTab].desc}
                </p>
              </motion.div>
            </div>

            </div>

            {/* RIGHT: Content & Controls */}
            <div className="flex flex-col justify-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                  <Zap size={14} className="fill-indigo-500" /> Flagship Project
                </div>
                <h3 className="font-space text-3xl font-bold text-white mb-2">{VKART_DATA.title}</h3>
                <p className="text-zinc-400 mb-6">{VKART_DATA.tagline}</p>

                {/* Tech Stack Chips */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {VKART_DATA.technologies.map(tech => (
                    <span key={tech} className="rounded-md border border-zinc-700 bg-zinc-800/50 px-2 py-1 text-xs text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive Feature Tabs */}
                <div className="space-y-3 mb-8">
                  {VKART_DATA.gallery.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(index)}
                      className={`group flex w-full items-center gap-4 rounded-xl border p-3 text-left transition-all ${
                        activeTab === index 
                          ? "border-indigo-500 bg-indigo-500/10" 
                          : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                      }`}
                    >
                      <div className={`rounded-lg p-2 transition-colors ${
                         activeTab === index ? "bg-indigo-500 text-white" : "bg-zinc-800 text-zinc-400 group-hover:text-white"
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold ${activeTab === index ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                          {item.title}
                        </h4>
                        {/* <p className="text-xs text-zinc-500 line-clamp-1">{item.desc}</p> */}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a 
                    href={VKART_DATA.liveUrl} 
                    target="_blank" 
                    className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-700 hover:scale-105"
                  >
                    View Live App <ArrowRight size={18} />
                  </a>
                  <a 
                    href={VKART_DATA.githubUrl} 
                    target="_blank" 
                    className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-6 py-3 font-medium text-white transition-all hover:bg-zinc-700"
                  >
                    <Github size={18} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECONDARY PROJECT: IMAGE MAGIC --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] items-center rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 hover:border-zinc-700 transition-colors"
        >
          {/* Screenshot */}
          <div className="relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 aspect-video group">
             <Image
                src={SECONDARY_PROJECT.img}
                alt={SECONDARY_PROJECT.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
             />
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-space text-2xl font-bold text-white">{SECONDARY_PROJECT.title}</h3>
              <div className="flex gap-3">
                 <a href={SECONDARY_PROJECT.links.github} target="_blank" className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                   <Github size={20} />
                 </a>
                 <a href={SECONDARY_PROJECT.links.live} target="_blank" className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                   <ExternalLink size={20} />
                 </a>
              </div>
            </div>
            <p className="text-zinc-400 mb-6">
              {SECONDARY_PROJECT.desc}
            </p>
            <div className="flex gap-2">
              {SECONDARY_PROJECT.tags.map(tag => (
                <span key={tag} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}