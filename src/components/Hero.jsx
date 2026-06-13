import profileImage from "../assets/images/image.png";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <p className="text-cyan-400 font-medium tracking-widest uppercase mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Stevanus
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Wahyu
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-400 mt-6">
              Computer Engineer | Tech Enthusiast
            </h2>

            {/* SOCIAL ICONS */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-6">
              <a
                href="https://github.com/StevannW"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl bg-slate-900/50 backdrop-blur-xl border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <FaGithub size={18} className="text-slate-300 group-hover:text-cyan-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/stevanuswahyu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl bg-slate-900/50 backdrop-blur-xl border border-slate-700 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
              >
                <FaLinkedin size={18} className="text-slate-300 group-hover:text-blue-400" />
              </a>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 text-slate-300 leading-7 max-w-xl mx-auto lg:mx-0">
              A Computer Engineering student at Telkom University with academic exposure in Web Development, Internet of Things, Networking, and Software Engineering, currently developing skills and gaining experience in building practical and efficient technology solutions.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href="/cv/Stevanus_Wahyu_CV.pdf"
                download
                className="w-full sm:w-auto px-8 py-4 rounded-[20px] bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaDownload size={16} />
                Download CV
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-[20px] border border-cyan-500 text-white hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Contact Me
              </a>

            </div>
          </div>

          {/* RIGHT IMAGE (HIDDEN ON MOBILE) */}
          <div className="hidden lg:flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl" />

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-6 h-6 rounded-full bg-cyan-400 animate-pulse" />
              <div className="absolute top-10 -right-5 w-4 h-4 bg-purple-500 rotate-45" />
              <div className="absolute bottom-10 -left-5 w-5 h-5 rounded-full bg-indigo-500" />
              <div className="absolute -bottom-4 right-10 w-6 h-6 border-2 border-cyan-400 rotate-45" />

              {/* IMAGE CARD */}
              <div className="relative bg-slate-800/50 backdrop-blur-xl p-4 rounded-[40px] border border-slate-700 shadow-2xl">

                <div className="w-72 h-72 md:w-96 md:h-96 rounded-[30px] overflow-hidden">

                  <img
                    src={profileImage}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;