"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-950 text-white">
      
      {/* --- Background Ambient Glows (Matches Home Page) --- */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        className="absolute top-1/4 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1 
        }}
        className="absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" 
      />

      {/* --- Main Content --- */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        
        {/* 1. Error Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-medium text-pink-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500"></span>
            </span>
            <span>404 System Error</span>
          </div>
        </motion.div>

        {/* 2. Massive 404 Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-space text-9xl font-bold tracking-tighter sm:text-[10rem] md:text-[12rem]">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              404
            </span>
          </h1>
        </motion.div>

        {/* 3. Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-lg"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl font-space">
            Lost in Hyper-Space?
          </h2>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
            The coordinates you are trying to reach do not exist in this sector. 
            It seems this page has drifted into a black hole.
          </p>
        </motion.div>

        {/* 4. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Primary Button (White) */}
          <Link
            href="/"
            className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-zinc-950 transition-all hover:bg-zinc-200 hover:scale-105"
          >
            <Home className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
            <span>Return Home</span>
          </Link>
          
          {/* Secondary Button (Glass) */}
          <button
            onClick={() => router.back()}
            className="group inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/50 px-8 font-medium text-white backdrop-blur-sm transition-all hover:bg-zinc-900 hover:border-zinc-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>

      {/* --- Decorative Grid Lines --- */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
      
    </div>
  );
}