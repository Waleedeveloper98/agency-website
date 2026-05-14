import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll"; // ← import scroller

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Testimonials",
    "FAQ",
    "Team",
  ];

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: -70, // adjust based on your navbar height
    });
  };

  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      // Already on home → scroll directly
      scrollToSection(section);
    } else {
      // On another page → navigate home first, then scroll
      navigate("/");
      setTimeout(() => {
        scrollToSection(section);
      }, 100); // wait for home page to mount
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full max-w-[1280px] mx-auto bg-[#FAFAFA] px-4 py-4 md:px-16 border-b border-black/5 md:py-2.5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <RouterLink
          to="/"
          className="text-xl flex flex-col items-center leading-none uppercase"
        >
          <span className="font-bold text-black">Zainx</span>
          <span className="text-lg font-light text-black/70">Media</span>
        </RouterLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNavigation(link.toLowerCase())}
                className="text-black cursor-pointer hover:text-black transition font-['Inter'] duration-200 relative group"
              >
                {link}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[--primary-color] transition-all duration-300 group-hover:w-full"></span>
              </button>
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
              <button
                onClick={() => handleNavigation(link.toLowerCase())}
                className="text-lg text-black hover:text-black transition relative group"
              >
                {link}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#b8ff03] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
