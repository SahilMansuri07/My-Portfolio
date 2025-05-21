import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaReact size={40} />, label: "React JS", level: 85 },
    { icon: <FaNodeJs size={40} />, label: "Node JS", level: 80 },
    { icon: <FaHtml5 size={40} />, label: "HTML5", level: 90 },
    { icon: <FaCss3Alt size={40} />, label: "CSS3", level: 85 },
    { icon: <FaPython size={40} />, label: "Python", level: 75 },
    { icon: <SiJavascript size={40} />, label: "JavaScript", level: 90},
    { icon: <SiTailwindcss size={40} />, label: "Tailwind CSS", level: 82 },
    { icon: <SiExpress size={40} />, label: "Express.js", level: 78 },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-semibold mb-10 bg-gradient-to-r from-purple-600 to-amber-600 text-transparent bg-clip-text">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-neutral-800 p-4 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 hover:bg-neutral-700"
          >
            <div className="text-white mb-2">{skill.icon}</div>
            <span className="text-sm text-white font-medium mb-2">
              {skill.label}
            </span>

            <div className="w-full h-2 bg-neutral-600 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-amber-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-xs text-neutral-300 mt-1">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
