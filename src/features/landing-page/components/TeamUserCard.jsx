import React from "react";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TeamUserCard = ({ name, role, image, instagramUrl = "#" }) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-md cursor-pointer
        aspect-[3/4]
        transition-all duration-400 ease-out
        hover:-translate-y-3
        hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]
      "
    >
      {/* ── Full-bleed image — fills entire card, no cropping box ── */}
      <img
        src={image}
        alt={name}
        className="
          absolute inset-0 w-full h-full object-cover object-top
          transition-transform duration-500 ease-out
          group-hover:scale-110
        "
        loading="lazy"
      />

      {/* ── Gradient scrim — only darkens bottom third, top stays clear ── */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "52%",
          background:
            "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.75) 45%, transparent 100%)",
        }}
      />

      {/* ── Text + button pinned to the bottom ── */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 px-5 pt-4 pb-5">
        <h3 className="secondary-font text-white font-bold text-xl leading-tight drop-shadow">
          {name}
        </h3>
        <p className="secondary-font text-gray-400 text-sm">{role}</p>

        {/* ── CTA button ── */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-3 inline-flex items-center gap-2
            px-4 py-2 rounded-md
            text-white font-semibold text-sm cursor-pointer
            transition-all duration-300 ease-out
            hover:shadow-[0_0_18px_4px_rgba(166,232,0,0.45)]
            hover:scale-[1.04]
            active:scale-[0.97]
            w-fit
          "
          style={{
            background:
              "linear-gradient(135deg, #a6e800 0%, var(--primary-color, #5cb800) 100%)",
          }}
        >
          <InstagramIcon />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default TeamUserCard;