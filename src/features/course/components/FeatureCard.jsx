import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useRef } from "react";

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  tag,
  price,
  featured = false,
  dark = false,
}) => {
  const cardRef = useRef(null);

  // Mouse Position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Motion
  const smoothX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
  });

  // Dynamic Glow
  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(
        220px circle at ${x}px ${y}px,
        rgba(184,255,3,0.16),
        transparent 70%
      )`
  );

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <Tilt
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      perspective={1400}
      scale={1.02}
      transitionSpeed={1200}
      gyroscope={true}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        whileHover={{
          y: -6,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className={`
          group
          relative
          h-full
          overflow-hidden
          rounded-xl
          border
          p-7
          md:p-8
          transition-all
          duration-500
          hover:border-(--primary-color)/40

          ${
            dark
              ? "bg-black border-white/10 text-white"
              : "bg-white/80 border-black/5 backdrop-blur-xl"
          }

          ${featured ? "ring-1 ring-(--primary-color)/30" : ""}
        `}
      >
        {/* Dynamic Glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background }}
        />

        {/* Border Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-xl
            border
            border-transparent
            group-hover:border-(--primary-color)/30
            transition-colors
            duration-500
          "
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Top Row */}
          <div className="flex items-start justify-between mb-8">
            {/* Icon */}
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className={`
                flex
                h-12
                w-12
                lg:h-10
                lg:w-10
                items-center
                justify-center
                rounded-xl
                border
                transition-all
                duration-500
                group-hover:scale-110

                ${
                  dark
                    ? "bg-(--primary-color) border-(--primary-color)/20 shadow-[0_10px_30px_rgba(184,255,3,0.25)]"
                    : "bg-zinc-100 border-black/5 group-hover:bg-(--primary-color)"
                }
              `}
            >
              <Icon
                size={22}
                className={dark ? "text-black" : "text-black lg:size-5"}
              />
            </motion.div>

            {/* Tag */}
            {tag && (
              <div
                className={`
                  rounded-full
                  px-3
                  py-1

                  ${dark ? "bg-white/10" : "bg-black"}
                `}
              >
                <span className="text-xs font-medium uppercase tracking-wide text-white lg:text-[10px]">
                  {tag}
                </span>
              </div>
            )}
          </div>

          {/* Price */}
          {price && (
            <div className="mb-5">
              <div className="inline-flex items-center rounded-full bg-(--primary-color)/15 px-4 py-2 border border-(--primary-color)/20">
                <span className="text-sm md:text-base lg:text-xs font-bold text-black">
                  {price}
                </span>
              </div>
            </div>
          )}

          {/* Title */}
          <h3
            className={`
              text-2xl
              md:text-[2rem]
              lg:text-2xl
              font-bold
              tracking-tight
              leading-tight
              mb-4

              ${dark ? "text-white" : "text-black"}
            `}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={`
              text-base
              md:text-lg
              lg:text-sm
              leading-relaxed

              ${dark ? "text-white/70" : "text-(--secondary-color)"}
            `}
          >
            {desc}
          </p>
        </div>

        {/* Bottom Hover Line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-(--primary-color) group-hover:w-full transition-all duration-700" />
      </motion.div>
    </Tilt>
  );
};

export default FeatureCard;