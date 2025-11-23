"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowUp, 
  Check, 
  Copy,
  MessageSquare
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", subject: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [copied, setCopied] = useState(false);

  // --- Scroll Detection ---
  useEffect(() => {
    const onScroll = () => setShowScrollToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Replace with your actual Formspree ID if different
      const res = await fetch("https://formspree.io/f/mgvagoen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio Contact: ${formData.subject || "New Message"}`, 
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", subject: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("balavardhanpula@gmail.com");
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-zinc-950 py-24 text-zinc-100">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-space text-4xl font-bold text-white sm:text-5xl">
            Let's <span className="text-indigo-400">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Currently actively interviewing for <span className="text-white font-medium">MERN Stack</span> roles. 
            Have a project or job opportunity? Let's discuss.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* LEFT: Contact Info & Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Email Card */}
            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-indigo-500/50 hover:bg-zinc-900">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-zinc-800 p-3 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-space text-lg font-bold text-white">Email Me</h3>
                    <p className="text-sm text-zinc-400">For interviews & inquiries</p>
                  </div>
                </div>
                <button 
                  onClick={copyEmail}
                  className="rounded-full border border-zinc-700 p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                  aria-label="Copy Email"
                >
                  {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                </button>
              </div>
              <p className="mt-6 font-mono text-zinc-300">balavardhanpula@gmail.com</p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://linkedin.com/in/bala-vardhan-pula-753b011b9/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-zinc-900"
              >
                <Linkedin size={32} className="text-zinc-400 group-hover:text-[#0077B5] transition-colors" />
                <span className="font-medium text-zinc-300">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/vardhan12178" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-zinc-900"
              >
                <Github size={32} className="text-zinc-400 group-hover:text-white transition-colors" />
                <span className="font-medium text-zinc-300">GitHub</span>
              </a>
            </div>

             {/* WhatsApp/Direct */}
             <a 
                href="https://wa.me/918688412181" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 text-sm text-zinc-400 transition-colors hover:text-green-400 hover:border-green-900/50"
              >
                <MessageSquare size={16} /> Prefer WhatsApp? <span className="underline decoration-dotted underline-offset-4">Chat directly</span>
             </a>
          </motion.div>

          {/* RIGHT: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hr@company.com"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Regarding MERN Opportunity..."
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or project..."
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                ) : (
                  <>
                    Send Message <Send size={18} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 rounded-full bg-indigo-600 p-3 text-white shadow-xl transition-all hover:bg-indigo-700 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}