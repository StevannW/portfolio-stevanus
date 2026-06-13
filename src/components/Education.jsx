import universityLogo from "../assets/images/TelU.jpg";

function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 font-medium uppercase tracking-widest">
            Academic Background
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Education
          </h2>

        </div>

        {/* Education Card */}

        <div
          className="
          bg-slate-800/50
          backdrop-blur-xl
          border
          border-slate-700
          rounded-3xl
          p-8
          md:p-10
          hover:border-cyan-500/50
          transition-all
          duration-300
          "
        >

          <div className="flex flex-col md:flex-row gap-8">

            {/* Logo */}

            <div className="flex justify-center md:justify-start">

              <div
                className="
                w-24
                h-24
                rounded-2xl
                bg-white
                p-3
                flex
                items-center
                justify-center
                "
              >
                <img
                  src={universityLogo}
                  alt="University Logo"
                  className="w-full h-full object-contain"
                />
              </div>

            </div>

            {/* Content */}

            <div className="flex-1">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    Telkom University
                  </h3>

                  <p className="text-cyan-400 mt-1">
                    Bachelor of Computer Engineering
                  </p>

                </div>

                <div
                  className="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  rounded-xl
                  bg-cyan-500/10
                  text-cyan-400
                  font-medium
                  "
                >
                  2022 - Present
                </div>

              </div>

              {/* GPA */}

              <div className="mt-6 flex flex-wrap gap-4">

                <div
                  className="
                  px-4
                  py-2
                  rounded-xl
                  bg-slate-700
                  text-slate-200
                  "
                >
                  GPA: 3.67 / 4.00
                </div>

                <div
                  className="
                  px-4
                  py-2
                  rounded-xl
                  bg-green-500/10
                  text-green-400
                  "
                >
                  Current Student
                </div>

              </div>

              {/* Description */}

              <p className="mt-6 text-slate-300 leading-8">
                Focused on software engineering, web development,
                networking, and Internet of Things.
                Actively involved in academic and personal projects
                related to full-stack development and automation systems.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;