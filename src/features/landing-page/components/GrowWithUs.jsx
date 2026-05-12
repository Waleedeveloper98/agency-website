import React from "react";

const GrowWithUs = () => {
  return (
    <section
      className="
        relative w-full bg-white overflow-hidden
        min-h-[520px] flex items-center justify-center
        py-20 px-6
      "
    >
      {/* ── subtle radial glow in centre to lift the section off flat white ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(166,232,0,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ══════════════════════════════════════════
          LEFT image card — tilts counter-clockwise
      ══════════════════════════════════════════ */}
      <div
        aria-hidden
        className="
          pointer-events-none hidden md:block select-none
          absolute left-0 bottom-0
          md:w-[210px] lg:w-[250px]
          -translate-x-6 translate-y-4
        "
        style={{
          transform: "translateX(-18px) translateY(16px) rotate(-8deg)",
        }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[9/14]">
          <img
            src="./images/grow2.webp"
            alt="Campaign visual 1"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          RIGHT image card — tilts clockwise
      ══════════════════════════════════════════ */}
      <div
        aria-hidden
        className="
          pointer-events-none hidden md:block select-none
          absolute right-0 bottom-0
          md:w-[210px] lg:w-[250px]
          translate-x-6 translate-y-4
        "
        style={{ transform: "translateX(18px) translateY(16px) rotate(8deg)" }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[9/14]">
          <img
            src="./images/grow1.webp"
            alt="Campaign visual 2"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CENTRE content
      ══════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[600px] mx-auto">
        {/* Heading */}
        <h1
          className="
            primary-font text-black font-medium
            text-4xl sm:text-5xl lg:text-7xl
            leading-[1.08] mb-5
          "
        >
          Your Next Video
          <br />
          Could Change Everything
        </h1>

        {/* Sub-copy */}
        <p
          className="
            secondary-font text-gray-500
            text-base sm:text-lg leading-relaxed
            max-w-[420px] md:px-10 mb-8
          "
        >
          Partner with Zainx Media today and let us handle the edit while you focus on what you do best creating.
        </p>

        {/* CTA row */}
        <div className="">
          {/* Primary gradient button */}
          <a
            href="#contact"
            className="
              secondary-font inline-flex items-center justify-center
              px-7 py-3 rounded-full
              text-white font-bold text-sm md:text-lg
              cursor-pointer select-none
              transition-all duration-300
              hover:shadow-[0_0_22px_6px_rgba(166,232,0,0.4)]
              hover:scale-[1.04]
              active:scale-[0.97]
            "
            style={{
              background:
                "linear-gradient(135deg, #a6e800 0%, var(--primary-color, #5cb800) 100%)",
            }}
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default GrowWithUs;
