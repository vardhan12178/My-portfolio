"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const slides = [
  {
    src: "/img/vkart.webp",
    label: "Shop",
    alt: "VKart landing page",
  },
  {
    src: "/img/vkart-ai.webp",
    label: "AI assistant",
    alt: "VKart AI shopping assistant",
  },
  {
    src: "/img/vkart-products.webp",
    label: "Products",
    alt: "VKart product collection page",
  },
  {
    src: "/img/vkart-admin.webp",
    label: "Admin",
    alt: "VKart admin operations dashboard",
  },
  {
    src: "/img/vkart-inventory.webp",
    label: "Stock",
    alt: "VKart admin inventory management",
  },
];

export default function VKartGallery() {
  const [active, setActive] = useState(0);
  const current = slides[active];
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const selectTab = (index: number) => {
    const nextIndex = (index + slides.length) % slides.length;
    setActive(nextIndex);
    tabsRef.current[nextIndex]?.focus();
  };

  const handleTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectTab(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectTab(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectTab(slides.length - 1);
    }
  };

  return (
    <div className="vkart-gallery">
      <div
        id="vkart-panel"
        className="featured-visual-inner"
        role="tabpanel"
        aria-labelledby={`vkart-tab-${active}`}
        tabIndex={0}
      >
        <div className="browser-chrome" aria-hidden="true">
          <span />
          <span />
          <span />
          <small>vkart.balavardhan.dev</small>
        </div>
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={2880}
          height={1800}
          sizes="(max-width: 900px) 100vw, 55vw"
          quality={85}
          priority={active === 0}
        />
      </div>

      <div className="vkart-thumbs" role="tablist" aria-label="VKart screenshots">
        {slides.map((slide, index) => (
          <button
            ref={(element) => {
              tabsRef.current[index] = element;
            }}
            key={slide.src}
            id={`vkart-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls="vkart-panel"
            tabIndex={index === active ? 0 : -1}
            className={`vkart-thumb${index === active ? " is-active" : ""}`}
            onClick={() => setActive(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            <Image
              src={slide.src}
              alt=""
              width={480}
              height={300}
              sizes="120px"
              quality={70}
            />
            <span>{slide.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
