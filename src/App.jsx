import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans ">

      <div class="relative h-full w-full bg-black">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      
      <main className="relative z-10">
        <Navbar />
        <section
          id="home"
          className="  mx-auto px-4 py-16 border-b border-fuchsia-400/30"
        >
          <Home />
        </section>

        <section
          id="about"
          className="  mx-auto px-4 py-12 border-b border-violet-400/40"
        >
          <About />
        </section>

        <section
          id="skills"
          className="mx-auto px-4 py-12 border-b border-amber-400/40"
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="max-w-8xl mx-auto min-h-max h-120 px-4 py-16 border-b border-fuchsia-400/30"
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="min-h-auto px-4 mx-auto py-16 border-b border-violet-400/30"
        >
          <Contact />
        </section>
        
        <Footer />

        </main>
    </div>
    </div>
  );
}
