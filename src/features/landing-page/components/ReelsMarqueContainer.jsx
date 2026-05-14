import React from "react";

const images = [
  "/images/reel1.webp",
  "/images/reel2.webp",
  "/images/reel3.webp",
];

const tiled = [...images, ...images, ...images, ...images];

const Column = ({ reverse = false, offset = "" }) => {
  return (
    <div
      className={`
        relative flex flex-col gap-3
        rotate-x-30 transform-style-preserve-3d
        shrink-0 
        ${offset}
      `}
    >
      <div
        className={`flex flex-col gap-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {tiled.map((img, i) => (
          <div
            key={i}
            className="
              overflow-hidden rounded-2xl
              w-[90px] h-[140px]
              sm:w-[120px] sm:h-[180px]
              md:w-[150px] md:h-[220px]
              lg:w-[170px] lg:h-[250px]
              xl:w-[190px] xl:h-[280px]
            "
          >
            <img
              className="w-full h-full object-cover block"
              src={img}
              alt={img + i}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ReelsMarqueContainer = () => {
  return (
    <div className="h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-4 bg-white relative perspective-[1200px] overflow-hidden px-2 max-h-[650px]">
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 md:h-40 bg-gradient-to-b from-white to-transparent z-10" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-40 bg-gradient-to-t from-white to-transparent z-10" />

      <Column offset="-translate-y-20" />
      <Column reverse offset="translate-y-10" />
      <Column offset="translate-y-24" />
      <Column reverse offset="-translate-y-25" />
    </div>
  );
};

export default ReelsMarqueContainer;
