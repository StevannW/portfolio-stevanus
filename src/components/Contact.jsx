import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] font-medium">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Contact Me
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Feel free to reach out for collaboration,
            internship opportunities, research projects,
            or technology discussions.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}

          <a
            href="https://mail.google.com/mail/?view=cm&to=stevanuswahyu2707@gmail.com"
            className="
            bg-slate-950
            border
            border-slate-800
            rounded-3xl
            p-6
            flex
            items-center
            gap-5
            hover:border-cyan-500/40
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-cyan-500/10
              flex
              items-center
              justify-center
              "
            >
              <FaEnvelope className="text-cyan-400 text-2xl" />
            </div>

            <div>
              <p className="text-slate-400 text-sm">
                Email
              </p>

              <p className="text-white font-medium">
                stevanuswahyu2707@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}

          <a
            href="https://wa.me/6282225460996"
            className="
            bg-slate-950
            border
            border-slate-800
            rounded-3xl
            p-6
            flex
            items-center
            gap-5
            hover:border-cyan-500/40
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-cyan-500/10
              flex
              items-center
              justify-center
              "
            >
              <FaPhone className="text-cyan-400 text-2xl" />
            </div>

            <div>
              <p className="text-slate-400 text-sm">
                Phone
              </p>

              <p className="text-white font-medium">
                +62 82225460996
              </p>
            </div>
          </a>

          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="
            bg-slate-950
            border
            border-slate-800
            rounded-3xl
            p-6
            flex
            items-center
            gap-5
            hover:border-cyan-500/40
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-cyan-500/10
              flex
              items-center
              justify-center
              "
            >
              <FaLinkedin className="text-cyan-400 text-2xl" />
            </div>

            <div>
              <p className="text-slate-400 text-sm">
                LinkedIn
              </p>

              <p className="text-white font-medium">
                https://www.linkedin.com/in/stevanuswahyu/
              </p>
            </div>
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            className="
            bg-slate-950
            border
            border-slate-800
            rounded-3xl
            p-6
            flex
            items-center
            gap-5
            hover:border-cyan-500/40
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-cyan-500/10
              flex
              items-center
              justify-center
              "
            >
              <FaGithub className="text-cyan-400 text-2xl" />
            </div>

            <div>
              <p className="text-slate-400 text-sm">
                GitHub
              </p>

              <p className="text-white font-medium">
                https://github.com/StevannW
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;