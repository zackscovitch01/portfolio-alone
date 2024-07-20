"use client";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex flex-col gap-4 mt-10">
      <a href="#about">ABOUT</a>
      <a href="#experience">EXPERIENCE</a>
      <a href="#projects">PROJECTS</a>
    </nav>
  );
};
export default Navbar;
