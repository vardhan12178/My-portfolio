"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaArrowUp, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false); // Added for loading state
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mgvagoen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 bg-gray-950 text-white relative scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">
          📬 Contact
        </h2>
        <p className="text-gray-300 mb-10">
          Have a question or want to work together? Drop me a message!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-gray-900/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-purple-700"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            minLength={2}
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            minLength={10}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-3 rounded-md font-medium text-white flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <HiOutlineMail className="text-lg" /> {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Direct Email and Social Links */}
        <div className="mt-8 space-y-4">
          <p className="text-sm text-gray-400">
            Or email me at{" "}
            <a
              href="mailto:balavardhanpula@gmail.com"
              className="text-purple-400 underline hover:text-white transition"
            >
              balavardhanpula@gmail.com
            </a>
          </p>
          <div className="flex justify-center gap-6 text-2xl text-gray-400">
            <motion.a
              href="https://github.com/vardhan12178?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#ffffff" }}
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#ffffff" }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://wa.me/918688412181"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#ffffff" }}
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to Top"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 p-3 rounded-full text-white shadow-md z-50"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </section>
  );
}