import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 text-white backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl bg-gradient-to-r from-lime-600 to-amber-600 text-transparent bg-clip-text font-bold">
          Sahil Mansuri
        </h1>

        
        <ul className="hidden md:flex gap-6 bg-gradient-to-r from-lime-600 to-amber-600 text-transparent bg-clip-text">
          <li onClick={() => scrollToSection("home")} className="hover:font-bold cursor-pointer">Home</li>
          <li onClick={() => scrollToSection("about")} className="hover:font-bold cursor-pointer">About Me</li>
          <li onClick={() => scrollToSection("skills")} className="hover:font-bold cursor-pointer">Skills</li>
          <li onClick={() => scrollToSection("projects")} className="hover:font-bold cursor-pointer">Projects</li>
          <li onClick={() => scrollToSection("contact")} className="hover:font-bold cursor-pointer">Contact</li>
        </ul>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black w-full px-6 pb-4">
          <ul className="flex flex-col gap-4 mt-2 text-white text-lg">
            <li onClick={() => scrollToSection("home")} className="hover:font-bold cursor-pointer">Home</li>
            <li onClick={() => scrollToSection("about")} className="hover:font-bold cursor-pointer">About Me</li>
            <li onClick={() => scrollToSection("skills")} className="hover:font-bold cursor-pointer">Skills</li>
            <li onClick={() => scrollToSection("projects")} className="hover:font-bold cursor-pointer">Projects</li>
            <li onClick={() => scrollToSection("contact")} className="hover:font-bold cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
