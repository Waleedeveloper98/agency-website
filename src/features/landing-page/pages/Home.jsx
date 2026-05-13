import React, { useEffect, useRef, useState } from "react";
import ReviewTag from "../components/ReviewTag";
import { Link } from "react-scroll";
import SpecialButton from "../components/SpecialButton";

const GRID_SIZE = 40;
const avatars = [
  "https://i.pravatar.cc/100?img=1",
  "https://i.pravatar.cc/100?img=2",
  "https://i.pravatar.cc/100?img=3",
  "https://i.pravatar.cc/100?img=4",
];

const Home = () => {
  const gridRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: -1000,
    y: -1000,
    speed: 0,
  });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e) => {
      if (!gridRef.current) return;

      const rect = gridRef.current.getBoundingClientRect();

      // Mouse position INSIDE grid container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const now = Date.now();

      const dx = x - lastX;
      const dy = y - lastY;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const time = now - lastTime || 1;

      const speed = distance / time;

      setMouse({
        x,
        y,
        speed,
      });

      lastX = x;
      lastY = y;
      lastTime = now;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cols = Math.ceil(window.innerWidth / GRID_SIZE);
  const rows = Math.ceil(window.innerHeight / GRID_SIZE);

  return (
    <section
      id="home"
      className="relative w-full pb-24 md:pb-48 md:h-screen max-h-[650px] overflow-hidden bg-white flex items-start justify-center pt-20 md:pt-14"
    >
      {/* Interactive Grid */}
      <div ref={gridRef} className="absolute inset-0 z-0">
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => {
            const x = col * GRID_SIZE;
            const y = row * GRID_SIZE;

            const distance = Math.sqrt((mouse.x - x) ** 2 + (mouse.y - y) ** 2);

            // Small radius normally
            // Slightly bigger when moving fast
            const radius = 20 + mouse.speed * 25;

            const active = distance < radius;

            return (
              <div
                key={`${row}-${col}`}
                className="absolute border border-gray-200/30 transition-colors duration-150"
                style={{
                  width: GRID_SIZE,
                  height: GRID_SIZE,
                  left: x,
                  top: y,
                  backgroundColor: active
                    ? "rgba(163,230,53,0.35)"
                    : "transparent",
                }}
              />
            );
          }),
        )}
      </div>

      {/* Center Fade */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle at center, transparent 15%, white 75%)",
        }}
      />

      {/* Content */}
      <div className="relative primary-font z-10 text-center px-15  flex flex-col items-center gap-8">
        {/* reviews */}
        <ReviewTag
          images={avatars}
          maxVisible={3}
          rating="5/5"
          text="Happy Clients"
        />
        {/* heading */}
        <div className="flex flex-col md:gap-2 select-none">
          <div className="max-w-5/5 mx-auto">
            <h1 className="text-5xl font-medium sm:text-5xl md:text-6xl lg:text-8xl  font-bold pointer-events-none text-shadow-black/10 text-shadow-lg md:leading-20">
              We Edit Videos
            </h1>
          </div>
          <div className="max-w-5/5 mx-auto flex  items-center gap-3">
            <h1 className="text-5xl font-medium sm:text-5xl md:text-6xl lg:text-8xl font-bold pointer-events-none text-shadow-black/10 text-shadow-lg md:leading-20">
              Build
            </h1>
            <h1 className="secondary-font italic font-extralight text-4xl md:text-6xl lg:text-7xl">
              Audience
            </h1>
          </div>
        </div>
        {/* subheading */}
        <div className="max-w-xl">
          <p className="pointer-events-none secondary-font text-(--secondary-color) text-xs sm:text-base">
            We edit your videos into scroll-stopping, high-retention content so
            you can focus on creating while we handle the rest.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <SpecialButton />
          <button className="bg-neutral-50/50 text-black px-6 py-3 hover:scale-105 transition-all duration-300 rounded-md shadow shadow-black/10">
            <Link to="contact" smooth={true} duration={900} offset={200}>
              <p className="text-sm md:text-base lg:text-lg cursor-pointer secondary-font font-semibold">
                Get Free Consultation
              </p>
            </Link>
          </button>
        </div>

        {/* arrows icons */}
        <img
          className="absolute right-14 size-13 bottom-5 md:size-20 md:-bottom-28 md:left-18 rotate-90 md:rotate-180 lg:-left-5 lg:bottom-12 lg:-rotate-85"
          src="./icons/arrow.svg"
          alt="arrow"
        />
      </div>
    </section>
  );
};

export default Home;
