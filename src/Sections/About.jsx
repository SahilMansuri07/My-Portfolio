import { ABOUT_TEXT } from "../constant";

export default function About() {

  return (
    <section id="about" className="max-w-5xl mx-auto p-6 h-70">
      <h2 className="text-3xl bg-gradient-to-r from-purple-600 to-amber-600 text-transparent bg-clip-text  font-semibold mb-4 text-center">About Me</h2>
      <p className="p-15 text-neutral-100"> {ABOUT_TEXT}</p>
    </section>
  )
}