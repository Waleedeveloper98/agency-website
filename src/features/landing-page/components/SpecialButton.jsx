import React from "react";
import { Link } from "react-router-dom";

const SpecialButton = () => {
  return (
    <button className="launch-ai-btn relative overflow-hidden bg-gradient-to-br from-[#a6e800] to-[var(--primary-color)] text-black px-6 py-3 rounded-md shadow-xl">
      {/* Glow Layer */}
      <span className="absolute inset-0 bg-[#b8ff03] opacity-30 blur-2xl"></span>

      {/* Shine Sweep */}
      <span className="shine"></span>

      <Link to="/bootcamp">
        <p className="relative z-10 text-sm md:text-base lg:text-lg cursor-pointer secondary-font font-bold text-white">
          Launch AI Career
        </p>
      </Link>
    </button>
  );
};

export default SpecialButton;
