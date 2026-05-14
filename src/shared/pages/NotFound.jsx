import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full secondary-font h-screen relative overflow-hidden">
      {/* Background image */}
      <picture>
        <source media="(min-width: 768px)" srcSet="/images/404.webp" />

        <img
          src="/images/404-phone.webp"
          alt="404"
          className="w-full h-screen object-cover"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="absolute text-center inset-0 z-20 flex items-center flex-col text-white justify-center pt-68 lg:pt-40 gap-6 md:gap-10">
        <div className=" text-center mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl md:max-w-4/5 font-bold shadow shadow-black/10">
            You’ve Entered the Unknown
          </h2>
        </div>
        <div className="max-w-4/5">
          <p className="text-neutral-300 md:text-lg">
            Looks like this destination was lost in space and time.
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-neutral-100 text-black px-4 py-2 rounded-md font-medium cursor-pointer md:text-lg lg:text-base md:px-6 md:py-2.5 border-0 border-(--primary-color) hover:border-2 transition-all duration-200 hover:scale-105"
        >
          Take Me Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
