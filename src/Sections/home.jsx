export default function Hero() {
  return (
    <section className="w-full min-h-screen text-white flex flex-col items-center justify-center px-4 pt-24 pb-16">
      {/* Profile Picture */}
      <img
        src="../../public/avatar.png"
        alt="Sahil Mansuri"
        className="h-32 w-32 rounded-full border-4 border-white shadow-lg mb-6"
      />

      {/* Headline */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold leading-tight mb-4">
        I'm <span className="text-purple-400">Sahil Mansuri</span>
        <br />
        <span className="bg-gradient-to-r from-fuchsia-400 to-amber-400 text-transparent bg-clip-text">
          Web Developer
        </span>
      </h1>

      {/* Description */}
      <p className="text-center text-sm text-white/90 max-w-md leading-relaxed mb-4">
        I'm a Full Stack Developer passionate about crafting beautiful, scalable,
        and high-performance web apps.
      </p>
      <p className="text-center text-sm text-white/80 max-w-md leading-relaxed">
        Open to opportunities across all roles—full stack, frontend, backend, or
        something new. Let’s build something great together!
      </p>

    <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-xs sm:max-w-none sm:justify-center">
  <a
    href="././public/SahilMansuriResume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition text-center"
  >
    Show CV
  </a>
  <a
    href="././public/SahilMansuriResume.pdf"
    download
    className="w-full sm:w-auto text-center bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
  >
    Download CV
  </a>
</div>

    </section>
  );
}
