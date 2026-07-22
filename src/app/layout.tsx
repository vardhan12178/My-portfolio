import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const siteUrl = "https://balavardhan.dev";

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bala Vardhan — Full-stack Developer",
  description:
    "Full-stack developer with 4+ years of experience building reliable web apps with React, Next.js, Node.js, and databases.",
  keywords: [
    "Bala Vardhan",
    "Full-stack Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Hyderabad",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Bala Vardhan",
    title: "Bala Vardhan — Full-stack Developer",
    description: "I build web applications from the interface to the backend.",
    images: [{ url: "/og-editorial.png", width: 1730, height: 909, alt: "Bala Vardhan, Full-stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bala Vardhan — Full-stack Developer",
    description: "I build web applications from the interface to the backend.",
    images: ["/og-editorial.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const year = new Date().getFullYear();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body>
        <Link className="skip-link" href="/#projects">Skip to projects</Link>
        <SmoothScroll>
          <Header />
          {children}
          <footer className="site-footer">
            <div className="section-shell footer-inner">
              <div>
                <Link href="/#home" className="footer-name">Bala Vardhan</Link>
                <p>Full-stack developer — Hyderabad</p>
              </div>
              <p className="footer-note">© {year}</p>
              <div className="footer-links">
                <a href="mailto:balavardhanpula@gmail.com" aria-label="Email">
                  <Mail size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href="https://github.com/vardhan12178"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
              </div>
            </div>
          </footer>
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bala Vardhan Pula",
              jobTitle: "Full-stack Engineer",
              url: siteUrl,
              address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
              sameAs: [
                "https://github.com/vardhan12178",
                "https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
