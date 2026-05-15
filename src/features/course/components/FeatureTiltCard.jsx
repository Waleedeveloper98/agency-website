import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useRef } from "react";

const FeatureTiltCard = ({ icon: Icon, label, sub, className = "" }) => {
  const cardRef = useRef(null);

  // Mouse position for radial glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const smoothX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
  });

  // Dynamic radial glow
  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(
        180px circle at ${x}px ${y}px,
        rgba(184,255,3,0.22),
        transparent 70%
      )`,
  );

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <Tilt
      tiltMaxAngleX={14}
      tiltMaxAngleY={14}
      perspective={1200}
      scale={1.02}
      transitionSpeed={1200}
      gyroscope={true}
      className={`h-full ${className}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-black/5
          p-6
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-(--primary-color)/40
          group
        "
      >
        {/* Dynamic Glow Layer */}
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
            rounded-2xl
            border
            border-transparent
            group-hover:border-(--primary-color)/30
            transition-colors
            duration-500
          "
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start">
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
            className="
              mb-4
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-white
              shadow-md
              transition-all
              duration-500
              group-hover:bg-(--primary-color)
              group-hover:shadow-[0_10px_30px_rgba(184,255,3,0.35)]
            "
          >
            <Icon
              size={26}
              className="text-black transition-transform duration-500"
            />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold tracking-tight select-none">
            {label}
          </h3>

          {/* Subtitle */}
          <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500 select-none">
            {sub}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default FeatureTiltCard;
