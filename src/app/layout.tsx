import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://balavardhan.dev";

export const viewport: Viewport = {
  themeColor: "#f7f8fa",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "Bala Vardhan | Full-stack Developer",
  description:
    "Bala Vardhan is a full-stack developer with 4+ years of experience building web products with React, Next.js, Node.js, and databases.",
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
    title: "Bala Vardhan | Full-stack Developer",
    description: "I build web products from interface to backend.",
    images: [{ url: "/og-editorial.png", width: 1730, height: 909, alt: "Bala Vardhan, Full-stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bala Vardhan | Full-stack Developer",
    description: "I build web products from interface to backend.",
    images: ["/og-editorial.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Link className="skip-link" href="/#projects">Skip to projects</Link>
        <SmoothScroll>
          <Header />
          {children}
          <footer className="site-footer">
            <div className="section-shell footer-inner">
              <div>
                <Link href="/#home" className="footer-name">Bala Vardhan</Link>
                <p>Full-stack developer / Hyderabad</p>
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
