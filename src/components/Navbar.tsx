"use client";

import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#academics", label: "Academics" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight"
        >
          <Cpu size={22} className="text-primary" />
          <span>
            Dharun<span className="text-slate-300">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="px-4 py-2 border border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-primary transition-colors text-base font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="mt-2 px-4 py-2 border border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary/10 transition-colors text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
