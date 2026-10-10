import Hero from "@/components/Hero";
import TechMatrix from "@/components/TechMatrix";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Academics from "@/components/Academics";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import { getSortedProjectsData } from "@/lib/projects";

export default async function Home() {
  const projects = await getSortedProjectsData();

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        <TechMatrix />

        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        <ProjectsShowcase projects={projects} />

        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        <Academics />

        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        <Contact />
      </main>

      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800">
        <p>
          Built with ⚡ by{" "}
          <span className="text-slate-400 font-medium">Dharun D S</span> · PSG
          iTech
        </p>
      </footer>
    </>
  );
}
