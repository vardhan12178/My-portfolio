"use client";

import { useEffect } from "react";

export default function HomeMotion() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("motion-ready");
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    
    // Immediately reveal elements that are already within view
    const windowHeight = window.innerHeight;
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= windowHeight + 100) {
        element.classList.add("is-visible");
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px 140px 0px" });

    elements.forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        observer.observe(element);
      }
    });

    // Safety fallback: reveal any remaining elements after 1s so content is never stuck
    const fallbackTimer = window.setTimeout(() => {
      elements.forEach((element) => element.classList.add("is-visible"));
    }, 1200);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
