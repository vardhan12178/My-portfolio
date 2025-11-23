import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Added Premium Header Font
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { MotionConfig } from "framer-motion";
import Script from "next/script";
import clsx from "clsx";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// --- Fonts ---
// Inter for body text (clean, readable)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Space Grotesk for Headings (modern, tech-focused)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

// --- Site Constants ---
const SITE_URL = "https://balavardhan.vercel.app";
const SITE_NAME = "Bala Vardhan | Full Stack Engineer"; // Rebranded title
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const viewport: Viewport = {
  themeColor: "#09090b", // Matches Zinc-950
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bala Vardhan | Engineering Scalable Solutions", // Stronger value proposition
    template: "%s · Bala Vardhan",
  },
  description:
    "Full Stack Engineer specializing in MERN & Modern Architectures. Transforming legacy code into high-performance applications.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Bala Vardhan | Full Stack Engineer",
    description: "Building scalable MERN applications and modernizing legacy systems.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Bala Vardhan Portfolio" }],
    locale: "en_US",
  },
  // ... (Keep your existing twitter/icons/verification configs here)
};

// Theme Provider Wrapper
function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark" // Default to dark for premium feel
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
     <body
        className={clsx(
          inter.variable,
          spaceGrotesk.variable,
          "overflow-x-hidden bg-zinc-950 text-zinc-100 flex min-h-screen flex-col antialiased selection:bg-indigo-500/30 selection:text-indigo-200"
        )}
      >
        {/* --- Ambient Background Glow (Fixed Layer) --- */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-950">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <Toaster position="bottom-right" toastOptions={{ style: { background: '#333', color: '#fff' } }} />
            
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main id="main" className="flex-grow relative z-10">
              {children}
            </main>
        {/* --- Refined Glassmorphism Footer --- */}
        <footer className="border-t border-zinc-800/50 bg-zinc-950/50 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              
              {/* Brand & Copyright */}
              <div className="text-center md:text-left">
                <h3 className="font-space text-lg font-bold text-white">
                  Bala <span className="text-indigo-400">Vardhan</span>
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Built with Next.js, Tailwind & Framer Motion.
                  <br className="hidden md:block" />
                  © {new Date().getFullYear()} Bala Vardhan. All rights reserved.
                </p>
              </div>

              {/* Social Links (Icons) */}
              <div className="flex gap-6 text-zinc-500">
                <a 
                  href="https://github.com/vardhan12178" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-colors hover:text-indigo-400 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/bala-vardhan-pula-753b011b9/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-indigo-400 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:balavardhanpula@gmail.com" 
                  aria-label="Email"
                  className="transition-colors hover:text-indigo-400 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
          </MotionConfig>
        </ThemeProvider>

        {/* JSON-LD Scripts */}
        <Script
          id="ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Bala Vardhan Pula",
            jobTitle: "Full Stack Engineer",
            url: SITE_URL,
            sameAs: ["https://github.com/vardhan12178", "https://linkedin.com/in/bala-vardhan-pula-753b011b9/"]
          })}}
        />
      </body>
    </html>
  );
}