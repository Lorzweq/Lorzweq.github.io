import { useEffect, useState } from "react";

const navItems = [
  { id: "introduction", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const middleOfScreen = window.scrollY + window.innerHeight * 0.4;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) {
          continue;
        }

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (middleOfScreen >= sectionTop && middleOfScreen < sectionBottom) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
      <nav className="rounded-2xl border border-blue-700/60 bg-slate-950/70 backdrop-blur-md shadow-[0_8px_30px_rgba(2,6,23,0.55)]">
        <div className="flex items-center justify-between px-3 py-2 md:hidden">
          <p className="text-sm font-semibold tracking-wide text-cyan-100">
            Navigation
          </p>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-blue-700 text-slate-200 hover:border-cyan-300 hover:text-cyan-200 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="text-lg">{isMenuOpen ? "x" : "="}</span>
          </button>
        </div>

        <ul
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-1 p-2 md:p-1.5`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-lg px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-400 text-slate-950"
                      : "text-slate-200 bg-gradient-to-b from-blue-900/45 to-blue-950/50 hover:from-blue-800/70 hover:to-blue-900/80 hover:text-cyan-100 ring-1 ring-blue-700/30"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
