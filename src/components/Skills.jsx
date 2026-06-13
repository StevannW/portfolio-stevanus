import {
  FaReact,
  FaLaravel,
  FaPhp,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiNodered,
  SiMqtt,
  SiEspressif,
  SiDotnet,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { FaMicrochip } from "react-icons/fa";

function Skills() {
  const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: ".NET", icon: <SiDotnet /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },

  {
    title: "IoT & Automation",
    skills: [
      { name: "Arduino", icon: <FaMicrochip /> },
      { name: "ESP32", icon: <SiEspressif /> },
      { name: "MQTT", icon: <SiMqtt /> },
      { name: "Node-RED", icon: <SiNodered /> },
    ],
  },

  {
    title: "Tools & Productivity",
    skills: [
      { name: "Microsoft Word", icon: <FaMicrosoft /> },
      { name: "Microsoft Excel", icon: <FaMicrosoft /> },
      { name: "Microsoft PowerPoint", icon: <FaMicrosoft /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] font-medium">
            Technical Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Skills
          </h2>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {skillGroups.map((group, index) => (

            <div
              key={index}
              className="
              bg-slate-900/50
              backdrop-blur-xl
              border
              border-slate-800
              rounded-3xl
              p-6
              hover:border-cyan-500/40
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >

              <h3 className="text-xl font-bold text-white mb-6">
                {group.title}
              </h3>

              <div className="space-y-3">

                {group.skills.map((skill, idx) => (

                  <div
                    key={idx}
                    className="
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-xl
                    bg-slate-800/50
                    hover:bg-slate-800
                    transition-all
                    "
                  >

                    <div
                      className="
                      text-cyan-400
                      text-2xl
                      "
                    >
                      {skill.icon}
                    </div>

                    <span className="text-slate-200 font-medium">
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;