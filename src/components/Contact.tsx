"use client";

import { useState } from "react";
import { Send, Mail, CheckCircle, AlertCircle } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Replace this with your real Formspree form ID ───────────────────────────
// 1. Go to https://formspree.io and sign up with dharunwork2007@gmail.com
// 2. Click "New Form", name it "Portfolio Contact"
// 3. Copy the form ID from the endpoint shown (e.g. "xpwzabcd")
// 4. Paste it below replacing YOUR_FORM_ID
const FORMSPREE_ID = "moejwwgw";
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-100">
        Get In <span className="text-secondary text-glow">Touch</span>
      </h2>
      <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
        Whether it&apos;s a project collaboration, internship opportunity, or just to say hi — my
        inbox is always open.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-5 bg-slate-800/60 border border-slate-700 rounded-xl hover:border-primary/50 transition-colors group">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email</p>
              <a
                href="mailto:dharunwork2007@gmail.com"
                className="text-slate-200 hover:text-primary transition-colors font-medium"
              >
                dharunwork2007@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 bg-slate-800/60 border border-slate-700 rounded-xl hover:border-primary/50 transition-colors group">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <GithubIcon size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">GitHub</p>
              <a
                href="https://github.com/dharunwork2007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-primary transition-colors font-medium"
              >
                github.com/dharunwork2007
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 bg-slate-800/60 border border-slate-700 rounded-xl hover:border-secondary/50 transition-colors group">
            <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
              <LinkedinIcon size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/dharun-ds-eng/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-secondary transition-colors font-medium"
              >
                linkedin.com/in/dharun-ds-eng
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 space-y-4"
        >
          <div>
            <label htmlFor="contact-name" className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors placeholder-slate-600"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors placeholder-slate-600"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors placeholder-slate-600 resize-none"
            />
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 text-secondary text-sm">
              <CheckCircle size={16} />
              Message sent! I&apos;ll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle size={16} />
              Something went wrong. Please try again.
            </div>
          )}

          <button
            id="contact-submit"
            type="submit"
            disabled={status === "sending"}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-slate-900 font-semibold rounded-lg hover:bg-[#00d0e0] transition-colors disabled:opacity-60 disabled:cursor-not-allowed box-glow"
          >
            {status === "sending" ? (
              <span className="animate-pulse">Sending…</span>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
