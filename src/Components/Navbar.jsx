import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  { icon: <FaGithub size={22} />, href: "https://github.com/SahilMansuri07", label: "GitHub" },
  { icon: <FaTwitter size={22} />, href: "https://twitter.com/SahilMansuri07", label: "Twitter" },
  { icon: <FaLinkedin size={22} />, href: "https://www.linkedin.com/in/mansuri-sahil2107/", label: "LinkedIn" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu after click
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 text-white backdrop-blur-lg shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 text-transparent bg-clip-text">
          Sahil Mansuri
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-2 py-1 rounded cursor-pointer font-semibold hover:text-cyan-300 transition"
              >
                {link.label}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 ml-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/90 text-white px-8 py-6 transition-all duration-300 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 text-transparent bg-clip-text">
            Sahil Mansuri
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes size={32} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xl font-semibold px-2 py-2 rounded cursor-pointer hover:text-cyan-300 transition"
            >
              {link.label}
            </li>
          ))}
        </ul>
        <div className="flex gap-6 mt-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-300 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}