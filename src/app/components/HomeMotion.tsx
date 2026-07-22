"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([".hero-line", ".hero-fade", "[data-reveal]", ".featured-visual-inner"], {
          clearProps: "all",
          opacity: 1,
          y: 0,
          clipPath: "none",
        });
        return;
      }

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".hero-line", {
          yPercent: 110,
          duration: 0.85,
          stagger: 0.08,
        })
        .from(
          ".hero-fade",
          {
            opacity: 0,
            y: 24,
            duration: 0.65,
            stagger: 0.08,
          },
          "-=0.55",
        )
        .from(
          ".hero-visual",
          {
            opacity: 0,
            scale: 1.04,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.85",
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.from(".featured-visual-inner", {
        clipPath: "inset(12% 8% 12% 8%)",
        scale: 1.06,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-project",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.utils.toArray<HTMLElement>(".work-row").forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          y: 28,
          duration: 0.55,
          delay: i * 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
