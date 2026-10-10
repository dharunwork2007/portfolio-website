import { FileText, ChevronDown } from "lucide-react";

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

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center">
      {/* Background grid */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        Open to opportunities
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
        Hi, I&apos;m{" "}
        <span className="text-primary text-glow">Dharun D S</span>
      </h1>
      <h2 className="text-xl md:text-3xl text-slate-300 font-medium mb-6">
        Instrumentation &amp; Control Engineer
      </h2>
      <p className="max-w-2xl text-slate-400 text-lg md:text-xl mb-10">
        Passionate about bridging the gap between hardware and software. Specializing in Automation,
        IoT, Embedded Systems, and Control Loops at{" "}
        <span className="text-slate-300 font-medium">PSG iTech</span>.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          id="hero-explore-btn"
          className="px-6 py-3 bg-primary text-slate-900 font-semibold rounded-lg hover:bg-[#00d0e0] transition-all duration-200 flex items-center gap-2 box-glow hover:scale-105"
        >
          Explore Projects
        </a>
        <a
          href="/resume.pdf"
          id="hero-resume-btn"
          className="px-6 py-3 border border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary/10 transition-all duration-200 flex items-center gap-2 hover:scale-105"
        >
          <FileText size={20} /> Resume
        </a>
        <a
          href="https://github.com/dharunwork2007"
          target="_blank"
          rel="noopener noreferrer"
          id="hero-github-btn"
          className="p-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-200 hover:scale-105"
          aria-label="GitHub"
        >
          <GithubIcon size={24} />
        </a>
        <a
          href="https://linkedin.com/in/dharunds"
          target="_blank"
          rel="noopener noreferrer"
          id="hero-linkedin-btn"
          className="p-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-200 hover:scale-105"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={24} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce text-slate-500">
        <a href="#skills" aria-label="Scroll to skills">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
