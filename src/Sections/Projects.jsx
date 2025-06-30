import { PROJECTS } from "../constant";

export default function Projects() {
  return (
    <section id="projects" className="max-w-8xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl px-4 sm:px-8 py-6 font-semibold text-center bg-gradient-to-r from-rose-800 to-rose-200 text-transparent bg-clip-text">
        Projects
      </h2>

      <div className="grid grid-cols-1 mt-25 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Thumbnail + Hover Video */}
            <div className="relative group w-full h-44 sm:h-52 overflow-hidden">
              {/* Thumbnail */}
              <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Video on hover */}
              <video
                src={project.video}
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => e.target.pause()}
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              <p className="text-xs text-purple-400">
                {project.year} • {project.month}
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-white mt-1 mb-1">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline block mb-2"
              >
                🔗 LINK
              </a>
              <p className="text-sm text-neutral-300">{project.description}</p>
              <p className="mt-3 text-xs sm:text-sm font-medium text-blue-300">
                Developed At - {project.At}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
