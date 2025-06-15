import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans bg-[#181526]">
      {/* Beautiful background: purple/fuchsia/amber/indigo (no cyan) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(90%_120%_at_50%_10%,#181526_60%,#a78bfa_90%,#f472b6_100%)] opacity-95 pointer-events-none"></div>
      {/* Subtle blurred glows for modern feel (no cyan) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-10 left-1/3 w-40 h-40 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-14 right-1/4 w-56 h-56 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-amber-400/15 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <main className="relative z-10">
        <Navbar />
        <section id="home" className="px-4 py-16 border-b border-fuchsia-400/30">
          <Home />
        </section>

        <section id="about" className="max-w-5xl mx-auto px-4 py-12 border-b border-violet-400/40">
          <About />
        </section>

        <section id="skills" className="max-w-5xl mx-auto px-4 py-12 border-b border-amber-400/40">
          <Skills />
        </section>

        <section id="projects" className="min-h-max h-120 px-4 py-16 border-b border-fuchsia-400/30">
          <Projects />
        </section>

        <section id="contact" className="min-h-auto px-4 py-16 border-b border-violet-400/30">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}