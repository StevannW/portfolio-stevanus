import astraImage from "../assets/images/AJIBARU.jfif";
import eclImage from "../assets/images/evconnbaru.jfif";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "PT Astra Juoku Indonesia",
    role: "IT Intern",
    period: "Jun 2025 - Sept 2025",
    location: "Karawang, Indonesia",
    image: astraImage,
    description: [
      "Developed and digitalized the Manpower Request System, transforming a paper-based approval process into a centralized web application using Laravel. The system streamlined request submissions, approval workflows, and reporting, significantly improving operational efficiency and reducing manual paperwork.",
      "Designed and implemented an Employee Opinion Survey (EOS) platform for the Human Resources department using Laravel. The platform automated survey data collection, response management, and result analysis, replacing the previous Excel-based process that required manual data entry and calculations.",
      "Collaborated with HR and IT teams to gather requirements, improve business processes, perform testing, and ensure successful deployment of internal web applications."
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL"
    ],
  },
  {
    company: "Everything Connected Lab",
    role: "Teaching Assistant",
    period: "Feb 2025 - Mar 2026",
    location: "Telkom University",
    image: eclImage,
    description: [
      "Served as a Teaching Assistant for Computer Networking courses, assisting undergraduate students in understanding networking fundamentals, routing, switching, subnetting, and network troubleshooting concepts.",
      "Provided hands-on laboratory guidance, supervised practical sessions, evaluated assignments, and supported students in completing networking-related projects and experiments."
    ],
    technologies: [
      "Computer Networking",
      "Routing & Switching",
      "Cisco Packet Tracer",
        "Wireshark"
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] font-medium">
            Professional Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Work Experience
          </h2>

        </div>

        {/* Cards */}

        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
              bg-slate-900/50
              backdrop-blur-xl
              border
              border-slate-800
              rounded-3xl
              overflow-hidden
              hover:border-cyan-500/40
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >
              <div className="flex flex-col lg:flex-row">

                {/* Image */}

                <div
                  className="
                  lg:w-80
                  shrink-0
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  p-4
                  "
                >
                  <div
                    className="
                    w-full
                    aspect-video
                    rounded-2xl
                    overflow-hidden
                    bg-slate-700
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="
                      max-w-full
                      max-h-full
                      object-contain
                      transition-transform
                      duration-300
                      hover:scale-105
                      "
                    />
                  </div>
                </div>

                {/* Content */}

                <div className="flex-1 p-8">

                  <div className="flex flex-col lg:flex-row lg:justify-between gap-4">

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.company}
                      </h3>

                      <p className="text-cyan-400 text-lg mt-2">
                        {exp.role}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">

                      <div className="flex items-center gap-2 text-slate-300">
                        <FaCalendarAlt className="text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>

                      <div className="flex items-center gap-2 text-slate-400">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>

                    </div>

                  </div>

                  {/* Description */}

                  <div className="mt-6">
  <ul className="space-y-3">
    {exp.description.map((item, idx) => (
      <li
        key={idx}
        className="
        flex
        items-start
        gap-3
        text-slate-300
        leading-7
        "
      >
        <span className="mt-2 w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>

                  {/* Tech Stack */}

                  <div className="flex flex-wrap gap-3 mt-6">

                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="
                        px-4
                        py-2
                        rounded-xl
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        text-cyan-400
                        text-sm
                        font-medium
                        "
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;