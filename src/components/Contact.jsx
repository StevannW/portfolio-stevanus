import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* EMAIL */}
          <a
            href="mailto:stevanuswahyu2707@gmail.com"
            className="contact-card"
          >
            <FaEnvelope className="text-cyan-400 text-2xl shrink-0" />

            <div className="min-w-0">
              <p className="text-slate-400 text-sm">Email</p>
              <p className="text-white font-medium break-all text-sm md:text-base">
                stevanuswahyu2707@gmail.com
              </p>
            </div>
          </a>

          {/* PHONE / WA */}
          <a
            href="https://wa.me/6282225460996"
            className="contact-card"
          >
            <FaPhone className="text-cyan-400 text-2xl shrink-0" />

            <div className="min-w-0">
              <p className="text-slate-400 text-sm">Phone</p>
              <p className="text-white font-medium">
                +62 82225460996
              </p>
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/stevanuswahyu"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="text-cyan-400 text-2xl shrink-0" />

            <div className="min-w-0">
              <p className="text-slate-400 text-sm">LinkedIn</p>
              <p className="text-white font-medium break-all text-sm md:text-base">
                linkedin.com/in/stevanuswahyu
              </p>
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/StevannW"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub className="text-cyan-400 text-2xl shrink-0" />

            <div className="min-w-0">
              <p className="text-slate-400 text-sm">GitHub</p>
              <p className="text-white font-medium break-all text-sm md:text-base">
                github.com/StevannW
              </p>
            </div>
          </a>

        </div>
      </div>

      {/* reusable styles */}
      <style>{`
        .contact-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: 1.5rem;
          border: 1px solid rgb(30 41 59);
          background: rgb(2 6 23);
          transition: all 0.3s ease;
          min-width: 0;
        }

        .contact-card:hover {
          border-color: rgba(34, 211, 238, 0.4);
          transform: translateY(-4px);
        }
      `}</style>

    </section>
  );
}

export default Contact;