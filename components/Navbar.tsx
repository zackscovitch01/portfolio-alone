"use client";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav a");
    const sectionsEls = document.querySelectorAll(".section");
    window.addEventListener("scroll", () => {
      (Array.from(sectionsEls) as HTMLElement[]).forEach(
        (sectionEl: HTMLElement) => {
          if (window.scrollY >= sectionEl.offsetTop - 120) {
            setCurrentSection(sectionEl.id);
            console.log(currentSection);
          }
        }
      );
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }, [currentSection]);

  const handleActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <nav className="nav hidden lg:flex lg:flex-col gap-4 mt-16">
      <a
        className="group flex items-center py-3 active"
        href="#about"
        onClick={handleActive}
      >
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          About
        </span>
      </a>
      <a
        className="group flex items-center py-3"
        href="#experience"
        onClick={handleActive}
      >
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          Experience
        </span>
      </a>
      <a
        className="group flex items-center py-3"
        href="#projects"
        onClick={handleActive}
      >
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          Projects
        </span>
      </a>
    </nav>
  );
};
export default Navbar;
