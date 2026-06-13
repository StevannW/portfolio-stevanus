import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "organization", label: "Organization" },
    { id: "skills", label: "Skills" },
  ];

  const handleClick = (id) => {
    setActive(id);
    setIsOpen(false); // close menu after click (mobile UX)
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg"
        >
          SW
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {menus.map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              onClick={() => handleClick(menu.id)}
              className={`
                px-5 py-3 rounded-[20px] text-sm font-medium transition-all duration-300
                ${
                  active === menu.id
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              {menu.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-3 px-6 py-3 rounded-[20px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            Contact Me
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-4 space-y-2">
          {menus.map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              onClick={() => handleClick(menu.id)}
              className={`
                block px-4 py-3 rounded-xl text-sm font-medium transition
                ${
                  active === menu.id
                    ? "bg-cyan-500 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              {menu.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-center"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;