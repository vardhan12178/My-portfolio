"use client";

import { useState, useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { FaArrowUp, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiClipboardCopy, HiCheck } from "react-icons/hi";
import { motion } from "framer-motion";

type FormState = { name: string; email: string; message: string; subject?: string; honeypot?: string };

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "", subject: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [copied, setCopied] = useState(false);

  const msgLen = formData.message.trim().length;
  const msgMin = 10;
  const msgMax = 1200;

  const validate = useMemo(
    () => (values: FormState) => {
      const e: typeof errors = {};
      if (!values.name.trim()) e.name = "Please enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) e.email = "Enter a valid email.";
      if (values.message.trim().length < msgMin) e.message = `Please write at least ${msgMin} characters.`;
      if (values.message.trim().length > msgMax) e.message = `Please keep it under ${msgMax} characters.`;
      return e;
    },
    []
  );

  useEffect(() => {
    const onScroll = () => setShowScrollToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (name === "message") setSent(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Basic bot check (honeypot)
    if ((formData as any)["honeypot"]) {
      toast.error("Submission blocked.");
      return;
    }

    const v = validate(formData);
    setErrors(v);
    if (Object.keys(v).length) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mgvagoen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: formData.subject || "Portfolio Contact",
          _subject: formData.subject || "Portfolio Contact", // Formspree friendly
          _gotcha: formData.honeypot || "", // honeypot
        }),
      });

      if (res.ok) {
        toast.success("Message sent. I’ll get back to you soon!");
        setSent(true);
        setFormData({ name: "", email: "", message: "", subject: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("balavardhanpula@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      toast.success("Email copied");
    } catch {
      toast.error("Couldn’t copy. Long-press to copy manually.");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen scroll-mt-20 bg-gray-950 px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold text-purple-300 md:text-5xl">Contact</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-300">
          Have a question or want to work together? 
        </p>

        {/* Success panel */}
        {sent && (
          <div className="mx-auto mt-6 rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            Thanks! Your message has been sent. I’ll get back to you soon.
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-8 space-y-4 rounded-xl border border-white/10 bg-gray-900/60 p-6 text-left shadow-lg backdrop-blur"
          aria-describedby="contact-hint"
        >
          <p id="contact-hint" className="sr-only">
            All fields are required.
          </p>

          {/* Honeypot (hidden from users) */}
          <input
            type="text"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            onChange={handleChange}
          />

          <div>
            <label htmlFor="name" className="block text-sm text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 w-full rounded border bg-gray-800 px-4 py-3 text-white outline-none transition focus:ring-2 ${
                errors.name ? "border-red-500 focus:ring-red-500/60" : "border-gray-700 focus:ring-purple-500/60"
              }`}
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full rounded border bg-gray-800 px-4 py-3 text-white outline-none transition focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-500/60" : "border-gray-700 focus:ring-purple-500/60"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm text-gray-300">
              Subject <span className="text-gray-500">(optional)</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/60"
              placeholder="Project inquiry, collaboration, etc."
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="message" className="block text-sm text-gray-300">
                Message
              </label>
              <span className={`text-xs ${msgLen > msgMax ? "text-red-400" : "text-gray-400"}`}>
                {msgLen}/{msgMax}
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              minLength={msgMin}
              maxLength={msgMax + 1} // prevent crazy typing
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 w-full resize-y rounded border bg-gray-800 px-4 py-3 text-white outline-none transition focus:ring-2 ${
                errors.message ? "border-red-500 focus:ring-red-500/60" : "border-gray-700 focus:ring-purple-500/60"
              }`}
              placeholder="Tell me about your idea, timeline, and goals…"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-3 font-medium text-white transition hover:from-purple-700 hover:to-purple-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Sending…
              </>
            ) : (
              <>
                <HiOutlineMail className="text-lg" /> Send Message
              </>
            )}
          </button>
        </form>

        {/* Contact cards */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          <a
            href="mailto:balavardhanpula@gmail.com"
            className="group rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-gray-300 transition hover:border-purple-400 hover:bg-purple-600/10"
          >
            <div className="flex items-center gap-2 text-white">
              <HiOutlineMail />
              <span className="font-medium">Email</span>
            </div>
            <p className="mt-1 break-all text-xs">balavardhanpula@gmail.com</p>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                copyEmail();
              }}
              className="mt-2 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-200 transition hover:bg-white/10"
              aria-label="Copy email"
              title="Copy email"
            >
              {copied ? <HiCheck /> : <HiClipboardCopy />} {copied ? "Copied" : "Copy"}
            </button>
          </a>

          <a
            href="https://github.com/vardhan12178?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-gray-300 transition hover:border-purple-400 hover:bg-white/10"
          >
            <div className="flex items-center gap-2 text-white">
              <FaGithub />
              <span className="font-medium">GitHub</span>
            </div>
            <p className="mt-1 text-xs">See my code & contributions</p>
          </a>

          <a
            href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-gray-300 transition hover:border-purple-400 hover:bg-white/10"
          >
            <div className="flex items-center gap-2 text-white">
              <FaLinkedin />
              <span className="font-medium">LinkedIn</span>
            </div>
            <p className="mt-1 text-xs">Let’s connect professionally</p>
          </a>
        </div>

        {/* WhatsApp (optional) */}
        <div className="mt-4">
          <a
            href="https://wa.me/918688412181"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 underline-offset-2 hover:text-gray-200 hover:underline"
          >
            Prefer WhatsApp? Ping me here →
          </a>
        </div>
      </motion.div>

      {/* Scroll to Top */}
      {showScrollToTop && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to Top"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-purple-600 p-3 text-white shadow-lg outline-none transition hover:bg-purple-700 focus:ring-2 focus:ring-purple-400/70"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </section>
  );
}
