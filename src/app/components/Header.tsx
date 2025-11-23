"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code2, 
  FolderOpen, 
  Mail, 
  Github, 
  Linkedin, 
  FileText,
  Download
} from "lucide-react";
import clsx from "clsx";

// Navigation Items
const NAV_ITEMS = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- Scroll Detection ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* --- Desktop Floating Navbar --- */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 mx-auto flex w-full items-center justify-between transition-all duration-300",
          // FIX 1: Changed px-6 to px-4 for mobile, kept px-6 for desktop (md:px-6)
          "px-4 md:px-6",
          scrolled 
            ? "top-4 max-w-5xl rounded-full border border-zinc-800 bg-zinc-900/60 py-3 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-900/60" 
            : "max-w-7xl bg-transparent py-6"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <Link 
            href="#home" 
            onClick={(e) => handleScrollTo(e, "#home")}
            // FIX 2: Reduced font size on mobile (text-lg) -> desktop (text-xl)
            className="font-space text-lg font-bold tracking-tight text-white hover:opacity-80 transition-opacity md:text-xl"
          >
            Bala <span className="text-indigo-400">Vardhan</span>
          </Link>
        </div>

        {/* Desktop Navigation (Center) */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-zinc-800/50 p-1 border border-zinc-700/50 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
             const isActive = activeSection === item.href.substring(1);
             return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={clsx(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-zinc-700"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {item.name}
                </span>
              </Link>
             );
          })}
        </nav>

        {/* Desktop Actions (Right) */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <div className="flex gap-3 text-zinc-400">
             <a href="https://github.com/vardhan12178" target="_blank" className="hover:text-white transition-colors"><Github size={20} /></a>
             <a href="https://linkedin.com/in/bala-vardhan-pula-753b011b9/" target="_blank" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
          <a
            href="/Bala_Vardhan_Resume.pdf"
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-full bg-zinc-800 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      {/* --- Mobile Full Screen Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 pt-24 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8 p-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="flex items-center gap-4 text-2xl font-medium text-zinc-300 hover:text-white"
                >
                  <item.icon size={24} className="text-indigo-500" />
                  {item.name}
                </Link>
              ))}
              
              <div className="h-px w-24 bg-zinc-800" />

              <a
                href="/Bala_Vardhan_Resume.pdf"
                target="_blank"
                className="flex items-center gap-2 rounded-full border border-indigo-500/50 bg-indigo-500/10 px-8 py-3 text-lg font-medium text-indigo-400"
              >
                <FileText size={20} /> Download Resume
              </a>

               <div className="mt-8 flex gap-8">
                 <a href="https://github.com/vardhan12178" target="_blank" className="text-zinc-400 hover:text-white"><Github size={28} /></a>
                 <a href="https://linkedin.com/in/bala-vardhan-pula-753b011b9/" target="_blank" className="text-zinc-400 hover:text-white"><Linkedin size={28} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}