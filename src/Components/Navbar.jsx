export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex items-center ">
      <nav className=" text-white p-4 flex px-8 items-center justify-between  fixed w-full top-0 z-50 " >
        <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" /> */}
        <h1 className="text-2xl  bg-gradient-to-r from-lime-600 to-amber-600 text-transparent bg-clip-text font-bold">Sahil Mansuri</h1>
        </div>
        <ul className="flex justify-center gap-6  bg-gradient-to-r from-lime-600 to-amber-600 text-transparent bg-clip-text  ">
          <li onClick ={() => scrollToSection("home")} className="hover:font-bold"><a href="#home">Home</a></li>
          <li onClick ={() => scrollToSection("About")} className="hover:font-bold"><a href="#about">About Me</a></li>
          <li onClick ={() => scrollToSection("Skills")} className="hover:font-bold"><a href="#skills">Skills</a></li>
          <li onClick ={() => scrollToSection("Projects")} className="hover:font-bold"><a href="#projects">Projects</a></li>
          <li onClick ={() => scrollToSection("Contact")} className="hover:font-bold"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}