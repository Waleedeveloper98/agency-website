import React from "react";
import TeamUserCard from "../components/TeamUserCard";

/* ─────────────────────────────────────────────
   Team member data — swap images / details freely
───────────────────────────────────────────── */
const teamMembers = [
  {
    id: 1,
    name: "Ethan Parker",
    role: "Creative Director",
    image:
      "/images/editor1.webp",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 2,
    name: "Sophia Bennett",
    role: "Marketing Strategist",
    image:
      "/images/editor2.webp",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 3,
    name: "Liam Harrison",
    role: "Social Manager",
    image:
      "/images/editor3.webp",
    instagramUrl: "https://instagram.com",
  },
  {
    id: 4,
    name: "James Carter",
    role: "Content Lead",
    image:
      "/images/editor4.webp",
    instagramUrl: "https://instagram.com",
  },
];

/* ─────────────────────────────────────────────
   Team Section
───────────────────────────────────────────── */
const Team = () => {
  return (
    <>
      {/* ── CSS custom property for gradient end-stop ── */}
      <style>{`
        :root {
          --primary-color: #5cb800;
        }
      `}</style>

      <section id="team" className="bg-white w-full py-20 px-4 sm:px-6 lg:px-8">
        {/* Inner container */}
        <div className="max-w-[1280px] mx-auto flex flex-col">
          {/* ── Badge ── */}
          <div className="flex justify-center mb-6">
            <span
              className="
                secondary-font inline-block
                bg-white text-black shadow shadow-black/10
                text-base font-medium
                px-5 py-2 rounded-md
                tracking-wide md:text-lg
              "
            >
              Our team
            </span>
          </div>

          {/* ── Heading ── */}
          <h2
            className="
              primary-font text-black font-medium
              text-5xl px-4 sm:px-0 sm:text-5xl lg:text-7xl
              leading-tight text-center
              max-w-3xl mx-auto mb-5 md:leading-none
            "
          >
            The Editors Behind <br className="hidden sm:block" /> Every Viral
            Frame
          </h2>

          {/* ── Sub-heading ── */}
          <p
            className="
              secondary-font text-(--secondary-color)
              text-base sm:text-lg
              text-center max-w-md mx-auto
              mb-14 sm:mb-18 md:mb-24 leading-relaxed 
            "
          >
            Meet our post-production specialists, motion designers, and creative
            strategists who craft high-retention videos that don't just look
            great they perform.
          </p>

          {/* ── Cards Grid ── */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >
            {teamMembers.map((member) => (
              <TeamUserCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                instagramUrl={member.instagramUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
