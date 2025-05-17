"use client";

import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isMounted, setIsMounted] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const link of navLinks) {
        const el = document.getElementById(link.href.substring(1));
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          el.offsetTop + el.offsetHeight > scrollPosition
        ) {
          setActiveLink(link.href);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -100; // height of sticky header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (href: string) => {
    setIsOpen(false);
    setActiveLink(href);
    scrollToSection(href);
  };

  if (!isMounted) return null;

  return (
    <header className="backdrop-blur-md bg-gray-900/80 px-6 py-5 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          onClick={() => {
            setIsOpen(false);
            setActiveLink("#home");
            scrollToSection("#home");
          }}
        >
          Bala Vardhan
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavLinkClick(link.href)}
                className={`relative px-2 py-1 transition rounded-md hover:text-white ${
                  activeLink === link.href
                    ? "text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-purple-500 after:rounded"
                    : ""
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-800 mt-3 mx-4 p-4 rounded-lg space-y-2 shadow-lg"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavLinkClick(link.href)}
                  className={`block w-full text-left py-2 px-2 rounded ${
                    activeLink === link.href
                      ? "bg-purple-600/20 text-white border border-purple-500"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
