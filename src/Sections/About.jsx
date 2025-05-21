import { ABOUT_TEXT } from "../constant";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl bg-gradient-to-r from-purple-600 to-amber-600 text-transparent bg-clip-text font-semibold mb-8 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-12">
        <img
          src="https://avatars.githubusercontent.com/u/102119202?v=4"
          alt="Profile"
          className="rounded-full h-32 w-32 shadow-lg"
        />
        <p className="text-neutral-100 text-center md:text-left">
          {ABOUT_TEXT}
        </p>
      </div>
    </section>
  );
}
