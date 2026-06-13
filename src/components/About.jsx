import {
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] font-medium">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            About Me
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Computer Engineering Student &
              <span className="text-cyan-400">
                {" "}Technology Enthusiast
              </span>
            </h3>

            <p className="text-slate-300 leading-8 mb-6">
              I am a Computer Engineering student at Telkom University
              with a strong interest in Web Development, Internet of Things,
              Networking, and Software Engineering.
            </p>

            <p className="text-slate-400 leading-8">
              Throughout my academic and professional journey,
              I have developed enterprise web applications,
              IoT automation systems, and data-driven solutions.
              I enjoy transforming ideas into practical technology
              that solves real-world problems.
            </p>

            {/* Highlights */}

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                Web Development
              </span>

              <span className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                IoT Systems
              </span>

              <span className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                Computer Network
              </span>

              <span className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                Software Engineering
              </span>

            </div>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

  <div
    className="
    bg-slate-900/50
    border
    border-slate-800
    rounded-3xl
    p-6
    backdrop-blur-xl
    "
  >
    <h4 className="text-cyan-400 font-semibold mb-3">
      Web Development
    </h4>

    <p className="text-slate-400 leading-7 text-sm">
      Building responsive web applications using React,
      Laravel, .NET, and modern web technologies.
    </p>
  </div>

  <div
    className="
    bg-slate-900/50
    border
    border-slate-800
    rounded-3xl
    p-6
    backdrop-blur-xl
    "
  >
    <h4 className="text-cyan-400 font-semibold mb-3">
      Internet of Things
    </h4>

    <p className="text-slate-400 leading-7 text-sm">
      Developing smart monitoring and automation systems
      using ESP32, MQTT, Node-RED, and Home Assistant.
    </p>
  </div>

  <div
    className="
    bg-slate-900/50
    border
    border-slate-800
    rounded-3xl
    p-6
    backdrop-blur-xl
    "
  >
    <h4 className="text-cyan-400 font-semibold mb-3">
      Computer Networking
    </h4>

    <p className="text-slate-400 leading-7 text-sm">
      Understanding network infrastructure, routing,
      switching, and network troubleshooting concepts.
    </p>
  </div>

  <div
    className="
    bg-slate-900/50
    border
    border-slate-800
    rounded-3xl
    p-6
    backdrop-blur-xl
    "
  >
    <h4 className="text-cyan-400 font-semibold mb-3">
      Software Engineering
    </h4>

    <p className="text-slate-400 leading-7 text-sm">
      Designing scalable applications with clean
      architecture, maintainability, and user-focused
      solutions.
    </p>
  </div>

</div>

        </div>

      </div>
    </section>
  );
}

export default About;