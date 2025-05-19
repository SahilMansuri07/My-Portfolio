import { PROJECTS } from "../constant";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl p-8 font-semibold flex items-center  bg-gradient-to-r from-rose-800 to-rose-200 text-transparent bg-clip-text justify-center mb-4">Projects</h2>
      <div className="p-4 ">
        {PROJECTS.map((project , index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-between lg:justify-center gap-15">
              <div className="w-full sm:w-1/4">
              <p className="mb-2 text-sm text-purple-400">{project.year}</p>
              <span className="mb-2 text-sm text-purple-400">{project.month}</span>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
              <p className="mb-2  text-sm text-neutral-300">{project.title}</p>
              <h6 className="mb-2 pt-3 font-semibold text-neutral-200"> {project.description}</h6>
              <span className="mb-2 font-semibold pt-4 text-blue-400  "> Developed At -  {project.At}</span>
              </div>
            </div>
        ))}
      </div>
    </section>
  )
}