import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bala Vardhan | Full Stack Developer",
  description: "Portfolio of Bala Vardhan Pula, skilled in React, Next.js, Node.js, PHP, and more.",
  metadataBase: new URL("https://balavardhan.vercel.app"),
  openGraph: {
    title: "Bala Vardhan | Full Stack Developer",
    description: "Explore projects, skills, and experience of Bala Vardhan Pula.",
    url: "https://balavardhan.vercel.app",
    siteName: "Bala Vardhan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bala Vardhan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bala Vardhan | Full Stack Developer",
    description: "Portfolio of Bala Vardhan Pula",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white flex flex-col min-h-screen`}>
        <Toaster />
        <Header />
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-900 py-6 text-center text-sm text-gray-500">
          <div className="flex justify-center items-center gap-4">
            <span>© {new Date().getFullYear()} Bala Vardhan Pula</span>
            <a
              href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-200 transition text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vardhan12178?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-200 transition text-xl"
            >
              <FaGithub />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
