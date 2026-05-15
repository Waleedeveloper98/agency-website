import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Floating AI Tool Card
const FloatingIcon = ({
  image,
  size = 80,
  strength = 30,
  delay = 0,
  rotate = 0,
  className = "",
  iconClassName = "",
  cardStyle = "default",
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 90,
    damping: 22,
  });

  const springY = useSpring(mouseY, {
    stiffness: 90,
    damping: 22,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      mouseX.set((e.clientX / innerWidth - 0.5) * strength);

      mouseY.set((e.clientY / innerHeight - 0.5) * strength);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength]);

  const cardStyles = {
    default:
      "bg-white/80 border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.10)]",

    filled: "bg-white shadow-[0_16px_50px_rgba(0,0,0,0.14)]",

    ghost:
      "bg-white/40 border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
  };

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{
        opacity: 0,
        scale: 0.4,
        rotate: rotate - 10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },

        scale: {
          duration: 0.6,
          delay,
          type: "spring",
          bounce: 0.4,
        },

        rotate: {
          duration: 0.6,
          delay,
        },

        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5,
        },
      }}
      style={{
        x: springX,
        y: springY,
      }}
    >
      <div
        className={`
          rounded-md
          overflow-hidden
          p-0
          ${cardStyles[cardStyle]}
          ${iconClassName}
        `}
      >
        <img
          src={image}
          alt=""
          className="
            object-cover
            rounded-2xl
            drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]
            transition-all
            duration-500
          "
          style={{
            width: size,
            height: size,
          }}
        />
      </div>
    </motion.div>
  );
};

// Decorative Dot Cluster
const DotCluster = ({ className = "", delay = 0 }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay }}
  >
    <div className="grid grid-cols-3 gap-1.5">
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 h-1 rounded-full bg-(--primary-color)/40"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  </motion.div>
);

// Glow Rings
const GlowRing = ({ className = "", delay = 0 }) => (
  <motion.div
    className={`absolute ${className} pointer-events-none`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, delay }}
  >
    <motion.div
      className="w-20 h-20 rounded-full border border-(--primary-color)/20"
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    <motion.div
      className="absolute inset-3 rounded-full border border-(--primary-color)/30"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    />
  </motion.div>
);

const HeroInteraction = () => {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden hidden lg:block">
      {/* LEFT SIDE */}

      <FloatingIcon
        image="/images/kling.avif"
        size={60}
        strength={22}
        delay={0.2}
        rotate={-8}
        cardStyle="default"
        className="top-[13%] left-[16%]"
      />

      <FloatingIcon
        image="/images/midjourney.avif"
        size={72}
        strength={32}
        delay={0.45}
        rotate={6}
        cardStyle="filled"
        className="top-[42%] left-[10%] shadow-2xl shadow-black/10"
      />

      <DotCluster className="top-[38%] left-[4%]" delay={0.7} />

      <GlowRing className="top-[20%] left-[5%]" delay={0.9} />

      {/* RIGHT SIDE */}

      <FloatingIcon
        image="/images/veo3.avif"
        size={54}
        strength={28}
        delay={0.3}
        rotate={10}
        cardStyle="ghost"
        className="top-[18%] right-[16%]"
      />

      <FloatingIcon
        image="/images/higgsfield.avif"
        size={74}
        strength={36}
        delay={0.55}
        rotate={-5}
        cardStyle="filled"
        className="top-[45%] right-[12%] rounded-full"
      />

      <DotCluster className="top-[34%] right-[3%]" delay={0.6} />
    </div>
  );
};

export default HeroInteraction;
