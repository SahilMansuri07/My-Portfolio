import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-white py-8 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-4">
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-xl font-bold bg-gradient-to-r from-amber-200 via-fuchsia-200 to-violet-300 text-transparent bg-clip-text">
            Sahil Mansuri
          </span>
          <span className="text-xs text-white/80 mt-1">
            Full Stack Developer & UI Enthusiast
          </span>
        </div>
        <div className="flex gap-5 text-lg mt-3 sm:mt-0">
          <a
            href="https://github.com/SahilMansuri07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mansuri-sahil2107/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/SahilMansuri07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="mt-5 text-xs text-center text-white/60">
        &copy; {new Date().getFullYear()} Sahil Mansuri. All rights reserved.
      </div>
    </footer>
  );
}
