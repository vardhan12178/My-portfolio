"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

type NavItem = { href: string; label: string; id: string; icon: JSX.Element };

const NAV: NavItem[] = [
  { href: "/#home", label: "Home", id: "home", icon: <FaHome /> },
  { href: "/#about", label: "About", id: "about", icon: <FaUser /> },
  { href: "/#skills", label: "Skills", id: "skills", icon: <FaCode /> },
  { href: "/#projects", label: "Projects", id: "projects", icon: <FaFolderOpen /> },
  { href: "/#contact", label: "Contact", id: "contact", icon: <FaEnvelope /> },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (!isHome) return;
      const y = window.scrollY + 120;
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (top <= y && bottom > y) {
          setActiveHash(`#${item.id}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => setIsOpen(false), [pathname]);

  const smoothScroll = (hash: string) => {
    const el = document.querySelector(hash);
    if (!el) return;
    const yOffset = -100;
    const y =
      (el as HTMLElement).getBoundingClientRect().top +
      window.scrollY +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNav = (id: string, href: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setActiveHash(`#${id}`);
    if (isHome) smoothScroll(`#${id}`);
    else window.location.href = href;
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all",
        "backdrop-blur-md bg-gray-900/70",
        scrolled
          ? "shadow-[0_8px_30px_rgb(0,0,0,0.25)] border-b border-white/10"
          : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-purple-500/40 via-fuchsia-500/30 to-cyan-400/40" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.a
          href="/#home"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-2 text-base font-semibold tracking-tight"
          onClick={(e) => handleNav("home", "/#home", e)}
        >
          <Image
            src="/favicon.png"
            alt="BV logo"
            width={24}
            height={24}
            className="rounded-md"
            priority
          />
          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
            Bala Vardhan
          </span>
        </motion.a>

        <div className="hidden items-center gap-3 md:flex">
          <ul className="relative flex items-center gap-1 rounded-lg bg-white/5 p-1 text-sm text-gray-300 ring-1 ring-white/10">
            {NAV.map((item) => {
              const active = isHome && activeHash === `#${item.id}`;
              return (
                <li key={item.id} className="relative">
                  <Link
                    href={item.href}
                    onClick={(e) => handleNav(item.id, item.href, e)}
                    className={[
                      "relative z-10 rounded-md px-3 py-2 transition-colors",
                      active ? "text-white" : "hover:text-white",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600/30 to-indigo-600/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://github.com/vardhan12178?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-gray-200 hover:bg-white/10"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-gray-200 hover:bg-white/10"
            >
              <FaLinkedin />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 rounded-md border border-purple-500/60 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 px-3 py-2 text-sm font-medium text-white hover:border-purple-400 hover:from-purple-600/30 hover:to-indigo-600/30"
            >
              <FaDownload className="text-base" />
              Resume
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-gray-200 hover:bg-white/10"
          >
            <FaDownload />
          </a>
          <button
            ref={menuBtnRef}
            onClick={() => {
              setIsOpen((v) => !v);
              setTimeout(() => firstLinkRef.current?.focus(), 0);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-gray-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden"
          >
            <ul
              id="mobile-nav"
              role="menu"
              aria-label="Mobile navigation"
              className="mx-4 mb-4 space-y-3 rounded-xl border border-white/10 bg-gray-900/95 p-4 shadow-xl backdrop-blur-md"
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setIsOpen(false);
                  menuBtnRef.current?.focus();
                }
              }}
            >
              {NAV.map((item, idx) => {
                const active = isHome && activeHash === `#${item.id}`;
                return (
                  <li key={item.id} role="none">
                    <Link
                      ref={idx === 0 ? firstLinkRef : null}
                      role="menuitem"
                      href={item.href}
                      onClick={(e) => handleNav(item.id, item.href, e)}
                      className={[
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-base transition-all",
                        active
                          ? "border border-purple-500 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-white shadow-sm"
                          : "text-gray-200 hover:bg-white/5 hover:text-white",
                      ].join(" ")}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="text-purple-300 text-lg">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <div className="mt-3 flex items-center justify-between gap-2">
                <a
                  href="https://github.com/vardhan12178?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-md bg-white/5 px-3 py-2 text-center text-sm text-gray-200 ring-1 ring-white/10 hover:bg-white/10 transition"
                >
                  <FaGithub className="text-purple-300 text-base" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-md bg-white/5 px-3 py-2 text-center text-sm text-gray-200 ring-1 ring-white/10 hover:bg-white/10 transition"
                >
                  <FaLinkedin className="text-purple-300 text-base" />
                  LinkedIn
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
