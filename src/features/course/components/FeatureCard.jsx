import { motion } from "framer-motion";

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  tag,
  price,
  featured = false,
  dark = false,
}) => {
  return (
    <motion.div
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
        shadow-lg
        transition-all
        duration-500
        hover:shadow-2xl
        hover:border-(--primary-color)/30
        
        ${
          dark
            ? "bg-black border-(--primary-color)/20 text-white"
            : "bg-white/80 border-black/5 backdrop-blur-xl"
        }

        ${featured ? "ring-1 ring-(--primary-color)/30" : ""}
      `}
    >
      {/* Glow */}
      <div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
          ${
            dark
              ? "bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.18),transparent_70%)]"
              : "bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.12),transparent_70%)]"
          }
        `}
      />

      {/* Top Row */}
      <div className="relative z-10 flex items-start justify-between mb-8">
        {/* Icon */}
        <div
          className={`
            flex
            h-12
            w-12
            lg:h-10
            lg:w-10
            items-center
            justify-center
            rounded-xl
            lg:rounded-lg
            border
            transition-all
            duration-500
            group-hover:scale-110

            ${
              dark
                ? "bg-(--primary-color) border-(--primary-color)/20"
                : "bg-zinc-100 border-black/5 group-hover:bg-(--primary-color)"
            }
          `}
        >
          <Icon
            size={22}
            className={dark ? "text-black" : "text-black lg:size-5"}
          />
        </div>

        {/* Tag */}
        {tag && (
          <div
            className={`
              rounded-full px-3 py-1

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
        <div className="relative z-10 mb-5">
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
          relative z-10
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
          relative z-10
          text-base
          md:text-lg
          lg:text-sm
          leading-relaxed

          ${dark ? "text-white/70" : "text-(--secondary-color)"}
        `}
      >
        {desc}
      </p>

      {/* Bottom Hover Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-(--primary-color) group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
};

export default FeatureCard;
