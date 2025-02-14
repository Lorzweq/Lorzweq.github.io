import { useState, useEffect } from "react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introduction", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-20 text-center py-8 box-border shadow-md">
      <div className="flex w-full flex-wrap items-center justify-between px-3 overflow-x-auto">
        {/* Navbar Links */}
        <div className="flex flex-row w-full items-center justify-center space-x-2 lg:space-x-8">
          <a
            href="#introduction"
            className={`text-neutral-500 font-semibold rounded px-2 py-2 mx-2 hover:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-100 hover:bg-blue-400 transition-colors ease-in-out duration-300 ${
              activeSection === "introduction"
                ? "bg-blue-400 border border-blue-500"
                : "bg-gray-700 border border-blue-600"
            }`}
          >
            Introduction
          </a>
          <a
            href="#about"
            className={`text-neutral-500 font-semibold rounded px-2 py-2 mx-2 hover:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-100 hover:bg-blue-400 transition-colors ease-in-out duration-300 ${
              activeSection === "about"
                ? "bg-blue-400  border border-blue-500"
                : "bg-gray-700 border border-blue-600"
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`text-neutral-500 font-semibold rounded px-2 py-2 mx-2 hover:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-100 hover:bg-blue-400 transition-colors ease-in-out duration-300 ${
              activeSection === "projects"
                ? "bg-blue-400  border border-blue-500"
                : "bg-gray-700 border border-blue-600"
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`text-neutral-500 font-semibold rounded px-2 py-2 mx-2 hover:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-100 hover:bg-blue-400 transition-colors ease-in-out duration-300 ${
              activeSection === "contact"
                ? "bg-blue-400  border border-blue-500"
                : "bg-gray-700 border border-blue-600"
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
