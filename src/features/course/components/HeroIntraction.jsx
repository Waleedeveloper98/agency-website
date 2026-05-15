import { Brain, Sparkles, Zap, Cpu, Wand2, Star } from "lucide-react";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Each icon card has its own parallax + float animation
const FloatingIcon = ({
  Icon,
  size = 24,
  strength = 30,
  delay = 0,
  rotate = 0,
  className = "",
  iconClassName = "",
  cardStyle = "default", // "default" | "filled" | "ghost"
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 22 });

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
      "bg-white/80 border border-white/60 text-(--primary-color) shadow-[0_8px_32px_rgba(0,0,0,0.10)]",
    filled:
      "bg-(--primary-color) border border-(--primary-color)/20 text-black shadow-[0_8px_32px_rgba(184,255,3,0.25)]",
    ghost:
      "bg-white/40 border border-white/30 text-(--primary-color) shadow-[0_4px_16px_rgba(0,0,0,0.06)]",
  };

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.4, rotate: rotate - 10 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: rotate,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay, type: "spring", bounce: 0.4 },
        rotate: { duration: 0.6, delay },
        y: {
          duration: 3.5 + delay * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.8,
        },
      }}
      style={{ x: springX, y: springY }}
    >
      <div
        className={`
          p-3 rounded-2xl backdrop-blur-xl
          ${cardStyles[cardStyle]}
          ${iconClassName}
        `}
      >
        <Icon size={size} strokeWidth={1.8} />
      </div>
    </motion.div>
  );
};

// Small decorative dot cluster
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
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
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

// Subtle ring decoration
const GlowRing = ({ className = "", delay = 0 }) => (
  <motion.div
    className={`absolute ${className} pointer-events-none`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, delay }}
  >
    <motion.div
      className="w-20 h-20 rounded-full border border-(--primary-color)/20"
      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute inset-3 rounded-full border border-(--primary-color)/30"
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
  </motion.div>
);

const HeroInteraction = () => {
  return (
    // Hidden on mobile (sm), visible from lg breakpoint up
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden hidden lg:block">
      
      {/* ── LEFT SIDE ── */}

      {/* Primary icon — top-left, large, filled card */}
      <FloatingIcon
        Icon={Brain}
        size={28}
        strength={22}
        delay={0.2}
        rotate={-8}
        cardStyle="default"
        className="top-[13%] left-[16%]"
      />

      {/* Secondary icon — mid-left, filled accent card */}
      <FloatingIcon
        Icon={Cpu}
        size={22}
        strength={32}
        delay={0.45}
        rotate={6}
        cardStyle="filled"
        className="top-[42%] left-[10%]"
      />

      {/* Dot cluster — left */}
      <DotCluster className="top-[38%] left-[4%]" delay={0.7} />

      {/* Glow ring — left */}
      <GlowRing className="top-[20%] left-[5%]" delay={0.9} />


      {/* ── RIGHT SIDE ── */}

      {/* Primary icon — top-right, ghost card */}
      <FloatingIcon
        Icon={Wand2}
        size={26}
        strength={28}
        delay={0.3}
        rotate={10}
        cardStyle="ghost"
        className="top-[18%] right-[16%]"
      />

      {/* Secondary icon — mid-right, filled accent */}
      <FloatingIcon
        Icon={Sparkles}
        size={22}
        strength={36}
        delay={0.55}
        rotate={-5}
        cardStyle="filled"
        className="top-[45%] right-[12%]"
      />


      {/* Dot cluster — right */}
      <DotCluster className="top-[34%] right-[3%]" delay={0.6} />

    </div>
  );
};

export default HeroInteraction;