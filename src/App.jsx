import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./sections/Contact"; 
export default function App() {
  return (
    <div className="relative min-h-screen text-white ">
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] pointer-events-none"></div>
      <main className="relative z-10">
        <Navbar />
        <section id="home" className=" px-4 py-16 border-b border-gray-700">
          <Home />
        </section>

        <section id="about" className="max-w-5xl mx-auto px-4 py-12 border-b border-gray-700">

          <About />
        </section>

       <section id="about" className="max-w-5xl mx-auto px-4 py-12 border-b border-gray-700">

          <Skills />
        </section>

        <section  id="Projects" className="min-h-max h-120 px-4 py-16 border-b border-gray-700">
          <Projects />
        </section>

        <section id="Contact" className="min-h-auto px-4 py-16 border-b border-gray-700">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
