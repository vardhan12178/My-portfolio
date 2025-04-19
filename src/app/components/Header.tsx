"use client";

import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["about", "skills", "projects", "contact"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(`#${id}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="backdrop-blur-md bg-gray-900/80 px-6 py-5 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-purple-400 hover:text-white transition"
          onClick={() => setIsOpen(false)}
        >
          Bala Vardhan
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-2 py-1 transition rounded-md ${
                  activeLink === link.href
                    ? "text-white border border-purple-500"
                    : "hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

     
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>


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
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className={`block py-2 px-2 rounded ${
                    activeLink === link.href
                      ? "bg-purple-600/20 text-white border border-purple-500"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
