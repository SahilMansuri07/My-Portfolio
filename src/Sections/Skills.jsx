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
    { icon: <FaReact size={40} />, label: "React JS" },
    { icon: <FaNodeJs size={40} />, label: "Node JS" },
    { icon: <FaHtml5 size={40} />, label: "HTML5" },
    { icon: <FaCss3Alt size={40} />, label: "CSS3" },
    { icon: <FaPython size={40} />, label: "Python" },
    { icon: <SiJavascript size={40} />, label: "JavaScript" },
    { icon: <SiTailwindcss size={40} />, label: "Tailwind CSS" },
    { icon: <SiExpress size={40} />, label: "Express.js" },
  ];

  return (
    <section
      id="skills"
      className="max-w-3xl mx-auto p-6 flex flex-col items-center text-center"
    >
    
      <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-amber-600 text-transparent bg-clip-text ">Skills</h2>
      
        <div className="grid grid-cols-2  p-15 sm:grid-cols-4 gap-8  justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div>{skill.icon}</div>
              <span className="mt-2 text-sm">{skill.label}</span>
            </div>
          ))}
        </div>
     
    </section>
  );
}
