// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { MotionConfig } from "framer-motion";
import Script from "next/script";
import clsx from "clsx";

// --- Fonts (variable, avoids CLS) ---
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// --- Site constants ---
const SITE_URL = "https://balavardhan.vercel.app";
const SITE_NAME = "Bala Vardhan Portfolio";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0b0b12" }, { media: "(prefers-color-scheme: light)", color: "#ffffff" }],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bala Vardhan | Full Stack Developer",
    template: "%s · Bala Vardhan",
  },
  description:
    "Portfolio of Bala Vardhan Pula — Full Stack Developer (React, Next.js, Node.js, PHP). Explore projects, skills, and experience.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Bala Vardhan | Full Stack Developer",
    description:
      "Explore projects, skills, and experience of Bala Vardhan Pula.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Bala Vardhan Portfolio Preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bala Vardhan | Full Stack Developer",
    description: "Portfolio of Bala Vardhan Pula",
    images: [OG_IMAGE],
    creator: "@your_handle", // optional: set if you have one
    site: "@your_handle",    // optional
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  // Optional: Search Console / others (replace values or remove)
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_TOKEN",
  },
};

// Lightweight theme provider using next-themes pattern without external file
// If you already have a ThemeProvider component, replace this with your import.
import { ThemeProvider as NextThemesProvider } from "next-themes";
function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

// --- JSON-LD (Person + WebSite with search action) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bala Vardhan Pula",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/",
    "https://github.com/vardhan12178",
  ],
  jobTitle: "Full Stack Developer",
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={query}`,
    "query-input": "required name=query",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          inter.variable,
          "bg-gray-950 text-white flex min-h-screen flex-col antialiased"
        )}
      >
        {/* Skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[999] focus:rounded-md focus:bg-purple-600 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        {/* Global providers */}
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <Toaster position="top-right" />
            <Header />

            {/* Main content */}
            <main id="main" className="flex-grow">
              {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[#0a0a23]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a23]/70">
  <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-400">
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
      <p className="text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent font-medium">
          Bala&nbsp;Vardhan
        </span>
        . All rights reserved.
      </p>

      <nav className="flex gap-6 text-sm font-medium">
        <a
          href="#about"
          className="relative group transition"
        >
          <span className="text-gray-400 group-hover:text-white transition">About</span>
          <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#projects"
          className="relative group transition"
        >
          <span className="text-gray-400 group-hover:text-white transition">Projects</span>
          <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#contact"
          className="relative group transition"
        >
          <span className="text-gray-400 group-hover:text-white transition">Contact</span>
          <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all group-hover:w-full"></span>
        </a>
      </nav>
    </div>

    <div className="mt-5 flex justify-center gap-4 text-lg text-gray-400">
      <a
        href="https://github.com/vardhan12178"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="transition hover:text-white hover:scale-110"
      >
        <i className="fab fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="transition hover:text-white hover:scale-110"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        href="https://wa.me/918688412181"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="transition hover:text-white hover:scale-110"
      >
        <i className="fab fa-whatsapp" />
      </a>
    </div>
  </div>
</footer>

            {/* Vercel analytics (optional) */}
            
          </MotionConfig>
        </ThemeProvider>

        {/* JSON-LD scripts */}
        <Script
          id="ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </body>
    </html>
  );
}
