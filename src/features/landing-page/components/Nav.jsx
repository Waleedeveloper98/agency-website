import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="w-full max-w-[1280px] mx-auto bg-[#FAFAFA] px-4 py-4 md:px-16 border-b border-black/5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl flex flex-col items-center leading-none uppercase">
          <a className="font-bold text-black" href="#">
            Zainx
          </a>
          <a className="text-lg font-light text-black/70" href="#">
            Media
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 items-center">
          {links.map((link) => (
            <li key={link}>
              <Link
                smooth={true}
                duration={500}
                to={link.toLowerCase()}
                className="text-black cursor-pointer hover:text-black transition font-['Inter'] duration-200 relative group"
              >
                {link}

                {/* Highlight Underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-(--primary-color) transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 text-black"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 bg-white rounded-2xl py-6 shadow-sm border border-black/5">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-black hover:text-black transition relative group"
              >
                {link}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#b8ff03] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
